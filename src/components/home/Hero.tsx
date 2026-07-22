"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import MagneticButton from "@/components/ui/MagneticButton";
import InteractiveGrid from "@/components/ui/InteractiveGrid";
import DiagonalMarquee from "@/components/ui/DiagonalMarquee";

const testimonials = [
  {
    quote: "M4Y transformed our online presence. Our conversions doubled in just three months.",
    name: "Sarah Jenkins, TechCorp",
  },
  {
    quote: "The boldest and most creative agency we've ever worked with. Pure excellence.",
    name: "Michael Chang, Innovate Inc.",
  },
  {
    quote: "Strategic, fast, and results-driven. They delivered exactly what they promised.",
    name: "Elena Rodriguez, Vibe Studios",
  }
];

export default function Hero() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const targetRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"]
  });
  const yParallax = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const skewParallax = useTransform(scrollYProgress, [0, 1], [0, -15]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section ref={targetRef} className="relative w-full min-h-[90vh] flex items-center bg-[#D0E5FF] overflow-hidden py-24 md:py-32">
      <InteractiveGrid />
      <DiagonalMarquee />
      <div className="relative z-10 w-full px-6 md:px-12 lg:px-24 pointer-events-none flex flex-col lg:flex-row items-center gap-12">
        
        {/* Headline */}
        <div className="flex-1">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            style={{ y: yParallax, skewY: skewParallax }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-[#0A0A0A] leading-[1.05] tracking-tight pointer-events-none"
          >
            We are M4Y, <br className="hidden md:block"/>
            digital <span className="text-[#FF3B00]">marketing</span> <br className="hidden md:block"/>
            creators & consultants
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="mt-10 flex flex-wrap gap-4 pointer-events-auto"
          >
            <MagneticButton>
              <Link href="/book-call" className="btn-primary text-xl">Book a Call</Link>
            </MagneticButton>
            <MagneticButton>
              <Link href="/contact" className="btn-outline text-xl">Get in Touch</Link>
            </MagneticButton>
          </motion.div>
        </div>

        {/* Testimonial Carousel */}
        <div className="w-full lg:w-[450px] shrink-0 relative h-[280px] flex items-center justify-center lg:justify-end pointer-events-auto">
          <div className="absolute top-0 right-0 text-[#F4F4F5] text-9xl font-serif leading-none -z-10 select-none">"</div>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="w-full bg-white/80 backdrop-blur-sm p-8 border border-[#E4E4E7] shadow-sm relative"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-[#FF3B00]"></div>
              <p className="text-xl md:text-2xl font-medium text-[#0A0A0A] mb-6 leading-tight">
                "{testimonials[currentTestimonial].quote}"
              </p>
              <p className="text-sm font-bold text-[#FF3B00] uppercase tracking-wider">
                — {testimonials[currentTestimonial].name}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
