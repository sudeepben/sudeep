import { experience } from "../../data/experience";
import { TimelineCard } from "../cards/TimelineCard";
import { SectionHeader } from "../ui/SectionHeader";

export function ExperienceSection() {
  return (
    <section id="experience" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <SectionHeader
          label="Experience"
          title="Where I've contributed."
          description="Real teams, real data, real impact."
        />
        <div className="space-y-4">
          {experience.map((item) => (
            <TimelineCard
              key={`${item.company}-${item.title}`}
              title={item.title}
              subtitle={item.company}
              meta={`${item.period} / ${item.location}`}
              logo={item.logo}
              alt={`${item.company} logo`}
              points={item.highlights}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
