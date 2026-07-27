"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function LeadMagnet() {
  return (
    <section className="w-full bg-[#FFD700] border-t-4 border-black py-0">
      <div className="w-full px-6 md:px-16 lg:px-32 xl:px-40">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="py-20 md:py-28 flex flex-col md:flex-row items-center justify-between gap-10 relative overflow-hidden"
        >
          {/* Decorative shape */}
          <div className="absolute right-0 top-0 h-full w-1/4 bg-black/5 border-l-4 border-black pointer-events-none hidden md:block" />

          <div className="flex-1 relative z-10">
            <p className="font-black text-xs uppercase tracking-widest text-black/50 mb-4">Free Consultation</p>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-black mb-4 leading-[0.9]">
              Ready to Stop Guessing<br/>and Start Growing?
            </h2>
            <p className="text-lg text-black/70 font-bold max-w-xl">
              30 minutes. No pitch deck. No BS. Just a brutally honest audit of your current marketing and a clear path to fix it.
            </p>
          </div>

          <div className="w-full md:w-auto relative z-10 shrink-0">
            <Link
              href="/book-call"
              className="btn-primary w-full md:w-auto group flex items-center justify-center gap-2 !bg-black !text-white hover:!bg-[#FF3B00]"
            >
              Book Free Strategy Call
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
