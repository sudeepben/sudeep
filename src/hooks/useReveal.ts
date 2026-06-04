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

    const targets = options?.selector ? Array.from(element.querySelectorAll(options.selector)) : [element];
    if (!targets.length) return;

    const context = gsap.context(() => {
      gsap.fromTo(
        targets,
        { y: 38, opacity: 0, filter: "blur(8px)" },
        {
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 0.95,
          delay: options?.delay ?? 0,
          stagger: 0.07,
          ease: "expo.out",
          clearProps: "transform,opacity,filter",
          scrollTrigger: {
            trigger: element,
            start: "top 82%",
            once: true,
          },
        },
      );
    }, element);

    return () => context.revert();
  }, [ref, options?.selector, options?.delay]);
}
