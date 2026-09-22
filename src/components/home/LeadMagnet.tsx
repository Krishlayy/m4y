"use client";

import { motion } from "framer-motion";
import { ArrowRight, Users, Flame } from "lucide-react";
import Link from "next/link";

export default function LeadMagnet() {
  return (
    <section className="w-full bg-black border-t-4 border-black py-0">
      <div className="w-full px-6 md:px-16 lg:px-32 xl:px-40">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="py-20 md:py-28 flex flex-col md:flex-row items-center justify-between gap-10 relative overflow-hidden"
        >
          {/* Decorative */}
          <div className="absolute right-0 top-0 h-full w-8 bg-[#FF3B00] pointer-events-none hidden md:block" />

          <div className="flex-1 relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 border-4 border-[#FFD700] flex items-center justify-center">
                <Flame className="w-5 h-5 text-[#FFD700]" />
              </div>
              <span className="font-black text-xs uppercase tracking-widest text-[#FFD700]">
                Exclusive Partnership Roster
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white mb-4 leading-[0.9]">
              Scale Faster.<br/>
              <span className="text-[#FFD700]">Partner With Builders.</span>
            </h2>
            <p className="text-lg text-white/70 font-bold max-w-xl">
              We intentionally limit active partnerships to ensure obsessive founder-level execution. You get direct technical architecture and growth engineering from Kishalay and Ayushman — zero account managers, zero bureaucracy.
            </p>
            <div className="flex items-center gap-3 mt-6">
              <Users className="w-5 h-5 text-[#FF3B00]" />
              <span className="font-black text-white/80 text-sm uppercase tracking-wider">Strictly limited partner roster. Direct founder execution.</span>
            </div>
          </div>

          <div className="w-full md:w-auto relative z-10 shrink-0 flex flex-col gap-4">
            <Link
              href="/book-call"
              className="btn-accent w-full md:w-auto group flex items-center justify-center gap-2 !text-lg"
            >
              Apply For Partnership
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <p className="text-white/40 font-bold text-xs uppercase tracking-wider text-center">Free 30-min growth audit. Zero obligation.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
