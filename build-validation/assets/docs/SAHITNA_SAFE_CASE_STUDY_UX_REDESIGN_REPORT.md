# Sahitna Safe Case Study UX Redesign Report

## Page Updated

- `src/pages/Portfolio/SahitnaSafeDetails.jsx`

## Sections Redesigned

- Problem
- My Role
- Dataset and Methodology
- Model Comparison
- Selected Model
- Architecture
- Explainability and Responsible AI
- What I Learned

## Content Preservation Summary

Preserved:
- WDBC dataset framing.
- 569 total samples.
- 30 numerical diagnostic features.
- 357 benign and 212 malignant cases.
- Binary benign/malignant classification.
- Stratified 70/30 train-test split.
- StandardScaler fitted only on training data.
- Class imbalance handled with weighting.
- CRISP-DM process.
- Model comparison across Logistic Regression, Random Forest, XGBoost, SVM, and MLP.
- Logistic Regression selected model.
- 98.83% accuracy.
- 98.44% malignant recall / sensitivity.
- 99.07% specificity.
- 0.9975 ROC-AUC.
- One false negative.
- SHAP transparency.
- Interpretability.
- Human-in-the-loop review.
- Clinical safety metrics.
- Clear academic prototype limitations.
- FastAPI, Next.js, TypeScript, Tailwind CSS, and Joblib architecture.
- `/health`, `/predict`, and `/batch` endpoints.

## UX Improvements Made

- Converted the problem section into risk-focused summary cards.
- Converted role bullets into ownership cards with responsibility, impact, and technical area.
- Converted dataset details into stat cards and preparation discipline chips.
- Added visual model comparison summary cards while preserving the detailed table.
- Added selected model metric cards to make the Logistic Regression decision easier to scan.
- Converted architecture into a layered interface/API/artifact map.
- Split Responsible AI into trust cards: Transparency, Human Review, and Clear Boundaries.
- Converted learnings into titled cards with related project areas.

## Responsive Design Notes

- Mobile stacks all cards vertically with readable spacing.
- Tablet uses two-column layouts where appropriate.
- Desktop uses wider comparison/stat grids.
- The model comparison table remains horizontally scrollable only where needed.
- No important content is hidden behind accordions.

## Validation

Commands:

```powershell
cmd /c "set BUILD_PATH=build-validation&& npm.cmd run build"
rg "Problem|My Role|Dataset and Methodology|Model Comparison|Selected Model|Architecture|Explainability and Responsible AI|What I Learned" src/pages/Portfolio/SahitnaSafeDetails.jsx
rg "WDBC|Logistic Regression|98.83|98.44|0.9975|false negative|SHAP|FastAPI|Next.js|Joblib|CRISP-DM" src/pages/Portfolio/SahitnaSafeDetails.jsx
```

## Remaining Optional Improvements

- Add a compact confusion-matrix style visual if verified confusion-matrix counts are available.
- Add browser screenshots when the local browser automation surface is available.
