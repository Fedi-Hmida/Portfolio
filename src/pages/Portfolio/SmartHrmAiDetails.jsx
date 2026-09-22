import { motion } from "framer-motion";
import {
  FaArrowLeft,
  FaBrain,
  FaBuilding,
  FaCubes,
  FaFlask,
  FaLayerGroup,
  FaPenFancy,
  FaPlay,
  FaShieldAlt,
  FaUsers,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import smartHrmAiVisual from "../../assets/images/Portfolio/SmartHrmAi/smart-hrm-ai-cover.jpg";
import smartHrmAiDemoVideo from "../../assets/videos/SmartHrmAi/smart-hrm-ai-demo.mp4";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import EnglishOnlyNotice from "../../components/EnglishOnlyNotice";
import ParticlesBackground from "../../components/ParticlesBackground";

const ACCENT = "#1E8AF0";

const metricCards = [
  { label: "REST endpoints", value: "102", detail: "Across 14 controllers, over PostgreSQL with 32 Flyway migrations." },
  { label: "Authorization gates", value: "104", detail: "Enforcing a 4-role model with deliberate, non-linear exceptions." },
  { label: "Automated tests", value: "2,072", detail: "JUnit on the API, Vitest and Playwright on the client." },
  { label: "Clean Architecture modules", value: "11", detail: "Delivered by an 8-intern team across two months." },
];

const heroChips = [
  "July - August 2026",
  "BNS Engineering, Tunis",
  "Java 17 / Spring Boot",
  "React 19 / TypeScript",
  "OAuth2 / Keycloak",
];

const modules = [
  {
    fr: "Gestion des collaborateurs",
    en: "Employees & IAM",
    detail:
      "Create, update, offboard and rehire-by-CIN, with role changes, account blocking, a per-employee identity audit trail and drift detection against Keycloak.",
  },
  {
    fr: "Gestion des conges",
    en: "Leave",
    detail:
      "Request, approve, reject and cancel, with working-day balance calculation, half-day units, carryover and per-type policy.",
  },
  {
    fr: "Gestion du materiel",
    en: "Equipment",
    detail:
      "Full assignment lifecycle with category, condition and status tracking across the inventory.",
  },
  {
    fr: "Gestion des dossiers administratifs",
    en: "Documents",
    detail:
      "Upload, download, delete and restore against MinIO object storage, with retention classes and sensitivity tiers.",
  },
  {
    fr: "Tableau de bord RH",
    en: "Dashboard",
    detail:
      "One role-adaptive aggregate: self for everyone, team for managers, organization for HR and IT admins - all computed server-side.",
  },
];

const architectureLayers = [
  {
    name: "Core / Domain",
    detail:
      "32 entities and 22 enums carrying the business rules - leave accrual modes, retention classes, equipment condition, role precedence. No framework imports.",
  },
  {
    name: "Core / Application",
    detail:
      "11 feature modules, each split into Commands and Queries, plus cross-cutting auditing and a single exception contract. Module names mirror the organisation's own French vocabulary so both poles discuss the same word.",
  },
  {
    name: "Host",
    detail:
      "14 REST controllers, Spring Security configuration, and the Keycloak JWT converter. The only layer that knows HTTP exists.",
  },
];

const securityPoints = [
  {
    title: "Identity delegated, never reimplemented",
    detail:
      "OAuth2 / OpenID Connect against a Keycloak realm. The API is a pure resource server - it validates tokens and provisions users through the Admin API, but never stores a password.",
  },
  {
    title: "Roles that are not a straight line",
    detail:
      "EMPLOYEE < MANAGER < HRADMIN < ITADMIN, with intentional asymmetries: ITADMIN is denied another employee's private info despite outranking HRADMIN elsewhere, and a manager sees a report's leave but never their documents. Each data tier carries its own rule instead of inheriting from rank.",
  },
  {
    title: "104 gates, and ownership checked in-body",
    detail:
      "Role annotations handle the coarse cut; ownership and hierarchy rules run inside the use-case, because 'is this your own record' is not something an annotation can answer.",
  },
  {
    title: "Encryption at rest for the sensitive tier",
    detail:
      "AES-256-GCM for salary and bank details. Profile photos are re-encoded server-side so no EXIF - and therefore no GPS from a phone camera - survives upload.",
  },
  {
    title: "Five-minute access tokens",
    detail:
      "Short-lived by design, which makes refresh handling load-bearing infrastructure on the client rather than a polish item. Every non-2xx response uses one fixed error envelope.",
  },
];

const aiWorkstreams = [
  {
    title: "OCR document extraction - authorization contract",
    status: "Contract delivered",
    detail:
      "I wrote the integration contract between the back-end and the AI pole for extracting data from CIN and passport documents. Its central decision: the AI service calls the REST API with its own service account and is never given direct MinIO credentials. The Documents module rests on one rule - PostgreSQL is the source of truth for permission, MinIO only stores bytes - and handing a second system bucket access would have created an unaudited path to the most sensitive data in the company.",
  },
  {
    title: "RAG conversational assistant",
    status: "Designed",
    detail:
      "Specified a retrieval-augmented assistant over HR policy and the employee's own records, scoped so that retrieval inherits the same authorization rules as the REST API rather than bypassing them.",
  },
  {
    title: "Absence and turnover prediction",
    status: "Designed",
    detail:
      "Modelled predictive workstreams for absence and staff turnover on top of the attendance and leave history the platform already records.",
  },
];

const practices = [
  {
    title: "Tests as the contract",
    detail:
      "2,072 automated tests across JUnit, Vitest and Playwright. Authorization rules in particular are proven structurally - one test exists purely to prove the dashboard performs no audited read.",
  },
  {
    title: "Migrations, never ad-hoc schema",
    detail:
      "32 Flyway migrations applied on startup. Schema change is reviewable history, not a manual step someone forgets on another environment.",
  },
  {
    title: "Generated client types",
    detail:
      "The React client generates its TypeScript types from the API's own OpenAPI document, so a contract change breaks the build instead of reaching production.",
  },
  {
    title: "Two poles, one vocabulary",
    detail:
      "Feature slices, module names and terminology track the domain 1:1 across both repositories, which is what let an 8-intern team move without constant translation.",
  },
];

const learnings = [
  "The server is the only source of authorization truth. Every UI permission check is a convenience - hiding a button, explaining a 403 - never a substitute for the gate behind it. Drift between the two is a defect, not a UI choice.",
  "Some things are better left unbuilt than guessed. We deliberately shipped no absence-rate widget, because nobody could answer what the denominator should be, and a plausible percentage with an undocumented definition is worse than an empty space.",
  "Co-leading two poles is mostly interface design between people. The contracts that mattered most - the error envelope, the role matrix, the OCR service account - were the ones written down before anyone implemented against them.",
];

const stack = [
  { group: "Back-end", items: ["Java 17", "Spring Boot", "Spring Security", "Spring Data JPA", "Clean Architecture"] },
  { group: "Data & storage", items: ["PostgreSQL", "Flyway", "MinIO / S3"] },
  { group: "Identity", items: ["Keycloak", "OAuth2 / OIDC", "JWT", "RBAC"] },
  { group: "Front-end", items: ["React 19", "TypeScript", "Vite", "MUI / MUI X", "TanStack Query", "Zustand", "React Hook Form + Zod", "i18next"] },
  { group: "Quality", items: ["JUnit", "Vitest", "Playwright", "OpenAPI codegen", "Docker"] },
];

const Section = ({ id, icon: Icon, title, intro, children }) => (
  <motion.section
    initial={{ opacity: 0, y: 22 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="rounded-3xl border border-white/15 bg-white/10 p-7 backdrop-blur-xl md:p-9"
    aria-labelledby={`${id}-title`}
  >
    <div className="mb-5 flex items-center gap-3">
      <Icon style={{ color: ACCENT }} aria-hidden="true" />
      <h2 id={`${id}-title`} className="text-2xl font-bold md:text-3xl">
        {title}
      </h2>
    </div>
    {intro && (
      <p className="mb-6 max-w-4xl text-base leading-relaxed text-gray-200">
        {intro}
      </p>
    )}
    {children}
  </motion.section>
);

const SmartHrmAiDetails = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#070640] text-white">
      <ParticlesBackground />
      <Navbar />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-28 md:px-12 lg:px-20">
        <EnglishOnlyNotice />
      </div>

      <main className="relative z-10">
        {/* Hero */}
        <section className="px-6 pb-16 pt-32 md:px-12 lg:px-20">
          <div className="mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-8 flex flex-wrap items-center gap-3 text-sm text-gray-300">
                <Link to="/" className="transition hover:text-[#1E8AF0]">
                  Home
                </Link>
                <span>/</span>
                <Link to="/portfolio" className="transition hover:text-[#1E8AF0]">
                  Portfolio
                </Link>
                <span>/</span>
                <span className="text-[#1E8AF0]">SMART HRM AI</span>
              </div>

              <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
                <div>
                  <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#1E8AF0]/30 bg-[#1E8AF0]/10 px-4 py-2 text-sm font-semibold text-[#BBDDFF]">
                    <FaBuilding aria-hidden="true" />
                    Enterprise HR platform
                  </div>

                  <h1 className="mb-6 text-4xl font-black leading-tight md:text-6xl">
                    SMART HRM AI
                    <span className="block text-[#1E8AF0]">
                      Back-End &amp; Front-End Co-Lead
                    </span>
                  </h1>

                  <p className="mb-8 max-w-3xl text-lg leading-relaxed text-gray-200 md:text-xl">
                    An internal HR platform built by an 8-intern team at BNS
                    Engineering, pairing a Java 17 / Spring Boot API with a
                    React 19 / TypeScript client, OAuth2 / Keycloak security,
                    and three AI workstreams.
                  </p>

                  <div className="mb-8 flex flex-wrap gap-3">
                    {heroChips.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-gray-200"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-4">
                    <Link
                      to="/portfolio"
                      className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3 font-semibold text-white transition hover:border-[#1E8AF0]/60 hover:bg-[#1E8AF0]/10"
                    >
                      <FaArrowLeft aria-hidden="true" />
                      Back to Portfolio
                    </Link>
                  </div>
                </div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.7, delay: 0.1 }}
                  className="rounded-3xl border border-white/15 bg-white/10 p-4 shadow-2xl shadow-black/30 backdrop-blur-xl"
                >
                  <img
                    src={smartHrmAiVisual}
                    alt="SMART HRM AI platform branding"
                    className="w-full rounded-2xl"
                    loading="eager"
                    decoding="async"
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Metrics */}
        <section className="px-6 py-10 md:px-12 lg:px-20">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {metricCards.map((metric) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45 }}
                  className="rounded-2xl border border-white/15 bg-white/10 p-6 backdrop-blur-xl"
                >
                  <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-gray-400">
                    {metric.label}
                  </p>
                  <p className="mb-3 text-4xl font-black" style={{ color: ACCENT }}>
                    {metric.value}
                  </p>
                  <p className="text-sm leading-relaxed text-gray-300">
                    {metric.detail}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Body */}
        <section className="px-6 pb-24 md:px-12 lg:px-20">
          <div className="mx-auto max-w-7xl space-y-6">
            {/* Demo video */}
            <motion.section
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-3xl border border-white/15 bg-white/10 p-5 shadow-2xl shadow-black/20 backdrop-blur-xl md:p-7"
              aria-labelledby="smart-hrm-demo-title"
            >
              <div className="mb-5">
                <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#1E8AF0]/30 bg-[#1E8AF0]/10 px-4 py-2 text-sm font-semibold text-[#BBDDFF]">
                  <FaPlay aria-hidden="true" />
                  Platform walkthrough
                </div>
                <h2
                  id="smart-hrm-demo-title"
                  className="text-2xl font-black text-white md:text-3xl"
                >
                  Demo Video
                </h2>
                <p className="mt-2 max-w-3xl text-sm leading-relaxed text-gray-300 md:text-base">
                  A walkthrough of the SMART HRM AI platform: the role-adaptive
                  dashboard, leave requests and approvals, documents, equipment
                  and exit authorizations.
                </p>
              </div>

              <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#08073d]/80 shadow-2xl shadow-black/30">
                <video
                  className="aspect-video w-full bg-black object-contain"
                  controls
                  preload="metadata"
                  aria-label="SMART HRM AI internal HR platform demo video"
                >
                  <source src={smartHrmAiDemoVideo} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </motion.section>

            <Section
              id="context"
              icon={FaBuilding}
              title="Context & Objective"
              intro="BNS Engineering ran its HR operations across spreadsheets and manual process. SMART HRM AI was the internal platform meant to replace that - built over two months by an 8-intern team split into a back-end pole and a front-end pole under an encadrant."
            >
              <p className="max-w-4xl text-base leading-relaxed text-gray-300">
                The brief was operational rather than experimental: HR and IT
                staff had to be able to run real personnel work against the tool
                on day one - hiring, leave, documents, equipment - with the
                server as the single source of authorization truth. Five modules
                shipped, carrying the organisation's own French naming so the
                product and the codebase never drifted apart.
              </p>
            </Section>

            <Section
              id="role"
              icon={FaPenFancy}
              title="My Role"
              intro="I co-led both poles - the Java 17 / Spring Boot API and the React 19 / TypeScript client - which in practice meant owning the contract between them."
            >
              <ul className="space-y-3">
                {[
                  "Designed and built the platform's security model end to end: the Keycloak integration, the role matrix, and the ownership rules that role annotations cannot express.",
                  "Shaped the Clean Architecture module layout and kept the front-end feature slices aligned to it one-for-one.",
                  "Owned the API contract the client generates its types from, so a breaking change surfaced at build time rather than in production.",
                  "Led the three AI workstreams, including the integration contract between the back-end and the AI pole.",
                  "Coordinated the work of an 8-intern team across two repositories.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-base leading-relaxed text-gray-300">
                    <span
                      className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full"
                      style={{ backgroundColor: ACCENT }}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </Section>

            <Section
              id="modules"
              icon={FaUsers}
              title="Modules Delivered"
              intro="Five operational modules, named in the organisation's own vocabulary."
            >
              <div className="grid gap-4 md:grid-cols-2">
                {modules.map((m) => (
                  <div
                    key={m.fr}
                    className="rounded-2xl border border-white/10 bg-white/5 p-5"
                  >
                    <p className="text-lg font-bold text-white">{m.fr}</p>
                    <p className="mb-2 text-sm font-semibold" style={{ color: ACCENT }}>
                      {m.en}
                    </p>
                    <p className="text-sm leading-relaxed text-gray-300">{m.detail}</p>
                  </div>
                ))}
              </div>
            </Section>

            <Section
              id="architecture"
              icon={FaLayerGroup}
              title="Architecture"
              intro="Three layers, with dependencies pointing inward. The domain knows nothing about Spring, and only one layer knows HTTP exists."
            >
              <div className="space-y-4">
                {architectureLayers.map((layer) => (
                  <div
                    key={layer.name}
                    className="rounded-2xl border-l-4 border-white/10 bg-white/5 p-5"
                    style={{ borderLeftColor: ACCENT }}
                  >
                    <p className="mb-2 font-mono text-base font-bold text-white">
                      {layer.name}
                    </p>
                    <p className="text-sm leading-relaxed text-gray-300">
                      {layer.detail}
                    </p>
                  </div>
                ))}
              </div>
            </Section>

            <Section
              id="security"
              icon={FaShieldAlt}
              title="Security Model"
              intro="The part of this project I would defend line by line. HR data is the most sensitive data a company holds about its own people, and the authorization model was treated as the product, not as plumbing."
            >
              <div className="space-y-4">
                {securityPoints.map((p) => (
                  <div key={p.title} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <p className="mb-2 font-bold text-white">{p.title}</p>
                    <p className="text-sm leading-relaxed text-gray-300">{p.detail}</p>
                  </div>
                ))}
              </div>
            </Section>

            <Section
              id="ai"
              icon={FaBrain}
              title="AI Integration"
              intro="Three AI workstreams sat under my ownership. One shipped as a delivered contract; the other two were specified and scoped but not implemented before the internship ended - stated here as designed rather than built."
            >
              <div className="space-y-4">
                {aiWorkstreams.map((w) => (
                  <div key={w.title} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <div className="mb-2 flex flex-wrap items-center gap-3">
                      <p className="font-bold text-white">{w.title}</p>
                      <span
                        className="rounded-full border px-3 py-1 text-[11px] font-bold uppercase tracking-wide"
                        style={{
                          color: ACCENT,
                          borderColor: "rgba(30, 138, 240, 0.45)",
                          backgroundColor: "rgba(30, 138, 240, 0.12)",
                        }}
                      >
                        {w.status}
                      </span>
                    </div>
                    <p className="text-sm leading-relaxed text-gray-300">{w.detail}</p>
                  </div>
                ))}
              </div>
            </Section>

            <Section
              id="practices"
              icon={FaFlask}
              title="Engineering Practices"
              intro="What kept an 8-person team from stepping on each other."
            >
              <div className="grid gap-4 md:grid-cols-2">
                {practices.map((p) => (
                  <div key={p.title} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <p className="mb-2 font-bold text-white">{p.title}</p>
                    <p className="text-sm leading-relaxed text-gray-300">{p.detail}</p>
                  </div>
                ))}
              </div>
            </Section>

            <Section id="learnings" icon={FaPenFancy} title="What I Took Away">
              <ul className="space-y-4">
                {learnings.map((item) => (
                  <li
                    key={item}
                    className="rounded-2xl border border-white/10 bg-white/5 p-5 text-base leading-relaxed text-gray-300"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Section>

            <Section id="stack" icon={FaCubes} title="Stack">
              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {stack.map((s) => (
                  <div key={s.group} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <p className="mb-3 text-sm font-bold uppercase tracking-wide text-gray-400">
                      {s.group}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {s.items.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs text-gray-200"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </Section>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default SmartHrmAiDetails;
