"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Play,
  Zap,
  BarChart3,
  TrendingUp,
  Target,
  Users,
  Star,
  Code2,
} from "lucide-react";

const floatingIcons = [
  { icon: BarChart3, x: "10%", y: "20%", delay: 0 },
  { icon: TrendingUp, x: "85%", y: "15%", delay: 1 },
  { icon: Target, x: "80%", y: "70%", delay: 2 },
  { icon: Zap, x: "5%", y: "75%", delay: 3 },
  { icon: Star, x: "50%", y: "8%", delay: 1.5 },
  { icon: Code2, x: "15%", y: "55%", delay: 2.5 },
];

const founders = [
  { name: "Kishalay", role: "Tech & AI", avatar: "/founder-krishlay.png" },
  { name: "Ayushman", role: "Engineering & Growth", avatar: "/founder-ayushman.png" },
];

import AnimatedTextBackground from "@/components/ui/AnimatedTextBackground";

export default function HeroSection() {
  const { scrollY } = useScroll();
  const yParallax = useTransform(scrollY, [0, 1000], [0, 200]);
  const opacityParallax = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 md:py-32 bg-white text-black border-b-4 border-black">

      {/* Dynamic Animated Text Background */}
      <AnimatedTextBackground />

      {/* Floating icons */}
      {floatingIcons.map((item, i) => (
        <motion.div
          key={i}
          className="absolute hidden md:block text-black opacity-10"
          style={{ left: item.x, top: item.y }}
          animate={{ y: [0, -20, 0], rotate: [0, 10, -10, 0] }}
          transition={{ duration: 5 + i, repeat: Infinity, delay: item.delay, ease: "easeInOut" }}
        >
          <item.icon className="w-8 h-8" />
        </motion.div>
      ))}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-32 pb-16">
        <motion.div
          className="text-center"
          style={{ y: yParallax, opacity: opacityParallax }}
        >
          {/* Founding Badge with High-Status Positioning */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 border-4 border-black bg-[#FF5500] text-white font-black uppercase text-xs sm:text-sm tracking-wider shadow-[4px_4px_0px_#000] mb-6 sm:mb-8"
          >
            <span className="w-2 h-2 bg-[#FFD700] animate-ping" />
            ⚡ Engineering Precision • Creative Fire • Exclusive Q3 Roster
          </motion.div>

          {/* Main Heading: White + Orange + Black + Yellow */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase leading-[0.95] tracking-tighter mb-6 sm:mb-8 text-white"
          >
            Your Brand.
            <br />
            <span className="text-black bg-[#FFD700] px-3 sm:px-4 py-1 inline-block mt-2 border-4 border-black shadow-[4px_4px_0px_#FF5500]">
              Built Right.
            </span>
            <br />
            <span className="mt-2 inline-block">From Day One.</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-white font-bold leading-relaxed mb-10 sm:mb-12 drop-shadow-md bg-black/50 backdrop-blur-sm p-4 sm:p-5 border-2 border-white/20"
          >
            Two software engineers building the next generation of marketing. We combine custom AI automation, high-converting platforms, and aggressive growth campaigns — zero junior account managers, zero corporate red tape.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-16 sm:mb-20 w-full max-w-md sm:max-w-none mx-auto"
          >
            <Link href="/book-call" className="btn-primary w-full sm:w-auto text-center justify-center">
              Claim Your Founding Spot
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>

            <Link href="/services" className="btn-accent w-full sm:w-auto text-center justify-center">
              <Play className="w-5 h-5 mr-2" fill="currentColor" />
              See What We Do
            </Link>
          </motion.div>

          {/* Founders Strip */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="border-4 border-black shadow-[8px_8px_0px_#000] max-w-xl mx-auto bg-white"
          >
            <div className="border-b-4 border-black px-4 sm:px-6 py-2.5 bg-black">
              <p className="text-white font-black text-xs uppercase tracking-widest text-center">
                👥 Meet Kishalay & Ayushman — Technical Founders • Direct Execution
              </p>
            </div>
            <div className="grid grid-cols-2 divide-x-4 divide-black">
              {founders.map((f, i) => (
                <div key={i} className="p-4 sm:p-6 text-center group hover:bg-[#FFD700] transition-colors duration-150 flex flex-col items-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 border-4 border-black rounded-full overflow-hidden mx-auto mb-3 bg-white shadow-[3px_3px_0px_#000]">
                    <img src={f.avatar} alt={f.name} className="w-full h-full object-cover" />
                  </div>
                  <p className="font-black text-sm sm:text-base uppercase tracking-wider leading-tight text-black">{f.name}</p>
                  <p className="font-bold text-[11px] sm:text-xs bg-black text-white px-2 py-0.5 mt-1">{f.role}</p>
                </div>
              ))}
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
