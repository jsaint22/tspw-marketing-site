// =============================================================================
// TSPW quick-reply (light capture) — shared zod schema
// =============================================================================
//
// Per `references/tspw-funnel-rework-spec-2026-05-30.md` §3 + memory
// `project_tspw_funnel_call_first_canon` hybrid carve-out: light 3-5 field
// capture form for cold marketing-site walk-ins not yet ready to book the
// Cal.com Opening Faceoff. Triggers a soft Josh-review-draft email back.
//
// Single source of truth for both the form (`/quick-reply`) + the API route
// (`/api/quick-reply/submit`). Mirrors a SUBSET of tspw_prospects columns;
// inserts a row with status='light_capture' (new status value added by the
// funnel-reversal migration). Promotes to status='opening_faceoff_booked'
// when Josh fires `tspw/opening-faceoff.completed` for the same prospect.
//
// Consent posture: same as deep intake (privacy + data processing required;
// AI opt-out captured at light capture so SR7 Pattern 1 gate is set early).
// =============================================================================

import { z } from "zod";

export const tspwQuickReplySchema = z.object({
  first_name: z.string().min(1, "First name is required").max(120),
  email: z.string().email("Please enter a valid email").max(254),
  current_team: z.string().max(120).optional().or(z.literal("")),
  agent_represented: z.boolean().optional(),
  preferred_time_to_chat: z.string().max(500).optional().or(z.literal("")),

  // Consent — required true; mirrors deep intake gate
  consent_data_processing: z
    .boolean()
    .refine((v) => v === true, "Please confirm data processing consent."),
  consent_marketing_communications: z
    .boolean()
    .refine((v) => v === true, "Please confirm communications consent."),
  ai_opt_out: z.boolean().default(false),
});

export type TspwQuickReplyInput = z.infer<typeof tspwQuickReplySchema>;
