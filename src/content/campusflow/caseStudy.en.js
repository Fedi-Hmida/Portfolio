// CampusFlow AI case study, English. Same shape as caseStudy.fr.js (see contentParity.test.js).
// Every figure comes from the CampusFlow AI repository, with its condition:
// report/section_evaluation.md, eval/retrieval/results_T1.md, report/section_prompts.md,
// report/section_multimodal.md.
const caseStudy = {
  breadcrumb: { home: "Home", portfolio: "Portfolio", current: "CampusFlow AI" },
  hero: {
    badge: "Multi-agent AI assistant",
    title: "CampusFlow AI",
    role: "Technical Lead - Architecture & Integration",
    lead: 'A Telegram assistant for ESPRIT students that answers with its source, takes dates and contacts from exact tables, reads photos of convocations - and says "not found" instead of inventing. Built by a team of three for the Advanced Deep Learning course.',
    chips: ["24 Oct - 1 Nov 2026", "ESPRIT, Advanced Deep Learning", "Team of 3", "n8n / Qdrant / Ollama / Gemini", "Telegram"],
    github: "View GitHub repository",
    back: "Back to Portfolio",
    coverAlt: "CampusFlow AI - Cited, exact, or not found",
  },
  metrics: [
    { label: "Retrieval Hit@5", value: "1.00", detail: "Recall@5 0.93 on the 22 answerable T1 questions, with article-level chunks and official documents first. Fixed windows with the same ordering reach 0.95." },
    { label: "End-to-end questions", value: "53", detail: "Team-written, one run per set through the real bot, every answer valid against the JSON contract and reviewed by hand: 22/25, 12/12, 6/6, and 3/10 on procedures." },
    { label: "Latency p90, hybrid", value: "18.7\u00a0s", detail: "Highest p90 across the four test sets, end to end on a CPU laptop - every question under the 90\u00a0s budget. Fully local, a regulation answer took 116\u2011148\u00a0s." },
    { label: "Adversarial cases", value: "6/6", detail: "Out of scope, missing information, false premise, missing study regime, a prompt injection hidden in a photo, and a request to send a message." },
  ],
  video: {
    badge: "Showcase film",
    title: "Demo Video",
    caption: "A 90-second film of the system: the problem, the orchestrator, a photo question answered with its citation, the measured results and our limit. Bot replies are real (run on 31 October); the chat window is recreated.",
    aria: "CampusFlow AI showcase film",
    fallback: "Your browser does not support the video tag.",
  },
  context: {
    title: "Context & Objective",
    intro: "To answer one administrative question, an ESPRIT student has to cross three sources: regulations that change with the study regime, an exam calendar and a directory of offices.",
    body: 'A plain LLM is the wrong tool here. Asked whether a missed exam can be retaken after an illness, the local model without retrieval answered "yes, you can" - unconditionally, with no source - while the day-course regulations do not accept a medical certificate for a final exam. The objective was an assistant that is right or says it does not know: every rule cited to its article, every date and e-mail taken from a table, and a referral to the right office when the information is missing.',
  },
  role: {
    title: "My Role",
    intro: "I owned the architecture and the integration - the part where three people's work becomes one system.",
    items: [
      "Designed the orchestrator-worker architecture and built the main assistant workflow in n8n (44 nodes): routing, specialists, composition and the checking loop.",
      "Set up the Docker infrastructure (n8n, Qdrant, Ollama, ngrok) with pinned versions and a one-command bootstrap.",
      "Built the data pipeline: 13 PDFs cleaned into the corpus, an exam calendar of 1,560 rows, a directory of 18 roles and a catalogue of 24 procedures, guarded by a validator that grew to 254 checks.",
      "Ran the chunking experiment (77 fixed windows vs 168 article chunks) and the latency measurements behind the hybrid design; took the Router from 47 to 52 exact intents on 57 questions, with out-of-scope recall from 0.75 to 1.00.",
      "Moved the workflow logic into tested JavaScript and generated the n8n workflows from it, so the deployed code is the tested code. Fixed the exam session being guessed: it now comes only from what the student wrote (calendar 9/12 → 12/12).",
      "Led the integration: reviewed both teammates' phases and fixed 12 scoring and 2 functional defects in the test harness, each with a test. 61 of the 69 commits are mine.",
    ],
  },
  architecture: {
    title: "Architecture",
    intro: "An orchestrator-worker graph: code where exactness matters, a model where judgement is needed.",
    orchestrator: {
      alt: "n8n orchestrator of CampusFlow AI: router, out-of-scope refusal, vision, regulations RAG with checks and one revision, calendar lookup, admin lookups and draft, output",
      caption: "The core assistant workflow in n8n - 44 nodes. Select the image to enlarge it.",
    },
    // kind: "ai" = a language model decides; "code" = deterministic.
    agents: [
      { name: "Router", tag: "AI", kind: "ai", engine: "Qwen3 4B, local", detail: "Reads the question and returns JSON: intents, entities, missing fields - or refuses it as out of scope before any cloud call." },
      { name: "Vision", tag: "AI", kind: "ai", engine: "Gemini Flash-Lite", detail: "Reads photos of convocations, notices and timetables into a fixed schema; what it reads is labelled as read from the photo." },
      { name: "Regulations", tag: "AI + retrieval", kind: "ai", engine: "Gemini Flash-Lite over Qdrant", detail: "RAG over the regulation corpus; the answer cites document, article and page." },
      { name: "Calendar", tag: "Code", kind: "code", engine: "exact lookup tool", detail: "Exact lookup in the exam table - no language model touches a date." },
      { name: "Admin", tag: "Code + AI", kind: "code", engine: "lookup tools, model for the draft only", detail: "Exact lookups for procedures and contacts; the model only writes the draft message, which the student sends themselves." },
      { name: "Composer", tag: "Code", kind: "code", engine: "deterministic merge", detail: "Merges the sections of a multi-topic answer; it cannot add a fact." },
      { name: "Critic", tag: "Code", kind: "code", engine: "checks.js", detail: "Checks every citation, date and e-mail against the sources. On failure: one revision with the exact failure list, then 'not found' and the right office." },
    ],
    map: {
      alt: "Map of the 10 n8n workflows generated from the exported JSON",
      caption: "10 workflows, 107 nodes, generated from the exported JSON.",
    },
  },
  retrieval: {
    title: "Retrieval, Measured",
    intro: "Chunking was chosen by measurement, not by default.",
    // eval/retrieval/results_T1.md: A = fixed 2,000-character windows, B = article chunks.
    rows: [
      { label: "Fixed windows, regime filter", value: "0.86", note: "8,843 characters of context", best: false },
      { label: "Article chunks, regime filter", value: "0.86", note: "Same hit rate with half the context: 4,145 characters", best: false },
      { label: "Fixed windows, official documents first", value: "0.95", note: "Recall@5 0.93, 9,351 characters of context", best: false },
      { label: "Article chunks, official documents first", value: "1.00", note: "Recall@5 0.93 with 5,297 characters - the configuration we kept", best: true },
    ],
    note: "Hit@5 on T1, 22 answerable questions. Putting official documents first brings most of the gain; article chunks add the last step with about 43% less context. Fixed windows keep a slightly better MRR (0.67 vs 0.63).",
    corpus: "The corpus: 13 PDFs - 3 official regulations and 10 fictitious procedures and guides written by the team, each labelled as fictitious - split into 168 article-level chunks with BGE-M3 embeddings (1,024 dimensions) in Qdrant. Retrieval filters by study regime and puts the official texts first, so an official rule always outranks a demonstration procedure.",
    figure: {
      alt: "Qdrant collections: 168 article chunks and 77 fixed windows, 1,024-dimension cosine",
      caption: "Both collections in Qdrant: 77 fixed windows and 168 article chunks.",
    },
  },
  photos: {
    title: "Reading Photos",
    intro: "A student can send a photo of a convocation instead of typing.",
    body: "The Vision prompt went through five versions, from 71 to 88 of 88 correct fields on 11 test photos (schema-valid 11/11, single run). The bot answers with the rule and with what it read - date, room, module - labelled as read from the photo. A photo with no question is never refused: the bot says what it read and asks what the student wants to know.",
    figure: { alt: "Fictitious tilted retake convocation used as a test photo", caption: "Fictitious test document." },
  },
  safety: {
    title: "Safety by Design",
    items: [
      { title: "Prompt injection in a photo", detail: "A sticky note on a convocation tells the assistant to ignore its rules; the bot flags the text and ignores it." },
      { title: "Out of scope, refused early", detail: "Personal-data requests such as grades or absences are refused by the local router before any cloud call." },
      { title: "No student identifier leaves the laptop", detail: "The cloud model receives the question, public or fictitious excerpts and photos - never the Telegram id, the chat id, a name or the logs." },
      { title: "Drafts, never sent", detail: "Request drafts are for the student to send; the bot never claims to have sent anything." },
    ],
    photo: { alt: "Fictitious convocation with a sticky note carrying a prompt injection", caption: "The test photo: the note tells the assistant to ignore its rules." },
    reply: { alt: "The bot flags and ignores an instruction written on a photo", caption: "The bot's real reply: the instruction is flagged and ignored." },
  },
  hybrid: {
    title: "The Hybrid Decision",
    intro: "Fully local was the plan. The measurement said no.",
    body: "On a CPU laptop, a regulation answer took 116\u2011148\u00a0s end to end against a 90\u00a0s budget. We kept the router, the lookups, the embeddings and the checks local and moved the two long-writing agents and vision to Gemini Flash-Lite: a p90 of at most 18.7\u00a0s, every question under budget. One setting moves the text agents back to the local model.",
  },
  evaluation: {
    title: "Evaluation",
    intro: "53 team-written questions through the real bot, one run per set, every answer checked against a JSON contract and reviewed by hand.",
    rows: [
      { set: "T1", name: "Regulations", note: "Final set, run once", score: "22/25", limit: false },
      { set: "T2", name: "Calendar", note: "9/12 before one documented fix", score: "12/12", limit: false },
      { set: "T3", name: "Contacts & procedures", note: "Right office 7 times out of 10, procedure details often missing", score: "3/10", limit: true },
      { set: "T5", name: "Robustness", note: "Including a prompt injection in a photo", score: "6/6", limit: false },
    ],
    limitLabel: "our limit",
    notes: [
      "Prompt iterations, measured on development sets: the Router went from 47 to 52 exact intents on 57 synthetic questions; the Regulations prompt from 22 to 11 'not found' answers on 32 questions.",
      "We tested the test harness too: 12 scoring defects and 2 functional defects, each fixed with a test built from the real answer it had misjudged.",
      "69 unit tests and 254 reproducibility checks pass (sources, links, no secrets, fictitious labels, test-set leaks).",
    ],
  },
  limits: {
    title: "Limits",
    items: [
      "Procedures are the weak spot: the right office 7 times out of 10, but often without the documents and deadlines - 3/10 fully correct.",
      "Deterministic checks verify citations and figures, not meaning: a correctly cited but mis-paraphrased rule would pass.",
      "A course demo on one laptop, evaluated on team-written questions - not real student traffic.",
    ],
  },
  team: {
    title: "Team",
    members: [
      { name: "Fedi Hmida", detail: "Architecture, assistant workflow, Docker infrastructure, data pipeline, integration and reviews" },
      { name: "Douaa Omrani", detail: "RAG strategy, end-to-end test harness, evaluation" },
      { name: "Ines Bendhifallah", detail: "Regulations and Vision prompts, multimodal part" },
    ],
    supervisor: "Supervised by Ghassen Fodha, ESPRIT (class 5DS9, 2026-2027).",
  },
  learnings: {
    title: "What I Took Away",
    items: [
      "Put code where the answer must be exact. Dates and e-mails never go through a model, so they cannot be invented.",
      "Measure before choosing. The hybrid design came from an end-to-end latency number, not from a preference.",
      "A benchmark needs its own tests. Our first harness had 12 scoring defects that made answers look better or worse than they were.",
    ],
  },
  stack: {
    title: "Stack",
    groups: [
      { group: "Orchestration", items: ["n8n", "Telegram Bot API", "ngrok"] },
      { group: "Models", items: ["Qwen3 4B (Ollama)", "Gemini Flash-Lite", "BGE-M3"] },
      { group: "Retrieval", items: ["Qdrant", "Article-level chunking", "Metadata filters"] },
      { group: "Engineering", items: ["Docker Compose", "JavaScript (node:test)", "Python", "JSON Schema"] },
      { group: "Evaluation", items: ["Hit@5 / Recall@5 / MRR", "End-to-end harness", "Human review"] },
    ],
  },
  explore: {
    title: "Explore the project",
    body: "Read the source repository, the announcement, or return to the project list.",
    github: "GitHub",
    news: "Read the news",
    portfolio: "Portfolio",
  },
};

export default caseStudy;
