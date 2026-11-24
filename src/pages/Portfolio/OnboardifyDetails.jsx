import { motion } from "framer-motion";
import { useRef, useState } from "react";
import {
  FaArrowLeft,
  FaArrowRight,
  FaBullhorn,
  FaFileAlt,
  FaHeartbeat,
  FaJava,
  FaLock,
  FaPlay,
  FaProjectDiagram,
  FaQuestionCircle,
  FaTasks,
  FaUsers,
} from "react-icons/fa";
import {
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiMysql,
  SiPhp,
  SiSymfony,
} from "react-icons/si";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import ParticlesBackground from "../../components/ParticlesBackground";

import onboardifyLogo from "../../assets/images/logo3.png";
import programVideo from "../../assets/videos/program.mp4";
import projectVideo from "../../assets/videos/Projet.mp4";
import quizVideo from "../../assets/videos/quiz.mp4";
import reportVideo from "../../assets/videos/report.mp4";
import resourceVideo from "../../assets/videos/ressource.mp4";
import en from "../../content/onboardify/caseStudy.en";
import fr from "../../content/onboardify/caseStudy.fr";
import { pickContent } from "../../i18n/localeContent";

// Long-form copy lives in src/content/onboardify/caseStudy.{en,fr}.js. The locale comes from the
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
];

const featureGroups = [
  {
    icon: <FaLock />,
    title: c.s037,
    items: [c.s038, c.s039, c.s040],
  },
  {
    icon: <FaFileAlt />,
    title: c.s041,
    items: [c.s042, c.s043, c.s044],
  },
  {
    icon: <FaQuestionCircle />,
    title: c.s045,
    items: [c.s046, c.s047, c.s048],
  },
  {
    icon: <FaHeartbeat />,
    title: c.s049,
    items: [c.s050, c.s051, c.s052],
  },
  {
    icon: <FaTasks />,
    title: c.s053,
    items: [c.s054, c.s055, c.s056],
  },
  {
    icon: <FaBullhorn />,
    title: c.s057,
    items: [c.s058, c.s059, c.s060],
  },
];

const onboardingJourney = [
  {
    title: c.s061,
    text: c.s062,
  },
  {
    title: c.s063,
    text: c.s064,
  },
  {
    title: c.s065,
    text: c.s066,
  },
  {
    title: c.s067,
    text: c.s068,
  },
  {
    title: c.s069,
    text: c.s070,
  },
];

const tradeoffCards = [
  {
    title: c.s071,
    text: c.s072,
  },
  {
    title: c.s073,
    text: c.s074,
  },
  {
    title: c.s075,
    text: c.s076,
  },
];

const learningCards = [
  {
    title: c.s077,
    area: c.s014,
    text: c.s078,
  },
  {
    title: c.s079,
    area: c.s080,
    text: c.s081,
  },
  {
    title: c.s082,
    area: c.s083,
    text: c.s084,
  },
  {
    title: c.s085,
    area: c.s086,
    text: c.s087,
  },
];

const stack = [
  c.s026,
  c.s029,
  c.s088,
  c.s089,
  c.s090,
  c.s091,
  c.s092,
];

const projectInfo = [
  [c.s093, c.s094],
  [c.s095, c.s096],
  [c.s097, c.s098],
  [c.s099, c.s100],
  [c.s007, c.s101],
];

const demoVideos = [
  {
    id: "resource",
    title: c.s102,
    desc: c.s103,
    video: resourceVideo,
    icon: FaFileAlt,
  },
  {
    id: "project",
    title: c.s104,
    desc: c.s105,
    video: projectVideo,
    icon: FaTasks,
  },
  {
    id: "quiz",
    title: c.s106,
    desc: c.s107,
    video: quizVideo,
    icon: FaQuestionCircle,
  },
  {
    id: "report",
    title: c.s108,
    desc: c.s109,
    video: reportVideo,
    icon: FaBullhorn,
  },
  {
    id: "program",
    title: c.s110,
    desc: c.s111,
    video: programVideo,
    icon: FaHeartbeat,
  },
];

const OnboardifyDetails = () => {
  const [playingVideo, setPlayingVideo] = useState(null);
  const videoRefs = useRef({});

  const handlePlay = (videoName) => {
    const selectedVideo = videoRefs.current[videoName];

    if (!selectedVideo) {
      return;
    }

    if (playingVideo === videoName) {
      selectedVideo.pause();
      setPlayingVideo(null);
      return;
    }

    if (playingVideo && videoRefs.current[playingVideo]) {
      videoRefs.current[playingVideo].pause();
    }

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
                <Link to="/" className="transition hover:text-[#5B73D6]">{c.s112}</Link>
                <span>/</span>
                <Link to="/portfolio" className="transition hover:text-[#5B73D6]">{c.s113}</Link>
                <span>/</span>
                <span className="text-[#5B73D6]">{c.s096}</span>
              </div>

              <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
                <div>
                  <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#5B73D6]/30 bg-[#5B73D6]/10 px-4 py-2 text-sm font-semibold text-[#CDD6FF]">
                    <FaUsers aria-hidden="true" />{c.s114}</div>
                  <h1 className="mb-6 text-4xl font-black leading-tight md:text-6xl">{c.s096}<span className="block text-[#5B73D6]">{c.s115}</span>
                  </h1>
                  <p className="mb-7 max-w-3xl text-lg leading-relaxed text-gray-200 md:text-xl">{c.s116}</p>
                  <p className="mb-8 max-w-3xl text-base leading-8 text-gray-300">{c.s117}</p>

                  <div className="mb-8 flex flex-wrap gap-3">
                    {[c.s026, c.s029, c.s088, c.s089, c.s005, c.s101].map((item) => (
                      <span key={item} className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-gray-200">
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-4">
                    <a href="#onboardify-demo" className="inline-flex items-center gap-2 rounded-full bg-[#5B73D6] px-6 py-3 font-semibold text-white shadow-lg shadow-[#5B73D6]/25 transition hover:bg-[#7087E6]">
                      <FaPlay aria-hidden="true" />{c.s118}</a>
                    <Link to="/portfolio" className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3 font-semibold text-white transition hover:border-[#5B73D6]/60 hover:bg-[#5B73D6]/10">
                      <FaArrowLeft aria-hidden="true" />{c.s119}</Link>
                  </div>
                </div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.7, delay: 0.1 }}
                  className="rounded-3xl border border-white/15 bg-white/10 p-10 shadow-2xl shadow-black/30 backdrop-blur-xl"
                >
                  <img
                    src={onboardifyLogo}
                    alt={c.s120}
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
                  <p className="mb-3 text-4xl font-black text-[#5B73D6]">{metric.value}</p>
                  <p className="text-sm leading-relaxed text-gray-300">{metric.detail}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-14 grid gap-10 lg:grid-cols-[minmax(0,1fr)_360px]">
              <div className="space-y-10">
                <section className="rounded-3xl border border-white/15 bg-white/10 p-7 backdrop-blur-xl md:p-9">
                  <div className="mb-5 flex items-center gap-3 text-[#5B73D6]">
                    <FaUsers className="text-2xl" aria-hidden="true" />
                    <h2 className="text-2xl font-black">{c.s121}</h2>
                  </div>
                  <p className="leading-relaxed text-gray-200">{c.s122}</p>
                </section>

                <section className="grid gap-5 md:grid-cols-2">
                  <div className="rounded-3xl border border-white/15 bg-white/10 p-7 backdrop-blur-xl">
                    <h2 className="mb-4 text-2xl font-black text-white">{c.s123}</h2>
                    <p className="leading-relaxed text-gray-300">{c.s124}</p>
                  </div>
                  <div className="rounded-3xl border border-[#5B73D6]/30 bg-[#5B73D6]/10 p-7 backdrop-blur-xl">
                    <h2 className="mb-4 text-2xl font-black text-white">{c.s125}</h2>
                    <p className="leading-relaxed text-gray-100">{c.s126}</p>
                  </div>
                </section>

                <section className="rounded-3xl border border-white/15 bg-white/10 p-7 backdrop-blur-xl md:p-9">
                  <div className="mb-5 flex items-center gap-3 text-[#5B73D6]">
                    <FaProjectDiagram className="text-2xl" aria-hidden="true" />
                    <h2 className="text-2xl font-black">{c.s093}</h2>
                  </div>
                  <p className="mb-5 leading-relaxed text-gray-200">{c.s127}</p>
                  <div className="grid gap-4 md:grid-cols-2">
                    {roleCards.map((role) => (
                      <div key={role.title} className="rounded-2xl border border-white/10 bg-[#08073d]/70 p-5 transition-colors hover:border-[#5B73D6]/40">
                        <p className="mb-3 text-xs font-bold uppercase tracking-wide text-[#CDD6FF]">{role.area}</p>
                        <h3 className="mb-2 text-lg font-black text-white">{role.title}</h3>
                        <p className="text-sm leading-relaxed text-gray-300">{role.text}</p>
                      </div>
                    ))}
                  </div>
                </section>

                <section className="rounded-3xl border border-white/15 bg-white/10 p-7 backdrop-blur-xl md:p-9">
                  <div className="mb-5 flex items-center gap-3 text-[#5B73D6]">
                    <FaTasks className="text-2xl" aria-hidden="true" />
                  <h2 className="text-2xl font-black">{c.s128}</h2>
                  </div>
                  <div className="grid gap-4 md:grid-cols-2">
                    {featureGroups.map((feature) => (
                      <div key={feature.title} className="rounded-2xl border border-white/10 bg-[#08073d]/70 p-5 transition-colors hover:border-[#5B73D6]/40">
                        <div className="mb-4 text-3xl text-[#5B73D6]">{feature.icon}</div>
                        <h3 className="mb-2 font-bold text-white">{feature.title}</h3>
                        <div className="space-y-2">
                          {feature.items.map((item) => (
                            <p key={item} className="flex gap-2 text-sm leading-relaxed text-gray-300">
                              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#5B73D6]" />
                              <span>{item}</span>
                            </p>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                <section className="rounded-3xl border border-white/15 bg-white/10 p-7 backdrop-blur-xl md:p-9">
                  <div className="mb-5 flex items-center gap-3 text-[#5B73D6]">
                    <FaJava className="text-2xl" aria-hidden="true" />
                    <h2 className="text-2xl font-black">{c.s129}</h2>
                  </div>
                  <div className="grid gap-4 md:grid-cols-2">
                    {platformFlow.map((step, index) => (
                      <div key={step.title} className="rounded-2xl border border-white/10 bg-[#08073d]/70 p-5">
                        <div className="mb-4 flex items-center justify-between gap-3">
                          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#5B73D6] text-sm font-black text-white">
                            {index + 1}
                          </span>
                          <span className="rounded-full border border-[#5B73D6]/30 bg-[#5B73D6]/10 px-3 py-1 text-xs font-semibold text-[#CDD6FF]">
                            {step.label}
                          </span>
                        </div>
                        <h3 className="font-bold text-white">{step.title}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-gray-300">{step.text}</p>
                      </div>
                    ))}
                  </div>
                  <p className="mt-5 rounded-2xl border border-[#5B73D6]/25 bg-[#5B73D6]/10 p-4 font-mono text-sm text-[#CDD6FF]">{c.s130}</p>
                </section>

                <section className="rounded-3xl border border-white/15 bg-white/10 p-7 backdrop-blur-xl md:p-9">
                  <div className="mb-5 flex items-center gap-3 text-[#5B73D6]">
                    <FaUsers className="text-2xl" aria-hidden="true" />
                    <h2 className="text-2xl font-black">{c.s131}</h2>
                  </div>
                  <p className="mb-5 leading-relaxed text-gray-200">{c.s132}</p>
                  <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
                    {onboardingJourney.map((step, index) => (
                      <div key={step.title} className="rounded-2xl border border-white/10 bg-[#08073d]/70 p-5">
                        <span className="mb-4 flex h-8 w-8 items-center justify-center rounded-full bg-[#5B73D6] text-sm font-black text-white">
                          {index + 1}
                        </span>
                        <h3 className="mb-2 font-bold text-white">{step.title}</h3>
                        <p className="text-sm leading-relaxed text-gray-300">{step.text}</p>
                      </div>
                    ))}
                  </div>
                </section>

                <section className="rounded-3xl border border-white/15 bg-white/10 p-7 backdrop-blur-xl md:p-9">
                  <div className="mb-5 flex items-center gap-3 text-[#5B73D6]">
                    <FaBullhorn className="text-2xl" aria-hidden="true" />
                    <h2 className="text-2xl font-black">{c.s133}</h2>
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
                  <div className="mb-5 flex items-center gap-3 text-[#5B73D6]">
                    <FaHeartbeat className="text-2xl" aria-hidden="true" />
                    <h2 className="text-2xl font-black">{c.s134}</h2>
                  </div>
                  <div className="grid gap-4 md:grid-cols-2">
                    {learningCards.map((item) => (
                      <div key={item.title} className="rounded-2xl border border-white/10 bg-[#08073d]/70 p-5">
                        <p className="mb-2 text-xs font-bold uppercase tracking-wide text-[#CDD6FF]">{item.area}</p>
                        <h3 className="mb-2 font-bold text-white">{item.title}</h3>
                        <p className="text-sm leading-relaxed text-gray-300">{item.text}</p>
                      </div>
                    ))}
                  </div>
                </section>
              </div>

              <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
                <div className="rounded-3xl border border-white/15 bg-white/10 p-6 backdrop-blur-xl">
                  <h2 className="mb-5 text-xl font-black">{c.s135}</h2>
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
                  <h2 className="mb-4 text-xl font-black">{c.s136}</h2>
                  <div className="space-y-3 text-sm">
                    <p className="flex items-center gap-2 text-gray-200"><FaJava className="text-[#5B73D6]" />{" "}{c.s026}</p>
                    <p className="flex items-center gap-2 text-gray-200"><SiSymfony className="text-[#5B73D6]" />{" "}{c.s029}</p>
                    <p className="flex items-center gap-2 text-gray-200"><SiPhp className="text-[#5B73D6]" />{" "}{c.s088}</p>
                    <p className="flex items-center gap-2 text-gray-200"><SiMysql className="text-[#5B73D6]" />{" "}{c.s089}</p>
                    <p className="flex items-center gap-2 text-gray-200"><SiHtml5 className="text-[#5B73D6]" />{" "}{c.s090}</p>
                    <p className="flex items-center gap-2 text-gray-200"><SiCss3 className="text-[#5B73D6]" />{" "}{c.s091}</p>
                    <p className="flex items-center gap-2 text-gray-200"><SiJavascript className="text-[#5B73D6]" />{" "}{c.s092}</p>
                  </div>
                </div>

                <div className="rounded-3xl border border-white/15 bg-white/10 p-6 backdrop-blur-xl">
                  <h2 className="mb-4 text-xl font-black">{c.s137}</h2>
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
                  className="block rounded-2xl bg-[#5B73D6] px-5 py-4 text-center font-bold text-white shadow-lg shadow-[#5B73D6]/20 transition hover:-translate-y-1 hover:bg-[#7087E6]"
                >{c.s138}</Link>
              </aside>
            </div>

            <motion.section
              id="onboardify-demo"
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mt-14 rounded-3xl border border-white/15 bg-white/10 p-5 shadow-2xl shadow-black/20 backdrop-blur-xl md:p-7"
              aria-labelledby="onboardify-demo-title"
            >
              <div className="mb-8">
                <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#5B73D6]/30 bg-[#5B73D6]/10 px-4 py-2 text-sm font-semibold text-[#CDD6FF]">
                  <FaPlay aria-hidden="true" />{c.s139}</div>
                <h2 id="onboardify-demo-title" className="text-2xl font-black text-white md:text-3xl">{c.s140}</h2>
                <p className="mt-2 max-w-3xl text-sm leading-relaxed text-gray-300 md:text-base">{c.s141}</p>
              </div>

              <div className="grid gap-8 md:grid-cols-2">
                {demoVideos.map((feature, index) => (
                  <motion.div
                    key={feature.id}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: index * 0.1 }}
                    className="flex flex-col rounded-2xl border border-white/10 bg-[#08073d]/70 p-5"
                  >
                    <div className="mb-4 flex items-center gap-3">
                      <feature.icon className="text-xl text-[#5B73D6]" />
                      <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                    </div>
                    <div className="relative mb-4 aspect-video w-full overflow-hidden rounded-2xl border border-white/10 bg-black shadow-lg shadow-black/30">
                      <video
                        ref={(el) => {
                          videoRefs.current[feature.id] = el;
                        }}
                        src={feature.video}
                        poster={onboardifyLogo}
                        preload="metadata"
                        className="h-full w-full object-cover"
                        onEnded={() => setPlayingVideo(null)}
                        onPause={() => playingVideo === feature.id && setPlayingVideo(null)}
                        controls={playingVideo === feature.id}
                        playsInline
                      />
                      {playingVideo !== feature.id && (
                        <button
                          type="button"
                          aria-label={`Play Onboardify ${feature.title} demo`}
                          onClick={() => handlePlay(feature.id)}
                          className="absolute inset-0 flex items-center justify-center bg-black/40 transition-opacity duration-300 hover:bg-black/20 focus:outline-none focus:ring-2 focus:ring-[#5B73D6]/70 focus:ring-inset"
                        >
                          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-[#5B73D6] shadow-lg transition-transform duration-300 hover:scale-110">
                            <FaPlay className="ml-1 text-xl text-white" aria-hidden="true" />
                          </span>
                        </button>
                      )}
                    </div>
                    <p className="text-sm leading-relaxed text-gray-400">{feature.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            <div className="mt-14 rounded-3xl border border-white/15 bg-white/10 p-7 backdrop-blur-xl md:p-9">
              <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
                <div>
                  <h2 className="mb-2 text-2xl font-black">{c.s142}</h2>
                  <p className="text-gray-300">{c.s143}</p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <a href="#onboardify-demo" className="inline-flex items-center gap-2 rounded-full bg-[#5B73D6] px-5 py-3 font-semibold text-white transition hover:bg-[#7087E6]">
                    <FaPlay aria-hidden="true" />{c.s144}</a>
                  <Link to="/portfolio" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 font-semibold text-white transition hover:border-[#5B73D6]/60 hover:bg-[#5B73D6]/10">{c.s113}</Link>
                  <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 font-semibold text-white transition hover:border-[#5B73D6]/60 hover:bg-[#5B73D6]/10">{c.s145}<FaArrowRight aria-hidden="true" />
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
              <Link to="/portfolio/solar-flow" className="group flex items-center gap-3 text-gray-400 transition-colors hover:text-white">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 transition-all group-hover:border-[#5B73D6] group-hover:bg-[#5B73D6]">
                  <FaArrowLeft />
                </div>
                <div>
                  <span className="block text-xs uppercase tracking-wider text-gray-500 group-hover:text-gray-300">{c.s146}</span>
                  <span className="text-lg font-semibold">{c.s147}</span>
                </div>
              </Link>

              <Link to="/portfolio" className="group flex items-center gap-3 text-right text-gray-400 transition-colors hover:text-white">
                <div>
                  <span className="block text-xs uppercase tracking-wider text-gray-500 group-hover:text-gray-300">{c.s148}</span>
                  <span className="text-lg font-semibold">{c.s149}</span>
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 transition-all group-hover:border-[#5B73D6] group-hover:bg-[#5B73D6]">
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

export default OnboardifyDetails;
