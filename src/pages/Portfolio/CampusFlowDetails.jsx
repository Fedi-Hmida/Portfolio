import { motion } from "framer-motion";
import {
  FaArrowLeft,
  FaArrowRight,
  FaBolt,
  FaCamera,
  FaCubes,
  FaExclamationTriangle,
  FaExternalLinkAlt,
  FaFlask,
  FaGithub,
  FaPenFancy,
  FaPlay,
  FaRobot,
  FaSearch,
  FaShieldAlt,
  FaSitemap,
  FaUniversity,
  FaUsers,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import campusFlowCover from "../../assets/images/Portfolio/CampusFlow/campusflow-cover.jpg";
import orchestratorImg from "../../assets/images/Portfolio/CampusFlow/n8n-orchestrator.png";
import workflowsMapImg from "../../assets/images/Portfolio/CampusFlow/workflows-map-top.png";
import qdrantImg from "../../assets/images/Portfolio/CampusFlow/qdrant-collections.png";
import convocationImg from "../../assets/images/Portfolio/CampusFlow/test-photo-convocation.jpg";
import injectionPhotoImg from "../../assets/images/Portfolio/CampusFlow/test-photo-injection.jpg";
import injectionReplyImg from "../../assets/images/Portfolio/CampusFlow/frame-injection-ignored.jpg";
import videoPoster from "../../assets/images/Portfolio/CampusFlow/video-poster.jpg";
import campusFlowDemoVideo from "../../assets/videos/CampusFlow/campusflow-ai-demo.mp4";
import ExpandableImage from "../../components/ExpandableImage";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import EnglishOnlyNotice from "../../components/EnglishOnlyNotice";
import ParticlesBackground from "../../components/ParticlesBackground";

const ACCENT = "#FE3E57";
const githubUrl = "https://github.com/Fedi-Hmida/CampusFlow_AI";

/* Every figure below comes from the CampusFlow AI repository, with its
   condition: report/section_evaluation.md, eval/retrieval/results_T1.md,
   report/section_prompts.md, report/section_multimodal.md. */
const metricCards = [
  {
    label: "Retrieval Hit@5",
    value: "1.00",
    detail:
      "Recall@5 0.93 on the 22 answerable T1 questions, with article-level chunks and official documents first (0.86 with fixed windows).",
  },
  {
    label: "End-to-end questions",
    value: "53",
    detail:
      "Team-written, one run per set through the real bot, every answer valid against the JSON contract and reviewed by hand: 22/25, 12/12, 6/6, and 3/10 on procedures.",
  },
  {
    label: "Latency p90, hybrid",
    value: "18.7 s",
    detail:
      "Highest p90 across the four test sets, end to end on a CPU laptop - every question under the 90 s budget. Fully local, a regulation answer took 116‑148 s.",
  },
  {
    label: "Adversarial cases",
    value: "6/6",
    detail:
      "Out of scope, missing information, false premise, missing study regime, a prompt injection hidden in a photo, and a request to send a message.",
  },
];

const heroChips = [
  "24 Oct - 1 Nov 2026",
  "ESPRIT, Advanced Deep Learning",
  "Team of 3",
  "n8n / Qdrant / Ollama / Gemini",
  "Telegram",
];

/* kind: "ai" = a language model decides; "code" = deterministic. */
const agents = [
  {
    name: "Router",
    tag: "AI",
    kind: "ai",
    engine: "Qwen3 4B, local",
    detail:
      "Reads the question and returns JSON: intents, entities, missing fields - or refuses it as out of scope before any cloud call.",
  },
  {
    name: "Vision",
    tag: "AI",
    kind: "ai",
    engine: "Gemini Flash-Lite",
    detail:
      "Reads photos of convocations, notices and timetables into a fixed schema; what it reads is labelled as read from the photo.",
  },
  {
    name: "Regulations",
    tag: "AI + retrieval",
    kind: "ai",
    engine: "Gemini Flash-Lite over Qdrant",
    detail:
      "RAG over the regulation corpus; the answer cites document, article and page.",
  },
  {
    name: "Calendar",
    tag: "Code",
    kind: "code",
    engine: "exact lookup tool",
    detail:
      "Exact lookup in the exam table - no language model touches a date.",
  },
  {
    name: "Admin",
    tag: "Code + AI",
    kind: "code",
    engine: "lookup tools, model for the draft only",
    detail:
      "Exact lookups for procedures and contacts; the model only writes the draft message, which the student sends themselves.",
  },
  {
    name: "Composer",
    tag: "Code",
    kind: "code",
    engine: "deterministic merge",
    detail:
      "Merges the sections of a multi-topic answer; it cannot add a fact.",
  },
  {
    name: "Critic",
    tag: "Code",
    kind: "code",
    engine: "checks.js",
    detail:
      "Checks every citation, date and e-mail against the sources. On failure: one revision with the exact failure list, then 'not found' and the right office.",
  },
];

const retrievalRows = [
  { label: "Fixed 2,000-character windows", value: "0.86", note: "Hit@5, 8,843 characters of context" },
  { label: "Article-level chunks", value: "0.86", note: "Same hit rate with half the context: 4,145 characters" },
  { label: "Articles, official documents first", value: "1.00", note: "Recall@5 0.93 - the configuration we kept", best: true },
];

const safetyPoints = [
  {
    title: "Prompt injection in a photo",
    detail:
      "A sticky note on a convocation tells the assistant to ignore its rules; the bot flags the text and ignores it.",
  },
  {
    title: "Out of scope, refused early",
    detail:
      "Personal-data requests such as grades or absences are refused by the local router before any cloud call.",
  },
  {
    title: "No student identifier leaves the laptop",
    detail:
      "The cloud model receives the question, public or fictitious excerpts and photos - never the Telegram id, the chat id, a name or the logs.",
  },
  {
    title: "Drafts, never sent",
    detail:
      "Request drafts are for the student to send; the bot never claims to have sent anything.",
  },
];

const evaluationRows = [
  { set: "T1", name: "Regulations", note: "Final set, run once", score: "22/25" },
  { set: "T2", name: "Calendar", note: "9/12 before one documented fix", score: "12/12" },
  {
    set: "T3",
    name: "Contacts & procedures",
    note: "Right office 7 times out of 10, procedure details often missing",
    score: "3/10",
    limit: true,
  },
  { set: "T5", name: "Robustness", note: "Including a prompt injection in a photo", score: "6/6" },
];

const evaluationNotes = [
  "Prompt iterations, measured on development sets: the Router went from 47 to 52 exact intents on 57 synthetic questions; the Regulations prompt from 22 to 11 'not found' answers on 32 questions.",
  "We tested the test harness too: 12 scoring defects and 2 functional defects, each fixed with a test built from the real answer it had misjudged.",
  "69 unit tests and 254 reproducibility checks pass (sources, links, no secrets, fictitious labels, test-set leaks).",
];

const limits = [
  "Procedures are the weak spot: the right office 7 times out of 10, but often without the documents and deadlines - 3/10 fully correct.",
  "Deterministic checks verify citations and figures, not meaning: a correctly cited but mis-paraphrased rule would pass.",
  "A course demo on one laptop, evaluated on team-written questions - not real student traffic.",
];

const team = [
  {
    name: "Fedi Hmida",
    detail: "Architecture, assistant workflow, Docker infrastructure, integration and reviews",
  },
  {
    name: "Douaa Omrani",
    detail: "RAG strategy, end-to-end test harness, evaluation",
  },
  {
    name: "Ines Bendhifallah",
    detail: "Regulations and Vision prompts, multimodal part",
  },
];

const learnings = [
  "Put code where the answer must be exact. Dates and e-mails never go through a model, so they cannot be invented.",
  "Measure before choosing. The hybrid design came from an end-to-end latency number, not from a preference.",
  "A benchmark needs its own tests. Our first harness had 12 scoring defects that made answers look better or worse than they were.",
];

const stack = [
  { group: "Orchestration", items: ["n8n", "Telegram Bot API", "ngrok"] },
  { group: "Models", items: ["Qwen3 4B (Ollama)", "Gemini Flash-Lite", "BGE-M3"] },
  { group: "Retrieval", items: ["Qdrant", "Article-level chunking", "Metadata filters"] },
  { group: "Engineering", items: ["Docker Compose", "JavaScript (node:test)", "Python", "JSON Schema"] },
  { group: "Evaluation", items: ["Hit@5 / Recall@5 / MRR", "End-to-end harness", "Human review"] },
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
        />
        {item}
      </li>
    ))}
  </ul>
);

const CampusFlowDetails = () => {
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
                <Link to="/" className="transition hover:text-[#FE3E57]">
                  Home
                </Link>
                <span>/</span>
                <Link to="/portfolio" className="transition hover:text-[#FE3E57]">
                  Portfolio
                </Link>
                <span>/</span>
                <span className="text-[#FE3E57]">CampusFlow AI</span>
              </div>

              <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
                <div>
                  <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#FE3E57]/30 bg-[#FE3E57]/10 px-4 py-2 text-sm font-semibold text-[#FF8A9B]">
                    <FaRobot aria-hidden="true" />
                    Multi-agent AI assistant
                  </div>

                  <h1 className="mb-6 text-4xl font-black leading-tight md:text-6xl">
                    CampusFlow AI
                    <span className="block text-[#FE3E57]">
                      Technical Lead - Architecture &amp; Integration
                    </span>
                  </h1>

                  <p className="mb-8 max-w-3xl text-lg leading-relaxed text-gray-200 md:text-xl">
                    A Telegram assistant for ESPRIT students that answers with
                    its source, takes dates and contacts from exact tables,
                    reads photos of convocations - and says &quot;not
                    found&quot; instead of inventing. Built by a team of three
                    for the Advanced Deep Learning course.
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
                      className="inline-flex items-center gap-2 rounded-full bg-[#FE3E57] px-6 py-3 font-semibold text-white shadow-lg shadow-[#FE3E57]/25 transition hover:bg-[#FF5A70]"
                    >
                      <FaGithub aria-hidden="true" />
                      View GitHub repository
                      <FaExternalLinkAlt className="text-xs" aria-hidden="true" />
                    </a>
                    <Link
                      to="/portfolio"
                      className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3 font-semibold text-white transition hover:border-[#FE3E57]/60 hover:bg-[#FE3E57]/10"
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
                    src={campusFlowCover}
                    alt="CampusFlow AI - Cited, exact, or not found"
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
              aria-labelledby="campusflow-demo-title"
            >
              <div className="mb-5">
                <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#FE3E57]/30 bg-[#FE3E57]/10 px-4 py-2 text-sm font-semibold text-[#FF8A9B]">
                  <FaPlay aria-hidden="true" />
                  Showcase film
                </div>
                <h2
                  id="campusflow-demo-title"
                  className="text-2xl font-black text-white md:text-3xl"
                >
                  Demo Video
                </h2>
                <p className="mt-2 max-w-3xl text-sm leading-relaxed text-gray-300 md:text-base">
                  A 90-second film of the system: the problem, the
                  orchestrator, a photo question answered with its citation,
                  the measured results and our limit. Bot replies are real
                  (run on 31 October); the chat window is recreated.
                </p>
              </div>

              <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#08073d]/80 shadow-2xl shadow-black/30">
                <video
                  className="aspect-video w-full bg-black object-contain"
                  controls
                  playsInline
                  preload="metadata"
                  poster={videoPoster}
                  aria-label="CampusFlow AI showcase film"
                >
                  <source src={campusFlowDemoVideo} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </motion.section>

            <Section
              id="context"
              icon={FaUniversity}
              title="Context & Objective"
              intro="To answer one administrative question, an ESPRIT student has to cross three sources: regulations that change with the study regime, an exam calendar and a directory of offices."
            >
              <p className="max-w-4xl text-base leading-relaxed text-gray-300">
                A plain LLM is the wrong tool here. Asked whether a missed exam
                can be retaken after an illness, the local model without
                retrieval answered &quot;yes, you can&quot; - unconditionally,
                with no source - while the day-course regulations do not accept
                a medical certificate for a final exam. The objective was an
                assistant that is right or says it does not know: every rule
                cited to its article, every date and e-mail taken from a table,
                and a referral to the right office when the information is
                missing.
              </p>
            </Section>

            <Section
              id="role"
              icon={FaPenFancy}
              title="My Role"
              intro="I owned the architecture and the integration - the part where three people's work becomes one system."
            >
              <Bullets
                items={[
                  "Designed the orchestrator-worker architecture and built the main assistant workflow in n8n: routing, specialists, composition and the checking loop.",
                  "Set up the Docker infrastructure (n8n, Qdrant, Ollama, ngrok) with pinned versions and a one-command bootstrap.",
                  "Moved the workflow logic into tested JavaScript and generated the n8n workflows from it, so the deployed code is the tested code.",
                  "Ran the latency measurements behind the hybrid decision and integrated the team's work through reviews.",
                ]}
              />
            </Section>

            <Section
              id="architecture"
              icon={FaSitemap}
              title="Architecture"
              intro="An orchestrator-worker graph: code where exactness matters, a model where judgement is needed."
            >
              <Figure
                src={orchestratorImg}
                alt="n8n orchestrator of CampusFlow AI: router, out-of-scope refusal, vision, regulations RAG with checks and one revision, calendar lookup, admin lookups and draft, output"
                caption="The core assistant workflow in n8n - 44 nodes. Select the image to enlarge it."
                className="mb-6"
              />

              <div className="space-y-3">
                {agents.map((agent) => (
                  <div
                    key={agent.name}
                    className="rounded-2xl border-l-4 border-white/10 bg-white/5 p-5"
                    style={{
                      borderLeftColor:
                        agent.kind === "ai" ? ACCENT : "rgba(255, 255, 255, 0.35)",
                    }}
                  >
                    <div className="mb-2 flex flex-wrap items-center gap-3">
                      <p className="font-mono text-base font-bold text-white">
                        {agent.name}
                      </p>
                      <span
                        className="rounded-full border px-3 py-1 text-[11px] font-bold uppercase tracking-wide"
                        style={
                          agent.kind === "ai"
                            ? {
                                color: "#FF8A9B",
                                borderColor: "rgba(254, 62, 87, 0.45)",
                                backgroundColor: "rgba(254, 62, 87, 0.12)",
                              }
                            : {
                                color: "#e5e7eb",
                                borderColor: "rgba(255, 255, 255, 0.25)",
                                backgroundColor: "rgba(255, 255, 255, 0.08)",
                              }
                        }
                      >
                        {agent.tag}
                      </span>
                      <span className="text-sm text-gray-400">{agent.engine}</span>
                    </div>
                    <p className="text-sm leading-relaxed text-gray-300">
                      {agent.detail}
                    </p>
                  </div>
                ))}
              </div>

              <Figure
                src={workflowsMapImg}
                alt="Map of the 10 n8n workflows generated from the exported JSON"
                caption="10 workflows, 107 nodes, generated from the exported JSON."
                className="mt-6"
              />
            </Section>

            <Section
              id="retrieval"
              icon={FaSearch}
              title="Retrieval, Measured"
              intro="Chunking was chosen by measurement, not by default."
            >
              <div className="grid gap-4 md:grid-cols-3">
                {retrievalRows.map((row) => (
                  <div
                    key={row.label}
                    className="rounded-2xl border bg-white/5 p-5"
                    style={{
                      borderColor: row.best
                        ? "rgba(254, 62, 87, 0.45)"
                        : "rgba(255, 255, 255, 0.1)",
                    }}
                  >
                    <p className="mb-2 font-bold text-white">{row.label}</p>
                    <p
                      className="mb-2 text-3xl font-black"
                      style={{ color: row.best ? ACCENT : "#e5e7eb" }}
                    >
                      {row.value}
                    </p>
                    <p className="text-sm leading-relaxed text-gray-300">{row.note}</p>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-gray-400">
                Hit@5 on T1, 22 answerable questions. Fixed windows keep a
                slightly better MRR (0.65 vs 0.63).
              </p>

              <div className="mt-6 grid items-start gap-6 lg:grid-cols-[1fr_1.1fr]">
                <p className="text-base leading-relaxed text-gray-300">
                  The corpus: 13 PDFs - 3 official regulations and 10 fictitious
                  procedures and guides written by the team, each labelled as
                  fictitious - split into 168 article-level chunks with BGE-M3
                  embeddings (1,024 dimensions) in Qdrant. Retrieval filters by
                  study regime and puts the official texts first, so an
                  official rule always outranks a demonstration procedure.
                </p>
                <Figure
                  src={qdrantImg}
                  alt="Qdrant collections: 168 article chunks and 77 fixed windows, 1,024-dimension cosine"
                  caption="Both collections in Qdrant: 77 fixed windows and 168 article chunks."
                />
              </div>
            </Section>

            <Section
              id="photos"
              icon={FaCamera}
              title="Reading Photos"
              intro="A student can send a photo of a convocation instead of typing."
            >
              <div className="grid items-start gap-6 md:grid-cols-[1fr_16rem]">
                <p className="text-base leading-relaxed text-gray-300">
                  The Vision prompt went through five versions, from 71 to 88
                  of 88 correct fields on 11 test photos (schema-valid 11/11,
                  single run). The bot answers with the rule and with what it
                  read - date, room, module - labelled as read from the photo.
                  A photo with no question is never refused: the bot says what
                  it read and asks what the student wants to know.
                </p>
                <Figure
                  src={convocationImg}
                  alt="Fictitious tilted retake convocation used as a test photo"
                  caption="Fictitious test document."
                  className="mx-auto w-full max-w-[16rem]"
                />
              </div>
            </Section>

            <Section
              id="safety"
              icon={FaShieldAlt}
              title="Safety by Design"
            >
              <div className="grid gap-4 md:grid-cols-2">
                {safetyPoints.map((p) => (
                  <div key={p.title} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <p className="mb-2 font-bold text-white">{p.title}</p>
                    <p className="text-sm leading-relaxed text-gray-300">{p.detail}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 grid items-start gap-6 md:grid-cols-[16rem_1fr]">
                <Figure
                  src={injectionPhotoImg}
                  alt="Fictitious convocation with a sticky note carrying a prompt injection"
                  caption="The test photo: the note tells the assistant to ignore its rules."
                  className="mx-auto w-full max-w-[16rem]"
                />
                <Figure
                  src={injectionReplyImg}
                  alt="The bot flags and ignores an instruction written on a photo"
                  caption="The bot's real reply: the instruction is flagged and ignored."
                />
              </div>
            </Section>

            <Section
              id="hybrid"
              icon={FaBolt}
              title="The Hybrid Decision"
              intro="Fully local was the plan. The measurement said no."
            >
              <p className="max-w-4xl text-base leading-relaxed text-gray-300">
                On a CPU laptop, a regulation answer took{" "}
                {"116‑148 s"} end to end against a {"90 s"}{" "}
                budget. We kept the router, the lookups, the embeddings and the
                checks local and moved the two long-writing agents and vision to
                Gemini Flash-Lite: a p90 of at most {"18.7 s"}, every
                question under budget. One setting moves the text agents back
                to the local model.
              </p>
            </Section>

            <Section
              id="evaluation"
              icon={FaFlask}
              title="Evaluation"
              intro="53 team-written questions through the real bot, one run per set, every answer checked against a JSON contract and reviewed by hand."
            >
              <div className="space-y-3">
                {evaluationRows.map((row) => (
                  <div
                    key={row.set}
                    className={`flex flex-wrap items-center justify-between gap-x-6 gap-y-2 rounded-2xl border p-5 ${
                      row.limit
                        ? "border-amber-300/30 bg-amber-300/10"
                        : "border-white/10 bg-white/5"
                    }`}
                  >
                    <div className="min-w-0">
                      <p className="font-bold text-white">
                        <span className="mr-2 font-mono text-gray-400">{row.set}</span>
                        {row.name}
                      </p>
                      <p className="text-sm text-gray-300">{row.note}</p>
                    </div>
                    <p
                      className={`text-2xl font-black ${row.limit ? "text-amber-300" : ""}`}
                      style={row.limit ? undefined : { color: ACCENT }}
                    >
                      {row.score}
                      {row.limit && (
                        <span className="ml-2 align-middle text-xs font-bold uppercase tracking-wide">
                          our limit
                        </span>
                      )}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <Bullets items={evaluationNotes} />
              </div>
            </Section>

            <Section id="limits" icon={FaExclamationTriangle} title="Limits">
              <Bullets items={limits} />
            </Section>

            <Section id="team" icon={FaUsers} title="Team">
              <div className="grid gap-4 md:grid-cols-3">
                {team.map((person) => (
                  <div key={person.name} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <p className="mb-2 font-bold text-white">{person.name}</p>
                    <p className="text-sm leading-relaxed text-gray-300">{person.detail}</p>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-sm text-gray-400">
                Supervised by Ghassen Fodha, ESPRIT (class 5DS9, 2026-2027).
              </p>
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

            {/* Explore */}
            <div className="rounded-3xl border border-white/15 bg-white/10 p-7 backdrop-blur-xl md:p-9">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <h2 className="mb-2 text-2xl font-black">Explore the project</h2>
                  <p className="text-gray-300">
                    Read the source repository, the announcement, or return to
                    the project list.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-[#FE3E57] px-5 py-3 font-semibold text-white transition hover:bg-[#FF5A70]"
                  >
                    <FaGithub aria-hidden="true" />
                    GitHub
                    <FaExternalLinkAlt className="text-xs" aria-hidden="true" />
                  </a>
                  <Link
                    to="/news/22"
                    className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 font-semibold text-white transition hover:border-[#FE3E57]/60 hover:bg-[#FE3E57]/10"
                  >
                    Read the news
                    <FaArrowRight aria-hidden="true" />
                  </Link>
                  <Link
                    to="/portfolio"
                    className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 font-semibold text-white transition hover:border-[#FE3E57]/60 hover:bg-[#FE3E57]/10"
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

export default CampusFlowDetails;
