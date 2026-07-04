import { motion } from "framer-motion";
import { GraduationCap, MapPin } from "lucide-react";
import { education } from "../data/portfolio.js";
import SectionHeader from "./SectionHeader.jsx";

export default function Education() {
  return (
    <section id="education" className="soft-divider py-24">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Education"
          title="Computer Science foundation with strong school academics."
          description="The portfolio now reflects the education details from the resume, keeping the academic story concise and recruiter-readable."
        />

        <div className="mt-14 grid gap-4 lg:grid-cols-3">
          {education.map((item, index) => (
            <motion.article
              key={`${item.institution}-${item.date}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.55, delay: index * 0.06 }}
              whileHover={{ y: -5 }}
              className="glass-panel rounded-lg p-5"
            >
              <div className="mb-5 flex items-start justify-between gap-4">
                <div className="grid h-11 w-11 place-items-center rounded-lg border border-[var(--line)] bg-white/5 text-[var(--cyan)]">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <span className="rounded-md border border-[var(--line)] bg-white/[0.04] px-2.5 py-1 text-xs font-semibold text-[var(--muted)]">
                  {item.date}
                </span>
              </div>

              <h3 className="text-xl font-semibold text-[var(--text)]">{item.institution}</h3>
              <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{item.credential}</p>
              <div className="mt-5 flex items-center gap-2 text-sm text-[var(--muted)]">
                <MapPin className="h-4 w-4 text-[var(--cyan)]" />
                <span>{item.location}</span>
              </div>
              <p className="mt-5 text-2xl font-semibold text-[var(--text)]">{item.score}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
