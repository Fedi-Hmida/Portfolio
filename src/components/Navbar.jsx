import { AnimatePresence, motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/images/flogo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Home", href: "/", external: false },
    { name: "About", href: "/about", external: false },
    { name: "Portfolio", href: "/portfolio", external: false },
    { name: "Resume", href: "/resume", external: false },
    { name: "News", href: "/news", external: false },
    { name: "Contact", href: "/contact", external: false },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "bg-deep-indigo/90 backdrop-blur-sm shadow-lg" : "bg-transparent"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 cursor-pointer">
            <Link to="/">
              <img
                src={logo}
                className="w-16 h-16 object-contain"
                width="64"
                height="64"
                alt="Logo"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="hidden md:flex items-baseline space-x-8">
              {links.map((link) =>
                link.external ? (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-gray-300 hover:text-primary-pink text-sm font-medium transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link
                    key={link.name}
                    to={link.href}
                    className={`text-sm font-medium transition-colors duration-300 ${
                      location.pathname === link.href
                        ? "text-primary-pink"
                        : "text-gray-300 hover:text-primary-pink"
                    }`}
                  >
                    {link.name}
                  </Link>
                ),
              )}
            </div>

            <Link
              to="/contact"
              className="px-6 py-2.5 bg-primary-pink text-white text-sm font-bold rounded-full relative overflow-hidden group transition-all duration-300 hover:shadow-[0_0_20px_rgba(254,62,87,0.5)] hover:-translate-y-1"
            >
              <span className="relative z-10">Let's Talk</span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-darker-indigo/95 backdrop-blur-md"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {links.map((link) =>
                link.external ? (
                  <a
                    key={link.name}
                    href={link.href}
                    className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-primary-pink hover:bg-white/5"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link
                    key={link.name}
                    to={link.href}
                    className={`block px-3 py-2 rounded-md text-base font-medium hover:bg-white/5 ${
                      location.pathname === link.href
                        ? "text-primary-pink"
                        : "text-white hover:text-primary-pink"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                ),
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
