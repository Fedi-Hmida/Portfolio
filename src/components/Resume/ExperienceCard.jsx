import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const ExperienceCard = ({ role, company, duration, children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="glass-card p-6 rounded-xl hover:translate-y-[-5px] hover:shadow-glow transition-all duration-300 border-l-4 border-primary-pink relative"
    >
      <div className="absolute top-6 right-6 text-gray-400 text-sm">
        {duration}
      </div>
      <div className="flex items-start gap-4 mb-4">
        <div className="p-3 bg-white/5 rounded-full text-primary-pink">
          <Briefcase size={24} />
        </div>
        <div>
          <h3 className="text-xl font-bold text-white">{role}</h3>
          <h4 className="text-primary-pink font-medium">{company}</h4>
        </div>
      </div>
      <div className="text-gray-300 pl-2 border-l border-white/10 ml-6">
        {children}
      </div>
    </motion.div>
  );
};

export default ExperienceCard;
