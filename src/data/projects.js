import proLinkImg from "../assets/images/FlutterFlow.png";
import proLinkPreviewImg from "../assets/images/FlutterFlow2.png";
import smartClaimImg from "../assets/images/Portfolio/New Logo SmartClaim.png";
import smartClaimPreviewImg from "../assets/images/Portfolio/New Logo SmartClaim2.png";
import sahitnaSafeImg from "../assets/images/Portfolio/ML2.png";
import firmaaCoverImg from "../assets/images/Portfolio/Firmaa/logo_firmaa.png";
import onboardifyImg from "../assets/images/logo3.png";
import onboardifyPreviewImg from "../assets/images/logo31.png";
import solarFlowImg from "../assets/images/logo_1555.png";
import solarFlowPreviewImg from "../assets/images/logo_15553.png";

export const projectCategories = [
  { id: "all", label: "All Projects" },
  { id: "ia", label: "AI / ML" },
  { id: "mobile", label: "Mobile Apps" },
  { id: "web", label: "Web Apps" },
];

export const projects = [
  {
    id: 6,
    title: "Firmaa",
    category: ["ia", "web", "mobile"],
    tech: ["LangGraph", "FastAPI", "MongoDB", "Next.js", "Flutter", "Three.js"],
    homeTech: ["LangGraph", "Flutter", "FastAPI", "Next.js"],
    role: "Project Lead / AI Agent Engineer",
    type: "AI-Powered Smart Farming Platform",
    status: "Integrated ESPRIT project",
    impact: "Autonomous irrigation agent with 3D farm monitoring and human-in-the-loop approvals.",
    description:
      "AI-powered smart agriculture platform unifying Flutter mobile access, zone monitoring, autonomous irrigation recommendations, IoT/sensor data, and a 3D digital-twin farm dashboard.",
    homeDescription:
      "Agentic AI farming platform with Flutter mobile access, LangGraph irrigation workflow, FastAPI, MongoDB, Next.js, and 3D farm monitoring.",
    image: firmaaCoverImg,
    homeImage: firmaaCoverImg,
    link: "/portfolio/firmaa",
    cta: "View case study",
    scale: 1.18,
    accentColor: "#7AC943",
    accentText: "#A7E85A",
    accentSoft: "rgba(122, 201, 67, 0.14)",
    accentBorder: "rgba(122, 201, 67, 0.45)",
    accentShadow: "rgba(122, 201, 67, 0.22)",
    accentForeground: "#081824",
  },
  {
    id: 5,
    title: "Sahitna Safe",
    category: ["ia", "web", "mobile"],
    tech: ["Python", "scikit-learn", "FastAPI", "Next.js", "SHAP"],
    homeTech: ["Python", "FastAPI", "Next.js"],
    role: "ML Engineer / Full-Stack AI Developer",
    type: "Medical ML platform",
    status: "Academic team project",
    impact: "98.83% accuracy, 98.44% malignant recall, and 0.9975 ROC-AUC.",
    homeImpact: "CRISP-DM medical ML prototype with FastAPI and Next.js.",
    description:
      "Medical machine-learning decision-support prototype using the WDBC dataset, CRISP-DM methodology, clinical metric prioritization, FastAPI, Next.js, and SHAP explainability.",
    homeDescription:
      "Medical ML decision-support case study using CRISP-DM, WDBC data, FastAPI, and Next.js.",
    image: sahitnaSafeImg,
    homeImage: sahitnaSafeImg,
    link: "/portfolio/sahitna-safe",
    cta: "View case study",
    scale: 1.35,
    accentColor: "#00C2F0",
    accentText: "#41DFFF",
    accentSoft: "rgba(0, 194, 240, 0.14)",
    accentBorder: "rgba(0, 194, 240, 0.45)",
    accentShadow: "rgba(0, 194, 240, 0.22)",
    accentForeground: "#061429",
  },
  {
    id: 1,
    title: "SmartClaim",
    category: ["ia", "mobile"],
    tech: ["Flutter", "YOLOv8", "FastAPI", "Docker"],
    homeTech: ["Flutter", "YOLOv8", "FastAPI"],
    role: "Data & Mobile Developer Intern",
    type: "Flagship case study",
    status: "Internship project",
    impact: "92.9% precision for real-time car damage detection.",
    description:
      "Cross-platform Flutter app for intelligent insurance claim management with real-time AI car damage detection.",
    homeDescription:
      "AI-powered insurance claim assistant combining Flutter, computer vision, and FastAPI.",
    image: smartClaimImg,
    homeImage: smartClaimPreviewImg,
    link: "/portfolio/smart-claim",
    cta: "View SmartClaim",
    accentColor: "#6FB9CC",
    accentText: "#8ED5E4",
    accentSoft: "rgba(111, 185, 204, 0.14)",
    accentBorder: "rgba(111, 185, 204, 0.45)",
    accentShadow: "rgba(111, 185, 204, 0.22)",
    accentForeground: "#061429",
  },
  {
    id: 2,
    title: "SolarFlow App",
    homeTitle: "SolarFlow",
    category: ["mobile"],
    tech: ["Flutter", "IoT", "Energy"],
    homeTech: ["Flutter", "IoT"],
    role: "Flutter Developer",
    type: "Mobile + IoT",
    status: "Final year project",
    impact: "Real-time solar energy monitoring and consumption analytics.",
    homeImpact: "Real-time solar energy monitoring and analytics.",
    description:
      "Comprehensive Flutter mobile application for real-time solar energy management and consumption monitoring.",
    homeDescription:
      "Smart energy management mobile app for monitoring connected solar systems.",
    image: solarFlowImg,
    homeImage: solarFlowPreviewImg,
    link: "/portfolio/solar-flow",
    cta: "View case study",
    accentColor: "#DDEFEA",
    accentText: "#DDEFEA",
    accentSoft: "rgba(221, 239, 234, 0.12)",
    accentBorder: "rgba(221, 239, 234, 0.45)",
    accentShadow: "rgba(221, 239, 234, 0.16)",
    accentForeground: "#002040",
  },
  {
    id: 3,
    title: "Onboardify",
    category: ["web"],
    tech: ["JavaFX", "Symfony", "HR Tech"],
    homeTech: ["JavaFX", "Symfony"],
    role: "Full-stack contributor",
    type: "HR platform",
    status: "Portfolio project",
    impact: "Gamified onboarding flow for employee engagement.",
    description:
      "Gamified onboarding platform built with JavaFX & Symfony to enhance employee engagement and retention.",
    homeDescription:
      "Gamified HR onboarding platform using JavaFX and Symfony workflows.",
    image: onboardifyImg,
    homeImage: onboardifyPreviewImg,
    link: "/portfolio/onboardify",
    cta: "View case study",
    accentColor: "#5B73D6",
    accentText: "#AEBBFF",
    accentSoft: "rgba(91, 115, 214, 0.16)",
    accentBorder: "rgba(91, 115, 214, 0.48)",
    accentShadow: "rgba(91, 115, 214, 0.24)",
    accentForeground: "#ffffff",
  },
  {
    id: 4,
    title: "Pro-Link",
    category: ["mobile"],
    tech: ["Flutter", "Networking"],
    role: "Mobile app builder",
    type: "Mobile app",
    status: "Portfolio project",
    impact: "Professional networking and collaboration workflow.",
    description:
      "Professional networking mobile application built with Flutter to connect professionals and facilitate collaboration.",
    homeDescription:
      "Mobile networking platform for project requests and professional collaboration.",
    image: proLinkImg,
    homeImage: proLinkPreviewImg,
    link: "/portfolio/pro-link",
    cta: "View case study",
    scale: 1.4,
    accentColor: "#5066AD",
    accentText: "#AEBBFF",
    accentSoft: "rgba(80, 102, 173, 0.18)",
    accentBorder: "rgba(80, 102, 173, 0.5)",
    accentShadow: "rgba(80, 102, 173, 0.25)",
    accentForeground: "#ffffff",
  },
];

export const getProjectCards = (variant = "portfolio") =>
  projects.map((project) => {
    if (variant !== "home") {
      return project;
    }

    return {
      ...project,
      title: project.homeTitle || project.title,
      tech: project.homeTech || project.tech,
      impact: project.homeImpact || project.impact,
      description: project.homeDescription || project.description,
      image: project.homeImage || project.image,
    };
  });
