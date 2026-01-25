import { motion } from "framer-motion";

const ServiceCard = ({ title, description, icon: Icon, stack }) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
      className="group col-span-12 md:col-span-6 h-[320px] [perspective:1000px]"
    >
      <div className="relative h-full w-full transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        {/* Front Face */}
        <div className="absolute inset-0 h-full w-full [backface-visibility:hidden] bg-darker-indigo p-8 rounded-xl border border-white/5 shadow-lg flex flex-col justify-center">
          <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left h-full">
            <div className="mb-6 md:mb-0 md:mr-6 flex-shrink-0 flex items-center">
              <div className="w-20 h-20 rounded-full bg-primary-pink/10 flex items-center justify-center transition-colors group-hover:bg-primary-pink/20">
                <Icon className="text-4xl text-white" />
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
              <p className="text-gray-300 leading-relaxed text-sm">
                {description}
              </p>
            </div>
          </div>
        </div>

        {/* Back Face */}
        <div className="absolute inset-0 h-full w-full [backface-visibility:hidden] [transform:rotateY(180deg)] bg-darker-indigo p-6 rounded-xl border border-primary-pink/30 shadow-lg flex flex-col items-center overflow-hidden">
          <h3 className="text-lg font-bold text-white mb-4">Tech Stack</h3>
          <div className="w-full overflow-y-auto pr-1 custom-scrollbar">
            <div className="grid grid-cols-3 gap-2 w-full">
              {stack &&
                stack.map((tech, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col items-center justify-center p-2 rounded-lg bg-deep-indigo hover:bg-white/5 transition-colors"
                  >
                    <tech.icon
                      className="text-2xl mb-1"
                      style={{ color: tech.color }}
                    />
                    <span className="text-[10px] text-center text-gray-300 font-medium leading-tight">
                      {tech.name}
                    </span>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
