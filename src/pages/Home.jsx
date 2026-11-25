import { AnimatePresence, motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { useTranslation } from "react-i18next";
import { lazy, Suspense, useState } from "react";
import { Link } from "react-router-dom";
import "../assets/css/social-icons.css";
import Footer from "../components/Footer";

import Navbar from "../components/Navbar";
import NewsCard from "../components/News/NewsCard";
import ProjectCard from "../components/Portfolio/ProjectCard"; // Make sure to export this if not already
import SocialIconLink from "../components/SocialIconLink";
import { getLatestNewsPreview } from "../data/news";
import Availability from "../components/home/Availability";
import homeEn from "../content/home/home.en";
import homeFr from "../content/home/home.fr";
import { getProjectCards } from "../data/projects";
import { socialLinks } from "../data/socialLinks";
import { pickContent } from "../i18n/localeContent";

// Asset Imports
import heroImg from "../assets/images/slider/Fedi_Hmida.png";

const ParticlesBackground = lazy(
  () => import("../components/ParticlesBackground"),
);

const HERO_NAME = "Fedi Hmida";
const heroNameLetters = Array.from(HERO_NAME);

const Home = () => {
  const { t } = useTranslation();
  const content = pickContent({ en: homeEn, fr: homeFr });

  const portfolioPreview = getProjectCards(t, "home");
  const newsPreview = getLatestNewsPreview(t);
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
                  {t("home.role")}
                </span>
                <span className="text-sm font-medium text-sky-300/90 sm:text-base md:text-lg">
                  {t("home.specialization")}
                </span>
                <span className="mt-1 inline-flex items-center gap-1.5 text-sm font-medium text-gray-300/90 sm:text-base">
                  <MapPin
                    className="h-4 w-4 flex-shrink-0 text-primary-pink"
                    aria-hidden="true"
                  />
                  {t("home.location")}
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
                transition={{ delay: 0.6, duration: 0.5 }}
                className="mt-7 flex w-full justify-center lg:justify-start"
              >
                <Availability hero={content.hero} />
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
                  {t("home.viewProjects")}
                </Link>
                <a
                  href={t("common.cvFile")}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 py-3 text-sm font-bold text-white transition-all hover:-translate-y-1 hover:border-primary-pink hover:text-primary-pink focus:outline-none focus:ring-2 focus:ring-primary-pink/70 focus:ring-offset-2 focus:ring-offset-deep-indigo"
                >
                  {t("home.viewCv")}
                </a>
                <Link
                  to="/about"
                  className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/15 px-7 py-3 text-sm font-bold text-gray-200 transition-all hover:-translate-y-1 hover:border-white/40 hover:text-white focus:outline-none focus:ring-2 focus:ring-primary-pink/70 focus:ring-offset-2 focus:ring-offset-deep-indigo"
                >
                  {t("home.aboutMe")}
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
                  {t("home.myWork")}
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
              {t("home.viewAllProjects")} <span className="ml-2">&rarr;</span>
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
              {t("home.viewAllProjects")}
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
                {t("home.latestNews")}
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
              {t("home.seeMoreNews")}
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
