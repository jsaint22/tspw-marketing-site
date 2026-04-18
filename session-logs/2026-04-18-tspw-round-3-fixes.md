# TSPW Round 3 Fixes — Session Log

**Date:** 2026-04-18
**Session:** Round 3 consolidated fixes from Josh's answers to 15 open questions + agent fee correction + hero image research

---

## Fix 1 — Credential Strip: "Fee-Only Fiduciary"

**File:** `src/app/page.tsx` (line ~587)
**What changed:** Replaced "NAPFA-Aligned Practices" with "Fee-Only Fiduciary" in the homepage credentials strip. Josh is not affiliated with NAPFA. "Fee-Only Fiduciary" is factual and makes no organizational claim.

**Final credentials strip:** CFP Board Certificant | Financial Therapy Association | Fee-Only Fiduciary | ICF Credentialed Coach

---

## Fix 2 — Press Logos

**File:** `src/app/page.tsx` (press section, lines ~553-575)
**What changed:**
- Upgraded text placeholders to elegant serif-styled wordmarks (Georgia font family, tracked letterSpacing) — no longer crude initials
- Added detailed code comment listing exactly which files Josh needs to upload:
  - `/public/press/forbes.svg`
  - `/public/press/marketwatch.svg`
  - `/public/press/advisorpedia.svg`
  - `/public/press/biggerpockets.svg`
- Updated footnote to: "Press coverage includes general advisory work. TSPW-specific press mentions in development."
- `public/press/` directory exists but is **empty** — Josh needs to upload all 4 logo files

**Josh action required:** Upload the 4 SVG logo files to `/public/press/`. Once present, swap the text placeholders for `<Image>` components.

---

## Fix 3 — Hero Background: 3 Candidate Images for Josh

**Status:** AWAITING JOSH'S PICK. Current placeholder hero remains in place.

### Candidate 1 (RECOMMENDED) — Taylor Friehl, Pond Hockey on Frozen Lake, Minnesota (Unsplash)

- **URL:** https://unsplash.com/photos/two-persons-playing-hockey-on-ice-field-5tqaSa9bsSU
- **Photographer:** Taylor Friehl (@taylor_friehl)
- **Source:** Unsplash
- **License:** Unsplash License — FREE for commercial use, no attribution required
- **Description:** Two people playing hockey on a frozen lake in Minnesota. Players appear distant/small, focus on the expansive frozen setting.
- **Why it fits:** Most frequently surfaced pond hockey image across all searches. Minnesota setting is authentically pond hockey. Free license = zero friction. Atmospheric, light, outdoor hockey roots.
- **Caveat:** Two players visible (distant). Shot on iPhone 8 Plus (~4032x3024). Verify framing works at hero scale.
- **Also from same photographer:** https://unsplash.com/photos/man-in-white-shirt-and-black-pants-holding-white-stick-standing-on-snow-covered-ground-during-byhpFPXLdy4

### Candidate 2 — Hockey Player Skating at Sunset on Frozen Lake (iStock)

- **URL:** https://www.istockphoto.com/photo/hockey-player-skating-on-a-frozen-lake-at-sunset-gm1060242856-283399039
- **Source:** iStock (Getty Images subsidiary)
- **License:** Royalty-free, PAID (~$10-30 standard license). Commercial use permitted.
- **Description:** Hockey player skating on a frozen lake at sunset. Golden-hour lighting, reflections on ice. Tagged "Hockey, Winter, Canada."
- **Why it fits:** Golden-hour/sunset lighting creates the exact "light, atmospheric" mood. Player likely silhouetted. Canadian winter landscape.
- **Caveat:** Paid license required. One player visible (likely silhouetted).
- **Resolution:** High-res (typically 4000-6000px).

### Candidate 3 — Empty Hockey Net on Frozen Pond at Dusk (iStock/Getty collection)

- **Search URL:** https://www.istockphoto.com/photos/ice-hockey-net-dusk-cold
- **Also:** https://www.gettyimages.com/photos/pond-hockey-goal (761 images)
- **Source:** iStock / Getty Images
- **License:** Royalty-free, PAID (~$10-50 depending on resolution).
- **Description:** Collection of images featuring empty hockey nets on frozen ponds/lakes at dusk/dawn. No players. Atmospheric, quiet, contemplative.
- **Why it fits:** BEST match for "no players visible" requirement. Empty net + frozen lake + dawn/dusk = the pure pond hockey atmosphere. Quiet, contemplative vibe pairs perfectly with financial planning brand.
- **Caveat:** This is a search collection, not a single image. Josh needs to browse iStock and pick the specific composition.

### Recommendation

**Start with Candidate 3** (empty net collection on iStock) for the purest "atmospheric, no players" shot. Budget $10-30.

**Free fallback:** Candidate 1 (Taylor Friehl on Unsplash) can be downloaded immediately for prototyping.

### Bonus options worth browsing

- **Pexels:** https://www.pexels.com/photo/people-playing-hockey-on-a-frozen-lake-10588109/ (free)
- **Getty — Lake Louise:** https://www.gettyimages.com/photos/lake-louise-hockey (245 images, stunning mountain backdrop, may be editorial-only)
- **Unsplash — Hockey equipment in snow:** https://unsplash.com/photos/a-hockey-stick-and-a-hockey-puck-in-the-snow-S1mDx_emQeg (free, no players, close-up detail)

---

## Fix 4 — Agent Fee Range: 3-5% changed to 3-6%

**Files changed:**

| File | Line | Before | After |
|------|------|--------|-------|
| `src/content/blog/agent-protects-contract.mdx` | 23 | "3 to 5% of contract value" | "3 to 6% of contract value" |
| `src/content/blog/compressed-earning-window.mdx` | 71 | "agent fees (3 to 5%)" | "agent fees (3 to 6%)" |

**Repo-wide grep confirms:** Zero remaining instances of "3-5%", "3 to 5%", or "three to five percent" anywhere in the codebase.

**Not changed (no instances found):**
- Homepage copy — no fee range references
- `/for-agents` page — no fee range references
- FAQ page — no fee range references
- Pricing page — no fee range references
- Jock tax guide — no fee range references
- LinkedIn launch posts — no fee range references

---

## Fix 5 — Opening Faceoff Call Name

**Status:** CONFIRMED. "Opening Faceoff" is the final call name. No changes made. Used consistently across the site.

---

## Fix 6 — Tier Names

**Status:** CONFIRMED. Call-Up / Core Four / Captain. No changes made. Used consistently across homepage and pricing page.

---

## Fix 7 — For Agents Page

**Status:** CONFIRMED as-is. No changes made. Page locked.

---

## Fix 8 — "Independence from Agent" Passage

**File:** `src/content/blog/agent-protects-contract.mdx` (line 87)
**Status:** Already correct from Round 2. The passage reads:

> "Each specialist on your team has their own accountability. Your agent is accountable to you for your contract. Your trainer is accountable to you for your body. Your financial advisor should be accountable to you for your money — chosen by you, paid by you, answering to you. That's not about independence FROM your agent; it's about everyone on your team having clear, independent accountability TO you."

No changes needed. Verified this is what ships.

---

## Fix 9 — "Why This Exists" — "Changing From the Inside"

**File:** `src/app/page.tsx` (lines ~381-409)
**Status:** Already correct from Round 2. The paragraph reads:

> "Your teammate's 'advisor' sold him an annuity because the commission was bigger. Your buddy's CPA has never filed a jock tax return in his life. The 'financial planner' your agent mentioned is getting a kickback on every dollar he recommends you save. I've seen all of it. I'm not walking away from the industry — I'm changing how it works from the inside, starting with hockey players."

No changes needed. Verified this is what ships.

---

## Fix 10 — Josh Video Script

**Status:** CONFIRMED. Script at `content/launch/josh-tspw-video-script.md` is locked. No changes to script.

Video placeholder added to About page (see Fix 12).

---

## Fix 11 — Hockey Imagery: Section Dividers

**File:** `src/app/page.tsx`
**Status:** Placeholder comments added at 3 locations:

1. Below "Why This Exists" section (before Equipment section)
2. Below tier pricing section (before Hockey Money Playbook)
3. Above final CTA section

Each placeholder includes implementation spec: 15-25% opacity, full-width, ~120px tall, bg-cover bg-center.

**Awaiting:** Josh's hero image choice (Fix 3). Once chosen, 2-3 companion images from the same aesthetic family will be recommended for divider use.

---

## Fix 12 — Video Placement: /about Page

**File:** `src/app/about/page.tsx`
**What changed:** Added "A Minute With Josh" video section between the hero and origin story sections.

- Section title: "A Minute With Josh"
- Video placeholder: Play icon SVG + "Video coming soon" text in a 16:9 aspect-ratio container
- Caption below: "60 seconds on why I built Top Shelf Private Wealth."
- Detailed code comment explaining exactly how to swap in the real video embed (one-line change)

**Josh action required:** Record the video, upload to YouTube/Vimeo, replace the placeholder div with an `<iframe>` embed.

---

## Fix 13 — Launch Blockers Status

### Launch Readiness Summary

| Item | Status | Owner | Notes |
|------|--------|-------|-------|
| Hero image chosen | BLOCKING | Josh | Pick from 3 candidates in Fix 3 above |
| Section divider images | BLOCKED BY HERO | Josh/Claude | Will recommend after hero chosen |
| Press logos uploaded | BLOCKING | Josh | Need 4 SVGs in `/public/press/` |
| Cross-border CPA partner | OUTSTANDING | Josh | Still needs to identify partner — flag for follow-up |
| Josh video recorded | OUTSTANDING | Josh | Script approved, awaiting recording in Tahoe |
| Hockey Money Playbook PDF | NOT BLOCKING | Separate session | Email capture live; PDF build is a separate project |
| All content and copy fixes | DONE | Claude | Rounds 1 + 2 + 3 applied |
| Pricing page | DONE | — | Correct and verified |
| FAQ page | DONE | — | Complete, 22 questions |
| Blog posts | DONE | — | 4 posts live |
| Nav consolidation | DONE | Claude | Header simplified, footer restructured |
| Credential strip | DONE | Claude | "Fee-Only Fiduciary" replaces NAPFA |
| Fee range correction | DONE | Claude | 3-6% everywhere |
| Voice audit | DONE | Claude | Clean — see Fix 16 |

### What's Ready to Launch

The site is **functionally complete**. All copy, pricing, blog posts, FAQ, services, and pages are finalized. The nav is clean. The voice is consistent. The brand metaphor is solid throughout.

### What Josh Needs to Do Before Launch

1. **Pick a hero image** from the 3 candidates above (5 minutes)
2. **Upload 4 press logos** to `/public/press/` (or confirm text placeholders are acceptable for launch)
3. **Record the 60-second video** (can launch without this — placeholder is clean)
4. **Identify cross-border CPA partner** (can launch without this — "Partner network of CPAs with NHL/AHL experience" is already the placeholder text)

### Recommendation

**Launch is not blocked by any code changes.** The remaining items are all Josh-dependent content (images, logos, video). The site can soft-launch immediately with the current text placeholders and be upgraded to final assets as Josh provides them.

---

## Fix 14 — Hockey Money Playbook: Separate Project Spec

**Current state on site:** "Coming soon. Enter your email to get notified when it drops." — email capture is LIVE and functional.

### Hockey Money Playbook PDF — Build Spec for Next Session

**Format:** 10-15 page PDF
**Voice:** TSPW brand voice — direct, hockey-native, warm but not soft
**Design:** TSPW palette (forest green #1B3A2D, champagne gold #C9A84C, cream #F5F0E8)
**Distribution:** Via `/api/subscribe` endpoint (same as WIY AUM Math PDF)

**Chapters/Sections:**

1. **The Compressed Earning Window** — Why hockey math is different from everyone else's (10-15 years vs 40)
2. **Jock Tax Fundamentals** — What it is, how duty-day allocation works, what it costs when ignored
3. **Cross-Border Basics** — US-Canada tax treaty, residency planning, dual filing
4. **Career Transition Planning** — Building post-hockey financial architecture while income is flowing
5. **Flat-Fee vs AUM for Athletes** — Why the fee model matters more for compressed careers
6. **Common Mistakes First-Contract Players Make** — The financial traps that catch rookies
7. **What Your Agent Does vs What Your Financial Advisor Does** — Clear role delineation (team metaphor)
8. **How to Build Your Team Off the Ice** — Agent, trainer, advisor, CPA, estate attorney — who does what
9. **The Savings Rate Reality** — Why 15% isn't enough when your career is 12 years
10. **Life After Hockey** — Income replacement, identity transition, what financial security actually looks like at 35

**Target build:** Next Claude Code session (Round 4 or dedicated project)

---

## Fix 15 — Nav Consolidation

### Header Navigation (changed)

**File:** `src/components/Navigation.tsx`

**Before:** About Josh | Services | Pricing | For Agents | FAQ | Blog | Contact | [CTA]
**After:** About | Services | Pricing | For Agents | Blog | [CTA: Book Your Opening Faceoff]

Removed: FAQ, Contact from header nav.

### Footer Navigation (changed)

**File:** `src/components/Footer.tsx`

**Before:**
- Advisory: About Josh, Services, Pricing, Contact
- For Players: Jock Tax, Cross-Border, Why Flat Fee, For Agents, FAQ
- Learn: Blog

**After:**
- Advisory: About, Services, Pricing, Contact
- For Players: Jock Tax, Cross-Border, Why Flat Fee, FAQ
- Learn: Blog
- For Agents: Agent Partnership

FAQ and Contact remain accessible via footer. "For Agents" moved to its own footer column. "For Agents" link removed from "For Players" column (it was misplaced there).

---

## Fix 16 — Voice Audit (Final Pass)

### Repo-wide audit results:

| Check | Result | Details |
|-------|--------|---------|
| Agent-adversarial language | CLEAN | Zero instances. All agent references use team metaphor. |
| Team metaphor contradictions | CLEAN | Consistent "same team, different positions" throughout. |
| Unsourced statistics | CLEAN | Case study has disclaimer. Tax rates noted as educational. |
| Inconsistent numbers between pages | CLEAN | Fee range now 3-6% everywhere. "8 to 18 jurisdictions" consistent. |
| NAPFA references | CLEAN | Zero instances in src/. Only in historical session logs. |
| XY Planning Network | CLEAN | Zero instances in src/. Only in historical session logs. |
| "1% of your contract" | CLEAN | Zero instances. |
| Anti-agent framing | CLEAN | Zero instances. |
| References to non-existent features | CLEAN | All internal links resolve. All referenced pages exist. |

### Specific items reviewed:
- `agent-protects-contract.mdx` line 93: "1% of assets under management" — this is describing the AUM model problem in context, NOT anti-agent framing. Appropriate.
- `linkedin-day-2.mdx` line 16: "1% of assets under management" — same context, describing AUM vs flat-fee. Appropriate.
- All "replace" language in services page and blog — contextually correct (e.g., "We don't replace your agent"). Team-positive.

---

## Files Modified in This Session

| File | Fixes Applied |
|------|---------------|
| `src/app/page.tsx` | Fix 1 (credential strip), Fix 2 (press logos), Fix 11 (divider placeholders) |
| `src/components/Navigation.tsx` | Fix 15 (nav consolidation) |
| `src/components/Footer.tsx` | Fix 15 (footer restructure) |
| `src/app/about/page.tsx` | Fix 12 (video section) |
| `src/content/blog/agent-protects-contract.mdx` | Fix 4 (3-5% → 3-6%) |
| `src/content/blog/compressed-earning-window.mdx` | Fix 4 (3-5% → 3-6%) |

## Build Status

`npm run build` — **PASS**. All 19 routes generated successfully. No errors.
