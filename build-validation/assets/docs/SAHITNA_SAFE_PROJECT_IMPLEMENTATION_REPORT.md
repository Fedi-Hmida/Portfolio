# Sahitna Safe Project Implementation Report

## What Was Added

Added Sahitna Safe - Breast Cancer Detection ML Platform to the React portfolio as a complete AI/ML case study.

The integration includes a portfolio card, Home preview participation through centralized project data, a dedicated route, a full detail page, and a clean code-based SVG visual. No fake screenshots, deployment URLs, or unsupported clinical claims were introduced.

## Source Information Used

The implementation uses only the provided project summary and report facts:

- Timeline: September - December 2025
- Dataset: Wisconsin Diagnostic Breast Cancer Dataset
- Dataset size: 569 samples and 30 numerical diagnostic features
- Class distribution: 357 benign and 212 malignant
- Methodology: CRISP-DM
- Models compared: Logistic Regression, Support Vector Machine, Random Forest, Multi-Layer Perceptron, and XGBoost
- Selected model: Logistic Regression
- Main results: 98.83% accuracy, 98.44% malignant recall, 99.07% specificity, 0.9975 ROC-AUC, and 1 false negative on the test set
- Stack: Python, scikit-learn, XGBoost, FastAPI, Next.js, TypeScript, Tailwind CSS, SHAP, Joblib, and Makefile automation
- Architecture: Joblib model persistence, FastAPI API, Next.js frontend, endpoints /health, /predict, and /batch
- GitHub: https://github.com/Fedi-Hmida/MLProject_Fedi

## Files Changed

- src/data/projects.js
  - Added Sahitna Safe to the centralized projects array.
  - Updated the AI category label to AI / ML.
  - Added the project to AI and Web filters.
  - Home preview picks it up automatically through getProjectCards("home").

- src/App.js
  - Added lazy import for SahitnaSafeDetails.
  - Added route /portfolio/sahitna-safe with AnimatedPage wrapping.

- src/pages/Portfolio/SahitnaSafeDetails.jsx
  - Added full recruiter-ready case study page.
  - Includes hero, responsible AI note, problem, role, dataset, methodology, model comparison, selected model, architecture, explainability, results, lessons learned, and CTAs.

- src/assets/images/Portfolio/sahitna-safe.svg
  - Added a dark indigo/pink code-based project visual.
  - The visual is not a fake screenshot and does not imply clinical deployment.

- SAHITNA_SAFE_PROJECT_IMPLEMENTATION_REPORT.md
  - Added this report.

## Route Added

- /portfolio/sahitna-safe

Existing portfolio detail routes remain:

- /portfolio/smart-claim
- /portfolio/solar-flow
- /portfolio/onboardify
- /portfolio/pro-link

## Validation Performed

Validation checklist:

- Search for Sahitna Safe references in src.
- Confirm /portfolio/sahitna-safe exists in src/App.js.
- Confirm Sahitna Safe exists in src/data/projects.js.
- Confirm SVG asset exists.
- Confirm detail page exists.
- Confirm implementation report exists.
- Confirm no href="#" placeholders were introduced.
- Confirm GitHub links use target="_blank" and rel="noreferrer".
- Run cmd /c npm run build.

Actual build result: Passed. React production build compiled successfully. Main JS after gzip: 146.04 kB. Main CSS after gzip: 19.77 kB.

## Remaining Optional Improvements

- Add real screenshots only if a real Sahitna Safe UI screenshot becomes available.
- Add a live demo link only if the project is actually deployed.
- Add deeper model artifacts or diagrams only if they are published and safe to share.
- Consider a future data-driven project details schema if more case studies are added.

## Responsible Medical AI Note

This project is an academic machine-learning decision-support prototype and is not a certified medical diagnosis system.


## Logo Update

Replaced the visible Sahitna Safe asset with src/assets/images/Portfolio/ML2.png, the ready cleaned image provided as ML2.png so the card matches the other project logo treatments.


## Card Logo Sizing Update

Adjusted the Sahitna Safe project card image scale to 1.35 in src/data/projects.js so the logo visually matches the size of the other project cards.


## Ordering Update

Sahitna Safe was reordered before SmartClaim in src/data/projects.js so the newest academic AI/ML project appears first in Portfolio and Home project previews.
