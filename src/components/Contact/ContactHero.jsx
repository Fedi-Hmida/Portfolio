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
            Open to junior Flutter/mobile roles, AI engineering internships,
            and product-focused collaborations where mobile apps, computer
            vision, and backend APIs meet.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {["Recruiter inquiries", "Internships", "Flutter projects", "AI products"].map(
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
