import { Link } from "react-router-dom";

export function NotFound() {
  return (
    <section className="grid min-h-[70vh] place-items-center px-4 text-center">
      <div>
        <p className="font-mono text-sm uppercase tracking-[0.22em] text-ember-200">404</p>
        <h1 className="mt-4 text-4xl font-semibold text-white">This build path does not exist.</h1>
        <p className="mt-4 text-white/60">The console could not find a matching route.</p>
        <Link to="/" className="mt-8 inline-flex rounded-lg bg-ember-500 px-4 py-3 text-sm font-semibold text-ink hover:bg-ember-400">
          Return home
        </Link>
      </div>
    </section>
  );
}
