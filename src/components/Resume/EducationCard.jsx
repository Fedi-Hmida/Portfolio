import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const EducationCard = ({ degree, institution, year }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="glass-card p-6 rounded-xl hover:translate-y-[-5px] hover:shadow-glow transition-all duration-300 flex items-center gap-4 border border-white/5"
    >
      <div className="p-3 bg-white/5 rounded-full text-blue-400">
        <GraduationCap size={24} />
      </div>
      <div>
        <span className="text-xs text-primary-pink font-semibold uppercase tracking-wider">
          {year}
        </span>
        <h3 className="text-lg font-bold text-white">{degree}</h3>
        <p className="text-gray-400 text-sm">{institution}</p>
      </div>
    </motion.div>
  );
};

export default EducationCard;
