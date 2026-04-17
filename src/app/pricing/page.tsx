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
    name: "Rookie Foundations",
    range: "Under $500K career earnings",
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
    name: "Pro Advisory",
    range: "$500K–$10M career earnings",
    price: "~$35,000",
    period: "/year",
    featured: true,
    description:
      "For established players navigating peak earnings, cross-border complexity, and family financial planning.",
    features: [
      "Everything in Rookie Foundations",
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
    name: "Elite Family Office",
    range: "$10M+ career earnings",
    price: "Bespoke",
    period: "",
    description:
      "For top-earning players and their families who need full family office coordination and legacy planning.",
    features: [
      "Everything in Pro Advisory",
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
      <section className="bg-primary py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
            Transparent Pricing
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
            Your agent doesn&apos;t take 1% of your contract. Why does your advisor take 1% of your net worth?
          </h1>
          <p className="mt-6 text-lg text-white/70 max-w-2xl mx-auto">
            One flat fee. Every service included. The wealthier you get, the
            less you pay as a percentage. That&apos;s how incentives should work.
          </p>
        </div>
      </section>

      {/* Tier cards */}
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
                    tier.featured ? "text-white/60" : "text-steel"
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
        </div>
      </section>

      {/* AUM comparison */}
      <section className="bg-neutral-bg py-10 sm:py-14" id="calculator">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="The Math"
            title="What 1% AUM actually costs a hockey player over a 15-year career."
          />
          <div className="mt-8 bg-white rounded-2xl p-6 sm:p-8 border border-neutral-bg">
            <p className="text-sm text-neutral-dark/70 mb-6 leading-relaxed">
              A player who earns $10M over a 15-year career, saves 40% of their
              income, and invests it at a 7% average return. Here&apos;s what 1%
              AUM costs them versus our flat fee.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-neutral-bg">
                    <th className="text-left py-3 pr-4 font-semibold text-primary">Year</th>
                    <th className="text-right py-3 px-4 font-semibold text-primary">Portfolio Value</th>
                    <th className="text-right py-3 px-4 font-semibold text-accent-red">1% AUM Fee</th>
                    <th className="text-right py-3 pl-4 font-semibold text-secondary">TSPW Flat Fee</th>
                  </tr>
                </thead>
                <tbody className="text-neutral-dark/70">
                  {[
                    { yr: 1, pv: "$267K", aum: "$2,670", flat: "$35,000" },
                    { yr: 3, pv: "$950K", aum: "$9,500", flat: "$35,000" },
                    { yr: 5, pv: "$1.8M", aum: "$18,000", flat: "$35,000" },
                    { yr: 10, pv: "$4.5M", aum: "$45,000", flat: "$35,000" },
                    { yr: 15, pv: "$8.2M", aum: "$82,000", flat: "$35,000" },
                  ].map((row) => (
                    <tr key={row.yr} className="border-b border-neutral-bg/50">
                      <td className="py-3 pr-4">{row.yr}</td>
                      <td className="py-3 px-4 text-right">{row.pv}</td>
                      <td className="py-3 px-4 text-right text-accent-red font-medium">{row.aum}</td>
                      <td className="py-3 pl-4 text-right text-secondary font-medium">{row.flat}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-neutral-bg rounded-lg p-4">
                <p className="text-xs text-steel uppercase tracking-wider">Total AUM Fees (15 years)</p>
                <p className="text-2xl font-bold text-accent-red mt-1">~$450K+</p>
              </div>
              <div className="bg-neutral-bg rounded-lg p-4">
                <p className="text-xs text-steel uppercase tracking-wider">Total TSPW Flat Fees (15 years)</p>
                <p className="text-2xl font-bold text-secondary mt-1">$525K</p>
              </div>
            </div>
            <p className="mt-4 text-xs text-steel italic">
              * Illustrative example only. Assumes $10M career earnings, 40%
              savings rate, 7% average annual return, and constant annual
              contributions. Actual portfolio values, fees, and returns will vary.
              AUM fee accumulation compounds — the true cost includes lost growth
              on fees paid. This is not a guarantee of performance or savings.
              Consult a qualified financial advisor for advice specific to your situation.
            </p>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="bg-white py-10 sm:py-14">
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
              <div key={item} className="flex items-center gap-2 text-sm text-neutral-dark/70">
                <svg className="w-5 h-5 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
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
