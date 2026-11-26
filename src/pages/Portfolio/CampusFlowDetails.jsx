import { motion } from "framer-motion";
import {
  FaArrowLeft,
  FaArrowRight,
  FaBolt,
  FaCamera,
  FaCubes,
  FaExclamationTriangle,
  FaExternalLinkAlt,
  FaFlask,
  FaGithub,
  FaPenFancy,
  FaPlay,
  FaRobot,
  FaSearch,
  FaShieldAlt,
  FaSitemap,
  FaUniversity,
  FaUsers,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import campusFlowCover from "../../assets/images/Portfolio/CampusFlow/campusflow-cover.webp";
import orchestratorImg from "../../assets/images/Portfolio/CampusFlow/n8n-orchestrator.webp";
import workflowsMapImg from "../../assets/images/Portfolio/CampusFlow/workflows-map-top.webp";
import qdrantImg from "../../assets/images/Portfolio/CampusFlow/qdrant-collections.webp";
import convocationImg from "../../assets/images/Portfolio/CampusFlow/test-photo-convocation.webp";
import injectionPhotoImg from "../../assets/images/Portfolio/CampusFlow/test-photo-injection.webp";
import injectionReplyImg from "../../assets/images/Portfolio/CampusFlow/frame-injection-ignored.webp";
import videoPoster from "../../assets/images/Portfolio/CampusFlow/video-poster.webp";
import campusFlowDemoVideo from "../../assets/videos/CampusFlow/campusflow-ai-demo.mp4";
import ExpandableImage from "../../components/ExpandableImage";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import en from "../../content/campusflow/caseStudy.en";
import fr from "../../content/campusflow/caseStudy.fr";
import { pickContent } from "../../i18n/localeContent";

const ACCENT = "#FE3E57";
const githubUrl = "https://github.com/Fedi-Hmida/CampusFlow_AI";

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

const Figure = ({ src, alt, caption, className = "" }) => (
  <figure className={className}>
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#08073d]/80">
      <ExpandableImage
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        className="h-auto w-full"
      />
    </div>
    {caption && (
      <figcaption className="mt-3 text-sm leading-relaxed text-gray-400">
        {caption}
      </figcaption>
    )}
  </figure>
);

const Bullets = ({ items }) => (
  <ul className="space-y-3">
    {items.map((item) => (
      <li key={item} className="flex items-start gap-3 text-base leading-relaxed text-gray-300">
        <span
          className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full"
          style={{ backgroundColor: ACCENT }}
          aria-hidden="true"
        />
        {item}
      </li>
    ))}
  </ul>
);

const CampusFlowDetails = () => {
  // Long-form copy lives in src/content/campusflow/caseStudy.{en,fr}.js.
  const c = pickContent({ en, fr });
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
                <Link to="/" className="transition hover:text-[#FE3E57]">
                  {c.breadcrumb.home}
                </Link>
                <span>/</span>
                <Link to="/portfolio" className="transition hover:text-[#FE3E57]">
                  {c.breadcrumb.portfolio}
                </Link>
                <span>/</span>
                <span className="text-[#FE3E57]">{c.breadcrumb.current}</span>
              </div>

              <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
                <div>
                  <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#FE3E57]/30 bg-[#FE3E57]/10 px-4 py-2 text-sm font-semibold text-[#FF8A9B]">
                    <FaRobot aria-hidden="true" />
                    {c.hero.badge}
                  </div>

                  <h1 className="mb-6 text-4xl font-black leading-tight md:text-6xl">
                    {c.hero.title}
                    <span className="block text-[#FE3E57]">
                      {c.hero.role}
                    </span>
                  </h1>

                  <p className="mb-8 max-w-3xl text-lg leading-relaxed text-gray-200 md:text-xl">
                    {c.hero.lead}
                  </p>

                  <div className="mb-8 flex flex-wrap gap-3">
                    {c.hero.chips.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-gray-200"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-4">
                    <a
                      href={githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-[#FE3E57] px-6 py-3 font-semibold text-white shadow-lg shadow-[#FE3E57]/25 transition hover:bg-[#FF5A70]"
                    >
                      <FaGithub aria-hidden="true" />
                      {c.hero.github}
                      <FaExternalLinkAlt className="text-xs" aria-hidden="true" />
                    </a>
                    <Link
                      to="/portfolio"
                      className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3 font-semibold text-white transition hover:border-[#FE3E57]/60 hover:bg-[#FE3E57]/10"
                    >
                      <FaArrowLeft aria-hidden="true" />
                      {c.hero.back}
                    </Link>
                  </div>
                </div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.7, delay: 0.1 }}
                  className="rounded-3xl border border-white/15 bg-white/10 p-4 shadow-2xl shadow-black/30 backdrop-blur-xl"
                >
                  <img
                    src={campusFlowCover}
                    alt={c.hero.coverAlt}
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
              {c.metrics.map((metric) => (
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
              aria-labelledby="campusflow-demo-title"
            >
              <div className="mb-5">
                <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#FE3E57]/30 bg-[#FE3E57]/10 px-4 py-2 text-sm font-semibold text-[#FF8A9B]">
                  <FaPlay aria-hidden="true" />
                  {c.video.badge}
                </div>
                <h2
                  id="campusflow-demo-title"
                  className="text-2xl font-black text-white md:text-3xl"
                >
                  {c.video.title}
                </h2>
                <p className="mt-2 max-w-3xl text-sm leading-relaxed text-gray-300 md:text-base">
                  {c.video.caption}
                </p>
              </div>

              <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#08073d]/80 shadow-2xl shadow-black/30">
                <video
                  className="aspect-video w-full bg-black object-contain"
                  controls
                  playsInline
                  preload="metadata"
                  poster={videoPoster}
                  aria-label={c.video.aria}
                >
                  <source src={campusFlowDemoVideo} type="video/mp4" />
                  {c.video.fallback}
                </video>
              </div>
            </motion.section>

            <Section
              id="context"
              icon={FaUniversity}
              title={c.context.title}
              intro={c.context.intro}
            >
              <p className="max-w-4xl text-base leading-relaxed text-gray-300">
                {c.context.body}
              </p>
            </Section>

            <Section
              id="role"
              icon={FaPenFancy}
              title={c.role.title}
              intro={c.role.intro}
            >
              <Bullets
                items={c.role.items}
              />
            </Section>

            <Section
              id="architecture"
              icon={FaSitemap}
              title={c.architecture.title}
              intro={c.architecture.intro}
            >
              <Figure
                src={orchestratorImg}
                alt={c.architecture.orchestrator.alt}
                caption={c.architecture.orchestrator.caption}
                className="mb-6"
              />

              <div className="space-y-3">
                {c.architecture.agents.map((agent) => (
                  <div
                    key={agent.name}
                    className="rounded-2xl border-l-4 border-white/10 bg-white/5 p-5"
                    style={{
                      borderLeftColor:
                        agent.kind === "ai" ? ACCENT : "rgba(255, 255, 255, 0.35)",
                    }}
                  >
                    <div className="mb-2 flex flex-wrap items-center gap-3">
                      <p className="font-mono text-base font-bold text-white">
                        {agent.name}
                      </p>
                      <span
                        className="rounded-full border px-3 py-1 text-[11px] font-bold uppercase tracking-wide"
                        style={
                          agent.kind === "ai"
                            ? {
                                color: "#FF8A9B",
                                borderColor: "rgba(254, 62, 87, 0.45)",
                                backgroundColor: "rgba(254, 62, 87, 0.12)",
                              }
                            : {
                                color: "#e5e7eb",
                                borderColor: "rgba(255, 255, 255, 0.25)",
                                backgroundColor: "rgba(255, 255, 255, 0.08)",
                              }
                        }
                      >
                        {agent.tag}
                      </span>
                      <span className="text-sm text-gray-400">{agent.engine}</span>
                    </div>
                    <p className="text-sm leading-relaxed text-gray-300">
                      {agent.detail}
                    </p>
                  </div>
                ))}
              </div>

              <Figure
                src={workflowsMapImg}
                alt={c.architecture.map.alt}
                caption={c.architecture.map.caption}
                className="mt-6"
              />
            </Section>

            <Section
              id="retrieval"
              icon={FaSearch}
              title={c.retrieval.title}
              intro={c.retrieval.intro}
            >
              <div className="grid gap-4 md:grid-cols-2">
                {c.retrieval.rows.map((row) => (
                  <div
                    key={row.label}
                    className="rounded-2xl border bg-white/5 p-5"
                    style={{
                      borderColor: row.best
                        ? "rgba(254, 62, 87, 0.45)"
                        : "rgba(255, 255, 255, 0.1)",
                    }}
                  >
                    <p className="mb-2 font-bold text-white">{row.label}</p>
                    <p
                      className="mb-2 text-3xl font-black"
                      style={{ color: row.best ? ACCENT : "#e5e7eb" }}
                    >
                      {row.value}
                    </p>
                    <p className="text-sm leading-relaxed text-gray-300">{row.note}</p>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-gray-400">
                {c.retrieval.note}
              </p>

              <div className="mt-6 grid items-start gap-6 lg:grid-cols-[1fr_1.1fr]">
                <p className="text-base leading-relaxed text-gray-300">
                  {c.retrieval.corpus}
                </p>
                <Figure
                  src={qdrantImg}
                  alt={c.retrieval.figure.alt}
                  caption={c.retrieval.figure.caption}
                />
              </div>
            </Section>

            <Section
              id="photos"
              icon={FaCamera}
              title={c.photos.title}
              intro={c.photos.intro}
            >
              <div className="grid items-start gap-6 md:grid-cols-[1fr_16rem]">
                <p className="text-base leading-relaxed text-gray-300">
                  {c.photos.body}
                </p>
                <Figure
                  src={convocationImg}
                  alt={c.photos.figure.alt}
                  caption={c.photos.figure.caption}
                  className="mx-auto w-full max-w-[16rem]"
                />
              </div>
            </Section>

            <Section
              id="safety"
              icon={FaShieldAlt}
              title={c.safety.title}
            >
              <div className="grid gap-4 md:grid-cols-2">
                {c.safety.items.map((p) => (
                  <div key={p.title} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <p className="mb-2 font-bold text-white">{p.title}</p>
                    <p className="text-sm leading-relaxed text-gray-300">{p.detail}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 grid items-start gap-6 md:grid-cols-[16rem_1fr]">
                <Figure
                  src={injectionPhotoImg}
                  alt={c.safety.photo.alt}
                  caption={c.safety.photo.caption}
                  className="mx-auto w-full max-w-[16rem]"
                />
                <Figure
                  src={injectionReplyImg}
                  alt={c.safety.reply.alt}
                  caption={c.safety.reply.caption}
                />
              </div>
            </Section>

            <Section
              id="hybrid"
              icon={FaBolt}
              title={c.hybrid.title}
              intro={c.hybrid.intro}
            >
              <p className="max-w-4xl text-base leading-relaxed text-gray-300">
                {c.hybrid.body}
              </p>
            </Section>

            <Section
              id="evaluation"
              icon={FaFlask}
              title={c.evaluation.title}
              intro={c.evaluation.intro}
            >
              <div className="space-y-3">
                {c.evaluation.rows.map((row) => (
                  <div
                    key={row.set}
                    className={`flex flex-wrap items-center justify-between gap-x-6 gap-y-2 rounded-2xl border p-5 ${
                      row.limit
                        ? "border-amber-300/30 bg-amber-300/10"
                        : "border-white/10 bg-white/5"
                    }`}
                  >
                    <div className="min-w-0">
                      <p className="font-bold text-white">
                        <span className="mr-2 font-mono text-gray-400">{row.set}</span>
                        {row.name}
                      </p>
                      <p className="text-sm text-gray-300">{row.note}</p>
                    </div>
                    <p
                      className={`text-2xl font-black ${row.limit ? "text-amber-300" : ""}`}
                      style={row.limit ? undefined : { color: ACCENT }}
                    >
                      {row.score}
                      {row.limit && (
                        <span className="ml-2 align-middle text-xs font-bold uppercase tracking-wide">
                          {c.evaluation.limitLabel}
                        </span>
                      )}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <Bullets items={c.evaluation.notes} />
              </div>
            </Section>

            <Section id="limits" icon={FaExclamationTriangle} title={c.limits.title}>
              <Bullets items={c.limits.items} />
            </Section>

            <Section id="team" icon={FaUsers} title={c.team.title}>
              <div className="grid gap-4 md:grid-cols-3">
                {c.team.members.map((person) => (
                  <div key={person.name} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <p className="mb-2 font-bold text-white">{person.name}</p>
                    <p className="text-sm leading-relaxed text-gray-300">{person.detail}</p>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-sm text-gray-400">
                {c.team.supervisor}
              </p>
            </Section>

            <Section id="learnings" icon={FaPenFancy} title={c.learnings.title}>
              <ul className="space-y-4">
                {c.learnings.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-2xl border border-white/10 bg-white/5 p-5 text-base leading-relaxed text-gray-300"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Section>

            <Section id="stack" icon={FaCubes} title={c.stack.title}>
              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {c.stack.groups.map((s) => (
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

            {/* Explore */}
            <div className="rounded-3xl border border-white/15 bg-white/10 p-7 backdrop-blur-xl md:p-9">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <h2 className="mb-2 text-2xl font-black">{c.explore.title}</h2>
                  <p className="text-gray-300">
                    {c.explore.body}
                  </p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-[#FE3E57] px-5 py-3 font-semibold text-white transition hover:bg-[#FF5A70]"
                  >
                    <FaGithub aria-hidden="true" />
                    {c.explore.github}
                    <FaExternalLinkAlt className="text-xs" aria-hidden="true" />
                  </a>
                  <Link
                    to="/news/22"
                    className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 font-semibold text-white transition hover:border-[#FE3E57]/60 hover:bg-[#FE3E57]/10"
                  >
                    {c.explore.news}
                    <FaArrowRight aria-hidden="true" />
                  </Link>
                  <Link
                    to="/portfolio"
                    className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 font-semibold text-white transition hover:border-[#FE3E57]/60 hover:bg-[#FE3E57]/10"
                  >
                    {c.explore.portfolio}
                  </Link>
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

export default CampusFlowDetails;
