import { motion } from "framer-motion";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { ReactTyped } from "react-typed";
import SocialIconLink from "../SocialIconLink";
import { contactActions, contactInfo, socialLinks } from "../../data/socialLinks";

const ConnectSection = () => {
  return (
    <div className="mt-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
          <ReactTyped
            strings={["Recruiter Friendly", "Quick Response", "Clear Next Step"]}
            typeSpeed={100}
            backSpeed={50}
            loop
          />
        </h2>
        <div className="w-16 h-1 bg-primary-pink mx-auto rounded"></div>
        <p className="mx-auto mt-4 max-w-2xl text-gray-300">
          Send a role, project brief, or collaboration idea. For technical
          review, start with SmartClaim and the CV, then reach out through
          LinkedIn or email.
        </p>
      </div>

      {/* Map */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-full h-80 rounded-2xl overflow-hidden shadow-2xl border border-white/10 mb-12"
      >
        <iframe
          title="Map showing Tunis, Tunisia"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d102118.23232145398!2d10.070624896792942!3d36.818970000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd337f5e7ef543%3A0xd671924e714a0275!2sTunis%2C%20Tunisia!5e0!3m2!1sen!2suk!4v1655655787682!5m2!1sen!2suk"
          className="w-full h-full border-0 filter grayscale invert contrast-125 opacity-80 hover:opacity-100 transition-opacity duration-500"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Direct Actions */}
        <div className="lg:col-span-1 grid grid-cols-1 gap-4">
          {contactActions.map((action) => {
            const ActionIcon = action.icon;
            const isExternal = action.href.startsWith("http");
            return (
              <a
                key={action.name}
                href={action.href}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noreferrer" : undefined}
                aria-label={`Open ${action.name}`}
                className={`glass-card p-6 rounded-xl flex items-center justify-between group hover:bg-white/5 transition-all duration-300 border-l-4 border-transparent ${action.borderColor}`}
              >
                <span>
                  <span
                    className={`block text-white font-semibold text-lg ${action.color} transition-colors`}
                  >
                    {action.name}
                  </span>
                  <span className="mt-1 block text-sm text-gray-400">
                    {action.description}
                  </span>
                </span>
                <div
                  className={`p-3 rounded-full bg-white/5 group-hover:bg-white/10 text-gray-300 ${action.color} transition-colors`}
                >
                  <ActionIcon className={action.iconClassName} aria-hidden="true" />
                </div>
              </a>
            );
          })}
        </div>

        {/* Right Column - Info Stack */}
        <div className="lg:col-span-2 glass-card rounded-2xl p-8 space-y-8">
          {/* Address */}
          <div className="flex items-start gap-6">
            <div className="w-12 h-12 rounded-full bg-primary-pink/20 flex items-center justify-center text-primary-pink flex-shrink-0">
              <FaMapMarkerAlt size={20} aria-hidden="true" />
            </div>
            <div>
              <h4 className="text-xl font-bold text-white mb-1">Location</h4>
              <p className="text-gray-400">{contactInfo.location}</p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start gap-6">
            <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 flex-shrink-0">
              <FaEnvelope size={20} aria-hidden="true" />
            </div>
            <div>
              <h4 className="text-xl font-bold text-white mb-1">Email</h4>
              <p className="text-gray-400">{contactInfo.email}</p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-start gap-6">
            <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 flex-shrink-0">
              <FaPhoneAlt size={20} aria-hidden="true" />
            </div>
            <div>
              <h4 className="text-xl font-bold text-white mb-1">Phone</h4>
              <p className="text-gray-400">{contactInfo.phone}</p>
            </div>
          </div>

          <div className="border-t border-white/10 my-6"></div>

          {/* Social Row */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Follow Me</h4>
            <div className="flex gap-4 flex-wrap">
              {socialLinks.map((social) => {
                return (
                  <SocialIconLink
                    key={social.name}
                    social={social}
                    className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-300 hover:bg-primary-pink hover:text-white transition-all transform hover:-translate-y-1"
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectSection;
