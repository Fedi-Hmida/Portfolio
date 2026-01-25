import { motion } from "framer-motion";
import { useRef, useState } from "react";
import {
    FaArrowLeft,
    FaArrowRight,
    FaBrain,
    FaDatabase,
    FaEye,
    FaFacebookF,
    FaGithub,
    FaMobileAlt,
    FaPlay,
    FaPython,
} from "react-icons/fa";
import {
    SiDart,
    SiFastapi,
    SiFlutter,
    SiOpencv,
    SiPytorch,
} from "react-icons/si";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import ParticlesBackground from "../../components/ParticlesBackground";

// Assets
import smartClaimImg from "../../assets/images/Portfolio/New Logo SmartClaim.png";
import dataVideo from "../../assets/videos/Smart_claim/Data Demo.mp4";
import demoVideo from "../../assets/videos/Smart_claim/Demo_Mobile.mp4";

const SmartClaimDetails = () => {
  const [playingVideo, setPlayingVideo] = useState(null);
  const demoVideoRef = useRef(null);
  const dataVideoRef = useRef(null);

  const handlePlay = (videoName, videoRef) => {
    if (videoRef.current) {
      if (playingVideo === videoName) {
        videoRef.current.pause();
        setPlayingVideo(null);
      } else {
        if (playingVideo === "demo" && demoVideoRef.current)
          demoVideoRef.current.pause();
        if (playingVideo === "data" && dataVideoRef.current)
          dataVideoRef.current.pause();

        videoRef.current.play();
        setPlayingVideo(videoName);
      }
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div className="relative min-h-screen bg-[#070640]">
      <ParticlesBackground />
      <Navbar />

      {/* --- HERO SECTION --- */}
      <section className="relative h-[50vh] flex items-center justify-center bg-[#0b0d26] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b0d26]/80 to-[#070640] z-0"></div>
        <div className="relative z-10 text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-gray-400 text-sm md:text-base mb-4 uppercase tracking-widest font-medium">
              <Link to="/" className="hover:text-[#fe3e57] transition-colors">
                Home
              </Link>
              <span className="mx-2">/</span>
              <Link
                to="/portfolio"
                className="hover:text-[#fe3e57] transition-colors"
              >
                Project
              </Link>
              <span className="mx-2">/</span>
              <span className="text-[#fe3e57]">SmartClaim</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-2">
              SmartClaim Project
            </h1>
          </motion.div>
        </div>
      </section>

      {/* --- MAIN CONTENT --- */}
      <section className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-3 gap-12"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Left Column: Project Image */}
            <motion.div className="lg:col-span-2" variants={fadeInUp}>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 group flex justify-center bg-[#0c0b44]/50 p-8">
                <img
                  src={smartClaimImg}
                  alt="SmartClaim Project"
                  className="w-full max-w-[400px] h-auto object-contain rounded-xl shadow-lg"
                />
              </div>
            </motion.div>

            {/* Right Column: Project Info */}
            <motion.div
              className="lg:col-span-1"
              variants={fadeInUp}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
            >
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 sticky top-24 shadow-xl">
                <h3 className="text-2xl font-bold text-white mb-6 border-l-4 border-[#fe3e57] pl-4">
                  Project Info
                </h3>

                <ul className="space-y-6">
                  <li className="flex flex-col">
                    <span className="text-gray-400 text-sm uppercase tracking-wider mb-1">
                      Project Name
                    </span>
                    <span className="text-white font-medium text-lg">
                      SmartClaim
                    </span>
                  </li>
                  <li className="flex flex-col">
                    <span className="text-gray-400 text-sm uppercase tracking-wider mb-1">
                      Category
                    </span>
                    <span className="text-white font-medium text-lg">
                      Mobile App · Computer Vision
                    </span>
                  </li>
                  <li className="flex flex-col">
                    <span className="text-gray-400 text-sm uppercase tracking-wider mb-1">
                      Technologies Used
                    </span>
                    <div className="text-white font-medium text-sm space-y-1">
                      <p className="flex items-center gap-2">
                        <SiFlutter className="text-[#fe3e57]" /> Flutter ·{" "}
                        <SiDart className="text-[#fe3e57]" /> Dart
                      </p>
                      <p className="flex items-center gap-2">
                        <SiFastapi className="text-[#fe3e57]" /> FastAPI
                      </p>
                      <p className="flex items-center gap-2">
                        <FaBrain className="text-[#fe3e57]" /> YOLO (v8s)
                      </p>
                      <p className="flex items-center gap-2">
                        <SiOpencv className="text-[#fe3e57]" /> OpenCV ·{" "}
                        <SiPytorch className="text-[#fe3e57]" /> PyTorch
                      </p>
                    </div>
                  </li>
                  <li className="flex flex-col">
                    <span className="text-gray-400 text-sm uppercase tracking-wider mb-1">
                      Project Duration
                    </span>
                    <span className="text-white font-medium text-lg">
                      2 Months (Internship)
                    </span>
                  </li>
                </ul>

                <div className="mt-8 pt-6 border-t border-white/10">
                  <span className="text-gray-400 text-sm uppercase tracking-wider block mb-4">
                    Share
                  </span>
                  <div className="flex gap-4">
                    <button className="w-10 h-10 rounded-full bg-[#0b0d26] flex items-center justify-center text-white hover:bg-[#fe3e57] transition-colors duration-300">
                      <FaFacebookF />
                    </button>
                    <a
                      href="https://github.com/Fedi-Hmida"
                      target="_blank"
                      rel="noreferrer"
                      className="w-10 h-10 rounded-full bg-[#0b0d26] flex items-center justify-center text-white hover:bg-[#fe3e57] transition-colors duration-300"
                    >
                      <FaGithub />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Detailed Description */}
          <motion.div
            className="mt-20 grid grid-cols-1 lg:grid-cols-12 gap-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <div className="lg:col-span-8">
              <motion.h3
                variants={fadeInUp}
                className="text-3xl font-bold text-white mb-6"
              >
                Project Overview
              </motion.h3>
              <motion.p
                variants={fadeInUp}
                className="text-[#d0d0d0] leading-relaxed text-lg mb-8"
              >
                Smart Claim is an AI-powered mobile application designed to
                streamline the car insurance claims process. It allows users to
                take photos of vehicle damage, which are then analyzed using
                Computer Vision (YOLO & OCR) to estimate repair costs
                automatically. By leveraging cutting-edge machine learning
                models, the application significantly reduces the time required
                for claim processing, providing a seamless experience for both
                insurance companies and policyholders.
              </motion.p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <motion.div
                  variants={fadeInUp}
                  className="bg-[#0b0d26] p-8 rounded-xl border-l-4 border-[#fe3e57]"
                >
                  <h4 className="text-xl font-bold text-white mb-4">
                    The Challenge
                  </h4>
                  <p className="text-[#d0d0d0]">
                    Traditional car insurance claims are slow, manual, and
                    error-prone. Users often face long wait times for adjusters
                    to inspect vehicles, leading to frustration and delayed
                    payouts. Insurance companies struggle with high operational
                    costs and inconsistent damage assessments.
                  </p>
                </motion.div>
                <motion.div
                  variants={fadeInUp}
                  className="bg-[#0b0d26] p-8 rounded-xl border-l-4 border-green-500"
                >
                  <h4 className="text-xl font-bold text-white mb-4">
                    The Solution
                  </h4>
                  <p className="text-[#d0d0d0]">
                    We developed an automated solution where users simply snap
                    photos of the damage. Our AI engine instantly analyzes the
                    images to detect damage types and severity, extracts
                    relevant data from documents using OCR, and generates an
                    accurate repair cost estimate in real-time.
                  </p>
                </motion.div>
              </div>

              <motion.div variants={fadeInUp}>
                <h3 className="text-2xl font-bold text-white mb-6">
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-4">
                  {[
                    {
                      icon: FaMobileAlt,
                      name: "Flutter",
                      color: "text-blue-400",
                    },
                    {
                      icon: FaPython,
                      name: "Python",
                      color: "text-yellow-300",
                    },
                    {
                      icon: FaDatabase,
                      name: "MongoDB",
                      color: "text-green-500",
                    },
                    { icon: FaEye, name: "YOLO v8", color: "text-red-500" },
                    { icon: FaBrain, name: "OCR", color: "text-purple-400" },
                  ].map((tech, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 bg-white/5 px-6 py-3 rounded-full border border-white/10 hover:border-[#fe3e57]/50 transition-colors"
                    >
                      <tech.icon className={`text-xl ${tech.color}`} />
                      <span className="text-white font-medium">
                        {tech.name}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Video Section */}
          <div className="mt-20">
            <h3 className="text-3xl font-bold text-white mb-10 text-center">
              Key Features in Action
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Video 1 */}
              <motion.div
                className="bg-[#0b0d26] p-6 rounded-2xl border border-white/5"
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <h4 className="text-xl font-semibold text-white mb-4">
                  Mobile App Workflow (User)
                </h4>
                <div
                  className="relative rounded-xl overflow-hidden shadow-lg border border-white/10 group cursor-pointer aspect-video"
                  onClick={() => handlePlay("demo", demoVideoRef)}
                >
                  <video
                    ref={demoVideoRef}
                    src={demoVideo}
                    className="w-full h-full object-cover"
                    onEnded={() => setPlayingVideo(null)}
                    onPause={() =>
                      playingVideo === "demo" && setPlayingVideo(null)
                    }
                    controls={playingVideo === "demo"}
                    playsInline
                  />
                  {playingVideo !== "demo" && (
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity duration-300 group-hover:bg-black/20">
                      <div className="w-16 h-16 bg-[#fe3e57] rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                        <FaPlay className="text-white text-xl ml-1" />
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>

              {/* Video 2 */}
              <motion.div
                className="bg-[#0b0d26] p-6 rounded-2xl border border-white/5"
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <h4 className="text-xl font-semibold text-white mb-4">
                  Damage Detection (AI)
                </h4>
                <div
                  className="relative rounded-xl overflow-hidden shadow-lg border border-white/10 group cursor-pointer aspect-video"
                  onClick={() => handlePlay("data", dataVideoRef)}
                >
                  <video
                    ref={dataVideoRef}
                    src={dataVideo}
                    className="w-full h-full object-cover"
                    onEnded={() => setPlayingVideo(null)}
                    onPause={() =>
                      playingVideo === "data" && setPlayingVideo(null)
                    }
                    controls={playingVideo === "data"}
                    playsInline
                  />
                  {playingVideo !== "data" && (
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity duration-300 group-hover:bg-black/20">
                      <div className="w-16 h-16 bg-[#fe3e57] rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                        <FaPlay className="text-white text-xl ml-1" />
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            </div>
          </div>

          {/* Navigation */}
          <motion.div
            className="mt-24 pt-10 border-t border-white/10 flex flex-col md:flex-row justification-between items-center gap-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link
              to="/portfolio"
              className="group flex items-center gap-3 text-gray-400 hover:text-white transition-colors"
            >
              <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-[#fe3e57] group-hover:border-[#fe3e57] transition-all">
                <FaArrowLeft />
              </div>
              <div>
                <span className="block text-xs uppercase tracking-wider text-gray-500 group-hover:text-gray-300">
                  Previous Project
                </span>
                <span className="font-semibold text-lg">SolarFlow</span>
              </div>
            </Link>

            <Link
              to="/portfolio"
              className="group flex items-center gap-3 text-right text-gray-400 hover:text-white transition-colors"
            >
              <div>
                <span className="block text-xs uppercase tracking-wider text-gray-500 group-hover:text-gray-300">
                  Next Project
                </span>
                <span className="font-semibold text-lg">Onboardify</span>
              </div>
              <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-[#fe3e57] group-hover:border-[#fe3e57] transition-all">
                <FaArrowRight />
              </div>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SmartClaimDetails;
