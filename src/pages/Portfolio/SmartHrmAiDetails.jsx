import { motion } from "framer-motion";
import {
  FaArrowLeft,
  FaBuilding,
  FaCubes,
  FaPenFancy,
  FaShieldAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import smartHrmAiVisual from "../../assets/images/Portfolio/SmartHrmAi/smart-hrm-ai-cover.jpg";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import ParticlesBackground from "../../components/ParticlesBackground";

const ACCENT = "#1E8AF0";

/* Figures below come straight from the CV. Everything else on this page is a
   placeholder that Fedi fills in with the real case study. */
const metricCards = [
  { label: "REST endpoints", value: "102", detail: "Built over PostgreSQL with 32 Flyway migrations." },
  { label: "Authorization gates", value: "104", detail: "Enforcing a 4-role RBAC model across the API." },
  { label: "Automated tests", value: "2,072", detail: "JUnit, Vitest and Playwright across the stack." },
  { label: "Clean Architecture modules", value: "11", detail: "Delivered by an 8-intern team in two months." },
];

const heroChips = [
  "July - August 2026",
  "BNS Engineering, Tunis",
  "Java 17 / Spring Boot",
  "React 19 / TypeScript",
  "OAuth2 / Keycloak",
];

/* Section shells. Replace `placeholder` with the real content when writing the
   case study, then drop the <Placeholder /> marker. */
const sections = [
  {
    id: "context",
    icon: FaBuilding,
    title: "Context & Objective",
    placeholder:
      "Why BNS needed an internal HR platform, who it serves, and what the internship was scoped to deliver.",
  },
  {
    id: "role",
    icon: FaPenFancy,
    title: "My Role",
    placeholder:
      "What co-leading the back-end and front-end poles meant day to day: ownership, decisions, and how the 8-intern team was coordinated.",
  },
  {
    id: "architecture",
    icon: FaCubes,
    title: "Architecture",
    placeholder:
      "The Clean Architecture module layout, the Spring Boot API surface, the React 19 client, PostgreSQL, Flyway and MinIO.",
  },
  {
    id: "security",
    icon: FaShieldAlt,
    title: "Security Model",
    placeholder:
      "OAuth2 / OpenID Connect delegated to Keycloak, the 4-role RBAC design, and AES-256-GCM encryption at rest for salary and bank data.",
  },
  {
    id: "ai",
    icon: FaCubes,
    title: "AI Workstreams",
    placeholder:
      "The OCR document-extraction authorization contract, the RAG conversational assistant, and the absence / staff-turnover prediction models.",
  },
  {
    id: "outcomes",
    icon: FaPenFancy,
    title: "Outcomes & Learnings",
    placeholder:
      "What shipped, what the testing strategy caught, and what you would design differently next time.",
  },
];

const Placeholder = ({ children }) => (
  <div className="rounded-2xl border border-dashed border-white/25 bg-white/5 p-5">
    <p className="mb-2 text-xs font-bold uppercase tracking-widest text-amber-300/90">
      Content coming soon
    </p>
    <p className="text-sm leading-relaxed text-gray-400">{children}</p>
  </div>
);

const SmartHrmAiDetails = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#070640] text-white">
      <ParticlesBackground />
      <Navbar />

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
                  <p
                    className="mb-3 text-4xl font-black"
                    style={{ color: ACCENT }}
                  >
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

        {/* Case-study sections - shells awaiting content */}
        <section className="px-6 pb-24 md:px-12 lg:px-20">
          <div className="mx-auto max-w-7xl space-y-6">
            {sections.map(({ id, icon: Icon, title, placeholder }) => (
              <motion.section
                key={id}
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
                <Placeholder>{placeholder}</Placeholder>
              </motion.section>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default SmartHrmAiDetails;
