import { motion } from "framer-motion";
import {
  FaArrowLeft,
  FaArrowRight,
  FaBalanceScale,
  FaBrain,
  FaChartLine,
  FaCheckCircle,
  FaCode,
  FaDatabase,
  FaExternalLinkAlt,
  FaGithub,
  FaHeartbeat,
  FaPlay,
  FaProjectDiagram,
  FaServer,
  FaShieldAlt,
  FaExclamationTriangle,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import ParticlesBackground from "../../components/ParticlesBackground";
import sahitnaSafeVisual from "../../assets/images/Portfolio/ML2.png";
import sahitnaSafeDemoVideo from "../../assets/videos/SahitnaSafe/sahitna-safe-demo.mp4";

const githubUrl = "https://github.com/Fedi-Hmida/MLProject_Fedi";

const metricCards = [
  { label: "Accuracy", value: "98.83%", detail: "Selected Logistic Regression model" },
  { label: "Malignant recall", value: "98.44%", detail: "Sensitivity prioritized for safer screening support" },
  { label: "ROC-AUC", value: "0.9975", detail: "Near-perfect separation on the reported test split" },
  { label: "False negatives", value: "1", detail: "One malignant case missed on the test set" },
];

const modelComparison = [
  ["Logistic Regression", "98.83%", "98.44%", "99.07%", "0.9975"],
  ["Random Forest", "98.25%", "95.31%", "100%", "0.9972"],
  ["XGBoost", "97.66%", "96.88%", "98.13%", "0.9948"],
  ["SVM", "97.08%", "95.31%", "98.13%", "0.9932"],
  ["MLP", "96.49%", "93.75%", "98.13%", "0.9889"],
];

const crispSteps = [
  "Business Understanding",
  "Data Understanding",
  "Data Preparation",
  "Modeling",
  "Evaluation",
  "Deployment",
];

const roleItems = [
  {
    title: "CRISP-DM Pipeline",
    area: "Methodology",
    responsibility: "Developed the CRISP-DM pipeline.",
    impact: "Covered problem framing, data understanding, preparation, modeling, evaluation, and deployment reporting.",
    icon: <FaProjectDiagram />,
  },
  {
    title: "Model Benchmarking",
    area: "ML evaluation",
    responsibility: "Compared Logistic Regression, SVM, Random Forest, MLP, and XGBoost.",
    impact: "Built a clear model-selection story instead of relying on a single headline score.",
    icon: <FaChartLine />,
  },
  {
    title: "Leakage-Safe Preprocessing",
    area: "Data discipline",
    responsibility: "Used StandardScaler fitted only on training data.",
    impact: "Protected evaluation credibility and avoided preprocessing leakage.",
    icon: <FaDatabase />,
  },
  {
    title: "Clinical Metric Focus",
    area: "Risk framing",
    responsibility: "Focused evaluation on sensitivity, false negatives, specificity, and ROC-AUC.",
    impact: "Prioritized the error types that matter most for a medical decision-support prototype.",
    icon: <FaShieldAlt />,
  },
  {
    title: "API Integration Planning",
    area: "FastAPI",
    responsibility: "Planned FastAPI integration for /health, /predict, and /batch endpoints.",
    impact: "Connected saved ML artifacts to a reviewable prediction API path.",
    icon: <FaServer />,
  },
  {
    title: "Frontend and Reporting",
    area: "Next.js / docs",
    responsibility: "Designed the Next.js frontend architecture and documentation.",
    impact: "Made the ML prototype easier to review without presenting it as a clinical product.",
    icon: <FaCode />,
  },
];

const architectureLayers = [
  {
    icon: <FaCode />,
    title: "Next.js frontend",
    layer: "Interface",
    text: "A TypeScript and Tailwind CSS web interface for feature entry, result review, and risk communication.",
  },
  {
    icon: <FaServer />,
    title: "FastAPI backend",
    layer: "API",
    text: "Prediction API layer exposing health, single prediction, and batch prediction endpoints.",
  },
  {
    icon: <FaDatabase />,
    title: "Joblib persistence",
    layer: "Artifacts",
    text: "Saved artifacts for the best model, scaler, label encoder, and metadata.",
  },
];

const datasetCards = [
  { label: "Samples", value: "569", detail: "Total WDBC records" },
  { label: "Features", value: "30", detail: "Numerical diagnostic features" },
  { label: "Benign", value: "357", detail: "Benign cases" },
  { label: "Malignant", value: "212", detail: "Malignant cases" },
];

const preparationCards = [
  "Stratified 70/30 train-test split",
  "StandardScaler fitted only on training data",
  "Class imbalance handled with weighting",
  "CRISP-DM process from business understanding to deployment",
];

const selectedModelReasons = [
  { label: "Sensitivity", value: "98.44%", detail: "Highest malignant recall in the reported comparison" },
  { label: "False negatives", value: "1", detail: "Only one malignant case missed on the test split" },
  { label: "Specificity", value: "99.07%", detail: "Strong benign/malignant separation" },
  { label: "ROC-AUC", value: "0.9975", detail: "Near-perfect separation on the reported test split" },
];

const responsibleAiCards = [
  {
    title: "Transparency",
    icon: <FaBrain />,
    summary: "SHAP was included for prediction transparency, and the selected model was chosen partly for interpretability.",
    checks: ["SHAP", "Interpretable model choice", "Reviewable prediction behavior"],
  },
  {
    title: "Human Review",
    icon: <FaShieldAlt />,
    summary: "The project is framed around human-in-the-loop review instead of automated medical decisions.",
    checks: ["Human-in-the-loop review", "Clinical safety metrics", "False-negative awareness"],
  },
  {
    title: "Clear Boundaries",
    icon: <FaExclamationTriangle />,
    summary: "The prototype avoids unsupported clinical-readiness claims and states its limitations clearly.",
    checks: ["Academic prototype", "Not certified diagnosis", "Regulatory validation required"],
  },
];

const limitations = [
  "The WDBC dataset is old and was collected from 1993 to 1995.",
  "The work uses a single benchmark dataset and no external clinical validation.",
  "The prototype is not a certified medical device or production diagnosis system.",
  "Real medical use would require human-in-the-loop review and regulatory validation.",
];

const learnings = [
  {
    title: "Risk-First ML",
    area: "Clinical framing",
    text: "CRISP-DM keeps medical ML work tied to the real decision risk.",
  },
  {
    title: "Trustworthy Evaluation",
    area: "Preprocessing",
    text: "Leakage-safe preprocessing is essential for trustworthy evaluation.",
  },
  {
    title: "Metric Prioritization",
    area: "Model selection",
    text: "Clinical metric prioritization can matter more than headline accuracy.",
  },
  {
    title: "Explainable AI",
    area: "Reviewability",
    text: "Explainable AI and interpretability improve reviewability.",
  },
  {
    title: "Prototype Delivery",
    area: "FastAPI / Next.js",
    text: "FastAPI and Next.js are a practical path from model artifacts to a usable prototype.",
  },
];

const stack = [
  "Python",
  "scikit-learn",
  "XGBoost",
  "FastAPI",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "SHAP",
  "Joblib",
  "Makefile",
];

const SahitnaSafeDetails = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#070640] text-white">
      <ParticlesBackground />
      <Navbar />

      <main className="relative z-10">
        <section className="px-6 pb-16 pt-32 md:px-12 lg:px-20">
          <div className="mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-8 flex flex-wrap items-center gap-3 text-sm text-gray-300">
                <Link to="/" className="transition hover:text-[#00C2F0]">Home</Link>
                <span>/</span>
                <Link to="/portfolio" className="transition hover:text-[#00C2F0]">Portfolio</Link>
                <span>/</span>
                <span className="text-[#00C2F0]">Sahitna Safe</span>
              </div>

              <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
                <div>
                  <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#00C2F0]/30 bg-[#00C2F0]/10 px-4 py-2 text-sm font-semibold text-[#B9F4FF]">
                    <FaHeartbeat aria-hidden="true" />
                    Medical ML platform
                  </div>
                  <h1 className="mb-6 text-4xl font-black leading-tight md:text-6xl">
                    Sahitna Safe
                    <span className="block text-[#00C2F0]">Breast Cancer Detection ML Platform</span>
                  </h1>
                  <p className="mb-7 max-w-3xl text-lg leading-relaxed text-gray-200 md:text-xl">
                    A CRISP-DM machine-learning decision-support prototype that classifies breast tumors as benign or malignant using the WDBC dataset, model comparison, FastAPI, and Next.js.
                  </p>
                  <p className="mb-8 rounded-2xl border border-[#00C2F0]/30 bg-[#00C2F0]/10 p-4 text-sm font-semibold leading-relaxed text-[#D8FAFF]">
                    This project is an academic machine-learning decision-support prototype and is not a certified medical diagnosis system.
                  </p>

                  <div className="mb-8 flex flex-wrap gap-3">
                    {["September - December 2025", "CRISP-DM", "WDBC dataset", "FastAPI + Next.js"].map((item) => (
                      <span key={item} className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-gray-200">
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-4">
                    <a href={githubUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#00C2F0] px-6 py-3 font-semibold text-[#061429] shadow-lg shadow-[#00C2F0]/25 transition hover:bg-[#27D7FF]">
                      <FaGithub aria-hidden="true" />
                      View GitHub repository
                      <FaExternalLinkAlt className="text-xs" aria-hidden="true" />
                    </a>
                    <Link to="/portfolio" className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3 font-semibold text-white transition hover:border-[#00C2F0]/60 hover:bg-[#00C2F0]/10">
                      <FaArrowLeft aria-hidden="true" />
                      Back to Portfolio
                    </Link>
                  </div>
                </div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.7, delay: 0.1 }}
                  className="rounded-3xl border border-white/15 bg-white/10 p-4 shadow-2xl shadow-black/30 backdrop-blur-xl"
                >
                  <img src={sahitnaSafeVisual} alt="Sahitna Safe project logo" className="w-full rounded-2xl" loading="eager" decoding="async" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="px-6 py-10 md:px-12 lg:px-20">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {metricCards.map((metric) => (
                <motion.div key={metric.label} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45 }} className="rounded-2xl border border-white/15 bg-white/10 p-6 backdrop-blur-xl">
                  <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-gray-400">{metric.label}</p>
                  <p className="mb-3 text-4xl font-black text-[#00C2F0]">{metric.value}</p>
                  <p className="text-sm leading-relaxed text-gray-300">{metric.detail}</p>
                </motion.div>
              ))}
            </div>

            <motion.section
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mt-14 rounded-3xl border border-white/15 bg-white/10 p-5 shadow-2xl shadow-black/20 backdrop-blur-xl md:p-7"
              aria-labelledby="sahitna-demo-title"
            >
              <div className="mb-5">
                <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#00C2F0]/30 bg-[#00C2F0]/10 px-4 py-2 text-sm font-semibold text-[#B9F4FF]">
                  <FaPlay aria-hidden="true" />
                  Platform walkthrough
                </div>
                <h2 id="sahitna-demo-title" className="text-2xl font-black text-white md:text-3xl">
                  Demo Video
                </h2>
                <p className="mt-2 max-w-3xl text-sm leading-relaxed text-gray-300 md:text-base">
                  A walkthrough of the Sahitna Safe breast cancer detection ML platform and workflow.
                </p>
              </div>

              <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#08073d]/80 shadow-2xl shadow-black/30">
                <video
                  className="aspect-video w-full bg-black object-contain"
                  controls
                  preload="metadata"
                  aria-label="Sahitna Safe breast cancer detection machine-learning platform demo video"
                >
                  <source src={sahitnaSafeDemoVideo} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>

              <p className="mt-4 rounded-2xl border border-[#00C2F0]/25 bg-[#00C2F0]/10 p-4 text-sm font-semibold leading-relaxed text-[#D8FAFF]">
                This project is an academic machine-learning decision-support prototype and is not a certified medical diagnosis system.
              </p>
            </motion.section>

            <div className="mt-14 grid gap-10 lg:grid-cols-[minmax(0,1fr)_360px]">
              <div className="space-y-10">
                <section className="rounded-3xl border border-white/15 bg-white/10 p-7 backdrop-blur-xl md:p-9">
                  <div className="mb-5 flex items-center gap-3 text-[#00C2F0]"><FaShieldAlt className="text-2xl" aria-hidden="true" /><h2 className="text-2xl font-black">Problem</h2></div>
                  <p className="mb-6 leading-relaxed text-gray-200">
                    Early breast cancer detection matters because the cost of classification errors is not symmetric. In this project, false negatives were treated as the most dangerous error, so malignant recall and sensitivity were prioritized alongside accuracy, specificity, and ROC-AUC.
                  </p>
                  <div className="grid gap-4 md:grid-cols-3">
                    {[
                      ["Most dangerous error", "False negatives"],
                      ["Primary sensitivity focus", "Malignant recall"],
                      ["Balanced evaluation", "Accuracy, specificity, ROC-AUC"],
                    ].map(([label, value]) => (
                      <div key={label} className="rounded-2xl border border-[#00C2F0]/25 bg-[#00C2F0]/10 p-4">
                        <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#B9F4FF]">{label}</p>
                        <p className="mt-2 text-lg font-black text-white">{value}</p>
                      </div>
                    ))}
                  </div>
                </section>

                <section className="rounded-3xl border border-white/15 bg-white/10 p-7 backdrop-blur-xl md:p-9">
                  <div className="mb-5 flex items-center gap-3 text-[#00C2F0]"><FaProjectDiagram className="text-2xl" aria-hidden="true" /><h2 className="text-2xl font-black">My Role</h2></div>
                  <p className="mb-6 leading-relaxed text-gray-200">
                    This was a team academic project with Fedi Hmida, Asma Raddaoui, Ghalia Abdelkebir, Natej Ghodbane, and Khalil Youssef. My contribution focused on the ML pipeline, evaluation story, deployment architecture, and technical reporting without presenting the prototype as a clinical product.
                  </p>
                  <div className="grid gap-4 md:grid-cols-2">
                    {roleItems.map((item) => (
                      <div key={item.title} className="rounded-2xl border border-white/10 bg-[#08073d]/70 p-5 transition hover:-translate-y-1 hover:border-[#00C2F0]/45">
                        <div className="mb-4 flex items-start justify-between gap-4">
                          <div className="rounded-2xl border border-[#00C2F0]/25 bg-[#00C2F0]/10 p-3 text-2xl text-[#00C2F0]">{item.icon}</div>
                          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-gray-300">{item.area}</span>
                        </div>
                        <h3 className="text-lg font-black text-white">{item.title}</h3>
                        <p className="mt-3 text-sm font-semibold text-[#B9F4FF]">{item.responsibility}</p>
                        <p className="mt-2 text-sm leading-6 text-gray-300">{item.impact}</p>
                      </div>
                    ))}
                  </div>
                </section>

                <section className="rounded-3xl border border-white/15 bg-white/10 p-7 backdrop-blur-xl md:p-9">
                  <div className="mb-5 flex items-center gap-3 text-[#00C2F0]"><FaDatabase className="text-2xl" aria-hidden="true" /><h2 className="text-2xl font-black">Dataset and Methodology</h2></div>
                  <div className="mb-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                    {datasetCards.map((item) => (
                      <div key={item.label} className="rounded-2xl border border-[#00C2F0]/25 bg-[#00C2F0]/10 p-5">
                        <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#B9F4FF]">{item.label}</p>
                        <p className="mt-2 text-3xl font-black text-white">{item.value}</p>
                        <p className="mt-2 text-sm text-gray-300">{item.detail}</p>
                      </div>
                    ))}
                  </div>
                  <div className="grid gap-5 md:grid-cols-[0.85fr_1.15fr]">
                    <div className="rounded-2xl border border-white/10 bg-[#08073d]/70 p-5">
                      <h3 className="mb-3 font-bold text-white">Classification task</h3>
                      <p className="text-sm leading-6 text-gray-300">
                        Binary benign/malignant classification using the Wisconsin Diagnostic Breast Cancer dataset.
                      </p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-[#08073d]/70 p-5">
                      <h3 className="mb-4 font-bold text-white">Preparation discipline</h3>
                      <div className="grid gap-3 sm:grid-cols-2">
                        {preparationCards.map((item) => (
                          <div key={item} className="flex gap-3 rounded-xl border border-white/10 bg-white/5 p-3 text-sm leading-6 text-gray-300">
                            <FaCheckCircle className="mt-1 shrink-0 text-[#00C2F0]" aria-hidden="true" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </section>

                <section className="rounded-3xl border border-white/15 bg-white/10 p-7 backdrop-blur-xl md:p-9">
                  <div className="mb-5 flex items-center gap-3 text-[#00C2F0]"><FaChartLine className="text-2xl" aria-hidden="true" /><h2 className="text-2xl font-black">Model Comparison</h2></div>
                  <p className="mb-6 max-w-3xl text-sm leading-6 text-gray-300">
                    The evaluation compared five models and made the selected model decision visible through clinically relevant metrics rather than accuracy alone.
                  </p>
                  <div className="mb-5 grid gap-3 md:grid-cols-5">
                    {modelComparison.map(([model, accuracy, sensitivity, specificity, roc]) => (
                      <div key={model} className={`rounded-2xl border p-4 ${model === "Logistic Regression" ? "border-[#00C2F0]/40 bg-[#00C2F0]/10" : "border-white/10 bg-[#08073d]/70"}`}>
                        <p className="text-sm font-black text-white">{model}</p>
                        <p className="mt-3 text-2xl font-black text-[#00C2F0]">{accuracy}</p>
                        <p className="text-xs text-gray-400">Accuracy</p>
                        <p className="mt-3 text-xs leading-5 text-gray-300">Sensitivity {sensitivity} | ROC-AUC {roc}</p>
                        <p className="text-xs leading-5 text-gray-400">Specificity {specificity}</p>
                      </div>
                    ))}
                  </div>
                  <div className="overflow-x-auto rounded-2xl border border-white/10">
                    <table className="min-w-full divide-y divide-white/10 text-left text-sm">
                      <thead className="bg-white/10 text-gray-200"><tr><th className="px-4 py-3 font-bold">Model</th><th className="px-4 py-3 font-bold">Accuracy</th><th className="px-4 py-3 font-bold">Sensitivity</th><th className="px-4 py-3 font-bold">Specificity</th><th className="px-4 py-3 font-bold">ROC-AUC</th></tr></thead>
                      <tbody className="divide-y divide-white/10 text-gray-300">
                        {modelComparison.map(([model, accuracy, sensitivity, specificity, roc]) => (
                          <tr key={model} className={model === "Logistic Regression" ? "bg-[#00C2F0]/10" : ""}>
                            <td className="px-4 py-3 font-semibold text-white">{model}</td><td className="px-4 py-3">{accuracy}</td><td className="px-4 py-3">{sensitivity}</td><td className="px-4 py-3">{specificity}</td><td className="px-4 py-3">{roc}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </section>

                <section className="rounded-3xl border border-white/15 bg-white/10 p-7 backdrop-blur-xl md:p-9">
                  <div className="mb-5 flex items-center gap-3 text-[#00C2F0]"><FaBrain className="text-2xl" aria-hidden="true" /><h2 className="text-2xl font-black">Selected Model</h2></div>
                  <p className="mb-6 leading-relaxed text-gray-200">
                    Logistic Regression was selected because it delivered the strongest clinical metric balance in the academic evaluation: highest sensitivity, only one false negative, 98.83% accuracy, 99.07% specificity, and 0.9975 ROC-AUC. Its interpretability and fast inference also made it more suitable for a responsible decision-support prototype.
                  </p>
                  <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                    {selectedModelReasons.map((item) => (
                      <div key={item.label} className="rounded-2xl border border-[#00C2F0]/25 bg-[#00C2F0]/10 p-5">
                        <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#B9F4FF]">{item.label}</p>
                        <p className="mt-2 text-3xl font-black text-white">{item.value}</p>
                        <p className="mt-2 text-sm leading-6 text-gray-300">{item.detail}</p>
                      </div>
                    ))}
                  </div>
                </section>

                <section className="rounded-3xl border border-white/15 bg-white/10 p-7 backdrop-blur-xl md:p-9">
                  <div className="mb-5 flex items-center gap-3 text-[#00C2F0]"><FaServer className="text-2xl" aria-hidden="true" /><h2 className="text-2xl font-black">Architecture</h2></div>
                  <p className="mb-6 max-w-3xl text-sm leading-6 text-gray-300">
                    The prototype architecture connects feature entry, prediction APIs, and persisted ML artifacts into one reviewable decision-support workflow.
                  </p>
                  <div className="grid gap-4">
                    {architectureLayers.map((layer, index) => (
                      <div key={layer.title} className="grid gap-4 rounded-2xl border border-white/10 bg-[#08073d]/70 p-5 md:grid-cols-[150px_minmax(0,1fr)] md:items-center">
                        <div className="flex items-center gap-3">
                          <div className="rounded-2xl border border-[#00C2F0]/25 bg-[#00C2F0]/10 p-3 text-2xl text-[#00C2F0]">{layer.icon}</div>
                          <div>
                            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#B9F4FF]">0{index + 1} / {layer.layer}</p>
                            <h3 className="mt-1 font-bold text-white">{layer.title}</h3>
                          </div>
                        </div>
                        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                          <p className="text-sm leading-relaxed text-gray-300">{layer.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-5">
                    <h3 className="mb-3 font-bold text-white">Endpoints and artifacts</h3>
                    <div className="flex flex-wrap gap-2 text-sm">
                      {["/health", "/predict", "/batch", "best model", "scaler", "label encoder", "metadata"].map((item) => <span key={item} className="rounded-full border border-[#00C2F0]/30 bg-[#00C2F0]/10 px-3 py-1 text-[#B9F4FF]">{item}</span>)}
                    </div>
                  </div>
                </section>

                <section className="rounded-3xl border border-[#00C2F0]/25 bg-[#00C2F0]/10 p-7 backdrop-blur-xl md:p-9">
                  <div className="mb-5 flex items-center gap-3 text-[#B9F4FF]"><FaExclamationTriangle className="text-2xl" aria-hidden="true" /><h2 className="text-2xl font-black">Explainability and Responsible AI</h2></div>
                  <p className="mb-5 leading-relaxed text-gray-100">
                    SHAP was included for prediction transparency, and the selected model was chosen partly for interpretability. The project is framed around human-in-the-loop review, clinical safety metrics, and clear limitations rather than unsupported claims of clinical readiness.
                  </p>
                  <div className="mb-5 grid gap-4 md:grid-cols-3">
                    {responsibleAiCards.map((card) => (
                      <div key={card.title} className="rounded-2xl border border-white/15 bg-[#08073d]/80 p-5">
                        <div className="mb-4 flex items-center gap-3">
                          <div className="rounded-xl bg-[#00C2F0]/15 p-3 text-xl text-[#00C2F0]">{card.icon}</div>
                          <h3 className="font-black text-white">{card.title}</h3>
                        </div>
                        <p className="mb-4 text-sm leading-6 text-gray-300">{card.summary}</p>
                        <div className="space-y-2">
                          {card.checks.map((item) => (
                            <div key={item} className="flex items-center gap-2 rounded-full border border-[#00C2F0]/25 bg-[#00C2F0]/10 px-3 py-2 text-xs font-semibold text-[#B9F4FF]">
                              <FaCheckCircle className="shrink-0 text-[#00C2F0]" aria-hidden="true" />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                  <p className="rounded-2xl border border-white/15 bg-[#08073d]/80 p-5 font-semibold text-white">This project is an academic machine-learning decision-support prototype and is not a certified medical diagnosis system.</p>
                </section>

                <section className="rounded-3xl border border-white/15 bg-white/10 p-7 backdrop-blur-xl md:p-9">
                  <div className="mb-5 flex items-center gap-3 text-[#00C2F0]"><FaBalanceScale className="text-2xl" aria-hidden="true" /><h2 className="text-2xl font-black">What I Learned</h2></div>
                  <div className="grid gap-4 md:grid-cols-2">
                    {learnings.map((learning) => (
                      <div key={learning.title} className="rounded-2xl border border-white/10 bg-[#08073d]/70 p-5 transition hover:border-[#00C2F0]/40">
                        <span className="rounded-full border border-[#00C2F0]/25 bg-[#00C2F0]/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-[#B9F4FF]">
                          {learning.area}
                        </span>
                        <h3 className="mt-4 text-lg font-black text-white">{learning.title}</h3>
                        <p className="mt-3 text-sm leading-relaxed text-gray-300">{learning.text}</p>
                      </div>
                    ))}
                  </div>
                </section>
              </div>

              <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
                <div className="rounded-3xl border border-white/15 bg-white/10 p-6 backdrop-blur-xl">
                  <h2 className="mb-5 text-xl font-black">Project Info</h2>
                  <div className="space-y-4 text-sm">
                    <div><p className="text-gray-400">Role</p><p className="font-semibold text-white">ML Engineer / Full-Stack AI Developer</p></div>
                    <div><p className="text-gray-400">Timeline</p><p className="font-semibold text-white">September - December 2025</p></div>
                    <div><p className="text-gray-400">Category</p><p className="font-semibold text-white">AI / ML, Web App, Medical ML platform</p></div>
                    <div><p className="text-gray-400">Dataset</p><p className="font-semibold text-white">Wisconsin Diagnostic Breast Cancer Dataset</p></div>
                  </div>
                </div>
                <div className="rounded-3xl border border-white/15 bg-white/10 p-6 backdrop-blur-xl"><h2 className="mb-4 text-xl font-black">Main Stack</h2><div className="flex flex-wrap gap-2">{stack.map((item) => <span key={item} className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-sm text-gray-200">{item}</span>)}</div></div>
                <div className="rounded-3xl border border-white/15 bg-white/10 p-6 backdrop-blur-xl"><h2 className="mb-4 text-xl font-black">CRISP-DM Flow</h2><div className="space-y-2">{crispSteps.map((step, index) => <div key={step} className="flex items-center gap-3 rounded-2xl bg-[#08073d]/70 p-3 text-sm text-gray-200"><span className="grid h-7 w-7 place-items-center rounded-full bg-[#00C2F0] text-xs font-black text-[#061429]">{index + 1}</span>{step}</div>)}</div></div>
                <div className="rounded-3xl border border-white/15 bg-white/10 p-6 backdrop-blur-xl"><h2 className="mb-4 text-xl font-black">Limitations</h2><ul className="space-y-3 text-sm leading-relaxed text-gray-300">{limitations.map((item) => <li key={item}>{item}</li>)}</ul></div>
              </aside>
            </div>

            <div className="mt-14 rounded-3xl border border-white/15 bg-white/10 p-7 backdrop-blur-xl md:p-9">
              <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
                <div><h2 className="mb-2 text-2xl font-black">Explore the project</h2><p className="text-gray-300">Review the source repository, return to the project list, or get in touch.</p></div>
                <div className="flex flex-wrap gap-3">
                  <a href={githubUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#00C2F0] px-5 py-3 font-semibold text-[#061429] transition hover:bg-[#27D7FF]"><FaGithub aria-hidden="true" />GitHub<FaExternalLinkAlt className="text-xs" aria-hidden="true" /></a>
                  <Link to="/portfolio" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 font-semibold text-white transition hover:border-[#00C2F0]/60 hover:bg-[#00C2F0]/10">Portfolio</Link>
                  <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 font-semibold text-white transition hover:border-[#00C2F0]/60 hover:bg-[#00C2F0]/10">Contact Me<FaArrowRight aria-hidden="true" /></Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SahitnaSafeDetails;
