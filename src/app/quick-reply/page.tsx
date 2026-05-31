import type { Metadata } from "next";
import QuickReplyForm from "./QuickReplyForm";

export const metadata: Metadata = {
  title: "Drop me a line | Top Shelf Private Wealth",
  description:
    "Cold-walk-in capture form — leave a note and Josh will set up a time when you're ready.",
  robots: { index: false, follow: false },
};

export default function QuickReplyPage() {
  return (
    <main className="min-h-screen bg-neutral-bg">
      <header className="bg-primary py-10 sm:py-14">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-secondary font-semibold text-xs uppercase tracking-wider mb-3">
            Drop me a line
          </p>
          {/* Voice attested 2026-05-30 — funnel-reversal hybrid carve-out for
              cold walk-ins. EXTRAPOLATION from DNA #10 low-pressure presence +
              Batch 1 trade-day "let me know when you're ready" player-driven
              cadence. No factual claims; no outcome promises. */}
          <h1 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
            Not ready to book a call yet?
          </h1>
          <p className="mt-4 text-base sm:text-lg text-white/70 max-w-xl mx-auto">
            Drop a quick note and I&rsquo;ll set up an Opening Faceoff when
            you&rsquo;re ready. No pressure.
          </p>
        </div>
      </header>

      <section className="py-8 sm:py-12">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <QuickReplyForm />
        </div>
      </section>
    </main>
  );
}
