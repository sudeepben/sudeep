import { education } from "../../data/education";
import { TimelineCard } from "../cards/TimelineCard";
import { SectionHeader } from "../ui/SectionHeader";

export function EducationSection() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <SectionHeader
          label="Education"
          title="Where I studied."
          description="From India to Colorado - two degrees, one direction."
        />
        <div className="grid gap-4 md:grid-cols-2">
          {education.map((item) => (
            <TimelineCard
              key={item.institution}
              title={item.degree}
              subtitle={item.institution}
              meta={`${item.period}${item.detail ? ` / ${item.detail}` : ""}`}
              logo={item.logo}
              alt={`${item.institution} logo`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
