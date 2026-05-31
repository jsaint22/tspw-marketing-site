// =============================================================================
// /api/quick-reply/submit — TSPW light-capture POST handler
// =============================================================================
//
// Funnel-reversal hybrid path (per `references/tspw-funnel-rework-spec-2026-05-30.md`
// §3). Cold marketing-site walk-ins who aren't ready to book a Cal.com
// Opening Faceoff yet drop a 3-5 field note. Triggers a Josh-review-draft
// soft reply.
//
// Pipeline mirrors /api/intake/submit:
//   1. Validate against zod schema (quick-reply-schema.ts)
//   2. Upstash rate-limit (reuses checkIntakeRateLimit — same 5/IP/hr limit
//      since both paths feed the same prospect inbox)
//   3. Insert row into client_data.tspw_prospects with status='light_capture'
//   4. Fire tspw/light-capture.submitted with prospect_id
//   5. Return {ok, prospect_id}
//   6. On any error: fire tspw/intake.failed (same dead-letter surface as
//      deep intake; failure_stage='supabase_insert' etc.)
//
// Security: same posture as deep intake — service-role insert, no payload
// re-emission on the event bus, generic error response, IP+UA captured for
// audit row only.
//
// Compliance:
//   - Consent enforced at zod (both must be true) — same gate as deep intake
//   - ai_opt_out captured early (SR7 Pattern 1)
//   - No factual claims about TSPW (Marketing Rule §206(4)-1 safe)
//   - Per-template attestation: LOCK-TSPW-LIGHT-CAPTURE-EMAIL-v1
//     (created with funnel-reversal commit; gates the Josh-review-draft
//     response email surface in ops-portal handler)
// =============================================================================

import { NextResponse, type NextRequest } from "next/server";
import { ZodError } from "zod";

import { tspwQuickReplySchema } from "@/lib/intake/quick-reply-schema";
import { getIntakeSupabaseClient } from "@/lib/intake/supabase";
import { checkIntakeRateLimit } from "@/lib/intake/ratelimit";
import {
  getInngestEmitter,
  TSPW_LIGHT_CAPTURE_SUBMITTED_EVENT,
  TSPW_INTAKE_FAILED_EVENT,
} from "@/lib/intake/inngest";

export const runtime = "nodejs";

function extractIp(req: NextRequest): string {
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
        error_class: `LightCapture::${args.errorClass}`,
        error_message: args.errorMessage.slice(0, 500),
        prospect_first_name: args.firstName,
        email_domain: emailDomain(args.email),
        failed_at_iso: new Date().toISOString(),
        failure_stage: args.stage,
      },
    });
  } catch (emitErr) {
    console.error("[tspw-quick-reply] failed to emit dead-letter event", emitErr);
  }
}

export async function POST(req: NextRequest) {
  const ip = extractIp(req);
  const userAgent = req.headers.get("user-agent") ?? null;
  const sourceUrl = req.headers.get("referer") ?? null;

  // 1. Parse JSON
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

  // 2. zod validation
  let parsed;
  try {
    parsed = tspwQuickReplySchema.parse(body);
  } catch (err) {
    const zerr = err instanceof ZodError ? err : null;
    const partial = (body && typeof body === "object" ? body : {}) as Record<string, unknown>;
    await emitFailure({
      errorClass: "ZodValidationError",
      errorMessage: zerr
        ? zerr.issues.slice(0, 3).map((i) => `${i.path.join(".")}: ${i.message}`).join("; ")
        : "Validation failed",
      firstName: typeof partial.first_name === "string" ? partial.first_name.slice(0, 60) : null,
      email: typeof partial.email === "string" ? partial.email : undefined,
      stage: "validation",
    });
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  // 3. Rate limit
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
    console.error("[tspw-quick-reply] rate-limit check failed; allowing", rlErr);
  }

  // 4. Insert into tspw_prospects with status='light_capture'
  let prospectId: string;
  try {
    const supabase = getIntakeSupabaseClient();
    const insertPayload: Record<string, unknown> = {
      first_name: parsed.first_name,
      last_name: parsed.first_name, // last_name is NOT NULL in schema; light capture doesn't ask for it.
      // Placeholder until deep intake fills the real value. Acceptable per
      // funnel-reversal canon — light captures get promoted on Opening Faceoff
      // and real last_name lands at deep intake time.
      email: parsed.email,
      current_team: parsed.current_team || null,
      agent_represented: parsed.agent_represented ?? null,
      preferred_time_to_chat: parsed.preferred_time_to_chat || null,
      consent_marketing_communications: parsed.consent_marketing_communications,
      consent_data_processing: parsed.consent_data_processing,
      ai_opt_out: parsed.ai_opt_out,
      status: "light_capture",
      ip_address: ip,
      user_agent: userAgent,
      source_url: sourceUrl,
    };
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
    console.error("[tspw-quick-reply] supabase insert failed", msg);
    await emitFailure({
      errorClass: "SupabaseInsertError",
      errorMessage: msg,
      firstName: parsed.first_name,
      email: parsed.email,
      stage: "supabase_insert",
    });
    return NextResponse.json({ ok: false }, { status: 500 });
  }

  // 5. Fire tspw/light-capture.submitted
  try {
    const inngest = getInngestEmitter();
    await inngest.send({
      name: TSPW_LIGHT_CAPTURE_SUBMITTED_EVENT,
      data: {
        prospect_id: prospectId,
        brand: "tspw" as const,
        submitted_at_iso: new Date().toISOString(),
      },
    });
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    console.error("[tspw-quick-reply] inngest emit failed", msg);
    await emitFailure({
      errorClass: "InngestEmitError",
      errorMessage: msg,
      firstName: parsed.first_name,
      email: parsed.email,
      stage: "inngest_emit",
    });
    return NextResponse.json({ ok: true, prospect_id: prospectId });
  }

  return NextResponse.json({ ok: true, prospect_id: prospectId });
}
