import { motion } from "framer-motion";
import { FaBriefcase, FaDownload } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ReactTyped } from "react-typed";
import fediImg from "../assets/images/slider/Fedi2.0.png";
import AboutHero from "../components/About/AboutHero";
import ServicesSection from "../components/About/ServicesSection";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ParticlesBackground from "../components/ParticlesBackground";

const About = () => {
  return (
    <div className="relative min-h-screen bg-deep-indigo">
      <ParticlesBackground />
      <Navbar />

      <AboutHero />

      {/* Main Bio Section */}
      <section className="py-10 md:py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-start">
            {/* Left Column - Image */}
            <div className="lg:col-span-5 relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="p-4 bg-deep-indigo shadow-2xl rounded-sm transform rotate-2 hover:rotate-0 transition-transform duration-500 border border-white/5"
              >
                <img
                  src={fediImg}
                  alt="Fedi Hmida"
                  className="w-full h-auto shadow-lg filter saturate-120 hover:saturate-100 transition-all duration-300"
                />
              </motion.div>
            </div>

            {/* Right Column - Content */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7 text-white space-y-6"
            >
              <h2 className="text-4xl font-bold mb-4">
                <ReactTyped
                  strings={["Who Am I?", "My Background", "About Me"]}
                  typeSpeed={80}
                  backSpeed={50}
                  loop
                  className="text-white"
                />
              </h2>

              <div className="space-y-4 text-gray-300 leading-relaxed text-lg text-justify">
                <p>
                  I'm a <strong>Data Science & AI Engineering student</strong>{" "}
                  at ESPRIT, holding a Bachelor's degree in Computer Engineering
                  (2024) and hands-on experience building production-ready
                  applications.
                </p>
                <p>
                  My technical expertise spans{" "}
                  <strong>cross-platform mobile development (Flutter)</strong>,{" "}
                  <strong>Computer vision technology (advanced YOLO)</strong>,{" "}
                  <strong>
                    AI/ML frameworks (TensorFlow, PyTorch, OpenCV)
                  </strong>
                  , and <strong>full-stack solutions</strong> (
                  <strong>NextJS</strong>, <strong>NestJS</strong>,{" "}
                  <strong>Symfony</strong>). I focus on creating solutions that
                  bridge business needs and{" "}
                  <strong>intelligent automation</strong>.
                </p>
                <p>
                  What drives me is the intersection of intelligent systems and
                  human-centered design. I believe{" "}
                  <strong>discipline shapes success</strong>, and in
                  engineering, that means combining technical precision with
                  purposeful innovation.
                </p>
              </div>

              {/* Core Competencies */}
              <div className="py-6">
                <h3 className="text-primary-pink text-xl font-bold mb-4">
                  Core Competencies
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <ul className="space-y-3">
                    {[
                      "Cross-Platform Mobile Development (Flutter)",
                      "AI & Computer Vision Integration (YOLO)",
                      "Data Science & Machine Learning",
                    ].map((item, i) => (
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
                    {[
                      "Full-Stack Web Development (Symfony/Next.js)",
                      "IoT & Energy Management Systems",
                      "Agile Development & Team Collaboration",
                    ].map((item, i) => (
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
                  Professional Recognition
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    {
                      title: "Data Science Excellence",
                      by: "Dr. Nivine ATTOUE, ADDINN Group",
                      file: "/assets/cv/Recommendation_FediHmida.pdf",
                    },
                    {
                      title: "Mobile Development Excellence",
                      by: "Houssem Eddine FADHLI, Senior Flutter Engineer",
                      file: "/assets/cv/Fedi_Hmida_Letter%20of%20Recommendation.pdf",
                    },
                  ].map((rec, index) => (
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
                          <FaDownload className="animate-bounce" /> Click to
                          download certification
                        </motion.div>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Career Focus */}
              <div className="mb-8">
                <h3 className="text-primary-pink text-lg font-bold mb-2">
                  Career Focus
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Seeking opportunities in{" "}
                  <strong>full-stack development</strong>,{" "}
                  <strong>mobile application architecture</strong>, or{" "}
                  <strong>AI-powered solution development</strong> where I can
                  leverage my proven ability to delivery production-ready
                  applications.
                </p>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a
                  href="/assets/cv/CV.pdf"
                  download
                  className="px-8 py-3 rounded-full border border-primary-pink text-white font-semibold hover:bg-primary-pink hover:shadow-glow transition-all duration-300 flex items-center justify-center gap-2 group shine-effect"
                >
                  <FaDownload className="group-hover:animate-bounce" /> Download
                  CV
                </a>
                <Link
                  to="/portfolio"
                  className="px-8 py-3 rounded-full bg-gradient-to-r from-primary-pink to-secondary-pink text-white font-semibold shadow-lg hover:shadow-primary-pink/50 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <FaBriefcase /> View Portfolio
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
