"use client";

import { useState } from "react";
import { HOTSPOTS, Hotspot } from "@/lib/cameraData";
import { X, CircleCheck } from "lucide-react";

interface ExplodedHotspotsProps {
  currentFrame: number;
}

export default function ExplodedHotspots({ currentFrame }: ExplodedHotspotsProps) {
  const [activeHotspot, setActiveHotspot] = useState<Hotspot | null>(null);
  const displayFrame = currentFrame + 1; // 1 to 120

  const visibleHotspots = HOTSPOTS.filter(
    (h) => displayFrame >= h.visibleFrameStart && displayFrame <= h.visibleFrameEnd
  );

  if (visibleHotspots.length === 0) return null;

  return (
    <div className="absolute inset-0 pointer-events-auto z-30 select-none">
      {visibleHotspots.map((hotspot) => {
        const startDist = displayFrame - hotspot.visibleFrameStart;
        const endDist = hotspot.visibleFrameEnd - displayFrame;
        const isSelected = activeHotspot?.id === hotspot.id;
        const opacity = Math.min(1, Math.min(startDist, endDist) / 4);

        return (
          <div
            key={hotspot.id}
            className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
            style={{
              left: `${hotspot.x}%`,
              top: `${hotspot.y}%`,
              opacity,
              transition: "opacity 0.25s ease",
            }}
            onClick={() => setActiveHotspot(isSelected ? null : hotspot)}
          >
            <div className="relative flex items-center justify-center">
              <span className="absolute w-7 h-7 rounded-full bg-white/10 animate-ping opacity-60 pointer-events-none" />
              <span className="absolute w-5 h-5 rounded-full border border-white/40 group-hover:border-white/90 group-hover:scale-110 transition-all duration-300" />
              <span className="w-2.5 h-2.5 rounded-full bg-white group-hover:bg-white shadow-[0_0_12px_rgba(255,255,255,0.8)] transition-all" />
            </div>

            {!isSelected && (
              <div className="absolute left-1/2 -translate-x-1/2 bottom-8 opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none whitespace-nowrap">
                <div className="px-3 py-1.5 rounded bg-black/90 border border-white/20 backdrop-blur-md shadow-2xl flex flex-col items-center">
                  <span className="text-[9px] font-mono tracking-widest text-white/50 uppercase">
                    {hotspot.category}
                  </span>
                  <span className="text-xs font-mono font-medium text-white">{hotspot.name}</span>
                </div>
              </div>
            )}
          </div>
        );
      })}

      {activeHotspot && (
        <div className="absolute right-6 sm:right-12 bottom-12 sm:bottom-16 max-w-sm w-[90vw] p-5 rounded-xl bg-black/85 border border-white/20 backdrop-blur-xl shadow-2xl z-40 animate-in fade-in zoom-in-95 duration-200">
          <div className="flex items-start justify-between mb-2">
            <span className="text-[10px] font-mono tracking-cinema text-white/60 uppercase">
              // {activeHotspot.category}
            </span>
            <button
              onClick={() => setActiveHotspot(null)}
              className="p-1 rounded-full text-white/50 hover:text-white hover:bg-white/10 transition-colors"
            >
              <X size={14} />
            </button>
          </div>
          <h3 className="text-base font-bold text-white mb-2">{activeHotspot.name}</h3>
          <p className="text-xs text-neutral-300 font-light leading-relaxed mb-4">
            {activeHotspot.description}
          </p>
          <div className="flex items-center gap-2 text-[10px] font-mono text-white/40 border-t border-white/10 pt-2.5">
            <CircleCheck size={12} />
            <span>SUB-ASSEMBLY INSPECTION OK</span>
          </div>
        </div>
      )}
    </div>
  );
}
