import { ArrowUpRight, Download, FileText } from "lucide-react";
import { links } from "../data/portfolio.js";
import MagneticButton from "./MagneticButton.jsx";

export default function Resume() {
  return (
    <section id="resume" className="soft-divider py-20">
      <div className="section-shell">
        <div className="grid gap-8 rounded-lg border border-[var(--line)] bg-[linear-gradient(135deg,rgba(92,225,230,0.1),rgba(255,255,255,0.035),rgba(74,222,128,0.08))] p-6 shadow-inner-line sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div className="flex gap-5">
            <div className="grid h-12 w-12 shrink-0 place-items-center rounded-lg border border-[var(--line)] bg-white/5 text-[var(--cyan)]">
              <FileText className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--cyan)]">Resume</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-normal text-[var(--text)]">Want the quick recruiter view?</h2>
              <p className="mt-4 max-w-3xl leading-7 text-[var(--muted)]">
                Download the latest resume with named national hackathon finalist achievements, AI projects, skills,
                education, and contact details aligned with this portfolio.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <MagneticButton href={links.resume} variant="primary" icon={Download} target="_blank" rel="noreferrer">
              Download Resume
            </MagneticButton>
            <MagneticButton href="#projects" variant="secondary" icon={ArrowUpRight}>
              Review Projects
            </MagneticButton>
          </div>
        </div>
      </div>
    </section>
  );
}
