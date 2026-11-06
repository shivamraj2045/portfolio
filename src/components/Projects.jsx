import { projects } from "../data/content";
import ProjectCard from "./ProjectCard";
import SectionHeading from "./SectionHeading";

export default function Projects() {
  return (
    <section id="projects" className="relative py-20 sm:py-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow="04 — Featured Projects"
          title="Featured Projects"
          description="A selection of projects across space technology, AI/IoT, medical technology, and software development."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
