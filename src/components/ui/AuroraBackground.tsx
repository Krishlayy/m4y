"use client";

import { motion } from "framer-motion";

export default function AuroraBackground({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {/* Primary gradient blob */}
      <motion.div
        animate={{
          x: [0, 100, -50, 0],
          y: [0, -80, 60, 0],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-primary/20 blur-[120px] animate-blob"
      />

      {/* Secondary gradient blob */}
      <motion.div
        animate={{
          x: [0, -80, 100, 0],
          y: [0, 100, -60, 0],
          scale: [1, 0.9, 1.15, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute top-1/4 -right-40 w-[500px] h-[500px] rounded-full bg-secondary/15 blur-[120px] animate-blob"
      />

      {/* Cyan accent blob */}
      <motion.div
        animate={{
          x: [0, 60, -80, 0],
          y: [0, -40, 80, 0],
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 5,
        }}
        className="absolute bottom-0 left-1/3 w-[400px] h-[400px] rounded-full bg-accent-cyan/10 blur-[100px] animate-blob"
      />

      {/* Green subtle blob */}
      <motion.div
        animate={{
          x: [0, -60, 40, 0],
          y: [0, 60, -40, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 8,
        }}
        className="absolute -bottom-20 right-1/4 w-[300px] h-[300px] rounded-full bg-accent-green/8 blur-[80px]"
      />

      {/* Grid overlay */}
      <div className="absolute inset-0 grid-overlay opacity-30" />

      {/* Radial gradient overlay to darken edges */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,#09090B_70%)]" />
    </div>
  );
}
