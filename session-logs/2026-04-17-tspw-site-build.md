# TSPW Marketing Site — Build Session Log
**Date:** April 17, 2026
**Builder:** Claude Opus 4.6 (1M context)

## Summary
Built the complete Top Shelf Private Wealth marketing site from scratch as a Next.js 15 App Router project. Deployed to Vercel staging.

## Deployment
- **Live URL:** https://tspw-marketing-site.vercel.app
- **GitHub:** https://github.com/jsaint22/tspw-marketing-site
- **Commit:** `1f44436`
- **Build status:** READY, zero errors
- **Framework:** Next.js 16.2.4 (Turbopack)

## Reference Repos Studied
- `~/Documents/wiy-marketing-site` — layout, globals.css, Navigation, Footer, CTASection, SectionHeading, homepage patterns
- `~/Documents/wiy-client-portal` — TSPW logo extracted from `public/brand/tspw-logo.png`
- `~/Documents/wiy-operating-system/references/voice-and-brand.md` — full voice document read and applied
- `~/Documents/wiy-operating-system/references/growth-strategy.md` — agent partnership tiers, co-branded brief concept

## Brand Palette (Extracted from Logo)
The TSPW logo features dark forest green background with gold/champagne accents, crossed hockey sticks, goal frame, crown, and puck.

- **Primary (Forest Green):** `#1A3329`
- **Secondary (Gold):** `#C9A84C`
- **Neutral Dark:** `#0F0F0F`
- **Neutral BG:** `#F2F5F3`
- **Ice Highlight:** `#E8F1F8`
- **Steel Gray:** `#8A9199`
- **Accent Red:** `#C8102E` (available but used sparingly)

Note: The fallback navy/red palette from the task brief was overridden by the actual logo colors.

## Pages Built (11 total)
1. **Home** (`/`) — Hero with signature line, tier cards, "Why this exists" Josh section, partner ecosystem, email capture stub, anonymized case study, CTA
2. **About Josh** (`/about`) — Litchfield origin, Fidelity story, GGU story, why hockey specifically, credentials grid, personal section (Amanda, Cole, daughter Sep 2026)
3. **Services** (`/services`) — 8 service cards with player-specific copy
4. **Pricing** (`/pricing`) — 3 tier cards, AUM comparison table, included services grid
5. **Contact** (`/contact`) — 4-step process, booking CTA, email fallback
6. **Why Flat Fee** (`/why-flat-fee`) — AUM teardown at $2M/$10M/$30M, incentive alignment argument
7. **For Agents** (`/for-agents`) — 3-tier partnership structure, co-branded brief concept
8. **The Jock Tax** (`/jock-tax`) — Education page, how it works, state examples, why accountants miss it
9. **Cross-Border Planning** (`/cross-border`) — Treaty provisions, RRSP vs 401(k), currency, trade implications
10. **Blog** (`/blog`) — MDX-powered listing page
11. **Blog Post** (`/blog/welcome-to-top-shelf`) — Placeholder welcome post

## Components Built
- `Navigation.tsx` — Dark green sticky header, gold CTA button, mobile hamburger
- `Footer.tsx` — Full compliance footer with SEC Form ADV link, DBA disclosure
- `CTASection.tsx` — Reusable CTA with primary/light variants, all pointing to GHL booking URL
- `SectionHeading.tsx` — Eyebrow + title + subtitle pattern
- `ScrollToTop.tsx` — Route-change scroll reset
- `not-found.tsx` — Custom 404 with hockey pun

## Voice & Copy Decisions
- Used all 5 TSPW signature lines throughout the site
- Hockey-native without being kitsch — no forced metaphors
- Urgent tone reflecting compressed earning window
- All forbidden phrases from voice doc avoided ("holistic", "synergy", "wealth management solutions", etc.)
- Compliance disclaimers on all statistics, case studies, and tax content

## Items Flagged for Josh to Verify
- [ ] Case study numbers (anonymized AHL forward example) — confirm or adjust
- [ ] AUM comparison table assumptions ($10M career, 40% savings rate, 7% return)
- [ ] Email address `josh@topshelfprivatewealth.com` on contact page — confirm correct
- [ ] 78% athlete financial difficulty statistic — verify source or replace
- [ ] Jock tax educational content — review for regulatory accuracy
- [ ] Cross-border treaty content — review for accuracy
- [ ] CBA-adjacent content — none included, but flag if any is needed

## Technical Notes
- Blog uses `gray-matter` + `next-mdx-remote/rsc` for MDX rendering
- All pages are statically generated (SSG)
- Email capture form is disabled/stubbed — needs backend integration
- No Vercel env vars configured yet (NEXT_PUBLIC_ENVIRONMENT defaults to staging behavior)
- Dark mode not implemented (single light theme with dark nav)
- No analytics installed yet

## What's NOT Done
- [ ] Headshot/photo of Josh (using logo placeholder in hero)
- [ ] Email capture backend integration
- [ ] Analytics (Vercel Analytics, GA, etc.)
- [ ] Press/Seen-in section (no verified TSPW press yet)
- [ ] Client portal preview section
- [ ] Hockey Money Playbook PDF (stub only)
- [ ] Additional blog posts
- [ ] SEO keyword landing pages from growth strategy
- [ ] Open Graph images
- [ ] Favicon (using Next.js default)
