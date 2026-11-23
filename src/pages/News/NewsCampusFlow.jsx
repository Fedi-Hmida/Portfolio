import { motion } from "framer-motion";
import {
  FaArrowLeft,
  FaArrowRight,
  FaExternalLinkAlt,
  FaFlask,
  FaGithub,
  FaHeart,
  FaLinkedin,
  FaSitemap,
  FaUserTie,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import ExpandableImage from "../../components/ExpandableImage";
import flogo from "../../assets/images/flogo.png";
import orchestratorImg from "../../assets/images/Portfolio/CampusFlow/n8n-orchestrator.png";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import EnglishOnlyNotice from "../../components/EnglishOnlyNotice";
import ParticlesBackground from "../../components/ParticlesBackground";
import ScrollToTop from "../../components/ScrollToTop";

const ACCENT = "#FE3E57";
const githubUrl = "https://github.com/Fedi-Hmida/CampusFlow_AI";

/* Mirrors the LinkedIn post of November 19, 2026. Numbers keep the
   conditions they carry in the CampusFlow AI repository. */
const howItWorks = [
  {
    label: "Routing",
    text: "a local router sends each question to vision, regulations, calendar or admin, or refuses it as out of scope.",
  },
  {
    label: "Grounding",
    text: "RAG over 13 PDFs (3 official, 10 fictitious), chunked by article, BGE-M3 + Qdrant, with citations. Exam dates and contacts come from exact lookups, never from the LLM.",
  },
  {
    label: "Self-correction",
    text: "code checks every citation, date and e-mail. On failure: one revision, then \"not found\" + the right office.",
  },
  {
    label: "Hybrid models",
    text: "local Qwen3 (Ollama) + Gemini Flash-Lite, in Docker. Regulation answers: 116‑148 s fully local, a p90 of 18.7 s in hybrid (end to end, CPU laptop).",
  },
];

const howWeMeasured = [
  {
    label: "Retrieval",
    text: "Hit@5 1.00, Recall@5 0.93 (T1, 22 answerable questions).",
  },
  {
    label: "End-to-end",
    text: "53 team-written questions on the real bot, one run per set, 100% schema-valid, reviewed by hand.",
  },
  {
    label: "Robustness",
    text: "6/6 adversarial cases, including a prompt injection hidden in a photo.",
  },
  {
    label: "Known gap",
    text: "multi-step procedures, 3/10.",
    limit: true,
  },
];

const thanks = [
  {
    name: "Douaa Omrani",
    role: "RAG, evaluation",
    detail:
      "Thank you for the RAG strategy and for an end-to-end harness that told us honestly where the bot stood.",
  },
  {
    name: "Ines Bendhifallah",
    role: "prompts, vision",
    detail:
      "Thank you for the Regulations and Vision prompts, each version judged against a measurement rather than an impression.",
  },
  {
    name: "Ghassen Fodha",
    role: "supervisor",
    detail: "Thank you for the guidance.",
  },
];

const ArrowList = ({ items }) => (
  <ul className="space-y-4">
    {items.map((item) => (
      <li
        key={item.label}
        className={`flex items-start gap-3 leading-relaxed ${
          item.limit
            ? "rounded-2xl border border-amber-300/30 bg-amber-300/10 p-4 text-[#e3f2fd]/90"
            : "text-[#e3f2fd]/85"
        }`}
      >
        <FaArrowRight
          className="mt-1.5 flex-shrink-0 text-sm"
          style={{ color: item.limit ? "#fcd34d" : ACCENT }}
          aria-hidden="true"
        />
        <span>
          <span className="font-bold text-white">{item.label}:</span>{" "}
          {item.text}
        </span>
      </li>
    ))}
  </ul>
);

const NewsCampusFlow = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="relative min-h-screen font-sans text-[#e3f2fd] overflow-x-hidden">
      <ScrollToTop />
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a237e] to-[#283593] -z-20"></div>
      <div className="absolute inset-0 -z-10 opacity-30">
        <ParticlesBackground />
      </div>

      <Navbar />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-28 md:px-12 lg:px-20">
        <EnglishOnlyNotice />
      </div>

      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 p-6 rounded-[24px] border border-[rgba(79,195,247,0.2)] bg-[rgba(26,35,126,0.6)] backdrop-blur-[16px] shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] flex justify-between items-center"
        >
          <div className="flex items-center gap-4">
            <Link
              to="/news"
              className="text-[#81d4fa] hover:text-white transition-colors flex items-center gap-2"
            >
              <FaArrowLeft /> Back to News
            </Link>
          </div>
          <img
            src={flogo}
            alt="Fedi Hmida logo"
            loading="lazy"
            decoding="async"
            className="h-8 w-auto opacity-80"
          />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-12 gap-8"
        >
          <div className="lg:col-span-8 space-y-8">
            <motion.div
              variants={fadeInUp}
              className="p-10 rounded-[24px] border border-[rgba(79,195,247,0.2)] bg-[rgba(26,35,126,0.6)] backdrop-blur-[16px] shadow-lg relative overflow-hidden"
            >
              <div
                className="absolute top-0 right-0 w-64 h-64 rounded-full filter blur-[100px] opacity-20 -translate-y-1/2 translate-x-1/2"
                style={{ backgroundColor: ACCENT }}
              ></div>

              <div className="relative z-10">
                <span
                  className="inline-block py-1 px-3 rounded-full text-xs font-bold uppercase tracking-widest mb-4 border"
                  style={{
                    color: "#FF8A9B",
                    borderColor: "rgba(254, 62, 87, 0.4)",
                    backgroundColor: "rgba(254, 62, 87, 0.18)",
                  }}
                >
                  Project
                </span>
                <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-6">
                  CampusFlow AI
                  <span className="block" style={{ color: ACCENT }}>
                    A multi-agent assistant that cites its sources
                  </span>
                </h1>
                <p className="text-xl md:text-2xl font-bold italic text-white mb-5">
                  An assistant that invents a date does more harm than one that
                  stays silent.
                </p>
                <p className="text-lg leading-relaxed text-[#e3f2fd]/90">
                  With my team, we built CampusFlow AI, a multi-agent Telegram
                  assistant for ESPRIT students, for our Advanced Deep Learning
                  course. I led the architecture and integration. Pictured: its
                  n8n orchestrator.
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="p-8 rounded-[24px] border border-[rgba(79,195,247,0.1)] bg-[rgba(26,35,126,0.3)] backdrop-blur-[12px]"
            >
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <FaSitemap style={{ color: ACCENT }} /> How It Works
              </h3>
              <ArrowList items={howItWorks} />

              <h3 className="text-2xl font-bold text-white mt-10 mb-6 flex items-center gap-2">
                <FaFlask style={{ color: ACCENT }} /> How We Measured It
              </h3>
              <ArrowList items={howWeMeasured} />
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="p-8 rounded-[24px] border border-[rgba(79,195,247,0.1)] bg-[rgba(26,35,126,0.3)] backdrop-blur-[12px]"
            >
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <FaHeart style={{ color: ACCENT }} /> Thank You
              </h3>
              <div className="space-y-4">
                {thanks.map((person) => (
                  <div
                    key={person.name}
                    className="rounded-2xl border border-white/10 bg-white/5 p-5"
                  >
                    <p className="text-white font-semibold mb-1">
                      {person.name}
                      <span className="font-normal text-[#e3f2fd]/60">
                        {" "}
                        - {person.role}
                      </span>
                    </p>
                    <p className="text-sm text-[#e3f2fd]/80 leading-relaxed">
                      {person.detail}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Published bilingually; the French is written, not translated. */}
            <motion.div
              variants={fadeInUp}
              lang="fr"
              className="p-8 rounded-[24px] border border-[rgba(79,195,247,0.1)] bg-[rgba(26,35,126,0.3)] backdrop-blur-[12px]"
            >
              <h3 className="text-xl font-bold text-white mb-5">
                Version française
              </h3>
              <div className="space-y-4 text-[#e3f2fd]/85 leading-relaxed">
                <p className="italic text-white font-semibold">
                  Un assistant qui invente une date fait plus de mal qu&apos;un
                  assistant qui se tait.
                </p>
                <p>
                  Avec mon équipe, nous avons construit CampusFlow AI, un
                  assistant Telegram multi-agents pour les étudiants
                  d&apos;ESPRIT, pour le cours d&apos;Advanced Deep Learning.
                  J&apos;ai porté l&apos;architecture et l&apos;intégration. En
                  image : son orchestrateur n8n.
                </p>
                <div>
                  <p className="text-white font-medium mb-2">Le fonctionnement</p>
                  <ul className="space-y-2">
                    <li>
                      <span className="text-white font-medium">Routage :</span>{" "}
                      un routeur local oriente chaque question vers la vision,
                      le règlement, le calendrier ou l&apos;administration, ou
                      la refuse hors périmètre.
                    </li>
                    <li>
                      <span className="text-white font-medium">Sources :</span>{" "}
                      RAG sur 13 PDF (3 officiels, 10 fictifs), découpés par
                      article, BGE-M3 + Qdrant, avec citations. Dates
                      d&apos;examen et contacts : recherche exacte, jamais le
                      LLM.
                    </li>
                    <li>
                      <span className="text-white font-medium">
                        Auto-correction :
                      </span>{" "}
                      le code vérifie chaque citation, date et e-mail. En cas
                      d&apos;échec : une révision, puis{" "}
                      {"« non trouvé »"} + le bon service.
                    </li>
                    <li>
                      <span className="text-white font-medium">Hybride :</span>{" "}
                      Qwen3 local (Ollama) + Gemini Flash-Lite, sous Docker.
                      Réponses réglementaires : {"116‑148 s"} en tout
                      local, un p90 de {"18,7 s"} en hybride (de bout en
                      bout, sur un portable sans GPU).
                    </li>
                  </ul>
                </div>
                <div>
                  <p className="text-white font-medium mb-2">Les chiffres</p>
                  <ul className="space-y-2">
                    <li>
                      <span className="text-white font-medium">Recherche :</span>{" "}
                      Hit@5 1,00, Recall@5 0,93 (T1, 22 questions répondables).
                    </li>
                    <li>
                      <span className="text-white font-medium">
                        Bout en bout :
                      </span>{" "}
                      53 questions rédigées par l&apos;équipe, posées au vrai
                      bot, une exécution par jeu, {"100 %"} conformes au schéma
                      JSON, relues à la main.
                    </li>
                    <li>
                      <span className="text-white font-medium">Robustesse :</span>{" "}
                      6/6 cas adverses, dont une injection de prompt cachée dans
                      une photo.
                    </li>
                    <li>
                      <span className="text-white font-medium">Limite :</span>{" "}
                      les démarches en plusieurs étapes, 3/10.
                    </li>
                  </ul>
                </div>
                <p>
                  Merci à{" "}
                  <span className="text-white font-medium">Douaa Omrani</span>{" "}
                  (RAG, évaluation),{" "}
                  <span className="text-white font-medium">
                    Ines Bendhifallah
                  </span>{" "}
                  (prompts, vision) et à{" "}
                  <span className="text-white font-medium">Ghassen Fodha</span>{" "}
                  pour l&apos;encadrement.
                </p>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-4 space-y-8">
            <motion.div
              variants={fadeInUp}
              className="p-4 rounded-[24px] border border-[rgba(79,195,247,0.2)] bg-[rgba(26,35,126,0.6)] backdrop-blur-[16px] shadow-lg"
            >
              <div className="relative overflow-hidden rounded-[20px] group">
                <ExpandableImage
                  src={orchestratorImg}
                  alt="n8n orchestrator of CampusFlow AI: router, out-of-scope refusal, vision, regulations RAG with checks and one revision, calendar lookup, admin lookups and draft, output"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="p-6 rounded-[24px] border border-[rgba(79,195,247,0.2)] bg-[rgba(26,35,126,0.6)] backdrop-blur-[16px]"
            >
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <FaUserTie className="text-[#81d4fa]" /> Quick Info
              </h3>
              <ul className="space-y-4">
                <li className="flex justify-between items-center gap-4 text-sm">
                  <span className="text-[#81d4fa]">Project</span>
                  <span className="text-white font-medium text-right">
                    CampusFlow AI
                  </span>
                </li>
                <li className="flex justify-between items-center gap-4 text-sm">
                  <span className="text-[#81d4fa]">Course</span>
                  <span className="text-white font-medium text-right">
                    Advanced Deep Learning, ESPRIT (5DS9)
                  </span>
                </li>
                <li className="flex justify-between items-center gap-4 text-sm">
                  <span className="text-[#81d4fa]">Team</span>
                  <span className="text-white font-medium text-right">
                    3 students
                  </span>
                </li>
                <li className="flex justify-between items-center gap-4 text-sm">
                  <span className="text-[#81d4fa]">Built</span>
                  <span className="text-white font-medium text-right">
                    24 Oct - 1 Nov 2026
                  </span>
                </li>
                <li className="flex justify-between items-center gap-4 text-sm">
                  <span className="text-[#81d4fa]">Published</span>
                  <span className="text-white font-medium text-right">
                    November 19, 2026 (LinkedIn)
                  </span>
                </li>
                <li className="flex justify-between items-center text-sm">
                  <span className="text-[#81d4fa]">Author</span>
                  <span className="text-white font-medium">Fedi Hmida</span>
                </li>
              </ul>
              <div className="mt-8 pt-6 border-t border-[rgba(79,195,247,0.2)] space-y-3">
                <Link
                  to="/portfolio/campusflow-ai"
                  className="block w-full text-center rounded-full px-5 py-3 text-sm font-bold transition hover:opacity-90"
                  style={{ backgroundColor: ACCENT, color: "#ffffff" }}
                >
                  View the full case study
                </Link>
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex w-full items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-3 text-sm font-bold text-white transition hover:border-[#FE3E57]/60 hover:bg-[#FE3E57]/10"
                >
                  <FaGithub aria-hidden="true" />
                  View on GitHub
                  <FaExternalLinkAlt className="text-xs" aria-hidden="true" />
                </a>
              </div>
              <div className="mt-6 pt-6 border-t border-[rgba(79,195,247,0.2)] text-center">
                <p className="text-[#81d4fa] text-xs mb-2 uppercase tracking-widest">
                  Connect
                </p>
                <div className="flex justify-center gap-4">
                  <a
                    href="https://www.linkedin.com/in/fedi-hmida/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-white hover:text-[#0077b5] transition-colors text-2xl"
                    aria-label="Open Fedi Hmida LinkedIn profile"
                  >
                    <FaLinkedin />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default NewsCampusFlow;
