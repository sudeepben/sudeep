import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { SectionHeader } from "../components/ui/SectionHeader";
import { withBase } from "../lib/paths";

export function About() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.75fr_1.25fr]">
        <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.05] p-3">
          <img src={withBase("/assets/profile-hobby.jpeg")} alt="Benarjee Sudeep Sampath Pyla in a casual outdoor setting" className="aspect-[4/5] w-full rounded-[1.1rem] object-cover" />
        </div>
        <div>
          <SectionHeader
            label="Story"
            title="I like the moment when scattered information becomes a usable system."
            description="That is the through-line across my work: research models, RAG assistants, analytics pipelines, cloud platforms, and dashboards. I care about the system behind the answer as much as the answer itself."
          />
          <div className="space-y-5 text-base leading-8 text-white/66">
            <p>
              I am a Data Science graduate student at the University of Colorado Boulder and an AI/Data Engineer focused on RAG systems, data engineering, cloud-native applications, and decision-support products.
            </p>
            <p>
              My strongest work sits at the intersection of retrieval, modeling, automation, and explanation. I like building tools that make complex material easier to trust: legal PDFs for student renters, technical manuals for troubleshooting, noisy social data for research, and live business data for analytics workflows.
            </p>
            <p>
              The Builder's Console is the simplest way to describe my approach: input the messy source material, build a reliable processing path, and ship an output that helps people decide what to do next.
            </p>
          </div>
          <Link to="/projects" className="mt-8 inline-flex items-center gap-2 rounded-lg bg-ember-500 px-4 py-3 text-sm font-semibold text-ink hover:bg-ember-400">
            Explore builds <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
