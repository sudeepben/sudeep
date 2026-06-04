import { useEffect, useRef } from "react";

type Particle = {
  baseX: number;
  baseY: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  phase: number;
};

export function SpaceField() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    if (!canvas || !context) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const pointer = { x: -9999, y: -9999, active: false };
    let width = 0;
    let height = 0;
    let frame = 0;
    let tick = 0;
    let particles: Particle[] = [];

    const resize = () => {
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * ratio);
      canvas.height = Math.floor(height * ratio);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);

      const columns = Math.max(10, Math.floor(width / 110));
      const rows = Math.max(8, Math.floor(height / 96));
      particles = [];

      for (let y = 0; y <= rows; y += 1) {
        for (let x = 0; x <= columns; x += 1) {
          const baseX = (x / columns) * width + (Math.random() - 0.5) * 34;
          const baseY = (y / rows) * height + (Math.random() - 0.5) * 34;
          particles.push({
            baseX,
            baseY,
            x: baseX,
            y: baseY,
            vx: 0,
            vy: 0,
            size: Math.random() * 1.8 + 0.8,
            phase: Math.random() * Math.PI * 2,
          });
        }
      }
    };

    const handleMove = (event: PointerEvent) => {
      pointer.active = true;
      pointer.x = event.clientX;
      pointer.y = event.clientY;
    };

    const handleLeave = () => {
      pointer.active = false;
      pointer.x = -9999;
      pointer.y = -9999;
    };

    const draw = () => {
      tick += reduceMotion ? 0 : 0.012;
      const isLight = document.documentElement.classList.contains("light");
      context.clearRect(0, 0, width, height);

      const dot = isLight ? "15, 23, 42" : "255, 255, 255";
      const accent = isLight ? "234, 88, 12" : "249, 115, 22";
      const wave = isLight ? "15, 23, 42" : "255, 255, 255";

      particles.forEach((particle) => {
        const waveX = Math.sin(tick + particle.phase + particle.baseY * 0.004) * 10;
        const waveY = Math.cos(tick * 0.85 + particle.phase + particle.baseX * 0.003) * 8;
        const targetX = particle.baseX + waveX;
        const targetY = particle.baseY + waveY;

        particle.vx += (targetX - particle.x) * 0.018;
        particle.vy += (targetY - particle.y) * 0.018;

        const distance = Math.hypot(particle.x - pointer.x, particle.y - pointer.y);
        if (pointer.active && distance < 170 && distance > 0.01 && !reduceMotion) {
          const force = (1 - distance / 170) * 4.8;
          particle.vx += ((particle.x - pointer.x) / distance) * force;
          particle.vy += ((particle.y - pointer.y) / distance) * force;
        }

        particle.vx *= 0.9;
        particle.vy *= 0.9;
        particle.x += particle.vx;
        particle.y += particle.vy;
      });

      for (let index = 0; index < particles.length; index += 1) {
        const a = particles[index];
        for (let next = index + 1; next < particles.length; next += 1) {
          const b = particles[next];
          const distance = Math.hypot(a.x - b.x, a.y - b.y);
          if (distance > 112) continue;
          context.beginPath();
          context.moveTo(a.x, a.y);
          context.lineTo(b.x, b.y);
          context.strokeStyle = `rgba(${wave}, ${(1 - distance / 112) * (isLight ? 0.05 : 0.075)})`;
          context.lineWidth = 1;
          context.stroke();
        }
      }

      particles.forEach((particle, index) => {
        context.beginPath();
        context.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        context.fillStyle = index % 9 === 0 ? `rgba(${accent}, ${isLight ? 0.38 : 0.42})` : `rgba(${dot}, ${isLight ? 0.18 : 0.28})`;
        context.fill();
      });

      frame = requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", handleMove);
    window.addEventListener("pointerleave", handleLeave);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", handleMove);
      window.removeEventListener("pointerleave", handleLeave);
    };
  }, []);

  return <canvas ref={canvasRef} aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 opacity-80" />;
}
