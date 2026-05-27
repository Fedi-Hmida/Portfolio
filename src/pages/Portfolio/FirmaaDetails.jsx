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
  FaSeedling,
  FaServer,
  FaShieldAlt,
  FaTimes,
  FaWater,
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

const metricCards = [
  { label: "Timeline", value: "Feb - May 2026", detail: "Integrated project at ESPRIT" },
  { label: "Role", value: "Project Lead", detail: "AI agent direction and platform coherence" },
  { label: "Focus", value: "Irrigation Agent", detail: "LangGraph workflow with human approval" },
  { label: "Methodology", value: "TDSP", detail: "Structured delivery for the smart agriculture platform" },
];

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

const platformClusters = [
  {
    title: "Farm Monitoring",
    icon: <FaSeedling />,
    items: [
      "Web dashboard and Flutter mobile access for farm monitoring",
      "Zone management and 3D farm simulation",
    ],
  },
  {
    title: "AI Decision Support",
    icon: <FaBrain />,
    items: [
      "AI irrigation agent based on moisture, weather, crop needs, and sensor data",
    ],
  },
  {
    title: "Vision & Detection",
    icon: <FaCheckCircle />,
    items: [
      "Crop disease detection from plant images",
      "Chicken disease detection using droppings images",
      "Livestock health prediction based on symptoms",
      "Insect classification using sound analysis",
    ],
  },
  {
    title: "Mobile / Offline AI",
    icon: <FaMobileAlt />,
    items: [
      "Offline AI models available directly in the Flutter mobile app",
    ],
  },
  {
    title: "IoT & Real-Time Data",
    icon: <FaWater />,
    items: [
      "IoT integration with sensors and real-time camera detection",
    ],
  },
];

const roleCards = [
  {
    label: "Technical Vision",
    icon: <FaProjectDiagram />,
    responsibility: "Coordinated the technical vision.",
    impact: "Helped unify Firmaa into one coherent smart agriculture platform.",
    area: "Platform leadership",
  },
  {
    label: "Agent Workflow Direction",
    icon: <FaBrain />,
    responsibility: "Led the Autonomous Irrigation Agent direction.",
    impact: "Shaped the LangGraph decision workflow around farm context and approval.",
    area: "LangGraph / agentic AI",
  },
  {
    label: "Decision Logic",
    icon: <FaWater />,
    responsibility: "Designed the irrigation agent flow.",
    impact: "Connected soil moisture, weather forecasts, crop needs, sensor data, safety checks, and human approval logic.",
    area: "Irrigation intelligence",
  },
  {
    label: "Dashboard Experience",
    icon: <FaCube />,
    responsibility: "Contributed to the dashboard experience.",
    impact: "Improved zone management, AI command center, approvals flow, and farm visibility.",
    area: "Next.js / 3D monitoring",
  },
  {
    label: "Product Identity",
    icon: <FaSeedling />,
    responsibility: "Helped shape the product identity.",
    impact: "Made the platform feel cohesive across smart farming, mobile access, and AI recommendations.",
    area: "Product thinking",
  },
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
    icon: <FaWater />,
    title: "IoT / Sensor Inputs",
    text: "Soil moisture, weather forecasts, crop needs, sensor data, and real-time camera detection provide farm context.",
    layer: "Input layer",
  },
  {
    icon: <FaProjectDiagram />,
    title: "Next.js Dashboard",
    text: "Analytics dashboard, AI command center, approvals queue, zone management, profile access, and farm visibility.",
    layer: "Interface layer",
  },
  {
    icon: <FaCube />,
    title: "Three.js Digital Twin",
    text: "3D farm view designed to make zones, farm state, and monitoring context easier to understand.",
    layer: "Visualization layer",
  },
  {
    icon: <FaMobileAlt />,
    title: "Flutter Mobile / Offline AI",
    text: "Flutter mobile experience supporting field access and offline inference paths where connectivity can be limited.",
    layer: "Field access layer",
  },
  {
    icon: <FaServer />,
    title: "FastAPI Backend",
    text: "Backend layer connecting dashboard flows, agent orchestration, sensor data, and AI modules.",
    layer: "API layer",
  },
  {
    icon: <FaDatabase />,
    title: "MongoDB Data Layer",
    text: "Persistence layer for zones, monitoring records, approvals, users, and AI outputs.",
    layer: "Data layer",
  },
  {
    icon: <FaBrain />,
    title: "LangGraph / AI Agent Layer",
    text: "LangGraph irrigation workflow with LLM reasoning, tool calls, fallbacks, and explainability-oriented recommendations.",
    layer: "Reasoning layer",
  },
  {
    icon: <FaShieldAlt />,
    title: "Human Approval Layer",
    text: "Approval queue keeps the farmer in control before sensitive actions and connects recommendations to review.",
    layer: "Trust layer",
  },
];

const productHighlights = [
  "Autonomous irrigation agent with crop, soil, weather, and sensor context.",
  "Human-in-the-loop approvals for safer AI recommendations.",
  "3D digital-twin farm view for zone-based monitoring.",
  "Flutter mobile app for field access, mobile AI modules, and IoT-aware farm visibility.",
];

const visualHighlights = [
  { title: "Landing Experience", image: firmaaLandingPage },
  { title: "Analytics Dashboard", image: firmaaDashboard },
  { title: "Irrigation Agent Pipeline", image: firmaaAgentPipeline },
  { title: "Mobile AI Modules", image: firmaaMobileModules },
];

const tradeoffs = [
  "Keeping autonomous irrigation useful while preserving farmer approval for sensitive actions.",
  "Unifying web, mobile, IoT, AI modules, and 3D monitoring into one coherent platform story.",
  "Making recommendations explainable enough to support practical farm decisions.",
];

const learnings = [
  {
    title: "Agent Workflow Design",
    text: "Agentic AI needs validation layers, fallback rules, and human approval before it feels responsible in real workflows.",
    area: "LangGraph / responsible AI",
  },
  {
    title: "3D Dashboard Thinking",
    text: "A 3D digital twin is strongest when it clarifies zone context instead of acting as decoration.",
    area: "Three.js farm view",
  },
  {
    title: "Full-Stack Integration",
    text: "Product identity, dashboard UX, mobile access, and backend architecture all have to move together in platform projects.",
    area: "Next.js / FastAPI / Flutter",
  },
  {
    title: "Structured Delivery",
    text: "TDSP helped organize the technical work around data, model behavior, implementation, and review.",
    area: "Methodology",
  },
];

const trustCards = [
  {
    title: "Safety",
    icon: <FaShieldAlt />,
    summary: "Sensitive irrigation decisions stay controlled instead of fully automatic.",
    checks: ["Safety checks", "Human approval before sensitive actions"],
  },
  {
    title: "Validation",
    icon: <FaCheckCircle />,
    summary: "The agent recommendation is filtered before it reaches the farmer.",
    checks: ["Validation layers", "Fallback rules", "Tool-assisted decision support"],
  },
  {
    title: "Explainability",
    icon: <FaBrain />,
    summary: "Recommendations are designed to be understandable and reviewable.",
    checks: ["LLM reasoning", "Explainable recommendations", "Water volume estimation"],
  },
];

const projectInfo = [
  ["My Role", "Project Lead / AI Agent Engineer"],
  ["Project Name", "Firmaa"],
  ["Category", "AI-Powered Smart Farming Platform"],
  ["Timeline", "February - May 2026"],
  ["Methodology", "TDSP"],
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
    <div className="relative min-h-screen overflow-hidden bg-[#070640] text-white">
      <ParticlesBackground />
      <Navbar />

      <main className="relative z-10">
        <section className="px-6 pb-16 pt-32 md:px-12 lg:px-20">
          <div className="mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-8 flex flex-wrap items-center gap-3 text-sm text-gray-300">
                <Link to="/" className="transition hover:text-[#7AC943]">Home</Link>
                <span>/</span>
                <Link to="/portfolio" className="transition hover:text-[#7AC943]">Portfolio</Link>
                <span>/</span>
                <span className="text-[#7AC943]">Firmaa</span>
              </div>

              <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
                <div>
                  <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#7AC943]/30 bg-[#7AC943]/10 px-4 py-2 text-sm font-semibold text-[#DDF6A1]">
                    <FaSeedling aria-hidden="true" />
                    Agentic AI smart farming platform
                  </div>
                  <h1 className="mb-6 text-4xl font-black leading-tight md:text-6xl">
                    Firmaa
                    <span className="block text-[#7AC943]">Autonomous Irrigation Agent & Digital Farm Platform</span>
                  </h1>
                  <p className="mb-7 max-w-3xl text-lg leading-relaxed text-gray-200 md:text-xl">
                    AI-powered smart agriculture platform combining a LangGraph Autonomous Irrigation Agent,
                    FastAPI, MongoDB, Next.js, Flutter mobile access, and a Three.js 3D digital-twin farm view.
                  </p>
                  <p className="mb-8 max-w-3xl text-base leading-8 text-gray-300">
                    Firmaa helps farmers monitor zones, reason about irrigation decisions, estimate water needs,
                    and approve AI recommendations through a full-stack dashboard and field-ready mobile experience.
                  </p>

                  <div className="mb-8 flex flex-wrap gap-3">
                    {["LangGraph", "Human-in-the-loop", "FastAPI", "MongoDB", "Next.js", "Three.js", "Flutter"].map((item) => (
                      <span key={item} className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-gray-200">
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-4">
                    <a href="#firmaa-demo" className="inline-flex items-center gap-2 rounded-full bg-[#7AC943] px-6 py-3 font-semibold text-[#081824] shadow-lg shadow-[#7AC943]/25 transition hover:bg-[#92D957]">
                      <FaPlay aria-hidden="true" />
                      Watch demo
                    </a>
                    <Link to="/portfolio" className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3 font-semibold text-white transition hover:border-[#7AC943]/60 hover:bg-[#7AC943]/10">
                      <FaArrowLeft aria-hidden="true" />
                      Back to Portfolio
                    </Link>
                  </div>
                </div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.7, delay: 0.1 }}
                  className="rounded-3xl border border-white/15 bg-white/10 p-6 shadow-2xl shadow-black/30 backdrop-blur-xl"
                >
                  <div className="mb-4 flex items-center justify-center gap-4 rounded-2xl border border-white/10 bg-[#08073d]/70 px-5 py-4">
                    <img src={firmaaLogo} alt="Firmaa logo" className="h-16 w-16 object-contain" loading="eager" decoding="async" />
                    <img src={firmaaName} alt="Firmaa wordmark" className="h-10 max-w-[210px] object-contain" loading="eager" decoding="async" />
                  </div>
                  <button
                    type="button"
                    onClick={() => setSelectedImage({ src: firmaaSolutionCover, title: "Firmaa solution cover" })}
                    className="group relative w-full overflow-hidden rounded-2xl border border-white/10 bg-[#08073d]/70 p-3 focus:outline-none focus:ring-2 focus:ring-[#7AC943]/70"
                  >
                    <img
                      src={firmaaSolutionCover}
                      alt="Firmaa solution cover"
                      className="mx-auto max-h-[420px] w-auto max-w-full rounded-xl object-contain transition duration-300 group-hover:scale-[1.01]"
                      loading="eager"
                      decoding="async"
                    />
                    <span className="absolute right-5 top-5 inline-flex items-center gap-2 rounded-full bg-black/65 px-3 py-1 text-xs font-bold text-white opacity-0 transition group-hover:opacity-100">
                      <FaExpand /> View larger
                    </span>
                  </button>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="px-6 py-10 md:px-12 lg:px-20">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {metricCards.map((metric) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45 }}
                  className="rounded-2xl border border-white/15 bg-white/10 p-6 backdrop-blur-xl"
                >
                  <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-gray-400">{metric.label}</p>
                  <p className="mb-3 text-3xl font-black text-[#7AC943]">{metric.value}</p>
                  <p className="text-sm leading-relaxed text-gray-300">{metric.detail}</p>
                </motion.div>
              ))}
            </div>

            <motion.section
              id="firmaa-demo"
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mt-14 rounded-3xl border border-white/15 bg-white/10 p-5 shadow-2xl shadow-black/20 backdrop-blur-xl md:p-7"
              aria-labelledby="firmaa-demo-title"
            >
              <div className="mb-5">
                <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#7AC943]/30 bg-[#7AC943]/10 px-4 py-2 text-sm font-semibold text-[#DDF6A1]">
                  <FaPlay aria-hidden="true" />
                  Platform walkthrough
                </div>
                <h2 id="firmaa-demo-title" className="text-2xl font-black text-white md:text-3xl">
                  Demo Video
                </h2>
                <p className="mt-2 max-w-3xl text-sm leading-relaxed text-gray-300 md:text-base">
                  A walkthrough of the Firmaa smart agriculture platform, including the dashboard experience,
                  AI command center, and connected farm workflow.
                </p>
              </div>

              <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#08073d]/80 shadow-2xl shadow-black/30">
                <video
                  ref={demoVideoRef}
                  src={firmaaDemoVideo}
                  poster={firmaaLogo}
                  preload="metadata"
                  className="aspect-video w-full bg-black object-contain"
                  onEnded={() => setPlayingVideo(false)}
                  onPause={() => playingVideo && setPlayingVideo(false)}
                  controls={playingVideo}
                  playsInline
                  aria-label="Firmaa smart agriculture platform demo video"
                />
                {!playingVideo && (
                  <button
                    type="button"
                    aria-label="Play Firmaa demo video"
                    onClick={handlePlay}
                    className="absolute inset-0 flex items-center justify-center bg-black/40 transition-opacity duration-300 hover:bg-black/20 focus:outline-none focus:ring-2 focus:ring-[#7AC943]/70 focus:ring-inset"
                  >
                    <span className="flex h-16 w-16 items-center justify-center rounded-full bg-[#7AC943] shadow-lg transition-transform duration-300 group-hover:scale-110">
                      <FaPlay className="ml-1 text-xl text-[#081824]" aria-hidden="true" />
                    </span>
                  </button>
                )}
              </div>
            </motion.section>

            <div className="mt-14 grid gap-10 lg:grid-cols-[minmax(0,1fr)_360px]">
              <div className="space-y-10">
                <section className="rounded-3xl border border-white/15 bg-white/10 p-7 backdrop-blur-xl md:p-9">
                  <div className="mb-5 flex items-center gap-3 text-[#7AC943]">
                    <FaSeedling className="text-2xl" aria-hidden="true" />
                    <h2 className="text-2xl font-black">Project Summary</h2>
                  </div>
                  <p className="leading-relaxed text-gray-200">
                    Firmaa is an AI-powered smart agriculture platform built as an integrated project at ESPRIT. It combines a Next.js dashboard, Flutter mobile access, a FastAPI backend, MongoDB persistence, a Three.js digital-twin farm view, and AI modules for farm monitoring and decision support.
                  </p>
                </section>

                <section className="grid gap-5 md:grid-cols-2">
                  <div className="rounded-3xl border border-white/15 bg-white/10 p-7 backdrop-blur-xl">
                    <h2 className="mb-4 text-2xl font-black text-white">The Challenge</h2>
                    <p className="leading-relaxed text-gray-300">
                      Farmers often make irrigation, crop disease, livestock health, and insect monitoring decisions manually. Limited real-time information makes farm operations harder to coordinate and can leave decisions dependent on fragmented signals.
                    </p>
                  </div>
                  <div className="rounded-3xl border border-[#7AC943]/30 bg-[#7AC943]/10 p-7 backdrop-blur-xl">
                    <h2 className="mb-4 text-2xl font-black text-white">The Solution</h2>
                    <p className="leading-relaxed text-gray-100">
                      Firmaa brings smart farm operations into one platform: web monitoring, Flutter mobile access, AI recommendations, 3D farm visibility, mobile AI modules, and IoT-aware workflows designed around practical farm decisions.
                    </p>
                  </div>
                </section>

                <section className="rounded-3xl border border-white/15 bg-white/10 p-7 backdrop-blur-xl md:p-9">
                  <div className="mb-5 flex items-center gap-3 text-[#7AC943]">
                    <FaProjectDiagram className="text-2xl" aria-hidden="true" />
                    <h2 className="text-2xl font-black">My Role</h2>
                  </div>
                  <div className="mb-6 rounded-2xl border border-[#7AC943]/25 bg-[#7AC943]/10 p-5">
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#DDF6A1]">Project Lead / AI Agent Engineer</p>
                    <p className="mt-3 leading-relaxed text-gray-100">
                      I worked on the technical vision, agentic AI workflow, dashboard coherence, product identity, and the connection between AI recommendations and farmer approval.
                    </p>
                  </div>
                  <div className="grid gap-4 md:grid-cols-2">
                    {roleCards.map((item) => (
                      <div key={item.label} className="group rounded-2xl border border-white/10 bg-[#08073d]/70 p-5 transition hover:-translate-y-1 hover:border-[#7AC943]/50 hover:bg-[#0b1940]/80">
                        <div className="mb-4 flex items-start justify-between gap-4">
                          <div className="rounded-2xl border border-[#7AC943]/25 bg-[#7AC943]/10 p-3 text-2xl text-[#7AC943]">
                            {item.icon}
                          </div>
                          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-gray-300">
                            {item.area}
                          </span>
                        </div>
                        <h3 className="text-lg font-black text-white">{item.label}</h3>
                        <p className="mt-3 text-sm font-semibold text-[#DDF6A1]">{item.responsibility}</p>
                        <p className="mt-2 text-sm leading-6 text-gray-300">{item.impact}</p>
                      </div>
                    ))}
                  </div>
                </section>

                <section className="rounded-3xl border border-white/15 bg-white/10 p-7 backdrop-blur-xl md:p-9">
                  <div className="mb-5 flex items-center gap-3 text-[#7AC943]">
                    <FaCheckCircle className="text-2xl" aria-hidden="true" />
                    <h2 className="text-2xl font-black">Unified Platform Scope</h2>
                  </div>
                  <p className="mb-6 max-w-3xl text-sm leading-6 text-gray-300">
                    Firmaa is easier to understand as a connected platform map: monitoring, decision support, detection modules, mobile/offline access, and IoT data all feed the same smart farming experience.
                  </p>
                  <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                    {platformClusters.map((cluster) => (
                      <div key={cluster.title} className="rounded-2xl border border-white/10 bg-[#08073d]/70 p-5">
                        <div className="mb-4 flex items-center gap-3">
                          <div className="rounded-xl border border-[#7AC943]/25 bg-[#7AC943]/10 p-3 text-xl text-[#7AC943]">
                            {cluster.icon}
                          </div>
                          <h3 className="font-black text-white">{cluster.title}</h3>
                        </div>
                        <div className="space-y-3">
                          {cluster.items.map((item) => (
                            <div key={item} className="flex gap-3 text-sm leading-6 text-gray-300">
                              <FaCheckCircle className="mt-1 shrink-0 text-[#7AC943]" aria-hidden="true" />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                <section className="rounded-3xl border border-white/15 bg-white/10 p-7 backdrop-blur-xl md:p-9">
                  <div className="mb-5 flex items-center gap-3 text-[#7AC943]">
                    <FaWater className="text-2xl" aria-hidden="true" />
                    <h2 className="text-2xl font-black">Agentic AI Irrigation Workflow</h2>
                  </div>
                  <p className="mb-6 max-w-3xl text-sm leading-6 text-gray-300">
                    The irrigation agent is presented as a decision workflow, from farm signals to explainable recommendation and human-approved action.
                  </p>
                  <div className="relative grid gap-4 md:grid-cols-2 xl:grid-cols-6">
                    {workflow.map((step, index) => (
                      <div key={step.title} className="relative rounded-2xl border border-white/10 bg-[#08073d]/70 p-5 transition hover:-translate-y-1 hover:border-[#7AC943]/45">
                        {index < workflow.length - 1 && (
                          <FaArrowRight className="absolute -right-3 top-10 z-10 hidden rounded-full bg-[#070640] text-[#7AC943] xl:block" aria-hidden="true" />
                        )}
                        <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full border border-[#7AC943]/30 bg-[#7AC943]/15 text-sm font-black text-[#DDF6A1]">
                          0{index + 1}
                        </div>
                        <h3 className="font-bold text-white">{step.title}</h3>
                        <p className="mt-3 text-sm leading-relaxed text-gray-300">{step.text}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {["LangGraph", "LLM reasoning", "Tool-assisted agents", "Validation", "Human-in-the-loop"].map((item) => (
                      <span key={item} className="rounded-full border border-[#7AC943]/25 bg-[#7AC943]/10 px-3 py-1 text-xs font-bold text-[#DDF6A1]">
                        {item}
                      </span>
                    ))}
                  </div>
                </section>

                <section className="rounded-3xl border border-white/15 bg-white/10 p-7 backdrop-blur-xl md:p-9">
                  <div className="mb-5 flex items-center gap-3 text-[#7AC943]">
                    <FaServer className="text-2xl" aria-hidden="true" />
                    <h2 className="text-2xl font-black">Architecture / Technical Approach</h2>
                  </div>
                  <p className="mb-6 max-w-3xl text-sm leading-6 text-gray-300">
                    The platform architecture connects farm inputs, dashboard interfaces, mobile access, backend orchestration, stored records, AI reasoning, and farmer approval into one workflow.
                  </p>
                  <div className="grid gap-4">
                    {architecture.map((item) => (
                      <div key={item.title} className="grid gap-4 rounded-2xl border border-white/10 bg-[#08073d]/70 p-5 transition hover:border-[#7AC943]/40 md:grid-cols-[180px_minmax(0,1fr)] md:items-center">
                        <div className="flex items-center gap-3">
                          <div className="rounded-2xl border border-[#7AC943]/25 bg-[#7AC943]/10 p-3 text-2xl text-[#7AC943]">
                            {item.icon}
                          </div>
                          <div>
                            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#DDF6A1]">{item.layer}</p>
                            <h3 className="mt-1 font-bold text-white">{item.title}</h3>
                          </div>
                        </div>
                        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                          <p className="text-sm leading-relaxed text-gray-300">{item.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <p className="mt-5 rounded-2xl border border-[#7AC943]/25 bg-[#7AC943]/10 p-4 font-mono text-sm text-[#DDF6A1]">
                    Tech Stack: LangGraph - FastAPI - MongoDB - Next.js - Three.js - React - Flutter - IoT / sensor data - Human-in-the-loop
                  </p>
                </section>

                <section className="rounded-3xl border border-white/15 bg-white/10 p-7 backdrop-blur-xl md:p-9">
                  <div className="mb-5 flex items-center gap-3 text-[#7AC943]">
                    <FaShieldAlt className="text-2xl" aria-hidden="true" />
                    <h2 className="text-2xl font-black">Safety, Validation, and Explainability</h2>
                  </div>
                  <p className="mb-6 max-w-3xl leading-relaxed text-gray-200">
                    The Autonomous Irrigation Agent was designed around LLM reasoning, tool-assisted decision support, validation layers, fallback rules, safety checks, explainable recommendations, and human approval before sensitive actions.
                  </p>
                  <div className="grid gap-4 md:grid-cols-3">
                    {trustCards.map((card) => (
                      <div key={card.title} className="rounded-2xl border border-[#7AC943]/20 bg-[#071f35]/70 p-5">
                        <div className="mb-4 flex items-center gap-3">
                          <div className="rounded-xl bg-[#7AC943]/15 p-3 text-xl text-[#7AC943]">{card.icon}</div>
                          <h3 className="font-black text-white">{card.title}</h3>
                        </div>
                        <p className="mb-4 text-sm leading-6 text-gray-300">{card.summary}</p>
                        <div className="space-y-2">
                          {card.checks.map((item) => (
                            <div key={item} className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold text-[#DDF6A1]">
                              <FaCheckCircle className="shrink-0 text-[#7AC943]" aria-hidden="true" />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                <section className="rounded-3xl border border-white/15 bg-white/10 p-7 backdrop-blur-xl md:p-9">
                  <div className="mb-5 flex items-center gap-3 text-[#7AC943]">
                    <FaDatabase className="text-2xl" aria-hidden="true" />
                    <h2 className="text-2xl font-black">Challenges and Tradeoffs</h2>
                  </div>
                  <div className="grid gap-3 md:grid-cols-3">
                    {tradeoffs.map((item) => (
                      <div key={item} className="rounded-2xl border border-white/10 bg-[#08073d]/70 p-4 text-sm leading-relaxed text-gray-300">
                        {item}
                      </div>
                    ))}
                  </div>
                </section>

                <section className="rounded-3xl border border-white/15 bg-white/10 p-7 backdrop-blur-xl md:p-9">
                  <div className="mb-5 flex items-center gap-3 text-[#7AC943]">
                    <FaBrain className="text-2xl" aria-hidden="true" />
                    <h2 className="text-2xl font-black">What I Learned</h2>
                  </div>
                  <div className="grid gap-4 md:grid-cols-2">
                    {learnings.map((item) => (
                      <div key={item.title} className="rounded-2xl border border-white/10 bg-[#08073d]/70 p-5 transition hover:border-[#7AC943]/40">
                        <span className="rounded-full border border-[#7AC943]/25 bg-[#7AC943]/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-[#DDF6A1]">
                          {item.area}
                        </span>
                        <h3 className="mt-4 text-lg font-black text-white">{item.title}</h3>
                        <p className="mt-3 text-sm leading-relaxed text-gray-300">{item.text}</p>
                      </div>
                    ))}
                  </div>
                </section>
              </div>

              <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
                <div className="rounded-3xl border border-white/15 bg-white/10 p-6 backdrop-blur-xl">
                  <h2 className="mb-5 text-xl font-black">Project Info</h2>
                  <div className="space-y-4 text-sm">
                    {projectInfo.map(([label, value]) => (
                      <div key={label}>
                        <p className="text-gray-400">{label}</p>
                        <p className="font-semibold text-white">{value}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-3xl border border-white/15 bg-white/10 p-6 backdrop-blur-xl">
                  <h2 className="mb-4 text-xl font-black">Technologies</h2>
                  <div className="flex flex-wrap gap-2">
                    {stack.map((item) => (
                      <span key={item} className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-sm text-gray-200">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="rounded-3xl border border-white/15 bg-white/10 p-6 backdrop-blur-xl">
                  <h2 className="mb-4 text-xl font-black">Product Highlights</h2>
                  <ul className="space-y-3 text-sm leading-relaxed text-gray-300">
                    {productHighlights.map((item) => (
                      <li key={item} className="border-l-2 border-[#7AC943] pl-4">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-3xl border border-white/15 bg-white/10 p-6 backdrop-blur-xl">
                  <h2 className="mb-4 text-xl font-black">Platform Visuals</h2>
                  <div className="grid gap-3">
                    {visualHighlights.map((item) => (
                      <button
                        key={item.title}
                        type="button"
                        onClick={() => setSelectedImage({ src: item.image, title: item.title })}
                        className="group overflow-hidden rounded-2xl border border-white/10 bg-[#08073d]/70 text-left transition hover:border-[#7AC943]/60 focus:outline-none focus:ring-2 focus:ring-[#7AC943]/70"
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
                </div>

                <Link
                  to="/contact"
                  className="block rounded-2xl bg-[#7AC943] px-5 py-4 text-center font-bold text-[#081824] shadow-lg shadow-[#7AC943]/20 transition hover:-translate-y-1 hover:bg-[#92D957]"
                >
                  Discuss this work
                </Link>
              </aside>
            </div>

            <div className="mt-14 rounded-3xl border border-white/15 bg-white/10 p-7 backdrop-blur-xl md:p-9">
              <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
                <div>
                  <h2 className="mb-2 text-2xl font-black">Explore the project</h2>
                  <p className="text-gray-300">Watch the demo, review the platform visuals, return to the project list, or start a conversation.</p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <a href="#firmaa-demo" className="inline-flex items-center gap-2 rounded-full bg-[#7AC943] px-5 py-3 font-semibold text-[#081824] transition hover:bg-[#92D957]">
                    <FaPlay aria-hidden="true" />
                    Demo
                  </a>
                  <Link to="/portfolio" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 font-semibold text-white transition hover:border-[#7AC943]/60 hover:bg-[#7AC943]/10">
                    Portfolio
                  </Link>
                  <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 font-semibold text-white transition hover:border-[#7AC943]/60 hover:bg-[#7AC943]/10">
                    Contact Me
                    <FaArrowRight aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </div>

            <motion.div
              className="mt-14 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-10 md:flex-row"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Link to="/portfolio" className="group flex items-center gap-3 text-gray-400 transition-colors hover:text-white">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 transition-all group-hover:border-[#7AC943] group-hover:bg-[#7AC943]">
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
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 transition-all group-hover:border-[#7AC943] group-hover:bg-[#7AC943]">
                  <FaArrowRight />
                </div>
              </Link>
            </motion.div>
          </div>
        </section>
      </main>

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
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#DDF6A1]">{selectedImage.title}</p>
              <button
                type="button"
                onClick={() => setSelectedImage(null)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition hover:border-[#DDF6A1]/70 hover:text-[#DDF6A1] focus:outline-none focus:ring-2 focus:ring-[#DDF6A1]/70"
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
