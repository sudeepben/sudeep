import { DatabaseZap, FileSearch, Gauge, ShieldCheck } from "lucide-react";
import { SectionHeader } from "../ui/SectionHeader";

const signals = [
  { icon: FileSearch, title: "Find the source of truth", text: "Legal PDFs, manuals, datasets, and workflow notes become structured context." },
  { icon: DatabaseZap, title: "Build the system path", text: "Retrieval, modeling, pipelines, and automation are shaped around the decision." },
  { icon: ShieldCheck, title: "Constrain the answer", text: "Citations, uncertainty, and evaluation keep the product from drifting into guesswork." },
  { icon: Gauge, title: "Ship the useful layer", text: "Dashboards, agents, apps, and summaries make the signal easy to act on." },
];

export function SignalSection() {
  return (
    <section id="story" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          label="The Short Version"
          title="I build things that think."
          description="I'm drawn to the space where data meets decision-making: machine learning, natural language processing, and data engineering systems that do not just process information, but make it usable."
        />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {signals.map((item) => (
            <article key={item.title} className="rounded-2xl border border-white/10 bg-white/[0.045] p-5">
              <item.icon className="mb-5 h-7 w-7 text-ember-300" />
              <h3 className="text-base font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-white/60">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
