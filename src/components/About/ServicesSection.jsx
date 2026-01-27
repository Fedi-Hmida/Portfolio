import { motion } from "framer-motion";
import {
    FaBrain,
    FaChartLine,
    FaCode,
    FaEye,
    FaLayerGroup,
    FaMobileAlt,
    FaNetworkWired,
    FaRobot,
    FaRocket,
    FaServer,
    FaTree,
} from "react-icons/fa";
import {
    SiAndroidstudio,
    SiFirebase,
    SiFlutter,
    SiMongodb,
    SiNestjs,
    SiNextdotjs,
    SiNodedotjs,
    SiOpencv,
    SiPandas,
    SiPytorch,
    SiReact,
    SiScikitlearn,
    SiSymfony,
    SiTailwindcss,
    SiTensorflow,
} from "react-icons/si";
import SectionTitle from "../SectionTitle"; // Reusing from Resume
import ServiceCard from "./ServiceCard";

const ServicesSection = () => {
  const services = [
    {
      title: "Cross-Platform Mobile Apps",
      description:
        "Flutter-powered mobile applications with native performance. Leveraging Node.js and Firebase for robust backend solutions, alongside real-time data processing and modern UI/UX design patterns.",
      icon: FaMobileAlt,
      stack: [
        { name: "Flutter", icon: SiFlutter, color: "#02569B" },
        { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
        { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
        { name: "NestJS", icon: SiNestjs, color: "#E0234E" },
        { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
        { name: "Android Studio", icon: SiAndroidstudio, color: "#3DDC84" },
        { name: "REST API", icon: FaServer, color: "#61DAFB" },
        { name: "BLOC/Cubit", icon: FaLayerGroup, color: "#8E24AA" },
      ],
    },
    {
      title: "AI & Computer Vision",
      description:
        "YOLO-powered computer vision solutions for damage detection, object recognition, and intelligent automation. Experience with real-world AI implementation in insurance applications.",
      icon: FaRobot,
      stack: [
        { name: "PyTorch", icon: SiPytorch, color: "#EE4C2C" },
        { name: "OpenCV", icon: SiOpencv, color: "#5C3EE8" },
        { name: "TensorFlow", icon: SiTensorflow, color: "#FF6F00" },
        { name: "YOLOv8 Model", icon: FaEye, color: "#00FF00" },
        { name: "RAG Systems", icon: FaBrain, color: "#FF00FF" },
        { name: "CNN Model", icon: FaNetworkWired, color: "#990099" },
        { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      ],
    },
    {
      title: "Full-Stack Web Development",
      description:
        "End-to-end web solutions using React and Next.js for the frontend, coupled with Node.js and NestJS for robust backend architectures. Includes experience with Symfony and JavaFX for enterprise systems.",
      icon: FaCode,
      stack: [
        { name: "React", icon: SiReact, color: "#61DAFB" },
        { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
        { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
        { name: "NestJS", icon: SiNestjs, color: "#E0234E" },
        { name: "Symfony", icon: SiSymfony, color: "#000000" },
        { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      ],
    },
    {
      title: "Data Science & ML Solutions",
      description:
        "Machine learning implementations with KNN, Linear Regression, Decision Trees, and K-Means clustering. Data-driven insights for business intelligence and predictive analytics.",
      icon: FaChartLine,
      stack: [
        { name: "Pandas", icon: SiPandas, color: "#150458" },
        { name: "Scikit-learn", icon: SiScikitlearn, color: "#F7931E" },
        { name: "Random Forest Model", icon: FaTree, color: "#228B22" },
        { name: "XGBoost Model", icon: FaRocket, color: "#00Bfff" },
        { name: "MLP Model", icon: FaNetworkWired, color: "#FF4500" },
        { name: "Logistic Reg Model", icon: FaChartLine, color: "#4B0082" },
      ],
    },
  ];

  return (
    <section className="py-20 bg-deep-indigo relative z-10 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="What I Offer" />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.2 }}
          className="grid grid-cols-12 gap-8"
        >
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
