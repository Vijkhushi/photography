"use client";

import { useEffect, useState } from "react";
import { PreloaderState } from "@/hooks/useFramePreloader";

interface PreloaderProps {
  preloaderState: PreloaderState;
  onReady: () => void;
}

export default function Preloader({ preloaderState, onReady }: PreloaderProps) {
  const [isHidden, setIsHidden] = useState(false);
  const [statusText, setStatusText] = useState("INITIALIZING OPTICAL SYSTEM");

  useEffect(() => {
    if (preloaderState.progress < 30) {
      setStatusText("INITIALIZING OPTICAL SYSTEM");
    } else if (preloaderState.progress < 70) {
      setStatusText("CALIBRATING 8K SENSOR CORE");
    } else if (preloaderState.progress < 100) {
      setStatusText("MOUNTING DUAL FPGA PIPELINE");
    } else {
      setStatusText("OPTICAL SYSTEM ARMED");
    }
  }, [preloaderState.progress]);

  useEffect(() => {
    if (preloaderState.isFirstFrameReady && preloaderState.progress >= 15) {
      const timeout = setTimeout(() => {
        setIsHidden(true);
        onReady();
      }, 700);
      return () => clearTimeout(timeout);
    }
  }, [preloaderState.isFirstFrameReady, preloaderState.progress, onReady]);

  if (isHidden) return null;

  return (
    <div
      className={`fixed inset-0 z-50 bg-[#050505] flex flex-col items-center justify-center transition-opacity duration-700 select-none ${
        isHidden ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="max-w-md w-full px-8 flex flex-col items-center">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-4 h-4 border border-white/40 flex items-center justify-center">
            <div className="w-1.5 h-1.5 bg-white" />
          </div>
          <span className="text-xs font-mono tracking-cinema text-white uppercase font-bold">
            KRONOS CINEMA SYSTEM
          </span>
        </div>

        <div className="w-full h-[2px] bg-white/[0.08] relative overflow-hidden mb-5">
          <div
            className="h-full bg-gradient-to-r from-white/40 via-white to-white/90 transition-all duration-300 ease-out shadow-[0_0_8px_rgba(255,255,255,0.8)]"
            style={{ width: `${Math.max(8, preloaderState.progress)}%` }}
          />
        </div>

        <div className="w-full flex items-center justify-between font-mono text-[11px] text-white/50 tracking-wider">
          <span className="animate-pulse">{statusText}</span>
          <span className="text-white font-semibold">{preloaderState.progress}%</span>
        </div>

        <div className="mt-8 text-[9px] font-mono text-white/30 tracking-widest">
          BUFFERED: {preloaderState.loadedCount} / {preloaderState.totalCount} FRAMES
        </div>
      </div>
    </div>
  );
}
