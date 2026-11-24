// CallVerse case study, English. Same shape as caseStudy.fr.js (see contentParity.test.js).
// Every figure comes from the CallVerse repositories, with its condition:
// docs/integration/TWIN_FLOW.md, WORKFORCE_FLOW.md, ADVISOR_FLOW.md,
// HANDOFF_2026-10-19.md, ai-service/app/quality/rubric.py.
const caseStudy = {
  breadcrumb: { home: "Home", portfolio: "Portfolio", current: "CallVerse" },
  hero: {
    badge: "Multi-agent digital twin",
    title: "CallVerse",
    role: "Backend Owner & AI Architect",
    lead: "A working contact-centre platform for a fictional retail bank, where four AI agents operate - one answers customers, one plays them, one recommends staffing, one grades the conversations - and where a staffing strategy is tested in a digital twin before it would ever reach real customers. Built by a team of five for a double-degree project between 3iL and ESPRIT.",
    chips: ["Sept - Oct 2026", "3iL × ESPRIT", "Team of 5", "LangGraph / PPO / Groq", "Spring Boot / Next.js"],
    github: "View GitHub repository",
    back: "Back to Portfolio",
    coverAlt: 'CallVerse logo with the tagline "Chaque échange compte"',
  },
  metrics: [
    {
      label: "AI agents",
      value: "4",
      detail: "A LangGraph advisor with RAG and banking tools, a customer simulator, a PPO staffing policy and an LLM quality judge.",
    },
    {
      label: "Twin SLA, medium load",
      value: "0.31\u00a0→\u00a00.43",
      detail: "FIFO vs PPO on the same simulated day (12 advisors, 8-hour day, mean of seeds 7 and 8, SLA on all arrivals). The cost: abandonment 12.9% → 18.9%.",
    },
    {
      label: "Backend tests",
      value: "610",
      detail: "mvn verify, 0 failures, on a real PostgreSQL with Testcontainers (19 Oct 2026) - plus 285 AI-service tests.",
    },
    {
      label: "Accessibility",
      value: "100",
      detail: "Lighthouse accessibility on / and /login; 0 violations with axe 4.13 on 15 signed-in screens at two widths (Oct 2026).",
    },
  ],
  context: {
    title: "Context & Objective",
    intro: "A contact centre runs on a demand it cannot predict - Monday peaks, month-end waves, a sudden incident - with a fixed team.",
    body: "Trying a new staffing rule on real customers risks a bad day for everyone. CallVerse builds the centre twice: a real platform where customers, advisors, supervisors and admins work live, and a twin that replays a simulated day under any strategy. The same AI agents serve both. One rule held everywhere: the backend, never the agent, decides what the bank allows.",
  },
  role: {
    title: "My Role",
    intro: "I owned the backend and designed the AI service - the two places where four people's work becomes one system.",
    items: [
      "Owned the Spring Boot backend: Clean Architecture with CQRS slices, 27 entities, 89 REST endpoint mappings in 24 controllers, JWT and four roles, live STOMP events, queues with skill-based routing, SLAs and escalations; the backend suite runs 610 tests.",
      "Designed the AI service: one FastAPI host for the four agents, the shared Pydantic contracts frozen first, and the work split for the two AI developers.",
      "Integrated the agents with the platform: the advisor's tool calls through the backend, the twin runs, the quality grading, and the safety rules around them.",
      "Co-developed the Next.js frontend with its lead: accessibility, the landing and login redesign, the customer space and the staff dashboards.",
    ],
  },
  architecture: {
    title: "Architecture",
    intro: "Three codebases, one contract: the browser talks to Spring, Spring talks to the AI service, and the business rules never leave the backend.",
    // kind: "ai" = a model is involved; "core" = platform code.
    layers: [
      { name: "Next.js 15", tag: "Web", kind: "core", detail: "Four role spaces; REST for actions, STOMP for live queues, messages and alerts." },
      { name: "Spring Boot 3", tag: "Backend", kind: "core", detail: "Domain, use cases and adapters in layers that ArchUnit enforces; JWT, roles, Flyway on PostgreSQL with pgvector." },
      { name: "FastAPI", tag: "AI", kind: "ai", detail: "Hosts the four agents behind one key-protected API, with shared Pydantic contracts." },
      { name: "Groq", tag: "Models", kind: "ai", detail: "gpt-oss-120b and gpt-oss-20b; embeddings run locally." },
    ],
  },
  agents: {
    title: "The Four Agents",
    intro: "Each agent has one job, and none of them decides what the bank allows.",
    builtBy: "Built by",
    items: [
      { name: "Customer Advisor", builder: "Doua Omrani", detail: "A LangGraph tool loop: decide, call one of six tools - the knowledge base, the customer, transactions, system status, a case or a credit - decide again, then answer; four turns at most, the last one forced to conclude." },
      { name: "Client Simulator", builder: "Doua Omrani", detail: "Plays six customer profiles whose patience and satisfaction change with each reply." },
      { name: "Workforce Manager", builder: "Ines Bendhifallah", detail: "A PPO policy trained on a custom Gymnasium call-centre environment; recommends where to move an advisor." },
      { name: "Quality Analyst", builder: "Ines Bendhifallah", detail: "An LLM judge on six weighted criteria; Python computes the total and checks every citation." },
    ],
    note: "I designed the service that hosts them and its contracts, and integrated each agent with the platform.",
  },
  twin: {
    title: "The Digital Twin, Measured",
    intro: "A strategy is judged on the same simulated customers, not on a good day.",
    headers: { strategy: "Strategy", sla: "SLA", abandoned: "Abandoned", wait: "Wait" },
    // docs/integration/TWIN_FLOW.md: 12 advisors, 8-hour day, mean of seeds 7 and 8.
    loads: [
      {
        load: "Low load",
        rows: [
          { strategy: "FIFO", sla: "0.665", abandon: "1.0%", wait: "91\u00a0s", ppo: false },
          { strategy: "Threshold", sla: "0.680", abandon: "0.1%", wait: "71\u00a0s", ppo: false },
          { strategy: "PPO", sla: "0.698", abandon: "5.9%", wait: "103\u00a0s", ppo: true },
        ],
      },
      {
        load: "Medium load",
        rows: [
          { strategy: "FIFO", sla: "0.313", abandon: "12.9%", wait: "230\u00a0s", ppo: false },
          { strategy: "Threshold", sla: "0.270", abandon: "9.1%", wait: "210\u00a0s", ppo: false },
          { strategy: "PPO", sla: "0.426", abandon: "18.9%", wait: "201\u00a0s", ppo: true },
        ],
      },
    ],
    note: "SLA on all arrivals. 12 advisors, 8-hour day, mean of seeds 7 and 8: the same scenario and seed give the same customers to every strategy. At saturated load all strategies lose about 57% of contacts.",
    offline: "The offline evaluation agrees (5 synthetic 8-hour episodes per load, seeds 42\u201146, simulation, not live-bank performance): PPO gives the best SLA at every load, and more abandonment at low and medium load. That is why its output is advisory - a recommendation a supervisor reviews, never an automatic move.",
    figure: {
      alt: "Digital twin runs compared by strategy: SLA, abandonment and mean wait for the medium-load day",
      caption: "The medium-load day re-run locally for this page (seeds 7 and 8, demo data): the same figures, and the app's own warning to read SLA and abandonment together.",
    },
  },
  knowledge: {
    title: "Knowledge and Tools, Grounded",
    intro: "The advisor answers from the bank's own procedures.",
    body: "20 procedure articles in pgvector (HNSW), multilingual embeddings computed locally, the index refreshed in the background. Customer and transaction data come from backend tools, never from the model's memory. A tool budget stopped the advisor from escalating every refused card: about 6,960 tokens per message instead of 8,560 on that case (measured on Groq, 18 Oct 2026).",
  },
  safety: {
    title: "Safety by Design",
    items: [
      { title: "Personal data masked first", detail: "IBANs (mod-97 check), card numbers (Luhn), e-mails and phone numbers are masked before any model call; the database keeps the original." },
      { title: "The model cannot pick the customer", detail: "Customer and conversation ids are injected by the service, never chosen by the LLM - tested with an injection attempt." },
      { title: "A human, on request", detail: '"I want a human advisor" escalates deterministically, without the model; the first human reply stops the AI.' },
      { title: "Why this answer?", detail: "Each automatic reply keeps its decision, sources and tool checks, visible to staff only - a customer gets a 403." },
    ],
  },
  platform: {
    title: "The Platform",
    intro: "Four roles, live.",
    figures: {
      supervisor: { alt: "CallVerse supervisor overview with live queues per skill", caption: "Supervisor: live queues per skill, today's contacts and alerts." },
      advisor: { alt: "Advisor workstation: queues, chat and customer context", caption: "Advisor: inbox, conversation and the customer's context." },
      client: { alt: "Customer space: accounts, card and messages", caption: "Customer: accounts, a conversation in progress, help." },
    },
    demoNote: "Screenshots taken on demo data, run locally.",
    items: [
      "One live conversation per customer - four simultaneous opens give exactly one.",
      "Staff onboard a new customer in one transaction: login, profile, account with a valid IBAN, debit card.",
      "No card number, CVV or PIN stored - last four digits only, enforced by the database.",
    ],
  },
  quality: {
    title: "Engineering Quality",
    items: [
      "610 backend tests, 0 failures, on a real PostgreSQL with Testcontainers (mvn verify, 19 Oct 2026).",
      "285 AI-service tests, run by GitHub Actions on every change to the service; 95 frontend tests.",
      "7 ArchUnit rules that fail the build on a layer violation, each checked to fire before being trusted.",
      "0 violations with axe 4.13 on 15 signed-in screens at 1440 and 390 px; Lighthouse accessibility 100 on / and /login (Oct 2026).",
      "Audit phases P0 to P2 with a test for every fix - a quick second customer message went unanswered 9 times out of 10; after the dispatcher fix it was answered 10 out of 10 (tested with 50 conversations × 20 messages).",
    ],
  },
  limits: {
    title: "Limits",
    items: [
      "The staffing policy buys SLA with abandonment at low and medium load; it stays advisory.",
      "The quality judge is not yet calibrated against human reviewers - agreement (Cohen's kappa) is the next step, not a result.",
      "Free-tier model quotas allow about one AI turn per minute on gpt-oss-120b; a multi-chat demo needs a paid key.",
      "A course project run locally on demo data - not a live bank system, and not load-tested.",
    ],
  },
  team: {
    title: "Team",
    members: [
      { name: "Fedi Hmida", detail: "Backend, AI service architecture and integration, frontend co-development" },
      { name: "Mohamed Aziz Bellagha", detail: "Frontend lead" },
      { name: "Doua Omrani", detail: "Customer Advisor and Client Simulator" },
      { name: "Ines Bendhifallah", detail: "Workforce Manager (RL) and Quality Analyst" },
      { name: "Rayen Souissi", detail: "CI pipeline" },
    ],
  },
  learnings: {
    title: "What I Took Away",
    items: [
      "Freeze the contracts first. Four people built in parallel because the Pydantic and OpenAPI contracts came before the code.",
      "Keep the rules in the backend. The agent asks; the backend decides - credit ceilings, escalations, who sees what.",
      "Report the cost with the gain. The RL policy wins on SLA and loses on abandonment; showing both is what makes the result credible.",
    ],
  },
  stack: {
    title: "Stack",
    groups: [
      { group: "AI", items: ["LangGraph", "PPO (Stable-Baselines3)", "Gymnasium", "Groq gpt-oss", "sentence-transformers"] },
      { group: "Backend", items: ["Java 21", "Spring Boot 3", "Spring Security", "JWT", "STOMP / WebSocket", "Flyway", "OpenAPI"] },
      { group: "Data", items: ["PostgreSQL (Neon)", "pgvector"] },
      { group: "Frontend", items: ["Next.js 15", "React 19", "TypeScript", "Tailwind 4"] },
      { group: "Quality", items: ["JUnit 5", "Testcontainers", "ArchUnit", "pytest", "GitHub Actions", "axe", "Lighthouse"] },
    ],
  },
  explore: {
    title: "Explore the project",
    body: "Read the backend repository, the announcement, or return to the project list.",
    github: "GitHub",
    news: "Read the news",
    portfolio: "Portfolio",
  },
};

export default caseStudy;
