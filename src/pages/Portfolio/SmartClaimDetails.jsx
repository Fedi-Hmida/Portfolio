import { motion } from "framer-motion";
import { useRef, useState } from "react";
import {
  FaArrowLeft,
  FaArrowRight,
  FaBrain,
  FaDatabase,
  FaEye,
  FaFileAlt,
  FaMobileAlt,
  FaPlay,
  FaProjectDiagram,
  FaPython,
  FaServer,
  FaShieldAlt,
} from "react-icons/fa";
import {
  SiDart,
  SiDocker,
  SiFastapi,
  SiFlutter,
  SiMongodb,
  SiOpencv,
  SiPytorch,
} from "react-icons/si";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

import smartClaimImg from "../../assets/images/Portfolio/New Logo SmartClaim.webp";
import dataVideo from "../../assets/videos/Smart_claim/Data Demo.mp4";
import demoVideo from "../../assets/videos/Smart_claim/Demo_Mobile.mp4";
import en from "../../content/smartClaim/caseStudy.en";
import fr from "../../content/smartClaim/caseStudy.fr";
import { pickContent } from "../../i18n/localeContent";

// Long-form copy lives in src/content/smartClaim/caseStudy.{en,fr}.js. The locale comes from the
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

const claimWorkflow = [
  {
    title: c.s025,
    label: c.s026,
    text: c.s027,
  },
  {
    title: c.s028,
    label: c.s029,
    text: c.s030,
  },
  {
    title: c.s031,
    label: c.s032,
    text: c.s033,
  },
  {
    title: c.s034,
    label: c.s035,
    text: c.s036,
  },
  {
    title: c.s037,
    label: c.s038,
    text: c.s039,
  },
  {
    title: c.s040,
    label: c.s041,
    text: c.s042,
  },
];

const featureGroups = [
  {
    icon: <FaMobileAlt />,
    title: c.s043,
    items: [c.s044, c.s045, c.s046],
  },
  {
    icon: <FaBrain />,
    title: c.s047,
    items: [c.s048, c.s049, c.s050],
  },
  {
    icon: <FaServer />,
    title: c.s051,
    items: [c.s052, c.s053, c.s054],
  },
  {
    icon: <FaFileAlt />,
    title: c.s055,
    items: [c.s056, c.s057, c.s058],
  },
];

const visionPipeline = [
  {
    title: c.s059,
    value: c.s032,
    text: c.s060,
  },
  {
    title: c.s061,
    value: c.s062,
    text: c.s063,
  },
  {
    title: c.s064,
    value: c.s002,
    text: c.s065,
  },
  {
    title: c.s066,
    value: c.s035,
    text: c.s067,
  },
];

const tradeoffCards = [
  {
    title: c.s068,
    text: c.s069,
  },
  {
    title: c.s070,
    text: c.s071,
  },
  {
    title: c.s072,
    text: c.s073,
  },
];

const learningCards = [
  {
    title: c.s074,
    area: c.s008,
    text: c.s075,
  },
  {
    title: c.s076,
    area: c.s077,
    text: c.s078,
  },
  {
    title: c.s051,
    area: c.s020,
    text: c.s079,
  },
  {
    title: c.s080,
    area: c.s081,
    text: c.s082,
  },
];

const stack = [
  c.s008,
  c.s083,
  c.s032,
  c.s084,
  c.s085,
  c.s029,
  c.s086,
  c.s038,
  c.s035,
];

const projectInfo = [
  [c.s087, c.s088],
  [c.s089, c.s090],
  [c.s091, c.s092],
  [c.s093, c.s094],
  [c.s095, c.s096],
];

const demoVideos = [
  {
    key: "demo",
    title: c.s097,
    subtitle: c.s098,
    label: c.s099,
    src: demoVideo,
  },
  {
    key: "data",
    title: c.s100,
    subtitle: c.s101,
    label: c.s102,
    src: dataVideo,
  },
];

const SmartClaimDetails = () => {
  const [playingVideo, setPlayingVideo] = useState(null);
  const demoVideoRef = useRef(null);
  const dataVideoRef = useRef(null);
  const videoRefs = {
    demo: demoVideoRef,
    data: dataVideoRef,
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
                <Link to="/" className="transition hover:text-[#6FB9CC]">{c.s103}</Link>
                <span>/</span>
                <Link to="/portfolio" className="transition hover:text-[#6FB9CC]">{c.s104}</Link>
                <span>/</span>
                <span className="text-[#6FB9CC]">{c.s090}</span>
              </div>

              <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
                <div>
                  <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#6FB9CC]/30 bg-[#6FB9CC]/10 px-4 py-2 text-sm font-semibold text-[#BDEFF7]">
                    <FaShieldAlt aria-hidden="true" />{c.s105}</div>
                  <h1 className="mb-6 text-4xl font-black leading-tight md:text-6xl">{c.s090}<span className="block text-[#6FB9CC]">{c.s106}</span>
                  </h1>
                  <p className="mb-7 max-w-3xl text-lg leading-relaxed text-gray-200 md:text-xl">{c.s107}</p>
                  <p className="mb-8 max-w-3xl text-base leading-8 text-gray-300">{c.s108}</p>

                  <div className="mb-8 flex flex-wrap gap-3">
                    {[c.s008, c.s032, c.s029, c.s086, c.s038, c.s109].map((item) => (
                      <span key={item} className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-gray-200">
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-4">
                    <a href="#smartclaim-demo" className="inline-flex items-center gap-2 rounded-full bg-[#6FB9CC] px-6 py-3 font-semibold text-[#061429] shadow-lg shadow-[#6FB9CC]/25 transition hover:bg-[#8DDCEB]">
                      <FaPlay aria-hidden="true" />{c.s110}</a>
                    <Link to="/portfolio" className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3 font-semibold text-white transition hover:border-[#6FB9CC]/60 hover:bg-[#6FB9CC]/10">
                      <FaArrowLeft aria-hidden="true" />{c.s111}</Link>
                  </div>
                </div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.7, delay: 0.1 }}
                  className="rounded-3xl border border-white/15 bg-white/10 p-10 shadow-2xl shadow-black/30 backdrop-blur-xl"
                >
                  <img
                    src={smartClaimImg}
                    alt={c.s112}
                    className="mx-auto w-full max-w-[400px] rounded-2xl object-contain drop-shadow-2xl"
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
                  <p className="mb-3 text-4xl font-black text-[#6FB9CC]">{metric.value}</p>
                  <p className="text-sm leading-relaxed text-gray-300">{metric.detail}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-14 grid gap-10 lg:grid-cols-[minmax(0,1fr)_360px]">
              <div className="space-y-10">
                <section className="rounded-3xl border border-white/15 bg-white/10 p-7 backdrop-blur-xl md:p-9">
                  <div className="mb-5 flex items-center gap-3 text-[#6FB9CC]">
                    <FaShieldAlt className="text-2xl" aria-hidden="true" />
                    <h2 className="text-2xl font-black">{c.s113}</h2>
                  </div>
                  <p className="leading-relaxed text-gray-200">{c.s114}</p>
                </section>

                <section className="grid gap-5 md:grid-cols-2">
                  <div className="rounded-3xl border border-white/15 bg-white/10 p-7 backdrop-blur-xl">
                    <h2 className="mb-4 text-2xl font-black text-white">{c.s115}</h2>
                    <p className="leading-relaxed text-gray-300">{c.s116}</p>
                  </div>
                  <div className="rounded-3xl border border-[#6FB9CC]/30 bg-[#6FB9CC]/10 p-7 backdrop-blur-xl">
                    <h2 className="mb-4 text-2xl font-black text-white">{c.s117}</h2>
                    <p className="leading-relaxed text-gray-100">{c.s118}</p>
                  </div>
                </section>

                <section className="rounded-3xl border border-white/15 bg-white/10 p-7 backdrop-blur-xl md:p-9">
                  <div className="mb-5 flex items-center gap-3 text-[#6FB9CC]">
                    <FaProjectDiagram className="text-2xl" aria-hidden="true" />
                    <h2 className="text-2xl font-black">{c.s087}</h2>
                  </div>
                  <p className="mb-5 leading-relaxed text-gray-200">{c.s119}</p>
                  <div className="grid gap-4 md:grid-cols-2">
                    {roleCards.map((role) => (
                      <div key={role.title} className="rounded-2xl border border-white/10 bg-[#08073d]/70 p-5 transition-colors hover:border-[#6FB9CC]/40">
                        <p className="mb-3 text-xs font-bold uppercase tracking-wide text-[#BDEFF7]">{role.area}</p>
                        <h3 className="mb-2 text-lg font-black text-white">{role.title}</h3>
                        <p className="text-sm leading-relaxed text-gray-300">{role.text}</p>
                      </div>
                    ))}
                  </div>
                </section>

                <section className="rounded-3xl border border-white/15 bg-white/10 p-7 backdrop-blur-xl md:p-9">
                  <div className="mb-5 flex items-center gap-3 text-[#6FB9CC]">
                    <FaEye className="text-2xl" aria-hidden="true" />
                    <h2 className="text-2xl font-black">{c.s120}</h2>
                  </div>
                  <div className="grid gap-4 md:grid-cols-2">
                    {featureGroups.map((feature) => (
                      <div key={feature.title} className="rounded-2xl border border-white/10 bg-[#08073d]/70 p-5 transition-colors hover:border-[#6FB9CC]/40">
                        <div className="mb-4 text-3xl text-[#6FB9CC]">{feature.icon}</div>
                        <h3 className="mb-2 font-bold text-white">{feature.title}</h3>
                        <div className="space-y-2">
                          {feature.items.map((item) => (
                            <p key={item} className="flex gap-2 text-sm leading-relaxed text-gray-300">
                              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#6FB9CC]" />
                              <span>{item}</span>
                            </p>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                <section className="rounded-3xl border border-white/15 bg-white/10 p-7 backdrop-blur-xl md:p-9">
                  <div className="mb-5 flex items-center gap-3 text-[#6FB9CC]">
                    <FaServer className="text-2xl" aria-hidden="true" />
                    <h2 className="text-2xl font-black">{c.s121}</h2>
                  </div>
                  <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                    {claimWorkflow.map((step, index) => (
                      <div key={step.title} className="relative rounded-2xl border border-white/10 bg-[#08073d]/70 p-5">
                        <div className="mb-4 flex items-center justify-between gap-3">
                          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#6FB9CC] text-sm font-black text-[#061429]">
                            {index + 1}
                          </span>
                          <span className="rounded-full border border-[#6FB9CC]/30 bg-[#6FB9CC]/10 px-3 py-1 text-xs font-semibold text-[#BDEFF7]">
                            {step.label}
                          </span>
                        </div>
                        <h3 className="font-bold text-white">{step.title}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-gray-300">{step.text}</p>
                      </div>
                    ))}
                  </div>
                  <p className="mt-5 rounded-2xl border border-[#6FB9CC]/25 bg-[#6FB9CC]/10 p-4 font-mono text-sm text-[#BDEFF7]">{c.s122}</p>
                </section>

                <section className="rounded-3xl border border-white/15 bg-white/10 p-7 backdrop-blur-xl md:p-9">
                  <div className="mb-5 flex items-center gap-3 text-[#6FB9CC]">
                    <FaBrain className="text-2xl" aria-hidden="true" />
                    <h2 className="text-2xl font-black">{c.s123}</h2>
                  </div>
                  <p className="mb-5 leading-relaxed text-gray-200">{c.s124}</p>
                  <div className="grid gap-4 md:grid-cols-2">
                    {visionPipeline.map((item) => (
                      <div key={item.title} className="rounded-2xl border border-white/10 bg-[#08073d]/70 p-5">
                        <p className="mb-2 text-sm font-bold uppercase tracking-wide text-gray-400">{item.title}</p>
                        <p className="mb-3 text-3xl font-black text-[#6FB9CC]">{item.value}</p>
                        <p className="text-sm leading-relaxed text-gray-300">{item.text}</p>
                      </div>
                    ))}
                  </div>
                </section>

                <section className="rounded-3xl border border-white/15 bg-white/10 p-7 backdrop-blur-xl md:p-9">
                  <div className="mb-5 flex items-center gap-3 text-[#6FB9CC]">
                    <FaDatabase className="text-2xl" aria-hidden="true" />
                    <h2 className="text-2xl font-black">{c.s125}</h2>
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
                  <div className="mb-5 flex items-center gap-3 text-[#6FB9CC]">
                    <FaMobileAlt className="text-2xl" aria-hidden="true" />
                    <h2 className="text-2xl font-black">{c.s126}</h2>
                  </div>
                  <div className="grid gap-4 md:grid-cols-2">
                    {learningCards.map((item) => (
                      <div key={item.title} className="rounded-2xl border border-white/10 bg-[#08073d]/70 p-5">
                        <p className="mb-2 text-xs font-bold uppercase tracking-wide text-[#BDEFF7]">{item.area}</p>
                        <h3 className="mb-2 font-bold text-white">{item.title}</h3>
                        <p className="text-sm leading-relaxed text-gray-300">{item.text}</p>
                      </div>
                    ))}
                  </div>
                </section>
              </div>

              <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
                <div className="rounded-3xl border border-white/15 bg-white/10 p-6 backdrop-blur-xl">
                  <h2 className="mb-5 text-xl font-black">{c.s127}</h2>
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
                  <h2 className="mb-4 text-xl font-black">{c.s128}</h2>
                  <div className="space-y-3 text-sm">
                    <p className="flex items-center gap-2 text-gray-200"><SiFlutter className="text-[#6FB9CC]" />{" "}{c.s008}</p>
                    <p className="flex items-center gap-2 text-gray-200"><SiDart className="text-[#6FB9CC]" />{" "}{c.s083}</p>
                    <p className="flex items-center gap-2 text-gray-200"><FaBrain className="text-[#6FB9CC]" />{" "}{c.s032}</p>
                    <p className="flex items-center gap-2 text-gray-200"><SiOpencv className="text-[#6FB9CC]" />{" "}{c.s084}</p>
                    <p className="flex items-center gap-2 text-gray-200"><SiPytorch className="text-[#6FB9CC]" />{" "}{c.s085}</p>
                    <p className="flex items-center gap-2 text-gray-200"><SiFastapi className="text-[#6FB9CC]" />{" "}{c.s029}</p>
                    <p className="flex items-center gap-2 text-gray-200"><SiDocker className="text-[#6FB9CC]" />{" "}{c.s086}</p>
                    <p className="flex items-center gap-2 text-gray-200"><SiMongodb className="text-[#6FB9CC]" />{" "}{c.s038}</p>
                    <p className="flex items-center gap-2 text-gray-200"><FaFileAlt className="text-[#6FB9CC]" />{" "}{c.s035}</p>
                    <p className="flex items-center gap-2 text-gray-200"><FaPython className="text-[#6FB9CC]" />{" "}{c.s129}</p>
                  </div>
                </div>

                <div className="rounded-3xl border border-white/15 bg-white/10 p-6 backdrop-blur-xl">
                  <h2 className="mb-4 text-xl font-black">{c.s130}</h2>
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
                  className="block rounded-2xl bg-[#6FB9CC] px-5 py-4 text-center font-bold text-[#061429] shadow-lg shadow-[#6FB9CC]/20 transition hover:-translate-y-1 hover:bg-[#8DDCEB]"
                >{c.s131}</Link>
              </aside>
            </div>

            <motion.section
              id="smartclaim-demo"
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mt-14 rounded-3xl border border-white/15 bg-white/10 p-5 shadow-2xl shadow-black/20 backdrop-blur-xl md:p-7"
              aria-labelledby="smartclaim-demo-title"
            >
              <div className="mb-8">
                <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#6FB9CC]/30 bg-[#6FB9CC]/10 px-4 py-2 text-sm font-semibold text-[#BDEFF7]">
                  <FaPlay aria-hidden="true" />{c.s132}</div>
                <h2 id="smartclaim-demo-title" className="text-2xl font-black text-white md:text-3xl">{c.s133}</h2>
                <p className="mt-2 max-w-3xl text-sm leading-relaxed text-gray-300 md:text-base">{c.s134}</p>
              </div>

              <div className="grid gap-8 md:grid-cols-2">
                {demoVideos.map((video, index) => (
                  <motion.div
                    key={video.key}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: index * 0.1 }}
                    className="flex flex-col rounded-2xl border border-white/10 bg-[#08073d]/70 p-5"
                  >
                    <h3 className="mb-2 text-xl font-bold text-white">{video.title}</h3>
                    <p className="mb-4 text-sm text-gray-400">{video.subtitle}</p>
                    <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-white/10 bg-black shadow-lg shadow-black/30">
                      <video
                        ref={videoRefs[video.key]}
                        src={video.src}
                        poster={smartClaimImg}
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
                          className="absolute inset-0 flex items-center justify-center bg-black/40 transition-opacity duration-300 hover:bg-black/20 focus:outline-none focus:ring-2 focus:ring-[#6FB9CC]/70 focus:ring-inset"
                        >
                          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-[#6FB9CC] shadow-lg transition-transform duration-300 hover:scale-110">
                            <FaPlay className="ml-1 text-xl text-[#061429]" aria-hidden="true" />
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
                  <h2 className="mb-2 text-2xl font-black">{c.s135}</h2>
                  <p className="text-gray-300">{c.s136}</p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <a href="#smartclaim-demo" className="inline-flex items-center gap-2 rounded-full bg-[#6FB9CC] px-5 py-3 font-semibold text-[#061429] transition hover:bg-[#8DDCEB]">
                    <FaPlay aria-hidden="true" />{c.s137}</a>
                  <Link to="/portfolio" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 font-semibold text-white transition hover:border-[#6FB9CC]/60 hover:bg-[#6FB9CC]/10">{c.s104}</Link>
                  <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 font-semibold text-white transition hover:border-[#6FB9CC]/60 hover:bg-[#6FB9CC]/10">{c.s138}<FaArrowRight aria-hidden="true" />
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
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 transition-all group-hover:border-[#6FB9CC] group-hover:bg-[#6FB9CC]">
                  <FaArrowLeft />
                </div>
                <div>
                  <span className="block text-xs uppercase tracking-wider text-gray-500 group-hover:text-gray-300">{c.s139}</span>
                  <span className="text-lg font-semibold">{c.s140}</span>
                </div>
              </Link>

              <Link to="/portfolio" className="group flex items-center gap-3 text-right text-gray-400 transition-colors hover:text-white">
                <div>
                  <span className="block text-xs uppercase tracking-wider text-gray-500 group-hover:text-gray-300">{c.s141}</span>
                  <span className="text-lg font-semibold">{c.s142}</span>
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 transition-all group-hover:border-[#6FB9CC] group-hover:bg-[#6FB9CC]">
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

export default SmartClaimDetails;
