"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PreloaderState } from "@/hooks/useFramePreloader";
import CameraCanvas, { CameraCanvasHandle } from "./CameraCanvas";
import AtmosphericLights from "./AtmosphericLights";
import Particles from "./Particles";
import HeroText from "./HeroText";
import ExplodedHotspots from "./ExplodedHotspots";

interface CameraHeroProps {
  preloaderState: PreloaderState;
}

export default function CameraHero({ preloaderState }: CameraHeroProps) {
  const heroRef = useRef<HTMLElement | null>(null);
  const pinRef = useRef<HTMLDivElement | null>(null);
  const canvasHandleRef = useRef<CameraCanvasHandle | null>(null);
  const currentFrameRef = useRef<number>(-1);
  const debugFrameRef = useRef<HTMLDivElement | null>(null);

  const [uiFrame, setUiFrame] = useState(0);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const hero = heroRef.current;
    const pin = pinRef.current;
    if (!hero || !pin) return;

    function renderFrame(index: number) {
      if (index === currentFrameRef.current) return;
      currentFrameRef.current = index;

      if (canvasHandleRef.current) {
        canvasHandleRef.current.renderFrame(index);
      }

      if (debugFrameRef.current) {
        debugFrameRef.current.textContent = `FRAME ${index + 1} / 120`;
      }
    }

    // Render initial frame
    renderFrame(0);
    pin.style.setProperty("--scroll-progress", "0");

    const st = ScrollTrigger.create({
      trigger: hero,
      start: "top top",
      end: "+=6000",
      pin: pin,
      pinSpacing: true,
      scrub: true,
      anticipatePin: 1,
      invalidateOnRefresh: true,
      onUpdate: (self) => {
        const progress = self.progress;

        // Frame index clamped strictly 0..119
        const frameIndex = Math.min(119, Math.max(0, Math.floor(progress * 120)));

        renderFrame(frameIndex);

        // Continuous progress drives CSS-only effects via a custom property,
        // avoiding a React re-render on every scroll tick (60/sec during scrub).
        if (pin) {
          pin.style.setProperty("--scroll-progress", progress.toFixed(4));
        }

        // Only trigger a React re-render when the discrete frame index actually
        // changes (happens far less often than every tick).
        setUiFrame((prev) => (prev === frameIndex ? prev : frameIndex));
      },
    });

    return () => {
      st.kill();
    };
  }, [preloaderState.images]);

  // When first frame or images ready, draw frame 0
  useEffect(() => {
    if (preloaderState.isFirstFrameReady && canvasHandleRef.current) {
      canvasHandleRef.current.renderFrame(currentFrameRef.current >= 0 ? currentFrameRef.current : 0);
    }
  }, [preloaderState.isFirstFrameReady]);

  return (
    <section ref={heroRef} id="hero-camera" className="relative w-full bg-[#050505]">
      <div
        ref={pinRef}
        className="relative w-full h-screen h-[100dvh] overflow-hidden flex items-center justify-center bg-[#050505]"
      >
        {/* Atmospheric background lights */}
        <AtmosphericLights frameIndex={uiFrame} />

        {/* Ambient floating dust particles (reads --scroll-progress directly, no re-render) */}
        <Particles count={38} />

        {/* Centered contained camera canvas & hotspots */}
        <div className="relative z-10 w-full flex items-center justify-center px-4 sm:px-8">
          <div className="w-[88vw] sm:w-[78vw] md:w-[70vw] lg:w-[60vw] xl:w-[56vw] max-w-[1100px] aspect-[16/9] flex items-center justify-center relative">
            <CameraCanvas
              ref={canvasHandleRef}
              images={preloaderState.images}
              isLoaded={preloaderState.isFirstFrameReady}
              className="w-full h-full"
              initialFrame={0}
            />
            <ExplodedHotspots currentFrame={uiFrame} />
          </div>
        </div>

        {/* HUD and stage typography */}
        <HeroText currentFrame={uiFrame} />

        {/* Subtle radial vignette overlay */}
        <div className="absolute inset-0 pointer-events-none bg-radial-vignette opacity-80" />

        {/* Development debug frame indicator */}
        {process.env.NODE_ENV === "development" && (
          <div
            ref={debugFrameRef}
            className="fixed bottom-6 left-6 z-50 px-3 py-1.5 rounded bg-black/90 border border-white/20 text-white font-mono text-xs shadow-2xl backdrop-blur-md pointer-events-none"
          >
            FRAME {uiFrame + 1} / 120
          </div>
        )}
      </div>
    </section>
  );
}
