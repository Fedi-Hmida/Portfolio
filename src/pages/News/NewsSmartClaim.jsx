import { motion } from "framer-motion";
import {
    FaArrowLeft,
    FaLinkedin,
    FaMobileAlt,
    FaUserTie,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import flogo from "../../assets/images/flogo.png";
import tesaImg from "../../assets/images/new10/tesa.jpg";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import ParticlesBackground from "../../components/ParticlesBackground";
import ScrollToTop from "../../components/ScrollToTop";

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
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#fe3e57] rounded-full filter blur-[100px] opacity-20 -translate-y-1/2 translate-x-1/2"></div>

              <motion.div {...floatAnimation} className="relative z-10">
                <span className="inline-block py-1 px-3 rounded-full bg-[#fe3e57]/30 border border-[#fe3e57]/30 text-[#fe3e57] text-xs font-bold uppercase tracking-widest mb-4">
                  Project Launch
                </span>
                <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-[#fe3e57]">
                  SmartClaim – Digital Claims Assistant Platform
                </h1>
                <p className="text-lg md:text-xl leading-relaxed text-[#e3f2fd]/90">
                  Thrilled to reveal the highlight of my Engineering internship
                  at ADDINN Group. A transformative solution featuring
                  AI-powered damage detection and cross-platform mobile
                  development.
                </p>
              </motion.div>
            </motion.div>

            {/* Content Body */}
            <motion.div
              variants={fadeInUp}
              className="p-8 rounded-[24px] border border-[rgba(79,195,247,0.2)] bg-[rgba(26,35,126,0.6)] backdrop-blur-[16px] shadow-lg text-[#e3f2fd]/80 space-y-6 text-lg leading-relaxed"
            >
              <p>
                As part of my summer internship at{" "}
                <strong className="text-white">ADDINN Group</strong>, I had the
                opportunity to develop{" "}
                <strong className="text-[#fe3e57]">SmartClaim</strong>, a
                digital solution designed to revolutionize insurance claim
                processing.
              </p>

              <figure className="my-8 rounded-xl overflow-hidden shadow-2xl border border-[rgba(79,195,247,0.3)]">
                <img
                  src={tesaImg}
                  alt="SmartClaim App Interface"
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                />
                <figcaption className="text-center text-sm py-2 bg-black/40 text-[#81d4fa]">
                  SmartClaim Mobile Application Interface
                </figcaption>
              </figure>

              <h3 className="text-2xl font-bold text-white mt-8 mb-4">
                🚀 Key Features
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong className="text-[#81d4fa]">
                    Cross-Platform Mobile App:
                  </strong>{" "}
                  Built with Flutter for seamless experience on Android & iOS.
                </li>
                <li>
                  <strong className="text-[#81d4fa]">
                    AI Damage Detection:
                  </strong>{" "}
                  Integrated YOLOv8 model achieving 92.9% precision for
                  automated car damage assessment.
                </li>
                <li>
                  <strong className="text-[#81d4fa]">
                    Real-time Processing:
                  </strong>{" "}
                  Fast API backend using FastAPI and Docker containerization.
                </li>
                <li>
                  <strong className="text-[#81d4fa]">Efficiency Boost:</strong>{" "}
                  Reduces claim processing time from days to minutes.
                </li>
              </ul>

              <p>
                This project not only honed my technical skills in mobile
                development and computer vision but also gave me valuable
                insights into the InsurTech industry.
              </p>

              <div className="mt-8 pt-6 border-t border-[rgba(79,195,247,0.1)]">
                <p className="italic">
                  "SmartClaim represents a significant step forward in
                  automating traditional insurance workflows, making life easier
                  for both insurers and policyholders."
                </p>
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
              <h3 className="text-xl font-bold text-white mb-1">Fedi Hmida</h3>
              <p className="text-[#81d4fa] text-sm mb-4">
                Software Engineering Student
              </p>
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
                <h4 className="text-[#81d4fa] text-sm font-bold uppercase tracking-wider mb-2">
                  Date
                </h4>
                <p className="text-white">November 28, 2025</p>
              </div>
              <div>
                <h4 className="text-[#81d4fa] text-sm font-bold uppercase tracking-wider mb-2">
                  Topic
                </h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full bg-[#fe3e57]/20 border border-[#fe3e57]/30 text-[#fe3e57] text-xs">
                    InsurTech
                  </span>
                  <span className="px-3 py-1 rounded-full bg-[#fe3e57]/20 border border-[#fe3e57]/30 text-[#fe3e57] text-xs">
                    AI
                  </span>
                  <span className="px-3 py-1 rounded-full bg-[#fe3e57]/20 border border-[#fe3e57]/30 text-[#fe3e57] text-xs">
                    Flutter
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Related Project Link */}
            <motion.div
              variants={fadeInUp}
              className="p-6 rounded-[24px] border border-[rgba(79,195,247,0.2)] bg-gradient-to-br from-[rgba(254,62,87,0.1)] to-[rgba(254,62,87,0.05)] backdrop-blur-[16px] shadow-lg"
            >
              <h4 className="text-[#fe3e57] font-bold mb-3 flex items-center gap-2">
                <FaMobileAlt /> Related Project
              </h4>
              <p className="text-sm text-[#e3f2fd]/80 mb-4">
                Check out the full case study of SmartClaim in my portfolio.
              </p>
              <Link
                to="/portfolio/smart-claim"
                className="block w-full py-2 px-4 rounded-xl bg-[#fe3e57] text-white text-center font-bold hover:bg-[#d6344b] transition-all shadow-[0_4px_14px_0_rgba(254,62,87,0.39)]"
              >
                View Project
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default NewsSmartClaim;
