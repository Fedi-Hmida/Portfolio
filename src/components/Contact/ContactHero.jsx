import { motion } from "framer-motion";

const ContactHero = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 text-center z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Let's Work{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-pink to-secondary-pink">
              Together
            </span>
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-pink to-secondary-pink mx-auto rounded-full"></div>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-300 md:text-xl">
            Based in Limoges, France. Looking for a 4-month internship from
            April 2027 and an alternance in AI / Software Engineering from
            September 2027, with teams building agentic AI systems, ML
            products, or production back-end platforms.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {[
              "Internship - April 2027",
              "Alternance - September 2027",
              "AI / Software Engineering",
              "Based in France",
            ].map(
              (item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-gray-200"
                >
                  {item}
                </span>
              ),
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactHero;
