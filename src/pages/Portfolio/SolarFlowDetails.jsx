import { motion } from "framer-motion";
import { useRef, useState } from "react";
import {
  FaArrowLeft,
  FaArrowRight,
  FaBolt,
  FaDatabase,
  FaLeaf,
  FaMobileAlt,
  FaPlay,
  FaProjectDiagram,
  FaServer,
  FaSolarPanel,
  FaWifi,
} from "react-icons/fa";
import { SiDart, SiFirebase, SiFlutter } from "react-icons/si";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import ParticlesBackground from "../../components/ParticlesBackground";

import solarLogo from "../../assets/images/logo_1555.png";
import maintenanceVideo from "../../assets/videos/Maintennace2.0.mp4";
import adminVideo from "../../assets/videos/admin2.0.mp4";
import userVideo from "../../assets/videos/user2.0.mp4";

const metricCards = [
  { label: "Platform", value: "Flutter", detail: "Cross-platform mobile app" },
  { label: "Domain", value: "IoT", detail: "Solar energy monitoring" },
  { label: "Duration", value: "3 months", detail: "Project timeline" },
  { label: "Focus", value: "Realtime", detail: "Energy analytics and device control" },
];

const roleCards = [
  {
    title: "Mobile Product Build",
    area: "Flutter + Dart",
    text: "Created the SolarFlow Flutter app for real-time solar energy analytics.",
  },
  {
    title: "Role-Based UX",
    area: "User + Maintenance + Admin",
    text: "Designed mobile screens for user, maintenance, and admin workflows.",
  },
  {
    title: "Connected Data Flow",
    area: "Firebase + IoT",
    text: "Connected the app experience with Firebase and IoT-focused data handling.",
  },
  {
    title: "Demo Storytelling",
    area: "Product walkthroughs",
    text: "Built demo flows showing monitoring, maintenance, and administration features.",
  },
];

const platformFlow = [
  {
    title: "Mobile Dashboard",
    label: "Flutter",
    text: "Flutter provides the main interface for tracking solar energy production and consumption.",
  },
  {
    title: "Connected Systems",
    label: "IoT",
    text: "IoT-focused flows support monitoring and remote control of connected devices.",
  },
  {
    title: "Realtime Data",
    label: "Firebase",
    text: "Firebase supports app data handling for the mobile experience.",
  },
  {
    title: "Role-Based Features",
    label: "3 demos",
    text: "Separate user, maintenance, and admin demos show how different users interact with the system.",
  },
];

const featureGroups = [
  {
    icon: <FaBolt />,
    title: "Energy Visibility",
    items: ["Real-time monitoring", "Production tracking", "Consumption tracking"],
  },
  {
    icon: <FaWifi />,
    title: "Connected Control",
    items: ["IoT control", "Remote device control", "Connected system flows"],
  },
  {
    icon: <FaMobileAlt />,
    title: "Mobile Experience",
    items: ["Responsive Flutter UI", "iOS and Android support", "Small-screen dashboard clarity"],
  },
  {
    icon: <FaDatabase />,
    title: "Energy Optimization",
    items: ["Renewable usage optimization", "Energy analytics", "Firebase-backed app data"],
  },
];

const roleWorkflows = [
  {
    title: "User Flow",
    text: "A mobile walkthrough focused on tracking solar production, consumption, and everyday energy visibility.",
  },
  {
    title: "Maintenance Flow",
    text: "A maintenance-focused demo showing how operational activity can be separated from the end-user view.",
  },
  {
    title: "Admin Flow",
    text: "An admin demo that supports broader monitoring and administration activity inside the same mobile product.",
  },
];

const tradeoffCards = [
  {
    title: "Multiple Roles",
    text: "Designing one mobile experience that can serve user, maintenance, and admin needs.",
  },
  {
    title: "Dashboard Clarity",
    text: "Keeping energy data understandable inside a small mobile dashboard.",
  },
  {
    title: "IoT Simplicity",
    text: "Balancing IoT control features with a simple user-facing interface.",
  },
];

const learningCards = [
  {
    title: "Mobile Dashboard Design",
    area: "Flutter",
    text: "SolarFlow strengthened my understanding of mobile dashboards built around fast scanning and clear metrics.",
  },
  {
    title: "IoT-Oriented App Flows",
    area: "Connected systems",
    text: "The project helped me organize monitoring and remote-control flows for a solar energy context.",
  },
  {
    title: "Role-Based Product Thinking",
    area: "User roles",
    text: "It showed how one app can support user, maintenance, and admin needs without making the UI feel fragmented.",
  },
  {
    title: "Energy Data Communication",
    area: "Analytics",
    text: "It improved how I present production, consumption, and renewable usage optimization inside a compact interface.",
  },
];

const stack = ["Flutter", "Dart", "Firebase", "IoT Protocols"];

const projectInfo = [
  ["My Role", "Flutter Developer"],
  ["Project Name", "SolarFlow App"],
  ["Category", "Mobile App Development"],
  ["Main Focus", "Real-time energy analytics"],
  ["Duration", "3 Months"],
];

const demoVideos = [
  {
    key: "user",
    title: "Users Features",
    label: "Play SolarFlow user features demo",
    src: userVideo,
  },
  {
    key: "maintenance",
    title: "Maintenance Features",
    label: "Play SolarFlow maintenance features demo",
    src: maintenanceVideo,
  },
  {
    key: "admin",
    title: "Admin Features",
    label: "Play SolarFlow admin features demo",
    src: adminVideo,
  },
];

const SolarFlowDetails = () => {
  const [playingVideo, setPlayingVideo] = useState(null);
  const userVideoRef = useRef(null);
  const maintenanceVideoRef = useRef(null);
  const adminVideoRef = useRef(null);
  const videoRefs = {
    user: userVideoRef,
    maintenance: maintenanceVideoRef,
    admin: adminVideoRef,
  };

  const handlePlay = (videoName) => {
    const selectedVideo = videoRefs[videoName].current;

    if (!selectedVideo) {
      return;
    }

    if (playingVideo === videoName) {
      selectedVideo.pause();
      setPlayingVideo(null);
      return;
    }

    Object.entries(videoRefs).forEach(([key, ref]) => {
      if (key !== videoName) {
        ref.current?.pause();
      }
    });

    selectedVideo.play();
    setPlayingVideo(videoName);
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
                <Link to="/" className="transition hover:text-[#DDEFEA]">Home</Link>
                <span>/</span>
                <Link to="/portfolio" className="transition hover:text-[#DDEFEA]">Portfolio</Link>
                <span>/</span>
                <span className="text-[#DDEFEA]">SolarFlow</span>
              </div>

              <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
                <div>
                  <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#DDEFEA]/30 bg-[#DDEFEA]/10 px-4 py-2 text-sm font-semibold text-[#F3FFFB]">
                    <FaSolarPanel aria-hidden="true" />
                    Mobile + IoT energy platform
                  </div>
                  <h1 className="mb-6 text-4xl font-black leading-tight md:text-6xl">
                    SolarFlow
                    <span className="block text-[#DDEFEA]">Solar Energy Monitoring App</span>
                  </h1>
                  <p className="mb-7 max-w-3xl text-lg leading-relaxed text-gray-200 md:text-xl">
                    Flutter mobile app for solar energy monitoring, IoT control, and role-based user, maintenance, and admin workflows.
                  </p>
                  <p className="mb-8 max-w-3xl text-base leading-8 text-gray-300">
                    SolarFlow is a cross-platform mobile application developed using Flutter to monitor and manage solar-powered devices in real time. It allows users to track energy production, control connected systems, and optimize renewable energy usage while keeping the experience seamless across iOS and Android.
                  </p>

                  <div className="mb-8 flex flex-wrap gap-3">
                    {["Flutter", "Dart", "Firebase", "IoT Protocols", "3 Months"].map((item) => (
                      <span key={item} className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-gray-200">
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-4">
                    <a href="#solarflow-demo" className="inline-flex items-center gap-2 rounded-full bg-[#DDEFEA] px-6 py-3 font-semibold text-[#002040] shadow-lg shadow-[#DDEFEA]/25 transition hover:bg-[#F3FFFB]">
                      <FaPlay aria-hidden="true" />
                      Watch demos
                    </a>
                    <Link to="/portfolio" className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3 font-semibold text-white transition hover:border-[#DDEFEA]/60 hover:bg-[#DDEFEA]/10">
                      <FaArrowLeft aria-hidden="true" />
                      Back to Portfolio
                    </Link>
                  </div>
                </div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.7, delay: 0.1 }}
                  className="rounded-3xl border border-white/15 bg-white/10 p-10 shadow-2xl shadow-black/30 backdrop-blur-xl"
                >
                  <img
                    src={solarLogo}
                    alt="SolarFlow Logo"
                    className="mx-auto w-full max-w-[360px] rounded-2xl object-contain drop-shadow-2xl"
                    loading="eager"
                    decoding="async"
                  />
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
                  <p className="mb-3 text-4xl font-black text-[#DDEFEA]">{metric.value}</p>
                  <p className="text-sm leading-relaxed text-gray-300">{metric.detail}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-14 grid gap-10 lg:grid-cols-[minmax(0,1fr)_360px]">
              <div className="space-y-10">
                <section className="rounded-3xl border border-white/15 bg-white/10 p-7 backdrop-blur-xl md:p-9">
                  <div className="mb-5 flex items-center gap-3 text-[#DDEFEA]">
                    <FaLeaf className="text-2xl" aria-hidden="true" />
                    <h2 className="text-2xl font-black">Project Summary</h2>
                  </div>
                  <p className="leading-relaxed text-gray-200">
                    The app was built as part of an internship project focused on IoT integration, real-time data handling, and energy efficiency. The core challenge was making solar production, consumption, maintenance, and administration activity clear inside one mobile-first product.
                  </p>
                </section>

                <section className="grid gap-5 md:grid-cols-2">
                  <div className="rounded-3xl border border-white/15 bg-white/10 p-7 backdrop-blur-xl">
                    <h2 className="mb-4 text-2xl font-black text-white">The Problem</h2>
                    <p className="leading-relaxed text-gray-300">
                      Solar energy systems need clear mobile visibility for production, consumption, maintenance, and administration activity.
                    </p>
                  </div>
                  <div className="rounded-3xl border border-[#DDEFEA]/30 bg-[#DDEFEA]/10 p-7 backdrop-blur-xl">
                    <h2 className="mb-4 text-2xl font-black text-white">The Solution</h2>
                    <p className="leading-relaxed text-gray-100">
                      SolarFlow brings monitoring, IoT control, and role-based workflows into one Flutter mobile experience.
                    </p>
                  </div>
                </section>

                <section className="rounded-3xl border border-white/15 bg-white/10 p-7 backdrop-blur-xl md:p-9">
                  <div className="mb-5 flex items-center gap-3 text-[#DDEFEA]">
                    <FaProjectDiagram className="text-2xl" aria-hidden="true" />
                    <h2 className="text-2xl font-black">My Role</h2>
                  </div>
                  <p className="mb-5 leading-relaxed text-gray-200">
                    As Flutter Developer, I focused on the mobile product experience, data-connected dashboards, and demo flows for the three core user roles.
                  </p>
                  <div className="grid gap-4 md:grid-cols-2">
                    {roleCards.map((role) => (
                      <div key={role.title} className="rounded-2xl border border-white/10 bg-[#08073d]/70 p-5 transition-colors hover:border-[#DDEFEA]/40">
                        <p className="mb-3 text-xs font-bold uppercase tracking-wide text-[#F3FFFB]">{role.area}</p>
                        <h3 className="mb-2 text-lg font-black text-white">{role.title}</h3>
                        <p className="text-sm leading-relaxed text-gray-300">{role.text}</p>
                      </div>
                    ))}
                  </div>
                </section>

                <section className="rounded-3xl border border-white/15 bg-white/10 p-7 backdrop-blur-xl md:p-9">
                  <div className="mb-5 flex items-center gap-3 text-[#DDEFEA]">
                    <FaBolt className="text-2xl" aria-hidden="true" />
                    <h2 className="text-2xl font-black">Key Features</h2>
                  </div>
                  <div className="grid gap-4 md:grid-cols-2">
                    {featureGroups.map((feature) => (
                      <div key={feature.title} className="rounded-2xl border border-white/10 bg-[#08073d]/70 p-5 transition-colors hover:border-[#DDEFEA]/40">
                        <div className="mb-4 text-3xl text-[#DDEFEA]">{feature.icon}</div>
                        <h3 className="mb-2 font-bold text-white">{feature.title}</h3>
                        <div className="space-y-2">
                          {feature.items.map((item) => (
                            <p key={item} className="flex gap-2 text-sm leading-relaxed text-gray-300">
                              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#DDEFEA]" />
                              <span>{item}</span>
                            </p>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                <section className="rounded-3xl border border-white/15 bg-white/10 p-7 backdrop-blur-xl md:p-9">
                  <div className="mb-5 flex items-center gap-3 text-[#DDEFEA]">
                    <FaServer className="text-2xl" aria-hidden="true" />
                    <h2 className="text-2xl font-black">Architecture / Technical Approach</h2>
                  </div>
                  <div className="grid gap-4 md:grid-cols-2">
                    {platformFlow.map((step, index) => (
                      <div key={step.title} className="rounded-2xl border border-white/10 bg-[#08073d]/70 p-5">
                        <div className="mb-4 flex items-center justify-between gap-3">
                          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#DDEFEA] text-sm font-black text-[#002040]">
                            {index + 1}
                          </span>
                          <span className="rounded-full border border-[#DDEFEA]/30 bg-[#DDEFEA]/10 px-3 py-1 text-xs font-semibold text-[#F3FFFB]">
                            {step.label}
                          </span>
                        </div>
                        <h3 className="font-bold text-white">{step.title}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-gray-300">{step.text}</p>
                      </div>
                    ))}
                  </div>
                  <p className="mt-5 rounded-2xl border border-[#DDEFEA]/25 bg-[#DDEFEA]/10 p-4 font-mono text-sm text-[#F3FFFB]">
                    Tech Stack: Flutter - Dart - Firebase - IoT Protocols
                  </p>
                </section>

                <section className="rounded-3xl border border-white/15 bg-white/10 p-7 backdrop-blur-xl md:p-9">
                  <div className="mb-5 flex items-center gap-3 text-[#DDEFEA]">
                    <FaMobileAlt className="text-2xl" aria-hidden="true" />
                    <h2 className="text-2xl font-black">Role-Based Workflows</h2>
                  </div>
                  <p className="mb-5 leading-relaxed text-gray-200">
                    SolarFlow is organized around three demo paths so recruiters can quickly understand who uses the app and why.
                  </p>
                  <div className="grid gap-4 md:grid-cols-3">
                    {roleWorkflows.map((flow) => (
                      <div key={flow.title} className="rounded-2xl border border-white/10 bg-[#08073d]/70 p-5">
                        <h3 className="mb-2 font-bold text-white">{flow.title}</h3>
                        <p className="text-sm leading-relaxed text-gray-300">{flow.text}</p>
                      </div>
                    ))}
                  </div>
                </section>

                <section className="rounded-3xl border border-white/15 bg-white/10 p-7 backdrop-blur-xl md:p-9">
                  <div className="mb-5 flex items-center gap-3 text-[#DDEFEA]">
                    <FaDatabase className="text-2xl" aria-hidden="true" />
                    <h2 className="text-2xl font-black">Challenges and Tradeoffs</h2>
                  </div>
                  <div className="grid gap-3 md:grid-cols-3">
                    {tradeoffCards.map((item) => (
                      <div key={item.title} className="rounded-2xl border border-white/10 bg-[#08073d]/70 p-5">
                        <h3 className="mb-2 font-bold text-white">{item.title}</h3>
                        <p className="text-sm leading-relaxed text-gray-300">{item.text}</p>
                      </div>
                    ))}
                  </div>
                </section>

                <section className="rounded-3xl border border-white/15 bg-white/10 p-7 backdrop-blur-xl md:p-9">
                  <div className="mb-5 flex items-center gap-3 text-[#DDEFEA]">
                    <FaMobileAlt className="text-2xl" aria-hidden="true" />
                    <h2 className="text-2xl font-black">What I Learned</h2>
                  </div>
                  <div className="grid gap-4 md:grid-cols-2">
                    {learningCards.map((item) => (
                      <div key={item.title} className="rounded-2xl border border-white/10 bg-[#08073d]/70 p-5">
                        <p className="mb-2 text-xs font-bold uppercase tracking-wide text-[#F3FFFB]">{item.area}</p>
                        <h3 className="mb-2 font-bold text-white">{item.title}</h3>
                        <p className="text-sm leading-relaxed text-gray-300">{item.text}</p>
                      </div>
                    ))}
                  </div>
                </section>
              </div>

              <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
                <div className="rounded-3xl border border-white/15 bg-white/10 p-6 backdrop-blur-xl">
                  <h2 className="mb-5 text-xl font-black">Project Details</h2>
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
                  <div className="space-y-3 text-sm">
                    <p className="flex items-center gap-2 text-gray-200"><SiFlutter className="text-[#DDEFEA]" /> Flutter</p>
                    <p className="flex items-center gap-2 text-gray-200"><SiDart className="text-[#DDEFEA]" /> Dart</p>
                    <p className="flex items-center gap-2 text-gray-200"><SiFirebase className="text-[#DDEFEA]" /> Firebase</p>
                    <p className="flex items-center gap-2 text-gray-200"><FaWifi className="text-[#DDEFEA]" /> IoT Integration</p>
                  </div>
                </div>

                <div className="rounded-3xl border border-white/15 bg-white/10 p-6 backdrop-blur-xl">
                  <h2 className="mb-4 text-xl font-black">Main Stack</h2>
                  <div className="flex flex-wrap gap-2">
                    {stack.map((item) => (
                      <span key={item} className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-sm text-gray-200">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <Link
                  to="/contact"
                  className="block rounded-2xl bg-[#DDEFEA] px-5 py-4 text-center font-bold text-[#002040] shadow-lg shadow-[#DDEFEA]/20 transition hover:-translate-y-1 hover:bg-[#F3FFFB]"
                >
                  Discuss this work
                </Link>
              </aside>
            </div>

            <motion.section
              id="solarflow-demo"
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mt-14 rounded-3xl border border-white/15 bg-white/10 p-5 shadow-2xl shadow-black/20 backdrop-blur-xl md:p-7"
              aria-labelledby="solarflow-demo-title"
            >
              <div className="mb-8">
                <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#DDEFEA]/30 bg-[#DDEFEA]/10 px-4 py-2 text-sm font-semibold text-[#F3FFFB]">
                  <FaPlay aria-hidden="true" />
                  Role-based demos
                </div>
                <h2 id="solarflow-demo-title" className="text-2xl font-black text-white md:text-3xl">
                  Demo Videos
                </h2>
                <p className="mt-2 max-w-3xl text-sm leading-relaxed text-gray-300 md:text-base">
                  Three mobile walkthroughs showing the user, maintenance, and admin sides of the SolarFlow experience.
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-3">
                {demoVideos.map((video, index) => (
                  <motion.div
                    key={video.key}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: index * 0.1 }}
                    className="flex flex-col items-center rounded-2xl border border-white/10 bg-[#08073d]/70 p-5"
                  >
                    <h3 className="mb-4 text-center text-xl font-bold text-white">{video.title}</h3>
                    <div className="relative aspect-[9/16] w-full max-w-[300px] overflow-hidden rounded-2xl border border-white/10 bg-black shadow-lg shadow-black/30">
                      <video
                        ref={videoRefs[video.key]}
                        src={video.src}
                        poster={solarLogo}
                        preload="metadata"
                        className="h-full w-full object-cover"
                        onEnded={() => setPlayingVideo(null)}
                        onPause={() => playingVideo === video.key && setPlayingVideo(null)}
                        controls={playingVideo === video.key}
                        playsInline
                      />
                      {playingVideo !== video.key && (
                        <button
                          type="button"
                          aria-label={video.label}
                          onClick={() => handlePlay(video.key)}
                          className="absolute inset-0 flex items-center justify-center bg-black/40 transition-opacity duration-300 hover:bg-black/20 focus:outline-none focus:ring-2 focus:ring-[#DDEFEA]/70 focus:ring-inset"
                        >
                          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-[#DDEFEA] shadow-lg transition-transform duration-300 hover:scale-110">
                            <FaPlay className="ml-1 text-xl text-[#002040]" aria-hidden="true" />
                          </span>
                        </button>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            <div className="mt-14 rounded-3xl border border-white/15 bg-white/10 p-7 backdrop-blur-xl md:p-9">
              <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
                <div>
                  <h2 className="mb-2 text-2xl font-black">Explore the project</h2>
                  <p className="text-gray-300">Watch the demo flows, return to the project list, or start a conversation.</p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <a href="#solarflow-demo" className="inline-flex items-center gap-2 rounded-full bg-[#DDEFEA] px-5 py-3 font-semibold text-[#002040] transition hover:bg-[#F3FFFB]">
                    <FaPlay aria-hidden="true" />
                    Demos
                  </a>
                  <Link to="/portfolio" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 font-semibold text-white transition hover:border-[#DDEFEA]/60 hover:bg-[#DDEFEA]/10">
                    Portfolio
                  </Link>
                  <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 font-semibold text-white transition hover:border-[#DDEFEA]/60 hover:bg-[#DDEFEA]/10">
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
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 transition-all group-hover:border-[#DDEFEA] group-hover:bg-[#DDEFEA] group-hover:text-[#002040]">
                  <FaArrowLeft />
                </div>
                <div>
                  <span className="block text-xs uppercase tracking-wider text-gray-500 group-hover:text-gray-300">Previous Project</span>
                  <span className="text-lg font-semibold">SmartClaim</span>
                </div>
              </Link>

              <Link to="/portfolio" className="group flex items-center gap-3 text-right text-gray-400 transition-colors hover:text-white">
                <div>
                  <span className="block text-xs uppercase tracking-wider text-gray-500 group-hover:text-gray-300">Next Project</span>
                  <span className="text-lg font-semibold">Onboardify</span>
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 transition-all group-hover:border-[#DDEFEA] group-hover:bg-[#DDEFEA] group-hover:text-[#002040]">
                  <FaArrowRight />
                </div>
              </Link>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default SolarFlowDetails;
