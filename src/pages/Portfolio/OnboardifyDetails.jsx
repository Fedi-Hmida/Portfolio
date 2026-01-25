import { motion } from "framer-motion";
import { useRef, useState } from "react";
import {
    FaArrowLeft,
    FaArrowRight,
    FaBullhorn,
    FaFileAlt,
    FaHeartbeat,
    FaJava,
    FaLock,
    FaPlay,
    FaQuestionCircle,
    FaTasks,
} from "react-icons/fa";
import {
    SiCss3,
    SiHtml5,
    SiJavascript,
    SiMysql,
    SiPhp,
    SiSymfony,
} from "react-icons/si";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import ParticlesBackground from "../../components/ParticlesBackground";

// Assets
import onboardifyLogo from "../../assets/images/logo3.png";

import programVideo from "../../assets/videos/program.mp4";
import projectVideo from "../../assets/videos/Projet.mp4";
import quizVideo from "../../assets/videos/quiz.mp4";
import reportVideo from "../../assets/videos/report.mp4";
import resourceVideo from "../../assets/videos/ressource.mp4";

const OnboardifyDetails = () => {
  const [playingVideo, setPlayingVideo] = useState(null);

  // Refs
  const videoRefs = useRef({});

  const handlePlay = (videoName) => {
    const activeRef = videoRefs.current[videoName];
    if (activeRef) {
      if (playingVideo === videoName) {
        activeRef.pause();
        setPlayingVideo(null);
      } else {
        // Pause current playing video
        if (playingVideo && videoRefs.current[playingVideo]) {
          videoRefs.current[playingVideo].pause();
        }
        activeRef.play();
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

  const features = [
    {
      id: "resource",
      title: "Resource Management",
      desc: "See how employees can access and manage onboarding documents in one place.",
      video: resourceVideo,
      icon: FaFileAlt,
    },
    {
      id: "project",
      title: "Project Assignment & Tracking",
      desc: "Explore how tasks are assigned and progress is tracked throughout the onboarding process.",
      video: projectVideo,
      icon: FaTasks,
    },
    {
      id: "quiz",
      title: "Interactive Training Quizzes",
      desc: "Watch how interactive quizzes help validate training and boost engagement.",
      video: quizVideo,
      icon: FaQuestionCircle,
    },
    {
      id: "report",
      title: "Posts & Reclamation System",
      desc: "See how the platform facilitates communication and handles employee feedback efficiently.",
      video: reportVideo,
      icon: FaBullhorn,
    },
    {
      id: "program",
      title: "Well-being Program Integration",
      desc: "Discover how new hires can benefit from personalized well-being programs during onboarding.",
      video: programVideo,
      icon: FaHeartbeat,
    },
  ];

  return (
    <div className="relative min-h-screen bg-[#070640]">
      <ParticlesBackground />
      <Navbar />

      {/* --- HERO SECTION --- */}
      <section className="relative h-[40vh] flex items-center justify-center bg-[#0b0d26] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b0d26]/80 to-[#070640] z-0"></div>
        <div className="relative z-10 text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-gray-400 text-sm md:text-base mb-4 uppercase tracking-widest font-medium">
              <Link to="/" className="hover:text-[#5199e6] transition-colors">
                Home
              </Link>
              <span className="mx-2">/</span>
              <Link
                to="/portfolio"
                className="hover:text-[#5199e6] transition-colors"
              >
                Project
              </Link>
              <span className="mx-2">/</span>
              <span className="text-[#5199e6]">Onboardify</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-2">
              Onboardify Project
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
            {/* Left Column: Project Logo/Image */}
            <motion.div className="lg:col-span-2" variants={fadeInUp}>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 group flex justify-center bg-[#0c0b44]/50 p-12 h-full items-center">
                <img
                  src={onboardifyLogo}
                  alt="Onboardify Logo"
                  className="w-[300px] md:w-[400px] h-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
                />
              </div>
            </motion.div>

            {/* Right Column: Project Info */}
            <motion.div
              className="lg:col-span-1"
              variants={fadeInUp}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
            >
              <div className="bg-[#0c0b44] border border-white/10 rounded-2xl p-8 sticky top-24 shadow-xl backdrop-blur-sm bg-opacity-90">
                <h3 className="text-2xl font-bold text-white mb-6 border-l-4 border-[#5199e6] pl-4">
                  Project Details
                </h3>

                <ul className="space-y-6">
                  <li className="flex flex-col">
                    <span className="text-gray-400 text-sm uppercase tracking-wider mb-1">
                      Project Name
                    </span>
                    <span className="text-white font-medium text-lg">
                      Onboardify
                    </span>
                  </li>
                  <li className="flex flex-col">
                    <span className="text-gray-400 text-sm uppercase tracking-wider mb-1">
                      Category
                    </span>
                    <span className="text-white font-medium text-lg">
                      JavaFX & Symfony · HR Tech
                    </span>
                  </li>
                  <li className="flex flex-col">
                    <span className="text-gray-400 text-sm uppercase tracking-wider mb-1">
                      Technologies
                    </span>
                    <div className="text-white font-medium text-sm space-y-1">
                      <p className="flex items-center gap-2">
                        <SiSymfony className="text-[#5199e6]" /> Symfony ·{" "}
                        <SiPhp className="text-[#5199e6]" /> PHP
                      </p>
                      <p className="flex items-center gap-2">
                        <SiMysql className="text-[#5199e6]" /> MySQL
                      </p>
                      <p className="flex items-center gap-2">
                        <SiHtml5 className="text-[#5199e6]" /> HTML ·{" "}
                        <SiCss3 className="text-[#5199e6]" /> CSS ·{" "}
                        <SiJavascript className="text-[#5199e6]" /> JS
                      </p>
                      <p className="flex items-center gap-2">
                        <FaJava className="text-[#5199e6]" /> JavaFX
                      </p>
                    </div>
                  </li>
                  <li className="flex flex-col">
                    <span className="text-gray-400 text-sm uppercase tracking-wider mb-1">
                      Duration
                    </span>
                    <span className="text-white font-medium text-lg">
                      4 Months
                    </span>
                  </li>
                </ul>

                <div className="mt-8">
                  <Link
                    to="/contact"
                    className="block w-full text-center py-3 rounded-lg bg-gradient-to-r from-[#5199e6] to-[#3b7ac4] text-white font-bold tracking-wide shadow-lg hover:shadow-[#5199e6]/40 transition-all transform hover:-translate-y-1"
                  >
                    Contact Me
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Project Overview */}
          <motion.div
            className="mt-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <div className="max-w-4xl mx-auto">
              <motion.h3
                variants={fadeInUp}
                className="text-3xl font-bold text-white mb-6 border-l-4 border-[#5199e6] pl-4"
              >
                Project Overview
              </motion.h3>
              <motion.div
                variants={fadeInUp}
                className="prose prose-lg text-[#8c8b8b] prose-invert max-w-none"
              >
                <p className="leading-relaxed mb-6 block">
                  Onboardify is a smart employee onboarding platform developed
                  as part of an academic project. It combines a JavaFX desktop
                  application and a Symfony-based web application to deliver a
                  structured, engaging, and interactive onboarding experience.
                  The platform aims to enhance new hire integration through
                  resource management, interactive modules, and employee
                  well-being support — while ensuring real-time visibility for
                  HR and managers.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                  <div className="bg-[#0b0d26] p-6 rounded-lg border border-white/5 hover:border-[#5199e6]/30 transition-colors">
                    <FaLock className="text-[#5199e6] text-3xl mb-3" />
                    <h4 className="text-white font-semibold mb-2">
                      Secure System
                    </h4>
                    <p className="text-sm">
                      Robust login and sign-up system ensuring data security for
                      all users.
                    </p>
                  </div>
                  <div className="bg-[#0b0d26] p-6 rounded-lg border border-white/5 hover:border-[#5199e6]/30 transition-colors">
                    <FaFileAlt className="text-[#5199e6] text-3xl mb-3" />
                    <h4 className="text-white font-semibold mb-2">
                      Document Mgmt
                    </h4>
                    <p className="text-sm">
                      Centralized repository for managing and accessing
                      onboarding resources.
                    </p>
                  </div>
                  <div className="bg-[#0b0d26] p-6 rounded-lg border border-white/5 hover:border-[#5199e6]/30 transition-colors">
                    <FaQuestionCircle className="text-[#5199e6] text-3xl mb-3" />
                    <h4 className="text-white font-semibold mb-2">
                      Interactive Training
                    </h4>
                    <p className="text-sm">
                      Engaging quizzes to validate knowledge and track training
                      progress.
                    </p>
                  </div>
                  <div className="bg-[#0b0d26] p-6 rounded-lg border border-white/5 hover:border-[#5199e6]/30 transition-colors">
                    <FaHeartbeat className="text-[#5199e6] text-3xl mb-3" />
                    <h4 className="text-white font-semibold mb-2">
                      Well-being Support
                    </h4>
                    <p className="text-sm">
                      Integrated programs to support the mental health of new
                      hires.
                    </p>
                  </div>
                </div>

                <p className="font-mono text-sm text-[#5199e6] mt-4">
                  Tech Stack: JavaFX · Symfony · PHP · MySQL · HTML/CSS ·
                  JavaScript
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Key Features / Videos */}
          <div className="mt-24">
            <h3 className="text-3xl font-bold text-white mb-12 text-center">
              Key Features in Action
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.id}
                  className="bg-[#0b0d26] p-6 rounded-2xl border border-white/5 flex flex-col"
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <feature.icon className="text-[#5199e6] text-xl" />
                    <h4 className="text-xl font-semibold text-white">
                      {feature.title}
                    </h4>
                  </div>

                  <div
                    className="relative rounded-xl overflow-hidden shadow-lg border border-white/10 group cursor-pointer w-full aspect-video mb-4"
                    onClick={() => handlePlay(feature.id)}
                  >
                    <video
                      ref={(el) => (videoRefs.current[feature.id] = el)}
                      src={feature.video}
                      className="w-full h-full object-cover"
                      onEnded={() => setPlayingVideo(null)}
                      onPause={() =>
                        playingVideo === feature.id && setPlayingVideo(null)
                      }
                      playsInline
                    />
                    {playingVideo !== feature.id && (
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity duration-300 group-hover:bg-black/20">
                        <div className="w-16 h-16 bg-[#5199e6] rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                          <FaPlay className="text-white text-xl ml-1" />
                        </div>
                      </div>
                    )}
                  </div>

                  <p className="text-gray-400 text-sm italic">{feature.desc}</p>
                </motion.div>
              ))}
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
              to="/portfolio/solar-flow"
              className="group flex items-center gap-3 text-gray-400 hover:text-white transition-colors"
            >
              <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-[#5199e6] group-hover:border-[#5199e6] transition-all">
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
                <span className="font-semibold text-lg">Pro-Link</span>
              </div>
              <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-[#5199e6] group-hover:border-[#5199e6] transition-all">
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

export default OnboardifyDetails;
