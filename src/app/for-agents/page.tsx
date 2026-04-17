import type { Metadata } from "next";
import CTASection from "@/components/CTASection";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "For Agents",
  description:
    "A partnership model for NHLPA certified agents. You protect the contract. We protect the money. Quarterly co-branded resources and direct advisor access for your players.",
};

const BOOKING_URL =
  "https://links.topshelfprivatewealth.com/widget/bookings/opening-faceoff";

export default function ForAgentsPage() {
  return (
    <>
      <section className="bg-primary py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
            Agent Partnership Program
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
            You protect the contract.{" "}
            <span className="text-secondary">We protect the money.</span>
          </h1>
          <p className="mt-6 text-lg text-white/70 max-w-2xl mx-auto">
            Your players trust you with their careers. Give them the same level
            of protection for their finances — with a flat-fee fiduciary who
            has zero conflicts of interest.
          </p>
        </div>
      </section>

      {/* Why partner */}
      <section className="bg-white py-10 sm:py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="The Problem You See"
            title="Your players are getting bad financial advice. You know it."
            centered={false}
          />
          <div className="mt-6 space-y-5 text-neutral-dark/80 leading-relaxed">
            <p>
              You&apos;ve watched players hand their money to commission-based
              advisors who sell products instead of building plans. You&apos;ve seen
              the results — players who earned millions and ended up with nothing.
            </p>
            <p>
              You can&apos;t be the financial advisor. That&apos;s not your role.
              But you can make sure the person managing their money is actually
              working for them — not for a commission check.
            </p>
            <p>
              Top Shelf Private Wealth is a flat-fee fiduciary. No AUM. No
              commissions. No conflicts. Just comprehensive financial planning
              built for the specific complexity your players face.
            </p>
          </div>
        </div>
      </section>

      {/* Partnership tiers */}
      <section className="bg-neutral-bg py-10 sm:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Partnership Structure"
            title="Three tiers. One goal: protect the players."
          />
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                tier: "Tier 1",
                name: "Referral Partner",
                description:
                  "You refer players who need financial guidance. We provide a complimentary financial review for every referred player. No obligation, no pitch — just genuine value that makes you look good.",
                features: [
                  "Complimentary player financial review",
                  "Direct line to Josh for player questions",
                  "Quarterly market & tax update for your reference",
                ],
              },
              {
                tier: "Tier 2",
                name: "Strategic Partner",
                featured: true,
                description:
                  "Deeper collaboration. We work directly with you to coordinate financial decisions around contract negotiations, trades, and career milestones.",
                features: [
                  "Everything in Tier 1",
                  "Co-branded quarterly financial education brief",
                  "Pre-negotiation financial analysis for contract talks",
                  "Joint player onboarding process",
                  "Priority access for player questions",
                ],
              },
              {
                tier: "Tier 3",
                name: "Embedded Partner",
                description:
                  "Full integration. We function as the financial arm of your player management operation — proactive, coordinated, and always in sync with your strategy.",
                features: [
                  "Everything in Tier 2",
                  "Dedicated advisor for your entire roster",
                  "Proactive outreach to draft picks and new signings",
                  "Annual planning summit with your team",
                  "Custom reporting on player financial health",
                ],
              },
            ].map((tier) => (
              <div
                key={tier.tier}
                className={`rounded-xl p-6 sm:p-8 border ${
                  tier.featured
                    ? "border-secondary bg-primary text-white ring-2 ring-secondary"
                    : "border-white bg-white"
                }`}
              >
                <span
                  className={`text-xs font-bold uppercase tracking-wider ${
                    tier.featured ? "text-secondary" : "text-steel"
                  }`}
                >
                  {tier.tier}
                </span>
                <h3
                  className={`text-xl font-bold mt-2 ${
                    tier.featured ? "text-white" : "text-primary"
                  }`}
                >
                  {tier.name}
                </h3>
                <p
                  className={`text-sm mt-3 leading-relaxed ${
                    tier.featured ? "text-white/70" : "text-neutral-dark/60"
                  }`}
                >
                  {tier.description}
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Co-branded brief */}
      <section className="bg-white py-10 sm:py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Quarterly Resource"
            title="Co-branded financial education for your roster."
            centered={false}
          />
          <div className="mt-6 space-y-5 text-neutral-dark/80 leading-relaxed">
            <p>
              Every quarter, we produce a professionally designed financial
              education brief — covering jock tax calendar dates, common
              financial mistakes at each career stage, and practical guidance
              your players can use immediately.
            </p>
            <p>
              It&apos;s branded with your firm name alongside Top Shelf Private
              Wealth. You send it to your roster. It makes you look good — because
              you&apos;re providing value beyond contract negotiation. And it gives
              your players access to financial education they&apos;re not getting
              anywhere else.
            </p>
          </div>
        </div>
      </section>

      {/* What agents get */}
      <section className="bg-neutral-bg py-10 sm:py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="For Your Practice"
            title="What this looks like for you."
          />
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "Your players get institutional-quality financial planning",
              "You have a direct line to a fiduciary for financial questions",
              "No referral fees — zero conflicts between us",
              "Co-branded resources that add value to your client relationships",
              "Proactive planning around trades, contract years, and career transitions",
              "Peace of mind that your players' money is protected",
            ].map((item) => (
              <div
                key={item}
                className="flex items-start gap-2 text-sm text-neutral-dark/70"
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
        headline="Let's protect the players together."
        subtext="Book a call to discuss a partnership. No pitch — just a conversation about how we can work together to serve your roster."
        buttonText="Schedule a Partnership Call"
        buttonHref={BOOKING_URL}
      />
    </>
  );
}
