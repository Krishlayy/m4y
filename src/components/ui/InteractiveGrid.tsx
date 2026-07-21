"use client";

import { useState, useEffect, useRef } from "react";

const colors = [
  "#FFD700", // Yellow
  "#FF3B00", // Red
  "#0044FF", // Blue
  "#D0E5FF", // Pastel Blue
  "#FFD0D0", // Pastel Pink
  "#D0FFD0", // Pastel Green
];

export default function InteractiveGrid() {
  const [grid, setGrid] = useState({ rows: 0, cols: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const calculateGrid = () => {
      if (containerRef.current) {
        // Use 20px to make the grid cells much smaller
        const cols = Math.ceil(containerRef.current.offsetWidth / 20);
        const rows = Math.ceil(containerRef.current.offsetHeight / 20);
        setGrid({ rows, cols });
      }
    };

    calculateGrid();
    window.addEventListener("resize", calculateGrid);
    return () => window.removeEventListener("resize", calculateGrid);
  }, []);

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    
    // Immediate color fill
    el.style.backgroundColor = randomColor;
    el.style.transitionDuration = "0s";
    
    // Fade out slowly
    setTimeout(() => {
      if (el) {
        el.style.backgroundColor = "transparent";
        el.style.transitionDuration = "1.5s";
      }
    }, 100);
  };

  return (
    <div 
      ref={containerRef} 
      className="absolute inset-0 z-0 overflow-hidden pointer-events-none"
    >
      <div 
        className="w-full h-full"
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${grid.cols}, 20px)`,
          gridTemplateRows: `repeat(${grid.rows}, 20px)`,
        }}
      >
        {Array.from({ length: grid.rows * grid.cols }).map((_, i) => (
          <div
            key={i}
            className="w-[20px] h-[20px] border-r border-b border-black/10 pointer-events-auto transition-colors ease-out"
            onMouseEnter={handleMouseEnter}
          />
        ))}
      </div>
    </div>
  );
}
