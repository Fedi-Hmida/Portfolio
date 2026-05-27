# Project Recap - Fedi Hmida Portfolio

This document is a detailed recap of the current project in `C:\Users\Fedi\Desktop\Fiche`. It explains what the project is, how it runs, which files matter, which routes exist, what each page contains, where the assets live, and what details are important for future work.

## 1. Project Identity

- Project name in `package.json`: `portfolio-contact`
- App type: React single page application
- Main purpose: personal portfolio website for Fedi Hmida
- Main profile/theme: Data Science, AI Engineering, Flutter/mobile development, full-stack development, IEEE/community/news updates
- Main visual style: dark indigo background, pink accent, glass cards, animated particles, Framer Motion transitions, Tailwind CSS utilities
- Build system: Create React App via `react-scripts`
- Routing: `react-router-dom`
- Deployment target: static React build, configured for Vercel rewrites

## 2. Current Workspace/Git State

Current Git status when this recap was created:

```text
 M package-lock.json
?? .npm-cache/
?? Makefile
?? web.cmd
?? PROJECT_RECAP.md
```

Notes:

- `Makefile` and `web.cmd` exist in the workspace but are currently untracked by Git.
- `package-lock.json` is modified.
- `.npm-cache/` is untracked and is likely a local npm cache folder. It usually should not be committed.
- `build/` exists and contains generated production output. It is not source code and normally should not be edited by hand.

## 3. How To Run

The project can be run through npm or through the Makefile.

### NPM Commands

```bash
npm install
npm start
npm run build
npm test -- --watchAll=false
```

### Makefile Commands

```bash
make install
make start
make web
make dev
make build
make test
```

Makefile behavior:

- `make install` runs `npm install`
- `make start`, `make web`, and `make dev` run `npm start`
- `make build` runs `npm run build`
- `make test` runs `npm test -- --watchAll=false`

There is also a Windows helper file:

```text
web.cmd
```

It runs:

```bat
@echo off
npm start
```

## 4. Main Technologies

### Runtime / Framework

- React `18.2.0`
- React DOM `18.2.0`
- Create React App / `react-scripts 5.0.1`
- React Router DOM `7.12.0`

### Styling / UI

- Tailwind CSS `3.3.5`
- PostCSS
- Autoprefixer
- Custom CSS files under `src/assets/css`
- Custom animation CSS under `src/styles/animations.css`
- React Icons
- Lucide React

### Animation / Effects

- Framer Motion
- React Typed
- React TSParticles / TSParticles

### Forms / Contact

- React Hook Form
- EmailJS browser SDK
- React Toastify

### Utility / Metrics

- dotenv
- web-vitals

## 5. Top-Level Files

### `package.json`

Defines the React project, dependencies, dev dependencies, scripts, ESLint config, and browser targets.

Important scripts:

- `start`: starts the React dev server
- `build`: creates production build
- `test`: runs the CRA test runner
- `eject`: ejects CRA config

### `package-lock.json`

Locks installed dependency versions. It is currently modified.

### `Makefile`

Convenience wrapper around npm commands. Useful because the active workflow appears to include `make install`.

### `web.cmd`

Windows shortcut script for starting the web app.

### `tailwind.config.js`

Tailwind configuration.

Important custom colors:

- `deep-indigo`: `#070640`
- `darker-indigo`: `#0c0b44`
- `footer-bg`: `#121151`
- `primary-pink`: `#fe3e57`
- `secondary-pink`: `#ff6b81`
- `whatsapp-green`: `#25D366`
- `linkedin-blue`: `#0077b5`

Important custom fonts:

- `sans`: `Inter`
- `base-font`: `Now`

Important custom shadow:

- `glow`: `0 0 20px rgba(254, 62, 87, 0.3)`

### `postcss.config.js`

Enables Tailwind CSS and Autoprefixer.

### `vercel.json`

Deployment configuration for Vercel.

Important behavior:

- Adds long-term immutable cache headers for `/static/*`, `/assets/*`, and common image formats.
- Rewrites all routes to `/index.html` so client-side React Router paths work on refresh.

### `.gitignore`

Currently ignores:

- `node_modules/`
- `temp_import.css`

It does not currently ignore `.npm-cache/`, `build/`, or other generated folders.

## 6. App Entry Flow

### `public/index.html`

The base HTML template.

Important values:

- Page title: `Fedi Hmida Portfolio`
- Description: `Fedi Hmida - Portfolio`
- Theme color: `#070640`
- Root div: `<div id="root"></div>`

### `src/index.js`

React entry point.

It:

- imports React and ReactDOM
- imports `App`
- imports `src/assets/css/fonts.css`
- imports `src/index.css`
- creates the React root on `#root`
- renders `<App />` inside `<React.StrictMode>`
- calls `reportWebVitals()`

### `src/App.js`

Main routing file.

Important behavior:

- Uses `BrowserRouter`
- Uses `ScrollToTop`
- Uses `AnimatePresence` for route transitions
- Uses lazy loading with `React.lazy` and `Suspense`
- Wraps each page in `AnimatedPage`
- Fallback while lazy routes load: full-screen `bg-deep-indigo`

## 7. Routes

The current app routes are:

| Route | Component | Purpose |
|---|---|---|
| `/` | `Home` | Landing/home page |
| `/about` | `About` | Bio, core competencies, recommendations, services |
| `/portfolio` | `Portfolio` | Project listing with filters |
| `/portfolio/smart-claim` | `SmartClaimDetails` | SmartClaim project case study |
| `/portfolio/solar-flow` | `SolarFlowDetails` | SolarFlow project case study |
| `/portfolio/onboardify` | `OnboardifyDetails` | Onboardify project case study |
| `/portfolio/pro-link` | `ProLinkDetails` | Pro-Link project case study |
| `/resume` | `Resume` | CV/resume page |
| `/news` | `NewsList` | Paginated news/blog list |
| `/news/13` | `NewsIESCongress` | IEEE IES SYP Congress |
| `/news/12` | `NewsEnergyUtopia` | Energy Utopia Challenge |
| `/news/11` | `NewsAWS` | AI Model Deployment on AWS |
| `/news/1` | `NewsSmartClaim` | SmartClaim launch/news |
| `/news/7` | `NewsOnboardify` | Onboardify launch/news |
| `/news/2` | `NewsDataScience` | Data science recommendation |
| `/news/3` | `NewsRecognition` | Flutter/mobile recommendation |
| `/news/4` | `NewsInternship` | End of ADDINN internship |
| `/news/5` | `NewsIEEESYP` | IEEE IES SYP Congress older article |
| `/news/6` | `NewsInternshipStart` | Start of ADDINN internship |
| `/news/8` | `NewsIEEEXtreme` | IEEEXtreme competition |
| `/news/9` | `NewsTSYP` | IEEE TSYP12 Congress |
| `/news/10` | `NewsGraduation` | Graduation news |
| `/contact` | `Contact` | Contact page |
| `*` | `NotFound` | 404 page |

## 8. Main Pages

### `src/pages/Home.jsx`

The main landing page.

Main sections:

- Animated particles background
- Navbar
- Hero section
- About/skills/services tab section
- Portfolio preview
- News preview
- Footer

Hero details:

- Shows name: Fedi Hmida
- Rotating roles:
  - `Junior Flutter Developer`
  - `Data Science & AI Engineering Student`
- Hero image: `src/assets/images/slider/Fedi2.0.png`
- Social links:
  - Facebook: `https://www.facebook.com/fadi.hmidahmida`
  - LinkedIn: `https://www.linkedin.com/in/fedi-hmida/`
  - GitHub: `https://github.com/Fedi-Hmida`

Home tabs:

- `services`
- `hard skills`
- `soft skills`
- `project methodologies`

Soft skills shown:

- Communication
- Project Management
- Team Collaboration
- Analytical
- Organization
- Creativity

Hard skills shown:

- Flutter
- YOLO
- TensorFlow
- React
- Next.js
- Node.js
- NestJS
- Git
- PyTorch
- OpenCV
- FastAPI
- Docker

Services shown:

- Cross-Platform Mobile Apps
- AI & Computer Vision
- Full-Stack Web Development
- Data Science & ML Solutions

Methodologies shown:

- Scrum
- Kanban
- Scrumban
- Agile

Portfolio preview projects:

- SmartClaim
- Onboardify
- SolarFlow
- Pro-Link

News preview items:

- IEEE IES SYP Congress
- 1st Place at Energy Utopia Challenge
- AI Model Deployment on AWS

### `src/pages/About.jsx`

About page.

Main sections:

- Particles background
- Navbar
- `AboutHero`
- Main bio with image
- Core competencies
- Professional recognition cards
- Career focus
- CV download and portfolio link buttons
- `ServicesSection`
- Footer

Bio details:

- Fedi is described as a Data Science & AI Engineering student at ESPRIT.
- Holds Bachelor's degree in Computer Engineering from 2024.
- Focus areas include Flutter, computer vision, YOLO, TensorFlow, PyTorch, OpenCV, Next.js, NestJS, Symfony, intelligent automation.

Core competencies:

- Cross-Platform Mobile Development (Flutter)
- AI & Computer Vision Integration (YOLO)
- Data Science & Machine Learning
- Full-Stack Web Development (Symfony/Next.js)
- IoT & Energy Management Systems
- Agile Development & Team Collaboration

Recognition files linked:

- `/assets/cv/Recommendation_FediHmida.pdf`
- `/assets/cv/Fedi_Hmida_Letter%20of%20Recommendation.pdf`

Primary CTA:

- Download CV from `/assets/cv/Cv_Ang.pdf`
- View Portfolio at `/portfolio`

### `src/pages/Portfolio/Portfolio.jsx`

Portfolio listing page.

Features:

- Particle background
- Navbar
- Section title: `My Projects`
- Filter buttons
- Animated project grid
- Footer

Filters:

- `all`: All Projects
- `ia`: IA
- `mobile`: Mobile Apps
- `web`: Web Apps

Projects:

1. SmartClaim
   - Category: `ia`, `mobile`
   - Tech: Flutter, AI, YOLO
   - Description: intelligent insurance claim management with real-time AI car damage detection
   - Link: `/portfolio/smart-claim`

2. SolarFlow App
   - Category: `mobile`
   - Tech: Flutter, IoT, Energy
   - Description: real-time solar energy management and consumption monitoring
   - Link: `/portfolio/solar-flow`

3. Onboardify
   - Category: `web`
   - Tech: JavaFX, Symfony, HR Tech
   - Description: gamified onboarding platform
   - Link: `/portfolio/onboardify`

4. Pro-Link
   - Category: `mobile`
   - Tech: Flutter, Networking
   - Description: professional networking mobile application
   - Link: `/portfolio/pro-link`

### `src/pages/Portfolio/SmartClaimDetails.jsx`

SmartClaim project case study.

Project info:

- Name: SmartClaim
- Category: Mobile App / Computer Vision
- Duration: 2 months internship
- Main technologies:
  - Flutter
  - Dart
  - FastAPI
  - YOLO v8s
  - OpenCV
  - PyTorch
  - MongoDB
  - OCR
  - Python

Description:

- AI-powered mobile application for car insurance claims.
- Users take photos of vehicle damage.
- Computer vision analyzes damage.
- OCR extracts relevant data.
- App estimates repair costs and reduces claim processing time.

Videos:

- `src/assets/videos/Smart_claim/Demo_Mobile.mp4`
- `src/assets/videos/Smart_claim/Data Demo.mp4`

Special behavior:

- Uses React refs to play/pause videos.
- Only one SmartClaim video plays at a time.

### `src/pages/Portfolio/SolarFlowDetails.jsx`

SolarFlow project case study.

Project info:

- Name: SolarFlow App
- Category: Mobile App Development
- Duration: 3 months
- Main technologies:
  - Flutter
  - Dart
  - Firebase
  - IoT Integration

Description:

- Cross-platform mobile app for monitoring and managing solar-powered devices.
- Tracks energy production and consumption.
- Controls connected systems.
- Optimizes renewable energy usage.
- Built as an internship project focused on IoT and energy efficiency.

Features:

- Real-time monitoring
- IoT control
- Responsive UI
- Optimization dashboard

Videos:

- `src/assets/videos/user2.0.mp4`
- `src/assets/videos/Maintennace2.0.mp4`
- `src/assets/videos/admin2.0.mp4`

### `src/pages/Portfolio/OnboardifyDetails.jsx`

Onboardify project case study.

Project info:

- Name: Onboardify
- Category: JavaFX & Symfony / HR Tech
- Duration: 4 months
- Main technologies:
  - JavaFX
  - Symfony
  - PHP
  - MySQL
  - HTML
  - CSS
  - JavaScript

Description:

- Smart employee onboarding platform.
- Combines JavaFX desktop app and Symfony web app.
- Built as an academic project.
- Focuses on resource management, training, feedback, well-being, HR visibility, and gamified onboarding.

Feature videos:

- Resource Management: `src/assets/videos/ressource.mp4`
- Project Assignment & Tracking: `src/assets/videos/Projet.mp4`
- Interactive Training Quizzes: `src/assets/videos/quiz.mp4`
- Posts & Reclamation System: `src/assets/videos/report.mp4`
- Well-being Program Integration: `src/assets/videos/program.mp4`

### `src/pages/Portfolio/ProLinkDetails.jsx`

Pro-Link project case study.

Project info:

- Name: Pro-Link App
- Category: Mobile App Development
- Duration: 6 weeks
- Main technologies:
  - Flutter / FlutterFlow
  - Dart
  - Firebase

Description:

- Mobile application connecting freelancers with clients.
- Inspired by platforms like Fiverr.
- Users can create profiles, post or browse services, manage project requests, submit proposals, communicate, and use review/rating features.

Features:

- Account creation
- Proposal management
- Review and rating system
- Seamless communication

### `src/pages/Resume.jsx`

Resume/CV page.

Main sections:

- Particles background
- Navbar
- Typed hero title: `Resume`, `Curriculum Vitae`, `My Journey`
- Download PDF button
- Professional Experience
- Technical Skills
- Education
- Recommendation Letters
- Footer

CV download:

- `/assets/cv/Cv_Ang.pdf`

Professional experience:

1. Data & Mobile Developer Intern
   - Company: Addinn Group
   - Duration: Summer 2025, 2 months
   - Work:
     - Developed SmartClaim Flutter app
     - Integrated YOLOv8 for real-time car damage detection
     - Mentions 92.9% precision
     - Built FastAPI backend
     - Containerized with Docker

2. Msign Final Year Project Internship
   - Company: Msign
   - Duration: Feb 2024 - Jun 2024
   - Work:
     - Designed and implemented Energy Monitoring System
     - Created SolarFlow Flutter app for real-time energy analytics

Technical skill groups:

- Mobile Development
- Artificial Intelligence
- Data Science & ML
- Full Stack Development
- Databases

Education:

- Data Science & AI Engineering Student, ESPRIT High School of Engineering, currently enrolled
- Bachelor's Degree in Computer Engineering, Higher Institute of Computer Science of Mahdia, 2024

Recommendations:

- Houssem Eddine FADHLI, Senior Flutter Developer at ADDINN Group
- Nivine ATTOUE, Data Science Doctor in Paris

### `src/pages/News/NewsList.jsx`

Paginated news/blog listing page.

Features:

- Particles background
- Navbar
- Typed title: `Latest News`, `My Blog`, `Updates`
- `NewsCard` grid
- Pagination
- 4 items per page
- Footer

News items:

| ID | Title | Date | Link |
|---|---|---|---|
| 13 | IEEE IES SYP Congress | 10-01-2026 | `/news/13` |
| 12 | 1st Place at the Energy Utopia Challenge | 26-12-2025 | `/news/12` |
| 11 | AI Model Deployment on AWS Certification | 30-11-2025 | `/news/11` |
| 1 | SmartClaim - Digital Claims Assistant Platform | 28-11-2025 | `/news/1` |
| 2 | Data Science Excellence Recognition | 19-09-2025 | `/news/2` |
| 3 | Professional Recognition from Senior Flutter Engineer | 1-09-2025 | `/news/3` |
| 4 | End of My Internship - ADDINN Group | 1-09-2025 | `/news/4` |
| 5 | IEEE IES SYP Congress | Recent | `/news/5` |
| 6 | Internship Start at ADDINN | July 3, 2025 | `/news/6` |
| 7 | Onboardify | Mai 26, 2025 | `/news/7` |
| 8 | IEEEXtreme | Mars 15, 2025 | `/news/8` |
| 9 | IEEE TSYP12 Congress | Dec 24, 2024 | `/news/9` |
| 10 | Graduation | Juin 13, 2024 | `/news/10` |

### News Detail Pages

All news detail pages use a similar layout:

- `ScrollToTop`
- background gradient
- subtle `ParticlesBackground`
- `Navbar`
- breadcrumb with "Back to News"
- main content column
- sidebar/details card
- `Footer`
- Framer Motion animation variants

Individual news pages:

- `NewsAWS.jsx`: AI Model Deployment on AWS certification, links to `/assets/docs/AI_AWS.pdf`
- `NewsDataScience.jsx`: recommendation from Dr. Nivine ATTOUE, AI/ML and data exploration recognition
- `NewsEnergyUtopia.jsx`: first place at Energy Utopia Challenge, IEEE TSYP Congress December 2025
- `NewsIESCongress.jsx`: IEEE IES SYP Congress experience, international networking and community
- `NewsGraduation.jsx`: Bachelor's degree graduation in Computer Engineering / IoT
- `NewsIEEESYP.jsx`: IEEE IES SYP Congress, Best Poster Award, IEEE ESPRIT Student Branch
- `NewsIEEEXtreme.jsx`: IEEEXtreme 18.0, 24-hour programming competition
- `NewsInternship.jsx`: end of 2-month ADDINN Group internship
- `NewsInternshipStart.jsx`: start of 2-month ADDINN Group internship
- `NewsOnboardify.jsx`: Onboardify launch, CodeRockers team, JavaFX/Symfony project
- `NewsRecognition.jsx`: recommendation from Houssem Eddine FADHLI, Flutter/mobile development recognition
- `NewsSmartClaim.jsx`: SmartClaim project launch, AI damage detection, Flutter, FastAPI, Docker, YOLOv8
- `NewsTSYP.jsx`: TSYP12 Congress experience, innovation/diversity/networking

### `src/pages/Contact.jsx`

Contact page.

Main structure:

- Particles background
- Navbar
- Contact hero
- Centered contact form
- Connect section
- Footer

### `src/pages/NotFound.jsx`

404 fallback page.

Features:

- Particles background
- Large gradient `404`
- Message: `Page Not Found`
- Button back to home

## 9. Shared Components

### `src/components/Navbar.jsx`

Main navigation.

Features:

- Fixed top navbar
- Transparent at top, dark blurred background after scrolling more than 50px
- Logo links to `/`
- Desktop menu
- Mobile drawer
- Active route highlighting
- `Let's Talk` CTA to `/contact`

Links:

- Home
- About
- Portfolio
- Resume
- News
- Contact

### `src/components/Footer.jsx`

Footer.

Features:

- Logo
- Footer nav links
- Social icons
- Dynamic current year

Social links:

- Facebook
- LinkedIn
- GitHub

### `src/components/ParticlesBackground.jsx`

Full-screen animated particle background.

Important config:

- Background: `#070640`
- Particle color: `#fe3e57`
- Link color: `#fe3e57`
- Number of particles: 50
- Hover mode: grab
- FPS limit: 120
- `fullScreen.enable`: true
- `zIndex`: -1

### `src/components/AnimatedPage.jsx`

Route transition wrapper.

Animation:

- initial: opacity 0, y 20
- animate: opacity 1, y 0
- exit: opacity 0, y -20
- duration: 0.3s

### `src/components/ScrollToTop.jsx`

Scrolls the window to the top whenever the route pathname changes.

### `src/components/SectionTitle.jsx`

Reusable animated section title with pink gradient underline.

### `src/components/Portfolio/ProjectCard.jsx`

Reusable project card.

Features:

- Framer Motion hover lift
- Floating image animation
- Hover overlay with tech tags
- `View Details` link
- Uses `project.image`, `project.title`, `project.description`, `project.tech`, `project.link`, and optional `project.scale`

Important note:

- It uses a normal `<a href={project.link}>`, not React Router `<Link>`.

### `src/components/News/NewsCard.jsx`

Reusable news card.

Features:

- Image
- Author
- Date
- Title linking to detail page
- Description
- `Read More`
- Hover scale/lift animation

### Contact Components

#### `src/components/Contact/ContactHero.jsx`

Simple animated hero:

- Title: `Contact Me`
- Subtitle: `I'd love to hear from you.`

#### `src/components/Contact/ContactForm.jsx`

Contact form using EmailJS.

Fields:

- First Name
- Last Name
- Email Address
- Subject
- Message

Validation:

- All fields required
- Email pattern validation
- Message max length: 500

EmailJS values currently hardcoded:

```text
serviceID: service_bl8wnom
templateID: template_zcdr7lh
publicKey: 92zpmRJm5L2jY4o0k
```

Template params:

- `from_name`
- `to_name`
- `message`
- `reply_to`
- `subject`

Success behavior:

- Shows toast: `Message sent successfully!`
- Resets form

Error behavior:

- Shows error toast with EmailJS error text/message
- Logs the error to console

Important note:

- The EmailJS values are in frontend code. EmailJS public keys are meant for browser usage, but service/template IDs and debug console logs are still worth reviewing before production polish.

#### `src/components/Contact/ConnectSection.jsx`

Contact/social section.

Direct actions:

- WhatsApp: `https://wa.me/21693722130`
- LinkedIn: `https://www.linkedin.com/in/fedi-hmida/`
- Email: `mailto:fedi.hmida@ieee.org`

Contact info:

- Location: Tunis
- Email: `fedi.hmida@ieee.org`
- Phone: `+216 93 722 130`

Includes:

- Google Maps iframe for Tunis
- Social row

Important note:

- Facebook social link in this component is currently `#`, while other areas use the real Facebook URL.

### About Components

#### `src/components/About/AboutHero.jsx`

About page hero with floating decorative shape images from `src/assets/images/shape`.

#### `src/components/About/ServicesSection.jsx`

Reusable services section used on the About page.

Services:

- Cross-Platform Mobile Apps
- AI & Computer Vision
- Full-Stack Web Development
- Data Science & ML Solutions

Each service has a tech stack shown through flip cards.

#### `src/components/About/ServiceCard.jsx`

3D flip-card component.

Front:

- service icon
- title
- description

Back:

- tech stack grid with icons

### Resume Components

#### `src/components/Resume/ExperienceCard.jsx`

Glass card for professional experience.

Props:

- `role`
- `company`
- `duration`
- `children`

#### `src/components/Resume/EducationCard.jsx`

Education card.

Props:

- `degree`
- `institution`
- `year`

#### `src/components/Resume/SkillCard.jsx`

Technical skill card.

Props:

- `title`
- `skills`
- `type`
- `index`

Icon mapping by `type`:

- mobile
- backend
- ai
- frontend
- database
- devops
- ml
- fullstack

Also parses skills written like `Name (Description)` and displays the name and description separately.

#### `src/components/Resume/RecommendationCard.jsx`

Recommendation letter card.

Features:

- LinkedIn icon/link
- View letter
- Download letter

## 10. Styling Files

### `src/index.css`

Main app-level CSS.

Includes:

- Tailwind base/components/utilities
- Imports `src/styles/animations.css`
- Defines custom utility classes:
  - `.glass`
  - `.glass-card`
  - `.glass-input`
- Body background: `#070640`
- Body text color: white
- Custom scrollbar:
  - Track: `#070640`
  - Thumb: `#fe3e57`
  - Hover: `#ff6b81`

### `src/styles/animations.css`

Defines `.shine-effect`.

Behavior:

- Creates a shine overlay on hover.
- Used for hover polish in parts of the About/Home sections.

### `src/assets/css/*`

Legacy/theme CSS assets exist in this folder.

Count: 20 CSS files.

Notable files:

- `animate.css`
- `custom.css`
- `flaticon.css`
- `font-awesome.min.css`
- `fonts.css`
- `global.css`
- `responsive-fixes.css`
- `social-icons.css`
- `style.css`
- `swiper.min.css`
- `themify-icons.css`

`src/index.js` imports `src/assets/css/fonts.css`.
`src/pages/Home.jsx` imports `src/assets/css/social-icons.css`.

## 11. Assets

### Source Asset Counts

Inside `src`, discovered file counts by extension:

| Extension | Count |
|---|---:|
| `.css` | 21 |
| `.eot` | 10 |
| `.gif` | 4 |
| `.html` | 1 |
| `.jpg` | 77 |
| `.js` | 12 |
| `.jsx` | 42 |
| `.map` | 2 |
| `.mp4` | 11 |
| `.otf` | 4 |
| `.pdf` | 5 |
| `.png` | 68 |
| `.svg` | 11 |
| `.ttf` | 6 |
| `.woff` | 5 |
| `.woff2` | 1 |

Inside `public`, discovered file counts:

| Extension | Count |
|---|---:|
| `.html` | 1 |
| `.json` | 1 |
| `.pdf` | 6 |

### Important Asset Folders

#### `src/assets/images`

Main image source folder.

Important subfolders:

- `about`
- `addinn`
- `blog`
- `blog-details`
- `case`
- `fancybox`
- `gift`
- `icon`
- `instragram`
- `new8`
- `new9`
- `new10`
- `new12`
- `new13`
- `news6`
- `Portfolio`
- `project`
- `protfolio`
- `recent-posts`
- `shape`
- `slider`
- `testimonials`
- `wpo-service`

Important images used directly in pages:

- `src/assets/images/slider/Fedi2.0.png`
- `src/assets/images/flogo.png`
- `src/assets/images/Portfolio/New Logo SmartClaim.png`
- `src/assets/images/Portfolio/New Logo SmartClaim2.png`
- `src/assets/images/logo_1555.png`
- `src/assets/images/logo_15553.png`
- `src/assets/images/logo3.png`
- `src/assets/images/logo31.png`
- `src/assets/images/FlutterFlow.png`
- `src/assets/images/FlutterFlow2.png`
- `src/assets/images/AI_AWS.jpg`
- `src/assets/images/addinn/ADDINN.png`
- `src/assets/images/new8/Hou.png`
- `src/assets/images/new9/nivine.png`
- `src/assets/images/new10/tesa.jpg`
- `src/assets/images/new12/tsyp1.jpg`
- `src/assets/images/new12/tsyp2.jpg`
- `src/assets/images/new13/ies.jpg`
- `src/assets/images/news6/me 2.jpg`
- `src/assets/images/pf1.png`
- `src/assets/images/pf2.png`
- `src/assets/images/ts.png`
- `src/assets/images/certif.png`
- `src/assets/images/Fedi.jpg`

#### `src/assets/videos`

Video assets for project case studies.

Important videos:

- `src/assets/videos/user2.0.mp4`
- `src/assets/videos/Maintennace2.0.mp4`
- `src/assets/videos/admin2.0.mp4`
- `src/assets/videos/program.mp4`
- `src/assets/videos/Projet.mp4`
- `src/assets/videos/quiz.mp4`
- `src/assets/videos/report.mp4`
- `src/assets/videos/ressource.mp4`
- `src/assets/videos/Smart_claim/Data Demo.mp4`
- `src/assets/videos/Smart_claim/Demo_Mobile.mp4`

There is also `src/assets/videos/user33.0.mp4`, but it was not seen as directly imported in the inspected page code.

#### `src/assets/cv`

CV and recommendation PDFs:

- `Cv_Ang.pdf`
- `CV6.pdf`
- `fedi-hmida-cv.pdf`
- `Fedi_Hmida_Letter of Recommendation.pdf`
- `Recommendation_FediHmida.pdf`

#### `public/assets/cv`

Publicly served CV/recommendation PDFs. These are used by browser URLs like `/assets/cv/Cv_Ang.pdf`.

Files:

- `Cv_Ang.pdf`
- `CV6.pdf`
- `fedi-hmida-cv.pdf`
- `Fedi_Hmida_Letter of Recommendation.pdf`
- `Recommendation_FediHmida.pdf`

#### `public/assets/docs`

Publicly served document:

- `AI_AWS.pdf`

Used by `NewsAWS.jsx` via `/assets/docs/AI_AWS.pdf`.

### `build/`

Generated production build folder.

Contains:

- `build/index.html`
- `build/asset-manifest.json`
- `build/manifest.json`
- hashed CSS files
- hashed JS bundles/chunks
- copied media assets
- copied public docs/CV files

Important note:

- `build/` should be regenerated with `npm run build` or `make build` after source changes.
- Do not make source edits inside `build/`, because they will be overwritten.

## 12. File/Folder Map

Important project structure:

```text
.
|-- Makefile
|-- package.json
|-- package-lock.json
|-- postcss.config.js
|-- tailwind.config.js
|-- vercel.json
|-- web.cmd
|-- public/
|   |-- index.html
|   |-- manifest.json
|   `-- assets/
|       |-- cv/
|       `-- docs/
|-- src/
|   |-- App.js
|   |-- index.js
|   |-- index.css
|   |-- web-vitals.js
|   |-- styles/
|   |   `-- animations.css
|   |-- pages/
|   |   |-- Home.jsx
|   |   |-- About.jsx
|   |   |-- Contact.jsx
|   |   |-- Resume.jsx
|   |   |-- NotFound.jsx
|   |   |-- Portfolio/
|   |   `-- News/
|   |-- components/
|   |   |-- Navbar.jsx
|   |   |-- Footer.jsx
|   |   |-- AnimatedPage.jsx
|   |   |-- ScrollToTop.jsx
|   |   |-- SectionTitle.jsx
|   |   |-- ParticlesBackground.jsx
|   |   |-- About/
|   |   |-- Contact/
|   |   |-- News/
|   |   |-- Portfolio/
|   |   `-- Resume/
|   `-- assets/
|       |-- css/
|       |-- cv/
|       |-- fonts/
|       |-- images/
|       |-- js/
|       `-- videos/
`-- build/
```

Source component/page files discovered:

```text
src/components/About/AboutHero.jsx
src/components/About/ServiceCard.jsx
src/components/About/ServicesSection.jsx
src/components/AnimatedPage.jsx
src/components/Contact/ConnectSection.jsx
src/components/Contact/ContactForm.jsx
src/components/Contact/ContactHero.jsx
src/components/Footer.jsx
src/components/Navbar.jsx
src/components/News/NewsCard.jsx
src/components/ParticlesBackground.jsx
src/components/Portfolio/ProjectCard.jsx
src/components/Resume/EducationCard.jsx
src/components/Resume/ExperienceCard.jsx
src/components/Resume/RecommendationCard.jsx
src/components/Resume/SkillCard.jsx
src/components/ScrollToTop.jsx
src/components/SectionTitle.jsx
src/pages/About.jsx
src/pages/Contact.jsx
src/pages/Home.jsx
src/pages/News/NewsAWS.jsx
src/pages/News/NewsDataScience.jsx
src/pages/News/NewsEnergyUtopia.jsx
src/pages/News/NewsGraduation.jsx
src/pages/News/NewsIEEESYP.jsx
src/pages/News/NewsIEEEXtreme.jsx
src/pages/News/NewsIESCongress.jsx
src/pages/News/NewsInternship.jsx
src/pages/News/NewsInternshipStart.jsx
src/pages/News/NewsList.jsx
src/pages/News/NewsOnboardify.jsx
src/pages/News/NewsRecognition.jsx
src/pages/News/NewsSmartClaim.jsx
src/pages/News/NewsTSYP.jsx
src/pages/NotFound.jsx
src/pages/Portfolio/OnboardifyDetails.jsx
src/pages/Portfolio/Portfolio.jsx
src/pages/Portfolio/ProLinkDetails.jsx
src/pages/Portfolio/SmartClaimDetails.jsx
src/pages/Portfolio/SolarFlowDetails.jsx
src/pages/Resume.jsx
```

## 13. Important URLs And External Links

Social/profile links:

- Facebook: `https://www.facebook.com/fadi.hmidahmida`
- LinkedIn: `https://www.linkedin.com/in/fedi-hmida/`
- GitHub: `https://github.com/Fedi-Hmida`
- WhatsApp: `https://wa.me/21693722130`
- Email: `mailto:fedi.hmida@ieee.org`

Other LinkedIn links used:

- Houssem Eddine FADHLI:
  - Resume card: `https://www.linkedin.com/in/houssemeddinefadhli81/`
  - NewsRecognition detail: `https://www.linkedin.com/in/houssem-eddine-fadhli-316886134/`
- Nivine ATTOUE:
  - Resume card: `https://www.linkedin.com/in/nivine-attoue-809659161/`
  - NewsDataScience detail: `https://www.linkedin.com/in/nivine-attoue/`

Contact/map:

- Google Maps iframe embedded for Tunis, Tunisia.

Downloads:

- `/assets/cv/Cv_Ang.pdf`
- `/assets/cv/Fedi_Hmida_Letter%20of%20Recommendation.pdf`
- `/assets/cv/Recommendation_FediHmida.pdf`
- `/assets/docs/AI_AWS.pdf`

## 14. Design System Notes

Main visual language:

- Dark blue/indigo backgrounds
- Pink primary accent
- Glassmorphism cards
- Hover lift effects
- Motion-driven page transitions
- Particles background
- Typed text effects
- Project cards with overlays
- News cards with image previews
- Rounded cards and pill buttons

Common Tailwind classes/patterns:

- `bg-deep-indigo`
- `bg-darker-indigo`
- `text-primary-pink`
- `bg-primary-pink`
- `from-primary-pink to-secondary-pink`
- `glass-card`
- `shadow-glow`
- `rounded-xl`
- `backdrop-blur`

## 15. Known Issues / Cleanup Notes

These are not blockers, but they are useful to know before future edits.

1. Some text shows mojibake/encoding artifacts in source or terminal output.
   Examples seen:
   - `Iâ€™m`
   - `â€“`
   - `Â·`
   - encoded emoji fragments like `ðŸš€`

   This usually means text was pasted or saved with an encoding mismatch. The browser may or may not display it correctly depending on the actual file encoding. Worth cleaning if polish matters.

2. The project uses `react-router-dom` version `7.12.0`.
   Current imports such as `BrowserRouter`, `Routes`, `Route`, `Link`, and `useLocation` are compatible with the style used here.

3. `ProjectCard.jsx` uses `<a href>` for internal project navigation.
   It works, but React Router `<Link>` would avoid full page reload behavior.

4. `ConnectSection.jsx` has Facebook link as `#`.
   Other components use the real Facebook link.

5. `build/` is checked into the workspace.
   This is generated output. If committed, it increases repo size and can become stale.

6. `.npm-cache/` is untracked.
   It should probably be ignored unless there is a reason to commit local cache files.

7. EmailJS details are hardcoded in `ContactForm.jsx`.
   This can work for EmailJS, but review console logs and service/template IDs before production.

8. Some old CSS/JS/theme files exist under `src/assets/css` and `src/assets/js`.
   Not all are imported by the current React code. They may be legacy assets from a template.

9. There are duplicate asset copies:
   - source assets under `src/assets`
   - public assets under `public/assets`
   - generated copies under `build/static/media` and `build/assets`

   This is normal in a migrated or built React project, but future cleanup should be careful not to remove files still referenced by imports or public URLs.

## 16. High-Level Mental Model

The project is a React portfolio site with five major content pillars:

1. Home
   - first impression, role animation, skills/services tabs, portfolio preview, news preview

2. About
   - profile story, competencies, recognition, services/offerings

3. Portfolio
   - project grid plus detailed case studies for SmartClaim, SolarFlow, Onboardify, and Pro-Link

4. Resume
   - experience, skills, education, recommendation PDFs, CV download

5. News
   - blog/update list and detailed article pages about certifications, internship updates, IEEE events, awards, and project launches

The shared UI pieces are:

- `Navbar`
- `Footer`
- `ParticlesBackground`
- `AnimatedPage`
- `ScrollToTop`
- `SectionTitle`
- Cards for project/news/resume/service sections

The app is mostly content-driven. Most data is currently hardcoded directly inside page components instead of coming from JSON, CMS, or API files.

## 17. Best Next Steps For Future Maintenance

Recommended improvements:

1. Add or update `.gitignore`
   - ignore `.npm-cache/`
   - decide whether `build/` should be ignored or committed

2. Clean encoding artifacts
   - replace mojibake text with correct apostrophes/dashes or ASCII alternatives

3. Move repeated data into separate data files
   - projects
   - news items
   - skills
   - social links
   - resume entries

4. Standardize internal links
   - use React Router `Link` for app routes instead of `<a href>` where possible

5. Review public/private config
   - consider environment variables for EmailJS IDs if desired

6. Remove unused legacy assets after verifying imports
   - especially old CSS/JS/template assets

7. Add tests only where valuable
   - basic render tests for routes
   - contact form validation
   - portfolio filter behavior

## 18. Quick Summary

This is a full personal portfolio React app for Fedi Hmida. It has a polished dark animated interface, route-based pages, a portfolio with four case studies, a resume/CV section, a contact form powered by EmailJS, a news/blog section with 13 entries, lots of images/videos/PDF assets, and Vercel static deployment support. The current source of truth is mainly inside `src/pages` and `src/components`; the `build/` folder is generated output.

