import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { ReactTyped } from "react-typed";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import NewsCard from "../../components/News/NewsCard";
import ParticlesBackground from "../../components/ParticlesBackground";

// Import images
import addinnImg from "../../assets/images/addinn/ADDINN.png";
import awsImg from "../../assets/images/AI_AWS.jpg";
import certifImg from "../../assets/images/certif.png";
import fediImg from "../../assets/images/Fedi.jpg";
import onboardifyImg from "../../assets/images/logo3.png";
import tesaImg from "../../assets/images/new10/tesa.jpg";
import tsypImg from "../../assets/images/new12/tsyp1.jpg";
import iesImg from "../../assets/images/new13/ies.jpg";
import houImg from "../../assets/images/new8/Hou.png";
import nivineImg from "../../assets/images/new9/nivine.png";
import ieeeImg from "../../assets/images/news6/me 2.jpg";
import graduationImg from "../../assets/images/pf1.png";

const NewsList = () => {
  const newsItems = [
    {
      id: 13,
      title: "IEEE IES SYP Congress",
      date: "10-01-2026",
      author: "Fedi Hmida",
      image: iesImg,
      description:
        "Receiving this certificate is not just about participation, it’s a reminder of the incredible experiences...",
      link: "/news/13",
    },
    {
      id: 12,
      title: "1st Place at the Energy Utopia Challenge",
      date: "26-12-2025",
      author: "Fedi Hmida",
      image: tsypImg,
      description:
        "Winner of the 1st Place at the Energy Utopia Challenge: AI for a Smarter, Greener Future...",
      link: "/news/12",
    },
    {
      id: 11,
      title: "AI Model Deployment on AWS Certification",
      date: "30-11-2025",
      author: "Fedi Hmida",
      image: awsImg,
      description:
        "I’m pleased to share that I’ve earned the AI Model Deployment on AWS certification...",
      link: "/news/11",
    },
    {
      id: 1,
      title: "SmartClaim – Digital Claims Assistant Platform",
      date: "28-11-2025",
      author: "Fedi Hmida",
      image: tesaImg,
      description:
        "Thrilled to reveal the highlight of my Engineering internship at ADDINN Group...",
      link: "/news/1",
    },
    {
      id: 2,
      title: "Data Science Excellence Recognition",
      date: "19-09-2025",
      author: "Fedi Hmida",
      image: nivineImg,
      description:
        "Proud to receive a professional recommendation letter from Dr. Nivine ATTOUE...",
      link: "/news/2",
    },
    {
      id: 3,
      title: "Professional Recognition from Senior Flutter Engineer",
      date: "1-09-2025",
      author: "Fedi Hmida",
      image: houImg,
      description:
        "Honored to receive a professional recommendation letter from Houssem Eddine FADHLI...",
      link: "/news/3",
    },
    {
      id: 4,
      title: "End of My Internship – ADDINN Group",
      date: "1-09-2025",
      author: "Fedi Hmida",
      image: addinnImg,
      description:
        "Successfully completed my 2-month internship at ADDINN Group...",
      link: "/news/4",
    },
    {
      id: 5,
      title: "IEEE IES SYP Congress",
      date: "Recent",
      author: "Fedi Hmida",
      image: ieeeImg,
      description: "Participation in the IEEE IES SYP Congress.",
      link: "/news/5",
    },
    {
      id: 6,
      title: "Internship Start at ADDINN",
      date: "July 3, 2025",
      author: "Admin",
      image: addinnImg,
      description:
        "Beginning a new journey as a Mobile Developer Intern at ADDINN Group.",
      link: "/news/6",
    },
    {
      id: 7,
      title: "Onboardify",
      date: "Mai 26, 2025",
      author: "Admin",
      image: onboardifyImg,
      description: "Launching Onboardify, a gamified HR onboarding platform.",
      link: "/news/7",
    },
    {
      id: 8,
      title: "IEEEXtreme",
      date: "Mars 15, 2025",
      author: "Admin",
      image: certifImg,
      description: "Participation in the IEEEXtreme programming competition.",
      link: "/news/8",
    },
    {
      id: 9,
      title: "IEEE TSYP12 Congress",
      date: "Dec 24, 2024",
      author: "Admin",
      image: fediImg,
      description: "Attending the IEEE TSYP12 Congress.",
      link: "/news/9",
    },
    {
      id: 10,
      title: "Graduation",
      date: "Juin 13, 2024",
      author: "Admin",
      image: graduationImg,
      description: "Celebrating graduation day.",
      link: "/news/10",
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = newsItems.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(newsItems.length / itemsPerPage);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  return (
    <div className="relative min-h-screen bg-deep-indigo text-white">
      <ParticlesBackground />
      <Navbar />

      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <ReactTyped
              strings={["Latest News", "My Blog", "Updates"]}
              typeSpeed={50}
              backSpeed={30}
              loop
            />
          </h1>
          <div className="w-24 h-1 bg-primary-pink mx-auto rounded-full" />
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          key={currentPage}
        >
          {currentItems.map((item, index) => (
            <NewsCard key={item.id} {...item} index={index} />
          ))}
        </motion.div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center mt-16 gap-2">
            <button
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
              className={`p-3 rounded-full transition-all duration-300 flex items-center justify-center group ${
                currentPage === 1
                  ? "opacity-50 cursor-not-allowed bg-white/5"
                  : "bg-white/10 hover:bg-primary-pink text-white hover:shadow-lg hover:-translate-y-1"
              }`}
              aria-label="Previous Page"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 bg-white/5 px-2 py-1 rounded-full backdrop-blur-sm">
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => paginate(index + 1)}
                  aria-label={`Page ${index + 1}`}
                  aria-current={currentPage === index + 1 ? "page" : undefined}
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 font-medium ${
                    currentPage === index + 1
                      ? "bg-primary-pink text-white shadow-glow scale-110"
                      : "text-white/70 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {index + 1}
                </button>
              ))}
            </div>

            <button
              onClick={() => paginate(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`p-3 rounded-full transition-all duration-300 flex items-center justify-center group ${
                currentPage === totalPages
                  ? "opacity-50 cursor-not-allowed bg-white/5"
                  : "bg-white/10 hover:bg-primary-pink text-white hover:shadow-lg hover:-translate-y-1"
              }`}
              aria-label="Next Page"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default NewsList;
