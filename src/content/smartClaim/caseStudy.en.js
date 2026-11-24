// SmartClaimDetails.jsx - English. Extracted from the page; keys follow source order (Lnnn = original line).
// Same keys as caseStudy.fr.js (see src/content/contentParity.test.js).
const content = {
  s001: "Precision", // L37
  s002: "92.9%", // L37
  s003: "YOLOv8 damage detection", // L37
  s004: "Timeline", // L38
  s005: "2 months", // L38
  s006: "Internship project", // L38
  s007: "Platform", // L39
  s008: "Flutter", // L39
  s009: "Mobile app with FastAPI backend", // L39
  s010: "Domain", // L40
  s011: "Insurance", // L40
  s012: "AI-assisted vehicle claim reporting", // L40
  s013: "Mobile Claim Flow", // L45
  s014: "Flutter + Dart", // L46
  s015: "Developed the SmartClaim Flutter mobile application for structured claim reporting.", // L47
  s016: "Computer Vision Integration", // L50
  s017: "YOLOv8 + OpenCV + PyTorch", // L51
  s018: "Integrated YOLOv8 for real-time vehicle damage detection inside the claim workflow.", // L52
  s019: "Backend Delivery", // L55
  s020: "FastAPI + Docker", // L56
  s021: "Built the FastAPI backend and containerized the solution with Docker for a clearer product demo.", // L57
  s022: "Claim Data Workflow", // L60
  s023: "OCR + MongoDB", // L61
  s024: "Connected mobile capture, AI inference, OCR, and claim data handling into one reviewable process.", // L62
  s025: "Capture", // L68
  s026: "Flutter app", // L69
  s027: "Flutter guides the user through claim reporting and vehicle damage photo capture.", // L70
  s028: "Route", // L73
  s029: "FastAPI", // L74
  s030: "FastAPI receives claim data and routes images through the computer vision pipeline.", // L75
  s031: "Detect", // L78
  s032: "YOLOv8", // L79
  s033: "YOLOv8, OpenCV, and PyTorch support damage detection and image processing.", // L80
  s034: "Extract", // L83
  s035: "OCR", // L84
  s036: "OCR supports extraction of relevant claim and document data.", // L85
  s037: "Store", // L88
  s038: "MongoDB", // L89
  s039: "MongoDB supports the project data layer for claim-related information.", // L90
  s040: "Review", // L93
  s041: "Claim support", // L94
  s042: "The mobile workflow, AI inference, and claim data handling come together for a usable product demo.", // L95
  s043: "Mobile Reporting", // L102
  s044: "Guided claim flow", // L103
  s045: "Vehicle image capture", // L103
  s046: "Structured mobile screens", // L103
  s047: "AI Damage Detection", // L107
  s048: "YOLOv8 inference", // L108
  s049: "92.9% reported precision", // L108
  s050: "OpenCV and PyTorch workflow", // L108
  s051: "Backend Integration", // L112
  s052: "FastAPI inference API", // L113
  s053: "Dockerized delivery", // L113
  s054: "Mobile-to-model connection", // L113
  s055: "Claim Support Data", // L117
  s056: "OCR document extraction", // L118
  s057: "MongoDB data layer", // L118
  s058: "Claim information handling", // L118
  s059: "Detection Model", // L124
  s060: "Identifies car damage in the image pipeline for AI-assisted insurance reporting.", // L126
  s061: "Image Workflow", // L129
  s062: "OpenCV + PyTorch", // L130
  s063: "Supports image processing and the model workflow behind the detection experience.", // L131
  s064: "Reported Result", // L134
  s065: "Portfolio content reports 92.9% precision for real-time vehicle damage detection.", // L136
  s066: "Document Layer", // L139
  s067: "Extracts relevant document and claim data to support the digital reporting flow.", // L141
  s068: "Capture Quality", // L147
  s069: "Balancing mobile usability with the extra steps needed for accurate image capture.", // L148
  s070: "AI Clarity", // L151
  s071: "Keeping AI inference understandable to non-technical users inside the claim flow.", // L152
  s072: "Integrated Demo", // L155
  s073: "Connecting Flutter, FastAPI, Docker, and computer vision parts into one usable product demo.", // L156
  s074: "Mobile Product UX", // L162
  s075: "SmartClaim strengthened how I design a guided mobile flow around a real user task.", // L164
  s076: "Computer Vision Delivery", // L167
  s077: "YOLOv8 pipeline", // L168
  s078: "It improved my ability to explain model inference, image processing, and detection results clearly.", // L169
  s079: "The project connected API delivery, containerization, and mobile workflows into one coherent demo.", // L174
  s080: "Recruiter-Facing Story", // L177
  s081: "Case study", // L178
  s082: "It clarified how much engineering work depends on explaining the problem, role, architecture, and result.", // L179
  s083: "Dart", // L185
  s084: "OpenCV", // L187
  s085: "PyTorch", // L188
  s086: "Docker", // L190
  s087: "My Role", // L196
  s088: "Data & Mobile Developer Intern", // L196
  s089: "Project Name", // L197
  s090: "SmartClaim", // L197
  s091: "Category", // L198
  s092: "Mobile App - Computer Vision", // L198
  s093: "Main Result", // L199
  s094: "92.9% detection precision", // L199
  s095: "Duration", // L200
  s096: "2 Months (Internship)", // L200
  s097: "Mobile App Workflow", // L206
  s098: "User claim reporting flow", // L207
  s099: "Play SmartClaim mobile app workflow demo", // L208
  s100: "Damage Detection", // L213
  s101: "AI computer vision workflow", // L214
  s102: "Play SmartClaim damage detection AI demo", // L215
  s103: "Home", // L270
  s104: "Portfolio", // L272
  s105: "AI insurance claim assistant", // L280
  s106: "Vehicle Damage Detection App", // L285
  s107: "AI-powered insurance claim assistant built with Flutter, YOLOv8, FastAPI, Docker, and a computer vision pipeline reaching 92.9% damage detection precision.", // L287
  s108: "SmartClaim is an AI-powered mobile application designed to make car insurance claim reporting faster and more structured. The user captures vehicle damage from the Flutter app, then the backend supports computer vision analysis with YOLOv8, OpenCV, PyTorch, OCR, and claim data handling.", // L290
  s109: "92.9% precision", // L295
  s110: "Watch demos", // L304
  s111: "Back to Portfolio", // L308
  s112: "SmartClaim project logo", // L322
  s113: "Project Summary", // L357
  s114: "SmartClaim turns a manual insurance reporting process into a guided mobile workflow backed by AI damage detection. The project combines mobile UX, backend APIs, containerized delivery, computer vision, OCR, and claim data handling into a reviewable internship product demo.", // L359
  s115: "The Challenge", // L366
  s116: "Traditional car insurance claims are slow, manual, and error-prone. Users often face long wait times for adjusters to inspect vehicles, while teams need more consistent damage information before a claim can move forward.", // L367
  s117: "The Solution", // L372
  s118: "SmartClaim creates a guided mobile claim flow and connects it with AI-assisted damage detection. The project turns images and claim information into a clearer digital process for review.", // L373
  s119: "As Data & Mobile Developer Intern, I worked across the mobile app, AI integration, backend API, and product demo story.", // L384
  s120: "Key Features", // L401
  s121: "Architecture / Technical Approach", // L424
  s122: "Tech Stack: Flutter - Dart - YOLOv8 - OpenCV - PyTorch - FastAPI - Docker - MongoDB - OCR", // L442
  s123: "AI Model and Computer Vision Pipeline", // L450
  s124: "The AI part stays visible as a computer vision pipeline: detection, image workflow, reported precision, and OCR support for claim documents.", // L452
  s125: "Challenges and Tradeoffs", // L469
  s126: "What I Learned", // L484
  s127: "Project Info", // L500
  s128: "Technologies", // L512
  s129: "Python", // L523
  s130: "Main Stack", // L528
  s131: "Discuss this work", // L541
  s132: "Product and AI demos", // L558
  s133: "Demo Videos", // L561
  s134: "Two walkthroughs showing the mobile claim workflow and the AI damage detection pipeline.", // L564
  s135: "Explore the project", // L614
  s136: "Watch the demos, return to the project list, or start a conversation.", // L615
  s137: "Demos", // L619
  s138: "Contact Me", // L625
  s139: "Previous Project", // L645
  s140: "SolarFlow", // L646
  s141: "Next Project", // L652
  s142: "Onboardify", // L653
};

export default content;
