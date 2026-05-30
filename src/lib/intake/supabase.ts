// =============================================================================
// TSPW intake — server-side Supabase client (service role bypasses RLS)
// =============================================================================
//
// Used by /api/intake/submit only. NEVER import from a Client Component —
// SUPABASE_SECRET_KEY would leak into the browser bundle.
//
// Schema is set to client_data; the API route inserts directly into
// tspw_prospects.
// =============================================================================

import "server-only";

import { createClient, type SupabaseClient } from "@supabase/supabase-js";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type IntakeSupabaseClient = SupabaseClient<any, "client_data", any>;

let cached: IntakeSupabaseClient | undefined;

export function getIntakeSupabaseClient(): IntakeSupabaseClient {
  if (cached) return cached;

  const url = process.env.SUPABASE_URL;
  // SUPABASE_SECRET_KEY is the canonical name across the WIY/TSPW stack
  // (ops-portal uses it too). Fallback to SUPABASE_SERVICE_ROLE_KEY for
  // backwards-compatibility with Vercel env configs that may have the
  // older name.
  const secret =
    process.env.SUPABASE_SECRET_KEY ?? process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url) {
    throw new Error("SUPABASE_URL is not set");
  }
  if (!secret) {
    throw new Error(
      "SUPABASE_SECRET_KEY (or SUPABASE_SERVICE_ROLE_KEY) is not set",
    );
  }

  cached = createClient(url, secret, {
    auth: { persistSession: false, autoRefreshToken: false },
    db: { schema: "client_data" },
  }) as IntakeSupabaseClient;
  return cached;
}
