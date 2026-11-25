import { motion } from "framer-motion";
import { useState } from "react";
import {
  FaArrowLeft,
  FaArrowRight,
  FaBriefcase,
  FaComments,
  FaDatabase,
  FaExpand,
  FaHandshake,
  FaMobileAlt,
  FaProjectDiagram,
  FaServer,
  FaStar,
  FaTasks,
  FaTimes,
  FaUserPlus,
  FaUsers,
} from "react-icons/fa";
import { SiDart, SiFirebase, SiFlutter } from "react-icons/si";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

import proLinkLogo from "../../assets/images/FlutterFlow.png";
import proLinkPreview from "../../assets/images/FlutterFlow2.png";
import en from "../../content/proLink/caseStudy.en";
import fr from "../../content/proLink/caseStudy.fr";
import { pickContent } from "../../i18n/localeContent";

// Long-form copy lives in src/content/proLink/caseStudy.{en,fr}.js. The locale comes from the
// URL and switching language reloads the page, so picking once at module level is safe.
const c = pickContent({ en, fr });

const metricCards = [
  { label: c.s001, value: c.s002, detail: c.s003 },
  { label: c.s004, value: c.s005, detail: c.s006 },
  { label: c.s007, value: c.s008, detail: c.s009 },
  { label: c.s010, value: c.s011, detail: c.s012 },
];

const featureGroups = [
  {
    id: "account",
    title: c.s013,
    items: [c.s014, c.s015, c.s016, c.s017],
    icon: <FaUserPlus />,
  },
  {
    id: "project",
    title: c.s018,
    items: [c.s019, c.s020, c.s021, c.s022],
    icon: <FaTasks />,
  },
  {
  id: "review",
    title: c.s023,
    items: [c.s024, c.s025, c.s026, c.s027],
    icon: <FaStar />,
  },
  {
    id: "chat",
    title: c.s028,
    items: [c.s029, c.s030, c.s031, c.s032],
    icon: <FaComments />,
  },
];

const roleCards = [
  {
    title: c.s033,
    area: c.s034,
    text: c.s035,
  },
  {
    title: c.s036,
    area: c.s037,
    text: c.s038,
  },
  {
    title: c.s039,
    area: c.s040,
    text: c.s041,
  },
  {
    title: c.s042,
    area: c.s043,
    text: c.s044,
  },
];

const marketplaceFlow = [
  {
    title: c.s045,
    label: c.s046,
    text: c.s047,
  },
  {
    title: c.s048,
    label: c.s049,
    text: c.s050,
  },
  {
    title: c.s051,
    label: c.s052,
    text: c.s053,
  },
  {
    title: c.s054,
    label: c.s005,
    text: c.s055,
  },
];

const workflowCards = [
  {
    icon: <FaUsers />,
    title: c.s056,
    text: c.s057,
  },
  {
    icon: <FaBriefcase />,
    title: c.s058,
    text: c.s059,
  },
  {
    icon: <FaHandshake />,
    title: c.s060,
    text: c.s061,
  },
  {
    icon: <FaDatabase />,
    title: c.s062,
    text: c.s063,
  },
];

const tradeoffCards = [
  {
    title: c.s064,
    text: c.s065,
  },
  {
    title: c.s066,
    text: c.s067,
  },
  {
    title: c.s068,
    text: c.s069,
  },
];

const learningCards = [
  {
    title: c.s070,
    area: c.s071,
    text: c.s072,
  },
  {
    title: c.s073,
    area: c.s074,
    text: c.s075,
  },
  {
    title: c.s076,
    area: c.s077,
    text: c.s078,
  },
  {
    title: c.s079,
    area: c.s005,
    text: c.s080,
  },
];

const stack = [c.s081, c.s077, c.s082, c.s005];

const projectInfo = [
  [c.s083, c.s084],
  [c.s085, c.s086],
  [c.s087, c.s088],
  [c.s089, c.s090],
  [c.s007, c.s091],
];

const visuals = [
  { title: c.s092, image: proLinkLogo },
  { title: c.s093, image: proLinkPreview },
];

const ProLinkDetails = () => {
  const [selectedImage, setSelectedImage] = useState(null);

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
                <Link to="/" className="transition hover:text-[#5066AD]">{c.s094}</Link>
                <span>/</span>
                <Link to="/portfolio" className="transition hover:text-[#5066AD]">{c.s095}</Link>
                <span>/</span>
                <span className="text-[#5066AD]">{c.s096}</span>
              </div>

              <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
                <div>
                  <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#5066AD]/30 bg-[#5066AD]/10 px-4 py-2 text-sm font-semibold text-[#B8C5FF]">
                    <FaHandshake aria-hidden="true" />{c.s097}</div>
                  <h1 className="mb-6 text-4xl font-black leading-tight md:text-6xl">{c.s096}<span className="block text-[#5066AD]">{c.s098}</span>
                  </h1>
                  <p className="mb-7 max-w-3xl text-lg leading-relaxed text-gray-200 md:text-xl">{c.s099}</p>
                  <p className="mb-8 max-w-3xl text-base leading-8 text-gray-300">{c.s100}</p>

                  <div className="mb-8 flex flex-wrap gap-3">
                    {[c.s081, c.s077, c.s082, c.s005, c.s101, c.s091].map((item) => (
                      <span key={item} className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-gray-200">
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-4">
                    <a href="#prolink-features" className="inline-flex items-center gap-2 rounded-full bg-[#5066AD] px-6 py-3 font-semibold text-white shadow-lg shadow-[#5066AD]/25 transition hover:bg-[#657BD0]">
                      <FaTasks aria-hidden="true" />{c.s102}</a>
                    <Link to="/portfolio" className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3 font-semibold text-white transition hover:border-[#5066AD]/60 hover:bg-[#5066AD]/10">
                      <FaArrowLeft aria-hidden="true" />{c.s103}</Link>
                  </div>
                </div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.7, delay: 0.1 }}
                  className="rounded-3xl border border-white/15 bg-white/10 p-8 shadow-2xl shadow-black/30 backdrop-blur-xl"
                >
                  <button
                    type="button"
                    onClick={() => setSelectedImage({ src: proLinkLogo, title: c.s092 })}
                    className="group relative w-full overflow-hidden rounded-2xl border border-white/10 bg-[#08073d]/70 p-8 focus:outline-none focus:ring-2 focus:ring-[#5066AD]/70"
                  >
                    <img
                      src={proLinkLogo}
                      alt={c.s104}
                      className="mx-auto w-full max-w-[360px] rounded-2xl object-contain drop-shadow-2xl transition duration-300 group-hover:scale-[1.02]"
                      loading="eager"
                      decoding="async"
                    />
                    <span className="absolute right-5 top-5 inline-flex items-center gap-2 rounded-full bg-black/65 px-3 py-1 text-xs font-bold text-white opacity-0 transition group-hover:opacity-100">
                      <FaExpand />{" "}{c.s105}</span>
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
                  <p className="mb-3 text-4xl font-black text-[#5066AD]">{metric.value}</p>
                  <p className="text-sm leading-relaxed text-gray-300">{metric.detail}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-14 grid gap-10 lg:grid-cols-[minmax(0,1fr)_360px]">
              <div className="space-y-10">
                <section className="rounded-3xl border border-white/15 bg-white/10 p-7 backdrop-blur-xl md:p-9">
                  <div className="mb-5 flex items-center gap-3 text-[#5066AD]">
                    <FaMobileAlt className="text-2xl" aria-hidden="true" />
                    <h2 className="text-2xl font-black">{c.s106}</h2>
                  </div>
                  <p className="leading-relaxed text-gray-200">{c.s107}</p>
                </section>

                <section className="grid gap-5 md:grid-cols-2">
                  <div className="rounded-3xl border border-white/15 bg-white/10 p-7 backdrop-blur-xl">
                    <h2 className="mb-4 text-2xl font-black text-white">{c.s108}</h2>
                    <p className="leading-relaxed text-gray-300">{c.s109}</p>
                  </div>
                  <div className="rounded-3xl border border-[#5066AD]/30 bg-[#5066AD]/10 p-7 backdrop-blur-xl">
                    <h2 className="mb-4 text-2xl font-black text-white">{c.s110}</h2>
                    <p className="leading-relaxed text-gray-100">{c.s111}</p>
                  </div>
                </section>

                <section className="rounded-3xl border border-white/15 bg-white/10 p-7 backdrop-blur-xl md:p-9">
                  <div className="mb-5 flex items-center gap-3 text-[#5066AD]">
                    <FaProjectDiagram className="text-2xl" aria-hidden="true" />
                    <h2 className="text-2xl font-black">{c.s083}</h2>
                  </div>
                  <p className="mb-5 leading-relaxed text-gray-200">{c.s112}</p>
                  <div className="grid gap-4 md:grid-cols-2">
                    {roleCards.map((role) => (
                      <div key={role.title} className="rounded-2xl border border-white/10 bg-[#08073d]/70 p-5 transition-colors hover:border-[#5066AD]/40">
                        <p className="mb-3 text-xs font-bold uppercase tracking-wide text-[#B8C5FF]">{role.area}</p>
                        <h3 className="mb-2 text-lg font-black text-white">{role.title}</h3>
                        <p className="text-sm leading-relaxed text-gray-300">{role.text}</p>
                      </div>
                    ))}
                  </div>
                </section>

                <section id="prolink-features" className="scroll-mt-28 rounded-3xl border border-white/15 bg-white/10 p-7 backdrop-blur-xl md:p-9">
                  <div className="mb-5 flex items-center gap-3 text-[#5066AD]">
                    <FaTasks className="text-2xl" aria-hidden="true" />
                  <h2 className="text-2xl font-black">{c.s113}</h2>
                  </div>
                  <div className="grid gap-4 md:grid-cols-2">
                    {featureGroups.map((feature) => (
                      <div key={feature.id} className="rounded-2xl border border-white/10 bg-[#08073d]/70 p-5 transition-colors hover:border-[#5066AD]/40">
                        <div className="mb-4 text-3xl text-[#5066AD]">{feature.icon}</div>
                        <h3 className="mb-2 font-bold text-white">{feature.title}</h3>
                        <div className="space-y-2">
                          {feature.items.map((item) => (
                            <p key={item} className="flex gap-2 text-sm leading-relaxed text-gray-300">
                              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#5066AD]" />
                              <span>{item}</span>
                            </p>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                <section className="rounded-3xl border border-white/15 bg-white/10 p-7 backdrop-blur-xl md:p-9">
                  <div className="mb-5 flex items-center gap-3 text-[#5066AD]">
                    <FaServer className="text-2xl" aria-hidden="true" />
                    <h2 className="text-2xl font-black">{c.s114}</h2>
                  </div>
                  <div className="grid gap-4 md:grid-cols-2">
                    {marketplaceFlow.map((step, index) => (
                      <div key={step.title} className="rounded-2xl border border-white/10 bg-[#08073d]/70 p-5">
                        <div className="mb-4 flex items-center justify-between gap-3">
                          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#5066AD] text-sm font-black text-white">
                            {index + 1}
                          </span>
                          <span className="rounded-full border border-[#5066AD]/30 bg-[#5066AD]/10 px-3 py-1 text-xs font-semibold text-[#B8C5FF]">
                            {step.label}
                          </span>
                        </div>
                        <h3 className="font-bold text-white">{step.title}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-gray-300">{step.text}</p>
                      </div>
                    ))}
                  </div>
                  <p className="mt-5 rounded-2xl border border-[#5066AD]/25 bg-[#5066AD]/10 p-4 font-mono text-sm text-[#B8C5FF]">{c.s115}</p>
                </section>

                <section className="rounded-3xl border border-white/15 bg-white/10 p-7 backdrop-blur-xl md:p-9">
                  <div className="mb-5 flex items-center gap-3 text-[#5066AD]">
                    <FaHandshake className="text-2xl" aria-hidden="true" />
                    <h2 className="text-2xl font-black">{c.s116}</h2>
                  </div>
                  <p className="mb-5 leading-relaxed text-gray-200">{c.s117}</p>
                  <div className="grid gap-4 md:grid-cols-2">
                    {workflowCards.map((item) => (
                      <div key={item.title} className="rounded-2xl border border-white/10 bg-[#08073d]/70 p-5 transition-colors hover:border-[#5066AD]/40">
                        <div className="mb-4 text-3xl text-[#5066AD]">{item.icon}</div>
                        <h3 className="mb-2 font-bold text-white">{item.title}</h3>
                        <p className="text-sm leading-relaxed text-gray-300">{item.text}</p>
                      </div>
                    ))}
                  </div>
                </section>

                <section className="rounded-3xl border border-white/15 bg-white/10 p-7 backdrop-blur-xl md:p-9">
                  <div className="mb-5 flex items-center gap-3 text-[#5066AD]">
                    <FaDatabase className="text-2xl" aria-hidden="true" />
                    <h2 className="text-2xl font-black">{c.s118}</h2>
                  </div>
                  <div className="grid gap-3 md:grid-cols-3">
                    {tradeoffCards.map((item) => (
                      <div key={item.title} className="rounded-2xl border border-white/10 bg-[#08073d]/70 p-5">
                        <h3 className="mb-2 font-bold text-white">{item.title}</h3>
                        <p className="text-sm leading-relaxed text-gray-300">{item.text}</p>
                      </div>
                    ))}
                  </div>
                </section>

                <section className="rounded-3xl border border-white/15 bg-white/10 p-7 backdrop-blur-xl md:p-9">
                  <div className="mb-5 flex items-center gap-3 text-[#5066AD]">
                    <FaStar className="text-2xl" aria-hidden="true" />
                  <h2 className="text-2xl font-black">{c.s119}</h2>
                  </div>
                  <div className="grid gap-4 md:grid-cols-2">
                    {learningCards.map((item) => (
                      <div key={item.title} className="rounded-2xl border border-white/10 bg-[#08073d]/70 p-5">
                        <p className="mb-2 text-xs font-bold uppercase tracking-wide text-[#B8C5FF]">{item.area}</p>
                        <h3 className="mb-2 font-bold text-white">{item.title}</h3>
                        <p className="text-sm leading-relaxed text-gray-300">{item.text}</p>
                      </div>
                    ))}
                  </div>
                </section>
              </div>

              <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
                <div className="rounded-3xl border border-white/15 bg-white/10 p-6 backdrop-blur-xl">
                  <h2 className="mb-5 text-xl font-black">{c.s120}</h2>
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
                  <h2 className="mb-4 text-xl font-black">{c.s121}</h2>
                  <div className="space-y-3 text-sm">
                    <p className="flex items-center gap-2 text-gray-200"><SiFlutter className="text-[#5066AD]" />{" "}{c.s081}</p>
                    <p className="flex items-center gap-2 text-gray-200"><FaMobileAlt className="text-[#5066AD]" />{" "}{c.s077}</p>
                    <p className="flex items-center gap-2 text-gray-200"><SiDart className="text-[#5066AD]" />{" "}{c.s082}</p>
                    <p className="flex items-center gap-2 text-gray-200"><SiFirebase className="text-[#5066AD]" />{" "}{c.s005}</p>
                  </div>
                </div>

                <div className="rounded-3xl border border-white/15 bg-white/10 p-6 backdrop-blur-xl">
                  <h2 className="mb-4 text-xl font-black">{c.s122}</h2>
                  <div className="flex flex-wrap gap-2">
                    {stack.map((item) => (
                      <span key={item} className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-sm text-gray-200">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="rounded-3xl border border-white/15 bg-white/10 p-6 backdrop-blur-xl">
                  <h2 className="mb-4 text-xl font-black">{c.s123}</h2>
                  <div className="grid gap-3">
                    {visuals.map((item) => (
                      <button
                        key={item.title}
                        type="button"
                        onClick={() => setSelectedImage({ src: item.image, title: item.title })}
                        className="group overflow-hidden rounded-2xl border border-white/10 bg-[#08073d]/70 text-left transition hover:border-[#5066AD]/60 focus:outline-none focus:ring-2 focus:ring-[#5066AD]/70"
                      >
                        <div className="relative aspect-video bg-[#080744] p-4">
                          <img src={item.image} alt={item.title} className="h-full w-full object-contain transition duration-300 group-hover:scale-[1.02]" loading="lazy" decoding="async" />
                          <span className="absolute right-3 top-3 inline-flex items-center gap-2 rounded-full bg-black/65 px-3 py-1 text-xs font-bold text-white opacity-0 transition group-hover:opacity-100">
                            <FaExpand />{" "}{c.s105}</span>
                        </div>
                        <p className="px-4 py-3 text-sm font-bold text-white">{item.title}</p>
                      </button>
                    ))}
                  </div>
                </div>

                <Link
                  to="/contact"
                  className="block rounded-2xl bg-[#5066AD] px-5 py-4 text-center font-bold text-white shadow-lg shadow-[#5066AD]/20 transition hover:-translate-y-1 hover:bg-[#657BD0]"
                >{c.s124}</Link>
              </aside>
            </div>

            <div className="mt-14 rounded-3xl border border-white/15 bg-white/10 p-7 backdrop-blur-xl md:p-9">
              <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
                <div>
                  <h2 className="mb-2 text-2xl font-black">{c.s125}</h2>
                  <p className="text-gray-300">{c.s126}</p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <a href="#prolink-features" className="inline-flex items-center gap-2 rounded-full bg-[#5066AD] px-5 py-3 font-semibold text-white transition hover:bg-[#657BD0]">
                    <FaTasks aria-hidden="true" />{c.s127}</a>
                  <Link to="/portfolio" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 font-semibold text-white transition hover:border-[#5066AD]/60 hover:bg-[#5066AD]/10">{c.s095}</Link>
                  <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 font-semibold text-white transition hover:border-[#5066AD]/60 hover:bg-[#5066AD]/10">{c.s128}<FaArrowRight aria-hidden="true" />
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
              <Link to="/portfolio/onboardify" className="group flex items-center gap-3 text-gray-400 transition-colors hover:text-white">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 transition-all group-hover:border-[#5066AD] group-hover:bg-[#5066AD]">
                  <FaArrowLeft />
                </div>
                <div>
                  <span className="block text-xs uppercase tracking-wider text-gray-500 group-hover:text-gray-300">{c.s129}</span>
                  <span className="text-lg font-semibold">{c.s130}</span>
                </div>
              </Link>

              <Link to="/portfolio" className="group flex items-center gap-3 text-right text-gray-400 transition-colors hover:text-white">
                <div>
                  <span className="block text-xs uppercase tracking-wider text-gray-500 group-hover:text-gray-300">{c.s131}</span>
                  <span className="text-lg font-semibold">{c.s095}</span>
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 transition-all group-hover:border-[#5066AD] group-hover:bg-[#5066AD]">
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
            className="relative max-h-full w-full max-w-5xl rounded-[1.75rem] border border-white/15 bg-[#080744] p-4 shadow-2xl shadow-black/40"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mb-3 flex items-center justify-between gap-4">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#DDE4FF]">{selectedImage.title}</p>
              <button
                type="button"
                onClick={() => setSelectedImage(null)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition hover:border-[#DDE4FF]/70 hover:text-[#DDE4FF] focus:outline-none focus:ring-2 focus:ring-[#DDE4FF]/70"
                aria-label={c.s132}
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

export default ProLinkDetails;
