import { motion } from "framer-motion";
import {
  FaArrowLeft,
  FaArrowRight,
  FaExternalLinkAlt,
  FaFlask,
  FaGithub,
  FaHeart,
  FaLinkedin,
  FaRobot,
  FaUserTie,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import ExpandableImage from "../../components/ExpandableImage";
import flogo from "../../assets/images/flogo.png";
import twinImg from "../../assets/images/Portfolio/CallVerse/screen-twin.png";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import EnglishOnlyNotice from "../../components/EnglishOnlyNotice";
import ParticlesBackground from "../../components/ParticlesBackground";
import ScrollToTop from "../../components/ScrollToTop";

const ACCENT = "#C9A36A";
const githubUrl = "https://github.com/Fedi-Hmida/callverse-backend";

/* Mirrors the LinkedIn post drafted on November 24, 2026. Numbers keep the
   conditions they carry in the CallVerse repositories. */
const agents = [
  {
    label: "Advisor",
    text: "a LangGraph agent answers with six tools, including the bank's procedures (RAG on pgvector). The backend, never the agent, decides what is allowed.",
  },
  {
    label: "Simulator",
    text: "six customer profiles whose patience reacts to every reply.",
  },
  {
    label: "Workforce manager",
    text: "a PPO policy (reinforcement learning) recommends staffing moves. A supervisor decides.",
  },
  {
    label: "Quality analyst",
    text: "an LLM judge grades each conversation on six weighted criteria.",
  },
];

const measured = [
  {
    label: "Twin",
    text: "same simulated day, same customers (12 advisors, 8-hour day, seeds 7 and 8): at medium load, SLA 0.31 → 0.43 (FIFO → PPO), but abandonment 12.9% → 18.9%. The gain has a cost, so the policy stays advisory.",
  },
  {
    label: "Backend",
    text: "Spring Boot in Clean Architecture, live STOMP events, 610 tests, 0 failures (19 Oct 2026).",
  },
  {
    label: "Safety",
    text: "personal data masked before any model call; \"I want a human advisor\" never depends on the model.",
  },
  {
    label: "Next",
    text: "calibrating the quality judge against human reviewers.",
    limit: true,
  },
];

const thanks = [
  {
    name: "Mohamed Aziz Bellagha",
    role: "frontend",
    detail: "Thank you for leading the frontend that every role works in.",
  },
  {
    name: "Doua Omrani",
    role: "advisor, simulator",
    detail: "Thank you for the Customer Advisor and the Client Simulator.",
  },
  {
    name: "Ines Bendhifallah",
    role: "RL, quality",
    detail: "Thank you for the Workforce Manager and the Quality Analyst.",
  },
  {
    name: "Rayen Souissi",
    role: "CI",
    detail: "Thank you for the CI pipeline.",
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

const NewsCallVerse = () => {
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
                    color: "#E2C690",
                    borderColor: "rgba(201, 163, 106, 0.4)",
                    backgroundColor: "rgba(201, 163, 106, 0.18)",
                  }}
                >
                  Project
                </span>
                <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-6">
                  CallVerse
                  <span className="block" style={{ color: ACCENT }}>
                    Four AI agents, one digital twin
                  </span>
                </h1>
                <p className="text-xl md:text-2xl font-bold italic text-white mb-5">
                  You do not test a staffing strategy on real customers. You
                  test it in a twin.
                </p>
                <p className="text-lg leading-relaxed text-[#e3f2fd]/90">
                  For our double-degree project between 3iL and ESPRIT, our team
                  of five built CallVerse, a digital twin of a fictional retail
                  bank&apos;s customer relation centre, where four AI agents
                  work. I owned
                  the backend and designed the AI service.
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="p-8 rounded-[24px] border border-[rgba(79,195,247,0.1)] bg-[rgba(26,35,126,0.3)] backdrop-blur-[12px]"
            >
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <FaRobot style={{ color: ACCENT }} /> The Four Agents
              </h3>
              <ArrowList items={agents} />

              <h3 className="text-2xl font-bold text-white mt-10 mb-6 flex items-center gap-2">
                <FaFlask style={{ color: ACCENT }} /> What We Measured
              </h3>
              <ArrowList items={measured} />
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
                  On ne teste pas une stratégie d&apos;effectifs sur de vrais
                  clients. On la teste dans un jumeau.
                </p>
                <p>
                  Pour notre projet double diplôme entre 3iL et ESPRIT, notre
                  équipe de cinq a construit CallVerse{"\u00a0:"} un jumeau numérique du
                  centre de relation client d&apos;une banque de détail fictive, où
                  travaillent quatre agents IA. J&apos;avais la charge du
                  back-end et j&apos;ai conçu le service IA.
                </p>
                <div>
                  <p className="text-white font-medium mb-2">Les quatre agents</p>
                  <ul className="space-y-2">
                    <li>
                      <span className="text-white font-medium">{"Conseiller\u00a0:"}</span>{" "}
                      un agent LangGraph répond avec six outils, dont les
                      procédures de la banque (RAG sur pgvector).
                      C&apos;est le back-end, jamais l&apos;agent, qui décide de
                      ce qui est permis.
                    </li>
                    <li>
                      <span className="text-white font-medium">{"Simulateur\u00a0:"}</span>{" "}
                      six profils de clients dont la patience réagit à chaque
                      réponse.
                    </li>
                    <li>
                      <span className="text-white font-medium">
                        {"Gestionnaire d'effectifs\u00a0:"}
                      </span>{" "}
                      une politique PPO (apprentissage par renforcement)
                      recommande des réaffectations. Un superviseur décide.
                    </li>
                    <li>
                      <span className="text-white font-medium">{"Analyste qualité\u00a0:"}</span>{" "}
                      un juge LLM note chaque conversation sur six critères
                      pondérés.
                    </li>
                  </ul>
                </div>
                <div>
                  <p className="text-white font-medium mb-2">Les chiffres</p>
                  <ul className="space-y-2">
                    <li>
                      <span className="text-white font-medium">{"Jumeau\u00a0:"}</span>{" "}
                      même journée simulée, mêmes clients (12 conseillers,
                      journée de 8{"\u00a0"}h, graines 7 et 8){"\u00a0:"} en charge
                      moyenne, SLA 0,31 → 0,43 (FIFO → PPO), mais abandons{" "}
                      {"12,9\u00a0% → 18,9\u00a0%"}. Le gain a un coût{"\u00a0:"} la politique
                      reste une recommandation.
                    </li>
                    <li>
                      <span className="text-white font-medium">{"Back-end\u00a0:"}</span>{" "}
                      Spring Boot en Clean Architecture, événements STOMP
                      en temps réel, 610 tests au vert (0 échec, 19 octobre 2026).
                    </li>
                    <li>
                      <span className="text-white font-medium">{"Sécurité\u00a0:"}</span>{" "}
                      données personnelles masquées avant tout appel au modèle{"\u00a0;"}{" "}
                      {"«\u00a0Je veux un conseiller humain\u00a0»"} ne dépend jamais du
                      modèle.
                    </li>
                  </ul>
                </div>
                <p>
                  <span className="text-white font-medium">{"Prochaine étape\u00a0:"}</span>{" "}
                  calibrer le juge qualité par rapport à des
                  évaluations humaines.
                </p>
                <p>
                  Merci à{" "}
                  <span className="text-white font-medium">Mohamed Aziz Bellagha</span>{" "}
                  (front-end),{" "}
                  <span className="text-white font-medium">Doua Omrani</span>{" "}
                  (conseiller, simulateur),{" "}
                  <span className="text-white font-medium">Ines Bendhifallah</span>{" "}
                  (RL, qualité) et{" "}
                  <span className="text-white font-medium">Rayen Souissi</span>{" "}
                  (CI).
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
                  src={twinImg}
                  alt="Digital twin runs compared by strategy: SLA, abandonment and mean wait for the medium-load day"
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
                  <span className="text-white font-medium text-right">CallVerse</span>
                </li>
                <li className="flex justify-between items-center gap-4 text-sm">
                  <span className="text-[#81d4fa]">Programme</span>
                  <span className="text-white font-medium text-right">
                    Double degree, 3iL × ESPRIT
                  </span>
                </li>
                <li className="flex justify-between items-center gap-4 text-sm">
                  <span className="text-[#81d4fa]">Team</span>
                  <span className="text-white font-medium text-right">5 students</span>
                </li>
                <li className="flex justify-between items-center gap-4 text-sm">
                  <span className="text-[#81d4fa]">Built</span>
                  <span className="text-white font-medium text-right">Sept - Oct 2026</span>
                </li>
                <li className="flex justify-between items-center gap-4 text-sm">
                  <span className="text-[#81d4fa]">Published</span>
                  <span className="text-white font-medium text-right">
                    November 24, 2026 (portfolio)
                  </span>
                </li>
                <li className="flex justify-between items-center text-sm">
                  <span className="text-[#81d4fa]">Author</span>
                  <span className="text-white font-medium">Fedi Hmida</span>
                </li>
              </ul>
              <div className="mt-8 pt-6 border-t border-[rgba(79,195,247,0.2)] space-y-3">
                <Link
                  to="/portfolio/callverse"
                  className="block w-full text-center rounded-full px-5 py-3 text-sm font-bold transition hover:opacity-90"
                  style={{ backgroundColor: ACCENT, color: "#1A1206" }}
                >
                  View the full case study
                </Link>
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex w-full items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-3 text-sm font-bold text-white transition hover:border-[#C9A36A]/60 hover:bg-[#C9A36A]/10"
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

export default NewsCallVerse;
