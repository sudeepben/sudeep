import Lenis from "lenis";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function SmoothScroll() {
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 0.9,
    });

    const raf = (time: number) => {
      lenis.raf(time);
      ScrollTrigger.update();
      frame = requestAnimationFrame(raf);
    };

    let frame = requestAnimationFrame(raf);
    const scrollToHash = (immediate = false) => {
      const hash = window.location.hash;
      if (!hash || hash === "#") return;
      const element = document.querySelector(hash);
      if (!element) return;
      if (immediate) {
        const top = element.getBoundingClientRect().top + window.scrollY - 72;
        window.scrollTo({ top, behavior: "instant" });
        lenis.resize();
        return;
      }
      lenis.scrollTo(element as HTMLElement, { offset: -72, immediate });
    };

    const handleAnchorClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const anchor = target?.closest<HTMLAnchorElement>("a[href^='#']");
      if (!anchor) return;
      const href = anchor.getAttribute("href");
      if (!href || href === "#") return;
      const element = document.querySelector(href);
      if (!element) return;
      event.preventDefault();
      lenis.scrollTo(element as HTMLElement, { offset: -72 });
      window.history.pushState(null, "", href);
    };
    const handleHashChange = () => scrollToHash();

    const hashTimer = window.setTimeout(() => scrollToHash(true), 100);
    document.addEventListener("click", handleAnchorClick);
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      cancelAnimationFrame(frame);
      window.clearTimeout(hashTimer);
      document.removeEventListener("click", handleAnchorClick);
      window.removeEventListener("hashchange", handleHashChange);
      lenis.destroy();
    };
  }, []);

  return null;
}
