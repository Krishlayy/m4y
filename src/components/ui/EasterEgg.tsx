"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function EasterEgg() {
  const [active, setActive] = useState(false);

  useEffect(() => {
    let sequence = "";
    const target = "m4y";

    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore if typing in an input
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;

      sequence += e.key.toLowerCase();
      
      // Keep sequence to the last 3 characters
      if (sequence.length > target.length) {
        sequence = sequence.slice(-target.length);
      }

      if (sequence === target) {
        setActive(true);
        sequence = ""; // reset
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <AnimatePresence>
      {active && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          className="fixed inset-0 z-[99999] bg-black text-[#00E676] font-mono p-8 md:p-12 overflow-hidden flex flex-col justify-center cursor-none"
        >
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay"></div>
          
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="max-w-4xl mx-auto w-full relative z-10"
          >
            <div className="text-sm opacity-50 mb-4">SYSTEM COMPROMISED. ROOT ACCESS GRANTED.</div>
            <h1 className="text-4xl md:text-7xl font-bold mb-8 uppercase tracking-widest text-shadow-glow">
              Welcome to the <br /> underground.
            </h1>
            
            <div className="bg-white/5 border border-[#00E676]/30 p-6 mb-8 text-lg">
              <p className="mb-2">{">"} Initialization sequence complete.</p>
              <p className="mb-2">{">"} You found the hidden dev terminal.</p>
              <p className="mb-6">{">"} Mention "SYS.READY" on your strategy call for a free technical audit.</p>
              
              <div className="flex gap-4">
                <button 
                  onClick={() => setActive(false)}
                  className="bg-[#00E676] text-black px-6 py-2 font-bold uppercase hover:bg-white transition-colors"
                >
                  Exit Terminal
                </button>
              </div>
            </div>
          </motion.div>
          
          <style jsx global>{`
            .text-shadow-glow {
              text-shadow: 0 0 10px #00E676, 0 0 20px #00E676;
            }
          `}</style>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
