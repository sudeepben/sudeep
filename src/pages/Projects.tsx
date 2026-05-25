import { projects } from "../data/projects";
import { ProjectCard } from "../components/cards/ProjectCard";
import { SectionHeader } from "../components/ui/SectionHeader";
import { ProjectOrbit } from "../components/sections/ProjectOrbit";

export function Projects() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          label="Selected Work"
          title="All builds."
          description="A recruiter-friendly index of AI systems, data engineering work, analytics, research, and cloud-native applications."
        />
        <ProjectOrbit />
        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
