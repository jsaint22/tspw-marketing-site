# Session Log: TSPW Launch Content Suite

**Date:** April 17, 2026  
**Task:** Build complete TSPW launch content suite — LinkedIn posts, blog posts, agent outreach templates, email templates, and quarterly brief template.  
**Status:** Complete. All content staged as drafts. Build passes.

---

## What Was Created

### LinkedIn Launch Series (5 posts + 1 bonus)
| File | Topic |
|------|-------|
| `src/content/launch/linkedin-day-1.mdx` | Origin story — Litchfield NH rink → Lake Tahoe → why TSPW |
| `src/content/launch/linkedin-day-2.mdx` | AUM math for $10M career earner |
| `src/content/launch/linkedin-day-3.mdx` | Jock tax reality and what ignoring it costs |
| `src/content/launch/linkedin-day-4.mdx` | Fiduciary vs. suitability — hockey agent analogy |
| `src/content/launch/linkedin-day-5.mdx` | Launch announcement — "Top Shelf Private Wealth is live" |
| `src/content/launch/hockey-hat-trick.mdx` | Fidelity hat-trick observation reframed for hockey |

### Blog Posts (3 posts)
| File | Topic | Length |
|------|-------|--------|
| `src/content/blog/compressed-earning-window.mdx` | Why hockey math is different | ~1,500 words |
| `src/content/blog/agent-protects-contract.mdx` | The gap between contract and money protection | ~1,200 words |
| `src/content/blog/jock-tax-guide.mdx` | Complete jock tax explainer with state-by-state data | ~1,500 words |

All three blog posts render via the existing `/blog/[slug]` route and are included in the build output.

### Agent Outreach Templates
| File | Contents |
|------|----------|
| `src/content/agent-outreach/templates.md` | 5 email variants: cold outreach, follow-up, content engagement, post-call thank-you, quarterly brief delivery |

### Quarterly Brief Template
| File | Contents |
|------|----------|
| `src/content/agent-briefs/template-q1.md` | Full one-page template with jock tax developments, CBA implications, checklist, anonymized case study, resource link |

### Email Templates
| File | Contents |
|------|----------|
| `src/content/email-templates/opening-faceoff-prep.md` | Pre-call prep email for GHL automation — sent after prospect books 30-min call |

---

## TSPW Signature Lines — Usage Tracking

All five signature lines used at least once across the suite:

| Signature Line | Used In |
|----------------|---------|
| "Your career is shorter than you think. Your window to act is now." | Day 1, Day 5, compressed-earning-window blog |
| "Your agent protects your contract. Nobody's protecting your money." | Day 1, agent-protects-contract blog |
| "The jock tax is the most expensive thing nobody talks to you about." | Day 3, jock-tax-guide blog |
| "Life-changing money should change your life." | Day 2, quarterly brief template |
| "Top shelf standards on the ice. Apply them to your money." | Day 3, hockey-hat-trick, jock-tax-guide blog |

---

## Compliance Notes

- No performance guarantees in any content
- No NHLPA endorsement claims
- Jock tax state-by-state data marked "current as of 2026" with annual-change disclaimers
- No real player names or fabricated player stories
- Case studies are explicitly labeled as anonymized composites
- Blog posts staged as drafts (status: draft in frontmatter)

---

## Build Verification

Build passes. All blog posts render correctly at their slug URLs:
- `/blog/compressed-earning-window`
- `/blog/agent-protects-contract`
- `/blog/jock-tax-guide`
- `/blog/welcome-to-top-shelf` (pre-existing)

---

## What Josh Needs to Do

1. **Review all content** for voice accuracy and factual correctness
2. **LinkedIn posts:** Copy text from each MDX file and paste into LinkedIn when ready to launch. Post one per day for five days, with the hat-trick post as a bonus any time.
3. **Blog posts:** Remove `status: "draft"` from frontmatter and redeploy when ready to go live
4. **Agent outreach:** Customize bracketed fields per agent and load into GHL
5. **Quarterly brief:** Populate with actual Q1 data before first distribution
6. **Opening Faceoff email:** Configure in GHL as automated send on booking confirmation
