import { motion } from "framer-motion";
import {
  FaArrowLeft,
  FaGraduationCap,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPlaneDeparture,
  FaUserTie,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import ExpandableImage from "../../components/ExpandableImage";
import flogo from "../../assets/images/flogo.png";
import campusImg from "../../assets/images/news20/3il-campus.jpg";
import cohortImg from "../../assets/images/news20/3il-cohort.jpg";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import EnglishOnlyNotice from "../../components/EnglishOnlyNotice";
import ParticlesBackground from "../../components/ParticlesBackground";
import ScrollToTop from "../../components/ScrollToTop";

const ACCENT = "#FF7A45";

const timeline = [
  {
    when: "September 2024",
    what: "First class in Tunis",
    detail: "Start of the engineering cycle at ESPRIT.",
  },
  {
    when: "September 2026",
    what: "First class in France",
    detail: "Arrival at 3iL Ingénieurs in Limoges.",
  },
];

const NewsDoubleDegree = () => {
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
                    color: "#FFD3C2",
                    borderColor: "rgba(255, 122, 69, 0.4)",
                    backgroundColor: "rgba(255, 122, 69, 0.18)",
                  }}
                >
                  Milestone
                </span>
                <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-6">
                  A New Chapter
                  <span className="block" style={{ color: ACCENT }}>
                    Double Degree Between ESPRIT and 3iL Ingénieurs
                  </span>
                </h1>
                <p className="text-lg md:text-xl leading-relaxed text-[#e3f2fd]/90">
                  September 2024, first class in Tunis. September 2026, first
                  class in France. I am continuing my engineering cycle as a
                  double degree between ESPRIT and 3iL Ingénieurs in Limoges.
                </p>
                <p className="mt-5 text-xl md:text-2xl font-bold italic text-white">
                  The programme doesn&apos;t restart. It continues, elsewhere.
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="p-8 rounded-[24px] border border-[rgba(79,195,247,0.1)] bg-[rgba(26,35,126,0.3)] backdrop-blur-[12px]"
            >
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <FaPlaneDeparture style={{ color: ACCENT }} /> Two First Days,
                Two Countries
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {timeline.map((item) => (
                  <div
                    key={item.when}
                    className="rounded-2xl border border-white/10 bg-white/5 p-5"
                  >
                    <p
                      className="text-xs font-bold uppercase tracking-widest mb-2"
                      style={{ color: ACCENT }}
                    >
                      {item.when}
                    </p>
                    <p className="text-white font-semibold mb-1">{item.what}</p>
                    <p className="text-sm text-[#e3f2fd]/75 leading-relaxed">
                      {item.detail}
                    </p>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-[#e3f2fd]/80 leading-relaxed">
                Thank you to <span className="text-white font-medium">ESPRIT</span>{" "}
                for making this mobility possible, and to{" "}
                <span className="text-white font-medium">3iL Ingénieurs</span> for
                a welcome that turned an arrival into belonging.
              </p>
              <p className="mt-4 text-lg font-bold text-white">
                The next chapter is written in France.
              </p>
            </motion.div>

            {/* The original post was published bilingually; the French is kept as written. */}
            <motion.div
              variants={fadeInUp}
              lang="fr"
              className="p-8 rounded-[24px] border border-[rgba(79,195,247,0.1)] bg-[rgba(26,35,126,0.3)] backdrop-blur-[12px]"
            >
              <h3 className="text-xl font-bold text-white mb-5 flex items-center gap-2">
                <FaMapMarkerAlt style={{ color: ACCENT }} /> Version française
              </h3>
              <div className="space-y-3 text-[#e3f2fd]/85 leading-relaxed">
                <p>
                  Septembre 2024, premier cours à Tunis. Septembre 2026, premier
                  cours en France.
                </p>
                <p>
                  Une nouvelle étape s&apos;ouvre : je poursuis mon cycle
                  ingénieur en double diplôme entre ESPRIT et 3iL Ingénieurs.
                </p>
                <p className="italic text-white font-semibold">
                  Le cursus ne recommence pas. Il continue, ailleurs.
                </p>
                <p>
                  Merci à ESPRIT d&apos;avoir rendu cette mobilité possible, et à
                  3iL Ingénieurs pour un accueil qui a transformé une arrivée en
                  intégration.
                </p>
                <p className="font-bold text-white">
                  La suite s&apos;écrit en France.
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="p-4 rounded-[24px] border border-[rgba(79,195,247,0.2)] bg-[rgba(26,35,126,0.6)] backdrop-blur-[16px] shadow-lg"
            >
              <ExpandableImage
                src={campusImg}
                alt="3iL Groupe signage at the school entrance in Limoges"
                loading="lazy"
                decoding="async"
                className="w-full h-auto rounded-[20px] object-cover"
              />
            </motion.div>
          </div>

          <div className="lg:col-span-4 space-y-8">
            <motion.div
              variants={fadeInUp}
              className="p-4 rounded-[24px] border border-[rgba(79,195,247,0.2)] bg-[rgba(26,35,126,0.6)] backdrop-blur-[16px] shadow-lg"
            >
              <div className="relative overflow-hidden rounded-[20px] group">
                <ExpandableImage
                  src={cohortImg}
                  alt="Group photo of the 3iL Ingénieurs student cohort in Limoges"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a237e]/80 to-transparent flex items-end p-6 pointer-events-none">
                  <p className="text-white font-medium flex items-center gap-2">
                    <FaGraduationCap style={{ color: ACCENT }} /> 3iL Ingénieurs,
                    Limoges
                  </p>
                </div>
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
                  <span className="text-[#81d4fa]">Programme</span>
                  <span className="text-white font-medium text-right">
                    Engineering cycle, double degree
                  </span>
                </li>
                <li className="flex justify-between items-center gap-4 text-sm">
                  <span className="text-[#81d4fa]">Schools</span>
                  <span className="text-white font-medium text-right">
                    ESPRIT &amp; 3iL Ingénieurs
                  </span>
                </li>
                <li className="flex justify-between items-center text-sm">
                  <span className="text-[#81d4fa]">Location</span>
                  <span className="text-white font-medium">Limoges, France</span>
                </li>
                <li className="flex justify-between items-center text-sm">
                  <span className="text-[#81d4fa]">Date</span>
                  <span className="text-white font-medium">September 2026</span>
                </li>
                <li className="flex justify-between items-center text-sm">
                  <span className="text-[#81d4fa]">Author</span>
                  <span className="text-white font-medium">Fedi Hmida</span>
                </li>
              </ul>
              <div className="mt-8 pt-6 border-t border-[rgba(79,195,247,0.2)] text-center">
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

export default NewsDoubleDegree;
