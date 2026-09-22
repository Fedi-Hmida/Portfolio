# Implementation Prompt — Execute the Roadmap, Phase by Phase

> **Inputs:** `00_MASTER_PROMPT.md` (governing spec) · `01_DEEP_AUDIT.md` (findings) · `02_ROADMAP.md` (the plan)
> **Mode:** execution, not planning. The plan is approved. Build it.
> **Branch:** `feat/france-update` (already created off `main`)

---

## 0. Role activation

You remain the **seven-role panel** from `00_MASTER_PROMPT.md` — R1 Frontend · R2 Information
Architect · R3 Recruiter/Career Strategist · R4 UI/UX · R5 SEO · R6 QA/Release · R7 Docs.

Now add two execution-only roles:

| # | Role | Mandate |
|---|------|---------|
| **R8** | **Implementation Lead** | Owns sequencing. Executes phases in dependency order, marks each task in/out of progress, never starts a phase whose dependency is unverified. |
| **R9** | **Adversarial Reviewer** | After each phase, actively tries to break what was just built. Assumes the change is wrong until evidence says otherwise. Has standing authority to reopen a phase marked done. |

**Conflict rule unchanged:** the owning role decides, the others review, disagreements are
stated aloud rather than averaged away.

---

## 1. Skills to invoke

- **`superpowers:executing-plans`** — governs the whole run. Announce it, create one todo per
  phase, follow the plan's steps exactly, stop when blocked rather than guessing.
- **`superpowers:verification-before-completion`** — invoke at Phase 8, before any "done"
  claim. Evidence precedes assertion, always.
- **`superpowers:finishing-a-development-branch`** — invoke only after Phase 8 passes, to
  decide how this branch integrates.

**Explicitly NOT to be used:** `test-driven-development` (this is content/copy work on a CRA
app with no test harness — writing tests for a JSX copy change is ceremony, not rigor) and
`using-git-worktrees` (the branch already exists and the working tree is clean of unrelated
edits; a worktree adds indirection with no isolation benefit here).

> R9 note: if a phase turns out to need real logic rather than data, reconsider TDD for that
> phase alone and say so.

---

## 2. State at the start of this run

Phases 0–3 are **already complete and verified** from the previous session. Do not redo them.

| Phase | State | Evidence |
|---|---|---|
| 0 — Baseline & assets | ☑ done | branch `feat/france-update` created; `npm install` exit 0; new portrait, cover image and `CV_Ang_ATS.pdf` installed; 3 obsolete CVs `git rm`'d (both recommendation letters deliberately kept) |
| 1 — Identity | ☑ done | `socialLinks.js` 6/6 replacements; map iframe repointed to Limoges |
| 2 — Photo | ☑ done | both imports repointed to `slider/Fedi_Hmida.png` |
| 3 — Hero location | ☑ done | `HERO_LOCATION` constant + `MapPin` row rendered above the animated underline |
| — CV links | ☑ done | all 3 references repointed to `/assets/cv/CV_Ang_ATS.pdf` |

**Remaining: Phases 4, 5, 6, 7, 8.**

---

## 3. Execution contract — applies to every phase

1. **Read before writing.** Never patch a file you have not read in this session.
2. **Assert, don't hope.** Every string replacement asserts its match count is exactly 1. A
   silent no-op replacement is a defect, not a convenience.
3. **One phase, one verification.** Do not batch four phases and verify once at the end.
4. **No invention.** Every fact traces to `CV_Ang_ATS.pdf`. If a claim is not in the CV and not
   already on the site, it does not go in.
5. **Preserve existing data shapes.** New entries mirror the structure of their siblings
   exactly — including the `{ text, strong }` bullet parts and the six accent tokens.
6. **Do not commit or push** until Phase 8 passes and the user approves.

---

## 4. Phase specifications

### Phase 4 — Résumé data · *owner R3, review R2/R4*

Rewrite `src/data/resume.js` in three parts.

**4A Experience** — prepend the BNS entry; correct the two existing entries' titles and dates
against the CV. Bold every metric: the numbers are the differentiator.

> ⚠️ **R4 constraint discovered during audit:** `ExperienceCard.jsx:16` positions `duration`
> at `absolute top-6 right-6` while `role` sits in normal flow. A role string much longer than
> the current maximum (~37 chars) will collide with the date badge on narrow viewports. Keep
> the role title within that budget and carry the fuller title in bullet 1. State this
> trade-off in the report rather than silently truncating.

**4B Education** — prepend 3iL Ingénieurs; give all three entries real year ranges.

**4C Skills** — expand the technical-skill groups to cover the back-end, data, security and
DevOps stack the CV claims and the site does not.

> 💡 **R1 discovery:** `SkillCard.jsx:15-26` already defines icon types `backend`, `database`
> and `devops` that **no current group uses**. The component was designed for these groups.
> Use those exact `type` keys. Target **8 groups**, which tiles cleanly as 3+3+2 on
> `lg:grid-cols-3` and 2×4 on `md:grid-cols-2` — 7 would orphan a card.

Mirror the additions into `src/data/skills.js` (`hardSkills`) so the Home carousel agrees.
Note that `hardSkills` is paginated 8-per-page at `Home.jsx:50`; additions change the page count.

**Verify:** `npm run build`; skills grid tiles with no orphan; no role/date collision at 360px.

---

### Phase 5 — About page · *owner R3, review R4*

`src/pages/About.jsx`: rewrite the three bio paragraphs, the two core-competency columns, and
the career-focus block. Fix the `"ability to delivery"` typo at line 186.

**Constraints:** keep exactly three paragraphs and keep the two competency columns equal in
length — `md:grid-cols-2` at line 89 looks broken when one column runs longer.

**Narrative (R3):** double degree 3iL × ESPRIT → multi-agent LLM systems → production
full-stack delivery → concrete availability (internship April 2027, alternance September 2027).

**Verify:** build clean; columns balanced; no contradiction with the résumé written in Phase 4.

---

### Phase 6 — SMART HRM AI project · *owner R1, review R4/R3*

Four coordinated edits. Missing any one leaves the feature half-wired.

1. `src/data/projects.js` — new entry, `id: 7`, **prepended** (newest first), carrying **all
   six** accent tokens. `ProjectCard.jsx:6-13` reads every one as a CSS custom property;
   omitting any silently falls back to pink and the card will not match its siblings.
2. Cover image — already installed at
   `src/assets/images/Portfolio/SmartHrmAi/smart-hrm-ai-cover.jpg` (cropped from the app's own
   splash screen, 1160×795, 113 KB).
3. `src/pages/Portfolio/SmartHrmAiDetails.jsx` — **new page**.
4. `src/App.js` — lazy import + `<Route path="/portfolio/smart-hrm-ai">` wrapped in
   `<AnimatedPage>`, matching the sibling pattern.

> 🔒 **Scaffold contract — non-negotiable.** The page ships as a **valid, styled, empty shell**:
> `Navbar`, `ParticlesBackground`, a hero carrying only CV-sourced facts (title, role, company,
> dates, stack), section headings with **visible placeholder markers**, `Footer`, default export.
> **Zero fabricated case-study prose.** The user writes the content later. The placeholders must
> be obviously placeholders — a reader must never mistake them for finished copy.

Accent palette: derive from the cover art's own cyan/blue, so the card reads as one piece with
its image rather than fighting it.

**Verify:** `/portfolio` shows 7 cards; every filter chip still works; the new card routes to a
page that renders with a clean console.

---

### Phase 7 — Contact copy & SEO · *owner R3 + R5, review R6*

- `ContactHero.jsx:19-25` — retarget from "junior Flutter/mobile roles" to the real ask:
  AI/Software Engineering **internship from April 2027** and **alternance from September 2027**,
  based in France. Retune the filter pills to match.
- `ConnectSection.jsx:22` — SmartClaim is no longer the flagship; point at the current work.
- `public/index.html:21-35` and `public/manifest.json:3-4` — retire "Flutter & AI Portfolio".
  Lead with AI/Software engineering and make **Limoges, France** discoverable.

**Verify:** build clean; grep finds no surviving "Flutter & AI Portfolio"; `<title>` and OG tags
agree with each other.

---

### Phase 8 — Verification & release · *owner R6, enforced by R9*

**Invoke `superpowers:verification-before-completion` here.** Evidence before assertions.

| Gate | Method | Pass condition |
|---|---|---|
| 8.1 | `npm run build` | exit 0; warning set no worse than the Phase 0 baseline |
| 8.2 | grep for retired values | zero hits for old email / phone / WhatsApp / city / `Cv_Ang.pdf` |
| 8.3 | route audit | every `<Route>` target resolves, incl. `/portfolio/smart-hrm-ai` |
| 8.4 | asset audit | new portrait, cover and CV all resolve; no dangling import |
| 8.5 | responsive | 360 / 768 / 1440 px |
| 8.6 | console | no React warnings, no missing-key errors |
| 8.7 | docs | `02_ROADMAP.md` checkboxes reflect **actual** state, not intended state |

Then: **commit** with a conventional message. **Do not push.** Present the integration options
via `superpowers:finishing-a-development-branch` and let the user choose — a push to `main`
deploys to production on Vercel immediately.

---

## 5. Reporting contract

Report **per phase**, not once at the end. Each phase report states: what changed (with
`file:line`), what was verified and how, and anything R9 reopened.

At the end, state plainly:
- what is done and verified,
- what is **deliberately left empty** (the SMART HRM AI case-study body),
- what was deferred and why,
- anything that needs a human decision.

If a gate fails, say so with the output. A failing build reported as success is the only
unrecoverable error in this run.
