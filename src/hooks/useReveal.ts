import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { RefObject, useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

export function useReveal<T extends HTMLElement>(ref: RefObject<T>, options?: { selector?: string; delay?: number }) {
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    const targets = options?.selector ? element.querySelectorAll(options.selector) : [element];
    const context = gsap.context(() => {
      gsap.fromTo(
        targets,
        { y: 54, opacity: 0, clipPath: "inset(0 0 100% 0)" },
        {
          y: 0,
          opacity: 1,
          clipPath: "inset(0 0 0% 0)",
          duration: 1.1,
          delay: options?.delay ?? 0,
          stagger: 0.08,
          ease: "expo.out",
          scrollTrigger: {
            trigger: element,
            start: "top 78%",
            once: true,
          },
        },
      );
    }, element);

    return () => context.revert();
  }, [ref, options?.selector, options?.delay]);
}
