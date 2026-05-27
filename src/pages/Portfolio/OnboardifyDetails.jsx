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
  FaProjectDiagram,
  FaQuestionCircle,
  FaTasks,
  FaUsers,
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

import onboardifyLogo from "../../assets/images/logo3.png";
import programVideo from "../../assets/videos/program.mp4";
import projectVideo from "../../assets/videos/Projet.mp4";
import quizVideo from "../../assets/videos/quiz.mp4";
import reportVideo from "../../assets/videos/report.mp4";
import resourceVideo from "../../assets/videos/ressource.mp4";

const metricCards = [
  { label: "Platform", value: "Hybrid", detail: "JavaFX desktop + Symfony web" },
  { label: "Domain", value: "HR Tech", detail: "Employee onboarding workflow" },
  { label: "Duration", value: "4 months", detail: "Project timeline" },
  { label: "Focus", value: "Gamified", detail: "Onboarding flow for engagement" },
];

const roleCards = [
  {
    title: "Hybrid Platform Contribution",
    area: "JavaFX + Symfony",
    text: "Contributed to the JavaFX and Symfony onboarding platform experience across desktop and web surfaces.",
  },
  {
    title: "Onboarding Module Build",
    area: "Resources + quizzes + projects",
    text: "Implemented workflows for resources, project assignment, quizzes, reports, and well-being programs.",
  },
  {
    title: "HR Visibility",
    area: "Tracking + follow-up",
    text: "Supported HR visibility through structured onboarding features that make activity easier to follow.",
  },
  {
    title: "Demo Flow Preparation",
    area: "Employee + HR interactions",
    text: "Prepared demo flows showing key employee and HR interactions across the onboarding journey.",
  },
];

const platformFlow = [
  {
    title: "Desktop Experience",
    label: "JavaFX",
    text: "JavaFX supports secure internal onboarding workflows and employee-facing actions.",
  },
  {
    title: "Web Platform",
    label: "Symfony",
    text: "Symfony, PHP, MySQL, HTML, CSS, and JavaScript support the web-side platform.",
  },
  {
    title: "Training Flow",
    label: "Resources + quizzes",
    text: "Resources, quizzes, and assigned projects guide employees through onboarding.",
  },
  {
    title: "Feedback Loop",
    label: "Posts + reclamations",
    text: "Posts, reclamations, and well-being programs support communication and follow-up.",
  },
];

const featureGroups = [
  {
    icon: <FaLock />,
    title: "Access & Security",
    items: ["Robust login", "Sign-up system", "Data security for users"],
  },
  {
    icon: <FaFileAlt />,
    title: "Resource Hub",
    items: ["Document management", "Centralized onboarding resources", "Employee access to materials"],
  },
  {
    icon: <FaQuestionCircle />,
    title: "Training & Validation",
    items: ["Interactive quizzes", "Knowledge validation", "Training progress tracking"],
  },
  {
    icon: <FaHeartbeat />,
    title: "Employee Support",
    items: ["Well-being programs", "Mental health support", "New-hire integration"],
  },
  {
    icon: <FaTasks />,
    title: "Project Tracking",
    items: ["Project assignment", "Task tracking", "Onboarding progress visibility"],
  },
  {
    icon: <FaBullhorn />,
    title: "Communication",
    items: ["Posts", "Reclamations", "Employee feedback follow-up"],
  },
];

const onboardingJourney = [
  {
    title: "Account Access",
    text: "Secure login and sign-up give users a controlled entry point into the onboarding platform.",
  },
  {
    title: "Learn",
    text: "Resources and quizzes structure training so new hires can access materials and validate knowledge.",
  },
  {
    title: "Contribute",
    text: "Project assignments and task tracking turn onboarding into an active employee workflow.",
  },
  {
    title: "Communicate",
    text: "Posts and reclamations keep employee feedback and HR follow-up visible.",
  },
  {
    title: "Support",
    text: "Well-being programs add a human layer for new-hire mental health and integration.",
  },
];

const tradeoffCards = [
  {
    title: "Hybrid Product Shape",
    text: "Coordinating a hybrid desktop and web product experience.",
  },
  {
    title: "Engagement Balance",
    text: "Keeping onboarding structured while still making it engaging for new hires.",
  },
  {
    title: "HR vs Employee Needs",
    text: "Balancing HR visibility with employee-facing simplicity.",
  },
];

const learningCards = [
  {
    title: "Hybrid Application Thinking",
    area: "JavaFX + Symfony",
    text: "Onboardify strengthened how I think about coordinating desktop and web surfaces in one product.",
  },
  {
    title: "HR Workflow Modeling",
    area: "Onboarding operations",
    text: "It helped me model onboarding around training, assignments, communication, and follow-up.",
  },
  {
    title: "Engagement Features",
    area: "Quizzes + well-being",
    text: "The project showed how gamified and support-oriented modules can make onboarding less passive.",
  },
  {
    title: "Demo-Ready Structure",
    area: "Recruiter presentation",
    text: "It improved how I turn several platform modules into a clear story that can be scanned quickly.",
  },
];

const stack = [
  "JavaFX",
  "Symfony",
  "PHP",
  "MySQL",
  "HTML",
  "CSS",
  "JavaScript",
];

const projectInfo = [
  ["My Role", "Full-stack contributor"],
  ["Project Name", "Onboardify"],
  ["Category", "JavaFX & Symfony - HR Tech"],
  ["Main Focus", "Gamified onboarding flow"],
  ["Duration", "4 Months"],
];

const demoVideos = [
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

const OnboardifyDetails = () => {
  const [playingVideo, setPlayingVideo] = useState(null);
  const videoRefs = useRef({});

  const handlePlay = (videoName) => {
    const selectedVideo = videoRefs.current[videoName];

    if (!selectedVideo) {
      return;
    }

    if (playingVideo === videoName) {
      selectedVideo.pause();
      setPlayingVideo(null);
      return;
    }

    if (playingVideo && videoRefs.current[playingVideo]) {
      videoRefs.current[playingVideo].pause();
    }

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
                <Link to="/" className="transition hover:text-[#5B73D6]">Home</Link>
                <span>/</span>
                <Link to="/portfolio" className="transition hover:text-[#5B73D6]">Portfolio</Link>
                <span>/</span>
                <span className="text-[#5B73D6]">Onboardify</span>
              </div>

              <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
                <div>
                  <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#5B73D6]/30 bg-[#5B73D6]/10 px-4 py-2 text-sm font-semibold text-[#CDD6FF]">
                    <FaUsers aria-hidden="true" />
                    HR onboarding platform
                  </div>
                  <h1 className="mb-6 text-4xl font-black leading-tight md:text-6xl">
                    Onboardify
                    <span className="block text-[#5B73D6]">Gamified Employee Onboarding</span>
                  </h1>
                  <p className="mb-7 max-w-3xl text-lg leading-relaxed text-gray-200 md:text-xl">
                    Hybrid JavaFX and Symfony HR platform for structured, engaging employee onboarding with resources, quizzes, reporting, and well-being support.
                  </p>
                  <p className="mb-8 max-w-3xl text-base leading-8 text-gray-300">
                    Onboardify is a smart employee onboarding platform developed as part of an academic project. It combines a JavaFX desktop application and a Symfony-based web application to deliver a structured, engaging, and interactive onboarding experience with real-time visibility for HR and managers.
                  </p>

                  <div className="mb-8 flex flex-wrap gap-3">
                    {["JavaFX", "Symfony", "PHP", "MySQL", "HR Tech", "4 Months"].map((item) => (
                      <span key={item} className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-gray-200">
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-4">
                    <a href="#onboardify-demo" className="inline-flex items-center gap-2 rounded-full bg-[#5B73D6] px-6 py-3 font-semibold text-white shadow-lg shadow-[#5B73D6]/25 transition hover:bg-[#7087E6]">
                      <FaPlay aria-hidden="true" />
                      Watch demos
                    </a>
                    <Link to="/portfolio" className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3 font-semibold text-white transition hover:border-[#5B73D6]/60 hover:bg-[#5B73D6]/10">
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
                    src={onboardifyLogo}
                    alt="Onboardify Logo"
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
                  <p className="mb-3 text-4xl font-black text-[#5B73D6]">{metric.value}</p>
                  <p className="text-sm leading-relaxed text-gray-300">{metric.detail}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-14 grid gap-10 lg:grid-cols-[minmax(0,1fr)_360px]">
              <div className="space-y-10">
                <section className="rounded-3xl border border-white/15 bg-white/10 p-7 backdrop-blur-xl md:p-9">
                  <div className="mb-5 flex items-center gap-3 text-[#5B73D6]">
                    <FaUsers className="text-2xl" aria-hidden="true" />
                    <h2 className="text-2xl font-black">Project Summary</h2>
                  </div>
                  <p className="leading-relaxed text-gray-200">
                    The platform aims to enhance new hire integration through resource management, interactive modules, employee well-being support, and workflows that keep onboarding activity visible for HR and managers.
                  </p>
                </section>

                <section className="grid gap-5 md:grid-cols-2">
                  <div className="rounded-3xl border border-white/15 bg-white/10 p-7 backdrop-blur-xl">
                    <h2 className="mb-4 text-2xl font-black text-white">The Problem</h2>
                    <p className="leading-relaxed text-gray-300">
                      New employee onboarding can become scattered across documents, training, projects, feedback, and HR tracking.
                    </p>
                  </div>
                  <div className="rounded-3xl border border-[#5B73D6]/30 bg-[#5B73D6]/10 p-7 backdrop-blur-xl">
                    <h2 className="mb-4 text-2xl font-black text-white">The Solution</h2>
                    <p className="leading-relaxed text-gray-100">
                      Onboardify centralizes onboarding resources, quizzes, assignments, posts, reclamations, and well-being support.
                    </p>
                  </div>
                </section>

                <section className="rounded-3xl border border-white/15 bg-white/10 p-7 backdrop-blur-xl md:p-9">
                  <div className="mb-5 flex items-center gap-3 text-[#5B73D6]">
                    <FaProjectDiagram className="text-2xl" aria-hidden="true" />
                    <h2 className="text-2xl font-black">My Role</h2>
                  </div>
                  <p className="mb-5 leading-relaxed text-gray-200">
                    As a full-stack contributor, I worked across the hybrid product experience and helped shape the onboarding modules into reviewable demo flows.
                  </p>
                  <div className="grid gap-4 md:grid-cols-2">
                    {roleCards.map((role) => (
                      <div key={role.title} className="rounded-2xl border border-white/10 bg-[#08073d]/70 p-5 transition-colors hover:border-[#5B73D6]/40">
                        <p className="mb-3 text-xs font-bold uppercase tracking-wide text-[#CDD6FF]">{role.area}</p>
                        <h3 className="mb-2 text-lg font-black text-white">{role.title}</h3>
                        <p className="text-sm leading-relaxed text-gray-300">{role.text}</p>
                      </div>
                    ))}
                  </div>
                </section>

                <section className="rounded-3xl border border-white/15 bg-white/10 p-7 backdrop-blur-xl md:p-9">
                  <div className="mb-5 flex items-center gap-3 text-[#5B73D6]">
                    <FaTasks className="text-2xl" aria-hidden="true" />
                  <h2 className="text-2xl font-black">Key Features</h2>
                  </div>
                  <div className="grid gap-4 md:grid-cols-2">
                    {featureGroups.map((feature) => (
                      <div key={feature.title} className="rounded-2xl border border-white/10 bg-[#08073d]/70 p-5 transition-colors hover:border-[#5B73D6]/40">
                        <div className="mb-4 text-3xl text-[#5B73D6]">{feature.icon}</div>
                        <h3 className="mb-2 font-bold text-white">{feature.title}</h3>
                        <div className="space-y-2">
                          {feature.items.map((item) => (
                            <p key={item} className="flex gap-2 text-sm leading-relaxed text-gray-300">
                              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#5B73D6]" />
                              <span>{item}</span>
                            </p>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                <section className="rounded-3xl border border-white/15 bg-white/10 p-7 backdrop-blur-xl md:p-9">
                  <div className="mb-5 flex items-center gap-3 text-[#5B73D6]">
                    <FaJava className="text-2xl" aria-hidden="true" />
                    <h2 className="text-2xl font-black">Architecture / Technical Approach</h2>
                  </div>
                  <div className="grid gap-4 md:grid-cols-2">
                    {platformFlow.map((step, index) => (
                      <div key={step.title} className="rounded-2xl border border-white/10 bg-[#08073d]/70 p-5">
                        <div className="mb-4 flex items-center justify-between gap-3">
                          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#5B73D6] text-sm font-black text-white">
                            {index + 1}
                          </span>
                          <span className="rounded-full border border-[#5B73D6]/30 bg-[#5B73D6]/10 px-3 py-1 text-xs font-semibold text-[#CDD6FF]">
                            {step.label}
                          </span>
                        </div>
                        <h3 className="font-bold text-white">{step.title}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-gray-300">{step.text}</p>
                      </div>
                    ))}
                  </div>
                  <p className="mt-5 rounded-2xl border border-[#5B73D6]/25 bg-[#5B73D6]/10 p-4 font-mono text-sm text-[#CDD6FF]">
                    Tech Stack: JavaFX - Symfony - PHP - MySQL - HTML/CSS - JavaScript
                  </p>
                </section>

                <section className="rounded-3xl border border-white/15 bg-white/10 p-7 backdrop-blur-xl md:p-9">
                  <div className="mb-5 flex items-center gap-3 text-[#5B73D6]">
                    <FaUsers className="text-2xl" aria-hidden="true" />
                    <h2 className="text-2xl font-black">Onboarding Journey</h2>
                  </div>
                  <p className="mb-5 leading-relaxed text-gray-200">
                    The platform reads more clearly when the modules are shown as one onboarding path from access to support.
                  </p>
                  <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
                    {onboardingJourney.map((step, index) => (
                      <div key={step.title} className="rounded-2xl border border-white/10 bg-[#08073d]/70 p-5">
                        <span className="mb-4 flex h-8 w-8 items-center justify-center rounded-full bg-[#5B73D6] text-sm font-black text-white">
                          {index + 1}
                        </span>
                        <h3 className="mb-2 font-bold text-white">{step.title}</h3>
                        <p className="text-sm leading-relaxed text-gray-300">{step.text}</p>
                      </div>
                    ))}
                  </div>
                </section>

                <section className="rounded-3xl border border-white/15 bg-white/10 p-7 backdrop-blur-xl md:p-9">
                  <div className="mb-5 flex items-center gap-3 text-[#5B73D6]">
                    <FaBullhorn className="text-2xl" aria-hidden="true" />
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
                  <div className="mb-5 flex items-center gap-3 text-[#5B73D6]">
                    <FaHeartbeat className="text-2xl" aria-hidden="true" />
                    <h2 className="text-2xl font-black">What I Learned</h2>
                  </div>
                  <div className="grid gap-4 md:grid-cols-2">
                    {learningCards.map((item) => (
                      <div key={item.title} className="rounded-2xl border border-white/10 bg-[#08073d]/70 p-5">
                        <p className="mb-2 text-xs font-bold uppercase tracking-wide text-[#CDD6FF]">{item.area}</p>
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
                    <p className="flex items-center gap-2 text-gray-200"><FaJava className="text-[#5B73D6]" /> JavaFX</p>
                    <p className="flex items-center gap-2 text-gray-200"><SiSymfony className="text-[#5B73D6]" /> Symfony</p>
                    <p className="flex items-center gap-2 text-gray-200"><SiPhp className="text-[#5B73D6]" /> PHP</p>
                    <p className="flex items-center gap-2 text-gray-200"><SiMysql className="text-[#5B73D6]" /> MySQL</p>
                    <p className="flex items-center gap-2 text-gray-200"><SiHtml5 className="text-[#5B73D6]" /> HTML</p>
                    <p className="flex items-center gap-2 text-gray-200"><SiCss3 className="text-[#5B73D6]" /> CSS</p>
                    <p className="flex items-center gap-2 text-gray-200"><SiJavascript className="text-[#5B73D6]" /> JavaScript</p>
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
                  className="block rounded-2xl bg-[#5B73D6] px-5 py-4 text-center font-bold text-white shadow-lg shadow-[#5B73D6]/20 transition hover:-translate-y-1 hover:bg-[#7087E6]"
                >
                  Discuss this work
                </Link>
              </aside>
            </div>

            <motion.section
              id="onboardify-demo"
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mt-14 rounded-3xl border border-white/15 bg-white/10 p-5 shadow-2xl shadow-black/20 backdrop-blur-xl md:p-7"
              aria-labelledby="onboardify-demo-title"
            >
              <div className="mb-8">
                <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#5B73D6]/30 bg-[#5B73D6]/10 px-4 py-2 text-sm font-semibold text-[#CDD6FF]">
                  <FaPlay aria-hidden="true" />
                  Feature demos
                </div>
                <h2 id="onboardify-demo-title" className="text-2xl font-black text-white md:text-3xl">
                  Demo Videos
                </h2>
                <p className="mt-2 max-w-3xl text-sm leading-relaxed text-gray-300 md:text-base">
                  Five walkthroughs showing resources, project tracking, quizzes, posts and reclamations, and well-being programs.
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-2">
                {demoVideos.map((feature, index) => (
                  <motion.div
                    key={feature.id}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: index * 0.1 }}
                    className="flex flex-col rounded-2xl border border-white/10 bg-[#08073d]/70 p-5"
                  >
                    <div className="mb-4 flex items-center gap-3">
                      <feature.icon className="text-xl text-[#5B73D6]" />
                      <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                    </div>
                    <div className="relative mb-4 aspect-video w-full overflow-hidden rounded-2xl border border-white/10 bg-black shadow-lg shadow-black/30">
                      <video
                        ref={(el) => {
                          videoRefs.current[feature.id] = el;
                        }}
                        src={feature.video}
                        poster={onboardifyLogo}
                        preload="metadata"
                        className="h-full w-full object-cover"
                        onEnded={() => setPlayingVideo(null)}
                        onPause={() => playingVideo === feature.id && setPlayingVideo(null)}
                        controls={playingVideo === feature.id}
                        playsInline
                      />
                      {playingVideo !== feature.id && (
                        <button
                          type="button"
                          aria-label={`Play Onboardify ${feature.title} demo`}
                          onClick={() => handlePlay(feature.id)}
                          className="absolute inset-0 flex items-center justify-center bg-black/40 transition-opacity duration-300 hover:bg-black/20 focus:outline-none focus:ring-2 focus:ring-[#5B73D6]/70 focus:ring-inset"
                        >
                          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-[#5B73D6] shadow-lg transition-transform duration-300 hover:scale-110">
                            <FaPlay className="ml-1 text-xl text-white" aria-hidden="true" />
                          </span>
                        </button>
                      )}
                    </div>
                    <p className="text-sm leading-relaxed text-gray-400">{feature.desc}</p>
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
                  <a href="#onboardify-demo" className="inline-flex items-center gap-2 rounded-full bg-[#5B73D6] px-5 py-3 font-semibold text-white transition hover:bg-[#7087E6]">
                    <FaPlay aria-hidden="true" />
                    Demos
                  </a>
                  <Link to="/portfolio" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 font-semibold text-white transition hover:border-[#5B73D6]/60 hover:bg-[#5B73D6]/10">
                    Portfolio
                  </Link>
                  <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 font-semibold text-white transition hover:border-[#5B73D6]/60 hover:bg-[#5B73D6]/10">
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
              <Link to="/portfolio/solar-flow" className="group flex items-center gap-3 text-gray-400 transition-colors hover:text-white">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 transition-all group-hover:border-[#5B73D6] group-hover:bg-[#5B73D6]">
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
                  <span className="text-lg font-semibold">Pro-Link</span>
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 transition-all group-hover:border-[#5B73D6] group-hover:bg-[#5B73D6]">
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

export default OnboardifyDetails;
