import { Outlet } from "react-router-dom";
import { Navigation } from "./Navigation";
import { SpaceField } from "./SpaceField";
import { CustomCursor } from "../creative/CustomCursor";
import { SmoothScroll } from "../creative/SmoothScroll";

export function Layout() {
  return (
    <div className="relative isolate min-h-screen overflow-x-hidden bg-[rgb(var(--page-bg))] text-white selection:bg-ember-400/30">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-ember-500 focus:px-4 focus:py-3 focus:text-sm focus:font-semibold focus:text-ink"
      >
        Skip to content
      </a>
      <div className="fixed inset-0 -z-10 bg-[var(--page-glow)]" />
      <div className="fixed inset-0 -z-10 bg-soft-grid bg-[size:44px_44px] opacity-[var(--grid-opacity)]" />
      <div className="fixed inset-0 -z-10 opacity-[0.055] [background-image:linear-gradient(115deg,transparent_0%,rgba(255,255,255,0.5)_45%,transparent_55%)]" />
      <SpaceField />
      <SmoothScroll />
      <CustomCursor />
      <Navigation />
      <main id="main-content">
        <Outlet />
      </main>
    </div>
  );
}
