"use client";

import { useState } from "react";
import { Cpu, Aperture, SlidersVertical, Check } from "lucide-react";
import { SUBSYSTEMS } from "@/lib/cameraData";

export default function FeatureSection() {
  const [activeTab, setActiveTab] = useState<"sensor" | "optics" | "control">("sensor");
  const activeSubsystem = SUBSYSTEMS[activeTab];

  return (
    <section
      id="engineered"
      className="relative w-full min-h-screen bg-[#050505] text-white py-28 md:py-36 px-6 md:px-12 lg:px-20 border-t border-white/[0.06] overflow-hidden"
    >
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[80vw] max-w-[1000px] h-[500px] bg-white/[0.02] rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex items-center gap-3 mb-6">
          <span className="h-[1px] w-8 bg-white/40" />
          <span className="text-xs font-mono tracking-cinema text-neutral-400 uppercase">
            ENGINEERED FOR CINEMA
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-20">
          <div className="lg:col-span-6">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1] mb-6">
              Every component has a purpose.
            </h2>
            <p className="text-base sm:text-lg text-neutral-400 font-light leading-relaxed max-w-lg">
              Born from close collaboration with ASC cinematographers, the KRONOS system redefines optical purity,
              thermal stability, and sensory tactile control.
            </p>
          </div>

          <div className="lg:col-span-6 flex flex-col justify-between h-full pt-2">
            <p className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed mb-8">
              Precision optics, aerospace mechanical engineering, sensor dynamic range, and uncompromising cinematic
              image quality come together in a singular, unibody titanium-magnesium chassis.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t border-white/[0.08]">
              <div className="flex flex-col">
                <span className="text-[10px] font-mono text-neutral-500 tracking-wider uppercase">
                  DYNAMIC RANGE
                </span>
                <span className="text-sm font-mono font-semibold text-white mt-1">16.5+ STOPS</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-mono text-neutral-500 tracking-wider uppercase">
                  RECORDING
                </span>
                <span className="text-sm font-mono font-semibold text-white mt-1">16-BIT RAW</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-mono text-neutral-500 tracking-wider uppercase">
                  CHASSIS WEIGHT
                </span>
                <span className="text-sm font-mono font-semibold text-white mt-1">1.92 KG</span>
              </div>
            </div>
          </div>
        </div>

        {/* Tab Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <button
            onClick={() => setActiveTab("sensor")}
            className={`p-6 sm:p-8 rounded-xl text-left transition-all duration-300 relative overflow-hidden group ${
              activeTab === "sensor"
                ? "bg-white/[0.08] border border-white/40 shadow-[0_0_30px_rgba(255,255,255,0.05)]"
                : "bg-white/[0.02] hover:bg-white/[0.05] border border-white/[0.06]"
            }`}
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-[10px] font-mono tracking-widest text-neutral-400 uppercase">
                01 // CORE
              </span>
              <Cpu size={18} className={activeTab === "sensor" ? "text-white" : "text-neutral-500"} />
            </div>
            <h3 className="text-xl font-bold tracking-tight text-white mb-2">FULL FRAME SENSOR</h3>
            <p className="text-xs text-neutral-400 font-light line-clamp-2">
              35.4MP custom backlit sensor with dual native ISO architecture.
            </p>
            {activeTab === "sensor" && <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-white" />}
          </button>

          <button
            onClick={() => setActiveTab("optics")}
            className={`p-6 sm:p-8 rounded-xl text-left transition-all duration-300 relative overflow-hidden group ${
              activeTab === "optics"
                ? "bg-white/[0.08] border border-white/40 shadow-[0_0_30px_rgba(255,255,255,0.05)]"
                : "bg-white/[0.02] hover:bg-white/[0.05] border border-white/[0.06]"
            }`}
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-[10px] font-mono tracking-widest text-neutral-400 uppercase">
                02 // MOUNT
              </span>
              <Aperture size={18} className={activeTab === "optics" ? "text-white" : "text-neutral-500"} />
            </div>
            <h3 className="text-xl font-bold tracking-tight text-white mb-2">PRECISION OPTICS</h3>
            <p className="text-xs text-neutral-400 font-light line-clamp-2">
              Positive-lock titanium flange with sub-micron tolerance.
            </p>
            {activeTab === "optics" && <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-white" />}
          </button>

          <button
            onClick={() => setActiveTab("control")}
            className={`p-6 sm:p-8 rounded-xl text-left transition-all duration-300 relative overflow-hidden group ${
              activeTab === "control"
                ? "bg-white/[0.08] border border-white/40 shadow-[0_0_30px_rgba(255,255,255,0.05)]"
                : "bg-white/[0.02] hover:bg-white/[0.05] border border-white/[0.06]"
            }`}
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-[10px] font-mono tracking-widest text-neutral-400 uppercase">
                03 // INTERFACE
              </span>
              <SlidersVertical
                size={18}
                className={activeTab === "control" ? "text-white" : "text-neutral-500"}
              />
            </div>
            <h3 className="text-xl font-bold tracking-tight text-white mb-2">CINEMATIC CONTROL</h3>
            <p className="text-xs text-neutral-400 font-light line-clamp-2">
              Tactile physical dials, low-latency UI, and instantaneous recall.
            </p>
            {activeTab === "control" && <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-white" />}
          </button>
        </div>

        {/* Active Subsystem Detail Card */}
        <div className="p-8 sm:p-10 rounded-2xl bg-white/[0.03] border border-white/[0.09] backdrop-blur-xl transition-all duration-300">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-6 border-b border-white/[0.08]">
            <div>
              <span className="text-[10px] font-mono tracking-cinema text-white/50 uppercase">
                // ACTIVE SUBSYSTEM: {activeSubsystem.badge}
              </span>
              <h4 className="text-2xl sm:text-3xl font-bold text-white mt-1">{activeSubsystem.title}</h4>
            </div>

            <div className="flex items-center gap-6">
              <div className="text-right">
                <span className="text-[9px] font-mono text-neutral-400 block tracking-wider">PRIMARY SPEC</span>
                <span className="text-base sm:text-lg font-mono font-bold text-white">
                  {activeSubsystem.primaryStat}
                </span>
              </div>
              <div className="h-8 w-[1px] bg-white/10" />
              <div className="text-right">
                <span className="text-[9px] font-mono text-neutral-400 block tracking-wider">BENCHMARK</span>
                <span className="text-base sm:text-lg font-mono font-bold text-white">
                  {activeSubsystem.secondaryStat}
                </span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6">
            <div className="lg:col-span-7">
              <p className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed mb-6">
                {activeSubsystem.description}
              </p>
            </div>
            <div className="lg:col-span-5 flex flex-col gap-2.5">
              {activeSubsystem.bullets.map((bullet, idx) => (
                <div key={idx} className="flex items-center gap-3 text-xs sm:text-sm text-neutral-300">
                  <Check size={15} className="text-white/70 flex-shrink-0" />
                  <span>{bullet}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
