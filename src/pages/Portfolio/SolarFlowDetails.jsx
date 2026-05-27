import { motion } from "framer-motion";
import { useRef, useState } from "react";
import {
    FaArrowLeft,
    FaArrowRight,
    FaBolt,
    FaDatabase,
    FaMobileAlt,
    FaPlay,
    FaWifi,
} from "react-icons/fa";
import { SiDart, SiFirebase, SiFlutter } from "react-icons/si";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import ParticlesBackground from "../../components/ParticlesBackground";

// Assets
import solarLogo from "../../assets/images/logo_1555.png";
import maintenanceVideo from "../../assets/videos/Maintennace2.0.mp4";
import adminVideo from "../../assets/videos/admin2.0.mp4";
import userVideo from "../../assets/videos/user2.0.mp4";

const SolarFlowDetails = () => {
  const [playingVideo, setPlayingVideo] = useState(null);

  // Refs for videos
  const userVideoRef = useRef(null);
  const maintenanceVideoRef = useRef(null);
  const adminVideoRef = useRef(null);

  const handlePlay = (videoName, videoRef) => {
    if (videoRef.current) {
      if (playingVideo === videoName) {
        videoRef.current.pause();
        setPlayingVideo(null);
      } else {
        // Pause others
        if (playingVideo === "user" && userVideoRef.current)
          userVideoRef.current.pause();
        if (playingVideo === "maintenance" && maintenanceVideoRef.current)
          maintenanceVideoRef.current.pause();
        if (playingVideo === "admin" && adminVideoRef.current)
          adminVideoRef.current.pause();

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
    { label: "Platform", value: "Flutter", detail: "Cross-platform mobile app" },
    { label: "Domain", value: "IoT", detail: "Solar energy monitoring" },
    { label: "Duration", value: "3 months", detail: "Project timeline" },
  ];

  const responsibilities = [
    "Created the SolarFlow Flutter app for real-time energy analytics.",
    "Designed mobile screens for user, maintenance, and admin workflows.",
    "Connected the app experience with Firebase and IoT-focused data handling.",
    "Built demo flows showing monitoring, maintenance, and administration features.",
  ];

  const approachSteps = [
    {
      title: "Mobile dashboard",
      text: "Flutter provides the main interface for tracking solar energy production and consumption.",
    },
    {
      title: "Connected systems",
      text: "IoT-focused flows support monitoring and remote control of connected devices.",
    },
    {
      title: "Realtime data",
      text: "Firebase supports app data handling for the mobile experience.",
    },
    {
      title: "Role-based features",
      text: "Separate user, maintenance, and admin demos show how different users interact with the system.",
    },
  ];

  const tradeoffs = [
    "Designing one mobile experience that can serve user, maintenance, and admin needs.",
    "Keeping energy data understandable inside a small mobile dashboard.",
    "Balancing IoT control features with a simple user-facing interface.",
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
              <Link to="/" className="hover:text-[#4CAF50] transition-colors">
                Home
              </Link>
              <span>/</span>
              <Link
                to="/portfolio"
                className="hover:text-[#4CAF50] transition-colors"
              >
                Project
              </Link>
              <span>/</span>
              <span className="text-[#4CAF50]">SolarFlow</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-2 leading-tight">
              SolarFlow Case Study
            </h1>
            <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-gray-300">
              Flutter mobile app for solar energy monitoring, IoT control, and
              role-based user, maintenance, and admin workflows.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href="#solarflow-demo"
                className="inline-flex items-center justify-center rounded-full bg-[#4CAF50] px-7 py-3 text-sm font-bold text-white shadow-lg shadow-[#4CAF50]/20 transition-all hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-[#4CAF50]/70"
              >
                Watch demos
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 py-3 text-sm font-bold text-white transition-all hover:-translate-y-1 hover:border-[#4CAF50] focus:outline-none focus:ring-2 focus:ring-[#4CAF50]/70"
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
            {/* Left Column: Project Logo/Image */}
            <motion.div className="lg:col-span-2" variants={fadeInUp}>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 group flex justify-center bg-[#0c0b44]/50 p-12 h-full items-center">
                <img
                  src={solarLogo}
                  alt="SolarFlow Logo"
                  loading="lazy"
                  decoding="async"
                  className="w-full max-w-[300px] md:w-[400px] h-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
                />
              </div>
            </motion.div>

            {/* Right Column: Project Info */}
            <motion.div
              className="lg:col-span-1"
              variants={fadeInUp}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
            >
              <div className="bg-[#0c0b44] border border-white/10 rounded-2xl p-8 sticky top-24 shadow-xl">
                <h3 className="text-2xl font-bold text-white mb-6 border-l-4 border-[#4CAF50] pl-4">
                  Project Details
                </h3>

                <ul className="space-y-6">
                  <li className="flex flex-col">
                    <span className="text-gray-400 text-sm uppercase tracking-wider mb-1">
                      My Role
                    </span>
                    <span className="text-white font-medium text-lg">
                      Flutter Developer
                    </span>
                  </li>
                  <li className="flex flex-col">
                    <span className="text-gray-400 text-sm uppercase tracking-wider mb-1">
                      Project Name
                    </span>
                    <span className="text-white font-medium text-lg">
                      SolarFlow App
                    </span>
                  </li>
                  <li className="flex flex-col">
                    <span className="text-gray-400 text-sm uppercase tracking-wider mb-1">
                      Category
                    </span>
                    <span className="text-white font-medium text-lg">
                      Mobile App Development
                    </span>
                  </li>
                  <li className="flex flex-col">
                    <span className="text-gray-400 text-sm uppercase tracking-wider mb-1">
                      Technologies
                    </span>
                    <div className="text-white font-medium text-sm space-y-1">
                      <p className="flex items-center gap-2">
                        <SiFlutter className="text-[#4CAF50]" /> Flutter -{" "}
                        <SiDart className="text-[#4CAF50]" /> Dart
                      </p>
                      <p className="flex items-center gap-2">
                        <SiFirebase className="text-[#4CAF50]" /> Firebase
                      </p>
                      <p className="flex items-center gap-2">
                        <FaWifi className="text-[#4CAF50]" /> IoT Integration
                      </p>
                    </div>
                  </li>
                  <li className="flex flex-col">
                    <span className="text-gray-400 text-sm uppercase tracking-wider mb-1">
                      Main Focus
                    </span>
                    <span className="text-white font-medium text-lg">
                      Real-time energy analytics
                    </span>
                  </li>
                  <li className="flex flex-col">
                    <span className="text-gray-400 text-sm uppercase tracking-wider mb-1">
                      Duration
                    </span>
                    <span className="text-white font-medium text-lg">
                      3 Months
                    </span>
                  </li>
                </ul>

                <div className="mt-8">
                  <Link
                    to="/contact"
                    className="block w-full text-center py-3 rounded-lg bg-gradient-to-r from-[#4CAF50] to-[#45a049] text-white font-bold tracking-wide shadow-lg hover:shadow-[#4CAF50]/40 transition-all transform hover:-translate-y-1"
                  >
                    Contact Me
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Case Study */}
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
                className="text-3xl font-bold text-white mb-6 border-l-4 border-[#4CAF50] pl-4"
              >
                Project Summary
              </motion.h3>
              <motion.div
                variants={fadeInUp}
                className="prose prose-lg text-[#8c8b8b] prose-invert max-w-none"
              >
                <p className="leading-relaxed mb-6 block">
                  SolarFlow is a cross-platform mobile application developed
                  using Flutter to monitor and manage solar-powered devices in
                  real time. It allows users to track energy production, control
                  connected systems, and optimize renewable energy usage -
                  ensuring a seamless experience across both iOS and Android
                  devices. The app was built as part of an internship project
                  focused on IoT integration, real-time data handling, and
                  energy efficiency.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-10">
                  {caseStudyMetrics.map((metric) => (
                    <div
                      key={metric.label}
                      className="rounded-xl border border-white/10 bg-white/5 p-5"
                    >
                      <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                        {metric.label}
                      </p>
                      <p className="mt-2 text-2xl font-bold text-white">
                        {metric.value}
                      </p>
                      <p className="mt-2 text-sm text-gray-300">
                        {metric.detail}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                  <div className="bg-[#0b0d26] p-6 rounded-lg border-l-4 border-[#4CAF50]">
                    <h4 className="text-white font-semibold mb-2">
                      The Problem
                    </h4>
                    <p className="text-sm">
                      Solar energy systems need clear mobile visibility for
                      production, consumption, maintenance, and administration
                      activity.
                    </p>
                  </div>
                  <div className="bg-[#0b0d26] p-6 rounded-lg border-l-4 border-green-300">
                    <h4 className="text-white font-semibold mb-2">
                      The Solution
                    </h4>
                    <p className="text-sm">
                      SolarFlow brings monitoring, IoT control, and role-based
                      workflows into one Flutter mobile experience.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                  <div className="bg-[#0b0d26] p-6 rounded-lg border border-white/5 hover:border-[#4CAF50]/30 transition-colors">
                    <FaBolt className="text-[#4CAF50] text-3xl mb-3" />
                    <h4 className="text-white font-semibold mb-2">
                      Real-time Monitoring
                    </h4>
                    <p className="text-sm">
                      Live tracking of solar energy production and consumption
                      data.
                    </p>
                  </div>
                  <div className="bg-[#0b0d26] p-6 rounded-lg border border-white/5 hover:border-[#4CAF50]/30 transition-colors">
                    <FaWifi className="text-[#4CAF50] text-3xl mb-3" />
                    <h4 className="text-white font-semibold mb-2">
                      IoT Control
                    </h4>
                    <p className="text-sm">
                      Remote control of connected devices via secure IoT
                      protocols.
                    </p>
                  </div>
                  <div className="bg-[#0b0d26] p-6 rounded-lg border border-white/5 hover:border-[#4CAF50]/30 transition-colors">
                    <FaMobileAlt className="text-[#4CAF50] text-3xl mb-3" />
                    <h4 className="text-white font-semibold mb-2">
                      Responsive UI
                    </h4>
                    <p className="text-sm">
                      Clean, modern interface built with Flutter for iOS and
                      Android.
                    </p>
                  </div>
                  <div className="bg-[#0b0d26] p-6 rounded-lg border border-white/5 hover:border-[#4CAF50]/30 transition-colors">
                    <FaDatabase className="text-[#4CAF50] text-3xl mb-3" />
                    <h4 className="text-white font-semibold mb-2">
                      Optimization
                    </h4>
                    <p className="text-sm">
                      Smart dashboard for optimizing renewable energy usage.
                    </p>
                  </div>
                </div>

                <p className="font-mono text-sm text-[#4CAF50] mt-4">
                  Tech Stack: Flutter - Dart - Firebase - IoT Protocols
                </p>
              </motion.div>

              <motion.div variants={fadeInUp} className="mt-12">
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

              <motion.div variants={fadeInUp} className="mt-12">
                <h3 className="text-2xl font-bold text-white mb-5">
                  Architecture / Technical Approach
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {approachSteps.map((step, index) => (
                    <div
                      key={step.title}
                      className="rounded-xl border border-white/10 bg-[#0b0d26] p-6"
                    >
                      <span className="text-sm font-bold text-[#4CAF50]">
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
                    <li key={item} className="border-l-2 border-[#4CAF50] pl-4">
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
                  SolarFlow strengthened my understanding of Flutter mobile
                  dashboards, IoT-oriented app flows, and how to organize
                  energy data for different user roles.
                </p>
              </motion.div>
            </aside>
          </motion.div>

          {/* Key Features / Videos */}
          <div id="solarflow-demo" className="mt-24 scroll-mt-28">
            <h3 className="text-3xl font-bold text-white mb-12 text-center">
              Demo Videos
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Video 1: Users Features */}
              <motion.div
                className="bg-[#0b0d26] p-6 rounded-2xl border border-white/5 flex flex-col items-center"
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <h4 className="text-xl font-semibold text-white mb-4 text-center">
                  Users Features
                </h4>
                <div
                  className="relative rounded-xl overflow-hidden shadow-lg border border-white/10 group w-full max-w-[300px] aspect-[9/16]"
                >
                  <video
                    ref={userVideoRef}
                    src={userVideo}
                    poster={solarLogo}
                    preload="metadata"
                    className="w-full h-full object-cover"
                    onEnded={() => setPlayingVideo(null)}
                    onPause={() =>
                      playingVideo === "user" && setPlayingVideo(null)
                    }
                    controls={playingVideo === "user"}
                    playsInline
                  />
                  {playingVideo !== "user" && (
                    <button
                      type="button"
                      aria-label="Play SolarFlow user features demo"
                      onClick={() => handlePlay("user", userVideoRef)}
                      className="absolute inset-0 flex items-center justify-center bg-black/40 transition-opacity duration-300 hover:bg-black/20 focus:outline-none focus:ring-2 focus:ring-[#4CAF50]/70 focus:ring-inset"
                    >
                      <span className="flex h-16 w-16 items-center justify-center rounded-full bg-[#4CAF50] shadow-lg transition-transform duration-300 group-hover:scale-110">
                        <FaPlay
                          className="ml-1 text-xl text-white"
                          aria-hidden="true"
                        />
                      </span>
                    </button>
                  )}
                </div>
              </motion.div>

              {/* Video 2: Maintenance Features */}
              <motion.div
                className="bg-[#0b0d26] p-6 rounded-2xl border border-white/5 flex flex-col items-center"
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <h4 className="text-xl font-semibold text-white mb-4 text-center">
                  Maintenance Features
                </h4>
                <div
                  className="relative rounded-xl overflow-hidden shadow-lg border border-white/10 group w-full max-w-[300px] aspect-[9/16]"
                >
                  <video
                    ref={maintenanceVideoRef}
                    src={maintenanceVideo}
                    poster={solarLogo}
                    preload="metadata"
                    className="w-full h-full object-cover"
                    onEnded={() => setPlayingVideo(null)}
                    onPause={() =>
                      playingVideo === "maintenance" && setPlayingVideo(null)
                    }
                    controls={playingVideo === "maintenance"}
                    playsInline
                  />
                  {playingVideo !== "maintenance" && (
                    <button
                      type="button"
                      aria-label="Play SolarFlow maintenance features demo"
                      onClick={() =>
                        handlePlay("maintenance", maintenanceVideoRef)
                      }
                      className="absolute inset-0 flex items-center justify-center bg-black/40 transition-opacity duration-300 hover:bg-black/20 focus:outline-none focus:ring-2 focus:ring-[#4CAF50]/70 focus:ring-inset"
                    >
                      <span className="flex h-16 w-16 items-center justify-center rounded-full bg-[#4CAF50] shadow-lg transition-transform duration-300 group-hover:scale-110">
                        <FaPlay
                          className="ml-1 text-xl text-white"
                          aria-hidden="true"
                        />
                      </span>
                    </button>
                  )}
                </div>
              </motion.div>

              {/* Video 3: Admin Features */}
              <motion.div
                className="bg-[#0b0d26] p-6 rounded-2xl border border-white/5 flex flex-col items-center"
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <h4 className="text-xl font-semibold text-white mb-4 text-center">
                  Admin Features
                </h4>
                <div
                  className="relative rounded-xl overflow-hidden shadow-lg border border-white/10 group w-full max-w-[300px] aspect-[9/16]"
                >
                  <video
                    ref={adminVideoRef}
                    src={adminVideo}
                    poster={solarLogo}
                    preload="metadata"
                    className="w-full h-full object-cover"
                    onEnded={() => setPlayingVideo(null)}
                    onPause={() =>
                      playingVideo === "admin" && setPlayingVideo(null)
                    }
                    controls={playingVideo === "admin"}
                    playsInline
                  />
                  {playingVideo !== "admin" && (
                    <button
                      type="button"
                      aria-label="Play SolarFlow admin features demo"
                      onClick={() => handlePlay("admin", adminVideoRef)}
                      className="absolute inset-0 flex items-center justify-center bg-black/40 transition-opacity duration-300 hover:bg-black/20 focus:outline-none focus:ring-2 focus:ring-[#4CAF50]/70 focus:ring-inset"
                    >
                      <span className="flex h-16 w-16 items-center justify-center rounded-full bg-[#4CAF50] shadow-lg transition-transform duration-300 group-hover:scale-110">
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
              <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-[#4CAF50] group-hover:border-[#4CAF50] transition-all">
                <FaArrowLeft />
              </div>
              <div>
                <span className="block text-xs uppercase tracking-wider text-gray-500 group-hover:text-gray-300">
                  Previous Project
                </span>
                <span className="font-semibold text-lg">SmartClaim</span>
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
              <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-[#4CAF50] group-hover:border-[#4CAF50] transition-all">
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

export default SolarFlowDetails;
