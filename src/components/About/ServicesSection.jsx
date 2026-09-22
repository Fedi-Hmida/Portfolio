import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import {
    FaBrain,
    FaCode,
    FaCogs,
    FaDatabase,
    FaEye,
    FaFileCode,
    FaMobileAlt,
    FaRobot,
    FaRocket,
    FaRoute,
    FaServer,
    FaShieldAlt,
    FaTools,
    FaUserCheck,
} from "react-icons/fa";
import {
    SiDart,
    SiFirebase,
    SiFastapi,
    SiFlutter,
    SiMongodb,
    SiMysql,
    SiNextdotjs,
    SiOpencv,
    SiPytorch,
    SiReact,
    SiScikitlearn,
    SiTailwindcss,
    SiTypescript,
} from "react-icons/si";
import { services as homeServices } from "../../data/skills";
import SectionTitle from "../SectionTitle"; // Reusing from Resume
import ServiceCard from "./ServiceCard";

const tagIconMap = {
  Flutter: { icon: SiFlutter, color: "#02569B" },
  Dart: { icon: SiDart, color: "#0175C2" },
  Firebase: { icon: SiFirebase, color: "#FFCA28" },
  "REST APIs": { icon: FaServer, color: "#61DAFB" },
  FlutterFlow: { icon: FaMobileAlt, color: "#5066AD" },
  "Offline mobile AI": { icon: FaBrain, color: "#fe3e57" },
  YOLOv8: { icon: FaEye, color: "#6FB9CC" },
  OpenCV: { icon: SiOpencv, color: "#5C3EE8" },
  PyTorch: { icon: SiPytorch, color: "#EE4C2C" },
  "Image preprocessing": { icon: FaCogs, color: "#39c4ff" },
  "Object detection": { icon: FaEye, color: "#00C2F0" },
  "Damage detection": { icon: FaShieldAlt, color: "#6FB9CC" },
  LangGraph: { icon: FaRoute, color: "#7AC943" },
  LangChain: { icon: FaTools, color: "#7AC943" },
  "RAG Chatbots": { icon: FaRobot, color: "#ff6b81" },
  ChromaDB: { icon: FaDatabase, color: "#9B8CFF" },
  "Vector database": { icon: FaDatabase, color: "#9B8CFF" },
  "LLM reasoning": { icon: FaBrain, color: "#fe3e57" },
  "Tool-assisted agents": { icon: FaTools, color: "#7AC943" },
  "Human-in-the-loop": { icon: FaUserCheck, color: "#00C2F0" },
  "Validation layers": { icon: FaShieldAlt, color: "#ff6b81" },
  "Fallback rules": { icon: FaRoute, color: "#ffb347" },
  "Safety checks": { icon: FaShieldAlt, color: "#7AC943" },
  "Explainable recommendations": { icon: FaBrain, color: "#39c4ff" },
  Python: { icon: FaCode, color: "#FFD43B" },
  "scikit-learn": { icon: SiScikitlearn, color: "#F7931E" },
  XGBoost: { icon: FaRocket, color: "#00BFFF" },
  SHAP: { icon: FaEye, color: "#ff6b81" },
  "Explainable AI": { icon: FaBrain, color: "#39c4ff" },
  "Model Evaluation": { icon: FaCogs, color: "#fe3e57" },
  Classification: { icon: FaBrain, color: "#9B8CFF" },
  "Class imbalance": { icon: FaDatabase, color: "#ffb347" },
  "CRISP-DM": { icon: FaRoute, color: "#00C2F0" },
  React: { icon: SiReact, color: "#61DAFB" },
  "Next.js": { icon: SiNextdotjs, color: "#ffffff" },
  TypeScript: { icon: SiTypescript, color: "#3178C6" },
  "Tailwind CSS": { icon: SiTailwindcss, color: "#06B6D4" },
  "Three.js": { icon: FaCode, color: "#ffffff" },
  "Dashboard UI": { icon: FaFileCode, color: "#B8C5FF" },
  "3D digital twin": { icon: FaCogs, color: "#7AC943" },
  FastAPI: { icon: SiFastapi, color: "#009485" },
  MongoDB: { icon: SiMongodb, color: "#47A248" },
  MySQL: { icon: SiMysql, color: "#4479A1" },
  Joblib: { icon: FaDatabase, color: "#ffb347" },
};

// Ordered by stable key so the sequence survives translation.
const serviceOrder = [
  "ai_agents_agentic_ai",
  "full_stack_web_development",
  "ai_machine_learning",
  "mobile_development",
  "computer_vision",
];

const services = [...homeServices].sort(
  (firstService, secondService) =>
    serviceOrder.indexOf(firstService.key) - serviceOrder.indexOf(secondService.key),
).map((service) => ({
  key: service.key,
  icon: service.icon,
  stack: service.tags.map((tag) => ({
    name: tag,
    icon: tagIconMap[tag]?.icon || service.icon,
    color: tagIconMap[tag]?.color || "#fe3e57",
  })),
}));

const ServicesSection = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-deep-indigo relative z-10 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title={t("about.whatIOffer")} />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.2 }}
          className="grid grid-cols-12 gap-8"
        >
          {services.map((service) => (
            <ServiceCard
              key={service.key}
              {...service}
              title={t(`skills.services.${service.key}.title`)}
              description={t(`skills.services.${service.key}.desc`)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
