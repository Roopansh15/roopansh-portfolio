import { motion } from "framer-motion";
import { principles } from "../data/portfolio.js";
import SectionHeader from "./SectionHeader.jsx";

export default function About() {
  return (
    <section id="about" className="soft-divider bg-[linear-gradient(180deg,var(--bg),var(--bg-soft))] py-24">
      <div className="section-shell">
        <SectionHeader
          eyebrow="About"
          title="A student by title, a builder by operating system."
          description="Roopansh works at the intersection of MERN product engineering, AI agents, LLM applications, and workflow automation. The goal is to build software that can reason through real operational problems, not just look impressive on a demo screen."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.7 }}
            className="space-y-6 text-base leading-8 text-[var(--muted)] sm:text-lg"
          >
            <p>
              I am a Computer Science Engineering student building the kind of projects that recruiters and technical
              founders can inspect seriously: a secure MERN AI assistant, an OpenEnv-compatible multi-agent email
              triage environment, and an offline-first EPC intelligence platform for data centre delivery.
            </p>
            <p>
              Becoming a finalist at the Meta x PyTorch OpenEnv Hackathon and the Economic Times AI Hackathon 2.0 shaped
              how I work. It taught me to move quickly without losing the technical story: define the problem, build the
              core loop, explain the impact, and keep the product understandable.
            </p>
            <p>
              My current positioning is simple: a young builder who can combine React, backend APIs, databases, LLMs,
              RAG-style retrieval, reward engineering, and system thinking to solve real-world automation problems.
            </p>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2">
            {principles.map((principle, index) => {
              const Icon = principle.icon;
              return (
                <motion.article
                  key={principle.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.55, delay: index * 0.06 }}
                  whileHover={{ y: -6 }}
                  className="glass-panel rounded-lg p-5"
                >
                  <div className="mb-5 grid h-11 w-11 place-items-center rounded-lg border border-[var(--line)] bg-white/5 text-[var(--cyan)]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-[var(--text)]">{principle.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{principle.detail}</p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
