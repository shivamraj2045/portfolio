import { achievements } from "../data/content";
import Icon from "./Icon";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Achievements() {
  return (
    <section id="achievements" className="relative py-20 sm:py-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow="06 — Achievements"
          title="Achievements"
          description="Leadership, hackathon participation, technical work, and ongoing certifications."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {achievements.map((achievement, index) => (
            <Reveal
              key={achievement.title}
              className={`card group p-6 transition duration-300 hover:-translate-y-1 hover:border-white/20 sm:p-7 ${
                achievement.placeholder
                  ? "border-dashed bg-transparent hover:bg-white/[0.02]"
                  : ""
              }`}
              delay={index * 0.05}
            >
              <div className="flex items-start justify-between gap-4">
                <span className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-gradient-to-br from-blue-500/15 to-violet-500/15 text-accent-blue transition-colors duration-300 group-hover:text-accent-purple">
                  <Icon
                    name={achievement.icon}
                    className="h-4 w-4"
                    aria-hidden="true"
                  />
                </span>
                <span className="badge">{achievement.tag}</span>
              </div>

              <h3 className="mt-5 font-display text-base font-semibold text-ink sm:text-lg">
                {achievement.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                {achievement.description}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
