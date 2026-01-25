import { motion } from "framer-motion";
import { FaArrowLeft, FaAward, FaLinkedin, FaUserTie } from "react-icons/fa";
import { SiAmazonaws } from "react-icons/si";
import { Link } from "react-router-dom";
import awsImg from "../../assets/images/AI_AWS.jpg";
import flogo from "../../assets/images/flogo.png";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import ParticlesBackground from "../../components/ParticlesBackground";
import ScrollToTop from "../../components/ScrollToTop";

const NewsAWS = () => {
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
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#ff9900] rounded-full filter blur-[100px] opacity-20 -translate-y-1/2 translate-x-1/2"></div>

              <motion.div {...floatAnimation} className="relative z-10">
                <span className="inline-block py-1 px-3 rounded-full bg-[#ff9900]/30 border border-[#ff9900]/30 text-[#ff9900] text-xs font-bold uppercase tracking-widest mb-4">
                  Certification
                </span>
                <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-[#ff9900]">
                  AI Model Deployment on AWS
                </h1>
                <p className="text-lg md:text-xl leading-relaxed text-[#e3f2fd]/90">
                  I’m pleased to share that I’ve earned the AI Model Deployment
                  on AWS certification.
                </p>
              </motion.div>
            </motion.div>

            {/* Content Body */}
            <motion.div
              variants={fadeInUp}
              className="p-8 rounded-[24px] border border-[rgba(79,195,247,0.1)] bg-[rgba(26,35,126,0.3)] backdrop-blur-[12px]"
            >
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <SiAmazonaws className="text-[#ff9900]" /> Significance
              </h3>
              <p className="text-[#e3f2fd]/80 leading-relaxed mb-6">
                This milestone enhances my ability to deploy, scale, and manage
                machine learning models in production using AWS cloud
                technologies. It validates my expertise in bridging the gap
                between model development and scalable production environments.
              </p>
              <p className="text-[#e3f2fd]/80 leading-relaxed">
                Excited to take on more advanced cloud-AI challenges ahead.
              </p>

              <div className="mt-8">
                <a
                  href="/assets/docs/AI_AWS.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#ff9900] to-[#ffcc80] text-[#1a237e] font-bold shadow-lg hover:shadow-[#ff9900]/50 hover:-translate-y-1 transition-all duration-300"
                >
                  <FaAward /> View Certificate
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right Column (Sidebar) */}
          <div className="lg:col-span-4 space-y-8">
            {/* Image Card */}
            <motion.div
              variants={fadeInUp}
              className="p-4 rounded-[24px] border border-[rgba(79,195,247,0.2)] bg-[rgba(26,35,126,0.6)] backdrop-blur-[16px] shadow-lg"
            >
              <div className="relative overflow-hidden rounded-[20px] aspect-[4/3] group bg-white flex items-center justify-center">
                <img
                  src={awsImg}
                  alt="AWS Certification"
                  className="w-full h-auto object-contain p-4 transform transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a237e]/90 to-transparent flex items-end p-6 pointer-events-none">
                  <p className="text-white font-medium">AWS Certified</p>
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
                  <span className="text-[#81d4fa]">Date</span>
                  <span className="text-white font-medium">30-11-2025</span>
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

export default NewsAWS;
