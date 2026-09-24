"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, Flame, Terminal, Rocket, Heart } from "lucide-react";

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
      bio: "Specializing in AI automation, scalable software platforms, and algorithmic growth systems, Kishalay leads engineering, web architecture, and automated conversion funnels that outperform traditional agency models."
    },
    {
      name: "Ayushman Singh",
      role: "Co-Founder & Growth Engineer",
      color: "bg-[#FFD700]",
      textColor: "text-black",
      badgeColor: "bg-black text-white",
      avatar: "/founder-ayushman.png",
      linkedin: "https://www.linkedin.com/in/ayushmansingh21/",
      bio: "Combining software engineering precision with aggressive performance marketing, Ayushman architects backend data pipelines, conversion tracking, and high-ROI growth loops that turn customer acquisition into a predictable science."
    },
  ];

  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-[#FFD700] selection:text-black pt-28 md:pt-36 flex flex-col overflow-x-hidden">
      <Navbar />
      
      <main className="flex-grow w-full">
        {/* Hero Banner */}
        <section className="w-full px-5 sm:px-8 py-16 md:py-24 border-b-4 border-black bg-[#FFD700]">
          <div className="max-w-5xl mx-auto text-center flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#FF5500] text-white font-black text-xs sm:text-sm uppercase tracking-widest border-2 border-black mb-6 shadow-[3px_3px_0_#000]"
            >
              <Flame className="w-4 h-4 fill-white" /> The M4Y Origin & Mission
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="w-full mb-8 text-center"
            >
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-none text-black">
                Two Engineers Who
              </h1>
              <div className="mt-3 flex justify-center">
                <span className="text-white bg-black px-4 sm:px-6 py-2 border-4 border-black inline-block text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight shadow-[4px_4px_0_#FF5500]">
                  Refused To Settle.
                </span>
              </div>
            </motion.div>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-lg sm:text-xl md:text-2xl font-bold max-w-3xl w-full mx-auto bg-white p-6 sm:p-8 border-4 border-black shadow-[8px_8px_0_#000] leading-relaxed text-black/90 mt-4"
            >
              While most software graduates lined up for safe, slow corporate cubicles, we realized our technical depth and creative instincts could build something far more impactful: high-velocity growth engines for modern brands.
            </motion.p>
          </div>
        </section>

        {/* The Motivational Story Section */}
        <section className="w-full px-5 sm:px-8 py-16 md:py-24 border-b-4 border-black bg-white">
          <div className="max-w-5xl mx-auto w-full">
            <div className="w-full border-4 border-black bg-[#FF5500] text-white p-6 sm:p-10 md:p-14 shadow-[10px_10px_0_#000] relative overflow-hidden">
              <div className="absolute -right-8 -top-8 w-40 h-40 bg-[#FFD700] rounded-full opacity-20 pointer-events-none" />
              
              <div className="relative z-10 w-full">
                <span className="text-xs font-black uppercase tracking-widest px-3 py-1 bg-black text-[#FFD700] inline-block mb-6 border-2 border-white">
                  The Founder Manifesto
                </span>

                <h2 className="text-2xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight leading-tight mb-8 text-white">
                  &ldquo;We have immense technical and creative horsepower. Why build legacy software when we can engineer growth for ambitious brands?&rdquo;
                </h2>

                <div className="space-y-6 text-base sm:text-lg md:text-xl font-bold text-white/95 leading-relaxed">
                  <p>
                    Most traditional agencies are completely disconnected from technology. They still operate like it’s 2015—relying on manual spreadsheets, slow turnarounds, and layers of account managers who don&apos;t know how to code, build automated funnels, or analyze data at scale.
                  </p>
                  <p>
                    As engineers, we saw an enormous opportunity. By uniting modern AI workflows, custom-coded web platforms, and psychological performance marketing, we could build campaigns that don&apos;t just look pretty—they generate exponential, measurable returns.
                  </p>
                  <p>
                    We founded M4Y with a clear standard: <span className="text-[#FFD700] underline decoration-4">Zero outsourcing. Zero junior handoffs. Total founder accountability.</span> When you work with us, you partner directly with the builders who engineer your growth.
                  </p>
                  <p className="text-[#FFD700] text-xl sm:text-2xl font-black pt-2">
                    That is M4Y. 2 Founders. High-velocity execution. Uncompromising results.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Founders Cards */}
        <section className="w-full px-5 sm:px-8 py-16 md:py-24 border-b-4 border-black bg-[#F4F4F5]">
          <div className="max-w-5xl mx-auto w-full">
            <div className="text-center mb-14">
              <span className="text-xs font-black uppercase tracking-widest px-3 py-1 bg-[#FFD700] text-black border-2 border-black inline-block mb-3">
                Direct Access
              </span>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tighter">
                Meet Kishalay & Ayushman
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto w-full">
              {founders.map((founder, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  className={`p-6 sm:p-10 border-4 border-black shadow-[8px_8px_0_#000] ${founder.color} flex flex-col w-full`}
                >
                  <div className="flex items-center gap-5 mb-6">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-4 border-black overflow-hidden bg-white shadow-[4px_4px_0_#000] shrink-0">
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
        <section className="w-full px-5 sm:px-8 py-16 md:py-24 border-b-4 border-black bg-black text-white">
          <div className="max-w-5xl mx-auto w-full">
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-center mb-14 text-white">
              The Code We Live By
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
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
                <div key={i} className="bg-white text-black p-6 sm:p-8 border-4 border-white shadow-[6px_6px_0_#FFD700] flex flex-col justify-between w-full">
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
        <section className="w-full px-5 sm:px-8 py-16 md:py-24 text-center bg-[#FF5500] text-white">
          <motion.div {...fadeUp} className="max-w-4xl mx-auto flex flex-col items-center w-full">
            <span className="text-xs font-black uppercase tracking-widest px-3 py-1 bg-black text-[#FFD700] inline-block mb-6 border-2 border-white">
              Stop Playing Small
            </span>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tighter mb-8 leading-none">
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
