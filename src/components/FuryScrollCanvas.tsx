"use client";

import { useEffect, useRef, useCallback } from "react";
import { type MotionValue, useMotionValueEvent } from "framer-motion";

interface FuryScrollCanvasProps {
  scrollYProgress: MotionValue<number>;
  totalFrames: number;
  imageFolderPath: string;
}

export default function FuryScrollCanvas({
  scrollYProgress,
  totalFrames,
  imageFolderPath,
}: FuryScrollCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const frameIndexRef = useRef(0);
  const rafRef = useRef<number | null>(null);
  const loadedCountRef = useRef(0);

  // ── Preload all frames ──
  useEffect(() => {
    const images: HTMLImageElement[] = [];
    let isCancelled = false;

    for (let i = 0; i < totalFrames; i++) {
      const img = new Image();
      img.src = `${imageFolderPath}/${i + 1}.jpg`;
      img.onload = () => {
        if (isCancelled) return;
        loadedCountRef.current++;
        // Draw the first frame as soon as it loads
        if (i === 0) {
          renderFrame(0);
        }
      };
      images.push(img);
    }

    imagesRef.current = images;

    return () => {
      isCancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [totalFrames, imageFolderPath]);

  // ── Canvas draw function with Retina/4K support ──
  const renderFrame = useCallback((index: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = imagesRef.current[index];
    if (!img || !img.complete || !img.naturalWidth) return;

    const dpr = window.devicePixelRatio || 1;
    const displayWidth = canvas.clientWidth;
    const displayHeight = canvas.clientHeight;

    // Only resize canvas buffer if needed
    if (
      canvas.width !== displayWidth * dpr ||
      canvas.height !== displayHeight * dpr
    ) {
      canvas.width = displayWidth * dpr;
      canvas.height = displayHeight * dpr;
      ctx.scale(dpr, dpr);
    }

    // Clear
    ctx.clearRect(0, 0, displayWidth, displayHeight);

    // ── Object-fit: contain logic ──
    const imgAspect = img.naturalWidth / img.naturalHeight;
    const canvasAspect = displayWidth / displayHeight;

    let drawWidth: number;
    let drawHeight: number;
    let offsetX: number;
    let offsetY: number;

    if (imgAspect > canvasAspect) {
      // Image is wider — fit to width
      drawWidth = displayWidth;
      drawHeight = displayWidth / imgAspect;
      offsetX = 0;
      offsetY = (displayHeight - drawHeight) / 2;
    } else {
      // Image is taller — fit to height
      drawHeight = displayHeight;
      drawWidth = displayHeight * imgAspect;
      offsetX = (displayWidth - drawWidth) / 2;
      offsetY = 0;
    }

    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
  }, []);

  // ── Sync scroll to frame ──
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const newIndex = Math.min(
      Math.floor(latest * totalFrames),
      totalFrames - 1
    );

    if (newIndex !== frameIndexRef.current) {
      frameIndexRef.current = newIndex;

      // Use rAF for smooth rendering
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      rafRef.current = requestAnimationFrame(() => {
        renderFrame(newIndex);
      });
    }
  });

  // ── Handle resize ──
  useEffect(() => {
    const handleResize = () => {
      // Reset canvas dimensions and redraw
      const canvas = canvasRef.current;
      if (canvas) {
        const ctx = canvas.getContext("2d");
        if (ctx) {
          const dpr = window.devicePixelRatio || 1;
          canvas.width = canvas.clientWidth * dpr;
          canvas.height = canvas.clientHeight * dpr;
          ctx.scale(dpr, dpr);
        }
      }
      renderFrame(frameIndexRef.current);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [renderFrame]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ display: "block" }}
      aria-label="McLaren 720S Spider Fury rotating car sequence"
    />
  );
}
