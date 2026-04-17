import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Book your Opening Faceoff call with Top Shelf Private Wealth. 30 minutes. No pitch. Just a conversation about protecting your career earnings.",
};

const BOOKING_URL =
  "https://links.topshelfprivatewealth.com/widget/bookings/opening-faceoff";

export default function ContactPage() {
  return (
    <>
      <section className="bg-primary py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
            Let&apos;s Talk
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
            Book your Opening Faceoff.
          </h1>
          <p className="mt-6 text-lg text-white/70 max-w-2xl mx-auto">
            30 minutes. No pitch. No pressure. Just a conversation about your
            situation and whether we&apos;re the right fit.
          </p>
        </div>
      </section>

      <section className="bg-white py-10 sm:py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">
                What to expect
              </h2>
              <ol className="space-y-4">
                {[
                  {
                    step: "1",
                    title: "Book the call",
                    desc: "Pick a 30-minute slot that works for you. We'll send a confirmation with a video link.",
                  },
                  {
                    step: "2",
                    title: "We listen",
                    desc: "Tell us about your career stage, financial situation, and what's on your mind. No forms. No intake questionnaire.",
                  },
                  {
                    step: "3",
                    title: "We explain the model",
                    desc: "You'll understand exactly what we do, what we charge, and whether we're the right fit — in plain language.",
                  },
                  {
                    step: "4",
                    title: "You decide",
                    desc: "No pressure. No follow-up sequence. If it's right, we move forward. If it's not, you'll still leave with value.",
                  },
                ].map((item) => (
                  <li key={item.step} className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold flex-shrink-0">
                      {item.step}
                    </span>
                    <div>
                      <p className="font-semibold text-primary">{item.title}</p>
                      <p className="text-sm text-neutral-dark/70 mt-1">
                        {item.desc}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <div className="bg-neutral-bg rounded-2xl p-6 sm:p-8 flex flex-col items-center justify-center text-center">
              <h3 className="text-xl font-bold text-primary mb-2">
                Opening Faceoff Call
              </h3>
              <p className="text-steel text-sm mb-6">
                30 minutes with Josh St. Laurent, CFP&reg;
              </p>
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors"
              >
                Book Now
              </a>
              <p className="mt-4 text-xs text-steel">
                You&apos;ll be redirected to our scheduling page.
              </p>
            </div>
          </div>

          {/* Fix 17: Call expectations */}
          <div className="mt-10 bg-neutral-bg rounded-xl p-6 sm:p-8">
            <h3 className="text-lg font-bold text-primary mb-4">
              After you book your Opening Faceoff call, you&apos;ll receive:
            </h3>
            <ul className="space-y-2 text-sm text-neutral-dark/70">
              <li className="flex items-start gap-2">
                <svg
                  className="w-5 h-5 text-primary flex-shrink-0 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Meeting details with calendar invite
              </li>
              <li className="flex items-start gap-2">
                <svg
                  className="w-5 h-5 text-primary flex-shrink-0 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                A short prep questionnaire (5 minutes)
              </li>
              <li className="flex items-start gap-2">
                <svg
                  className="w-5 h-5 text-primary flex-shrink-0 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                What to expect during our 30 minutes together
              </li>
            </ul>
            <p className="mt-4 text-sm text-neutral-dark/70 leading-relaxed">
              The first call is just a conversation. No pitch. No pressure.
              I&apos;ll ask about your situation, explain how we play the
              financial specialist position, and we&apos;ll both decide if
              it&apos;s a fit. If it&apos;s not, I&apos;ll tell you. If it is,
              we&apos;ll talk about next steps.
            </p>
          </div>

          <div className="mt-8 bg-neutral-bg rounded-xl p-6 text-center">
            <p className="text-sm text-neutral-dark/70">
              Prefer email? Reach Josh directly at{" "}
              <span className="font-semibold text-primary">
                josh@topshelfprivatewealth.com
              </span>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
