"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/Shared";
import { Star, Quote } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import { useState } from "react";

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const displayTestimonials = testimonials.slice(0, 6);

  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[150px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="♥ Client Love"
          title="Trusted by Founders,"
          titleHighlight="Loved by Teams"
          description="Don't take our word for it. Here's what our clients have to say about working with M4Y."
        />

        {/* Featured Testimonial */}
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto mb-16"
        >
          <div className="glass-card p-8 md:p-12 rounded-3xl text-center relative">
            <Quote className="w-10 h-10 text-primary/30 mx-auto mb-6" />
            <p className="text-xl md:text-2xl font-medium leading-relaxed text-white/80 mb-8">
              &ldquo;{testimonials[activeIndex].quote}&rdquo;
            </p>
            <div className="flex items-center justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 text-accent-yellow fill-accent-yellow"
                />
              ))}
            </div>
            <div>
              <p className="font-semibold text-white">
                {testimonials[activeIndex].name}
              </p>
              <p className="text-sm text-white/40">
                {testimonials[activeIndex].role},{" "}
                {testimonials[activeIndex].company}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Testimonial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {displayTestimonials.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              onClick={() => setActiveIndex(i)}
              className={`glass-card p-6 rounded-2xl cursor-pointer transition-all duration-300 ${
                activeIndex === i
                  ? "border-primary/30 bg-primary/[0.04]"
                  : ""
              }`}
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star
                    key={j}
                    className="w-3.5 h-3.5 text-accent-yellow fill-accent-yellow"
                  />
                ))}
              </div>
              <p className="text-sm text-white/60 leading-relaxed mb-4 line-clamp-3">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-sm">
                  {t.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <p className="text-sm font-medium text-white">{t.name}</p>
                  <p className="text-xs text-white/40">{t.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
