import { motion } from "framer-motion";

const ContactHero = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 text-center z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Contact{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-pink to-secondary-pink">
              Me
            </span>
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-pink to-secondary-pink mx-auto rounded-full"></div>
          <p className="mt-4 text-xl text-gray-300">
            I'd love to hear from you.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactHero;
