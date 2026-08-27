"use client";

import { forwardRef, useCallback, useEffect, useImperativeHandle, useRef } from "react";

export interface CameraCanvasHandle {
  renderFrame: (index: number) => void;
  getCurrentFrame: () => number;
}

interface CameraCanvasProps {
  images: HTMLImageElement[];
  isLoaded: boolean;
  className?: string;
  initialFrame?: number;
}

const CameraCanvas = forwardRef<CameraCanvasHandle, CameraCanvasProps>(
  ({ images, isLoaded, className = "", initialFrame = 0 }, ref) => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
    const currentFrameRef = useRef<number>(-1);
    const sizeRef = useRef<{ w: number; h: number }>({ w: 0, h: 0 });

    const drawFrame = useCallback(
      (index: number) => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        let ctx = ctxRef.current;
        if (!ctx) {
          ctx = canvas.getContext("2d", { alpha: true });
          if (!ctx) return;
          ctxRef.current = ctx;
        }

        const validIdx = Math.max(0, Math.min(index, (images.length > 0 ? images.length : 120) - 1));
        let img = images[validIdx];
        let usedFallback = false;
        if (!img || !img.complete || img.naturalWidth === 0) {
          img = images[0];
          usedFallback = true;
        }
        if (!img || !img.complete || img.naturalWidth === 0) return;

        if (sizeRef.current.w === 0 || sizeRef.current.h === 0) {
          const dpr = Math.min(typeof window !== "undefined" ? window.devicePixelRatio || 1 : 1, 2);
          const displayWidth = canvas.clientWidth || 1100;
          const displayHeight = canvas.clientHeight || (displayWidth * 9) / 16;
          const targetW = Math.round(displayWidth * dpr);
          const targetH = Math.round(displayHeight * dpr);
          sizeRef.current = { w: targetW, h: targetH };
          if (canvas.width !== targetW || canvas.height !== targetH) {
            canvas.width = targetW;
            canvas.height = targetH;
          }
        }

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = "high";

        const imgRatio = (img.naturalWidth || 1920) / (img.naturalHeight || 1080);
        const canvasRatio = canvas.width / canvas.height;

        let drawW = canvas.width;
        let drawH = canvas.height;
        let offsetX = 0;
        let offsetY = 0;

        if (canvasRatio > imgRatio) {
          drawH = canvas.height;
          drawW = drawH * imgRatio;
          offsetX = (canvas.width - drawW) / 2;
          offsetY = 0;
        } else {
          drawW = canvas.width;
          drawH = drawW / imgRatio;
          offsetX = 0;
          offsetY = (canvas.height - drawH) / 2;
        }

        ctx.drawImage(img, offsetX, offsetY, drawW, drawH);
        currentFrameRef.current = usedFallback ? -1 : validIdx;
      },
      [images]
    );

    useImperativeHandle(
      ref,
      () => ({
        renderFrame: (index: number) => {
          if (index === currentFrameRef.current) return;
          drawFrame(index);
        },
        getCurrentFrame: () => currentFrameRef.current,
      }),
      [drawFrame]
    );

    // Initial render when first frame is loaded or images change
    useEffect(() => {
      if (isLoaded || (images[0] && images[0].complete)) {
        drawFrame(currentFrameRef.current >= 0 ? currentFrameRef.current : initialFrame);
      }
    }, [isLoaded, images, drawFrame, initialFrame]);

    // Handle window resize
    useEffect(() => {
      const handleResize = () => {
        if (canvasRef.current) {
          sizeRef.current = { w: 0, h: 0 };
          currentFrameRef.current = -1;
          drawFrame(currentFrameRef.current >= 0 ? currentFrameRef.current : 0);
        }
      };
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, [drawFrame]);

    return (
      <div className={`relative flex items-center justify-center pointer-events-none select-none ${className}`}>
        <canvas
          ref={canvasRef}
          className="w-full h-full object-contain filter drop-shadow-[0_20px_50px_rgba(0,0,0,0.9)]"
          style={{ width: "100%", height: "100%" }}
        />
      </div>
    );
  }
);

CameraCanvas.displayName = "CameraCanvas";

export default CameraCanvas;
