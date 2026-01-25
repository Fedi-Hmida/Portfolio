import { motion } from "framer-motion";
import {
    FaArrowLeft,
    FaAward,
    FaBrain,
    FaChartBar,
    FaLinkedin,
    FaUserTie,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import flogo from "../../assets/images/flogo.png";
import nivineImg from "../../assets/images/new9/nivine.png";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import ParticlesBackground from "../../components/ParticlesBackground";
import ScrollToTop from "../../components/ScrollToTop";

const NewsDataScience = () => {
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
              <FaArrowLeft /> Back to News
            </Link>
          </div>
          <img src={flogo} alt="Logo" className="h-8 w-auto opacity-80" />
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
                <span className="inline-block py-1 px-3 rounded-full bg-[#05608a]/30 border border-[#81d4fa]/30 text-[#81d4fa] text-xs font-bold uppercase tracking-widest mb-4">
                  Recognition
                </span>
                <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-[#81d4fa]">
                  Data Science Excellence Recognition
                </h1>
                <p className="text-lg md:text-xl leading-relaxed text-[#e3f2fd]/90">
                  Proud to receive a professional recommendation letter from Dr.
                  Nivine ATTOUE, Data Science expert at ADDINN Group.
                </p>
              </motion.div>

              <div className="mt-8 rounded-xl overflow-hidden shadow-lg border border-[rgba(79,195,247,0.2)]">
                <img
                  src={nivineImg}
                  alt="Recommendation Letter"
                  className="w-full h-auto object-cover opacity-90 hover:opacity-100 transition-opacity"
                />
              </div>
            </motion.div>

            {/* Section 2: Recognition Details */}
            <motion.div variants={fadeInUp}>
              <h2 className="text-2xl font-bold text-white mb-6 pl-4 border-l-4 border-[#05608a]">
                Achievement Highlights
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Card 1 */}
                <motion.div
                  whileHover={{ y: -8 }}
                  className="p-8 rounded-[24px] border border-[rgba(79,195,247,0.2)] bg-[rgba(20,27,100,0.7)] backdrop-blur-[12px] flex flex-col items-center text-center transition-all hover:shadow-[0_0_20px_rgba(5,96,138,0.4)]"
                >
                  <div className="w-16 h-16 rounded-full bg-[#05608a]/20 flex items-center justify-center mb-4 text-[#81d4fa]">
                    <FaBrain className="text-3xl" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    AI & Machine Learning
                  </h3>
                  <p className="text-sm text-[#e3f2fd]/70">
                    Dedication to exploring and applying advanced AI concepts.
                  </p>
                </motion.div>

                {/* Card 2 */}
                <motion.div
                  whileHover={{ y: -8 }}
                  className="p-8 rounded-[24px] border border-[rgba(79,195,247,0.2)] bg-[rgba(20,27,100,0.7)] backdrop-blur-[12px] flex flex-col items-center text-center transition-all hover:shadow-[0_0_20px_rgba(5,96,138,0.4)]"
                >
                  <div className="w-16 h-16 rounded-full bg-[#05608a]/20 flex items-center justify-center mb-4 text-[#81d4fa]">
                    <FaChartBar className="text-3xl" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    Data Exploration
                  </h3>
                  <p className="text-sm text-[#e3f2fd]/70">
                    Proven ability to analyze complex data and derive insights.
                  </p>
                </motion.div>
              </div>
            </motion.div>

            {/* Section 3: Quote / Content */}
            <motion.div
              variants={fadeInUp}
              className="p-8 rounded-[24px] border border-[rgba(79,195,247,0.2)] bg-[rgba(26,35,126,0.6)] backdrop-blur-[16px]"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="mt-1 p-3 rounded-full bg-[#05608a]/20 text-[#81d4fa]">
                  <FaUserTie className="text-2xl" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">
                    Supervisor's Feedback
                  </h2>
                  <p className="text-sm text-[#81d4fa]">
                    Dr. Nivine ATTOUE - Data Science Expert
                  </p>
                </div>
              </div>

              <blockquote className="border-l-4 border-[#05608a] pl-6 italic text-[#e3f2fd]/90 text-lg mb-6">
                "Mr. Fedi Hmida proved to be a Serious, Motivated and very
                Autonomous student during his internship."
              </blockquote>

              <p className="text-[#e3f2fd]/80 leading-relaxed mb-4">
                Honored to share that I have received a professional
                recommendation letter highlighting my contributions to
                Artificial Intelligence and Machine Learning projects during my
                internship at ADDINN Group.
              </p>

              <p className="text-[#e3f2fd]/80 leading-relaxed">
                During this period, I had the privilege to work on advanced Data
                Science projects, applying theoretical concepts to real-world
                problems and contributing to the team's success.
              </p>
            </motion.div>
          </div>

          {/* Right Column (Sticky Sidebar) */}
          <div className="lg:col-span-4 space-y-8">
            <motion.div
              variants={fadeInUp}
              className="sticky top-32 p-8 rounded-[24px] border border-[rgba(79,195,247,0.2)] bg-[rgba(26,35,126,0.8)] backdrop-blur-[20px] shadow-xl"
            >
              <h3 className="text-xl font-bold text-white mb-6 border-l-4 border-[#05608a] pl-4">
                Details
              </h3>
              <ul className="space-y-6">
                <li className="flex flex-col border-b border-white/5 pb-4 last:border-0 last:pb-0">
                  <span className="text-[#81d4fa] text-xs uppercase tracking-wider mb-1">
                    Supervisor
                  </span>
                  <span className="text-white font-medium flex items-center gap-2">
                    Dr. Nivine ATTOUE
                    <a
                      href="https://www.linkedin.com/in/nivine-attoue/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#0e76a8] hover:text-white transition-colors"
                    >
                      <FaLinkedin />
                    </a>
                  </span>
                </li>
                <li className="flex flex-col border-b border-white/5 pb-4 last:border-0 last:pb-0">
                  <span className="text-[#81d4fa] text-xs uppercase tracking-wider mb-1">
                    Type
                  </span>
                  <span className="text-white font-medium flex items-center gap-2">
                    <FaAward className="text-[#fe3e57]" /> Recommendation
                  </span>
                </li>
                <li className="flex flex-col border-b border-white/5 pb-4 last:border-0 last:pb-0">
                  <span className="text-[#81d4fa] text-xs uppercase tracking-wider mb-1">
                    Date
                  </span>
                  <span className="text-white font-medium">19 Sept, 2025</span>
                </li>
                <li className="flex flex-col border-b border-white/5 pb-4 last:border-0 last:pb-0">
                  <span className="text-[#81d4fa] text-xs uppercase tracking-wider mb-1">
                    Context
                  </span>
                  <span className="text-white font-medium">
                    ADDINN Group Internship
                  </span>
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

export default NewsDataScience;
