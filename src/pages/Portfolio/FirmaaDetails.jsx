import { motion } from "framer-motion";
import { useRef, useState } from "react";
import {
  FaArrowLeft,
  FaArrowRight,
  FaBrain,
  FaCheckCircle,
  FaCube,
  FaDatabase,
  FaExpand,
  FaMobileAlt,
  FaPlay,
  FaProjectDiagram,
  FaSeedling,
  FaServer,
  FaShieldAlt,
  FaTimes,
  FaWater,
} from "react-icons/fa";
import { Link } from "react-router-dom";

import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import firmaaDemoVideo from "../../assets/videos/demo_firmaa.mp4";
import firmaaLogo from "../../assets/images/Portfolio/Firmaa/logo_firmaa.webp";
import firmaaSolutionCover from "../../assets/images/Portfolio/Firmaa/cover_firmaa.webp";
import firmaaName from "../../assets/images/Portfolio/Firmaa/name_firmaa.webp";
import firmaaAgentPipeline from "../../assets/images/Portfolio/Firmaa/highlights/agent_pipeline.webp";
import firmaaDashboard from "../../assets/images/Portfolio/Firmaa/highlights/dashboard.webp";
import firmaaLandingPage from "../../assets/images/Portfolio/Firmaa/highlights/landing_page.webp";
import firmaaMobileModules from "../../assets/images/Portfolio/Firmaa/highlights/mobile_modules.webp";
import en from "../../content/firmaa/caseStudy.en";
import fr from "../../content/firmaa/caseStudy.fr";
import { pickContent } from "../../i18n/localeContent";

// Long-form copy lives in src/content/firmaa/caseStudy.{en,fr}.js. The locale comes from the
// URL and switching language reloads the page, so picking once at module level is safe.
const c = pickContent({ en, fr });

const metricCards = [
  { label: c.s001, value: c.s002, detail: c.s003 },
  { label: c.s004, value: c.s005, detail: c.s006 },
  { label: c.s007, value: c.s008, detail: c.s009 },
  { label: c.s010, value: c.s011, detail: c.s012 },
];

const stack = [
  c.s013,
  c.s014,
  c.s015,
  c.s016,
  c.s017,
  c.s018,
  c.s019,
  c.s020,
  c.s021,
];

const platformClusters = [
  {
    title: c.s022,
    icon: <FaSeedling />,
    items: [
      c.s023,
      c.s024,
    ],
  },
  {
    title: c.s025,
    icon: <FaBrain />,
    items: [
      c.s026,
    ],
  },
  {
    title: c.s027,
    icon: <FaCheckCircle />,
    items: [
      c.s028,
      c.s029,
      c.s030,
      c.s031,
    ],
  },
  {
    title: c.s032,
    icon: <FaMobileAlt />,
    items: [
      c.s033,
    ],
  },
  {
    title: c.s034,
    icon: <FaWater />,
    items: [
      c.s035,
    ],
  },
];

const roleCards = [
  {
    label: c.s036,
    icon: <FaProjectDiagram />,
    responsibility: c.s037,
    impact: c.s038,
    area: c.s039,
  },
  {
    label: c.s040,
    icon: <FaBrain />,
    responsibility: c.s041,
    impact: c.s042,
    area: c.s043,
  },
  {
    label: c.s044,
    icon: <FaWater />,
    responsibility: c.s045,
    impact: c.s046,
    area: c.s047,
  },
  {
    label: c.s048,
    icon: <FaCube />,
    responsibility: c.s049,
    impact: c.s050,
    area: c.s051,
  },
  {
    label: c.s052,
    icon: <FaSeedling />,
    responsibility: c.s053,
    impact: c.s054,
    area: c.s055,
  },
];

const workflow = [
  {
    title: c.s056,
    text: c.s057,
  },
  {
    title: c.s058,
    text: c.s059,
  },
  {
    title: c.s060,
    text: c.s061,
  },
  {
    title: c.s062,
    text: c.s063,
  },
  {
    title: c.s064,
    text: c.s065,
  },
  {
    title: c.s066,
    text: c.s067,
  },
];

const architecture = [
  {
    icon: <FaWater />,
    title: c.s068,
    text: c.s069,
    layer: c.s070,
  },
  {
    icon: <FaProjectDiagram />,
    title: c.s071,
    text: c.s072,
    layer: c.s073,
  },
  {
    icon: <FaCube />,
    title: c.s074,
    text: c.s075,
    layer: c.s076,
  },
  {
    icon: <FaMobileAlt />,
    title: c.s077,
    text: c.s078,
    layer: c.s079,
  },
  {
    icon: <FaServer />,
    title: c.s080,
    text: c.s081,
    layer: c.s082,
  },
  {
    icon: <FaDatabase />,
    title: c.s083,
    text: c.s084,
    layer: c.s085,
  },
  {
    icon: <FaBrain />,
    title: c.s086,
    text: c.s087,
    layer: c.s088,
  },
  {
    icon: <FaShieldAlt />,
    title: c.s089,
    text: c.s090,
    layer: c.s091,
  },
];

const productHighlights = [
  c.s092,
  c.s093,
  c.s094,
  c.s095,
];

const visualHighlights = [
  { title: c.s096, image: firmaaLandingPage },
  { title: c.s097, image: firmaaDashboard },
  { title: c.s098, image: firmaaAgentPipeline },
  { title: c.s099, image: firmaaMobileModules },
];

const tradeoffs = [
  c.s100,
  c.s101,
  c.s102,
];

const learnings = [
  {
    title: c.s103,
    text: c.s104,
    area: c.s105,
  },
  {
    title: c.s106,
    text: c.s107,
    area: c.s108,
  },
  {
    title: c.s109,
    text: c.s110,
    area: c.s111,
  },
  {
    title: c.s112,
    text: c.s113,
    area: c.s010,
  },
];

const trustCards = [
  {
    title: c.s114,
    icon: <FaShieldAlt />,
    summary: c.s115,
    checks: [c.s116, c.s117],
  },
  {
    title: c.s118,
    icon: <FaCheckCircle />,
    summary: c.s119,
    checks: [c.s120, c.s121, c.s122],
  },
  {
    title: c.s123,
    icon: <FaBrain />,
    summary: c.s124,
    checks: [c.s125, c.s126, c.s127],
  },
];

const projectInfo = [
  [c.s128, c.s129],
  [c.s130, c.s131],
  [c.s132, c.s133],
  [c.s001, c.s134],
  [c.s010, c.s011],
];

const FirmaaDetails = () => {
  const demoVideoRef = useRef(null);
  const [playingVideo, setPlayingVideo] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handlePlay = async () => {
    setPlayingVideo(true);
    await demoVideoRef.current?.play();
  };

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
                <Link to="/" className="transition hover:text-[#7AC943]">{c.s135}</Link>
                <span>/</span>
                <Link to="/portfolio" className="transition hover:text-[#7AC943]">{c.s136}</Link>
                <span>/</span>
                <span className="text-[#7AC943]">{c.s131}</span>
              </div>

              <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
                <div>
                  <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#7AC943]/30 bg-[#7AC943]/10 px-4 py-2 text-sm font-semibold text-[#DDF6A1]">
                    <FaSeedling aria-hidden="true" />{c.s137}</div>
                  <h1 className="mb-6 text-4xl font-black leading-tight md:text-6xl">{c.s131}<span className="block text-[#7AC943]">{c.s138}</span>
                  </h1>
                  <p className="mb-7 max-w-3xl text-lg leading-relaxed text-gray-200 md:text-xl">{c.s139}</p>
                  <p className="mb-8 max-w-3xl text-base leading-8 text-gray-300">{c.s140}</p>

                  <div className="mb-8 flex flex-wrap gap-3">
                    {[c.s013, c.s021, c.s014, c.s015, c.s016, c.s017, c.s019].map((item) => (
                      <span key={item} className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-gray-200">
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-4">
                    <a href="#firmaa-demo" className="inline-flex items-center gap-2 rounded-full bg-[#7AC943] px-6 py-3 font-semibold text-[#081824] shadow-lg shadow-[#7AC943]/25 transition hover:bg-[#92D957]">
                      <FaPlay aria-hidden="true" />{c.s141}</a>
                    <Link to="/portfolio" className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3 font-semibold text-white transition hover:border-[#7AC943]/60 hover:bg-[#7AC943]/10">
                      <FaArrowLeft aria-hidden="true" />{c.s142}</Link>
                  </div>
                </div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.7, delay: 0.1 }}
                  className="rounded-3xl border border-white/15 bg-white/10 p-6 shadow-2xl shadow-black/30 backdrop-blur-xl"
                >
                  <div className="mb-4 flex items-center justify-center gap-4 rounded-2xl border border-white/10 bg-[#08073d]/70 px-5 py-4">
                    <img src={firmaaLogo} alt={c.s143} className="h-16 w-16 object-contain" loading="eager" decoding="async" />
                    <img src={firmaaName} alt={c.s144} className="h-10 max-w-[210px] object-contain" loading="eager" decoding="async" />
                  </div>
                  <button
                    type="button"
                    onClick={() => setSelectedImage({ src: firmaaSolutionCover, title: c.s145 })}
                    className="group relative w-full overflow-hidden rounded-2xl border border-white/10 bg-[#08073d]/70 p-3 focus:outline-none focus:ring-2 focus:ring-[#7AC943]/70"
                  >
                    <img
                      src={firmaaSolutionCover}
                      alt={c.s145}
                      className="mx-auto max-h-[420px] w-auto max-w-full rounded-xl object-contain transition duration-300 group-hover:scale-[1.01]"
                      loading="eager"
                      decoding="async"
                    />
                    <span className="absolute right-5 top-5 inline-flex items-center gap-2 rounded-full bg-black/65 px-3 py-1 text-xs font-bold text-white opacity-0 transition group-hover:opacity-100">
                      <FaExpand />{" "}{c.s146}</span>
                  </button>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

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
                  <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-gray-400">{metric.label}</p>
                  <p className="mb-3 text-3xl font-black text-[#7AC943]">{metric.value}</p>
                  <p className="text-sm leading-relaxed text-gray-300">{metric.detail}</p>
                </motion.div>
              ))}
            </div>

            <motion.section
              id="firmaa-demo"
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mt-14 rounded-3xl border border-white/15 bg-white/10 p-5 shadow-2xl shadow-black/20 backdrop-blur-xl md:p-7"
              aria-labelledby="firmaa-demo-title"
            >
              <div className="mb-5">
                <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#7AC943]/30 bg-[#7AC943]/10 px-4 py-2 text-sm font-semibold text-[#DDF6A1]">
                  <FaPlay aria-hidden="true" />{c.s147}</div>
                <h2 id="firmaa-demo-title" className="text-2xl font-black text-white md:text-3xl">{c.s148}</h2>
                <p className="mt-2 max-w-3xl text-sm leading-relaxed text-gray-300 md:text-base">{c.s149}</p>
              </div>

              <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#08073d]/80 shadow-2xl shadow-black/30">
                <video
                  ref={demoVideoRef}
                  src={firmaaDemoVideo}
                  poster={firmaaLogo}
                  preload="metadata"
                  className="aspect-video w-full bg-black object-contain"
                  onEnded={() => setPlayingVideo(false)}
                  onPause={() => playingVideo && setPlayingVideo(false)}
                  controls={playingVideo}
                  playsInline
                  aria-label={c.s150}
                />
                {!playingVideo && (
                  <button
                    type="button"
                    aria-label={c.s151}
                    onClick={handlePlay}
                    className="absolute inset-0 flex items-center justify-center bg-black/40 transition-opacity duration-300 hover:bg-black/20 focus:outline-none focus:ring-2 focus:ring-[#7AC943]/70 focus:ring-inset"
                  >
                    <span className="flex h-16 w-16 items-center justify-center rounded-full bg-[#7AC943] shadow-lg transition-transform duration-300 group-hover:scale-110">
                      <FaPlay className="ml-1 text-xl text-[#081824]" aria-hidden="true" />
                    </span>
                  </button>
                )}
              </div>
            </motion.section>

            <div className="mt-14 grid gap-10 lg:grid-cols-[minmax(0,1fr)_360px]">
              <div className="space-y-10">
                <section className="rounded-3xl border border-white/15 bg-white/10 p-7 backdrop-blur-xl md:p-9">
                  <div className="mb-5 flex items-center gap-3 text-[#7AC943]">
                    <FaSeedling className="text-2xl" aria-hidden="true" />
                    <h2 className="text-2xl font-black">{c.s152}</h2>
                  </div>
                  <p className="leading-relaxed text-gray-200">{c.s153}</p>
                </section>

                <section className="grid gap-5 md:grid-cols-2">
                  <div className="rounded-3xl border border-white/15 bg-white/10 p-7 backdrop-blur-xl">
                    <h2 className="mb-4 text-2xl font-black text-white">{c.s154}</h2>
                    <p className="leading-relaxed text-gray-300">{c.s155}</p>
                  </div>
                  <div className="rounded-3xl border border-[#7AC943]/30 bg-[#7AC943]/10 p-7 backdrop-blur-xl">
                    <h2 className="mb-4 text-2xl font-black text-white">{c.s156}</h2>
                    <p className="leading-relaxed text-gray-100">{c.s157}</p>
                  </div>
                </section>

                <section className="rounded-3xl border border-white/15 bg-white/10 p-7 backdrop-blur-xl md:p-9">
                  <div className="mb-5 flex items-center gap-3 text-[#7AC943]">
                    <FaProjectDiagram className="text-2xl" aria-hidden="true" />
                    <h2 className="text-2xl font-black">{c.s128}</h2>
                  </div>
                  <div className="mb-6 rounded-2xl border border-[#7AC943]/25 bg-[#7AC943]/10 p-5">
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#DDF6A1]">{c.s129}</p>
                    <p className="mt-3 leading-relaxed text-gray-100">{c.s158}</p>
                  </div>
                  <div className="grid gap-4 md:grid-cols-2">
                    {roleCards.map((item) => (
                      <div key={item.label} className="group rounded-2xl border border-white/10 bg-[#08073d]/70 p-5 transition hover:-translate-y-1 hover:border-[#7AC943]/50 hover:bg-[#0b1940]/80">
                        <div className="mb-4 flex items-start justify-between gap-4">
                          <div className="rounded-2xl border border-[#7AC943]/25 bg-[#7AC943]/10 p-3 text-2xl text-[#7AC943]">
                            {item.icon}
                          </div>
                          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-gray-300">
                            {item.area}
                          </span>
                        </div>
                        <h3 className="text-lg font-black text-white">{item.label}</h3>
                        <p className="mt-3 text-sm font-semibold text-[#DDF6A1]">{item.responsibility}</p>
                        <p className="mt-2 text-sm leading-6 text-gray-300">{item.impact}</p>
                      </div>
                    ))}
                  </div>
                </section>

                <section className="rounded-3xl border border-white/15 bg-white/10 p-7 backdrop-blur-xl md:p-9">
                  <div className="mb-5 flex items-center gap-3 text-[#7AC943]">
                    <FaCheckCircle className="text-2xl" aria-hidden="true" />
                    <h2 className="text-2xl font-black">{c.s159}</h2>
                  </div>
                  <p className="mb-6 max-w-3xl text-sm leading-6 text-gray-300">{c.s160}</p>
                  <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                    {platformClusters.map((cluster) => (
                      <div key={cluster.title} className="rounded-2xl border border-white/10 bg-[#08073d]/70 p-5">
                        <div className="mb-4 flex items-center gap-3">
                          <div className="rounded-xl border border-[#7AC943]/25 bg-[#7AC943]/10 p-3 text-xl text-[#7AC943]">
                            {cluster.icon}
                          </div>
                          <h3 className="font-black text-white">{cluster.title}</h3>
                        </div>
                        <div className="space-y-3">
                          {cluster.items.map((item) => (
                            <div key={item} className="flex gap-3 text-sm leading-6 text-gray-300">
                              <FaCheckCircle className="mt-1 shrink-0 text-[#7AC943]" aria-hidden="true" />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                <section className="rounded-3xl border border-white/15 bg-white/10 p-7 backdrop-blur-xl md:p-9">
                  <div className="mb-5 flex items-center gap-3 text-[#7AC943]">
                    <FaWater className="text-2xl" aria-hidden="true" />
                    <h2 className="text-2xl font-black">{c.s161}</h2>
                  </div>
                  <p className="mb-6 max-w-3xl text-sm leading-6 text-gray-300">{c.s162}</p>
                  <div className="relative grid gap-4 md:grid-cols-2 xl:grid-cols-6">
                    {workflow.map((step, index) => (
                      <div key={step.title} className="relative rounded-2xl border border-white/10 bg-[#08073d]/70 p-5 transition hover:-translate-y-1 hover:border-[#7AC943]/45">
                        {index < workflow.length - 1 && (
                          <FaArrowRight className="absolute -right-3 top-10 z-10 hidden rounded-full bg-[#070640] text-[#7AC943] xl:block" aria-hidden="true" />
                        )}
                        <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full border border-[#7AC943]/30 bg-[#7AC943]/15 text-sm font-black text-[#DDF6A1]">{c.s163}{index + 1}
                        </div>
                        <h3 className="font-bold text-white">{step.title}</h3>
                        <p className="mt-3 text-sm leading-relaxed text-gray-300">{step.text}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {[c.s013, c.s125, c.s164, c.s118, c.s021].map((item) => (
                      <span key={item} className="rounded-full border border-[#7AC943]/25 bg-[#7AC943]/10 px-3 py-1 text-xs font-bold text-[#DDF6A1]">
                        {item}
                      </span>
                    ))}
                  </div>
                </section>

                <section className="rounded-3xl border border-white/15 bg-white/10 p-7 backdrop-blur-xl md:p-9">
                  <div className="mb-5 flex items-center gap-3 text-[#7AC943]">
                    <FaServer className="text-2xl" aria-hidden="true" />
                    <h2 className="text-2xl font-black">{c.s165}</h2>
                  </div>
                  <p className="mb-6 max-w-3xl text-sm leading-6 text-gray-300">{c.s166}</p>
                  <div className="grid gap-4">
                    {architecture.map((item) => (
                      <div key={item.title} className="grid gap-4 rounded-2xl border border-white/10 bg-[#08073d]/70 p-5 transition hover:border-[#7AC943]/40 md:grid-cols-[180px_minmax(0,1fr)] md:items-center">
                        <div className="flex items-center gap-3">
                          <div className="rounded-2xl border border-[#7AC943]/25 bg-[#7AC943]/10 p-3 text-2xl text-[#7AC943]">
                            {item.icon}
                          </div>
                          <div>
                            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#DDF6A1]">{item.layer}</p>
                            <h3 className="mt-1 font-bold text-white">{item.title}</h3>
                          </div>
                        </div>
                        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                          <p className="text-sm leading-relaxed text-gray-300">{item.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <p className="mt-5 rounded-2xl border border-[#7AC943]/25 bg-[#7AC943]/10 p-4 font-mono text-sm text-[#DDF6A1]">{c.s167}</p>
                </section>

                <section className="rounded-3xl border border-white/15 bg-white/10 p-7 backdrop-blur-xl md:p-9">
                  <div className="mb-5 flex items-center gap-3 text-[#7AC943]">
                    <FaShieldAlt className="text-2xl" aria-hidden="true" />
                    <h2 className="text-2xl font-black">{c.s168}</h2>
                  </div>
                  <p className="mb-6 max-w-3xl leading-relaxed text-gray-200">{c.s169}</p>
                  <div className="grid gap-4 md:grid-cols-3">
                    {trustCards.map((card) => (
                      <div key={card.title} className="rounded-2xl border border-[#7AC943]/20 bg-[#071f35]/70 p-5">
                        <div className="mb-4 flex items-center gap-3">
                          <div className="rounded-xl bg-[#7AC943]/15 p-3 text-xl text-[#7AC943]">{card.icon}</div>
                          <h3 className="font-black text-white">{card.title}</h3>
                        </div>
                        <p className="mb-4 text-sm leading-6 text-gray-300">{card.summary}</p>
                        <div className="space-y-2">
                          {card.checks.map((item) => (
                            <div key={item} className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold text-[#DDF6A1]">
                              <FaCheckCircle className="shrink-0 text-[#7AC943]" aria-hidden="true" />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                <section className="rounded-3xl border border-white/15 bg-white/10 p-7 backdrop-blur-xl md:p-9">
                  <div className="mb-5 flex items-center gap-3 text-[#7AC943]">
                    <FaDatabase className="text-2xl" aria-hidden="true" />
                    <h2 className="text-2xl font-black">{c.s170}</h2>
                  </div>
                  <div className="grid gap-3 md:grid-cols-3">
                    {tradeoffs.map((item) => (
                      <div key={item} className="rounded-2xl border border-white/10 bg-[#08073d]/70 p-4 text-sm leading-relaxed text-gray-300">
                        {item}
                      </div>
                    ))}
                  </div>
                </section>

                <section className="rounded-3xl border border-white/15 bg-white/10 p-7 backdrop-blur-xl md:p-9">
                  <div className="mb-5 flex items-center gap-3 text-[#7AC943]">
                    <FaBrain className="text-2xl" aria-hidden="true" />
                    <h2 className="text-2xl font-black">{c.s171}</h2>
                  </div>
                  <div className="grid gap-4 md:grid-cols-2">
                    {learnings.map((item) => (
                      <div key={item.title} className="rounded-2xl border border-white/10 bg-[#08073d]/70 p-5 transition hover:border-[#7AC943]/40">
                        <span className="rounded-full border border-[#7AC943]/25 bg-[#7AC943]/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-[#DDF6A1]">
                          {item.area}
                        </span>
                        <h3 className="mt-4 text-lg font-black text-white">{item.title}</h3>
                        <p className="mt-3 text-sm leading-relaxed text-gray-300">{item.text}</p>
                      </div>
                    ))}
                  </div>
                </section>
              </div>

              <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
                <div className="rounded-3xl border border-white/15 bg-white/10 p-6 backdrop-blur-xl">
                  <h2 className="mb-5 text-xl font-black">{c.s172}</h2>
                  <div className="space-y-4 text-sm">
                    {projectInfo.map(([label, value]) => (
                      <div key={label}>
                        <p className="text-gray-400">{label}</p>
                        <p className="font-semibold text-white">{value}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-3xl border border-white/15 bg-white/10 p-6 backdrop-blur-xl">
                  <h2 className="mb-4 text-xl font-black">{c.s173}</h2>
                  <div className="flex flex-wrap gap-2">
                    {stack.map((item) => (
                      <span key={item} className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-sm text-gray-200">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="rounded-3xl border border-white/15 bg-white/10 p-6 backdrop-blur-xl">
                  <h2 className="mb-4 text-xl font-black">{c.s174}</h2>
                  <ul className="space-y-3 text-sm leading-relaxed text-gray-300">
                    {productHighlights.map((item) => (
                      <li key={item} className="border-l-2 border-[#7AC943] pl-4">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-3xl border border-white/15 bg-white/10 p-6 backdrop-blur-xl">
                  <h2 className="mb-4 text-xl font-black">{c.s175}</h2>
                  <div className="grid gap-3">
                    {visualHighlights.map((item) => (
                      <button
                        key={item.title}
                        type="button"
                        onClick={() => setSelectedImage({ src: item.image, title: item.title })}
                        className="group overflow-hidden rounded-2xl border border-white/10 bg-[#08073d]/70 text-left transition hover:border-[#7AC943]/60 focus:outline-none focus:ring-2 focus:ring-[#7AC943]/70"
                      >
                        <div className="relative aspect-video bg-[#080744]">
                          <img src={item.image} alt={item.title} className="h-full w-full object-contain transition duration-300 group-hover:scale-[1.02]" loading="lazy" decoding="async" />
                          <span className="absolute right-3 top-3 inline-flex items-center gap-2 rounded-full bg-black/65 px-3 py-1 text-xs font-bold text-white opacity-0 transition group-hover:opacity-100">
                            <FaExpand />{" "}{c.s146}</span>
                        </div>
                        <p className="px-4 py-3 text-sm font-bold text-white">{item.title}</p>
                      </button>
                    ))}
                  </div>
                </div>

                <Link
                  to="/contact"
                  className="block rounded-2xl bg-[#7AC943] px-5 py-4 text-center font-bold text-[#081824] shadow-lg shadow-[#7AC943]/20 transition hover:-translate-y-1 hover:bg-[#92D957]"
                >{c.s176}</Link>
              </aside>
            </div>

            <div className="mt-14 rounded-3xl border border-white/15 bg-white/10 p-7 backdrop-blur-xl md:p-9">
              <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
                <div>
                  <h2 className="mb-2 text-2xl font-black">{c.s177}</h2>
                  <p className="text-gray-300">{c.s178}</p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <a href="#firmaa-demo" className="inline-flex items-center gap-2 rounded-full bg-[#7AC943] px-5 py-3 font-semibold text-[#081824] transition hover:bg-[#92D957]">
                    <FaPlay aria-hidden="true" />{c.s179}</a>
                  <Link to="/portfolio" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 font-semibold text-white transition hover:border-[#7AC943]/60 hover:bg-[#7AC943]/10">{c.s136}</Link>
                  <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 font-semibold text-white transition hover:border-[#7AC943]/60 hover:bg-[#7AC943]/10">{c.s180}<FaArrowRight aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </div>

            <motion.div
              className="mt-14 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-10 md:flex-row"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Link to="/portfolio" className="group flex items-center gap-3 text-gray-400 transition-colors hover:text-white">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 transition-all group-hover:border-[#7AC943] group-hover:bg-[#7AC943]">
                  <FaArrowLeft />
                </div>
                <div>
                  <span className="block text-xs uppercase tracking-wider text-gray-500 group-hover:text-gray-300">{c.s181}</span>
                  <span className="text-lg font-semibold">{c.s136}</span>
                </div>
              </Link>

              <Link to="/contact" className="group flex items-center gap-3 text-right text-gray-400 transition-colors hover:text-white">
                <div>
                  <span className="block text-xs uppercase tracking-wider text-gray-500 group-hover:text-gray-300">{c.s182}</span>
                  <span className="text-lg font-semibold">{c.s180}</span>
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 transition-all group-hover:border-[#7AC943] group-hover:bg-[#7AC943]">
                  <FaArrowRight />
                </div>
              </Link>
            </motion.div>
          </div>
        </section>
      </main>

      {selectedImage && (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-black/85 px-4 py-6 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={`${selectedImage.title} preview`}
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-h-full w-full max-w-6xl rounded-[1.75rem] border border-white/15 bg-[#080744] p-4 shadow-2xl shadow-black/40"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mb-3 flex items-center justify-between gap-4">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#DDF6A1]">{selectedImage.title}</p>
              <button
                type="button"
                onClick={() => setSelectedImage(null)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition hover:border-[#DDF6A1]/70 hover:text-[#DDF6A1] focus:outline-none focus:ring-2 focus:ring-[#DDF6A1]/70"
                aria-label={c.s183}
              >
                <FaTimes />
              </button>
            </div>
            <img src={selectedImage.src} alt={selectedImage.title} className="max-h-[82vh] w-full rounded-2xl object-contain" />
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default FirmaaDetails;
