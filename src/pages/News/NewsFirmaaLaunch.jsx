import { motion } from "framer-motion";
import {
  FaArrowLeft,
  FaCheckCircle,
  FaLeaf,
  FaLinkedin,
  FaMobileAlt,
  FaRobot,
  FaUserTie,
  FaUsers,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import ExpandableImage from "../../components/ExpandableImage";
import flogo from "../../assets/images/flogo.png";
import posterImg from "../../assets/images/news19/firmaa-poster.jpg";
import stackImg from "../../assets/images/news19/firmaa-stack.jpg";
import analyticsImg from "../../assets/images/news19/firmaa-analytics.jpg";
import landingImg from "../../assets/images/news19/firmaa-landing.jpg";
import mobileImg from "../../assets/images/news19/firmaa-mobile.jpg";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import EnglishOnlyNotice from "../../components/EnglishOnlyNotice";
import ParticlesBackground from "../../components/ParticlesBackground";
import ScrollToTop from "../../components/ScrollToTop";

const ACCENT = "#7AC943";

const capabilities = [
  "Web and mobile access for farm monitoring",
  "Zone management and 3D farm simulation",
  "AI irrigation agent using moisture, weather, crop needs and sensor data",
  "Crop disease detection from plant images",
  "Chicken disease detection from droppings images",
  "Livestock health prediction based on symptoms",
  "Insect classification using sound analysis",
  "Offline AI models running directly on mobile",
  "IoT integration with sensors and real-time camera detection",
];

const contributions = [
  {
    title: "AI irrigation agent",
    detail:
      "Led the development direction of the irrigation agent, including a LangGraph decision workflow over soil moisture, weather forecasts, crop needs, sensor data, safety checks and human approval logic.",
  },
  {
    title: "Agent architecture",
    detail:
      "Worked on LLM-based reasoning, tool-assisted decision support, validation layers, fallback rules and human-in-the-loop approval, so recommendations stay explainable and safe.",
  },
  {
    title: "Web platform experience",
    detail:
      "Analytics dashboard, AI command center, approvals queue, zone management, farm visibility, profile access and overall UI/UX alignment.",
  },
  {
    title: "AI feature integration",
    detail:
      "Supported the integration strategy for crop disease detection, livestock health prediction and the other AI-based features.",
  },
  {
    title: "Product identity",
    detail:
      "Prepared the branding direction so FIRMAA reads as a real smart agriculture product rather than a school project.",
  },
];

const gallery = [
  {
    src: stackImg,
    alt: "FIRMAA tech stack: Next.js, React, Flutter, FastAPI, TensorFlow, PyTorch, LangGraph, MongoDB Atlas, ESP32",
    caption: "The full stack across web, mobile, back-end, AI, database and IoT",
  },
  {
    src: analyticsImg,
    alt: "FIRMAA analytics dashboard showing managed zones, average moisture and zone health overview",
    caption: "Analytics dashboard with zone health and the AI attention queue",
  },
  {
    src: landingImg,
    alt: "FIRMAA landing page in English, Arabic and French",
    caption: "Landing page, available in English, Arabic and French",
  },
  {
    src: mobileImg,
    alt: "FIRMAA mobile screens for chicken disease, plant disease and insect detection",
    caption: "Mobile detection flows: chicken disease, plant disease, insect audio",
  },
];

const NewsFirmaaLaunch = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="relative min-h-screen font-sans text-[#e3f2fd] overflow-x-hidden">
      <ScrollToTop />
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a237e] to-[#283593] -z-20"></div>
      <div className="absolute inset-0 -z-10 opacity-30">
        <ParticlesBackground />
      </div>

      <Navbar />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-28 md:px-12 lg:px-20">
        <EnglishOnlyNotice />
      </div>

      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 p-6 rounded-[24px] border border-[rgba(79,195,247,0.2)] bg-[rgba(26,35,126,0.6)] backdrop-blur-[16px] shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] flex justify-between items-center"
        >
          <div className="flex items-center gap-4">
            <Link
              to="/news"
              className="text-[#81d4fa] hover:text-white transition-colors flex items-center gap-2"
            >
              <FaArrowLeft /> Back to News
            </Link>
          </div>
          <img
            src={flogo}
            alt="Fedi Hmida logo"
            loading="lazy"
            decoding="async"
            className="h-8 w-auto opacity-80"
          />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-12 gap-8"
        >
          <div className="lg:col-span-8 space-y-8">
            <motion.div
              variants={fadeInUp}
              className="p-10 rounded-[24px] border border-[rgba(79,195,247,0.2)] bg-[rgba(26,35,126,0.6)] backdrop-blur-[16px] shadow-lg relative overflow-hidden"
            >
              <div
                className="absolute top-0 right-0 w-64 h-64 rounded-full filter blur-[100px] opacity-20 -translate-y-1/2 translate-x-1/2"
                style={{ backgroundColor: ACCENT }}
              ></div>

              <div className="relative z-10">
                <span
                  className="inline-block py-1 px-3 rounded-full text-xs font-bold uppercase tracking-widest mb-4 border"
                  style={{
                    color: "#D6F5B8",
                    borderColor: "rgba(122, 201, 67, 0.4)",
                    backgroundColor: "rgba(122, 201, 67, 0.18)",
                  }}
                >
                  Integrated Project - ESPRIT
                </span>
                <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-6">
                  FIRMAA
                  <span className="block" style={{ color: ACCENT }}>
                    AI-Powered Smart Agriculture Platform
                  </span>
                </h1>
                <p className="text-lg md:text-xl leading-relaxed text-[#e3f2fd]/90">
                  Our team of seven took on a challenge at the intersection of
                  AI, IoT, web, mobile and agriculture: helping farmers make
                  better decisions with real-time data and intelligent
                  prediction models.
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="p-8 rounded-[24px] border border-[rgba(79,195,247,0.1)] bg-[rgba(26,35,126,0.3)] backdrop-blur-[12px]"
            >
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <FaLeaf style={{ color: ACCENT }} /> The Challenge
              </h3>
              <p className="text-[#e3f2fd]/80 leading-relaxed">
                Farmers often face uncertainty when managing irrigation, crop
                diseases, livestock health and harmful insects. Many decisions
                are still made manually, with limited real-time information.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="p-8 rounded-[24px] border border-[rgba(79,195,247,0.1)] bg-[rgba(26,35,126,0.3)] backdrop-blur-[12px]"
            >
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <FaMobileAlt style={{ color: ACCENT }} /> One Platform, Nine
                Capabilities
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {capabilities.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-white/5 p-4 flex gap-3"
                  >
                    <FaCheckCircle
                      className="mt-1 flex-shrink-0"
                      style={{ color: ACCENT }}
                    />
                    <span className="text-sm text-[#e3f2fd]/85 leading-relaxed">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="p-8 rounded-[24px] border border-[rgba(79,195,247,0.1)] bg-[rgba(26,35,126,0.3)] backdrop-blur-[12px]"
            >
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <FaRobot style={{ color: ACCENT }} /> My Contribution
              </h3>
              <p className="text-[#e3f2fd]/80 leading-relaxed mb-6">
                As <span className="text-white font-medium">Project Lead</span>,
                I focused on coordinating the technical vision of FIRMAA and
                making sure the different parts of the platform worked together
                as one coherent solution.
              </p>
              <div className="space-y-4">
                {contributions.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-white/10 bg-white/5 p-5"
                  >
                    <p className="text-white font-semibold mb-1">{item.title}</p>
                    <p className="text-sm text-[#e3f2fd]/80 leading-relaxed">
                      {item.detail}
                    </p>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-[#e3f2fd]/80 leading-relaxed">
                The role combined product thinking, AI engineering, team
                alignment and presentation strategy in one complete project.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="p-6 rounded-[24px] border border-[rgba(79,195,247,0.1)] bg-[rgba(26,35,126,0.3)] backdrop-blur-[12px] space-y-6"
            >
              <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                <FaLeaf style={{ color: ACCENT }} /> Inside the Platform
              </h3>
              {gallery.map((shot) => (
                <figure key={shot.alt} className="space-y-3">
                  <ExpandableImage
                    src={shot.src}
                    alt={shot.alt}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-auto rounded-[20px] object-cover"
                  />
                  <figcaption className="text-sm text-[#e3f2fd]/70">
                    {shot.caption}
                  </figcaption>
                </figure>
              ))}
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="p-8 rounded-[24px] border border-[rgba(79,195,247,0.1)] bg-[rgba(26,35,126,0.3)] backdrop-blur-[12px]"
            >
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <FaUsers style={{ color: ACCENT }} /> The Team
              </h3>
              <p className="text-[#e3f2fd]/80 leading-relaxed">
                Proud of what we built together with Natej Ghorbane, Ghalia
                Abdelkebir, Khalil Ben Youssef and Asma Raddaoui - and grateful
                to our mentors and supervisors Wiem Trabelsi and Bilel Farah for
                their guidance.
              </p>
            </motion.div>
          </div>

          <div className="lg:col-span-4 space-y-8">
            <motion.div
              variants={fadeInUp}
              className="p-4 rounded-[24px] border border-[rgba(79,195,247,0.2)] bg-[rgba(26,35,126,0.6)] backdrop-blur-[16px] shadow-lg"
            >
              <div className="relative overflow-hidden rounded-[20px] group">
                <ExpandableImage
                  src={posterImg}
                  alt="FIRMAA poster: Your Farm, Safely in Your Hands - smart irrigation, crop health, livestock care and farm visibility"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-auto object-contain transform transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="p-6 rounded-[24px] border border-[rgba(79,195,247,0.2)] bg-[rgba(26,35,126,0.6)] backdrop-blur-[16px]"
            >
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <FaUserTie className="text-[#81d4fa]" /> Quick Info
              </h3>
              <ul className="space-y-4">
                <li className="flex justify-between items-center gap-4 text-sm">
                  <span className="text-[#81d4fa]">Project</span>
                  <span className="text-white font-medium text-right">
                    FIRMAA
                  </span>
                </li>
                <li className="flex justify-between items-center gap-4 text-sm">
                  <span className="text-[#81d4fa]">Context</span>
                  <span className="text-white font-medium text-right">
                    Integrated Project, ESPRIT
                  </span>
                </li>
                <li className="flex justify-between items-center text-sm">
                  <span className="text-[#81d4fa]">Role</span>
                  <span className="text-white font-medium">Project Lead</span>
                </li>
                <li className="flex justify-between items-center text-sm">
                  <span className="text-[#81d4fa]">Team size</span>
                  <span className="text-white font-medium">7</span>
                </li>
                <li className="flex justify-between items-center text-sm">
                  <span className="text-[#81d4fa]">Date</span>
                  <span className="text-white font-medium">May 2026</span>
                </li>
                <li className="flex justify-between items-center text-sm">
                  <span className="text-[#81d4fa]">Author</span>
                  <span className="text-white font-medium">Fedi Hmida</span>
                </li>
              </ul>
              <div className="mt-8 pt-6 border-t border-[rgba(79,195,247,0.2)]">
                <Link
                  to="/portfolio/firmaa"
                  className="block w-full text-center rounded-full px-5 py-3 text-sm font-bold transition"
                  style={{ backgroundColor: ACCENT, color: "#081824" }}
                >
                  View the full case study
                </Link>
              </div>
              <div className="mt-6 pt-6 border-t border-[rgba(79,195,247,0.2)] text-center">
                <p className="text-[#81d4fa] text-xs mb-2 uppercase tracking-widest">
                  Connect
                </p>
                <div className="flex justify-center gap-4">
                  <a
                    href="https://www.linkedin.com/in/fedi-hmida/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-white hover:text-[#0077b5] transition-colors text-2xl"
                    aria-label="Open Fedi Hmida LinkedIn profile"
                  >
                    <FaLinkedin />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default NewsFirmaaLaunch;
