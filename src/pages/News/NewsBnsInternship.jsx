import { motion } from "framer-motion";
import {
  FaArrowLeft,
  FaBuilding,
  FaCubes,
  FaHeart,
  FaLinkedin,
  FaUserTie,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import ExpandableImage from "../../components/ExpandableImage";
import flogo from "../../assets/images/flogo.png";
import bnsCoverImg from "../../assets/images/Portfolio/SmartHrmAi/smart-hrm-ai-cover.jpg";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import EnglishOnlyNotice from "../../components/EnglishOnlyNotice";
import ParticlesBackground from "../../components/ParticlesBackground";
import ScrollToTop from "../../components/ScrollToTop";

const ACCENT = "#1E8AF0";

/* Roles exactly as stated in the post. */
const roles = [
  "Backend Lead",
  "Frontend Co-Lead",
  "Analysis & design",
  "Security & IAM",
  "Testing & quality",
];

const modules = [
  "Employees",
  "Leave",
  "Equipment",
  "Administrative records",
  "HR dashboard",
];

const thanks = [
  {
    name: "Baya Mouaddeb",
    detail:
      "Thank you for your guidance, for a trust given before it was earned, and for advice that reached far beyond the internship. I sincerely hope we work together again.",
  },
  {
    name: "Baha Rahmouni",
    role: "technical supervisor",
    detail:
      "Thank you for the trust and the autonomy, and for the guidance that made the difference at the moments that mattered.",
  },
  {
    name: "Mohamed Mhamdi and Rawand Snoussi",
    detail:
      "Thank you for the quality of your work and for the kind of exchanges you walk away from with one more idea than you came in with.",
  },
];

const NewsBnsInternship = () => {
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
                    color: "#BBDDFF",
                    borderColor: "rgba(30, 138, 240, 0.4)",
                    backgroundColor: "rgba(30, 138, 240, 0.18)",
                  }}
                >
                  Internship
                </span>
                <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-6">
                  Two Summer Months at BNS Engineering
                  <span className="block" style={{ color: ACCENT }}>
                    SMART HRM AI, delivered
                  </span>
                </h1>
                <p className="text-xl md:text-2xl font-bold italic text-white mb-5">
                  Not a line on a CV: a team, and a product that runs.
                </p>
                <p className="text-lg leading-relaxed text-[#e3f2fd]/90">
                  My summer internship wrapped up at the end of August, and with
                  it SMART HRM AI - an end-to-end HR platform.
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="p-8 rounded-[24px] border border-[rgba(79,195,247,0.1)] bg-[rgba(26,35,126,0.3)] backdrop-blur-[12px]"
            >
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <FaCubes style={{ color: ACCENT }} /> What the Platform Covers
              </h3>
              <div className="flex flex-wrap gap-3">
                {modules.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-[#e3f2fd]/85"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <h3 className="text-2xl font-bold text-white mt-10 mb-6 flex items-center gap-2">
                <FaBuilding style={{ color: ACCENT }} /> My Roles
              </h3>
              <div className="flex flex-wrap gap-3">
                {roles.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border px-4 py-2 text-sm font-semibold"
                    style={{
                      color: "#BBDDFF",
                      borderColor: "rgba(30, 138, 240, 0.4)",
                      backgroundColor: "rgba(30, 138, 240, 0.14)",
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="p-8 rounded-[24px] border border-[rgba(79,195,247,0.1)] bg-[rgba(26,35,126,0.3)] backdrop-blur-[12px]"
            >
              <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
                <FaHeart style={{ color: ACCENT }} /> Thank You
              </h3>
              <p className="text-[#e3f2fd]/70 italic mb-6">
                What moved me forward the most doesn&apos;t compile.
              </p>
              <div className="space-y-4">
                {thanks.map((person) => (
                  <div
                    key={person.name}
                    className="rounded-2xl border border-white/10 bg-white/5 p-5"
                  >
                    <p className="text-white font-semibold mb-1">
                      {person.name}
                      {person.role ? (
                        <span className="font-normal text-[#e3f2fd]/60">
                          {" "}
                          - {person.role}
                        </span>
                      ) : null}
                    </p>
                    <p className="text-sm text-[#e3f2fd]/80 leading-relaxed">
                      {person.detail}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="p-8 rounded-[24px] border border-[rgba(79,195,247,0.1)] bg-[rgba(26,35,126,0.3)] backdrop-blur-[12px]"
            >
              <p className="text-lg text-[#e3f2fd]/85 leading-relaxed">
                Every experience is a chance to learn, to try, and to get things
                wrong usefully.
              </p>
              <p className="mt-4 text-2xl font-bold text-white">
                I&apos;ll take it, and keep going.
              </p>
            </motion.div>

            {/* Published bilingually; the French is kept as written. */}
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
                  Deux mois d&apos;été chez BNS Engineering. Pas une ligne sur un
                  CV : une équipe, et un produit qui tourne.
                </p>
                <p>
                  Mon stage d&apos;été s&apos;est achevé fin août, et avec lui
                  SMART HRM AI - une plateforme RH de bout en bout :
                  collaborateurs, congés, matériel, dossiers administratifs,
                  tableau de bord.
                </p>
                <p>
                  <span className="text-white font-medium">Mes rôles :</span>{" "}
                  Backend Lead - Frontend Co-Lead - analyse &amp; conception -
                  sécurité &amp; IAM - tests &amp; qualité.
                </p>
                <p>
                  <span className="text-white font-medium">
                    Madame Baya Mouaddeb
                  </span>{" "}
                  : merci pour l&apos;accompagnement, pour la confiance accordée
                  avant même d&apos;être méritée, et pour des conseils qui
                  dépassaient largement le cadre du stage. J&apos;espère
                  sincèrement que nous retravaillerons ensemble.
                </p>
                <p>
                  <span className="text-white font-medium">Baha Rahmouni</span>,
                  mon encadrant technique : merci pour la confiance et
                  l&apos;autonomie accordées, et pour ces orientations qui, aux
                  moments décisifs, ont fait la différence.
                </p>
                <p>
                  <span className="text-white font-medium">
                    Mohamed Mhamdi, Rawand Snoussi
                  </span>{" "}
                  : merci pour la qualité de votre travail et pour ces échanges
                  dont on repart toujours avec une idée de plus qu&apos;en
                  arrivant.
                </p>
                <p className="italic">
                  Chaque expérience est une occasion d&apos;apprendre,
                  d&apos;essayer, et de se tromper utilement.
                </p>
                <p className="font-bold text-white">Je prends, et j&apos;avance.</p>
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
                  src={bnsCoverImg}
                  alt="SMART HRM AI platform branding by BNS Engineering"
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
                  <span className="text-[#81d4fa]">Company</span>
                  <span className="text-white font-medium text-right">
                    BNS Engineering, Tunis
                  </span>
                </li>
                <li className="flex justify-between items-center gap-4 text-sm">
                  <span className="text-[#81d4fa]">Product</span>
                  <span className="text-white font-medium text-right">
                    SMART HRM AI
                  </span>
                </li>
                <li className="flex justify-between items-center gap-4 text-sm">
                  <span className="text-[#81d4fa]">Duration</span>
                  <span className="text-white font-medium text-right">
                    Two summer months, ended August 2026
                  </span>
                </li>
                <li className="flex justify-between items-center text-sm">
                  <span className="text-[#81d4fa]">Author</span>
                  <span className="text-white font-medium">Fedi Hmida</span>
                </li>
              </ul>
              <div className="mt-8 pt-6 border-t border-[rgba(79,195,247,0.2)]">
                <Link
                  to="/portfolio/smart-hrm-ai"
                  className="block w-full text-center rounded-full px-5 py-3 text-sm font-bold transition"
                  style={{ backgroundColor: ACCENT, color: "#061429" }}
                >
                  View the full case study
                </Link>
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

export default NewsBnsInternship;
