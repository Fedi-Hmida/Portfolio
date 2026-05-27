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
import {
  education,
  experiences,
  recommendations,
  technicalSkills,
} from "../data/resume";

const renderBullet = (parts) =>
  parts.map((part, index) =>
    part.strong ? <strong key={index}>{part.text}</strong> : part.text,
  );

const Resume = () => {
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
              href="/assets/cv/Cv_Ang.pdf"
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
                {experiences.map((experience) => (
                  <ExperienceCard
                    key={`${experience.company}-${experience.role}`}
                    role={experience.role}
                    company={experience.company}
                    duration={experience.duration}
                  >
                    <ul className="list-disc space-y-2 text-sm">
                      {experience.bullets.map((bullet, index) => (
                        <li key={index}>{renderBullet(bullet)}</li>
                      ))}
                    </ul>
                  </ExperienceCard>
                ))}
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
                  {education.map((item) => (
                    <EducationCard key={item.degree} {...item} />
                  ))}
                </div>
              </section>

              {/* Recommendations */}
              <section>
                <SectionTitle title="Recommendation Letters" />
                <div className="grid grid-cols-1 gap-6">
                  {recommendations.map((recommendation) => (
                    <RecommendationCard
                      key={recommendation.name}
                      {...recommendation}
                    />
                  ))}
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
