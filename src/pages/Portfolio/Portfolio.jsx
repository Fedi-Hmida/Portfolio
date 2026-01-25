import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import proLinkImg from "../../assets/images/FlutterFlow.png";
import smartClaimImg from "../../assets/images/Portfolio/New Logo SmartClaim.png";
import onboardifyImg from "../../assets/images/logo3.png";
import solarFlowImg from "../../assets/images/logo_1555.png";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import ParticlesBackground from "../../components/ParticlesBackground";
import ProjectCard from "../../components/Portfolio/ProjectCard";
import SectionTitle from "../../components/SectionTitle";

const Portfolio = () => {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "SmartClaim",
      category: ["ia", "mobile"],
      tech: ["Flutter", "AI", "YOLO"],
      description:
        "Cross-platform Flutter app for intelligent insurance claim management with real-time AI car damage detection.",
      image: smartClaimImg,
      link: "/portfolio/smart-claim",
    },
    {
      id: 2,
      title: "SolarFlow App",
      category: ["mobile"],
      tech: ["Flutter", "IoT", "Energy"],
      description:
        "Comprehensive Flutter mobile application for real-time solar energy management and consumption monitoring.",
      image: solarFlowImg,
      link: "/portfolio/solar-flow",
    },
    {
      id: 3,
      title: "Onboardify",
      category: ["web"],
      tech: ["JavaFX", "Symfony", "HR Tech"],
      description:
        "Gamified onboarding platform built with JavaFX & Symfony to enhance employee engagement and retention.",
      image: onboardifyImg,
      link: "/portfolio/onboardify",
    },
    {
      id: 4,
      title: "Pro-Link",
      category: ["mobile"],
      tech: ["Flutter", "Networking"],
      description:
        "Professional networking mobile application built with Flutter to connect professionals and facilitate collaboration.",
      image: proLinkImg,

      link: "/portfolio/pro-link",
    },
  ];

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "ia", label: "IA" },
    { id: "mobile", label: "Mobile Apps" },
    { id: "web", label: "Web Apps" },
  ];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category.includes(filter));

  return (
    <div className="relative min-h-screen bg-[#070640]">
      <ParticlesBackground />
      <Navbar />

      <main className="relative z-10 pt-32 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero & Title */}
        <div className="text-center mb-16 px-4">
          <SectionTitle title="My Projects" />
          <p className="text-gray-300 max-w-2xl mx-auto mt-4">
            Explore a collection of my recent work, showcasing expertise in
            mobile development, AI integration, and full-stack web solutions.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrapjustify-center gap-4 mb-16 justify-center">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`
                        px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 border-2
                        ${
                          filter === cat.id
                            ? "bg-primary-pink border-primary-pink text-white shadow-[0_0_15px_rgba(254,62,87,0.5)]"
                            : "bg-transparent border-primary-pink text-gray-300 hover:bg-primary-pink/10 hover:text-white"
                        }
                    `}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-gray-400 py-20"
          >
            <p>No projects found in this category.</p>
          </motion.div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Portfolio;
