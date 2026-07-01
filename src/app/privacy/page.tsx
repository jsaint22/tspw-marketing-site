import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for Top Shelf Private Wealth, a DBA of Wealth In Yourself LLC. How we collect, use, and protect your personal information.",
};

export default function PrivacyPage() {
  return (
    <>
      <section className="bg-primary py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
            Privacy
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
            Privacy Policy
          </h1>
          <p className="mt-4 text-sm text-white/60">
            Last updated: July 1, 2026
          </p>
        </div>
      </section>

      <section className="bg-white py-10 sm:py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-neutral prose-headings:font-display prose-headings:text-primary prose-a:text-primary hover:prose-a:text-secondary">
          <h2>1. Firm Identification</h2>
          <p>
            Wealth In Yourself LLC, doing business as Top Shelf Private Wealth
            (&quot;TSPW,&quot; &quot;the Firm,&quot; &quot;we,&quot;
            &quot;us,&quot; or &quot;our&quot;), is a Registered Investment
            Adviser with the State of Nevada. CRD #322123.
          </p>
          <ul>
            <li>
              <strong>Principal:</strong> Josh St. Laurent, MS, CFP®, CFT™,
              APFC®, ACC
            </li>
            <li>
              <strong>Principal Office:</strong> 195 Highway 50 STE 205, Zephyr
              Cove, NV 89448
            </li>
            <li>
              <strong>Contact (TSPW):</strong>{" "}
              <a href="mailto:josh@topshelfprivatewealth.com">
                josh@topshelfprivatewealth.com
              </a>
            </li>
          </ul>

          <h2>2. Purpose and Scope</h2>
          <p>
            This Privacy Policy describes how we collect, use, disclose, and
            protect the nonpublic personal information (&quot;NPI&quot;) and
            personal information (&quot;PI&quot;) of our clients, prospective
            clients, and website visitors across both the Wealth In Yourself
            and Top Shelf Private Wealth brands. This policy is provided in
            accordance with Regulation S-P (17 CFR Part 248), the California
            Consumer Privacy Act (&quot;CCPA&quot;), and Nevada Revised Statutes
            Chapter 603A.
          </p>
          <p>
            This policy applies to all information collected through our
            advisory services, our websites (wealthinyourself.com and
            topshelfprivatewealth.com), intake forms, communications, meeting
            recordings, technology systems used in the delivery of advisory
            services, and automated and artificial-intelligence-assisted
            systems used in our planning and operational workflows.
          </p>

          <h2>3. Categories of Information We Collect</h2>
          <h3>3.1 Information You Provide Directly</h3>
          <ul>
            <li>
              Full legal name, date of birth, Social Security number, and
              government-issued identification
            </li>
            <li>Contact information including mailing address, email address, and phone number</li>
            <li>Marital and family status, dependents, and beneficiary designations</li>
            <li>Employment, contract, and compensation details (including signing bonuses, deferred compensation, performance incentives, and trade-related compensation events)</li>
            <li>Assets, liabilities, net worth, and account information</li>
            <li>Investment objectives, risk tolerance, and time horizons</li>
            <li>Tax returns, estate planning documents, and insurance policies</li>
            <li>Business ownership details, entity structures, and operating agreements</li>
            <li>Real estate holdings and related financial data</li>
            <li>Banking and brokerage account numbers and statements</li>
            <li>
              For TSPW clients: jurisdiction-of-play history, agent contact and
              representation status, escrow contributions, contract structure,
              and family-of-origin and household-financial-support context
              relevant to financial life planning
            </li>
            <li>Values, life goals, and personal priorities shared during financial life planning sessions</li>
          </ul>

          <h3>3.2 Information We Collect Through Our Systems</h3>
          <ul>
            <li>Meeting recordings and transcripts from video conference sessions</li>
            <li>Email communications and correspondence</li>
            <li>Intake form responses and questionnaire data</li>
            <li>Website browsing data, cookies, and analytics</li>
            <li>Scheduling and calendar information</li>
            <li>Signed agreements and contracts</li>
            <li>Billing and payment information</li>
            <li>
              Structured data fields and signal patterns extracted automatically
              from your communications and meeting transcripts — including
              action items, scheduling commitments, and financial figures
              referenced in conversation; life-event details and personal
              preferences mentioned during sessions; and financial life planning
              signals (for example, the specific language you use when
              discussing money, values-related statements,
              planning-relevant disclosures, and behavioral patterns that inform
              our advisory methodology). Where the precise language matters for
              planning purposes, verbatim quotes may be preserved alongside the
              structured signal. These signals are classified by type, stored in
              your client record, and subject to access controls limiting
              downstream use to advisory and relationship management functions.
            </li>
            <li>
              Operational context derived from interaction patterns (for
              example, frequency and timing of communications, response
              patterns, and engagement indicators that inform service delivery)
            </li>
          </ul>

          <h3>3.3 Information We Receive From Third Parties</h3>
          <ul>
            <li>Account holdings, balances, and transaction data from custodians</li>
            <li>Credit and background information from reporting agencies (only with your consent)</li>
            <li>
              Account aggregation and transaction data from financial accounts
              you authorize through Plaid-enabled services such as Monarch
              Money
            </li>
            <li>Referral information from professionals in your service network (agents, CPAs, trainers, attorneys)</li>
          </ul>

          <h2>4. How We Use Your Information</h2>
          <ul>
            <li>Providing personalized financial planning and investment advisory services</li>
            <li>Preparing financial plans, projections, and recommendations</li>
            <li>Executing investment transactions through our custodian</li>
            <li>Managing your client dashboard with meeting notes, action items, and deliverables</li>
            <li>Processing and summarizing meeting recordings and transcripts</li>
            <li>Drafting and sending communications related to your advisory engagement</li>
            <li>Generating and managing billing and invoicing</li>
            <li>Complying with regulatory requirements, including recordkeeping obligations</li>
            <li>Aggregating context across our systems before client meetings to support thorough preparation</li>
            <li>Extracting structured information from communications and meetings to populate client records and reduce manual entry</li>
            <li>
              Surfacing relationship-care moments based on patterns and personal
              details we observe in your communications and meetings — including
              life milestones, personal preferences, and relationship details
              you share — to support thoughtful, personalized advisory service.
              An automated process queues candidate relationship-care moments
              for advisor review before any action is taken; no gesture is sent
              without Josh&apos;s direct authorization.
            </li>
            <li>Improving our advisory processes and client experience</li>
            <li>Marketing our services (only with aggregated, de-identified data; never your personal details)</li>
          </ul>

          <h2>5. Artificial Intelligence and Technology Disclosure</h2>
          <h3>5.1 Categories of AI Usage</h3>
          <p>
            We use artificial intelligence systems, primarily Anthropic&apos;s
            Claude, to support the following advisory and operational
            functions:
          </p>
          <ul>
            <li><strong>Meeting transcript summarization</strong> — generating summaries of recorded meetings for advisor review and client deliverables</li>
            <li><strong>Action item and structured data extraction</strong> — identifying commitments, dates, decisions, and other structured information from meeting transcripts and communications</li>
            <li><strong>Email triage and drafting</strong> — categorizing inbound communications and drafting response options for advisor review</li>
            <li><strong>Content creation and review support</strong> — drafting marketing communications, blog posts, and educational content for advisor review prior to publication</li>
            <li><strong>Dashboard and workflow management</strong> — automating routine record-keeping operations</li>
            <li><strong>Scheduling and calendar automation</strong> — facilitating meeting coordination</li>
            <li><strong>Financial plan preparation support</strong> — drafting components of financial plans and analyses for advisor review and refinement</li>
            <li><strong>Pre-meeting context aggregation</strong> — assembling relevant prior context from across firm systems to support advisor preparation</li>
            <li>
              <strong>Real-time in-meeting advisory query</strong> — during live
              client meetings, Josh may query an AI system with short,
              advisor-facing questions to surface relevant prior signals and
              methodology prompts from your client record. This surface is
              operator-facing only (displayed on Josh&apos;s secondary device,
              not visible to you); you do not interact with the AI system
              directly. Queries are limited per meeting and audit-logged. This
              surface is subject to your AI processing consent under Section 14.
            </li>
            <li><strong>Hospitality moment surfacing</strong> — identifying opportunities for relationship-care gestures based on patterns observed in our interactions</li>
          </ul>

          <h3>5.2 Human Oversight Commitment</h3>
          <p>
            All AI-generated outputs that are client-facing or that inform
            advisory recommendations are reviewed by Josh St. Laurent before
            delivery to you. AI systems do not autonomously send communications,
            execute transactions, or render advice without advisor review.
          </p>

          <h3>5.3 AI Data Handling</h3>
          <p>
            Client data processed by AI systems is subject to the same
            confidentiality protections that apply to all client data under
            this policy. Our AI processing relationship with Anthropic operates
            under contractual terms that prohibit use of customer inputs and
            outputs for AI model training. We do not use client data to train
            AI models. We do not sell, share, or otherwise disclose client data
            to third parties for AI training or development purposes.
          </p>

          <h2>6. Third-Party Service Providers</h2>
          <p>
            We engage third-party service providers in the delivery of our
            advisory services, including custodians (Altruist), CRM
            (GoHighLevel), internal workspace (Notion), cloud
            workspace (Google Workspace), database and authentication platform
            (Supabase), financial planning software (RightCapital), cash flow
            management (Monarch Money, Sequence), AI processing (Anthropic),
            video conferencing and transcription (Zoom), digital signatures
            (Adobe Sign, transitioning to GoHighLevel Documents), accounting
            (QuickBooks Online), intake forms (Involve.me), newsletter
            distribution (Substack), web hosting and operational portal
            infrastructure (Vercel), authentication session storage (Upstash
            Redis), transactional email (Resend), content delivery and DNS
            (Cloudflare), workflow automation (Zapier), and website analytics
            (Google Analytics GA4). Each provider receives only the minimum
            information necessary to perform its function. We maintain written
            agreements with service providers who handle nonpublic personal
            information that include contractual data protection requirements
            consistent with applicable regulations, including amended
            Regulation S-P.
          </p>
          <p className="text-sm italic">
            A current, detailed provider table is available on request and is
            mirrored on{" "}
            <a
              href="https://wealthinyourself.com/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
            >
              wealthinyourself.com/privacy-policy
            </a>
            .
          </p>

          <h2>7. Disclosure of Your Information</h2>
          <h3>7.1 We Do Not Sell Your Personal Information</h3>
          <p>
            We do not sell, rent, or trade your nonpublic personal information
            or personal information to any third party for any purpose.
          </p>
          <h3>7.2 Permitted Disclosures</h3>
          <ul>
            <li>To our custodian and service providers as necessary to deliver advisory services</li>
            <li>To comply with applicable laws, regulations, or legal proceedings</li>
            <li>To respond to regulatory examinations or investigations</li>
            <li>To protect our rights, privacy, safety, or property</li>
            <li>With your express written consent</li>
          </ul>
          <h3>7.3 Opt-Out Rights</h3>
          <p>
            You have the right to opt out of certain information sharing. To
            exercise this right, contact us at{" "}
            <a href="mailto:josh@topshelfprivatewealth.com">
              josh@topshelfprivatewealth.com
            </a>
            . We will process your request within 30 days.
          </p>

          <h2>8. California Consumer Privacy Act (CCPA) Disclosures</h2>
          <p>
            If you are a California resident, you have the right to know what
            personal information we collect, the right to request deletion, the
            right to non-discrimination, and the right to opt out of AI
            processing (Section 14). We have not sold personal information in
            the preceding 12 months and do not sell personal information. To
            exercise CCPA rights, contact{" "}
            <a href="mailto:josh@topshelfprivatewealth.com">
              josh@topshelfprivatewealth.com
            </a>
            ; we will verify your identity before processing and respond within
            45 days.
          </p>

          <h2>9. Data Retention</h2>
          <p>
            We retain client advisory records for a minimum of 5 years from
            last activity; financial plans for 6 years; meeting recordings and
            transcripts for the duration of the engagement plus 5 years;
            marketing records for 5 years from last use; billing records for 7
            years; communications and audit logs for 5 years from creation
            (with the first 2 years easily accessible per Books and Records
            Rule 204-2). AI processing inputs and outputs are subject to a
            brief retention period under Anthropic&apos;s commercial terms
            (typically 30 days for safety review) before deletion from
            Anthropic&apos;s systems.
          </p>

          <h2>10. Data Security</h2>
          <p>
            We protect your information with encryption in transit (TLS/SSL)
            and at rest, multi-factor authentication on all systems containing
            client data, role-based access controls, database-level row-level
            security, application-level audit logging, regular review of
            third-party security practices, designed US data residency, secure
            disposal of records, encrypted devices, ongoing monitoring for
            unauthorized access, and a written incident response plan covering
            detection, containment, notification, and remediation.
          </p>

          <h2>11. Breach Notification</h2>
          <p>
            In the event of a data breach affecting your personal information,
            we will notify you as promptly as practicable and in no case later
            than 30 days after we determine a breach has occurred that requires
            notification, in accordance with the SEC&apos;s amended Regulation
            S-P (effective June 3, 2026) and Nevada Revised Statutes Chapter
            603A. This obligation extends to prospective clients whose
            nonpublic personal information may have been affected. We will also
            notify the Nevada Attorney General and any other regulators with
            notification rights.
          </p>

          <h2>12. Annual Notice</h2>
          <p>
            We will provide you with a copy of this privacy policy annually, as
            required by Regulation S-P. The most current version is always
            available at topshelfprivatewealth.com/privacy and
            wealthinyourself.com/privacy-policy.
          </p>

          <h2>13. Website Cookies and Tracking</h2>
          <p>
            Our website may use cookies and similar tracking technologies. We
            use Google Analytics (GA4) and similar tools to understand visitor
            interactions. This data is collected in aggregate and does not
            identify individual visitors. When you submit your email address to
            receive a resource or subscribe to our newsletter, your email is
            used solely for that purpose; you may unsubscribe at any time. You
            may disable cookies in your browser settings.
          </p>

          <h2>14. Your Consent to AI Processing</h2>
          <p>
            By engaging our advisory services, you consent to the use of
            artificial intelligence tools as described in Section 5. You may
            request that we suspend AI-assisted processing of your data at any
            time by contacting{" "}
            <a href="mailto:josh@topshelfprivatewealth.com">
              josh@topshelfprivatewealth.com
            </a>
            . Upon receipt of an opt-out request, your client record will be
            flagged to exclude AI processing across our systems; manual
            handling will replace automated processing for your account;
            continuation of advisory services will not be affected. We will
            confirm receipt within five business days and confirm operational
            implementation within thirty days. You may revoke an opt-out at any
            time.
          </p>

          <h2>15. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify
            you of material changes by posting the updated policy on our
            website and, for current clients, by providing notice through our
            regular communication channels.
          </p>

          <h2>16. Contact Us</h2>
          <p>
            <strong>Wealth In Yourself LLC</strong>
            <br />
            (DBA Top Shelf Private Wealth)
            <br />
            Josh St. Laurent, MS, CFP®, CFT™, APFC®, ACC
            <br />
            195 Highway 50 STE 205
            <br />
            Zephyr Cove, NV 89448
            <br />
            Email:{" "}
            <a href="mailto:josh@topshelfprivatewealth.com">
              josh@topshelfprivatewealth.com
            </a>
          </p>

          <h2>17. Automated Decisioning and Data Subject Rights</h2>
          <p>
            Our advisory services are delivered by Josh St. Laurent personally.
            While AI systems support our operations, no decision affecting your
            account, your investments, your fees, or your advisory relationship
            is rendered by an AI system without human review and approval. You
            have the right to know how AI is used, the right to opt out, the
            right to human review of any AI-generated output about your
            account, and the right to challenge AI outputs you believe
            inaccurately reflect your situation.
          </p>

          <hr />
          <p className="text-sm text-steel italic">
            This HTML version is authoritative for the Wealth In
            Yourself / Top Shelf Private Wealth combined practice.
          </p>
        </div>
      </section>
    </>
  );
}
