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
import ScrollToTop from "../../components/ScrollToTop";
import en from "../../content/callverse/news.en";
import fr from "../../content/callverse/news.fr";
import { pickContent } from "../../i18n/localeContent";

const ACCENT = "#C9A36A";
const githubUrl = "https://github.com/Fedi-Hmida/callverse-backend";

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
          <span className="font-bold text-white">{item.label}</span> {item.text}
        </span>
      </li>
    ))}
  </ul>
);

const NewsCallVerse = () => {
  // Long-form copy lives in src/content/callverse/news.{en,fr}.js; /fr shows the French post.
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
                    color: "#E2C690",
                    borderColor: "rgba(201, 163, 106, 0.4)",
                    backgroundColor: "rgba(201, 163, 106, 0.18)",
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
                <FaRobot style={{ color: ACCENT }} /> {c.agentsTitle}
              </h3>
              <ArrowList items={c.agents} />

              <h3 className="text-2xl font-bold text-white mt-10 mb-6 flex items-center gap-2">
                <FaFlask style={{ color: ACCENT }} /> {c.measuredTitle}
              </h3>
              <ArrowList items={c.measured} />
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="p-8 rounded-[24px] border border-[rgba(79,195,247,0.1)] bg-[rgba(26,35,126,0.3)] backdrop-blur-[12px]"
            >
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <FaHeart style={{ color: ACCENT }} /> {c.thanksTitle}
              </h3>
              <div className="space-y-4">
                {c.thanks.map((person) => (
                  <div key={person.name} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <p className="text-white font-semibold mb-1">
                      {person.name}
                      <span className="font-normal text-[#e3f2fd]/60"> - {person.role}</span>
                    </p>
                    <p className="text-sm text-[#e3f2fd]/80 leading-relaxed">{person.detail}</p>
                  </div>
                ))}
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
                  alt={c.twinAlt}
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
              <div className="mt-8 pt-6 border-t border-[rgba(79,195,247,0.2)] space-y-3">
                <Link
                  to="/portfolio/callverse"
                  className="block w-full text-center rounded-full px-5 py-3 text-sm font-bold transition hover:opacity-90"
                  style={{ backgroundColor: ACCENT, color: "#1A1206" }}
                >
                  {c.caseStudyCta}
                </Link>
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex w-full items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-3 text-sm font-bold text-white transition hover:border-[#C9A36A]/60 hover:bg-[#C9A36A]/10"
                >
                  <FaGithub aria-hidden="true" />
                  {c.githubCta}
                  <FaExternalLinkAlt className="text-xs" aria-hidden="true" />
                </a>
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

export default NewsCallVerse;
