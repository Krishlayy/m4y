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
  },
  {
    initial: "A",
    name: "Ayushman",
    role: "Engineering",
    bio: "Builds the tech stack — dashboards, integrations, custom tools. Makes complex data feel simple and actionable for every client.",
    color: "bg-black",
    textColor: "text-white",
    linkedin: "https://linkedin.com/in/marketing4you",
  },
  {
    initial: "A",
    name: "Arpit",
    role: "Brand & Strategy",
    bio: "Crafts the positioning and brand identity that makes businesses impossible to ignore. Turns vague ideas into razor-sharp brand stories.",
    color: "bg-[#FFD700]",
    textColor: "text-black",
    linkedin: "https://linkedin.com/in/marketing4you",
  },
  {
    initial: "P",
    name: "Priyanshu",
    role: "Performance Marketing",
    bio: "Runs the paid media engine. Meta, Google, LinkedIn — obsessively optimises until every rupee is working harder than the last.",
    color: "bg-white",
    textColor: "text-black",
    linkedin: "https://linkedin.com/in/marketing4you",
  },
  {
    initial: "B",
    name: "Bhavya",
    role: "Influencer & Content",
    bio: "Connects brands with the right creators and builds content calendars that keep audiences hooked. Knows what goes viral before it does.",
    color: "bg-[#0044FF]",
    textColor: "text-white",
    linkedin: "https://linkedin.com/in/marketing4you",
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
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9] text-white">
              5 Founders.<br />
              <span className="text-black bg-[#FFD700] px-3 py-1 border-4 border-white inline-block mt-2">
                Zero Interns.
              </span>
            </h2>
          </div>
          <p className="text-xl font-bold text-white/50 max-w-sm">
            BTech CS. Chose marketing over MNCs. You get all 5 of us working on your brand — not a junior with a checklist.
          </p>
        </div>

        {/* Founders Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-1 border-4 border-white bg-white">
          {founders.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`${f.color} ${f.textColor} p-8 flex flex-col group relative overflow-hidden border-r border-white/20 last:border-r-0 hover:-translate-y-2 hover:shadow-[0_8px_0_0_white] transition-all duration-150`}
            >
              {/* Big Initial */}
              <div className={`text-8xl font-black leading-none mb-6 opacity-10 absolute top-4 right-4 select-none`}>
                {f.initial}
              </div>

              {/* Avatar Placeholder */}
              <div className={`w-20 h-20 border-4 ${f.textColor === 'text-white' ? 'border-white' : 'border-black'} overflow-hidden mb-6 relative z-10 ${f.textColor === 'text-white' ? 'bg-white/20' : 'bg-black/10'}`}>
                {/* Replace with actual founder image */}
                <img src="/placeholder-avatar.png" alt={f.name} className="w-full h-full object-cover mix-blend-luminosity opacity-80 group-hover:opacity-100 group-hover:mix-blend-normal transition-all" />
              </div>

              <div className="relative z-10 flex-1">
                <p className={`font-black text-xs uppercase tracking-widest mb-1 ${f.textColor === 'text-white' ? 'opacity-60' : 'opacity-50'}`}>
                  {f.role}
                </p>
                <h3 className="text-3xl font-black uppercase tracking-tight mb-4">
                  {f.name}
                </h3>
                <p className={`text-sm font-bold leading-relaxed ${f.textColor === 'text-white' ? 'opacity-70' : 'opacity-60'}`}>
                  {f.bio}
                </p>
              </div>

              <a
                href={f.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-8 flex items-center gap-2 font-black text-xs uppercase tracking-wider ${f.textColor === 'text-white' ? 'opacity-50 hover:opacity-100' : 'opacity-40 hover:opacity-100'} transition-opacity group/link w-fit relative z-10`}
              >
                <ExternalLink className="w-4 h-4" />
                LinkedIn ↗
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
          className="mt-16 flex flex-col md:flex-row items-center justify-between gap-6 border-4 border-white p-8 shadow-[8px_8px_0_0_#FF3B00]"
        >
          <p className="text-2xl font-black uppercase tracking-tight text-center md:text-left">
            Work directly with all 5 of us. No middlemen.
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
