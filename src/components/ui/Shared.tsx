"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

// ===== AnimatedCounter =====
interface AnimatedCounterProps {
  end: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  label: string;
}

export function AnimatedCounter({
  end,
  suffix = "",
  prefix = "",
  duration = 2.5,
  label,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let startTime: number;
    let animationFrame: number;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeOut * end));
      if (progress < 1) animationFrame = requestAnimationFrame(animate);
    };
    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, end, duration]);

  return (
    <div ref={ref} className="text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        <div className="text-3xl sm:text-4xl md:text-5xl font-black text-black mb-1">
          {prefix}{count.toLocaleString()}{suffix}
        </div>
        <div className="text-xs font-black text-black/50 uppercase tracking-widest">
          {label}
        </div>
      </motion.div>
    </div>
  );
}

// ===== SectionHeading =====
export interface SectionHeadingProps {
  badge?: string;
  title: string;
  titleHighlight?: string;
  description?: string;
  subtitle?: string;
  center?: boolean;
}

export function SectionHeading({
  badge,
  title,
  titleHighlight,
  description,
  subtitle,
  center = true,
}: SectionHeadingProps) {
  const desc = description || subtitle;
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref} className={`max-w-3xl ${center ? "mx-auto text-center" : ""} mb-16`}>
      {badge && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 border-4 border-black bg-[#FFD700] text-black text-sm font-black uppercase tracking-wider shadow-[4px_4px_0_#000] mb-6"
        >
          {badge}
        </motion.div>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-[0.9] mb-6 text-black"
      >
        {title}{" "}
        {titleHighlight && (
          <span className="text-white bg-[#FF3B00] px-2 py-1 border-4 border-black shadow-[4px_4px_0_#000] inline-block">
            {titleHighlight}
          </span>
        )}
      </motion.h2>
      {desc && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg font-bold text-black/70 leading-relaxed"
        >
          {desc}
        </motion.p>
      )}
    </div>
  );
}

// ===== Marquee =====
interface MarqueeProps {
  children: React.ReactNode;
  speed?: number;
  direction?: "left" | "right";
}

export function Marquee({ children, direction = "left" }: MarqueeProps) {
  return (
    <div className="overflow-hidden">
      <motion.div
        className="flex gap-8"
        animate={{ x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        {children}
        {children}
      </motion.div>
    </div>
  );
}
