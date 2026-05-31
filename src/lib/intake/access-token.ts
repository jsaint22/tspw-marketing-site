// =============================================================================
// TSPW intake — access-token validation (funnel-reversal canon 2026-05-30)
// =============================================================================
//
// Per `references/tspw-funnel-rework-spec-2026-05-30.md` + memory
// `project_tspw_funnel_call_first_canon`: /intake is post-call only,
// gated by `?t=<opaque-random-token>` issued by ops-portal handler after
// Josh fires `tspw/opening-faceoff.completed` for the prospect.
//
// Token is an opaque random hex string (NOT JWT — simpler + no shared HMAC
// secret needed). Stored on `client_data.tspw_prospects.intake_access_token`
// with `intake_access_token_expires_at` for expiry. Validation:
//   1. Token format check (32+ hex chars; rejects obvious garbage early).
//   2. Supabase lookup by intake_access_token + expires_at > now().
//   3. Status check — prospect must be in `opening_faceoff_booked` OR newer
//      states (NOT `light_capture` / `new` — funnel order discipline).
//
// Service-role client is used for the lookup (RLS bypass needed for
// server-side validation on unauthenticated requests; the token itself is
// the authn factor).
//
// Security posture:
//   - Token entropy ≥ 128 bits (32 hex chars from crypto.randomBytes(16))
//   - Constant-time string comparison NOT required at this layer (Supabase
//     query is the lookup; no leakable timing channel)
//   - No token re-issuance after expiry — Josh fires a new
//     `tspw/opening-faceoff.completed` event to issue a fresh link
// =============================================================================

import "server-only";

import { getIntakeSupabaseClient } from "./supabase";

const TOKEN_FORMAT_RE = /^[0-9a-f]{32,}$/;

interface ProspectForIntakePage {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
}

export type TokenValidationResult =
  | { valid: true; prospect: ProspectForIntakePage }
  | { valid: false; reason: "format" | "not_found" | "expired" | "wrong_status" };

export async function validateIntakeAccessToken(
  token: string,
): Promise<TokenValidationResult> {
  // Format gate — reject obvious garbage before hitting DB
  if (!TOKEN_FORMAT_RE.test(token)) {
    return { valid: false, reason: "format" };
  }

  const supabase = getIntakeSupabaseClient();

  // Note: client is bound to client_data schema; .from() targets it directly
  const { data, error } = await supabase
    .from("tspw_prospects")
    .select(
      "id, first_name, last_name, email, status, intake_access_token_expires_at",
    )
    .eq("intake_access_token", token)
    .maybeSingle();

  if (error || !data) {
    return { valid: false, reason: "not_found" };
  }

  if (
    data.intake_access_token_expires_at &&
    new Date(data.intake_access_token_expires_at).getTime() < Date.now()
  ) {
    return { valid: false, reason: "expired" };
  }

  // Funnel-discipline gate: deep intake fills AFTER Opening Faceoff fired,
  // NOT before. `light_capture` / `new` statuses should never have a token
  // assigned anyway; this is defense-in-depth.
  const allowedStatuses = ["opening_faceoff_booked", "engaged"];
  if (!allowedStatuses.includes(data.status)) {
    return { valid: false, reason: "wrong_status" };
  }

  return {
    valid: true,
    prospect: {
      id: data.id,
      first_name: data.first_name,
      last_name: data.last_name,
      email: data.email,
    },
  };
}
