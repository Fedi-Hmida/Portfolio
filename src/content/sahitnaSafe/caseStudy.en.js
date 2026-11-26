// SahitnaSafeDetails.jsx - English. Extracted from the page; keys follow source order (Lnnn = original line).
// Same keys as caseStudy.fr.js (see src/content/contentParity.test.js).
const content = {
  s001: "Accuracy", // L31
  s002: "98.83%", // L31
  s003: "Selected Logistic Regression model", // L31
  s004: "Malignant recall", // L32
  s005: "98.44%", // L32
  s006: "Sensitivity prioritized for safer screening support", // L32
  s007: "ROC-AUC", // L33
  s008: "0.9975", // L33
  s009: "Near-perfect separation on the reported test split", // L33
  s010: "False negatives", // L34
  s011: "1", // L34
  s012: "One malignant case missed on the test set", // L34
  s013: "Logistic Regression", // L38 PINNED: also a code literal, keep identical in fr
  s014: "99.07%", // L38
  s015: "Random Forest", // L39
  s016: "98.25%", // L39
  s017: "95.31%", // L39
  s018: "100%", // L39
  s019: "0.9972", // L39
  s020: "XGBoost", // L40
  s021: "97.66%", // L40
  s022: "96.88%", // L40
  s023: "98.13%", // L40
  s024: "0.9948", // L40
  s025: "SVM", // L41
  s026: "97.08%", // L41
  s027: "0.9932", // L41
  s028: "MLP", // L42
  s029: "96.49%", // L42
  s030: "93.75%", // L42
  s031: "0.9889", // L42
  s032: "Business Understanding", // L46
  s033: "Data Understanding", // L47
  s034: "Data Preparation", // L48
  s035: "Modeling", // L49
  s036: "Evaluation", // L50
  s037: "Deployment", // L51
  s038: "CRISP-DM Pipeline", // L56
  s039: "Methodology", // L57
  s040: "Developed the CRISP-DM pipeline.", // L58
  s041: "Covered problem framing, data understanding, preparation, modeling, evaluation, and deployment reporting.", // L59
  s042: "Model Benchmarking", // L63
  s043: "ML evaluation", // L64
  s044: "Compared Logistic Regression, SVM, Random Forest, MLP, and XGBoost.", // L65
  s045: "Built a clear model-selection story instead of relying on a single headline score.", // L66
  s046: "Leakage-Safe Preprocessing", // L70
  s047: "Data discipline", // L71
  s048: "Used StandardScaler fitted only on training data.", // L72
  s049: "Protected evaluation credibility and avoided preprocessing leakage.", // L73
  s050: "Clinical Metric Focus", // L77
  s051: "Risk framing", // L78
  s052: "Focused evaluation on sensitivity, false negatives, specificity, and ROC-AUC.", // L79
  s053: "Prioritized the error types that matter most for a medical decision-support prototype.", // L80
  s054: "API Integration Planning", // L84
  s055: "FastAPI", // L85
  s056: "Planned FastAPI integration for /health, /predict, and /batch endpoints.", // L86
  s057: "Connected saved ML artifacts to a reviewable prediction API path.", // L87
  s058: "Frontend and Reporting", // L91
  s059: "Next.js / docs", // L92
  s060: "Designed the Next.js frontend architecture and documentation.", // L93
  s061: "Made the ML prototype easier to review without presenting it as a clinical product.", // L94
  s062: "Next.js frontend", // L102
  s063: "Interface", // L103
  s064: "A TypeScript and Tailwind CSS web interface for feature entry, result review, and risk communication.", // L104
  s065: "FastAPI backend", // L108
  s066: "API", // L109
  s067: "Prediction API layer exposing health, single prediction, and batch prediction endpoints.", // L110
  s068: "Joblib persistence", // L114
  s069: "Artifacts", // L115
  s070: "Saved artifacts for the best model, scaler, label encoder, and metadata.", // L116
  s071: "Samples", // L121
  s072: "569", // L121
  s073: "Total WDBC records", // L121
  s074: "Features", // L122
  s075: "30", // L122
  s076: "Numerical diagnostic features", // L122
  s077: "Benign", // L123
  s078: "357", // L123
  s079: "Benign cases", // L123
  s080: "Malignant", // L124
  s081: "212", // L124
  s082: "Malignant cases", // L124
  s083: "Stratified 70/30 train-test split", // L128
  s084: "StandardScaler fitted only on training data", // L129
  s085: "Class imbalance handled with weighting", // L130
  s086: "CRISP-DM process from business understanding to deployment", // L131
  s087: "Sensitivity", // L135
  s088: "Highest malignant recall in the reported comparison", // L135
  s089: "Only one malignant case missed on the test split", // L136
  s090: "Specificity", // L137
  s091: "Strong benign/malignant separation", // L137
  s092: "Transparency", // L143
  s093: "SHAP was included for prediction transparency, and the selected model was chosen partly for interpretability.", // L145
  s094: "SHAP", // L146
  s095: "Interpretable model choice", // L146
  s096: "Reviewable prediction behavior", // L146
  s097: "Human Review", // L149
  s098: "The project is framed around human-in-the-loop review instead of automated medical decisions.", // L151
  s099: "Human-in-the-loop review", // L152
  s100: "Clinical safety metrics", // L152
  s101: "False-negative awareness", // L152
  s102: "Clear Boundaries", // L155
  s103: "The prototype avoids unsupported clinical-readiness claims and states its limitations clearly.", // L157
  s104: "Academic prototype", // L158
  s105: "Not certified diagnosis", // L158
  s106: "Regulatory validation required", // L158
  s107: "The WDBC dataset is old and was collected from 1993 to 1995.", // L163
  s108: "The work uses a single benchmark dataset and no external clinical validation.", // L164
  s109: "The prototype is not a certified medical device or production diagnosis system.", // L165
  s110: "Real medical use would require human-in-the-loop review and regulatory validation.", // L166
  s111: "Risk-First ML", // L171
  s112: "Clinical framing", // L172
  s113: "CRISP-DM keeps medical ML work tied to the real decision risk.", // L173
  s114: "Trustworthy Evaluation", // L176
  s115: "Preprocessing", // L177
  s116: "Leakage-safe preprocessing is essential for trustworthy evaluation.", // L178
  s117: "Metric Prioritization", // L181
  s118: "Model selection", // L182
  s119: "Clinical metric prioritization can matter more than headline accuracy.", // L183
  s120: "Explainable AI", // L186
  s121: "Reviewability", // L187
  s122: "Explainable AI and interpretability improve reviewability.", // L188
  s123: "Prototype Delivery", // L191
  s124: "FastAPI / Next.js", // L192
  s125: "FastAPI and Next.js are a practical path from model artifacts to a usable prototype.", // L193
  s126: "Python", // L198
  s127: "scikit-learn", // L199
  s128: "Next.js", // L202
  s129: "TypeScript", // L203
  s130: "Tailwind CSS", // L204
  s131: "Joblib", // L206
  s132: "Makefile", // L207
  s133: "Home", // L229
  s134: "Portfolio", // L231
  s135: "Sahitna Safe", // L233
  s136: "Medical ML platform", // L239
  s137: "Breast Cancer Detection ML Platform", // L244
  s138: "A CRISP-DM machine-learning decision-support prototype that classifies breast tumors as benign or malignant using the WDBC dataset, model comparison, FastAPI, and Next.js.", // L246
  s139: "This project is an academic machine-learning decision-support prototype and is not a certified medical diagnosis system.", // L249
  s140: "September - December 2025", // L254
  s141: "CRISP-DM", // L254
  s142: "WDBC dataset", // L254
  s143: "FastAPI + Next.js", // L254
  s144: "View GitHub repository", // L263
  s145: "Back to Portfolio", // L268
  s146: "Sahitna Safe project logo", // L280
  s147: "Platform walkthrough", // L309
  s148: "Demo Video", // L312
  s149: "A walkthrough of the Sahitna Safe breast cancer detection ML platform and workflow.", // L315
  s150: "Sahitna Safe breast cancer detection machine-learning platform demo video", // L325
  s151: "Your browser does not support the video tag.", // L327
  s152: "Problem", // L340
  s153: "Early breast cancer detection matters because the cost of classification errors is not symmetric. In this project, false negatives were treated as the most dangerous error, so malignant recall and sensitivity were prioritized alongside accuracy, specificity, and ROC-AUC.", // L341
  s154: "Most dangerous error", // L346
  s155: "Primary sensitivity focus", // L347
  s156: "Balanced evaluation", // L348
  s157: "Accuracy, specificity, ROC-AUC", // L348
  s158: "My Role", // L359
  s159: "This was a team academic project with Fedi Hmida, Asma Raddaoui, Ghalia Abdelkebir, Natej Ghodbane, and Khalil Youssef. My contribution focused on the ML pipeline, evaluation story, deployment architecture, and technical reporting without presenting the prototype as a clinical product.", // L360
  s160: "Dataset and Methodology", // L379
  s161: "Classification task", // L391
  s162: "Binary benign/malignant classification using the Wisconsin Diagnostic Breast Cancer dataset.", // L392
  s163: "Preparation discipline", // L397
  s164: "Model Comparison", // L411
  s165: "The evaluation compared five models and made the selected model decision visible through clinically relevant metrics rather than accuracy alone.", // L412
  s166: "| ROC-AUC", // L421
  s167: "Model", // L428
  s168: "Selected Model", // L441
  s169: "Logistic Regression was selected because it delivered the strongest clinical metric balance in the academic evaluation: highest sensitivity, only one false negative, 98.83% accuracy, 99.07% specificity, and 0.9975 ROC-AUC. Its interpretability and fast inference also made it more suitable for a responsible decision-support prototype.", // L442
  s170: "Architecture", // L457
  s171: "The prototype architecture connects feature entry, prediction APIs, and persisted ML artifacts into one reviewable decision-support workflow.", // L458
  s172: "0", // L467
  s173: "Endpoints and artifacts", // L478
  s174: "best model", // L480
  s175: "scaler", // L480
  s176: "label encoder", // L480
  s177: "metadata", // L480
  s178: "Explainability and Responsible AI", // L486
  s179: "SHAP was included for prediction transparency, and the selected model was chosen partly for interpretability. The project is framed around human-in-the-loop review, clinical safety metrics, and clear limitations rather than unsupported claims of clinical readiness.", // L487
  s180: "What I Learned", // L513
  s181: "Project Info", // L530
  s182: "Role", // L532
  s183: "ML Engineer / Full-Stack AI Developer", // L532
  s184: "Timeline", // L533
  s185: "Category", // L534
  s186: "AI / ML, Web App, Medical ML platform", // L534
  s187: "Dataset", // L535
  s188: "Wisconsin Diagnostic Breast Cancer Dataset", // L535
  s189: "Main Stack", // L538
  s190: "CRISP-DM Flow", // L539
  s191: "Limitations", // L540
  s192: "Explore the project", // L546
  s193: "Review the source repository, return to the project list, or get in touch.", // L546
  s194: "GitHub", // L548
  s195: "Contact Me", // L550
};

export default content;
