import { GraduationCap, MapPin } from "lucide-react";
import { education } from "../data/content";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Education() {
  return (
    <section id="education" className="relative py-20 sm:py-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow="05 — Education"
          title="Education"
          description="My academic foundation in computer science and engineering."
        />

        <div className="relative mt-12">
          <div className="absolute bottom-0 left-5 top-0 w-px bg-gradient-to-b from-accent-purple/50 via-white/10 to-transparent md:left-6" />

          {education.map((entry, index) => (
            <Reveal
              key={entry.degree}
              className="relative pl-14 md:pl-20"
              delay={index * 0.05}
            >
              <div className="absolute left-0 top-0 grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-night-900 text-accent-purple shadow-lg shadow-black/20 md:h-12 md:w-12">
                <GraduationCap className="h-5 w-5" aria-hidden="true" />
              </div>

              <div className="card p-6 transition-colors duration-300 hover:border-white/20 sm:p-8">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display text-xl font-semibold text-ink sm:text-2xl">
                      {entry.degree}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-accent-purple">
                      {entry.institution}
                    </p>
                  </div>
                  <span className="badge">{entry.period}</span>
                </div>

                <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-ink-muted">
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin className="h-4 w-4 text-accent-purple" aria-hidden="true" />
                    {entry.location}
                  </span>
                  <span className="inline-flex items-center rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-300">
                    {entry.status}
                  </span>
                  {entry.cgpa ? <span>CGPA: {entry.cgpa}</span> : null}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
