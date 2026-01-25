import { motion } from "framer-motion";
import { FaCalendar, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const NewsCard = ({ date, author, image, title, description, link, index }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{
        y: -10,
        scale: 1.02,
        transition: { type: "spring", stiffness: 300 },
      }}
      className="bg-deep-indigo rounded-xl overflow-hidden shadow-lg hover:shadow-[0_0_20px_rgba(254,62,87,0.3)] transition-all duration-300 border border-white/5 group h-full flex flex-col"
    >
      <div className="relative overflow-hidden h-56 md:h-72 bg-[#0b0d26]">
        <img
          src={image}
          alt={title}
          loading={index < 2 ? "eager" : "lazy"}
          className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-deep-indigo/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center gap-4 text-sm mb-4">
          <div className="flex items-center gap-2 text-[#3c7dd9]">
            <FaUser />
            <span>{author}</span>
          </div>
          <div className="flex items-center gap-2 text-[#c7c6c6]">
            <FaCalendar />
            <span>{date}</span>
          </div>
        </div>

        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-pink transition-colors duration-300 line-clamp-2">
          <Link to={link}>{title}</Link>
        </h3>

        <p className="text-gray-400 mb-6 flex-grow line-clamp-3">
          {description}
        </p>

        <Link
          to={link}
          className="inline-flex items-center text-white font-semibold hover:text-primary-pink transition-colors group/link"
        >
          Read More
          <span className="ml-2 transform group-hover/link:translate-x-1 transition-transform">
            →
          </span>
        </Link>
      </div>
    </motion.div>
  );
};

export default NewsCard;
