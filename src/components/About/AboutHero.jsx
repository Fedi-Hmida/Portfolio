import { motion } from "framer-motion";
import shape3 from "../../assets/images/shape/shape-3.png";
import shape4 from "../../assets/images/shape/shape-4.png";
import shape5 from "../../assets/images/shape/shape-5.png";
import shape6 from "../../assets/images/shape/shape-6.png";
import shape7 from "../../assets/images/shape/shape-7.png";
import shape8 from "../../assets/images/shape/shape-8.png";

const AboutHero = () => {
  const shapes = [
    {
      src: shape7,
      className: "top-10 left-10 w-16",
    },
    {
      src: shape8,
      className: "top-20 right-20 w-12",
    },
    {
      src: shape3,
      className: "bottom-10 left-20 w-20",
    },
    {
      src: shape5,
      className: "bottom-20 right-10 w-14",
    },
    {
      src: shape6,
      className: "top-1/2 left-10 w-10",
    },
    {
      src: shape4,
      className: "top-1/3 right-1/4 w-8",
    },
  ];

  return (
    <section className="relative py-24 bg-deep-indigo overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold text-white relative inline-block z-10"
        >
          About Me
        </motion.h1>
      </div>

      {/* Floating Shapes */}
      {shapes.map((shape, index) => (
        <motion.img
          key={index}
          src={shape.src}
          alt=""
          className={`absolute ${shape.className} opacity-60 hidden md:block`}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 3 + index, // vary duration for each
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </section>
  );
};

export default AboutHero;
