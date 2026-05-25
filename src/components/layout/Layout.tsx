import { Outlet } from "react-router-dom";
import { Navigation } from "./Navigation";
import { Footer } from "./Footer";
import { SpaceField } from "./SpaceField";

export function Layout() {
  return (
    <div className="relative isolate min-h-screen bg-[rgb(var(--page-bg))] text-white selection:bg-ember-400/30">
      <div className="fixed inset-0 -z-10 bg-[var(--page-glow)]" />
      <div className="fixed inset-0 -z-10 bg-soft-grid bg-[size:44px_44px] opacity-[var(--grid-opacity)]" />
      <div className="fixed inset-0 -z-10 opacity-[0.055] [background-image:linear-gradient(115deg,transparent_0%,rgba(255,255,255,0.5)_45%,transparent_55%)]" />
      <SpaceField />
      <Navigation />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
