import { motion } from "framer-motion";
import { useRef, useState } from "react";
import {
  FaArrowLeft,
  FaArrowRight,
  FaBrain,
  FaCheckCircle,
  FaCube,
  FaDatabase,
  FaExpand,
  FaMobileAlt,
  FaPlay,
  FaProjectDiagram,
  FaServer,
  FaTimes,
} from "react-icons/fa";
import { Link } from "react-router-dom";

import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import ParticlesBackground from "../../components/ParticlesBackground";
import firmaaDemoVideo from "../../assets/videos/demo_firmaa.mp4";
import firmaaLogo from "../../assets/images/Portfolio/Firmaa/logo_firmaa.png";
import firmaaSolutionCover from "../../assets/images/Portfolio/Firmaa/cover_firmaa.png";
import firmaaName from "../../assets/images/Portfolio/Firmaa/name_firmaa.png";
import firmaaAgentPipeline from "../../assets/images/Portfolio/Firmaa/highlights/agent_pipeline.png";
import firmaaDashboard from "../../assets/images/Portfolio/Firmaa/highlights/dashboard.png";
import firmaaLandingPage from "../../assets/images/Portfolio/Firmaa/highlights/landing_page.png";
import firmaaMobileModules from "../../assets/images/Portfolio/Firmaa/highlights/mobile_modules.png";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.16 },
  },
};

const stack = [
  "LangGraph",
  "FastAPI",
  "MongoDB",
  "Next.js",
  "Three.js",
  "React",
  "Flutter",
  "IoT / sensor data",
  "Human-in-the-loop",
];

const caseStudyMetrics = [
  { label: "Timeline", value: "Feb - May 2026", detail: "Integrated project at ESPRIT" },
  { label: "Role", value: "Project Lead", detail: "AI agent direction and platform coherence" },
  { label: "Focus", value: "Irrigation Agent", detail: "LangGraph workflow with human approval" },
];

const solutionPillars = [
  "Web dashboard and Flutter mobile access for farm monitoring",
  "Zone management and 3D farm simulation",
  "AI irrigation agent based on moisture, weather, crop needs, and sensor data",
  "Crop disease detection from plant images",
  "Chicken disease detection using droppings images",
  "Livestock health prediction based on symptoms",
  "Insect classification using sound analysis",
  "Offline AI models available directly in the Flutter mobile app",
  "IoT integration with sensors and real-time camera detection",
];

const roleItems = [
  "Coordinated the technical vision and helped unify Firmaa into one coherent smart agriculture platform.",
  "Led the development direction for the Autonomous Irrigation Agent and its LangGraph decision workflow.",
  "Designed the agent flow around soil moisture, weather forecasts, crop needs, sensor data, safety checks, and human approval logic.",
  "Contributed to the dashboard experience, zone management, AI command center, approvals flow, and product identity.",
];

const workflow = [
  {
    title: "Inputs",
    text: "Soil moisture, weather forecasts, crop needs, and sensor data.",
  },
  {
    title: "LangGraph Agent",
    text: "LLM-based reasoning with tool-assisted decision support.",
  },
  {
    title: "Validation / Safety",
    text: "Safety checks, validation layers, and fallback rules before recommending action.",
  },
  {
    title: "Recommendation",
    text: "Explainable irrigation decision with water volume estimation.",
  },
  {
    title: "Human Approval",
    text: "Approval queue keeps the farmer in control before sensitive actions.",
  },
  {
    title: "Action / Monitoring",
    text: "Zone-based monitoring keeps the farm state visible after decisions.",
  },
];

const architecture = [
  {
    icon: FaProjectDiagram,
    title: "Next.js Dashboard",
    text: "Analytics dashboard, AI command center, approvals queue, zone management, profile access, and farm visibility.",
  },
  {
    icon: FaCube,
    title: "Three.js Digital Twin",
    text: "3D farm view designed to make zones, farm state, and monitoring context easier to understand.",
  },
  {
    icon: FaServer,
    title: "FastAPI Backend",
    text: "Backend layer connecting dashboard flows, agent orchestration, sensor data, and AI modules.",
  },
  {
    icon: FaDatabase,
    title: "MongoDB Data Layer",
    text: "Persistence layer for zones, monitoring records, approvals, users, and AI outputs.",
  },
  {
    icon: FaBrain,
    title: "AI / Agent Layer",
    text: "LangGraph irrigation workflow with LLM reasoning, tool calls, fallbacks, and explainability-oriented recommendations.",
  },
  {
    icon: FaMobileAlt,
    title: "Flutter Mobile / Offline AI",
    text: "Flutter mobile experience supporting field access and offline inference paths where connectivity can be limited.",
  },
];

const platformHighlights = [
  { title: "Solution Cover", image: firmaaSolutionCover, featured: true },
  { title: "Landing Experience", image: firmaaLandingPage },
  { title: "Analytics Dashboard", image: firmaaDashboard },
  { title: "Irrigation Agent Pipeline", image: firmaaAgentPipeline },
  { title: "Mobile AI Modules", image: firmaaMobileModules },
];

const FirmaaDetails = () => {
  const demoVideoRef = useRef(null);
  const [playingVideo, setPlayingVideo] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handlePlay = async () => {
    setPlayingVideo(true);
    await demoVideoRef.current?.play();
  };

  return (
    <div className="relative min-h-screen bg-[#070640] text-white">
      <ParticlesBackground />
      <Navbar />

      <section className="relative flex min-h-[560px] items-center justify-center overflow-hidden bg-[#0b0d26] pt-32 pb-16">
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#0b0d26]/80 to-[#070640]"></div>
        <div className="relative z-10 mx-auto max-w-5xl px-4 text-center">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="mb-4 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-xs font-medium uppercase tracking-widest text-gray-400 md:text-sm">
              <Link to="/" className="transition-colors hover:text-[#fe3e57]">Home</Link>
              <span>/</span>
              <Link to="/portfolio" className="transition-colors hover:text-[#fe3e57]">Project</Link>
              <span>/</span>
              <span className="text-[#fe3e57]">Firmaa</span>
            </div>

            <div className="mb-6 flex justify-center">
              <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 backdrop-blur-xl">
                <img src={firmaaLogo} alt="Firmaa logo" className="h-12 w-12 object-contain" />
                <img src={firmaaName} alt="Firmaa wordmark" className="h-9 max-w-[190px] object-contain" />
              </div>
            </div>

            <h1 className="text-4xl font-bold leading-tight text-white md:text-6xl">
              Firmaa Case Study
            </h1>
            <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-gray-300">
              AI-powered smart farming platform combining a LangGraph Autonomous Irrigation Agent,
              FastAPI, MongoDB, Next.js, and a 3D digital-twin farm view for zone-based monitoring and human-approved recommendations.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href="#firmaa-demo"
                className="inline-flex items-center justify-center rounded-full bg-[#fe3e57] px-7 py-3 text-sm font-bold text-white shadow-lg shadow-[#fe3e57]/20 transition-all hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-[#fe3e57]/70"
              >
                Watch demo
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

      <section className="relative z-10 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-1 gap-12 lg:grid-cols-3"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div className="lg:col-span-2" variants={fadeInUp}>
              <div className="relative flex min-h-[430px] items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-[#0c0b44]/50 p-10 shadow-2xl">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(254,62,87,0.18),transparent_45%)]" />
                <div className="relative flex w-full flex-col items-center justify-center gap-7 rounded-2xl border border-white/10 bg-black/20 px-8 py-12 backdrop-blur-sm">
                  <img
                    src={firmaaLogo}
                    alt="Firmaa logo"
                    loading="lazy"
                    decoding="async"
                    className="h-64 w-64 object-contain sm:h-80 sm:w-80"
                  />
                </div>
              </div>
            </motion.div>

            <motion.div className="lg:col-span-1" variants={fadeInUp} whileHover={{ y: -5, transition: { duration: 0.3 } }}>
              <div className="sticky top-24 rounded-2xl border border-white/10 bg-white/5 p-8 shadow-xl backdrop-blur-md">
                <h3 className="mb-6 border-l-4 border-[#fe3e57] pl-4 text-2xl font-bold text-white">
                  Project Info
                </h3>
                <ul className="space-y-6">
                  <li className="flex flex-col">
                    <span className="mb-1 text-sm uppercase tracking-wider text-gray-400">My Role</span>
                    <span className="text-lg font-medium text-white">Project Lead / AI Agent Engineer</span>
                  </li>
                  <li className="flex flex-col">
                    <span className="mb-1 text-sm uppercase tracking-wider text-gray-400">Project Name</span>
                    <span className="text-lg font-medium text-white">Firmaa</span>
                  </li>
                  <li className="flex flex-col">
                    <span className="mb-1 text-sm uppercase tracking-wider text-gray-400">Category</span>
                    <span className="text-lg font-medium text-white">AI-Powered Smart Farming Platform</span>
                  </li>
                  <li className="flex flex-col">
                    <span className="mb-1 text-sm uppercase tracking-wider text-gray-400">Timeline</span>
                    <span className="text-lg font-medium text-white">February - May 2026</span>
                  </li>
                  <li className="flex flex-col">
                    <span className="mb-1 text-sm uppercase tracking-wider text-gray-400">Methodology</span>
                    <span className="text-lg font-medium text-white">TDSP</span>
                  </li>
                  <li className="flex flex-col">
                    <span className="mb-2 text-sm uppercase tracking-wider text-gray-400">Technologies Used</span>
                    <div className="flex flex-wrap gap-2">
                      {stack.map((item) => (
                        <span key={item} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-white/85">
                          {item}
                        </span>
                      ))}
                    </div>
                  </li>
                </ul>

                <div className="mt-8 border-t border-white/10 pt-6">
                  <span className="mb-4 block text-sm uppercase tracking-wider text-gray-400">Evaluate</span>
                  <div className="flex flex-col gap-3">
                    <a
                      href="#firmaa-demo"
                      className="rounded-full bg-[#fe3e57] px-5 py-3 text-center text-sm font-bold text-white transition-all hover:bg-[#ff6b81] focus:outline-none focus:ring-2 focus:ring-[#fe3e57]/70"
                    >
                      Watch demo video
                    </a>
                    <Link
                      to="/contact"
                      className="rounded-full border border-white/15 px-5 py-3 text-center text-sm font-bold text-white transition-all hover:border-[#fe3e57] hover:text-[#fe3e57] focus:outline-none focus:ring-2 focus:ring-[#fe3e57]/70"
                    >
                      Contact me
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="mt-20 grid grid-cols-1 gap-12 lg:grid-cols-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <div className="lg:col-span-8">
              <motion.h3 variants={fadeInUp} className="mb-6 text-3xl font-bold text-white">
                Project Summary
              </motion.h3>
              <motion.p variants={fadeInUp} className="mb-8 text-lg leading-relaxed text-[#d0d0d0]">
                Firmaa is an AI-powered smart agriculture platform built as an integrated project at ESPRIT, combining a web dashboard with a Flutter mobile experience for field usage.
                It helps farmers monitor zones, reason about irrigation decisions, estimate water needs, and approve AI recommendations through a full-stack dashboard and 3D digital-twin farm view.
              </motion.p>

              <div className="mb-12 grid grid-cols-1 gap-4 md:grid-cols-3">
                {caseStudyMetrics.map((metric) => (
                  <motion.div key={metric.label} variants={fadeInUp} className="rounded-xl border border-white/10 bg-white/5 p-5">
                    <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">{metric.label}</p>
                    <p className="mt-2 text-3xl font-bold text-white">{metric.value}</p>
                    <p className="mt-2 text-sm text-gray-300">{metric.detail}</p>
                  </motion.div>
                ))}
              </div>

              <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2">
                <motion.div variants={fadeInUp} className="rounded-xl border-l-4 border-[#fe3e57] bg-[#0b0d26] p-8">
                  <h4 className="mb-4 text-xl font-bold text-white">The Challenge</h4>
                  <p className="text-[#d0d0d0]">
                    Farmers often make irrigation, crop disease, livestock health, and insect monitoring decisions manually.
                    Limited real-time information makes farm operations harder to coordinate and can leave decisions dependent on fragmented signals.
                  </p>
                </motion.div>
                <motion.div variants={fadeInUp} className="rounded-xl border-l-4 border-green-500 bg-[#0b0d26] p-8">
                  <h4 className="mb-4 text-xl font-bold text-white">The Solution</h4>
                  <p className="text-[#d0d0d0]">
                    Firmaa brings smart farm operations into one platform: web monitoring, Flutter mobile access, AI recommendations, 3D farm visibility, mobile AI modules, and IoT-aware workflows designed around practical farm decisions.
                  </p>
                </motion.div>
              </div>

              <motion.div variants={fadeInUp} className="mb-12">
                <h3 className="mb-5 text-2xl font-bold text-white">My Role</h3>
                <div className="grid grid-cols-1 gap-3">
                  {roleItems.map((item) => (
                    <div key={item} className="rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-gray-200">
                      {item}
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="mb-12">
                <h3 className="mb-5 text-2xl font-bold text-white">Unified Platform Scope</h3>
                <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                  {solutionPillars.map((item) => (
                    <div key={item} className="flex gap-3 rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-gray-200">
                      <FaCheckCircle className="mt-1 shrink-0 text-green-400" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="mb-12">
                <h3 className="mb-5 text-2xl font-bold text-white">Agentic AI Irrigation Workflow</h3>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  {workflow.map((step, index) => (
                    <div key={step.title} className="rounded-xl border border-white/10 bg-[#0b0d26] p-6">
                      <span className="text-sm font-bold text-[#fe3e57]">0{index + 1}</span>
                      <h4 className="mt-3 text-lg font-bold text-white">{step.title}</h4>
                      <p className="mt-2 text-sm leading-6 text-gray-300">{step.text}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="mb-12">
                <h3 className="mb-5 text-2xl font-bold text-white">Full-stack Architecture</h3>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  {architecture.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.title} className="rounded-xl border border-white/10 bg-[#0b0d26] p-6">
                        <Icon className="text-2xl text-[#fe3e57]" />
                        <h4 className="mt-3 text-lg font-bold text-white">{item.title}</h4>
                        <p className="mt-2 text-sm leading-6 text-gray-300">{item.text}</p>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            </div>

            <aside className="space-y-6 lg:col-span-4">
              <motion.div variants={fadeInUp} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h3 className="mb-4 text-xl font-bold text-white">Product Highlights</h3>
                <ul className="space-y-3 text-sm leading-6 text-gray-300">
                  <li className="border-l-2 border-[#fe3e57] pl-4">Autonomous irrigation agent with crop, soil, weather, and sensor context.</li>
                  <li className="border-l-2 border-[#fe3e57] pl-4">Human-in-the-loop approvals for safer AI recommendations.</li>
                  <li className="border-l-2 border-[#fe3e57] pl-4">3D digital-twin farm view for zone-based monitoring.</li>
                  <li className="border-l-2 border-[#fe3e57] pl-4">Flutter mobile app for field access, mobile AI modules, and IoT-aware farm visibility.</li>
                </ul>
              </motion.div>

              <motion.div variants={fadeInUp} className="rounded-2xl border border-white/10 bg-[#0b0d26] p-6">
                <h3 className="mb-4 text-xl font-bold text-white">Platform Visuals</h3>
                <div className="grid gap-3">
                  {platformHighlights.slice(1).map((item) => (
                    <button
                      key={item.title}
                      type="button"
                      onClick={() => setSelectedImage({ src: item.image, title: item.title })}
                      className="group overflow-hidden rounded-xl border border-white/10 bg-white/5 text-left transition hover:border-[#fe3e57]/60 focus:outline-none focus:ring-2 focus:ring-[#fe3e57]/70"
                    >
                      <div className="relative aspect-video bg-[#080744]">
                        <img src={item.image} alt={item.title} className="h-full w-full object-contain transition duration-300 group-hover:scale-[1.02]" loading="lazy" decoding="async" />
                        <span className="absolute right-3 top-3 inline-flex items-center gap-2 rounded-full bg-black/65 px-3 py-1 text-xs font-bold text-white opacity-0 transition group-hover:opacity-100">
                          <FaExpand /> View larger
                        </span>
                      </div>
                      <p className="px-4 py-3 text-sm font-bold text-white">{item.title}</p>
                    </button>
                  ))}
                </div>
              </motion.div>
            </aside>
          </motion.div>

          <motion.div variants={fadeInUp} className="mx-auto mt-20 max-w-5xl">
            <button
              type="button"
              onClick={() => setSelectedImage({ src: firmaaSolutionCover, title: "Firmaa solution cover" })}
              className="group relative w-full overflow-hidden rounded-2xl border border-white/10 bg-[#0b0d26] p-5 shadow-2xl focus:outline-none focus:ring-2 focus:ring-[#fe3e57]/70"
            >
              <img
                src={firmaaSolutionCover}
                alt="Firmaa solution cover"
                loading="lazy"
                decoding="async"
                className="mx-auto max-h-[520px] w-auto max-w-full rounded-xl object-contain transition duration-300 group-hover:scale-[1.01]"
              />
              <span className="absolute right-6 top-6 inline-flex items-center gap-2 rounded-full bg-black/65 px-3 py-1 text-xs font-bold text-white opacity-0 transition group-hover:opacity-100">
                <FaExpand /> View larger
              </span>
            </button>
          </motion.div>
          <div id="firmaa-demo" className="mt-20 scroll-mt-28">
            <h3 className="mb-10 text-center text-3xl font-bold text-white">Demo Video</h3>
            <motion.div
              className="mx-auto max-w-3xl rounded-2xl border border-white/5 bg-[#0b0d26] p-6"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h4 className="mb-4 text-xl font-semibold text-white">Firmaa Platform Walkthrough</h4>
              <div className="group relative aspect-video overflow-hidden rounded-xl border border-white/10 shadow-lg">
                <video
                  ref={demoVideoRef}
                  src={firmaaDemoVideo}
                  poster={firmaaLogo}
                  preload="metadata"
                  className="h-full w-full object-contain bg-black/25"
                  onEnded={() => setPlayingVideo(false)}
                  onPause={() => playingVideo && setPlayingVideo(false)}
                  controls={playingVideo}
                  playsInline
                />
                {!playingVideo && (
                  <button
                    type="button"
                    aria-label="Play Firmaa demo video"
                    onClick={handlePlay}
                    className="absolute inset-0 flex items-center justify-center bg-black/40 transition-opacity duration-300 hover:bg-black/20 focus:outline-none focus:ring-2 focus:ring-[#fe3e57]/70 focus:ring-inset"
                  >
                    <span className="flex h-16 w-16 items-center justify-center rounded-full bg-[#fe3e57] shadow-lg transition-transform duration-300 group-hover:scale-110">
                      <FaPlay className="ml-1 text-xl text-white" aria-hidden="true" />
                    </span>
                  </button>
                )}
              </div>
            </motion.div>
          </div>

          <motion.div
            className="mt-24 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-10 md:flex-row"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link to="/portfolio" className="group flex items-center gap-3 text-gray-400 transition-colors hover:text-white">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 transition-all group-hover:border-[#fe3e57] group-hover:bg-[#fe3e57]">
                <FaArrowLeft />
              </div>
              <div>
                <span className="block text-xs uppercase tracking-wider text-gray-500 group-hover:text-gray-300">Back to</span>
                <span className="text-lg font-semibold">Portfolio</span>
              </div>
            </Link>

            <Link to="/contact" className="group flex items-center gap-3 text-right text-gray-400 transition-colors hover:text-white">
              <div>
                <span className="block text-xs uppercase tracking-wider text-gray-500 group-hover:text-gray-300">Interested?</span>
                <span className="text-lg font-semibold">Contact Me</span>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 transition-all group-hover:border-[#fe3e57] group-hover:bg-[#fe3e57]">
                <FaArrowRight />
              </div>
            </Link>
          </motion.div>
        </div>
      </section>

      {selectedImage && (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-black/85 px-4 py-6 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={`${selectedImage.title} preview`}
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-h-full w-full max-w-6xl rounded-[1.75rem] border border-white/15 bg-[#080744] p-4 shadow-2xl shadow-black/40"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mb-3 flex items-center justify-between gap-4">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-pink-200">{selectedImage.title}</p>
              <button
                type="button"
                onClick={() => setSelectedImage(null)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition hover:border-pink-300/70 hover:text-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-300/70"
                aria-label="Close image preview"
              >
                <FaTimes />
              </button>
            </div>
            <img src={selectedImage.src} alt={selectedImage.title} className="max-h-[82vh] w-full rounded-2xl object-contain" />
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default FirmaaDetails;
