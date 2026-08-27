"use client";

import { HERO_STAGES } from "@/lib/cameraData";

interface HeroTextProps {
  currentFrame: number;
}

export default function HeroText({ currentFrame }: HeroTextProps) {
  const displayFrame = currentFrame + 1; // 1-indexed (1 to 120)

  return (
    <div className="absolute inset-0 pointer-events-none z-20 flex flex-col justify-between p-6 md:p-12 lg:p-16 select-none">
      {/* Top HUD */}
      <div className="flex items-center justify-between text-xs tracking-cinema text-neutral-500 font-mono pt-16 md:pt-14">
        <div className="flex items-center gap-3">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-cinema-rec animate-ping" />
          <span className="text-white/80 font-medium tracking-widest">KRONOS // CAM_A</span>
          <span className="hidden sm:inline-block text-white/30">|</span>
          <span className="hidden sm:inline-block text-white/50">8K RAW 12-BIT</span>
        </div>

        <div className="flex items-center gap-4">
          <span className="text-white/40 hidden md:inline">SEQUENCE SCRUB:</span>
          <span className="text-white font-mono bg-white/[0.04] px-2.5 py-1 rounded border border-white/[0.08] backdrop-blur-md">
            FRM {String(displayFrame).padStart(3, "0")} / 120
          </span>
        </div>
      </div>

      {/* Middle Stage Text */}
      <div className="relative w-full h-[60vh] max-h-[700px] flex items-center justify-start my-auto">
        {HERO_STAGES.map((stage) => {
          const isActive = displayFrame >= stage.frameStart && displayFrame <= stage.frameEnd;
          let opacity = 0;
          let translateY = 20;
          let blur = 10;
          let scale = 0.96;

          if (isActive) {
            const span = stage.frameEnd - stage.frameStart;
            const progress = (displayFrame - stage.frameStart) / span;

            if (progress < 0.15) {
              const enter = progress / 0.15;
              opacity = enter;
              translateY = 16 * (1 - enter);
              blur = 8 * (1 - enter);
              scale = 0.96 + 0.04 * enter;
            } else if (progress > 0.85) {
              const exit = (1 - progress) / 0.15;
              opacity = exit;
              translateY = -12 * (1 - exit);
              blur = 6 * (1 - exit);
              scale = 1 - 0.02 * (1 - exit);
            } else {
              opacity = 1;
              translateY = 0;
              blur = 0;
              scale = 1;
            }
          }

          if (!isActive && opacity === 0) return null;

          return (
            <div
              key={stage.id}
              className="absolute left-0 top-1/2 -translate-y-1/2 max-w-xl transition-all duration-300 ease-out"
              style={{
                opacity,
                transform: `translateY(${translateY}px) scale(${scale})`,
                filter: `blur(${blur}px)`,
              }}
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="h-[1px] w-6 bg-white/40" />
                <span className="text-[11px] font-mono tracking-cinema text-white/70 uppercase">
                  {stage.eyebrow}
                </span>
                <span className="text-[9px] font-mono text-white/30 hidden sm:inline">
                  [{stage.technicalCode}]
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.08] mb-4 drop-shadow-[0_4px_24px_rgba(0,0,0,0.8)]">
                {stage.title}
              </h1>

              <p className="text-sm sm:text-base md:text-lg text-neutral-400 font-light leading-relaxed max-w-md mb-6 drop-shadow-md">
                {stage.subtitle}
              </p>

              {stage.metrics && (
                <div className="flex flex-wrap gap-2.5 pt-1">
                  {stage.metrics.map((metric, idx) => (
                    <div
                      key={idx}
                      className="px-3 py-1.5 rounded bg-white/[0.04] border border-white/[0.08] backdrop-blur-md flex items-center gap-2"
                    >
                      <span className="text-[10px] font-mono tracking-wider text-neutral-400">
                        {metric.label}:
                      </span>
                      <span className="text-xs font-mono font-medium text-white">{metric.value}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Bottom Scroll Prompt */}
      <div
        className="flex flex-col items-center justify-center text-center transition-all duration-500 pb-4"
        style={{
          opacity: "clamp(0, calc(1 - var(--scroll-progress, 0) * 5), 1)",
          transform: "translateY(calc(var(--scroll-progress, 0) * 40px))",
        }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] font-mono tracking-cinema text-white/60 uppercase">
            SCROLL TO EXPLORE
          </span>
          <div className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center p-1">
            <span className="w-1 h-2 rounded-full bg-white/80 animate-bounce" />
          </div>
        </div>
      </div>
    </div>
  );
}
