"use client";

import { motion } from "framer-motion";

export default function TrustBadges() {
  const tools = [
    "META ADS", "GOOGLE ADS", "TIKTOK ADS", 
    "SHOPIFY", "NEXT.JS", "FRAMER", 
    "FIGMA", "PRISMA", "N8N", 
    "POSTHOG", "STRIPE"
  ];

  return (
    <section className="bg-white border-t-4 border-b-4 border-black py-8 overflow-hidden relative flex items-center">
      <div className="absolute left-0 top-0 bottom-0 w-8 md:w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-8 md:w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
      
      <div className="flex whitespace-nowrap items-center">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 25, repeat: Infinity }}
          className="flex gap-8 items-center pr-8"
        >
          {/* Double the array for seamless infinite scroll */}
          {[...tools, ...tools].map((tool, i) => (
            <div key={i} className="flex items-center gap-8">
              <span className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-black/20 hover:text-[#FF3B00] transition-colors cursor-default">
                {tool}
              </span>
              <span className="text-xl md:text-3xl text-black/10">✦</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
