// Actualité CallVerse (actualité 23), en français. Même forme que news.en.js (voir contentParity.test.js).
// Reprend le post LinkedIn rédigé le 24 novembre 2026 ; les chiffres gardent leurs conditions.
const news = {
  back: "Retour aux actualités",
  logoAlt: "Logo de Fedi Hmida",
  badge: "Projet",
  title: "CallVerse",
  accent: "Quatre agents IA, un jumeau numérique",
  hook: "On ne teste pas une stratégie d'effectifs sur de vrais clients. On la teste dans un jumeau.",
  intro: "Pour notre projet double diplôme entre 3iL et ESPRIT, notre équipe de cinq a construit CallVerse, un jumeau numérique du centre de relation client d'une banque de détail fictive, où travaillent quatre agents IA. J'avais la charge du back-end et j'ai conçu le service IA.",
  agentsTitle: "Les quatre agents",
  agents: [
    { label: "Conseiller\u00a0:", text: "un agent LangGraph répond avec six outils, dont les procédures de la banque (RAG sur pgvector). C'est le back-end, jamais l'agent, qui décide de ce qui est permis." },
    { label: "Simulateur\u00a0:", text: "six profils de clients dont la patience réagit à chaque réponse." },
    { label: "Gestionnaire d'effectifs\u00a0:", text: "une politique PPO (apprentissage par renforcement) recommande des réaffectations. Un superviseur décide." },
    { label: "Analyste qualité\u00a0:", text: "un juge LLM note chaque conversation sur six critères pondérés." },
  ],
  measuredTitle: "Les chiffres",
  measured: [
    { label: "Jumeau\u00a0:", text: "même journée simulée, mêmes clients (12 conseillers, journée de 8\u00a0h, graines 7 et 8)\u00a0: en charge moyenne, SLA 0,31 → 0,43 (FIFO → PPO), mais abandons 12,9\u00a0% → 18,9\u00a0%. Le gain a un coût\u00a0: la politique reste une recommandation.", limit: false },
    { label: "Back-end\u00a0:", text: "Spring Boot en Clean Architecture, événements STOMP en temps réel, 610 tests au vert (0 échec, 19 octobre 2026).", limit: false },
    { label: "Sécurité\u00a0:", text: "données personnelles masquées avant tout appel au modèle\u00a0; «\u00a0Je veux un conseiller humain\u00a0» ne dépend jamais du modèle.", limit: false },
    { label: "Prochaine étape\u00a0:", text: "calibrer le juge qualité par rapport à des évaluations humaines.", limit: true },
  ],
  thanksTitle: "Merci",
  thanks: [
    { name: "Mohamed Aziz Bellagha", role: "front-end", detail: "Merci d'avoir mené le front-end dans lequel travaille chaque rôle." },
    { name: "Doua Omrani", role: "conseiller, simulateur", detail: "Merci pour le conseiller client et le simulateur de clients." },
    { name: "Ines Bendhifallah", role: "RL, qualité", detail: "Merci pour le gestionnaire d'effectifs et l'analyste qualité." },
    { name: "Rayen Souissi", role: "CI", detail: "Merci pour le pipeline CI." },
  ],
  twinAlt: "Simulations du jumeau comparées par stratégie\u00a0: SLA, abandons et attente moyenne pour la journée de charge moyenne",
  quickInfo: {
    title: "En bref",
    rows: [
      { label: "Projet", value: "CallVerse" },
      { label: "Programme", value: "Double diplôme, 3iL × ESPRIT" },
      { label: "Équipe", value: "5 étudiants" },
      { label: "Réalisé", value: "Sept. - oct. 2026" },
      { label: "Publié", value: "24 novembre 2026 (portfolio)" },
      { label: "Auteur", value: "Fedi Hmida" },
    ],
  },
  caseStudyCta: "Voir l'étude de cas complète",
  githubCta: "Voir sur GitHub",
  connect: "Me suivre",
  linkedinAria: "Ouvrir le profil LinkedIn de Fedi Hmida",
};

export default news;
