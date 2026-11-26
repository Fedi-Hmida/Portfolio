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
import sahitnaSafeVisual from "../../assets/images/Portfolio/ML2.webp";
import sahitnaSafeDemoVideo from "../../assets/videos/SahitnaSafe/sahitna-safe-demo.mp4";
import en from "../../content/sahitnaSafe/caseStudy.en";
import fr from "../../content/sahitnaSafe/caseStudy.fr";
import { pickContent } from "../../i18n/localeContent";

// Long-form copy lives in src/content/sahitnaSafe/caseStudy.{en,fr}.js. The locale comes from the
// URL and switching language reloads the page, so picking once at module level is safe.
const c = pickContent({ en, fr });

const githubUrl = "https://github.com/Fedi-Hmida/MLProject_Fedi";

const metricCards = [
  { label: c.s001, value: c.s002, detail: c.s003 },
  { label: c.s004, value: c.s005, detail: c.s006 },
  { label: c.s007, value: c.s008, detail: c.s009 },
  { label: c.s010, value: c.s011, detail: c.s012 },
];

const modelComparison = [
  [c.s013, c.s002, c.s005, c.s014, c.s008],
  [c.s015, c.s016, c.s017, c.s018, c.s019],
  [c.s020, c.s021, c.s022, c.s023, c.s024],
  [c.s025, c.s026, c.s017, c.s023, c.s027],
  [c.s028, c.s029, c.s030, c.s023, c.s031],
];

const crispSteps = [
  c.s032,
  c.s033,
  c.s034,
  c.s035,
  c.s036,
  c.s037,
];

const roleItems = [
  {
    title: c.s038,
    area: c.s039,
    responsibility: c.s040,
    impact: c.s041,
    icon: <FaProjectDiagram />,
  },
  {
    title: c.s042,
    area: c.s043,
    responsibility: c.s044,
    impact: c.s045,
    icon: <FaChartLine />,
  },
  {
    title: c.s046,
    area: c.s047,
    responsibility: c.s048,
    impact: c.s049,
    icon: <FaDatabase />,
  },
  {
    title: c.s050,
    area: c.s051,
    responsibility: c.s052,
    impact: c.s053,
    icon: <FaShieldAlt />,
  },
  {
    title: c.s054,
    area: c.s055,
    responsibility: c.s056,
    impact: c.s057,
    icon: <FaServer />,
  },
  {
    title: c.s058,
    area: c.s059,
    responsibility: c.s060,
    impact: c.s061,
    icon: <FaCode />,
  },
];

const architectureLayers = [
  {
    icon: <FaCode />,
    title: c.s062,
    layer: c.s063,
    text: c.s064,
  },
  {
    icon: <FaServer />,
    title: c.s065,
    layer: c.s066,
    text: c.s067,
  },
  {
    icon: <FaDatabase />,
    title: c.s068,
    layer: c.s069,
    text: c.s070,
  },
];

const datasetCards = [
  { label: c.s071, value: c.s072, detail: c.s073 },
  { label: c.s074, value: c.s075, detail: c.s076 },
  { label: c.s077, value: c.s078, detail: c.s079 },
  { label: c.s080, value: c.s081, detail: c.s082 },
];

const preparationCards = [
  c.s083,
  c.s084,
  c.s085,
  c.s086,
];

const selectedModelReasons = [
  { label: c.s087, value: c.s005, detail: c.s088 },
  { label: c.s010, value: c.s011, detail: c.s089 },
  { label: c.s090, value: c.s014, detail: c.s091 },
  { label: c.s007, value: c.s008, detail: c.s009 },
];

const responsibleAiCards = [
  {
    title: c.s092,
    icon: <FaBrain />,
    summary: c.s093,
    checks: [c.s094, c.s095, c.s096],
  },
  {
    title: c.s097,
    icon: <FaShieldAlt />,
    summary: c.s098,
    checks: [c.s099, c.s100, c.s101],
  },
  {
    title: c.s102,
    icon: <FaExclamationTriangle />,
    summary: c.s103,
    checks: [c.s104, c.s105, c.s106],
  },
];

const limitations = [
  c.s107,
  c.s108,
  c.s109,
  c.s110,
];

const learnings = [
  {
    title: c.s111,
    area: c.s112,
    text: c.s113,
  },
  {
    title: c.s114,
    area: c.s115,
    text: c.s116,
  },
  {
    title: c.s117,
    area: c.s118,
    text: c.s119,
  },
  {
    title: c.s120,
    area: c.s121,
    text: c.s122,
  },
  {
    title: c.s123,
    area: c.s124,
    text: c.s125,
  },
];

const stack = [
  c.s126,
  c.s127,
  c.s020,
  c.s055,
  c.s128,
  c.s129,
  c.s130,
  c.s094,
  c.s131,
  c.s132,
];

const SahitnaSafeDetails = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#070640] text-white">
      <Navbar />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-28 md:px-12 lg:px-20">
        
      </div>

      <main className="relative z-10">
        <section className="px-6 pb-16 pt-32 md:px-12 lg:px-20">
          <div className="mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-8 flex flex-wrap items-center gap-3 text-sm text-gray-300">
                <Link to="/" className="transition hover:text-[#00C2F0]">{c.s133}</Link>
                <span>/</span>
                <Link to="/portfolio" className="transition hover:text-[#00C2F0]">{c.s134}</Link>
                <span>/</span>
                <span className="text-[#00C2F0]">{c.s135}</span>
              </div>

              <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
                <div>
                  <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#00C2F0]/30 bg-[#00C2F0]/10 px-4 py-2 text-sm font-semibold text-[#B9F4FF]">
                    <FaHeartbeat aria-hidden="true" />{c.s136}</div>
                  <h1 className="mb-6 text-4xl font-black leading-tight md:text-6xl">{c.s135}<span className="block text-[#00C2F0]">{c.s137}</span>
                  </h1>
                  <p className="mb-7 max-w-3xl text-lg leading-relaxed text-gray-200 md:text-xl">{c.s138}</p>
                  <p className="mb-8 rounded-2xl border border-[#00C2F0]/30 bg-[#00C2F0]/10 p-4 text-sm font-semibold leading-relaxed text-[#D8FAFF]">{c.s139}</p>

                  <div className="mb-8 flex flex-wrap gap-3">
                    {[c.s140, c.s141, c.s142, c.s143].map((item) => (
                      <span key={item} className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-gray-200">
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-4">
                    <a href={githubUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#00C2F0] px-6 py-3 font-semibold text-[#061429] shadow-lg shadow-[#00C2F0]/25 transition hover:bg-[#27D7FF]">
                      <FaGithub aria-hidden="true" />{c.s144}<FaExternalLinkAlt className="text-xs" aria-hidden="true" />
                    </a>
                    <Link to="/portfolio" className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3 font-semibold text-white transition hover:border-[#00C2F0]/60 hover:bg-[#00C2F0]/10">
                      <FaArrowLeft aria-hidden="true" />{c.s145}</Link>
                  </div>
                </div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.7, delay: 0.1 }}
                  className="rounded-3xl border border-white/15 bg-white/10 p-4 shadow-2xl shadow-black/30 backdrop-blur-xl"
                >
                  <img src={sahitnaSafeVisual} alt={c.s146} className="w-full rounded-2xl" loading="eager" decoding="async" />
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
                  <FaPlay aria-hidden="true" />{c.s147}</div>
                <h2 id="sahitna-demo-title" className="text-2xl font-black text-white md:text-3xl">{c.s148}</h2>
                <p className="mt-2 max-w-3xl text-sm leading-relaxed text-gray-300 md:text-base">{c.s149}</p>
              </div>

              <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#08073d]/80 shadow-2xl shadow-black/30">
                <video
                  className="aspect-video w-full bg-black object-contain"
                  controls
                  preload="metadata"
                  aria-label={c.s150}
                >
                  <source src={sahitnaSafeDemoVideo} type="video/mp4" />{c.s151}</video>
              </div>

              <p className="mt-4 rounded-2xl border border-[#00C2F0]/25 bg-[#00C2F0]/10 p-4 text-sm font-semibold leading-relaxed text-[#D8FAFF]">{c.s139}</p>
            </motion.section>

            <div className="mt-14 grid gap-10 lg:grid-cols-[minmax(0,1fr)_360px]">
              <div className="space-y-10">
                <section className="rounded-3xl border border-white/15 bg-white/10 p-7 backdrop-blur-xl md:p-9">
                  <div className="mb-5 flex items-center gap-3 text-[#00C2F0]"><FaShieldAlt className="text-2xl" aria-hidden="true" /><h2 className="text-2xl font-black">{c.s152}</h2></div>
                  <p className="mb-6 leading-relaxed text-gray-200">{c.s153}</p>
                  <div className="grid gap-4 md:grid-cols-3">
                    {[
                      [c.s154, c.s010],
                      [c.s155, c.s004],
                      [c.s156, c.s157],
                    ].map(([label, value]) => (
                      <div key={label} className="rounded-2xl border border-[#00C2F0]/25 bg-[#00C2F0]/10 p-4">
                        <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#B9F4FF]">{label}</p>
                        <p className="mt-2 text-lg font-black text-white">{value}</p>
                      </div>
                    ))}
                  </div>
                </section>

                <section className="rounded-3xl border border-white/15 bg-white/10 p-7 backdrop-blur-xl md:p-9">
                  <div className="mb-5 flex items-center gap-3 text-[#00C2F0]"><FaProjectDiagram className="text-2xl" aria-hidden="true" /><h2 className="text-2xl font-black">{c.s158}</h2></div>
                  <p className="mb-6 leading-relaxed text-gray-200">{c.s159}</p>
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
                  <div className="mb-5 flex items-center gap-3 text-[#00C2F0]"><FaDatabase className="text-2xl" aria-hidden="true" /><h2 className="text-2xl font-black">{c.s160}</h2></div>
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
                      <h3 className="mb-3 font-bold text-white">{c.s161}</h3>
                      <p className="text-sm leading-6 text-gray-300">{c.s162}</p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-[#08073d]/70 p-5">
                      <h3 className="mb-4 font-bold text-white">{c.s163}</h3>
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
                  <div className="mb-5 flex items-center gap-3 text-[#00C2F0]"><FaChartLine className="text-2xl" aria-hidden="true" /><h2 className="text-2xl font-black">{c.s164}</h2></div>
                  <p className="mb-6 max-w-3xl text-sm leading-6 text-gray-300">{c.s165}</p>
                  <div className="mb-5 grid gap-3 md:grid-cols-5">
                    {modelComparison.map(([model, accuracy, sensitivity, specificity, roc]) => (
                      <div key={model} className={`rounded-2xl border p-4 ${model === "Logistic Regression" ? "border-[#00C2F0]/40 bg-[#00C2F0]/10" : "border-white/10 bg-[#08073d]/70"}`}>
                        <p className="text-sm font-black text-white">{model}</p>
                        <p className="mt-3 text-2xl font-black text-[#00C2F0]">{accuracy}</p>
                        <p className="text-xs text-gray-400">{c.s001}</p>
                        <p className="mt-3 text-xs leading-5 text-gray-300">{c.s087}{" "}{sensitivity}{" "}{c.s166}{" "}{roc}</p>
                        <p className="text-xs leading-5 text-gray-400">{c.s090}{" "}{specificity}</p>
                      </div>
                    ))}
                  </div>
                  <div className="overflow-x-auto rounded-2xl border border-white/10">
                    <table className="min-w-full divide-y divide-white/10 text-left text-sm">
                      <thead className="bg-white/10 text-gray-200"><tr><th className="px-4 py-3 font-bold">{c.s167}</th><th className="px-4 py-3 font-bold">{c.s001}</th><th className="px-4 py-3 font-bold">{c.s087}</th><th className="px-4 py-3 font-bold">{c.s090}</th><th className="px-4 py-3 font-bold">{c.s007}</th></tr></thead>
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
                  <div className="mb-5 flex items-center gap-3 text-[#00C2F0]"><FaBrain className="text-2xl" aria-hidden="true" /><h2 className="text-2xl font-black">{c.s168}</h2></div>
                  <p className="mb-6 leading-relaxed text-gray-200">{c.s169}</p>
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
                  <div className="mb-5 flex items-center gap-3 text-[#00C2F0]"><FaServer className="text-2xl" aria-hidden="true" /><h2 className="text-2xl font-black">{c.s170}</h2></div>
                  <p className="mb-6 max-w-3xl text-sm leading-6 text-gray-300">{c.s171}</p>
                  <div className="grid gap-4">
                    {architectureLayers.map((layer, index) => (
                      <div key={layer.title} className="grid gap-4 rounded-2xl border border-white/10 bg-[#08073d]/70 p-5 md:grid-cols-[150px_minmax(0,1fr)] md:items-center">
                        <div className="flex items-center gap-3">
                          <div className="rounded-2xl border border-[#00C2F0]/25 bg-[#00C2F0]/10 p-3 text-2xl text-[#00C2F0]">{layer.icon}</div>
                          <div>
                            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#B9F4FF]">{c.s172}{index + 1} / {layer.layer}</p>
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
                    <h3 className="mb-3 font-bold text-white">{c.s173}</h3>
                    <div className="flex flex-wrap gap-2 text-sm">
                      {["/health", "/predict", "/batch", c.s174, c.s175, c.s176, c.s177].map((item) => <span key={item} className="rounded-full border border-[#00C2F0]/30 bg-[#00C2F0]/10 px-3 py-1 text-[#B9F4FF]">{item}</span>)}
                    </div>
                  </div>
                </section>

                <section className="rounded-3xl border border-[#00C2F0]/25 bg-[#00C2F0]/10 p-7 backdrop-blur-xl md:p-9">
                  <div className="mb-5 flex items-center gap-3 text-[#B9F4FF]"><FaExclamationTriangle className="text-2xl" aria-hidden="true" /><h2 className="text-2xl font-black">{c.s178}</h2></div>
                  <p className="mb-5 leading-relaxed text-gray-100">{c.s179}</p>
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
                  <p className="rounded-2xl border border-white/15 bg-[#08073d]/80 p-5 font-semibold text-white">{c.s139}</p>
                </section>

                <section className="rounded-3xl border border-white/15 bg-white/10 p-7 backdrop-blur-xl md:p-9">
                  <div className="mb-5 flex items-center gap-3 text-[#00C2F0]"><FaBalanceScale className="text-2xl" aria-hidden="true" /><h2 className="text-2xl font-black">{c.s180}</h2></div>
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
                  <h2 className="mb-5 text-xl font-black">{c.s181}</h2>
                  <div className="space-y-4 text-sm">
                    <div><p className="text-gray-400">{c.s182}</p><p className="font-semibold text-white">{c.s183}</p></div>
                    <div><p className="text-gray-400">{c.s184}</p><p className="font-semibold text-white">{c.s140}</p></div>
                    <div><p className="text-gray-400">{c.s185}</p><p className="font-semibold text-white">{c.s186}</p></div>
                    <div><p className="text-gray-400">{c.s187}</p><p className="font-semibold text-white">{c.s188}</p></div>
                  </div>
                </div>
                <div className="rounded-3xl border border-white/15 bg-white/10 p-6 backdrop-blur-xl"><h2 className="mb-4 text-xl font-black">{c.s189}</h2><div className="flex flex-wrap gap-2">{stack.map((item) => <span key={item} className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-sm text-gray-200">{item}</span>)}</div></div>
                <div className="rounded-3xl border border-white/15 bg-white/10 p-6 backdrop-blur-xl"><h2 className="mb-4 text-xl font-black">{c.s190}</h2><div className="space-y-2">{crispSteps.map((step, index) => <div key={step} className="flex items-center gap-3 rounded-2xl bg-[#08073d]/70 p-3 text-sm text-gray-200"><span className="grid h-7 w-7 place-items-center rounded-full bg-[#00C2F0] text-xs font-black text-[#061429]">{index + 1}</span>{step}</div>)}</div></div>
                <div className="rounded-3xl border border-white/15 bg-white/10 p-6 backdrop-blur-xl"><h2 className="mb-4 text-xl font-black">{c.s191}</h2><ul className="space-y-3 text-sm leading-relaxed text-gray-300">{limitations.map((item) => <li key={item}>{item}</li>)}</ul></div>
              </aside>
            </div>

            <div className="mt-14 rounded-3xl border border-white/15 bg-white/10 p-7 backdrop-blur-xl md:p-9">
              <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
                <div><h2 className="mb-2 text-2xl font-black">{c.s192}</h2><p className="text-gray-300">{c.s193}</p></div>
                <div className="flex flex-wrap gap-3">
                  <a href={githubUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#00C2F0] px-5 py-3 font-semibold text-[#061429] transition hover:bg-[#27D7FF]"><FaGithub aria-hidden="true" />{c.s194}<FaExternalLinkAlt className="text-xs" aria-hidden="true" /></a>
                  <Link to="/portfolio" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 font-semibold text-white transition hover:border-[#00C2F0]/60 hover:bg-[#00C2F0]/10">{c.s134}</Link>
                  <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 font-semibold text-white transition hover:border-[#00C2F0]/60 hover:bg-[#00C2F0]/10">{c.s195}<FaArrowRight aria-hidden="true" /></Link>
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
