// OnboardifyDetails.jsx - English. Extracted from the page; keys follow source order (Lnnn = original line).
// Same keys as caseStudy.fr.js (see src/content/contentParity.test.js).
const content = {
  s001: "Platform", // L39
  s002: "Hybrid", // L39
  s003: "JavaFX desktop + Symfony web", // L39
  s004: "Domain", // L40
  s005: "HR Tech", // L40
  s006: "Employee onboarding workflow", // L40
  s007: "Duration", // L41
  s008: "4 months", // L41
  s009: "Project timeline", // L41
  s010: "Focus", // L42
  s011: "Gamified", // L42
  s012: "Onboarding flow for engagement", // L42
  s013: "Hybrid Platform Contribution", // L47
  s014: "JavaFX + Symfony", // L48
  s015: "Contributed to the JavaFX and Symfony onboarding platform experience across desktop and web surfaces.", // L49
  s016: "Onboarding Module Build", // L52
  s017: "Resources + quizzes + projects", // L53
  s018: "Implemented workflows for resources, project assignment, quizzes, reports, and well-being programs.", // L54
  s019: "HR Visibility", // L57
  s020: "Tracking + follow-up", // L58
  s021: "Supported HR visibility through structured onboarding features that make activity easier to follow.", // L59
  s022: "Demo Flow Preparation", // L62
  s023: "Employee + HR interactions", // L63
  s024: "Prepared demo flows showing key employee and HR interactions across the onboarding journey.", // L64
  s025: "Desktop Experience", // L70
  s026: "JavaFX", // L71
  s027: "JavaFX supports secure internal onboarding workflows and employee-facing actions.", // L72
  s028: "Web Platform", // L75
  s029: "Symfony", // L76
  s030: "Symfony, PHP, MySQL, HTML, CSS, and JavaScript support the web-side platform.", // L77
  s031: "Training Flow", // L80
  s032: "Resources + quizzes", // L81
  s033: "Resources, quizzes, and assigned projects guide employees through onboarding.", // L82
  s034: "Feedback Loop", // L85
  s035: "Posts + reclamations", // L86
  s036: "Posts, reclamations, and well-being programs support communication and follow-up.", // L87
  s037: "Access & Security", // L94
  s038: "Robust login", // L95
  s039: "Sign-up system", // L95
  s040: "Data security for users", // L95
  s041: "Resource Hub", // L99
  s042: "Document management", // L100
  s043: "Centralized onboarding resources", // L100
  s044: "Employee access to materials", // L100
  s045: "Training & Validation", // L104
  s046: "Interactive quizzes", // L105
  s047: "Knowledge validation", // L105
  s048: "Training progress tracking", // L105
  s049: "Employee Support", // L109
  s050: "Well-being programs", // L110
  s051: "Mental health support", // L110
  s052: "New-hire integration", // L110
  s053: "Project Tracking", // L114
  s054: "Project assignment", // L115
  s055: "Task tracking", // L115
  s056: "Onboarding progress visibility", // L115
  s057: "Communication", // L119
  s058: "Posts", // L120
  s059: "Reclamations", // L120
  s060: "Employee feedback follow-up", // L120
  s061: "Account Access", // L126
  s062: "Secure login and sign-up give users a controlled entry point into the onboarding platform.", // L127
  s063: "Learn", // L130
  s064: "Resources and quizzes structure training so new hires can access materials and validate knowledge.", // L131
  s065: "Contribute", // L134
  s066: "Project assignments and task tracking turn onboarding into an active employee workflow.", // L135
  s067: "Communicate", // L138
  s068: "Posts and reclamations keep employee feedback and HR follow-up visible.", // L139
  s069: "Support", // L142
  s070: "Well-being programs add a human layer for new-hire mental health and integration.", // L143
  s071: "Hybrid Product Shape", // L149
  s072: "Coordinating a hybrid desktop and web product experience.", // L150
  s073: "Engagement Balance", // L153
  s074: "Keeping onboarding structured while still making it engaging for new hires.", // L154
  s075: "HR vs Employee Needs", // L157
  s076: "Balancing HR visibility with employee-facing simplicity.", // L158
  s077: "Hybrid Application Thinking", // L164
  s078: "Onboardify strengthened how I think about coordinating desktop and web surfaces in one product.", // L166
  s079: "HR Workflow Modeling", // L169
  s080: "Onboarding operations", // L170
  s081: "It helped me model onboarding around training, assignments, communication, and follow-up.", // L171
  s082: "Engagement Features", // L174
  s083: "Quizzes + well-being", // L175
  s084: "The project showed how gamified and support-oriented modules can make onboarding less passive.", // L176
  s085: "Demo-Ready Structure", // L179
  s086: "Recruiter presentation", // L180
  s087: "It improved how I turn several platform modules into a clear story that can be scanned quickly.", // L181
  s088: "PHP", // L188
  s089: "MySQL", // L189
  s090: "HTML", // L190
  s091: "CSS", // L191
  s092: "JavaScript", // L192
  s093: "My Role", // L196
  s094: "Full-stack contributor", // L196
  s095: "Project Name", // L197
  s096: "Onboardify", // L197
  s097: "Category", // L198
  s098: "JavaFX & Symfony - HR Tech", // L198
  s099: "Main Focus", // L199
  s100: "Gamified onboarding flow", // L199
  s101: "4 Months", // L200
  s102: "Resource Management", // L206
  s103: "See how employees can access and manage onboarding documents in one place.", // L207
  s104: "Project Assignment & Tracking", // L213
  s105: "Explore how tasks are assigned and progress is tracked throughout the onboarding process.", // L214
  s106: "Interactive Training Quizzes", // L220
  s107: "Watch how interactive quizzes help validate training and boost engagement.", // L221
  s108: "Posts & Reclamation System", // L227
  s109: "See how the platform facilitates communication and handles employee feedback efficiently.", // L228
  s110: "Well-being Program Integration", // L234
  s111: "Discover how new hires can benefit from personalized well-being programs during onboarding.", // L235
  s112: "Home", // L284
  s113: "Portfolio", // L286
  s114: "HR onboarding platform", // L294
  s115: "Gamified Employee Onboarding", // L299
  s116: "Hybrid JavaFX and Symfony HR platform for structured, engaging employee onboarding with resources, quizzes, reporting, and well-being support.", // L301
  s117: "Onboardify is a smart employee onboarding platform developed as part of an academic project. It combines a JavaFX desktop application and a Symfony-based web application to deliver a structured, engaging, and interactive onboarding experience with real-time visibility for HR and managers.", // L304
  s118: "Watch demos", // L318
  s119: "Back to Portfolio", // L322
  s120: "Onboardify Logo", // L336
  s121: "Project Summary", // L371
  s122: "The platform aims to enhance new hire integration through resource management, interactive modules, employee well-being support, and workflows that keep onboarding activity visible for HR and managers.", // L373
  s123: "The Problem", // L380
  s124: "New employee onboarding can become scattered across documents, training, projects, feedback, and HR tracking.", // L381
  s125: "The Solution", // L386
  s126: "Onboardify centralizes onboarding resources, quizzes, assignments, posts, reclamations, and well-being support.", // L387
  s127: "As a full-stack contributor, I worked across the hybrid product experience and helped shape the onboarding modules into reviewable demo flows.", // L398
  s128: "Key Features", // L415
  s129: "Architecture / Technical Approach", // L438
  s130: "Tech Stack: JavaFX - Symfony - PHP - MySQL - HTML/CSS - JavaScript", // L456
  s131: "Onboarding Journey", // L464
  s132: "The platform reads more clearly when the modules are shown as one onboarding path from access to support.", // L466
  s133: "Challenges and Tradeoffs", // L485
  s134: "What I Learned", // L500
  s135: "Project Details", // L516
  s136: "Technologies", // L528
  s137: "Main Stack", // L541
  s138: "Discuss this work", // L554
  s139: "Feature demos", // L571
  s140: "Demo Videos", // L574
  s141: "Five walkthroughs showing resources, project tracking, quizzes, posts and reclamations, and well-being programs.", // L577
  s142: "Explore the project", // L632
  s143: "Watch the demo flows, return to the project list, or start a conversation.", // L633
  s144: "Demos", // L637
  s145: "Contact Me", // L643
  s146: "Previous Project", // L663
  s147: "SolarFlow", // L664
  s148: "Next Project", // L670
  s149: "Pro-Link", // L671
};

export default content;
