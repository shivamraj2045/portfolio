import { ArrowUpRight, Plus } from "lucide-react";
import { codingProfiles } from "../data/content";
import Icon from "./Icon";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function CodingProfiles() {
  return (
    <section id="coding-profiles" className="relative py-20 sm:py-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow="07 — Coding Profiles"
          title="Coding Profiles"
          description="Places to find my code, problem-solving practice, and professional activity."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {codingProfiles.map((profile, index) => {
            const isPlaceholder = profile.placeholder || profile.href === "#";
            const Tag = isPlaceholder ? "div" : "a";

            return (
              <Reveal key={profile.platform} delay={index * 0.05}>
                <Tag
                  href={isPlaceholder ? undefined : profile.href}
                  target={isPlaceholder ? undefined : "_blank"}
                  rel={isPlaceholder ? undefined : "noreferrer noopener"}
                  aria-disabled={isPlaceholder}
                  title={
                    isPlaceholder
                      ? "Add this profile URL in content.js"
                      : profile.platform
                  }
                  className={`group flex h-full flex-col rounded-2xl border p-5 backdrop-blur-xl transition duration-300 ${
                    isPlaceholder
                      ? "border-dashed border-white/10 bg-transparent"
                      : "border-white/10 bg-white/[0.035] hover:-translate-y-1 hover:border-accent-blue/30 hover:bg-white/[0.055]"
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <span
                      className={`grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-gradient-to-br from-blue-500/15 to-violet-500/15 ${
                        isPlaceholder
                          ? "text-ink-muted"
                          : "text-accent-blue transition-colors duration-300 group-hover:text-accent-purple"
                      }`}
                    >
                      <Icon
                        name={profile.icon}
                        className="h-4 w-4"
                        aria-hidden="true"
                      />
                    </span>
                    {isPlaceholder ? (
                      <Plus className="h-4 w-4 text-ink-muted/50" aria-hidden="true" />
                    ) : (
                      <ArrowUpRight className="h-4 w-4 text-ink-muted transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink" aria-hidden="true" />
                    )}
                  </div>

                  <h3 className="mt-5 font-display text-base font-semibold text-ink">
                    {profile.platform}
                  </h3>
                  <p className="mt-1 font-mono text-[11px] text-accent-blue">
                    {profile.handle}
                  </p>
                  <p className="mt-3 text-xs leading-relaxed text-ink-muted">
                    {profile.description}
                  </p>
                </Tag>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
