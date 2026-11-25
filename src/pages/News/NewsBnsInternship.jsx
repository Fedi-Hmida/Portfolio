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
import ScrollToTop from "../../components/ScrollToTop";
import en from "../../content/bns/news.en";
import fr from "../../content/bns/news.fr";
import { pickContent } from "../../i18n/localeContent";

const ACCENT = "#1E8AF0";

const NewsBnsInternship = () => {
  // Long-form copy lives in src/content/bns/news.{en,fr}.js; /fr shows the French post.
  const c = pickContent({ en, fr });

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
      </div>

      <Navbar />

      {/* Same top spacing as the sibling news pages. */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-28 md:px-12 lg:px-20" />

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
              <FaArrowLeft /> {c.back}
            </Link>
          </div>
          <img src={flogo} alt={c.logoAlt} loading="lazy" decoding="async" className="h-8 w-auto opacity-80" />
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
                  {c.badge}
                </span>
                <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-6">
                  {c.title}
                  <span className="block" style={{ color: ACCENT }}>
                    {c.accent}
                  </span>
                </h1>
                <p className="text-xl md:text-2xl font-bold italic text-white mb-5">{c.hook}</p>
                <p className="text-lg leading-relaxed text-[#e3f2fd]/90">{c.intro}</p>
              </div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="p-8 rounded-[24px] border border-[rgba(79,195,247,0.1)] bg-[rgba(26,35,126,0.3)] backdrop-blur-[12px]"
            >
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <FaCubes style={{ color: ACCENT }} /> {c.modulesTitle}
              </h3>
              <div className="flex flex-wrap gap-3">
                {c.modules.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-[#e3f2fd]/85"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <h3 className="text-2xl font-bold text-white mt-10 mb-6 flex items-center gap-2">
                <FaBuilding style={{ color: ACCENT }} /> {c.rolesTitle}
              </h3>
              <div className="flex flex-wrap gap-3">
                {c.roles.map((item) => (
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
                <FaHeart style={{ color: ACCENT }} /> {c.thanksTitle}
              </h3>
              <p className="text-[#e3f2fd]/70 italic mb-6">{c.thanksLead}</p>
              <div className="space-y-4">
                {c.thanks.map((person) => (
                  <div key={person.name} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <p className="text-white font-semibold mb-1">
                      {person.name}
                      {person.role ? (
                        <span className="font-normal text-[#e3f2fd]/60"> - {person.role}</span>
                      ) : null}
                    </p>
                    <p className="text-sm text-[#e3f2fd]/80 leading-relaxed">{person.detail}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="p-8 rounded-[24px] border border-[rgba(79,195,247,0.1)] bg-[rgba(26,35,126,0.3)] backdrop-blur-[12px]"
            >
              <p className="text-lg text-[#e3f2fd]/85 leading-relaxed">{c.closing}</p>
              <p className="mt-4 text-2xl font-bold text-white">{c.signoff}</p>
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
                  alt={c.coverAlt}
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
                <FaUserTie className="text-[#81d4fa]" /> {c.quickInfo.title}
              </h3>
              <ul className="space-y-4">
                {c.quickInfo.rows.map((row) => (
                  <li key={row.label} className="flex justify-between items-center gap-4 text-sm">
                    <span className="text-[#81d4fa]">{row.label}</span>
                    <span className="text-white font-medium text-right">{row.value}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 pt-6 border-t border-[rgba(79,195,247,0.2)]">
                <Link
                  to="/portfolio/smart-hrm-ai"
                  className="block w-full text-center rounded-full px-5 py-3 text-sm font-bold transition"
                  style={{ backgroundColor: ACCENT, color: "#061429" }}
                >
                  {c.caseStudyCta}
                </Link>
              </div>
              <div className="mt-6 pt-6 border-t border-[rgba(79,195,247,0.2)] text-center">
                <p className="text-[#81d4fa] text-xs mb-2 uppercase tracking-widest">{c.connect}</p>
                <div className="flex justify-center gap-4">
                  <a
                    href="https://www.linkedin.com/in/fedi-hmida/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-white hover:text-[#0077b5] transition-colors text-2xl"
                    aria-label={c.linkedinAria}
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
