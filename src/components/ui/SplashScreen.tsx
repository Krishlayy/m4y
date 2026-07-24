"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function SplashScreen() {
  const [show, setShow] = useState(false);
  const [step, setStep] = useState(1);

  useEffect(() => {
    // Only show the splash screen on the very first load in this session
    const hasSeenSplash = sessionStorage.getItem("hasSeenSplash");
    if (!hasSeenSplash) {
      setTimeout(() => setShow(true), 0);
      sessionStorage.setItem("hasSeenSplash", "true");

      // Transition text from M4Y to Marketing 4 You after 1.5 seconds
      const stepTimer = setTimeout(() => {
        setStep(2);
      }, 1500);

      // Auto-hide the splash screen after the animation sequence finishes
      const timer = setTimeout(() => {
        setShow(false);
      }, 3500);

      return () => {
        clearTimeout(timer);
        clearTimeout(stepTimer);
      };
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
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#FF3B00] overflow-hidden border-b-8 border-black"
        >
          <div className="relative flex flex-col items-center justify-center h-full w-full">
            
            <AnimatePresence mode="wait">
              {step === 1 ? (
                <motion.div
                  key="m4y"
                  initial={{ scale: 0.5, opacity: 0, y: 50 }}
                  animate={{ scale: 1, opacity: 1, y: 0 }}
                  exit={{ scale: 1.5, opacity: 0, filter: "blur(10px)" }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="absolute text-[100px] sm:text-[150px] md:text-[250px] lg:text-[350px] font-black uppercase tracking-tight text-[#FFD700] leading-none mix-blend-screen"
                  style={{ textShadow: "10px 10px 0px #000" }}
                >
                  M4Y
                </motion.div>
              ) : (
                <motion.div
                  key="marketing4you"
                  initial={{ scale: 0.8, opacity: 0, filter: "blur(10px)" }}
                  animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="absolute flex flex-col items-center w-full px-4"
                >
                  <h2 className="text-4xl sm:text-6xl md:text-8xl lg:text-[120px] font-black uppercase tracking-tight text-[#FFD700] leading-[1] md:leading-[0.9] text-center break-words w-full" style={{ textShadow: "6px 6px 0px #000" }}>
                    Marketing <br/> 4 You
                  </h2>
                </motion.div>
              )}
            </AnimatePresence>

          </div>
          
          {/* Abstract floating shapes for vibrancy */}
          <motion.div 
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.3, duration: 1, ease: "backOut" }}
            className="absolute top-10 left-10 w-32 h-32 bg-[#00E676] border-4 border-black rounded-full mix-blend-overlay pointer-events-none"
          />
          <motion.div 
            initial={{ x: "100%", rotate: 90 }}
            animate={{ x: 0, rotate: -12 }}
            transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
            className="absolute bottom-20 right-10 w-48 h-12 bg-[#FFD700] border-4 border-black pointer-events-none"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
