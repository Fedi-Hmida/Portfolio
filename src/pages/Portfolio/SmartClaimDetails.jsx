import { motion } from "framer-motion";
import { useRef, useState } from "react";
import {
    FaArrowLeft,
    FaArrowRight,
    FaBrain,
    FaDatabase,
    FaEye,
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

  const caseStudyMetrics = [
    { label: "Precision", value: "92.9%", detail: "YOLOv8 damage detection" },
    { label: "Timeline", value: "2 months", detail: "Internship project" },
    { label: "Stack", value: "Flutter", detail: "Mobile app with FastAPI backend" },
  ];

  const responsibilities = [
    "Developed the SmartClaim Flutter mobile application for claim reporting.",
    "Integrated YOLOv8 for real-time vehicle damage detection.",
    "Built the FastAPI backend and containerized the solution with Docker.",
    "Connected the mobile workflow with AI inference and claim data handling.",
  ];

  const architectureSteps = [
    {
      title: "Mobile capture",
      text: "Flutter guides the user through claim reporting and vehicle damage photo capture.",
    },
    {
      title: "Backend inference",
      text: "FastAPI receives claim data and routes images through the computer vision pipeline.",
    },
    {
      title: "Computer vision",
      text: "YOLOv8, OpenCV, and PyTorch support damage detection and image processing.",
    },
    {
      title: "Claim support data",
      text: "OCR and MongoDB support document/data handling already shown in the project.",
    },
  ];

  const tradeoffs = [
    "Balancing mobile usability with the extra steps needed for accurate image capture.",
    "Keeping AI inference understandable to non-technical users inside the claim flow.",
    "Connecting Flutter, FastAPI, Docker, and computer vision parts into one usable product demo.",
  ];

  return (
    <div className="relative min-h-screen bg-[#070640]">
      <ParticlesBackground />
      <Navbar />

      {/* --- HERO SECTION --- */}
      <section className="relative flex min-h-[560px] items-center justify-center overflow-hidden bg-[#0b0d26] pt-32 pb-16">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b0d26]/80 to-[#070640] z-0"></div>
        <div className="relative z-10 mx-auto max-w-5xl px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-4 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-xs font-medium uppercase tracking-widest text-gray-400 md:text-sm">
              <Link to="/" className="hover:text-[#fe3e57] transition-colors">
                Home
              </Link>
              <span>/</span>
              <Link
                to="/portfolio"
                className="hover:text-[#fe3e57] transition-colors"
              >
                Project
              </Link>
              <span>/</span>
              <span className="text-[#fe3e57]">SmartClaim</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-2 leading-tight">
              SmartClaim Case Study
            </h1>
            <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-gray-300">
              AI-powered insurance claim assistant built with Flutter, YOLOv8,
              FastAPI, Docker, and a computer vision pipeline reaching 92.9%
              damage detection precision.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href="#smartclaim-demo"
                className="inline-flex items-center justify-center rounded-full bg-[#fe3e57] px-7 py-3 text-sm font-bold text-white shadow-lg shadow-[#fe3e57]/20 transition-all hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-[#fe3e57]/70"
              >
                Watch demos
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 py-3 text-sm font-bold text-white transition-all hover:-translate-y-1 hover:border-[#fe3e57] focus:outline-none focus:ring-2 focus:ring-[#fe3e57]/70"
              >
                Discuss this work
              </Link>
            </div>
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
                  loading="lazy"
                  decoding="async"
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
                      My Role
                    </span>
                    <span className="text-white font-medium text-lg">
                      Data & Mobile Developer Intern
                    </span>
                  </li>
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
                      Mobile App - Computer Vision
                    </span>
                  </li>
                  <li className="flex flex-col">
                    <span className="text-gray-400 text-sm uppercase tracking-wider mb-1">
                      Technologies Used
                    </span>
                    <div className="text-white font-medium text-sm space-y-1">
                      <p className="flex items-center gap-2">
                        <SiFlutter className="text-[#fe3e57]" /> Flutter -{" "}
                        <SiDart className="text-[#fe3e57]" /> Dart
                      </p>
                      <p className="flex items-center gap-2">
                        <SiFastapi className="text-[#fe3e57]" /> FastAPI
                      </p>
                      <p className="flex items-center gap-2">
                        <FaBrain className="text-[#fe3e57]" /> YOLO (v8s)
                      </p>
                      <p className="flex items-center gap-2">
                        <SiOpencv className="text-[#fe3e57]" /> OpenCV -{" "}
                        <SiPytorch className="text-[#fe3e57]" /> PyTorch
                      </p>
                    </div>
                  </li>
                  <li className="flex flex-col">
                    <span className="text-gray-400 text-sm uppercase tracking-wider mb-1">
                      Main Result
                    </span>
                    <span className="text-white font-medium text-lg">
                      92.9% detection precision
                    </span>
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
                  <span className="mb-4 block text-sm uppercase tracking-wider text-gray-400">
                    Evaluate
                  </span>
                  <div className="flex flex-col gap-3">
                    <Link
                      to="/contact"
                      className="rounded-full bg-[#fe3e57] px-5 py-3 text-center text-sm font-bold text-white transition-all hover:bg-[#ff6b81] focus:outline-none focus:ring-2 focus:ring-[#fe3e57]/70"
                    >
                      Contact me
                    </Link>
                    <a
                      href="/assets/cv/Cv_Ang.pdf"
                      download
                      className="rounded-full border border-white/15 px-5 py-3 text-center text-sm font-bold text-white transition-all hover:border-[#fe3e57] hover:text-[#fe3e57] focus:outline-none focus:ring-2 focus:ring-[#fe3e57]/70"
                    >
                      Download CV
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Detailed Case Study */}
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
                Project Summary
              </motion.h3>
              <motion.p
                variants={fadeInUp}
                className="text-[#d0d0d0] leading-relaxed text-lg mb-8"
              >
                SmartClaim is an AI-powered mobile application designed to make
                car insurance claim reporting faster and more structured. The
                user captures vehicle damage from the Flutter app, then the
                backend supports computer vision analysis with YOLOv8, OpenCV,
                PyTorch, OCR, and claim data handling.
              </motion.p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
                {caseStudyMetrics.map((metric) => (
                  <motion.div
                    key={metric.label}
                    variants={fadeInUp}
                    className="rounded-xl border border-white/10 bg-white/5 p-5"
                  >
                    <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                      {metric.label}
                    </p>
                    <p className="mt-2 text-3xl font-bold text-white">
                      {metric.value}
                    </p>
                    <p className="mt-2 text-sm text-gray-300">
                      {metric.detail}
                    </p>
                  </motion.div>
                ))}
              </div>

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
                    to inspect vehicles, while teams need more consistent
                    damage information before a claim can move forward.
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
                    SmartClaim creates a guided mobile claim flow and connects
                    it with AI-assisted damage detection. The project turns
                    images and claim information into a clearer digital process
                    for review.
                  </p>
                </motion.div>
              </div>

              <motion.div variants={fadeInUp} className="mb-12">
                <h3 className="text-2xl font-bold text-white mb-5">My Role</h3>
                <div className="grid grid-cols-1 gap-3">
                  {responsibilities.map((item) => (
                    <div
                      key={item}
                      className="rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-gray-200"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="mb-12">
                <h3 className="text-2xl font-bold text-white mb-5">
                  Architecture / Technical Approach
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {architectureSteps.map((step, index) => (
                    <div
                      key={step.title}
                      className="rounded-xl border border-white/10 bg-[#0b0d26] p-6"
                    >
                      <span className="text-sm font-bold text-[#fe3e57]">
                        0{index + 1}
                      </span>
                      <h4 className="mt-3 text-lg font-bold text-white">
                        {step.title}
                      </h4>
                      <p className="mt-2 text-sm leading-6 text-gray-300">
                        {step.text}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="mb-12">
                <h3 className="text-2xl font-bold text-white mb-5">
                  AI Model and Computer Vision Pipeline
                </h3>
                <p className="text-[#d0d0d0] leading-relaxed">
                  The project uses YOLOv8 for vehicle damage detection, with
                  OpenCV and PyTorch supporting the image-processing and model
                  workflow. The portfolio and resume confirm a 92.9% precision
                  result for real-time damage detection. OCR is also part of the
                  project flow for extracting relevant document data.
                </p>
              </motion.div>

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

            <aside className="lg:col-span-4 space-y-6">
              <motion.div
                variants={fadeInUp}
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <h3 className="text-xl font-bold text-white mb-4">
                  Challenges and Tradeoffs
                </h3>
                <ul className="space-y-3 text-sm leading-6 text-gray-300">
                  {tradeoffs.map((item) => (
                    <li key={item} className="border-l-2 border-[#fe3e57] pl-4">
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="rounded-2xl border border-white/10 bg-[#0b0d26] p-6"
              >
                <h3 className="text-xl font-bold text-white mb-4">
                  What I Learned
                </h3>
                <p className="text-sm leading-6 text-gray-300">
                  SmartClaim strengthened my ability to connect mobile product
                  UX, backend APIs, Docker-based delivery, and computer vision
                  inference into one coherent demo. It also clarified how much
                  recruiter-facing engineering work depends on explaining the
                  problem, role, architecture, and result clearly.
                </p>
              </motion.div>
            </aside>
          </motion.div>

          {/* Video Section */}
          <div id="smartclaim-demo" className="mt-20 scroll-mt-28">
            <h3 className="text-3xl font-bold text-white mb-10 text-center">
              Demo Videos
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
                  className="relative rounded-xl overflow-hidden shadow-lg border border-white/10 group aspect-video"
                >
                  <video
                    ref={demoVideoRef}
                    src={demoVideo}
                    poster={smartClaimImg}
                    preload="metadata"
                    className="w-full h-full object-cover"
                    onEnded={() => setPlayingVideo(null)}
                    onPause={() =>
                      playingVideo === "demo" && setPlayingVideo(null)
                    }
                    controls={playingVideo === "demo"}
                    playsInline
                  />
                  {playingVideo !== "demo" && (
                    <button
                      type="button"
                      aria-label="Play SmartClaim mobile app workflow demo"
                      onClick={() => handlePlay("demo", demoVideoRef)}
                      className="absolute inset-0 flex items-center justify-center bg-black/40 transition-opacity duration-300 hover:bg-black/20 focus:outline-none focus:ring-2 focus:ring-[#fe3e57]/70 focus:ring-inset"
                    >
                      <span className="flex h-16 w-16 items-center justify-center rounded-full bg-[#fe3e57] shadow-lg transition-transform duration-300 group-hover:scale-110">
                        <FaPlay
                          className="ml-1 text-xl text-white"
                          aria-hidden="true"
                        />
                      </span>
                    </button>
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
                  className="relative rounded-xl overflow-hidden shadow-lg border border-white/10 group aspect-video"
                >
                  <video
                    ref={dataVideoRef}
                    src={dataVideo}
                    poster={smartClaimImg}
                    preload="metadata"
                    className="w-full h-full object-cover"
                    onEnded={() => setPlayingVideo(null)}
                    onPause={() =>
                      playingVideo === "data" && setPlayingVideo(null)
                    }
                    controls={playingVideo === "data"}
                    playsInline
                  />
                  {playingVideo !== "data" && (
                    <button
                      type="button"
                      aria-label="Play SmartClaim damage detection AI demo"
                      onClick={() => handlePlay("data", dataVideoRef)}
                      className="absolute inset-0 flex items-center justify-center bg-black/40 transition-opacity duration-300 hover:bg-black/20 focus:outline-none focus:ring-2 focus:ring-[#fe3e57]/70 focus:ring-inset"
                    >
                      <span className="flex h-16 w-16 items-center justify-center rounded-full bg-[#fe3e57] shadow-lg transition-transform duration-300 group-hover:scale-110">
                        <FaPlay
                          className="ml-1 text-xl text-white"
                          aria-hidden="true"
                        />
                      </span>
                    </button>
                  )}
                </div>
              </motion.div>
            </div>
          </div>

          {/* Navigation */}
          <motion.div
            className="mt-24 pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6"
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
