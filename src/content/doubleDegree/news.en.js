// Double degree news (news 20), English. Same shape as news.fr.js (see contentParity.test.js).
const news = {
  back: "Back to News",
  logoAlt: "Fedi Hmida logo",
  badge: "Milestone",
  title: "A New Chapter",
  accent: "Double Degree Between ESPRIT and 3iL Ingénieurs",
  lead: "September 2024, first class in Tunis. September 2026, first class in France. I am continuing my engineering cycle as a double degree between ESPRIT and 3iL Ingénieurs in Limoges.",
  hook: "The programme doesn't restart. It continues, elsewhere.",
  journeyTitle: "Two First Days, Two Countries",
  timeline: [
    { when: "September 2024", what: "First class in Tunis", detail: "Start of the engineering cycle at ESPRIT." },
    { when: "September 2026", what: "First class in France", detail: "Arrival at 3iL Ingénieurs in Limoges." },
  ],
  // Rendered in sequence; strong segments are the school names.
  thanks: [
    { text: "Thank you to ", strong: false },
    { text: "ESPRIT", strong: true },
    { text: " for making this mobility possible, and to ", strong: false },
    { text: "3iL Ingénieurs", strong: true },
    { text: " for a welcome that turned an arrival into belonging.", strong: false },
  ],
  closing: "The next chapter is written in France.",
  campusAlt: "3iL Groupe signage at the school entrance in Limoges",
  cohortAlt: "Group photo of the 3iL Ingénieurs student cohort in Limoges",
  cohortCaption: "3iL Ingénieurs, Limoges",
  quickInfo: {
    title: "Quick Info",
    rows: [
      { label: "Programme", value: "Engineering cycle, double degree" },
      { label: "Schools", value: "ESPRIT & 3iL Ingénieurs" },
      { label: "Location", value: "Limoges, France" },
      { label: "Date", value: "September 2026" },
      { label: "Author", value: "Fedi Hmida" },
    ],
  },
  connect: "Connect",
  linkedinAria: "Open Fedi Hmida LinkedIn profile",
};

export default news;
