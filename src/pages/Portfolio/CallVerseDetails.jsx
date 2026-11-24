import { motion } from "framer-motion";
import {
  FaArrowLeft,
  FaArrowRight,
  FaCheckCircle,
  FaCubes,
  FaExclamationTriangle,
  FaExternalLinkAlt,
  FaFlask,
  FaGithub,
  FaLayerGroup,
  FaLightbulb,
  FaPenFancy,
  FaRobot,
  FaSearch,
  FaShieldAlt,
  FaSitemap,
  FaUniversity,
  FaUsers,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import callVerseCover from "../../assets/images/Portfolio/CallVerse/callverse-cover.jpg";
import supervisorImg from "../../assets/images/Portfolio/CallVerse/screen-supervisor.png";
import twinImg from "../../assets/images/Portfolio/CallVerse/screen-twin.png";
import advisorImg from "../../assets/images/Portfolio/CallVerse/screen-advisor.png";
import clientImg from "../../assets/images/Portfolio/CallVerse/screen-client.png";
import ExpandableImage from "../../components/ExpandableImage";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import ParticlesBackground from "../../components/ParticlesBackground";
import en from "../../content/callverse/caseStudy.en";
import fr from "../../content/callverse/caseStudy.fr";
import { pickContent } from "../../i18n/localeContent";

const ACCENT = "#C9A36A";
const githubUrl = "https://github.com/Fedi-Hmida/callverse-backend";

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

const tagStyle = (kind) =>
  kind === "ai"
    ? {
        color: "#E2C690",
        borderColor: "rgba(201, 163, 106, 0.45)",
        backgroundColor: "rgba(201, 163, 106, 0.12)",
      }
    : {
        color: "#e5e7eb",
        borderColor: "rgba(255, 255, 255, 0.25)",
        backgroundColor: "rgba(255, 255, 255, 0.08)",
      };

const CallVerseDetails = () => {
  // Long-form copy lives in src/content/callverse/caseStudy.{en,fr}.js.
  const c = pickContent({ en, fr });

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#070640] text-white">
      <ParticlesBackground />
      <Navbar />

      {/* Same top spacing as the sibling case studies. */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-28 md:px-12 lg:px-20" />

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
                <Link to="/" className="transition hover:text-[#C9A36A]">
                  {c.breadcrumb.home}
                </Link>
                <span>/</span>
                <Link to="/portfolio" className="transition hover:text-[#C9A36A]">
                  {c.breadcrumb.portfolio}
                </Link>
                <span>/</span>
                <span className="text-[#C9A36A]">{c.breadcrumb.current}</span>
              </div>

              <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
                <div>
                  <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#C9A36A]/30 bg-[#C9A36A]/10 px-4 py-2 text-sm font-semibold text-[#E2C690]">
                    <FaRobot aria-hidden="true" />
                    {c.hero.badge}
                  </div>

                  <h1 className="mb-6 text-4xl font-black leading-tight md:text-6xl">
                    {c.hero.title}
                    <span className="block text-[#C9A36A]">{c.hero.role}</span>
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
                      className="inline-flex items-center gap-2 rounded-full bg-[#C9A36A] px-6 py-3 font-semibold text-[#1A1206] shadow-lg shadow-[#C9A36A]/25 transition hover:bg-[#D6B47F]"
                    >
                      <FaGithub aria-hidden="true" />
                      {c.hero.github}
                      <FaExternalLinkAlt className="text-xs" aria-hidden="true" />
                    </a>
                    <Link
                      to="/portfolio"
                      className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3 font-semibold text-white transition hover:border-[#C9A36A]/60 hover:bg-[#C9A36A]/10"
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
                    src={callVerseCover}
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
                  <p className="text-sm leading-relaxed text-gray-300">{metric.detail}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Body */}
        <section className="px-6 pb-24 md:px-12 lg:px-20">
          <div className="mx-auto max-w-7xl space-y-6">
            <Section id="context" icon={FaUniversity} title={c.context.title} intro={c.context.intro}>
              <p className="max-w-4xl text-base leading-relaxed text-gray-300">{c.context.body}</p>
            </Section>

            <Section id="role" icon={FaPenFancy} title={c.role.title} intro={c.role.intro}>
              <Bullets items={c.role.items} />
            </Section>

            <Section
              id="architecture"
              icon={FaSitemap}
              title={c.architecture.title}
              intro={c.architecture.intro}
            >
              <div className="space-y-3">
                {c.architecture.layers.map((layer) => (
                  <div
                    key={layer.name}
                    className="rounded-2xl border-l-4 border-white/10 bg-white/5 p-5"
                    style={{
                      borderLeftColor: layer.kind === "ai" ? ACCENT : "rgba(255, 255, 255, 0.35)",
                    }}
                  >
                    <div className="mb-2 flex flex-wrap items-center gap-3">
                      <p className="font-mono text-base font-bold text-white">{layer.name}</p>
                      <span
                        className="rounded-full border px-3 py-1 text-[11px] font-bold uppercase tracking-wide"
                        style={tagStyle(layer.kind)}
                      >
                        {layer.tag}
                      </span>
                    </div>
                    <p className="text-sm leading-relaxed text-gray-300">{layer.detail}</p>
                  </div>
                ))}
              </div>
            </Section>

            <Section id="agents" icon={FaRobot} title={c.agents.title} intro={c.agents.intro}>
              <div className="grid gap-4 md:grid-cols-2">
                {c.agents.items.map((agent) => (
                  <div key={agent.name} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <p className="font-bold text-white">{agent.name}</p>
                    <p className="mb-2 text-sm font-semibold" style={{ color: ACCENT }}>
                      {c.agents.builtBy} {agent.builder}
                    </p>
                    <p className="text-sm leading-relaxed text-gray-300">{agent.detail}</p>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-gray-400">{c.agents.note}</p>
            </Section>

            <Section id="twin" icon={FaFlask} title={c.twin.title} intro={c.twin.intro}>
              <div className="grid gap-4 lg:grid-cols-2">
                {c.twin.loads.map((block) => (
                  <div
                    key={block.load}
                    className="overflow-x-auto rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-5"
                  >
                    <table className="w-full text-left text-xs sm:text-sm">
                      <caption className="mb-3 text-left text-base font-bold text-white">
                        {block.load}
                      </caption>
                      <thead>
                        <tr className="text-gray-400">
                          <th scope="col" className="pb-2 pr-2 font-semibold sm:pr-3">{c.twin.headers.strategy}</th>
                          <th scope="col" className="pb-2 pr-2 font-semibold sm:pr-3">{c.twin.headers.sla}</th>
                          <th scope="col" className="pb-2 pr-2 font-semibold sm:pr-3">{c.twin.headers.abandoned}</th>
                          <th scope="col" className="pb-2 font-semibold">{c.twin.headers.wait}</th>
                        </tr>
                      </thead>
                      <tbody>
                        {block.rows.map((row) => (
                          <tr key={row.strategy} className="border-t border-white/10 text-gray-300">
                            <td className="py-2 pr-2 font-semibold text-white sm:pr-3">{row.strategy}</td>
                            <td
                              className={`py-2 pr-2 sm:pr-3 ${row.ppo ? "font-black" : ""}`}
                              style={row.ppo ? { color: ACCENT } : undefined}
                            >
                              {row.sla}
                            </td>
                            <td className={`py-2 pr-2 sm:pr-3 ${row.ppo ? "font-bold text-amber-300" : ""}`}>
                              {row.abandon}
                            </td>
                            <td className="py-2">{row.wait}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-gray-400">{c.twin.note}</p>
              <p className="mt-4 max-w-4xl text-base leading-relaxed text-gray-300">{c.twin.offline}</p>
              <Figure src={twinImg} alt={c.twin.figure.alt} caption={c.twin.figure.caption} className="mt-6" />
            </Section>

            <Section id="knowledge" icon={FaSearch} title={c.knowledge.title} intro={c.knowledge.intro}>
              <p className="max-w-4xl text-base leading-relaxed text-gray-300">{c.knowledge.body}</p>
            </Section>

            <Section id="safety" icon={FaShieldAlt} title={c.safety.title}>
              <div className="grid gap-4 md:grid-cols-2">
                {c.safety.items.map((p) => (
                  <div key={p.title} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <p className="mb-2 font-bold text-white">{p.title}</p>
                    <p className="text-sm leading-relaxed text-gray-300">{p.detail}</p>
                  </div>
                ))}
              </div>
            </Section>

            <Section id="platform" icon={FaLayerGroup} title={c.platform.title} intro={c.platform.intro}>
              <div className="grid gap-6 lg:grid-cols-2">
                <Figure
                  src={supervisorImg}
                  alt={c.platform.figures.supervisor.alt}
                  caption={c.platform.figures.supervisor.caption}
                />
                <Figure
                  src={advisorImg}
                  alt={c.platform.figures.advisor.alt}
                  caption={c.platform.figures.advisor.caption}
                />
                <Figure
                  src={clientImg}
                  alt={c.platform.figures.client.alt}
                  caption={c.platform.figures.client.caption}
                  className="lg:col-span-2 lg:mx-auto lg:max-w-3xl"
                />
              </div>
              <p className="mt-3 text-sm text-gray-400">{c.platform.demoNote}</p>
              <div className="mt-6">
                <Bullets items={c.platform.items} />
              </div>
            </Section>

            <Section id="quality" icon={FaCheckCircle} title={c.quality.title}>
              <Bullets items={c.quality.items} />
            </Section>

            <Section id="limits" icon={FaExclamationTriangle} title={c.limits.title}>
              <Bullets items={c.limits.items} />
            </Section>

            <Section id="team" icon={FaUsers} title={c.team.title}>
              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {c.team.members.map((person) => (
                  <div key={person.name} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <p className="mb-2 font-bold text-white">{person.name}</p>
                    <p className="text-sm leading-relaxed text-gray-300">{person.detail}</p>
                  </div>
                ))}
              </div>
            </Section>

            <Section id="learnings" icon={FaLightbulb} title={c.learnings.title}>
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
                    <p className="mb-3 text-sm font-bold uppercase tracking-wide text-gray-400">{s.group}</p>
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
                  <p className="text-gray-300">{c.explore.body}</p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-[#C9A36A] px-5 py-3 font-semibold text-[#1A1206] transition hover:bg-[#D6B47F]"
                  >
                    <FaGithub aria-hidden="true" />
                    {c.explore.github}
                    <FaExternalLinkAlt className="text-xs" aria-hidden="true" />
                  </a>
                  <Link
                    to="/news/23"
                    className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 font-semibold text-white transition hover:border-[#C9A36A]/60 hover:bg-[#C9A36A]/10"
                  >
                    {c.explore.news}
                    <FaArrowRight aria-hidden="true" />
                  </Link>
                  <Link
                    to="/portfolio"
                    className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 font-semibold text-white transition hover:border-[#C9A36A]/60 hover:bg-[#C9A36A]/10"
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

export default CallVerseDetails;
