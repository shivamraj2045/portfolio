import { Target } from "lucide-react";
import { about, profile } from "../data/content";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function About() {
  const initials = profile.name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2);

  return (
    <section id="about" className="relative py-20 sm:py-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow="01 — About"
          title="About Me"
          description="Academic background, software development interests, and the direction I'm working toward."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <Reveal className="card p-6 sm:p-8">
            <div className="space-y-4 text-sm leading-relaxed text-ink-muted sm:text-base">
              {about.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="mt-7 flex flex-wrap gap-2">
              {about.interests.map((interest) => (
                <span key={interest} className="badge">
                  {interest}
                </span>
              ))}
            </div>
          </Reveal>

          <div className="space-y-6">
            <Reveal className="card overflow-hidden p-6 sm:p-8" delay={0.08}>
              <div className="relative mb-7 flex items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-night-900/60 py-9">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(96,165,250,0.14),transparent_62%)]" />
                <div className="absolute h-32 w-32 rounded-full border border-white/10" />
                <div className="absolute h-24 w-24 rounded-full border border-accent-blue/25" />
                <div className="absolute h-12 w-12 translate-x-16 rounded-full bg-accent-purple/20 blur-xl" />
                <div className="relative grid h-16 w-16 place-items-center rounded-2xl border border-white/10 bg-gradient-to-br from-blue-500/25 to-violet-500/25 font-display text-xl font-semibold text-gradient">
                  {initials}
                </div>
              </div>

              <dl className="space-y-3">
                {about.highlights.map((highlight) => (
                  <div
                    key={highlight.label}
                    className="flex items-start justify-between gap-4 border-b border-white/5 pb-3 last:border-0 last:pb-0"
                  >
                    <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink-muted">
                      {highlight.label}
                    </dt>
                    <dd className="max-w-[62%] text-right text-xs font-medium text-ink sm:text-sm">
                      {highlight.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>

            <Reveal className="card p-6" delay={0.14}>
              <div className="flex items-center gap-2">
                <Target className="h-4 w-4 text-accent-purple" aria-hidden="true" />
                <p className="eyebrow">Career Goal</p>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                {about.goal}
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
