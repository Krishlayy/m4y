"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!dismissed) setVisible(true);
    }, 8000);
    return () => clearTimeout(timer);
  }, [dismissed]);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 600 && !dismissed) setVisible(true);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [dismissed]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 40, scale: 0.9 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className="fixed bottom-6 right-6 z-50 flex items-center gap-3"
        >
          {/* Dismiss */}
          <button
            onClick={() => { setVisible(false); setDismissed(true); }}
            className="w-8 h-8 bg-black border-4 border-white text-white flex items-center justify-center hover:bg-[#FF3B00] transition-colors shadow-[2px_2px_0_white]"
            aria-label="Dismiss"
          >
            <X className="w-4 h-4" />
          </button>

          {/* CTA Button */}
          <Link
            href="/book-call"
            className="flex items-center gap-3 bg-[#FF3B00] text-white font-black text-sm uppercase tracking-wider px-6 py-4 border-4 border-black shadow-[6px_6px_0_#000] hover:shadow-[2px_2px_0_#000] hover:translate-x-1 hover:translate-y-1 transition-all duration-150 group"
          >
            {/* Pulsing dot */}
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full bg-white opacity-75" />
              <span className="relative inline-flex h-3 w-3 bg-white" />
            </span>
            Book Free Strategy Call
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
