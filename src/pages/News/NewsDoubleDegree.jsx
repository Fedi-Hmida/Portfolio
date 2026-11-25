import { motion } from "framer-motion";
import {
  FaArrowLeft,
  FaGraduationCap,
  FaLinkedin,
  FaPlaneDeparture,
  FaUserTie,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import ExpandableImage from "../../components/ExpandableImage";
import flogo from "../../assets/images/flogo.logo.webp";
import campusImg from "../../assets/images/news20/3il-campus.webp";
import cohortImg from "../../assets/images/news20/3il-cohort.webp";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import ScrollToTop from "../../components/ScrollToTop";
import en from "../../content/doubleDegree/news.en";
import fr from "../../content/doubleDegree/news.fr";
import { pickContent } from "../../i18n/localeContent";

const ACCENT = "#FF7A45";

const NewsDoubleDegree = () => {
  // Long-form copy lives in src/content/doubleDegree/news.{en,fr}.js; /fr shows the French post.
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
                    color: "#FFD3C2",
                    borderColor: "rgba(255, 122, 69, 0.4)",
                    backgroundColor: "rgba(255, 122, 69, 0.18)",
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
                <p className="text-lg md:text-xl leading-relaxed text-[#e3f2fd]/90">{c.lead}</p>
                <p className="mt-5 text-xl md:text-2xl font-bold italic text-white">{c.hook}</p>
              </div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="p-8 rounded-[24px] border border-[rgba(79,195,247,0.1)] bg-[rgba(26,35,126,0.3)] backdrop-blur-[12px]"
            >
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <FaPlaneDeparture style={{ color: ACCENT }} /> {c.journeyTitle}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {c.timeline.map((item) => (
                  <div key={item.when} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: ACCENT }}>
                      {item.when}
                    </p>
                    <p className="text-white font-semibold mb-1">{item.what}</p>
                    <p className="text-sm text-[#e3f2fd]/75 leading-relaxed">{item.detail}</p>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-[#e3f2fd]/80 leading-relaxed">
                {c.thanks.map((part) =>
                  part.strong ? (
                    <span key={part.text} className="text-white font-medium">
                      {part.text}
                    </span>
                  ) : (
                    part.text
                  ),
                )}
              </p>
              <p className="mt-4 text-lg font-bold text-white">{c.closing}</p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="p-4 rounded-[24px] border border-[rgba(79,195,247,0.2)] bg-[rgba(26,35,126,0.6)] backdrop-blur-[16px] shadow-lg"
            >
              <ExpandableImage
                src={campusImg}
                alt={c.campusAlt}
                loading="lazy"
                decoding="async"
                className="w-full h-auto rounded-[20px] object-cover"
              />
            </motion.div>
          </div>

          <div className="lg:col-span-4 space-y-8">
            <motion.div
              variants={fadeInUp}
              className="p-4 rounded-[24px] border border-[rgba(79,195,247,0.2)] bg-[rgba(26,35,126,0.6)] backdrop-blur-[16px] shadow-lg"
            >
              <div className="relative overflow-hidden rounded-[20px] group">
                <ExpandableImage
                  src={cohortImg}
                  alt={c.cohortAlt}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a237e]/80 to-transparent flex items-end p-6 pointer-events-none">
                  <p className="text-white font-medium flex items-center gap-2">
                    <FaGraduationCap style={{ color: ACCENT }} /> {c.cohortCaption}
                  </p>
                </div>
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
              <div className="mt-8 pt-6 border-t border-[rgba(79,195,247,0.2)] text-center">
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

export default NewsDoubleDegree;
