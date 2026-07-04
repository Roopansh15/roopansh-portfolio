import { motion } from "framer-motion";
import { journey } from "../data/portfolio.js";
import SectionHeader from "./SectionHeader.jsx";

export default function Journey() {
  return (
    <section id="journey" className="soft-divider bg-[linear-gradient(180deg,var(--bg),var(--bg-soft))] py-24">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Journey"
          title="From MERN fundamentals to AI agents and engineering automation."
          description="The path is intentionally focused: learn the stack, ship products, compete under pressure, then move into AI systems that make operational work smarter."
        />

        <div className="relative mt-16">
          <div className="absolute left-4 top-0 hidden h-full w-px bg-[var(--line)] md:block" aria-hidden="true" />
          <div className="space-y-5">
            {journey.map((step, index) => (
              <motion.article
                key={step.title}
                initial={{ opacity: 0, x: -18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.55, delay: index * 0.06 }}
                className="relative grid gap-4 rounded-lg border border-[var(--line)] bg-[var(--surface)] p-5 backdrop-blur-xl md:grid-cols-[140px_1fr]"
              >
                <div className="absolute -left-[1px] top-6 hidden h-3 w-3 rounded-full border border-[var(--cyan)] bg-[var(--bg)] shadow-[0_0_24px_rgba(92,225,230,0.45)] md:block" />
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--cyan)]">{step.date}</p>
                <div>
                  <h3 className="text-xl font-semibold text-[var(--text)]">{step.title}</h3>
                  <p className="mt-3 leading-7 text-[var(--muted)]">{step.description}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
