"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, Sparkles, Flame, Terminal, Rocket, Heart } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.5 }
};

export default function AboutPage() {
  const founders = [
    {
      name: "Kishalay Sharma",
      role: "Co-Founder & Tech Lead",
      color: "bg-white",
      textColor: "text-black",
      badgeColor: "bg-[#FF5500] text-white",
      avatar: "/founder-krishlay.png",
      linkedin: "https://www.linkedin.com/in/kishalay-sharma-35752b223/",
      bio: "After 4 years grinding in hostel rooms and mastering modern AI architectures, Kishalay chose creative freedom over corporate bureaucracy. He designs the automation, funnels, and tech that power our client's growth."
    },
    {
      name: "Ayushman Singh",
      role: "Co-Founder & Growth Engineer",
      color: "bg-[#FFD700]",
      textColor: "text-black",
      badgeColor: "bg-black text-white",
      avatar: "/founder-ayushman.png",
      linkedin: "https://www.linkedin.com/in/ayushmansingh21/",
      bio: "Engineered from hostel room debates to production software, Ayushman turns growth into a science. He handles backend systems, conversion engines, and paid marketing pipelines that deliver true ROI."
    },
  ];

  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-[#FFD700] selection:text-black pt-20 flex flex-col overflow-hidden">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Banner: White + Orange + Black + Yellow */}
        <section className="px-5 sm:px-8 py-20 md:py-32 border-b-4 border-black bg-[#FFD700]">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#FF5500] text-white font-black text-xs sm:text-sm uppercase tracking-widest border-2 border-black mb-6 shadow-[3px_3px_0_#000]"
            >
              <Flame className="w-4 h-4 fill-white" /> The Untold Story of M4Y
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter mb-8 leading-[0.95]"
            >
              4 Years in a Hostel.<br />
              <span className="text-white bg-black px-4 py-1 border-4 border-black inline-block mt-2">
                Zero Desire for MNCs.
              </span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="text-lg sm:text-xl md:text-2xl font-bold max-w-3xl mx-auto bg-white p-6 sm:p-8 border-4 border-black shadow-[8px_8px_0_#000] leading-relaxed text-black/90"
            >
              We spent 4 years living together in college hostel rooms—coding till 4 AM, surviving on late-night chai, and realizing we had too much creative fire to waste our youth in corporate cubicles.
            </motion.p>
          </div>
        </section>

        {/* The Motivational Story Section (Connecting with youth & founders) */}
        <section className="px-5 sm:px-8 py-20 md:py-32 border-b-4 border-black bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="border-4 border-black bg-[#FF5500] text-white p-6 sm:p-10 md:p-14 shadow-[10px_10px_0_#000] relative overflow-hidden">
              <div className="absolute -right-8 -top-8 w-40 h-40 bg-[#FFD700] rounded-full opacity-20 pointer-events-none" />
              
              <div className="relative z-10">
                <span className="text-xs font-black uppercase tracking-widest px-3 py-1 bg-black text-[#FFD700] inline-block mb-6 border-2 border-white">
                  Why Keep It To Ourselves?
                </span>

                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight leading-tight mb-8">
                  &ldquo;We realized we are insanely creative. So why just build side-projects when we can scale real brands?&rdquo;
                </h2>

                <div className="space-y-6 text-base sm:text-lg md:text-xl font-bold text-white/95 leading-relaxed">
                  <p>
                    In college, everyone around us had one script: memorize theory, prepare for campus placements, get a 9-to-5 MNC job, and fill Excel sheets.
                  </p>
                  <p>
                    Every night in that hostel room, we chose a different path. We opened our laptops, engineered viral marketing scripts, broke APIs, built software, and watched online brands explode with the right blend of creative storytelling and tech automation.
                  </p>
                  <p>
                    One night after our final exams, we asked ourselves the life-changing question: <span className="text-[#FFD700] underline decoration-4">Why let this creativity die in an office?</span> Why not take that raw hostel brotherhood, relentless work ethic, and tech intelligence to help real founders build empires?
                  </p>
                  <p className="text-[#FFD700] text-xl sm:text-2xl font-black">
                    That is M4Y. 2 Founders. No excuses. Relentless growth.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Founders Cards */}
        <section className="px-5 sm:px-8 py-20 md:py-32 border-b-4 border-black bg-[#F4F4F5]">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <span className="text-xs font-black uppercase tracking-widest px-3 py-1 bg-[#FFD700] text-black border-2 border-black inline-block mb-3">
                Direct Access
              </span>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tighter">
                Meet Kishalay & Ayushman
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {founders.map((founder, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  whileHover={{ y: -8, transition: { type: "spring", stiffness: 300 } }}
                  className={`p-6 sm:p-10 border-4 border-black shadow-[8px_8px_0_#000] hover:shadow-[14px_14px_0_#000] transition-all ${founder.color} flex flex-col`}
                >
                  <div className="flex items-center gap-5 mb-6">
                    <div className="w-24 h-24 rounded-full border-4 border-black overflow-hidden bg-white shadow-[4px_4px_0_#000] shrink-0">
                      <img
                        src={founder.avatar}
                        alt={`${founder.name} avatar`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <span className={`inline-block font-black text-xs uppercase tracking-wider px-2.5 py-1 ${founder.badgeColor} border-2 border-black mb-2`}>
                        {founder.role}
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-black uppercase text-black leading-tight">
                        {founder.name}
                      </h3>
                    </div>
                  </div>

                  <p className="text-sm sm:text-base font-bold leading-relaxed text-black/80 mb-8 flex-grow">
                    {founder.bio}
                  </p>

                  <a
                    href={founder.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-black text-xs sm:text-sm uppercase tracking-wider bg-black text-white px-4 py-2.5 border-2 border-black hover:bg-[#FF5500] hover:text-white transition-colors w-fit shadow-[3px_3px_0_#000]"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Connect on LinkedIn ↗
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 3 Core Principles */}
        <section className="px-5 sm:px-8 py-20 md:py-32 border-b-4 border-black bg-black text-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-center mb-14 text-white">
              The Code We Live By
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: Terminal,
                  title: "Engineers First",
                  desc: "We don't sell vanity metrics. We build automation, data pipelines, and conversion engines that compound revenue."
                },
                {
                  icon: Heart,
                  title: "Founders Do The Work",
                  desc: "You will never speak to an intern or a junior account manager. Kishalay and Ayushman personally architect your strategy."
                },
                {
                  icon: Rocket,
                  title: "Ruthless Execution",
                  desc: "While traditional agencies spend 3 weeks making PowerPoint slides, we launch, test, and optimize in 48 hours."
                }
              ].map((item, i) => (
                <div key={i} className="bg-white text-black p-6 sm:p-8 border-4 border-white shadow-[6px_6px_0_#FFD700] flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 bg-[#FF5500] border-2 border-black flex items-center justify-center text-white mb-6 shadow-[2px_2px_0_#000]">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-black uppercase tracking-tight mb-3 text-black">
                      {item.title}
                    </h3>
                    <p className="text-sm font-bold text-black/70 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Big CTA */}
        <section className="px-5 sm:px-8 py-20 md:py-32 text-center bg-[#FF5500] text-white">
          <motion.div {...fadeUp} className="max-w-4xl mx-auto flex flex-col items-center">
            <span className="text-xs font-black uppercase tracking-widest px-3 py-1 bg-black text-[#FFD700] inline-block mb-6 border-2 border-white">
              Stop Playing Small
            </span>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tighter mb-8 leading-[0.95]">
              Ready to scale with the founders?
            </h2>
            <Link
              href="/book-call"
              className="inline-flex items-center gap-3 bg-[#FFD700] text-black text-xl sm:text-2xl font-black uppercase px-8 sm:px-12 py-5 sm:py-6 border-4 border-black shadow-[8px_8px_0_#000] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
            >
              Book a Strategy Call
              <ArrowRight className="w-6 h-6" />
            </Link>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
