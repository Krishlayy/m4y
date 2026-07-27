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
} from "lucide-react";
} from "lucide-react";
import { AnimatedCounter } from "@/components/ui/Shared";
const floatingIcons = [
  { icon: BarChart3, x: "10%", y: "20%", delay: 0, color: "text-primary" },
  { icon: TrendingUp, x: "85%", y: "15%", delay: 1, color: "text-accent-green" },
  { icon: Target, x: "80%", y: "70%", delay: 2, color: "text-secondary" },
  { icon: Zap, x: "5%", y: "75%", delay: 3, color: "text-accent-yellow" },
  { icon: Star, x: "50%", y: "8%", delay: 1.5, color: "text-accent-cyan" },
  { icon: Users, x: "15%", y: "55%", delay: 2.5, color: "text-primary-light" },
];

const stats = [
  { end: 500, suffix: "+", label: "Campaigns" },
  { end: 150, suffix: "+", label: "Brands" },
  { end: 2, suffix: "B+", label: "Views Generated" },
  { end: 500, suffix: "M+", label: "Reach" },
  { end: 98, suffix: "%", label: "Client Satisfaction" },
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
          WE SCALE BRANDS • WE SCALE BRANDS • WE SCALE BRANDS • WE SCALE BRANDS •
        </motion.div>
        <motion.div
          animate={{ x: ["-50%", "0%"] }}
          transition={{ ease: "linear", duration: 20, repeat: Infinity }}
          className="whitespace-nowrap font-black text-[15vw] leading-none text-transparent border-text tracking-tighter mt-4"
          style={{ WebkitTextStroke: "2px black" }}
        >
          NOT JUST AN AGENCY • NOT JUST AN AGENCY • NOT JUST AN AGENCY • NOT JUST AN AGENCY •
        </motion.div>
      </div>

      {/* Floating marketing icons */}
      {floatingIcons.map((item, i) => (
        <motion.div
          key={i}
          className={`absolute hidden md:block ${item.color} opacity-20`}
          style={{ left: item.x, top: item.y }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, -10, 0],
            opacity: [0.15, 0.3, 0.15],
          }}
          transition={{
            duration: 5 + i,
            repeat: Infinity,
            delay: item.delay,
            ease: "easeInOut",
          }}
        >
          <item.icon className="w-8 h-8" />
        </motion.div>
      ))}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <motion.div 
          className="text-center"
          style={{ y: yParallax, opacity: opacityParallax }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-5 py-2 border-4 border-black bg-[#FF3B00] text-white font-black uppercase text-sm tracking-wider shadow-[4px_4px_0px_#000] mb-8"
          >
            <span className="w-2 h-2 bg-white animate-pulse" />
            Not another agency. A growth partner.
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="hero-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase leading-[0.9] tracking-tighter mb-8 text-black"
          >
            Marketing That
            <br />
            <span className="text-[#0044FF] bg-[#FFD700] px-2 py-1 inline-block mt-2 border-4 border-black shadow-[4px_4px_0px_#000]">Actually Moves</span>
            <br />
            <span className="mt-2 inline-block">Businesses.</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="max-w-2xl mx-auto text-lg md:text-xl text-black font-bold leading-relaxed mb-12"
          >
            We combine creativity, technology, AI, influencer power, branding
            and performance marketing to help businesses dominate their
            industry.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20"
          >
            <Link href="/book-call" className="btn-primary w-full sm:w-auto">
              Book Free Strategy Call
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>

            <Link href="/services" className="btn-accent w-full sm:w-auto">
              <Play className="w-5 h-5 mr-2" fill="currentColor" />
              View Services
            </Link>
          </motion.div>

          {/* Animated Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative"
          >
            <div className="modern-card max-w-5xl mx-auto">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 md:gap-8">
                {stats.map((stat, i) => (
                  <div key={i}>
                    <AnimatedCounter
                      end={stat.end}
                      suffix={stat.suffix}
                      label={stat.label}
                      duration={2 + i * 0.3}
                    />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Removed bottom gradient fade for brutalist hard stop */}
    </section>
  );
}
