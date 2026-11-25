import { m, useReducedMotion } from "framer-motion";

const AnimatedPage = ({ children }) => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <m.div
      initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: -20 }}
      transition={{ duration: prefersReducedMotion ? 0 : 0.3 }}
      className="w-full"
    >
      {children}
    </m.div>
  );
};

export default AnimatedPage;
