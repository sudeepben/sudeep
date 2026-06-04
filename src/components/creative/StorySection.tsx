import { DatabaseZap, FileSearch, Gauge, ShieldCheck } from "lucide-react";
import { useRef } from "react";
import { useReveal } from "../../hooks/useReveal";

const signals = [
  { icon: FileSearch, title: "Find the source of truth", text: "Legal PDFs, manuals, datasets, and workflow notes become structured context." },
  { icon: DatabaseZap, title: "Build the system path", text: "Retrieval, modeling, pipelines, and automation are shaped around the decision." },
  { icon: ShieldCheck, title: "Constrain the answer", text: "Citations, uncertainty, and evaluation keep the product from drifting into guesswork." },
  { icon: Gauge, title: "Ship the useful layer", text: "Dashboards, agents, apps, and summaries make the signal easy to act on." },
];

export function StorySection() {
  const ref = useRef<HTMLElement | null>(null);
  useReveal(ref, { selector: ".reveal-item" });

  return (
    <section ref={ref} id="story" className="creative-section px-5 py-24 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-[92rem]">
        <div className="grid gap-10 border-y border-white/10 py-14 lg:grid-cols-[0.65fr_1.35fr]">
          <div className="reveal-item">
            <p className="creative-kicker">The Short Version</p>
            <h2 className="mt-5 max-w-md text-5xl font-semibold leading-none tracking-[-0.06em] text-white sm:text-7xl">
              I build things that think.
            </h2>
          </div>
          <div>
            <p className="reveal-item max-w-4xl text-2xl leading-10 tracking-[-0.03em] text-white/76 sm:text-4xl sm:leading-[1.12]">
              I&apos;m drawn to the space where data meets decision-making: machine learning, natural language processing, and data engineering systems that do not just process information, but make it usable.
            </p>
            <div className="mt-12 grid gap-4 md:grid-cols-2">
              {signals.map((item, index) => (
                <article key={item.title} className="reveal-item group border-t border-white/10 pt-5">
                  <div className="mb-5 flex items-center gap-3">
                    <span className="font-mono text-xs text-ember-300">{String(index + 1).padStart(2, "0")}</span>
                    <item.icon className="h-5 w-5 text-white/42 transition group-hover:text-ember-300" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/58">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
