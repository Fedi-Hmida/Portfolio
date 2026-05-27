# Home Hero CTA And CV Preview Update Report

Date: 2026-05-27

## Files Changed

- `src/pages/Home.jsx`
- `HOME_HERO_CTA_CV_PREVIEW_UPDATE_REPORT.md`

Related asset already in place:

- `src/assets/images/slider/me.png`

## Current Code Verification

- Home hero CTAs are defined directly in `src/pages/Home.jsx`.
- The verified CV path is `public/assets/cv/Cv_Ang.pdf`, used in code as `/assets/cv/Cv_Ang.pdf`.
- The removed hero paragraph was defined directly in the Home hero.
- The hero image is imported from `src/assets/images/slider/me.png`.
- The previous hero image sizing used a `max-w-[500px]` image.
- The Home page did not already have CV modal state or modal keyboard handling before this update.

## CTA Changes

- `View SmartClaim` was replaced with `View Projects`.
- `View Projects` routes to `/portfolio` using React Router `Link`.
- `Download CV` was replaced with `View CV`.
- `View CV` opens a modal instead of downloading immediately.
- `Contact Me` was replaced with `About Me`.
- `About Me` routes to `/about` using React Router `Link`.

## CV Modal Behavior

- Uses a dimmed, blurred backdrop.
- Uses a centered glass-style dialog.
- Previews the PDF with an iframe.
- Uses `/assets/cv/Cv_Ang.pdf#toolbar=0&navpanes=0&scrollbar=1&view=FitH` for the preview. The toolbar-hiding flag is browser-dependent.
- Provides:
  - `Copy CV link`
  - `Download CV`
  - `Close`
  - `Open the PDF directly` fallback link
- Closes on Escape.
- Closes on backdrop click.
- Moves focus into the modal when opened and restores previous focus on close.
- Keeps mobile actions stacked and desktop actions aligned.

## Image Sizing And Framing

- The hero image was increased from a `max-w-[500px]` approach to responsive explicit widths:
  - mobile: `w-[min(90vw,430px)]`
  - tablet: `sm:w-[min(78vw,540px)]`
  - desktop: `lg:w-[560px]`
  - wide desktop: `xl:w-[640px]`
- The right hero column now has responsive minimum heights to prevent overlap.
- The glow was enlarged to match the larger image.
- The image still uses `object-contain`, so important parts are not cropped.

## Modal Polish After Visual Review

After reviewing the modal screenshot, the modal was refined:

- Reduced modal width from `max-w-6xl` to `max-w-5xl`.
- Tightened header spacing.
- Moved fallback text into the footer area.
- Separated fallback text from action buttons.
- Added toolbar-hiding PDF parameters where supported.
- Kept the dark indigo and pink glassmorphism style.

## Validation Performed

Build:

```powershell
npm.cmd run build
```

Result: passed.

Targeted searches:

```powershell
rg "View SmartClaim|Download CV|Contact Me" src/pages/Home.jsx
rg "View Projects|View CV|About Me" src/pages/Home.jsx
rg "Data Science & AI Engineering student focused on Flutter" src/pages/Home.jsx
rg "Cv_Ang.pdf|CV.pdf" src/pages/Home.jsx src public
```

Results:

- `View SmartClaim` and `Contact Me` no longer appear in `Home.jsx`.
- `Download CV` still appears inside the modal, as required.
- `View Projects`, `View CV`, and `About Me` appear in `Home.jsx`.
- The removed paragraph no longer appears.
- `Home.jsx` uses `/assets/cv/Cv_Ang.pdf`.

## Remaining Optional Improvements

- Browser PDF toolbar hiding is controlled by the browser PDF viewer. If a browser ignores `#toolbar=0`, a fully custom PDF renderer would require adding a PDF rendering library, which was intentionally avoided.
- A visual browser pass can be done before final staging if desired.
- Existing generated `build/` tracking noise remains from the repository hygiene task and should not be staged with this feature.
