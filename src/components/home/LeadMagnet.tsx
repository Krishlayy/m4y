"use client";

import { motion } from "framer-motion";
import { Calculator, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function LeadMagnet() {
  return (
    <section className="w-full bg-white border-t-4 border-black py-32 md:py-40">
      <div className="w-full px-6 md:px-16 lg:px-32 xl:px-40">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="gray-panel p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10 relative overflow-hidden"
        >
          {/* Decorative geometric accent */}
          <div className="absolute top-0 right-0 w-64 h-64 border-4 border-black bg-[#FF3B00]/10 -translate-y-1/2 translate-x-1/3 pointer-events-none" />
          <div className="absolute bottom-0 right-10 w-32 h-32 bg-[#FF3B00] border-4 border-black shadow-[4px_4px_0px_#000] translate-y-1/2 pointer-events-none" />
          
          <div className="flex-1 relative z-10">
            <div className="w-16 h-16 bg-white flex items-center justify-center border-4 border-black mb-8 shadow-[4px_4px_0px_#000]">
              <Calculator className="text-[#FF3B00] w-8 h-8" strokeWidth={2.5} />
            </div>
            
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-[#0A0A0A] mb-4">
              Curious about your campaign costs?
            </h2>
            <p className="text-lg text-[#27272A] font-medium max-w-2xl">
              Stop guessing. We&apos;ve built an intelligent cost estimator to help you forecast your digital marketing spend accurately. Get a clear picture of what it takes to dominate your market.
            </p>
          </div>

          <div className="w-full md:w-auto relative z-10 shrink-0">
            <Link 
              href="/contact" 
              className="btn-accent w-full md:w-auto group flex items-center justify-center gap-2"
            >
              Get Estimate
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
