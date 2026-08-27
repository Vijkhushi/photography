"use client";

import { ChevronRight, ArrowUp } from "lucide-react";

interface FinalCTAProps {
  onOpenInquiry: () => void;
}

export default function FinalCTA({ onOpenInquiry }: FinalCTAProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section
      id="cta"
      className="relative w-full bg-[#050505] text-white py-36 md:py-48 px-6 md:px-12 flex flex-col items-center justify-center text-center border-t border-white/[0.06] overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] max-w-[800px] h-[400px] bg-white/[0.025] rounded-full filter blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        <div className="flex items-center gap-2 mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-cinema-rec" />
          <span className="text-[11px] font-mono tracking-cinema text-neutral-400 uppercase">
            THE APEX OF MOTION PICTURE CAPTURE
          </span>
        </div>

        <h2 className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-10 drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)]">
          READY TO SHOOT?
        </h2>

        <button
          onClick={onOpenInquiry}
          className="group relative px-9 py-4 rounded-full bg-white text-black font-mono font-bold text-xs sm:text-sm tracking-cinema uppercase hover:bg-neutral-200 transition-all duration-300 shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:shadow-[0_0_60px_rgba(255,255,255,0.4)] hover:scale-105 flex items-center gap-3"
        >
          <span>EXPLORE THE CAMERA</span>
          <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </button>

        <p className="text-xs font-mono text-neutral-400 tracking-wider mt-12 max-w-md">
          Worldwide production shipping begins Q3. Available exclusively through authorized cinema distributors.
        </p>

        <div className="w-full max-w-5xl mt-28 pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-neutral-400">
          <div className="flex items-center gap-3">
            <span className="text-white/80 font-bold tracking-widest">KRONOS CINEMA</span>
            <span>© {new Date().getFullYear()}</span>
          </div>

          <div className="flex items-center gap-6 text-neutral-400">
            <span>8K DCI</span>
            <span>•</span>
            <span>16-BIT RAW</span>
            <span>•</span>
            <span>16.5 STOPS</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-white/60 hover:text-white transition-colors"
          >
            <span>BACK TO TOP</span>
            <ArrowUp size={12} />
          </button>
        </div>
      </div>
    </section>
  );
}
