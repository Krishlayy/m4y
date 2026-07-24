"use client";

import { motion } from "framer-motion";
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
import AuroraBackground from "@/components/ui/AuroraBackground";
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
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-24 md:py-32">
      <AuroraBackground />

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
        <div className="text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/[0.04] border border-white/[0.08] text-sm font-medium text-white/70 mb-8 backdrop-blur-sm"
          >
            <span className="w-2 h-2 rounded-full bg-accent-green animate-pulse" />
            Not another agency. A growth partner.
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="hero-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold leading-[1.05] tracking-tight mb-8"
          >
            Marketing That
            <br />
            <span className="text-gradient">Actually Moves</span>
            <br />
            Businesses.
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="max-w-2xl mx-auto text-lg md:text-xl text-white/50 leading-relaxed mb-12"
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
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20"
          >
            <Link
              href="/book-call"
              className="group relative inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-primary to-primary-light text-white font-semibold text-lg overflow-hidden hover:shadow-2xl hover:shadow-primary/30 hover:-translate-y-1 transition-all duration-300"
            >
              <span className="relative z-10 flex items-center gap-2">
                Book Free Strategy Call
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary-light to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>

            <Link
              href="/services"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-2xl border border-white/10 text-white font-semibold text-lg hover:bg-white/[0.04] hover:border-white/20 transition-all duration-300"
            >
              <Play className="w-5 h-5 text-primary" />
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
            <div className="glass-card p-6 md:p-10 rounded-3xl max-w-5xl mx-auto">
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
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark to-transparent" />
    </section>
  );
}
