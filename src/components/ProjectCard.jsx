import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";

function ProjectLink({ href, label, children }) {
  const isPlaceholder = !href || href === "#";

  return (
    <a
      href={isPlaceholder ? undefined : href}
      target={isPlaceholder ? undefined : "_blank"}
      rel={isPlaceholder ? undefined : "noreferrer noopener"}
      aria-disabled={isPlaceholder}
      title={
        isPlaceholder ? "Add this project link in content.js" : `${label} link`
      }
      onClick={isPlaceholder ? (event) => event.preventDefault() : undefined}
      className={`inline-flex items-center gap-1.5 text-xs font-medium transition-colors ${
        isPlaceholder
          ? "cursor-not-allowed text-ink-muted/45"
          : "text-ink-muted hover:text-ink"
      }`}
    >
      {children}
      {label}
    </a>
  );
}

export default function ProjectCard({ project, index = 0 }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      initial={reduceMotion ? false : { opacity: 0, y: 20 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.55,
        delay: index * 0.07,
        ease: [0.22, 0.61, 0.36, 1],
      }}
      className="group card flex flex-col overflow-hidden transition duration-300 hover:-translate-y-1.5 hover:border-white/20 hover:shadow-2xl hover:shadow-blue-950/30"
    >
      <div className="relative aspect-[16/10] overflow-hidden border-b border-white/10 bg-night-800">
        <img
          src={project.image}
          alt={`${project.title} project cover`}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-night-950/60 via-transparent to-transparent opacity-70 transition duration-300 group-hover:opacity-100" />
        <span className="absolute left-4 top-4 rounded-full border border-white/10 bg-night-950/70 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-ink backdrop-blur">
          {project.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-lg font-semibold tracking-tight text-ink">
          {project.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-ink-muted">
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="badge">
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-auto flex items-center gap-5 border-t border-white/5 pt-5">
          <ProjectLink href={project.github} label="GitHub">
            <Github className="h-3.5 w-3.5" aria-hidden="true" />
          </ProjectLink>
          <ProjectLink href={project.demo} label="Live Demo">
            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
          </ProjectLink>
        </div>
      </div>
    </motion.article>
  );
}
