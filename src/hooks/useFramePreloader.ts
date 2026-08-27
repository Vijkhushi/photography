"use client";

import { useEffect, useRef, useState } from "react";

export interface PreloaderState {
  loadedCount: number;
  totalCount: number;
  progress: number;
  isFirstFrameReady: boolean;
  isComplete: boolean;
  images: HTMLImageElement[];
}

export function useFramePreloader(totalFrames: number = 120): PreloaderState {
  const [loadedCount, setLoadedCount] = useState(0);
  const [isFirstFrameReady, setIsFirstFrameReady] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const imagesRef = useRef<HTMLImageElement[]>([]);

  useEffect(() => {
    let isMounted = true;
    const images: HTMLImageElement[] = new Array(totalFrames);
    imagesRef.current = images;

    if (totalFrames !== 120 && process.env.NODE_ENV === "development") {
      console.warn(`[FramePreloader] Warning: totalFrames is set to ${totalFrames} instead of 120.`);
    }

    // First load frame 1 immediately
    const firstImg = new Image();
    firstImg.src = "/images/camera/1.webp";

    const beginAfterFirstDecode = () => {
      if (!isMounted) return;
      images[0] = firstImg;
      setIsFirstFrameReady(true);
      setLoadedCount((prev) => prev + 1);

      let loaded = 1;
      let nextIndex = 2; // load 2..120

      // Batch loader to avoid network congestion while loading fast
      function loadBatch() {
        if (!isMounted || nextIndex > totalFrames) return;
        const batchEnd = Math.min(nextIndex + 8, totalFrames + 1);
        const promises: Promise<void>[] = [];

        for (let i = nextIndex; i < batchEnd; i++) {
          const frameNum = i;
          const arrayIdx = frameNum - 1;

          const p = new Promise<void>((resolve) => {
            const img = new Image();
            img.src = `/images/camera/${frameNum}.webp`;
            img.onload = () => {
              const finalize = () => {
                if (isMounted) {
                  images[arrayIdx] = img;
                  loaded++;
                  setLoadedCount(loaded);
                  if (loaded >= totalFrames) {
                    setIsComplete(true);
                  }
                }
                resolve();
              };
              // Force full bitmap decode now (off the scroll path) to avoid
              // a synchronous decode hitch the first time this frame is drawn.
              if (typeof img.decode === "function") {
                img.decode().then(finalize).catch(finalize);
              } else {
                finalize();
              }
            };
            img.onerror = () => {
              if (process.env.NODE_ENV === "development") {
                console.warn(`[FramePreloader] Failed to load frame /images/camera/${frameNum}.webp`);
              }
              if (isMounted) {
                loaded++;
                setLoadedCount(loaded);
                if (loaded >= totalFrames) {
                  setIsComplete(true);
                }
              }
              resolve();
            };
          });
          promises.push(p);
        }

        nextIndex = batchEnd;
        Promise.all(promises).then(() => {
          if (nextIndex <= totalFrames && isMounted) {
            setTimeout(loadBatch, 4);
          }
        });
      }

      loadBatch();
    };

    firstImg.onload = () => {
      if (typeof firstImg.decode === "function") {
        firstImg.decode().then(beginAfterFirstDecode).catch(beginAfterFirstDecode);
      } else {
        beginAfterFirstDecode();
      }
    };

    firstImg.onerror = () => {
      console.error("[FramePreloader] Failed to load first frame /images/camera/1.webp");
    };

    return () => {
      isMounted = false;
    };
  }, [totalFrames]);

  const progress = totalFrames > 0 ? Math.min(100, Math.round((loadedCount / totalFrames) * 100)) : 0;

  return {
    loadedCount,
    totalCount: totalFrames,
    progress,
    isFirstFrameReady,
    isComplete,
    images: imagesRef.current,
  };
}
