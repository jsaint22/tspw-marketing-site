import type { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "About Josh",
  description:
    "Joshua St. Laurent, CFP, CFT, APFC — the hockey-native financial planner who left Fidelity to build something better for professional hockey players.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
            The Person Behind the Advisor
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
            A rink in the front yard. A fiduciary duty to the players who need one.
          </h1>
          <p className="mt-6 text-lg text-white/70 max-w-2xl mx-auto">
            Joshua St. Laurent &mdash; CFP&reg;, CFT&trade;, APFC&reg;, ACC, MS Financial Life Planning. Enrolled Agent in progress.
          </p>
        </div>
      </section>

      {/* Video section — "A Minute With Josh" */}
      <section className="bg-white py-10 sm:py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-steel font-semibold text-sm uppercase tracking-wider mb-4">
            A Minute With Josh
          </p>
          {/*
            JOSH ACTION REQUIRED: Replace the placeholder below with your video embed.
            After recording, upload to YouTube/Vimeo and replace the div below with:
            <iframe
              src="YOUR_EMBED_URL"
              className="w-full aspect-video rounded-xl"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          */}
          <div className="w-full aspect-video rounded-xl bg-neutral-bg border border-neutral-bg flex items-center justify-center">
            <div className="text-center">
              <svg className="w-16 h-16 text-steel/30 mx-auto mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-sm text-steel/50">Video coming soon</p>
            </div>
          </div>
          <p className="mt-4 text-sm text-steel italic">
            60 seconds on why I built Top Shelf Private Wealth.
          </p>
        </div>
      </section>

      {/* Origin story */}
      <section className="bg-white py-10 sm:py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="The Origin"
            title="Litchfield, New Hampshire. A rink in the front yard."
            centered={false}
          />
          <div className="mt-6 space-y-5 text-neutral-dark/80 leading-relaxed">
            <p>
              I grew up in Litchfield, New Hampshire with a hockey rink in my front
              yard. Not a metaphor. My dad built it. Every winter, it was the center
              of everything. That rink taught me what hockey culture actually is —
              not the version you see on TV, but the version where you lace up at
              5 AM because you love it.
            </p>
            <p>
              Today I play beer league hockey in Lake Tahoe, Nevada. I&apos;m not a
              former pro. I&apos;m a hockey lifer who happens to be a financial
              planner. That distinction matters because I didn&apos;t come to this
              work from the outside looking in. I came from the culture.
            </p>
          </div>

          <div className="mt-10">
            <SectionHeading
              eyebrow="The Fidelity Story"
              title="I watched advisors take off their fiduciary hat and put on their sales hat in the same conversation."
              centered={false}
            />
            <div className="mt-6 space-y-5 text-neutral-dark/80 leading-relaxed">
              <p>
                At Fidelity, I was stuck in a system built to serve the firm, not
                the client. Too many clients, impossible to go deep with any of
                them. Constant pressure to sell products clients didn&apos;t need,
                from a manager who had never sat across from a client in his life.
              </p>
              <p>
                The clearest signal that the system was broken? Advisors legally
                switching from fiduciary to broker mid-conversation — putting on
                their &ldquo;BD hat.&rdquo; It&apos;s legal. Nobody talks about it.
                That&apos;s the problem.
              </p>
              <p>
                I left to build something that actually worked for the people on
                the other side of the table.
              </p>
            </div>
          </div>

          <div className="mt-10">
            <SectionHeading
              eyebrow="The Education"
              title="I watched a financial coach ask someone one question and completely change how they saw their relationship with money."
              centered={false}
            />
            <div className="mt-6 space-y-5 text-neutral-dark/80 leading-relaxed">
              <p>
                My master&apos;s degree in Financial Life Planning at Golden Gate
                University changed everything. I wasn&apos;t aware financial therapy
                existed. Aligning money with values — not the other way around —
                was a concept that immediately felt obviously correct.
              </p>
              <p>
                Watching Saundra Davis coach someone for the first time was
                genuinely mind-blowing. Better questions, deeper listening, real
                presence. The tools existed. Most advisors just weren&apos;t seeking
                them out. I decided that was going to be my edge.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why hockey */}
      <section className="bg-neutral-bg py-10 sm:py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="The Gap"
            title="Why hockey players specifically"
            centered={false}
          />
          <div className="mt-6 space-y-5 text-neutral-dark/80 leading-relaxed">
            <p>
              Hockey players face a financial reality unlike almost anyone else.
              You have 10 to 15 years to earn what most people earn over 40. The
              jock tax alone costs players thousands every year — and most
              accountants don&apos;t know it exists. Cross-border complexity between
              the US and Canada creates situations most financial advisors have
              never seen.
            </p>
            <p>
              And the advisors who do work with athletes? Most of them charge AUM
              fees — a percentage of your net worth every year regardless of
              whether the work justifies it. Your agent has a role. Your trainer
              has a role. Your advisor should have one too — not a piece of
              everything you own.
            </p>
            <p>
              A fiduciary built exclusively for hockey players didn&apos;t exist.
              That felt like a problem worth solving.
            </p>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="bg-white py-10 sm:py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Credentials"
            title="The qualifications behind the conviction."
          />
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                abbr: "CFP\u00AE",
                name: "Certified Financial Planner",
                desc: "The gold standard in comprehensive financial planning.",
              },
              {
                abbr: "CFT\u2122",
                name: "Certified Financial Therapist",
                desc: "Understanding the psychology behind financial decisions.",
              },
              {
                abbr: "APFC\u00AE",
                name: "Accredited Personal Financial Coach",
                desc: "Advanced financial coaching and behavioral change strategy.",
              },
              {
                abbr: "ACC",
                name: "Associate Certified Coach",
                desc: "ICF-credentialed coaching for life and career transitions.",
              },
              {
                abbr: "MS",
                name: "MS Financial Life Planning",
                desc: "Golden Gate University. Where the human side of money lives.",
              },
              {
                abbr: "EA",
                name: "Enrolled Agent (In Progress)",
                desc: "IRS-authorized tax expertise. The final piece of the puzzle.",
              },
            ].map((cred) => (
              <div
                key={cred.abbr}
                className="bg-neutral-bg rounded-xl p-5 border border-neutral-bg"
              >
                <p className="text-xl font-bold text-primary">{cred.abbr}</p>
                <p className="text-sm font-semibold text-neutral-dark mt-1">
                  {cred.name}
                </p>
                <p className="text-xs text-steel mt-2">{cred.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Personal */}
      <section className="bg-neutral-bg py-10 sm:py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Beyond the Practice"
            title="The person behind the advisor."
            centered={false}
          />
          <div className="mt-6 space-y-5 text-neutral-dark/80 leading-relaxed">
            <p>
              I live in Lake Tahoe, Nevada with my wife Amanda and our son Cole,
              who just turned one. Our daughter is due in September 2026. The family
              is the why behind everything I build.
            </p>
            <p>
              Top Shelf Private Wealth is my second advisory firm. The first,{" "}
              <Link href="https://wealthinyourself.com" target="_blank" rel="noopener noreferrer" className="text-primary font-semibold hover:text-secondary transition-colors">
                Wealth In Yourself
              </Link>
              , is a flat-fee fiduciary for entrepreneurs and real estate investors.
              Same philosophy, different audience. Both built on the belief that
              financial planning should start with your life, not your money.
            </p>
            <p>
              I&apos;m living the life I help clients design. That&apos;s not a
              marketing line — it&apos;s proof of concept.
            </p>
          </div>
        </div>
      </section>

      <CTASection
        headline="Top shelf standards on the ice. Apply them to your money."
        subtext="Book a 30-minute Opening Faceoff call. Let's talk about what your career earnings could actually build."
      />
    </>
  );
}
