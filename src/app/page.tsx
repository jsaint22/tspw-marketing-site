import Link from "next/link";
import Image from "next/image";
import CTASection from "@/components/CTASection";
import SectionHeading from "@/components/SectionHeading";

const BOOKING_URL =
  "https://links.topshelfprivatewealth.com/widget/bookings/opening-faceoff";

const tiers = [
  {
    name: "Rookie Foundations",
    range: "Under $500K career earnings",
    price: "~$12,500/year",
    features: [
      "First-contract financial playbook",
      "Tax strategy & jock tax planning",
      "Insurance & risk review",
      "Budget & cash flow system",
      "Career transition groundwork",
    ],
  },
  {
    name: "Pro Advisory",
    range: "$500K–$10M career earnings",
    price: "~$35,000/year",
    featured: true,
    features: [
      "Everything in Rookie Foundations",
      "Cross-border US-Canada tax planning",
      "Investment management & allocation",
      "Contract review coordination",
      "Estate planning & family protection",
      "Real estate & business ventures",
    ],
  },
  {
    name: "Elite Family Office",
    range: "$10M+ career earnings",
    price: "Bespoke",
    features: [
      "Everything in Pro Advisory",
      "Dedicated family office coordination",
      "Multi-entity tax optimization",
      "Philanthropy & foundation strategy",
      "Post-career business incubation",
      "Legacy & generational wealth design",
    ],
  },
];

const partnerTools = [
  { name: "Altruist", desc: "Custody & cross-border capability" },
  { name: "RightCapital", desc: "Comprehensive financial planning" },
  { name: "Holistiplan", desc: "Tax analysis & strategy" },
  { name: "Monarch Money", desc: "Cash flow & budgeting" },
  { name: "Sequence", desc: "Financial life planning" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <p className="text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
                Flat-Fee Fiduciary Advisory for Hockey Players
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Your career is shorter than you think.{" "}
                <span className="text-secondary">Your window to act is now.</span>
              </h1>
              <p className="mt-6 text-lg text-white/70 leading-relaxed max-w-xl">
                The only flat-fee fiduciary advisory firm built exclusively for
                professional hockey players. No AUM fees. No conflicts. Just a
                financial plan built around a career that demands urgency.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3.5 bg-secondary text-primary font-semibold rounded-lg hover:bg-secondary/90 transition-colors text-center"
                >
                  Book Your Opening Faceoff
                </a>
                <Link
                  href="/pricing"
                  className="px-8 py-3.5 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/5 transition-colors text-center"
                >
                  See Pricing
                </Link>
              </div>
            </div>
            <div className="relative flex justify-center">
              <div className="w-72 h-72 sm:w-80 sm:h-80 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                <Image
                  src="/brand/tspw-logo.png"
                  alt="Top Shelf Private Wealth"
                  width={280}
                  height={280}
                  className="w-56 h-56 sm:w-64 sm:h-64 object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The problem */}
      <section className="bg-neutral-bg py-10 sm:py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeading
            eyebrow="The Gap in the Industry"
            title="Your agent protects your contract. Nobody's protecting your money."
          />
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                stat: "10–15 years",
                desc: "Average hockey career. You earn in a decade what most people earn over forty.",
              },
              {
                stat: "78%",
                desc: "Of professional athletes face financial difficulty within five years of retirement. The system is failing players.",
              },
              {
                stat: "$0",
                desc: "The amount most players' advisors know about jock tax, cross-border treaties, or CBA provisions.",
              },
            ].map((item) => (
              <div
                key={item.stat}
                className="bg-white rounded-xl p-6 border border-neutral-bg"
              >
                <p className="text-3xl font-bold text-primary">{item.stat}</p>
                <p className="mt-2 text-sm text-neutral-dark/70 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-xs text-steel italic">
            * Statistics cited for illustrative purposes. Actual rates vary by source and methodology. Consult primary research for current data.
          </p>
        </div>
      </section>

      {/* Tier cards */}
      <section className="bg-white py-10 sm:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Your Advisory Tier"
            title="One flat fee. Every service included. No AUM. No surprises."
            subtitle="Your agent doesn't take 1% of your contract. Why does your advisor take 1% of your net worth?"
          />
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={`rounded-xl p-6 sm:p-8 border ${
                  tier.featured
                    ? "border-secondary bg-primary text-white ring-2 ring-secondary"
                    : "border-neutral-bg bg-neutral-bg"
                }`}
              >
                {tier.featured && (
                  <span className="inline-block px-3 py-1 bg-secondary text-primary text-xs font-bold rounded-full mb-4 uppercase tracking-wider">
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
                <p
                  className={`text-3xl font-bold mt-4 ${
                    tier.featured ? "text-secondary" : "text-primary"
                  }`}
                >
                  {tier.price}
                </p>
                <ul className="mt-6 space-y-3">
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

      {/* Why this exists */}
      <section className="bg-neutral-bg py-10 sm:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <SectionHeading
                eyebrow="Why This Exists"
                title="I left Fidelity because the system wasn't built for clients. Then I built something that is."
                centered={false}
              />
              <div className="mt-6 space-y-4 text-neutral-dark/70 leading-relaxed">
                <p>
                  I watched advisors take off their fiduciary hat and put on their
                  sales hat in the same conversation. It&apos;s legal. Nobody talks
                  about it. That&apos;s the problem.
                </p>
                <p>
                  I grew up with a rink in my front yard in Litchfield, New Hampshire.
                  I play beer league hockey in Lake Tahoe. I know this world because
                  I&apos;ve lived in it my entire life.
                </p>
                <p>
                  Hockey players have been taken advantage of by the financial industry
                  for too long. A fiduciary built exclusively for them didn&apos;t exist.
                  Now it does.
                </p>
              </div>
              <Link
                href="/about"
                className="inline-block mt-6 text-primary font-semibold hover:text-secondary transition-colors"
              >
                Read Josh&apos;s full story &rarr;
              </Link>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-neutral-bg">
              <h3 className="text-lg font-bold text-primary mb-4">
                Joshua St. Laurent
              </h3>
              <p className="text-sm text-steel mb-4">
                CFP&reg; &middot; CFT&trade; &middot; APFC&reg; &middot; ACC
                &middot; MS Financial Life Planning
              </p>
              <ul className="space-y-3 text-sm text-neutral-dark/70">
                <li className="flex items-start gap-2">
                  <span className="text-secondary font-bold">01</span>
                  Left Fidelity to build an advisory firm that actually serves clients
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary font-bold">02</span>
                  Master&apos;s in Financial Life Planning from Golden Gate University
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary font-bold">03</span>
                  Founded Wealth In Yourself &mdash; flat-fee fiduciary for entrepreneurs
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary font-bold">04</span>
                  Built Top Shelf Private Wealth for the players who need it most
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Partner ecosystem */}
      <section className="bg-white py-10 sm:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Your Planning Ecosystem"
            title="Institutional-grade tools. Personally coordinated."
            subtitle="The same technology powering top advisory firms, configured specifically for the financial complexity hockey players face."
          />
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {partnerTools.map((tool) => (
              <div
                key={tool.name}
                className="bg-neutral-bg rounded-xl p-4 text-center border border-neutral-bg"
              >
                <p className="font-bold text-primary text-sm">{tool.name}</p>
                <p className="text-xs text-steel mt-1">{tool.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Email capture */}
      <section className="bg-ice py-10 sm:py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeading
            eyebrow="Free Resource"
            title="The Hockey Money Playbook"
            subtitle="The financial fundamentals every professional hockey player needs to know — from your first contract to your last season. No jargon. No sales pitch."
          />
          <div className="mt-8 bg-white rounded-xl p-6 sm:p-8 border border-neutral-bg max-w-md mx-auto">
            <p className="text-sm text-steel mb-4">
              Coming soon. Enter your email to get notified when it drops.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-4 py-2.5 border border-neutral-bg rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-secondary"
                disabled
              />
              <button
                className="px-5 py-2.5 bg-primary text-white text-sm font-semibold rounded-lg opacity-50 cursor-not-allowed"
                disabled
              >
                Notify Me
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Case study */}
      <section className="bg-white py-10 sm:py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Case Study"
            title="What happens when someone finally protects the money."
          />
          <div className="mt-8 bg-neutral-bg rounded-2xl p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-primary font-bold">AHL</span>
              </div>
              <div>
                <p className="font-bold text-primary">Anonymized Client</p>
                <p className="text-sm text-steel">AHL Forward, 4-year career</p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              <div className="bg-white rounded-lg p-4">
                <p className="text-xs text-steel uppercase tracking-wider">Career Earnings</p>
                <p className="text-xl font-bold text-primary mt-1">$1.2M</p>
              </div>
              <div className="bg-white rounded-lg p-4">
                <p className="text-xs text-steel uppercase tracking-wider">Tax Saved (Year 1)</p>
                <p className="text-xl font-bold text-secondary mt-1">$34K</p>
              </div>
              <div className="bg-white rounded-lg p-4">
                <p className="text-xs text-steel uppercase tracking-wider">AUM Fees Avoided</p>
                <p className="text-xl font-bold text-primary mt-1">$8K/yr</p>
              </div>
            </div>
            <p className="text-sm text-neutral-dark/70 leading-relaxed">
              This player came to us after two years with a commission-based advisor
              who had never filed a jock tax return. We restructured their tax
              strategy across four states, implemented proper cross-border planning,
              and built a post-career transition plan — all for a flat fee that was
              less than what the previous advisor charged in AUM fees alone.
            </p>
            <p className="mt-4 text-xs text-steel italic">
              * Case study is anonymized and presented for illustrative purposes only.
              Individual results vary. Past results are not indicative of future performance.
            </p>
          </div>
          <p className="mt-4 text-center text-sm text-steel">
            More case studies coming soon.
          </p>
        </div>
      </section>

      <CTASection
        headline="Life-changing money should change your life."
        subtext="Book a 30-minute Opening Faceoff call. No pitch. Just a conversation about what your career earnings could actually build."
      />
    </>
  );
}
