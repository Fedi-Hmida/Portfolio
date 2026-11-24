// CampusFlow AI news (news 22), English. Same shape as news.fr.js (see contentParity.test.js).
// Mirrors the LinkedIn post of November 19, 2026; numbers keep their conditions.
const news = {
  back: "Back to News",
  logoAlt: "Fedi Hmida logo",
  badge: "Project",
  title: "CampusFlow AI",
  accent: "A multi-agent assistant that cites its sources",
  hook: "An assistant that invents a date does more harm than one that stays silent.",
  intro: "With my team, we built CampusFlow AI, a multi-agent Telegram assistant for ESPRIT students, for our Advanced Deep Learning course. I led the architecture and integration. Pictured: its n8n orchestrator.",
  howTitle: "How It Works",
  how: [
    { label: "Routing:", text: "a local router sends each question to vision, regulations, calendar or admin, or refuses it as out of scope.", limit: false },
    { label: "Grounding:", text: "RAG over 13 PDFs (3 official, 10 fictitious), chunked by article, BGE-M3 + Qdrant, with citations. Exam dates and contacts come from exact lookups, never from the LLM.", limit: false },
    { label: "Self-correction:", text: 'code checks every citation, date and e-mail. On failure: one revision, then "not found" + the right office.', limit: false },
    { label: "Hybrid models:", text: "local Qwen3 (Ollama) + Gemini Flash-Lite, in Docker. Regulation answers: 116\u2011148\u00a0s fully local, a p90 of 18.7\u00a0s in hybrid (end to end, CPU laptop).", limit: false },
  ],
  measuredTitle: "How We Measured It",
  measured: [
    { label: "Retrieval:", text: "Hit@5 1.00, Recall@5 0.93 (T1, 22 answerable questions).", limit: false },
    { label: "End-to-end:", text: "53 team-written questions on the real bot, one run per set, 100% schema-valid, reviewed by hand.", limit: false },
    { label: "Robustness:", text: "6/6 adversarial cases, including a prompt injection hidden in a photo.", limit: false },
    { label: "Known gap:", text: "multi-step procedures, 3/10.", limit: true },
  ],
  thanksTitle: "Thank You",
  thanks: [
    { name: "Douaa Omrani", role: "RAG, evaluation", detail: "Thank you for the RAG strategy and for an end-to-end harness that told us honestly where the bot stood." },
    { name: "Ines Bendhifallah", role: "prompts, vision", detail: "Thank you for the Regulations and Vision prompts, each version judged against a measurement rather than an impression." },
    { name: "Ghassen Fodha", role: "supervisor", detail: "Thank you for the guidance." },
  ],
  orchestratorAlt: "n8n orchestrator of CampusFlow AI: router, out-of-scope refusal, vision, regulations RAG with checks and one revision, calendar lookup, admin lookups and draft, output",
  quickInfo: {
    title: "Quick Info",
    rows: [
      { label: "Project", value: "CampusFlow AI" },
      { label: "Course", value: "Advanced Deep Learning, ESPRIT (5DS9)" },
      { label: "Team", value: "3 students" },
      { label: "Built", value: "24 Oct - 1 Nov 2026" },
      { label: "Published", value: "November 19, 2026 (LinkedIn)" },
      { label: "Author", value: "Fedi Hmida" },
    ],
  },
  caseStudyCta: "View the full case study",
  githubCta: "View on GitHub",
  connect: "Connect",
  linkedinAria: "Open Fedi Hmida LinkedIn profile",
};

export default news;
