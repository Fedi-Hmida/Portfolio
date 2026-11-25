import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import shape3 from "../../assets/images/shape/shape-3.png";
import shape4 from "../../assets/images/shape/shape-4.png";
import shape5 from "../../assets/images/shape/shape-5.png";
import shape6 from "../../assets/images/shape/shape-6.png";
import shape7 from "../../assets/images/shape/shape-7.png";
import shape8 from "../../assets/images/shape/shape-8.png";

const AboutHero = () => {
  const { t } = useTranslation();
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
          {t("about.heroTitle")}
        </motion.h1>
      </div>

      {/* Decorative shapes: static (they used to float and rotate forever) */}
      {shapes.map((shape, index) => (
        <img
          key={index}
          src={shape.src}
          alt=""
          aria-hidden="true"
          loading="lazy"
          decoding="async"
          className={`absolute ${shape.className} opacity-60 hidden md:block`}
        />
      ))}
    </section>
  );
};

export default AboutHero;
