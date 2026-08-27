"use client";

import { useState } from "react";
import { useFramePreloader } from "@/hooks/useFramePreloader";
import SmoothScroll from "@/components/SmoothScroll";
import Preloader from "@/components/Preloader";
import Navbar from "@/components/Navbar";
import CameraHero from "@/components/CameraHero";
import FeatureSection from "@/components/FeatureSection";
import ArtOfTheFrame from "@/components/ArtOfTheFrame";
import FinalCTA from "@/components/FinalCTA";
import TechSpecsModal from "@/components/TechSpecsModal";

export default function Home() {
  const preloaderState = useFramePreloader(120);
  const [, setAppReady] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTab, setModalTab] = useState<"specs" | "inquiry">("specs");

  const openInquiry = () => {
    setModalTab("inquiry");
    setModalOpen(true);
  };

  const openSpecs = () => {
    setModalTab("specs");
    setModalOpen(true);
  };

  return (
    <SmoothScroll>
      <main className="relative bg-[#050505] text-[#f5f5f7] min-h-screen selection:bg-white/20 selection:text-white">
        <Preloader preloaderState={preloaderState} onReady={() => setAppReady(true)} />
        <Navbar onOpenSpecs={openSpecs} onOpenInquiry={openInquiry} />
        <CameraHero preloaderState={preloaderState} />
        <FeatureSection />
        <ArtOfTheFrame />
        <FinalCTA onOpenInquiry={openInquiry} />
        <TechSpecsModal isOpen={modalOpen} onClose={() => setModalOpen(false)} initialTab={modalTab} />
      </main>
    </SmoothScroll>
  );
}
