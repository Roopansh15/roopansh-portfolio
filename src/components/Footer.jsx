import { Github, Linkedin, Mail } from "lucide-react";
import { links } from "../data/portfolio.js";

export default function Footer() {
  return (
    <footer className="soft-divider py-8">
      <div className="section-shell flex flex-col gap-5 text-sm text-[var(--muted)] sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Roopansh Saxena. Built for serious AI and full-stack opportunities.</p>
        <div className="flex items-center gap-2">
          <a
            href={links.github}
            target="_blank"
            rel="noreferrer"
            className="grid h-10 w-10 place-items-center rounded-lg border border-[var(--line)] bg-[var(--surface)] transition hover:text-[var(--text)]"
            aria-label="GitHub"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href={links.linkedin}
            target="_blank"
            rel="noreferrer"
            className="grid h-10 w-10 place-items-center rounded-lg border border-[var(--line)] bg-[var(--surface)] transition hover:text-[var(--text)]"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href={links.email}
            className="grid h-10 w-10 place-items-center rounded-lg border border-[var(--line)] bg-[var(--surface)] transition hover:text-[var(--text)]"
            aria-label="Email"
          >
            <Mail className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
