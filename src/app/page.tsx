import Link from "next/link";
import Image from "next/image";
import CTASection from "@/components/CTASection";
import SectionHeading from "@/components/SectionHeading";

const BOOKING_URL =
  "https://links.topshelfprivatewealth.com/widget/bookings/opening-faceoff";

const tiers = [
  {
    name: "Call-Up",
    subtitle: "For players getting their shot. Build the foundation right.",
    range: "Total career earnings under $500K",
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
    name: "Core Four",
    subtitle:
      "For players the team is built around. Full financial specialist on your roster.",
    range: "Total career earnings $500K\u2013$10M",
    price: "~$35,000/year",
    featured: true,
    features: [
      "Everything in Call-Up",
      "Cross-border US-Canada tax planning",
      "Investment management & allocation",
      "Contract review coordination",
      "Estate planning & family protection",
      "Real estate & business ventures",
    ],
  },
  {
    name: "Captain",
    subtitle:
      "For players whose legacy extends beyond the ice. Full family office coordination.",
    range: "Total career earnings $10M+",
    price: "Bespoke",
    features: [
      "Everything in Core Four",
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
  { name: "Monarch Money", desc: "Cash flow & budgeting" },
  { name: "Sequence", desc: "Financial life planning" },
  {
    name: "Cross-Border CPA Specialists",
    desc: "Partner network of CPAs with NHL/AHL experience",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero — atmospheric hockey imagery background */}
      <section className="relative bg-primary py-8 sm:py-10 lg:py-12 overflow-hidden">
        {/*
          JOSH ACTION REQUIRED: Add a hero background image.
          1. Go to Unsplash and search: "pond hockey canada", "frozen lake hockey", "outdoor hockey nets", "pond hockey dusk"
             Or try Pexels with the same search terms.
          2. Download a high-quality landscape image (at least 1920px wide).
          3. Save it as /public/brand/hero-bg.jpg
          4. Once saved, uncomment the backgroundImage line below and remove the placeholder bg-primary.

          Target aesthetic: frozen pond/lake in Canada with nets set up, no players,
          early morning or dusk lighting. Evokes pond hockey / roots of the game.
        */}
        <div
          className="absolute inset-0 bg-cover bg-center pointer-events-none"
          style={{
            /* backgroundImage: "url('/brand/hero-bg.jpg')", */
          }}
          aria-hidden="true"
        />
        {/* Dark forest green overlay for text readability */}
        <div
          className="absolute inset-0 bg-primary/60 pointer-events-none"
          aria-hidden="true"
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <p className="text-secondary font-semibold text-sm uppercase tracking-wider mb-3">
                Flat-Fee Fiduciary Advisory for Hockey Players
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Your career is shorter than you think.{" "}
                <span className="text-secondary">
                  Your window to act is now.
                </span>
              </h1>
              <p className="mt-4 text-lg text-white/80 leading-relaxed max-w-xl">
                Every elite hockey player has a team off the ice. We&apos;re the
                position that&apos;s been missing.
              </p>
              <p className="mt-3 text-base text-white/60 leading-relaxed max-w-xl">
                The only flat-fee fiduciary advisory firm built exclusively for
                professional hockey players. No AUM fees. No conflicts. Just a
                financial plan built around a career that demands urgency.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-4">
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
              <p className="mt-4 text-sm text-white/50">
                Not ready to book?{" "}
                <Link
                  href="/blog"
                  className="underline hover:text-white/70 transition-colors"
                >
                  Read the blog &rarr;
                </Link>
              </p>
            </div>
            <div className="relative flex justify-center">
              <div className="w-80 h-80 sm:w-96 sm:h-96 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                <Image
                  src="/brand/tspw-logo.png"
                  alt="Top Shelf Private Wealth"
                  width={340}
                  height={340}
                  className="w-64 h-64 sm:w-76 sm:h-76 object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fix 2: The Lineup — team-framework section */}
      <section className="bg-neutral-bg py-10 sm:py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeading
            eyebrow="The Lineup"
            title="You already have a team. We're the position that's been missing."
          />
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1: Your Agent */}
            <div className="bg-white rounded-xl p-6 border border-neutral-bg text-left">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <svg
                  className="w-5 h-5 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-primary">Your Agent</h3>
              <p className="mt-2 text-sm text-neutral-dark/70 leading-relaxed">
                <span className="font-semibold text-primary">Role:</span>{" "}
                Negotiates your contracts. Protects your career.
              </p>
              <p className="mt-2 text-sm text-neutral-dark/50 leading-relaxed italic">
                What they can&apos;t do: Build your financial plan. Coordinate
                your taxes. Plan your exit.
              </p>
            </div>

            {/* Card 2: Your Trainer / Team Staff */}
            <div className="bg-white rounded-xl p-6 border border-neutral-bg text-left">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <svg
                  className="w-5 h-5 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-primary">
                Your Trainer / Team Staff
              </h3>
              <p className="mt-2 text-sm text-neutral-dark/70 leading-relaxed">
                <span className="font-semibold text-primary">Role:</span> Keeps
                you on the ice. Protects your body.
              </p>
              <p className="mt-2 text-sm text-neutral-dark/50 leading-relaxed italic">
                What they can&apos;t do: Structure your cross-border filings.
                Plan for life after hockey.
              </p>
            </div>

            {/* Card 3: TSPW */}
            <div className="bg-primary rounded-xl p-6 border border-secondary/30 text-left ring-2 ring-secondary">
              <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center mb-4">
                <svg
                  className="w-5 h-5 text-secondary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-secondary">
                TSPW{" "}
                <span className="text-white/60 text-sm font-normal">
                  (new position)
                </span>
              </h3>
              <p className="mt-2 text-sm text-white/80 leading-relaxed">
                <span className="font-semibold text-secondary">Role:</span>{" "}
                Builds your financial plan. Coordinates your taxes. Plans your
                exit.
              </p>
              <p className="mt-2 text-sm text-white/60 leading-relaxed">
                Everything your other specialists can&apos;t. Fiduciary. Flat
                fee. Hockey-exclusive.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Fix 3 & 5: Tier cards — updated names, subtitles, career earnings language */}
      <section className="bg-white py-10 sm:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Your Advisory Tier"
            title="One flat fee. Every service included. No AUM. No surprises."
            subtitle="Your agent has a role. Your trainer has a role. Your advisor should have one too — not a piece of everything you own."
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

      {/* Fix 7: Why This Exists — rewritten with team metaphor */}
      <section className="bg-neutral-bg py-10 sm:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <SectionHeading
                eyebrow="Why This Exists"
                title="I watched the financial industry underserve hockey players for too long. Then I built the position that was missing."
                centered={false}
              />
              <div className="mt-6 space-y-4 text-neutral-dark/70 leading-relaxed">
                <p>
                  Your teammate&apos;s &ldquo;advisor&rdquo; sold him an annuity
                  because the commission was bigger. Your buddy&apos;s CPA has
                  never filed a jock tax return in his life. The &ldquo;financial
                  planner&rdquo; your agent mentioned is getting a kickback on
                  every dollar he recommends you save. I&apos;ve seen all of it.
                  I&apos;m not walking away from the industry — I&apos;m changing
                  how it works from the inside, starting with hockey players.
                </p>
                <p>
                  Here&apos;s what I realized: you already have a team off the
                  ice. Your agent negotiates. Your trainer conditions. Your coach
                  strategizes. Each one is a specialist playing one role. But
                  there was one position nobody was playing well — the financial
                  specialist.
                </p>
                <p>
                  That&apos;s why Top Shelf Private Wealth exists. Not to replace
                  anyone on your team. To play the position that&apos;s been
                  missing. Fiduciary. Flat fee. Hockey-exclusive. On your team,
                  in your corner, one role.
                </p>
                <p>
                  I grew up with a rink in my front yard in Litchfield, New
                  Hampshire. I play beer league in Lake Tahoe. I know this world
                  because I&apos;ve lived in it my entire life.
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
                  Left Fidelity after watching advisors prioritize commissions
                  over clients
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary font-bold">02</span>
                  Master&apos;s in Financial Life Planning from Golden Gate
                  University
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary font-bold">03</span>
                  Founded Wealth In Yourself &mdash; flat-fee fiduciary for
                  entrepreneurs and real estate investors
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary font-bold">04</span>
                  Built Top Shelf Private Wealth to play the position hockey
                  players have been missing
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Fix 6: Partner ecosystem — restructured, Holistiplan removed */}
      <section className="bg-white py-10 sm:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="The Equipment"
            title="Professional tools for professional careers."
            subtitle="Every specialist has their gear. Here's ours."
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

      {/* Fix 18: Case study — enhanced with team metaphor */}
      <section className="bg-neutral-bg py-10 sm:py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Case Study"
            title="What happens when the position finally gets filled."
          />
          <div className="mt-8 bg-white rounded-2xl p-6 sm:p-8">
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
              <div className="bg-neutral-bg rounded-lg p-4">
                <p className="text-xs text-steel uppercase tracking-wider">
                  Career Earnings
                </p>
                <p className="text-xl font-bold text-primary mt-1">$1.2M</p>
              </div>
              <div className="bg-neutral-bg rounded-lg p-4">
                <p className="text-xs text-steel uppercase tracking-wider">
                  Tax Saved (Year 1)
                </p>
                <p className="text-xl font-bold text-secondary mt-1">$34K</p>
              </div>
              <div className="bg-neutral-bg rounded-lg p-4">
                <p className="text-xs text-steel uppercase tracking-wider">
                  AUM Fees Avoided
                </p>
                <p className="text-xl font-bold text-primary mt-1">$8K/yr</p>
              </div>
            </div>
            <p className="text-sm text-neutral-dark/70 leading-relaxed">
              This player came to us after two years with a commission-based
              advisor who had never filed a jock tax return. The rest of his team
              — his agent, his trainers, his PT staff — was world class. The
              financial position was empty. We stepped into that role.
              Restructured tax strategy across four states. Built proper
              cross-border planning. Created a post-career transition plan. All
              for a flat fee less than what the previous advisor had charged in
              AUM alone.
            </p>
            <p className="mt-4 text-sm text-neutral-dark/70 leading-relaxed">
              This isn&apos;t a rare story. It&apos;s the story of most hockey
              players we talk to. The financial position has been chronically
              empty. We fill it.
            </p>
            <p className="mt-4 text-xs text-steel italic">
              * Case study is anonymized and presented for illustrative purposes
              only. Individual results vary. Past results are not indicative of
              future performance.
            </p>
          </div>
          <p className="mt-4 text-center text-sm text-steel">
            More case studies coming soon as we grow our roster.
          </p>
        </div>
      </section>

      {/* Fix 9: Social proof — press & credentials */}
      <section className="bg-white py-10 sm:py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Featured In" title="Trusted expertise." />
          {/*
            JOSH ACTION REQUIRED: Replace placeholder logos with actual publication logos.
            1. Source logos from each publication's press/brand portal:
               - Forbes: https://www.forbes.com/press (or search "Forbes logo press kit")
               - MarketWatch: search "MarketWatch brand assets"
               - Advisorpedia: contact or download from their site
               - BiggerPockets: https://www.biggerpockets.com/press
            2. Save logos as SVG or PNG in /public/press/ (e.g., /public/press/forbes.svg)
            3. Replace the placeholder icon divs below with <Image> components.
            NOTE: Some logos may require licensing. Verify usage rights before publishing.
          */}
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-6 items-center justify-items-center">
            {[
              { name: "Forbes", icon: "Forbes" },
              { name: "MarketWatch", icon: "MarketWatch" },
              { name: "Advisorpedia", icon: "Advisorpedia" },
              { name: "BiggerPockets", icon: "BiggerPockets" },
            ].map((pub) => (
              <div
                key={pub.name}
                className="flex flex-col items-center gap-2 opacity-60 hover:opacity-80 transition-opacity"
              >
                <div className="h-10 flex items-center justify-center px-4">
                  <span className="text-lg font-bold text-primary tracking-tight">
                    {pub.icon}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs text-steel italic text-center">
            Josh has been featured in leading financial publications on fiduciary
            advisory. TSPW-specific press coverage in development.
          </p>

          {/* Credentials strip */}
          <div className="mt-8 pt-8 border-t border-neutral-bg">
            <div className="flex flex-wrap justify-center gap-4 text-xs text-steel">
              <span className="px-3 py-1.5 bg-neutral-bg rounded-full font-medium">
                CFP Board Certificant
              </span>
              <span className="px-3 py-1.5 bg-neutral-bg rounded-full font-medium">
                Financial Therapy Association
              </span>
              <span className="px-3 py-1.5 bg-neutral-bg rounded-full font-medium">
                NAPFA-Aligned Practices
              </span>
              <span className="px-3 py-1.5 bg-neutral-bg rounded-full font-medium">
                ICF Credentialed Coach
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Hockey Money Playbook — Fix 13: email capture wired */}
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
            <form action="/api/subscribe" method="POST" className="flex gap-2">
              <input
                type="email"
                name="email"
                placeholder="your@email.com"
                required
                className="flex-1 px-4 py-2.5 border border-neutral-bg rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-secondary"
              />
              <button
                type="submit"
                className="px-5 py-2.5 bg-primary text-white text-sm font-semibold rounded-lg hover:bg-primary/90 transition-colors"
              >
                Notify Me
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Fix 10: Agent-specific section */}
      <section className="bg-white py-10 sm:py-14 border-t-2 border-secondary/20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-secondary font-semibold text-sm uppercase tracking-wider mb-2">
            For Agents
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary">
            The financial side of your players&apos; careers shouldn&apos;t be
            your problem.
          </h2>
          <p className="mt-4 text-lg text-neutral-dark/70 leading-relaxed max-w-2xl mx-auto">
            You negotiate the deal. You protect their career. We play the
            position that supports the life they&apos;re building with the money
            you help them earn. Same team. Different specialties. Your clients
            get a fiduciary specialist. You get to focus on what you do best.
          </p>
          <Link
            href="/for-agents"
            className="inline-block mt-6 px-8 py-3.5 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors"
          >
            See how TSPW supports agents &rarr;
          </Link>
        </div>
      </section>

      <CTASection
        headline="Life-changing money should change your life."
        subtext="Book a 30-minute Opening Faceoff call. No pitch. Just a conversation about what your career earnings could actually build."
      />
    </>
  );
}
