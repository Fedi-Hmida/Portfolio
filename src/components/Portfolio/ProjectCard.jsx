import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const ProjectCard = ({ project }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      layout
      variants={cardVariants}
      whileHover={{
        y: -10,
        transition: { type: "spring", stiffness: 300 },
      }}
      className="group relative bg-[#0c0b44] border border-[#464646] rounded-xl overflow-hidden shadow-lg hover:shadow-cyan-500/20 transition-all duration-300"
    >
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden p-6 flex items-center justify-center">
        <motion.div
          className="w-full h-full flex items-center justify-center"
          animate={{
            y: [0, -5, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-contain transform transition-transform duration-500"
            style={{
              transform: project.scale ? `scale(${project.scale})` : "scale(1)",
            }}
          />
        </motion.div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 z-10">
          <div className="flex flex-wrap gap-2 justify-center mb-4">
            {project.tech.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 text-xs font-semibold text-white bg-primary-pink rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
          <a
            href={project.link}
            className="px-6 py-2 bg-transparent border-2 border-primary-pink text-white rounded-full hover:bg-primary-pink transition-colors duration-300 flex items-center gap-2"
          >
            View Details <ArrowRight size={16} />
          </a>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary-pink transition-colors">
          {project.title}
        </h3>
        <p className="text-[#8c8b8b] text-sm leading-relaxed line-clamp-2">
          {project.description}
        </p>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
