import type { Metadata } from "next";
import IntakeForm from "./IntakeForm";
import { validateIntakeAccessToken } from "@/lib/intake/access-token";
import { TSPW_OPENING_FACEOFF_BOOKING_URL } from "@/lib/intake/constants";

export const metadata: Metadata = {
  title: "Player Intake | Top Shelf Private Wealth",
  description:
    "Confidential intake form for professional hockey players engaging Top Shelf Private Wealth.",
  robots: { index: false, follow: false },
};

// Force dynamic rendering — token validation against Supabase requires per-request
// execution. Funnel-reversal canon: /intake is post-call only, token-gated.
export const dynamic = "force-dynamic";

interface IntakePageProps {
  searchParams: Promise<{ t?: string }>;
}

export default async function IntakePage({ searchParams }: IntakePageProps) {
  const { t: token } = await searchParams;

  // Funnel reversal (per project_tspw_funnel_call_first_canon memory + rework
  // spec 2026-05-30): /intake is post-call only. Token gate validates that
  // Josh has fired tspw/opening-faceoff.completed for this prospect.
  const tokenResult = token ? await validateIntakeAccessToken(token) : null;

  if (!tokenResult || !tokenResult.valid) {
    return <PostCallGateState reason={token ? "invalid" : "no-token"} />;
  }

  return (
    <main className="min-h-screen bg-neutral-bg">
      <header className="bg-primary py-10 sm:py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-secondary font-semibold text-xs uppercase tracking-wider mb-3">
            Player Intake
          </p>
          {/* Voice attested 2026-05-30 (Window 6.5) — funnel-reversal-compatible:
              "Tell us about your situation" works equally well post-call. No
              Batch 1 canon backing for headline copy; flagged Phase 3/5. */}
          <h1 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
            Tell us about your situation.
          </h1>
          {/* Voice attested 2026-05-30 (Window 6.5) — funnel-reversal reframe:
              post-call frame. EXTRAPOLATION from DNA #1 collaborative pronouns
              + Batch 1 phrase 2 M1 Arrive "what we build on" reuse. */}
          <p className="mt-4 text-base sm:text-lg text-white/70 max-w-2xl mx-auto">
            This stays between us. Your answers help us go deeper before we start
            designing the plan.
          </p>
        </div>
      </header>

      <section className="py-8 sm:py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <IntakeForm
            prefilledFirstName={tokenResult.prospect.first_name}
            prefilledLastName={tokenResult.prospect.last_name}
            prefilledEmail={tokenResult.prospect.email}
          />
        </div>
      </section>
    </main>
  );
}

function PostCallGateState({ reason }: { reason: "no-token" | "invalid" }) {
  // Voice attested 2026-05-30 — funnel-reversal post-call gate landing state.
  // EXTRAPOLATION from DNA #10 low-pressure presence + Batch 1 Opening Faceoff
  // intro frame. No factual claims; redirects to Cal.com Opening Faceoff CTA.
  return (
    <main className="min-h-screen bg-neutral-bg">
      <header className="bg-primary py-12 sm:py-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-secondary font-semibold text-xs uppercase tracking-wider mb-3">
            Player Intake
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
            {reason === "invalid"
              ? "This link has expired or isn't valid."
              : "The intake form is sent after we talk."}
          </h1>
          <p className="mt-4 text-base sm:text-lg text-white/70 max-w-xl mx-auto">
            The Opening Faceoff is a 30-minute conversation. No pitch, just a
            conversation. After that, if it makes sense to go deeper, I&rsquo;ll
            send you the intake form with a personal link.
          </p>
        </div>
      </header>

      <section className="py-10 sm:py-14">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <a
            href={TSPW_OPENING_FACEOFF_BOOKING_URL}
            className="inline-block px-7 py-3 rounded-md bg-primary text-white text-sm font-semibold hover:bg-primary/90"
          >
            Book the Opening Faceoff &rarr;
          </a>
          <p className="mt-6 text-sm text-neutral-dark/60">
            Already had the call?{" "}
            <a href="mailto:josh@topshelfprivatewealth.com" className="underline">
              Email me
            </a>{" "}
            and I&rsquo;ll resend the intake link.
          </p>
        </div>
      </section>
    </main>
  );
}
