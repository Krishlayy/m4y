"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { founders } from "@/data/founders";
import { motion } from "framer-motion";
import { ExternalLink, Flame, ArrowRight } from "lucide-react";
import Link from "next/link";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function FoundersPage() {
  return (
    <div className="min-h-screen bg-white text-black selection:bg-[#FFD700] selection:text-black pt-28 md:pt-36 flex flex-col overflow-x-hidden">
      <Navbar />

      <main className="flex-grow w-full">
        {/* Hero Section */}
        <section className="relative py-16 md:py-24 border-b-4 border-black bg-[#FFD700]">
          <div className="max-w-5xl mx-auto px-5 sm:px-8 text-center flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#FF5500] text-white font-black text-xs sm:text-sm uppercase tracking-widest border-2 border-black mb-6 shadow-[3px_3px_0_#000]">
              <Flame className="w-4 h-4 fill-white" /> Technical Leadership • Unmatched Speed
            </div>

            <div className="w-full mb-8 text-center">
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight leading-none">
                Meet the
              </h1>
              <div className="mt-3 flex justify-center">
                <span className="bg-black text-white px-4 sm:px-6 py-2 border-4 border-black inline-block text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight shadow-[4px_4px_0_#FF5500]">
                  Founders
                </span>
              </div>
            </div>

            <p className="text-lg sm:text-xl md:text-2xl font-bold max-w-3xl w-full mx-auto bg-white p-6 sm:p-8 border-4 border-black shadow-[8px_8px_0_#000] text-black/90 leading-relaxed mt-2">
              Two software engineers who combine deep technical architecture with high-converting creative strategy. We partner with ambitious brands to build predictable, scalable revenue engines.
            </p>
          </div>
        </section>

        {/* Founders Cards Section */}
        <section className="py-16 md:py-24 bg-white border-b-4 border-black">
          <div className="w-full px-5 sm:px-8 max-w-5xl mx-auto">
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 w-full"
            >
              {founders.map((founder, index) => (
                <motion.div key={founder.id || founder.name} variants={itemVariants} className="flex w-full">
                  <div className={`p-6 sm:p-8 border-4 border-black ${index === 0 ? 'bg-white shadow-[8px_8px_0_0_#FF5500]' : 'bg-[#FFD700] shadow-[8px_8px_0_0_#000]'} w-full flex flex-col group relative overflow-hidden`}>
                    
                    <div className="flex items-center gap-5 mb-6 relative z-10">
                      <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-4 border-black overflow-hidden bg-white shadow-[4px_4px_0_0_#000] shrink-0">
                        <img src={founder.avatar} alt={founder.name} className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <span className="inline-block px-2.5 py-1 border-2 border-black bg-black text-white text-xs font-black uppercase tracking-wider mb-2 shadow-[2px_2px_0_0_#000]">
                          {founder.role}
                        </span>
                        <h3 className="text-2xl sm:text-3xl font-black uppercase text-black leading-tight">
                          {founder.name}
                        </h3>
                        <p className="text-xs font-bold text-black/60 uppercase mt-0.5">{founder.department}</p>
                      </div>
                    </div>
                    
                    <p className="font-bold text-sm sm:text-base leading-relaxed mb-6 flex-grow relative z-10 text-black/85">
                      {founder.bio}
                    </p>
                    
                    <div className="mb-8 relative z-10">
                      <h4 className="text-xs font-black uppercase tracking-wider text-black/60 mb-3">Core Capabilities</h4>
                      <div className="flex flex-wrap gap-2">
                        {founder.skills?.map((skill: string) => (
                          <span key={skill} className="px-2.5 py-1 border-2 border-black bg-white text-black text-xs font-black uppercase shadow-[2px_2px_0_0_#000]">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="pt-6 border-t-2 border-black/20 mt-auto relative z-10 flex items-center justify-between">
                      {founder.socials?.linkedin && (
                        <a 
                          href={founder.socials.linkedin} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="inline-flex items-center gap-2 font-black text-xs sm:text-sm uppercase tracking-wider bg-black text-white px-4 py-2 border-2 border-black hover:bg-[#FF5500] hover:text-white transition-colors shadow-[2px_2px_0_0_#000]"
                        >
                          <ExternalLink className="w-4 h-4" />
                          LinkedIn Profile ↗
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-[#FF5500] text-white text-center">
          <div className="max-w-4xl mx-auto px-5 sm:px-8 flex flex-col items-center w-full">
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tighter mb-8 leading-none">
              Work Directly With Kishalay & Ayushman.
            </h2>
            <p className="text-lg sm:text-xl font-bold mb-10 text-white/90 max-w-2xl">
              No account managers. No junior handoffs. Direct execution from the founders who build your tech and scale your growth.
            </p>
            <Link 
              href="/book-call" 
              className="inline-flex items-center gap-3 bg-[#FFD700] text-black text-xl sm:text-2xl font-black uppercase px-8 sm:px-12 py-5 sm:py-6 border-4 border-black shadow-[8px_8px_0_#000] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
            >
              Book a Founder Call
              <ArrowRight className="w-6 h-6" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
