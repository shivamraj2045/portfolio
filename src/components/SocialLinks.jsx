import { Code2, Github, Linkedin } from "lucide-react";
import { socials } from "../data/content";

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  code: Code2,
};

export default function SocialLinks({ className = "" }) {
  return (
    <ul className={`flex items-center gap-3 ${className}`}>
      {socials.map((social) => {
        const IconComponent = iconMap[social.icon] ?? Code2;
        const isPlaceholder = social.placeholder || social.href === "#";

        return (
          <li key={social.label}>
            <a
              href={social.href}
              target={isPlaceholder ? undefined : "_blank"}
              rel={isPlaceholder ? undefined : "noreferrer noopener"}
              onClick={isPlaceholder ? (event) => event.preventDefault() : undefined}
              title={
                isPlaceholder
                  ? `Add your ${social.label} profile URL in content.js`
                  : social.label
              }
              aria-label={social.label}
              className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/[0.04] text-ink-muted transition duration-300 hover:-translate-y-0.5 hover:border-accent-blue/40 hover:bg-white/[0.07] hover:text-ink"
            >
              <IconComponent className="h-4 w-4" aria-hidden="true" />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
