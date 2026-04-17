import type { Metadata } from "next";
import CTASection from "@/components/CTASection";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Comprehensive financial planning built for professional hockey players — jock tax strategy, cross-border planning, contract coordination, and post-career transition.",
};

const services = [
  {
    title: "Compressed Earning Window Planning",
    description:
      "You have 10 to 15 years to earn what most people earn over 40. Every financial decision carries more weight. We build a plan that respects that math — front-loading savings strategies, optimizing your peak earning years, and creating durability that lasts decades beyond your last game.",
    icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    title: "Cross-Border US-Canada Tax Planning",
    description:
      "Playing in both countries creates tax complexity most advisors have never seen. Treaty provisions, foreign tax credits, RRSP vs. 401(k) decisions, and currency considerations all need to work together. We coordinate it so you're not overpaying on either side of the border.",
    icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064",
  },
  {
    title: "Jock Tax Strategy",
    description:
      "Every game you play in a different state or province triggers a separate tax obligation. Most accountants don't know this exists. We track every game, every jurisdiction, and build a strategy that minimizes what you owe across all of them.",
    icon: "M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2z",
  },
  {
    title: "Contract Review Coordination",
    description:
      "Your agent negotiates the contract. We analyze the financial implications — signing bonus structures, deferred compensation, performance incentives, and how each element affects your tax picture and long-term wealth. We don't replace your agent. We make sure the money side makes sense.",
    icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
  },
  {
    title: "Post-Career Transition Planning",
    description:
      "The identity shift when hockey ends is real. The financial shift is equally dramatic — going from peak income to zero overnight. We build a transition plan that covers income replacement, health insurance, business ventures, and the psychological reality of life after the game.",
    icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
  },
  {
    title: "Insurance & Risk Management",
    description:
      "Career-ending injuries happen. Disability insurance, life insurance, and liability coverage need to be structured for the specific risks hockey players face — not the generic templates most advisors use. We build coverage that actually protects your family and your earning potential.",
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
  },
  {
    title: "Estate Planning",
    description:
      "Your estate plan needs to account for assets in multiple jurisdictions, potential dual-citizenship considerations, and the reality that wealth was built in a compressed window. Wills, trusts, beneficiary designations, and guardianship provisions — all coordinated as part of the plan.",
    icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
  },
  {
    title: "Investment Planning",
    description:
      "Low-cost, evidence-based portfolios. No proprietary products. No commissions. Your investments are custodied at Altruist, managed with your specific timeline and cross-border needs in mind. We build for the decades after hockey, not just the years during it.",
    icon: "M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z",
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="bg-primary py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
            What We Do
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
            Every service a hockey player needs. One flat fee.
          </h1>
          <p className="mt-6 text-lg text-white/70 max-w-2xl mx-auto">
            The compressed earning window changes everything. Your financial plan
            can&apos;t be the same playbook an advisor uses for a dentist. Every
            service below is built for the specific complexity hockey players face.
          </p>
        </div>
      </section>

      <section className="bg-white py-10 sm:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-neutral-bg rounded-xl p-6 sm:p-8 border border-neutral-bg"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d={service.icon}
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-primary">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm text-neutral-dark/70 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-neutral-bg py-10 sm:py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeading
            eyebrow="The Difference"
            title="This isn't a generic financial plan with a hockey stick on the cover."
          />
          <div className="mt-8 space-y-4 text-neutral-dark/70 leading-relaxed text-left max-w-2xl mx-auto">
            <p>
              Every service is built from the ground up for the specific
              financial complexity professional hockey players face. The jock
              tax isn&apos;t an add-on — it&apos;s a core competency.
              Cross-border planning isn&apos;t a referral to a Canadian
              accountant — it&apos;s integrated into every decision we make.
            </p>
            <p>
              And all of it is included in one flat fee. No AUM percentage. No
              commissions. No incentive to do anything other than what&apos;s
              right for you and your family.
            </p>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
