"use client";

import Link from "next/link";
import { ArrowRight, Phone, MessageCircle, Mail, Sparkles } from "lucide-react";
import { InstagramIcon, LinkedinIcon } from "@/components/ui/BrandIcons";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white pt-20 md:pt-32 pb-12 overflow-hidden relative border-t-4 border-black">
      {/* Top Banner Accent */}
      <div className="w-full bg-[#FFD700] text-black border-b-4 border-black py-3 px-6 text-center font-black text-xs sm:text-sm uppercase tracking-widest">
        ⚡ Engineering Precision • Creative Fire • Relentless Growth
      </div>

      <div className="w-full px-5 sm:px-8 md:px-16 lg:px-28 xl:px-40 pt-16 relative z-10">
        
        {/* Massive Call to Action Section */}
        <div className="mb-16 md:mb-24 flex flex-col xl:flex-row xl:items-end justify-between flex-wrap gap-8 border-b-4 border-white/20 pb-16">
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 bg-[#FF5500] text-white font-black text-xs uppercase tracking-widest border-2 border-white mb-4">
              Exclusive Q3 Partnership Roster
            </span>
            <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9] uppercase mb-6">
              2 Spots.<br />
              <span className="text-black bg-[#FFD700] px-3 py-1 border-4 border-white inline-block mt-2">
                Scale With Us.
              </span>
            </h2>
            <p className="text-base sm:text-xl font-bold text-white/70 max-w-xl mb-6">
              Stop letting average agencies burn your ad budget. Work directly with 2 CS founders who engineer your growth.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="mailto:support.m4y@gmail.com"
                className="inline-flex items-center gap-2 text-lg sm:text-2xl font-black tracking-tight text-[#FFD700] hover:text-[#FF5500] transition-colors"
              >
                <Mail className="w-5 h-5" />
                support.m4y@gmail.com
              </a>
              <span className="text-white/30 hidden sm:inline">•</span>
              <a
                href="https://wa.me/919258735381"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-lg sm:text-2xl font-black tracking-tight text-white hover:text-[#25D366] transition-colors"
              >
                <Phone className="w-5 h-5 text-[#25D366]" />
                +91 92587 35381
              </a>
            </div>
          </div>

          <div className="w-full xl:w-auto">
            <Link
              href="/book-call"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-4 bg-[#FF5500] text-white font-black text-lg sm:text-xl uppercase tracking-wider py-5 px-8 sm:px-10 border-4 border-white shadow-[6px_6px_0_0_#FFD700] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all duration-200 group text-center"
            >
              Claim a Founding Spot
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Links & Socials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-20">

          {/* Column 1: Agency Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl font-black text-[#FFD700] tracking-tighter">M4Y</span>
              <span className="text-xs font-black uppercase px-2 py-0.5 bg-white text-black border-2 border-black">Agency</span>
            </div>
            <p className="text-sm font-bold text-white/60 leading-relaxed max-w-xs mb-6">
              Marketing 4 You — Founded by 2 software engineers. We combine high-converting creative storytelling with custom AI automation and scalable web architecture.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 border-2 border-white/20 text-xs font-bold text-white/80">
              <Sparkles className="w-3.5 h-3.5 text-[#FFD700]" /> Remote & Global • HQ India
            </div>
          </div>

          {/* Column 2: Quick Navigation */}
          <div>
            <h4 className="text-xs font-black text-white/40 uppercase tracking-widest mb-6">Navigation</h4>
            <ul className="flex flex-col gap-3 font-bold text-base">
              <li>
                <Link href="/services" className="text-white/90 hover:text-[#FFD700] transition-colors flex items-center gap-2">
                  <span className="text-[#FF5500]">↳</span> Services & Funnels
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white/90 hover:text-[#FFD700] transition-colors flex items-center gap-2">
                  <span className="text-[#FF5500]">↳</span> Our Story & Founders
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/90 hover:text-[#FFD700] transition-colors flex items-center gap-2">
                  <span className="text-[#FF5500]">↳</span> Contact Us
                </Link>
              </li>
              <li>
                <Link href="/book-call" className="text-white/90 hover:text-[#FFD700] transition-colors flex items-center gap-2">
                  <span className="text-[#FF5500]">↳</span> Book a Strategy Call
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Connect With Founders */}
          <div>
            <h4 className="text-xs font-black text-white/40 uppercase tracking-widest mb-6">Connect Founders</h4>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href="https://www.linkedin.com/in/kishalay-sharma-35752b223/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-bold bg-white text-black px-3 py-2 border-2 border-black hover:bg-[#FFD700] transition-colors shadow-[2px_2px_0_0_#fff]"
                >
                  <LinkedinIcon className="w-4 h-4 text-[#0077B5]" />
                  <span>Kishalay Sharma ↗</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/ayushmansingh21/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-bold bg-white text-black px-3 py-2 border-2 border-black hover:bg-[#FFD700] transition-colors shadow-[2px_2px_0_0_#fff]"
                >
                  <LinkedinIcon className="w-4 h-4 text-[#0077B5]" />
                  <span>Ayushman Singh ↗</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Official Agency Channels */}
          <div>
            <h4 className="text-xs font-black text-white/40 uppercase tracking-widest mb-6">Official Channels</h4>
            <div className="flex flex-col gap-3">
              <a
                href="https://www.instagram.com/m4y.agency/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 bg-white/5 border-2 border-white/20 hover:border-[#FF5500] hover:bg-white/10 transition-colors group"
              >
                <div className="w-8 h-8 bg-gradient-to-tr from-[#FD1D1D] to-[#F56040] rounded flex items-center justify-center">
                  <InstagramIcon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-xs font-black uppercase text-white group-hover:text-[#FFD700] transition-colors">@m4y.agency</p>
                  <p className="text-[11px] text-white/50 font-bold">Follow on Instagram</p>
                </div>
              </a>

              <a
                href="https://wa.me/919258735381"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 bg-white/5 border-2 border-white/20 hover:border-[#25D366] hover:bg-white/10 transition-colors group"
              >
                <div className="w-8 h-8 bg-[#25D366] rounded flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-black fill-black" />
                </div>
                <div>
                  <p className="text-xs font-black uppercase text-white group-hover:text-[#25D366] transition-colors">+91 92587 35381</p>
                  <p className="text-[11px] text-white/50 font-bold">Direct WhatsApp Chat</p>
                </div>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t-2 border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-bold text-white/50">
          <p className="text-center sm:text-left">
            &copy; {currentYear} M4Y Digital Agency (Marketing 4 You). Built with engineering discipline.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/services" className="hover:text-white transition-colors">Services</Link>
            <Link href="/about" className="hover:text-white transition-colors">Founders</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
