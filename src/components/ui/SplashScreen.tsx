"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function SplashScreen() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Only show the splash screen on the very first load in this session
    const hasSeenSplash = sessionStorage.getItem("hasSeenSplash");
    if (!hasSeenSplash) {
      setShow(true);
      sessionStorage.setItem("hasSeenSplash", "true");

      // Auto-hide the splash screen after the animation sequence finishes
      const timer = setTimeout(() => {
        setShow(false);
      }, 3500);

      return () => clearTimeout(timer);
    }
  }, []);

  if (!show) return null;

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="splash"
          initial={{ y: "0%" }}
          exit={{ y: "-100%" }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#FF3B00] overflow-hidden"
        >
          <div className="relative flex flex-col items-center">
            {/* Massive Parallax M4Y */}
            <motion.div
              initial={{ scale: 0.5, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="text-[150px] md:text-[250px] lg:text-[350px] font-black uppercase tracking-tighter text-[#FFD700] leading-none mix-blend-screen"
              style={{ textShadow: "10px 10px 0px #000" }}
            >
              M4Y
            </motion.div>

            {/* "Marketing 4 You" Staggered text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="absolute bottom-10 md:bottom-20 bg-black text-white px-8 py-4 border-4 border-white shadow-[8px_8px_0_0_#FFD700] -rotate-3 z-10"
            >
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-widest whitespace-nowrap">
                Marketing 4 You
              </h2>
            </motion.div>
          </div>
          
          {/* Abstract floating shapes for vibrancy */}
          <motion.div 
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.3, duration: 1, ease: "backOut" }}
            className="absolute top-10 left-10 w-32 h-32 bg-[#00E676] border-4 border-black rounded-full mix-blend-overlay"
          />
          <motion.div 
            initial={{ x: "100%", rotate: 90 }}
            animate={{ x: 0, rotate: -12 }}
            transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
            className="absolute bottom-20 right-10 w-48 h-12 bg-[#FFD700] border-4 border-black"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
