"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, BarChart, Zap, Code, Shield } from "lucide-react";
import { useHaptic } from "@/hooks/useHaptic";

const mockServices = [
  {
    id: "ai",
    title: "AI Automation",
    desc: "Custom bots and workflows saving you 100+ hours.",
    icon: <Zap className="w-8 h-8 text-[#FF3B00]" />,
    bg: "bg-black",
    text: "text-white",
  },
  {
    id: "marketing",
    title: "Performance",
    desc: "Scaling revenue with hyper-targeted Meta & Google Ads.",
    icon: <BarChart className="w-8 h-8 text-black" />,
    bg: "bg-[#FFD700]",
    text: "text-black",
  },
  {
    id: "web",
    title: "Web & Mobile",
    desc: "High-performance brutalist sites that print money.",
    icon: <Code className="w-8 h-8 text-black" />,
    bg: "bg-white",
    text: "text-black",
  },
  {
    id: "brand",
    title: "Brand Armor",
    desc: "Protecting and elevating your digital reputation.",
    icon: <Shield className="w-8 h-8 text-black" />,
    bg: "bg-[#FF3B00]",
    text: "text-white",
  },
];

export default function MobileServiceCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const triggerHaptic = useHaptic();
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="md:hidden py-16 bg-white border-t-4 border-b-4 border-black overflow-hidden relative">
      <div className="px-6 mb-8">
        <h2 className="text-4xl font-black uppercase tracking-tighter leading-none mb-2 text-black">Our Arsenal</h2>
        <p className="font-black text-black/50 uppercase text-xs tracking-widest">← Drag to explore →</p>
      </div>

      {/* Draggable container */}
      <motion.div
        ref={containerRef}
        className="cursor-grab active:cursor-grabbing w-full overflow-hidden"
      >
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -((mockServices.length * 300) - (windowWidth || 400) + 48) }}
          className="flex gap-4 px-6"
          onDragStart={() => triggerHaptic("light")}
          onDragEnd={() => triggerHaptic("medium")}
        >
          {mockServices.map((service) => (
            <div
              key={service.id}
              className={`min-w-[270px] p-8 border-4 border-black shadow-[6px_6px_0px_#000] flex flex-col justify-between ${service.bg} ${service.text}`}
            >
              <div>
                {/* Square icon box — NO rounded-full */}
                <div className="w-16 h-16 border-4 border-current flex items-center justify-center mb-6 bg-white shadow-[2px_2px_0px_currentColor]">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-black uppercase tracking-tight mb-3 leading-none">
                  {service.title}
                </h3>
                <p className="font-bold text-sm opacity-80 leading-relaxed mb-8">
                  {service.desc}
                </p>
              </div>

              <Link
                href={`/services/${service.id}`}
                className="flex items-center gap-2 font-black uppercase text-sm group w-max border-b-4 border-current pb-1 hover:gap-4 transition-all"
              >
                Explore
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
