"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AlertTriangle, Smartphone, Hand, Sparkles, X } from "lucide-react";
import { useHaptic } from "@/hooks/useHaptic";

export default function ExperienceWarning() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);
  const triggerHaptic = useHaptic();

  useEffect(() => {
    setHasMounted(true);
    
    // Check if the user has already seen this warning
    const hasSeenWarning = localStorage.getItem("m4y-experience-warning-seen");
    
    if (!hasSeenWarning) {
      // Delay the popup so they have time to see the hero section first
      const timer = setTimeout(() => {
        setIsVisible(true);
        triggerHaptic("heavy");
      }, 3000);
      
      return () => clearTimeout(timer);
    }
  }, [triggerHaptic]);

  const handleDismiss = () => {
    triggerHaptic("success");
    setIsVisible(false);
    localStorage.setItem("m4y-experience-warning-seen", "true");
  };

  // Only render on client side to avoid hydration mismatch
  if (!hasMounted) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed inset-0 z-[100] md:hidden pointer-events-none flex items-end justify-center p-4 pb-32">
          <motion.div
            initial={{ opacity: 0, y: 100, rotate: 5, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, rotate: -2, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9, rotate: 0 }}
            transition={{ type: "spring", damping: 15, stiffness: 100 }}
            className="w-full max-w-sm bg-[#FFD700] border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] pointer-events-auto overflow-hidden relative"
          >
            {/* Caution tape strip */}
            <div className="w-full h-3 bg-black flex" style={{ backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 10px, #FFD700 10px, #FFD700 20px)" }} />
            
            <button 
              onClick={handleDismiss}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center border-2 border-black bg-white rounded-full active:bg-gray-200"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="w-8 h-8 text-black" fill="white" />
                <h3 className="font-black uppercase text-xl tracking-tight leading-none">
                  High Dopamine <br/> Warning
                </h3>
              </div>

              <p className="font-bold text-sm mb-4 leading-relaxed">
                We built this mobile experience to be dangerously interactive.
              </p>

              <ul className="space-y-3 mb-6 font-bold text-xs uppercase tracking-wider">
                <li className="flex items-center gap-3 bg-white p-2 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  <Smartphone className="w-5 h-5 text-[#FF3B00]" /> Tilt your phone
                </li>
                <li className="flex items-center gap-3 bg-white p-2 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  <Hand className="w-5 h-5 text-blue-600" /> Fling the joystick
                </li>
                <li className="flex items-center gap-3 bg-white p-2 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  <Sparkles className="w-5 h-5 text-purple-600" /> Scratch the footer
                </li>
              </ul>

              <p className="text-xs font-black uppercase mb-6 text-black/60 italic">
                *Warning: Do not get addicted to our website. Let your customers get addicted to your brand instead.*
              </p>

              <button
                onClick={handleDismiss}
                className="w-full bg-black text-white py-4 font-black uppercase tracking-widest border-2 border-black hover:bg-[#FF3B00] active:translate-y-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:shadow-none transition-all"
              >
                I Can Handle It
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
