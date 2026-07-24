"use client";

import { motion } from "framer-motion";
import { Marquee } from "@/components/ui/Shared";

const trustedBrands = [
  "TechCorp", "FashionHub", "HealthFirst", "EduPro", "FoodieChain",
  "RealtyKing", "FinanceFlow", "AutoDrive", "LuxeStyle", "StartupX",
  "CloudBase", "GreenEnergy", "MediaMax", "SportsFit", "TravelEase",
];

export default function TrustedBySection() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm uppercase tracking-[0.2em] text-white/30 font-medium"
        >
          Trusted by 150+ brands across industries
        </motion.p>
      </div>

      <Marquee direction="left">
        {trustedBrands.map((brand, i) => (
          <div
            key={`${brand}-${i}`}
            className="flex items-center justify-center px-8 py-4 min-w-[180px]"
          >
            <div className="flex items-center gap-3 text-white/20 hover:text-white/40 transition-all duration-500 group">
              <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center font-bold text-sm group-hover:bg-primary/10 group-hover:border-primary/20 transition-all duration-500">
                {brand.charAt(0)}
              </div>
              <span className="font-semibold text-lg whitespace-nowrap">
                {brand}
              </span>
            </div>
          </div>
        ))}
      </Marquee>
    </section>
  );
}
