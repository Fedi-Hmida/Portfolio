# Phase 2 Implementation Report

## Phase 2 Goals

Phase 2 focused on recruiter conversion and technical-review clarity without redesigning the portfolio.

Goals:

- Make the Home hero explain the target positioning within a few seconds.
- Add strong above-the-fold CTAs.
- Make project cards communicate role, impact, status, and tech before click.
- Rebuild SmartClaim into the flagship engineering case study.
- Improve the contact page so recruiters and collaborators know why and how to reach out.

## Files Changed

- `src/pages/Home.jsx`
- `src/pages/Portfolio/Portfolio.jsx`
- `src/components/Portfolio/ProjectCard.jsx`
- `src/pages/Portfolio/SmartClaimDetails.jsx`
- `src/pages/Portfolio/SolarFlowDetails.jsx`
- `src/pages/Portfolio/OnboardifyDetails.jsx`
- `src/pages/Portfolio/ProLinkDetails.jsx`
- `src/components/Contact/ContactHero.jsx`
- `src/components/Contact/ConnectSection.jsx`
- `src/components/Contact/ContactForm.jsx`

Generated files:

- `cmd /c npm run build` regenerated files under `build/`.
- No generated build files were manually edited.

## What Was Implemented

### Home Hero Positioning

The Home hero now uses one clear positioning statement:

> Flutter & AI Engineer building intelligent mobile products

The supporting copy now names the strongest proof:

- SmartClaim
- Flutter
- YOLOv8
- FastAPI
- Docker
- 92.9% damage detection precision

The old rotating role text was removed because it split the first impression between multiple identities.

### Above-the-Fold CTAs

Added three primary recruiter actions:

- `View SmartClaim` -> React Router `Link` to `/portfolio/smart-claim`
- `Download CV` -> public PDF path `/assets/cv/Cv_Ang.pdf`
- `Contact Me` -> React Router `Link` to `/contact`

The CTA buttons include keyboard focus styles and responsive mobile stacking.

### Project Cards and Portfolio Listing

Project cards now show more value before click:

- role badge
- project type/status
- impact/result line
- clearer tech chips
- stronger CTA text

Portfolio project data was upgraded with recruiter-focused fields:

- `role`
- `type`
- `status`
- `impact`
- `cta`

The category label `IA` was changed to `AI`.

### SmartClaim Flagship Case Study

`SmartClaimDetails.jsx` was upgraded from a feature-style page into a case-study structure.

Added/strengthened sections:

- project summary
- problem/challenge
- solution
- my role
- architecture / technical approach
- AI model and computer vision pipeline
- results / metrics
- demo videos
- challenges and tradeoffs
- what I learned

No fake links or metrics were added. The case study uses verified project facts already present in the portfolio, resume, audit, or recap:

- Flutter
- Dart
- FastAPI
- Docker
- YOLOv8 / YOLO v8s
- OpenCV
- PyTorch
- OCR
- MongoDB
- 92.9% precision
- 2-month internship
- Data & Mobile Developer Intern role

### Other Project Case Studies

After the SmartClaim flagship upgrade, the remaining project detail pages were also updated with the same recruiter-readable case-study approach while keeping their existing facts:

- `SolarFlowDetails.jsx`
- `OnboardifyDetails.jsx`
- `ProLinkDetails.jsx`

Each page now includes:

- case-study title
- project summary
- problem / solution framing
- project metrics based on existing content
- my role
- architecture / technical approach
- existing demos or feature walkthroughs
- challenges and tradeoffs
- what I learned

No fake project metrics, links, clients, or repositories were added.

### Contact Conversion Copy

The contact page now communicates:

- openness to junior Flutter/mobile roles
- AI engineering internships
- product-focused collaborations
- preferred channels for recruiters and detailed opportunities

The contact form intro now invites role, internship, project, and technical-review messages.

## Validation Performed

### Production Build

Command:

```bash
cmd /c npm run build
```

Result:

- Passed.
- React production build compiled successfully.
- Main JS after gzip: `140.76 kB`.
- Main CSS after gzip: `18.93 kB`.

### Tests

Command:

```bash
cmd /c npm test -- --watchAll=false
```

Result:

- No tests found.
- The command exits with code 1 because the project currently has zero matching test files.
- Automated test coverage remains a project gap.

### Targeted Checks

Checks performed:

```bash
rg -n --fixed-strings "View Details" src\pages src\components
rg -n --fixed-strings "/assets/cv/Cv_Ang.pdf" src\pages src\components
rg -n --fixed-strings "href=\"#\"" src\pages src\components public
rg -n --fixed-strings "href: \"#\"" src\pages src\components public
rg -n "Download CV|/assets/cv/Cv_Ang.pdf|View SmartClaim|to=\{project\.link\}" src\pages src\components
```

Results:

- No remaining `View Details` CTA text.
- CV path still points to `/assets/cv/Cv_Ang.pdf`.
- No placeholder `href="#"` links were introduced.
- No placeholder `href: "#"` link objects were introduced.
- Project card internal CTAs use React Router `Link` through `to={project.link}`.
- SolarFlow, Onboardify, and Pro-Link now include the same case-study section structure as SmartClaim.

## Remaining Phase 2 Limitations

- Project data is still duplicated between Home and Portfolio. This belongs to Phase 3 data organization.
- The portfolio still has no real live demo or GitHub links for individual projects, so none were invented.
- Route-level SEO and richer Open Graph metadata are still Phase 4 work.
- Performance optimization for images, videos, particles, and bundle strategy remains Phase 4.
- Automated tests are still missing.

## Recommended Next Step

Move to **Phase 3 - Technical Cleanup** next.

Best next task:

Create a shared project data source for Home and Portfolio so project title, role, impact, tech stack, CTA labels, and routes cannot drift between pages.
