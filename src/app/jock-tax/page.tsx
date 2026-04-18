import type { Metadata } from "next";
import CTASection from "@/components/CTASection";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "The Jock Tax",
  description:
    "The jock tax is the most expensive thing nobody talks to you about. How multi-state taxation works for hockey players and why most accountants miss it.",
};

export default function JockTaxPage() {
  return (
    <>
      <section className="bg-primary py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
            Player Education
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
            The jock tax is the most expensive thing nobody talks to you about.
          </h1>
          <p className="mt-6 text-lg text-white/70 max-w-2xl mx-auto">
            Every game you play in a different state or province triggers a
            separate tax filing obligation. Most accountants don&apos;t know it
            exists. It&apos;s costing you thousands.
          </p>
        </div>
      </section>

      {/* What is it */}
      <section className="bg-white py-10 sm:py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="What It Is"
            title="A tax on every game you play away from home."
            centered={false}
          />
          <div className="mt-6 space-y-5 text-neutral-dark/80 leading-relaxed">
            <p>
              The &ldquo;jock tax&rdquo; is a colloquial term for the income tax
              that states and provinces levy on professional athletes for income
              earned within their borders. If you play a game in California,
              California wants a piece of the income you earned that day — even
              if you live in Nevada, Florida, or Alberta.
            </p>
            <p>
              For hockey players, this means filing tax returns in every state
              and province where you played a road game during the season. Most
              NHL players file in 8 to 18 state and provincial jurisdictions per
              season, depending on division alignment, cross-border travel, and
              postseason play. AHL and ECHL players face similar complexity with
              even tighter margins.
            </p>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-neutral-bg py-10 sm:py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="How It Works"
            title="The calculation most accountants get wrong."
            centered={false}
          />
          <div className="mt-6 space-y-5 text-neutral-dark/80 leading-relaxed">
            <p>
              The basic formula divides your income by &ldquo;duty days&rdquo; —
              the total number of days you were required to be available for team
              activities (games, practices, training camp, travel days). Each
              state gets a share based on the number of duty days you spent there.
            </p>
            <p>
              But the details are where it gets complicated. Different states use
              different allocation methods. Some count game days only. Some count
              all duty days. Some use a &ldquo;games played&rdquo; ratio. And
              some have de minimis thresholds that exempt athletes who earn below
              a certain amount.
            </p>
          </div>

          <div className="mt-8 bg-white rounded-xl p-6 border border-neutral-bg">
            <h3 className="text-lg font-bold text-primary mb-4">
              Example: How it adds up
            </h3>
            <div className="space-y-3 text-sm text-neutral-dark/70">
              {[
                { state: "California", rate: "High income tax", note: "Games against SJ, LA, ANA" },
                { state: "New York", rate: "High income tax + NYC surcharge", note: "Games against NYR, NYI, BUF" },
                { state: "Minnesota", rate: "High income tax", note: "Games against MIN" },
                { state: "Florida", rate: "No state income tax", note: "Games against FLA, TBL — no jock tax owed" },
                { state: "Texas", rate: "No state income tax", note: "Games against DAL — no jock tax owed" },
              ].map((item) => (
                <div
                  key={item.state}
                  className="flex flex-col sm:flex-row sm:items-center justify-between py-2 border-b border-neutral-bg/50 last:border-0"
                >
                  <div>
                    <span className="font-semibold text-primary">
                      {item.state}
                    </span>
                    <span className="text-steel text-xs ml-2">
                      ({item.rate})
                    </span>
                  </div>
                  <span className="text-xs text-steel">{item.note}</span>
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs text-steel italic">
              * Tax rates and filing requirements vary by jurisdiction and are
              subject to change. This is for educational purposes only — consult
              a qualified tax professional for current rates and filing
              requirements specific to your situation.
            </p>
          </div>
        </div>
      </section>

      {/* Why accountants miss it */}
      <section className="bg-white py-10 sm:py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="The Gap"
            title="Why most accountants miss it."
            centered={false}
          />
          <div className="mt-6 space-y-5 text-neutral-dark/80 leading-relaxed">
            <p>
              Most CPAs have never worked with a professional athlete. They
              don&apos;t know the jock tax exists, let alone how to file it
              correctly across multiple jurisdictions. The result? Missed filings,
              penalties, and overpayments that add up to thousands every year.
            </p>
            <p>
              Some states are aggressive about enforcement. They track your game
              schedule. They know when you played in their state. And if you
              didn&apos;t file, they&apos;ll come find you — with interest and
              penalties.
            </p>
            <p>
              The strategy isn&apos;t just about filing correctly. It&apos;s about
              understanding which credits offset which obligations, how your home
              state residency affects the calculation, and whether restructuring
              your compensation could reduce the total burden.
            </p>
          </div>
        </div>
      </section>

      {/* What we do */}
      <section className="bg-neutral-bg py-10 sm:py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Approach"
            title="Jock tax isn't an add-on. It's a core competency."
          />
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "Track every game and duty day across all jurisdictions",
              "File in every required state and province",
              "Maximize foreign tax credits and cross-state offsets",
              "Evaluate residency strategies to minimize total tax burden",
              "Coordinate with your CPA for a unified tax strategy",
              "Proactive planning for schedule changes and trades",
            ].map((item) => (
              <div
                key={item}
                className="flex items-start gap-2 text-sm text-neutral-dark/70 bg-white rounded-lg p-4"
              >
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
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        headline="Stop overpaying. Start with a conversation."
        subtext="Book your Opening Faceoff call. We'll walk through your jock tax situation and show you what you might be leaving on the table."
      />
    </>
  );
}
