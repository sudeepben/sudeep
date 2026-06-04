import gsap from "gsap";
import { useEffect, useRef, useState } from "react";

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);
  const [label, setLabel] = useState("");

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!finePointer || reduceMotion || !dotRef.current || !ringRef.current) return;

    document.documentElement.classList.add("has-custom-cursor");

    const moveDotX = gsap.quickTo(dotRef.current, "x", { duration: 0.18, ease: "power3.out" });
    const moveDotY = gsap.quickTo(dotRef.current, "y", { duration: 0.18, ease: "power3.out" });
    const moveRingX = gsap.quickTo(ringRef.current, "x", { duration: 0.55, ease: "power3.out" });
    const moveRingY = gsap.quickTo(ringRef.current, "y", { duration: 0.55, ease: "power3.out" });

    const move = (event: PointerEvent) => {
      moveDotX(event.clientX);
      moveDotY(event.clientY);
      moveRingX(event.clientX);
      moveRingY(event.clientY);
    };

    const over = (event: PointerEvent) => {
      const target = event.target as HTMLElement | null;
      const interactive = target?.closest<HTMLElement>("a, button, [data-cursor]");
      if (!interactive || !ringRef.current) return;
      const nextLabel = interactive.dataset.cursor ?? "";
      setLabel(nextLabel);
      gsap.to(ringRef.current, {
        scale: nextLabel ? 2.3 : 1.7,
        borderColor: "rgba(249, 115, 22, 0.65)",
        backgroundColor: nextLabel ? "rgba(249, 115, 22, 0.16)" : "rgba(249, 115, 22, 0.08)",
        duration: 0.35,
        ease: "power3.out",
      });
    };

    const out = (event: PointerEvent) => {
      const target = event.target as HTMLElement | null;
      const interactive = target?.closest<HTMLElement>("a, button, [data-cursor]");
      if (!interactive || !ringRef.current) return;
      setLabel("");
      gsap.to(ringRef.current, {
        scale: 1,
        borderColor: "rgba(255, 255, 255, 0.28)",
        backgroundColor: "rgba(255, 255, 255, 0)",
        duration: 0.35,
        ease: "power3.out",
      });
    };

    window.addEventListener("pointermove", move);
    document.addEventListener("pointerover", over);
    document.addEventListener("pointerout", out);

    return () => {
      document.documentElement.classList.remove("has-custom-cursor");
      window.removeEventListener("pointermove", move);
      document.removeEventListener("pointerover", over);
      document.removeEventListener("pointerout", out);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="custom-cursor-dot" />
      <div ref={ringRef} className="custom-cursor-ring">
        {label ? <span>{label}</span> : null}
      </div>
    </>
  );
}
