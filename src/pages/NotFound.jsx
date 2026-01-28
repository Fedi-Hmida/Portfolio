import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ParticlesBackground from "../components/ParticlesBackground";

const NotFound = () => {
  return (
    <div className="relative min-h-screen bg-[#070640] flex items-center justify-center overflow-hidden">
      <ParticlesBackground />

      <div className="relative z-10 text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-9xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-pink to-secondary-pink"
        >
          404
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-4xl text-white font-bold mt-4 mb-6"
        >
          Page Not Found
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-gray-300 text-lg mb-8 max-w-md mx-auto"
        >
          Oops! The page you are looking for might have been removed or is
          temporarily unavailable.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Link
            to="/"
            className="px-8 py-3 bg-primary-pink text-white rounded-full font-bold hover:bg-secondary-pink transition-colors shadow-lg hover:shadow-primary-pink/50"
          >
            Go Back Home
          </Link>
        </motion.div>
      </div>

      {/* Decorative Circles */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-pink/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
    </div>
  );
};

export default NotFound;
