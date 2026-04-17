import type { Metadata } from "next";
import CTASection from "@/components/CTASection";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Cross-Border Planning",
  description:
    "US-Canada cross-border tax planning for professional hockey players. Treaty provisions, RRSP vs 401(k), currency strategies, and coordinated compliance.",
};

export default function CrossBorderPage() {
  return (
    <>
      <section className="bg-primary py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
            Cross-Border Planning
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
            Playing in both countries creates situations most advisors have never seen.
          </h1>
          <p className="mt-6 text-lg text-white/70 max-w-2xl mx-auto">
            US-Canada cross-border tax complexity is one of the most expensive
            problems hockey players face — and one of the least understood by
            the financial industry.
          </p>
        </div>
      </section>

      <section className="bg-white py-10 sm:py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="The Complexity"
            title="Two countries. Two tax systems. Zero margin for error."
            centered={false}
          />
          <div className="mt-6 space-y-5 text-neutral-dark/80 leading-relaxed">
            <p>
              If you&apos;re a Canadian playing in the US — or an American
              playing in Canada — you&apos;re subject to tax obligations in both
              countries. The US-Canada tax treaty provides relief from double
              taxation, but only if your advisor knows how to apply it correctly.
            </p>
            <p>
              Most advisors don&apos;t. They see a W-2 from an NHL team and
              treat it like any other employment income. They miss the treaty
              provisions, the foreign tax credit calculations, and the
              strategic decisions around residency, retirement accounts, and
              currency management.
            </p>
            <p>
              The result? Players pay more tax than they need to. Sometimes
              significantly more.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-neutral-bg py-10 sm:py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Key Issues"
            title="The cross-border decisions that cost players the most."
          />
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Treaty Provisions",
                desc: "The US-Canada tax treaty contains specific provisions for athletes that most tax professionals have never read. Understanding Article XV and its implications for where and how your income is taxed is foundational to getting cross-border planning right.",
              },
              {
                title: "RRSP vs. 401(k) Decisions",
                desc: "Canadian players in the US face decisions about retirement account contributions that have long-term tax implications. Contributing to the wrong account — or missing treaty-eligible contributions — can cost tens of thousands over a career.",
              },
              {
                title: "Foreign Tax Credits",
                desc: "Taxes paid in one country can offset taxes owed in the other — but only with proper documentation and filing. Missing credits means paying the same income twice. Getting them right is not optional.",
              },
              {
                title: "Residency Strategy",
                desc: "Where you establish tax residency affects your global tax burden significantly. US states without income tax, Canadian provincial rate differences, and treaty tie-breaker rules all factor into a residency strategy that needs to be deliberate, not accidental.",
              },
              {
                title: "Currency Management",
                desc: "Earning in one currency and spending or saving in another creates both risk and opportunity. Currency timing, account structuring, and exchange rate awareness need to be part of the financial plan.",
              },
              {
                title: "Trade & Transfer Implications",
                desc: "A mid-season trade from a US team to a Canadian team — or vice versa — triggers immediate cross-border tax implications that need to be addressed proactively, not discovered at filing time.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-xl p-6 border border-neutral-bg"
              >
                <h3 className="text-lg font-bold text-primary">{item.title}</h3>
                <p className="mt-2 text-sm text-neutral-dark/70 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-xs text-steel italic text-center">
            * Cross-border tax planning is complex and fact-specific. Treaty
            provisions and tax rates are subject to change. This content is for
            educational purposes only — consult a qualified cross-border tax
            professional for advice specific to your situation.
          </p>
        </div>
      </section>

      <section className="bg-white py-10 sm:py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Approach"
            title="Cross-border planning isn't a referral. It's integrated."
            centered={false}
          />
          <div className="mt-6 space-y-5 text-neutral-dark/80 leading-relaxed">
            <p>
              Most advisors who work with cross-border clients refer the tax
              work to a specialist and hope it gets coordinated. That&apos;s not
              planning. That&apos;s outsourcing.
            </p>
            <p>
              At Top Shelf Private Wealth, cross-border complexity is baked into
              every decision we make — investment account selection, retirement
              contributions, insurance structure, estate planning, and cash flow
              management. It&apos;s not an add-on. It&apos;s foundational.
            </p>
            <p>
              We coordinate with cross-border tax specialists, but we drive the
              strategy. Your financial plan doesn&apos;t get fragmented across
              multiple advisors who don&apos;t talk to each other.
            </p>
          </div>
        </div>
      </section>

      <CTASection
        headline="Your career spans borders. Your financial plan should too."
        subtext="Book your Opening Faceoff call. We'll talk through your cross-border situation and show you what coordinated planning actually looks like."
      />
    </>
  );
}
