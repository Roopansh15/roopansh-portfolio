import { AnimatePresence, motion } from "framer-motion";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";
import { links, navItems } from "../data/portfolio.js";
import MagneticButton from "./MagneticButton.jsx";

export default function Navbar({ theme, onToggleTheme }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition duration-300 ${
        scrolled ? "border-b border-[var(--line)] bg-[rgba(5,7,13,0.72)] shadow-inner-line backdrop-blur-xl" : ""
      }`}
    >
      <nav className="section-shell flex h-20 items-center justify-between">
        <a href="#home" className="group flex items-center gap-3" aria-label="Roopansh Saxena home">
          <span className="grid h-9 w-9 place-items-center rounded-lg border border-[var(--line)] bg-[var(--surface)] text-sm font-bold text-[var(--text)] shadow-inner-line">
            RS
          </span>
          <span className="hidden leading-tight sm:block">
            <span className="block text-sm font-semibold text-[var(--text)]">Roopansh Saxena</span>
            <span className="block text-xs text-[var(--muted)]">AI / Full-Stack Builder</span>
          </span>
        </a>

        <div className="hidden items-center gap-1 rounded-lg border border-[var(--line)] bg-[var(--surface)] p-1 backdrop-blur-xl lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-[var(--muted)] transition hover:bg-white/10 hover:text-[var(--text)]"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-2 lg:flex">
          <button
            type="button"
            onClick={onToggleTheme}
            className="grid h-11 w-11 place-items-center rounded-lg border border-[var(--line)] bg-[var(--surface)] text-[var(--text)] transition hover:border-[rgba(92,225,230,0.45)] hover:bg-white/10"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <MagneticButton href={links.resume} variant="ghost" target="_blank" rel="noreferrer">
            Resume
          </MagneticButton>
          <MagneticButton href="#contact" variant="primary">
            Contact
          </MagneticButton>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="grid h-11 w-11 place-items-center rounded-lg border border-[var(--line)] bg-[var(--surface)] text-[var(--text)] lg:hidden"
          aria-label="Toggle navigation"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="section-shell pb-5 lg:hidden"
          >
            <div className="glass-panel rounded-lg p-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-4 py-3 text-sm font-medium text-[var(--muted)] transition hover:bg-white/10 hover:text-[var(--text)]"
                >
                  {item.label}
                </a>
              ))}
              <div className="mt-2 grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={onToggleTheme}
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-[var(--line)] px-4 py-3 text-sm font-semibold text-[var(--text)]"
                >
                  {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                  Theme
                </button>
                <a
                  href={links.resume}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-lg bg-[var(--text)] px-4 py-3 text-sm font-semibold text-[var(--bg)]"
                >
                  Resume
                </a>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
