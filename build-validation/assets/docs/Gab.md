# Skills Positioning Audit

Audit-only review of the portfolio skill positioning, based on the real React source code, project data, project detail pages, resume data, and implementation reports.

## A. Sources Inspected

No source files were edited during this audit.

Reviewed source/code areas:

- `src/data/projects.js`
- `src/data/skills.js`
- `src/data/resume.js`
- `src/pages/Home.jsx`
- `src/pages/About.jsx`
- `src/components/About/ServicesSection.jsx`
- `src/components/About/ServiceCard.jsx`
- Portfolio detail pages:
  - `SmartClaimDetails.jsx`
  - `SahitnaSafeDetails.jsx`
  - `FirmaaDetails.jsx`
  - `SolarFlowDetails.jsx`
  - `OnboardifyDetails.jsx`
  - `ProLinkDetails.jsx`
- `PROJECT_RECAP.md`
- `SAHITNA_SAFE_PROJECT_IMPLEMENTATION_REPORT.md`
- `FIRMAA_PROJECT_IMPLEMENTATION_REPORT.md`
- Phase reports under `public/assets/docs`

## B. Real Project-Backed Skills

### AI / ML / Data Science

Strong evidence:

- `YOLOv8`, `OpenCV`, `PyTorch`: SmartClaim vehicle damage detection.
- `Python`, `scikit-learn`, `XGBoost`, `Logistic Regression`, `Random Forest`, `SVM`, `MLP`: Sahitna Safe model comparison.
- `SHAP`: Sahitna Safe explainability.
- `CRISP-DM`: Sahitna Safe methodology.
- `TDSP`: Firmaa methodology.
- Model evaluation: accuracy, recall/sensitivity, specificity, ROC-AUC, false negatives.
- Leakage-safe preprocessing: Sahitna Safe StandardScaler fitted only on training data.
- Class imbalance handling: Sahitna Safe.

Moderate evidence:

- `TensorFlow`: appears in Home/About/Resume and NVIDIA context, but less directly proven by a major current project page than YOLO/scikit-learn.
- `CNN`: supported conceptually by CV/mobile AI content, but not as strongly showcased as YOLOv8 or scikit-learn workflows.

### Agentic AI / LLM Systems

Strong evidence:

- `LangGraph`: Firmaa.
- LLM reasoning: Firmaa.
- Tool-assisted agent workflows: Firmaa.
- Validation layers, fallback rules, safety checks: Firmaa.
- Human-in-the-loop approvals: Firmaa and Sahitna responsible AI framing.
- Agentic irrigation decision orchestration: Firmaa.

This is now one of the strongest and most modern parts of the portfolio, but Home/About do not fully reflect it yet.

### Backend / APIs

Strong evidence:

- `FastAPI`: SmartClaim, Sahitna Safe, Firmaa.
- REST APIs / prediction APIs: SmartClaim and Sahitna Safe.
- `MongoDB`: Firmaa, project data, and About services.
- `MySQL`: Onboardify.
- `Symfony`: Onboardify.

Moderate or weaker evidence:

- `Node.js` / `NestJS`: visible in Home/About, but less supported by current project detail pages compared with FastAPI.
- `Spring Boot`: appears in Resume data, but no strong visible project evidence was found.
- `PostgreSQL`: appears in Resume data, but weak visible project evidence.

### Frontend / Web

Strong evidence:

- `React`: portfolio itself and Firmaa stack.
- `Next.js`: Firmaa and Sahitna Safe.
- `Tailwind CSS`: Sahitna Safe stack and portfolio implementation.
- Dashboard UI: Firmaa.
- `Three.js`: Firmaa 3D digital-twin farm view.
- 3D/digital twin product presentation: Firmaa.

### Mobile

Strong evidence:

- `Flutter`: SmartClaim, SolarFlow, Pro-Link, Firmaa mobile access.
- `Dart`: SolarFlow/Pro-Link detail pages.
- `FlutterFlow`: Pro-Link.
- `Firebase`: SolarFlow and Pro-Link.
- Offline mobile AI: Firmaa.

### DevOps / Tooling

Strong evidence:

- `Docker`: SmartClaim.
- `Git`: general/resume.
- `Joblib`: Sahitna Safe model persistence.
- `Makefile automation`: Sahitna Safe.
- `Vercel`: portfolio/project recap deployment target, but not a core project skill unless portfolio deployment is intentionally highlighted.

### Product / Methodology / Leadership

Strong evidence:

- Project Lead: Firmaa.
- Technical vision and product identity: Firmaa.
- UI/UX alignment and dashboard thinking: Firmaa.
- CRISP-DM: Sahitna Safe.
- TDSP: Firmaa.
- Agile/Scrum/Kanban/Scrumban: Resume/CV methodology support.
- Technical documentation/reporting: Sahitna Safe and Firmaa reports.

## C. Home Page Current Skill Representation

### Hero Positioning

- `Fedi Hmida - Flutter & AI Engineering`
- `Flutter & AI Engineer building intelligent mobile products`
- Focus text: Flutter, computer vision, backend systems.
- SmartClaim proof: Flutter, YOLOv8, FastAPI, Docker, 92.9% precision.
- Hero chips: `Flutter`, `YOLOv8`, `FastAPI`, `Docker`.

### Tabs

- Services
- Hard skills
- Soft skills
- Project methodologies

### Hard Skills

- Flutter
- YOLO
- TensorFlow
- React
- Next.js
- Node.js
- NestJS
- Git
- PyTorch
- OpenCV
- FastAPI
- Docker

### Services

- Cross-Platform Mobile Apps: Flutter, Node.js, Firebase, Real-time.
- AI & Computer Vision: YOLO, OpenCV, TensorFlow, Automation, MongoDB.
- Full-Stack Web Development: React, Next.js, Node.js, NestJS, MongoDB.
- Data Science & ML Solutions: Machine Learning, Python, Predictive Analytics, Data Mining.

### Methodologies

- Scrum
- Kanban
- Scrumban
- Agile

### Project Preview Tags

- Firmaa: LangGraph, Flutter, FastAPI, Next.js.
- Sahitna Safe: Python, FastAPI, Next.js.
- SmartClaim: Flutter, YOLOv8, FastAPI.
- SolarFlow: Flutter, IoT.
- Onboardify: JavaFX, Symfony.
- Pro-Link: Flutter, Networking.

## D. About Page Current Skill Representation

### Bio / Positioning

- Data Science & AI Engineering student.
- Production-ready applications.
- Cross-platform mobile development with Flutter.
- Computer vision with advanced YOLO.
- AI/ML frameworks: TensorFlow, PyTorch, OpenCV.
- Full-stack solutions: NextJS, NestJS, Symfony.
- Intelligent automation.

### Core Competencies

- Cross-Platform Mobile Development.
- AI & Computer Vision Integration.
- Data Science & Machine Learning.
- Full-Stack Web Development.
- IoT & Energy Management Systems.
- Agile Development & Team Collaboration.

### Services Section

- Cross-Platform Mobile Apps: Flutter, Node.js, Firebase, NestJS, MongoDB, Android Studio, REST API, BLOC/Cubit.
- AI & Computer Vision: PyTorch, OpenCV, TensorFlow, YOLOv8, RAG Systems, CNN, MongoDB.
- Full-Stack Web Development: React, Next.js, Tailwind CSS, Node.js, NestJS, Symfony, MongoDB.
- Data Science & ML Solutions: Pandas, Scikit-learn, Random Forest, XGBoost, MLP, Logistic Regression.

Missing from About:

- LangGraph.
- Agentic AI.
- FastAPI.
- Three.js.
- CRISP-DM.
- TDSP.
- SHAP.
- Joblib.
- Makefile automation.
- Human-in-the-loop AI.

## E. Comparison Table

| Skill / Methodology | Evidence From Projects | Home | About | Status | Recommendation |
|---|---|---:|---:|---|---|
| Flutter | SmartClaim, SolarFlow, Pro-Link, Firmaa | Yes | Yes | Strongly represented | Keep high priority |
| FastAPI | SmartClaim, Sahitna, Firmaa | Yes | No/weak | Underrepresented | Add clearly to About/backend services |
| YOLOv8 | SmartClaim | Yes | Yes | Strongly represented | Keep, rename YOLO to YOLOv8 where possible |
| OpenCV | SmartClaim | Yes | Yes | Strongly represented | Keep |
| PyTorch | SmartClaim CV pipeline | Yes | Yes | Represented | Keep but secondary to YOLO/OpenCV |
| TensorFlow | Listed, NVIDIA context, mobile AI context | Yes | Yes | Slightly overemphasized | Keep, but not above stronger project-backed tools |
| scikit-learn | Sahitna Safe | No hard skill | Yes services | Underrepresented | Add to Home hard skills or AI/ML category |
| XGBoost | Sahitna Safe, NVIDIA news | No | Yes | Underrepresented | Add to Home AI/ML skills |
| SHAP | Sahitna Safe | No | No | Missing | Add under Explainable AI |
| CRISP-DM | Sahitna Safe | No | No | Missing | Add under Data Science Methodology |
| TDSP | Firmaa | No | No | Missing | Add under Product/DS Methodology |
| LangGraph | Firmaa | Only project tag | No | Missing/underrepresented | Add Agentic AI category |
| LLM reasoning | Firmaa | No | No | Missing | Add under Agentic AI |
| Tool-calling / agents | Firmaa | No | No | Missing | Add under Agentic AI |
| Human-in-the-loop | Firmaa, Sahitna framing | No | No | Missing | Add as responsible AI/product skill |
| Next.js | Firmaa, Sahitna | Yes | Yes | Represented | Keep, make more visible in full-stack story |
| React | Portfolio/Firmaa | Yes | Yes | Represented | Keep |
| Tailwind CSS | Portfolio/Sahitna/About service | No hard skill | Yes services | Underrepresented | Add if frontend positioning matters |
| Three.js | Firmaa | No | No | Missing | Add under 3D/Interactive Dashboards |
| MongoDB | Firmaa, services | Service only | Yes services | Underrepresented | Add to backend/data systems |
| MySQL | Onboardify | Resume only | No/weak | Underrepresented but older | Keep secondary |
| Symfony | Onboardify | Project tag | Yes | Represented but older | Deprioritize behind FastAPI/Next.js |
| JavaFX | Onboardify | Project tag | No | Project-specific | Keep in project only |
| Firebase | SolarFlow, Pro-Link | Service only | Yes | Represented | Keep as mobile backend |
| Docker | SmartClaim | Yes | No/Resume | Represented on Home | Keep, but not central |
| Joblib | Sahitna | No | No | Missing | Mention only in Sahitna or ML tooling |
| Makefile | Sahitna | No | No | Missing | Optional tooling, not top skill |
| Node.js / NestJS | Home/About | Yes | Yes | Overrepresented | Deprioritize unless more project evidence is added |
| Spring Boot | Resume only | No | No | Weakly supported | Remove/deprioritize unless project exists |
| PostgreSQL | Resume only | No | No | Weakly supported | Remove/deprioritize unless project exists |
| RAG Systems | Resume/About | No | Yes | Weakly supported | Keep only if a visible RAG project/detail is added |

## F. Main Gaps And Weaknesses

### Missing But Project-Backed Skills

- LangGraph / Agentic AI: proven by Firmaa, absent from Home/About main skills.
- FastAPI: appears in three major projects, missing from About bio/services emphasis.
- CRISP-DM and TDSP: both proven by Sahitna/Firmaa, absent from Home/About methodologies.
- SHAP / Explainable AI: proven by Sahitna, absent from Home/About.
- Three.js / 3D Digital Twin: proven by Firmaa, absent from Home/About.
- Human-in-the-loop workflows: central in Firmaa/Sahitna, absent from skills positioning.

### Underrepresented Skills

- Next.js: present, but not framed as dashboard/full-stack AI platform work.
- scikit-learn/XGBoost/model evaluation: visible in About services, but missing from Home hard skills.
- MongoDB: present in services, but should be clearer in backend/data systems.
- Product leadership: Firmaa gives strong evidence, but Home/About still read mostly like individual developer/service lists.

### Overrepresented Or Weakly Supported

- Node.js/NestJS: currently emphasized more than FastAPI, but FastAPI has stronger project proof.
- KNN, Linear Regression, Decision Trees, K-Means: Home/About service copy mentions them, but current flagship evidence is more Logistic Regression, Random Forest, XGBoost, SVM, MLP.
- Spring Boot/PostgreSQL: visible in resume data, weakly supported by portfolio projects.
- RAG Systems: listed, but not strongly backed by a dedicated project page.
- TensorFlow: valid to keep, but should not outrank YOLOv8/scikit-learn/LangGraph in the current story.

### Naming / Positioning Problems

- Hero is still too SmartClaim-centric: `Flutter & AI Engineer building intelligent mobile products` undersells Firmaa and Sahitna.
- The portfolio now supports a broader identity: AI/ML + Agentic AI + Full-stack platforms + Flutter.
- `advanced YOLO` should be more concrete: `YOLOv8 computer vision`.
- `Full-Stack Web Development (Symfony/Next.js)` should shift toward `FastAPI + Next.js + MongoDB`, with Symfony as secondary.
- Internal category id `ia` is fine in code, but visible language should stay `AI / ML`.
- Sahitna Safe is categorized as `mobile` in `projects.js`, but the project evidence is web/ML, not mobile. Later correction recommended.

## G. Recommended Skill Architecture

### AI & Machine Learning

- Python
- scikit-learn
- XGBoost
- Logistic Regression
- Random Forest
- Model Evaluation
- Classification
- Class Imbalance Handling
- SHAP
- Explainable AI

### Computer Vision

- YOLOv8
- OpenCV
- PyTorch
- CNN
- Image preprocessing
- Object detection

### Agentic AI & LLM Workflows

- LangGraph
- LLM reasoning
- Tool-assisted agents
- Validation layers
- Fallback rules
- Human-in-the-loop workflows
- Explainable recommendations

### Backend & Data Systems

- FastAPI
- REST APIs
- MongoDB
- MySQL
- Firebase
- Joblib model persistence
- Docker

### Full-Stack Web Platforms

- React
- Next.js
- TypeScript
- Tailwind CSS
- Dashboard UI
- Three.js
- 3D digital twin interfaces

### Mobile Development

- Flutter
- Dart
- FlutterFlow
- Firebase
- Offline mobile AI
- REST API integration

### Methodologies & Product

- CRISP-DM
- TDSP
- Agile
- Scrum
- Kanban
- Project leadership
- Technical documentation
- Product identity
- Demo preparation

## H. Expert Rating

- Accuracy vs real projects: 7/10
- Recruiter clarity: 6.5/10
- Modern framework visibility: 7/10
- AI/ML positioning: 6.5/10
- Full-stack positioning: 6/10
- Mobile positioning: 9/10
- Leadership/product positioning: 5.5/10

Overall skill-positioning score: 6.8/10

Biggest mismatch: Home/About still present the profile mainly as Flutter + YOLO + SmartClaim, while the current portfolio now has stronger breadth: Firmaa agentic AI, Sahitna medical ML, FastAPI/Next.js, and methodologies.

Biggest missing opportunity: Agentic AI with LangGraph. Firmaa is a modern, recruiter-interesting project, but Home/About do not yet capitalize on it.

Highest-priority correction later: Update Home hero and About services to introduce `AI/ML & Agentic AI Engineer building Flutter and full-stack intelligent platforms`, then add LangGraph, FastAPI, CRISP-DM, TDSP, SHAP, and Three.js into the visible skill architecture.

