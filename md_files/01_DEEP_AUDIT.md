# Deep Audit — Portfolio vs. CV Ground Truth

**Date:** 2026-09-22 · **Repo:** `Fedi-Hmida/Portfolio` @ `main` (`3153347`)
**Stack:** CRA 5 (`react-scripts`) · React 18.2 · Tailwind 3.3 · framer-motion 10 · react-router-dom 7 · EmailJS
**Source of truth:** `C:\Users\Fedi\Desktop\CV\CV_Ang_ATS.pdf` (extracted 2026-09-22)

---

## A. Architecture map

| Layer | Location | Notes |
|---|---|---|
| Routing | `src/App.js` | All pages except `Home` are `React.lazy`; each route wrapped in `<AnimatedPage>`; news uses numeric paths `/news/1..17` |
| Data layer | `src/data/*.js` | `navigation`, `news`, `projects`, `resume`, `skills`, `socialLinks` — **good separation already exists** |
| Pages | `src/pages/` | 6 portfolio detail pages, 17 news pages, 5 top-level pages |
| Shared components | `src/components/` | `Navbar`, `Footer`, `ParticlesBackground`, `SectionTitle`, `SocialIconLink`, per-section folders |
| Public assets | `public/assets/` | `cv/` (5 PDFs), `docs/` |
| Image assets | `src/assets/images/` | imported as ES modules, hashed by webpack |

**Verdict (R2):** the data/presentation split is already sound. Almost every fact change
below lands in `src/data/*`, not in JSX. That is the single biggest de-risking factor for
this whole cycle.

---

## B. Stale-fact inventory

### B1 — Contact identity 🔴 *blocking*

| Field | Current | Location | Must become |
|---|---|---|---|
| Location | `"Tunis"` | `src/data/socialLinks.js:5` | `Limoges, France` |
| Email | `Fedi.Hmida@esprit.tn` | `src/data/socialLinks.js:6` | `hmidaf@3il.fr` |
| Phone | `+216 93 722 130` | `src/data/socialLinks.js:7-9` | `+33 6 02 75 32 87` |
| WhatsApp | `wa.me/21693722130` | `src/data/socialLinks.js:52` | `wa.me/33602753287` |
| Map embed | Tunis coords, `title="Map showing Tunis, Tunisia"` | `src/components/Contact/ConnectSection.jsx:35-36` | Limoges embed + matching title |

✅ **Good news:** `contactInfo` is consumed via import by `ConnectSection.jsx` (lines 88, 99,
110) and the hero social row — so four of five fixes are a one-file edit. Only the map
iframe is hardcoded.

### B2 — Résumé data 🔴 *blocking*

`src/data/resume.js`

- **`experiences[]` (line 77) is missing the BNS internship entirely.** It is the newest and
  strongest entry on the CV; its absence is the single largest credibility gap on the site.
- `experiences[0]` (line 79-81): titled *"Data & Mobile Developer Intern"* / *"Summer 2025 -
  2 months"*. CV says **"AI / Mobile Development Intern", July–September 2025**.
- `experiences[1]` (line 107): *"Msign - Final Year Project Internship"*. CV says **"Mobile
  Developer Intern", February–June 2024**. Role string also duplicates the company name.
- **`education[]` (line 127) is missing 3iL Ingénieurs** — the French school, which is the
  entire reason the location changed.
- `education[0].year` = `"Currently Enrolled"` (line 131) — not a year range; CV says
  **2024–2027**.
- `education[1].year` = `"2024"` (line 136) — CV says **2021–2024**.

### B3 — Skills coverage 🟠 *high*

`src/data/resume.js:1-75` (5 groups) and `src/data/skills.js:88` (`hardSkills`) both predate
the BNS internship. **Entirely absent from the site but claimed on the CV:**

> Java 17 · Spring Boot · Spring Security · Spring Data JPA · PostgreSQL · Flyway ·
> MinIO / S3 · Keycloak · OAuth2 / OpenID Connect · RBAC · JWT · encryption at rest ·
> CI/CD · GitLab · JUnit · Vitest · Playwright · Clean Architecture · MLFlow · LangSmith ·
> Ollama · MCP · HuggingFace · Fine-tuning · Anomaly Detection · Pandas · TDSP

This is a **whole competency axis** (back-end + security + DevOps) the portfolio does not
claim. R3 flags this as the highest-leverage non-blocking fix: it is what separates
"student who trains models" from "engineer who ships systems".

### B4 — About page copy 🟠 *high*

`src/pages/About.jsx`

- Bio paragraphs (lines 60-81): no France, no double degree, no BNS, no back-end. Describes
  a Flutter/ML student, not the current profile.
- Core Competencies (lines 91-96, 108-113): no back-end, security, or testing axis.
- Career Focus (lines 181-188): *"Seeking opportunities in full-stack development, mobile
  application architecture..."* — vague, and omits the concrete **April 2027 internship /
  September 2027 alternance** windows that a French recruiter filters on.
- 🐛 **Grammar defect, line 186:** `"proven ability to delivery production-ready applications"`
  → *deliver*.

### B5 — Home hero 🟡 *medium*

`src/pages/Home.jsx`

- `HERO_PRIMARY_ROLE` / `HERO_SPECIALIZATION` constants at lines 39-40, rendered in the
  motion block at lines 121-140.
- **No location line** — this is the requested addition, to sit after line 135 and before the
  animated underline `motion.span` at lines 133-139.
- ⚠️ *R4 caution:* that underline is `absolute -bottom-2` relative to the flex container.
  Inserting a third child changes the container height, so the underline moves with it —
  acceptable, but must be visually confirmed.

### B6 — Profile photo 🟡 *medium*

`src/assets/images/slider/me.png` is imported in exactly **two** places:
`src/pages/Home.jsx:22` and `src/pages/About.jsx:5`.
New portrait available at `C:\Users\Fedi\Desktop\Pictures\Fedi_Hmida.png` (47 KB, PNG).

### B7 — CV file 🟡 *medium*

Served path `/assets/cv/Cv_Ang.pdf` is referenced from three places:
`src/pages/Home.jsx:38` (`CV_PATH`), `src/pages/About.jsx:194`, `src/pages/Resume.jsx:49`.
`public/assets/cv/` currently holds 5 PDFs, several of them obsolete duplicates
(`CV6.pdf`, `fedi-hmida-cv.pdf`).

### B8 — SMART HRM AI project 🔴 *blocking (new feature)*

Does not exist. To match the six existing projects it needs **four** coordinated additions:

1. Entry in `src/data/projects.js` (the `projects[]` array, line 19) with the full accent
   token set — `accentColor`, `accentText`, `accentSoft`, `accentBorder`, `accentShadow`,
   `accentForeground`. `ProjectCard.jsx:6-13` reads all six as CSS custom properties.
2. A cover image import. **No asset exists yet** — see Open Questions.
3. `src/pages/Portfolio/SmartHrmAiDetails.jsx` — new page.
4. Lazy import + `<Route>` in `src/App.js` (pattern at lines 40-52 and 84-129).

Sibling detail pages run 557–818 lines. The scaffold should be a **thin, valid shell**, since
the user fills the content later.

### B9 — Contact page positioning 🟡 *medium*

- `src/components/Contact/ContactHero.jsx:19-23`: *"Open to junior Flutter/mobile roles"* —
  contradicts the CV's AI/SWE internship + alternance target.
- Filter pills line 25: `"Flutter projects"` is no longer the headline offer.
- `src/components/Contact/ConnectSection.jsx:22`: *"start with SmartClaim and the CV"* —
  SmartClaim is no longer the flagship; Firmaa and SMART HRM AI are.

### B10 — SEO / metadata 🟡 *medium*

- `public/index.html:21,28,35`: title and OG/Twitter all read **"Fedi Hmida - Flutter & AI
  Portfolio"**. Flutter-first framing is now wrong, and there is no geographic signal.
- `public/manifest.json:3-4`: same stale framing.
- `og:image` points at `favicon.svg` — a vector icon, which most social platforms render
  poorly. Low priority, noted for completeness.

### B11 — Repo hygiene 🟢 *low*

- `build/` is listed in `.gitignore:5` yet **51 files remain tracked** (added before the rule).
  Harmless for Vercel (it rebuilds from source) but generates noisy diffs and merge conflicts.
- `PORTFOLIO_DEEP_TESTING_REPORT.md` sits at repo root; per the new convention it belongs in
  `md_files/`.
- `web.cmd` duplicates `make web`.
- `node_modules/` not installed in this clone.

---

## C. Risk register

| # | Risk | Severity | Mitigation |
|---|---|---|---|
| 1 | Push to `main` auto-deploys to production | **High** | No commit or push without explicit approval (Master Prompt §4) |
| 2 | New project card renders with a broken image | Med | Resolve the cover asset before adding the `projects[]` entry |
| 3 | Hero underline shifts when location line is inserted | Low | Visual check at 3 breakpoints |
| 4 | Stale contact value survives in an unaudited file | Med | Post-change grep gate (Master Prompt §5.2) |
| 5 | CRA `REACT_APP_*` vars are build-time only | Low | Redeploy after any Vercel env-var change |

---

## D. Open questions for the user

1. **SMART HRM AI cover image** — no logo/asset exists in the repo. Placeholder for now, or
   do you have a file to drop in?
2. **`hmidaf@3il.fr` for the contact form** — the EmailJS template destination lives in the
   EmailJS dashboard, not in this repo. Does it still point at the old address?
3. **Old CV PDFs** in `public/assets/cv/` — delete the obsolete ones, or leave them?
4. **Recommendation letters** are still ADDINN-era. Anything from BNS to add?
