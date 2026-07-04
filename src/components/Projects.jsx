import { AnimatePresence, motion } from "framer-motion";
import { Github, PlayCircle, RadioTower } from "lucide-react";
import { useMemo, useState } from "react";
import { projectFilters, projects } from "../data/portfolio.js";
import MagneticButton from "./MagneticButton.jsx";
import SectionHeader from "./SectionHeader.jsx";

const accentClasses = {
  cyan: "from-[rgba(92,225,230,0.2)] to-transparent text-[var(--cyan)] border-[rgba(92,225,230,0.28)]",
  emerald: "from-[rgba(74,222,128,0.2)] to-transparent text-[var(--emerald)] border-[rgba(74,222,128,0.28)]",
  amber: "from-[rgba(244,184,96,0.2)] to-transparent text-[var(--amber)] border-[rgba(244,184,96,0.28)]"
};

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const filteredProjects = useMemo(
    () => projects.filter((project) => activeFilter === "All" || project.category === activeFilter),
    [activeFilter]
  );

  return (
    <section id="projects" className="soft-divider bg-[linear-gradient(180deg,var(--bg-soft),var(--bg))] py-24">
      <div className="section-shell">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeader
            eyebrow="Projects"
            title="Case-study style projects with product logic, not just screenshots."
            description="Each project is written like a technical product story: the problem, the system built around it, the stack, and the reason it matters."
          />

          <div className="flex flex-wrap gap-2">
            {projectFilters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`rounded-lg border px-4 py-2 text-sm font-semibold transition ${
                  activeFilter === filter
                    ? "border-[var(--cyan)] bg-[rgba(92,225,230,0.12)] text-[var(--text)]"
                    : "border-[var(--line)] bg-[var(--surface)] text-[var(--muted)] hover:text-[var(--text)]"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="mt-14 grid gap-5 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.article
                layout
                key={project.title}
                initial={{ opacity: 0, y: 24, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 12, scale: 0.98 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                whileHover={{ y: -7 }}
                className="group glass-panel flex min-h-[600px] flex-col overflow-hidden rounded-lg"
              >
                <div className={`border-b bg-gradient-to-br p-6 ${accentClasses[project.accent]}`}>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span className="rounded-md border border-current/30 bg-black/10 px-2.5 py-1 text-xs font-semibold uppercase tracking-[0.18em]">
                        {project.category}
                      </span>
                      <h3 className="mt-5 text-2xl font-semibold text-[var(--text)]">{project.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{project.subtitle}</p>
                    </div>
                    <div className="grid h-11 w-11 place-items-center rounded-lg border border-current/35 bg-white/5">
                      <RadioTower className="h-5 w-5" />
                    </div>
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <div className="space-y-5">
                    <ProjectBlock title="Problem" text={project.problem} />
                    <ProjectBlock title="Solution" text={project.solution} />
                    <ProjectBlock title="Impact" text={project.impact} />
                  </div>

                  <div className="mt-7 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md border border-[var(--line)] bg-white/[0.04] px-2.5 py-1.5 text-xs font-medium text-[var(--muted)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto grid gap-3 pt-7 sm:grid-cols-2">
                    <MagneticButton
                      href={project.demoVideo}
                      variant="primary"
                      icon={PlayCircle}
                      className="w-full"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Watch Demo
                    </MagneticButton>
                    <MagneticButton href={project.github} variant="secondary" icon={Github} className="w-full">
                      GitHub
                    </MagneticButton>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

function ProjectBlock({ title, text }) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--subtle)]">{title}</p>
      <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{text}</p>
    </div>
  );
}
