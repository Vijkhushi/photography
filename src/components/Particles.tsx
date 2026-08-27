"use client";

import { useEffect, useRef } from "react";

interface ParticlesProps {
  count?: number;
  className?: string;
}

export default function Particles({ count = 36, className = "" }: ParticlesProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const scrollRef = useRef(0);

  useEffect(() => {
    let animId: number;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const particles: {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      baseOpacity: number;
      opacity: number;
      pulseSpeed: number;
      phase: number;
      parallaxFactor: number;
    }[] = [];
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 1.6 + 0.4,
        speedX: (Math.random() - 0.5) * 0.15,
        speedY: (Math.random() - 0.5) * 0.2 - 0.05,
        baseOpacity: Math.random() * 0.35 + 0.1,
        opacity: Math.random() * 0.35 + 0.1,
        pulseSpeed: Math.random() * 0.02 + 0.008,
        phase: Math.random() * Math.PI * 2,
        parallaxFactor: (Math.random() - 0.5) * 120,
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      if (canvas) {
        const raw = getComputedStyle(canvas).getPropertyValue("--scroll-progress").trim();
        const parsed = parseFloat(raw);
        if (!Number.isNaN(parsed)) scrollRef.current = parsed;
      }
      const sp = scrollRef.current;

      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        p.phase += p.pulseSpeed;
        p.opacity = p.baseOpacity * (0.7 + 0.3 * Math.sin(p.phase));

        const yPos = p.y + sp * p.parallaxFactor;

        ctx.beginPath();
        ctx.arc(p.x, yPos, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(220, 230, 250, ${p.opacity})`;
        ctx.shadowColor = "rgba(255, 255, 255, 0.4)";
        ctx.shadowBlur = 4;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      animId = requestAnimationFrame(render);
    };

    render();

    const handleResize = () => {
      if (canvas) {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
    };
  }, [count]);

  return <canvas ref={canvasRef} className={`absolute inset-0 pointer-events-none z-10 ${className}`} />;
}
