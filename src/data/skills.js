import { FaBolt, FaBrain, FaCode, FaCubes, FaEye, FaMobileAlt, FaRobot } from "react-icons/fa";

// Used by the About page's "What I Offer" section. Home no longer shows a
// skills block; its availability copy lives in src/content/home.
export const services = [
  {
    title: "AI Agents / Agentic AI",
    key: "ai_agents_agentic_ai",
    desc: "LangGraph workflows with LLM reasoning, tool-assisted irrigation decisions, human-in-the-loop approval, validation layers, fallback rules, and safety checks.",
    icon: FaRobot,
    tags: [
      "LangGraph",
      "LangChain",
      "RAG Chatbots",
      "ChromaDB",
      "Vector database",
      "LLM reasoning",
      "Tool-assisted agents",
      "Human-in-the-loop",
      "Validation layers",
      "Fallback rules",
      "Safety checks",
      "Explainable recommendations",
    ],
  },
  {
    title: "Full-Stack Web Development",
    key: "full_stack_web_development",
    desc: "React and Next.js dashboard interfaces with TypeScript, Tailwind CSS, Three.js, FastAPI model inference APIs, REST APIs, MongoDB, Firebase, MySQL, and Joblib persistence.",
    icon: FaCode,
    tags: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Three.js",
      "Dashboard UI",
      "3D digital twin",
      "FastAPI",
      "REST APIs",
      "MongoDB",
      "Firebase",
      "MySQL",
      "Joblib",
    ],
  },
  {
    title: "AI / Machine Learning",
    key: "ai_machine_learning",
    desc: "Python ML work with scikit-learn, XGBoost, SHAP, classification, model evaluation, class imbalance handling, and CRISP-DM framing.",
    icon: FaBrain,
    tags: [
      "Python",
      "scikit-learn",
      "XGBoost",
      "SHAP",
      "Explainable AI",
      "Model Evaluation",
      "Classification",
      "Class imbalance",
      "CRISP-DM",
    ],
  },
  {
    title: "Mobile Development",
    key: "mobile_development",
    desc: "Flutter and Dart mobile apps with Firebase data flows, REST API integration, FlutterFlow prototypes, and offline mobile AI paths for field usage.",
    icon: FaMobileAlt,
    tags: ["Flutter", "Dart", "Firebase", "REST APIs", "FlutterFlow", "Offline mobile AI"],
  },
  {
    title: "Computer Vision",
    key: "computer_vision",
    desc: "YOLOv8, OpenCV, and PyTorch pipelines for image preprocessing, object detection, and vehicle damage detection in SmartClaim.",
    icon: FaEye,
    tags: ["YOLOv8", "OpenCV", "PyTorch", "Image preprocessing", "Object detection", "Damage detection"],
  },
];

export const methodologies = [
  {
    title: "Data Science Methodology",
    key: "data_science_methodology",
    icon: FaCubes,
    color: "text-[#39c4ff]",
    hex: "#39c4ff",
    tags: ["CRISP-DM", "TDSP"],
  },
  {
    title: "Agile Methodology",
    key: "agile_methodology",
    icon: FaBolt,
    color: "text-[#fe3e57]",
    hex: "#fe3e57",
    tags: ["Scrum", "Kanban", "Scrumban"],
  },
];
