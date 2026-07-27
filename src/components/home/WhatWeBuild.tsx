"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";
import Link from "next/link";

const campaigns = [
  {
    industry: "🍕 Restaurant in Delhi",
    challenge: "Local restaurant, zero online presence, losing to Zomato ads.",
    bg: "bg-[#FF3B00]",
    sectionBg: "#ffe8e0",
    text: "text-white",
    accent: "bg-white text-black",
    steps: [
      { label: "Week 1", action: "Google Business profile audit + 5-star review strategy. Target: 50 new reviews in 30 days." },
      { label: "Week 2", action: "3 Reels per week: behind-the-scenes kitchen, signature dish prep, owner story. Hook = nostalgia + local pride." },
      { label: "Week 3", action: "Run ₹5,000 Meta ad targeting 5km radius, 25-45yo, interest in 'dining out'. Offer: free dessert on first visit." },
      { label: "Month 2", action: "WhatsApp broadcast list of 500+ customers. Weekly special offers. Target: 30% repeat visits." },
    ],
    result: "Target: 3x footfall in 60 days, ₹2L additional monthly revenue.",
  },
  {
    industry: "👗 D2C Fashion Brand",
    challenge: "Good product, bad Instagram, ₹0 in online sales.",
    bg: "bg-[#FFD700]",
    sectionBg: "#fff9d6",
    text: "text-black",
    accent: "bg-black text-white",
    steps: [
      { label: "Week 1", action: "Full brand audit. New colour palette, typography, content tone. Build a Notion content OS with 90-day calendar." },
      { label: "Week 2", action: "Identify 10 micro-influencers (10K-100K) in fashion niche. Barter collab: product for 2 Reels + Stories." },
      { label: "Week 3", action: "Launch Meta funnel: Reel → Product page → Add to cart → Abandoned cart WhatsApp follow-up." },
      { label: "Month 2", action: "Email list building via quiz (\"What's your fashion personality?\"). Target: 1,000 subscribers, 20% open rate." },
    ],
    result: "Target: ₹5L in online sales within 90 days from ₹0.",
  },
  {
    industry: "🏋️ Fitness Coach",
    challenge: "Expert coach, no leads, competing with free YouTube content.",
    bg: "bg-black",
    sectionBg: "#f0f0f0",
    text: "text-white",
    accent: "bg-[#FFD700] text-black",
    steps: [
      { label: "Week 1", action: "Position as 'transformation specialist for working professionals'. Not a fitness coach — an accountability system." },
      { label: "Week 2", action: "Build lead magnet: '7-day meal plan for office workers' PDF. Run ₹3,000 LinkedIn ad targeting IT professionals." },
      { label: "Week 3", action: "AI WhatsApp bot for lead qualification. Filters serious buyers from time-wasters automatically, 24/7." },
      { label: "Month 2", action: "YouTube Shorts repurposing: 60 seconds of value daily. Goal: 1,000 subscribers in 30 days for algorithm boost." },
    ],
    result: "Target: 15 high-ticket clients at ₹15,000/month within 60 days.",
  },
];

export default function WhatWeBuild() {
  const [active, setActive] = useState(0);
  const [openStep, setOpenStep] = useState<number | null>(0);
  const c = campaigns[active];

  return (
    <motion.section 
      animate={{ backgroundColor: c.sectionBg || "#ffffff" }}
      transition={{ duration: 0.5 }}
      className="border-t-4 border-black py-32 md:py-40 transition-colors"
    >
      <div className="w-full px-6 md:px-16 lg:px-32 xl:px-40">

        {/* Heading */}
        <div className="mb-16">
          <p className="font-black text-xs uppercase tracking-widest text-black/40 mb-4">
            Our Thinking — Before You Even Brief Us
          </p>
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9] mb-6">
            What We&apos;d<br />
            <span className="text-white bg-black px-3 py-1 border-4 border-black inline-block mt-2">
              Build For You.
            </span>
          </h2>
          <p className="text-xl font-bold text-black/60 max-w-2xl">
            No past clients to show yet — so here&apos;s our thinking instead. Pick an industry and see exactly how M4Y would approach your growth.
          </p>
        </div>

        {/* Industry Tabs */}
        <div className="flex flex-wrap gap-2 mb-12 border-b-4 border-black pb-6">
          {campaigns.map((c, i) => (
            <button
              key={i}
              onClick={() => { setActive(i); setOpenStep(0); }}
              className={`px-6 py-3 font-black text-sm uppercase tracking-wider border-4 border-black transition-all duration-150 ${
                active === i
                  ? "bg-black text-white shadow-none translate-x-[2px] translate-y-[2px]"
                  : "bg-white text-black shadow-[4px_4px_0_#000] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[6px_6px_0_#000]"
              }`}
            >
              {c.industry}
            </button>
          ))}
        </div>

        {/* Active Campaign */}
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {/* Left — Challenge + Result */}
          <div className={`${c.bg} ${c.text} border-4 border-black shadow-[8px_8px_0_#000] p-10 flex flex-col justify-between`}>
            <div>
              <p className={`font-black text-xs uppercase tracking-widest mb-3 ${c.text === 'text-white' ? 'opacity-50' : 'opacity-40'}`}>
                The Challenge
              </p>
              <p className="text-2xl md:text-3xl font-black leading-tight mb-12">
                &ldquo;{c.challenge}&rdquo;
              </p>
            </div>
            <div className={`${c.accent} border-4 border-current p-6`}>
              <p className="font-black text-xs uppercase tracking-widest mb-2 opacity-60">Our Target</p>
              <p className="font-black text-xl">{c.result}</p>
            </div>
          </div>

          {/* Right — Step-by-step plan */}
          <div className="border-4 border-black shadow-[8px_8px_0_#000] overflow-hidden">
            <div className="bg-black px-8 py-4">
              <p className="text-white font-black text-xs uppercase tracking-widest">
                M4Y 60-Day Gameplan
              </p>
            </div>
            <div className="divide-y-4 divide-black">
              {c.steps.map((step, i) => (
                <div key={i}>
                  <button
                    onClick={() => setOpenStep(openStep === i ? null : i)}
                    className="w-full text-left px-8 py-5 flex items-center justify-between hover:bg-[#FFD700] transition-colors duration-150 group"
                  >
                    <div className="flex items-center gap-4">
                      <span className="font-black text-xs uppercase tracking-widest text-black/40 w-14">{step.label}</span>
                      <span className="font-black text-base uppercase tracking-tight">Step {i + 1}</span>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 transition-transform duration-200 ${openStep === i ? "rotate-180" : ""}`}
                    />
                  </button>
                  {openStep === i && (
                    <div className="px-8 pb-6 pt-2 font-bold text-black/70 leading-relaxed bg-white border-t-4 border-black">
                      {step.action}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <div className="mt-12 flex flex-col sm:flex-row items-center gap-4 justify-between border-4 border-black p-8 bg-white shadow-[8px_8px_0_#000]">
          <p className="font-black text-xl uppercase tracking-tight">
            Want this done for your brand?
          </p>
          <Link href="/book-call" className="btn-primary group shrink-0">
            Get Your Free Gameplan
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>
    </motion.section>
  );
}
