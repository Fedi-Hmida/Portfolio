export const navLinks = [
  { name: "Home", to: "/" },
  { name: "About", to: "/about" },
  { name: "Portfolio", to: "/portfolio" },
  { name: "Resume", to: "/resume" },
  { name: "News", to: "/news" },
  { name: "Contact", to: "/contact" },
];

export const footerLinks = navLinks.filter((link) => link.name !== "News");
