import type { Metadata } from "next";
import CTASection from "@/components/CTASection";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Transparent flat-fee pricing for professional hockey players. No AUM fees. No commissions. No conflicts.",
};

const BOOKING_URL =
  "https://links.topshelfprivatewealth.com/widget/bookings/opening-faceoff";

const tiers = [
  {
    name: "Call-Up",
    subtitle: "For players getting their shot. Build the foundation right.",
    range: "Total career earnings under $500K",
    price: "~$12,500",
    period: "/year",
    description:
      "For players early in their career who need a financial foundation built right from the start.",
    features: [
      "First-contract financial playbook",
      "Tax strategy & jock tax planning",
      "Insurance & risk review",
      "Budget & cash flow system",
      "Career transition groundwork",
      "Investment account setup & management",
      "Quarterly planning meetings",
    ],
  },
  {
    name: "Core Four",
    subtitle:
      "For players the team is built around. Full financial specialist on your roster.",
    range: "Total career earnings $500K\u2013$10M",
    price: "~$35,000",
    period: "/year",
    featured: true,
    description:
      "For established players navigating peak earnings, cross-border complexity, and family financial planning.",
    features: [
      "Everything in Call-Up",
      "Cross-border US-Canada tax planning",
      "Advanced investment management",
      "Contract review coordination",
      "Estate planning & family protection",
      "Real estate & business venture analysis",
      "Monthly planning meetings",
      "Direct advisor access",
    ],
  },
  {
    name: "Captain",
    subtitle:
      "For players whose legacy extends beyond the ice. Full family office coordination.",
    range: "Total career earnings $10M+",
    price: "Bespoke",
    period: "",
    description:
      "For top-earning players and their families who need full family office coordination and legacy planning.",
    features: [
      "Everything in Core Four",
      "Dedicated family office coordination",
      "Multi-entity tax optimization",
      "Philanthropy & foundation strategy",
      "Post-career business incubation",
      "Legacy & generational wealth design",
      "On-demand advisor access",
      "Coordination with attorneys, CPAs, agents",
    ],
  },
];

export default function PricingPage() {
  return (
    <>
      {/* Fix 3: New pricing hero — no "1%" comparison */}
      <section className="bg-primary py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
            Transparent Pricing
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
            One position. One flat fee. No AUM. No surprises.
          </h1>
          <p className="mt-6 text-lg text-white/70 max-w-2xl mx-auto">
            Your agent gets paid when you get paid. Your trainer gets paid for
            the work. We believe your advisor should work the same way — paid
            for the work, not a percentage of everything you&apos;ve ever built.
          </p>
        </div>
      </section>

      {/* Tier cards — Fix 4 & 5: new names, subtitle, career earnings clarification */}
      <section className="bg-white py-10 sm:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={`rounded-xl p-6 sm:p-8 border flex flex-col ${
                  tier.featured
                    ? "border-secondary bg-primary text-white ring-2 ring-secondary"
                    : "border-neutral-bg bg-neutral-bg"
                }`}
              >
                {tier.featured && (
                  <span className="inline-block px-3 py-1 bg-secondary text-primary text-xs font-bold rounded-full mb-4 uppercase tracking-wider w-fit">
                    Most Common
                  </span>
                )}
                <h3
                  className={`text-xl font-bold ${
                    tier.featured ? "text-white" : "text-primary"
                  }`}
                >
                  {tier.name}
                </h3>
                <p
                  className={`text-sm mt-1 ${
                    tier.featured ? "text-white/70" : "text-neutral-dark/60"
                  }`}
                >
                  {tier.subtitle}
                </p>
                <p
                  className={`text-xs mt-2 ${
                    tier.featured ? "text-white/50" : "text-steel"
                  }`}
                >
                  {tier.range}
                </p>
                <div className="mt-4">
                  <span
                    className={`text-4xl font-bold ${
                      tier.featured ? "text-secondary" : "text-primary"
                    }`}
                  >
                    {tier.price}
                  </span>
                  <span
                    className={`text-sm ${
                      tier.featured ? "text-white/60" : "text-steel"
                    }`}
                  >
                    {tier.period}
                  </span>
                </div>
                <p
                  className={`text-sm mt-3 ${
                    tier.featured ? "text-white/70" : "text-neutral-dark/60"
                  }`}
                >
                  {tier.description}
                </p>
                <ul className="mt-6 space-y-3 flex-1">
                  {tier.features.map((f) => (
                    <li
                      key={f}
                      className={`flex items-start gap-2 text-sm ${
                        tier.featured ? "text-white/80" : "text-neutral-dark/70"
                      }`}
                    >
                      <svg
                        className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                          tier.featured ? "text-secondary" : "text-primary"
                        }`}
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
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block mt-8 px-6 py-3 text-center font-semibold rounded-lg transition-colors ${
                    tier.featured
                      ? "bg-secondary text-primary hover:bg-secondary/90"
                      : "bg-primary text-white hover:bg-primary/90"
                  }`}
                >
                  Book Your Opening Faceoff
                </a>
              </div>
            ))}
          </div>

          {/* Career earnings tooltip */}
          <div className="mt-6 max-w-2xl mx-auto">
            <details className="bg-neutral-bg rounded-lg p-4 border border-neutral-bg">
              <summary className="text-sm font-semibold text-primary cursor-pointer">
                Why do we use total career earnings?
              </summary>
              <p className="mt-3 text-sm text-neutral-dark/70 leading-relaxed">
                We use total expected career earnings — not annual — because
                hockey careers are non-linear. Rookies have signing bonuses.
                Veterans have multi-year deals. Players get traded, called up,
                sent down. We look at your trajectory, not last year&apos;s W-2.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* Fix 8: Why Flat Fee Matters — replaces AUM math table */}
      <section className="bg-neutral-bg py-10 sm:py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Why Flat Fee"
            title="Your fee shouldn't depend on how well the team is doing."
          />
          <div className="mt-8 max-w-3xl mx-auto space-y-5 text-neutral-dark/70 leading-relaxed">
            <p>
              Most advisors charge a percentage of what they manage. 1% might
              sound small. But think about what it really means: your advisor
              gets paid more when your account grows, regardless of whether they
              actually helped.
            </p>
            <p>
              Even worse — their incentive is to keep your money in that account.
              Should you buy a rental property? Pay down your house? Start a
              business post-career? Gift to your parents? All of those decisions
              reduce what your AUM advisor earns. That&apos;s a structural
              conflict of interest baked into their model.
            </p>
            <p>
              Your trainer doesn&apos;t get paid more when you gain weight. Your
              agent doesn&apos;t get paid more when your contract drags on. Your
              advisor shouldn&apos;t get paid more when you don&apos;t optimize.
              We charge a flat fee for the work. Period.
            </p>
          </div>

          {/* Alignment scenario cards */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 border border-neutral-bg">
              <h3 className="text-base font-bold text-primary">
                Should you buy an investment property?
              </h3>
              <p className="mt-3 text-sm text-neutral-dark/70 leading-relaxed">
                AUM advisor loses fees. We don&apos;t care about your account
                balance — we care about your plan.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-neutral-bg">
              <h3 className="text-base font-bold text-primary">
                Should you pay off your mortgage?
              </h3>
              <p className="mt-3 text-sm text-neutral-dark/70 leading-relaxed">
                AUM advisor loses fees. We help you decide based on your life,
                not our billing.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-neutral-bg">
              <h3 className="text-base font-bold text-primary">
                Should you support your family back home?
              </h3>
              <p className="mt-3 text-sm text-neutral-dark/70 leading-relaxed">
                AUM advisor loses fees. We coordinate your giving without a fee
                conflict.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Fix 4: Hockey-specific pricing FAQ */}
      <section className="bg-white py-10 sm:py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Common Questions"
            title="Hockey careers don't fit in a box. Neither does our pricing."
          />
          <div className="mt-8 space-y-3">
            {[
              {
                q: "What if I'm mid-career and earnings vary wildly?",
                a: "That's exactly why we look at trajectory, not a single year. We'll talk through your contract history, where you are in your career, and where you're heading. Your tier is based on a realistic picture of total earnings — not a guess based on one season.",
              },
              {
                q: "What if I'm traded or sent down mid-season?",
                a: "Your tier doesn't change mid-season. We're on your team regardless of what jersey you're wearing. If your career trajectory changes significantly, we'll revisit at the natural checkpoint — not while you're adjusting to a new city.",
              },
              {
                q: "What if I'm between contracts?",
                a: "You still have a financial life that needs managing — maybe more than ever. We don't disappear when the income does. Between contracts is often when you need us most. Your fee stays the same because the work doesn't stop.",
              },
              {
                q: "Do I pay the same if I play in the AHL vs NHL?",
                a: "Your tier is based on total career earnings, not which league you're playing in right now. A call-up who's been in the AHL for three years has different needs than a first-rounder, and our tiers reflect that. We'll figure out the right fit together.",
              },
              {
                q: "How do you handle signing bonus years?",
                a: "Signing bonuses are part of total career earnings, but we don't penalize you for front-loaded money. A big signing bonus in year one doesn't mean you should be in a higher tier if the rest of the contract evens out. We look at the whole picture.",
              },
            ].map((item) => (
              <details
                key={item.q}
                className="bg-neutral-bg rounded-lg border border-neutral-bg"
              >
                <summary className="p-4 text-sm font-semibold text-primary cursor-pointer">
                  {item.q}
                </summary>
                <p className="px-4 pb-4 text-sm text-neutral-dark/70 leading-relaxed">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="bg-neutral-bg py-10 sm:py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeading
            eyebrow="No Hidden Costs"
            title="Every service. One fee. No surprises."
          />
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 text-left max-w-xl mx-auto">
            {[
              "Jock tax strategy & filing coordination",
              "Cross-border tax planning",
              "Investment management",
              "Insurance & risk review",
              "Estate planning coordination",
              "Contract review analysis",
              "Post-career transition plan",
              "Cash flow & budgeting",
              "Real estate analysis",
              "Direct advisor access",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 text-sm text-neutral-dark/70"
              >
                <svg
                  className="w-5 h-5 text-primary flex-shrink-0"
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
        headline="Life-changing money should change your life."
        subtext="Book your Opening Faceoff call. We'll walk through your situation, show you exactly what you'd pay, and explain how the flat-fee model works."
      />
    </>
  );
}
