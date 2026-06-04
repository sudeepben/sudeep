import gsap from "gsap";
import { AnchorHTMLAttributes, ReactNode, useRef } from "react";

interface MagneticLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  strength?: number;
}

export function MagneticLink({ children, className = "", strength = 0.28, ...props }: MagneticLinkProps) {
  const ref = useRef<HTMLAnchorElement | null>(null);

  const handleMove = (event: React.PointerEvent<HTMLAnchorElement>) => {
    const element = ref.current;
    if (!element || window.matchMedia("(pointer: coarse)").matches) return;
    const rect = element.getBoundingClientRect();
    const x = (event.clientX - rect.left - rect.width / 2) * strength;
    const y = (event.clientY - rect.top - rect.height / 2) * strength;
    gsap.to(element, { x, y, duration: 0.45, ease: "power3.out" });
  };

  const handleLeave = () => {
    if (!ref.current) return;
    gsap.to(ref.current, { x: 0, y: 0, duration: 0.65, ease: "elastic.out(1, 0.35)" });
  };

  return (
    <a ref={ref} className={className} onPointerMove={handleMove} onPointerLeave={handleLeave} {...props}>
      {children}
    </a>
  );
}
