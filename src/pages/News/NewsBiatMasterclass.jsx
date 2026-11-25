import { motion } from "framer-motion";
import {
  FaArrowLeft,
  FaCheckCircle,
  FaHandshake,
  FaLinkedin,
  FaPiggyBank,
  FaUserTie,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import ExpandableImage from "../../components/ExpandableImage";
import flogo from "../../assets/images/flogo.png";
import careerCenterImg from "../../assets/images/news18/biat-1.jpg";
import masterclassImg from "../../assets/images/news18/biat-2.jpg";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import ScrollToTop from "../../components/ScrollToTop";
import en from "../../content/news/biatMasterclass.en";
import fr from "../../content/news/biatMasterclass.fr";
import { pickContent } from "../../i18n/localeContent";

// Long-form copy lives in src/content/news/biatMasterclass.{en,fr}.js. The locale comes from the
// URL and switching language reloads the page, so picking once at module level is safe.
const c = pickContent({ en, fr });

const ACCENT = "#4D9BFF";

const takeaways = [
  c.s001,
  c.s002,
  c.s003,
  c.s004,
];

const NewsBiatMasterclass = () => {
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
      </div>

      <Navbar />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-28 md:px-12 lg:px-20">
        
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
              <FaArrowLeft />{" "}{c.s005}</Link>
          </div>
          <img
            src={flogo}
            alt={c.s006}
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
                    color: "#C8E1FF",
                    borderColor: "rgba(77, 155, 255, 0.4)",
                    backgroundColor: "rgba(77, 155, 255, 0.18)",
                  }}
                >{c.s007}</span>
                <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-6">{c.s008}<span className="block" style={{ color: ACCENT }}>{c.s009}</span>
                </h1>
                <p className="text-lg md:text-xl leading-relaxed text-[#e3f2fd]/90">{c.s010}</p>
              </div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="p-8 rounded-[24px] border border-[rgba(79,195,247,0.1)] bg-[rgba(26,35,126,0.3)] backdrop-blur-[12px]"
            >
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <FaPiggyBank style={{ color: ACCENT }} />{" "}{c.s011}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {takeaways.map((item) => (
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
              <p className="mt-6 text-[#e3f2fd]/80 leading-relaxed">{c.s012}</p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="p-8 rounded-[24px] border border-[rgba(79,195,247,0.1)] bg-[rgba(26,35,126,0.3)] backdrop-blur-[12px]"
            >
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <FaHandshake style={{ color: ACCENT }} />{" "}{c.s013}</h3>
              <p className="text-[#e3f2fd]/80 leading-relaxed">{c.s014}{" "}
                <span className="text-white font-medium">{c.s015}</span>{" "}{c.s016}{" "}
                <span className="text-white font-medium">{c.s017}</span>{" "}{c.s018}</p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="p-4 rounded-[24px] border border-[rgba(79,195,247,0.2)] bg-[rgba(26,35,126,0.6)] backdrop-blur-[16px] shadow-lg"
            >
              <ExpandableImage
                src={careerCenterImg}
                alt={c.s019}
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
                  src={masterclassImg}
                  alt={c.s020}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a237e]/80 to-transparent flex items-end p-6 pointer-events-none">
                  <p className="text-white font-medium flex items-center gap-2">
                    <FaPiggyBank style={{ color: ACCENT }} />{" "}{c.s021}</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="p-6 rounded-[24px] border border-[rgba(79,195,247,0.2)] bg-[rgba(26,35,126,0.6)] backdrop-blur-[16px]"
            >
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <FaUserTie className="text-[#81d4fa]" />{" "}{c.s022}</h3>
              <ul className="space-y-4">
                <li className="flex justify-between items-center gap-4 text-sm">
                  <span className="text-[#81d4fa]">{c.s023}</span>
                  <span className="text-white font-medium text-right">{c.s024}</span>
                </li>
                <li className="flex justify-between items-center text-sm">
                  <span className="text-[#81d4fa]">{c.s025}</span>
                  <span className="text-white font-medium">{c.s026}</span>
                </li>
                <li className="flex justify-between items-center text-sm">
                  <span className="text-[#81d4fa]">{c.s027}</span>
                  <span className="text-white font-medium">{c.s028}</span>
                </li>
                <li className="flex justify-between items-center text-sm">
                  <span className="text-[#81d4fa]">{c.s029}</span>
                  <span className="text-white font-medium">{c.s030}</span>
                </li>
              </ul>
              <div className="mt-8 pt-6 border-t border-[rgba(79,195,247,0.2)] text-center">
                <p className="text-[#81d4fa] text-xs mb-2 uppercase tracking-widest">{c.s031}</p>
                <div className="flex justify-center gap-4">
                  <a
                    href="https://www.linkedin.com/in/fedi-hmida/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-white hover:text-[#0077b5] transition-colors text-2xl"
                    aria-label={c.s032}
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

export default NewsBiatMasterclass;
