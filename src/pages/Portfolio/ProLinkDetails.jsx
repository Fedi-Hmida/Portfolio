import { motion } from "framer-motion";
import { FaComments, FaStar, FaTasks, FaUserPlus } from "react-icons/fa";
import { SiDart, SiFirebase, SiFlutter } from "react-icons/si";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import ParticlesBackground from "../../components/ParticlesBackground";

// Assets
import proLinkLogo from "../../assets/images/FlutterFlow.png";

const ProLinkDetails = () => {
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
      id: "account",
      title: "Account Creation",
      desc: "Robust profile management for both freelancers and clients, allowing customized portfolios and service listings.",
      icon: FaUserPlus,
    },
    {
      id: "project",
      title: "Proposal Management",
      desc: "Streamlined flow for clients to post projects and freelancers to submit detailed proposals and bids.",
      icon: FaTasks,
    },
    {
      id: "review",
      title: "Review & Rating System",
      desc: "Integrated feedback loop enabling users to rate completed work, building trust and community standards.",
      icon: FaStar,
    },
    {
      id: "chat",
      title: "Seamless Communication",
      desc: "Built-in messaging system to facilitate clear and instant communication between parties.",
      icon: FaComments,
    },
  ];

  const caseStudyMetrics = [
    { label: "Platform", value: "Mobile", detail: "Flutter / FlutterFlow app" },
    { label: "Backend", value: "Firebase", detail: "Realtime data handling" },
    { label: "Duration", value: "6 weeks", detail: "Project timeline" },
  ];

  const responsibilities = [
    "Built a mobile-first professional networking and freelance workflow.",
    "Designed flows for account creation, service listings, proposals, reviews, and chat.",
    "Used Flutter / FlutterFlow with Dart and Firebase for the app experience.",
    "Structured the interface around clients, freelancers, project requests, and communication.",
  ];

  const approachSteps = [
    {
      title: "User profiles",
      text: "Account and profile flows allow freelancers and clients to present services and project needs.",
    },
    {
      title: "Project requests",
      text: "Proposal management supports posting, browsing, and responding to collaboration opportunities.",
    },
    {
      title: "Trust layer",
      text: "Reviews and ratings help users evaluate completed work and build credibility.",
    },
    {
      title: "Realtime communication",
      text: "Firebase supports the data handling needed for mobile-first interaction and messaging.",
    },
  ];

  const tradeoffs = [
    "Keeping the marketplace flow simple enough for a mobile-first interface.",
    "Balancing freelancer and client needs in the same product journey.",
    "Designing trust signals without overcomplicating the first version.",
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
              <Link to="/" className="hover:text-[#e0492f] transition-colors">
                Home
              </Link>
              <span>/</span>
              <Link
                to="/portfolio"
                className="hover:text-[#e0492f] transition-colors"
              >
                Project
              </Link>
              <span>/</span>
              <span className="text-[#e0492f]">Pro-Link</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-2 leading-tight">
              Pro-Link Case Study
            </h1>
            <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-gray-300">
              Mobile professional networking app for freelancers and clients,
              covering profiles, proposals, ratings, and communication.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href="#prolink-features"
                className="inline-flex items-center justify-center rounded-full bg-[#e0492f] px-7 py-3 text-sm font-bold text-white shadow-lg shadow-[#e0492f]/20 transition-all hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-[#e0492f]/70"
              >
                View features
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 py-3 text-sm font-bold text-white transition-all hover:-translate-y-1 hover:border-[#e0492f] focus:outline-none focus:ring-2 focus:ring-[#e0492f]/70"
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
                  src={proLinkLogo}
                  alt="Pro-Link Logo"
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
              <div className="bg-[#0c0b44] border border-white/10 rounded-2xl p-8 sticky top-24 shadow-xl backdrop-blur-sm bg-opacity-90">
                <h3 className="text-2xl font-bold text-white mb-6 border-l-4 border-[#e0492f] pl-4">
                  Project Details
                </h3>

                <ul className="space-y-6">
                  <li className="flex flex-col">
                    <span className="text-gray-400 text-sm uppercase tracking-wider mb-1">
                      My Role
                    </span>
                    <span className="text-white font-medium text-lg">
                      Mobile app builder
                    </span>
                  </li>
                  <li className="flex flex-col">
                    <span className="text-gray-400 text-sm uppercase tracking-wider mb-1">
                      Project Name
                    </span>
                    <span className="text-white font-medium text-lg">
                      Pro-Link App
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
                        <SiFlutter className="text-[#e0492f]" /> Flutter
                      </p>
                      <p className="flex items-center gap-2">
                        <SiDart className="text-[#e0492f]" /> Dart
                      </p>
                      <p className="flex items-center gap-2">
                        <SiFirebase className="text-[#e0492f]" /> Firebase
                      </p>
                    </div>
                  </li>
                  <li className="flex flex-col">
                    <span className="text-gray-400 text-sm uppercase tracking-wider mb-1">
                      Main Focus
                    </span>
                    <span className="text-white font-medium text-lg">
                      Professional networking workflow
                    </span>
                  </li>
                  <li className="flex flex-col">
                    <span className="text-gray-400 text-sm uppercase tracking-wider mb-1">
                      Duration
                    </span>
                    <span className="text-white font-medium text-lg">
                      6 Weeks
                    </span>
                  </li>
                </ul>

                <div className="mt-8">
                  <Link
                    to="/contact"
                    className="block w-full text-center py-3 rounded-lg bg-gradient-to-r from-[#e0492f] to-[#ff7e67] text-white font-bold tracking-wide shadow-lg hover:shadow-[#e0492f]/40 transition-all transform hover:-translate-y-1"
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
                className="text-3xl font-bold text-white mb-6 border-l-4 border-[#e0492f] pl-4"
              >
                Project Summary
              </motion.h3>
              <motion.div
                variants={fadeInUp}
                className="prose prose-lg text-[#8c8b8b] prose-invert max-w-none"
              >
                <p className="leading-relaxed mb-6 block">
                  Pro-Link is a mobile application designed to connect
                  freelancers with clients, inspired by platforms like Fiverr.
                  Developed to streamline the freelance hiring process, the app
                  allows users to create profiles, post or browse services,
                  manage project requests, and communicate seamlessly - all
                  within a user-friendly, mobile-first interface.
                </p>

                <p className="leading-relaxed mb-6 block">
                  The application focuses on simplicity and efficiency,
                  leveraging Flutter for a responsive cross-platform experience
                  and Firebase for real-time data handling.
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
                  <div className="bg-[#0b0d26] p-6 rounded-lg border-l-4 border-[#e0492f]">
                    <h4 className="text-white font-semibold mb-2">
                      The Problem
                    </h4>
                    <p className="text-sm">
                      Freelancers and clients need a simple way to create
                      profiles, manage opportunities, communicate, and build
                      trust in one mobile workflow.
                    </p>
                  </div>
                  <div className="bg-[#0b0d26] p-6 rounded-lg border-l-4 border-orange-300">
                    <h4 className="text-white font-semibold mb-2">
                      The Solution
                    </h4>
                    <p className="text-sm">
                      Pro-Link organizes profiles, project requests, proposals,
                      ratings, and communication into a mobile-first product.
                    </p>
                  </div>
                </div>

                {/* Key Features Grid */}
                <div
                  id="prolink-features"
                  className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10 scroll-mt-28"
                >
                  {features.map((feature, index) => (
                    <div
                      key={feature.id}
                      className="bg-[#0b0d26] p-6 rounded-xl border border-white/5 hover:border-[#e0492f]/30 transition-all hover:translate-y-[-5px] shadow-lg"
                    >
                      <feature.icon className="text-[#e0492f] text-3xl mb-4" />
                      <h4 className="text-white font-semibold text-xl mb-2">
                        {feature.title}
                      </h4>
                      <p className="text-sm text-gray-400">{feature.desc}</p>
                    </div>
                  ))}
                </div>

                <p className="font-mono text-sm text-[#e0492f] mt-8 pt-6 border-t border-white/10">
                  Tech Stack: FlutterFlow - Dart - Firebase
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
                      <span className="text-sm font-bold text-[#e0492f]">
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
                    <li key={item} className="border-l-2 border-[#e0492f] pl-4">
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
                  Pro-Link helped me think through marketplace-style product
                  flows, trust features, and how mobile interfaces can support
                  both project discovery and communication.
                </p>
              </motion.div>
            </aside>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProLinkDetails;
