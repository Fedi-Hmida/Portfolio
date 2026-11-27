// CallVerse case study, English. Same shape as caseStudy.fr.js (see contentParity.test.js).
// Two phases. Every figure comes from the CallVerse repositories, with its condition:
// Phase 2 (Pi_5ieme/callverse-ai): reports/advisor.md, ppo.md, coupling.md, quality.md,
// models/ppo_steady_1000000_steps.zip, git history. Phase 1 (callverse-backend):
// docs/integration/TWIN_FLOW.md, WORKFORCE_FLOW.md, ADVISOR_FLOW.md, HANDOFF_2026-10-19.md.
const caseStudy = {
  breadcrumb: { home: "Home", portfolio: "Portfolio", current: "CallVerse" },
  hero: {
    badge: "Multi-agent digital twin",
    title: "CallVerse",
    role: "AI Lead & Backend Owner",
    lead: "A digital twin of a bank's contact centre where four AI agents work together: one answers customers, one plays them, one decides the staffing, one grades the conversations. I built the AI core in the second phase and owned the backend in the first.",
    chips: ["Sept - Nov 2026", "Phase 1: 3iL × ESPRIT, team of 5", "Phase 2: ESPRIT 5DS9, team of 3", "LangGraph / MaskablePPO / Qdrant", "FastAPI / Spring Boot / Next.js"],
    github: "View the phase 1 repository",
    back: "Back to Portfolio",
    coverAlt: 'CallVerse logo with the tagline "Chaque échange compte"',
  },
  metrics: [
    {
      label: "Abandonment, medium load",
      value: "6.13%\u00a0→\u00a01.18%",
      detail: "Served staffing policy vs fixed staffing, on the same 10 days it never saw: wait 43.1 s → 15.2 s, p = 0.002. The cost: +1,276 € per day.",
    },
    {
      label: "Retrieval Hit@5",
      value: "96.7%",
      detail: "On 30 held-out questions never used for tuning, with the expected queue given (80.0% without it). 100% of the 6 off-topic questions rejected.",
    },
    {
      label: "Conversation quality",
      value: "90.1/100",
      detail: "43 evaluations by a judge from another model family, 95% CI [86.5, 93.7], 0 unsupported claims. The one failure is reported as FAILED, never scored.",
    },
    {
      label: "Automated tests",
      value: "706",
      detail: "In the phase 2 AI service (pytest --collect-only); the model is replaced by a scripted fake. Plus 610 backend tests in phase 1.",
    },
  ],
  context: {
    title: "Context & Objective",
    intro: "A contact centre runs on a demand it cannot predict - Monday peaks, month-end waves, a sudden incident - with a fixed team.",
    body: "Trying a new staffing rule on real customers risks a bad day for everyone. CallVerse builds the centre in a computer twin first, where a strategy is tested on the same simulated customers before it would reach real ones. Phase 1 (Sept - Oct 2026) built the platform around four agents; phase 2 (29 Oct - 11 Nov 2026) rebuilt the AI core and measured how the agents affect each other. One rule held in both: the AI proposes, the bank's rules - written in code, never in prompts - decide.",
  },
  phase2: {
    title: "Phase 2 - The AI Core I Built",
    intro: "ESPRIT, class 5DS9, team of 3. I designed and built the four agents and the orchestration that makes them one system: 133 of the repository's 173 commits are mine.",
    items: [
      {
        name: "Customer Advisor",
        tag: "Agentic RAG",
        detail: "A LangGraph state machine of 7 nodes. The model reads the message and writes the reply; code decides the route, the identity check, the actions and the escalation - fraud always goes to the tools. 10 bank tools sit behind one guard: right conversation, verified identity, valid arguments, the customer's own account, the bank rule. A numbers guard rejects any amount the tools did not return.",
      },
      {
        name: "Workforce Manager",
        tag: "Reinforcement learning",
        detail: "MaskablePPO trained from scratch on a Gymnasium wrapper of the twin: every 5 simulated minutes it reads 34 numbers and picks 1 of 14 actions, impossible ones masked. A network of 34 → 128 → 128 and 43,919 parameters, about 1 million training steps. The first reward learned to save money instead of serving customers; I aligned it with the day score we report.",
      },
      {
        name: "Client Simulator & Quality Analyst",
        tag: "Integration",
        detail: "Code sets each customer's mood from the wait; the model only writes the words. The quality judge comes from another model family (Claude Haiku judging GPT): code checks that every quote exists in the transcript, and a broken bank rule caps compliance at 1 whatever the judge says.",
      },
      {
        name: "Orchestration",
        tag: "Code, not AI",
        detail: "Plain code routes typed events between the agents, so no agent imports another - a rule enforced by import-linter. Each conversation gets its own copy of the bank data; a full day runs the twin, the staffing policy and the indicators, and the same seed gives the same day.",
      },
    ],
    note: "Doua Omrani wrote the first version of the frontend and parts of the knowledge base; Ines Bendhifallah the first web backend, a Quality Analyst phase and the quality report. When both became unavailable on 8 Nov, I corrected and merged their work, keeping their authorship in git.",
  },
  ppo: {
    title: "The Staffing Policy, Measured",
    intro: "10 evaluation days the policy never saw, medium load, the same customers for every strategy.",
    headers: { strategy: "Strategy", wait: "Mean wait", p95: "P95 wait", abandon: "Abandoned", sla: "SLA met" },
    rows: [
      { strategy: "Fixed staffing", wait: "43.1\u00a0s", p95: "230\u00a0s", abandon: "6.13%", sla: "76.3%", ppo: false },
      { strategy: "Threshold rule", wait: "43.9\u00a0s", p95: "235\u00a0s", abandon: "5.67%", sla: "75.7%", ppo: false },
      { strategy: "All reinforcements", wait: "26.0\u00a0s", p95: "181\u00a0s", abandon: "3.65%", sla: "86.8%", ppo: false },
      { strategy: "PPO aligned (official)", wait: "16.1\u00a0s", p95: "101\u00a0s", abandon: "0.99%", sla: "86.0%", ppo: true },
      { strategy: "PPO steady (served)", wait: "15.2\u00a0s", p95: "100\u00a0s", abandon: "1.18%", sla: "88.7%", ppo: true },
    ],
    note: "Paired against fixed staffing on the same days (n = 10, p = 0.002 on each line): wait -27.8 s and abandonment -4.95 points at medium load, -40.9 s and -8.28 points on a saturated day - at about +1,276 € per day at medium load. Against calling every reinforcement, the served policy costs the same (+2 €, p = 0.81) with 1.34 points less abandonment at low load (p = 0.0039): it learned when and where to use them.",
    official: "The official result is the aligned policy, chosen by a rule fixed before the evaluation. The platform serves the steady one because it makes few, readable moves a supervisor can follow. Both sit in the same generated report.",
  },
  evidence: {
    title: "The Advisor and the Links, Measured",
    items: [
      "Retrieval with local embeddings: Hit@5 96.7% and MRR 0.721 on the 30 held-out questions; Recall@5 99.1% on the 38 development questions; search in 26 ms p50 and 45 ms p95.",
      "Code path: 100% correct tool sequences and 100% correct escalations on 20 scripted dialogues through the real Advisor and tool server - this tests the code, not the model.",
      "Coupling: the same 25 customers on 5 saturated days, staffing agent off then on - wait -70.4 s [-104.1, -36.7], abandonment 16% → 8%. Differences in tone and quality are not measurable at n = 25, and the report says so.",
      "Quality: 44 evaluations, 43 scored at 90.1/100, 1 reported as FAILED; 0 unsupported claims; compliance 5.00/5.",
    ],
  },
  phase1: {
    title: "Phase 1 - The Platform",
    intro: "Sept - Oct 2026, a double-degree project between 3iL and ESPRIT, team of 5: a working contact-centre platform where four AI agents ran live. I owned the backend and designed the AI service's integration; the agents of this phase were built by teammates.",
  },
  role: {
    title: "My Role in Phase 1",
    intro: "I owned the backend and designed the AI service - the two places where four people's work becomes one system.",
    items: [
      "Owned the Spring Boot backend: Clean Architecture with CQRS slices, 27 entities, 89 REST endpoint mappings, JWT and four roles, live STOMP events, queues with skill-based routing, SLAs and escalations; the backend suite runs 610 tests.",
      "Designed the AI service: one FastAPI host for the four agents, the shared Pydantic contracts frozen first, and the work split for the two AI developers.",
      "Integrated the agents with the platform and hardened them: ids taken from the request, never from the model; a deadline below the backend timeout; one escalation path; a tool budget for the advisor.",
      "Co-developed the Next.js frontend with its lead: accessibility, the landing and login redesign, the customer space and the staff dashboards.",
    ],
  },
  architecture: {
    title: "Phase 1 Architecture",
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
    title: "The Phase 1 Agents",
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
    title: "The Phase 1 Twin, Measured",
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
    offline: "In phase 1 the policy bought SLA with more abandonment at low and medium load, so its output stayed advisory - a recommendation a supervisor reviews. Phase 2 fixed this trade-off by aligning the reward with the day score.",
    figure: {
      alt: "Digital twin runs compared by strategy: SLA, abandonment and mean wait for the medium-load day",
      caption: "The phase 1 medium-load day re-run locally for this page (seeds 7 and 8, demo data): the same figures, and the app's own warning to read SLA and abandonment together.",
    },
  },
  knowledge: {
    title: "Phase 1 Knowledge and Tools",
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
    title: "The Phase 1 Platform",
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
      "Phase 2: 706 automated tests; 4 import-linter contracts keep the agents independent; fixed seed sets for training, tuning and a single evaluation; tables generated by a command, never typed.",
      "Phase 1: 610 backend tests, 0 failures, on a real PostgreSQL with Testcontainers (mvn verify, 19 Oct 2026); 285 AI-service tests and 95 frontend tests.",
      "Phase 1: 7 ArchUnit rules that fail the build on a layer violation, each checked to fire before being trusted.",
      "Phase 1: 0 violations with axe 4.13 on 15 signed-in screens at 1440 and 390 px; Lighthouse accessibility 100 on / and /login (Oct 2026).",
      "Phase 1 audit: a quick second customer message went unanswered 9 times out of 10; after the dispatcher fix it was answered 10 out of 10 (50 conversations × 20 messages).",
    ],
  },
  limits: {
    title: "Limits",
    items: [
      "The twin's parameters are provisional: the results show directions, not bank forecasts.",
      "The coupling experiment is small (25 customers): tone and quality differences are not measurable at that size.",
      "The held-out retrieval set is not a blind test - its author knew the article topics.",
      "No human quality labels yet, so no human-AI agreement (Cohen's kappa).",
      "The served policy is not the official one - deliberately, and both are reported.",
      "A course project run locally on fictitious data - not a live bank system.",
    ],
  },
  team: {
    title: "Team",
    members: [
      { name: "Fedi Hmida", detail: "Phase 2: the AI core and its orchestration, platform integration. Phase 1: backend, AI service architecture and integration, frontend co-development" },
      { name: "Doua Omrani", detail: "Phase 2: first frontend, parts of the knowledge base. Phase 1: Customer Advisor and Client Simulator" },
      { name: "Ines Bendhifallah", detail: "Phase 2: first web backend, a Quality Analyst phase, the quality report. Phase 1: Workforce Manager (RL) and Quality Analyst" },
      { name: "Mohamed Aziz Bellagha", detail: "Phase 1: frontend lead" },
      { name: "Rayen Souissi", detail: "Phase 1: CI pipeline" },
    ],
  },
  learnings: {
    title: "What I Took Away",
    items: [
      "Keep the decisions in code. The model writes and reads language; routes, identity, limits and escalations are functions that can be tested.",
      "Align the reward with what you report. A reward that counted cost learned to save money instead of serving customers.",
      "Freeze the contracts first. People build in parallel when the typed contracts come before the code.",
      "Report the cost with the gain. Better service costs about +1,276 € per day, and saying so is what makes the result credible.",
    ],
  },
  stack: {
    title: "Stack",
    groups: [
      { group: "AI", items: ["LangGraph", "MaskablePPO (sb3-contrib)", "Gymnasium", "GPT-4.1-mini", "Claude Haiku 4.5 (judge)", "sentence-transformers"] },
      { group: "Services", items: ["Python", "FastAPI", "Java 21", "Spring Boot 3", "Next.js", "STOMP / WebSocket"] },
      { group: "Data", items: ["PostgreSQL", "Qdrant", "pgvector"] },
      { group: "Quality", items: ["pytest", "import-linter", "JUnit 5", "Testcontainers", "ArchUnit", "axe", "Lighthouse"] },
    ],
  },
  explore: {
    title: "Explore the project",
    body: "Read the phase 1 backend repository, the announcement, or return to the project list.",
    github: "GitHub",
    news: "Read the news",
    portfolio: "Portfolio",
  },
};

export default caseStudy;
