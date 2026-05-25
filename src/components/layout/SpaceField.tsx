import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
};

export function SpaceField() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let frame = 0;
    let width = 0;
    let height = 0;
    let particles: Particle[] = [];

    const resize = () => {
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * pixelRatio);
      canvas.height = Math.floor(height * pixelRatio);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);

      const count = Math.min(120, Math.max(54, Math.floor((width * height) / 18000)));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width - width / 2,
        y: Math.random() * height - height / 2,
        z: Math.random() * 0.85 + 0.15,
        vx: (Math.random() - 0.5) * 0.08,
        vy: (Math.random() - 0.5) * 0.08,
      }));
    };

    const draw = () => {
      const isLight = document.documentElement.classList.contains("light");
      context.clearRect(0, 0, width, height);

      const centerX = width / 2;
      const centerY = height / 2;
      const dotColor = isLight ? "15, 23, 42" : "255, 255, 255";
      const lineColor = isLight ? "249, 115, 22" : "249, 115, 22";

      particles.forEach((particle) => {
        particle.z += reduceMotion ? 0 : 0.0018;
        particle.x += reduceMotion ? 0 : particle.vx;
        particle.y += reduceMotion ? 0 : particle.vy;

        if (particle.z > 1 || Math.abs(particle.x) > width * 0.62 || Math.abs(particle.y) > height * 0.62) {
          particle.x = Math.random() * width - width / 2;
          particle.y = Math.random() * height - height / 2;
          particle.z = 0.15;
        }

        const perspective = 0.45 + particle.z * 1.7;
        const x = centerX + particle.x * perspective;
        const y = centerY + particle.y * perspective;
        const radius = 0.7 + particle.z * 1.8;
        context.beginPath();
        context.arc(x, y, radius, 0, Math.PI * 2);
        context.fillStyle = `rgba(${dotColor}, ${isLight ? 0.2 + particle.z * 0.2 : 0.16 + particle.z * 0.28})`;
        context.fill();
      });

      for (let index = 0; index < particles.length; index += 1) {
        const a = particles[index];
        for (let nextIndex = index + 1; nextIndex < particles.length; nextIndex += 1) {
          const b = particles[nextIndex];
          const ax = centerX + a.x * (0.45 + a.z * 1.7);
          const ay = centerY + a.y * (0.45 + a.z * 1.7);
          const bx = centerX + b.x * (0.45 + b.z * 1.7);
          const by = centerY + b.y * (0.45 + b.z * 1.7);
          const distance = Math.hypot(ax - bx, ay - by);
          if (distance < 120) {
            context.beginPath();
            context.moveTo(ax, ay);
            context.lineTo(bx, by);
            context.strokeStyle = `rgba(${lineColor}, ${(1 - distance / 120) * (isLight ? 0.08 : 0.11)})`;
            context.lineWidth = 1;
            context.stroke();
          }
        }
      }

      frame = window.requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
      window.cancelAnimationFrame(frame);
    };
  }, []);

  return <canvas ref={canvasRef} aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 opacity-80" />;
}
