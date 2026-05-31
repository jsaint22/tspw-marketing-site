import type { Metadata } from "next";
import IntakeForm from "./IntakeForm";

export const metadata: Metadata = {
  title: "Player Intake | Top Shelf Private Wealth",
  description:
    "Confidential intake form for professional hockey players engaging Top Shelf Private Wealth.",
  robots: { index: false, follow: false },
};

export default function IntakePage() {
  return (
    <main className="min-h-screen bg-neutral-bg">
      <header className="bg-primary py-10 sm:py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-secondary font-semibold text-xs uppercase tracking-wider mb-3">
            Player Intake
          </p>
          {/* VOICE-LOCK: TSPW intake form headline — Window 6.5 (2026-05-30) DEFERRED.
              No direct Batch 1 canon backing for headline copy; current placeholder is
              non-anti-pattern (sophisticated, direct, no jargon-stack). Flagged for
              Phase 3/5 follow-up per voice-library-phase-1-2026-05-28.md deferred batches. */}
          <h1 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
            Tell us about your situation.
          </h1>
          {/* Voice attested 2026-05-30 (Window 6.5): EXTRAPOLATION from DNA #1 collaborative
              pronouns + Opening Faceoff frame. Substantiation: process description only. */}
          <p className="mt-4 text-base sm:text-lg text-white/70 max-w-2xl mx-auto">
            This stays between us. Your answers help us prepare for the Opening Faceoff &mdash;
            and decide together whether this is a fit.
          </p>
        </div>
      </header>

      <section className="py-8 sm:py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <IntakeForm />
        </div>
      </section>
    </main>
  );
}
