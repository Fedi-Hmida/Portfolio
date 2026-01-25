import { motion } from "framer-motion";

const SectionTitle = ({ title }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mb-12 text-center"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 relative inline-block">
        {title}
        <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary-pink to-secondary-pink rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
      </h2>
      <div className="w-24 h-1 bg-gradient-to-r from-primary-pink to-secondary-pink mx-auto rounded-full mt-2"></div>
    </motion.div>
  );
};

export default SectionTitle;
