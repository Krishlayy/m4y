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
  { name: "Krishlay", role: "Tech & AI" },
  { name: "Ayushman", role: "Engineering" },
  { name: "Arpit", role: "Strategy" },
  { name: "Priyanshu", role: "Performance" },
  { name: "Bhavya", role: "Influencer" },
];

export default function HeroSection() {
  const { scrollY } = useScroll();
  const yParallax = useTransform(scrollY, [0, 1000], [0, 200]);
  const opacityParallax = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-24 md:py-32 bg-white text-black border-b-4 border-black">

      {/* Infinite Brutalist Marquee Background */}
      <div className="absolute inset-0 z-0 flex flex-col justify-center overflow-hidden opacity-5 pointer-events-none rotate-[-10deg] scale-150">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 15, repeat: Infinity }}
          className="whitespace-nowrap font-black text-[15vw] leading-none text-black tracking-tighter"
        >
          M4Y — MARKETING 4 YOU • M4Y — MARKETING 4 YOU • M4Y — MARKETING 4 YOU •
        </motion.div>
        <motion.div
          animate={{ x: ["-50%", "0%"] }}
          transition={{ ease: "linear", duration: 20, repeat: Infinity }}
          className="whitespace-nowrap font-black text-[15vw] leading-none tracking-tighter mt-4"
          style={{ WebkitTextStroke: "2px black", color: "transparent" }}
        >
          CREATORS & CONSULTANTS • CREATORS & CONSULTANTS • CREATORS & CONSULTANTS •
        </motion.div>
      </div>

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

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <motion.div
          className="text-center"
          style={{ y: yParallax, opacity: opacityParallax }}
        >
          {/* Founding Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-5 py-2 border-4 border-black bg-[#FF3B00] text-white font-black uppercase text-sm tracking-wider shadow-[4px_4px_0px_#000] mb-8"
          >
            <span className="w-2 h-2 bg-white animate-pulse" />
            Now Accepting Founding Clients — Limited Spots
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase leading-[0.9] tracking-tighter mb-8 text-black"
          >
            Your Brand.
            <br />
            <span className="text-black bg-[#FFD700] px-2 py-1 inline-block mt-2 border-4 border-black shadow-[4px_4px_0px_#000]">
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
            className="max-w-2xl mx-auto text-lg md:text-xl text-black font-bold leading-relaxed mb-12"
          >
            5 BTech CS founders who chose marketing over MNCs. We bring engineering precision to every campaign — no fluff, no juniors, just founders doing the work.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20"
          >
            <Link href="/book-call" className="btn-primary w-full sm:w-auto">
              Claim Your Founding Spot
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>

            <Link href="/services" className="btn-accent w-full sm:w-auto">
              <Play className="w-5 h-5 mr-2" fill="currentColor" />
              See What We Do
            </Link>
          </motion.div>

          {/* Founders Strip */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="border-4 border-black shadow-[8px_8px_0px_#000] max-w-4xl mx-auto bg-white"
          >
            <div className="border-b-4 border-black px-6 py-3 bg-black">
              <p className="text-white font-black text-xs uppercase tracking-widest text-center">
                👥 Meet The 5 Founders — BTech CS — No Juniors. No Outsourcing.
              </p>
            </div>
            <div className="grid grid-cols-5 divide-x-4 divide-black">
              {founders.map((f, i) => (
                <div key={i} className="p-4 md:p-6 text-center group hover:bg-[#FF3B00] hover:text-white transition-colors duration-150">
                  <div className="w-10 h-10 md:w-14 md:h-14 border-4 border-black mx-auto mb-3 flex items-center justify-center font-black text-lg md:text-xl bg-[#FFD700] group-hover:bg-white group-hover:text-black transition-colors">
                    {f.name[0]}
                  </div>
                  <p className="font-black text-xs md:text-sm uppercase tracking-wider leading-tight">{f.name}</p>
                  <p className="font-bold text-xs opacity-60 uppercase tracking-wider mt-1 hidden md:block">{f.role}</p>
                </div>
              ))}
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
