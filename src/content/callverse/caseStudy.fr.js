// Étude de cas CallVerse, en français. Même forme que caseStudy.en.js (voir contentParity.test.js).
const caseStudy = {
  breadcrumb: { home: "Accueil", portfolio: "Portfolio", current: "CallVerse" },
  hero: {
    badge: "Jumeau numérique multi-agents",
    title: "CallVerse",
    role: "Responsable IA & back\u2011end",
    lead: "Le jumeau numérique du centre de relation client d'une banque, où quatre agents IA travaillent ensemble\u00a0: l'un répond aux clients, un autre les incarne, un troisième décide des effectifs, le dernier note les conversations. J'ai construit le cœur IA dans la deuxième phase et j'étais responsable du back-end dans la première.",
    chips: ["Sept. - nov. 2026", "Phase 1\u00a0: 3iL × ESPRIT, équipe de 5", "Phase 2\u00a0: ESPRIT 5DS9, équipe de 3", "LangGraph / MaskablePPO / Qdrant", "FastAPI / Spring Boot / Next.js"],
    github: "Voir le dépôt de la phase 1",
    back: "Retour au portfolio",
    coverAlt: "Logo CallVerse avec la signature «\u00a0Chaque échange compte\u00a0»",
  },
  metrics: [
    {
      label: "Abandons, charge moyenne",
      value: "6,13\u00a0%\u00a0→\u00a01,18\u00a0%",
      detail: "Politique d'effectifs servie contre effectifs fixes, sur les 10 mêmes journées qu'elle n'avait jamais vues\u00a0: attente 43,1\u00a0s → 15,2\u00a0s, p\u00a0=\u00a00,002. Le coût\u00a0: +1\u00a0276\u00a0€ par jour.",
    },
    {
      label: "Recherche Hit@5",
      value: "96,7\u00a0%",
      detail: "Sur 30 questions de test jamais utilisées pour le réglage, avec la file attendue fournie (80,0\u00a0% sans elle). 100\u00a0% des 6 questions hors sujet rejetées.",
    },
    {
      label: "Qualité des conversations",
      value: "90,1/100",
      detail: "43 évaluations par un juge d'une autre famille de modèles, IC à 95\u00a0% [86,5\u00a0; 93,7], 0 affirmation non étayée. L'unique échec est signalé FAILED, jamais noté.",
    },
    {
      label: "Tests automatisés",
      value: "706",
      detail: "Dans le service IA de la phase 2 (pytest --collect-only)\u00a0; le modèle y est remplacé par un faux scripté. Plus 610 tests back-end en phase 1.",
    },
  ],
  context: {
    title: "Contexte et objectif",
    intro: "Un centre de relation client vit d'une demande qu'il ne peut pas prévoir - pics du lundi, vagues de fin de mois, incident soudain - avec une équipe fixe.",
    body: "Tester une nouvelle règle d'effectifs sur de vrais clients, c'est risquer une mauvaise journée pour tout le monde. CallVerse construit d'abord le centre dans un jumeau informatique, où une stratégie se teste sur les mêmes clients simulés avant d'en toucher de vrais. La phase 1 (sept. - oct. 2026) a construit la plateforme autour de quatre agents\u00a0; la phase 2 (29 oct. - 11 nov. 2026) a reconstruit le cœur IA et mesuré l'effet des agents les uns sur les autres. Une règle tenue dans les deux\u00a0: l'IA propose, les règles de la banque - écrites dans le code, jamais dans les prompts - décident.",
  },
  phase2: {
    title: "Phase 2 - Le cœur IA que j'ai construit",
    intro: "ESPRIT, classe 5DS9, équipe de 3. J'ai conçu et construit les quatre agents et l'orchestration qui en fait un seul système\u00a0: 133 des 173 commits du dépôt sont les miens.",
    items: [
      {
        name: "Conseiller client",
        tag: "RAG agentique",
        detail: "Une machine à états LangGraph de 7 nœuds. Le modèle lit le message et rédige la réponse\u00a0; le code décide de l'aiguillage, de la vérification d'identité, des actions et de l'escalade - la fraude passe toujours par les outils. 10 outils bancaires derrière une seule garde\u00a0: bonne conversation, identité vérifiée, arguments valides, compte du client lui-même, règle de la banque. Une garde sur les chiffres rejette tout montant que les outils n'ont pas renvoyé.",
      },
      {
        name: "Gestionnaire d'effectifs",
        tag: "Apprentissage par renforcement",
        detail: "MaskablePPO entraîné de zéro sur une enveloppe Gymnasium du jumeau\u00a0: toutes les 5 minutes simulées, il lit 34 nombres et choisit 1 action parmi 14, les impossibles étant masquées. Un réseau 34 → 128 → 128 de 43\u00a0919 paramètres, environ 1 million de pas d'entraînement. La première récompense a appris à économiser au lieu de servir les clients\u00a0; je l'ai alignée sur le score de journée que nous publions.",
      },
      {
        name: "Simulateur de clients & analyste qualité",
        tag: "Intégration",
        detail: "Le code fixe l'humeur de chaque client à partir de l'attente\u00a0; le modèle n'écrit que les mots. Le juge qualité vient d'une autre famille de modèles (Claude Haiku juge GPT)\u00a0: le code vérifie que chaque citation existe dans la transcription, et une règle bancaire enfreinte plafonne la conformité à 1, quoi qu'en dise le juge.",
      },
      {
        name: "Orchestration",
        tag: "Du code, pas de l'IA",
        detail: "Du code simple achemine des événements typés entre les agents, si bien qu'aucun agent n'en importe un autre - une règle imposée par import-linter. Chaque conversation a sa propre copie des données bancaires\u00a0; une journée complète fait tourner le jumeau, la politique d'effectifs et les indicateurs, et la même graine redonne la même journée.",
      },
    ],
    note: "Doua Omrani a écrit la première version du front-end et une partie de la base de connaissances\u00a0; Ines Bendhifallah le premier back-end web, une phase de l'analyste qualité et le rapport qualité. Quand toutes deux sont devenues indisponibles le 8 nov., j'ai corrigé et fusionné leur travail en conservant leur paternité dans git.",
  },
  ppo: {
    title: "La politique d'effectifs, mesurée",
    intro: "10 journées d'évaluation que la politique n'avait jamais vues, en charge moyenne, avec les mêmes clients pour chaque stratégie.",
    headers: { strategy: "Stratégie", wait: "Attente moyenne", p95: "Attente P95", abandon: "Abandons", sla: "SLA respecté" },
    rows: [
      { strategy: "Effectifs fixes", wait: "43,1\u00a0s", p95: "230\u00a0s", abandon: "6,13\u00a0%", sla: "76,3\u00a0%", ppo: false },
      { strategy: "Règle à seuil", wait: "43,9\u00a0s", p95: "235\u00a0s", abandon: "5,67\u00a0%", sla: "75,7\u00a0%", ppo: false },
      { strategy: "Tous les renforts", wait: "26,0\u00a0s", p95: "181\u00a0s", abandon: "3,65\u00a0%", sla: "86,8\u00a0%", ppo: false },
      { strategy: "PPO aligné (officiel)", wait: "16,1\u00a0s", p95: "101\u00a0s", abandon: "0,99\u00a0%", sla: "86,0\u00a0%", ppo: true },
      { strategy: "PPO stable (servi)", wait: "15,2\u00a0s", p95: "100\u00a0s", abandon: "1,18\u00a0%", sla: "88,7\u00a0%", ppo: true },
    ],
    note: "Comparé aux effectifs fixes sur les mêmes journées (n\u00a0=\u00a010, p\u00a0=\u00a00,002 sur chaque ligne)\u00a0: attente -27,8\u00a0s et abandons -4,95 points en charge moyenne, -40,9\u00a0s et -8,28 points sur une journée saturée - pour environ +1\u00a0276\u00a0€ par jour en charge moyenne. Face à l'appel de tous les renforts, la politique servie coûte autant (+2\u00a0€, p\u00a0=\u00a00,81) avec 1,34 point d'abandons de moins en charge faible (p\u00a0=\u00a00,0039)\u00a0: elle a appris quand et où les utiliser.",
    official: "Le résultat officiel est la politique alignée, choisie par une règle fixée avant l'évaluation. La plateforme sert la politique stable, parce qu'elle fait peu de mouvements, lisibles, qu'un superviseur peut suivre. Les deux figurent dans le même rapport généré.",
  },
  evidence: {
    title: "Le conseiller et les liens, mesurés",
    items: [
      "Recherche avec des embeddings locaux\u00a0: Hit@5 96,7\u00a0% et MRR 0,721 sur les 30 questions de test\u00a0; Recall@5 99,1\u00a0% sur les 38 questions de développement\u00a0; recherche en 26\u00a0ms au p50 et 45\u00a0ms au p95.",
      "Chemin du code\u00a0: 100\u00a0% de séquences d'outils correctes et 100\u00a0% d'escalades correctes sur 20 dialogues scriptés passant par le vrai conseiller et le vrai serveur d'outils - cela teste le code, pas le modèle.",
      "Couplage\u00a0: les 25 mêmes clients sur 5 journées saturées, agent d'effectifs coupé puis activé - attente -70,4\u00a0s [-104,1\u00a0; -36,7], abandons 16\u00a0% → 8\u00a0%. Les écarts de ton et de qualité ne sont pas mesurables à n\u00a0=\u00a025, et le rapport le dit.",
      "Qualité\u00a0: 44 évaluations, 43 notées à 90,1/100, 1 signalée FAILED\u00a0; 0 affirmation non étayée\u00a0; conformité 5,00/5.",
    ],
  },
  phase1: {
    title: "Phase 1 - La plateforme",
    intro: "Sept. - oct. 2026, un projet double diplôme entre 3iL et ESPRIT, équipe de 5\u00a0: une vraie plateforme de centre de relation client où quatre agents IA tournaient en temps réel. J'étais responsable du back-end et j'ai conçu l'intégration du service IA\u00a0; les agents de cette phase ont été construits par des coéquipiers.",
  },
  role: {
    title: "Mon rôle en phase 1",
    intro: "J'avais la charge du back-end et j'ai conçu le service IA - les deux endroits où le travail de quatre personnes devient un seul système.",
    items: [
      "Responsable du back-end Spring Boot\u00a0: Clean Architecture en tranches CQRS, 27 entités, 89 mappings REST, JWT et quatre rôles, événements STOMP en temps réel, files avec routage par compétence, SLA et escalades\u00a0; la suite du back-end compte 610 tests.",
      "Conception du service IA\u00a0: un seul hôte FastAPI pour les quatre agents, des contrats Pydantic partagés figés en premier, et la répartition du travail entre les deux personnes chargées de l'IA.",
      "Intégration et fiabilisation des agents\u00a0: identifiants pris dans la requête, jamais dans le modèle\u00a0; un délai inférieur à celui du back-end\u00a0; une seule voie d'escalade\u00a0; un budget d'outils pour le conseiller.",
      "Co-développement du front-end Next.js avec son responsable\u00a0: accessibilité, refonte de l'accueil et de la connexion, espace client et tableaux de bord du personnel.",
    ],
  },
  architecture: {
    title: "Architecture de la phase 1",
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
    title: "Les agents de la phase 1",
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
    title: "Le jumeau de la phase 1, mesuré",
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
    offline: "En phase 1, la politique achetait du SLA au prix de davantage d'abandons en charge faible et moyenne, si bien que sa sortie restait une recommandation qu'un superviseur examine. La phase 2 a levé ce compromis en alignant la récompense sur le score de journée.",
    figure: {
      alt: "Simulations du jumeau comparées par stratégie\u00a0: SLA, abandons et attente moyenne pour la journée de charge moyenne",
      caption: "La journée de charge moyenne de la phase 1 rejouée en local pour cette page (graines 7 et 8, données de démonstration)\u00a0: les mêmes chiffres, et l'avertissement de l'application elle-même, qui invite à lire SLA et abandons ensemble.",
    },
  },
  knowledge: {
    title: "Connaissances et outils de la phase 1",
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
    title: "La plateforme de la phase 1",
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
      "Phase 2\u00a0: 706 tests automatisés\u00a0; 4 contrats import-linter gardent les agents indépendants\u00a0; des jeux de graines séparés pour l'entraînement, le réglage et une évaluation unique\u00a0; des tableaux générés par une commande, jamais saisis à la main.",
      "Phase 1\u00a0: 610 tests back-end, 0 échec, sur un vrai PostgreSQL avec Testcontainers (mvn verify, 19 oct. 2026)\u00a0; 285 tests du service IA et 95 tests front-end.",
      "Phase 1\u00a0: 7 règles ArchUnit qui font échouer le build en cas de violation de couche, chacune vérifiée avant qu'on s'y fie.",
      "Phase 1\u00a0: 0 violation avec axe 4.13 sur 15 écrans connectés en 1440 et 390\u00a0px\u00a0; Lighthouse en accessibilité 100 sur / et /login (oct. 2026).",
      "Audit de la phase 1\u00a0: un second message client envoyé rapidement restait sans réponse 9 fois sur 10\u00a0; après le correctif du répartiteur, il obtenait une réponse 10 fois sur 10 (50 conversations × 20 messages).",
    ],
  },
  limits: {
    title: "Limites",
    items: [
      "Les paramètres du jumeau sont provisoires\u00a0: les résultats montrent des tendances, pas des prévisions bancaires.",
      "L'expérience de couplage est petite (25 clients)\u00a0: les écarts de ton et de qualité ne sont pas mesurables à cette taille.",
      "Le jeu de test de la recherche n'est pas un test à l'aveugle - son auteur connaissait les thèmes des articles.",
      "Pas encore d'annotations qualité humaines, donc pas d'accord humain-IA (kappa de Cohen).",
      "La politique servie n'est pas la politique officielle - c'est voulu, et les deux sont publiées.",
      "Un projet de cours exécuté en local sur des données fictives - pas un système bancaire en service.",
    ],
  },
  team: {
    title: "Équipe",
    members: [
      { name: "Fedi Hmida", detail: "Phase 2\u00a0: le cœur IA et son orchestration, l'intégration à la plateforme. Phase 1\u00a0: back-end, architecture et intégration du service IA, co-développement du front-end" },
      { name: "Doua Omrani", detail: "Phase 2\u00a0: premier front-end, une partie de la base de connaissances. Phase 1\u00a0: conseiller client et simulateur de clients" },
      { name: "Ines Bendhifallah", detail: "Phase 2\u00a0: premier back-end web, une phase de l'analyste qualité, le rapport qualité. Phase 1\u00a0: gestionnaire d'effectifs (RL) et analyste qualité" },
      { name: "Mohamed Aziz Bellagha", detail: "Phase 1\u00a0: responsable du front-end" },
      { name: "Rayen Souissi", detail: "Phase 1\u00a0: pipeline CI" },
    ],
  },
  learnings: {
    title: "Ce que j'en retiens",
    items: [
      "Garder les décisions dans le code. Le modèle lit et écrit la langue\u00a0; aiguillages, identité, limites et escalades sont des fonctions qu'on peut tester.",
      "Aligner la récompense sur ce qu'on publie. Une récompense qui comptait le coût a appris à économiser au lieu de servir les clients.",
      "Figer les contrats d'abord. On avance en parallèle quand les contrats typés arrivent avant le code.",
      "Montrer le coût avec le gain. Un meilleur service coûte environ +1\u00a0276\u00a0€ par jour, et le dire est ce qui rend le résultat crédible.",
    ],
  },
  stack: {
    title: "Stack technique",
    groups: [
      { group: "IA", items: ["LangGraph", "MaskablePPO (sb3-contrib)", "Gymnasium", "GPT-4.1-mini", "Claude Haiku 4.5 (juge)", "sentence-transformers"] },
      { group: "Services", items: ["Python", "FastAPI", "Java 21", "Spring Boot 3", "Next.js", "STOMP / WebSocket"] },
      { group: "Données", items: ["PostgreSQL", "Qdrant", "pgvector"] },
      { group: "Qualité", items: ["pytest", "import-linter", "JUnit 5", "Testcontainers", "ArchUnit", "axe", "Lighthouse"] },
    ],
  },
  explore: {
    title: "Explorer le projet",
    body: "Consultez le dépôt du back-end de la phase 1, l'annonce, ou revenez à la liste des projets.",
    github: "GitHub",
    news: "Lire l'actualité",
    portfolio: "Portfolio",
  },
};

export default caseStudy;
