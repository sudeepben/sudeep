import { Award, BrainCircuit, GraduationCap, MapPin } from "lucide-react";

const proofPoints = [
  { label: "Current", value: "MS Data Science, CU Boulder", detail: "GPA 3.92 / 4.00", icon: GraduationCap },
  { label: "Focus", value: "AI + Data Engineering", detail: "RAG, pipelines, cloud apps", icon: BrainCircuit },
  { label: "Signal", value: "2nd Place Hackathon", detail: "Ricoh / DaSSA agentic AI", icon: Award },
  { label: "Base", value: "Boulder, Colorado", detail: "Open to AI/Data roles", icon: MapPin },
];

export function ProofStrip() {
  return (
    <section className="px-4 pb-8 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-3 rounded-[1.25rem] border border-white/10 bg-white/[0.045] p-3 backdrop-blur md:grid-cols-4">
        {proofPoints.map((point) => (
          <article key={point.label} className="rounded-2xl border border-white/10 bg-black/10 p-4">
            <div className="mb-4 flex items-center justify-between">
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-ember-300">{point.label}</span>
              <point.icon className="h-4 w-4 text-ember-300" />
            </div>
            <p className="text-sm font-semibold text-white">{point.value}</p>
            <p className="mt-1 text-xs leading-5 text-white/52">{point.detail}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
