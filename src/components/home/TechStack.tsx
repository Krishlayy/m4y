"use client";

import { motion } from "framer-motion";

const tools = [
  { name: "Meta Ads", cat: "Paid" },
  { name: "Google Ads", cat: "Paid" },
  { name: "Next.js", cat: "Dev" },
  { name: "n8n", cat: "Automation" },
  { name: "Make", cat: "Automation" },
  { name: "ChatGPT API", cat: "AI" },
  { name: "Gemini API", cat: "AI" },
  { name: "Framer", cat: "Design" },
  { name: "Canva Pro", cat: "Design" },
  { name: "CapCut", cat: "Video" },
  { name: "Klaviyo", cat: "Email" },
  { name: "WhatsApp API", cat: "Messaging" },
  { name: "SEMrush", cat: "SEO" },
  { name: "Ahrefs", cat: "SEO" },
  { name: "Notion", cat: "Ops" },
  { name: "Prisma", cat: "Dev" },
  { name: "Figma", cat: "Design" },
  { name: "Firebase", cat: "Dev" },
  { name: "Python", cat: "Dev" },
  { name: "Supabase", cat: "Dev" },
];

const catColors: Record<string, string> = {
  Paid: "bg-[#FF3B00] text-white",
  Dev: "bg-black text-white",
  Automation: "bg-[#FFD700] text-black",
  AI: "bg-[#0044FF] text-white",
  Design: "bg-white text-black border-2 border-black",
  Video: "bg-black text-[#FFD700]",
  Email: "bg-[#FF3B00] text-white",
  Messaging: "bg-[#FFD700] text-black",
  SEO: "bg-black text-white",
  Ops: "bg-white text-black border-2 border-black",
};

export default function TechStack() {
  return (
    <section className="bg-[#0A0A0A] text-white border-t-4 border-black py-32 md:py-40">
      <div className="w-full px-6 md:px-16 lg:px-32 xl:px-40">

        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-20">
          <div>
            <p className="font-black text-xs uppercase tracking-widest text-white/30 mb-4">
              The CS Advantage
            </p>
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9]">
              Our Weapons<br />
              <span className="text-black bg-[#FFD700] px-3 py-1 border-4 border-white inline-block mt-2">
                Of Choice.
              </span>
            </h2>
          </div>
          <p className="text-xl font-bold text-white/40 max-w-sm">
            Most agencies use 3 tools. We use 20+. The difference shows in your results.
          </p>
        </div>

        {/* Tool Grid */}
        <div className="flex flex-wrap gap-3">
          {tools.map((tool, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.04 }}
              className={`group flex items-center gap-3 px-5 py-3 border-4 border-white/10 hover:border-white hover:-translate-y-1 hover:shadow-[4px_4px_0_white] transition-all duration-150 cursor-default`}
            >
              <span className={`text-xs font-black px-2 py-0.5 uppercase tracking-wider ${catColors[tool.cat] || "bg-white text-black"}`}>
                {tool.cat}
              </span>
              <span className="font-black text-white uppercase tracking-wide text-sm">{tool.name}</span>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-16 border-t-4 border-white/10 pt-12">
          <p className="font-black text-white/30 text-sm uppercase tracking-widest text-center">
            + We build custom tools when off-the-shelf ones aren&apos;t good enough. Because we can.
          </p>
        </div>

      </div>
    </section>
  );
}
