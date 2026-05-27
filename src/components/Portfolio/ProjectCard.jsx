import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => {
  const accentStyle = {
    "--project-accent": project.accentColor || "#fe3e57",
    "--project-accent-text": project.accentText || project.accentColor || "#fe3e57",
    "--project-accent-soft": project.accentSoft || "rgba(254, 62, 87, 0.15)",
    "--project-accent-border": project.accentBorder || "rgba(254, 62, 87, 0.4)",
    "--project-accent-shadow": project.accentShadow || "rgba(254, 62, 87, 0.22)",
    "--project-accent-foreground": project.accentForeground || "#ffffff",
  };

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
      style={accentStyle}
      className="project-card group relative flex h-full flex-col overflow-hidden rounded-xl border border-white/10 bg-[#0c0b44]/90 shadow-lg transition-all duration-300"
    >
      {/* Image Container */}
      <div className="relative h-48 md:h-64 overflow-hidden p-6 flex items-center justify-center">
        {(project.type || project.status) && (
          <div className="absolute left-4 top-4 z-20 flex flex-wrap gap-2">
            {project.type && (
              <span className="project-type-pill rounded-full border px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-white">
                {project.type}
              </span>
            )}
            {project.status && (
              <span className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-[11px] font-semibold text-gray-200">
                {project.status}
              </span>
            )}
          </div>
        )}
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
            loading="lazy"
            decoding="async"
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
                className="project-tech-pill rounded-full px-3 py-1 text-xs font-semibold"
              >
                {tech}
              </span>
            ))}
          </div>
          <Link
            to={project.link}
            className="project-overlay-cta flex items-center gap-2 rounded-full border-2 bg-transparent px-6 py-2 text-white transition-colors duration-300 focus:outline-none focus:ring-2"
          >
            {project.cta || "View case study"}{" "}
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-3 flex flex-col gap-2">
          {project.role && (
            <span className="project-role text-xs font-semibold uppercase tracking-wider">
              {project.role}
            </span>
          )}
          <h3 className="project-title text-xl font-bold text-white transition-colors">
            {project.title}
          </h3>
        </div>

        <p className="text-[#b9b8c7] text-sm leading-relaxed">
          {project.description}
        </p>

        {project.impact && (
          <p className="project-impact mt-4 rounded-lg border-l-4 bg-white/5 px-4 py-3 text-sm font-semibold text-white">
            {project.impact}
          </p>
        )}

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tech.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-white/5 px-3 py-1 text-xs font-semibold text-gray-300"
            >
              {tech}
            </span>
          ))}
        </div>

        <Link
          to={project.link}
          className="project-card-link mt-6 inline-flex w-fit items-center gap-2 text-sm font-bold transition-colors hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#0c0b44]"
        >
          {project.cta || "View case study"}{" "}
          <ArrowRight size={16} aria-hidden="true" />
        </Link>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
