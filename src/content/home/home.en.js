// Home page, English. Same shape as home.fr.js (see contentParity.test.js).
// Every figure is already published elsewhere on the site: about.careerFocus,
// projects.* and resume.experiences in the locale files, and the CallVerse,
// SMART HRM AI, CampusFlow AI, Sahitna Safe and SmartClaim case studies.
// Language levels were supplied by Fedi (English B2, French B2).
// `projectId` values point at src/data/projects.js.
const home = {
  hero: {
    status: "Engineering student, 3iL\u00a0×\u00a0ESPRIT double degree",
    focus: "Data Science & AI",
    location: "Limoges, France",
    headline: "I build AI agents and the backends they run on.",
    lead: "Multi-agent LLM systems, Spring Boot and FastAPI services, and the tests around them. Every number here says how it was measured.",
    availabilityTitle: "Available for",
    availability: [
      { label: "Internship", detail: "4 to 6 months, from April 2027" },
      { label: "Alternance", detail: "AI / software engineering, from September 2027" },
    ],
    languages: {
      label: "Languages",
      items: [
        { name: "English", level: "B2" },
        { name: "French", level: "B2" },
      ],
    },
    cv: "Download CV (PDF)",
    email: "Email me",
    ledgerTitle: "Measured",
    ledger: [
      { value: "1.18%", label: "abandonment at medium load, down from 6.13%", source: "CallVerse, PPO vs fixed staffing, 10 unseen days", projectId: 9 },
      { value: "2,072", label: "automated tests across 11 modules", source: "SMART HRM AI, BNS Engineering internship", projectId: 7 },
      { value: "1.00", label: "Hit@5 on 22 answerable questions", source: "CampusFlow AI, article-level RAG", projectId: 8 },
      { value: "92.9%", label: "precision on real-time car damage detection", source: "SmartClaim, ADDINN internship", projectId: 1 },
    ],
  },
  work: {
    title: "Selected work",
    intro: "Three projects, with what I owned, what we measured, and what it cost.",
    labels: {
      result: "Result",
      cost: "Trade-off",
      limit: "Limit",
      caseStudy: "Read the case study",
      code: "Code on GitHub",
      allProjects: "All projects",
    },
    items: [
      {
        id: 9,
        role: "AI lead & backend owner",
        meta: "ESPRIT, team of 3, Oct–Nov 2026, after a 3iL\u00a0×\u00a0ESPRIT platform phase (team of 5)",
        what: "A bank contact centre where four AI agents work together, tested in a digital twin. I built the AI core: the advisor, the staffing policy and the orchestration.",
        result: "Abandonment 6.13%\u00a0→\u00a01.18% at medium load, PPO vs fixed staffing on the same 10 unseen days (p = 0.002).",
        tradeoffKind: "cost",
        tradeoff: "About +1,276 € per day of extra staffing cost at medium load.",
      },
      {
        id: 7,
        role: "Back-end & front-end co-lead",
        meta: "8-intern team, BNS Engineering, July–August 2026",
        what: "Internal HR platform: a Java 17 / Spring Boot API and a React 19 / TypeScript client, secured with OAuth2 / Keycloak.",
        result: "102 REST endpoints, 104 authorization gates and 2,072 automated tests across 11 modules.",
      },
      {
        id: 8,
        role: "Technical lead, architecture & integration",
        meta: "Team of 3, ESPRIT course project",
        what: "A Telegram assistant: an n8n orchestrator routes each question to vision, regulations RAG, calendar or admin agents.",
        result: "Hit@5 of 1.00 on 22 answerable questions; 6/6 adversarial cases, including a prompt injection hidden in a photo.",
        tradeoffKind: "limit",
        tradeoff: "Procedures are the weak spot: 3/10 fully correct.",
      },
    ],
  },
  skills: {
    title: "Skills, and where they are proven",
    intro: "Each line points to the project that shows it.",
    columns: ["Skill", "Proven in"],
    rows: [
      {
        skill: "Agentic AI & RAG",
        proofs: [
          { projectId: 9, evidence: "LangGraph advisor with 10 bank tools behind a guard" },
          { projectId: 8, evidence: "Hit@5 of 1.00, cited answers" },
          { projectId: 6, evidence: "irrigation agent with human approval" },
        ],
      },
      {
        skill: "Back-end & security",
        proofs: [
          { projectId: 7, evidence: "102 endpoints, OAuth2 / Keycloak" },
          { projectId: 9, evidence: "Clean Architecture, 7 ArchUnit rules" },
        ],
      },
      {
        skill: "Machine learning & evaluation",
        proofs: [
          { projectId: 5, evidence: "98.44% malignant recall" },
          { projectId: 9, evidence: "MaskablePPO trained from scratch in a Gymnasium twin" },
        ],
      },
      {
        skill: "Computer vision",
        proofs: [{ projectId: 1, evidence: "YOLOv8, 92.9% precision" }],
      },
      {
        skill: "Testing & accessibility",
        proofs: [
          { projectId: 7, evidence: "2,072 automated tests" },
          { projectId: 9, evidence: "axe: 0 violations on 15 screens" },
        ],
      },
      {
        skill: "Mobile",
        proofs: [
          { projectId: 2, evidence: "shipped to the App Store and Play Store" },
          { projectId: 1, evidence: "Flutter claims app" },
        ],
      },
    ],
  },
  experience: { title: "Experience", more: "Full resume" },
  news: { title: "Recent news", more: "All news" },
  contact: {
    title: "Building agentic AI, ML products or back-end platforms?",
    body: "I'm looking for a 4- to 6-month internship from April 2027 and an alternance from September 2027, in France.",
    email: "Email me",
    cv: "Download CV (PDF)",
  },
};

export default home;
