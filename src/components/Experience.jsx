import { CheckCircle2, Users } from "lucide-react";
import { experience } from "../data/content";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  return (
    <section id="experience" className="relative py-20 sm:py-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow="02 — Experience & Leadership"
          title="Experience & Leadership"
          description="Technical leadership, event involvement, and collaboration beyond the classroom."
        />

        <div className="relative mt-12">
          <div className="absolute bottom-0 left-5 top-0 w-px bg-gradient-to-b from-accent-blue/50 via-white/10 to-transparent md:left-6" />

          {experience.map((entry, index) => (
            <Reveal
              key={`${entry.role}-${entry.organization}`}
              className="relative pl-14 md:pl-20"
              delay={index * 0.05}
            >
              <div className="absolute left-0 top-0 grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-night-900 text-accent-blue shadow-lg shadow-black/20 md:h-12 md:w-12">
                <Users className="h-5 w-5" aria-hidden="true" />
              </div>

              <div className="card overflow-hidden p-6 transition-colors duration-300 hover:border-white/20 sm:p-8">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display text-xl font-semibold text-ink sm:text-2xl">
                      {entry.role}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-accent-blue">
                      {entry.organization}
                    </p>
                  </div>
                  <span className="badge">{entry.period}</span>
                </div>

                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-ink-muted">
                  {entry.summary}
                </p>

                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {entry.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2.5 text-sm leading-relaxed text-ink-muted"
                    >
                      <CheckCircle2
                        className="mt-0.5 h-4 w-4 shrink-0 text-accent-blue"
                        aria-hidden="true"
                      />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
