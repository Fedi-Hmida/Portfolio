import { motion } from "framer-motion";
import {
    Code,
    Cpu,
    Database,
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
        {skills.map((skill, i) => (
          <li key={i} className="flex items-center gap-2 text-gray-300 text-sm">
            <span className="w-1.5 h-1.5 bg-primary-pink rounded-full"></span>
            {skill}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default SkillCard;
