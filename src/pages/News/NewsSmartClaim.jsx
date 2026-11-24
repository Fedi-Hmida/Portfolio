import { motion } from "framer-motion";
import {
    FaArrowLeft,
    FaLinkedin,
    FaMobileAlt,
    FaUserTie,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import ExpandableImage from "../../components/ExpandableImage";
import flogo from "../../assets/images/flogo.png";
import tesaImg from "../../assets/images/new10/tesa.jpg";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import ParticlesBackground from "../../components/ParticlesBackground";
import ScrollToTop from "../../components/ScrollToTop";
import en from "../../content/news/smartClaim.en";
import fr from "../../content/news/smartClaim.fr";
import { pickContent } from "../../i18n/localeContent";

// Long-form copy lives in src/content/news/smartClaim.{en,fr}.js. The locale comes from the
// URL and switching language reloads the page, so picking once at module level is safe.
const c = pickContent({ en, fr });

const NewsSmartClaim = () => {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const floatAnimation = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="relative min-h-screen font-sans text-[#e3f2fd] overflow-x-hidden">
      <ScrollToTop />
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a237e] to-[#283593] -z-20"></div>

      {/* Particles */}
      <div className="absolute inset-0 -z-10 opacity-30">
        <ParticlesBackground />
      </div>

      <Navbar />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-28 md:px-12 lg:px-20">
        
      </div>

      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
        {/* Header / Breadcrumb */}
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
              <FaArrowLeft />{" "}{c.s001}</Link>
          </div>
          <img
            src={flogo}
            alt={c.s002}
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
          {/* Left Column (Main Content) */}
          <div className="lg:col-span-8 space-y-8">
            {/* Hero Block */}
            <motion.div
              variants={fadeInUp}
              className="p-10 rounded-[24px] border border-[rgba(79,195,247,0.2)] bg-[rgba(26,35,126,0.6)] backdrop-blur-[16px] shadow-lg relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#fe3e57] rounded-full filter blur-[100px] opacity-20 -translate-y-1/2 translate-x-1/2"></div>

              <motion.div {...floatAnimation} className="relative z-10">
                <span className="inline-block py-1 px-3 rounded-full bg-[#fe3e57]/30 border border-[#fe3e57]/30 text-[#fe3e57] text-xs font-bold uppercase tracking-widest mb-4">{c.s003}</span>
                <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-[#fe3e57]">{c.s004}</h1>
                <p className="text-lg md:text-xl leading-relaxed text-[#e3f2fd]/90">{c.s005}</p>
              </motion.div>
            </motion.div>

            {/* Content Body */}
            <motion.div
              variants={fadeInUp}
              className="p-8 rounded-[24px] border border-[rgba(79,195,247,0.2)] bg-[rgba(26,35,126,0.6)] backdrop-blur-[16px] shadow-lg text-[#e3f2fd]/80 space-y-6 text-lg leading-relaxed"
            >
              <p>{c.s006}{" "}
                <strong className="text-white">{c.s007}</strong>{c.s008}{" "}
                <strong className="text-[#fe3e57]">{c.s009}</strong>{c.s010}</p>

              <figure className="my-8 rounded-xl overflow-hidden shadow-2xl border border-[rgba(79,195,247,0.3)]">
                <ExpandableImage
                  src={tesaImg}
                  alt={c.s011}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                />
                <figcaption className="text-center text-sm py-2 bg-black/40 text-[#81d4fa]">{c.s012}</figcaption>
              </figure>

              <h3 className="text-2xl font-bold text-white mt-8 mb-4">{c.s013}</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong className="text-[#81d4fa]">{c.s014}</strong>{" "}{c.s015}</li>
                <li>
                  <strong className="text-[#81d4fa]">{c.s016}</strong>{" "}{c.s017}</li>
                <li>
                  <strong className="text-[#81d4fa]">{c.s018}</strong>{" "}{c.s019}</li>
                <li>
                  <strong className="text-[#81d4fa]">{c.s020}</strong>{" "}{c.s021}</li>
              </ul>

              <p>{c.s022}</p>

              <div className="mt-8 pt-6 border-t border-[rgba(79,195,247,0.1)]">
                <p className="italic">{c.s023}</p>
              </div>
            </motion.div>
          </div>

          {/* Right Column (Sidebar) */}
          <div className="lg:col-span-4 space-y-8">
            {/* Author Card */}
            <motion.div
              variants={fadeInUp}
              className="p-6 rounded-[24px] border border-[rgba(79,195,247,0.2)] bg-[rgba(26,35,126,0.8)] backdrop-blur-[16px] shadow-lg flex flex-col items-center text-center"
            >
              <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-[#fe3e57] to-[#ff6b81] p-[2px] mb-4">
                <div className="w-full h-full rounded-full bg-[#1a237e] flex items-center justify-center overflow-hidden">
                  <FaUserTie className="text-4xl text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-1">{c.s024}</h3>
              <p className="text-[#81d4fa] text-sm mb-4">{c.s025}</p>
              <div className="flex gap-3">
                <a
                  href="https://www.linkedin.com/in/fedi-hmida/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-[#0077b5] text-white hover:bg-[#006396] transition-colors"
                >
                  <FaLinkedin />
                </a>
              </div>
            </motion.div>

            {/* Meta Info */}
            <motion.div
              variants={fadeInUp}
              className="p-6 rounded-[24px] border border-[rgba(79,195,247,0.2)] bg-[rgba(26,35,126,0.6)] backdrop-blur-[16px] shadow-lg space-y-4"
            >
              <div>
                <h4 className="text-[#81d4fa] text-sm font-bold uppercase tracking-wider mb-2">{c.s026}</h4>
                <p className="text-white">{c.s027}</p>
              </div>
              <div>
                <h4 className="text-[#81d4fa] text-sm font-bold uppercase tracking-wider mb-2">{c.s028}</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full bg-[#fe3e57]/20 border border-[#fe3e57]/30 text-[#fe3e57] text-xs">{c.s029}</span>
                  <span className="px-3 py-1 rounded-full bg-[#fe3e57]/20 border border-[#fe3e57]/30 text-[#fe3e57] text-xs">{c.s030}</span>
                  <span className="px-3 py-1 rounded-full bg-[#fe3e57]/20 border border-[#fe3e57]/30 text-[#fe3e57] text-xs">{c.s031}</span>
                </div>
              </div>
            </motion.div>

            {/* Related Project Link */}
            <motion.div
              variants={fadeInUp}
              className="p-6 rounded-[24px] border border-[rgba(79,195,247,0.2)] bg-gradient-to-br from-[rgba(254,62,87,0.1)] to-[rgba(254,62,87,0.05)] backdrop-blur-[16px] shadow-lg"
            >
              <h4 className="text-[#fe3e57] font-bold mb-3 flex items-center gap-2">
                <FaMobileAlt />{" "}{c.s032}</h4>
              <p className="text-sm text-[#e3f2fd]/80 mb-4">{c.s033}</p>
              <Link
                to="/portfolio/smart-claim"
                className="block w-full py-2 px-4 rounded-xl bg-[#fe3e57] text-white text-center font-bold hover:bg-[#d6344b] transition-all shadow-[0_4px_14px_0_rgba(254,62,87,0.39)]"
              >{c.s034}</Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default NewsSmartClaim;
