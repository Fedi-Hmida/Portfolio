import { motion } from "framer-motion";
import { useRef, useState } from "react";
import {
  FaArrowLeft,
  FaArrowRight,
  FaBolt,
  FaDatabase,
  FaLeaf,
  FaMobileAlt,
  FaPlay,
  FaProjectDiagram,
  FaServer,
  FaSolarPanel,
  FaWifi,
} from "react-icons/fa";
import { SiDart, SiFirebase, SiFlutter } from "react-icons/si";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import ParticlesBackground from "../../components/ParticlesBackground";

import solarLogo from "../../assets/images/logo_1555.png";
import maintenanceVideo from "../../assets/videos/Maintennace2.0.mp4";
import adminVideo from "../../assets/videos/admin2.0.mp4";
import userVideo from "../../assets/videos/user2.0.mp4";
import en from "../../content/solarFlow/caseStudy.en";
import fr from "../../content/solarFlow/caseStudy.fr";
import { pickContent } from "../../i18n/localeContent";

// Long-form copy lives in src/content/solarFlow/caseStudy.{en,fr}.js. The locale comes from the
// URL and switching language reloads the page, so picking once at module level is safe.
const c = pickContent({ en, fr });

const metricCards = [
  { label: c.s001, value: c.s002, detail: c.s003 },
  { label: c.s004, value: c.s005, detail: c.s006 },
  { label: c.s007, value: c.s008, detail: c.s009 },
  { label: c.s010, value: c.s011, detail: c.s012 },
];

const roleCards = [
  {
    title: c.s013,
    area: c.s014,
    text: c.s015,
  },
  {
    title: c.s016,
    area: c.s017,
    text: c.s018,
  },
  {
    title: c.s019,
    area: c.s020,
    text: c.s021,
  },
  {
    title: c.s022,
    area: c.s023,
    text: c.s024,
  },
];

const platformFlow = [
  {
    title: c.s025,
    label: c.s002,
    text: c.s026,
  },
  {
    title: c.s027,
    label: c.s005,
    text: c.s028,
  },
  {
    title: c.s029,
    label: c.s030,
    text: c.s031,
  },
  {
    title: c.s032,
    label: c.s033,
    text: c.s034,
  },
];

const featureGroups = [
  {
    icon: <FaBolt />,
    title: c.s035,
    items: [c.s036, c.s037, c.s038],
  },
  {
    icon: <FaWifi />,
    title: c.s039,
    items: [c.s040, c.s041, c.s042],
  },
  {
    icon: <FaMobileAlt />,
    title: c.s043,
    items: [c.s044, c.s045, c.s046],
  },
  {
    icon: <FaDatabase />,
    title: c.s047,
    items: [c.s048, c.s049, c.s050],
  },
];

const roleWorkflows = [
  {
    title: c.s051,
    text: c.s052,
  },
  {
    title: c.s053,
    text: c.s054,
  },
  {
    title: c.s055,
    text: c.s056,
  },
];

const tradeoffCards = [
  {
    title: c.s057,
    text: c.s058,
  },
  {
    title: c.s059,
    text: c.s060,
  },
  {
    title: c.s061,
    text: c.s062,
  },
];

const learningCards = [
  {
    title: c.s063,
    area: c.s002,
    text: c.s064,
  },
  {
    title: c.s065,
    area: c.s066,
    text: c.s067,
  },
  {
    title: c.s068,
    area: c.s069,
    text: c.s070,
  },
  {
    title: c.s071,
    area: c.s072,
    text: c.s073,
  },
];

const stack = [c.s002, c.s074, c.s030, c.s075];

const projectInfo = [
  [c.s076, c.s077],
  [c.s078, c.s079],
  [c.s080, c.s081],
  [c.s082, c.s083],
  [c.s007, c.s084],
];

const demoVideos = [
  {
    key: "user",
    title: c.s085,
    label: c.s086,
    src: userVideo,
  },
  {
    key: "maintenance",
    title: c.s087,
    label: c.s088,
    src: maintenanceVideo,
  },
  {
    key: "admin",
    title: c.s089,
    label: c.s090,
    src: adminVideo,
  },
];

const SolarFlowDetails = () => {
  const [playingVideo, setPlayingVideo] = useState(null);
  const userVideoRef = useRef(null);
  const maintenanceVideoRef = useRef(null);
  const adminVideoRef = useRef(null);
  const videoRefs = {
    user: userVideoRef,
    maintenance: maintenanceVideoRef,
    admin: adminVideoRef,
  };

  const handlePlay = (videoName) => {
    const selectedVideo = videoRefs[videoName].current;

    if (!selectedVideo) {
      return;
    }

    if (playingVideo === videoName) {
      selectedVideo.pause();
      setPlayingVideo(null);
      return;
    }

    Object.entries(videoRefs).forEach(([key, ref]) => {
      if (key !== videoName) {
        ref.current?.pause();
      }
    });

    selectedVideo.play();
    setPlayingVideo(videoName);
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#070640] text-white">
      <ParticlesBackground />
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
                <Link to="/" className="transition hover:text-[#DDEFEA]">{c.s091}</Link>
                <span>/</span>
                <Link to="/portfolio" className="transition hover:text-[#DDEFEA]">{c.s092}</Link>
                <span>/</span>
                <span className="text-[#DDEFEA]">{c.s093}</span>
              </div>

              <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
                <div>
                  <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#DDEFEA]/30 bg-[#DDEFEA]/10 px-4 py-2 text-sm font-semibold text-[#F3FFFB]">
                    <FaSolarPanel aria-hidden="true" />{c.s094}</div>
                  <h1 className="mb-6 text-4xl font-black leading-tight md:text-6xl">{c.s093}<span className="block text-[#DDEFEA]">{c.s095}</span>
                  </h1>
                  <p className="mb-7 max-w-3xl text-lg leading-relaxed text-gray-200 md:text-xl">{c.s096}</p>
                  <p className="mb-8 max-w-3xl text-base leading-8 text-gray-300">{c.s097}</p>

                  <div className="mb-8 flex flex-wrap gap-3">
                    {[c.s002, c.s074, c.s030, c.s075, c.s084].map((item) => (
                      <span key={item} className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-gray-200">
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-4">
                    <a href="#solarflow-demo" className="inline-flex items-center gap-2 rounded-full bg-[#DDEFEA] px-6 py-3 font-semibold text-[#002040] shadow-lg shadow-[#DDEFEA]/25 transition hover:bg-[#F3FFFB]">
                      <FaPlay aria-hidden="true" />{c.s098}</a>
                    <Link to="/portfolio" className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3 font-semibold text-white transition hover:border-[#DDEFEA]/60 hover:bg-[#DDEFEA]/10">
                      <FaArrowLeft aria-hidden="true" />{c.s099}</Link>
                  </div>
                </div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.7, delay: 0.1 }}
                  className="rounded-3xl border border-white/15 bg-white/10 p-10 shadow-2xl shadow-black/30 backdrop-blur-xl"
                >
                  <img
                    src={solarLogo}
                    alt={c.s100}
                    className="mx-auto w-full max-w-[360px] rounded-2xl object-contain drop-shadow-2xl"
                    loading="eager"
                    decoding="async"
                  />
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
                  <p className="mb-3 text-4xl font-black text-[#DDEFEA]">{metric.value}</p>
                  <p className="text-sm leading-relaxed text-gray-300">{metric.detail}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-14 grid gap-10 lg:grid-cols-[minmax(0,1fr)_360px]">
              <div className="space-y-10">
                <section className="rounded-3xl border border-white/15 bg-white/10 p-7 backdrop-blur-xl md:p-9">
                  <div className="mb-5 flex items-center gap-3 text-[#DDEFEA]">
                    <FaLeaf className="text-2xl" aria-hidden="true" />
                    <h2 className="text-2xl font-black">{c.s101}</h2>
                  </div>
                  <p className="leading-relaxed text-gray-200">{c.s102}</p>
                </section>

                <section className="grid gap-5 md:grid-cols-2">
                  <div className="rounded-3xl border border-white/15 bg-white/10 p-7 backdrop-blur-xl">
                    <h2 className="mb-4 text-2xl font-black text-white">{c.s103}</h2>
                    <p className="leading-relaxed text-gray-300">{c.s104}</p>
                  </div>
                  <div className="rounded-3xl border border-[#DDEFEA]/30 bg-[#DDEFEA]/10 p-7 backdrop-blur-xl">
                    <h2 className="mb-4 text-2xl font-black text-white">{c.s105}</h2>
                    <p className="leading-relaxed text-gray-100">{c.s106}</p>
                  </div>
                </section>

                <section className="rounded-3xl border border-white/15 bg-white/10 p-7 backdrop-blur-xl md:p-9">
                  <div className="mb-5 flex items-center gap-3 text-[#DDEFEA]">
                    <FaProjectDiagram className="text-2xl" aria-hidden="true" />
                    <h2 className="text-2xl font-black">{c.s076}</h2>
                  </div>
                  <p className="mb-5 leading-relaxed text-gray-200">{c.s107}</p>
                  <div className="grid gap-4 md:grid-cols-2">
                    {roleCards.map((role) => (
                      <div key={role.title} className="rounded-2xl border border-white/10 bg-[#08073d]/70 p-5 transition-colors hover:border-[#DDEFEA]/40">
                        <p className="mb-3 text-xs font-bold uppercase tracking-wide text-[#F3FFFB]">{role.area}</p>
                        <h3 className="mb-2 text-lg font-black text-white">{role.title}</h3>
                        <p className="text-sm leading-relaxed text-gray-300">{role.text}</p>
                      </div>
                    ))}
                  </div>
                </section>

                <section className="rounded-3xl border border-white/15 bg-white/10 p-7 backdrop-blur-xl md:p-9">
                  <div className="mb-5 flex items-center gap-3 text-[#DDEFEA]">
                    <FaBolt className="text-2xl" aria-hidden="true" />
                    <h2 className="text-2xl font-black">{c.s108}</h2>
                  </div>
                  <div className="grid gap-4 md:grid-cols-2">
                    {featureGroups.map((feature) => (
                      <div key={feature.title} className="rounded-2xl border border-white/10 bg-[#08073d]/70 p-5 transition-colors hover:border-[#DDEFEA]/40">
                        <div className="mb-4 text-3xl text-[#DDEFEA]">{feature.icon}</div>
                        <h3 className="mb-2 font-bold text-white">{feature.title}</h3>
                        <div className="space-y-2">
                          {feature.items.map((item) => (
                            <p key={item} className="flex gap-2 text-sm leading-relaxed text-gray-300">
                              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#DDEFEA]" />
                              <span>{item}</span>
                            </p>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                <section className="rounded-3xl border border-white/15 bg-white/10 p-7 backdrop-blur-xl md:p-9">
                  <div className="mb-5 flex items-center gap-3 text-[#DDEFEA]">
                    <FaServer className="text-2xl" aria-hidden="true" />
                    <h2 className="text-2xl font-black">{c.s109}</h2>
                  </div>
                  <div className="grid gap-4 md:grid-cols-2">
                    {platformFlow.map((step, index) => (
                      <div key={step.title} className="rounded-2xl border border-white/10 bg-[#08073d]/70 p-5">
                        <div className="mb-4 flex items-center justify-between gap-3">
                          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#DDEFEA] text-sm font-black text-[#002040]">
                            {index + 1}
                          </span>
                          <span className="rounded-full border border-[#DDEFEA]/30 bg-[#DDEFEA]/10 px-3 py-1 text-xs font-semibold text-[#F3FFFB]">
                            {step.label}
                          </span>
                        </div>
                        <h3 className="font-bold text-white">{step.title}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-gray-300">{step.text}</p>
                      </div>
                    ))}
                  </div>
                  <p className="mt-5 rounded-2xl border border-[#DDEFEA]/25 bg-[#DDEFEA]/10 p-4 font-mono text-sm text-[#F3FFFB]">{c.s110}</p>
                </section>

                <section className="rounded-3xl border border-white/15 bg-white/10 p-7 backdrop-blur-xl md:p-9">
                  <div className="mb-5 flex items-center gap-3 text-[#DDEFEA]">
                    <FaMobileAlt className="text-2xl" aria-hidden="true" />
                    <h2 className="text-2xl font-black">{c.s111}</h2>
                  </div>
                  <p className="mb-5 leading-relaxed text-gray-200">{c.s112}</p>
                  <div className="grid gap-4 md:grid-cols-3">
                    {roleWorkflows.map((flow) => (
                      <div key={flow.title} className="rounded-2xl border border-white/10 bg-[#08073d]/70 p-5">
                        <h3 className="mb-2 font-bold text-white">{flow.title}</h3>
                        <p className="text-sm leading-relaxed text-gray-300">{flow.text}</p>
                      </div>
                    ))}
                  </div>
                </section>

                <section className="rounded-3xl border border-white/15 bg-white/10 p-7 backdrop-blur-xl md:p-9">
                  <div className="mb-5 flex items-center gap-3 text-[#DDEFEA]">
                    <FaDatabase className="text-2xl" aria-hidden="true" />
                    <h2 className="text-2xl font-black">{c.s113}</h2>
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
                  <div className="mb-5 flex items-center gap-3 text-[#DDEFEA]">
                    <FaMobileAlt className="text-2xl" aria-hidden="true" />
                    <h2 className="text-2xl font-black">{c.s114}</h2>
                  </div>
                  <div className="grid gap-4 md:grid-cols-2">
                    {learningCards.map((item) => (
                      <div key={item.title} className="rounded-2xl border border-white/10 bg-[#08073d]/70 p-5">
                        <p className="mb-2 text-xs font-bold uppercase tracking-wide text-[#F3FFFB]">{item.area}</p>
                        <h3 className="mb-2 font-bold text-white">{item.title}</h3>
                        <p className="text-sm leading-relaxed text-gray-300">{item.text}</p>
                      </div>
                    ))}
                  </div>
                </section>
              </div>

              <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
                <div className="rounded-3xl border border-white/15 bg-white/10 p-6 backdrop-blur-xl">
                  <h2 className="mb-5 text-xl font-black">{c.s115}</h2>
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
                  <h2 className="mb-4 text-xl font-black">{c.s116}</h2>
                  <div className="space-y-3 text-sm">
                    <p className="flex items-center gap-2 text-gray-200"><SiFlutter className="text-[#DDEFEA]" />{" "}{c.s002}</p>
                    <p className="flex items-center gap-2 text-gray-200"><SiDart className="text-[#DDEFEA]" />{" "}{c.s074}</p>
                    <p className="flex items-center gap-2 text-gray-200"><SiFirebase className="text-[#DDEFEA]" />{" "}{c.s030}</p>
                    <p className="flex items-center gap-2 text-gray-200"><FaWifi className="text-[#DDEFEA]" />{" "}{c.s117}</p>
                  </div>
                </div>

                <div className="rounded-3xl border border-white/15 bg-white/10 p-6 backdrop-blur-xl">
                  <h2 className="mb-4 text-xl font-black">{c.s118}</h2>
                  <div className="flex flex-wrap gap-2">
                    {stack.map((item) => (
                      <span key={item} className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-sm text-gray-200">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <Link
                  to="/contact"
                  className="block rounded-2xl bg-[#DDEFEA] px-5 py-4 text-center font-bold text-[#002040] shadow-lg shadow-[#DDEFEA]/20 transition hover:-translate-y-1 hover:bg-[#F3FFFB]"
                >{c.s119}</Link>
              </aside>
            </div>

            <motion.section
              id="solarflow-demo"
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mt-14 rounded-3xl border border-white/15 bg-white/10 p-5 shadow-2xl shadow-black/20 backdrop-blur-xl md:p-7"
              aria-labelledby="solarflow-demo-title"
            >
              <div className="mb-8">
                <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#DDEFEA]/30 bg-[#DDEFEA]/10 px-4 py-2 text-sm font-semibold text-[#F3FFFB]">
                  <FaPlay aria-hidden="true" />{c.s120}</div>
                <h2 id="solarflow-demo-title" className="text-2xl font-black text-white md:text-3xl">{c.s121}</h2>
                <p className="mt-2 max-w-3xl text-sm leading-relaxed text-gray-300 md:text-base">{c.s122}</p>
              </div>

              <div className="grid gap-8 md:grid-cols-3">
                {demoVideos.map((video, index) => (
                  <motion.div
                    key={video.key}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: index * 0.1 }}
                    className="flex flex-col items-center rounded-2xl border border-white/10 bg-[#08073d]/70 p-5"
                  >
                    <h3 className="mb-4 text-center text-xl font-bold text-white">{video.title}</h3>
                    <div className="relative aspect-[9/16] w-full max-w-[300px] overflow-hidden rounded-2xl border border-white/10 bg-black shadow-lg shadow-black/30">
                      <video
                        ref={videoRefs[video.key]}
                        src={video.src}
                        poster={solarLogo}
                        preload="metadata"
                        className="h-full w-full object-cover"
                        onEnded={() => setPlayingVideo(null)}
                        onPause={() => playingVideo === video.key && setPlayingVideo(null)}
                        controls={playingVideo === video.key}
                        playsInline
                      />
                      {playingVideo !== video.key && (
                        <button
                          type="button"
                          aria-label={video.label}
                          onClick={() => handlePlay(video.key)}
                          className="absolute inset-0 flex items-center justify-center bg-black/40 transition-opacity duration-300 hover:bg-black/20 focus:outline-none focus:ring-2 focus:ring-[#DDEFEA]/70 focus:ring-inset"
                        >
                          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-[#DDEFEA] shadow-lg transition-transform duration-300 hover:scale-110">
                            <FaPlay className="ml-1 text-xl text-[#002040]" aria-hidden="true" />
                          </span>
                        </button>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            <div className="mt-14 rounded-3xl border border-white/15 bg-white/10 p-7 backdrop-blur-xl md:p-9">
              <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
                <div>
                  <h2 className="mb-2 text-2xl font-black">{c.s123}</h2>
                  <p className="text-gray-300">{c.s124}</p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <a href="#solarflow-demo" className="inline-flex items-center gap-2 rounded-full bg-[#DDEFEA] px-5 py-3 font-semibold text-[#002040] transition hover:bg-[#F3FFFB]">
                    <FaPlay aria-hidden="true" />{c.s125}</a>
                  <Link to="/portfolio" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 font-semibold text-white transition hover:border-[#DDEFEA]/60 hover:bg-[#DDEFEA]/10">{c.s092}</Link>
                  <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 font-semibold text-white transition hover:border-[#DDEFEA]/60 hover:bg-[#DDEFEA]/10">{c.s126}<FaArrowRight aria-hidden="true" />
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
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 transition-all group-hover:border-[#DDEFEA] group-hover:bg-[#DDEFEA] group-hover:text-[#002040]">
                  <FaArrowLeft />
                </div>
                <div>
                  <span className="block text-xs uppercase tracking-wider text-gray-500 group-hover:text-gray-300">{c.s127}</span>
                  <span className="text-lg font-semibold">{c.s128}</span>
                </div>
              </Link>

              <Link to="/portfolio" className="group flex items-center gap-3 text-right text-gray-400 transition-colors hover:text-white">
                <div>
                  <span className="block text-xs uppercase tracking-wider text-gray-500 group-hover:text-gray-300">{c.s129}</span>
                  <span className="text-lg font-semibold">{c.s130}</span>
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 transition-all group-hover:border-[#DDEFEA] group-hover:bg-[#DDEFEA] group-hover:text-[#002040]">
                  <FaArrowRight />
                </div>
              </Link>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default SolarFlowDetails;
