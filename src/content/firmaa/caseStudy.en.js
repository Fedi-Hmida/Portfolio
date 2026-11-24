// FirmaaDetails.jsx - English. Extracted from the page; keys follow source order (Lnnn = original line).
// Same keys as caseStudy.fr.js (see src/content/contentParity.test.js).
const content = {
  s001: "Timeline", // L36
  s002: "Feb - May 2026", // L36
  s003: "Integrated project at ESPRIT", // L36
  s004: "Role", // L37
  s005: "Project Lead", // L37
  s006: "AI agent direction and platform coherence", // L37
  s007: "Focus", // L38
  s008: "Irrigation Agent", // L38
  s009: "LangGraph workflow with human approval", // L38
  s010: "Methodology", // L39
  s011: "TDSP", // L39
  s012: "Structured delivery for the smart agriculture platform", // L39
  s013: "LangGraph", // L43
  s014: "FastAPI", // L44
  s015: "MongoDB", // L45
  s016: "Next.js", // L46
  s017: "Three.js", // L47
  s018: "React", // L48
  s019: "Flutter", // L49
  s020: "IoT / sensor data", // L50
  s021: "Human-in-the-loop", // L51
  s022: "Farm Monitoring", // L56
  s023: "Web dashboard and Flutter mobile access for farm monitoring", // L59
  s024: "Zone management and 3D farm simulation", // L60
  s025: "AI Decision Support", // L64
  s026: "AI irrigation agent based on moisture, weather, crop needs, and sensor data", // L67
  s027: "Vision & Detection", // L71
  s028: "Crop disease detection from plant images", // L74
  s029: "Chicken disease detection using droppings images", // L75
  s030: "Livestock health prediction based on symptoms", // L76
  s031: "Insect classification using sound analysis", // L77
  s032: "Mobile / Offline AI", // L81
  s033: "Offline AI models available directly in the Flutter mobile app", // L84
  s034: "IoT & Real-Time Data", // L88
  s035: "IoT integration with sensors and real-time camera detection", // L91
  s036: "Technical Vision", // L98
  s037: "Coordinated the technical vision.", // L100
  s038: "Helped unify Firmaa into one coherent smart agriculture platform.", // L101
  s039: "Platform leadership", // L102
  s040: "Agent Workflow Direction", // L105
  s041: "Led the Autonomous Irrigation Agent direction.", // L107
  s042: "Shaped the LangGraph decision workflow around farm context and approval.", // L108
  s043: "LangGraph / agentic AI", // L109
  s044: "Decision Logic", // L112
  s045: "Designed the irrigation agent flow.", // L114
  s046: "Connected soil moisture, weather forecasts, crop needs, sensor data, safety checks, and human approval logic.", // L115
  s047: "Irrigation intelligence", // L116
  s048: "Dashboard Experience", // L119
  s049: "Contributed to the dashboard experience.", // L121
  s050: "Improved zone management, AI command center, approvals flow, and farm visibility.", // L122
  s051: "Next.js / 3D monitoring", // L123
  s052: "Product Identity", // L126
  s053: "Helped shape the product identity.", // L128
  s054: "Made the platform feel cohesive across smart farming, mobile access, and AI recommendations.", // L129
  s055: "Product thinking", // L130
  s056: "Inputs", // L136
  s057: "Soil moisture, weather forecasts, crop needs, and sensor data.", // L137
  s058: "LangGraph Agent", // L140
  s059: "LLM-based reasoning with tool-assisted decision support.", // L141
  s060: "Validation / Safety", // L144
  s061: "Safety checks, validation layers, and fallback rules before recommending action.", // L145
  s062: "Recommendation", // L148
  s063: "Explainable irrigation decision with water volume estimation.", // L149
  s064: "Human Approval", // L152
  s065: "Approval queue keeps the farmer in control before sensitive actions.", // L153
  s066: "Action / Monitoring", // L156
  s067: "Zone-based monitoring keeps the farm state visible after decisions.", // L157
  s068: "IoT / Sensor Inputs", // L164
  s069: "Soil moisture, weather forecasts, crop needs, sensor data, and real-time camera detection provide farm context.", // L165
  s070: "Input layer", // L166
  s071: "Next.js Dashboard", // L170
  s072: "Analytics dashboard, AI command center, approvals queue, zone management, profile access, and farm visibility.", // L171
  s073: "Interface layer", // L172
  s074: "Three.js Digital Twin", // L176
  s075: "3D farm view designed to make zones, farm state, and monitoring context easier to understand.", // L177
  s076: "Visualization layer", // L178
  s077: "Flutter Mobile / Offline AI", // L182
  s078: "Flutter mobile experience supporting field access and offline inference paths where connectivity can be limited.", // L183
  s079: "Field access layer", // L184
  s080: "FastAPI Backend", // L188
  s081: "Backend layer connecting dashboard flows, agent orchestration, sensor data, and AI modules.", // L189
  s082: "API layer", // L190
  s083: "MongoDB Data Layer", // L194
  s084: "Persistence layer for zones, monitoring records, approvals, users, and AI outputs.", // L195
  s085: "Data layer", // L196
  s086: "LangGraph / AI Agent Layer", // L200
  s087: "LangGraph irrigation workflow with LLM reasoning, tool calls, fallbacks, and explainability-oriented recommendations.", // L201
  s088: "Reasoning layer", // L202
  s089: "Human Approval Layer", // L206
  s090: "Approval queue keeps the farmer in control before sensitive actions and connects recommendations to review.", // L207
  s091: "Trust layer", // L208
  s092: "Autonomous irrigation agent with crop, soil, weather, and sensor context.", // L213
  s093: "Human-in-the-loop approvals for safer AI recommendations.", // L214
  s094: "3D digital-twin farm view for zone-based monitoring.", // L215
  s095: "Flutter mobile app for field access, mobile AI modules, and IoT-aware farm visibility.", // L216
  s096: "Landing Experience", // L220
  s097: "Analytics Dashboard", // L221
  s098: "Irrigation Agent Pipeline", // L222
  s099: "Mobile AI Modules", // L223
  s100: "Keeping autonomous irrigation useful while preserving farmer approval for sensitive actions.", // L227
  s101: "Unifying web, mobile, IoT, AI modules, and 3D monitoring into one coherent platform story.", // L228
  s102: "Making recommendations explainable enough to support practical farm decisions.", // L229
  s103: "Agent Workflow Design", // L234
  s104: "Agentic AI needs validation layers, fallback rules, and human approval before it feels responsible in real workflows.", // L235
  s105: "LangGraph / responsible AI", // L236
  s106: "3D Dashboard Thinking", // L239
  s107: "A 3D digital twin is strongest when it clarifies zone context instead of acting as decoration.", // L240
  s108: "Three.js farm view", // L241
  s109: "Full-Stack Integration", // L244
  s110: "Product identity, dashboard UX, mobile access, and backend architecture all have to move together in platform projects.", // L245
  s111: "Next.js / FastAPI / Flutter", // L246
  s112: "Structured Delivery", // L249
  s113: "TDSP helped organize the technical work around data, model behavior, implementation, and review.", // L250
  s114: "Safety", // L257
  s115: "Sensitive irrigation decisions stay controlled instead of fully automatic.", // L259
  s116: "Safety checks", // L260
  s117: "Human approval before sensitive actions", // L260
  s118: "Validation", // L263
  s119: "The agent recommendation is filtered before it reaches the farmer.", // L265
  s120: "Validation layers", // L266
  s121: "Fallback rules", // L266
  s122: "Tool-assisted decision support", // L266
  s123: "Explainability", // L269
  s124: "Recommendations are designed to be understandable and reviewable.", // L271
  s125: "LLM reasoning", // L272
  s126: "Explainable recommendations", // L272
  s127: "Water volume estimation", // L272
  s128: "My Role", // L277
  s129: "Project Lead / AI Agent Engineer", // L277
  s130: "Project Name", // L278
  s131: "Firmaa", // L278
  s132: "Category", // L279
  s133: "AI-Powered Smart Farming Platform", // L279
  s134: "February - May 2026", // L280
  s135: "Home", // L312
  s136: "Portfolio", // L314
  s137: "Agentic AI smart farming platform", // L322
  s138: "Autonomous Irrigation Agent & Digital Farm Platform", // L327
  s139: "AI-powered smart agriculture platform combining a LangGraph Autonomous Irrigation Agent, FastAPI, MongoDB, Next.js, Flutter mobile access, and a Three.js 3D digital-twin farm view.", // L329
  s140: "Firmaa helps farmers monitor zones, reason about irrigation decisions, estimate water needs, and approve AI recommendations through a full-stack dashboard and field-ready mobile experience.", // L333
  s141: "Watch demo", // L348
  s142: "Back to Portfolio", // L352
  s143: "Firmaa logo", // L365
  s144: "Firmaa wordmark", // L366
  s145: "Firmaa solution cover", // L370
  s146: "View larger", // L381
  s147: "Platform walkthrough", // L420
  s148: "Demo Video", // L423
  s149: "A walkthrough of the Firmaa smart agriculture platform, including the dashboard experience, AI command center, and connected farm workflow.", // L426
  s150: "Firmaa smart agriculture platform demo video", // L443
  s151: "Play Firmaa demo video", // L448
  s152: "Project Summary", // L465
  s153: "Firmaa is an AI-powered smart agriculture platform built as an integrated project at ESPRIT. It combines a Next.js dashboard, Flutter mobile access, a FastAPI backend, MongoDB persistence, a Three.js digital-twin farm view, and AI modules for farm monitoring and decision support.", // L467
  s154: "The Challenge", // L474
  s155: "Farmers often make irrigation, crop disease, livestock health, and insect monitoring decisions manually. Limited real-time information makes farm operations harder to coordinate and can leave decisions dependent on fragmented signals.", // L475
  s156: "The Solution", // L480
  s157: "Firmaa brings smart farm operations into one platform: web monitoring, Flutter mobile access, AI recommendations, 3D farm visibility, mobile AI modules, and IoT-aware workflows designed around practical farm decisions.", // L481
  s158: "I worked on the technical vision, agentic AI workflow, dashboard coherence, product identity, and the connection between AI recommendations and farmer approval.", // L494
  s159: "Unified Platform Scope", // L520
  s160: "Firmaa is easier to understand as a connected platform map: monitoring, decision support, detection modules, mobile/offline access, and IoT data all feed the same smart farming experience.", // L522
  s161: "Agentic AI Irrigation Workflow", // L550
  s162: "The irrigation agent is presented as a decision workflow, from farm signals to explainable recommendation and human-approved action.", // L552
  s163: "0", // L561
  s164: "Tool-assisted agents", // L570
  s165: "Architecture / Technical Approach", // L581
  s166: "The platform architecture connects farm inputs, dashboard interfaces, mobile access, backend orchestration, stored records, AI reasoning, and farmer approval into one workflow.", // L583
  s167: "Tech Stack: LangGraph - FastAPI - MongoDB - Next.js - Three.js - React - Flutter - IoT / sensor data - Human-in-the-loop", // L604
  s168: "Safety, Validation, and Explainability", // L612
  s169: "The Autonomous Irrigation Agent was designed around LLM reasoning, tool-assisted decision support, validation layers, fallback rules, safety checks, explainable recommendations, and human approval before sensitive actions.", // L614
  s170: "Challenges and Tradeoffs", // L641
  s171: "What I Learned", // L655
  s172: "Project Info", // L673
  s173: "Technologies", // L685
  s174: "Product Highlights", // L696
  s175: "Platform Visuals", // L707
  s176: "Discuss this work", // L731
  s177: "Explore the project", // L740
  s178: "Watch the demo, review the platform visuals, return to the project list, or start a conversation.", // L741
  s179: "Demo", // L745
  s180: "Contact Me", // L751
  s181: "Back to", // L771
  s182: "Interested?", // L778
  s183: "Close image preview", // L808
};

export default content;
