import proLinkImg from "../assets/images/FlutterFlow.png";
import proLinkPreviewImg from "../assets/images/FlutterFlow2.png";
import smartClaimImg from "../assets/images/Portfolio/New Logo SmartClaim.png";
import smartClaimPreviewImg from "../assets/images/Portfolio/New Logo SmartClaim2.png";
import sahitnaSafeImg from "../assets/images/Portfolio/ML2.png";
import firmaaCoverImg from "../assets/images/Portfolio/Firmaa/logo_firmaa.png";
import campusFlowImg from "../assets/images/Portfolio/CampusFlow/campusflow-card.png";
import callVerseImg from "../assets/images/Portfolio/CallVerse/callverse-card.png";
import smartHrmAiImg from "../assets/images/Portfolio/SmartHrmAi/smart-hrm-ai-cover.jpg";
import onboardifyImg from "../assets/images/logo3.png";
import onboardifyPreviewImg from "../assets/images/logo31.png";
import solarFlowImg from "../assets/images/logo_1555.png";
import solarFlowPreviewImg from "../assets/images/logo_15553.png";

export const projectCategories = [
  { id: "all" },
  { id: "ia" },
  { id: "mobile" },
  { id: "web" },
];

export const projects = [
  {
    id: 9,
    title: "CallVerse",
    category: ["ia", "web"],
    tech: ["LangGraph", "PPO (RL)", "Spring Boot", "Next.js", "PostgreSQL", "FastAPI"],
    homeTech: ["LangGraph", "PPO", "Spring Boot"],
    image: callVerseImg,
    homeImage: callVerseImg,
    link: "/portfolio/callverse",
    githubUrl: "https://github.com/Fedi-Hmida/callverse-backend",
    accentColor: "#C9A36A",
    accentText: "#E2C690",
    accentSoft: "rgba(201, 163, 106, 0.14)",
    accentBorder: "rgba(201, 163, 106, 0.45)",
    accentShadow: "rgba(201, 163, 106, 0.22)",
    accentForeground: "#1A1206",
  },
  {
    id: 8,
    title: "CampusFlow AI",
    category: ["ia"],
    tech: ["n8n", "RAG", "Qdrant", "Ollama", "Gemini", "Docker"],
    homeTech: ["n8n", "RAG", "Qdrant"],
    image: campusFlowImg,
    homeImage: campusFlowImg,
    link: "/portfolio/campusflow-ai",
    githubUrl: "https://github.com/Fedi-Hmida/CampusFlow_AI",
    accentColor: "#FE3E57",
    accentText: "#FF8A9B",
    accentSoft: "rgba(254, 62, 87, 0.14)",
    accentBorder: "rgba(254, 62, 87, 0.45)",
    accentShadow: "rgba(254, 62, 87, 0.22)",
    accentForeground: "#ffffff",
  },
  {
    id: 7,
    title: "SMART HRM AI",
    category: ["web", "ia"],
    tech: [
      "Java 17",
      "Spring Boot",
      "React 19",
      "TypeScript",
      "PostgreSQL",
      "Keycloak",
    ],
    homeTech: ["Spring Boot", "React 19", "Keycloak"],
    image: smartHrmAiImg,
    homeImage: smartHrmAiImg,
    link: "/portfolio/smart-hrm-ai",
    accentColor: "#1E8AF0",
    accentText: "#6FC2FF",
    accentSoft: "rgba(30, 138, 240, 0.14)",
    accentBorder: "rgba(30, 138, 240, 0.45)",
    accentShadow: "rgba(30, 138, 240, 0.22)",
    accentForeground: "#061429",
  },
  {
    id: 6,
    title: "Firmaa",
    category: ["ia", "web", "mobile"],
    tech: ["LangGraph", "FastAPI", "MongoDB", "Next.js", "Flutter", "Three.js"],
    homeTech: ["LangGraph", "Flutter", "FastAPI", "Next.js"],
    image: firmaaCoverImg,
    homeImage: firmaaCoverImg,
    link: "/portfolio/firmaa",
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
    image: sahitnaSafeImg,
    homeImage: sahitnaSafeImg,
    link: "/portfolio/sahitna-safe",
    githubUrl: "https://github.com/Fedi-Hmida/MLProject_Fedi",
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
    image: smartClaimImg,
    homeImage: smartClaimPreviewImg,
    link: "/portfolio/smart-claim",
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
    image: solarFlowImg,
    homeImage: solarFlowPreviewImg,
    link: "/portfolio/solar-flow",
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
    image: onboardifyImg,
    homeImage: onboardifyPreviewImg,
    link: "/portfolio/onboardify",
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
    image: proLinkImg,
    homeImage: proLinkPreviewImg,
    link: "/portfolio/pro-link",
    scale: 1.4,
    accentColor: "#5066AD",
    accentText: "#AEBBFF",
    accentSoft: "rgba(80, 102, 173, 0.18)",
    accentBorder: "rgba(80, 102, 173, 0.5)",
    accentShadow: "rgba(80, 102, 173, 0.25)",
    accentForeground: "#ffffff",
  },
];

export const projectsById = Object.fromEntries(projects.map((p) => [p.id, p]));

/**
 * Merges the Home content items ({ id, role, meta, ... } from
 * src/content/home/home.*.js) with the structural data above, in content order.
 */
export const getHomeProjects = (items) =>
  items.map((item) => {
    const project = projectsById[item.id];
    if (!project) throw new Error(`Unknown project id ${item.id}`);
    return {
      ...item,
      title: project.title,
      link: project.link,
      githubUrl: project.githubUrl,
      accentColor: project.accentColor,
      tech: project.homeTech || project.tech,
    };
  });

/**
 * Merges the structural project data above with the translated copy held in
 * src/i18n/locales/*.json under `projects.<id>`. `t` comes from
 * useTranslation(), passed in so this file stays a plain module.
 */
export const getProjectCards = (t, variant = "portfolio") =>
  projects.map((project) => {
    const key = `projects.${project.id}`;
    const home = variant === "home";

    return {
      ...project,
      title: home ? project.homeTitle || project.title : project.title,
      tech: home ? project.homeTech || project.tech : project.tech,
      image: home ? project.homeImage || project.image : project.image,
      role: t(`${key}.role`),
      type: t(`${key}.type`),
      status: t(`${key}.status`),
      cta: t(`${key}.cta`),
      impact: t(home ? `${key}.homeImpact` : `${key}.impact`),
      description: t(home ? `${key}.homeDescription` : `${key}.description`),
    };
  });
