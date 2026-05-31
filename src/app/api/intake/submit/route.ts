// =============================================================================
// /api/intake/submit — TSPW prospect intake POST handler
// =============================================================================
//
// Per references/tspw-intake-build-spec-2026-05-30.md §"/api/intake/submit":
//   1. Validate against zod schema (reject 400 on invalid)
//   2. Upstash rate-limit 5/IP/hr (reject 429 on limit hit)
//   3. Insert into client_data.tspw_prospects via service-role client
//   4. Fire Inngest event tspw/intake.submitted with prospect_id
//   5. Return { ok: true, prospect_id } — DO NOT leak any other detail
//   6. On any error: fire tspw/intake.failed with redacted error context
//
// Security:
//   - SUPABASE_SECRET_KEY bypasses RLS server-side; client never sees it
//   - Inbound POST body NEVER re-emitted on the event bus (only prospect_id)
//   - Error response never echoes user input; always generic friendly retry
//   - IP + UA captured for audit row; not surfaced in client response
//
// Compliance:
//   - Consent enforced at zod layer (both must be true)
//   - ai_opt_out flag stored verbatim (default false per D7 #4)
//   - Books-and-Records: DB trigger writes audit_log row on INSERT
// =============================================================================

import { NextResponse, type NextRequest } from "next/server";
import { ZodError } from "zod";

import { tspwIntakeSchema } from "@/lib/intake/schema";
import { getIntakeSupabaseClient } from "@/lib/intake/supabase";
import { checkIntakeRateLimit } from "@/lib/intake/ratelimit";
import {
  getInngestEmitter,
  TSPW_INTAKE_SUBMITTED_EVENT,
  TSPW_INTAKE_FAILED_EVENT,
} from "@/lib/intake/inngest";

export const runtime = "nodejs";

function extractIp(req: NextRequest): string {
  // Vercel sets x-forwarded-for; behind proxies the first value is the client.
  const xff = req.headers.get("x-forwarded-for");
  if (xff) {
    const first = xff.split(",")[0]?.trim();
    if (first) return first;
  }
  return req.headers.get("x-real-ip") ?? "0.0.0.0";
}

function emailDomain(email: string | undefined): string | null {
  if (!email) return null;
  const at = email.lastIndexOf("@");
  if (at < 0) return null;
  return email.slice(at).toLowerCase();
}

async function emitFailure(args: {
  errorClass: string;
  errorMessage: string;
  firstName: string | null;
  email: string | undefined;
  stage: "validation" | "rate_limit" | "supabase_insert" | "inngest_emit" | "unknown";
}) {
  try {
    const inngest = getInngestEmitter();
    await inngest.send({
      name: TSPW_INTAKE_FAILED_EVENT,
      data: {
        error_class: args.errorClass,
        error_message: args.errorMessage.slice(0, 500),
        prospect_first_name: args.firstName,
        email_domain: emailDomain(args.email),
        failed_at_iso: new Date().toISOString(),
        failure_stage: args.stage,
      },
    });
  } catch (emitErr) {
    // Failing to emit the failure event must not crash the handler — log only.
    console.error("[tspw-intake] failed to emit dead-letter event", emitErr);
  }
}

export async function POST(req: NextRequest) {
  const ip = extractIp(req);
  const userAgent = req.headers.get("user-agent") ?? null;
  const sourceUrl = req.headers.get("referer") ?? null;

  // -------------------------------------------------------------------------
  // 1. Parse JSON body
  // -------------------------------------------------------------------------
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    await emitFailure({
      errorClass: "MalformedJson",
      errorMessage: "Request body was not valid JSON",
      firstName: null,
      email: undefined,
      stage: "validation",
    });
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  // -------------------------------------------------------------------------
  // 2. zod validation
  // -------------------------------------------------------------------------
  let parsed;
  try {
    parsed = tspwIntakeSchema.parse(body);
  } catch (err) {
    const zerr = err instanceof ZodError ? err : null;
    const partial = (body && typeof body === "object" ? body : {}) as Record<string, unknown>;
    await emitFailure({
      errorClass: "ZodValidationError",
      errorMessage: zerr ? zerr.issues.slice(0, 3).map((i) => `${i.path.join(".")}: ${i.message}`).join("; ") : "Validation failed",
      firstName: typeof partial.first_name === "string" ? partial.first_name.slice(0, 60) : null,
      email: typeof partial.email === "string" ? partial.email : undefined,
      stage: "validation",
    });
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  // -------------------------------------------------------------------------
  // 3. Upstash rate limit (5 / IP / hour)
  // -------------------------------------------------------------------------
  try {
    const rl = await checkIntakeRateLimit(ip);
    if (!rl.allowed) {
      await emitFailure({
        errorClass: "RateLimitExceeded",
        errorMessage: `IP ${ip} exceeded 5 submissions/hour`,
        firstName: parsed.first_name,
        email: parsed.email,
        stage: "rate_limit",
      });
      return NextResponse.json({ ok: false }, { status: 429 });
    }
  } catch (rlErr) {
    // Limiter outage must not block intake — log + continue.
    console.error("[tspw-intake] rate-limit check failed; allowing", rlErr);
  }

  // -------------------------------------------------------------------------
  // 4. Insert into client_data.tspw_prospects
  // -------------------------------------------------------------------------
  let prospectId: string;
  try {
    const supabase = getIntakeSupabaseClient();
    const insertPayload: Record<string, unknown> = {
      ...parsed,
      ip_address: ip,
      user_agent: userAgent,
      source_url: parsed.source_url || sourceUrl,
    };
    // Strip empty-string fields so DB defaults / nullables apply correctly.
    for (const k of Object.keys(insertPayload)) {
      if (insertPayload[k] === "") insertPayload[k] = null;
    }
    const { data: row, error } = await supabase
      .from("tspw_prospects")
      .insert(insertPayload)
      .select("id")
      .single();

    if (error || !row) {
      throw new Error(error?.message ?? "insert returned no row");
    }
    prospectId = row.id as string;
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    console.error("[tspw-intake] supabase insert failed", msg);
    await emitFailure({
      errorClass: "SupabaseInsertError",
      errorMessage: msg,
      firstName: parsed.first_name,
      email: parsed.email,
      stage: "supabase_insert",
    });
    return NextResponse.json({ ok: false }, { status: 500 });
  }

  // -------------------------------------------------------------------------
  // 5. Fire Inngest event tspw/intake.submitted
  // -------------------------------------------------------------------------
  try {
    const inngest = getInngestEmitter();
    await inngest.send({
      name: TSPW_INTAKE_SUBMITTED_EVENT,
      data: {
        prospect_id: prospectId,
        brand: "tspw" as const,
        submitted_at_iso: new Date().toISOString(),
      },
    });
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    console.error("[tspw-intake] inngest emit failed", msg);
    await emitFailure({
      errorClass: "InngestEmitError",
      errorMessage: msg,
      firstName: parsed.first_name,
      email: parsed.email,
      stage: "inngest_emit",
    });
    // Row IS persisted — return ok so the player isn't told the submission
    // failed when it actually succeeded; the dead-letter event surfaces the
    // emit failure to Josh for manual replay.
    return NextResponse.json({ ok: true, prospect_id: prospectId });
  }

  // -------------------------------------------------------------------------
  // 6. Success
  // -------------------------------------------------------------------------
  return NextResponse.json({ ok: true, prospect_id: prospectId });
}
