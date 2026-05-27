# Deep Portfolio Audit - Fedi Hmida React Portfolio

Audit date: 2026-05-25  
Project path: `C:\Users\Fedi\Desktop\Fiche`  
Audit mode: review only, no source code changes

This audit is based on the real project files, not only the recap. Files reviewed include the routing, main pages, shared components, styling, assets, public files, build output indicators, Vercel config, and Git/workspace state.

## A. Portfolio Understanding

### Current Tech Stack

The portfolio is a Create React App single page application.

Core stack:

- React `18.2.0`
- React DOM `18.2.0`
- `react-scripts 5.0.1`
- `react-router-dom 7.12.0`
- Tailwind CSS `3.3.5`
- Framer Motion
- React Icons
- Lucide React
- React Typed
- React TSParticles / TSParticles
- EmailJS browser SDK
- React Hook Form
- React Toastify
- Web Vitals

Important source files:

- `package.json`
- `src/App.js`
- `src/index.js`
- `public/index.html`
- `vercel.json`
- `tailwind.config.js`
- `src/index.css`

### Current Routes / Pages

Routes are defined in `src/App.js` using `BrowserRouter`, `Routes`, `Route`, `AnimatePresence`, `Suspense`, and lazy-loaded pages.

Current routes:

| Route | Page |
|---|---|
| `/` | Home |
| `/about` | About |
| `/portfolio` | Portfolio listing |
| `/portfolio/smart-claim` | SmartClaim detail |
| `/portfolio/solar-flow` | SolarFlow detail |
| `/portfolio/onboardify` | Onboardify detail |
| `/portfolio/pro-link` | Pro-Link detail |
| `/resume` | Resume / CV |
| `/news` | News list |
| `/news/1` to `/news/13` | News detail pages |
| `/contact` | Contact |
| `*` | NotFound |

### Current Design Language

The visual identity is:

- Dark indigo background
- Bright pink accent
- Glassmorphism cards
- Animated particles
- Framer Motion transitions
- Typed text effects
- Hover-lift cards
- Rounded buttons/cards
- Large visual assets and embedded videos

Design tokens are mostly in `tailwind.config.js`:

- `deep-indigo`: `#070640`
- `darker-indigo`: `#0c0b44`
- `footer-bg`: `#121151`
- `primary-pink`: `#fe3e57`
- `secondary-pink`: `#ff6b81`

### Main Audience

The portfolio appears targeted at:

- Recruiters hiring junior Flutter/mobile developers
- Recruiters hiring junior AI/Data Science interns or engineers
- Technical reviewers checking project proof
- Possible freelance/client contacts
- Academic/community observers from IEEE or internship contexts

### Main Career Positioning

The current portfolio positions you as:

- Junior Flutter Developer
- Data Science & AI Engineering student
- AI/computer vision builder
- Full-stack developer
- IEEE/community participant

This is powerful but also slightly scattered. The portfolio has several strong directions, but the first impression does not yet make one primary target role completely clear.

### Strongest Current Sections

Strongest sections:

- SmartClaim project proof
- Resume experience section
- Recommendation letter access
- CV download
- Contact page with multiple channels
- Project videos and visual assets
- Vercel routing support
- Route-level lazy loading

### Weakest Current Sections

Weakest sections:

- Public copy quality due to encoding artifacts
- Performance because of very large videos/images
- SEO metadata
- Accessibility in form fields and motion behavior
- Project case study strategy
- Content focus and recruiter positioning
- Data maintainability because content is hardcoded across components
- Production cleanup, especially `.gitignore`, missing favicon assets, local cache, and generated build concerns

## B. Strengths

### 1. The Portfolio Has Real Substance

This is not an empty template. It has real projects, real certificates, recommendation letters, a CV, detailed pages, and videos. That gives the portfolio a stronger base than many junior portfolios.

Preserve:

- SmartClaim as the flagship project
- Recommendation PDFs
- CV download
- Project videos
- News/certification proof
- Contact options

### 2. Strong Route Coverage

The app has a complete site structure:

- Home
- About
- Portfolio
- Resume
- News
- Contact
- 404

This is good for recruiter browsing because important information is separated into predictable sections.

### 3. Visual Identity Is Memorable

The dark indigo/pink identity is consistent and recognizable. The glass cards, particles, and animated cards create an energetic technical portfolio feel.

Preserve:

- Core dark/pink palette
- Consistent project cards
- Animated route transitions
- Visual proof through images and videos

### 4. SmartClaim Is a Strong Anchor Project

SmartClaim has the strongest hiring value because it combines:

- Flutter
- AI/computer vision
- YOLOv8
- FastAPI
- Docker
- Internship context
- 92.9% precision metric
- Real demo videos

This can become the centerpiece of the portfolio.

### 5. Contact Flow Exists

The Contact page includes:

- Contact form
- WhatsApp
- LinkedIn
- Email
- Phone
- Map

This is good for conversion. Many portfolios forget to make contacting easy.

### 6. Lazy Loading Is Already Used

`src/App.js` lazy-loads many pages, which is a good starting point for performance and route separation.

### 7. Deployment Routing Is Handled

`vercel.json` rewrites all routes to `index.html`, which is correct for a React Router single page app deployed on Vercel.

## C. Main Weaknesses / Faiblesses

### 1. Encoding Artifacts In Public Copy

Severity: Critical  
Priority: 1  
Where:

- `src/pages/Home.jsx`
- `src/pages/Resume.jsx`
- `src/pages/News/NewsList.jsx`
- multiple news detail pages
- portfolio detail pages

Examples visible in source/output:

- `Iâ€™m`
- `â€“`
- `Â·`
- `ðŸš€`
- `â†’`

Why it matters:

This is one of the fastest ways to lose recruiter trust. It makes the portfolio look broken or carelessly exported, even if the underlying work is strong.

How to fix:

- Search the source for mojibake characters.
- Replace all broken apostrophes, dashes, bullets, arrows, and emoji fragments.
- Prefer simple ASCII punctuation for consistency:
  - `'`
  - `-`
  - `->`
  - `•` only if the repo encoding is stable
- Run a final scan with:

```bash
rg "â|Â|ð" src public
```

### 2. Huge Media Assets Hurt Performance

Severity: Critical  
Priority: 2  
Where:

- `src/assets/videos/Smart_claim/Data Demo.mp4` - 61.96 MB
- `src/assets/videos/ressource.mp4` - 13.81 MB
- `src/assets/images/AI_AWS.jpg` - 9.11 MB
- `src/assets/videos/Smart_claim/Demo_Mobile.mp4` - 8.58 MB
- `src/assets/videos/user2.0.mp4` - 5 MB
- generated `build/` total size around 140 MB

Why it matters:

Recruiters often open portfolios on mobile, office Wi-Fi, or quickly between tasks. Heavy media can delay page interaction and make the site feel slow.

How to fix:

- Compress videos aggressively.
- Add `poster` images.
- Add `preload="metadata"` or avoid video loading until interaction.
- Consider hosting large videos externally or loading them only on demand.
- Convert large images to optimized WebP/AVIF.
- Generate responsive image sizes.

### 3. Weak SEO And Metadata

Severity: High  
Priority: 3  
Where:

- `public/index.html`
- `public/manifest.json`

Current issue:

- Generic title: `Fedi Hmida Portfolio`
- Generic description: `Fedi Hmida - Portfolio`
- No Open Graph tags
- No Twitter card tags
- No canonical URL
- No route-level metadata
- No `robots.txt`
- No `sitemap.xml`
- `favicon.ico`, `logo192.png`, and `logo192.png` references exist but actual files are missing in `public/`

Why it matters:

When shared on LinkedIn or sent to recruiters, the site preview will look weak or broken. Search discoverability is also limited.

How to fix:

- Add favicon and app icons.
- Improve title and description.
- Add Open Graph metadata.
- Add Twitter card metadata.
- Add `robots.txt`.
- Add `sitemap.xml`.
- If staying with CRA, consider `react-helmet-async` for route-level titles/descriptions.

### 4. Career Positioning Is Too Split At First Impression

Severity: High  
Priority: 4  
Where:

- `src/pages/Home.jsx`

Current hero rotates:

- `Junior Flutter Developer`
- `Data Science & AI Engineering Student`

Why it matters:

Recruiters decide quickly whether you match their role. The current hero says two different things, but does not combine them into one strong value proposition.

How to fix:

Use one primary positioning statement, for example:

- `Flutter & AI Engineer building intelligent mobile products`
- `Junior Flutter Developer with AI/computer vision project experience`
- `Data Science & Mobile Developer focused on AI-powered apps`

Then support with proof:

- SmartClaim
- YOLOv8 92.9% precision
- Flutter/FastAPI/Docker
- Recommendation letters

### 5. Project Case Studies Are Feature-Heavy But Not Recruiter-Proof-Heavy

Severity: High  
Priority: 5  
Where:

- `src/pages/Portfolio/SmartClaimDetails.jsx`
- `src/pages/Portfolio/SolarFlowDetails.jsx`
- `src/pages/Portfolio/OnboardifyDetails.jsx`
- `src/pages/Portfolio/ProLinkDetails.jsx`

Why it matters:

Recruiters and technical reviewers want to know:

- What problem did you solve?
- What exactly was your role?
- What architecture did you build?
- What technical decisions did you make?
- What was difficult?
- What was the result?
- Can I see code or a demo?

Current pages mostly describe features and technologies, but do not strongly prove engineering ownership.

How to fix:

Add sections to each case study:

- My role
- Problem
- Users
- Architecture
- Key technical decisions
- Challenges and tradeoffs
- Results/metrics
- Screenshots/videos
- GitHub link if public
- Live/demo link if available
- What I learned

### 6. Contact Form Accessibility And Production Polish Are Weak

Severity: High  
Priority: 6  
Where:

- `src/components/Contact/ContactForm.jsx`

Issues:

- Hardcoded EmailJS service/template/public key values
- `console.log` outputs submitted template params
- Inputs rely on placeholders instead of visible labels
- Validation errors are visual only; no helpful error messages
- No `aria-invalid`
- No `aria-describedby`

Why it matters:

The contact form is a conversion point. If it feels unpolished, users may avoid it. Logging form content is also not production-polished.

How to fix:

- Move EmailJS IDs to env variables.
- Remove console logs.
- Add visible labels.
- Add clear validation messages.
- Add ARIA attributes.
- Confirm keyboard-only form submission works.

### 7. Accessibility Is Below Production Standard

Severity: Medium  
Priority: 7  
Where:

- `Navbar.jsx`
- `ContactForm.jsx`
- `ProjectCard.jsx`
- video overlays in project detail pages
- animated sections across the app

Issues:

- Mobile menu button has no `aria-label`.
- Some icon-only links/buttons have no accessible label.
- Placeholder-only form fields.
- Clickable video wrappers are `div` elements, not buttons.
- No keyboard handling for video play overlays.
- No reduced-motion strategy despite heavy animation.
- Focus states are inconsistent; navbar button uses `focus:outline-none`.

Why it matters:

Accessibility issues affect real users and can also hurt professional evaluation from technical reviewers.

How to fix:

- Add accessible labels to icon-only controls.
- Use buttons for interactive video overlays.
- Add `onKeyDown` where needed.
- Add visible focus rings.
- Support `prefers-reduced-motion`.
- Improve form semantics.

### 8. Internal Navigation Uses Plain Anchors In Project Cards

Severity: Medium  
Priority: 8  
Where:

- `src/components/Portfolio/ProjectCard.jsx`

Issue:

Internal route navigation uses:

```jsx
<a href={project.link}>
```

Why it matters:

This can cause full page reload behavior instead of smooth React Router navigation. It also creates inconsistent navigation behavior.

How to fix:

Use:

```jsx
<Link to={project.link}>
```

### 9. Content Data Is Duplicated And Hardcoded Inside Components

Severity: Medium  
Priority: 9  
Where:

- `Home.jsx`
- `Portfolio.jsx`
- `NewsList.jsx`
- `Resume.jsx`
- `ConnectSection.jsx`
- project detail pages

Why it matters:

The same project/news/contact concepts appear in multiple places. Updating one detail can leave another stale.

How to fix:

Create central data files:

- `src/data/projects.js`
- `src/data/news.js`
- `src/data/skills.js`
- `src/data/socialLinks.js`
- `src/data/resume.js`

Then render from shared source data.

### 10. Particle Background Is Heavy And Repeated

Severity: Medium  
Priority: 10  
Where:

- `src/components/ParticlesBackground.jsx`
- most page components

Current config:

- `loadFull(engine)`
- 120 FPS
- 50 particles
- full-screen background
- hover interaction

Why it matters:

It adds visual polish but costs CPU/GPU and JS weight. It may be too much on mobile or lower-end devices.

How to fix:

- Use a slimmer TSParticles bundle.
- Lower FPS and particle count.
- Disable or simplify on mobile.
- Respect reduced-motion preferences.

### 11. Missing Production Hygiene In `.gitignore`

Severity: Medium  
Priority: 11  
Where:

- `.gitignore`

Current ignored files:

- `node_modules/`
- `temp_import.css`

Current untracked files include:

- `.npm-cache/`
- `Makefile`
- `web.cmd`
- `PROJECT_RECAP.md`

Why it matters:

Local cache folders and build artifacts can pollute the repo. Environment files should also be handled carefully.

How to fix:

Add common ignores:

- `.npm-cache/`
- `.env.local`
- `.env`
- logs
- optional `build/` depending on deployment strategy

### 12. Legacy Template Assets Create Noise

Severity: Low  
Priority: 12  
Where:

- `src/assets/css`
- `src/assets/js`
- `src/assets/fonts`

Examples:

- `owl.video.play.html`
- old carousel/fancybox/swiper assets
- large icon font files
- template JS files

Why it matters:

Unused template files make the project look less clean and harder to maintain.

How to fix:

- Audit imports.
- Keep only files actually used.
- Remove dead CSS/JS/fonts after confirming build still works.

## D. Expert Ratings

| Category | Score / 10 | Notes |
|---|---:|---|
| First impression | 6.5 | Visually memorable, but copy artifacts and unclear role focus hurt trust. |
| Design/UI | 6.5 | Strong style direction, but a bit animation-heavy/template-like. |
| UX/navigation | 6.0 | Routes are clear, but project navigation, CTAs, and information hierarchy need improvement. |
| Project presentation | 6.0 | Good project base, but case studies need role, impact, architecture, and links. |
| Content/branding | 5.5 | Good ingredients, but unfocused positioning and grammar/encoding issues reduce professionalism. |
| Technical React quality | 6.3 | Functional React structure, lazy loading, but hardcoded data and duplicated patterns. |
| Performance | 3.5 | Major media sizes are the biggest weakness. |
| Accessibility | 4.5 | Needs semantic form labels, ARIA, keyboard support, and reduced motion. |
| SEO | 3.0 | Minimal metadata, missing icons, no OG/Twitter/sitemap/robots. |
| Production readiness | 4.5 | Vercel rewrite is good, but `.gitignore`, hardcoded config, missing public files, and asset weight need work. |

Overall score: **5.7 / 10**

Current professional level:

- Visual/content ambition: intermediate
- Production quality: junior to intermediate
- Recruiter readiness: partially ready, not fully polished

Biggest reason for the score:

The project has real proof and good ambition, but credibility is reduced by visible text encoding issues, oversized media, weak SEO/accessibility, and unfocused positioning.

Realistic score after fixes:

- Short-term after critical cleanup: 6.8 to 7.2
- After project strategy, performance, SEO, and accessibility work: 8.0 to 8.4

## E. Best-Practice Gaps

### Recruiter Portfolio Strategy

Current gap:

The portfolio shows many capabilities, but the first screen does not quickly answer:

- What role do you want?
- What is your strongest proof?
- Why should I contact you now?

Best practice:

The hero should immediately communicate one clear positioning statement, one proof point, and two CTAs.

Example structure:

- Headline: `Flutter & AI Engineer building intelligent mobile products`
- Proof line: `Built SmartClaim: Flutter + YOLOv8 + FastAPI, 92.9% damage detection precision`
- CTA 1: `View SmartClaim`
- CTA 2: `Download CV`

### React Architecture

Current gap:

Large pages contain data arrays, UI, and behavior together.

Best practice:

Separate:

- data
- reusable components
- page layout
- page-specific behavior

### Project Case Studies

Current gap:

Projects are presented like feature pages, not engineering case studies.

Best practice:

Each project should explain:

- problem
- users
- my role
- stack
- architecture
- key challenge
- measurable result
- demo/code links

### Performance

Current gap:

The site imports/serves very large media assets. Videos are embedded directly and have no poster/preload strategy.

Best practice:

Use compressed media, responsive images, lazy loading, metadata preload, and poster thumbnails.

### Accessibility

Current gap:

The portfolio is visually rich but not equally strong for keyboard/screen reader users.

Best practice:

Use semantic controls, labels, ARIA, focus rings, keyboard handlers, and reduced-motion handling.

### SEO

Current gap:

SEO is limited to one generic title and description.

Best practice:

Use route-specific metadata, Open Graph, Twitter cards, favicon/app icons, sitemap, robots, and structured data.

### Production Readiness

Current gap:

Local/cache/generated files and hardcoded service values need cleanup.

Best practice:

Use environment variables, clean Git hygiene, no debug logs, complete public assets, and verified build/deploy behavior.

## F. Prioritized Correction Action Plan

### Phase 1 - Critical Fixes

#### Task 1: Clean Encoding Artifacts And Grammar

Priority: P0  
Estimated impact: Very high  
Estimated difficulty: Medium  
Likely files:

- `src/pages/Home.jsx`
- `src/pages/About.jsx`
- `src/pages/Resume.jsx`
- `src/pages/News/*.jsx`
- `src/pages/Portfolio/*.jsx`
- `src/components/**/*.jsx`

Validation:

```bash
rg "â|Â|ð" src public
npm run build
```

Manual validation:

- Review every page in browser.
- Check news cards and project pages.
- Check mobile and desktop.

#### Task 2: Fix Missing Public Icons And Basic Metadata

Priority: P0  
Estimated impact: High  
Estimated difficulty: Low  
Likely files:

- `public/index.html`
- `public/manifest.json`
- `public/favicon.ico`
- `public/logo192.png`
- `public/logo512.png`

Validation:

- Browser tab icon appears.
- No missing favicon requests.
- LinkedIn/social preview has useful title/description.

#### Task 3: Remove Contact Debug Logs And Move EmailJS Values

Priority: P0  
Estimated impact: High  
Estimated difficulty: Low  
Likely files:

- `src/components/Contact/ContactForm.jsx`
- `.env.example`
- `.gitignore`

Validation:

- Contact form still sends.
- No submitted data logs in browser console.
- Build passes.

#### Task 4: Improve `.gitignore`

Priority: P1  
Estimated impact: Medium  
Estimated difficulty: Low  
Likely files:

- `.gitignore`

Validation:

```bash
git status --short
```

Expected result:

- `.npm-cache/` no longer appears.
- env files are protected.

### Phase 2 - Portfolio Conversion Improvements

#### Task 5: Rewrite Home Hero For One Clear Positioning

Priority: P1  
Estimated impact: Very high  
Estimated difficulty: Medium  
Likely files:

- `src/pages/Home.jsx`

Validation:

- A recruiter can answer in 5 seconds:
  - who you are
  - what you do
  - what your strongest proof is
  - where to click next

#### Task 6: Add Strong CTAs Above The Fold

Priority: P1  
Estimated impact: High  
Estimated difficulty: Low/Medium  
Likely files:

- `src/pages/Home.jsx`
- possibly `src/components/Navbar.jsx`

Recommended CTAs:

- `View SmartClaim`
- `Download CV`
- `Contact Me`

Validation:

- CTAs visible on desktop and mobile.
- Links work.
- Buttons are keyboard focusable.

#### Task 7: Upgrade Project Cards

Priority: P1  
Estimated impact: High  
Estimated difficulty: Medium  
Likely files:

- `src/components/Portfolio/ProjectCard.jsx`
- `src/pages/Portfolio/Portfolio.jsx`
- possible `src/data/projects.js`

Add:

- short impact line
- role badge
- project status
- links to case study/demo/GitHub where available

Validation:

- Project value is clear before opening detail page.

#### Task 8: Rebuild SmartClaim As Flagship Case Study

Priority: P1  
Estimated impact: Very high  
Estimated difficulty: Medium  
Likely files:

- `src/pages/Portfolio/SmartClaimDetails.jsx`
- related assets

Recommended structure:

- Summary
- Problem
- My role
- Architecture
- AI model details
- Backend/API details
- Mobile app details
- Results
- Demo videos
- Challenges
- What I learned

Validation:

- Technical reviewer can understand your contribution in 60 seconds.

#### Task 9: Improve Contact Flow Copy

Priority: P2  
Estimated impact: Medium  
Estimated difficulty: Low  
Likely files:

- `src/pages/Contact.jsx`
- `src/components/Contact/ContactHero.jsx`
- `src/components/Contact/ContactForm.jsx`
- `src/components/Contact/ConnectSection.jsx`

Validation:

- Contact page feels professional, not generic.
- All social links are real.

### Phase 3 - Technical Cleanup

#### Task 10: Move Hardcoded Data To Data Files

Priority: P2  
Estimated impact: Medium  
Estimated difficulty: Medium  
Likely files:

- create `src/data/projects.js`
- create `src/data/news.js`
- create `src/data/skills.js`
- create `src/data/socialLinks.js`
- update Home, Portfolio, NewsList, Resume, Contact components

Validation:

- No visual regression.
- Updating a project in one file updates all relevant pages.

#### Task 11: Replace Internal Anchor Links With React Router Links

Priority: P2  
Estimated impact: Medium  
Estimated difficulty: Low  
Likely files:

- `src/components/Portfolio/ProjectCard.jsx`

Validation:

- Project cards navigate without full reload.
- Browser back button works.

#### Task 12: Remove Unused Legacy Assets

Priority: P3  
Estimated impact: Medium  
Estimated difficulty: Medium  
Likely files/folders:

- `src/assets/css`
- `src/assets/js`
- `src/assets/fonts`

Validation:

```bash
npm run build
```

Manual validation:

- Home social icons still work.
- Fonts still load.
- No missing CSS assets.

### Phase 4 - Performance / SEO / Accessibility

#### Task 13: Compress Images And Videos

Priority: P1  
Estimated impact: Very high  
Estimated difficulty: Medium/High  
Likely files:

- `src/assets/videos`
- `src/assets/images`
- project detail pages

Validation:

- Largest video no longer near 62 MB.
- Largest image no longer near 9 MB.
- Pages load faster on throttled network.

#### Task 14: Add Video Posters And Preload Strategy

Priority: P1  
Estimated impact: High  
Estimated difficulty: Medium  
Likely files:

- `SmartClaimDetails.jsx`
- `SolarFlowDetails.jsx`
- `OnboardifyDetails.jsx`
- poster image assets

Validation:

- Videos show professional thumbnails.
- Network tab does not eagerly download huge videos unnecessarily.

#### Task 15: Accessibility Pass

Priority: P1  
Estimated impact: High  
Estimated difficulty: Medium  
Likely files:

- `Navbar.jsx`
- `ContactForm.jsx`
- `ProjectCard.jsx`
- video sections
- buttons and icon links

Validation:

- Keyboard-only navigation works.
- Inputs have labels.
- Errors are announced/readable.
- Icon buttons have accessible names.

#### Task 16: Reduced Motion Support

Priority: P2  
Estimated impact: Medium  
Estimated difficulty: Medium  
Likely files:

- `ParticlesBackground.jsx`
- pages with Framer Motion
- `src/index.css`

Validation:

- Browser/OS reduced motion setting reduces animations.

#### Task 17: SEO Metadata Upgrade

Priority: P1  
Estimated impact: High  
Estimated difficulty: Medium  
Likely files:

- `public/index.html`
- possible `src/components/SEO.jsx`
- route pages

Validation:

- Page title/description are stronger.
- Social preview works.
- `robots.txt` and `sitemap.xml` exist.

### Phase 5 - Polish And Final Validation

#### Task 18: Mobile QA

Priority: P1  
Estimated impact: High  
Estimated difficulty: Medium  
Likely files:

- all pages

Validation:

- Test at 360px, 390px, 768px, 1024px, desktop.
- Check no overlapping text.
- Check nav drawer.
- Check video/card layout.

#### Task 19: Visual Consistency Pass

Priority: P2  
Estimated impact: Medium/High  
Estimated difficulty: Medium  
Likely files:

- shared cards
- section headings
- news pages
- project pages

Validation:

- Cards, spacing, headings, and buttons feel from one design system.

#### Task 20: Production Build And Deployment Checklist

Priority: P1  
Estimated impact: High  
Estimated difficulty: Low  
Likely files:

- root config
- Vercel settings

Validation:

```bash
npm run build
```

Check:

- direct route refresh
- missing assets
- console warnings/errors
- mobile load
- CV/download links
- contact form

## G. Recommended First Fix

The single best first task is:

## Clean all public copy and credibility issues

This includes:

- fixing encoding artifacts
- fixing grammar errors
- replacing broken punctuation
- removing contact console logs
- adding missing favicon/public icons
- improving the homepage title/description

Why this first:

Recruiters judge polish immediately. Before optimizing architecture or redesigning case studies, the portfolio must stop showing broken characters and missing public assets. This is the fastest way to raise trust without changing the entire site.

Expected result:

- The site feels more professional immediately.
- Recruiters are less likely to dismiss it.
- Later improvements, like SmartClaim case study restructuring and performance optimization, will land on a cleaner foundation.

