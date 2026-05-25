import { featuredProjects } from "../../data/projects";
import { ProjectCard } from "../cards/ProjectCard";
import { SectionHeader } from "../ui/SectionHeader";
import { ButtonLink } from "../ui/Button";

export function FeaturedBuilds() {
  return (
    <section id="builds" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <SectionHeader
            label="Selected Work"
            title="Problems I've solved."
            description="Each project started with a question - and ended with something that works."
          />
          <ButtonLink to="/projects" variant="secondary" className="mb-9 w-fit">
            All Builds
          </ButtonLink>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
