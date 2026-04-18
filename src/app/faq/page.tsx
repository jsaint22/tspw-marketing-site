import type { Metadata } from "next";
import CTASection from "@/components/CTASection";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about Top Shelf Private Wealth — fees, services, jock tax, cross-border planning, and working with a flat-fee fiduciary built for hockey players.",
};

const faqCategories = [
  {
    category: "About TSPW",
    questions: [
      {
        q: "What makes TSPW different from other financial advisors?",
        a: "We're built exclusively for professional hockey players. That's not a marketing angle — it's how we're structured. Every tool, every process, every piece of planning is designed around the financial complexity hockey careers create: compressed earning windows, multi-state jock tax, cross-border US-Canada planning, and post-career transitions. We're also flat-fee and fiduciary, which means we have zero financial incentive to sell you products or keep your money on our platform.",
      },
      {
        q: "Are you a sports agent?",
        a: "No. We play a different position on your team. Your agent negotiates your contracts and protects your career. We build your financial plan, coordinate your taxes, and plan for life after hockey. Same team, different specialties. We work alongside your agent, not in place of them.",
      },
      {
        q: "Why hockey players specifically?",
        a: "Because the financial complexity hockey players face is unique — and uniquely underserved. Jock tax across multiple state and provincial jurisdictions. Cross-border US-Canada planning. A 10-15 year earning window that has to fund the next 50 years. Most advisors have never seen this. Josh grew up with a rink in his front yard and has been in the hockey world his entire life. This isn't a niche he chose — it's a world he knows.",
      },
    ],
  },
  {
    category: "Fees & Pricing",
    questions: [
      {
        q: "How does the flat fee model work?",
        a: "You pay one annual fee based on your total career earnings tier. That fee covers everything — financial planning, tax coordination, investment management, estate planning, direct advisor access. No AUM percentage. No commissions. No product sales. The fee is the fee, and the work is the work.",
      },
      {
        q: "What's included in my tier?",
        a: "Every service we offer. There's no upsell, no add-on menu. Jock tax strategy, cross-border planning, investment management, insurance review, estate planning, cash flow management, post-career planning, and direct access to Josh. The only difference between tiers is the complexity of the work — not what's included.",
      },
      {
        q: "Can my tier change over time?",
        a: "Yes. We revisit your tier each summer during off-season review — the natural time to look at the year behind and the year ahead. Contract changes, unexpected bonuses, or new family situations can trigger an earlier conversation, but the default cadence follows the hockey calendar. We don't change tiers mid-season or mid-crisis. The goal is a fair fee for the work, not a gotcha.",
      },
      {
        q: "What if my career earnings change dramatically?",
        a: "Hockey is unpredictable. That's exactly why we use total career earnings rather than annual income. If your situation changes significantly, we'll have an honest conversation about the right tier. No surprises, no fine print.",
      },
    ],
  },
  {
    category: "Tax & Cross-Border",
    questions: [
      {
        q: "What is jock tax?",
        a: "Every game you play in a different state or province triggers a separate tax obligation in that jurisdiction. Most NHL players file tax returns in 8-18 state and provincial jurisdictions per season, depending on division alignment, cross-border travel, and postseason play. Exact count varies year-to-year and by individual player. It's called the \"jock tax\" and it's the most expensive financial reality in professional hockey that most accountants have never heard of.",
      },
      {
        q: "How does cross-border US-Canada planning work?",
        a: "Players who cross the US-Canada border face tax obligations in both countries — federal, state/provincial, and sometimes local. Treaty provisions, foreign tax credits, RRSP vs. 401(k) decisions, and currency considerations all need to work together. We coordinate the full picture so you're not overpaying on either side.",
      },
      {
        q: "What states do I need to file in?",
        a: "Every state where you play a game and that state has an income tax. Most NHL players file in 8-18 state and provincial jurisdictions per season, depending on division alignment, cross-border travel, and postseason play — plus your home state, plus federal. Exact count varies year-to-year and by individual player. We track every game, every jurisdiction, and coordinate the whole thing.",
      },
      {
        q: "How do signing bonuses get taxed?",
        a: "Signing bonuses are generally taxed based on your state of residency at the time the bonus is paid — which is why residency planning matters so much in hockey. The timing and structure of a signing bonus can create significant tax planning opportunities if you're working with someone who understands the mechanics.",
      },
      {
        q: "What about escrow and CBA provisions?",
        a: "Under the current CBA, a portion of player salaries is held in escrow and may or may not be returned depending on league revenue. This affects your actual take-home pay and your tax planning. We factor escrow into every projection so the numbers reflect what you actually receive, not what the contract says on paper.",
      },
    ],
  },
  {
    category: "Contracts & Careers",
    questions: [
      {
        q: "What happens if I get traded mid-season?",
        a: "A trade changes your tax picture, your residency situation, and potentially your financial plan. We adjust everything — new state tax obligations, updated cash flow projections, housing decisions. You focus on the hockey. We handle the financial side of the move.",
      },
      {
        q: "What happens if I'm sent down to the AHL?",
        a: "Your financial life doesn't stop when you change leagues. In fact, the salary difference makes planning even more important. We adjust your cash flow, update your tax projections, and make sure you're positioned for whatever comes next — whether that's a call-up or a longer AHL stint.",
      },
      {
        q: "How do you plan for career transitions?",
        a: "We start building post-career financial architecture while the income is still flowing. That means income replacement planning, business venture analysis, investment structuring for long-term sustainability, and honest conversations about what your financial life looks like when the paychecks stop. The best time to plan for this is years before it happens.",
      },
      {
        q: "What about post-playing business ventures?",
        a: "A lot of players want to get into business after hockey — real estate, restaurants, training facilities. We help you evaluate opportunities with real financial analysis, not gut feeling. And because we're flat-fee, we have no incentive to talk you out of a good opportunity just because it moves money off our platform.",
      },
      {
        q: "How do you coordinate with my agent?",
        a: "Same team, different positions. When contract decisions have financial implications — signing bonus structure, deferred compensation, trade clauses — we provide the financial analysis to complement your agent's negotiation strategy. We're not trying to do their job. We're making sure the money side of every decision is covered.",
      },
    ],
  },
  {
    category: "Working with TSPW",
    questions: [
      {
        q: "What's the onboarding process like?",
        a: "It starts with an Opening Faceoff call — 30 minutes, no pitch. If we're both a good fit, we move into a comprehensive discovery process where we learn everything about your financial life. From there, we build your plan and start executing. Most players are fully onboarded within 2-3 weeks.",
      },
      {
        q: "How often do we meet?",
        a: "It depends on your tier and what's happening in your career. At minimum, quarterly. During busy periods — trades, contract negotiations, tax season — we're in closer contact. You always have direct access to Josh. This isn't a once-a-year check-in.",
      },
      {
        q: "How do I access my plan and documents?",
        a: "Everything lives in our secure client portal. Financial plan, tax documents, investment reports, meeting notes — all in one place, accessible anytime. We use RightCapital for comprehensive planning and Altruist for investment custody, both with client-facing dashboards.",
      },
      {
        q: "What if I need you quickly during the season?",
        a: "You have direct access. Text, email, phone. If something comes up — a trade, a financial decision, a tax question — you don't need to schedule a meeting two weeks out. We're on your team, and teammates pick up the phone.",
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <>
      <section className="bg-primary py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
            Frequently Asked Questions
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
            Your questions. Straight answers.
          </h1>
          <p className="mt-6 text-lg text-white/70 max-w-2xl mx-auto">
            No jargon. No runaround. If your question isn&apos;t here, book an
            Opening Faceoff call and ask Josh directly.
          </p>
        </div>
      </section>

      <section className="bg-white py-10 sm:py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {faqCategories.map((cat) => (
            <div key={cat.category} className="mb-10 last:mb-0">
              <SectionHeading title={cat.category} centered={false} />
              <div className="mt-4 space-y-3">
                {cat.questions.map((item) => (
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
          ))}
        </div>
      </section>

      <CTASection
        headline="Still have questions? Let's talk."
        subtext="Book a 30-minute Opening Faceoff call. No pitch. Just a conversation about your situation."
      />
    </>
  );
}
