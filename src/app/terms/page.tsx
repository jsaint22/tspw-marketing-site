import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of Service for the Top Shelf Private Wealth website. Advisory services are governed by a separate written client service agreement.",
};

export default function TermsPage() {
  return (
    <>
      <section className="bg-primary py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
            Terms
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
            Terms of Service
          </h1>
          <p className="mt-4 text-sm text-white/60">
            Last updated: May 28, 2026
          </p>
        </div>
      </section>

      <section className="bg-white py-10 sm:py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-neutral prose-headings:font-display prose-headings:text-primary prose-a:text-primary hover:prose-a:text-secondary">
          <h2>1. Acceptance</h2>
          <p>
            These Terms of Service (&quot;Terms&quot;) govern your access to
            and use of topshelfprivatewealth.com and any related websites,
            services, or content (the &quot;Site&quot;) operated by Wealth In
            Yourself LLC, doing business as Top Shelf Private Wealth
            (&quot;TSPW,&quot; &quot;we,&quot; &quot;us,&quot; or
            &quot;our&quot;). By accessing or using the Site, you agree to be
            bound by these Terms. If you do not agree, do not use the Site.
          </p>

          <h2>2. No Advisory Relationship Created by Website Use</h2>
          <p>
            Information on the Site is provided for general educational and
            informational purposes only. Accessing the Site, reading the blog,
            subscribing to the newsletter, downloading a resource, or
            contacting us does not create an advisory relationship between you
            and TSPW. An advisory relationship is established only by a signed
            written client service agreement.
          </p>

          <h2>3. Not Investment, Legal, or Tax Advice</h2>
          <p>
            Content published on the Site — including blog posts, podcasts,
            videos, newsletter content, lead-magnet downloads, and pricing
            information — is not investment, legal, accounting, or tax advice
            to any individual reader. Tax rates, CBA provisions, jock tax
            calculations, regulatory citations, and planning concepts referenced
            on the Site are for educational purposes only and may not reflect
            current law or regulation in your jurisdiction. Consult a qualified
            professional for advice specific to your situation.
          </p>

          <h2>4. Booking a Call</h2>
          <p>
            Booking an Opening Faceoff call (or any other introductory call) is
            a request for a conversation. It is not an engagement, a
            commitment, or a representation that we will accept you as a
            client. We retain discretion to decline an engagement for any
            reason permitted by law and to refer you to another professional
            where appropriate.
          </p>

          <h2>5. Forward-Looking Statements</h2>
          <p>
            Statements on the Site about future market behavior, tax outcomes,
            career duration, post-career outcomes, or wealth trajectories are
            forward-looking and are not guarantees. Past performance, whether
            of investment strategies, planning approaches, or career outcomes,
            is not indicative of future results.
          </p>

          <h2>6. Third-Party Links and Content</h2>
          <p>
            The Site may link to third-party websites, tools, or content. We do
            not control and are not responsible for third-party content. A link
            is not an endorsement.
          </p>

          <h2>7. Intellectual Property</h2>
          <p>
            All content on the Site — including text, images, brand marks,
            logos, downloadable resources, and the &quot;Top Shelf Private
            Wealth&quot; and &quot;The Career Architecture&quot; designations —
            is owned by TSPW or its licensors and is protected by applicable
            intellectual property laws. You may share excerpts with attribution
            for non-commercial personal or educational use. You may not
            republish, repackage, or commercially distribute Site content
            without our written permission.
          </p>

          <h2>8. Privacy</h2>
          <p>
            Your use of the Site is also governed by our{" "}
            <a href="/privacy">Privacy Policy</a>, which describes how we
            collect, use, and protect your personal information.
          </p>

          <h2>9. Compliance Disclosures</h2>
          <p>
            Wealth In Yourself LLC is a Registered Investment Adviser with the
            State of Nevada (CRD #322123). Registration as an investment
            adviser does not imply a certain level of skill or training.
            Advisory services are only offered to clients or prospective
            clients where Wealth In Yourself and its representatives are
            properly licensed or exempt from licensure. The current Form ADV
            Part 2A brochure is available at{" "}
            <a
              href="/disclosures/adv-part-2a.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              /disclosures/adv-part-2a.pdf
            </a>{" "}
            and on the SEC&apos;s Investment Adviser Public Disclosure site at{" "}
            <a
              href="https://adviserinfo.sec.gov/firm/summary/322123"
              target="_blank"
              rel="noopener noreferrer"
            >
              adviserinfo.sec.gov
            </a>
            . Pricing language on the Site reflects published positioning;
            individual fee scope is set during the Opening Faceoff Call and
            documented in your written client service agreement.
          </p>

          <h2>10. Disclaimer of Warranties</h2>
          <p>
            The Site is provided &quot;as is&quot; and &quot;as available&quot;
            without warranty of any kind, express or implied, including
            warranties of merchantability, fitness for a particular purpose,
            and non-infringement. We do not warrant that the Site will be
            uninterrupted, error-free, secure, or free of viruses or other
            harmful components.
          </p>

          <h2>11. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law, TSPW will not be liable for
            any indirect, incidental, special, consequential, or punitive
            damages arising out of or relating to your use of the Site. This
            limitation does not affect any non-waivable statutory rights or any
            liability that cannot be excluded under applicable law, including
            fiduciary duties owed to advisory clients under a separate signed
            client service agreement.
          </p>

          <h2>12. Indemnification</h2>
          <p>
            You agree to indemnify and hold TSPW harmless from any claims,
            damages, or expenses arising from your misuse of the Site, your
            violation of these Terms, or your violation of any rights of
            another party.
          </p>

          <h2>13. Changes to the Site and These Terms</h2>
          <p>
            We may modify, suspend, or discontinue any part of the Site at any
            time. We may also update these Terms; updates are effective when
            posted. Your continued use of the Site after an update constitutes
            acceptance.
          </p>

          <h2>14. Governing Law</h2>
          <p>
            These Terms are governed by the laws of the State of Nevada,
            without regard to its conflict-of-laws principles. The exclusive
            venue for any dispute arising out of or relating to the Site or
            these Terms is the state and federal courts located in Douglas
            County, Nevada, except that nothing in this section limits any
            rights you may have under applicable consumer protection law.
          </p>

          <h2>15. Contact</h2>
          <p>
            Questions about these Terms? Email{" "}
            <a href="mailto:josh@topshelfprivatewealth.com">
              josh@topshelfprivatewealth.com
            </a>{" "}
            or write to: Wealth In Yourself LLC (DBA Top Shelf Private Wealth),
            195 Highway 50 STE 205, Zephyr Cove, NV 89448.
          </p>
        </div>
      </section>
    </>
  );
}
