import { motion } from "framer-motion";
import {
    FaArrowLeft,
    FaBook,
    FaGraduationCap,
    FaMicrochip,
    FaUserTie,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import ExpandableImage from "../../components/ExpandableImage";
import flogo from "../../assets/images/flogo.png";
import graduationImg from "../../assets/images/pf1.png"; // pf1.png
import graduationMomentsImg from "../../assets/images/pf2.png"; // pf2.png
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import ParticlesBackground from "../../components/ParticlesBackground";
import ScrollToTop from "../../components/ScrollToTop";
import en from "../../content/news/graduation.en";
import fr from "../../content/news/graduation.fr";
import { pickContent } from "../../i18n/localeContent";

// Long-form copy lives in src/content/news/graduation.{en,fr}.js. The locale comes from the
// URL and switching language reloads the page, so picking once at module level is safe.
const c = pickContent({ en, fr });

const NewsGraduation = () => {
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
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#ffd700] rounded-full filter blur-[100px] opacity-10 -translate-y-1/2 translate-x-1/2"></div>

              <div className="relative z-10">
                <span className="inline-block py-1 px-3 rounded-full bg-[#ffd700]/20 border border-[#ffd700]/30 text-[#ffd700] text-xs font-bold uppercase tracking-widest mb-4">{c.s003}</span>
                <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-[#ffd700]">{c.s004}</h1>
                <p className="text-lg md:text-xl leading-relaxed text-[#e3f2fd]/90">{c.s005}</p>
              </div>
            </motion.div>

            {/* Content Body */}
            <motion.div variants={fadeInUp}>
              <div className="p-8 rounded-[24px] border border-[rgba(79,195,247,0.2)] bg-[rgba(26,35,126,0.4)] backdrop-blur-[12px] mb-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-[#05608a]/20 rounded-xl text-[#81d4fa]">
                    <FaGraduationCap size={24} />
                  </div>
                  <h2 className="text-2xl font-bold text-white">{c.s006}</h2>
                </div>
                <div className="space-y-4 text-[#e3f2fd]/80 leading-relaxed">
                  <p>{c.s007}{" "}
                    <span className="text-white font-semibold">{c.s008}</span>{c.s009}</p>
                  <p>{c.s010}{" "}
                    <span className="text-white font-semibold">{c.s011}</span>{c.s012}</p>
                  <p>{c.s013}</p>
                </div>
              </div>

              {/* Images Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="rounded-[24px] overflow-hidden border border-[rgba(79,195,247,0.2)] shadow-lg h-80 relative group">
                  <ExpandableImage
                    src={graduationImg}
                    alt={c.s014}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a237e] via-transparent to-transparent opacity-60"></div>
                  <div className="absolute bottom-4 left-4 text-white font-bold text-lg">{c.s015}</div>
                </div>
                <div className="rounded-[24px] overflow-hidden border border-[rgba(79,195,247,0.2)] shadow-lg h-80 relative group">
                  <ExpandableImage
                    src={graduationMomentsImg}
                    alt={c.s016}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a237e] via-transparent to-transparent opacity-60"></div>
                  <div className="absolute bottom-4 left-4 text-white font-bold text-lg">{c.s017}</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column (Sticky Sidebar) */}
          <div className="lg:col-span-4 space-y-8">
            <motion.div
              variants={fadeInUp}
              className="sticky top-32 p-8 rounded-[24px] border border-[rgba(79,195,247,0.2)] bg-[rgba(26,35,126,0.8)] backdrop-blur-[20px] shadow-xl"
            >
              <h3 className="text-xl font-bold text-white mb-6 border-l-4 border-[#05608a] pl-4">{c.s018}</h3>
              <ul className="space-y-6">
                <li className="flex flex-col border-b border-white/5 pb-4 last:border-0 last:pb-0">
                  <div className="flex items-center gap-2 mb-1">
                    <FaGraduationCap className="text-[#81d4fa]" />
                    <span className="text-[#81d4fa] text-xs uppercase tracking-wider">{c.s019}</span>
                  </div>
                  <span className="text-white font-medium pl-6">{c.s020}</span>
                </li>
                <li className="flex flex-col border-b border-white/5 pb-4 last:border-0 last:pb-0">
                  <div className="flex items-center gap-2 mb-1">
                    <FaBook className="text-[#81d4fa]" />
                    <span className="text-[#81d4fa] text-xs uppercase tracking-wider">{c.s021}</span>
                  </div>
                  <span className="text-white font-medium pl-6">{c.s022}</span>
                </li>
                <li className="flex flex-col border-b border-white/5 pb-4 last:border-0 last:pb-0">
                  <div className="flex items-center gap-2 mb-1">
                    <FaMicrochip className="text-[#81d4fa]" />
                    <span className="text-[#81d4fa] text-xs uppercase tracking-wider">{c.s023}</span>
                  </div>
                  <span className="text-white font-medium pl-6">{c.s024}</span>
                </li>
                <li className="flex flex-col border-b border-white/5 pb-4 last:border-0 last:pb-0">
                  <div className="flex items-center gap-2 mb-1">
                    <FaUserTie className="text-[#81d4fa]" />
                    <span className="text-[#81d4fa] text-xs uppercase tracking-wider">{c.s025}</span>
                  </div>
                  <span className="text-white font-medium pl-6">{c.s008}</span>
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

export default NewsGraduation;
