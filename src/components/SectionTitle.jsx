import { motion } from "framer-motion";

// `as` sets the heading level: "h1" when the title is the page's main heading
// (Portfolio), "h2" (default) for sections inside a page.
const SectionTitle = ({ title, as: Heading = "h2" }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mb-12 text-center"
    >
      <Heading className="text-3xl md:text-4xl font-bold text-white mb-2 relative inline-block">
        {title}
        <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary-pink to-secondary-pink rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
      </Heading>
      <div className="w-24 h-1 bg-gradient-to-r from-primary-pink to-secondary-pink mx-auto rounded-full mt-2"></div>
    </motion.div>
  );
};

export default SectionTitle;
