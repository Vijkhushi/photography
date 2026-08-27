"use client";

import { motion } from "framer-motion";
import { Eye, Compass, ShieldCheck } from "lucide-react";
import { FEATURE_CARDS } from "@/lib/cameraData";

export default function ArtOfTheFrame() {
  const getIcon = (id: string) => {
    switch (id) {
      case "optics":
      default:
        return <Eye size={22} className="text-white" />;
      case "control":
        return <Compass size={22} className="text-white" />;
      case "performance":
        return <ShieldCheck size={22} className="text-white" />;
    }
  };

  return (
    <section
      id="art-of-frame"
      className="relative w-full min-h-screen bg-[#050505] text-white py-28 md:py-36 px-6 md:px-12 lg:px-20 border-t border-white/[0.06] overflow-hidden"
    >
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-white/[0.015] rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col mb-20">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-[1px] w-8 bg-white/40" />
            <span className="text-xs font-mono tracking-cinema text-neutral-400 uppercase">
              PHILOSOPHY OF DESIGN
            </span>
          </div>
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.05] max-w-3xl">
            THE ART OF THE FRAME.
          </h2>
          <div className="w-full h-[1px] bg-gradient-to-r from-white/20 via-white/[0.08] to-transparent mt-8" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FEATURE_CARDS.map((card, idx) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.7,
                delay: 0.18 * idx,
                ease: [0.215, 0.61, 0.355, 1],
              }}
              className="p-8 sm:p-10 rounded-2xl bg-white/[0.025] hover:bg-white/[0.05] border border-white/[0.07] hover:border-white/20 backdrop-blur-xl transition-all duration-500 flex flex-col justify-between group shadow-[0_20px_40px_rgba(0,0,0,0.6)]"
            >
              <div>
                <div className="flex items-center justify-between mb-8">
                  <div className="w-12 h-12 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {getIcon(card.id)}
                  </div>
                  <span className="text-[10px] font-mono tracking-cinema text-neutral-400">
                    {card.tag}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-2">
                  {card.title}
                </h3>
                <h4 className="text-xs font-mono text-neutral-400 tracking-wider mb-5">
                  {card.tagline}
                </h4>
                <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed mb-8">
                  {card.description}
                </p>
              </div>

              <div className="border-t border-white/[0.07] pt-6 flex flex-col gap-3">
                {card.stats.map((stat, sIdx) => (
                  <div key={sIdx} className="flex items-center justify-between text-xs font-mono">
                    <span className="text-neutral-400 tracking-wider">{stat.label}</span>
                    <span className="text-white font-medium">{stat.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
