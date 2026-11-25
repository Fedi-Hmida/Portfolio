// Page d'accueil, français. Même forme que home.en.js (voir contentParity.test.js).
const home = {
  hero: {
    status: "Élève ingénieur, double diplôme 3iL\u00a0×\u00a0ESPRIT",
    focus: "Data Science & IA",
    location: "Limoges, France",
    headline: "Je construis des agents IA et les back-ends qui les font tourner.",
    lead: "Systèmes LLM multi-agents, services Spring Boot et FastAPI, et les tests qui les entourent. Chaque chiffre ici précise comment il a été mesuré.",
    availabilityTitle: "Disponible pour",
    availability: [
      { label: "Stage", detail: "4 mois, dès avril 2027" },
      { label: "Alternance", detail: "IA / génie logiciel, dès septembre 2027" },
    ],
    languages: {
      label: "Langues",
      items: [
        { name: "Anglais", level: "B2" },
        { name: "Français", level: "B2" },
      ],
    },
    cv: "Télécharger le CV (PDF)",
    email: "M'écrire",
    ledgerTitle: "Mesuré",
    ledger: [
      { value: "610", label: "tests back-end, 0 échec", source: "CallVerse, mvn verify sur PostgreSQL, 19 oct. 2026", projectId: 9 },
      { value: "2\u00a0072", label: "tests automatisés sur 11 modules", source: "SMART HRM AI, stage BNS Engineering", projectId: 7 },
      { value: "1,00", label: "Hit@5 sur 22 questions répondables", source: "CampusFlow AI, RAG découpé par article", projectId: 8 },
      { value: "92,9\u00a0%", label: "de précision en détection temps réel des dommages automobiles", source: "SmartClaim, stage ADDINN", projectId: 1 },
    ],
  },
  work: {
    title: "Projets choisis",
    intro: "Trois projets\u00a0: ce dont j'avais la charge, ce que nous avons mesuré, et ce que cela a coûté.",
    labels: {
      result: "Résultat",
      cost: "Compromis",
      limit: "Limite",
      caseStudy: "Lire l'étude de cas",
      code: "Code sur GitHub",
      allProjects: "Tous les projets",
    },
    items: [
      {
        id: 9,
        role: "Responsable back-end & architecte IA",
        meta: "Équipe de 5, projet double diplôme 3iL\u00a0×\u00a0ESPRIT, sept.–oct. 2026",
        what: "Un centre de relation client bancaire où travaillent quatre agents IA, et un jumeau numérique qui teste les stratégies d'effectifs avant qu'elles n'atteignent de vrais clients.",
        result: "SLA 0,31\u00a0→\u00a00,43 en charge moyenne, FIFO contre PPO sur la même journée simulée.",
        tradeoffKind: "cost",
        tradeoff: "Les abandons passent de 12,9\u00a0% à 18,9\u00a0%\u00a0: la politique reste une recommandation.",
      },
      {
        id: 7,
        role: "Co-responsable back-end & front-end",
        meta: "Équipe de 8 stagiaires, BNS Engineering, juillet–août 2026",
        what: "Plateforme RH interne\u00a0: une API Java 17 / Spring Boot et un client React 19 / TypeScript, sécurisés par OAuth2 / Keycloak.",
        result: "102 endpoints REST, 104 points de contrôle d'autorisation et 2\u00a0072 tests automatisés sur 11 modules.",
      },
      {
        id: 8,
        role: "Responsable technique, architecture & intégration",
        meta: "Équipe de 3, projet de cours ESPRIT",
        what: "Un assistant Telegram\u00a0: un orchestrateur n8n confie chaque question aux agents vision, règlement (RAG), calendrier ou administration.",
        result: "Hit@5 de 1,00 sur 22 questions répondables\u00a0; 6/6 cas adverses, dont une injection de prompt cachée dans une photo.",
        tradeoffKind: "limit",
        tradeoff: "Les démarches sont le point faible\u00a0: 3/10 entièrement correctes.",
      },
    ],
  },
  skills: {
    title: "Compétences, et où elles sont prouvées",
    intro: "Chaque ligne renvoie au projet qui la démontre.",
    columns: ["Compétence", "Prouvée dans"],
    rows: [
      {
        skill: "IA agentique & RAG",
        proofs: [
          { projectId: 9, evidence: "conseiller LangGraph avec RAG et six outils" },
          { projectId: 8, evidence: "Hit@5 de 1,00, réponses citées" },
          { projectId: 6, evidence: "agent d'irrigation avec validation humaine" },
        ],
      },
      {
        skill: "Back-end & sécurité",
        proofs: [
          { projectId: 7, evidence: "102 endpoints, OAuth2 / Keycloak" },
          { projectId: 9, evidence: "Clean Architecture, 7 règles ArchUnit" },
        ],
      },
      {
        skill: "Machine learning & évaluation",
        proofs: [
          { projectId: 5, evidence: "98,44\u00a0% de rappel sur les cas malins" },
          { projectId: 9, evidence: "PPO dans un environnement Gymnasium dédié" },
        ],
      },
      {
        skill: "Vision par ordinateur",
        proofs: [{ projectId: 1, evidence: "YOLOv8, 92,9\u00a0% de précision" }],
      },
      {
        skill: "Tests & accessibilité",
        proofs: [
          { projectId: 7, evidence: "2\u00a0072 tests automatisés" },
          { projectId: 9, evidence: "axe\u00a0: 0 violation sur 15 écrans" },
        ],
      },
      {
        skill: "Mobile",
        proofs: [
          { projectId: 2, evidence: "publiée sur l'App Store et le Play Store" },
          { projectId: 1, evidence: "application de sinistres Flutter" },
        ],
      },
    ],
  },
  experience: { title: "Expérience", more: "CV complet" },
  news: { title: "Actualités récentes", more: "Toutes les actualités" },
  contact: {
    title: "Vous construisez de l'IA agentique, des produits ML ou des plateformes back-end\u00a0?",
    body: "Je recherche un stage de 4 mois dès avril 2027 et une alternance dès septembre 2027, en France.",
    email: "M'écrire",
    cv: "Télécharger le CV (PDF)",
  },
};

export default home;
