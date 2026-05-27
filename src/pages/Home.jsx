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
import heroImg from "../assets/images/slider/me.png";

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

const CV_PATH = "/assets/cv/Cv_Ang.pdf";
const HERO_NAME = "Fedi Hmida";
const HERO_PRIMARY_ROLE = "Software Engineering Student";
const HERO_SPECIALIZATION = "Data Science & AI Engineering";
const heroNameLetters = Array.from(HERO_NAME);

const Home = () => {
  const [activeTab, setActiveTab] = useState("services"); // Default tab changed from "soft skills" to "hard skills"

  const portfolioPreview = getProjectCards("home");
  const newsPreview = latestNewsPreview;
  const projectsPerPage = 2;
  const hardSkillsPerPage = 8;
  const [workPage, setWorkPage] = useState(1);
  const [hardSkillsPage, setHardSkillsPage] = useState(1);
  const totalWorkPages = Math.ceil(portfolioPreview.length / projectsPerPage);
  const totalHardSkillPages = Math.ceil(hardSkills.length / hardSkillsPerPage);
  const paginatedProjects = portfolioPreview.slice(
    (workPage - 1) * projectsPerPage,
    workPage * projectsPerPage,
  );
  const paginatedHardSkills = hardSkills.slice(
    (hardSkillsPage - 1) * hardSkillsPerPage,
    hardSkillsPage * hardSkillsPerPage,
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
      <section className="relative flex items-center justify-center px-4 pb-10 pt-28 sm:px-6 sm:pb-12 lg:min-h-[620px] lg:px-8 lg:pb-8 lg:pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative">
          <div className="grid grid-cols-1 items-center gap-8 md:gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(380px,1fr)] lg:gap-14 xl:gap-20">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, staggerChildren: 0.2 }}
              className="z-10 order-2 mx-auto flex w-full max-w-xl flex-col items-center text-center lg:order-1 lg:mx-0 lg:items-start lg:text-left"
            >
              <motion.h1
                aria-label={HERO_NAME}
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {},
                  visible: {
                    transition: {
                      staggerChildren: 0.045,
                      delayChildren: 0.16,
                    },
                  },
                }}
                className="text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl"
              >
                {heroNameLetters.map((letter, index) => (
                  <motion.span
                    key={`${letter}-${index}`}
                    aria-hidden="true"
                    className="inline-block"
                    variants={{
                      hidden: { opacity: 0, y: 24, rotateX: -35 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        rotateX: 0,
                        transition: {
                          duration: 0.55,
                          ease: [0.22, 1, 0.36, 1],
                        },
                      },
                    }}
                  >
                    {letter === " " ? "\u00A0" : letter}
                  </motion.span>
                ))}
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 18, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ delay: 0.72, duration: 0.55, ease: "easeOut" }}
                className="relative mt-3 flex flex-col items-center gap-1 text-center lg:items-start lg:text-left"
              >
                <span className="text-base font-semibold text-primary-pink sm:text-lg md:text-xl">
                  {HERO_PRIMARY_ROLE}
                </span>
                <span className="text-sm font-medium text-sky-300/90 sm:text-base md:text-lg">
                  {HERO_SPECIALIZATION}
                </span>
                <motion.span
                  aria-hidden="true"
                  className="absolute -bottom-2 left-0 h-[2px] w-full origin-left rounded-full bg-primary-pink/70"
                  initial={{ scaleX: 0, opacity: 0 }}
                  animate={{ scaleX: 1, opacity: 1 }}
                  transition={{ delay: 0.98, duration: 0.5, ease: "easeOut" }}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.65, duration: 0.5 }}
                className="mt-8 flex w-full max-w-sm flex-col gap-3 sm:max-w-none sm:flex-row sm:justify-center lg:justify-start"
              >
                <Link
                  to="/portfolio"
                  className="inline-flex min-h-12 items-center justify-center rounded-full bg-primary-pink px-7 py-3 text-sm font-bold text-white shadow-lg shadow-primary-pink/20 transition-all hover:-translate-y-1 hover:shadow-glow focus:outline-none focus:ring-2 focus:ring-primary-pink/70 focus:ring-offset-2 focus:ring-offset-deep-indigo"
                >
                  View Projects
                </Link>
                <a
                  href={CV_PATH}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 py-3 text-sm font-bold text-white transition-all hover:-translate-y-1 hover:border-primary-pink hover:text-primary-pink focus:outline-none focus:ring-2 focus:ring-primary-pink/70 focus:ring-offset-2 focus:ring-offset-deep-indigo"
                >
                  View CV
                </a>
                <Link
                  to="/about"
                  className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/15 px-7 py-3 text-sm font-bold text-gray-200 transition-all hover:-translate-y-1 hover:border-white/40 hover:text-white focus:outline-none focus:ring-2 focus:ring-primary-pink/70 focus:ring-offset-2 focus:ring-offset-deep-indigo"
                >
                  About Me
                </Link>
              </motion.div>

              {/* Social Icons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.76, duration: 0.5 }}
                className="mt-7 flex flex-wrap justify-center gap-4 lg:justify-start"
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
              className="relative order-1 flex items-end justify-center lg:order-2 lg:items-center lg:justify-end"
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
                className="absolute left-1/2 top-1/2 -z-10 h-[270px] w-[270px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-pink/25 blur-[95px] sm:h-[340px] sm:w-[340px] md:h-[420px] md:w-[420px] lg:h-[520px] lg:w-[520px]"
              />

              {/* Floating Image Animation */}
              <div className="relative flex w-full justify-center lg:-mt-20 lg:justify-end xl:-mt-16">
                <motion.div
                  animate={{ y: [0, -20, 0] }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="relative flex w-full justify-center lg:justify-end"
                >
                  <img
                    width="620"
                    height="620"
                    src={heroImg}
                    alt="Fedi Hmida"
                    fetchPriority="high"
                    loading="eager"
                    decoding="async"
                    className="z-10 w-[min(72vw,285px)] object-contain drop-shadow-2xl transition-transform duration-500 hover:scale-[1.03] sm:w-[330px] md:w-[400px] lg:w-[500px] xl:w-[560px]"
                  />
                </motion.div>
              </div>
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
                  key={`hard-skills-${hardSkillsPage}`}
                  layout
                  className="space-y-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                  >
                    {paginatedHardSkills.map((skill, idx) => (
                      <motion.div
                        key={skill.title}
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

                  {totalHardSkillPages > 1 && (
                    <div className="flex flex-wrap items-center justify-center gap-3">
                      <button
                        type="button"
                        onClick={() =>
                          setHardSkillsPage((page) => Math.max(page - 1, 1))
                        }
                        disabled={hardSkillsPage === 1}
                        className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-bold text-white transition hover:border-primary-pink hover:text-primary-pink disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-white/15 disabled:hover:text-white"
                      >
                        Previous
                      </button>

                      {Array.from({ length: totalHardSkillPages }).map(
                        (_, index) => {
                          const page = index + 1;
                          return (
                            <button
                              key={page}
                              type="button"
                              onClick={() => setHardSkillsPage(page)}
                              aria-label={`Go to hard skills page ${page}`}
                              aria-current={
                                hardSkillsPage === page ? "page" : undefined
                              }
                              className={`h-10 w-10 rounded-full border text-sm font-black transition ${
                                hardSkillsPage === page
                                  ? "border-primary-pink bg-primary-pink text-white shadow-lg shadow-primary-pink/20"
                                  : "border-white/15 bg-white/5 text-gray-300 hover:border-primary-pink hover:text-white"
                              }`}
                            >
                              {page}
                            </button>
                          );
                        },
                      )}

                      <button
                        type="button"
                        onClick={() =>
                          setHardSkillsPage((page) =>
                            Math.min(page + 1, totalHardSkillPages),
                          )
                        }
                        disabled={hardSkillsPage === totalHardSkillPages}
                        className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-bold text-white transition hover:border-primary-pink hover:text-primary-pink disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-white/15 disabled:hover:text-white"
                      >
                        Next
                      </button>
                    </div>
                  )}
                </motion.div>
              )}

              {activeTab === "services" && (
                <motion.div
                  key="services"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6"
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
                  className="grid grid-cols-1 gap-6 md:grid-cols-2"
                >
                  {methodologies.map((method, idx) => (
                    <motion.div
                      key={method.title}
                      className="group relative flex min-h-[230px] flex-col items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-lg transition-all duration-300 hover:-translate-y-1 hover:border-primary-pink/50 hover:bg-white/10"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1, duration: 0.5 }}
                    >
                      <div
                        className="absolute inset-0 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-20"
                        style={{ backgroundColor: method.hex }}
                      />

                      <div className="relative mb-5">
                        <div className="absolute inset-0 rounded-full border-2 border-dashed border-white/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                        <motion.div
                          className="relative z-10 rounded-full border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition-all duration-300 group-hover:border-primary-pink/50 group-hover:bg-primary-pink/10"
                          whileHover={{ scale: 1.08, rotate: 5 }}
                        >
                          <method.icon
                            size={32}
                            className={`${method.color} transition-all duration-300 group-hover:brightness-125`}
                          />
                        </motion.div>
                      </div>

                      <h3 className="mb-5 text-2xl font-bold text-white transition-colors duration-300 group-hover:text-primary-pink">
                        {method.title}
                      </h3>

                      <div className="relative z-10 flex flex-wrap justify-center gap-2">
                        {method.tags.map((tag, tagIndex) => (
                          <motion.span
                            key={tag}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{
                              delay: 0.25 + tagIndex * 0.08 + idx * 0.1,
                              duration: 0.3,
                            }}
                            className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-wide text-white transition-colors duration-300 hover:border-primary-pink hover:bg-primary-pink"
                          >
                            {tag}
                          </motion.span>
                        ))}
                      </div>
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
