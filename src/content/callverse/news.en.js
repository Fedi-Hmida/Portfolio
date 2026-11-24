// CallVerse news (news 23), English. Same shape as news.fr.js (see contentParity.test.js).
// Mirrors the LinkedIn post drafted on November 24, 2026; numbers keep their conditions.
const news = {
  back: "Back to News",
  logoAlt: "Fedi Hmida logo",
  badge: "Project",
  title: "CallVerse",
  accent: "Four AI agents, one digital twin",
  hook: "You do not test a staffing strategy on real customers. You test it in a twin.",
  intro: "For our double-degree project between 3iL and ESPRIT, our team of five built CallVerse, a digital twin of a fictional retail bank's customer relation centre, where four AI agents work. I owned the backend and designed the AI service.",
  agentsTitle: "The Four Agents",
  agents: [
    { label: "Advisor:", text: "a LangGraph agent answers with six tools, including the bank's procedures (RAG on pgvector). The backend, never the agent, decides what is allowed." },
    { label: "Simulator:", text: "six customer profiles whose patience reacts to every reply." },
    { label: "Workforce manager:", text: "a PPO policy (reinforcement learning) recommends staffing moves. A supervisor decides." },
    { label: "Quality analyst:", text: "an LLM judge grades each conversation on six weighted criteria." },
  ],
  measuredTitle: "What We Measured",
  measured: [
    { label: "Twin:", text: "same simulated day, same customers (12 advisors, 8-hour day, seeds 7 and 8): at medium load, SLA 0.31 → 0.43 (FIFO → PPO), but abandonment 12.9% → 18.9%. The gain has a cost, so the policy stays advisory.", limit: false },
    { label: "Backend:", text: "Spring Boot in Clean Architecture, live STOMP events, 610 tests, 0 failures (19 Oct 2026).", limit: false },
    { label: "Safety:", text: 'personal data masked before any model call; "I want a human advisor" never depends on the model.', limit: false },
    { label: "Next:", text: "calibrating the quality judge against human reviewers.", limit: true },
  ],
  thanksTitle: "Thank You",
  thanks: [
    { name: "Mohamed Aziz Bellagha", role: "frontend", detail: "Thank you for leading the frontend that every role works in." },
    { name: "Doua Omrani", role: "advisor, simulator", detail: "Thank you for the Customer Advisor and the Client Simulator." },
    { name: "Ines Bendhifallah", role: "RL, quality", detail: "Thank you for the Workforce Manager and the Quality Analyst." },
    { name: "Rayen Souissi", role: "CI", detail: "Thank you for the CI pipeline." },
  ],
  twinAlt: "Digital twin runs compared by strategy: SLA, abandonment and mean wait for the medium-load day",
  quickInfo: {
    title: "Quick Info",
    rows: [
      { label: "Project", value: "CallVerse" },
      { label: "Programme", value: "Double degree, 3iL × ESPRIT" },
      { label: "Team", value: "5 students" },
      { label: "Built", value: "Sept - Oct 2026" },
      { label: "Published", value: "November 24, 2026 (portfolio)" },
      { label: "Author", value: "Fedi Hmida" },
    ],
  },
  caseStudyCta: "View the full case study",
  githubCta: "View on GitHub",
  connect: "Connect",
  linkedinAria: "Open Fedi Hmida LinkedIn profile",
};

export default news;
