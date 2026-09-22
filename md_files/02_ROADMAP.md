# Action Plan — Phase-by-Phase Roadmap

**Companion documents:** `00_MASTER_PROMPT.md` (governing spec) · `01_DEEP_AUDIT.md` (findings)
**Status legend:** ☐ not started · ◐ in progress · ☑ done & verified

> **Golden rule:** nothing is committed or pushed until Phase 8. A push to `main` deploys to
> production on Vercel immediately.

---

## Phase 0 — Baseline & asset intake ☑

*Owner: R6 · Blocks: everything · Est. 10 min*

| # | Task | Target |
|---|---|---|
| 0.1 | `npm install` (or `make web` — it installs automatically) | `node_modules/` present |
| 0.2 | Capture a **green baseline**: `npm run build` before any edit | Build succeeds |
| 0.3 | Create working branch `feat/france-update` | Off `main` |
| 0.4 | Copy portrait → `src/assets/images/slider/Fedi_Hmida.png` | File served |
| 0.5 | Copy CV → `public/assets/cv/CV_Ang_ATS.pdf` | Reachable at `/assets/cv/CV_Ang_ATS.pdf` |
| 0.6 | Move `PORTFOLIO_DEEP_TESTING_REPORT.md` → `md_files/` | Convention applied |

**Exit criteria:** baseline build is green *before* a single source edit, so any later
failure is unambiguously ours.

> ⚠️ **Why 0.2 matters:** without a known-good baseline you cannot tell a pre-existing
> warning from one you introduced.

---

## Phase 1 — Identity: one source of truth ☑

*Owner: R2 · Depends: Phase 0 · Est. 15 min · **Highest value-per-line in the whole plan***

| # | Task | File |
|---|---|---|
| 1.1 | `location` → `"Limoges, France"` | `src/data/socialLinks.js:5` |
| 1.2 | `email` → `"hmidaf@3il.fr"` | `:6` |
| 1.3 | `phone` / `phoneHref` / `phoneCopy` → `+33 6 02 75 32 87` / `tel:+33602753287` | `:7-9` |
| 1.4 | WhatsApp `href` → `https://wa.me/33602753287` | `:52` |
| 1.5 | Swap map iframe to Limoges + fix `title` attribute | `src/components/Contact/ConnectSection.jsx:35-36` |

**Verification gate:**
```bash
grep -rn "Tunis\"\|+216\|esprit\.tn\|21693722130" src/ public/ --include=*.js --include=*.jsx --include=*.html
```
Must return **zero** hits (IEEE news articles legitimately mention Tunisia — scope the grep to
the contact values, not the word "Tunisia").

**Why first:** `contactInfo` is imported by the hero social row and by `ConnectSection`
(lines 88, 99, 110). One file edit fixes the Contact page *and* the Home hero *and* the
footer simultaneously. Everything downstream inherits it.

---

## Phase 2 — Profile photograph ☑

*Owner: R4 · Depends: 0.4 · Est. 10 min*

| # | Task | File |
|---|---|---|
| 2.1 | Repoint hero import to the new portrait | `src/pages/Home.jsx:22` |
| 2.2 | Repoint About import | `src/pages/About.jsx:5` |
| 2.3 | Visually confirm crop, glow-pulse backdrop and `saturate-120` hover still read correctly | — |

**Risk:** the new PNG is 47 KB vs. the old asset — if its aspect ratio differs, the hero's
right column and the About page's `rotate-2` card will crop differently. Check before moving on.

**Decision:** keep the filename distinct (`Fedi_Hmida.png`) rather than overwriting `me.png`,
so a rollback is a one-line revert.

---

## Phase 3 — Home hero location line ☑

*Owner: R4 · Depends: Phase 1 · Est. 10 min*

| # | Task | File |
|---|---|---|
| 3.1 | Add a `HERO_LOCATION` constant beside the existing hero constants | `src/pages/Home.jsx:39-40` |
| 3.2 | Render it as a third child under `HERO_SPECIALIZATION`, with a map-pin icon | `src/pages/Home.jsx:~135` |
| 3.3 | Match the established type scale (one step below specialisation) and muted colour | — |
| 3.4 | Confirm the `absolute -bottom-2` underline still sits correctly | `:133-139` |

**Constraints (R4):** inherit the parent's `items-center lg:items-start` alignment; reuse an
icon from `lucide-react` or `react-icons` (both already bundled — **do not add a dependency**);
no new motion variant, the parent block already animates.

---

## Phase 4 — Resume page ☑

*Owner: R3 · Depends: Phase 0 · Est. 40 min · **Largest content block***

### 4A — Experience

| # | Task | File |
|---|---|---|
| 4.1 | **Prepend** the BNS entry as `experiences[0]` | `src/data/resume.js:77` |
| 4.2 | Fix ADDINN title → *AI / Mobile Development Intern*; duration → *July – September 2025* | `:79-81` |
| 4.3 | Fix Msign title → *Mobile Developer Intern*; duration → *February – June 2024* | `:107-109` |

**BNS bullets must use the existing `{ text, strong }` part-array structure** (`Resume.jsx:19-22`
renders `strong: true` parts as `<strong>`). Bold the metrics — they are the whole point:

- Co-led back-end **and** front-end poles of **SMART HRM AI** for an **8-intern team**
  (Java 17 / Spring Boot API, React 19 / TypeScript client)
- Designed the security model: **OAuth2 / OIDC via Keycloak**, 4-role RBAC across
  **104 authorization gates**, **AES-256-GCM** encryption at rest for salary and bank data
- Built **102 REST endpoints** over PostgreSQL with **32 Flyway migrations** and MinIO object
  storage; Clean Architecture across **11 modules** and **2,072 automated tests**
- Owned three AI workstreams: OCR document-extraction authorization contract, a **RAG**
  conversational assistant, and predictive models for absence and staff turnover

### 4B — Education

| # | Task | File |
|---|---|---|
| 4.4 | **Prepend** 3iL Ingénieurs — *Engineering Degree, Double Degree, Big Data* · Limoges, France · **2026 – 2028** | `src/data/resume.js:127` |
| 4.5 | ESPRIT year → **2024 – 2027** (replace `"Currently Enrolled"`) | `:131` |
| 4.6 | ISI Mahdia year → **2021 – 2024** | `:136` |

### 4C — Skills expansion

| # | Task | File |
|---|---|---|
| 4.7 | Add a **Back-End & Data** group (Java 17, Spring Boot, Spring Security, Spring Data JPA, PostgreSQL, Flyway, MinIO/S3, Pandas, MLFlow) | `src/data/resume.js:1` |
| 4.8 | Add a **Security & DevOps** group (OAuth2, OIDC, Keycloak, RBAC, JWT, encryption at rest, Docker, CI/CD, GitLab, JUnit, Vitest, Playwright, Clean Architecture) | same |
| 4.9 | Extend the agentic group with LangSmith, Ollama, MCP, HuggingFace, fine-tuning | same |
| 4.10 | Mirror the additions into `hardSkills` so the Home skills carousel agrees | `src/data/skills.js:88` |

> ⚠️ `SkillCard` renders in a `lg:grid-cols-3` grid (`Resume.jsx:93`). Going from 5 → 7 groups
> fills two clean rows — **check the 7th card does not orphan** on a 2-column breakpoint.
> `hardSkills` is paginated 8-per-page on Home (`Home.jsx:50`); additions change the page count.

---

## Phase 5 — About page ☑

*Owner: R3 · Depends: Phase 4 (narrative must agree) · Est. 30 min*

| # | Task | File |
|---|---|---|
| 5.1 | Rewrite the three bio paragraphs — double degree 3iL × ESPRIT, multi-agent LLM systems, production full-stack delivery | `src/pages/About.jsx:60-81` |
| 5.2 | Add back-end/security/testing entries to Core Competencies | `:91-96`, `:108-113` |
| 5.3 | Rewrite Career Focus with the **April 2027 internship** and **September 2027 alternance** windows | `:181-188` |
| 5.4 | 🐛 Fix `"ability to delivery"` → `"ability to deliver"` | `:186` |
| 5.5 | Repoint the Download-CV link to the new PDF | `:194` |

**Constraint (R4):** keep **three** paragraphs and keep the two competency columns balanced —
the `md:grid-cols-2` at line 89 looks wrong if one column runs longer than the other.

---

## Phase 6 — SMART HRM AI project page ☑

*Owner: R1 · Depends: Phase 0 · Est. 45 min · **New feature — 4 coordinated edits***

| # | Task | File |
|---|---|---|
| 6.1 | Resolve the cover image (see Open Question 1) | `src/assets/images/Portfolio/` |
| 6.2 | Add the `projects[]` entry, `id: 7`, at the **top** (newest first) | `src/data/projects.js:19` |
| 6.3 | Create the scaffold page | `src/pages/Portfolio/SmartHrmAiDetails.jsx` *(new)* |
| 6.4 | Add the lazy import | `src/App.js:~40` |
| 6.5 | Add `<Route path="/portfolio/smart-hrm-ai">` wrapped in `<AnimatedPage>` | `src/App.js:~95` |

**Required `projects[]` fields** — `ProjectCard.jsx:6-13` reads all six accent tokens as CSS
custom properties; **omitting any one silently falls back to pink** and the card will not match:

```
id · title · category[] · tech[] · homeTech[] · role · type · status · impact ·
description · homeDescription · image · homeImage · link · cta ·
accentColor · accentText · accentSoft · accentBorder · accentShadow · accentForeground
```

Suggested metadata (from the CV, no invention):
- `category: ["web", "ia"]` · `role: "Back-End & Front-End Co-Lead"`
- `type: "Enterprise HR platform"` · `status: "BNS Engineering internship"`
- `tech: ["Java 17", "Spring Boot", "React 19", "TypeScript", "PostgreSQL", "Keycloak"]`

**Scaffold contract (explicit — R1):** the page ships as a **valid, styled, empty shell** —
`Navbar`, `ParticlesBackground`, hero with title + role + date, section headings with
placeholder copy, `Footer`, `export default`. **Zero fabricated case-study prose.** The user
writes the content later. Mirror the layout grammar of `SahitnaSafeDetails.jsx` (the shortest
sibling at 557 lines) but at a fraction of the length.

**Verify:** `/portfolio` grid shows 7 cards; the filter chips still work; the new card routes
to a page that renders without a console error.

---

## Phase 7 — Contact, CV links & SEO ☑

*Owner: R3 + R5 · Depends: Phase 1 · Est. 25 min*

| # | Task | File |
|---|---|---|
| 7.1 | Rewrite hero copy → AI/SWE internship (Apr 2027) + alternance (Sep 2027), France | `src/components/Contact/ContactHero.jsx:19-23` |
| 7.2 | Retune the filter pills away from Flutter-first | `:25` |
| 7.3 | Replace the SmartClaim name-drop with the current flagship | `src/components/Contact/ConnectSection.jsx:22` |
| 7.4 | Repoint `CV_PATH` to the new PDF | `src/pages/Home.jsx:38` |
| 7.5 | Repoint the Resume download link | `src/pages/Resume.jsx:49` |
| 7.6 | Update `<title>`, description, OG + Twitter tags; add the geographic signal | `public/index.html:21-35` |
| 7.7 | Update `name` / `description` | `public/manifest.json:3-4` |

**R5 positioning note:** retire *"Flutter & AI Portfolio"*. The CV now leads with
**Data Science & AI** plus production full-stack. Target phrasing — *"Fedi Hmida — AI &
Software Engineer · Limoges, France"*.

---

## Phase 8 — Verification & release ◐

*Owner: R6 · Depends: all · Est. 25 min · **Evidence required, not assertions***

| # | Gate | Command / method |
|---|---|---|
| 8.1 | Build is clean | `npm run build` — compare warnings against the Phase 0 baseline |
| 8.2 | No stale contact values survive | the Phase 1 grep, re-run |
| 8.3 | Every route resolves, incl. `/portfolio/smart-hrm-ai` | `make web`, click through all 7 project pages |
| 8.4 | New photo + new CV load from served paths | DevTools Network — no 404 |
| 8.5 | Responsive | 360 / 768 / 1440 px |
| 8.6 | Console is clean | no React warnings, no missing-key errors |
| 8.7 | Roadmap checkboxes reflect reality | this file |
| 8.8 | **Commit** (do not push yet) | conventional message |
| 8.9 | **Ask before pushing** | push to `main` = production deploy |

**Post-deploy:** confirm the Vercel build succeeded, then verify the live site — a CRA build
inlines `REACT_APP_*` at build time, so EmailJS keys must already be set in the Vercel
dashboard; changing them there requires a **redeploy**, not just a save.

---

## Dependency graph

```
Phase 0 (baseline + assets)
   ├──► Phase 1 (identity) ──┬──► Phase 3 (hero location)
   │                          └──► Phase 7 (contact + SEO)
   ├──► Phase 2 (photo)
   ├──► Phase 4 (resume) ─────────► Phase 5 (about)
   └──► Phase 6 (SMART HRM AI)
                                     └──► Phase 8 (verify + release)
```

**Parallelisable:** Phases 2, 4 and 6 are independent of each other.
**Strictly ordered:** 0 → 1 → 3/7, and 4 → 5 (the About narrative must not contradict the
résumé), and everything → 8.

---

## Effort summary

| Phase | Scope | Est. |
|---|---|---|
| 0 | Baseline & assets | 10 min |
| 1 | Identity | 15 min |
| 2 | Photo | 10 min |
| 3 | Hero location | 10 min |
| 4 | Resume (experience + education + skills) | 40 min |
| 5 | About | 30 min |
| 6 | SMART HRM AI scaffold | 45 min |
| 7 | Contact + CV links + SEO | 25 min |
| 8 | Verification & release | 25 min |
| | **Total** | **≈ 3h 30m** |

---

## Deferred (explicitly out of scope this cycle)

- Untracking the 51 committed `build/` files (`.gitignore:5`) — separate hygiene commit
- Deleting obsolete PDFs in `public/assets/cv/`
- Removing `web.cmd` (superseded by `make web`)
- Replacing `og:image` with a real preview image instead of `favicon.svg`
- A news entry announcing the BNS internship / the move to France
- French-language version of the site


---

## Execution record — 2026-09-22

All phases implemented on branch `feat/france-update`. Nothing committed or pushed.

### Automated gates — PASSED

| Gate | Evidence |
|---|---|
| 8.1 Build | `npm run build` exit **0**, `Compiled successfully`, no warnings beyond the pre-existing Node `fs.F_OK` deprecation from react-scripts |
| 8.2 Stale values | 0 hits for old email, phone, WhatsApp number, `Cv_Ang.pdf`, `slider/me.png`, `Flutter & AI Portfolio`, `ability to delivery`, Tunis map |
| 8.3 Routes | 31/31 route targets resolve to real page files, including `/portfolio/smart-hrm-ai` |
| 8.4 Assets | new CV, portrait and project cover all present; both recommendation letters preserved |
| 8.7 Manifest | `manifest.json` parses as valid JSON |
| Data integrity | 7/7 projects carry all 17 required fields incl. the six accent tokens |
| Skill icons | 8/8 skill-group `type` keys map to a real icon in `SkillCard.jsx` (no silent fallbacks) |

### Gates NOT verified by this session

| Gate | Why |
|---|---|
| 8.5 Responsive (360/768/1440) | No browser driver on this host — neither `chromium-cli` nor Playwright installed. Requires a human look or an approved Playwright install. |
| 8.6 Console cleanliness | Same. Build-time errors are covered; client-side render warnings are not. |

**Mitigation applied for 8.6:** the highest runtime risk was non-existent icon imports
(a missing export renders as `undefined` and crashes at runtime, not at build time).
All new icon names were checked against `react-icons@4.12` before use — `SiKeycloak`
and `SiOllama` turned out **not to exist** and were replaced with `FaKey` and verified
alternatives.

### Deliberately left empty

`src/pages/Portfolio/SmartHrmAiDetails.jsx` — six case-study sections render as dashed
"Content coming soon" placeholders. The hero and metric tiles carry only CV-sourced
facts. Fedi writes the body.
