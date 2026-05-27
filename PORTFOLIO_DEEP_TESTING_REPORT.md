# Portfolio Deep Testing Report

## A. Testing Scope

Tested project path:

```text
C:\Users\Fedi\Desktop\Fiche
```

Files and areas inspected:

- App shell and production files: `package.json`, `src/App.js`, `src/index.js`, `public/index.html`, `public/manifest.json`, `public/robots.txt`, `vercel.json`, `.gitignore`.
- Main pages: `Home.jsx`, `About.jsx`, `Portfolio.jsx`, `Resume.jsx`, `NewsList.jsx`, `Contact.jsx`, `NotFound.jsx`.
- Project detail pages: SmartClaim, Sahitna Safe, Firmaa, SolarFlow, Onboardify, Pro-Link.
- News pages registered in `src/App.js`: `/news/1` through `/news/17`.
- Shared components: Navbar, Footer, ParticlesBackground, AnimatedPage, ProjectCard, NewsCard, ContactForm, ConnectSection, ExpandableImage, SocialIconLink.
- Data/assets: `src/data/*`, `src/assets/*`, `public/assets/*`.

Runtime/workflow checks performed:

- Production build.
- Jest test command.
- Local dev server at `http://localhost:3001` because port 3000 was already occupied.
- HTTP route checks for all main routes, project routes, and news routes.
- Public asset checks for CV, recommendation PDFs, AWS PDF, favicon, manifest, and robots.
- Static responsive review from Tailwind breakpoints and layout classes.
- Source-level accessibility, SEO, performance, and release hygiene inspection.

Browser limitation:

- The in-app browser backend was attempted but was unavailable: `Browser is not available: iab`.
- Because of that, visual screenshot QA and true click-by-click browser interaction could not be completed in this session. Findings below distinguish source/runtime evidence from visual-only checks.

## B. Build And Runtime Results

Build command:

```powershell
npm.cmd run build
```

Result:

- Passed.
- Production bundle compiled successfully.
- Main JS gzip size: about `152.9 kB`.
- Main CSS gzip size: about `21.56 kB`.
- Build emitted a Node deprecation warning for `fs.F_OK`; it is not a portfolio runtime blocker.

Test command:

```powershell
npm.cmd test -- --watchAll=false
```

Result:

- Failed with code `1` because no tests exist.
- Output: `No tests found, exiting with code 1`.
- This is not a broken test failure, but it is a release-readiness weakness because there is no automated safety net.

Runtime server:

```powershell
npm.cmd start
```

Result:

- Port 3000 was occupied.
- App started successfully on `http://localhost:3001`.
- Dev server compiled successfully.

Route checks:

- With browser-style `Accept: text/html`, all inspected routes returned HTTP `200`:
  - `/`
  - `/about`
  - `/portfolio`
  - `/portfolio/firmaa`
  - `/portfolio/sahitna-safe`
  - `/portfolio/smart-claim`
  - `/portfolio/solar-flow`
  - `/portfolio/onboardify`
  - `/portfolio/pro-link`
  - `/resume`
  - `/news`
  - `/news/1` through `/news/17`
  - `/contact`

Direct route note:

- Without an `Accept: text/html` header, CRA dev server returned 404 for non-root paths. With normal browser navigation headers, routes resolve correctly.
- `vercel.json` includes a rewrite to `/index.html`, so Vercel direct-route refresh should be covered.

Public asset checks:

- `/assets/cv/Cv_Ang.pdf` -> 200, 191647 bytes.
- `/assets/cv/Recommendation_FediHmida.pdf` -> 200, 101551 bytes.
- `/assets/cv/Fedi_Hmida_Letter%20of%20Recommendation.pdf` -> 200, 99393 bytes.
- `/assets/docs/AI_AWS.pdf` -> 200, 1357191 bytes.
- `/favicon.svg` -> 200.
- `/manifest.json` -> 200.
- `/robots.txt` -> 200.

## C. User Story Testing Results

### Recruiter User Story

Result: Strong, with minor friction.

What works:

- Home hero clearly states `Fedi Hmida`, `Software Engineering Student`, and `Data Science & AI Engineering`.
- Primary CTAs are easy to understand: `View Projects`, `View CV`, `About Me`.
- Portfolio cards surface role, stack, impact, and case-study CTA.
- About page now has a clear background story and project-backed positioning.
- CV path opens directly from Home and downloads from Resume/About.
- Contact page offers form, WhatsApp, LinkedIn, email, phone, and map.

Weaknesses:

- The About Me tab area on Home defaults to services; hard skills require one more click.
- The CV workflow requested in the audit mentions preview/copy/download/close, but the current product decision is direct PDF open. This is fine if intentional, but the old workflow no longer exists.
- News and project content are strong, but the first recruiter path could still benefit from an explicit "Start here" hierarchy around the top three projects.

Severity:

- Low to medium.

### Technical Reviewer User Story

Result: Strong technical proof, especially after the project page redesigns.

What works:

- Firmaa presents agentic AI workflow, LangGraph, validation, human approval, architecture, and safety/explainability.
- Sahitna Safe presents CRISP-DM, metrics, model comparison, selected model rationale, SHAP, limitations, and GitHub link.
- SmartClaim presents Flutter, YOLOv8, FastAPI, Docker, computer vision pipeline, reported 92.9% precision, videos, problem/solution, and architecture.
- SolarFlow, Onboardify, and Pro-Link now have case-study style structure instead of thin cards.

Weaknesses:

- Only Sahitna Safe exposes a GitHub repository link in the inspected project pages.
- Several project demos are large MP4 files, which can make technical proof slower on mobile networks.
- Some metrics are presented well, but external validation/source links are limited.

Severity:

- Medium.

### Mobile User Story

Result: Likely usable from source inspection, but visual browser verification was blocked.

What works:

- Layouts use responsive Tailwind grids such as `grid-cols-1`, `md:grid-cols-2`, `lg:grid-cols-*`.
- Home hero stacks content on mobile.
- Project detail diagrams appear to stack vertically on small screens.
- Contact form uses one column on small screens.
- Navbar has a mobile drawer and closes when a link is clicked.

Risks:

- Long project titles and dense case-study sections should still be visually checked at 360px and 390px.
- Home About tab buttons use a rounded wrapped pill group; likely usable, but visual density may be high on 360px.
- Some project pages have many stacked cards and large videos; mobile users may experience long scroll and heavy network cost.
- Mobile menu has no Escape-to-close behavior and no focus trap.

Severity:

- Medium until visual QA is completed.

### Hiring Manager User Story

Result: Professional and credible, with polish opportunities.

What works:

- About copy is clearer and more credible than before.
- Project pages tell stronger stories with role, challenge, solution, architecture, features, tradeoffs, and learnings.
- Responsible AI language exists for Sahitna Safe and Firmaa.
- Visual style is consistent: dark indigo, glass cards, per-project accent colors.

Weaknesses:

- A typo exists in About career focus: "ability to delivery production-ready applications" should be "ability to deliver production-ready applications".
- News dates mix languages/formats: `Mai`, `Mars`, `Juin`, `Recent`, and numeric dates.
- Some animated headings use rotating typed text, which may feel lively but can be distracting for recruiters trying to scan quickly.

Severity:

- Low to medium.

### Contact User Story

Result: Mostly ready, with one live-send caveat.

What works:

- Contact form validates required first name, last name, email, subject, and message.
- Email pattern validation exists.
- Message length is capped at 500.
- EmailJS fallback is safe when env variables are missing.
- `reply_to`, `from_email`, `from_name`, `subject`, and `message` are sent in template params.
- Direct contact alternatives exist: WhatsApp, LinkedIn, email, phone.
- Public `.env` values are not committed by `.gitignore`.

Weaknesses:

- Live EmailJS send could not be browser-tested in this session.
- Catch block hides the actual EmailJS error from developers, making diagnosis harder.
- Production deployment still needs the same EmailJS env variables configured in the host dashboard.

Severity:

- Medium until one live send is confirmed in browser/deployment.

## D. Workflow Testing Results

### Workflow 1 - Recruiter Quick Path

Path:

```text
Home -> View Projects -> Open strongest project -> View CV -> Contact/About
```

Result:

- Source and route checks indicate this path is available.
- `View Projects` routes to `/portfolio`.
- Project cards route to project detail pages.
- `View CV` opens `/assets/cv/Cv_Ang.pdf`.
- Contact/About routes exist and return 200.

Issues:

- No browser click-through screenshot was possible.
- Strongest project order is good: Firmaa, Sahitna Safe, SmartClaim appear first in project data.

### Workflow 2 - CV Path

Requested path:

```text
Home -> View CV -> Preview CV -> Copy link -> Download CV -> Close modal
```

Result:

- This old modal workflow no longer exists.
- Current Home behavior is direct PDF open in a new tab, matching the latest product decision.
- Download CV is available from About and Resume.

Issue:

- If the desired release workflow is still preview/copy/download/close, Home no longer satisfies it. If direct-open is intentional, this is not a bug.

### Workflow 3 - Project Discovery

Path:

```text
Portfolio -> filter projects -> open each project -> back to portfolio
```

Result:

- Portfolio filters exist: All Projects, AI / ML, Mobile Apps, Web Apps.
- All six project detail routes return 200 with browser-style headers.
- Each project card has visible CTA link and hover overlay CTA.

Issues:

- Cannot visually confirm filter layout at 360px without browser.
- Project filters are button-only state; filter state is not reflected in URL, so users cannot share a filtered portfolio view.

### Workflow 4 - Technical Proof

Path:

```text
Portfolio -> Firmaa -> inspect agent workflow/architecture/demo
Portfolio -> Sahitna Safe -> inspect ML metrics/demo
Portfolio -> SmartClaim -> inspect CV/YOLO/FastAPI proof
```

Result:

- All three technical proof flows are present in source and route checks.
- Firmaa, Sahitna Safe, and SmartClaim have the strongest evidence depth.

Issues:

- Large demos can slow the proof path.
- GitHub links are limited.

### Workflow 5 - News / Certification Proof

Path:

```text
News list -> open each news article -> back to news -> check assets/PDFs
```

Result:

- News list exists.
- `/news/1` through `/news/17` are registered and returned 200 with browser-style headers.
- AWS PDF exists and returns 200.
- News details include Back to News links in source.

Issues:

- News dates and author labels are inconsistent.
- No sitemap is present for search engines.

### Workflow 6 - Contact

Path:

```text
Contact -> submit empty form -> validation -> submit with invalid email -> direct contact links
```

Result:

- Source confirms required field validation and email regex validation.
- Source confirms direct links for WhatsApp, LinkedIn, and email.
- Public contact assets and map iframe are present.

Issues:

- Browser interaction and live EmailJS send could not be executed due unavailable browser backend.

### Workflow 7 - Mobile Navigation

Path:

```text
Open mobile menu -> navigate pages -> close menu -> verify active route and scroll behavior
```

Result:

- Source confirms mobile menu button, `aria-expanded`, `aria-controls`, drawer rendering, route links, and close-on-link-click.
- `ScrollToTop` is mounted in `App.js`.

Issues:

- No Escape close for mobile drawer.
- No focus trap/focus return.
- Visual mobile route verification still needed.

## E. UX/UI Issues

| Severity | Page/section | Problem | User impact | Suggested fix |
|---|---|---|---|---|
| Medium | Project detail pages | Demos are useful but some files are very large. | Technical reviewers on mobile may abandon before watching. | Compress videos, split long demos, or host streaming versions. |
| Medium | Portfolio | Filter state is not URL-addressable. | Recruiters cannot share "AI / ML projects" directly. | Add query param such as `/portfolio?filter=ia`. |
| Medium | Home About tabs | Services are default; hard skills and methodologies are hidden behind tabs. | Recruiters may not immediately see full skill breadth. | Consider defaulting to services only if service positioning is preferred; otherwise add a compact skills preview. |
| Medium | News pages | Many news pages share similar layouts and heavy animation. | Recruiters may skim less or miss certification proof. | Tighten top proof blocks and use consistent metadata. |
| Low | About career focus | Typo: "ability to delivery". | Small professionalism hit. | Change to "ability to deliver". |
| Low | News dates | Mixed formats: English, French, `Recent`, numeric dates. | Timeline feels less polished. | Standardize all news dates. |
| Low | Home CV workflow | Direct PDF is fast, but no on-page preview/copy/download modal. | If old workflow is expected, this is a mismatch. | Keep direct-open or reintroduce modal intentionally. |

## F. Accessibility Issues

| Severity | Area | Problem | User impact | Suggested fix |
|---|---|---|---|---|
| Medium | Modals: phone copy, image preview, project preview dialogs | Dialogs have labels and Escape support in some places, but no focus trap or reliable focus return. | Keyboard and screen-reader users can lose context. | Add focus trap, initial focus, and restore focus on close. |
| Medium | Mobile navigation | Drawer has labels and expanded state, but no Escape close/focus management. | Keyboard users may find navigation less predictable. | Add Escape handler, focus first item on open, restore focus on close. |
| Medium | Animated typed headings | Repeated changing text can be distracting or noisy to assistive tech. | Screen-reader and cognitive load risk. | Prefer static headings or mark decorative typed text appropriately. |
| Low | Video demos | Videos have labels and controls, but captions/transcripts are not present. | Deaf/hard-of-hearing users miss demo narration if any. | Add short text transcript or captions where narration exists. |
| Low | Contrast | Most contrast appears likely acceptable, but some gray text on dark glass should be manually checked. | Low-vision users may struggle in dense sections. | Run automated contrast audit and tune gray tokens. |

Accessibility strengths:

- Navbar has `aria-label`.
- Mobile menu button has `aria-label`, `aria-expanded`, and `aria-controls`.
- Contact form has real labels, error messages, `aria-invalid`, and `aria-describedby`.
- Expandable image supports Enter, Space, and Escape.
- `prefers-reduced-motion` is respected globally and in particles.

## G. Performance Issues

| Severity | Area | Evidence | User impact | Suggested fix |
|---|---|---|---|---|
| High | Media payload | `build/static/media` totals about `188.34 MB`. | Slow deploys, slow first visit to media-heavy pages, painful mobile demos. | Compress videos/images and avoid bundling unnecessary media. |
| High | SmartClaim Data Demo | `Data Demo.mp4` is about `64.97 MB`. | Very heavy for a single proof asset. | Re-encode to web-optimized MP4/WebM, reduce resolution/bitrate, or split demo. |
| High | Firmaa demo | `demo_firmaa.mp4` is about `47.12 MB`. | Slow mobile playback and metadata fetch. | Compress or host externally. |
| Medium | AWS image | `AI_AWS.jpg` is about `9.55 MB`. | Certification page image is too heavy. | Convert to optimized WebP/JPEG. |
| Medium | Hero image | `me.png` is about `2.74 MB`. | Impacts Home LCP on slower mobile connections. | Export optimized WebP/AVIF with responsive sizes. |
| Medium | Particles | `loadFull(tsparticles)` is used and particles appear on many pages. | CPU/GPU cost on mobile and low-end devices. | Load slimmer particles preset or disable on mobile/reduced data. |
| Low | Bundle size | JS gzip sizes are reasonable. | Not a blocker. | Keep route lazy loading. |

Performance strengths:

- Route components are lazy-loaded in `App.js`.
- Video elements use `preload="metadata"`.
- Images mostly use `loading="lazy"` and `decoding="async"`.
- Main JS gzip size is acceptable.

## H. SEO / Production Issues

| Severity | Area | Problem | User impact | Suggested fix |
|---|---|---|---|---|
| Medium | Route metadata | Single static title/description for all routes. | Project/news pages will not share with rich, specific context. | Add route-level SEO metadata with React Helmet or static prerender. |
| Medium | Open Graph image | OG/Twitter image is `favicon.svg`. | Social sharing looks generic and small. | Add a proper portfolio social preview image. |
| Medium | Sitemap | No sitemap found. | Search engines have less structured route discovery. | Add `sitemap.xml` for main pages, project pages, and news pages. |
| Low | Manifest icons | Manifest uses only `favicon.svg`. | PWA/install surfaces may look minimal. | Add 192/512 PNG icons. |
| Low | Robots | `robots.txt` allows crawling. | Good baseline. | Add sitemap reference after sitemap exists. |
| Low | Vercel rewrites | Rewrites route all paths to `index.html`. | Good for SPA refresh. | Keep. |

## I. Content / Positioning Issues

| Severity | Area | Problem | User impact | Suggested fix |
|---|---|---|---|---|
| Medium | Resume vs Home/About skills | Resume still groups computer vision and some AI-agent skills under broader AI sections. | Slight taxonomy inconsistency after Home/About category separation. | Later align Resume categories if desired. |
| Medium | Project proof links | Only Sahitna Safe visibly exposes GitHub in inspected project details. | Technical reviewers have less direct source proof for other projects. | Add repo/demo links where safe and available. |
| Low | About copy | Typo in career focus. | Small credibility issue. | Fix wording. |
| Low | News copy | Mixed date languages/formats and some `Admin` authors. | Less professional timeline. | Normalize dates and author labels. |
| Low | Medical AI framing | Sahitna Safe includes responsible AI disclaimers. | Good. | Keep this framing, avoid clinical readiness claims. |

## J. Git / Release Cleanliness

Findings:

- `git status --short --untracked-files=all` after the required build showed:
  - `M build/asset-manifest.json`
  - `M build/index.html`
- `build/` is listed in `.gitignore`, but 51 files under `build/` are already tracked.
- `git ls-files -ci --exclude-standard` confirms tracked ignored files, especially `build/**`.
- Follow-up status: internal markdown reports were moved out of `public/assets/docs` into `Doc/reports`; `public/assets/docs` now contains only the intended public `AI_AWS.pdf` asset.
- `.env*` is ignored, while `.env.example` is allowed. This is good for EmailJS config hygiene.
- Large source assets remain tracked in `src/assets`, especially MP4 demos and a 9.55 MB AWS image.

Release hygiene risks:

- Tracked `build/**` can create noisy diffs every build.
- Public markdown reports may be deployed publicly even if ignored by git.
- Large binary assets increase repo and deployment weight.

## K. Ratings

| Category | Score / 10 | Notes |
|---|---:|---|
| Build/runtime health | 8.0 | Build passes and routes resolve, but no tests exist and browser visual QA was blocked. |
| Recruiter first impression | 8.4 | Strong hero, CTAs, project ordering, and improved About copy. |
| UX/navigation | 8.0 | Clear routes and CTAs; project filters and CV workflow could be more intentional. |
| Mobile responsiveness | 7.2 | Source looks responsive, but visual 360/390/768 checks still needed. |
| Project presentation | 8.7 | Case studies are now much stronger and more recruiter-friendly. |
| Technical credibility | 8.5 | Strong project proof, especially Firmaa, Sahitna Safe, SmartClaim. More source/demo links would help. |
| Contact/conversion | 7.8 | Contact paths are strong; live EmailJS send needs final browser/deployed confirmation. |
| Accessibility | 7.0 | Good labels and reduced-motion baseline; modal/drawer focus management needs polish. |
| Performance | 5.8 | Biggest weakness: about 188 MB media output and several huge videos/images. |
| SEO/production readiness | 6.8 | Basic metadata and rewrites exist; no route-level SEO, sitemap, or rich OG image. |
| Content clarity | 8.0 | Strong positioning, but typo/date consistency/release polish remain. |
| Release readiness | 7.2 | Almost ready, but performance and release hygiene should be addressed before broad sharing. |

Overall score:

```text
7.7 / 10
```

Current release status:

```text
Almost ready
```

Biggest blocker:

- Heavy media payload and release hygiene around tracked `build/**` plus public internal reports.

Biggest quick win:

- Fix the About typo, standardize news dates/authors, confirm one live EmailJS send, and remove public deployment of internal markdown reports.

Expected score after fixes:

```text
8.7 / 10
```

## L. Action Plan

### Phase 1 - Release Blockers

| Priority | Severity | User impact | Likely files | Suggested fix | Validation |
|---|---|---|---|---|---|
| P0 | High | Large media hurts mobile proof and deployment. | `src/assets/videos/**`, project detail pages | Compress MP4s, add smaller demo cuts, or host streaming videos. | Rebuild and confirm `build/static/media` drops sharply. |
| P0 | High | Build diffs are noisy and risky. | Git index, `.gitignore`, `build/**` | Stop tracking generated `build/**` in a controlled git cleanup. | `git ls-files build` returns 0. |
| P1 | Medium | Internal reports were deployed publicly. | `public/assets/docs/*.md`, `Doc/reports/*.md` | Completed: moved internal reports into `Doc/reports` and ignored that local folder. | `build/assets/docs` contains only intended public files. |
| P1 | Medium | Contact cannot be trusted until live checked. | Deployment env, `ContactForm.jsx` | Confirm EmailJS env variables in hosting and send one live test. | Browser shows success toast and email arrives. |

### Phase 2 - High Impact UX Fixes

| Priority | Severity | User impact | Likely files | Suggested fix | Validation |
|---|---|---|---|---|---|
| P1 | Medium | Recruiters cannot share filtered portfolio. | `src/pages/Portfolio/Portfolio.jsx` | Store filter in query params. | Direct URL opens selected filter. |
| P1 | Medium | CV workflow may be ambiguous. | `src/pages/Home.jsx`, About/Resume | Decide direct-open vs preview modal and make all CTAs consistent. | Recruiter CV path works in one click. |
| P2 | Low | Small credibility hit. | `src/pages/About.jsx` | Fix "delivery" to "deliver". | Source search and visual check. |
| P2 | Low | News timeline feels inconsistent. | `src/data/news.js`, news pages | Standardize dates and authors. | News list reads consistently. |

### Phase 3 - Accessibility And Mobile Polish

| Priority | Severity | User impact | Likely files | Suggested fix | Validation |
|---|---|---|---|---|---|
| P1 | Medium | Keyboard users can lose context in modals. | `SocialIconLink.jsx`, `ExpandableImage.jsx`, `FirmaaDetails.jsx`, `ProLinkDetails.jsx` | Add focus trap, initial focus, and focus return. | Keyboard-only modal test passes. |
| P1 | Medium | Mobile menu lacks complete keyboard behavior. | `Navbar.jsx` | Add Escape close and focus management. | Keyboard test on mobile viewport. |
| P2 | Low | Demo videos are less accessible. | Project detail pages | Add captions/transcripts or short text summaries near videos. | Screen-reader/manual check. |
| P2 | Low | Animated typed text may distract. | Home/About/Resume/News/Contact components | Prefer static text or hide decorative typed variations from screen readers. | Reduced-motion and screen-reader check. |

### Phase 4 - Performance And Asset Optimization

| Priority | Severity | User impact | Likely files | Suggested fix | Validation |
|---|---|---|---|---|---|
| P0 | High | Huge video payload. | `src/assets/videos/**` | Re-encode large MP4s under practical web sizes. | `build/static/media` total target under 60 MB initially. |
| P1 | Medium | Heavy images slow first view/detail pages. | `src/assets/images/**` | Convert large PNG/JPG assets to WebP/AVIF, resize hero/cert images. | Lighthouse/mobile network check. |
| P1 | Medium | Particle engine cost on mobile. | `ParticlesBackground.jsx` | Use slim particles bundle or disable on small screens/reduced data. | CPU profile and mobile smoothness check. |
| P2 | Low | Route chunks are acceptable but numerous. | `App.js` | Keep lazy loading; avoid importing shared heavy assets into common paths. | Build size regression check. |

### Phase 5 - Final Release Checklist

| Priority | Severity | User impact | Likely files | Suggested fix | Validation |
|---|---|---|---|---|---|
| P0 | High | Prevent broken release. | Whole app | Run build, test with `--passWithNoTests` or add smoke tests, route checks. | Build/test/route report clean. |
| P1 | Medium | Mobile confidence. | Main/project/contact pages | Browser check 360, 390, 768, 1440 viewports. | Screenshots show no overflow/overlap. |
| P1 | Medium | SEO and sharing. | `public/index.html`, SEO helper | Add sitemap, rich OG image, route metadata. | Share preview and sitemap validation. |
| P1 | Medium | Contact conversion. | Contact page, deployment env | Live send test and direct links check. | Message received, links open expected targets. |
| P2 | Low | Release notes. | Report docs outside public | Keep internal reports outside deployable `public`. | Deployment artifact check. |

## M. Do Not Fix Yet

These items should wait for manual decision:

- Whether Home `View CV` should remain direct PDF open or return to preview/copy/download modal.
- Whether to add public GitHub/demo links for private or unfinished projects.
- Whether internal markdown reports in `public/assets/docs` are acceptable to deploy publicly.
- Whether to keep particles on every route or reduce them for a quieter recruiter experience.
- Whether Resume should be updated to mirror the Home/About skill taxonomy.
- Whether contact email should use the ESPRIT email, IEEE email, or both.

No fixes were implemented during this audit. This report is testing-only.
