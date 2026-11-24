import { motion } from "framer-motion";
import {
  FaArrowLeft,
  FaArrowRight,
  FaCheckCircle,
  FaCubes,
  FaExclamationTriangle,
  FaExternalLinkAlt,
  FaFlask,
  FaGithub,
  FaLayerGroup,
  FaLightbulb,
  FaPenFancy,
  FaRobot,
  FaSearch,
  FaShieldAlt,
  FaSitemap,
  FaUniversity,
  FaUsers,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import callVerseCover from "../../assets/images/Portfolio/CallVerse/callverse-cover.jpg";
import supervisorImg from "../../assets/images/Portfolio/CallVerse/screen-supervisor.png";
import twinImg from "../../assets/images/Portfolio/CallVerse/screen-twin.png";
import advisorImg from "../../assets/images/Portfolio/CallVerse/screen-advisor.png";
import clientImg from "../../assets/images/Portfolio/CallVerse/screen-client.png";
import ExpandableImage from "../../components/ExpandableImage";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import EnglishOnlyNotice from "../../components/EnglishOnlyNotice";
import ParticlesBackground from "../../components/ParticlesBackground";

const ACCENT = "#C9A36A";
const githubUrl = "https://github.com/Fedi-Hmida/callverse-backend";

/* Every figure comes from the CallVerse repositories, with its condition:
   docs/integration/TWIN_FLOW.md, WORKFORCE_FLOW.md, ADVISOR_FLOW.md,
   HANDOFF_2026-10-19.md, ai-service/app/quality/rubric.py. */
const metricCards = [
  {
    label: "AI agents",
    value: "4",
    detail:
      "A LangGraph advisor with RAG and banking tools, a customer simulator, a PPO staffing policy and an LLM quality judge.",
  },
  {
    label: "Twin SLA, medium load",
    value: "0.31\u00a0→\u00a00.43",
    detail:
      "FIFO vs PPO on the same simulated day (12 advisors, 8-hour day, seeds 7 and 8). The cost: abandonment 12.9% → 18.9%.",
  },
  {
    label: "Backend tests",
    value: "610",
    detail:
      "mvn verify, 0 failures, on a real PostgreSQL with Testcontainers (19 Oct 2026) - plus 285 AI-service tests.",
  },
  {
    label: "Accessibility",
    value: "100",
    detail:
      "Lighthouse accessibility on the public pages; 0 violations with axe 4.13 on 15 signed-in screens at two widths (Oct 2026).",
  },
];

const heroChips = [
  "Sept - Oct 2026",
  "3iL × ESPRIT",
  "Team of 5",
  "LangGraph / PPO / Groq",
  "Spring Boot / Next.js",
];

/* kind: "ai" = a model is involved; "core" = platform code. */
const layers = [
  {
    name: "Next.js 15",
    tag: "Web",
    kind: "core",
    detail: "Four role spaces; REST for actions, STOMP for live queues, messages and alerts.",
  },
  {
    name: "Spring Boot 3",
    tag: "Backend",
    kind: "core",
    detail:
      "Domain, use cases and adapters in layers that ArchUnit enforces; JWT, roles, Flyway on PostgreSQL with pgvector.",
  },
  {
    name: "FastAPI",
    tag: "AI",
    kind: "ai",
    detail: "Hosts the four agents behind one key-protected API, with shared Pydantic contracts.",
  },
  {
    name: "Groq",
    tag: "Models",
    kind: "ai",
    detail: "gpt-oss-120b and gpt-oss-20b; embeddings run locally.",
  },
];

const agents = [
  {
    name: "Customer Advisor",
    builder: "Doua Omrani",
    detail:
      "A LangGraph tool loop: decide, call one of six banking tools or the knowledge base, decide again, then answer - four turns at most, the last one forced to conclude.",
  },
  {
    name: "Client Simulator",
    builder: "Doua Omrani",
    detail: "Plays six customer profiles whose patience and satisfaction change with each reply.",
  },
  {
    name: "Workforce Manager",
    builder: "Ines Bendhifallah",
    detail:
      "A PPO policy trained on a custom Gymnasium call-centre environment; recommends where to move an advisor.",
  },
  {
    name: "Quality Analyst",
    builder: "Ines Bendhifallah",
    detail:
      "An LLM judge on six weighted criteria; Python computes the total and checks every citation.",
  },
];

/* docs/integration/TWIN_FLOW.md: 12 advisors, 8-hour day, mean of seeds 7 and 8. */
const twinLoads = [
  {
    load: "Low load",
    rows: [
      { strategy: "FIFO", sla: "0.665", abandon: "1.0%", wait: "91\u00a0s" },
      { strategy: "Threshold", sla: "0.680", abandon: "0.1%", wait: "71\u00a0s" },
      { strategy: "PPO", sla: "0.698", abandon: "5.9%", wait: "103\u00a0s", ppo: true },
    ],
  },
  {
    load: "Medium load",
    rows: [
      { strategy: "FIFO", sla: "0.313", abandon: "12.9%", wait: "230\u00a0s" },
      { strategy: "Threshold", sla: "0.270", abandon: "9.1%", wait: "210\u00a0s" },
      { strategy: "PPO", sla: "0.426", abandon: "18.9%", wait: "201\u00a0s", ppo: true },
    ],
  },
];

const safetyPoints = [
  {
    title: "Personal data masked first",
    detail:
      "IBANs (mod-97 check), card numbers (Luhn), e-mails and phone numbers are masked before any model call; the database keeps the original.",
  },
  {
    title: "The model cannot pick the customer",
    detail:
      "Customer and conversation ids are injected by the service, never chosen by the LLM - tested with an injection attempt.",
  },
  {
    title: "A human, on request",
    detail:
      "\"I want a human advisor\" escalates deterministically, without the model; the first human reply stops the AI.",
  },
  {
    title: "Why this answer?",
    detail:
      "Each automatic reply keeps its decision, sources and tool checks, visible to staff only - a customer gets a 403.",
  },
];

const platformPoints = [
  "One live conversation per customer - four simultaneous opens give exactly one.",
  "Staff open a complete customer in one transaction: login, profile, account with a valid IBAN, debit card.",
  "No card number, CVV or PIN stored - last four digits only, enforced by the database.",
];

const qualityPoints = [
  "610 backend tests, 0 failures, on a real PostgreSQL with Testcontainers (mvn verify, 19 Oct 2026).",
  "285 AI-service tests, run by GitHub Actions on every change to the service; 95 frontend tests.",
  "7 ArchUnit rules that fail the build on a layer violation, each checked to fire before being trusted.",
  "0 violations with axe 4.13 on 15 signed-in screens at 1440 and 390 px; Lighthouse accessibility 100 on the public pages (Oct 2026).",
  "Audit phases P0 to P2 with a test for every fix - a quick second customer message went unanswered 9 times out of 10, then 10 out of 10 after the dispatcher fix.",
];

const limits = [
  "The staffing policy buys SLA with abandonment at low and medium load; it stays advisory.",
  "The quality judge is not yet calibrated against human reviewers - agreement (Cohen's kappa) is the next step, not a result.",
  "Free-tier model quotas allow about one AI turn per minute; a multi-chat demo needs a paid key.",
  "A course project run locally on demo data - not a live bank system, and not load-tested.",
];

const team = [
  { name: "Fedi Hmida", detail: "Backend, AI service architecture and integration, frontend co-development" },
  { name: "Mohamed Aziz Bellagha", detail: "Frontend lead" },
  { name: "Doua Omrani", detail: "Customer Advisor and Client Simulator" },
  { name: "Ines Bendhifallah", detail: "Workforce Manager (RL) and Quality Analyst" },
  { name: "Rayen Souissi", detail: "CI pipeline" },
];

const learnings = [
  "Freeze the contracts first. Four people built in parallel because the Pydantic and OpenAPI contracts came before the code.",
  "Keep the rules in the backend. The agent asks; the backend decides - credit ceilings, escalations, who sees what.",
  "Report the cost with the gain. The RL policy wins on SLA and loses on abandonment; showing both is what makes the result credible.",
];

const stack = [
  { group: "AI", items: ["LangGraph", "PPO (Stable-Baselines3)", "Gymnasium", "Groq gpt-oss", "sentence-transformers", "pgvector"] },
  { group: "Backend", items: ["Java 21", "Spring Boot 3", "Spring Security", "JWT", "STOMP / WebSocket", "Flyway", "OpenAPI"] },
  { group: "Data", items: ["PostgreSQL (Neon)", "pgvector"] },
  { group: "Frontend", items: ["Next.js 15", "React 19", "TypeScript", "Tailwind 4"] },
  { group: "Quality", items: ["JUnit 5", "Testcontainers", "ArchUnit", "pytest", "GitHub Actions", "axe", "Lighthouse"] },
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

const Figure = ({ src, alt, caption, className = "" }) => (
  <figure className={className}>
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#08073d]/80">
      <ExpandableImage
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        className="h-auto w-full"
      />
    </div>
    {caption && (
      <figcaption className="mt-3 text-sm leading-relaxed text-gray-400">
        {caption}
      </figcaption>
    )}
  </figure>
);

const Bullets = ({ items }) => (
  <ul className="space-y-3">
    {items.map((item) => (
      <li key={item} className="flex items-start gap-3 text-base leading-relaxed text-gray-300">
        <span
          className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full"
          style={{ backgroundColor: ACCENT }}
          aria-hidden="true"
        />
        {item}
      </li>
    ))}
  </ul>
);

const CallVerseDetails = () => {
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
                <Link to="/" className="transition hover:text-[#C9A36A]">
                  Home
                </Link>
                <span>/</span>
                <Link to="/portfolio" className="transition hover:text-[#C9A36A]">
                  Portfolio
                </Link>
                <span>/</span>
                <span className="text-[#C9A36A]">CallVerse</span>
              </div>

              <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
                <div>
                  <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#C9A36A]/30 bg-[#C9A36A]/10 px-4 py-2 text-sm font-semibold text-[#E2C690]">
                    <FaRobot aria-hidden="true" />
                    Multi-agent digital twin
                  </div>

                  <h1 className="mb-6 text-4xl font-black leading-tight md:text-6xl">
                    CallVerse
                    <span className="block text-[#C9A36A]">
                      Backend Owner &amp; AI Architect
                    </span>
                  </h1>

                  <p className="mb-8 max-w-3xl text-lg leading-relaxed text-gray-200 md:text-xl">
                    A working contact centre for a retail bank where four AI
                    agents operate - one answers customers, one plays them, one
                    recommends staffing, one grades the conversations - and where
                    a staffing strategy is tested in a digital twin before it
                    touches a real customer. Built by a team of five for a
                    double-degree project between 3iL and ESPRIT.
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
                    <a
                      href={githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-[#C9A36A] px-6 py-3 font-semibold text-[#1A1206] shadow-lg shadow-[#C9A36A]/25 transition hover:bg-[#D6B47F]"
                    >
                      <FaGithub aria-hidden="true" />
                      View GitHub repository
                      <FaExternalLinkAlt className="text-xs" aria-hidden="true" />
                    </a>
                    <Link
                      to="/portfolio"
                      className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3 font-semibold text-white transition hover:border-[#C9A36A]/60 hover:bg-[#C9A36A]/10"
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
                    src={callVerseCover}
                    alt="CallVerse logo with the tagline Chaque échange compte"
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
            <Section
              id="context"
              icon={FaUniversity}
              title="Context & Objective"
              intro="A contact centre runs on a demand it cannot predict - Monday peaks, month-end waves, a sudden incident - with a fixed team."
            >
              <p className="max-w-4xl text-base leading-relaxed text-gray-300">
                Trying a new staffing rule on real customers risks a bad day for
                everyone. CallVerse builds the centre twice: a real platform
                where customers, advisors, supervisors and admins work live, and
                a twin that replays a simulated day under any strategy. The same
                AI agents serve both. One rule held everywhere: the backend,
                never the agent, decides what the bank allows.
              </p>
            </Section>

            <Section
              id="role"
              icon={FaPenFancy}
              title="My Role"
              intro="I owned the backend and designed the AI service - the two places where four people's work becomes one system."
            >
              <Bullets
                items={[
                  "Owned the Spring Boot backend: Clean Architecture with CQRS slices, 27 entities, 89 REST endpoint mappings in 24 controllers, JWT and four roles, live STOMP events, queues with skill-based routing, SLAs and escalations - 610 tests.",
                  "Designed the AI service: one FastAPI host for the four agents, the shared Pydantic contracts frozen first, and the work split for the two AI developers.",
                  "Integrated the agents with the platform: the advisor's tool calls through the backend, the twin runs, the quality grading, and the safety rules around them.",
                  "Co-developed the Next.js frontend with its lead: accessibility, the landing and login redesign, the customer space and the staff dashboards.",
                ]}
              />
            </Section>

            <Section
              id="architecture"
              icon={FaSitemap}
              title="Architecture"
              intro="Three codebases, one contract: the browser talks to Spring, Spring talks to the AI service, and the business rules never leave the backend."
            >
              <div className="space-y-3">
                {layers.map((layer) => (
                  <div
                    key={layer.name}
                    className="rounded-2xl border-l-4 border-white/10 bg-white/5 p-5"
                    style={{
                      borderLeftColor:
                        layer.kind === "ai" ? ACCENT : "rgba(255, 255, 255, 0.35)",
                    }}
                  >
                    <div className="mb-2 flex flex-wrap items-center gap-3">
                      <p className="font-mono text-base font-bold text-white">
                        {layer.name}
                      </p>
                      <span
                        className="rounded-full border px-3 py-1 text-[11px] font-bold uppercase tracking-wide"
                        style={
                          layer.kind === "ai"
                            ? {
                                color: "#E2C690",
                                borderColor: "rgba(201, 163, 106, 0.45)",
                                backgroundColor: "rgba(201, 163, 106, 0.12)",
                              }
                            : {
                                color: "#e5e7eb",
                                borderColor: "rgba(255, 255, 255, 0.25)",
                                backgroundColor: "rgba(255, 255, 255, 0.08)",
                              }
                        }
                      >
                        {layer.tag}
                      </span>
                    </div>
                    <p className="text-sm leading-relaxed text-gray-300">
                      {layer.detail}
                    </p>
                  </div>
                ))}
              </div>
            </Section>

            <Section
              id="agents"
              icon={FaRobot}
              title="The Four Agents"
              intro="Each agent has one job, and none of them decides what the bank allows."
            >
              <div className="grid gap-4 md:grid-cols-2">
                {agents.map((agent) => (
                  <div key={agent.name} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <p className="font-bold text-white">{agent.name}</p>
                    <p className="mb-2 text-sm font-semibold" style={{ color: ACCENT }}>
                      Built by {agent.builder}
                    </p>
                    <p className="text-sm leading-relaxed text-gray-300">{agent.detail}</p>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-gray-400">
                I designed the service that hosts them and its contracts, and
                integrated each agent with the platform.
              </p>
            </Section>

            <Section
              id="twin"
              icon={FaFlask}
              title="The Digital Twin, Measured"
              intro="A strategy is judged on the same simulated customers, not on a good day."
            >
              <div className="grid gap-4 lg:grid-cols-2">
                {twinLoads.map((block) => (
                  <div key={block.load} className="overflow-x-auto rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-5">
                    <p className="mb-3 font-bold text-white">{block.load}</p>
                    <table className="w-full text-left text-xs sm:text-sm">
                      <thead>
                        <tr className="text-gray-400">
                          <th scope="col" className="pb-2 pr-2 font-semibold sm:pr-3">Strategy</th>
                          <th scope="col" className="pb-2 pr-2 font-semibold sm:pr-3">SLA</th>
                          <th scope="col" className="pb-2 pr-2 font-semibold sm:pr-3">Abandoned</th>
                          <th scope="col" className="pb-2 font-semibold">Wait</th>
                        </tr>
                      </thead>
                      <tbody>
                        {block.rows.map((row) => (
                          <tr key={row.strategy} className="border-t border-white/10 text-gray-300">
                            <td className="py-2 pr-2 font-semibold text-white sm:pr-3">{row.strategy}</td>
                            <td
                              className={`py-2 pr-2 sm:pr-3 ${row.ppo ? "font-black" : ""}`}
                              style={row.ppo ? { color: ACCENT } : undefined}
                            >
                              {row.sla}
                            </td>
                            <td className={`py-2 pr-2 sm:pr-3 ${row.ppo ? "font-bold text-amber-300" : ""}`}>
                              {row.abandon}
                            </td>
                            <td className="py-2">{row.wait}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-gray-400">
                SLA on all arrivals. 12 advisors, 8-hour day, mean of seeds 7 and
                8: the same scenario and seed give the same customers to every
                strategy. At saturated load all strategies lose about 57% of
                contacts.
              </p>
              <p className="mt-4 max-w-4xl text-base leading-relaxed text-gray-300">
                The offline evaluation agrees (5 synthetic 8-hour episodes per
                load, seeds 42{"\u2011"}46, simulation, not live-bank performance): PPO
                gives the best SLA at every load, and more abandonment at low and
                medium load. That is why its output is advisory - a
                recommendation a supervisor reviews, never an automatic move.
              </p>
              <Figure
                src={twinImg}
                alt="Digital twin runs compared by strategy: SLA, abandonment and mean wait for the medium-load day"
                caption="The medium-load day re-run locally for this page (seeds 7 and 8, demo data): the same figures, and the app's own warning to read SLA and abandonment together."
                className="mt-6"
              />
            </Section>

            <Section
              id="knowledge"
              icon={FaSearch}
              title="Knowledge and Tools, Grounded"
              intro="The advisor answers from the bank's own procedures."
            >
              <p className="max-w-4xl text-base leading-relaxed text-gray-300">
                20 procedure articles in pgvector (HNSW), multilingual embeddings
                computed locally, the index refreshed in the background. Customer
                and transaction data come from backend tools, never from the
                model's memory. A tool budget stopped the advisor from escalating
                every refused card: about 6,960 tokens per message instead of
                8,560 on that case (measured on Groq, 18 Oct 2026).
              </p>
            </Section>

            <Section id="safety" icon={FaShieldAlt} title="Safety by Design">
              <div className="grid gap-4 md:grid-cols-2">
                {safetyPoints.map((p) => (
                  <div key={p.title} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <p className="mb-2 font-bold text-white">{p.title}</p>
                    <p className="text-sm leading-relaxed text-gray-300">{p.detail}</p>
                  </div>
                ))}
              </div>
            </Section>

            <Section
              id="platform"
              icon={FaLayerGroup}
              title="The Platform"
              intro="Four roles, live."
            >
              <div className="grid gap-6 lg:grid-cols-2">
                <Figure
                  src={supervisorImg}
                  alt="CallVerse supervisor overview with live queues per skill"
                  caption="Supervisor: live queues per skill, today's contacts and alerts."
                />
                <Figure
                  src={advisorImg}
                  alt="Advisor workstation: queues, chat and customer context"
                  caption="Advisor: inbox, conversation and the customer's context."
                />
                <Figure
                  src={clientImg}
                  alt="Customer space: accounts, card and messages"
                  caption="Customer: accounts, a conversation in progress, help."
                  className="lg:col-span-2 lg:mx-auto lg:max-w-3xl"
                />
              </div>
              <p className="mt-3 text-sm text-gray-400">
                Screenshots taken on demo data, run locally.
              </p>
              <div className="mt-6">
                <Bullets items={platformPoints} />
              </div>
            </Section>

            <Section id="quality" icon={FaCheckCircle} title="Engineering Quality">
              <Bullets items={qualityPoints} />
            </Section>

            <Section id="limits" icon={FaExclamationTriangle} title="Limits">
              <Bullets items={limits} />
            </Section>

            <Section id="team" icon={FaUsers} title="Team">
              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {team.map((person) => (
                  <div key={person.name} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <p className="mb-2 font-bold text-white">{person.name}</p>
                    <p className="text-sm leading-relaxed text-gray-300">{person.detail}</p>
                  </div>
                ))}
              </div>
            </Section>

            <Section id="learnings" icon={FaLightbulb} title="What I Took Away">
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

            {/* Explore */}
            <div className="rounded-3xl border border-white/15 bg-white/10 p-7 backdrop-blur-xl md:p-9">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <h2 className="mb-2 text-2xl font-black">Explore the project</h2>
                  <p className="text-gray-300">
                    Read the backend repository, the announcement, or return to
                    the project list.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-[#C9A36A] px-5 py-3 font-semibold text-[#1A1206] transition hover:bg-[#D6B47F]"
                  >
                    <FaGithub aria-hidden="true" />
                    GitHub
                    <FaExternalLinkAlt className="text-xs" aria-hidden="true" />
                  </a>
                  <Link
                    to="/news/23"
                    className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 font-semibold text-white transition hover:border-[#C9A36A]/60 hover:bg-[#C9A36A]/10"
                  >
                    Read the news
                    <FaArrowRight aria-hidden="true" />
                  </Link>
                  <Link
                    to="/portfolio"
                    className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 font-semibold text-white transition hover:border-[#C9A36A]/60 hover:bg-[#C9A36A]/10"
                  >
                    Portfolio
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CallVerseDetails;
