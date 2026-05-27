import { AnimatePresence, motion } from "framer-motion";
import { lazy, Suspense, useState } from "react";
import { Link } from "react-router-dom";
import "../assets/css/social-icons.css";
import Footer from "../components/Footer";

import Navbar from "../components/Navbar";
import NewsCard from "../components/News/NewsCard";
import ProjectCard from "../components/Portfolio/ProjectCard"; // Make sure to export this if not already
import SocialIconLink from "../components/SocialIconLink";
import { latestNewsPreview } from "../data/news";
import { getProjectCards } from "../data/projects";
import {
  hardSkills,
  methodologies,
  services,
  softSkills,
} from "../data/skills";
import { socialLinks } from "../data/socialLinks";

// Asset Imports
import heroImg from "../assets/images/slider/Fedi2.0.png";

const ParticlesBackground = lazy(
  () => import("../components/ParticlesBackground"),
);

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const Home = () => {
  const [activeTab, setActiveTab] = useState("services"); // Default tab changed from "soft skills" to "hard skills"

  const portfolioPreview = getProjectCards("home");
  const newsPreview = latestNewsPreview;
  const projectsPerPage = 2;
  const [workPage, setWorkPage] = useState(1);
  const totalWorkPages = Math.ceil(portfolioPreview.length / projectsPerPage);
  const paginatedProjects = portfolioPreview.slice(
    (workPage - 1) * projectsPerPage,
    workPage * projectsPerPage,
  );

  return (
    <div className="relative min-h-screen bg-deep-indigo text-white font-sans overflow-x-hidden">
      <Suspense
        fallback={<div className="absolute inset-0 bg-deep-indigo -z-10" />}
      >
        <ParticlesBackground />
      </Suspense>
      <Navbar />

      {/* --- HERO SECTION --- */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, staggerChildren: 0.2 }}
              className="space-y-6 z-10 order-2 lg:order-1"
            >
              <motion.p
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="inline-flex w-fit rounded-full border border-primary-pink/30 bg-primary-pink/10 px-4 py-2 text-sm font-semibold uppercase tracking-wider text-primary-pink"
              >
                Fedi Hmida - Flutter & AI Engineering
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.5, type: "spring" }}
                className="max-w-3xl text-4xl font-bold leading-tight md:text-6xl"
              >
                Flutter & AI Engineer building intelligent mobile products
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.55, duration: 0.5 }}
                className="max-w-2xl text-base leading-8 text-gray-300 md:text-lg"
              >
                Data Science & AI Engineering student focused on Flutter,
                computer vision, and practical backend systems. Built
                SmartClaim with Flutter, YOLOv8, FastAPI, Docker, and 92.9%
                damage detection precision.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.65, duration: 0.5 }}
                className="flex flex-wrap gap-3"
              >
                {["Flutter", "YOLOv8", "FastAPI", "Docker"].map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-gray-200"
                  >
                    {tech}
                  </span>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.75, duration: 0.5 }}
                className="flex flex-col gap-3 pt-2 sm:flex-row"
              >
                <Link
                  to="/portfolio/smart-claim"
                  className="inline-flex items-center justify-center rounded-full bg-primary-pink px-7 py-3 text-sm font-bold text-white shadow-lg shadow-primary-pink/20 transition-all hover:-translate-y-1 hover:shadow-glow focus:outline-none focus:ring-2 focus:ring-primary-pink/70 focus:ring-offset-2 focus:ring-offset-deep-indigo"
                >
                  View SmartClaim
                </Link>
                <a
                  href="/assets/cv/Cv_Ang.pdf"
                  download
                  className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 py-3 text-sm font-bold text-white transition-all hover:-translate-y-1 hover:border-primary-pink hover:text-primary-pink focus:outline-none focus:ring-2 focus:ring-primary-pink/70 focus:ring-offset-2 focus:ring-offset-deep-indigo"
                >
                  Download CV
                </a>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 px-7 py-3 text-sm font-bold text-gray-200 transition-all hover:-translate-y-1 hover:border-white/40 hover:text-white focus:outline-none focus:ring-2 focus:ring-primary-pink/70 focus:ring-offset-2 focus:ring-offset-deep-indigo"
                >
                  Contact Me
                </Link>
              </motion.div>

              {/* Social Icons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="flex gap-4 pt-4"
              >
                {socialLinks.map((social) => {
                  return (
                    <SocialIconLink
                      key={social.name}
                      social={social}
                      className={social.heroClassName}
                      animated
                    />
                  );
                })}
              </motion.div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative order-1 lg:order-2 flex justify-center lg:justify-end"
            >
              {/* Background Glow Pulse */}
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-primary-pink/30 rounded-full blur-[100px] -z-10"
              />

              {/* Floating Image Animation */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <img
                  width="500"
                  height="500"
                  src={heroImg}
                  alt="Fedi Hmida"
                  fetchPriority="high"
                  loading="eager"
                  decoding="async"
                  className="w-full max-w-[500px] object-contain drop-shadow-2xl z-10 hover:scale-105 transition-transform duration-500"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- TABS SECTION (About Me) --- */}
      <section className="py-10 md:py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-white inline-block relative pb-2">
              About Me
              <motion.div
                className="absolute bottom-0 left-0 h-1 bg-primary-pink rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 1, delay: 0.5 }}
              />
            </h2>
          </motion.div>

          {/* Tabs Navigation */}
          <div className="flex justify-center mb-16">
            <div className="flex flex-wrap justify-center gap-4 bg-white/5 backdrop-blur-lg p-2 rounded-full border border-white/10 shadow-2xl">
              {[
                "services",
                "hard skills",
                "soft skills",
                "project methodologies",
              ].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`relative px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-300 ${
                    activeTab === tab
                      ? "text-white shadow-[0_0_20px_rgba(254,62,87,0.3)]"
                      : "text-gray-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {activeTab === tab && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-primary-pink rounded-full -z-10"
                      transition={{
                        type: "spring",
                        bounce: 0.2,
                        duration: 0.6,
                      }}
                    />
                  )}
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="min-h-[400px]">
            <AnimatePresence mode="wait">
              {/* Removed About Tab Content Block */}

              {activeTab === "soft skills" && (
                <motion.div
                  key="soft-skills"
                  layout
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={containerVariants}
                >
                  {softSkills.map((skill, idx) => (
                    <motion.div
                      key={idx}
                      className="relative group h-full flex flex-col items-center justify-center p-4 transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                    >
                      {/* Glow Overlay (only visible on hover for effect behind icon) */}
                      <div
                        className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-20 blur-3xl transition-opacity duration-500 -z-10"
                        style={{ backgroundColor: skill.hex }}
                      />

                      {/* Icon Container */}
                      <div className="mb-4 relative z-10 transition-transform duration-500 group-hover:rotate-6">
                        <motion.div
                          animate={{ y: [0, -6, 0] }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: idx * 0.1,
                          }}
                        >
                          <skill.icon
                            size={45}
                            style={{
                              color: skill.hex,
                              filter: `drop-shadow(0 0 10px ${skill.hex})`,
                            }}
                          />
                        </motion.div>
                      </div>

                      <h3
                        className="text-lg font-bold mb-2 text-center transition-colors duration-300 group-hover:text-white"
                        style={{ color: "white" }}
                      >
                        {skill.title}
                      </h3>

                      <p className="text-gray-400 text-center text-xs leading-relaxed group-hover:text-gray-200 transition-colors max-w-[90%]">
                        {skill.desc}
                      </p>
                    </motion.div>
                  ))}
                </motion.div>
              )}

              {activeTab === "hard skills" && (
                <motion.div
                  key="hard-skills"
                  layout
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={containerVariants}
                >
                  {hardSkills.map((skill, idx) => (
                    <motion.div
                      key={idx}
                      className="relative group h-full flex flex-col items-center justify-center p-4 transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                    >
                      {/* Glow Overlay (only visible on hover for effect behind icon) */}
                      <div
                        className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-20 blur-3xl transition-opacity duration-500 -z-10"
                        style={{ backgroundColor: skill.hex }}
                      />

                      {/* Icon Container (Transparent background but keeping shape) */}
                      <div className="mb-4 relative z-10 transition-transform duration-500 group-hover:rotate-6">
                        <motion.div
                          animate={{ y: [0, -6, 0] }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: idx * 0.1,
                          }}
                        >
                          <skill.icon
                            size={45}
                            style={{
                              color: skill.hex,
                              filter: `drop-shadow(0 0 10px ${skill.hex})`,
                            }}
                          />
                        </motion.div>
                      </div>

                      <h3
                        className="text-lg font-bold mb-2 text-center transition-colors duration-300 group-hover:text-white"
                        style={{ color: "white" }}
                      >
                        {skill.title}
                      </h3>

                      <p className="text-gray-400 text-center text-xs leading-relaxed group-hover:text-gray-200 transition-colors max-w-[90%]">
                        {skill.desc}
                      </p>
                    </motion.div>
                  ))}
                </motion.div>
              )}

              {activeTab === "services" && (
                <motion.div
                  key="services"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                  {services.map((service, idx) => (
                    <motion.div
                      key={idx}
                      className="group relative flex flex-col items-center text-center p-4 transition-all duration-500"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1, duration: 0.5 }}
                      whileHover={{ y: -5 }}
                    >
                      {/* Animated Background Blob */}
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-24 bg-primary-pink/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />

                      {/* Icon Container with Ring Effect */}
                      <div className="relative mb-6">
                        <div className="absolute inset-0 border-2 border-dashed border-white/20 rounded-full animate-[spin_10s_linear_infinite] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                        <motion.div
                          className="relative z-10 p-4 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 group-hover:border-primary-pink/50 group-hover:bg-primary-pink/10 transition-all duration-300"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                        >
                          <service.icon
                            size={32}
                            className="text-gray-300 group-hover:text-primary-pink transition-colors duration-300"
                          />
                        </motion.div>
                      </div>

                      {/* Content */}
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-pink transition-colors duration-300">
                        {service.title}
                      </h3>

                      <div className="h-1 w-12 bg-white/10 rounded-full mb-4 group-hover:w-24 group-hover:bg-primary-pink/50 transition-all duration-500" />

                      <p className="text-gray-400 text-sm leading-relaxed mb-6 group-hover:text-gray-200 transition-colors duration-300 line-clamp-3">
                        {service.desc}
                      </p>

                      {/* Tags / Keywords */}
                      <div className="flex flex-wrap justify-center gap-2 mt-auto">
                        {service.tags &&
                          service.tags.map((tag, i) => (
                            <motion.span
                              key={i}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{
                                delay: 0.3 + i * 0.1 + idx * 0.1,
                                duration: 0.3,
                              }}
                              className="px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-white bg-white/5 border border-white/10 rounded-full hover:bg-primary-pink hover:border-primary-pink transition-colors duration-300 cursor-default"
                            >
                              {tag}
                            </motion.span>
                          ))}
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              )}

              {activeTab === "project methodologies" && (
                <motion.div
                  key="methodologies"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                  {methodologies.map((method, idx) => (
                    <motion.div
                      key={idx}
                      className="relative pl-6 border-l-4 border-white/10 hover:border-l-[6px] transition-all duration-300 group"
                      style={{
                        borderColor:
                          idx === 0
                            ? "#39c4ff"
                            : idx === 1
                              ? "#fe3e57"
                              : idx === 2
                                ? "#54faae"
                                : "#f1f965",
                      }}
                      whileHover={{ x: 10 }}
                    >
                      <div className="absolute -left-[22px] top-0 bg-[#070640] p-1 rounded-full border-2 border-inherit">
                        <method.icon
                          className={`${method.color} animate-spin-slow`}
                          size={24}
                        />
                      </div>
                      <h3
                        className={`text-2xl font-bold mb-2 ${method.color} group-hover:brightness-125 transition-all`}
                      >
                        {method.title}
                      </h3>
                      <p className="text-gray-300 text-lg">{method.desc}</p>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* --- PORTFOLIO PREVIEW --- */}
      <section className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-white inline-block relative pb-2">
                  My Work
                  <motion.div
                    className="absolute bottom-0 left-0 h-1 bg-primary-pink rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 1, delay: 0.5 }}
                  />
                </h2>
              </motion.div>
            </div>
            <Link
              to="/portfolio"
              className="hidden md:inline-flex items-center text-gray-300 hover:text-white transition-colors"
            >
              View All Projects <span className="ml-2">&rarr;</span>
            </Link>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={workPage}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -18 }}
              transition={{ duration: 0.28, ease: "easeOut" }}
            >
              {paginatedProjects.map((project, idx) => (
                <ProjectCard key={project.id} project={project} index={idx} />
              ))}
            </motion.div>
          </AnimatePresence>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => setWorkPage((page) => Math.max(page - 1, 1))}
              disabled={workPage === 1}
              className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-bold text-white transition hover:border-primary-pink hover:text-primary-pink disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-white/15 disabled:hover:text-white"
            >
              Previous
            </button>

            {Array.from({ length: totalWorkPages }).map((_, index) => {
              const page = index + 1;
              return (
                <button
                  key={page}
                  type="button"
                  onClick={() => setWorkPage(page)}
                  aria-label={`Go to work page ${page}`}
                  aria-current={workPage === page ? "page" : undefined}
                  className={`h-10 w-10 rounded-full border text-sm font-black transition ${
                    workPage === page
                      ? "border-primary-pink bg-primary-pink text-white shadow-lg shadow-primary-pink/20"
                      : "border-white/15 bg-white/5 text-gray-300 hover:border-primary-pink hover:text-white"
                  }`}
                >
                  {page}
                </button>
              );
            })}

            <button
              type="button"
              onClick={() => setWorkPage((page) => Math.min(page + 1, totalWorkPages))}
              disabled={workPage === totalWorkPages}
              className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-bold text-white transition hover:border-primary-pink hover:text-primary-pink disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-white/15 disabled:hover:text-white"
            >
              Next
            </button>
          </div>

          <div className="mt-8 text-center md:hidden">
            <Link
              to="/portfolio"
              className="btn-primary inline-block px-8 py-3 rounded-full border border-white/20"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* --- NEWS PREVIEW --- */}
      <section className="py-20 bg-darker-indigo/50 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-primary-pink font-bold tracking-wider uppercase text-sm">
              Blog & Updates
            </span>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-2"
            >
              <h2 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-white inline-block relative pb-2">
                Latest News
                <motion.div
                  className="absolute bottom-0 left-0 h-1 bg-primary-pink rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
              </h2>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {newsPreview.map((news) => (
              <NewsCard key={news.id} {...news} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/news"
              className="inline-flex items-center px-8 py-3 rounded-full bg-primary-pink text-white font-bold shadow-lg hover:shadow-glow hover:-translate-y-1 transition-all"
            >
              See More News
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
