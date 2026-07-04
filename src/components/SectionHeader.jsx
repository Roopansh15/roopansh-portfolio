import { motion } from "framer-motion";

export default function SectionHeader({ eyebrow, title, description, align = "left" }) {
  const alignment = align === "center" ? "mx-auto text-center" : "";

  return (
    <motion.div
      className={`max-w-3xl ${alignment}`}
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.65, ease: "easeOut" }}
    >
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-[var(--cyan)]">{eyebrow}</p>
      <h2 className="font-display text-3xl font-semibold tracking-normal text-balance text-[var(--text)] sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description ? <p className="mt-5 text-base leading-8 text-[var(--muted)] sm:text-lg">{description}</p> : null}
    </motion.div>
  );
}
