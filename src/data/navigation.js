// `key` resolves against the `nav.*` namespace in src/i18n/locales/*.json.
export const navLinks = [
  { key: "home", to: "/" },
  { key: "about", to: "/about" },
  { key: "portfolio", to: "/portfolio" },
  { key: "resume", to: "/resume" },
  { key: "news", to: "/news" },
  { key: "contact", to: "/contact" },
];

export const footerLinks = navLinks.filter((link) => link.key !== "news");
