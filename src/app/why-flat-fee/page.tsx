import type { Metadata } from "next";
import CTASection from "@/components/CTASection";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Why Flat Fee",
  description:
    "Why AUM fees are a structural conflict of interest for hockey players — and why a flat fee is the only model that makes sense for a compressed earning window.",
};

export default function WhyFlatFeePage() {
  return (
    <>
      <section className="bg-primary py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
            The Fee Model
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
            AUM fees are a structural conflict of interest dressed up as a service model.
          </h1>
          <p className="mt-6 text-lg text-white/70 max-w-2xl mx-auto">
            When your advisor&apos;s income grows as your account grows —
            regardless of your outcomes — the incentives are misaligned. Here&apos;s
            why flat fees are the only model that makes sense for hockey players.
          </p>
        </div>
      </section>

      <section className="bg-white py-10 sm:py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="The Problem"
            title="The compressed earning window makes AUM fees even more destructive."
            centered={false}
          />
          <div className="mt-6 space-y-5 text-neutral-dark/80 leading-relaxed">
            <p>
              Most people have 40 years to earn, save, and invest. You have 10 to 15.
              That compression means every dollar matters more. Every fee matters more.
              Every year of compound growth you lose to advisory fees is a year you
              can&apos;t get back.
            </p>
            <p>
              An AUM advisor charges you more as your portfolio grows — even though
              the work doesn&apos;t change. Your jock tax return is the same
              complexity at $500K as it is at $5M. Your estate plan doesn&apos;t get
              10x harder when your net worth hits 10x. But an AUM advisor charges
              you 10x more.
            </p>
          </div>

          <div className="mt-10">
            <SectionHeading
              eyebrow="The Math"
              title="What AUM fees actually cost at different career earnings levels."
              centered={false}
            />
            <div className="mt-6 space-y-4">
              {[
                {
                  career: "$2M career earnings",
                  saved: "$800K saved",
                  aum: "~$8,000/year in AUM fees",
                  flat: "~$12,500/year flat fee",
                  note: "At this level, our fee is higher — but you're getting comprehensive planning most AUM advisors won't provide for an $800K account.",
                },
                {
                  career: "$10M career earnings",
                  saved: "$4M saved",
                  aum: "~$40,000/year in AUM fees",
                  flat: "~$35,000/year flat fee",
                  note: "The crossover point. Same work, same services — but the AUM advisor charges more because your portfolio grew. We don't.",
                },
                {
                  career: "$30M career earnings",
                  saved: "$12M saved",
                  aum: "~$120,000/year in AUM fees",
                  flat: "Bespoke (still dramatically less)",
                  note: "At this level, the AUM advisor is charging $120K for the same work they do for someone with $4M. The math speaks for itself.",
                },
              ].map((item) => (
                <div
                  key={item.career}
                  className="bg-neutral-bg rounded-xl p-6 border border-neutral-bg"
                >
                  <div className="flex flex-wrap gap-4 items-baseline mb-3">
                    <h3 className="text-lg font-bold text-primary">
                      {item.career}
                    </h3>
                    <span className="text-sm text-steel">{item.saved}</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
                    <div className="bg-white rounded-lg p-3">
                      <p className="text-xs text-steel uppercase tracking-wider">
                        1% AUM Fee
                      </p>
                      <p className="text-lg font-bold text-accent-red mt-1">
                        {item.aum}
                      </p>
                    </div>
                    <div className="bg-white rounded-lg p-3">
                      <p className="text-xs text-steel uppercase tracking-wider">
                        TSPW Flat Fee
                      </p>
                      <p className="text-lg font-bold text-secondary mt-1">
                        {item.flat}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-neutral-dark/60 italic">
                    {item.note}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs text-steel italic">
              * Assumes 40% savings rate and 1% AUM fee. Actual fees vary by
              advisor. These examples are for illustrative purposes only and do
              not represent guaranteed savings. Consult a qualified financial
              advisor for advice specific to your situation.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-neutral-bg py-10 sm:py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="The Incentive"
            title="Flat fees align interests. AUM fees don't."
            centered={false}
          />
          <div className="mt-6 space-y-5 text-neutral-dark/80 leading-relaxed">
            <p>
              An AUM advisor has a financial incentive to keep your money invested
              with them — even when paying down a mortgage, funding a business, or
              buying real estate might be better for you. Every dollar that leaves
              the portfolio reduces their income.
            </p>
            <p>
              A flat-fee advisor has no such conflict. We get paid the same whether
              your portfolio is $500K or $5M. Our only incentive is to give you
              advice that actually serves your life — not advice that serves our
              revenue.
            </p>
            <p>
              Your agent doesn&apos;t take 1% of your contract. Your attorney
              doesn&apos;t take 1% of your estate. Why does your financial advisor
              take 1% of your net worth?
            </p>
          </div>
        </div>
      </section>

      <CTASection
        headline="Top shelf standards on the ice. Apply them to your money."
        subtext="Book your Opening Faceoff call. We'll show you exactly what you'd pay and how much you'd save versus AUM."
      />
    </>
  );
}
