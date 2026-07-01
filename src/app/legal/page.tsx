import type { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Legal & Disclosures",
  description:
    "Form ADV, Form CRS, privacy policy, terms of service, and regulatory disclosures for Top Shelf Private Wealth.",
};

export default function LegalPage() {
  return (
    <>
      <section className="bg-primary py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
            Disclosures
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
            Legal & Regulatory
          </h1>
          <p className="mt-6 text-lg text-white/70 max-w-2xl mx-auto">
            Top Shelf Private Wealth is a DBA of Wealth In Yourself LLC, a
            Registered Investment Adviser with the State of Nevada (CRD
            #322123).
          </p>
        </div>
      </section>

      <section className="bg-white py-10 sm:py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Brochure & Filings"
            title="Form ADV and related disclosures"
          />
          <div className="mt-8 space-y-4">
            <div className="bg-neutral-bg rounded-xl p-6 border border-neutral-bg">
              <h3 className="text-lg font-bold text-primary">
                Form ADV Part 2A (Brochure)
              </h3>
              <p className="mt-2 text-sm text-neutral-dark/70 leading-relaxed">
                Our written disclosure brochure describing services, fees,
                conflicts of interest, and disciplinary history. This is the
                Top Shelf Private Wealth brochure, amended and filed with the
                State of Nevada on June 26, 2026.
              </p>
              <a
                href="/disclosures/adv-part-2a.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-primary font-semibold hover:text-secondary transition-colors"
              >
                View Form ADV Part 2A (PDF) &rarr;
              </a>
            </div>

            <div className="bg-neutral-bg rounded-xl p-6 border border-neutral-bg">
              <h3 className="text-lg font-bold text-primary">
                Form CRS (Client Relationship Summary)
              </h3>
              <p className="mt-2 text-sm text-neutral-dark/70 leading-relaxed">
                Form CRS (Form ADV Part 3) is required of SEC-registered
                investment advisers and certain dual-registered firms. Wealth In
                Yourself LLC is currently registered with the State of Nevada
                and is not presently subject to the Form CRS filing requirement.
                Should the firm&apos;s registration status change, Form CRS
                will be filed with the SEC and posted here.
              </p>
              <p className="mt-3 text-xs text-steel italic">
                Last reviewed: July 1, 2026. Questions? Email{" "}
                <a
                  href="mailto:josh@topshelfprivatewealth.com"
                  className="text-primary hover:text-secondary"
                >
                  josh@topshelfprivatewealth.com
                </a>
                .
              </p>
            </div>

            <div className="bg-neutral-bg rounded-xl p-6 border border-neutral-bg">
              <h3 className="text-lg font-bold text-primary">
                IAPD / SEC Public Records
              </h3>
              <p className="mt-2 text-sm text-neutral-dark/70 leading-relaxed">
                Verify our registration and review the full Form ADV (Parts 1
                and 2) on the SEC&apos;s Investment Adviser Public Disclosure
                site.
              </p>
              <a
                href="https://adviserinfo.sec.gov/firm/summary/322123"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-primary font-semibold hover:text-secondary transition-colors"
              >
                adviserinfo.sec.gov — CRD #322123 &rarr;
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-neutral-bg py-10 sm:py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Site Policies"
            title="Privacy and terms"
          />
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link
              href="/privacy"
              className="block bg-white rounded-xl p-6 border border-neutral-bg hover:border-primary/30 transition-colors"
            >
              <h3 className="text-lg font-bold text-primary">Privacy Policy</h3>
              <p className="mt-2 text-sm text-neutral-dark/70 leading-relaxed">
                How we collect, use, and protect your personal information.
                Covers Regulation S-P, CCPA, Nevada NRS 603A, and our AI
                processing disclosures.
              </p>
              <p className="mt-4 text-sm text-primary font-semibold">
                Read the policy &rarr;
              </p>
            </Link>
            <Link
              href="/terms"
              className="block bg-white rounded-xl p-6 border border-neutral-bg hover:border-primary/30 transition-colors"
            >
              <h3 className="text-lg font-bold text-primary">Terms of Service</h3>
              <p className="mt-2 text-sm text-neutral-dark/70 leading-relaxed">
                Terms governing your use of this website and the educational
                content published here. Advisory engagements are governed by a
                separate written client service agreement.
              </p>
              <p className="mt-4 text-sm text-primary font-semibold">
                Read the terms &rarr;
              </p>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-10 sm:py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-neutral-bg rounded-xl p-6 sm:p-8">
            <h3 className="text-lg font-bold text-primary">
              Firm contact for legal & compliance
            </h3>
            <div className="mt-4 text-sm text-neutral-dark/70 leading-relaxed">
              <p>
                <strong className="text-primary">
                  Wealth In Yourself LLC
                </strong>{" "}
                (DBA Top Shelf Private Wealth)
              </p>
              <p>Josh St. Laurent, MS, CFP®, CFT™, APFC®, ACC</p>
              <p>195 Highway 50 STE 205</p>
              <p>Zephyr Cove, NV 89448</p>
              <p className="mt-2">
                Email:{" "}
                <a
                  href="mailto:josh@topshelfprivatewealth.com"
                  className="text-primary hover:text-secondary"
                >
                  josh@topshelfprivatewealth.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
