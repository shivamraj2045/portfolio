import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  Code2,
  Download,
  Mail,
  Sparkles,
} from "lucide-react";
import { profile } from "../data/content";
import SocialLinks from "./SocialLinks";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 0.61, 0.36, 1] },
  },
};

export default function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="home" className="relative overflow-hidden">
      <div className="section-shell relative grid items-center gap-12 pb-20 pt-14 sm:pt-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:pb-28 lg:pt-24">
        <motion.div
          variants={reduceMotion ? undefined : container}
          initial={reduceMotion ? undefined : "hidden"}
          animate={reduceMotion ? undefined : "show"}
        >
          <motion.h1
            variants={reduceMotion ? undefined : item}
            className="mt-6 font-display text-[2.6rem] font-semibold leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-6xl"
          >
            Hi, I&apos;m <span className="text-gradient">Shivam Raj</span>
          </motion.h1>

          <motion.p
            variants={reduceMotion ? undefined : item}
            className="mt-5 text-lg font-medium text-ink sm:text-xl"
          >
            {profile.title}
          </motion.p>

          <motion.p
            variants={reduceMotion ? undefined : item}
            className="mt-2 font-mono text-[11px] uppercase tracking-[0.18em] text-accent-purple sm:text-xs"
          >
            {profile.tagline}
          </motion.p>

          <motion.p
            variants={reduceMotion ? undefined : item}
            className="mt-6 max-w-xl text-sm leading-relaxed text-ink-muted sm:text-base"
          >
            {profile.description}
          </motion.p>

          <motion.div
            variants={reduceMotion ? undefined : item}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a href="#projects" className="btn-primary">
              View Projects
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a href={profile.resumeUrl} download className="btn-secondary">
              <Download className="h-4 w-4" aria-hidden="true" />
              Download Resume
            </a>
            <a href="#contact" className="btn-ghost">
              <Mail className="h-4 w-4" aria-hidden="true" />
              Contact Me
            </a>
          </motion.div>

          <motion.div
            variants={reduceMotion ? undefined : item}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-muted">
              Find me on
            </span>
            <span className="hidden h-px w-8 bg-white/10 sm:block" />
            <SocialLinks />
          </motion.div>
        </motion.div>

        <motion.div
          initial={reduceMotion ? undefined : { opacity: 0, scale: 0.96, y: 20 }}
          animate={reduceMotion ? undefined : { opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.15, ease: [0.22, 0.61, 0.36, 1] }}
          className="relative mx-auto w-full max-w-sm sm:max-w-md lg:max-w-none"
        >
          <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-tr from-blue-500/25 via-transparent to-violet-500/25 blur-3xl" />
          <div className="absolute -right-5 top-12 hidden h-24 w-24 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur sm:block" />
          <div className="absolute -left-6 bottom-16 hidden h-16 w-16 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur sm:block" />

          <div className="relative rounded-[2rem] border border-white/10 bg-white/[0.04] p-3 shadow-2xl shadow-black/40 backdrop-blur-xl">
            <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-night-800">
              <img
                src={profile.profileImage}
                alt={`Portrait of ${profile.name}`}
                width="1254"
                height="1254"
                loading="eager"
                decoding="async"
                className="aspect-square w-full object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-night-950/80 via-night-950/5 to-transparent" />
              <div className="absolute inset-x-4 bottom-4 flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-night-950/60 p-3 backdrop-blur-xl">
                <div>
                  <p className="font-display text-sm font-semibold text-ink">
                    {profile.name}
                  </p>
                  <p className="mt-0.5 font-mono text-[10px] uppercase tracking-[0.16em] text-ink-muted">
                    {profile.quickFacts[0]} · {profile.quickFacts[1]}
                  </p>
                </div>
                <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-blue-500/20 to-violet-500/20 text-accent-blue">
                  <Sparkles className="h-4 w-4" aria-hidden="true" />
                </span>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full border border-white/10 bg-night-900/90 px-4 py-2 text-[11px] text-ink-muted shadow-lg shadow-black/30 backdrop-blur-xl sm:left-4 sm:translate-x-0">
            <Code2 className="h-3.5 w-3.5 text-accent-blue" aria-hidden="true" />
            Building with curiosity
          </div>
        </motion.div>
      </div>
    </section>
  );
}
