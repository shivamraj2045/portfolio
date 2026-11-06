import { ArrowUp, Github, Linkedin } from "lucide-react";
import { profile, socials } from "../data/content";

const iconMap = {
  github: Github,
  linkedin: Linkedin,
};

export default function Footer() {
  const year = new Date().getFullYear();
  const initials = profile.name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2);
  const footerSocials = socials.filter((social) =>
    ["GitHub", "LinkedIn"].includes(social.label)
  );

  return (
    <footer className="border-t border-white/10">
      <div className="section-shell flex flex-col gap-6 py-8 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 bg-gradient-to-br from-blue-500/20 to-violet-500/20 font-display text-xs font-semibold text-gradient">
            {initials}
          </span>
          <div>
            <p className="font-display text-sm font-semibold text-ink">
              {profile.name}
            </p>
            <p className="mt-0.5 text-xs text-ink-muted">
              © {year} {profile.name}. All rights reserved.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {footerSocials.map((social) => {
            const IconComponent = iconMap[social.icon];
            const isPlaceholder = social.placeholder || social.href === "#";

            return (
              <a
                key={social.label}
                href={isPlaceholder ? undefined : social.href}
                target={isPlaceholder ? undefined : "_blank"}
                rel={isPlaceholder ? undefined : "noreferrer noopener"}
                onClick={
                  isPlaceholder ? (event) => event.preventDefault() : undefined
                }
                aria-disabled={isPlaceholder}
                aria-label={social.label}
                title={
                  isPlaceholder
                    ? `Add your ${social.label} profile URL in content.js`
                    : social.label
                }
                className={`grid h-9 w-9 place-items-center rounded-lg border text-ink-muted transition ${
                  isPlaceholder
                    ? "cursor-not-allowed border-dashed border-white/10 text-ink-muted/40"
                    : "border-white/10 bg-white/[0.03] hover:border-accent-blue/30 hover:text-ink"
                }`}
              >
                <IconComponent className="h-4 w-4" aria-hidden="true" />
              </a>
            );
          })}

          <a
            href="#home"
            className="ml-1 inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-xs text-ink-muted transition hover:border-accent-blue/30 hover:text-ink"
          >
            Back to top
            <ArrowUp className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
