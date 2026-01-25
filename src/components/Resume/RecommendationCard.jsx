import { motion } from "framer-motion";
import { Download, Linkedin } from "lucide-react";

const RecommendationCard = ({ name, role, linkedinUrl, pdfLink }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="glass-card p-6 rounded-xl border border-white/5 relative overflow-hidden group"
    >
      <div className="absolute top-0 right-0 p-4 opacity-50 group-hover:opacity-100 transition-opacity">
        <a
          href={linkedinUrl}
          target="_blank"
          rel="noreferrer"
          className="text-linkedin-blue hover:text-white transition-colors"
        >
          <Linkedin size={24} />
        </a>
      </div>

      <h3 className="text-lg font-bold text-white mb-1">{name}</h3>
      <p className="text-primary-pink text-sm mb-6">{role}</p>

      <a
        href={pdfLink}
        download
        className="inline-flex items-center gap-2 text-sm text-gray-300 hover:text-white border-b border-primary-pink pb-1 hover:border-white transition-all"
      >
        <Download size={16} />
        Download Letter
      </a>
    </motion.div>
  );
};

export default RecommendationCard;
