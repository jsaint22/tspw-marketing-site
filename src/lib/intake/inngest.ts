// =============================================================================
// TSPW intake — minimal Inngest client for emitting tspw/intake.* events
// =============================================================================
//
// The marketing site does NOT register functions — it only EMITS events.
// The functions run in ops-portal-w-tspw-intake. This client is configured
// with the same app id ("wiy-ops-portal") so events land in the same
// Inngest application bus.
//
// Required env vars in Vercel (tspw-marketing-site project):
//   INNGEST_EVENT_KEY    — write-scope event key (Inngest Cloud dashboard)
//   INNGEST_SIGNING_KEY  — only needed if this app SERVED functions; emit-
//                          only clients can omit, but Inngest SDK falls back
//                          to env detection so we set it anyway.
// =============================================================================

import "server-only";

import { Inngest } from "inngest";

let cached: Inngest | undefined;

export function getInngestEmitter(): Inngest {
  if (cached) return cached;
  cached = new Inngest({
    id: "wiy-ops-portal",
  });
  return cached;
}

export const TSPW_INTAKE_SUBMITTED_EVENT = "tspw/intake.submitted";
export const TSPW_INTAKE_FAILED_EVENT = "tspw/intake.failed";
