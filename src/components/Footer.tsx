import Link from "next/link";
import Image from "next/image";

const footerLinks = {
  Advisory: [
    { href: "/about", label: "About Josh" },
    { href: "/services", label: "Services" },
    { href: "/pricing", label: "Pricing" },
    { href: "/contact", label: "Contact" },
  ],
  "For Players": [
    { href: "/jock-tax", label: "The Jock Tax" },
    { href: "/cross-border", label: "Cross-Border Planning" },
    { href: "/why-flat-fee", label: "Why Flat Fee" },
    { href: "/for-agents", label: "For Agents" },
  ],
  Learn: [
    { href: "/blog", label: "Blog" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-primary text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Image
              src="/brand/tspw-logo.png"
              alt="Top Shelf Private Wealth"
              width={200}
              height={133}
              className="h-28 w-auto mb-4"
            />
            <p className="text-white/70 text-sm leading-relaxed max-w-sm">
              The only flat-fee fiduciary advisory firm built exclusively for
              professional hockey players.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
                {category}
              </h3>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-white/70 hover:text-white text-sm transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Compliance footer */}
        <div className="mt-10 pt-8 border-t border-white/10">
          <p className="text-white/50 text-xs leading-relaxed max-w-4xl">
            Top Shelf Private Wealth is a DBA of Wealth In Yourself LLC, a
            Registered Investment Adviser with the State of Nevada. Registration
            as an investment adviser does not imply a certain level of skill or
            training. Advisory services are only offered to clients or
            prospective clients where Wealth In Yourself and its representatives
            are properly licensed or exempt from licensure. Past performance is
            not indicative of future results. No advice may be rendered by Top
            Shelf Private Wealth unless a client service agreement is in place.
          </p>
          <p className="mt-3 text-white/50 text-xs leading-relaxed max-w-4xl">
            The information on this website is not intended as tax, accounting,
            or legal advice, as an offer or solicitation of an offer to buy or
            sell, or as an endorsement of any company, security, fund, or other
            securities or non-securities offering. This information should not be
            relied upon as the sole factor in an investment-making decision.
            Tax rates, CBA provisions, and jock tax calculations referenced on
            this site are for educational purposes only and may not reflect
            current regulations. Consult a qualified tax professional for
            advice specific to your situation.
          </p>
          <div className="mt-4 flex flex-wrap gap-4 text-xs text-white/50">
            <a
              href="https://adviserinfo.sec.gov/firm/summary/322123"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white/70 transition-colors"
            >
              Form ADV &amp; firm disclosures on SEC.gov
            </a>
            <span>&copy; {new Date().getFullYear()} Wealth In Yourself LLC, DBA Top Shelf Private Wealth</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
