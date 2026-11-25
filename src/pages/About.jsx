import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { FaBriefcase, FaDownload } from "react-icons/fa";
import { Link } from "react-router-dom";
import fediImg from "../assets/images/slider/Fedi_Hmida.png";
import AboutHero from "../components/About/AboutHero";
import { rich } from "../i18n/rich";
import ServicesSection from "../components/About/ServicesSection";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

// Paired by index with the `about.recognition` entries in the locale files.
const RECOMMENDATION_FILES = [
  "/assets/cv/Recommendation_FediHmida.pdf",
  "/assets/cv/Fedi_Hmida_Letter%20of%20Recommendation.pdf",
];

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="relative min-h-screen bg-deep-indigo">
      <Navbar />

      <AboutHero />

      {/* Main Bio Section */}
      <section className="py-10 md:py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-start">
            {/* Left Column - Image */}
            <div className="lg:col-span-6 relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="p-4 bg-deep-indigo shadow-2xl rounded-sm transform rotate-2 hover:rotate-0 transition-transform duration-500 border border-white/5"
              >
                <img
                  src={fediImg}
                  alt="Fedi Hmida"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-auto shadow-lg filter saturate-120 hover:saturate-100 transition-all duration-300"
                />
              </motion.div>
            </div>

            {/* Right Column - Content */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-6 text-white space-y-6"
            >
              <h2 className="text-4xl font-bold mb-4 text-white">
                {t("about.bioTitle")}
              </h2>

              <div className="space-y-4 text-gray-300 leading-relaxed text-lg text-justify">
                <p>{rich(t("about.bio1"))}</p>
                <p>{rich(t("about.bio2"))}</p>
                <p>{rich(t("about.bio3"))}</p>
              </div>

              {/* Core Competencies */}
              <div className="py-6">
                <h3 className="text-primary-pink text-xl font-bold mb-4">
                  {t("about.coreCompetencies")}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <ul className="space-y-3">
                    {t("about.competenciesLeft", { returnObjects: true }).map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-sm text-gray-300 shine-effect p-2 rounded hover:bg-white/5"
                      >
                        <span className="mt-1.5 w-2 h-2 rounded-full bg-primary-pink flex-shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <ul className="space-y-3">
                    {t("about.competenciesRight", { returnObjects: true }).map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-sm text-gray-300 shine-effect p-2 rounded hover:bg-white/5"
                      >
                        <span className="mt-1.5 w-2 h-2 rounded-full bg-primary-pink flex-shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Professional Recognition */}
              <div className="bg-darker-indigo p-6 rounded-xl border border-white/10 shadow-lg mb-8">
                <h3 className="text-primary-pink text-lg font-bold mb-4">
                  {t("about.recognitionTitle")}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {t("about.recognition", { returnObjects: true })
                    .map((rec, i) => ({
                      ...rec,
                      file: RECOMMENDATION_FILES[i],
                    }))
                    .map((rec, index) => (
                    <motion.a
                      key={index}
                      href={rec.file}
                      download
                      className="block bg-white/5 p-4 rounded-lg border border-transparent hover:border-primary-pink/30 hover:bg-white/10 transition-all relative overflow-hidden group"
                      whileHover={{ y: -5 }}
                    >
                      <div className="relative z-10">
                        <p className="text-white font-semibold group-hover:text-primary-pink transition-colors">
                          {rec.title}
                        </p>
                        <p className="text-gray-400 text-sm mb-1">{rec.by}</p>

                        <motion.div
                          initial={{ opacity: 0, height: 0, marginTop: 0 }}
                          whileHover={{
                            opacity: 1,
                            height: "auto",
                            marginTop: 8,
                          }}
                          className="text-xs text-primary-pink flex items-center gap-2 overflow-hidden"
                        >
                          <FaDownload className="animate-bounce" aria-hidden="true" />{" "}
                          {t("about.downloadHint")}
                        </motion.div>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Career Focus */}
              <div className="mb-8">
                <h3 className="text-primary-pink text-lg font-bold mb-2">
                  {t("about.careerFocusTitle")}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {rich(t("about.careerFocus"))}
                </p>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a
                  href={t("common.cvFile")}
                  download
                  className="px-8 py-3 rounded-full border border-primary-pink text-white font-semibold hover:bg-primary-pink hover:shadow-glow transition-all duration-300 flex items-center justify-center gap-2 group shine-effect"
                >
                  <FaDownload className="group-hover:animate-bounce" aria-hidden="true" />{" "}
                  {t("about.downloadCv")}
                </a>
                <Link
                  to="/portfolio"
                  className="px-8 py-3 rounded-full bg-gradient-to-r from-primary-pink to-secondary-pink text-white font-semibold shadow-lg hover:shadow-primary-pink/50 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <FaBriefcase aria-hidden="true" /> {t("about.viewPortfolio")}
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <ServicesSection />
      <Footer />
    </div>
  );
};

export default About;
