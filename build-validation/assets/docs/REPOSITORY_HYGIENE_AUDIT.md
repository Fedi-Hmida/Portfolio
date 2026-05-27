# Repository Hygiene Audit

Generated for `C:\Users\Fedi\Desktop\Fiche`.

This is an audit-only report. No existing project files were deleted, moved, staged, committed, or pushed while producing it.

## A. Audit Scope

Inspected:

- Git state: `git status --short --branch`, `git ls-files`, `git ls-files build`, `git ls-files public/assets`, `git ls-files src/assets`, `git ls-files -ci --exclude-standard`, `git status --ignored --short`.
- Root files and folders, including untracked root assets and helper scripts.
- React source: `src/App.js`, `src/index.js`, `src/index.css`, `src/data/**`, `src/pages/**`, `src/components/**`.
- Source assets: `src/assets/**`, including images, videos, CSS, JS, fonts, and CV PDFs.
- Public assets: `public/assets/**`, `public/favicon.svg`, `public/robots.txt`, `public/manifest.json`, `public/index.html`.
- Generated output: `build/**`, inspected only.
- Dependency metadata: `package.json`, `package-lock.json`, and `npm.cmd ls --depth=0`.
- Duplicate candidates by SHA-256 hash for root/public/source asset duplicates.
- Missing references by scanning local JS/JSX imports, CSS `url(...)`, and public `/assets/...` URLs.
- Large files by recursive filesystem size scan excluding `.git`, `node_modules`, and `.npm-cache`.

Inventory highlights:

- `src/assets` tracked files: 249 tracked; 253 physical files including untracked alternates.
- `public/assets` tracked files: 6 tracked; 17 physical files including ignored local report Markdown files.
- `build` tracked files: 109 tracked files even though `build/` is ignored.
- Missing runtime references after query/hash fragment normalization: none found.

## B. Executive Summary

The largest hygiene risks are:

1. `build/**` is ignored but still tracked. It has 109 tracked generated files and many current modified/deleted entries. This is the biggest Git noise source.
2. Root-level assets are exact duplicates of canonical source/public assets: `AI_AWS.pdf`, `ML2.png`, `hack.jpg`, `nvidea1.jpg`, `nvidea2.jpg`, and `img/1.jpg` through `img/4.jpg`.
3. `src/assets/cv/**` duplicates public CV/recommendation PDFs, but the app serves CV/recommendation files from `public/assets/cv/**`.
4. Several local report Markdown files live under `public/assets/docs/**`; they are correctly ignored by `.gitignore`, but they are still copied into local build outputs if a build includes the public folder.
5. A large amount of legacy template material remains under `src/assets/css`, `src/assets/js`, `src/assets/images/about`, `blog`, `project`, `protfolio`, etc. Much of it appears unused by the current React entry graph.
6. Large videos are committed as source assets. Some are legitimate project-demo content, but `src/assets/videos/Smart_claim/Data Demo.mp4` is about 61.96 MB and should be reviewed for compression or external hosting.

## C. Duplicated Files

| Duplicate group | Paths | Identical / similar | Correct source of truth | Recommendation | Confidence |
|---|---|---:|---|---|---|
| AWS certificate PDF | `AI_AWS.pdf`; `public/assets/docs/AI_AWS.pdf` | Identical SHA-256, 1,357,191 bytes | `public/assets/docs/AI_AWS.pdf` because `NewsAWS.jsx` links to `/assets/docs/AI_AWS.pdf` | Remove root duplicate after confirmation | High |
| Sahitna Safe image | `ML2.png`; `src/assets/images/Portfolio/ML2.png` | Identical SHA-256, 97,690 bytes | `src/assets/images/Portfolio/ML2.png` because it is imported by project data/detail page | Remove root duplicate | High |
| MaraTech image | `hack.jpg`; `src/assets/images/news15/hack.jpg` | Identical SHA-256, 137,154 bytes | `src/assets/images/news15/hack.jpg` because news data/page imports it | Remove root duplicate | High |
| NVIDIA DLI image | `nvidea1.jpg`; `src/assets/images/news14/nvidea1.jpg` | Identical SHA-256, 40,031 bytes | `src/assets/images/news14/nvidea1.jpg` | Remove root duplicate | High |
| NVIDIA anomaly image | `nvidea2.jpg`; `src/assets/images/news17/nvidea2.jpg` | Identical SHA-256, 26,683 bytes | `src/assets/images/news17/nvidea2.jpg` | Remove root duplicate | High |
| IASTAM images | `img/1.jpg` to `img/4.jpg`; `src/assets/images/news16/1.jpg` to `4.jpg` | Identical SHA-256 pairs | `src/assets/images/news16/**` because `NewsIASTAM.jsx` imports them | Remove root `img/` duplicate folder | High |
| CV6 PDF | `public/assets/cv/CV6.pdf`; `src/assets/cv/CV6.pdf` | Identical SHA-256, 267,245 bytes | Likely `public/assets/cv/CV6.pdf` if still needed for public downloads | Remove source duplicate after confirming no import use | High |
| Old lowercase CV PDF | `public/assets/cv/fedi-hmida-cv.pdf`; `src/assets/cv/fedi-hmida-cv.pdf` | Identical SHA-256, 262,286 bytes | Likely public copy if external links still exist | Verify external usage; remove source duplicate if not imported | Medium |
| Recommendation PDF | `public/assets/cv/Recommendation_FediHmida.pdf`; `src/assets/cv/Recommendation_FediHmida.pdf` | Identical SHA-256, 101,551 bytes | `public/assets/cv/Recommendation_FediHmida.pdf`, linked by source | Remove source duplicate after confirming no import use | High |
| Recommendation PDF with spaces | `public/assets/cv/Fedi_Hmida_Letter of Recommendation.pdf`; `src/assets/cv/Fedi_Hmida_Letter of Recommendation.pdf` | Identical SHA-256, 99,393 bytes | `public/assets/cv/Fedi_Hmida_Letter of Recommendation.pdf`, linked by source | Remove source duplicate after confirming no import use | High |
| Legacy font cache-buster copies | e.g. `src/assets/fonts/*d41d.eot` and non-`d41d` equivalents | Identical hashes for several `.eot` files | Unclear; legacy CSS references cache-busted names | Keep until legacy CSS/fonts cleanup is decided | Low |
| Build media copies | `build/static/media/**` vs `src/assets/**` | Generated hashed copies, sometimes stale | Source assets under `src/assets/**` or public assets under `public/**` | Do not maintain manually; remove `build` from tracking in a dedicated cleanup | High |

## D. Unused Files / Assets

| Path | Type | Evidence | Confidence | Recommendation |
|---|---|---|---|---|
| `AI_AWS.pdf` | Root PDF | Exact duplicate of linked `public/assets/docs/AI_AWS.pdf`; untracked | High | Remove root duplicate |
| `ML2.png` | Root image | Exact duplicate of imported `src/assets/images/Portfolio/ML2.png`; untracked | High | Remove root duplicate |
| `hack.jpg` | Root image | Exact duplicate of imported `src/assets/images/news15/hack.jpg`; untracked | High | Remove root duplicate |
| `nvidea1.jpg` | Root image | Exact duplicate of imported `src/assets/images/news14/nvidea1.jpg`; untracked | High | Remove root duplicate |
| `nvidea2.jpg` | Root image | Exact duplicate of imported `src/assets/images/news17/nvidea2.jpg`; untracked | High | Remove root duplicate |
| `img/1.jpg` to `img/4.jpg` | Root image folder | Exact duplicates of imported `src/assets/images/news16/**`; untracked | High | Remove root duplicate folder |
| `src/assets/images/Portfolio/ML.png` | Image | Untracked; no import/reference found; `ML2.png` is the active asset | High | Remove or archive outside repo |
| `src/assets/images/Portfolio/ML-clean.png` | Image | Untracked; no import/reference found; `ML2.png` is active | High | Remove or archive outside repo |
| `src/assets/images/Portfolio/firmaa-cover.svg` | SVG | Untracked; current Firmaa card uses `Firmaa/logo_firmaa.png`; no source import found | High | Remove unless intentionally kept as design source |
| `src/assets/images/Portfolio/sahitna-safe.svg` | SVG | Untracked; current Sahitna asset uses `ML2.png`; no source import found | High | Remove unless intentionally kept as design source |
| `src/assets/cv/CV.pdf` | Source PDF | No source import/reference found; old public `CV.pdf` was intentionally replaced with `Cv_Ang.pdf` | High | Remove after confirming no external need |
| `src/assets/cv/CV6.pdf` | Source PDF | No source import/reference found; duplicate exists in public | High | Remove source duplicate after confirmation |
| `src/assets/cv/Fedi_Hmida_Letter of Recommendation.pdf` | Source PDF | No source import/reference found; public version is linked | High | Remove source duplicate after confirmation |
| `src/assets/cv/Recommendation_FediHmida.pdf` | Source PDF | No source import/reference found; public version is linked | High | Remove source duplicate after confirmation |
| `src/assets/cv/fedi-hmida-cv.pdf` | Source PDF | No source import/reference found; public version exists but is not linked by current source | Medium | Verify external usage; remove source duplicate if not needed |
| `public/assets/cv/CV6.pdf` | Public PDF | No current source link found | Medium | Verify external links before deletion |
| `public/assets/cv/fedi-hmida-cv.pdf` | Public PDF | No current source link found | Medium | Verify external links before deletion |
| `public/assets/docs/*.md` | Public report docs | Ignored by `.gitignore`; not source-linked; local reports only | High | Keep local or move outside `public`; do not commit |
| `src/assets/videos/user33.0.mp4` | Video | No import/reference found; similar size to `admin2.0.mp4` but not identical by hash scan | High | Verify manually; remove if obsolete |
| `src/assets/js/*.js` | Legacy JS bundle files | No import from React entry graph found; modern app uses React components instead | Medium | Verify no hidden script injection; then remove legacy JS set |
| `src/assets/css/custom.css`, `flaticon.css`, `font-awesome.min.css`, `jquery.fancybox.css`, `magnific-popup.css`, `odometer-theme-default.css`, `owl.*.css`, `slick*.css`, `themify-icons.css` | Legacy CSS | Only `fonts.css`, `index.css`, and `social-icons.css` are imported by current source; many legacy CSS files are not in the React entry graph | Medium | Verify with visual regression before removal |
| `src/assets/images/about/**`, `blog/**`, `blog-details/**`, `case/**`, `project/**`, `protfolio/**`, `recent-posts/**`, many `icon/**` images | Legacy/template images | No direct import/reference found in current source graph | Medium | Batch review with legacy CSS/JS cleanup |
| `src/assets/images/Portfolio/New Logo SmartClaim.0.png`, `New Logo SmartClaim1.png` | Project image variants | Active imports use `New Logo SmartClaim.png` and `New Logo SmartClaim2.png` | High | Remove variants after confirming not design masters |
| `src/assets/images/news6/Me.jpg`, `news6/me5.jpg` | News image variants | Active import uses `news6/me 2.jpg` | High | Remove variants after manual visual check |

## E. Misplaced Files

| Current path | Likely correct path | Reason | Recommendation |
|---|---|---|---|
| `AI_AWS.pdf` | `public/assets/docs/AI_AWS.pdf` | Public browser download asset already exists in correct location | Remove root duplicate |
| `ML2.png` | `src/assets/images/Portfolio/ML2.png` | Imported source asset already exists in correct location | Remove root duplicate |
| `hack.jpg` | `src/assets/images/news15/hack.jpg` | Imported source asset already exists in correct location | Remove root duplicate |
| `nvidea1.jpg` | `src/assets/images/news14/nvidea1.jpg` | Imported source asset already exists in correct location | Remove root duplicate |
| `nvidea2.jpg` | `src/assets/images/news17/nvidea2.jpg` | Imported source asset already exists in correct location | Remove root duplicate |
| `img/**` | `src/assets/images/news16/**` | Exact duplicate of imported IASTAM images | Remove root folder duplicate |
| `public/assets/docs/*.md` | `Doc/`, root docs folder, or external notes folder | Markdown reports are not deployable public assets; public folder gets copied to builds | Move local reports out of `public` after confirmation |
| `src/assets/cv/**` | `public/assets/cv/**` or remove | Browser-download PDFs should live under `public/assets/cv`; source copies are not imported | Remove source duplicates after confirmation |
| `build/**` | Generated by `npm run build` | Build output should not be source-controlled in this repo setup | Untrack in dedicated Git cleanup |
| `Makefile`, `web.cmd` | Keep only if project-level developer UX is intended | Untracked local helper files | Decide whether to commit as supported commands or remove locally |

## F. Missing Referenced Files

| Referenced path | Referenced by | Expected path | Severity | Recommendation |
|---|---|---|---|---|
| None found | JS/JSX imports, CSS URL refs, and public `/assets/...` URLs were scanned | N/A | N/A | No missing runtime asset fix needed right now |

Notes:

- Initial CSS scans produced false positives for query/hash-suffixed font URLs such as `fontawesome-webfont5b62.eot?v=...`; after normalizing query/hash fragments, no missing referenced files remained.
- `public/assets/docs/AI_AWS.pdf` exists and is linked by `src/pages/News/NewsAWS.jsx`.
- `/assets/cv/Cv_Ang.pdf` exists and is linked by `Home.jsx`, `Resume.jsx`, `About.jsx`, and `SmartClaimDetails.jsx`.

## G. Tracked Generated Files

`build/` status:

- `.gitignore` contains `build/`, so future untracked build output is ignored.
- `git ls-files build` reports 109 tracked build files.
- `git ls-files -ci --exclude-standard` confirms `build/**` is ignored but still tracked.
- Current working tree shows many `build/**` modifications/deletions, including stale deleted hashed chunks and stale asset copies.
- `build/static/media/demo_firmaa...mp4` is 79.11 MB, while the current source `src/assets/videos/demo_firmaa.mp4` is 44.93 MB, indicating local build output is stale relative to the compressed source video.

Recommendation:

- Do not hand-maintain or commit `build/**`.
- In a dedicated cleanup commit, run `git rm --cached -r build` and keep `build/` ignored.
- After that, deploy from source using the platform build step instead of committed build artifacts.

## H. Git Hygiene Findings

- Ignored but tracked:
  - `build/**` is ignored but still tracked. This creates persistent noisy status after builds or source asset changes.
- Untracked and likely temporary/duplicate:
  - `AI_AWS.pdf`, `ML2.png`, `hack.jpg`, `nvidea1.jpg`, `nvidea2.jpg`, `img/**`.
- Untracked and likely obsolete alternates:
  - `src/assets/images/Portfolio/ML.png`, `src/assets/images/Portfolio/ML-clean.png`, `src/assets/images/Portfolio/firmaa-cover.svg`, `src/assets/images/Portfolio/sahitna-safe.svg`.
- Untracked local helper scripts:
  - `Makefile`, `web.cmd`. These may be useful, but should either be intentionally committed or removed locally.
- Ignored local-only report docs:
  - `public/assets/docs/*.md` are correctly ignored, but their current location under `public` means local builds copy them into generated output.
- Modified but likely generated/noisy:
  - `package-lock.json` changed only by removal of `node_modules/tailwindcss/node_modules/yaml`; `package.json` did not change. Treat as install-environment noise unless a dependency update is intended.
  - `build/**` modified/deleted entries are generated output noise.
- Dependency tree:
  - `npm.cmd ls --depth=0` completed successfully.
  - Installed versions are newer patch/minor resolutions than `package.json` ranges in several cases, which is normal for npm lockfiles but reinforces that lockfile changes should be reviewed deliberately.

## I. Large File Findings

| Path | Size | Status | Justified? | Recommendation |
|---|---:|---|---|---|
| `src/assets/videos/Smart_claim/Data Demo.mp4` | 61.96 MB | Tracked source asset, imported by `SmartClaimDetails.jsx` | Possibly, but large for Git and web delivery | Compress further or external-host if quality allows |
| `src/assets/videos/demo_firmaa.mp4` | 44.93 MB | Tracked source asset, imported by `FirmaaDetails.jsx` | Yes, but still large | Accept short-term; consider another compression pass or external hosting later |
| `src/assets/videos/ressource.mp4` | 13.81 MB | Tracked source asset, imported by `OnboardifyDetails.jsx` | Reasonable but notable | Keep if demo is important; optimize when convenient |
| `src/assets/images/AI_AWS.jpg` | 9.11 MB | Tracked source asset, imported by news data/page | Borderline large image | Compress image or convert to WebP/JPEG optimized version |
| `build/static/media/demo_firmaa...mp4` | 79.11 MB | Generated build output | No, generated and stale | Remove from tracking via build cleanup |
| `build/static/media/Data Demo...mp4` | 61.96 MB | Generated copy | No, generated | Remove from tracking via build cleanup |
| `build/static/js/main...js.map` | 9.35 MB | Generated source map | No, generated | Remove from tracking via build cleanup |

## J. Recommended Cleanup Plan

### Phase 1 - Safe fixes

- Remove exact root duplicates:
  - `AI_AWS.pdf`
  - `ML2.png`
  - `hack.jpg`
  - `nvidea1.jpg`
  - `nvidea2.jpg`
  - `img/**`
- Remove untracked unused Portfolio alternates after confirming they are not design masters:
  - `src/assets/images/Portfolio/ML.png`
  - `src/assets/images/Portfolio/ML-clean.png`
  - `src/assets/images/Portfolio/firmaa-cover.svg`
  - `src/assets/images/Portfolio/sahitna-safe.svg`
- Either commit or remove local helper scripts:
  - `Makefile`
  - `web.cmd`
- Restore or discard the `package-lock.json` change after deciding whether it is intentional.

### Phase 2 - Verify before deletion

- Review public CV files that are not linked by current source:
  - `public/assets/cv/CV6.pdf`
  - `public/assets/cv/fedi-hmida-cv.pdf`
- Remove `src/assets/cv/**` duplicates after confirming all downloads use `public/assets/cv/**`.
- Review `src/assets/videos/user33.0.mp4`; no source reference found.
- Review legacy CSS/JS/template assets:
  - `src/assets/js/**`
  - unused legacy CSS files
  - unused legacy image folders such as `about`, `blog`, `case`, `project`, `protfolio`, `recent-posts`
- Optimize/compress large media:
  - `src/assets/videos/Smart_claim/Data Demo.mp4`
  - `src/assets/videos/demo_firmaa.mp4`
  - `src/assets/images/AI_AWS.jpg`

### Phase 3 - Git tracking cleanup

- In a dedicated commit, untrack generated output:
  - `git rm --cached -r build`
- Keep `build/` in `.gitignore`.
- Verify deployment still builds from source.
- After untracking `build/`, regenerate locally only as needed and keep it out of Git.
- Consider moving local audit/report Markdown files out of `public/assets/docs` so they do not get copied into local build folders.

## K. Do Not Touch Yet

Do not remove these without manual verification:

- `public/assets/docs/AI_AWS.pdf`: linked by `NewsAWS.jsx`.
- `public/assets/cv/Cv_Ang.pdf`: linked by current CV buttons.
- `public/assets/cv/Fedi_Hmida_Letter of Recommendation.pdf`: linked by current source/data.
- `public/assets/cv/Recommendation_FediHmida.pdf`: linked by current source/data.
- `src/assets/images/news14/**`, `news15/**`, `news16/**`, `news17/**`: imported by news pages/data.
- `src/assets/images/Portfolio/Firmaa/**`: imported by `FirmaaDetails.jsx`.
- `src/assets/images/Portfolio/ML2.png`: imported by project data and Sahitna detail page.
- `src/assets/videos/demo_firmaa.mp4`: imported by `FirmaaDetails.jsx`.
- `src/assets/videos/Smart_claim/**`: imported by `SmartClaimDetails.jsx`.
- `src/assets/videos/Maintennace2.0.mp4`, `admin2.0.mp4`, `user2.0.mp4`: imported by `SolarFlowDetails.jsx`.
- `src/assets/videos/program.mp4`, `Projet.mp4`, `quiz.mp4`, `report.mp4`, `ressource.mp4`: imported by `OnboardifyDetails.jsx`.
- `src/assets/css/fonts.css`: imported by `src/index.js`.
- `src/assets/css/social-icons.css`: imported by `src/pages/Home.jsx`.
- `public/favicon.svg`, `public/manifest.json`, `public/robots.txt`, `public/index.html`: active public app files.
