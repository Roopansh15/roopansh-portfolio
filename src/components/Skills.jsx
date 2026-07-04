import { motion } from "framer-motion";
import { skillGroups } from "../data/portfolio.js";
import SectionHeader from "./SectionHeader.jsx";

export default function Skills() {
  return (
    <section id="skills" className="soft-divider py-24">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Skills"
          title="A stack built for full-stack AI products."
          description="The skill set is organized around actual build surfaces: interfaces, APIs, databases, AI behavior, tooling, and the collaboration habits needed to ship."
          align="center"
        />

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, index) => {
            const Icon = group.icon;
            return (
              <motion.article
                key={group.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.55, delay: index * 0.05 }}
                whileHover={{ y: -5 }}
                className="glass-panel rounded-lg p-5"
              >
                <div className="mb-5 flex items-center gap-3">
                  <div className="grid h-11 w-11 place-items-center rounded-lg border border-[var(--line)] bg-white/5 text-[var(--cyan)]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-[var(--text)]">{group.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.35, delay: skillIndex * 0.035 }}
                      whileHover={{ y: -3, borderColor: "rgba(92,225,230,0.52)" }}
                      className="rounded-md border border-[var(--line)] bg-white/[0.04] px-3 py-2 text-sm font-medium text-[var(--muted)]"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
