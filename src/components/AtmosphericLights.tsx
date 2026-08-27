"use client";

interface AtmosphericLightsProps {
  frameIndex?: number;
}

export default function AtmosphericLights({ frameIndex = 0 }: AtmosphericLightsProps) {
  const peakIntensity = frameIndex >= 40 && frameIndex <= 80 ? Math.sin(((frameIndex - 40) / 40) * Math.PI) : 0;
  const isFinalStage = frameIndex >= 105;
  const finalStageIntensity = isFinalStage ? (frameIndex - 105) / 15 : 0;
  const flareIntensity = 0.2 + peakIntensity * 0.4 + finalStageIntensity * 0.3;

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(
              circle at 50% 50%,
              rgba(38, 43, 54, ${0.35 + peakIntensity * 0.2}) 0%,
              rgba(18, 20, 24, 0.6) 35%,
              rgba(8, 9, 10, 0.95) 70%,
              #050505 100%
            )
          `,
        }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full transition-transform duration-300 ease-out"
        style={{
          width: "min(60vw, 850px)",
          height: "min(60vw, 850px)",
          background: isFinalStage
            ? `radial-gradient(circle, rgba(212, 180, 130, ${0.15 * flareIntensity}) 0%, rgba(130, 170, 220, ${0.1 * flareIntensity}) 40%, transparent 70%)`
            : `radial-gradient(circle, rgba(255, 255, 255, ${0.18 * flareIntensity}) 0%, rgba(100, 140, 190, ${0.08 * flareIntensity}) 45%, transparent 75%)`,
          filter: "blur(70px)",
          transform: `translate(-50%, -50%) scale(${1 + peakIntensity * 0.25 + finalStageIntensity * 0.15})`,
          opacity: flareIntensity,
        }}
      />
      <div
        className="absolute top-1/3 -left-[10vw] w-[40vw] h-[30vh] rounded-full opacity-20 filter blur-[90px]"
        style={{
          background: "radial-gradient(circle, rgba(80, 110, 160, 0.4) 0%, transparent 70%)",
          transform: "translateY(calc(var(--scroll-progress, 0) * 40px))",
        }}
      />
      <div
        className="absolute bottom-1/4 -right-[10vw] w-[40vw] h-[30vh] rounded-full opacity-15 filter blur-[90px]"
        style={{
          background: "radial-gradient(circle, rgba(140, 110, 80, 0.3) 0%, transparent 70%)",
          transform: "translateY(calc(var(--scroll-progress, 0) * -40px))",
        }}
      />
      <div className="absolute bottom-[18%] left-1/2 -translate-x-1/2 w-[70vw] max-w-[1200px] h-[1px] bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
      <div className="absolute inset-0 shadow-[inset_0_0_120px_rgba(0,0,0,0.9)]" />
    </div>
  );
}
