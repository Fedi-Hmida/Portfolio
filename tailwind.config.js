/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        "deep-indigo": "#070640",
        "darker-indigo": "#0c0b44",
        "footer-bg": "#121151",
        "primary-pink": "#fe3e57",
        "secondary-pink": "#ff6b81",
        "whatsapp-green": "#25D366",
        "linkedin-blue": "#0077b5",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        "base-font": ["Now", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 20px rgba(254, 62, 87, 0.3)",
      },
    },
  },
  plugins: [],
};
