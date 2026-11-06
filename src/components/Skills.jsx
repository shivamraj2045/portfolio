import { skillGroups } from "../data/content";
import Icon from "./Icon";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import SkillIcon, { getSkillMeta } from "./SkillIcon";

export default function Skills() {
  return (
    <section id="skills" className="relative py-20 sm:py-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow="03 — Technical Skills"
          title="Technical Skills"
          description="Languages, frameworks, databases, tools, and core computer science fundamentals I work with."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, index) => (
            <Reveal
              key={group.title}
              className="card group p-6 transition duration-300 hover:-translate-y-1 hover:border-accent-blue/30 hover:bg-white/[0.055]"
              delay={index * 0.04}
            >
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-gradient-to-br from-blue-500/15 to-violet-500/15 text-accent-blue transition-colors duration-300 group-hover:text-accent-purple">
                  <Icon name={group.icon} className="h-4 w-4" aria-hidden="true" />
                </span>
                <h3 className="font-display text-base font-semibold text-ink">
                  {group.title}
                </h3>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {group.skills.map((skill) => {
                  const { color } = getSkillMeta(skill);

                  return (
                    <div
                      key={skill}
                      style={{ "--brand": color }}
                      className="group/skill relative flex items-center gap-2.5 overflow-hidden rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2.5 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--brand)] hover:shadow-[0_10px_30px_-12px_var(--brand)]"
                    >
                      <span className="pointer-events-none absolute inset-0 bg-[var(--brand)] opacity-0 transition-opacity duration-300 group-hover/skill:opacity-10" />

                      <span className="relative grid h-8 w-8 shrink-0 place-items-center rounded-lg border border-white/10 bg-white/[0.04] text-ink-muted transition-all duration-300 group-hover/skill:scale-110 group-hover/skill:border-[var(--brand)] group-hover/skill:text-[var(--brand)]">
                        <SkillIcon skill={skill} className="h-4 w-4" />
                      </span>

                      <span className="relative font-mono text-[11px] tracking-wide text-ink-muted transition-colors duration-300 group-hover/skill:text-ink">
                        {skill}
                      </span>
                    </div>
                  );
                })}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
