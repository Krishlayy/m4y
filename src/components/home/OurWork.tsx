"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Flag } from "lucide-react";

const categories = ["All", "#SEO", "#PaidMedia", "#BrandDesign", "#WebDev"];

const projects = [
  { id: 1, title: "TechCorp Global Search Redux", tag: "#SEO", flag: "United States" },
  { id: 2, title: "Innovate Inc. Brand Identity", tag: "#BrandDesign", flag: "United Kingdom" },
  { id: 3, title: "Vibe Studios Ad Campaigns", tag: "#PaidMedia", flag: "Canada" },
  { id: 4, title: "EcoStore E-commerce Platform", tag: "#WebDev", flag: "Australia" },
  { id: 5, title: "LocalBank Lead Generation", tag: "#PaidMedia", flag: "Germany" },
  { id: 6, title: "HealthPlus Organic Traffic Growth", tag: "#SEO", flag: "Sweden" },
];

export default function OurWork() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [visibleCount, setVisibleCount] = useState(4);

  const filteredProjects = projects.filter(
    (p) => activeFilter === "All" || p.tag === activeFilter
  );

  const displayedProjects = filteredProjects.slice(0, visibleCount);

  return (
    <section id="work" className="w-full bg-[#FFFFFF] py-24 md:py-32">
      <div className="w-full px-6 md:px-12 lg:px-24">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black mb-6 text-[#0A0A0A]"
          >
            Our Work
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-[#27272A] font-medium leading-relaxed"
          >
            We go beyond discussing great campaigns — we create them with our clients.
          </motion.p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveFilter(cat);
                setVisibleCount(4); // reset count on filter change
              }}
              className={`px-5 py-2.5 text-sm font-bold border transition-colors ${
                activeFilter === cat 
                  ? "bg-[#0A0A0A] text-white border-[#0A0A0A]" 
                  : "bg-transparent text-[#0A0A0A] border-[#E4E4E7] hover:border-[#0A0A0A]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {displayedProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="modern-card group cursor-pointer flex flex-col h-full"
              >
                {/* Image Placeholder */}
                <div className="w-full aspect-[4/3] bg-[#F4F4F5] mb-6 relative overflow-hidden flex items-center justify-center">
                  <div className="absolute inset-0 bg-[#FF3B00]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                  <span className="text-[#A1A1AA] font-mono text-sm">Project Visual</span>
                </div>

                <div className="flex-grow">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold text-[#FF3B00] px-3 py-1 bg-[#FF3B00]/10 border border-[#FF3B00]/20">
                      {project.tag}
                    </span>
                    <div className="flex items-center text-xs text-[#71717A] font-medium gap-1.5">
                      <Flag size={14} className="text-[#0A0A0A]" />
                      {project.flag}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-[#0A0A0A] group-hover:text-[#FF3B00] transition-colors">
                    {project.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Show More */}
        {filteredProjects.length > visibleCount && (
          <div className="mt-16 text-center">
            <button 
              onClick={() => setVisibleCount(prev => prev + 4)}
              className="btn-outline group"
            >
              Show More
              <ArrowRight className="ml-2 w-4 h-4 inline-block group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
