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
          {/* VOICE-LOCK: TSPW intake form headline — Window 6 voice attestation pending.
              Banned register: financial-jargon. Tone match: /contact page headline. */}
          <h1 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
            Tell us about your situation.
          </h1>
          {/* VOICE-LOCK: TSPW intake form subhead — Window 6 voice attestation pending.
              Substantiation: factual process description only; no outcome promises. */}
          <p className="mt-4 text-base sm:text-lg text-white/70 max-w-2xl mx-auto">
            This stays between us. Your answers help us prepare for the conversation —
            and decide together whether we&apos;re the right fit.
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
