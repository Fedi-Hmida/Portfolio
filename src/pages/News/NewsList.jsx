import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { ReactTyped } from "react-typed";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import NewsCard from "../../components/News/NewsCard";
import ParticlesBackground from "../../components/ParticlesBackground";
import { newsItems } from "../../data/news";

const NewsList = () => {
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
              <ChevronLeft className="w-5 h-5" aria-hidden="true" />
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
              <ChevronRight className="w-5 h-5" aria-hidden="true" />
            </button>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default NewsList;
