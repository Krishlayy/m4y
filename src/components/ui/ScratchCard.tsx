"use client";

import React, { useRef, useEffect, useState } from "react";
import { useHaptic } from "@/hooks/useHaptic";

interface ScratchCardProps {
  width?: number;
  height?: number;
  image?: string;
  brushSize?: number;
  onReveal?: () => void;
  children: React.ReactNode;
}

export default function ScratchCard({
  width = 300,
  height = 150,
  image = "/scratch-cover.png",
  brushSize = 30,
  onReveal,
  children,
}: ScratchCardProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isRevealed, setIsRevealed] = useState(false);
  const [isDrawing, setIsDrawing] = useState(false);
  const triggerHaptic = useHaptic();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Fill with a solid color if image fails or before image loads
    ctx.fillStyle = "#FF3B00";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw some text over it
    ctx.fillStyle = "white";
    ctx.font = "bold 24px Inter, sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("SCRATCH ME", canvas.width / 2, canvas.height / 2);

    // Set composition so new drawings erase the canvas
    ctx.globalCompositeOperation = "destination-out";
  }, []);

  const getPointerPos = (e: React.TouchEvent | React.MouseEvent | MouseEvent | TouchEvent) => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };
    
    const rect = canvas.getBoundingClientRect();
    let clientX, clientY;

    if ("touches" in e) {
      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;
    } else {
      clientX = (e as React.MouseEvent).clientX;
      clientY = (e as React.MouseEvent).clientY;
    }

    return {
      x: clientX - rect.left,
      y: clientY - rect.top
    };
  };

  const handlePointerDown = (e: React.TouchEvent | React.MouseEvent) => {
    if (isRevealed) return;
    setIsDrawing(true);
    triggerHaptic("light");
    scratch(e);
  };

  const handlePointerMove = (e: React.TouchEvent | React.MouseEvent) => {
    if (!isDrawing || isRevealed) return;
    scratch(e);
  };

  const handlePointerUp = () => {
    setIsDrawing(false);
    checkReveal();
  };

  const scratch = (e: React.TouchEvent | React.MouseEvent) => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const { x, y } = getPointerPos(e);

    ctx.beginPath();
    ctx.arc(x, y, brushSize, 0, 2 * Math.PI, false);
    ctx.fill();
  };

  const checkReveal = () => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const pixels = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
    let transparentPixels = 0;

    for (let i = 0; i < pixels.length; i += 4) {
      if (pixels[i + 3] < 128) {
        transparentPixels++;
      }
    }

    const totalPixels = pixels.length / 4;
    const percentRevealed = (transparentPixels / totalPixels) * 100;

    if (percentRevealed > 45 && !isRevealed) {
      setIsRevealed(true);
      triggerHaptic("success");
      // Clear the rest
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      if (onReveal) onReveal();
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative select-none overflow-hidden border-4 border-black shadow-[4px_4px_0px_#000]"
      style={{ width, height }}
    >
      <div className="absolute inset-0 bg-white flex items-center justify-center p-4">
        {children}
      </div>
      <canvas
        ref={canvasRef}
        width={width}
        height={height}
        className={`absolute inset-0 z-10 touch-none ${isRevealed ? "pointer-events-none transition-opacity duration-500 opacity-0" : ""}`}
        onMouseDown={handlePointerDown}
        onMouseMove={handlePointerMove}
        onMouseUp={handlePointerUp}
        onMouseLeave={handlePointerUp}
        onTouchStart={handlePointerDown}
        onTouchMove={handlePointerMove}
        onTouchEnd={handlePointerUp}
      />
    </div>
  );
}
