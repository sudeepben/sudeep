import { useRef } from "react";
import { useReveal } from "../../hooks/useReveal";

export function InfoSection() {
  const ref = useRef<HTMLElement | null>(null);
  useReveal(ref, { selector: ".reveal-item" });

  return (
    <section ref={ref} id="info" className="creative-section px-5 py-28 sm:px-8 lg:px-10">
      <div className="mx-auto grid max-w-[92rem] gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <p className="reveal-item creative-kicker">Info</p>
        <div>
          <h2 className="reveal-item max-w-5xl text-4xl font-semibold leading-tight tracking-[-0.05em] text-white sm:text-6xl">
            I like the moment when scattered information becomes a usable system.
          </h2>
          <div className="mt-10 grid gap-6 text-sm leading-7 text-white/58 md:grid-cols-2">
            <p className="reveal-item">
              I am a Data Science graduate student at the University of Colorado Boulder and an AI/Data Engineer focused on RAG systems, analytics pipelines, cloud-native applications, and decision-support products.
            </p>
            <p className="reveal-item">
              My work sits at the intersection of retrieval, modeling, automation, and explanation: legal PDFs for student renters, technical manuals for troubleshooting, social data for research, and live business data for analytics workflows.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
