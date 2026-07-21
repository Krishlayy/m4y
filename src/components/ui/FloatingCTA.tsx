"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Terminal, PhoneForwarded, MessageSquare, ArrowUp, Zap } from "lucide-react";
import { useState, useEffect } from "react";

export default function FloatingCTA() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 500);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">
      
      {/* Scroll to top */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={scrollToTop}
            className="w-12 h-12 bg-white border-2 border-black shadow-[4px_4px_0_0_#000] flex items-center justify-center hover:bg-[#FFD700] hover:translate-y-[-2px] hover:shadow-[4px_6px_0_0_#000] transition-all"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-6 h-6 stroke-[3]" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Techy/Brutalist CTA Box */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        onHoverStart={() => setIsExpanded(true)}
        onHoverEnd={() => setIsExpanded(false)}
        className="relative flex flex-col items-end"
      >
        <AnimatePresence>
          {isExpanded && (
            <motion.div 
              initial={{ opacity: 0, height: 0, scale: 0.8 }}
              animate={{ opacity: 1, height: 'auto', scale: 1 }}
              exit={{ opacity: 0, height: 0, scale: 0.8 }}
              className="flex flex-col gap-3 mb-4 origin-bottom-right"
            >
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-5 py-3 bg-white border-2 border-black shadow-[4px_4px_0_0_#000] hover:bg-[#00E676] hover:translate-y-[-2px] hover:shadow-[4px_6px_0_0_#000] transition-all group whitespace-nowrap"
              >
                <span className="font-bold uppercase tracking-widest text-sm group-hover:text-black">Slide into DMs</span>
                <MessageSquare className="w-5 h-5 stroke-[3] group-hover:animate-bounce" />
              </a>

              <Link
                href="/book-call"
                className="flex items-center gap-3 px-5 py-3 bg-white border-2 border-black shadow-[4px_4px_0_0_#000] hover:bg-[#FF3B00] hover:text-white hover:translate-y-[-2px] hover:shadow-[4px_6px_0_0_#000] transition-all group whitespace-nowrap"
              >
                <span className="font-bold uppercase tracking-widest text-sm">Summon Us</span>
                <PhoneForwarded className="w-5 h-5 stroke-[3] group-hover:animate-ping" />
              </Link>
            </motion.div>
          )}
        </AnimatePresence>

        {/* The "Trigger" Button */}
        <button 
          className={`flex items-center gap-3 px-6 py-4 border-4 border-black shadow-[6px_6px_0_0_#000] transition-all duration-300 ${isExpanded ? 'bg-black text-[#FFD700]' : 'bg-[#FFD700] text-black hover:bg-black hover:text-[#FFD700]'}`}
        >
          <div className="flex items-center gap-2">
            <div className={`w-3 h-3 rounded-full ${isExpanded ? 'bg-[#FF3B00] animate-pulse' : 'bg-black'}`}></div>
            <span className="font-black uppercase tracking-widest text-lg">
              {isExpanded ? 'INITIATE...' : 'SYS.READY'}
            </span>
          </div>
          <Terminal className="w-6 h-6 stroke-[3]" />
        </button>
      </motion.div>
    </div>
  );
}
