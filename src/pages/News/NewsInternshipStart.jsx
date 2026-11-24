import { motion } from "framer-motion";
import {
    FaArrowLeft,
    FaBuilding,
    FaCalendarAlt,
    FaChartLine,
    FaMobileAlt,
    FaUsers,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import ExpandableImage from "../../components/ExpandableImage";
import addinnImg from "../../assets/images/addinn/ADDINN.png";
import flogo from "../../assets/images/flogo.png";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import ParticlesBackground from "../../components/ParticlesBackground";
import ScrollToTop from "../../components/ScrollToTop";
import en from "../../content/news/internshipStart.en";
import fr from "../../content/news/internshipStart.fr";
import { pickContent } from "../../i18n/localeContent";

// Long-form copy lives in src/content/news/internshipStart.{en,fr}.js. The locale comes from the
// URL and switching language reloads the page, so picking once at module level is safe.
const c = pickContent({ en, fr });

const NewsInternshipStart = () => {
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
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#05608a] rounded-full filter blur-[100px] opacity-20 -translate-y-1/2 translate-x-1/2"></div>

              <motion.div {...floatAnimation} className="relative z-10">
                <span className="inline-block py-1 px-3 rounded-full bg-[#05608a]/30 border border-[#81d4fa]/30 text-[#81d4fa] text-xs font-bold uppercase tracking-widest mb-4">{c.s003}</span>
                <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-[#81d4fa]">{c.s004}</h1>
                <p className="text-lg md:text-xl leading-relaxed text-[#e3f2fd]/90">{c.s005}</p>
              </motion.div>

              <div className="mt-8 rounded-xl overflow-hidden shadow-lg border border-[rgba(79,195,247,0.2)]">
                <ExpandableImage
                  src={addinnImg}
                  alt={c.s004}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-auto object-cover opacity-90 hover:opacity-100 transition-opacity"
                />
              </div>
            </motion.div>

            {/* Section 2: Focus Areas */}
            <motion.div variants={fadeInUp}>
              <h2 className="text-2xl font-bold text-white mb-6 pl-4 border-l-4 border-[#05608a]">{c.s006}</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Card 1 */}
                <motion.div
                  whileHover={{ y: -8 }}
                  className="p-6 rounded-[24px] border border-[rgba(79,195,247,0.2)] bg-[rgba(20,27,100,0.7)] backdrop-blur-[12px] flex flex-col items-center text-center transition-all hover:shadow-[0_0_20px_rgba(5,96,138,0.4)]"
                >
                  <div className="w-12 h-12 rounded-full bg-[#05608a]/20 flex items-center justify-center mb-4 text-[#81d4fa]">
                    <FaChartLine className="text-2xl" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{c.s007}</h3>
                  <p className="text-xs text-[#e3f2fd]/70">{c.s008}</p>
                </motion.div>

                {/* Card 2 */}
                <motion.div
                  whileHover={{ y: -8 }}
                  className="p-6 rounded-[24px] border border-[rgba(79,195,247,0.2)] bg-[rgba(20,27,100,0.7)] backdrop-blur-[12px] flex flex-col items-center text-center transition-all hover:shadow-[0_0_20px_rgba(5,96,138,0.4)]"
                >
                  <div className="w-12 h-12 rounded-full bg-[#05608a]/20 flex items-center justify-center mb-4 text-[#81d4fa]">
                    <FaMobileAlt className="text-2xl" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{c.s009}</h3>
                  <p className="text-xs text-[#e3f2fd]/70">{c.s010}</p>
                </motion.div>

                {/* Card 3 */}
                <motion.div
                  whileHover={{ y: -8 }}
                  className="p-6 rounded-[24px] border border-[rgba(79,195,247,0.2)] bg-[rgba(20,27,100,0.7)] backdrop-blur-[12px] flex flex-col items-center text-center transition-all hover:shadow-[0_0_20px_rgba(5,96,138,0.4)]"
                >
                  <div className="w-12 h-12 rounded-full bg-[#05608a]/20 flex items-center justify-center mb-4 text-[#81d4fa]">
                    <FaUsers className="text-2xl" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{c.s011}</h3>
                  <p className="text-xs text-[#e3f2fd]/70">{c.s012}</p>
                </motion.div>
              </div>
            </motion.div>

            {/* Section 3: Reflection */}
            <motion.div
              variants={fadeInUp}
              className="p-8 rounded-[24px] border border-[rgba(79,195,247,0.2)] bg-[rgba(26,35,126,0.6)] backdrop-blur-[16px]"
            >
              <h2 className="text-2xl font-bold text-white mb-6 border-b border-[#05608a]/30 pb-4 inline-block">{c.s013}</h2>

              <p className="text-[#e3f2fd]/80 leading-relaxed mb-4">{c.s014}</p>

              <p className="text-[#e3f2fd]/80 leading-relaxed mb-4">{c.s015}</p>
            </motion.div>
          </div>

          {/* Right Column (Sticky Sidebar) */}
          <div className="lg:col-span-4 space-y-8">
            <motion.div
              variants={fadeInUp}
              className="sticky top-32 p-8 rounded-[24px] border border-[rgba(79,195,247,0.2)] bg-[rgba(26,35,126,0.8)] backdrop-blur-[20px] shadow-xl"
            >
              <h3 className="text-xl font-bold text-white mb-6 border-l-4 border-[#05608a] pl-4">{c.s016}</h3>
              <ul className="space-y-6">
                <li className="flex flex-col border-b border-white/5 pb-4 last:border-0 last:pb-0">
                  <span className="text-[#81d4fa] text-xs uppercase tracking-wider mb-1">{c.s017}</span>
                  <span className="text-white font-medium flex items-center gap-2">
                    <FaBuilding className="text-[#81d4fa]" />{" "}{c.s018}</span>
                </li>
                <li className="flex flex-col border-b border-white/5 pb-4 last:border-0 last:pb-0">
                  <span className="text-[#81d4fa] text-xs uppercase tracking-wider mb-1">{c.s019}</span>
                  <span className="text-white font-medium flex items-center gap-2">
                    <FaCalendarAlt className="text-[#81d4fa]" />{" "}{c.s020}</span>
                </li>
                <li className="flex flex-col border-b border-white/5 pb-4 last:border-0 last:pb-0">
                  <span className="text-[#81d4fa] text-xs uppercase tracking-wider mb-1">{c.s021}</span>
                  <span className="text-white font-medium">{c.s022}</span>
                </li>
                <li className="flex flex-col border-b border-white/5 pb-4 last:border-0 last:pb-0">
                  <span className="text-[#81d4fa] text-xs uppercase tracking-wider mb-1">{c.s023}</span>
                  <span className="text-white font-medium">{c.s024}</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
};

export default NewsInternshipStart;
