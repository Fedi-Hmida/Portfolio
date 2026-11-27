// Étude de cas CampusFlow AI, en français. Même forme que caseStudy.en.js (voir contentParity.test.js).
const caseStudy = {
  breadcrumb: { home: "Accueil", portfolio: "Portfolio", current: "CampusFlow AI" },
  hero: {
    badge: "Assistant IA multi-agents",
    title: "CampusFlow AI",
    role: "Responsable technique - architecture & intégration",
    lead: "Un assistant Telegram pour les étudiants d'ESPRIT qui répond avec sa source, tire les dates et les contacts de tables exactes, lit les photos de convocations - et dit «\u00a0non trouvé\u00a0» plutôt que d'inventer. Réalisé à trois pour le cours d'Advanced Deep Learning.",
    chips: ["24 oct. - 1er nov. 2026", "ESPRIT, Advanced Deep Learning", "Équipe de 3", "n8n / Qdrant / Ollama / Gemini", "Telegram"],
    github: "Voir le dépôt GitHub",
    back: "Retour au portfolio",
    coverAlt: "CampusFlow AI - Cité, exact, ou «\u00a0non trouvé\u00a0»",
  },
  metrics: [
    { label: "Recherche, Hit@5", value: "1,00", detail: "Recall@5 0,93 sur les 22 questions répondables de T1, avec un découpage par article et les documents officiels en premier. Des fenêtres fixes, avec le même ordre, atteignent 0,95." },
    { label: "Questions de bout en bout", value: "53", detail: "Rédigées par l'équipe, une exécution par jeu sur le vrai bot, chaque réponse conforme au contrat JSON et relue à la main\u00a0: 22/25, 12/12, 6/6, et 3/10 sur les démarches." },
    { label: "Latence p90, hybride", value: "18,7\u00a0s", detail: "Le p90 le plus élevé des quatre jeux de test, de bout en bout sur un portable sans GPU - chaque question sous le budget de 90\u00a0s. En tout local, une réponse réglementaire prenait 116\u2011148\u00a0s." },
    { label: "Cas adverses", value: "6/6", detail: "Hors périmètre, information manquante, prémisse fausse, régime d'études absent, injection de prompt cachée dans une photo, et demande d'envoi d'un message." },
  ],
  video: {
    badge: "Film de présentation",
    title: "Vidéo de démonstration",
    caption: "Un film de 90 secondes sur le système\u00a0: le problème, l'orchestrateur, une question posée en photo et sa réponse citée, les résultats mesurés et notre limite. Les réponses du bot sont réelles (obtenues le 31 octobre)\u00a0; la fenêtre de discussion est reconstituée.",
    aria: "Film de présentation de CampusFlow AI",
    fallback: "Votre navigateur ne lit pas cette vidéo.",
  },
  context: {
    title: "Contexte et objectif",
    intro: "Pour une seule question administrative, un étudiant d'ESPRIT doit croiser trois sources\u00a0: un règlement qui change selon le régime d'études, un calendrier d'examens et un annuaire des services.",
    body: "Un LLM seul n'est pas le bon outil. À la question de savoir si un examen manqué pour maladie peut être rattrapé, le modèle local sans recherche a répondu «\u00a0oui, tu peux\u00a0» - sans condition ni source -, alors que le règlement des cours du jour n'accepte pas de certificat médical pour un examen final. L'objectif\u00a0: un assistant qui a raison ou qui dit qu'il ne sait pas - chaque règle citée avec son article, chaque date et chaque e-mail tirés d'une table, et un renvoi vers le bon service quand l'information manque.",
  },
  role: {
    title: "Mon rôle",
    intro: "J'avais la charge de l'architecture et de l'intégration - là où le travail de trois personnes devient un seul système.",
    items: [
      "Conçu l'architecture orchestrateur-travailleurs et construit le workflow principal de l'assistant dans n8n (44 nœuds)\u00a0: routage, spécialistes, composition et boucle de vérification.",
      "Mis en place l'infrastructure Docker (n8n, Qdrant, Ollama, ngrok) avec des versions figées et un démarrage en une seule commande.",
      "Construit la chaîne de données\u00a0: 13 PDF nettoyés pour le corpus, un calendrier d'examens de 1\u00a0560 lignes, un annuaire de 18 rôles et un catalogue de 24 démarches, gardés par un validateur passé à 254 contrôles.",
      "Mené l'expérience de découpage (77 fenêtres fixes contre 168 articles) et les mesures de latence à l'origine du choix hybride\u00a0; fait passer le routeur de 47 à 52 intentions exactes sur 57 questions, avec un rappel hors périmètre de 0,75 à 1,00.",
      "Déplacé la logique des workflows dans du JavaScript testé, puis généré les workflows n8n à partir de ce code\u00a0: le code déployé est le code testé. Corrigé la session d'examen devinée\u00a0: elle vient désormais seulement de ce que l'étudiant a écrit (calendrier 9/12 → 12/12).",
      "Mené l'intégration\u00a0: revu les phases des deux coéquipières et corrigé 12 défauts de notation et 2 défauts fonctionnels du banc de test, chacun avec un test. 61 des 69 commits sont les miens.",
    ],
  },
  architecture: {
    title: "Architecture",
    intro: "Un graphe orchestrateur-travailleurs\u00a0: du code là où l'exactitude compte, un modèle là où il faut juger.",
    orchestrator: {
      alt: "Orchestrateur n8n de CampusFlow AI\u00a0: routeur, refus hors périmètre, vision, RAG réglementaire avec contrôles et une révision, recherche dans le calendrier, recherches administratives et brouillon, sortie",
      caption: "Le workflow principal de l'assistant dans n8n - 44 nœuds. Sélectionnez l'image pour l'agrandir.",
    },
    agents: [
      { name: "Router", tag: "IA", kind: "ai", engine: "Qwen3 4B, en local", detail: "Lit la question et renvoie du JSON\u00a0: intentions, entités, champs manquants - ou la refuse comme hors périmètre avant tout appel au cloud." },
      { name: "Vision", tag: "IA", kind: "ai", engine: "Gemini Flash-Lite", detail: "Lit les photos de convocations, d'affiches et d'emplois du temps selon un schéma fixe\u00a0; ce qu'il lit est annoncé comme lu sur la photo." },
      { name: "Regulations", tag: "IA + recherche", kind: "ai", engine: "Gemini Flash-Lite sur Qdrant", detail: "RAG sur le corpus réglementaire\u00a0; la réponse cite le document, l'article et la page." },
      { name: "Calendar", tag: "Code", kind: "code", engine: "outil de recherche exacte", detail: "Recherche exacte dans la table des examens - aucun modèle de langage ne touche une date." },
      { name: "Admin", tag: "Code + IA", kind: "code", engine: "outils de recherche, modèle pour le brouillon seulement", detail: "Recherches exactes des démarches et des contacts\u00a0; le modèle n'écrit que le brouillon du message, que l'étudiant envoie lui-même." },
      { name: "Composer", tag: "Code", kind: "code", engine: "fusion déterministe", detail: "Fusionne les sections d'une réponse à plusieurs sujets\u00a0; il ne peut ajouter aucun fait." },
      { name: "Critic", tag: "Code", kind: "code", engine: "checks.js", detail: "Vérifie chaque citation, date et e-mail par rapport aux sources. En cas d'échec\u00a0: une révision avec la liste exacte des échecs, puis «\u00a0non trouvé\u00a0» et le bon service." },
    ],
    map: {
      alt: "Carte des 10 workflows n8n générée à partir du JSON exporté",
      caption: "10 workflows, 107 nœuds, générés à partir du JSON exporté.",
    },
  },
  retrieval: {
    title: "La recherche, mesurée",
    intro: "Le découpage a été choisi par la mesure, pas par défaut.",
    rows: [
      { label: "Fenêtres fixes, filtre par régime", value: "0,86", note: "8\u00a0843 caractères de contexte", best: false },
      { label: "Découpage par article, filtre par régime", value: "0,86", note: "Même taux avec moitié moins de contexte\u00a0: 4\u00a0145 caractères", best: false },
      { label: "Fenêtres fixes, documents officiels en premier", value: "0,95", note: "Recall@5 0,93, 9\u00a0351 caractères de contexte", best: false },
      { label: "Découpage par article, documents officiels en premier", value: "1,00", note: "Recall@5 0,93 avec 5\u00a0297 caractères - la configuration retenue", best: true },
    ],
    note: "Hit@5 sur T1, 22 questions répondables. Placer les documents officiels en premier apporte l'essentiel du gain\u00a0; le découpage par article ajoute la dernière marche avec environ 43\u00a0% de contexte en moins. Les fenêtres fixes gardent un MRR légèrement meilleur (0,67 contre 0,63).",
    corpus: "Le corpus\u00a0: 13 PDF - 3 règlements officiels et 10 procédures et guides fictifs rédigés par l'équipe, chacun marqué comme fictif - découpés en 168 morceaux par article, avec des embeddings BGE-M3 (1\u00a0024 dimensions) dans Qdrant. La recherche filtre par régime d'études et place les textes officiels en premier\u00a0: une règle officielle passe toujours avant une procédure de démonstration.",
    figure: {
      alt: "Collections Qdrant\u00a0: 168 morceaux par article et 77 fenêtres fixes, cosinus en 1\u00a0024 dimensions",
      caption: "Les deux collections dans Qdrant\u00a0: 77 fenêtres fixes et 168 morceaux par article.",
    },
  },
  photos: {
    title: "Lire les photos",
    intro: "Un étudiant peut envoyer la photo d'une convocation au lieu de taper sa question.",
    body: "Le prompt Vision est passé par cinq versions, de 71 à 88 champs corrects sur 88 pour 11 photos de test (schéma valide 11/11, une seule exécution). Le bot répond avec la règle et ce qu'il a lu - date, salle, module - annoncé comme lu sur la photo. Une photo sans question n'est jamais refusée\u00a0: le bot dit ce qu'il a lu et demande ce que l'étudiant veut savoir.",
    figure: { alt: "Convocation de rattrapage fictive, photographiée de biais, utilisée comme photo de test", caption: "Document de test fictif." },
  },
  safety: {
    title: "Sécurité par conception",
    items: [
      { title: "Injection de prompt dans une photo", detail: "Un post-it sur une convocation demande à l'assistant d'ignorer ses règles\u00a0; le bot signale le texte et l'ignore." },
      { title: "Hors périmètre, refusé tôt", detail: "Les demandes de données personnelles, comme les notes ou les absences, sont refusées par le routeur local avant tout appel au cloud." },
      { title: "Aucun identifiant étudiant ne quitte le portable", detail: "Le modèle cloud reçoit la question, des extraits publics ou fictifs et des photos - jamais l'identifiant Telegram, celui de la discussion, un nom ou les journaux." },
      { title: "Des brouillons, jamais envoyés", detail: "Les brouillons de demande sont à envoyer par l'étudiant\u00a0; le bot ne prétend jamais avoir envoyé quoi que ce soit." },
    ],
    photo: { alt: "Convocation fictive avec un post-it portant une injection de prompt", caption: "La photo de test\u00a0: le post-it demande à l'assistant d'ignorer ses règles." },
    reply: { alt: "Le bot signale et ignore une instruction écrite sur une photo", caption: "La vraie réponse du bot\u00a0: l'instruction est signalée et ignorée." },
  },
  hybrid: {
    title: "Le choix hybride",
    intro: "Le tout-local était le plan. La mesure a dit non.",
    body: "Sur un portable sans GPU, une réponse réglementaire prenait 116\u2011148\u00a0s de bout en bout, pour un budget de 90\u00a0s. Nous avons gardé en local le routeur, les recherches, les embeddings et les contrôles, et confié à Gemini Flash-Lite les deux agents qui rédigent ainsi que la vision\u00a0: un p90 d'au plus 18,7\u00a0s, chaque question sous le budget. Un seul réglage ramène les agents de texte sur le modèle local.",
  },
  evaluation: {
    title: "Évaluation",
    intro: "53 questions rédigées par l'équipe, posées au vrai bot, une exécution par jeu, chaque réponse vérifiée par rapport à un contrat JSON et relue à la main.",
    rows: [
      { set: "T1", name: "Règlements", note: "Jeu final, exécuté une fois", score: "22/25", limit: false },
      { set: "T2", name: "Calendrier", note: "9/12 avant un correctif documenté", score: "12/12", limit: false },
      { set: "T3", name: "Contacts et démarches", note: "Bon service 7 fois sur 10, détails des démarches souvent manquants", score: "3/10", limit: true },
      { set: "T5", name: "Robustesse", note: "Dont une injection de prompt dans une photo", score: "6/6", limit: false },
    ],
    limitLabel: "notre limite",
    notes: [
      "Itérations de prompts, mesurées sur des jeux de développement\u00a0: le Router est passé de 47 à 52 intentions exactes sur 57 questions synthétiques\u00a0; le prompt Regulations, de 22 à 11 réponses «\u00a0non trouvé\u00a0» sur 32 questions.",
      "Nous avons aussi testé le banc d'essai\u00a0: 12 défauts de notation et 2 défauts de fonctionnement, chacun corrigé avec un test construit à partir de la vraie réponse mal jugée.",
      "69 tests unitaires et 254 contrôles de reproductibilité passent (sources, liens, absence de secrets, étiquettes fictives, fuites entre jeux de test).",
    ],
  },
  limits: {
    title: "Limites",
    items: [
      "Les démarches sont le point faible\u00a0: le bon service 7 fois sur 10, mais souvent sans les pièces et les délais - 3/10 entièrement correctes.",
      "Les contrôles déterministes vérifient les citations et les chiffres, pas le sens\u00a0: une règle correctement citée mais mal paraphrasée passerait.",
      "Une démo de cours sur un seul portable, évaluée sur des questions rédigées par l'équipe - pas sur un vrai trafic étudiant.",
    ],
  },
  team: {
    title: "Équipe",
    members: [
      { name: "Fedi Hmida", detail: "Architecture, workflow de l'assistant, infrastructure Docker, chaîne de données, intégration et revues" },
      { name: "Douaa Omrani", detail: "Stratégie RAG, banc d'essai de bout en bout, évaluation" },
      { name: "Ines Bendhifallah", detail: "Prompts Regulations et Vision, partie multimodale" },
    ],
    supervisor: "Encadré par Ghassen Fodha, ESPRIT (classe 5DS9, 2026-2027).",
  },
  learnings: {
    title: "Ce que j'en retiens",
    items: [
      "Mettre du code là où la réponse doit être exacte. Les dates et les e-mails ne passent jamais par un modèle\u00a0: ils ne peuvent pas être inventés.",
      "Mesurer avant de choisir. Le choix hybride est venu d'un chiffre de latence de bout en bout, pas d'une préférence.",
      "Un banc d'essai a besoin de ses propres tests. Notre premier banc avait 12 défauts de notation qui faisaient paraître les réponses meilleures ou pires qu'elles ne l'étaient.",
    ],
  },
  stack: {
    title: "Stack technique",
    groups: [
      { group: "Orchestration", items: ["n8n", "Telegram Bot API", "ngrok"] },
      { group: "Modèles", items: ["Qwen3 4B (Ollama)", "Gemini Flash-Lite", "BGE-M3"] },
      { group: "Recherche", items: ["Qdrant", "Découpage par article", "Filtres de métadonnées"] },
      { group: "Ingénierie", items: ["Docker Compose", "JavaScript (node:test)", "Python", "JSON Schema"] },
      { group: "Évaluation", items: ["Hit@5 / Recall@5 / MRR", "Banc d'essai de bout en bout", "Relecture humaine"] },
    ],
  },
  explore: {
    title: "Explorer le projet",
    body: "Consultez le dépôt source, l'annonce, ou revenez à la liste des projets.",
    github: "GitHub",
    news: "Lire l'actualité",
    portfolio: "Portfolio",
  },
};

export default caseStudy;
