import { motion } from "framer-motion";
import {
  FaArrowLeft,
  FaBrain,
  FaBuilding,
  FaCubes,
  FaFlask,
  FaLayerGroup,
  FaPenFancy,
  FaPlay,
  FaShieldAlt,
  FaUsers,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import smartHrmAiVisual from "../../assets/images/Portfolio/SmartHrmAi/smart-hrm-ai-cover.webp";
import smartHrmAiDemoVideo from "../../assets/videos/SmartHrmAi/smart-hrm-ai-demo.mp4";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import en from "../../content/smartHrmAi/caseStudy.en";
import fr from "../../content/smartHrmAi/caseStudy.fr";
import { pickContent } from "../../i18n/localeContent";

// Long-form copy lives in src/content/smartHrmAi/caseStudy.{en,fr}.js. The locale comes from the
// URL and switching language reloads the page, so picking once at module level is safe.
const c = pickContent({ en, fr });

const ACCENT = "#1E8AF0";

const metricCards = [
  { label: c.s001, value: c.s002, detail: c.s003 },
  { label: c.s004, value: c.s005, detail: c.s006 },
  { label: c.s007, value: c.s008, detail: c.s009 },
  { label: c.s010, value: c.s011, detail: c.s012 },
];

const heroChips = [
  c.s013,
  c.s014,
  c.s015,
  c.s016,
  c.s017,
];

const modules = [
  {
    fr: c.s018,
    en: c.s019,
    detail:
      c.s020,
  },
  {
    fr: c.s021,
    en: c.s022,
    detail:
      c.s023,
  },
  {
    fr: c.s024,
    en: c.s025,
    detail:
      c.s026,
  },
  {
    fr: c.s027,
    en: c.s028,
    detail:
      c.s029,
  },
  {
    fr: c.s030,
    en: c.s031,
    detail:
      c.s032,
  },
];

const architectureLayers = [
  {
    name: c.s033,
    detail:
      c.s034,
  },
  {
    name: c.s035,
    detail:
      c.s036,
  },
  {
    name: c.s037,
    detail:
      c.s038,
  },
];

const securityPoints = [
  {
    title: c.s039,
    detail:
      c.s040,
  },
  {
    title: c.s041,
    detail:
      c.s042,
  },
  {
    title: c.s043,
    detail:
      c.s044,
  },
  {
    title: c.s045,
    detail:
      c.s046,
  },
  {
    title: c.s047,
    detail:
      c.s048,
  },
];

const aiWorkstreams = [
  {
    title: c.s049,
    status: c.s050,
    detail:
      c.s051,
  },
  {
    title: c.s052,
    status: c.s053,
    detail:
      c.s054,
  },
  {
    title: c.s055,
    status: c.s053,
    detail:
      c.s056,
  },
];

const practices = [
  {
    title: c.s057,
    detail:
      c.s058,
  },
  {
    title: c.s059,
    detail:
      c.s060,
  },
  {
    title: c.s061,
    detail:
      c.s062,
  },
  {
    title: c.s063,
    detail:
      c.s064,
  },
];

const learnings = [
  c.s065,
  c.s066,
  c.s067,
];

const stack = [
  { group: c.s068, items: [c.s069, c.s070, c.s071, c.s072, c.s073] },
  { group: c.s074, items: [c.s075, c.s076, c.s077] },
  { group: c.s078, items: [c.s079, c.s080, c.s081, c.s082] },
  { group: c.s083, items: [c.s084, c.s085, c.s086, c.s087, c.s088, c.s089, c.s090, c.s091] },
  { group: c.s092, items: [c.s093, c.s094, c.s095, c.s096, c.s097] },
];

const Section = ({ id, icon: Icon, title, intro, children }) => (
  <motion.section
    initial={{ opacity: 0, y: 22 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="rounded-3xl border border-white/15 bg-white/10 p-7 backdrop-blur-xl md:p-9"
    aria-labelledby={`${id}-title`}
  >
    <div className="mb-5 flex items-center gap-3">
      <Icon style={{ color: ACCENT }} aria-hidden="true" />
      <h2 id={`${id}-title`} className="text-2xl font-bold md:text-3xl">
        {title}
      </h2>
    </div>
    {intro && (
      <p className="mb-6 max-w-4xl text-base leading-relaxed text-gray-200">
        {intro}
      </p>
    )}
    {children}
  </motion.section>
);

const SmartHrmAiDetails = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#070640] text-white">
      <Navbar />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-28 md:px-12 lg:px-20">
        
      </div>

      <main className="relative z-10">
        {/* Hero */}
        <section className="px-6 pb-16 pt-32 md:px-12 lg:px-20">
          <div className="mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-8 flex flex-wrap items-center gap-3 text-sm text-gray-300">
                <Link to="/" className="transition hover:text-[#1E8AF0]">{c.s098}</Link>
                <span>/</span>
                <Link to="/portfolio" className="transition hover:text-[#1E8AF0]">{c.s099}</Link>
                <span>/</span>
                <span className="text-[#1E8AF0]">{c.s100}</span>
              </div>

              <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
                <div>
                  <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#1E8AF0]/30 bg-[#1E8AF0]/10 px-4 py-2 text-sm font-semibold text-[#BBDDFF]">
                    <FaBuilding aria-hidden="true" />{c.s101}</div>

                  <h1 className="mb-6 text-4xl font-black leading-tight md:text-6xl">{c.s100}<span className="block text-[#1E8AF0]">{c.s102}</span>
                  </h1>

                  <p className="mb-8 max-w-3xl text-lg leading-relaxed text-gray-200 md:text-xl">{c.s103}</p>

                  <div className="mb-8 flex flex-wrap gap-3">
                    {heroChips.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-gray-200"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-4">
                    <Link
                      to="/portfolio"
                      className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3 font-semibold text-white transition hover:border-[#1E8AF0]/60 hover:bg-[#1E8AF0]/10"
                    >
                      <FaArrowLeft aria-hidden="true" />{c.s104}</Link>
                  </div>
                </div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.7, delay: 0.1 }}
                  className="rounded-3xl border border-white/15 bg-white/10 p-4 shadow-2xl shadow-black/30 backdrop-blur-xl"
                >
                  <img
                    src={smartHrmAiVisual}
                    alt={c.s105}
                    className="w-full rounded-2xl"
                    loading="eager"
                    decoding="async"
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Metrics */}
        <section className="px-6 py-10 md:px-12 lg:px-20">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {metricCards.map((metric) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45 }}
                  className="rounded-2xl border border-white/15 bg-white/10 p-6 backdrop-blur-xl"
                >
                  <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-gray-400">
                    {metric.label}
                  </p>
                  <p className="mb-3 text-4xl font-black" style={{ color: ACCENT }}>
                    {metric.value}
                  </p>
                  <p className="text-sm leading-relaxed text-gray-300">
                    {metric.detail}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Body */}
        <section className="px-6 pb-24 md:px-12 lg:px-20">
          <div className="mx-auto max-w-7xl space-y-6">
            {/* Demo video */}
            <motion.section
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-3xl border border-white/15 bg-white/10 p-5 shadow-2xl shadow-black/20 backdrop-blur-xl md:p-7"
              aria-labelledby="smart-hrm-demo-title"
            >
              <div className="mb-5">
                <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#1E8AF0]/30 bg-[#1E8AF0]/10 px-4 py-2 text-sm font-semibold text-[#BBDDFF]">
                  <FaPlay aria-hidden="true" />{c.s106}</div>
                <h2
                  id="smart-hrm-demo-title"
                  className="text-2xl font-black text-white md:text-3xl"
                >{c.s107}</h2>
                <p className="mt-2 max-w-3xl text-sm leading-relaxed text-gray-300 md:text-base">{c.s108}</p>
              </div>

              <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#08073d]/80 shadow-2xl shadow-black/30">
                <video
                  className="aspect-video w-full bg-black object-contain"
                  controls
                  preload="metadata"
                  aria-label={c.s109}
                >
                  <source src={smartHrmAiDemoVideo} type="video/mp4" />{c.s110}</video>
              </div>
            </motion.section>

            <Section
              id="context"
              icon={FaBuilding}
              title={c.s111}
              intro={c.s112}
            >
              <p className="max-w-4xl text-base leading-relaxed text-gray-300">{c.s113}</p>
            </Section>

            <Section
              id="role"
              icon={FaPenFancy}
              title={c.s114}
              intro={c.s115}
            >
              <ul className="space-y-3">
                {[
                  c.s116,
                  c.s117,
                  c.s118,
                  c.s119,
                  c.s120,
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-base leading-relaxed text-gray-300">
                    <span
                      className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full"
                      style={{ backgroundColor: ACCENT }}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </Section>

            <Section
              id="modules"
              icon={FaUsers}
              title={c.s121}
              intro={c.s122}
            >
              <div className="grid gap-4 md:grid-cols-2">
                {modules.map((m) => (
                  <div
                    key={m.fr}
                    className="rounded-2xl border border-white/10 bg-white/5 p-5"
                  >
                    <p className="text-lg font-bold text-white">{m.fr}</p>
                    <p className="mb-2 text-sm font-semibold" style={{ color: ACCENT }}>
                      {m.en}
                    </p>
                    <p className="text-sm leading-relaxed text-gray-300">{m.detail}</p>
                  </div>
                ))}
              </div>
            </Section>

            <Section
              id="architecture"
              icon={FaLayerGroup}
              title={c.s123}
              intro={c.s124}
            >
              <div className="space-y-4">
                {architectureLayers.map((layer) => (
                  <div
                    key={layer.name}
                    className="rounded-2xl border-l-4 border-white/10 bg-white/5 p-5"
                    style={{ borderLeftColor: ACCENT }}
                  >
                    <p className="mb-2 font-mono text-base font-bold text-white">
                      {layer.name}
                    </p>
                    <p className="text-sm leading-relaxed text-gray-300">
                      {layer.detail}
                    </p>
                  </div>
                ))}
              </div>
            </Section>

            <Section
              id="security"
              icon={FaShieldAlt}
              title={c.s125}
              intro={c.s126}
            >
              <div className="space-y-4">
                {securityPoints.map((p) => (
                  <div key={p.title} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <p className="mb-2 font-bold text-white">{p.title}</p>
                    <p className="text-sm leading-relaxed text-gray-300">{p.detail}</p>
                  </div>
                ))}
              </div>
            </Section>

            <Section
              id="ai"
              icon={FaBrain}
              title={c.s127}
              intro={c.s128}
            >
              <div className="space-y-4">
                {aiWorkstreams.map((w) => (
                  <div key={w.title} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <div className="mb-2 flex flex-wrap items-center gap-3">
                      <p className="font-bold text-white">{w.title}</p>
                      <span
                        className="rounded-full border px-3 py-1 text-[11px] font-bold uppercase tracking-wide"
                        style={{
                          color: ACCENT,
                          borderColor: "rgba(30, 138, 240, 0.45)",
                          backgroundColor: "rgba(30, 138, 240, 0.12)",
                        }}
                      >
                        {w.status}
                      </span>
                    </div>
                    <p className="text-sm leading-relaxed text-gray-300">{w.detail}</p>
                  </div>
                ))}
              </div>
            </Section>

            <Section
              id="practices"
              icon={FaFlask}
              title={c.s129}
              intro={c.s130}
            >
              <div className="grid gap-4 md:grid-cols-2">
                {practices.map((p) => (
                  <div key={p.title} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <p className="mb-2 font-bold text-white">{p.title}</p>
                    <p className="text-sm leading-relaxed text-gray-300">{p.detail}</p>
                  </div>
                ))}
              </div>
            </Section>

            <Section id="learnings" icon={FaPenFancy} title={c.s131}>
              <ul className="space-y-4">
                {learnings.map((item) => (
                  <li
                    key={item}
                    className="rounded-2xl border border-white/10 bg-white/5 p-5 text-base leading-relaxed text-gray-300"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Section>

            <Section id="stack" icon={FaCubes} title={c.s132}>
              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {stack.map((s) => (
                  <div key={s.group} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <p className="mb-3 text-sm font-bold uppercase tracking-wide text-gray-400">
                      {s.group}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {s.items.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs text-gray-200"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </Section>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default SmartHrmAiDetails;
