// =============================================================================
// TSPW intake — shared zod schema (form + API + DB)
// =============================================================================
//
// Single source of truth for the 33-field intake validation surface. Mirrors
// the client_data.tspw_prospects CHECK constraints from
// ops-portal-w-tspw-intake/supabase/migrations/20260530162111_create_tspw_prospects.sql.
//
// Reused by:
//   - src/app/intake/page.tsx (react-hook-form resolver)
//   - src/app/api/intake/submit/route.ts (server-side validation)
//
// Per references/tspw-intake-build-spec-2026-05-30.md:
//   - Open-ended fields allow null (player may not have anything to add)
//   - consent_marketing_communications + consent_data_processing REQUIRED true
//   - ai_opt_out defaults false (opt-IN per D7 #4 resolution; player can opt OUT)
// =============================================================================

import { z } from "zod";

export const INCOME_RANGES = [
  "under_500k",
  "500k_1m",
  "1m_3m",
  "3m_5m",
  "5m_10m",
  "10m_plus",
] as const;

export const CONTRACT_TYPES = ["one_way", "two_way", "ELC", "standard"] as const;

export const CURRENT_ADVISOR_INTENTS = ["replace", "add", "explore"] as const;

export const tspwIntakeSchema = z.object({
  // Identity
  first_name: z.string().min(1, "First name is required").max(120),
  last_name: z.string().min(1, "Last name is required").max(120),
  email: z.string().email("Please enter a valid email").max(254),
  phone: z.string().max(40).optional().or(z.literal("")),
  birthday: z.string().optional().or(z.literal("")), // ISO date string YYYY-MM-DD
  preferred_name: z.string().max(120).optional().or(z.literal("")),

  // Hockey context
  current_league: z.string().max(120).optional().or(z.literal("")),
  current_team: z.string().max(120).optional().or(z.literal("")),
  contract_salary_annual: z
    .preprocess(
      (v) => (v === "" || v === undefined || v === null ? undefined : Number(v)),
      z.number().nonnegative().finite().optional(),
    )
    .optional(),
  contract_years_remaining: z
    .preprocess(
      (v) => (v === "" || v === undefined || v === null ? undefined : Number(v)),
      z.number().int().min(0).max(20).optional(),
    )
    .optional(),
  agent_represented: z.boolean().optional(),
  agent_name: z.string().max(200).optional().or(z.literal("")),
  // Empty-string preprocess: <select> placeholder option returns "" — coerce
  // to undefined so .optional() accepts it (zod enum() rejects "" otherwise).
  annual_hockey_income_range: z.preprocess(
    (v) => (v === "" ? undefined : v),
    z.enum(INCOME_RANGES).optional(),
  ),
  has_signing_bonuses: z.boolean().optional(),
  has_endorsement_income: z.boolean().optional(),

  // D7 gap fields
  jurisdictions_played_this_season: z.array(z.string().max(120)).max(40).optional(),
  current_escrow_pct: z
    .preprocess(
      (v) => (v === "" || v === undefined || v === null ? undefined : Number(v)),
      z.number().min(0).max(100).optional(),
    )
    .optional(),
  contract_type: z.preprocess(
    (v) => (v === "" ? undefined : v),
    z.enum(CONTRACT_TYPES).optional(),
  ),

  // Financial context
  has_existing_investment_accounts: z.boolean().optional(),
  has_property_real_estate: z.boolean().optional(),
  has_current_advisor: z.boolean().optional(),
  current_advisor_intent: z.preprocess(
    (v) => (v === "" ? undefined : v),
    z.enum(CURRENT_ADVISOR_INTENTS).optional(),
  ),
  has_accountant_tax_professional: z.boolean().optional(),
  has_existing_legal_arrangements: z.boolean().optional(),

  // Family + life
  relationship_status: z.string().max(60).optional().or(z.literal("")),
  has_children_dependents: z.boolean().optional(),
  financially_supports_family: z.boolean().optional(),

  // Insurance / planning gaps
  has_disability_injury_insurance: z.boolean().optional(),
  has_will_trust_estate_docs: z.boolean().optional(),
  has_career_ending_injury_history: z.boolean().optional(),
  has_career_ending_financial_plan: z.boolean().optional(),

  // Open-ended
  financial_success_after_hockey: z.string().max(4000).optional().or(z.literal("")),
  top_3_financial_priorities: z.string().max(4000).optional().or(z.literal("")),
  confidence_rating: z
    .preprocess(
      (v) => (v === "" || v === undefined || v === null ? undefined : Number(v)),
      z.number().int().min(1).max(5).optional(),
    )
    .optional(),
  unanswered_question: z.string().max(4000).optional().or(z.literal("")),
  other_involved_parties: z.string().max(2000).optional().or(z.literal("")),
  anything_else: z.string().max(4000).optional().or(z.literal("")),

  // Operational
  source_url: z.string().max(500).optional().or(z.literal("")),
  how_did_you_hear: z.string().max(500).optional().or(z.literal("")),
  preferred_meeting_format: z.string().max(60).optional().or(z.literal("")),

  // Consent (BOTH must be true to submit)
  consent_marketing_communications: z
    .boolean()
    .refine((v) => v === true, "Marketing communications consent is required"),
  consent_data_processing: z
    .boolean()
    .refine((v) => v === true, "Data processing consent is required"),
  ai_opt_out: z.boolean().optional().default(false),
});

export type TspwIntakeInput = z.infer<typeof tspwIntakeSchema>;
