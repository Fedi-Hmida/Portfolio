import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { ReactTyped } from "react-typed";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ParticlesBackground from "../components/ParticlesBackground";
import EducationCard from "../components/Resume/EducationCard";
import ExperienceCard from "../components/Resume/ExperienceCard";
import RecommendationCard from "../components/Resume/RecommendationCard";
import SkillCard from "../components/Resume/SkillCard";
import SectionTitle from "../components/SectionTitle";

const Resume = () => {
  const technicalSkills = [
    {
      title: "Mobile Development",
      type: "mobile",
      skills: [
        "Flutter",
        "BLoC",
        "Android Studio",
        "UI/UX",
        "REST API Integration",
      ],
    },
    {
      title: "AI & Machine Learning",
      type: "ai",
      skills: [
        "Computer Vision (YOLOv8)",
        "TensorFlow & PyTorch",
        "OpenCV",
        "KNN / Regression",
        "Random Forest",
      ],
    },
    {
      title: "Backend Development",
      type: "backend",
      skills: ["FastAPI", "Symfony", "NestJS", "RESTful API Design"],
    },
    {
      title: "Frontend Development",
      type: "frontend",
      skills: [
        "Next.js",
        "React.js",
        "Tailwind CSS",
        "Twig",
        "Responsive Design",
      ],
    },
    {
      title: "DevOps & Tools",
      type: "devops",
      skills: ["Docker", "Git & GitHub", "ML Pipelines"],
    },
    {
      title: "Databases",
      type: "database",
      skills: ["MongoDB", "MySQL / PHPMyAdmin", "PostgreSQL"],
    },
  ];

  return (
    <div className="relative min-h-screen">
      <ParticlesBackground />
      <Navbar />

      <main className="relative z-10 pt-32 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            <ReactTyped
              strings={["Resume", "Curriculum Vitae", "My Journey"]}
              typeSpeed={100}
              backSpeed={50}
              loop
            />
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex justify-center"
          >
            <a
              href="/assets/cv/CV.pdf"
              download
              className="group relative px-8 py-4 bg-gradient-to-r from-primary-pink to-secondary-pink rounded-full text-white font-bold text-lg shadow-lg hover:shadow-primary-pink/50 transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-3 overflow-hidden"
            >
              <span className="relative z-10">Download PDF Version</span>
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
              >
                <Download className="relative z-10" size={24} />
              </motion.div>
            </a>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Experience & Education (Wait, let's stack them properly) */}
          {/* Actually, for Resume, a 2-column layout often works best, or full width sections. Let's do full width sections for Experience/Skills and 2 col for Education/Recs */}

          <div className="lg:col-span-12 space-y-20">
            {/* Professional Experience */}
            <section>
              <SectionTitle title="Professional Experience" />
              <div className="md:w-3/4 mx-auto space-y-8">
                <ExperienceCard
                  role="Data & Mobile Developer Intern"
                  company="Addinn Group"
                  duration="Summer 2025 • 2 months"
                >
                  <ul className="list-disc space-y-2 text-sm">
                    <li>
                      Developed <strong>SmartClaim</strong>, a Flutter
                      application for intelligent car crash claim reporting.
                    </li>
                    <li>
                      Integrated <strong>YOLOv8</strong> for real-time car
                      damage detection with <strong>92.9% precision</strong>.
                    </li>
                    <li>
                      Built a robust backend using <strong>FastAPI</strong> and
                      containerized the solution with <strong>Docker</strong>.
                    </li>
                  </ul>
                </ExperienceCard>

                <ExperienceCard
                  role="Msign – Final Year Project Internship"
                  company="Msign"
                  duration="Feb 2024 - Jun 2024"
                >
                  <ul className="list-disc space-y-2 text-sm">
                    <li>
                      Designed and implemented an{" "}
                      <strong>Energy Monitoring System</strong>.
                    </li>
                    <li>
                      Created <strong>SolarFlow</strong>, a cross-platform
                      mobile app using Flutter for real-time energy analytics.
                    </li>
                  </ul>
                </ExperienceCard>
              </div>
            </section>

            {/* Technical Skills */}
            <section>
              <SectionTitle title="Technical Skills" />
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {technicalSkills.map((skill, index) => (
                  <SkillCard key={index} index={index} {...skill} />
                ))}
              </div>
            </section>

            {/* Education & Recommendations Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Education */}
              <section>
                <SectionTitle title="Education" />
                <div className="space-y-6">
                  <EducationCard
                    degree="Data Science & AI Engineering Student"
                    institution="ESPRIT High School of Engineering"
                    year="Currently Enrolled"
                  />
                  <EducationCard
                    degree="Bachelor's Degree in Computer Engineering"
                    institution="Higher Institute of Computer Science of Mahdia"
                    year="2024"
                  />
                </div>
              </section>

              {/* Recommendations */}
              <section>
                <SectionTitle title="Recommendation Letters" />
                <div className="grid grid-cols-1 gap-6">
                  <RecommendationCard
                    name="Houssem Eddine FADHLI"
                    role="Mobile Dev Supervisor"
                    linkedinUrl="#"
                    pdfLink="/assets/cv/Recommendation_FediHmida.pdf"
                  />
                  <RecommendationCard
                    name="Nivine ATTOUE"
                    role="Data Science Supervisor"
                    linkedinUrl="#"
                    pdfLink="/assets/cv/Fedi_Hmida_Letter%20of%20Recommendation.pdf"
                  />
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Resume;
