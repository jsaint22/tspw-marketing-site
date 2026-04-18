# TSPW Round 2 Fixes — 2026-04-18

Josh walkthrough review: 14 fixes applied.

---

## Fix 1 — Hero Background: Hockey Imagery

**Status:** Placeholder implemented. Josh action required.

**Files modified:** `src/app/page.tsx`

**What changed:** Replaced the inline SVG rink texture and flat gradient with a proper background image structure. Added a dark forest green overlay at 60% opacity for text readability. The `backgroundImage` line is commented out, waiting for Josh to source the image.

**Josh action:**
1. Search Unsplash for: "pond hockey canada", "frozen lake hockey", "outdoor hockey nets", "pond hockey dusk"
2. Or search Pexels with the same terms
3. Download high-quality landscape image (at least 1920px wide)
4. Save as `/public/brand/hero-bg.jpg`
5. Uncomment the `backgroundImage` line in the hero section of `src/app/page.tsx`

Target aesthetic: frozen pond/lake in Canada with nets set up, no players, early morning or dusk lighting.

---

## Fix 2 — Header Logo Size

**Status:** Complete.

**Files modified:** `src/components/Navigation.tsx`

**What changed:**
- Logo: `h-12 sm:h-14` -> `h-16 sm:h-20` (roughly 40% increase)
- Nav bar height: `h-16 sm:h-20` -> `h-20 sm:h-24` (to accommodate larger logo)
- Added `max-w-[200px] sm:max-w-none` to prevent mobile overflow
- Updated `width`/`height` attributes to 250/83 for proper aspect ratio

---

## Fix 3 — "Why This Exists" Copy Correction

**Status:** Complete.

**Files modified:** `src/app/page.tsx`

**What changed:** Replaced "I left the industry because of it." with "I'm not walking away from the industry -- I'm changing how it works from the inside, starting with hockey players."

Also softened the section heading from "take advantage of players" to "underserve hockey players."

---

## Fix 4 — Trusted Experience / Press Section

**Status:** Placeholder improved. Josh action required.

**Files modified:** `src/app/page.tsx`

**What changed:** Replaced single-letter icon placeholders (F, MW, AP, BP) with full publication name text. Added detailed comment with instructions for Josh to source actual logos.

**Josh action:**
1. Source logos from each publication's press/brand portal
2. Save as SVG or PNG in `/public/press/` (directory created)
3. Replace text placeholders with `<Image>` components
4. Verify usage rights before publishing

Note: No press logo files were found in the wiy-marketing-site repo.

---

## Fix 5 — Remove XY Planning Network Reference

**Status:** Complete.

**Files modified:** `src/app/page.tsx`

**What changed:** Replaced "XY Planning Network" credential badge with "NAPFA-Aligned Practices" in the homepage credentials strip.

**Locations checked:**
- Homepage credentials strip (fixed)
- About page (no XY reference found)
- Footer (no XY reference found)
- Meta tags / schema (no XY reference found)

---

## Fix 6 — "Agent Contract Drags On" Line

**Status:** Complete.

**Files modified:** `src/app/pricing/page.tsx`

**What changed:** Removed "Your agent doesn't get paid more when your contract drags on" (factually wrong). Replaced paragraph with team-metaphor-respecting language: "Every specialist on your team gets paid for the work they do. Your trainer gets paid for conditioning. Your agent gets paid for negotiating. Your advisor should get paid for planning -- not for the size of your portfolio."

---

## Fix 7 — "Why Flat Fee Matters When You Have a Team" Section

**Status:** Confirmed existing. Enhanced visibility.

**Files modified:** `src/app/pricing/page.tsx`

**What changed:** The section already existed on the pricing page with the 3 alignment scenario cards (investment property, mortgage payoff, family gifting). Updated eyebrow from "Why Flat Fee" to "Why Flat Fee Matters When You Have a Team" for better visibility and searchability.

---

## Fix 8 — Tier Reassessment Language

**Status:** Complete.

**Files modified:**
- `src/app/pricing/page.tsx`
- `src/app/faq/page.tsx`

**Canonical language applied:** "We revisit your tier each summer during off-season review -- the natural time to look at the year behind and the year ahead. Contract changes, unexpected bonuses, or new family situations can trigger an earlier conversation, but the default cadence follows the hockey calendar."

---

## Fix 9 — Jock Tax Filing Count Consistency

**Status:** Complete.

**Files modified:**
- `src/app/faq/page.tsx` (2 locations)
- `src/app/jock-tax/page.tsx` (2 locations)
- `src/content/blog/jock-tax-guide.mdx` (1 location)
- `src/content/blog/agent-protects-contract.mdx` (1 location)
- `src/content/blog/compressed-earning-window.mdx` (2 locations)
- `src/content/launch/linkedin-day-3.mdx` (1 location)

**Canonical claim:** "Most NHL players file tax returns in 8-18 state and provincial jurisdictions per season, depending on division alignment, cross-border travel, and postseason play."

**Disclaimer added:** "Exact count varies year-to-year and by individual player."

---

## Fix 10 — Blog Double-Title Problem

**Status:** Complete.

**Files modified:** `src/app/blog/[slug]/page.tsx`

**What changed:** The issue was that the layout template renders `post.data.title` as an h1 in the hero section, AND each MDX file starts with `# Title` which renders a second h1. Added `[&>h1:first-child]:hidden` CSS class to the article element, which hides the first h1 from the MDX content while preserving the styled hero title.

This fix is universal across all blog posts.

---

## Fix 11 — "Agent Protects Contract" Blog: Collaborative Language

**Status:** Complete.

**Files modified:** `src/content/blog/agent-protects-contract.mdx`

**Changes:**
- Title: "Nobody's Protecting Your Money" -> "Who's Protecting Your Money?"
- Description: Updated to remove adversarial framing
- "That's not a criticism" paragraph: rewritten with team-position language
- "The Conflict Nobody Mentions" section: completely rewritten as "The Structural Challenge with Referral Arrangements" -- removed conspiracy framing, focused on structural AUM incentive issues, added explicit note that agents genuinely want the best for clients
- "Independence from the agent relationship" passage: rewritten as "Clear, independent accountability" with team-metaphor language
- "The Standard Needs to Change" section: rewritten as "Every Position Needs to Be Filled" -- team-metaphor framing
- Jock tax count standardized to 8-18 range
- "15 states" reference softened to "multiple states"

---

## Fix 12 — Jock Tax Guide Corrections

**Status:** Complete.

**Files modified:** `src/content/blog/jock-tax-guide.mdx`

**Error 1 fixed:** "Some at home. Most on the road." -> "Exactly half at home. Exactly half on the road." (NHL regular season is 41 home + 41 away)

**Error 2 fixed:** Removed the Oregon entry entirely ("Oregon (no NHL team, but used for context): 9.9%. Not relevant for regular-season games but matters for preseason exhibitions.")

**Additional:** Standardized jock tax filing count to canonical "8 to 18" range.

---

## Fix 13 — "Welcome to Top Shelf" Blog + Repo-Wide Grep

**Status:** Complete.

**Files modified:**
- `src/content/blog/welcome-to-top-shelf.mdx`
- `src/content/launch/linkedin-day-2.mdx`
- `src/content/launch/linkedin-day-1.mdx`

**Repo-wide grep results for anti-agent language:**

| Pattern | Matches found | Action |
|---------|---------------|--------|
| "1% of your contract" | welcome-to-top-shelf.mdx, linkedin-day-2.mdx | Replaced with team-metaphor language |
| "agent doesn't take" | welcome-to-top-shelf.mdx, linkedin-day-2.mdx | Replaced |
| "Nobody's protecting" | linkedin-day-1.mdx | Replaced with "who's playing the financial position" |
| "taken advantage" | welcome-to-top-shelf.mdx, page.tsx | Changed to "underserved" |

---

## Fix 14 — General Voice Audit

**Status:** Complete.

**Final pass results:**

1. **Agent-adversarial language:** All instances identified and fixed (see Fixes 6, 11, 13 above)
2. **Team metaphor contradictions:** "take advantage of" language softened to "underserve" in two locations
3. **Unsourced statistics:** All jock tax filing counts consolidated to canonical "8-18" range with disclaimer
4. **Inconsistent numbers:** Resolved -- all pages now use the same "8-18 state and provincial jurisdictions" claim

**Remaining items that are factual and not adversarial (left as-is):**
- `agent-protects-contract.mdx`: "what your agent doesn't do -- and isn't licensed to do" (factual statement about licensing scope)
- `services/page.tsx`: "We don't replace your agent" (pro-team framing)

---

## Summary of All Files Modified

| File | Fixes Applied |
|------|---------------|
| `src/app/page.tsx` | 1, 3, 4, 5, 14 |
| `src/components/Navigation.tsx` | 2 |
| `src/app/pricing/page.tsx` | 6, 7, 8 |
| `src/app/faq/page.tsx` | 8, 9 |
| `src/app/blog/[slug]/page.tsx` | 10 |
| `src/app/jock-tax/page.tsx` | 9 |
| `src/content/blog/agent-protects-contract.mdx` | 9, 11 |
| `src/content/blog/jock-tax-guide.mdx` | 9, 12 |
| `src/content/blog/welcome-to-top-shelf.mdx` | 13, 14 |
| `src/content/blog/compressed-earning-window.mdx` | 9 |
| `src/content/launch/linkedin-day-1.mdx` | 13 |
| `src/content/launch/linkedin-day-2.mdx` | 13 |
| `src/content/launch/linkedin-day-3.mdx` | 9 |

---

## Items Flagged for Josh

1. **Hero background image** -- needs to source a pond hockey image from Unsplash/Pexels and save as `/public/brand/hero-bg.jpg`
2. **Press logos** -- needs to source actual publication logos (Forbes, MarketWatch, Advisorpedia, BiggerPockets) and save in `/public/press/`
3. **NAPFA-Aligned Practices** -- replaced XY Planning Network with this. Josh should confirm this is accurate or substitute the correct credential/affiliation.

---

## Build Status

Build passes cleanly. All 19 pages generated successfully.
