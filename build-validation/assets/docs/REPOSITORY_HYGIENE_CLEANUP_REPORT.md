# Repository Hygiene Cleanup Report

Date: 2026-05-27

## Audit Used

- Source audit: `REPOSITORY_HYGIENE_AUDIT.md`
- Scope: duplicate root assets, unused alternate assets, source CV duplicates, unused video, ignored docs rule, tracked generated `build/` output, helper/local files, and runtime reference checks.

## Files Removed

### Verified Root Duplicates

These were verified as byte-identical duplicates of canonical source/public assets before removal:

| Removed path | Canonical path kept |
| --- | --- |
| `AI_AWS.pdf` | `public/assets/docs/AI_AWS.pdf` |
| `ML2.png` | `src/assets/images/Portfolio/ML2.png` |
| `hack.jpg` | `src/assets/images/news15/hack.jpg` |
| `nvidea1.jpg` | `src/assets/images/news14/nvidea1.jpg` |
| `nvidea2.jpg` | `src/assets/images/news17/nvidea2.jpg` |
| `img/1.jpg` | `src/assets/images/news16/1.jpg` |
| `img/2.jpg` | `src/assets/images/news16/2.jpg` |
| `img/3.jpg` | `src/assets/images/news16/3.jpg` |
| `img/4.jpg` | `src/assets/images/news16/4.jpg` |

The `img/` folder contained only `1.jpg`, `2.jpg`, `3.jpg`, and `4.jpg`, then was removed.

### Unused Alternate Project Assets

These had no source/public references outside ignored audit/report docs:

- `src/assets/images/Portfolio/ML.png`
- `src/assets/images/Portfolio/ML-clean.png`
- `src/assets/images/Portfolio/firmaa-cover.svg`
- `src/assets/images/Portfolio/sahitna-safe.svg`

### Source CV Duplicates

The app uses public CV/recommendation PDF paths under `public/assets/cv/**`. No source imports/references required these source copies:

- `src/assets/cv/CV.pdf`
- `src/assets/cv/CV6.pdf`
- `src/assets/cv/Fedi_Hmida_Letter of Recommendation.pdf`
- `src/assets/cv/Recommendation_FediHmida.pdf`
- `src/assets/cv/fedi-hmida-cv.pdf`

### Unreferenced Video

- `src/assets/videos/user33.0.mp4`

No source/public references remained for this file.

## Files Intentionally Kept

Runtime and deployable assets kept:

- `public/assets/docs/AI_AWS.pdf`
- `public/assets/cv/Cv_Ang.pdf`
- `public/assets/cv/Fedi_Hmida_Letter of Recommendation.pdf`
- `public/assets/cv/Recommendation_FediHmida.pdf`
- `src/assets/images/Portfolio/ML2.png`
- `src/assets/images/Portfolio/Firmaa/**`
- `src/assets/images/news14/**`
- `src/assets/images/news15/**`
- `src/assets/images/news16/**`
- `src/assets/images/news17/**`
- `src/assets/videos/demo_firmaa.mp4`
- `src/assets/videos/Smart_claim/**`
- `src/assets/videos/Maintennace2.0.mp4`
- `src/assets/videos/admin2.0.mp4`
- `src/assets/videos/user2.0.mp4`
- `src/assets/videos/program.mp4`
- `src/assets/videos/Projet.mp4`
- `src/assets/videos/quiz.mp4`
- `src/assets/videos/report.mp4`
- `src/assets/videos/ressource.mp4`
- `src/assets/css/fonts.css`
- `src/assets/css/social-icons.css`
- `public/favicon.svg`
- `public/manifest.json`
- `public/robots.txt`
- `public/index.html`

Potential external/public files kept for manual confirmation later:

- `public/assets/cv/CV6.pdf`
- `public/assets/cv/fedi-hmida-cv.pdf`

Local/untracked helpers kept, not committed:

- `Makefile`
- `web.cmd`
- `me.png`

## Build Tracking Cleanup Result

Intended command:

```powershell
git rm --cached -r build
```

Result: blocked by local Git index permissions:

```text
fatal: Unable to create 'C:/Users/Fedi/Desktop/Fiche/.git/index.lock': Permission denied
```

Current status:

- `build/` is ignored by `.gitignore`.
- `git ls-files build` still returns 109 tracked build files.
- `git ls-files -ci --exclude-standard` still returns 109 ignored-but-tracked build files.
- This remains the main unfinished cleanup item.

Recommended next action when Git index write access is available:

```powershell
git rm --cached -r build
git status --short
git ls-files build
```

After that, `git ls-files build` should return no files.

## Gitignore Result

`.gitignore` keeps generated build output ignored:

```gitignore
build/
```

Docs markdown reports remain ignored narrowly:

```gitignore
public/assets/docs/*.md
```

The whole docs folder is not ignored, so deployable assets such as `public/assets/docs/AI_AWS.pdf` remain allowed.

## Validation Results

### Build

Command:

```powershell
npm.cmd run build
```

Result: passed.

### Tests

Command:

```powershell
npm.cmd test -- --watchAll=false
```

Result: failed only because no tests exist:

```text
No tests found, exiting with code 1
```

### Reference Checks

Commands:

```powershell
rg "AI_AWS.pdf" src public
rg "Cv_Ang.pdf" src public
rg "CV.pdf" src public
rg "user33.0.mp4" src public
rg "ML.png|ML-clean.png|firmaa-cover.svg|sahitna-safe.svg" src public
```

Results:

- `AI_AWS.pdf` is still referenced by `src/pages/News/NewsAWS.jsx`.
- `Cv_Ang.pdf` is still referenced by `src/pages/Resume.jsx`, `src/pages/About.jsx`, `src/pages/Home.jsx`, and `src/pages/Portfolio/SmartClaimDetails.jsx`.
- No remaining `CV.pdf` references found.
- No remaining `user33.0.mp4` references found.
- No remaining references found for `ML.png`, `ML-clean.png`, `firmaa-cover.svg`, or `sahitna-safe.svg`.

### Protected File Checks

Confirmed present after cleanup:

- `public/assets/docs/AI_AWS.pdf`
- `public/assets/cv/Cv_Ang.pdf`
- `public/assets/cv/Fedi_Hmida_Letter of Recommendation.pdf`
- `public/assets/cv/Recommendation_FediHmida.pdf`
- `src/assets/images/Portfolio/ML2.png`
- `src/assets/images/news14/nvidea1.jpg`
- `src/assets/images/news15/hack.jpg`
- `src/assets/images/news16/1.jpg`
- `src/assets/images/news16/2.jpg`
- `src/assets/images/news16/3.jpg`
- `src/assets/images/news16/4.jpg`
- `src/assets/images/news17/nvidea2.jpg`
- `src/assets/videos/demo_firmaa.mp4`

Confirmed removed after cleanup:

- `AI_AWS.pdf`
- `ML2.png`
- `hack.jpg`
- `nvidea1.jpg`
- `nvidea2.jpg`
- `img/`
- `src/assets/images/Portfolio/ML.png`
- `src/assets/images/Portfolio/ML-clean.png`
- `src/assets/images/Portfolio/firmaa-cover.svg`
- `src/assets/images/Portfolio/sahitna-safe.svg`
- `src/assets/cv/CV.pdf`
- `src/assets/cv/CV6.pdf`
- `src/assets/cv/Fedi_Hmida_Letter of Recommendation.pdf`
- `src/assets/cv/Recommendation_FediHmida.pdf`
- `src/assets/cv/fedi-hmida-cv.pdf`
- `src/assets/videos/user33.0.mp4`

### Whitespace Check

Command:

```powershell
git diff --check
```

Result: passed with line-ending warnings on tracked generated `build/` files only.

## Remaining Risky Cleanup Items

- `build/` is still tracked and must be removed from the Git index with `git rm --cached -r build` once `.git/index.lock` can be created.
- `public/assets/cv/CV6.pdf` and `public/assets/cv/fedi-hmida-cv.pdf` may be stale, but they were kept because public PDFs may be externally linked.
- Legacy assets under `src/assets/css/**`, `src/assets/js/**`, and old image folders should remain untouched until visual verification proves they are unused.
- `Makefile`, `web.cmd`, and `me.png` remain untracked and need manual intent confirmation.
- `package-lock.json` was already modified before this cleanup and was not changed intentionally here.

## Recommended Next Cleanup Phase

1. Run `git rm --cached -r build` with Git index write access, then verify `git ls-files build` is empty.
2. Review untracked local helper files: `Makefile`, `web.cmd`, and `me.png`.
3. Manually confirm whether public PDFs `CV6.pdf` and `fedi-hmida-cv.pdf` are externally used.
4. Audit legacy template assets only after a successful build and visual smoke test.
5. Stage cleanup deliberately, keeping `build/**` and docs markdown reports out of future commits.
