"use client";

import { useEffect, useState } from "react";
import { SlidersVertical, Volume2, VolumeX, ChevronRight, X, Menu } from "lucide-react";
import { playClickSound } from "@/lib/audio";

interface NavbarProps {
  onOpenSpecs: () => void;
  onOpenInquiry: () => void;
}

export default function Navbar({ onOpenSpecs, onOpenInquiry }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    if (soundEnabled) playClickSound(700, 0.02, 0.04);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 select-none ${
          isScrolled
            ? "bg-[#050505]/80 backdrop-blur-xl border-b border-white/[0.06] py-3.5 shadow-2xl"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          <button onClick={() => scrollTo("hero-camera")} className="flex items-center gap-3 group text-left">
            <div className="w-6 h-6 rounded border border-white/30 flex items-center justify-center group-hover:border-white transition-colors">
              <span className="w-2 h-2 bg-white rounded-full group-hover:scale-125 transition-transform" />
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-bold tracking-cinema text-white uppercase leading-none">
                KRONOS
              </span>
              <span className="text-[9px] font-mono tracking-widest text-neutral-400 leading-tight">
                CINEMA LABS
              </span>
            </div>
          </button>

          <nav className="hidden md:flex items-center gap-8 lg:gap-10">
            <button
              onClick={() => scrollTo("hero-camera")}
              className="text-[11px] font-mono tracking-widest text-neutral-300 hover:text-white uppercase transition-colors"
            >
              CAMERA
            </button>
            <button
              onClick={() => scrollTo("engineered")}
              className="text-[11px] font-mono tracking-widest text-neutral-300 hover:text-white uppercase transition-colors"
            >
              TECHNOLOGY
            </button>
            <button
              onClick={() => scrollTo("art-of-frame")}
              className="text-[11px] font-mono tracking-widest text-neutral-300 hover:text-white uppercase transition-colors"
            >
              ENGINEERING
            </button>
            <button
              onClick={() => {
                if (soundEnabled) playClickSound(850, 0.03, 0.05);
                onOpenSpecs();
              }}
              className="text-[11px] font-mono tracking-widest text-neutral-300 hover:text-white uppercase transition-colors flex items-center gap-1.5"
            >
              <SlidersVertical size={11} className="text-white/60" />
              SPECS
            </button>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => {
                if (!soundEnabled) playClickSound(900, 0.04, 0.08);
                setSoundEnabled(!soundEnabled);
              }}
              title={soundEnabled ? "Mute UI sounds" : "Enable UI sounds"}
              className="p-2 rounded-full text-white/50 hover:text-white hover:bg-white/[0.06] transition-colors"
            >
              {soundEnabled ? <Volume2 size={15} /> : <VolumeX size={15} />}
            </button>
            <button
              onClick={() => {
                if (soundEnabled) playClickSound(1100, 0.04, 0.08);
                onOpenInquiry();
              }}
              className="relative group px-5 py-2 rounded-full overflow-hidden text-[11px] font-mono tracking-cinema uppercase text-white bg-white/[0.06] hover:bg-white/[0.12] border border-white/20 hover:border-white/50 backdrop-blur-md transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.05)]"
            >
              <span className="relative z-10 flex items-center gap-2">
                EXPLORE CAMERA
                <ChevronRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
              </span>
            </button>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-white/80 hover:text-white transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 bg-[#050505]/95 backdrop-blur-2xl md:hidden pt-24 px-8 pb-12 flex flex-col justify-between animate-in fade-in duration-200">
          <div className="flex flex-col gap-6">
            <button
              onClick={() => scrollTo("hero-camera")}
              className="text-left text-lg font-mono tracking-widest text-white/80 hover:text-white py-2 border-b border-white/[0.08]"
            >
              01 // CAMERA
            </button>
            <button
              onClick={() => scrollTo("engineered")}
              className="text-left text-lg font-mono tracking-widest text-white/80 hover:text-white py-2 border-b border-white/[0.08]"
            >
              02 // TECHNOLOGY
            </button>
            <button
              onClick={() => scrollTo("art-of-frame")}
              className="text-left text-lg font-mono tracking-widest text-white/80 hover:text-white py-2 border-b border-white/[0.08]"
            >
              03 // ENGINEERING
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSpecs();
              }}
              className="text-left text-lg font-mono tracking-widest text-white/80 hover:text-white py-2 border-b border-white/[0.08]"
            >
              04 // TECHNICAL SPECS
            </button>
          </div>

          <div className="flex flex-col gap-4">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenInquiry();
              }}
              className="w-full py-3.5 rounded-full text-center text-xs font-mono tracking-cinema uppercase text-black bg-white font-bold"
            >
              EXPLORE CAMERA
            </button>
            <p className="text-[10px] font-mono text-center text-white/30 tracking-widest">
              KRONOS 8K CINE // PRODUCTION READY
            </p>
          </div>
        </div>
      )}
    </>
  );
}
