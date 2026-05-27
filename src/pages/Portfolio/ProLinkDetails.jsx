import { motion } from "framer-motion";
import { useState } from "react";
import {
  FaArrowLeft,
  FaArrowRight,
  FaBriefcase,
  FaComments,
  FaDatabase,
  FaExpand,
  FaHandshake,
  FaMobileAlt,
  FaProjectDiagram,
  FaServer,
  FaStar,
  FaTasks,
  FaTimes,
  FaUserPlus,
  FaUsers,
} from "react-icons/fa";
import { SiDart, SiFirebase, SiFlutter } from "react-icons/si";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import ParticlesBackground from "../../components/ParticlesBackground";

import proLinkLogo from "../../assets/images/FlutterFlow.png";
import proLinkPreview from "../../assets/images/FlutterFlow2.png";

const metricCards = [
  { label: "Platform", value: "Mobile", detail: "Flutter / FlutterFlow app" },
  { label: "Backend", value: "Firebase", detail: "Realtime data handling" },
  { label: "Duration", value: "6 weeks", detail: "Project timeline" },
  { label: "Focus", value: "Networking", detail: "Freelancer and client workflow" },
];

const featureGroups = [
  {
    id: "account",
    title: "Profiles & Services",
    items: ["Account creation", "Freelancer profiles", "Customized portfolios", "Service listings"],
    icon: <FaUserPlus />,
  },
  {
    id: "project",
    title: "Project Opportunities",
    items: ["Project posting", "Project requests", "Proposal management", "Detailed proposals and bids"],
    icon: <FaTasks />,
  },
  {
  id: "review",
    title: "Trust Signals",
    items: ["Review system", "Rating system", "Completed-work feedback", "Community standards"],
    icon: <FaStar />,
  },
  {
    id: "chat",
    title: "Communication",
    items: ["Built-in messaging", "Client-freelancer chat", "Clear communication", "Instant interaction"],
    icon: <FaComments />,
  },
];

const roleCards = [
  {
    title: "Marketplace Flow",
    area: "Clients + freelancers",
    text: "Built a mobile-first professional networking and freelance workflow.",
  },
  {
    title: "Core Product Journeys",
    area: "Profiles + proposals + chat",
    text: "Designed flows for account creation, service listings, proposals, reviews, and chat.",
  },
  {
    title: "Mobile App Build",
    area: "FlutterFlow + Dart",
    text: "Used Flutter / FlutterFlow with Dart and Firebase for the app experience.",
  },
  {
    title: "Interaction Structure",
    area: "Firebase workflows",
    text: "Structured the interface around clients, freelancers, project requests, and communication.",
  },
];

const marketplaceFlow = [
  {
    title: "Present",
    label: "Profiles",
    text: "Account and profile flows allow freelancers and clients to present services and project needs.",
  },
  {
    title: "Discover",
    label: "Projects",
    text: "Proposal management supports posting, browsing, and responding to collaboration opportunities.",
  },
  {
    title: "Trust",
    label: "Reviews",
    text: "Reviews and ratings help users evaluate completed work and build credibility.",
  },
  {
    title: "Communicate",
    label: "Firebase",
    text: "Firebase supports the data handling needed for mobile-first interaction and messaging.",
  },
];

const workflowCards = [
  {
    icon: <FaUsers />,
    title: "Two-sided Marketplace",
    text: "The app supports both client and freelancer journeys without splitting the product into separate experiences.",
  },
  {
    icon: <FaBriefcase />,
    title: "Service Discovery",
    text: "Users can post or browse services and move from discovery into proposals and project requests.",
  },
  {
    icon: <FaHandshake />,
    title: "Collaboration Flow",
    text: "Profiles, proposals, chat, and reviews create a complete lightweight hiring workflow.",
  },
  {
    icon: <FaDatabase />,
    title: "Firebase Data Layer",
    text: "Firebase gives the mobile app a practical backend path for realtime data and interaction flows.",
  },
];

const tradeoffCards = [
  {
    title: "Mobile Simplicity",
    text: "Keeping the marketplace flow simple enough for a mobile-first interface.",
  },
  {
    title: "Two-Sided Needs",
    text: "Balancing freelancer and client needs in the same product journey.",
  },
  {
    title: "Trust Without Clutter",
    text: "Designing trust signals without overcomplicating the first version.",
  },
];

const learningCards = [
  {
    title: "Role Separation",
    area: "Marketplace UX",
    text: "Marketplace products need clear role separation while still feeling like one coherent app.",
  },
  {
    title: "Trust Features",
    area: "Profiles + reviews",
    text: "Trust features such as profiles, reviews, and ratings matter as much as the core posting flow.",
  },
  {
    title: "Fast Mobile Prototyping",
    area: "FlutterFlow",
    text: "FlutterFlow can move a mobile concept quickly when the product flow is well structured.",
  },
  {
    title: "Realtime App Workflows",
    area: "Firebase",
    text: "Firebase is useful for prototyping realtime mobile workflows without heavy backend overhead.",
  },
];

const stack = ["Flutter", "FlutterFlow", "Dart", "Firebase"];

const projectInfo = [
  ["My Role", "Mobile app builder"],
  ["Project Name", "Pro-Link App"],
  ["Category", "Mobile App Development"],
  ["Main Focus", "Professional networking workflow"],
  ["Duration", "6 Weeks"],
];

const visuals = [
  { title: "Pro-Link brand visual", image: proLinkLogo },
  { title: "Pro-Link preview visual", image: proLinkPreview },
];

const ProLinkDetails = () => {
  const [selectedImage, setSelectedImage] = useState(null);

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
                <Link to="/" className="transition hover:text-[#5066AD]">Home</Link>
                <span>/</span>
                <Link to="/portfolio" className="transition hover:text-[#5066AD]">Portfolio</Link>
                <span>/</span>
                <span className="text-[#5066AD]">Pro-Link</span>
              </div>

              <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
                <div>
                  <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#5066AD]/30 bg-[#5066AD]/10 px-4 py-2 text-sm font-semibold text-[#B8C5FF]">
                    <FaHandshake aria-hidden="true" />
                    Mobile professional networking app
                  </div>
                  <h1 className="mb-6 text-4xl font-black leading-tight md:text-6xl">
                    Pro-Link
                    <span className="block text-[#5066AD]">Freelancer and Client Collaboration Platform</span>
                  </h1>
                  <p className="mb-7 max-w-3xl text-lg leading-relaxed text-gray-200 md:text-xl">
                    Mobile application designed to connect freelancers with clients through profiles, service listings, proposals, reviews, ratings, and communication.
                  </p>
                  <p className="mb-8 max-w-3xl text-base leading-8 text-gray-300">
                    Pro-Link is inspired by platforms like Fiverr and focuses on streamlining the freelance hiring process inside a simple, mobile-first workflow built with Flutter / FlutterFlow, Dart, and Firebase.
                  </p>

                  <div className="mb-8 flex flex-wrap gap-3">
                    {["Flutter", "FlutterFlow", "Dart", "Firebase", "Freelance workflow", "6 Weeks"].map((item) => (
                      <span key={item} className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-gray-200">
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-4">
                    <a href="#prolink-features" className="inline-flex items-center gap-2 rounded-full bg-[#5066AD] px-6 py-3 font-semibold text-white shadow-lg shadow-[#5066AD]/25 transition hover:bg-[#657BD0]">
                      <FaTasks aria-hidden="true" />
                      View features
                    </a>
                    <Link to="/portfolio" className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3 font-semibold text-white transition hover:border-[#5066AD]/60 hover:bg-[#5066AD]/10">
                      <FaArrowLeft aria-hidden="true" />
                      Back to Portfolio
                    </Link>
                  </div>
                </div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.7, delay: 0.1 }}
                  className="rounded-3xl border border-white/15 bg-white/10 p-8 shadow-2xl shadow-black/30 backdrop-blur-xl"
                >
                  <button
                    type="button"
                    onClick={() => setSelectedImage({ src: proLinkLogo, title: "Pro-Link brand visual" })}
                    className="group relative w-full overflow-hidden rounded-2xl border border-white/10 bg-[#08073d]/70 p-8 focus:outline-none focus:ring-2 focus:ring-[#5066AD]/70"
                  >
                    <img
                      src={proLinkLogo}
                      alt="Pro-Link logo"
                      className="mx-auto w-full max-w-[360px] rounded-2xl object-contain drop-shadow-2xl transition duration-300 group-hover:scale-[1.02]"
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
                  <p className="mb-3 text-4xl font-black text-[#5066AD]">{metric.value}</p>
                  <p className="text-sm leading-relaxed text-gray-300">{metric.detail}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-14 grid gap-10 lg:grid-cols-[minmax(0,1fr)_360px]">
              <div className="space-y-10">
                <section className="rounded-3xl border border-white/15 bg-white/10 p-7 backdrop-blur-xl md:p-9">
                  <div className="mb-5 flex items-center gap-3 text-[#5066AD]">
                    <FaMobileAlt className="text-2xl" aria-hidden="true" />
                    <h2 className="text-2xl font-black">Project Summary</h2>
                  </div>
                  <p className="leading-relaxed text-gray-200">
                    Pro-Link is a mobile application designed to connect freelancers with clients. The app allows users to create profiles, post or browse services, manage project requests, submit proposals, communicate, and use review/rating features inside one mobile-first product.
                  </p>
                </section>

                <section className="grid gap-5 md:grid-cols-2">
                  <div className="rounded-3xl border border-white/15 bg-white/10 p-7 backdrop-blur-xl">
                    <h2 className="mb-4 text-2xl font-black text-white">The Problem</h2>
                    <p className="leading-relaxed text-gray-300">
                      Freelancers and clients need a simple way to create profiles, manage opportunities, communicate, and build trust in one mobile workflow.
                    </p>
                  </div>
                  <div className="rounded-3xl border border-[#5066AD]/30 bg-[#5066AD]/10 p-7 backdrop-blur-xl">
                    <h2 className="mb-4 text-2xl font-black text-white">The Solution</h2>
                    <p className="leading-relaxed text-gray-100">
                      Pro-Link organizes profiles, service listings, project requests, proposals, ratings, reviews, and chat into a lightweight mobile collaboration platform.
                    </p>
                  </div>
                </section>

                <section className="rounded-3xl border border-white/15 bg-white/10 p-7 backdrop-blur-xl md:p-9">
                  <div className="mb-5 flex items-center gap-3 text-[#5066AD]">
                    <FaProjectDiagram className="text-2xl" aria-hidden="true" />
                    <h2 className="text-2xl font-black">My Role</h2>
                  </div>
                  <p className="mb-5 leading-relaxed text-gray-200">
                    As mobile app builder, I focused on shaping the freelance marketplace flow, structuring the app around both clients and freelancers, and connecting the mobile experience with Firebase-backed interaction patterns.
                  </p>
                  <div className="grid gap-4 md:grid-cols-2">
                    {roleCards.map((role) => (
                      <div key={role.title} className="rounded-2xl border border-white/10 bg-[#08073d]/70 p-5 transition-colors hover:border-[#5066AD]/40">
                        <p className="mb-3 text-xs font-bold uppercase tracking-wide text-[#B8C5FF]">{role.area}</p>
                        <h3 className="mb-2 text-lg font-black text-white">{role.title}</h3>
                        <p className="text-sm leading-relaxed text-gray-300">{role.text}</p>
                      </div>
                    ))}
                  </div>
                </section>

                <section id="prolink-features" className="scroll-mt-28 rounded-3xl border border-white/15 bg-white/10 p-7 backdrop-blur-xl md:p-9">
                  <div className="mb-5 flex items-center gap-3 text-[#5066AD]">
                    <FaTasks className="text-2xl" aria-hidden="true" />
                  <h2 className="text-2xl font-black">Key Features</h2>
                  </div>
                  <div className="grid gap-4 md:grid-cols-2">
                    {featureGroups.map((feature) => (
                      <div key={feature.id} className="rounded-2xl border border-white/10 bg-[#08073d]/70 p-5 transition-colors hover:border-[#5066AD]/40">
                        <div className="mb-4 text-3xl text-[#5066AD]">{feature.icon}</div>
                        <h3 className="mb-2 font-bold text-white">{feature.title}</h3>
                        <div className="space-y-2">
                          {feature.items.map((item) => (
                            <p key={item} className="flex gap-2 text-sm leading-relaxed text-gray-300">
                              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#5066AD]" />
                              <span>{item}</span>
                            </p>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                <section className="rounded-3xl border border-white/15 bg-white/10 p-7 backdrop-blur-xl md:p-9">
                  <div className="mb-5 flex items-center gap-3 text-[#5066AD]">
                    <FaServer className="text-2xl" aria-hidden="true" />
                    <h2 className="text-2xl font-black">Architecture / Technical Approach</h2>
                  </div>
                  <div className="grid gap-4 md:grid-cols-2">
                    {marketplaceFlow.map((step, index) => (
                      <div key={step.title} className="rounded-2xl border border-white/10 bg-[#08073d]/70 p-5">
                        <div className="mb-4 flex items-center justify-between gap-3">
                          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#5066AD] text-sm font-black text-white">
                            {index + 1}
                          </span>
                          <span className="rounded-full border border-[#5066AD]/30 bg-[#5066AD]/10 px-3 py-1 text-xs font-semibold text-[#B8C5FF]">
                            {step.label}
                          </span>
                        </div>
                        <h3 className="font-bold text-white">{step.title}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-gray-300">{step.text}</p>
                      </div>
                    ))}
                  </div>
                  <p className="mt-5 rounded-2xl border border-[#5066AD]/25 bg-[#5066AD]/10 p-4 font-mono text-sm text-[#B8C5FF]">
                    Tech Stack: Flutter - FlutterFlow - Dart - Firebase
                  </p>
                </section>

                <section className="rounded-3xl border border-white/15 bg-white/10 p-7 backdrop-blur-xl md:p-9">
                  <div className="mb-5 flex items-center gap-3 text-[#5066AD]">
                    <FaHandshake className="text-2xl" aria-hidden="true" />
                    <h2 className="text-2xl font-black">Marketplace Workflow</h2>
                  </div>
                  <p className="mb-5 leading-relaxed text-gray-200">
                    The app is easier to scan as a two-sided workflow: users present themselves, discover opportunities, collaborate, and build trust.
                  </p>
                  <div className="grid gap-4 md:grid-cols-2">
                    {workflowCards.map((item) => (
                      <div key={item.title} className="rounded-2xl border border-white/10 bg-[#08073d]/70 p-5 transition-colors hover:border-[#5066AD]/40">
                        <div className="mb-4 text-3xl text-[#5066AD]">{item.icon}</div>
                        <h3 className="mb-2 font-bold text-white">{item.title}</h3>
                        <p className="text-sm leading-relaxed text-gray-300">{item.text}</p>
                      </div>
                    ))}
                  </div>
                </section>

                <section className="rounded-3xl border border-white/15 bg-white/10 p-7 backdrop-blur-xl md:p-9">
                  <div className="mb-5 flex items-center gap-3 text-[#5066AD]">
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
                  <div className="mb-5 flex items-center gap-3 text-[#5066AD]">
                    <FaStar className="text-2xl" aria-hidden="true" />
                  <h2 className="text-2xl font-black">What I Learned</h2>
                  </div>
                  <div className="grid gap-4 md:grid-cols-2">
                    {learningCards.map((item) => (
                      <div key={item.title} className="rounded-2xl border border-white/10 bg-[#08073d]/70 p-5">
                        <p className="mb-2 text-xs font-bold uppercase tracking-wide text-[#B8C5FF]">{item.area}</p>
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
                    <p className="flex items-center gap-2 text-gray-200"><SiFlutter className="text-[#5066AD]" /> Flutter</p>
                    <p className="flex items-center gap-2 text-gray-200"><FaMobileAlt className="text-[#5066AD]" /> FlutterFlow</p>
                    <p className="flex items-center gap-2 text-gray-200"><SiDart className="text-[#5066AD]" /> Dart</p>
                    <p className="flex items-center gap-2 text-gray-200"><SiFirebase className="text-[#5066AD]" /> Firebase</p>
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

                <div className="rounded-3xl border border-white/15 bg-white/10 p-6 backdrop-blur-xl">
                  <h2 className="mb-4 text-xl font-black">Project Visuals</h2>
                  <div className="grid gap-3">
                    {visuals.map((item) => (
                      <button
                        key={item.title}
                        type="button"
                        onClick={() => setSelectedImage({ src: item.image, title: item.title })}
                        className="group overflow-hidden rounded-2xl border border-white/10 bg-[#08073d]/70 text-left transition hover:border-[#5066AD]/60 focus:outline-none focus:ring-2 focus:ring-[#5066AD]/70"
                      >
                        <div className="relative aspect-video bg-[#080744] p-4">
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
                  className="block rounded-2xl bg-[#5066AD] px-5 py-4 text-center font-bold text-white shadow-lg shadow-[#5066AD]/20 transition hover:-translate-y-1 hover:bg-[#657BD0]"
                >
                  Discuss this work
                </Link>
              </aside>
            </div>

            <div className="mt-14 rounded-3xl border border-white/15 bg-white/10 p-7 backdrop-blur-xl md:p-9">
              <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
                <div>
                  <h2 className="mb-2 text-2xl font-black">Explore the project</h2>
                  <p className="text-gray-300">Review the features, return to the project list, or start a conversation.</p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <a href="#prolink-features" className="inline-flex items-center gap-2 rounded-full bg-[#5066AD] px-5 py-3 font-semibold text-white transition hover:bg-[#657BD0]">
                    <FaTasks aria-hidden="true" />
                    Features
                  </a>
                  <Link to="/portfolio" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 font-semibold text-white transition hover:border-[#5066AD]/60 hover:bg-[#5066AD]/10">
                    Portfolio
                  </Link>
                  <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 font-semibold text-white transition hover:border-[#5066AD]/60 hover:bg-[#5066AD]/10">
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
              <Link to="/portfolio/onboardify" className="group flex items-center gap-3 text-gray-400 transition-colors hover:text-white">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 transition-all group-hover:border-[#5066AD] group-hover:bg-[#5066AD]">
                  <FaArrowLeft />
                </div>
                <div>
                  <span className="block text-xs uppercase tracking-wider text-gray-500 group-hover:text-gray-300">Previous Project</span>
                  <span className="text-lg font-semibold">Onboardify</span>
                </div>
              </Link>

              <Link to="/portfolio" className="group flex items-center gap-3 text-right text-gray-400 transition-colors hover:text-white">
                <div>
                  <span className="block text-xs uppercase tracking-wider text-gray-500 group-hover:text-gray-300">Back to</span>
                  <span className="text-lg font-semibold">Portfolio</span>
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 transition-all group-hover:border-[#5066AD] group-hover:bg-[#5066AD]">
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
            className="relative max-h-full w-full max-w-5xl rounded-[1.75rem] border border-white/15 bg-[#080744] p-4 shadow-2xl shadow-black/40"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mb-3 flex items-center justify-between gap-4">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#DDE4FF]">{selectedImage.title}</p>
              <button
                type="button"
                onClick={() => setSelectedImage(null)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition hover:border-[#DDE4FF]/70 hover:text-[#DDE4FF] focus:outline-none focus:ring-2 focus:ring-[#DDE4FF]/70"
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

export default ProLinkDetails;
