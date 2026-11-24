// Actualité CampusFlow AI (actualité 22), en français. Même forme que news.en.js.
// Reprend la version française du post LinkedIn du 19 novembre 2026.
const news = {
  back: "Retour aux actualités",
  logoAlt: "Logo de Fedi Hmida",
  badge: "Projet",
  title: "CampusFlow AI",
  accent: "Un assistant multi-agents qui cite ses sources",
  hook: "Un assistant qui invente une date fait plus de mal qu'un assistant qui se tait.",
  intro: "Avec mon équipe, nous avons construit CampusFlow AI, un assistant Telegram multi-agents pour les étudiants d'ESPRIT, pour le cours d'Advanced Deep Learning. J'ai porté l'architecture et l'intégration. En image\u00a0: son orchestrateur n8n.",
  howTitle: "Le fonctionnement",
  how: [
    { label: "Routage\u00a0:", text: "un routeur local oriente chaque question vers la vision, le règlement, le calendrier ou l'administration, ou la refuse comme hors périmètre.", limit: false },
    { label: "Sources\u00a0:", text: "RAG sur 13 PDF (3 officiels, 10 fictifs), découpés par article, BGE-M3 + Qdrant, avec citations. Dates d'examen et contacts\u00a0: recherche exacte, jamais le LLM.", limit: false },
    { label: "Auto-correction\u00a0:", text: "le code vérifie chaque citation, date et e-mail. En cas d'échec\u00a0: une révision, puis «\u00a0non trouvé\u00a0» + le bon service.", limit: false },
    { label: "Hybride\u00a0:", text: "Qwen3 local (Ollama) + Gemini Flash-Lite, sous Docker. Réponses réglementaires\u00a0: 116\u2011148\u00a0s en tout local, un p90 de 18,7\u00a0s en hybride (de bout en bout, sur un portable sans GPU).", limit: false },
  ],
  measuredTitle: "Les chiffres",
  measured: [
    { label: "Recherche\u00a0:", text: "Hit@5 1,00, Recall@5 0,93 (T1, 22 questions répondables).", limit: false },
    { label: "Bout en bout\u00a0:", text: "53 questions rédigées par l'équipe, posées au vrai bot, une exécution par jeu, 100\u00a0% conformes au schéma JSON, relues à la main.", limit: false },
    { label: "Robustesse\u00a0:", text: "6/6 cas adverses, dont une injection de prompt cachée dans une photo.", limit: false },
    { label: "Limite\u00a0:", text: "les démarches en plusieurs étapes, 3/10.", limit: true },
  ],
  thanksTitle: "Merci",
  thanks: [
    { name: "Douaa Omrani", role: "RAG, évaluation", detail: "Merci pour la stratégie RAG et pour un banc d'essai de bout en bout qui nous a dit honnêtement où en était le bot." },
    { name: "Ines Bendhifallah", role: "prompts, vision", detail: "Merci pour les prompts Regulations et Vision, chaque version jugée sur une mesure plutôt que sur une impression." },
    { name: "Ghassen Fodha", role: "encadrant", detail: "Merci pour l'encadrement." },
  ],
  orchestratorAlt: "Orchestrateur n8n de CampusFlow AI\u00a0: routeur, refus hors périmètre, vision, RAG réglementaire avec contrôles et une révision, recherche dans le calendrier, recherches administratives et brouillon, sortie",
  quickInfo: {
    title: "En bref",
    rows: [
      { label: "Projet", value: "CampusFlow AI" },
      { label: "Cours", value: "Advanced Deep Learning, ESPRIT (5DS9)" },
      { label: "Équipe", value: "3 étudiants" },
      { label: "Réalisé", value: "24 oct. - 1er nov. 2026" },
      { label: "Publié", value: "19 novembre 2026 (LinkedIn)" },
      { label: "Auteur", value: "Fedi Hmida" },
    ],
  },
  caseStudyCta: "Voir l'étude de cas complète",
  githubCta: "Voir sur GitHub",
  connect: "Me suivre",
  linkedinAria: "Ouvrir le profil LinkedIn de Fedi Hmida",
};

export default news;
