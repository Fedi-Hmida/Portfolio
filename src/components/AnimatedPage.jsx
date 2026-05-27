import { motion, useReducedMotion } from "framer-motion";

const AnimatedPage = ({ children }) => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: -20 }}
      transition={{ duration: prefersReducedMotion ? 0 : 0.3 }}
      className="w-full"
    >
      {children}
    </motion.div>
  );
};

export default AnimatedPage;
