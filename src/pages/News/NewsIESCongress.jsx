import { motion } from "framer-motion";
import {
    FaArrowLeft,
    FaGlobeAmericas,
    FaLinkedin,
    FaUsers,
    FaUserTie,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import flogo from "../../assets/images/flogo.png";
import iesImg from "../../assets/images/new13/ies.jpg";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import ParticlesBackground from "../../components/ParticlesBackground";
import ScrollToTop from "../../components/ScrollToTop";

const NewsIESCongress = () => {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const floatAnimation = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="relative min-h-screen font-sans text-[#e3f2fd] overflow-x-hidden">
      <ScrollToTop />
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a237e] to-[#283593] -z-20"></div>

      {/* Particles */}
      <div className="absolute inset-0 -z-10 opacity-30">
        <ParticlesBackground />
      </div>

      <Navbar />

      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
        {/* Header / Breadcrumb */}
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
          <img src={flogo} alt="Logo" className="h-8 w-auto opacity-80" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-12 gap-8"
        >
          {/* Left Column (Main Content) */}
          <div className="lg:col-span-8 space-y-8">
            {/* Hero Block */}
            <motion.div
              variants={fadeInUp}
              className="p-10 rounded-[24px] border border-[rgba(79,195,247,0.2)] bg-[rgba(26,35,126,0.6)] backdrop-blur-[16px] shadow-lg relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#00e676] rounded-full filter blur-[100px] opacity-20 -translate-y-1/2 translate-x-1/2"></div>

              <motion.div {...floatAnimation} className="relative z-10">
                <span className="inline-block py-1 px-3 rounded-full bg-[#00e676]/30 border border-[#00e676]/30 text-[#00e676] text-xs font-bold uppercase tracking-widest mb-4">
                  Community
                </span>
                <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-[#00e676]">
                  IEEE IES SYP Congress
                </h1>
                <p className="text-lg md:text-xl leading-relaxed text-[#e3f2fd]/90">
                  🌍 Receiving this certificate is not just about participation,
                  it’s a reminder of the incredible experiences and connections
                  that happened along the way.
                </p>
              </motion.div>
            </motion.div>

            {/* Content Body */}
            <motion.div
              variants={fadeInUp}
              className="p-8 rounded-[24px] border border-[rgba(79,195,247,0.1)] bg-[rgba(26,35,126,0.3)] backdrop-blur-[12px]"
            >
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <FaGlobeAmericas className="text-[#00e676]" /> A Special
                Experience
              </h3>
              <p className="text-[#e3f2fd]/80 leading-relaxed mb-6">
                At the <strong>IEEE IES SYP CONGRESS</strong>, I had the
                privilege to be part of something truly special:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[#e3f2fd]/80 mb-6">
                <li>
                  A diverse community with participants from multiple
                  nationalities
                </li>
                <li>A rich exchange of cultures, perspectives, and ideas</li>
              </ul>
              <p className="text-[#e3f2fd]/80 leading-relaxed mb-6">
                People from different parts of the world came together with a
                shared purpose:{" "}
                <strong>to learn, connect, and grow collectively.</strong> The
                energy, openness, and passion I witnessed made this experience
                both <em>inspiring and unforgettable</em>.
              </p>
              <p className="text-[#e3f2fd]/80 leading-relaxed mb-6">
                A heartfelt thank you to <strong>Ala Chalghaf</strong> and{" "}
                <strong>Aziz Ben Kbaier</strong>, the co-chairs of the congress,
                and to the entire <strong>organizing committee</strong>, for
                creating such a well-structured and impactful event.
              </p>
              <p className="text-[#e3f2fd]/80 leading-relaxed mb-6">
                I’m also grateful for all the <strong>amazing people</strong> I
                had the chance to meet along the way. These connections are what
                make experiences like this truly valuable.
              </p>

              <div className="my-8 rounded-xl overflow-hidden border border-white/10 shadow-lg">
                <img
                  src={iesImg}
                  alt="IEEE IES SYP Congress"
                  className="w-full h-auto object-cover"
                />
              </div>

              <p className="text-[#e3f2fd] font-semibold text-lg leading-relaxed">
                Moments like these remind me why global networking and
                collaboration matter. Looking forward to what comes next. 🚀
              </p>
            </motion.div>
          </div>

          {/* Right Column (Sidebar) */}
          <div className="lg:col-span-4 space-y-8">
            {/* Image Card */}
            <motion.div
              variants={fadeInUp}
              className="p-4 rounded-[24px] border border-[rgba(79,195,247,0.2)] bg-[rgba(26,35,126,0.6)] backdrop-blur-[16px] shadow-lg"
            >
              <div className="relative overflow-hidden rounded-[20px] group bg-white flex items-center justify-center">
                <img
                  src={iesImg}
                  alt="IES Congress Participation"
                  className="w-full h-auto object-contain transform transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a237e]/90 to-transparent flex items-end p-6 pointer-events-none">
                  <p className="text-white font-medium flex items-center gap-2">
                    <FaUsers className="text-yellow-400" /> Networking
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Info Card */}
            <motion.div
              variants={fadeInUp}
              className="p-6 rounded-[24px] border border-[rgba(79,195,247,0.2)] bg-[rgba(26,35,126,0.6)] backdrop-blur-[16px]"
            >
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <FaUserTie className="text-[#81d4fa]" /> Quick Info
              </h3>
              <ul className="space-y-4">
                <li className="flex justify-between items-center text-sm">
                  <span className="text-[#81d4fa]">Event</span>
                  <span className="text-white font-medium text-right w-1/2">
                    IEEE IES SYP Congress
                  </span>
                </li>
                <li className="flex justify-between items-center text-sm">
                  <span className="text-[#81d4fa]">Date</span>
                  <span className="text-white font-medium">10-01-2026</span>
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

export default NewsIESCongress;
