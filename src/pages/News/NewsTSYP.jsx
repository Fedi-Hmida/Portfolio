import { motion } from "framer-motion";
import {
    FaArrowLeft,
    FaCalendarCheck,
    FaHandshake,
    FaLightbulb,
    FaUsers,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import fediImg from "../../assets/images/Fedi.jpg";
import flogo from "../../assets/images/flogo.png";
import tsImg from "../../assets/images/ts.png";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import ParticlesBackground from "../../components/ParticlesBackground";
import ScrollToTop from "../../components/ScrollToTop";

const NewsTSYP = () => {
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
              <div className="relative z-10">
                <span className="inline-block py-1 px-3 rounded-full bg-[#05608a]/30 border border-[#81d4fa]/30 text-[#81d4fa] text-xs font-bold uppercase tracking-widest mb-4">
                  Congress
                </span>
                <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-[#81d4fa]">
                  IEEE TSYP Congress Experience
                </h1>
                <p className="text-lg md:text-xl leading-relaxed text-[#e3f2fd]/90">
                  I am excited to share my experience participating in the 12th
                  edition of the IEEE Tunisian Student and Young Professional
                  TSYP Congress (TSYP12).
                </p>
              </div>
            </motion.div>

            {/* Content Body */}
            <motion.div variants={fadeInUp}>
              <div className="p-8 rounded-[24px] border border-[rgba(79,195,247,0.2)] bg-[rgba(26,35,126,0.4)] backdrop-blur-[12px] mb-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-[#05608a]/20 rounded-xl text-[#81d4fa]">
                    <FaCalendarCheck size={24} />
                  </div>
                  <h2 className="text-2xl font-bold text-white">
                    Event Overview
                  </h2>
                </div>
                <p className="text-[#e3f2fd]/80 leading-relaxed mb-6">
                  Being part of this incredible event allowed me to engage with
                  passionate IEEE members, exchange valuable ideas, and delve
                  into inspiring discussions about advancing innovation,
                  diversity, and inclusion in engineering.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                  <div className="p-4 rounded-xl bg-[#1a237e]/40 border border-[#81d4fa]/10 flex flex-col items-center text-center">
                    <FaUsers className="text-[#81d4fa] text-2xl mb-3" />
                    <span className="text-sm font-semibold text-white">
                      Networking
                    </span>
                  </div>
                  <div className="p-4 rounded-xl bg-[#1a237e]/40 border border-[#81d4fa]/10 flex flex-col items-center text-center">
                    <FaLightbulb className="text-[#81d4fa] text-2xl mb-3" />
                    <span className="text-sm font-semibold text-white">
                      Innovation
                    </span>
                  </div>
                  <div className="p-4 rounded-xl bg-[#1a237e]/40 border border-[#81d4fa]/10 flex flex-col items-center text-center">
                    <FaHandshake className="text-[#81d4fa] text-2xl mb-3" />
                    <span className="text-sm font-semibold text-white">
                      Diversity
                    </span>
                  </div>
                </div>
              </div>

              {/* Images Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="rounded-[24px] overflow-hidden border border-[rgba(79,195,247,0.2)] shadow-lg h-64 md:h-80">
                  <img
                    src={tsImg}
                    alt="IEEE TSYP Banner"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="rounded-[24px] overflow-hidden border border-[rgba(79,195,247,0.2)] shadow-lg h-64 md:h-80">
                  <img
                    src={fediImg}
                    alt="Fedi at TSYP"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
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
              <h3 className="text-xl font-bold text-white mb-6 border-l-4 border-[#05608a] pl-4">
                Event Details
              </h3>
              <ul className="space-y-6">
                <li className="flex flex-col border-b border-white/5 pb-4 last:border-0 last:pb-0">
                  <span className="text-[#81d4fa] text-xs uppercase tracking-wider mb-1">
                    Event
                  </span>
                  <span className="text-white font-medium">
                    IEEE TSYP Congress
                  </span>
                </li>
                <li className="flex flex-col border-b border-white/5 pb-4 last:border-0 last:pb-0">
                  <span className="text-[#81d4fa] text-xs uppercase tracking-wider mb-1">
                    Date
                  </span>
                  <span className="text-white font-medium">Dec 24, 2024</span>
                </li>
                <li className="flex flex-col border-b border-white/5 pb-4 last:border-0 last:pb-0">
                  <span className="text-[#81d4fa] text-xs uppercase tracking-wider mb-1">
                    Edition
                  </span>
                  <span className="text-white font-medium">12th (TSYP12)</span>
                </li>
                <li className="flex flex-col border-b border-white/5 pb-4 last:border-0 last:pb-0">
                  <span className="text-[#81d4fa] text-xs uppercase tracking-wider mb-1">
                    Location
                  </span>
                  <span className="text-white font-medium">Tunisia</span>
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

export default NewsTSYP;
