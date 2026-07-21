"use client";

import { motion } from "framer-motion";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      <motion.div
        initial={{ y: "0%" }}
        animate={{ y: "-100%" }}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        className="fixed inset-0 z-[100] bg-[#FFD700] flex items-center justify-center pointer-events-none origin-top border-b-8 border-black overflow-hidden"
      >
        <div className="text-6xl md:text-8xl font-black uppercase tracking-tighter text-black">
          M4Y.
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        {children}
      </motion.div>
    </>
  );
}
