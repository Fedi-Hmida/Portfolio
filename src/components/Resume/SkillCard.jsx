import { motion } from "framer-motion";
import {
    Brain,
    Code,
    Cpu,
    Database,
    Layers,
    Server,
    Smartphone,
    Terminal,
} from "lucide-react";

const icons = {
  mobile: Smartphone,
  backend: Server,
  ai: Cpu,
  frontend: Code,
  database: Database,
  devops: Terminal,
  ml: Brain,
  fullstack: Layers,
};

const SkillCard = ({ title, skills, type, index }) => {
  const Icon = icons[type] || Code;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      className="glass-card p-6 rounded-xl hover:translate-y-[-5px] hover:shadow-glow transition-all duration-300 group"
    >
      <div className="flex items-center gap-3 mb-4">
        <Icon
          className="text-primary-pink group-hover:scale-110 transition-transform"
          size={24}
        />
        <h3 className="text-xl font-bold text-white group-hover:text-primary-pink transition-colors">
          {title}
        </h3>
      </div>
      <ul className="space-y-2">
        {skills.map((skill, i) => {
          // Parse "Name (Description)" -> Name: bold, Description: normal
          const match =
            typeof skill === "string" ? skill.match(/(.*?)\s*\((.*?)\)/) : null;

          return (
            <li
              key={i}
              className="flex items-start gap-2 text-gray-300 text-sm"
            >
              <span className="w-1.5 h-1.5 bg-primary-pink rounded-full flex-shrink-0 mt-1.5"></span>
              {match ? (
                <span>
                  <strong className="text-white font-semibold">
                    {match[1]}
                  </strong>
                  <span className="text-gray-400 opacity-90 ml-1.5 block sm:inline sm:ml-1">
                    - {match[2]}
                  </span>
                </span>
              ) : (
                <strong className="text-white font-semibold">{skill}</strong>
              )}
            </li>
          );
        })}
      </ul>
    </motion.div>
  );
};

export default SkillCard;
