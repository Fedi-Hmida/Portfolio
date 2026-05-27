import { motion } from "framer-motion";
import { useRef, useState } from "react";
import {
  FaArrowLeft,
  FaArrowRight,
  FaBrain,
  FaDatabase,
  FaEye,
  FaFileAlt,
  FaMobileAlt,
  FaPlay,
  FaProjectDiagram,
  FaPython,
  FaServer,
  FaShieldAlt,
} from "react-icons/fa";
import {
  SiDart,
  SiDocker,
  SiFastapi,
  SiFlutter,
  SiMongodb,
  SiOpencv,
  SiPytorch,
} from "react-icons/si";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import ParticlesBackground from "../../components/ParticlesBackground";

import smartClaimImg from "../../assets/images/Portfolio/New Logo SmartClaim.png";
import dataVideo from "../../assets/videos/Smart_claim/Data Demo.mp4";
import demoVideo from "../../assets/videos/Smart_claim/Demo_Mobile.mp4";

const metricCards = [
  { label: "Precision", value: "92.9%", detail: "YOLOv8 damage detection" },
  { label: "Timeline", value: "2 months", detail: "Internship project" },
  { label: "Platform", value: "Flutter", detail: "Mobile app with FastAPI backend" },
  { label: "Domain", value: "Insurance", detail: "AI-assisted vehicle claim reporting" },
];

const roleCards = [
  {
    title: "Mobile Claim Flow",
    area: "Flutter + Dart",
    text: "Developed the SmartClaim Flutter mobile application for structured claim reporting.",
  },
  {
    title: "Computer Vision Integration",
    area: "YOLOv8 + OpenCV + PyTorch",
    text: "Integrated YOLOv8 for real-time vehicle damage detection inside the claim workflow.",
  },
  {
    title: "Backend Delivery",
    area: "FastAPI + Docker",
    text: "Built the FastAPI backend and containerized the solution with Docker for a clearer product demo.",
  },
  {
    title: "Claim Data Workflow",
    area: "OCR + MongoDB",
    text: "Connected mobile capture, AI inference, OCR, and claim data handling into one reviewable process.",
  },
];

const claimWorkflow = [
  {
    title: "Capture",
    label: "Flutter app",
    text: "Flutter guides the user through claim reporting and vehicle damage photo capture.",
  },
  {
    title: "Route",
    label: "FastAPI",
    text: "FastAPI receives claim data and routes images through the computer vision pipeline.",
  },
  {
    title: "Detect",
    label: "YOLOv8",
    text: "YOLOv8, OpenCV, and PyTorch support damage detection and image processing.",
  },
  {
    title: "Extract",
    label: "OCR",
    text: "OCR supports extraction of relevant claim and document data.",
  },
  {
    title: "Store",
    label: "MongoDB",
    text: "MongoDB supports the project data layer for claim-related information.",
  },
  {
    title: "Review",
    label: "Claim support",
    text: "The mobile workflow, AI inference, and claim data handling come together for a usable product demo.",
  },
];

const featureGroups = [
  {
    icon: <FaMobileAlt />,
    title: "Mobile Reporting",
    items: ["Guided claim flow", "Vehicle image capture", "Structured mobile screens"],
  },
  {
    icon: <FaBrain />,
    title: "AI Damage Detection",
    items: ["YOLOv8 inference", "92.9% reported precision", "OpenCV and PyTorch workflow"],
  },
  {
    icon: <FaServer />,
    title: "Backend Integration",
    items: ["FastAPI inference API", "Dockerized delivery", "Mobile-to-model connection"],
  },
  {
    icon: <FaFileAlt />,
    title: "Claim Support Data",
    items: ["OCR document extraction", "MongoDB data layer", "Claim information handling"],
  },
];

const visionPipeline = [
  {
    title: "Detection Model",
    value: "YOLOv8",
    text: "Identifies car damage in the image pipeline for AI-assisted insurance reporting.",
  },
  {
    title: "Image Workflow",
    value: "OpenCV + PyTorch",
    text: "Supports image processing and the model workflow behind the detection experience.",
  },
  {
    title: "Reported Result",
    value: "92.9%",
    text: "Portfolio content reports 92.9% precision for real-time vehicle damage detection.",
  },
  {
    title: "Document Layer",
    value: "OCR",
    text: "Extracts relevant document and claim data to support the digital reporting flow.",
  },
];

const tradeoffCards = [
  {
    title: "Capture Quality",
    text: "Balancing mobile usability with the extra steps needed for accurate image capture.",
  },
  {
    title: "AI Clarity",
    text: "Keeping AI inference understandable to non-technical users inside the claim flow.",
  },
  {
    title: "Integrated Demo",
    text: "Connecting Flutter, FastAPI, Docker, and computer vision parts into one usable product demo.",
  },
];

const learningCards = [
  {
    title: "Mobile Product UX",
    area: "Flutter",
    text: "SmartClaim strengthened how I design a guided mobile flow around a real user task.",
  },
  {
    title: "Computer Vision Delivery",
    area: "YOLOv8 pipeline",
    text: "It improved my ability to explain model inference, image processing, and detection results clearly.",
  },
  {
    title: "Backend Integration",
    area: "FastAPI + Docker",
    text: "The project connected API delivery, containerization, and mobile workflows into one coherent demo.",
  },
  {
    title: "Recruiter-Facing Story",
    area: "Case study",
    text: "It clarified how much engineering work depends on explaining the problem, role, architecture, and result.",
  },
];

const stack = [
  "Flutter",
  "Dart",
  "YOLOv8",
  "OpenCV",
  "PyTorch",
  "FastAPI",
  "Docker",
  "MongoDB",
  "OCR",
];

const projectInfo = [
  ["My Role", "Data & Mobile Developer Intern"],
  ["Project Name", "SmartClaim"],
  ["Category", "Mobile App - Computer Vision"],
  ["Main Result", "92.9% detection precision"],
  ["Duration", "2 Months (Internship)"],
];

const demoVideos = [
  {
    key: "demo",
    title: "Mobile App Workflow",
    subtitle: "User claim reporting flow",
    label: "Play SmartClaim mobile app workflow demo",
    src: demoVideo,
  },
  {
    key: "data",
    title: "Damage Detection",
    subtitle: "AI computer vision workflow",
    label: "Play SmartClaim damage detection AI demo",
    src: dataVideo,
  },
];

const SmartClaimDetails = () => {
  const [playingVideo, setPlayingVideo] = useState(null);
  const demoVideoRef = useRef(null);
  const dataVideoRef = useRef(null);
  const videoRefs = {
    demo: demoVideoRef,
    data: dataVideoRef,
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
                <Link to="/" className="transition hover:text-[#6FB9CC]">Home</Link>
                <span>/</span>
                <Link to="/portfolio" className="transition hover:text-[#6FB9CC]">Portfolio</Link>
                <span>/</span>
                <span className="text-[#6FB9CC]">SmartClaim</span>
              </div>

              <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
                <div>
                  <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#6FB9CC]/30 bg-[#6FB9CC]/10 px-4 py-2 text-sm font-semibold text-[#BDEFF7]">
                    <FaShieldAlt aria-hidden="true" />
                    AI insurance claim assistant
                  </div>
                  <h1 className="mb-6 text-4xl font-black leading-tight md:text-6xl">
                    SmartClaim
                    <span className="block text-[#6FB9CC]">Vehicle Damage Detection App</span>
                  </h1>
                  <p className="mb-7 max-w-3xl text-lg leading-relaxed text-gray-200 md:text-xl">
                    AI-powered insurance claim assistant built with Flutter, YOLOv8, FastAPI, Docker, and a computer vision pipeline reaching 92.9% damage detection precision.
                  </p>
                  <p className="mb-8 max-w-3xl text-base leading-8 text-gray-300">
                    SmartClaim is an AI-powered mobile application designed to make car insurance claim reporting faster and more structured. The user captures vehicle damage from the Flutter app, then the backend supports computer vision analysis with YOLOv8, OpenCV, PyTorch, OCR, and claim data handling.
                  </p>

                  <div className="mb-8 flex flex-wrap gap-3">
                    {["Flutter", "YOLOv8", "FastAPI", "Docker", "MongoDB", "92.9% precision"].map((item) => (
                      <span key={item} className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-gray-200">
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-4">
                    <a href="#smartclaim-demo" className="inline-flex items-center gap-2 rounded-full bg-[#6FB9CC] px-6 py-3 font-semibold text-[#061429] shadow-lg shadow-[#6FB9CC]/25 transition hover:bg-[#8DDCEB]">
                      <FaPlay aria-hidden="true" />
                      Watch demos
                    </a>
                    <Link to="/portfolio" className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3 font-semibold text-white transition hover:border-[#6FB9CC]/60 hover:bg-[#6FB9CC]/10">
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
                    src={smartClaimImg}
                    alt="SmartClaim project logo"
                    className="mx-auto w-full max-w-[400px] rounded-2xl object-contain drop-shadow-2xl"
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
                  <p className="mb-3 text-4xl font-black text-[#6FB9CC]">{metric.value}</p>
                  <p className="text-sm leading-relaxed text-gray-300">{metric.detail}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-14 grid gap-10 lg:grid-cols-[minmax(0,1fr)_360px]">
              <div className="space-y-10">
                <section className="rounded-3xl border border-white/15 bg-white/10 p-7 backdrop-blur-xl md:p-9">
                  <div className="mb-5 flex items-center gap-3 text-[#6FB9CC]">
                    <FaShieldAlt className="text-2xl" aria-hidden="true" />
                    <h2 className="text-2xl font-black">Project Summary</h2>
                  </div>
                  <p className="leading-relaxed text-gray-200">
                    SmartClaim turns a manual insurance reporting process into a guided mobile workflow backed by AI damage detection. The project combines mobile UX, backend APIs, containerized delivery, computer vision, OCR, and claim data handling into a reviewable internship product demo.
                  </p>
                </section>

                <section className="grid gap-5 md:grid-cols-2">
                  <div className="rounded-3xl border border-white/15 bg-white/10 p-7 backdrop-blur-xl">
                    <h2 className="mb-4 text-2xl font-black text-white">The Challenge</h2>
                    <p className="leading-relaxed text-gray-300">
                      Traditional car insurance claims are slow, manual, and error-prone. Users often face long wait times for adjusters to inspect vehicles, while teams need more consistent damage information before a claim can move forward.
                    </p>
                  </div>
                  <div className="rounded-3xl border border-[#6FB9CC]/30 bg-[#6FB9CC]/10 p-7 backdrop-blur-xl">
                    <h2 className="mb-4 text-2xl font-black text-white">The Solution</h2>
                    <p className="leading-relaxed text-gray-100">
                      SmartClaim creates a guided mobile claim flow and connects it with AI-assisted damage detection. The project turns images and claim information into a clearer digital process for review.
                    </p>
                  </div>
                </section>

                <section className="rounded-3xl border border-white/15 bg-white/10 p-7 backdrop-blur-xl md:p-9">
                  <div className="mb-5 flex items-center gap-3 text-[#6FB9CC]">
                    <FaProjectDiagram className="text-2xl" aria-hidden="true" />
                    <h2 className="text-2xl font-black">My Role</h2>
                  </div>
                  <p className="mb-5 leading-relaxed text-gray-200">
                    As Data & Mobile Developer Intern, I worked across the mobile app, AI integration, backend API, and product demo story.
                  </p>
                  <div className="grid gap-4 md:grid-cols-2">
                    {roleCards.map((role) => (
                      <div key={role.title} className="rounded-2xl border border-white/10 bg-[#08073d]/70 p-5 transition-colors hover:border-[#6FB9CC]/40">
                        <p className="mb-3 text-xs font-bold uppercase tracking-wide text-[#BDEFF7]">{role.area}</p>
                        <h3 className="mb-2 text-lg font-black text-white">{role.title}</h3>
                        <p className="text-sm leading-relaxed text-gray-300">{role.text}</p>
                      </div>
                    ))}
                  </div>
                </section>

                <section className="rounded-3xl border border-white/15 bg-white/10 p-7 backdrop-blur-xl md:p-9">
                  <div className="mb-5 flex items-center gap-3 text-[#6FB9CC]">
                    <FaEye className="text-2xl" aria-hidden="true" />
                    <h2 className="text-2xl font-black">Key Features</h2>
                  </div>
                  <div className="grid gap-4 md:grid-cols-2">
                    {featureGroups.map((feature) => (
                      <div key={feature.title} className="rounded-2xl border border-white/10 bg-[#08073d]/70 p-5 transition-colors hover:border-[#6FB9CC]/40">
                        <div className="mb-4 text-3xl text-[#6FB9CC]">{feature.icon}</div>
                        <h3 className="mb-2 font-bold text-white">{feature.title}</h3>
                        <div className="space-y-2">
                          {feature.items.map((item) => (
                            <p key={item} className="flex gap-2 text-sm leading-relaxed text-gray-300">
                              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#6FB9CC]" />
                              <span>{item}</span>
                            </p>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                <section className="rounded-3xl border border-white/15 bg-white/10 p-7 backdrop-blur-xl md:p-9">
                  <div className="mb-5 flex items-center gap-3 text-[#6FB9CC]">
                    <FaServer className="text-2xl" aria-hidden="true" />
                    <h2 className="text-2xl font-black">Architecture / Technical Approach</h2>
                  </div>
                  <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                    {claimWorkflow.map((step, index) => (
                      <div key={step.title} className="relative rounded-2xl border border-white/10 bg-[#08073d]/70 p-5">
                        <div className="mb-4 flex items-center justify-between gap-3">
                          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#6FB9CC] text-sm font-black text-[#061429]">
                            {index + 1}
                          </span>
                          <span className="rounded-full border border-[#6FB9CC]/30 bg-[#6FB9CC]/10 px-3 py-1 text-xs font-semibold text-[#BDEFF7]">
                            {step.label}
                          </span>
                        </div>
                        <h3 className="font-bold text-white">{step.title}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-gray-300">{step.text}</p>
                      </div>
                    ))}
                  </div>
                  <p className="mt-5 rounded-2xl border border-[#6FB9CC]/25 bg-[#6FB9CC]/10 p-4 font-mono text-sm text-[#BDEFF7]">
                    Tech Stack: Flutter - Dart - YOLOv8 - OpenCV - PyTorch - FastAPI - Docker - MongoDB - OCR
                  </p>
                </section>

                <section className="rounded-3xl border border-white/15 bg-white/10 p-7 backdrop-blur-xl md:p-9">
                  <div className="mb-5 flex items-center gap-3 text-[#6FB9CC]">
                    <FaBrain className="text-2xl" aria-hidden="true" />
                    <h2 className="text-2xl font-black">AI Model and Computer Vision Pipeline</h2>
                  </div>
                  <p className="mb-5 leading-relaxed text-gray-200">
                    The AI part stays visible as a computer vision pipeline: detection, image workflow, reported precision, and OCR support for claim documents.
                  </p>
                  <div className="grid gap-4 md:grid-cols-2">
                    {visionPipeline.map((item) => (
                      <div key={item.title} className="rounded-2xl border border-white/10 bg-[#08073d]/70 p-5">
                        <p className="mb-2 text-sm font-bold uppercase tracking-wide text-gray-400">{item.title}</p>
                        <p className="mb-3 text-3xl font-black text-[#6FB9CC]">{item.value}</p>
                        <p className="text-sm leading-relaxed text-gray-300">{item.text}</p>
                      </div>
                    ))}
                  </div>
                </section>

                <section className="rounded-3xl border border-white/15 bg-white/10 p-7 backdrop-blur-xl md:p-9">
                  <div className="mb-5 flex items-center gap-3 text-[#6FB9CC]">
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
                  <div className="mb-5 flex items-center gap-3 text-[#6FB9CC]">
                    <FaMobileAlt className="text-2xl" aria-hidden="true" />
                    <h2 className="text-2xl font-black">What I Learned</h2>
                  </div>
                  <div className="grid gap-4 md:grid-cols-2">
                    {learningCards.map((item) => (
                      <div key={item.title} className="rounded-2xl border border-white/10 bg-[#08073d]/70 p-5">
                        <p className="mb-2 text-xs font-bold uppercase tracking-wide text-[#BDEFF7]">{item.area}</p>
                        <h3 className="mb-2 font-bold text-white">{item.title}</h3>
                        <p className="text-sm leading-relaxed text-gray-300">{item.text}</p>
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
                  <div className="space-y-3 text-sm">
                    <p className="flex items-center gap-2 text-gray-200"><SiFlutter className="text-[#6FB9CC]" /> Flutter</p>
                    <p className="flex items-center gap-2 text-gray-200"><SiDart className="text-[#6FB9CC]" /> Dart</p>
                    <p className="flex items-center gap-2 text-gray-200"><FaBrain className="text-[#6FB9CC]" /> YOLOv8</p>
                    <p className="flex items-center gap-2 text-gray-200"><SiOpencv className="text-[#6FB9CC]" /> OpenCV</p>
                    <p className="flex items-center gap-2 text-gray-200"><SiPytorch className="text-[#6FB9CC]" /> PyTorch</p>
                    <p className="flex items-center gap-2 text-gray-200"><SiFastapi className="text-[#6FB9CC]" /> FastAPI</p>
                    <p className="flex items-center gap-2 text-gray-200"><SiDocker className="text-[#6FB9CC]" /> Docker</p>
                    <p className="flex items-center gap-2 text-gray-200"><SiMongodb className="text-[#6FB9CC]" /> MongoDB</p>
                    <p className="flex items-center gap-2 text-gray-200"><FaFileAlt className="text-[#6FB9CC]" /> OCR</p>
                    <p className="flex items-center gap-2 text-gray-200"><FaPython className="text-[#6FB9CC]" /> Python</p>
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
                  className="block rounded-2xl bg-[#6FB9CC] px-5 py-4 text-center font-bold text-[#061429] shadow-lg shadow-[#6FB9CC]/20 transition hover:-translate-y-1 hover:bg-[#8DDCEB]"
                >
                  Discuss this work
                </Link>
              </aside>
            </div>

            <motion.section
              id="smartclaim-demo"
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mt-14 rounded-3xl border border-white/15 bg-white/10 p-5 shadow-2xl shadow-black/20 backdrop-blur-xl md:p-7"
              aria-labelledby="smartclaim-demo-title"
            >
              <div className="mb-8">
                <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#6FB9CC]/30 bg-[#6FB9CC]/10 px-4 py-2 text-sm font-semibold text-[#BDEFF7]">
                  <FaPlay aria-hidden="true" />
                  Product and AI demos
                </div>
                <h2 id="smartclaim-demo-title" className="text-2xl font-black text-white md:text-3xl">
                  Demo Videos
                </h2>
                <p className="mt-2 max-w-3xl text-sm leading-relaxed text-gray-300 md:text-base">
                  Two walkthroughs showing the mobile claim workflow and the AI damage detection pipeline.
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-2">
                {demoVideos.map((video, index) => (
                  <motion.div
                    key={video.key}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: index * 0.1 }}
                    className="flex flex-col rounded-2xl border border-white/10 bg-[#08073d]/70 p-5"
                  >
                    <h3 className="mb-2 text-xl font-bold text-white">{video.title}</h3>
                    <p className="mb-4 text-sm text-gray-400">{video.subtitle}</p>
                    <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-white/10 bg-black shadow-lg shadow-black/30">
                      <video
                        ref={videoRefs[video.key]}
                        src={video.src}
                        poster={smartClaimImg}
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
                          className="absolute inset-0 flex items-center justify-center bg-black/40 transition-opacity duration-300 hover:bg-black/20 focus:outline-none focus:ring-2 focus:ring-[#6FB9CC]/70 focus:ring-inset"
                        >
                          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-[#6FB9CC] shadow-lg transition-transform duration-300 hover:scale-110">
                            <FaPlay className="ml-1 text-xl text-[#061429]" aria-hidden="true" />
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
                  <p className="text-gray-300">Watch the demos, return to the project list, or start a conversation.</p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <a href="#smartclaim-demo" className="inline-flex items-center gap-2 rounded-full bg-[#6FB9CC] px-5 py-3 font-semibold text-[#061429] transition hover:bg-[#8DDCEB]">
                    <FaPlay aria-hidden="true" />
                    Demos
                  </a>
                  <Link to="/portfolio" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 font-semibold text-white transition hover:border-[#6FB9CC]/60 hover:bg-[#6FB9CC]/10">
                    Portfolio
                  </Link>
                  <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 font-semibold text-white transition hover:border-[#6FB9CC]/60 hover:bg-[#6FB9CC]/10">
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
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 transition-all group-hover:border-[#6FB9CC] group-hover:bg-[#6FB9CC]">
                  <FaArrowLeft />
                </div>
                <div>
                  <span className="block text-xs uppercase tracking-wider text-gray-500 group-hover:text-gray-300">Previous Project</span>
                  <span className="text-lg font-semibold">SolarFlow</span>
                </div>
              </Link>

              <Link to="/portfolio" className="group flex items-center gap-3 text-right text-gray-400 transition-colors hover:text-white">
                <div>
                  <span className="block text-xs uppercase tracking-wider text-gray-500 group-hover:text-gray-300">Next Project</span>
                  <span className="text-lg font-semibold">Onboardify</span>
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 transition-all group-hover:border-[#6FB9CC] group-hover:bg-[#6FB9CC]">
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

export default SmartClaimDetails;
