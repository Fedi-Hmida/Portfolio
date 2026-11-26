// Étude de cas CallVerse, en français. Même forme que caseStudy.en.js (voir contentParity.test.js).
const caseStudy = {
  breadcrumb: { home: "Accueil", portfolio: "Portfolio", current: "CallVerse" },
  hero: {
    badge: "Jumeau numérique multi-agents",
    title: "CallVerse",
    role: "Responsable back\u2011end & architecte IA",
    lead: "Une plateforme de centre de relation client pour une banque de détail fictive, où travaillent quatre agents IA - l'un répond aux clients, un autre les incarne, un troisième recommande les effectifs, le dernier note les conversations - et où une stratégie d'effectifs se teste dans un jumeau numérique avant de jamais toucher de vrais clients. Réalisé à cinq pour un projet double diplôme entre 3iL et ESPRIT.",
    chips: ["Sept. - oct. 2026", "3iL × ESPRIT", "Équipe de 5", "LangGraph / PPO / Groq", "Spring Boot / Next.js"],
    github: "Voir le dépôt GitHub",
    back: "Retour au portfolio",
    coverAlt: "Logo CallVerse avec la signature «\u00a0Chaque échange compte\u00a0»",
  },
  metrics: [
    {
      label: "Agents IA",
      value: "4",
      detail: "Un conseiller LangGraph avec RAG et outils bancaires, un simulateur de clients, une politique d'effectifs PPO et un juge qualité LLM.",
    },
    {
      label: "SLA du jumeau, charge moyenne",
      value: "0,31\u00a0→\u00a00,43",
      detail: "FIFO contre PPO sur la même journée simulée (12 conseillers, journée de 8\u00a0h, moyenne des graines 7 et 8, SLA sur toutes les arrivées). Le coût\u00a0: les abandons passent de 12,9\u00a0% à 18,9\u00a0%.",
    },
    {
      label: "Tests back-end",
      value: "610",
      detail: "mvn verify, 0 échec, sur un vrai PostgreSQL avec Testcontainers (19 oct. 2026) - plus 285 tests du service IA.",
    },
    {
      label: "Accessibilité",
      value: "100",
      detail: "Lighthouse en accessibilité sur / et /login\u00a0; 0 violation avec axe 4.13 sur 15 écrans connectés, à deux largeurs (oct. 2026).",
    },
  ],
  context: {
    title: "Contexte et objectif",
    intro: "Un centre de relation client vit d'une demande qu'il ne peut pas prévoir - pics du lundi, vagues de fin de mois, incident soudain - avec une équipe fixe.",
    body: "Tester une nouvelle règle d'effectifs sur de vrais clients, c'est risquer une mauvaise journée pour tout le monde. CallVerse construit le centre deux fois\u00a0: une vraie plateforme où clients, conseillers, superviseurs et administrateurs travaillent en temps réel, et un jumeau qui rejoue une journée simulée sous n'importe quelle stratégie. Les mêmes agents IA servent les deux. Une règle tenue partout\u00a0: c'est le back-end, jamais l'agent, qui décide de ce que la banque autorise.",
  },
  role: {
    title: "Mon rôle",
    intro: "J'avais la charge du back-end et j'ai conçu le service IA - les deux endroits où le travail de quatre personnes devient un seul système.",
    items: [
      "Responsable du back-end Spring Boot\u00a0: Clean Architecture en tranches CQRS, 27 entités, 89 mappings REST dans 24 contrôleurs, JWT et quatre rôles, événements STOMP en temps réel, files avec routage par compétence, SLA et escalades\u00a0; la suite du back-end compte 610 tests.",
      "Conception du service IA\u00a0: un seul hôte FastAPI pour les quatre agents, des contrats Pydantic partagés figés en premier, et la répartition du travail entre les deux personnes chargées de l'IA.",
      "Intégration des agents à la plateforme\u00a0: les appels d'outils du conseiller via le back-end, les simulations du jumeau, la notation qualité et les règles de sécurité qui les encadrent.",
      "Co-développement du front-end Next.js avec son responsable\u00a0: accessibilité, refonte de l'accueil et de la connexion, espace client et tableaux de bord du personnel.",
    ],
  },
  architecture: {
    title: "Architecture",
    intro: "Trois bases de code, un seul contrat\u00a0: le navigateur parle à Spring, Spring parle au service IA, et les règles métier ne quittent jamais le back-end.",
    // kind: "ai" = un modèle intervient ; "core" = code de la plateforme.
    layers: [
      { name: "Next.js 15", tag: "Web", kind: "core", detail: "Quatre espaces par rôle\u00a0; REST pour les actions, STOMP pour les files, les messages et les alertes en temps réel." },
      { name: "Spring Boot 3", tag: "Back-end", kind: "core", detail: "Domaine, cas d'usage et adaptateurs en couches qu'ArchUnit fait respecter\u00a0; JWT, rôles, Flyway sur PostgreSQL avec pgvector." },
      { name: "FastAPI", tag: "IA", kind: "ai", detail: "Héberge les quatre agents derrière une API protégée par clé, avec des contrats Pydantic partagés." },
      { name: "Groq", tag: "Modèles", kind: "ai", detail: "gpt-oss-120b et gpt-oss-20b\u00a0; les embeddings sont calculés en local." },
    ],
  },
  agents: {
    title: "Les quatre agents",
    intro: "Chaque agent a une seule mission, et aucun ne décide de ce que la banque autorise.",
    builtBy: "Réalisé par",
    items: [
      { name: "Conseiller client", builder: "Doua Omrani", detail: "Une boucle d'outils LangGraph\u00a0: décider, appeler l'un de ses six outils - base documentaire, client, transactions, état du système, dossier ou crédit -, décider à nouveau, puis répondre\u00a0; quatre tours au plus, le dernier imposé pour conclure." },
      { name: "Simulateur de clients", builder: "Doua Omrani", detail: "Incarne six profils de clients dont la patience et la satisfaction évoluent à chaque réponse." },
      { name: "Gestionnaire d'effectifs", builder: "Ines Bendhifallah", detail: "Une politique PPO entraînée sur un environnement Gymnasium de centre d'appels conçu sur mesure\u00a0; elle recommande où déplacer un conseiller." },
      { name: "Analyste qualité", builder: "Ines Bendhifallah", detail: "Un juge LLM sur six critères pondérés\u00a0; Python calcule le total et vérifie chaque citation." },
    ],
    note: "J'ai conçu le service qui les héberge et ses contrats, et intégré chaque agent à la plateforme.",
  },
  twin: {
    title: "Le jumeau numérique, mesuré",
    intro: "Une stratégie se juge sur les mêmes clients simulés, pas sur une bonne journée.",
    headers: { strategy: "Stratégie", sla: "SLA", abandoned: "Abandons", wait: "Attente" },
    loads: [
      {
        load: "Charge faible",
        rows: [
          { strategy: "FIFO", sla: "0,665", abandon: "1,0\u00a0%", wait: "91\u00a0s", ppo: false },
          { strategy: "Seuil", sla: "0,680", abandon: "0,1\u00a0%", wait: "71\u00a0s", ppo: false },
          { strategy: "PPO", sla: "0,698", abandon: "5,9\u00a0%", wait: "103\u00a0s", ppo: true },
        ],
      },
      {
        load: "Charge moyenne",
        rows: [
          { strategy: "FIFO", sla: "0,313", abandon: "12,9\u00a0%", wait: "230\u00a0s", ppo: false },
          { strategy: "Seuil", sla: "0,270", abandon: "9,1\u00a0%", wait: "210\u00a0s", ppo: false },
          { strategy: "PPO", sla: "0,426", abandon: "18,9\u00a0%", wait: "201\u00a0s", ppo: true },
        ],
      },
    ],
    note: "SLA sur toutes les arrivées. 12 conseillers, journée de 8\u00a0h, moyenne des graines 7 et 8\u00a0: même scénario et même graine donnent les mêmes clients à chaque stratégie. En charge saturée, toutes les stratégies perdent environ 57\u00a0% des contacts.",
    offline: "L'évaluation hors ligne va dans le même sens (5 épisodes synthétiques de 8\u00a0h par charge, graines 42\u201146, en simulation, pas en conditions bancaires réelles)\u00a0: PPO donne le meilleur SLA à chaque charge, et davantage d'abandons en charge faible et moyenne. C'est pourquoi sa sortie reste une recommandation qu'un superviseur examine, jamais un déplacement automatique.",
    figure: {
      alt: "Simulations du jumeau comparées par stratégie\u00a0: SLA, abandons et attente moyenne pour la journée de charge moyenne",
      caption: "La journée de charge moyenne rejouée en local pour cette page (graines 7 et 8, données de démonstration)\u00a0: les mêmes chiffres, et l'avertissement de l'application elle-même, qui invite à lire SLA et abandons ensemble.",
    },
  },
  knowledge: {
    title: "Connaissances et outils, ancrés",
    intro: "Le conseiller répond à partir des procédures de la banque.",
    body: "20 articles de procédure dans pgvector (HNSW), des embeddings multilingues calculés en local, un index rafraîchi en arrière-plan. Les données client et les transactions viennent des outils du back-end, jamais de la mémoire du modèle. Un budget d'outils a empêché le conseiller d'escalader chaque carte refusée\u00a0: environ 6\u00a0960 jetons par message au lieu de 8\u00a0560 dans ce cas (mesuré sur Groq, 18 oct. 2026).",
  },
  safety: {
    title: "Sécurité par conception",
    items: [
      { title: "Données personnelles masquées d'abord", detail: "IBAN (contrôle mod-97), numéros de carte (Luhn), e-mails et numéros de téléphone sont masqués avant tout appel au modèle\u00a0; la base garde l'original." },
      { title: "Le modèle ne choisit pas le client", detail: "Les identifiants du client et de la conversation sont injectés par le service, jamais choisis par le LLM - testé avec une tentative d'injection." },
      { title: "Un humain, sur demande", detail: "«\u00a0Je veux un conseiller humain\u00a0» déclenche une escalade déterministe, sans le modèle\u00a0; la première réponse humaine arrête l'IA." },
      { title: "Pourquoi cette réponse\u00a0?", detail: "Chaque réponse automatique conserve sa décision, ses sources et ses vérifications d'outils, visibles du personnel seulement - un client reçoit un 403." },
    ],
  },
  platform: {
    title: "La plateforme",
    intro: "Quatre rôles, en temps réel.",
    figures: {
      supervisor: { alt: "Vue d'ensemble superviseur de CallVerse avec les files par compétence en temps réel", caption: "Superviseur\u00a0: files par compétence en temps réel, contacts du jour et alertes." },
      advisor: { alt: "Poste de travail conseiller\u00a0: files, conversation et contexte client", caption: "Conseiller\u00a0: boîte de réception, conversation et contexte du client." },
      client: { alt: "Espace client\u00a0: comptes, carte et messages", caption: "Client\u00a0: comptes, conversation en cours, aide." },
    },
    demoNote: "Captures prises sur des données de démonstration, en local.",
    items: [
      "Une seule conversation en cours par client - quatre ouvertures simultanées n'en créent qu'une.",
      "Le personnel ouvre un nouveau client en une seule transaction\u00a0: identifiant, profil, compte avec un IBAN valide, carte de débit.",
      "Aucun numéro de carte, CVV ou code PIN stocké - seulement les quatre derniers chiffres, imposé par la base.",
    ],
  },
  quality: {
    title: "Qualité d'ingénierie",
    items: [
      "610 tests back-end, 0 échec, sur un vrai PostgreSQL avec Testcontainers (mvn verify, 19 oct. 2026).",
      "285 tests du service IA, lancés par GitHub Actions à chaque modification du service\u00a0; 95 tests front-end.",
      "7 règles ArchUnit qui font échouer le build en cas de violation de couche, chacune vérifiée avant qu'on s'y fie.",
      "0 violation avec axe 4.13 sur 15 écrans connectés en 1440 et 390\u00a0px\u00a0; Lighthouse en accessibilité 100 sur / et /login (oct. 2026).",
      "Phases d'audit P0 à P2 avec un test pour chaque correctif - un second message client envoyé rapidement restait sans réponse 9 fois sur 10\u00a0; après le correctif du répartiteur, il obtenait une réponse 10 fois sur 10 (testé avec 50 conversations × 20 messages).",
    ],
  },
  limits: {
    title: "Limites",
    items: [
      "La politique d'effectifs achète du SLA au prix d'abandons en charge faible et moyenne\u00a0; elle reste une recommandation.",
      "Le juge qualité n'est pas encore calibré par rapport à des évaluations humaines - l'accord (kappa de Cohen) est la prochaine étape, pas un résultat.",
      "Les quotas gratuits des modèles permettent environ un tour IA par minute sur gpt-oss-120b\u00a0; une démo à plusieurs conversations demande une clé payante.",
      "Un projet de cours exécuté en local sur des données de démonstration - pas un système bancaire en service, et sans test de charge.",
    ],
  },
  team: {
    title: "Équipe",
    members: [
      { name: "Fedi Hmida", detail: "Back-end, architecture et intégration du service IA, co-développement du front-end" },
      { name: "Mohamed Aziz Bellagha", detail: "Responsable du front-end" },
      { name: "Doua Omrani", detail: "Conseiller client et simulateur de clients" },
      { name: "Ines Bendhifallah", detail: "Gestionnaire d'effectifs (RL) et analyste qualité" },
      { name: "Rayen Souissi", detail: "Pipeline CI" },
    ],
  },
  learnings: {
    title: "Ce que j'en retiens",
    items: [
      "Figer les contrats d'abord. Quatre personnes ont pu avancer en parallèle parce que les contrats Pydantic et OpenAPI sont arrivés avant le code.",
      "Garder les règles dans le back-end. L'agent demande, le back-end décide - plafonds de crédit, escalades, qui voit quoi.",
      "Montrer le coût avec le gain. La politique RL gagne sur le SLA et perd sur les abandons\u00a0; montrer les deux, c'est ce qui rend le résultat crédible.",
    ],
  },
  stack: {
    title: "Stack technique",
    groups: [
      { group: "IA", items: ["LangGraph", "PPO (Stable-Baselines3)", "Gymnasium", "Groq gpt-oss", "sentence-transformers"] },
      { group: "Back-end", items: ["Java 21", "Spring Boot 3", "Spring Security", "JWT", "STOMP / WebSocket", "Flyway", "OpenAPI"] },
      { group: "Données", items: ["PostgreSQL (Neon)", "pgvector"] },
      { group: "Front-end", items: ["Next.js 15", "React 19", "TypeScript", "Tailwind 4"] },
      { group: "Qualité", items: ["JUnit 5", "Testcontainers", "ArchUnit", "pytest", "GitHub Actions", "axe", "Lighthouse"] },
    ],
  },
  explore: {
    title: "Explorer le projet",
    body: "Consultez le dépôt du back-end, l'annonce, ou revenez à la liste des projets.",
    github: "GitHub",
    news: "Lire l'actualité",
    portfolio: "Portfolio",
  },
};

export default caseStudy;
