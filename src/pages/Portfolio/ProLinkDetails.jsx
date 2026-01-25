import { motion } from "framer-motion";
import {
    FaComments,
    FaStar,
    FaTasks,
    FaUserPlus
} from "react-icons/fa";
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
              <Link to="/" className="hover:text-[#e0492f] transition-colors">
                Home
              </Link>
              <span className="mx-2">/</span>
              <Link
                to="/portfolio"
                className="hover:text-[#e0492f] transition-colors"
              >
                Project
              </Link>
              <span className="mx-2">/</span>
              <span className="text-[#e0492f]">Pro-Link</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-2">
              Pro-Link App
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
                  src={proLinkLogo}
                  alt="Pro-Link Logo"
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
                <h3 className="text-2xl font-bold text-white mb-6 border-l-4 border-[#e0492f] pl-4">
                  Project Details
                </h3>

                <ul className="space-y-6">
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
                className="text-3xl font-bold text-white mb-6 border-l-4 border-[#e0492f] pl-4"
              >
                Project Overview
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
                  manage project requests, and communicate seamlessly — all
                  within a user-friendly, mobile-first interface.
                </p>

                <p className="leading-relaxed mb-6 block">
                  The application focuses on simplicity and efficiency,
                  leveraging Flutter for a responsive cross-platform experience
                  and Firebase for real-time data handling.
                </p>

                {/* Key Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
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
                  Tech Stack: FlutterFlow · Dart · Firebase
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProLinkDetails;
