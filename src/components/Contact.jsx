import { useState } from "react";
import { ArrowUpRight, CircleDot, Mail, MapPin, Send } from "lucide-react";
import { contact, socials } from "../data/content";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const inputStyles =
  "w-full rounded-xl border border-white/10 bg-night-900/70 px-4 py-3 text-sm text-ink placeholder:text-ink-muted/50 transition focus:border-accent-blue/50 focus:outline-none focus:ring-2 focus:ring-accent-blue/15";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((previous) => ({ ...previous, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const subject = encodeURIComponent(
      `Portfolio contact from ${form.name.trim() || "a visitor"}`
    );
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );

    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;
    setStatus("Opening your email app with the message ready to send.");
  };

  return (
    <section id="contact" className="relative py-20 sm:py-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow="08 — Contact"
          title="Let's Connect"
          description={contact.description}
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal className="card p-6 sm:p-8">
            <h3 className="font-display text-lg font-semibold text-ink">
              Contact details
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-muted">
              The quickest way to reach me is email.
            </p>

            <div className="mt-7 space-y-3">
              <a
                href={`mailto:${contact.email}`}
                className="group flex items-start gap-3 rounded-xl border border-white/5 bg-white/[0.02] p-3 transition hover:border-white/10 hover:bg-white/[0.04]"
              >
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-white/10 bg-gradient-to-br from-blue-500/15 to-violet-500/15 text-accent-blue">
                  <Mail className="h-4 w-4" aria-hidden="true" />
                </span>
                <span className="min-w-0">
                  <span className="block font-mono text-[10px] uppercase tracking-[0.16em] text-ink-muted">
                    Email
                  </span>
                  <span className="mt-0.5 block break-all text-sm text-ink transition-colors group-hover:text-accent-blue">
                    {contact.email}
                  </span>
                </span>
              </a>

              <div className="flex items-start gap-3 rounded-xl border border-white/5 bg-white/[0.02] p-3">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-white/10 bg-gradient-to-br from-blue-500/15 to-violet-500/15 text-accent-purple">
                  <MapPin className="h-4 w-4" aria-hidden="true" />
                </span>
                <span>
                  <span className="block font-mono text-[10px] uppercase tracking-[0.16em] text-ink-muted">
                    Location
                  </span>
                  <span className="mt-0.5 block text-sm text-ink">
                    {contact.location}
                  </span>
                </span>
              </div>

              <div className="flex items-start gap-3 rounded-xl border border-white/5 bg-white/[0.02] p-3">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-white/10 bg-gradient-to-br from-blue-500/15 to-violet-500/15 text-emerald-300">
                  <CircleDot className="h-4 w-4" aria-hidden="true" />
                </span>
                <span>
                  <span className="block font-mono text-[10px] uppercase tracking-[0.16em] text-ink-muted">
                    Availability
                  </span>
                  <span className="mt-0.5 block text-sm text-ink">
                    {contact.availability}
                  </span>
                </span>
              </div>
            </div>

            <div className="mt-7 border-t border-white/5 pt-6">
              <p className="eyebrow">Profiles</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {socials
                  .filter((social) =>
                    ["GitHub", "LinkedIn"].includes(social.label)
                  )
                  .map((social) => {
                    const isPlaceholder =
                      social.placeholder || social.href === "#";

                    return (
                      <a
                        key={social.label}
                        href={isPlaceholder ? undefined : social.href}
                        target={isPlaceholder ? undefined : "_blank"}
                        rel={isPlaceholder ? undefined : "noreferrer noopener"}
                        onClick={
                          isPlaceholder
                            ? (event) => event.preventDefault()
                            : undefined
                        }
                        aria-disabled={isPlaceholder}
                        title={
                          isPlaceholder
                            ? `Add your ${social.label} profile URL in content.js`
                            : social.label
                        }
                        className={`inline-flex items-center gap-1.5 rounded-lg border px-3 py-2 text-xs transition ${
                          isPlaceholder
                            ? "cursor-not-allowed border-dashed border-white/10 text-ink-muted/45"
                            : "border-white/10 bg-white/[0.04] text-ink-muted hover:border-accent-blue/30 hover:text-ink"
                        }`}
                      >
                        {social.label}
                        <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                      </a>
                    );
                  })}
              </div>
            </div>
          </Reveal>

          <Reveal className="card p-6 sm:p-8" delay={0.08}>
            <form onSubmit={handleSubmit} className="flex h-full flex-col">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block font-mono text-[10px] uppercase tracking-[0.16em] text-ink-muted"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    autoComplete="name"
                    className={inputStyles}
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block font-mono text-[10px] uppercase tracking-[0.16em] text-ink-muted"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    autoComplete="email"
                    className={inputStyles}
                  />
                </div>
              </div>

              <div className="mt-4 flex-1">
                <label
                  htmlFor="message"
                  className="mb-2 block font-mono text-[10px] uppercase tracking-[0.16em] text-ink-muted"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about the opportunity, project, or idea..."
                  className={`${inputStyles} min-h-[150px] resize-y`}
                />
              </div>

              <div className="mt-5 flex flex-wrap items-center gap-3">
                <button type="submit" className="btn-primary">
                  <Send className="h-4 w-4" aria-hidden="true" />
                  Send Message
                </button>
                <p className="text-xs text-ink-muted">
                  Opens your default email app.
                </p>
              </div>

              <p className="mt-3 min-h-[1.25rem] text-xs text-emerald-300" role="status" aria-live="polite">
                {status}
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
