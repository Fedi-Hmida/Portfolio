import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import ParticlesBackground from "../../components/ParticlesBackground";
import ProjectCard from "../../components/Portfolio/ProjectCard";
import SectionTitle from "../../components/SectionTitle";
import { projectCategories, projects } from "../../data/projects";

const Portfolio = () => {
  const [filter, setFilter] = useState("all");

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
            Recruiter-focused case studies showing my role, technical approach,
            and the proof behind each project, from Flutter mobile apps to AI
            and full-stack systems.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {projectCategories.map((cat) => (
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
