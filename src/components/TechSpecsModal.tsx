"use client";

import { useState } from "react";
import { X, CircleCheck } from "lucide-react";
import { SPECS_DATA } from "@/lib/cameraData";

interface TechSpecsModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTab?: "specs" | "inquiry";
}

export default function TechSpecsModal({ isOpen, onClose, initialTab = "specs" }: TechSpecsModalProps) {
  const [tab, setTab] = useState<"specs" | "inquiry">(initialTab);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedMount, setSelectedMount] = useState("PL");

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 select-none animate-in fade-in duration-200">
      <div className="absolute inset-0 bg-black/85 backdrop-blur-xl" onClick={onClose} />

      <div className="relative w-full max-w-4xl max-h-[90vh] bg-[#0a0a0a] border border-white/15 rounded-2xl shadow-2xl flex flex-col overflow-hidden z-10">
        {/* Modal Header */}
        <div className="px-6 py-5 border-b border-white/10 flex items-center justify-between bg-black/40">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cinema-rec" />
              <h3 className="text-sm font-mono tracking-cinema text-white uppercase font-bold">
                KRONOS 8K CINE // TECHNICAL PORTAL
              </h3>
            </div>

            <div className="hidden sm:flex items-center gap-2 bg-white/[0.05] p-1 rounded-lg border border-white/10">
              <button
                onClick={() => setTab("specs")}
                className={`px-3 py-1 text-xs font-mono rounded transition-colors ${
                  tab === "specs" ? "bg-white text-black font-semibold" : "text-white/60 hover:text-white"
                }`}
              >
                FULL SPECIFICATIONS
              </button>
              <button
                onClick={() => setTab("inquiry")}
                className={`px-3 py-1 text-xs font-mono rounded transition-colors ${
                  tab === "inquiry" ? "bg-white text-black font-semibold" : "text-white/60 hover:text-white"
                }`}
              >
                ACQUISITION & DEMO
              </button>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-white/50 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8">
          {tab === "specs" ? (
            <div className="flex flex-col gap-10">
              {SPECS_DATA.map((cat, idx) => (
                <div key={idx} className="flex flex-col">
                  <h4 className="text-xs font-mono tracking-cinema text-white/50 uppercase pb-2 mb-4 border-b border-white/10 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-white/40 rounded-full" />
                    {cat.category}
                  </h4>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {cat.specs.map((spec, sIdx) => (
                      <div
                        key={sIdx}
                        className="p-3.5 rounded-lg bg-white/[0.02] border border-white/[0.05] flex flex-col justify-between"
                      >
                        <span className="text-[11px] font-mono text-neutral-400">{spec.name}</span>
                        <span className="text-xs sm:text-sm font-mono font-medium text-white mt-1">
                          {spec.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="max-w-xl mx-auto py-4">
              {isSubmitted ? (
                <div className="text-center py-12 flex flex-col items-center">
                  <div className="w-14 h-14 rounded-full bg-white/10 border border-white/20 flex items-center justify-center mb-4 text-white">
                    <CircleCheck size={28} />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">INQUIRY TRANSMITTED</h4>
                  <p className="text-xs text-neutral-400 font-mono">
                    A cinematic technical specialist will contact your production team within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  <div>
                    <h4 className="text-xl font-bold text-white mb-1">REQUEST CINEMA DEMO KIT</h4>
                    <p className="text-xs text-neutral-400">
                      Configure your camera package for evaluation and on-set production testing.
                    </p>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-mono text-neutral-400 uppercase tracking-wider">
                      SELECT NATIVE MOUNT:
                    </label>
                    <div className="grid grid-cols-3 gap-3">
                      {["PL Mount", "L-Mount", "EF Mount"].map((mount) => (
                        <button
                          key={mount}
                          type="button"
                          onClick={() => setSelectedMount(mount)}
                          className={`py-2.5 px-3 rounded text-xs font-mono border transition-all ${
                            selectedMount === mount
                              ? "bg-white text-black font-bold border-white"
                              : "bg-white/[0.04] text-white/70 border-white/10 hover:border-white/30"
                          }`}
                        >
                          {mount}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-mono text-neutral-400 uppercase">
                        Cinematographer / Name
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="Roger Deakins"
                        className="px-3.5 py-2.5 rounded bg-white/[0.05] border border-white/15 text-white text-xs font-mono focus:outline-none focus:border-white"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-mono text-neutral-400 uppercase">
                        Production Email
                      </label>
                      <input
                        required
                        type="email"
                        placeholder="dp@production.studio"
                        className="px-3.5 py-2.5 rounded bg-white/[0.05] border border-white/15 text-white text-xs font-mono focus:outline-none focus:border-white"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-mono text-neutral-400 uppercase">
                      Production / Company Name
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="Warner Bros. / A24 / Independent"
                      className="px-3.5 py-2.5 rounded bg-white/[0.05] border border-white/15 text-white text-xs font-mono focus:outline-none focus:border-white"
                    />
                  </div>

                  <button
                    type="submit"
                    className="mt-4 w-full py-3.5 rounded-full bg-white text-black font-mono font-bold text-xs tracking-cinema uppercase hover:bg-neutral-200 transition-colors shadow-[0_0_24px_rgba(255,255,255,0.2)]"
                  >
                    REQUEST EVALUATION UNIT
                  </button>
                </form>
              )}
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 border-t border-white/10 flex items-center justify-between bg-black/40 text-[10px] font-mono text-white/40">
          <span>KRONOS CINEMA LABS // MUNICH & TOKYO</span>
          <span>FIRMWARE V4.2.0</span>
        </div>
      </div>
    </div>
  );
}
