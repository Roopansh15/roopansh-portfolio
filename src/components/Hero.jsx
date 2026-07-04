import { motion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight, Download, Mail, Sparkles } from "lucide-react";
import { heroSignals, links } from "../data/portfolio.js";
import AnimatedBackground from "./AnimatedBackground.jsx";
import MagneticButton from "./MagneticButton.jsx";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: "easeOut" } }
};

export default function Hero() {
  return (
    <section id="home" className="relative isolate min-h-[92svh] overflow-hidden pb-14 pt-32 sm:pt-36">
      <img
        src="/assets/ai-systems-hero.png"
        alt=""
        className="absolute inset-0 -z-20 h-full w-full object-cover object-center opacity-72"
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,var(--bg)_0%,rgba(5,7,13,0.86)_34%,rgba(5,7,13,0.46)_66%,var(--bg)_100%)]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(5,7,13,0.14)_0%,var(--bg)_96%)]" />
      <div className="absolute inset-0 -z-10 bg-grid-pattern bg-[size:56px_56px] opacity-30" />
      <AnimatedBackground />

      <motion.div className="section-shell relative" variants={container} initial="hidden" animate="show">
        <motion.div variants={item} className="inline-flex items-center gap-2 rounded-lg border border-[var(--line)] bg-[var(--surface)] px-3 py-2 text-sm text-[var(--muted)] backdrop-blur-xl">
          <Sparkles className="h-4 w-4 text-[var(--amber)]" />
          <span>2x national AI hackathon finalist building MERN, agents, and workflow intelligence systems.</span>
        </motion.div>

        <motion.h1
          variants={item}
          className="mt-8 max-w-5xl font-display text-5xl font-semibold leading-[1.02] tracking-normal text-balance text-[var(--text)] sm:text-6xl lg:text-7xl"
        >
          Building <span className="gradient-text animate-shimmer">AI-powered systems</span> that solve real-world
          engineering problems.
        </motion.h1>

        <motion.p variants={item} className="mt-7 max-w-3xl text-lg leading-8 text-[var(--muted)] sm:text-xl">
          I am Roopansh Saxena, a Computer Science Engineering student with hands-on experience in MERN development,
          AI-powered applications, LLM agents, RAG-style retrieval, and intelligent automation systems.
        </motion.p>

        <motion.div variants={item} className="mt-9 flex flex-col gap-3 sm:flex-row">
          <MagneticButton href="#projects" variant="primary" icon={ArrowDownRight}>
            View Projects
          </MagneticButton>
          <MagneticButton href="#contact" variant="secondary" icon={Mail}>
            Contact Me
          </MagneticButton>
          <MagneticButton href={links.resume} variant="ghost" icon={Download} target="_blank" rel="noreferrer">
            Download Resume
          </MagneticButton>
        </motion.div>

        <motion.div
          variants={item}
          className="mt-16 grid gap-3 sm:grid-cols-3"
          aria-label="Portfolio highlights"
        >
          {heroSignals.map((signal) => (
            <motion.div
              key={signal.label}
              whileHover={{ y: -5 }}
              className="glass-panel rounded-lg p-5 transition duration-300 hover:border-[rgba(92,225,230,0.42)]"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm text-[var(--muted)]">{signal.label}</p>
                  <p className="mt-2 text-2xl font-semibold text-[var(--text)]">{signal.value}</p>
                </div>
                <ArrowUpRight className="h-5 w-5 text-[var(--cyan)]" />
              </div>
              <p className="mt-4 text-sm leading-6 text-[var(--muted)]">{signal.detail}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
