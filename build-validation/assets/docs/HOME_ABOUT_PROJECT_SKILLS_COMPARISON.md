# Home About Project Skills Comparison

## A. Sources Inspected

- `src/data/projects.js`
- `src/data/skills.js`
- `src/pages/Home.jsx`
- `src/pages/Portfolio/SmartClaimDetails.jsx`
- `src/pages/Portfolio/SahitnaSafeDetails.jsx`
- `src/pages/Portfolio/FirmaaDetails.jsx`
- `src/pages/Portfolio/SolarFlowDetails.jsx`
- `src/pages/Portfolio/OnboardifyDetails.jsx`
- `src/pages/Portfolio/ProLinkDetails.jsx`

All six requested project detail pages exist. This audit is based on source code and portfolio content only. No Home page code was edited.

## B. Project-Backed Skills By Project

### SmartClaim

- Main domain: AI-powered insurance claim assistant and vehicle damage detection.
- Skills: mobile claim reporting, computer vision integration, backend API integration, product demo storytelling, architecture explanation.
- Frameworks/tools: Flutter, FastAPI, Docker, MongoDB.
- Backend/data: FastAPI claim pipeline, MongoDB data handling, OCR/document data handling.
- AI/ML: YOLOv8, OpenCV, PyTorch, real-time damage detection, model precision reporting.
- Mobile/web: Flutter mobile app for claim capture and reporting.
- Methodology: internship delivery, usable product demo, AI UX explanation.
- Evidence from file: `SmartClaimDetails.jsx` lists Flutter app development, YOLOv8 integration, FastAPI backend, Docker containerization, OpenCV/PyTorch pipeline, OCR, MongoDB, and 92.9% precision.

### Sahitna Safe

- Main domain: academic medical ML decision-support prototype.
- Skills: machine-learning pipeline, evaluation strategy, technical reporting, responsible AI framing, deployment architecture.
- Frameworks/tools: Python, scikit-learn, XGBoost, FastAPI, Next.js, TypeScript, Tailwind CSS, SHAP, Joblib.
- Backend/data: FastAPI `/health`, `/predict`, `/batch`, Joblib persistence, WDBC dataset, StandardScaler pipeline.
- AI/ML: Logistic Regression, SVM, Random Forest, MLP, XGBoost, ROC-AUC, sensitivity, specificity, false negatives, class imbalance handling, explainability.
- Web: Next.js frontend architecture with TypeScript and Tailwind CSS.
- Methodology: CRISP-DM, clinical metric prioritization, leakage-safe preprocessing, human-in-the-loop limitations.
- Evidence from file: `SahitnaSafeDetails.jsx` lists the full stack, model comparison, CRISP-DM flow, WDBC data profile, SHAP, evaluation metrics, API endpoints, and responsible medical disclaimer.

### Firmaa

- Main domain: AI-powered smart farming platform.
- Skills: project leadership, agentic AI workflow design, full-stack architecture, mobile access, digital twin UX, safety-aware automation.
- Frameworks/tools: LangGraph, FastAPI, MongoDB, Next.js, Three.js, React, Flutter.
- Agentic AI: autonomous irrigation agent, LLM reasoning, tool calls, fallback rules, validation layers, safety checks, human approval.
- Backend/data: FastAPI backend, MongoDB data layer, IoT/sensor data, weather/crop/moisture context.
- Frontend/3D: Next.js dashboard, React, Three.js 3D digital-twin farm view.
- Mobile: Flutter mobile app, field access, offline AI paths.
- Methodology: TDSP, platform coherence, product/system design.
- Leadership/product: project lead, technical vision, AI agent direction.
- Evidence from file: `FirmaaDetails.jsx` lists project lead role, LangGraph workflow, human approval, validation/fallback rules, FastAPI, MongoDB, Next.js, Three.js, Flutter, IoT/sensor data, offline mobile AI, and TDSP.

### SolarFlow

- Main domain: solar energy monitoring mobile app.
- Skills: Flutter mobile dashboards, IoT-oriented flows, real-time data handling, role-based workflows.
- Frameworks/tools: Flutter, Dart, Firebase, IoT protocols.
- Backend/data: Firebase data handling for mobile app experience.
- Mobile/web: Flutter cross-platform mobile app.
- Methodology: user, maintenance, and admin workflow organization.
- Evidence from file: `SolarFlowDetails.jsx` lists Flutter, Dart, Firebase, IoT integration, real-time energy analytics, remote control, and role-based workflows.

### Onboardify

- Main domain: gamified HR onboarding platform.
- Skills: full-stack contribution, HR workflow modeling, enterprise/internal app thinking, gamified onboarding UX.
- Frameworks/tools: JavaFX, Symfony, PHP, MySQL, HTML, CSS, JavaScript.
- Backend/data: Symfony/PHP web side with MySQL.
- Desktop/web: JavaFX desktop app and Symfony web app.
- Methodology: academic team/project workflow, employee engagement flows.
- Evidence from file: `OnboardifyDetails.jsx` lists JavaFX desktop, Symfony web, PHP, MySQL, HTML/CSS/JavaScript, gamified onboarding, and HR workflow modeling.

### Pro-Link

- Main domain: professional networking mobile app.
- Skills: mobile app building, collaboration workflow, mobile-first UX, messaging/data handling.
- Frameworks/tools: Flutter, FlutterFlow, Dart, Firebase.
- Backend/data: Firebase realtime data handling.
- Mobile/web: Flutter/FlutterFlow mobile experience.
- Methodology: mobile-first professional networking workflow.
- Evidence from file: `ProLinkDetails.jsx` lists Flutter/FlutterFlow, Dart, Firebase, realtime data handling, messaging, and collaboration workflow.

## C. Current Home About Me Content

The Home page About section is a tabbed section in `src/pages/Home.jsx`. It imports `services`, `hardSkills`, `softSkills`, and `methodologies` from `src/data/skills.js`.

| Current Home About Item | Type | Where It Appears | Notes |
|---|---|---|---|
| About Me heading | Section heading | `Home.jsx` About tabs section | Present, but current content is tab-driven rather than a personal intro paragraph. |
| Services tab | Tab | `Home.jsx` tabs | Default active tab. |
| Hard skills tab | Tab | `Home.jsx` tabs | Pulls from `hardSkills`. |
| Soft skills tab | Tab | `Home.jsx` tabs | Pulls from `softSkills`. |
| Project methodologies tab | Tab | `Home.jsx` tabs | Pulls from `methodologies`. |
| Cross-Platform Mobile Apps | Service | `src/data/skills.js` | Mentions Flutter, Node.js, Firebase, real-time. Strong Flutter/Firebase evidence; Node.js evidence is weaker. |
| AI & Computer Vision | Service | `src/data/skills.js` | Mentions YOLO, OpenCV, TensorFlow, Automation, MongoDB. Strong YOLO/OpenCV/MongoDB evidence; TensorFlow evidence is weaker. |
| Full-Stack Web Development | Service | `src/data/skills.js` | Mentions React, Next.js, Node.js, NestJS, MongoDB, Symfony, JavaFX. Strong React/Next/Symfony/JavaFX/MongoDB evidence; Node/Nest evidence weaker in project pages inspected. |
| Data Science & ML Solutions | Service | `src/data/skills.js` | Mentions KNN, Linear Regression, Decision Trees, K-Means, Python, Predictive Analytics, Data Mining. Needs update because Sahitna proves scikit-learn, XGBoost, SHAP, model evaluation, CRISP-DM more strongly. |
| Flutter | Hard skill | `hardSkills` | Strongly supported by SmartClaim, Firmaa, SolarFlow, Pro-Link. |
| YOLO | Hard skill | `hardSkills` | Strongly supported by SmartClaim; should probably be renamed to `YOLOv8` or `YOLOv8 Computer Vision`. |
| TensorFlow | Hard skill | `hardSkills` | Weak support in inspected project pages. |
| React | Hard skill | `hardSkills` | Supported by Firmaa/portfolio UI, and Next.js evidence; not the strongest standalone project skill but reasonable. |
| Next.js | Hard skill | `hardSkills` | Strongly supported by Firmaa and Sahitna Safe. |
| Node.js | Hard skill | `hardSkills` | Weak direct project evidence from inspected pages. |
| NestJS | Hard skill | `hardSkills` | Weak direct project evidence from inspected pages. |
| Git | Hard skill | `hardSkills` | General tool skill, not project-specific. Keep but not a flagship card. |
| PyTorch | Hard skill | `hardSkills` | Supported by SmartClaim computer vision pipeline. |
| OpenCV | Hard skill | `hardSkills` | Supported by SmartClaim. |
| FastAPI | Hard skill | `hardSkills` | Strongly supported by SmartClaim, Sahitna Safe, Firmaa. |
| Docker | Hard skill | `hardSkills` | Supported by SmartClaim. |
| LangGraph | Hard skill | `hardSkills` | Strongly supported by Firmaa. |
| Scikit-Learn | Hard skill | `hardSkills` | Strongly supported by Sahitna Safe. |
| XGBoost | Hard skill | `hardSkills` | Supported by Sahitna Safe model comparison. |
| SHAP | Hard skill | `hardSkills` | Supported by Sahitna Safe explainability. |
| Three.js | Hard skill | `hardSkills` | Supported by Firmaa digital twin. |
| Tailwind CSS | Hard skill | `hardSkills` | Supported by Sahitna Safe and likely Firmaa/portfolio UI. |
| MongoDB | Hard skill | `hardSkills` | Supported by Firmaa and SmartClaim. |
| Communication | Soft skill | `softSkills` | Supported broadly by reporting/demo work. |
| Project Management | Soft skill | `softSkills` | Strongest evidence from Firmaa project lead role. |
| Team Collaboration | Soft skill | `softSkills` | Supported by team academic projects. |
| Analytical | Soft skill | `softSkills` | Strong evidence from Sahitna Safe and SmartClaim metrics. |
| Organization | Soft skill | `softSkills` | Supported by structured workflows and methodologies. |
| Creativity | Soft skill | `softSkills` | Supported broadly, but less directly measurable. |
| Scrum | Methodology | `methodologies` | Shown, but inspected project pages did not strongly prove Scrum ceremonies. |
| Kanban | Methodology | `methodologies` | Shown, but inspected project pages did not strongly prove Kanban use. |
| Scrumban | Methodology | `methodologies` | Shown, but inspected project pages did not strongly prove Scrumban use. |
| Agile | Methodology | `methodologies` | General support from project work, but weak explicit evidence. |
| CRISP-DM | Methodology | `methodologies` | Strongly supported by Sahitna Safe. |
| TDSP | Methodology | `methodologies` | Supported by Firmaa. |

## D. Project-By-Project Comparison

### SmartClaim vs Home About Me

| Project Skill / Tech | Shown In Home About? | Status | Recommendation |
|---|---:|---|---|
| Flutter | Yes | Keep | Keep as a flagship mobile skill. |
| YOLOv8 | Partial as `YOLO` | Rename | Rename or describe as `YOLOv8 Computer Vision` for precision. |
| FastAPI | Yes | Keep | Keep and connect it to model inference APIs. |
| Docker | Yes | Keep | Keep as delivery/deployment proof. |
| OpenCV | Yes | Keep | Keep under AI/computer vision. |
| PyTorch | Yes | Keep | Keep but tie to SmartClaim pipeline. |
| MongoDB | Yes | Keep | Keep as backend/data proof. |
| OCR | No | Add or mention lightly | Add only if you want deeper SmartClaim detail; not necessary for Home top level. |
| AI UX / claim workflow | Partial | Underrepresented | Add as product-facing phrasing in service description. |

#### Proposal For SmartClaim Representation

SmartClaim is already represented well, but Home should use the sharper term `YOLOv8` rather than generic `YOLO`. The AI service should emphasize `computer vision model inference with FastAPI` instead of broad automation.

### Sahitna Safe vs Home About Me

| Project Skill / Tech | Shown In Home About? | Status | Recommendation |
|---|---:|---|---|
| Python | Partial in service tags | Underrepresented | Add or elevate Python in ML category. |
| scikit-learn | Yes | Keep | Keep as strong ML evidence. |
| XGBoost | Yes | Keep | Keep as model comparison evidence. |
| SHAP | Yes | Keep | Keep and describe as explainable AI. |
| Explainable AI | Partial via SHAP | Add | Add explicit `Explainable AI` language. |
| CRISP-DM | Yes | Keep | Keep as strong methodology evidence. |
| Model Evaluation | No | Add | Add because metrics are central to Sahitna Safe. |
| Class Imbalance Handling | No | Add carefully | Add under ML methodology, not as a broad hard skill card. |
| FastAPI | Yes | Keep | Keep. |
| Next.js | Yes | Keep | Keep. |
| TypeScript | No | Add | Add if Home wants stronger full-stack/web signal. |
| Tailwind CSS | Yes | Keep | Keep. |
| Joblib | No | Optional | Add only if technical depth matters; not recruiter-top-level. |

#### Proposal For Sahitna Safe Representation

The current `Data Science & ML Solutions` service is too generic. Replace generic algorithm lists with project-backed terms: `scikit-learn`, `XGBoost`, `SHAP`, `model evaluation`, `CRISP-DM`, `FastAPI`, and responsible ML.

### Firmaa vs Home About Me

| Project Skill / Tech | Shown In Home About? | Status | Recommendation |
|---|---:|---|---|
| LangGraph | Yes | Keep and elevate | Strong evidence; deserves its own Agentic AI category. |
| Agentic AI | Partial | Add | Add explicit category/service wording. |
| LLM reasoning | No | Add | Add under Agentic AI if Home needs AI specialization. |
| Tool-assisted agents | No | Add | Supported by LangGraph workflow. |
| Human-in-the-loop workflows | No | Add | Strongly supported by Firmaa. |
| Validation layers | No | Add | Strong safety-aware agent evidence. |
| Fallback rules | No | Add | Strong safety-aware agent evidence. |
| FastAPI | Yes | Keep | Keep. |
| MongoDB | Yes | Keep | Keep. |
| Next.js | Yes | Keep | Keep. |
| React | Yes | Keep | Keep. |
| Three.js | Yes | Keep | Keep. |
| 3D digital twin | Partial via Three.js desc | Underrepresented | Add as phrase in service/category text. |
| Flutter | Yes | Keep | Keep. |
| Offline mobile AI | No | Add cautiously | Add if you want Firmaa to be a flagship advanced mobile/AI example. |
| TDSP | Yes | Keep | Keep. |
| Project leadership | Soft skill only | Underrepresented | Add leadership/product ownership phrasing. |

#### Proposal For Firmaa Representation

Firmaa is the strongest gap. Home lists LangGraph, Three.js, MongoDB, and FastAPI, but it does not explain the value: autonomous irrigation agent, tool calls, fallback rules, human approval, and 3D farm monitoring. Add a distinct `Agentic AI & LLM Workflows` service/category later.

### SolarFlow vs Home About Me

| Project Skill / Tech | Shown In Home About? | Status | Recommendation |
|---|---:|---|---|
| Flutter | Yes | Keep | Strong mobile proof. |
| Dart | No | Add optional | Add if mobile stack cards need completeness. |
| Firebase | Service tags only | Underrepresented | Add as hard skill or backend/data tag if desired. |
| IoT | Project cards only, not skills | Add | Add as mobile/IoT service tag. |
| Real-time energy analytics | Partial as real-time | Underrepresented | Tie real-time to SolarFlow rather than generic claim. |
| Role-based workflows | No | Add optional | Good product workflow evidence. |

#### Proposal For SolarFlow Representation

SolarFlow supports adding `Firebase`, `IoT Integration`, and `Mobile Dashboards`. It should strengthen the Mobile Apps service, not create a new huge category.

### Onboardify vs Home About Me

| Project Skill / Tech | Shown In Home About? | Status | Recommendation |
|---|---:|---|---|
| JavaFX | Service text only | Add optional | Add only if you want legacy/academic full-stack breadth visible. |
| Symfony | Service text only | Add optional | Add if backend breadth matters. |
| PHP | No | Add optional | Lower priority unless targeting PHP/Symfony roles. |
| MySQL | No | Add optional | Useful backend/data evidence. |
| HTML/CSS/JavaScript | No/partial | Deprioritize | Too basic for Home unless included in full-stack basics. |
| HR workflow modeling | No | Add optional | Better as product/process evidence than hard skill. |
| Gamified onboarding | No | Add optional | Good project storytelling, not core skill. |

#### Proposal For Onboardify Representation

Onboardify proves breadth, but it should not dominate Home. Use it as support for `Full-Stack Web Development` and `workflow modeling`, not as top-tier skill cards unless targeting Symfony/PHP/enterprise roles.

### Pro-Link vs Home About Me

| Project Skill / Tech | Shown In Home About? | Status | Recommendation |
|---|---:|---|---|
| Flutter | Yes | Keep | Strong mobile continuity. |
| FlutterFlow | No | Add optional | Add only if no-code/low-code mobile delivery matters. |
| Dart | No | Add optional | Same as SolarFlow. |
| Firebase | Service tags only | Underrepresented | Add as hard skill or stronger service tag. |
| Realtime data handling | Partial | Keep/clarify | Current Mobile service mentions real-time; connect it to Firebase-backed apps. |
| Messaging/collaboration workflow | No | Add optional | Better as product workflow evidence. |

#### Proposal For Pro-Link Representation

Pro-Link reinforces Flutter + Firebase. It is best used to support mobile product credibility rather than introducing many new Home skills.

## E. Skill-By-Skill Comparison Table

| Skill / Technology | Project evidence | Currently shown in Home About? | Strength of evidence | Current status | Proposed Home About update |
|---|---|---:|---|---|---|
| Flutter | SmartClaim, Firmaa, SolarFlow, Pro-Link | Yes | Strong | Keep | Keep as flagship mobile skill. |
| Dart | SolarFlow, Pro-Link | No | Medium | Add | Add if mobile hard skills need completeness. |
| FlutterFlow | Pro-Link | No | Medium | Add optional | Add only if useful for recruiter target. |
| YOLOv8 | SmartClaim | Partial as YOLO | Strong | Rename | Rename `YOLO` to `YOLOv8`. |
| OpenCV | SmartClaim | Yes | Strong | Keep | Keep under AI/computer vision. |
| PyTorch | SmartClaim | Yes | Medium | Keep | Keep but tie to CV pipeline. |
| OCR | SmartClaim | No | Medium | Add optional | Mention under SmartClaim detail/service only. |
| Python | Sahitna Safe | Service tag only | Strong | Underrepresented | Add to hard skills or ML service. |
| scikit-learn | Sahitna Safe | Yes | Strong | Keep | Keep. |
| XGBoost | Sahitna Safe | Yes | Strong | Keep | Keep. |
| SHAP | Sahitna Safe | Yes | Strong | Keep | Keep and label as Explainable AI. |
| Explainable AI | Sahitna Safe | Partial | Strong | Add | Add explicit phrase in ML category. |
| CRISP-DM | Sahitna Safe | Yes | Strong | Keep | Keep. |
| TDSP | Firmaa | Yes | Medium | Keep | Keep, but tie to Firmaa. |
| Model Evaluation | Sahitna Safe | No | Strong | Add | Add as ML methodology/skill. |
| Class Imbalance Handling | Sahitna Safe | No | Medium | Add | Add under ML methodology, not a top card. |
| FastAPI | SmartClaim, Sahitna Safe, Firmaa | Yes | Strong | Keep | Keep and emphasize API/model inference. |
| REST APIs | Sahitna Safe endpoints, FastAPI pages | Partial | Strong | Add | Add as backend skill label. |
| MongoDB | SmartClaim, Firmaa | Yes | Strong | Keep | Keep. |
| Firebase | SolarFlow, Pro-Link | Service tags only | Strong | Underrepresented | Add as hard skill or backend/mobile tag. |
| MySQL | Onboardify | No | Medium | Add optional | Add if backend database breadth matters. |
| Symfony | Onboardify | Service text only | Medium | Underrepresented | Add optional. |
| PHP | Onboardify | No | Medium | Add optional | Add only for backend breadth. |
| Joblib | Sahitna Safe | No | Medium | Deprioritize | Keep in case study rather than Home. |
| React | Firmaa, portfolio UI | Yes | Medium | Keep | Keep. |
| Next.js | Firmaa, Sahitna Safe | Yes | Strong | Keep | Keep. |
| TypeScript | Sahitna Safe | No | Medium | Add | Add to web/full-stack skills. |
| Tailwind CSS | Sahitna Safe, Home UI style | Yes | Strong | Keep | Keep. |
| Three.js | Firmaa | Yes | Strong | Keep | Keep; mention digital twin. |
| Dashboard UI | Firmaa, SolarFlow, Sahitna Safe | Partial | Strong | Add | Add to full-stack/product UI wording. |
| 3D digital twin | Firmaa | Partial via Three.js desc | Strong | Underrepresented | Add explicit phrase. |
| LangGraph | Firmaa | Yes | Strong | Keep/elevate | Create Agentic AI grouping. |
| Agentic AI | Firmaa | Partial | Strong | Add | Add service/category. |
| LLM reasoning | Firmaa | No | Medium | Add | Add under Agentic AI if not overclaiming. |
| Tool-assisted agents | Firmaa | No | Medium | Add | Add under Agentic AI. |
| Human-in-the-loop workflows | Firmaa, Sahitna Safe limitations | No | Strong | Add | Add as responsible AI/workflow skill. |
| Validation layers | Firmaa | No | Strong | Add | Add under agent reliability. |
| Fallback rules | Firmaa | No | Strong | Add | Add under agent reliability. |
| IoT Integration | Firmaa, SolarFlow | Project cards only | Strong | Add | Add to mobile/full-stack service tags. |
| Offline mobile AI | Firmaa | No | Medium | Add optional | Add if supported visually in case study. |
| Docker | SmartClaim | Yes | Medium | Keep | Keep as delivery skill. |
| Node.js | Services and hard skills only | Yes | Weak | Deprioritize | Keep only if backed elsewhere; lower emphasis. |
| NestJS | Services and hard skills only | Yes | Weak | Deprioritize | Lower emphasis unless a project page proves it. |
| TensorFlow | Services and hard skills only | Yes | Weak | Deprioritize | Replace or reduce unless real project evidence exists. |
| KNN / Linear Regression / Decision Trees / K-Means | Service description only | Service description | Weak in inspected pages | Rename | Replace generic list with Sahitna-backed model evaluation language. |
| Project leadership | Firmaa | Soft skill only | Strong | Underrepresented | Add product/leadership phrasing. |
| Technical vision | Firmaa | Partial | Strong | Add | Add in services/about copy later. |
| Product identity | Firmaa and portfolio case studies | No | Medium | Add optional | Add if personal brand should emphasize product thinking. |
| Agile | Methodologies | Yes | Weak/Medium | Keep lightly | Keep but avoid making it a flagship proof point. |
| Scrum | Methodologies | Yes | Weak | Deprioritize | Keep only if backed elsewhere. |
| Kanban | Methodologies | Yes | Weak | Deprioritize | Keep only if backed elsewhere. |
| Scrumban | Methodologies | Yes | Weak | Deprioritize | Consider removing later unless evidence exists. |
| Demo preparation | SmartClaim, case study videos | No | Medium | Add optional | Add under soft/product skills if useful. |
| Technical documentation | Sahitna Safe, SmartClaim | No | Strong | Add | Add to soft/product skills. |

## F. Missing Skills

- Agentic AI
- LLM reasoning
- Tool-assisted agents
- Human-in-the-loop workflows
- Validation layers
- Fallback rules
- REST APIs
- Firebase as a hard skill
- IoT Integration
- TypeScript
- Model Evaluation
- Explainable AI as explicit wording
- Class Imbalance Handling
- Dashboard UI
- 3D digital twin as explicit wording
- Technical documentation
- Project leadership / technical vision

## G. Underrepresented Skills

- LangGraph is present but not elevated enough for Firmaa.
- FastAPI is present but should be framed as API/model inference delivery.
- MongoDB is present but not tied to real platforms.
- Firebase is only in service tags despite SolarFlow and Pro-Link.
- Python appears only in service tags despite Sahitna Safe.
- Next.js is present, but TypeScript/Tailwind/dashboard platform evidence is less connected.
- CRISP-DM is present but should be tied directly to Sahitna Safe.
- TDSP is present but should be tied directly to Firmaa.
- Project leadership is hidden inside soft skills rather than linked to Firmaa.

## H. Overrepresented / Weakly Supported Skills

- TensorFlow: shown in hard skills and AI service, but inspected project pages strongly support PyTorch/OpenCV/YOLOv8 and scikit-learn/XGBoost/SHAP instead.
- Node.js: shown in hard skills and services, but project detail pages inspected emphasize FastAPI, Firebase, Symfony/PHP, and MongoDB more clearly.
- NestJS: shown in hard skills and services, but not clearly supported by inspected project pages.
- KNN / Linear Regression / Decision Trees / K-Means: service description is generic and less aligned with Sahitna Safe evidence than scikit-learn, XGBoost, SHAP, ROC-AUC, sensitivity, and CRISP-DM.
- Scrum / Kanban / Scrumban: shown in methodologies, but explicit project evidence is weaker than CRISP-DM and TDSP.

## I. Individual Update Proposals

### Proposal 1 - Add Agentic AI Category

#### Why

Firmaa strongly proves LangGraph, agentic irrigation workflows, LLM reasoning, tool calls, validation layers, fallback rules, and human approval.

#### What To Add

- Agentic AI
- LangGraph workflows
- LLM reasoning
- Tool-assisted agents
- Human-in-the-loop approvals
- Validation layers
- Fallback rules

#### Where To Add

Home About Me section, preferably as a new service card or a distinct hard-skill grouping.

#### Priority

High.

#### Risk

Low, because Firmaa directly supports it.

### Proposal 2 - Strengthen FastAPI + Backend Positioning

#### Why

SmartClaim, Sahitna Safe, and Firmaa all show FastAPI as part of real systems.

#### What To Add

- FastAPI model inference APIs
- REST APIs
- Backend orchestration
- MongoDB data layer
- API endpoints such as prediction/health workflows

#### Where To Add

Full-Stack Web Development service and hard skills descriptions.

#### Priority

High.

#### Risk

Low.

### Proposal 3 - Reframe Data Science & ML Solutions

#### Why

Sahitna Safe gives stronger recruiter evidence than the current generic ML wording.

#### What To Add

- scikit-learn
- XGBoost
- SHAP
- Explainable AI
- Model evaluation
- ROC-AUC / sensitivity / specificity awareness
- CRISP-DM
- Class imbalance handling

#### Where To Add

Data Science & ML Solutions service and methodology tab.

#### Priority

High.

#### Risk

Low.

### Proposal 4 - Rename YOLO To YOLOv8 Computer Vision

#### Why

SmartClaim specifically uses YOLOv8 and reports 92.9% precision.

#### What To Add

- `YOLOv8`
- `Computer Vision`
- `OpenCV`
- `PyTorch`

#### Where To Add

Hard skills card title/description and AI & Computer Vision service.

#### Priority

High.

#### Risk

Low.

### Proposal 5 - Add Firebase + IoT Mobile Evidence

#### Why

SolarFlow and Pro-Link both support Firebase, and SolarFlow supports IoT-oriented flows.

#### What To Add

- Firebase
- IoT Integration
- Real-time mobile dashboards
- Role-based workflows

#### Where To Add

Cross-Platform Mobile Apps service and hard skills.

#### Priority

Medium.

#### Risk

Low.

### Proposal 6 - Add Full-Stack Dashboard Platform Positioning

#### Why

Firmaa, Sahitna Safe, and SolarFlow all show dashboard/platform workflows.

#### What To Add

- Dashboard UI
- Next.js
- TypeScript
- Tailwind CSS
- Three.js digital twin

#### Where To Add

Full-Stack Web Development service and hard skills.

#### Priority

Medium.

#### Risk

Low.

### Proposal 7 - Add Technical Documentation And Demo Storytelling

#### Why

Sahitna Safe and SmartClaim both explicitly mention technical reporting, demo preparation, architecture explanation, and clarity for non-technical users.

#### What To Add

- Technical documentation
- Demo preparation
- Architecture storytelling
- Responsible AI communication

#### Where To Add

Soft skills or a product/leadership subsection.

#### Priority

Medium.

#### Risk

Low.

### Proposal 8 - Deprioritize Weakly Proven Backend Skills

#### Why

Node.js and NestJS appear in Home, but inspected project pages do not prove them as strongly as FastAPI, Firebase, Symfony, PHP, MySQL, and MongoDB.

#### What To Add

No addition; reduce emphasis later.

#### Where To Add

Hard skills and Full-Stack Web Development service.

#### Priority

Medium.

#### Risk

Medium, because removing them could hide experience if it exists outside inspected project pages.

### Proposal 9 - Rebalance Methodologies

#### Why

CRISP-DM and TDSP are project-backed; Scrum, Kanban, Scrumban are less explicitly tied to project pages.

#### What To Add

- Keep CRISP-DM
- Keep TDSP
- Add model evaluation lifecycle
- Add responsible AI review

#### Where To Add

Project methodologies tab.

#### Priority

Medium.

#### Risk

Low.

## J. Keep As-Is

- Flutter
- FastAPI
- MongoDB
- Next.js
- React
- Tailwind CSS
- Three.js
- LangGraph
- scikit-learn
- XGBoost
- SHAP
- OpenCV
- PyTorch
- Docker
- CRISP-DM
- TDSP
- Communication
- Team Collaboration
- Analytical
- Project Management

## K. Do Not Update Yet

| Skill | Why It Should Wait | Evidence Needed |
|---|---|---|
| TensorFlow | Weak in inspected project pages. | A project detail page showing TensorFlow model work. |
| NestJS | Weak in inspected project pages. | A backend project page or source evidence using NestJS. |
| Node.js | Present in Home, but not strongly backed by inspected project detail pages. | A project page or data file tying Node.js to a real backend. |
| Scrumban | Methodology shown, but project evidence is weak. | Project/process evidence describing Scrumban use. |
| Scrum | Common methodology, but not directly proven by inspected pages. | Sprint/team process evidence. |
| Kanban | Common methodology, but not directly proven by inspected pages. | Board/workflow evidence. |
| FlutterFlow | Pro-Link supports it, but it may weaken advanced-code positioning if overemphasized. | Decide whether recruiter target values FlutterFlow. |
| Joblib | Supported by Sahitna Safe, but too implementation-specific for Home. | Keep in project page unless targeting ML engineering depth. |
| PHP | Supported by Onboardify, but not central to current positioning. | Add only if targeting PHP/Symfony roles. |

## L. Recommended Future Implementation Plan

1. Add one new Home About service/category: `Agentic AI & LLM Workflows`.
2. Rename `YOLO` to `YOLOv8` and strengthen the SmartClaim computer-vision wording.
3. Rewrite `Data Science & ML Solutions` around Sahitna Safe evidence: scikit-learn, XGBoost, SHAP, CRISP-DM, model evaluation, and responsible AI.
4. Strengthen backend positioning around FastAPI, REST APIs, MongoDB, Firebase, and model inference.
5. Add Firebase and IoT under mobile/full-stack skills, supported by SolarFlow and Pro-Link.
6. Add TypeScript and Dashboard UI if Home wants to emphasize full-stack dashboard products.
7. Keep Flutter prominent, but balance it with AI/full-stack/agentic evidence so the portfolio does not read as mobile-only.
8. Deprioritize or verify TensorFlow, Node.js, NestJS, Scrum, Kanban, and Scrumban before making them flagship items.
