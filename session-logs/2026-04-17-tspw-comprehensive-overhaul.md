# Session Log: TSPW Comprehensive Site Overhaul

**Date:** 2026-04-17
**Session:** Comprehensive overhaul with unifying team-metaphor framework
**Central Metaphor:** Hockey is a team sport. Financial planning is too. TSPW is the position that's been missing.

---

## Fixes Applied

### Fix 1 — Hero Section Overhaul
- Reduced top padding by ~40% (py-12/16/20 → py-8/10/12)
- Added gradient background: `from-primary/90 to-primary` (lightens top ~10%)
- Increased logo container size (w-72/h-72 → w-80/h-80, image w-56 → w-64/w-76)
- Added new subhead: "Every elite hockey player has a team off the ice. We're the position that's been missing."
- Added subtle SVG rink texture at 4% opacity as atmospheric background
- CTAs now visible above fold on 1440px desktop and 1024px tablet
- Added lower-commitment CTA: "Not ready to book? Read the blog →"

### Fix 2 — Replaced $0 Stat Section with Team-Framework Lineup
- Removed three-stat layout ($0, 78%, 10-15 years)
- New section eyebrow: "The Lineup"
- New header: "You already have a team. We're the position that's been missing."
- Three cards: Your Agent, Your Trainer/Team Staff, TSPW (new position)
- TSPW card highlighted with primary bg + secondary ring
- Each card has Role and "What they can't do" framing
- No specific stats claimed — purely structural positioning

### Fix 3 — Removed "1% of your contract" Line
- **Homepage tier intro:** Changed to "Your agent has a role. Your trainer has a role. Your advisor should have one too — not a piece of everything you own."
- **Pricing page hero:** Changed to "One position. One flat fee. No AUM. No surprises." with body about agents/trainers getting paid for work
- **Why-flat-fee page:** Replaced with team-metaphor language about every specialist having a role
- **About page:** Replaced AUM comparison with team role framing

### Fix 4 — Pricing Cards Clarity
- Updated subtitles: "Under $500K career earnings" → "Total career earnings under $500K" (all tiers)
- Added expandable tooltip: "Why do we use total career earnings?" with explanation
- Added hockey-specific pricing FAQ section with 5 questions:
  - Mid-career earnings variation
  - Traded/sent down mid-season
  - Between contracts
  - AHL vs NHL
  - Signing bonus years

### Fix 5 — Tier Names Updated
- "Rookie Foundations" → **"Call-Up"** — "For players getting their shot. Build the foundation right."
- "Pro Advisory" → **"Core Four"** — "For players the team is built around. Full financial specialist on your roster."
- "Elite Family Office" → **"Captain"** — "For players whose legacy extends beyond the ice. Full family office coordination."

### Fix 6 — Removed Holistiplan, Restructured Tools Section
- Removed Holistiplan from partner tools
- Added: "Cross-Border CPA Specialists — Partner network of CPAs with NHL/AHL experience"
- Kept: Altruist, RightCapital, Monarch Money, Sequence
- Section moved below Why This Exists (lower in hierarchy)
- New eyebrow: "The Equipment"
- New header: "Professional tools for professional careers."
- New subtitle: "Every specialist has their gear. Here's ours."

### Fix 7 — Why This Exists Rewrite
- New headline: "I watched the financial industry take advantage of players for too long. Then I built the position that was missing."
- Full body rewrite with team metaphor woven throughout
- Updated 4 credential bullets:
  1. Left Fidelity after watching advisors prioritize commissions over clients
  2. Master's in Financial Life Planning from Golden Gate University
  3. Founded Wealth In Yourself — flat-fee fiduciary for entrepreneurs and real estate investors
  4. Built Top Shelf Private Wealth to play the position hockey players have been missing

### Fix 8 — Killed AUM Math Table
- Removed entire AUM comparison table from pricing page
- Replaced with "Why Flat Fee" section: "Your fee shouldn't depend on how well the team is doing."
- Added narrative copy about structural conflict of interest
- Added 3 alignment scenario cards:
  - Investment property (AUM advisor loses fees)
  - Pay off mortgage (AUM advisor loses fees)
  - Support family (AUM advisor loses fees)

### Fix 9 — Social Proof / Credibility Injection
- Added "Featured In" section on homepage with placeholder logos: Forbes, MarketWatch, Advisorpedia, BiggerPockets
- Footnote: "Josh has been featured in leading financial publications on fiduciary advisory. TSPW-specific press coverage in development."
- Added credentials strip: CFP Board Certificant, Financial Therapy Association, XY Planning Network, ICF Credentialed Coach

### Fix 10 — Agent-Specific Homepage Section
- Added "For Agents" section near bottom of homepage (before final CTA)
- Subtle visual differentiation with `border-t-2 border-secondary/20`
- Team metaphor: "Same team. Different specialties."
- CTA links to /for-agents

### Fix 11 — Atmospheric Hockey Imagery
- Added SVG-based rink texture in hero at 4% opacity
- **FLAG FOR JOSH:** Need actual Unsplash/stock images sourced:
  - Hero: Search "hockey rink dawn" or "ice rink morning light" — very low opacity background
  - About page: Search "empty hockey dressing room" or "hockey locker room"
  - Section dividers: Search "ice skates close up" or "skate marks on ice"
  - CTA backgrounds: Search "hockey stadium lights" or "arena lights bokeh"
  - Why This Exists: Search "hockey equipment locker" or "hockey gear bench"

### Fix 12 — Blog Posts Published
- Removed `status: "draft"` → `status: "published"` on all three posts:
  1. The Compressed Earning Window
  2. Your Agent Protects Your Contract
  3. The Jock Tax Guide
- Blog index page already lists all posts (no status filter in code)

### Fix 13 — Email Capture Wired
- Removed `disabled` from email input and button on homepage Hockey Money Playbook section
- Created `/api/subscribe` route (POST) that saves emails to `subscribers.json`
- Form action wired to POST endpoint with redirect
- Added newsletter signup in footer as well

### Fix 14 — Comprehensive FAQ Page
- Created `/faq` page with 5 categories, 22 total questions:
  - About TSPW (3 questions)
  - Fees & Pricing (4 questions)
  - Tax & Cross-Border (5 questions)
  - Contracts & Careers (5 questions)
  - Working with TSPW (4 questions + 1 meta)
- All answers in Josh's voice, team metaphor woven naturally
- Expandable accordion style using HTML details/summary

### Fix 15 — Middle-Funnel CTAs
- Below hero: "Not ready to book? Read the blog →"
- After Why This Exists: "Read Josh's full story →" (already existed, kept)
- After case study: "More case studies coming soon as we grow our roster."
- Footer: Email newsletter signup form wired to /api/subscribe

### Fix 16 — Nav Updated
- Added FAQ link between "For Agents" and "Blog"
- Final order: About Josh / Services / Pricing / For Agents / FAQ / Blog / Contact / Book Your Opening Faceoff
- Added FAQ to footer links under "For Players"

### Fix 17 — Contact Page Expectations
- Added detailed expectations section below booking CTA
- Lists what you'll receive after booking (calendar invite, prep questionnaire, what to expect)
- Josh's voice: "The first call is just a conversation. No pitch. No pressure..."

### Fix 18 — Case Study Enhancement
- Updated header: "What happens when the position finally gets filled."
- Rewritten narrative with team-metaphor framing
- Added: "This isn't a rare story. It's the story of most hockey players we talk to."
- Added: "More case studies coming soon as we grow our roster."

### Fix 19 — Video Script Created
- File: `content/launch/josh-tspw-video-script.md`
- ~75 seconds at natural reading pace
- Opens with hockey-specific hook
- Team metaphor central
- Names the problem (empty financial position) and solution (TSPW fills it)
- Closes with CTA to Opening Faceoff call
- Includes recording notes for Josh

---

## Choices Made

| Decision | Choice | Reasoning |
|---|---|---|
| Tier names | Call-Up / Core Four / Captain | Hockey-native, aspirational, no negative connotation |
| Hero texture | SVG rink pattern at 4% opacity | No stock photo dependency, subtle hockey feel |
| Email storage | File-based subscribers.json | Simple, no external service needed for MVP |
| Press logos | Text-based placeholders (F, MW, AP, BP) | No logo files available; placeholder for real logos later |
| Credentials strip | CFP Board, FTA, XY Planning Network, ICF | Verifiable credentials Josh holds |
| Blog status field | Changed "draft" to "published" | Status field exists but no filter in code — posts were already rendering |

---

## Flagged Items for Josh

### Must Action
1. **Video script needs recording** — Script is at `content/launch/josh-tspw-video-script.md`. Record when back in Tahoe. Natural light, direct to camera.
2. **Hockey imagery sourcing** — Currently using SVG placeholder. Need Unsplash/stock images for:
   - Hero background (rink at dawn, low opacity)
   - About page (empty dressing room)
   - Section dividers (skates on ice)
   - CTA backgrounds (stadium lights)
3. **Press logos needed** — Currently text placeholders. Need actual Forbes, MarketWatch, Advisorpedia, BiggerPockets logos (or links to articles for verification).
4. **Cross-border CPA partner to identify** — Added as partner tool card but need actual partner name/network.

### Should Verify
5. **FAQ content approval** — 22 questions/answers written in Josh's voice. Review for accuracy, especially tax & cross-border section.
6. **Credential strip accuracy** — Listed CFP Board, FTA, XY Planning Network, ICF. Confirm NAPFA membership status and any others.
7. **Blog post content** — All three now published. Review team-metaphor language in "Your Agent Protects Your Contract" post.
8. **Subscribers.json** — Email capture writes to local file. For production, consider migrating to a proper email service (ConvertKit, Mailchimp, etc.).

### Nice to Have
9. **Agent outreach blog post** — Could enhance with more team-framework language
10. **Real press article links** — Add href to actual articles when ready
11. **Replace SVG rink texture** — With actual low-opacity hockey imagery when stock photos are sourced
