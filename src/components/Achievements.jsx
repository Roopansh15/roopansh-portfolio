import { motion } from "framer-motion";
import { CheckCircle2, ExternalLink, Github, Medal, Trophy } from "lucide-react";
import { achievementHighlights } from "../data/portfolio.js";
import SectionHeader from "./SectionHeader.jsx";

export default function Achievements() {
  return (
    <section id="achievements" className="soft-divider py-24">
      <div className="section-shell">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <SectionHeader
            eyebrow="Achievements"
            title="Two national finalist runs with serious AI systems behind them."
            description="The resume story is now specific: Roopansh reached finalist stage in national AI hackathons by building multi-agent triage infrastructure and an EPC intelligence platform for data centre delivery."
          />

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7 }}
            className="rounded-lg border border-[rgba(244,184,96,0.34)] bg-[linear-gradient(135deg,rgba(244,184,96,0.14),rgba(92,225,230,0.08),rgba(255,255,255,0.03))] p-6 shadow-glow"
          >
            <div className="flex items-start gap-4">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-lg border border-[rgba(244,184,96,0.38)] bg-[rgba(244,184,96,0.12)] text-[var(--amber)]">
                <Trophy className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--amber)]">Resume signal</p>
                <h3 className="mt-3 text-2xl font-semibold text-[var(--text)]">2x national hackathon finalist.</h3>
                <p className="mt-4 leading-7 text-[var(--muted)]">
                  Meta x PyTorch OpenEnv Hackathon and Economic Times AI Hackathon 2.0 now appear as named,
                  recruiter-readable achievements with the actual systems, stacks, and engineering decisions attached.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          {achievementHighlights.map((achievement, index) => (
            <motion.article
              key={achievement.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.28 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              whileHover={{ y: -6 }}
              className="group glass-panel relative flex min-h-[520px] flex-col overflow-hidden rounded-lg p-6"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--cyan)] to-transparent opacity-70" />
              <div className="flex items-start gap-5">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-lg border border-[rgba(92,225,230,0.34)] bg-[rgba(92,225,230,0.1)] text-[var(--cyan)] transition group-hover:border-[rgba(244,184,96,0.48)] group-hover:text-[var(--amber)]">
                  <Medal className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--cyan)]">
                    {achievement.track}
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold tracking-normal text-[var(--text)]">
                    {achievement.label}
                  </h3>
                  <p className="mt-2 text-lg font-semibold text-[var(--text)]">{achievement.title}</p>
                  <p className="mt-4 leading-7 text-[var(--muted)]">{achievement.detail}</p>
                </div>
              </div>

              <div className="mt-7 space-y-3">
                {achievement.bullets.map((bullet) => (
                  <div key={bullet} className="flex gap-3 text-sm leading-6 text-[var(--muted)]">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[var(--emerald)]" />
                    <p>{bullet}</p>
                  </div>
                ))}
              </div>

              {achievement.liveDemo || achievement.github ? (
                <div className="mt-7 grid gap-3 sm:grid-cols-2">
                  {achievement.liveDemo ? (
                    <a
                      href={achievement.liveDemo}
                      target="_blank"
                      rel="noreferrer"
                      data-cursor="true"
                      className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-[rgba(92,225,230,0.42)] bg-[rgba(92,225,230,0.1)] px-5 py-3 text-sm font-semibold text-[var(--text)] transition hover:border-[rgba(92,225,230,0.72)] hover:bg-[rgba(92,225,230,0.16)]"
                    >
                      <span>Open Hugging Face Demo</span>
                      <ExternalLink className="h-4 w-4" aria-hidden="true" />
                    </a>
                  ) : null}
                  {achievement.github ? (
                    <a
                      href={achievement.github}
                      target="_blank"
                      rel="noreferrer"
                      data-cursor="true"
                      className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-[var(--line)] bg-[var(--surface)] px-5 py-3 text-sm font-semibold text-[var(--text)] transition hover:border-[rgba(92,225,230,0.48)] hover:bg-[var(--surface-strong)]"
                    >
                      <span>View GitHub Repo</span>
                      <Github className="h-4 w-4" aria-hidden="true" />
                    </a>
                  ) : null}
                </div>
              ) : null}

              <div className="mt-auto flex flex-wrap gap-2 pt-7">
                {achievement.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-md border border-[var(--line)] bg-white/[0.04] px-2.5 py-1.5 text-xs font-medium text-[var(--muted)]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
