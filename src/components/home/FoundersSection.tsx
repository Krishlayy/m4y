"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";

const founders = [
  {
    initial: "K",
    name: "Kishalay Sharma",
    role: "Co-Founder & Tech Lead",
    bio: "Specializing in AI automation, programmatic growth engines, and high-performance web architecture, Kishalay builds the technical infrastructure that gives M4Y partner brands an unfair advantage in saturated markets.",
    color: "bg-white",
    textColor: "text-black",
    badgeBg: "bg-[#FF5500] text-white",
    borderColor: "border-black",
    shadow: "shadow-[8px_8px_0_0_#FF5500]",
    linkedin: "https://www.linkedin.com/in/kishalay-sharma-35752b223/",
    avatar: "/founder-krishlay.png",
  },
  {
    initial: "A",
    name: "Ayushman Singh",
    role: "Co-Founder & Growth Engineer",
    bio: "Combining deep backend engineering with rigorous performance marketing, Ayushman builds precision tracking pipelines, conversion systems, and paid acquisition loops that turn ad spend into predictable revenue.",
    color: "bg-[#FFD700]",
    textColor: "text-black",
    badgeBg: "bg-black text-white",
    borderColor: "border-black",
    shadow: "shadow-[8px_8px_0_0_#000]",
    linkedin: "https://www.linkedin.com/in/ayushmansingh21/",
    avatar: "/founder-ayushman.png",
  },
];

export default function FoundersSection() {
  return (
    <section className="bg-black text-white border-t-4 border-black py-20 md:py-36">
      <div className="w-full px-5 sm:px-8 md:px-16 lg:px-28 xl:px-40">

        {/* Heading & High-Status Positioning */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-14 md:mb-20">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FF5500] text-white font-black text-xs uppercase tracking-widest border-2 border-white mb-4">
              🔥 The Tech-First Marketing Agency • Elite Execution
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.95] text-white">
              2 Founders.<br />
              <span className="text-black bg-[#FFD700] px-3 py-1 border-4 border-white inline-block mt-2">
                Zero Interns.
              </span>
            </h2>
          </div>
          <p className="text-base sm:text-lg md:text-xl font-bold text-white/70 max-w-lg leading-relaxed">
            We realized traditional agencies are broken: bloated account management, slow turnarounds, and zero technical depth. We built M4Y to bring engineering discipline and high-velocity creative testing directly to ambitious brands.
          </p>
        </div>

        {/* Founders Grid - High Impact Neo-Brutalist Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {founders.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              whileHover={{ y: -6, transition: { type: "spring", stiffness: 300 } }}
              className={`${f.color} ${f.textColor} p-6 sm:p-8 md:p-10 border-4 ${f.borderColor} ${f.shadow} flex flex-col group relative overflow-hidden`}
            >
              {/* Big Initial Background */}
              <div className="text-8xl sm:text-9xl font-black leading-none opacity-10 absolute top-2 right-4 select-none pointer-events-none text-black">
                {f.initial}
              </div>

              {/* Avatar + Name */}
              <div className="flex items-center gap-5 sm:gap-6 mb-6 relative z-10">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-4 border-black overflow-hidden bg-white shadow-[4px_4px_0_0_#000] shrink-0">
                  <img src={f.avatar} alt={f.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <span className={`inline-block font-black text-xs uppercase tracking-wider px-3 py-1 ${f.badgeBg} border-2 border-black mb-2 shadow-[2px_2px_0_0_#000]`}>
                    {f.role}
                  </span>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight text-black">
                    {f.name}
                  </h3>
                </div>
              </div>

              <p className="text-sm sm:text-base font-bold leading-relaxed text-black/80 mb-8 relative z-10 flex-grow">
                {f.bio}
              </p>

              <a
                href={f.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-black text-xs sm:text-sm uppercase tracking-wider bg-black text-white px-4 py-2 border-2 border-black hover:bg-[#FF5500] hover:text-white transition-colors relative z-10 w-fit shadow-[3px_3px_0_0_#000] active:translate-x-0.5 active:translate-y-0.5"
              >
                <ExternalLink className="w-4 h-4" />
                Connect on LinkedIn ↗
              </a>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 md:mt-16 flex flex-col md:flex-row items-center justify-between gap-6 border-4 border-white p-6 sm:p-8 bg-[#FF5500] text-white shadow-[8px_8px_0_0_#FFD700] max-w-5xl mx-auto"
        >
          <div className="text-center md:text-left">
            <p className="text-xl sm:text-2xl font-black uppercase tracking-tight">
              Work Directly With Kishalay & Ayushman.
            </p>
            <p className="text-sm sm:text-base font-bold text-white/90 mt-1">
              No account managers. No junior handoffs. Direct founder attention.
            </p>
          </div>
          <Link href="/book-call" className="btn-accent shrink-0 group w-full md:w-auto text-center justify-center">
            Book a Call With Us
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
