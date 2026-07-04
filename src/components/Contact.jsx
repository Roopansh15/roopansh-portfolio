import { Github, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";
import { links, profile } from "../data/portfolio.js";
import MagneticButton from "./MagneticButton.jsx";
import SectionHeader from "./SectionHeader.jsx";

const contactItems = [
  { label: "Email", value: profile.email, href: links.email, icon: Mail },
  { label: "Phone", value: profile.phone, href: links.phone, icon: Phone },
  { label: "LinkedIn", value: "linkedin.com/in/roopansh-saxena-79199427b", href: links.linkedin, icon: Linkedin },
  { label: "GitHub", value: "github.com/Roopansh15", href: links.github, icon: Github },
  { label: "Location", value: profile.location, href: "", icon: MapPin }
];

export default function Contact() {
  const [status, setStatus] = useState({ type: "idle", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    data.append("_subject", `Portfolio inquiry from ${data.get("name") || "visitor"}`);
    data.append("_template", "table");
    data.append("_captcha", "false");
    data.append("_replyto", data.get("email"));

    setIsSubmitting(true);
    setStatus({ type: "idle", message: "" });

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${profile.email}`, {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json"
        }
      });

      if (!response.ok) {
        throw new Error("Message service unavailable");
      }

      form.reset();
      setStatus({
        type: "success",
        message: "Message sent. I will receive it in my Gmail inbox."
      });
    } catch {
      setStatus({
        type: "error",
        message: "Message could not be sent right now. Please email me directly."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="soft-divider bg-[linear-gradient(180deg,var(--bg-soft),var(--bg))] py-24">
      <div className="section-shell">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeader
              eyebrow="Contact"
              title="Let's talk about AI products, full-stack builds, or serious automation problems."
              description="Open to internships, collaboration, hackathon teams, AI product work, and full-stack engineering opportunities."
            />

            <div className="mt-10 grid gap-3">
              {contactItems.map((item) => {
                const Icon = item.icon;
                const content = (
                  <>
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-[var(--line)] bg-white/5 text-[var(--cyan)]">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-sm text-[var(--muted)]">{item.label}</span>
                      <span className="block truncate font-semibold text-[var(--text)]">{item.value}</span>
                    </span>
                  </>
                );

                return (
                  <article
                    key={item.label}
                    className="group flex items-center justify-between gap-4 rounded-lg border border-[var(--line)] bg-[var(--surface)] p-4 transition hover:border-[rgba(92,225,230,0.45)] hover:bg-[var(--surface-strong)]"
                  >
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                        className="flex min-w-0 flex-1 items-center gap-4"
                        aria-label={item.label}
                      >
                        {content}
                      </a>
                    ) : (
                      <div className="flex min-w-0 flex-1 items-center gap-4">{content}</div>
                    )}
                    {item.href ? (
                      <Send className="h-4 w-4 shrink-0 text-[var(--muted)] transition group-hover:text-[var(--cyan)]" />
                    ) : null}
                  </article>
                );
              })}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="glass-panel rounded-lg p-5 sm:p-7">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-sm font-medium text-[var(--muted)]">Name</span>
                <input
                  name="name"
                  type="text"
                  required
                  placeholder="Your name"
                  className="w-full rounded-lg border border-[var(--line)] bg-white/[0.04] px-4 py-3 text-[var(--text)] outline-none transition placeholder:text-[var(--subtle)] focus:border-[var(--cyan)]"
                />
              </label>
              <label className="block">
                <span className="mb-2 block text-sm font-medium text-[var(--muted)]">Email</span>
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="w-full rounded-lg border border-[var(--line)] bg-white/[0.04] px-4 py-3 text-[var(--text)] outline-none transition placeholder:text-[var(--subtle)] focus:border-[var(--cyan)]"
                />
              </label>
            </div>

            <label className="mt-4 block">
              <span className="mb-2 block text-sm font-medium text-[var(--muted)]">Message</span>
              <textarea
                name="message"
                required
                rows="7"
                placeholder="Tell me about the role, project, or problem."
                className="w-full resize-none rounded-lg border border-[var(--line)] bg-white/[0.04] px-4 py-3 text-[var(--text)] outline-none transition placeholder:text-[var(--subtle)] focus:border-[var(--cyan)]"
              />
            </label>

            {status.message ? (
              <div
                className={`mt-4 rounded-lg border px-4 py-3 text-sm font-medium ${
                  status.type === "success"
                    ? "border-[rgba(74,222,128,0.36)] bg-[rgba(74,222,128,0.08)] text-[var(--emerald)]"
                    : "border-[rgba(251,113,133,0.36)] bg-[rgba(251,113,133,0.08)] text-[var(--rose)]"
                }`}
                role="status"
              >
                {status.message}
              </div>
            ) : null}

            <div className="mt-5 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-md text-sm leading-6 text-[var(--muted)]">
                Messages are delivered to my Gmail inbox, and I can reply directly from there.
              </p>
              <MagneticButton type="submit" variant="primary" icon={Send} disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
              </MagneticButton>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
