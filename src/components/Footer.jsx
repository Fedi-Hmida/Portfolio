import { Link } from "react-router-dom";
import logo from "../assets/images/flogo.png";
import { footerLinks } from "../data/navigation";
import { socialLinks } from "../data/socialLinks";
import SocialIconLink from "./SocialIconLink";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-footer-bg pt-16 pb-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center mb-8">
          {/* Column 1: Logo */}
          <div className="flex justify-center md:justify-start">
            <Link to="/">
              <img
                className="h-10 w-auto opacity-80 hover:opacity-100 transition-opacity"
                src={logo}
                alt="Fedi Hmida portfolio home"
                loading="lazy"
                decoding="async"
              />
            </Link>
          </div>

          {/* Column 2: Nav Links */}
          <div className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                className="text-gray-400 hover:text-primary-pink text-sm transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Column 3: Social Icons */}
          <div className="flex justify-center md:justify-end gap-4">
            {socialLinks.map((social) => {
              return (
                <SocialIconLink
                  key={social.name}
                  social={social}
                  className="w-10 h-10 rounded-full bg-darker-indigo flex items-center justify-center text-white hover:bg-primary-pink hover:scale-110 transition-all duration-300 shadow-lg shadow-primary-pink/20"
                />
              );
            })}
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {currentYear} Fedi Hmida. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
