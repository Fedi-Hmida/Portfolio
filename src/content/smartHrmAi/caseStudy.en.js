// SmartHrmAiDetails.jsx - English. Extracted from the page; keys follow source order (Lnnn = original line).
// Same keys as caseStudy.fr.js (see src/content/contentParity.test.js).
const content = {
  s001: "REST endpoints", // L25
  s002: "102", // L25
  s003: "Across 14 controllers, over PostgreSQL with 32 Flyway migrations.", // L25
  s004: "Authorization gates", // L26
  s005: "104", // L26
  s006: "Enforcing a 4-role model with deliberate, non-linear exceptions.", // L26
  s007: "Automated tests", // L27
  s008: "2,072", // L27
  s009: "JUnit on the API, Vitest and Playwright on the client.", // L27
  s010: "Clean Architecture modules", // L28
  s011: "11", // L28
  s012: "Delivered by an 8-intern team across two months.", // L28
  s013: "July - August 2026", // L32
  s014: "BNS Engineering, Tunis", // L33
  s015: "Java 17 / Spring Boot", // L34
  s016: "React 19 / TypeScript", // L35
  s017: "OAuth2 / Keycloak", // L36
  s018: "Gestion des collaborateurs", // L41
  s019: "Employees & IAM", // L42
  s020: "Create, update, offboard and rehire-by-CIN, with role changes, account blocking, a per-employee identity audit trail and drift detection against Keycloak.", // L44
  s021: "Gestion des conges", // L47
  s022: "Leave", // L48
  s023: "Request, approve, reject and cancel, with working-day balance calculation, half-day units, carryover and per-type policy.", // L50
  s024: "Gestion du materiel", // L53
  s025: "Equipment", // L54
  s026: "Full assignment lifecycle with category, condition and status tracking across the inventory.", // L56
  s027: "Gestion des dossiers administratifs", // L59
  s028: "Documents", // L60
  s029: "Upload, download, delete and restore against MinIO object storage, with retention classes and sensitivity tiers.", // L62
  s030: "Tableau de bord RH", // L65
  s031: "Dashboard", // L66
  s032: "One role-adaptive aggregate: self for everyone, team for managers, organization for HR and IT admins - all computed server-side.", // L68
  s033: "Core / Domain", // L74
  s034: "32 entities and 22 enums carrying the business rules - leave accrual modes, retention classes, equipment condition, role precedence. No framework imports.", // L76
  s035: "Core / Application", // L79
  s036: "11 feature modules, each split into Commands and Queries, plus cross-cutting auditing and a single exception contract. Module names mirror the organisation's own French vocabulary so both poles discuss the same word.", // L81
  s037: "Host", // L84
  s038: "14 REST controllers, Spring Security configuration, and the Keycloak JWT converter. The only layer that knows HTTP exists.", // L86
  s039: "Identity delegated, never reimplemented", // L92
  s040: "OAuth2 / OpenID Connect against a Keycloak realm. The API is a pure resource server - it validates tokens and provisions users through the Admin API, but never stores a password.", // L94
  s041: "Roles that are not a straight line", // L97
  s042: "EMPLOYEE < MANAGER < HRADMIN < ITADMIN, with intentional asymmetries: ITADMIN is denied another employee's private info despite outranking HRADMIN elsewhere, and a manager sees a report's leave but never their documents. Each data tier carries its own rule instead of inheriting from rank.", // L99
  s043: "104 gates, and ownership checked in-body", // L102
  s044: "Role annotations handle the coarse cut; ownership and hierarchy rules run inside the use-case, because 'is this your own record' is not something an annotation can answer.", // L104
  s045: "Encryption at rest for the sensitive tier", // L107
  s046: "AES-256-GCM for salary and bank details. Profile photos are re-encoded server-side so no EXIF - and therefore no GPS from a phone camera - survives upload.", // L109
  s047: "Five-minute access tokens", // L112
  s048: "Short-lived by design, which makes refresh handling load-bearing infrastructure on the client rather than a polish item. Every non-2xx response uses one fixed error envelope.", // L114
  s049: "OCR document extraction - authorization contract", // L120
  s050: "Contract delivered", // L121
  s051: "I wrote the integration contract between the back-end and the AI pole for extracting data from CIN and passport documents. Its central decision: the AI service calls the REST API with its own service account and is never given direct MinIO credentials. The Documents module rests on one rule - PostgreSQL is the source of truth for permission, MinIO only stores bytes - and handing a second system bucket access would have created an unaudited path to the most sensitive data in the company.", // L123
  s052: "RAG conversational assistant", // L126
  s053: "Designed", // L127
  s054: "Specified a retrieval-augmented assistant over HR policy and the employee's own records, scoped so that retrieval inherits the same authorization rules as the REST API rather than bypassing them.", // L129
  s055: "Absence and turnover prediction", // L132
  s056: "Modelled predictive workstreams for absence and staff turnover on top of the attendance and leave history the platform already records.", // L135
  s057: "Tests as the contract", // L141
  s058: "2,072 automated tests across JUnit, Vitest and Playwright. Authorization rules in particular are proven structurally - one test exists purely to prove the dashboard performs no audited read.", // L143
  s059: "Migrations, never ad-hoc schema", // L146
  s060: "32 Flyway migrations applied on startup. Schema change is reviewable history, not a manual step someone forgets on another environment.", // L148
  s061: "Generated client types", // L151
  s062: "The React client generates its TypeScript types from the API's own OpenAPI document, so a contract change breaks the build instead of reaching production.", // L153
  s063: "Two poles, one vocabulary", // L156
  s064: "Feature slices, module names and terminology track the domain 1:1 across both repositories, which is what let an 8-intern team move without constant translation.", // L158
  s065: "The server is the only source of authorization truth. Every UI permission check is a convenience - hiding a button, explaining a 403 - never a substitute for the gate behind it. Drift between the two is a defect, not a UI choice.", // L163
  s066: "Some things are better left unbuilt than guessed. We deliberately shipped no absence-rate widget, because nobody could answer what the denominator should be, and a plausible percentage with an undocumented definition is worse than an empty space.", // L164
  s067: "Co-leading two poles is mostly interface design between people. The contracts that mattered most - the error envelope, the role matrix, the OCR service account - were the ones written down before anyone implemented against them.", // L165
  s068: "Back-end", // L169
  s069: "Java 17", // L169
  s070: "Spring Boot", // L169
  s071: "Spring Security", // L169
  s072: "Spring Data JPA", // L169
  s073: "Clean Architecture", // L169
  s074: "Data & storage", // L170
  s075: "PostgreSQL", // L170
  s076: "Flyway", // L170
  s077: "MinIO / S3", // L170
  s078: "Identity", // L171
  s079: "Keycloak", // L171
  s080: "OAuth2 / OIDC", // L171
  s081: "JWT", // L171
  s082: "RBAC", // L171
  s083: "Front-end", // L172
  s084: "React 19", // L172
  s085: "TypeScript", // L172
  s086: "Vite", // L172
  s087: "MUI / MUI X", // L172
  s088: "TanStack Query", // L172
  s089: "Zustand", // L172
  s090: "React Hook Form + Zod", // L172
  s091: "i18next", // L172
  s092: "Quality", // L173
  s093: "JUnit", // L173
  s094: "Vitest", // L173
  s095: "Playwright", // L173
  s096: "OpenAPI codegen", // L173
  s097: "Docker", // L173
  s098: "Home", // L220
  s099: "Portfolio", // L224
  s100: "SMART HRM AI", // L228
  s101: "Enterprise HR platform", // L234
  s102: "Back-End & Front-End Co-Lead", // L240
  s103: "An internal HR platform built by an 8-intern team at BNS Engineering, pairing a Java 17 / Spring Boot API with a React 19 / TypeScript client, OAuth2 / Keycloak security, and three AI workstreams.", // L245
  s104: "Back to Portfolio", // L268
  s105: "SMART HRM AI platform branding", // L282
  s106: "Platform walkthrough", // L335
  s107: "Demo Video", // L341
  s108: "A walkthrough of the SMART HRM AI platform: the role-adaptive dashboard, leave requests and approvals, documents, equipment and exit authorizations.", // L344
  s109: "SMART HRM AI internal HR platform demo video", // L356
  s110: "Your browser does not support the video tag.", // L358
  s111: "Context & Objective", // L367
  s112: "BNS Engineering ran its HR operations across spreadsheets and manual process. SMART HRM AI was the internal platform meant to replace that - built over two months by an 8-intern team split into a back-end pole and a front-end pole under an encadrant.", // L368
  s113: "The brief was operational rather than experimental: HR and IT staff had to be able to run real personnel work against the tool on day one - hiring, leave, documents, equipment - with the server as the single source of authorization truth. Five modules shipped, carrying the organisation's own French naming so the product and the codebase never drifted apart.", // L370
  s114: "My Role", // L383
  s115: "I co-led both poles - the Java 17 / Spring Boot API and the React 19 / TypeScript client - which in practice meant owning the contract between them.", // L384
  s116: "Designed and built the platform's security model end to end: the Keycloak integration, the role matrix, and the ownership rules that role annotations cannot express.", // L388
  s117: "Shaped the Clean Architecture module layout and kept the front-end feature slices aligned to it one-for-one.", // L389
  s118: "Owned the API contract the client generates its types from, so a breaking change surfaced at build time rather than in production.", // L390
  s119: "Led the three AI workstreams, including the integration contract between the back-end and the AI pole.", // L391
  s120: "Coordinated the work of an 8-intern team across two repositories.", // L392
  s121: "Modules Delivered", // L408
  s122: "Five operational modules, named in the organisation's own vocabulary.", // L409
  s123: "Architecture", // L430
  s124: "Three layers, with dependencies pointing inward. The domain knows nothing about Spring, and only one layer knows HTTP exists.", // L431
  s125: "Security Model", // L454
  s126: "The part of this project I would defend line by line. HR data is the most sensitive data a company holds about its own people, and the authorization model was treated as the product, not as plumbing.", // L455
  s127: "AI Integration", // L470
  s128: "Three AI workstreams sat under my ownership. One shipped as a delivered contract; the other two were specified and scoped but not implemented before the internship ended - stated here as designed rather than built.", // L471
  s129: "Engineering Practices", // L498
  s130: "What kept an 8-person team from stepping on each other.", // L499
  s131: "What I Took Away", // L511
  s132: "Stack", // L524
};

export default content;
