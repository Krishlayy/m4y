"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";

const founders = [
  {
    initial: "K",
    name: "Krishlay",
    role: "Tech & AI",
    bio: "Architects the automation systems and AI pipelines that give M4Y campaigns an unfair edge. If it can be automated, he's already done it.",
    color: "bg-[#FF3B00]",
    textColor: "text-white",
    linkedin: "https://linkedin.com/in/marketing4you",
    avatar: "/founder-krishlay.png",
  },
  {
    initial: "A",
    name: "Ayushman",
    role: "Engineering & Growth",
    bio: "Builds the tech stack — dashboards, integrations, custom tools. Makes complex data feel simple and actionable for every client.",
    color: "bg-black",
    textColor: "text-white",
    linkedin: "https://linkedin.com/in/marketing4you",
    avatar: "/founder-ayushman.png",
  },
];

export default function FoundersSection() {
  return (
    <section className="bg-black text-white border-t-4 border-black py-32 md:py-40">
      <div className="w-full px-6 md:px-16 lg:px-32 xl:px-40">

        {/* Heading */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-20">
          <div>
            <p className="font-black text-xs uppercase tracking-widest text-white/40 mb-4">The Team</p>
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.95] text-white">
              2 Founders.<br />
              <span className="text-black bg-[#FFD700] px-3 py-1 border-4 border-white inline-block mt-2">
                Zero Interns.
              </span>
            </h2>
          </div>
          <p className="text-xl font-bold text-white/60 max-w-md">
            BTech CS. Chose marketing over MNCs. You work directly with both of us — not a junior with a checklist.
          </p>
        </div>

        {/* Founders Grid - 2 High Impact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {founders.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              whileHover={{ y: -6, transition: { type: "spring", stiffness: 300 } }}
              className={`${f.color} ${f.textColor} p-8 md:p-10 border-4 border-white shadow-[8px_8px_0_0_white] flex flex-col group relative overflow-hidden`}
            >
              {/* Big Initial Background */}
              <div className="text-9xl font-black leading-none opacity-10 absolute top-2 right-4 select-none pointer-events-none">
                {f.initial}
              </div>

              {/* Avatar + Name */}
              <div className="flex items-center gap-6 mb-6 relative z-10">
                <div className="w-24 h-24 rounded-full border-4 border-white overflow-hidden bg-white shadow-[4px_4px_0_0_rgba(0,0,0,0.4)] shrink-0">
                  <img src={f.avatar} alt={f.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <span className="inline-block font-black text-xs uppercase tracking-widest px-3 py-1 bg-white text-black mb-2">
                    {f.role}
                  </span>
                  <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tight">
                    {f.name}
                  </h3>
                </div>
              </div>

              <p className="text-base font-medium leading-relaxed opacity-85 mb-8 relative z-10 flex-grow">
                {f.bio}
              </p>

              <a
                href={f.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-black text-xs uppercase tracking-wider text-white/70 hover:text-white transition-colors relative z-10 w-fit"
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
          className="mt-16 flex flex-col md:flex-row items-center justify-between gap-6 border-4 border-white p-8 shadow-[8px_8px_0_0_#FF3B00] max-w-5xl mx-auto"
        >
          <p className="text-2xl font-black uppercase tracking-tight text-center md:text-left">
            Work directly with both of us. No middlemen.
          </p>
          <Link href="/book-call" className="btn-accent shrink-0 group">
            Book a Call With Us
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
