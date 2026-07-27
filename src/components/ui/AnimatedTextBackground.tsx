"use client";

import { motion } from "framer-motion";

export default function AnimatedTextBackground() {
  return (
    <div className="absolute inset-0 z-0 bg-[#050505] overflow-hidden flex flex-col justify-center items-center">
      {/* CSS Grain Overlay for cinematic feel */}
      <div 
        className="absolute inset-0 z-10 opacity-20 pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Row 1 - Left to Right */}
      <motion.div
        animate={{ x: ["-50%", "0%"] }}
        transition={{ ease: "linear", duration: 25, repeat: Infinity }}
        className="whitespace-nowrap font-black text-[12vw] leading-[0.8] text-white/5 tracking-tighter w-[200vw]"
      >
        WE BUILD BRANDS • WE BUILD BRANDS • WE BUILD BRANDS • WE BUILD BRANDS •
      </motion.div>

      {/* Row 2 - Right to Left */}
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ ease: "linear", duration: 20, repeat: Infinity }}
        className="whitespace-nowrap font-black text-[15vw] leading-[0.8] text-transparent tracking-tighter w-[200vw] mt-4"
        style={{ WebkitTextStroke: "2px rgba(255, 255, 255, 0.15)" }}
      >
        M4Y AGENCY • M4Y AGENCY • M4Y AGENCY • M4Y AGENCY •
      </motion.div>

      {/* Row 3 - Left to Right Fast */}
      <motion.div
        animate={{ x: ["-50%", "0%"] }}
        transition={{ ease: "linear", duration: 15, repeat: Infinity }}
        className="whitespace-nowrap font-black text-[10vw] leading-[0.8] text-white/5 tracking-tighter w-[200vw] mt-4"
      >
        SCALE RUTHLESSLY • SCALE RUTHLESSLY • SCALE RUTHLESSLY • SCALE RUTHLESSLY •
      </motion.div>

      {/* Pulsing Accent Glow */}
      <motion.div
        animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.2, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[50vw] bg-[#FF3B00] rounded-full blur-[120px] mix-blend-screen opacity-30 pointer-events-none"
      />
    </div>
  );
}
