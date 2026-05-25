import { motion, useReducedMotion } from "framer-motion";
import { BrainCircuit, Braces, CloudCog, Database, FileSearch, Workflow } from "lucide-react";
import { SectionHeader } from "../ui/SectionHeader";

const nodes = [
  { label: "Legal PDFs", icon: FileSearch, x: "8%", y: "16%" },
  { label: "Manuals", icon: Braces, x: "73%", y: "12%" },
  { label: "Live Data", icon: Database, x: "12%", y: "68%" },
  { label: "RAG Core", icon: BrainCircuit, x: "43%", y: "38%" },
  { label: "Pipelines", icon: Workflow, x: "70%", y: "67%" },
  { label: "Cloud Apps", icon: CloudCog, x: "43%", y: "80%" },
];

export function BuilderLab() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          label="Builder's Console"
          title="A dynamic map of how I build."
          description="Instead of a static resume flow, this portfolio now shows the system I keep returning to: sources, retrieval, modeling, automation, and decision layers."
        />
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="relative min-h-[430px] overflow-hidden rounded-[1.75rem] border border-white/10 bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.16),transparent_34%),rgba(255,255,255,0.045)] p-5 shadow-2xl shadow-black/25 [perspective:1000px]">
            <motion.div
              className="absolute inset-8 rounded-[1.5rem] border border-ember-400/20 bg-black/10"
              animate={reduceMotion ? undefined : { rotateX: [56, 60, 56], rotateZ: [-8, -3, -8] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              style={{ transformStyle: "preserve-3d" }}
            />
            <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full border border-ember-300/40 bg-ember-500/15 blur-[1px]" />
            {nodes.map((node, index) => (
              <motion.div
                key={node.label}
                className="absolute grid w-28 place-items-center gap-2 rounded-2xl border border-white/12 bg-[rgba(13,17,23,0.78)] p-3 text-center shadow-xl backdrop-blur"
                style={{ left: node.x, top: node.y }}
                animate={reduceMotion ? undefined : { y: [0, index % 2 ? 10 : -10, 0] }}
                transition={{ duration: 4 + index * 0.35, repeat: Infinity, ease: "easeInOut" }}
              >
                <node.icon className="h-5 w-5 text-ember-300" />
                <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-white/72">{node.label}</span>
              </motion.div>
            ))}
            <svg className="absolute inset-0 h-full w-full opacity-50" aria-hidden="true">
              <line x1="22%" y1="25%" x2="50%" y2="47%" stroke="currentColor" className="text-ember-300/50" strokeDasharray="4 8" />
              <line x1="78%" y1="22%" x2="50%" y2="47%" stroke="currentColor" className="text-ember-300/50" strokeDasharray="4 8" />
              <line x1="24%" y1="76%" x2="50%" y2="47%" stroke="currentColor" className="text-ember-300/50" strokeDasharray="4 8" />
              <line x1="77%" y1="76%" x2="50%" y2="47%" stroke="currentColor" className="text-ember-300/50" strokeDasharray="4 8" />
            </svg>
          </div>
          <div className="space-y-4">
            {[
              ["Source first", "The system starts with documents, datasets, product workflows, and stakeholder questions."],
              ["Reliability path", "Retrieval, evaluation, citations, and automation are designed before the final interface."],
              ["Decision layer", "The output becomes a chatbot, dashboard, research finding, cloud app, or recommendation someone can use."],
            ].map(([title, text]) => (
              <article key={title} className="rounded-2xl border border-white/10 bg-white/[0.045] p-5">
                <h3 className="text-lg font-semibold text-white">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/62">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
