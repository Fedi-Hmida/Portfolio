import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
    FaBolt,
    FaBrain,
    FaChartLine,
    FaCode,
    FaColumns,
    FaComments,
    FaFacebookF,
    FaGithub,
    FaLayerGroup,
    FaLightbulb,
    FaLinkedinIn,
    FaMobileAlt,
    FaRobot,
    FaSitemap,
    FaSyncAlt,
    FaTasks,
    FaUsers,
} from "react-icons/fa";
import {
    SiDocker,
    SiFastapi,
    SiFlutter,
    SiGit,
    SiNestjs,
    SiNextdotjs,
    SiNodedotjs,
    SiOpencv,
    SiPytorch,
    SiReact,
    SiTensorflow,
} from "react-icons/si";
import { Link } from "react-router-dom";
import "../assets/css/social-icons.css";
import Footer from "../components/Footer";

import Navbar from "../components/Navbar";
import NewsCard from "../components/News/NewsCard";
import ParticlesBackground from "../components/ParticlesBackground";
import ProjectCard from "../components/Portfolio/ProjectCard"; // Make sure to export this if not already

// Asset Imports
import heroImg from "../assets/images/slider/Fedi2.0.png";

// Portfolio Preview Assets
import proLinkImg from "../assets/images/FlutterFlow2.png";
import onboardifyImg from "../assets/images/logo31.png";
import solarFlowImg from "../assets/images/logo_15553.png";
import smartClaimImg from "../assets/images/Portfolio/New Logo SmartClaim2.png";

// News Preview Assets
import awsImg from "../assets/images/AI_AWS.jpg";
import tsypImg from "../assets/images/new12/tsyp1.jpg";
import iesImg from "../assets/images/new13/ies.jpg";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const roles = [
  "Junior Flutter Developer",
  "Data Science & AI Engineering Student",
];

const Home = () => {
  const [activeTab, setActiveTab] = useState("services"); // Default tab changed from "soft skills" to "hard skills"

  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // --- Data for Tabs ---
  const softSkills = [
    {
      title: "Communication",
      desc: "Effective verbal and written communication skills",
      icon: FaComments,
      color: "text-[#fe3e57]",
      hex: "#fe3e57",
    },
    {
      title: "Project Management",
      desc: "Organized and efficient project handling",
      icon: FaTasks,
      color: "text-[#54faae]",
      hex: "#54faae",
    },
    {
      title: "Team Collaboration",
      desc: "Strong team player with collaborative mindset",
      icon: FaUsers,
      color: "text-[#ff8c2f]",
      hex: "#ff8c2f",
    },
    {
      title: "Analytical",
      desc: "Data-driven decision making",
      icon: FaChartLine,
      color: "text-[#f1f965]",
      hex: "#f1f965",
    },
    {
      title: "Organization",
      desc: "Structured and methodical approach",
      icon: FaSitemap,
      color: "text-[#ff0173]",
      hex: "#ff0173",
    },
    {
      title: "Creativity",
      desc: "Innovative thinking and solutions",
      icon: FaLightbulb,
      color: "text-[#39c4ff]",
      hex: "#39c4ff",
    },
  ];

  const hardSkills = [
    {
      title: "Flutter",
      icon: SiFlutter,
      desc: "Cross-platform mobile development",
      color: "text-[#39c4ff]",
      hex: "#02569B",
    },
    {
      title: "YOLO",
      icon: FaBrain,
      desc: "v5/v8/v11 explored; v8s selected",
      color: "text-[#fe3e57]",
      hex: "#00FFFF",
    },
    {
      title: "TensorFlow",
      icon: SiTensorflow,
      desc: "Deep learning model development",
      color: "text-[#ff8c2f]",
      hex: "#FF6F00",
    },
    {
      title: "React",
      icon: SiReact,
      desc: "Frontend library for UI",
      color: "text-[#61DAFB]",
      hex: "#61DAFB",
    },
    {
      title: "Next.js",
      icon: SiNextdotjs,
      desc: "React framework for production",
      color: "text-[#ffffff]",
      hex: "#FFFFFF",
    },
    {
      title: "Node.js",
      icon: SiNodedotjs,
      desc: "JavaScript runtime",
      color: "text-[#339933]",
      hex: "#339933",
    },
    {
      title: "NestJS",
      icon: SiNestjs,
      desc: "Efficient Node.js framework",
      color: "text-[#E0234E]",
      hex: "#E0234E",
    },
    {
      title: "Git",
      icon: SiGit,
      desc: "Version control and collaboration",
      color: "text-[#f1f965]",
      hex: "#F05032",
    },
    {
      title: "PyTorch",
      icon: SiPytorch,
      desc: "Model training and experimentation",
      color: "text-[#ff0173]",
      hex: "#EE4C2C",
    },
    {
      title: "OpenCV",
      icon: SiOpencv,
      desc: "Computer vision preprocessing",
      color: "text-[#00C4FF]",
      hex: "#5C3EE8",
    },
    {
      title: "FastAPI",
      icon: SiFastapi,
      desc: "REST APIs for model inference",
      color: "text-[#009485]",
      hex: "#009688",
    },
    {
      title: "Docker",
      icon: SiDocker,
      desc: "Containerized deployment",
      color: "text-[#2496ED]",
      hex: "#2496ED",
    },
  ];

  const services = [
    {
      title: "Cross-Platform Mobile Apps",
      desc: "Flutter-powered mobile applications with native performance. Specializing in IoT integration, real-time data processing, and modern UI/UX design patterns.",
      icon: FaMobileAlt,
      tags: ["Flutter", "IoT", "Real-time", "UI/UX"],
    },
    {
      title: "AI & Computer Vision",
      desc: "YOLO-powered computer vision solutions for damage detection, object recognition, and intelligent automation. Experience with real-world AI implementation in insurance applications.",
      icon: FaRobot,
      tags: ["YOLO", "OpenCV", "TensorFlow", "Automation"],
    },
    {
      title: "Full-Stack Web Development",
      desc: "End-to-end web solutions using React and Next.js for the frontend, coupled with Node.js and NestJS for robust backend architectures. Includes experience with Symfony and JavaFX for enterprise systems.",
      icon: FaCode,
      tags: ["React", "Next.js", "Node.js", "NestJS"],
    },
    {
      title: "Data Science & ML Solutions",
      desc: "Machine learning implementations with KNN, Linear Regression, Decision Trees, and K-Means clustering. Data-driven insights for business intelligence and predictive analytics.",
      icon: FaChartLine,
      tags: [
        "Machine Learning",
        "Python",
        "Predictive Analytics",
        "Data Mining",
      ],
    },
  ];

  const methodologies = [
    {
      title: "Scrum",
      desc: "Iterative frameworks for managing complex knowledge work.",
      icon: FaSyncAlt,
      color: "text-[#39c4ff]",
    },
    {
      title: "Kanban",
      desc: "Visual workflow management method to define, manage, and improve services.",
      icon: FaColumns,
      color: "text-[#fe3e57]",
    },
    {
      title: "Scrumban",
      desc: "Hybrid Agile management methodology describing combinations of Scrum and Kanban.",
      icon: FaLayerGroup,
      color: "text-[#54faae]",
    },
    {
      title: "Agile",
      desc: "Iterative approach to project management and software development.",
      icon: FaBolt,
      color: "text-[#f1f965]",
    },
  ];

  // --- Data for Previews ---
  const portfolioPreview = [
    {
      id: 1,
      title: "SmartClaim",
      category: ["ia", "mobile"],
      tech: ["Flutter", "AI"],
      description: "AI-powered insurance claim assistant.",
      image: smartClaimImg,
      link: "/portfolio/smart-claim",
    },
    {
      id: 2,
      title: "Onboardify",
      category: ["web"],
      tech: ["JavaFX", "Symfony"],
      description: "Gamified HR onboarding solution.",
      image: onboardifyImg,
      link: "/portfolio/onboardify",
    },
    {
      id: 3,
      title: "SolarFlow",
      category: ["mobile"],
      tech: ["Flutter", "IoT"],
      description: "Smart energy management system.",
      image: solarFlowImg,
      link: "/portfolio/solar-flow",
    },
    {
      id: 4,
      title: "Pro-Link",
      category: ["mobile"],
      tech: ["Flutter", "Networking"],
      description: "Professional networking platform.",
      image: proLinkImg,
      link: "/portfolio/pro-link",
      scale: 1.4,
    },
  ];

  const newsPreview = [
    {
      id: 13,
      title: "IEEE IES SYP Congress",
      date: "10-01-2026",
      author: "Fedi Hmida",
      image: iesImg,
      description:
        "Receiving this certificate is not just about participation, it’s a reminder of the incredible experiences...",
      link: "/news/13",
    },
    {
      id: 12,
      title: "1st Place at Energy Utopia Challenge",
      date: "26-12-2025",
      author: "Fedi Hmida",
      image: tsypImg,
      description:
        "Winning 1st Place at the Energy Utopia Challenge: AI for a Smarter, Greener Future...",
      link: "/news/12",
    },
    {
      id: 11,
      title: "AI Model Deployment on AWS",
      date: "30-11-2025",
      author: "Fedi Hmida",
      image: awsImg,
      description: "Earned the AI Model Deployment on AWS certification...",
      link: "/news/11",
    },
  ];

  return (
    <div className="relative min-h-screen bg-deep-indigo text-white font-sans overflow-x-hidden">
      <ParticlesBackground />
      <Navbar />

      {/* --- HERO SECTION --- */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, staggerChildren: 0.2 }}
              className="space-y-6 z-10 order-2 lg:order-1"
            >
              <motion.h2
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="text-2xl md:text-3xl font-light text-gray-300"
              >
                Hello, I am
              </motion.h2>

              <motion.h1
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.5, type: "spring" }}
                className="text-3xl md:text-7xl font-bold leading-tight"
              >
                <span className="inline-block hover:text-blue-300 transition-colors duration-300 cursor-default">
                  Fedi
                </span>{" "}
                <span className="text-primary-pink inline-block hover:scale-110 transition-transform duration-300 cursor-default shadow-pink-glow">
                  Hmida
                </span>
              </motion.h1>

              <div className="text-[30px] sm:text-[22px] text-white font-semibold mt-[40px] mb-[50px] sm:mt-[20px] leading-[1.4] min-h-[90px] overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={roleIndex}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                  >
                    {roles[roleIndex]}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Social Icons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="flex gap-4 pt-4"
              >
                {[
                  {
                    icon: FaFacebookF,
                    link: "https://www.facebook.com/fadi.hmidahmida",
                    className: "hero-social facebook",
                    color: "#ea4c89",
                  },
                  {
                    icon: FaLinkedinIn,
                    link: "https://www.linkedin.com/in/fedi-hmida/",
                    className: "hero-social linkedin",
                    color: "#4176fa",
                  },
                  {
                    icon: FaGithub,
                    link: "https://github.com/Fedi-Hmida",
                    className: "hero-social github",
                    color: "#ffffff",
                  },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    whileTap={{ scale: 0.9 }}
                    href={social.link}
                    target="_blank"
                    rel="noreferrer"
                    className={social.className}
                  >
                    {/* The icon color is now handled by CSS or inherited, 
                       but React Icons often default to 'currentColor' 
                       which will pick up the CSS 'color' property. */}
                    <social.icon />
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative order-1 lg:order-2 flex justify-center lg:justify-end"
            >
              {/* Background Glow Pulse */}
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-primary-pink/30 rounded-full blur-[100px] -z-10"
              />

              {/* Floating Image Animation */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <img
                  src={heroImg}
                  alt="Fedi Hmida"
                  className="w-full max-w-[500px] object-contain drop-shadow-2xl z-10 hover:scale-105 transition-transform duration-500"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- TABS SECTION (About Me) --- */}
      <section className="py-10 md:py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-white inline-block relative pb-2">
              About Me
              <motion.div
                className="absolute bottom-0 left-0 h-1 bg-primary-pink rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 1, delay: 0.5 }}
              />
            </h2>
          </motion.div>

          {/* Tabs Navigation */}
          <div className="flex justify-center mb-16">
            <div className="flex flex-wrap justify-center gap-4 bg-white/5 backdrop-blur-lg p-2 rounded-full border border-white/10 shadow-2xl">
              {[
                "services",
                "hard skills",
                "soft skills",
                "project methodologies",
              ].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`relative px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-300 ${
                    activeTab === tab
                      ? "text-white shadow-[0_0_20px_rgba(254,62,87,0.3)]"
                      : "text-gray-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {activeTab === tab && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-primary-pink rounded-full -z-10"
                      transition={{
                        type: "spring",
                        bounce: 0.2,
                        duration: 0.6,
                      }}
                    />
                  )}
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="min-h-[400px]">
            <AnimatePresence mode="wait">
              {/* Removed About Tab Content Block */}

              {activeTab === "soft skills" && (
                <motion.div
                  key="soft-skills"
                  layout
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={containerVariants}
                >
                  {softSkills.map((skill, idx) => (
                    <motion.div
                      key={idx}
                      className="relative group h-full flex flex-col items-center justify-center p-4 transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                    >
                      {/* Glow Overlay (only visible on hover for effect behind icon) */}
                      <div
                        className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-20 blur-3xl transition-opacity duration-500 -z-10"
                        style={{ backgroundColor: skill.hex }}
                      />

                      {/* Icon Container */}
                      <div className="mb-4 relative z-10 transition-transform duration-500 group-hover:rotate-6">
                        <motion.div
                          animate={{ y: [0, -6, 0] }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: idx * 0.1,
                          }}
                        >
                          <skill.icon
                            size={45}
                            style={{
                              color: skill.hex,
                              filter: `drop-shadow(0 0 10px ${skill.hex})`,
                            }}
                          />
                        </motion.div>
                      </div>

                      <h3
                        className="text-lg font-bold mb-2 text-center transition-colors duration-300 group-hover:text-white"
                        style={{ color: "white" }}
                      >
                        {skill.title}
                      </h3>

                      <p className="text-gray-400 text-center text-xs leading-relaxed group-hover:text-gray-200 transition-colors max-w-[90%]">
                        {skill.desc}
                      </p>
                    </motion.div>
                  ))}
                </motion.div>
              )}

              {activeTab === "hard skills" && (
                <motion.div
                  key="hard-skills"
                  layout
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={containerVariants}
                >
                  {hardSkills.map((skill, idx) => (
                    <motion.div
                      key={idx}
                      className="relative group h-full flex flex-col items-center justify-center p-4 transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                    >
                      {/* Glow Overlay (only visible on hover for effect behind icon) */}
                      <div
                        className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-20 blur-3xl transition-opacity duration-500 -z-10"
                        style={{ backgroundColor: skill.hex }}
                      />

                      {/* Icon Container (Transparent background but keeping shape) */}
                      <div className="mb-4 relative z-10 transition-transform duration-500 group-hover:rotate-6">
                        <motion.div
                          animate={{ y: [0, -6, 0] }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: idx * 0.1,
                          }}
                        >
                          <skill.icon
                            size={45}
                            style={{
                              color: skill.hex,
                              filter: `drop-shadow(0 0 10px ${skill.hex})`,
                            }}
                          />
                        </motion.div>
                      </div>

                      <h3
                        className="text-lg font-bold mb-2 text-center transition-colors duration-300 group-hover:text-white"
                        style={{ color: "white" }}
                      >
                        {skill.title}
                      </h3>

                      <p className="text-gray-400 text-center text-xs leading-relaxed group-hover:text-gray-200 transition-colors max-w-[90%]">
                        {skill.desc}
                      </p>
                    </motion.div>
                  ))}
                </motion.div>
              )}

              {activeTab === "services" && (
                <motion.div
                  key="services"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                  {services.map((service, idx) => (
                    <motion.div
                      key={idx}
                      className="group relative flex flex-col items-center text-center p-4 transition-all duration-500"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1, duration: 0.5 }}
                      whileHover={{ y: -5 }}
                    >
                      {/* Animated Background Blob */}
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-24 bg-primary-pink/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />

                      {/* Icon Container with Ring Effect */}
                      <div className="relative mb-6">
                        <div className="absolute inset-0 border-2 border-dashed border-white/20 rounded-full animate-[spin_10s_linear_infinite] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                        <motion.div
                          className="relative z-10 p-4 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 group-hover:border-primary-pink/50 group-hover:bg-primary-pink/10 transition-all duration-300"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                        >
                          <service.icon
                            size={32}
                            className="text-gray-300 group-hover:text-primary-pink transition-colors duration-300"
                          />
                        </motion.div>
                      </div>

                      {/* Content */}
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-pink transition-colors duration-300">
                        {service.title}
                      </h3>

                      <div className="h-1 w-12 bg-white/10 rounded-full mb-4 group-hover:w-24 group-hover:bg-primary-pink/50 transition-all duration-500" />

                      <p className="text-gray-400 text-sm leading-relaxed mb-6 group-hover:text-gray-200 transition-colors duration-300 line-clamp-3">
                        {service.desc}
                      </p>

                      {/* Tags / Keywords */}
                      <div className="flex flex-wrap justify-center gap-2 mt-auto">
                        {service.tags &&
                          service.tags.map((tag, i) => (
                            <motion.span
                              key={i}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{
                                delay: 0.3 + i * 0.1 + idx * 0.1,
                                duration: 0.3,
                              }}
                              className="px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-white bg-white/5 border border-white/10 rounded-full hover:bg-primary-pink hover:border-primary-pink transition-colors duration-300 cursor-default"
                            >
                              {tag}
                            </motion.span>
                          ))}
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              )}

              {activeTab === "project methodologies" && (
                <motion.div
                  key="methodologies"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                  {methodologies.map((method, idx) => (
                    <motion.div
                      key={idx}
                      className="relative pl-6 border-l-4 border-white/10 hover:border-l-[6px] transition-all duration-300 group"
                      style={{
                        borderColor:
                          idx === 0
                            ? "#39c4ff"
                            : idx === 1
                              ? "#fe3e57"
                              : idx === 2
                                ? "#54faae"
                                : "#f1f965",
                      }}
                      whileHover={{ x: 10 }}
                    >
                      <div className="absolute -left-[22px] top-0 bg-[#070640] p-1 rounded-full border-2 border-inherit">
                        <method.icon
                          className={`${method.color} animate-spin-slow`}
                          size={24}
                        />
                      </div>
                      <h3
                        className={`text-2xl font-bold mb-2 ${method.color} group-hover:brightness-125 transition-all`}
                      >
                        {method.title}
                      </h3>
                      <p className="text-gray-300 text-lg">{method.desc}</p>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* --- PORTFOLIO PREVIEW --- */}
      <section className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-white inline-block relative pb-2">
                  My Work
                  <motion.div
                    className="absolute bottom-0 left-0 h-1 bg-primary-pink rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 1, delay: 0.5 }}
                  />
                </h2>
              </motion.div>
            </div>
            <Link
              to="/portfolio"
              className="hidden md:inline-flex items-center text-gray-300 hover:text-white transition-colors"
            >
              View All Projects <span className="ml-2">&rarr;</span>
            </Link>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
          >
            {portfolioPreview.map((project, idx) => (
              <ProjectCard key={project.id} project={project} index={idx} />
            ))}
          </motion.div>

          <div className="mt-8 text-center md:hidden">
            <Link
              to="/portfolio"
              className="btn-primary inline-block px-8 py-3 rounded-full border border-white/20"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* --- NEWS PREVIEW --- */}
      <section className="py-20 bg-darker-indigo/50 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-primary-pink font-bold tracking-wider uppercase text-sm">
              Blog & Updates
            </span>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-2"
            >
              <h2 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-white inline-block relative pb-2">
                Latest News
                <motion.div
                  className="absolute bottom-0 left-0 h-1 bg-primary-pink rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
              </h2>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {newsPreview.map((news) => (
              <NewsCard key={news.id} {...news} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/news"
              className="inline-flex items-center px-8 py-3 rounded-full bg-primary-pink text-white font-bold shadow-lg hover:shadow-glow hover:-translate-y-1 transition-all"
            >
              See More News
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
