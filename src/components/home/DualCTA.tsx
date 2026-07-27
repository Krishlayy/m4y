import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export default function DualCTA() {
  return (
    <section className="bg-white border-t-4 border-black">
      <div className="grid grid-cols-1 md:grid-cols-2">

        {/* Our Story — Black panel */}
        <Link
          href="/about"
          className="group relative block h-[500px] md:h-[700px] overflow-hidden bg-black text-white cursor-pointer border-r-0 md:border-r-4 md:border-black"
        >
          {/* Hover accent fill */}
          <div className="absolute inset-0 bg-[#FF3B00] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 z-0" />

          {/* Decorative shapes */}
          <div className="absolute top-12 right-12 w-32 h-32 border-4 border-white/20 group-hover:border-white/60 transition-colors duration-500" />
          <div className="absolute bottom-24 left-8 w-20 h-20 bg-[#FFD700] border-4 border-white/0 group-hover:border-white transition-colors duration-500" />

          <div className="absolute inset-0 p-10 md:p-16 lg:p-20 flex flex-col justify-between z-10">
            <div className="w-16 h-16 border-4 border-white flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors duration-300 self-end shadow-[4px_4px_0px_white]">
              <ArrowUpRight className="w-8 h-8 group-hover:rotate-45 transition-transform duration-300" />
            </div>
            <div>
              <p className="font-black text-xs uppercase tracking-widest text-white/40 group-hover:text-white/60 mb-4 transition-colors">01 — About Us</p>
              <h2 className="text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.85]">
                Our<br />Story
              </h2>
            </div>
          </div>
        </Link>

        {/* Get In Touch — Yellow panel */}
        <Link
          href="/contact"
          className="group relative block h-[500px] md:h-[700px] overflow-hidden bg-[#FFD700] text-black cursor-pointer"
        >
          {/* Hover accent fill */}
          <div className="absolute inset-0 bg-black scale-x-0 group-hover:scale-x-100 origin-right transition-transform duration-500 z-0" />

          {/* Decorative shapes */}
          <div className="absolute top-12 left-12 w-32 h-32 border-4 border-black/20 group-hover:border-white/40 transition-colors duration-500" />
          <div className="absolute bottom-24 right-8 w-20 h-20 bg-[#FF3B00] border-4 border-black group-hover:border-white transition-colors duration-500" />

          <div className="absolute inset-0 p-10 md:p-16 lg:p-20 flex flex-col justify-between z-10">
            <div className="w-16 h-16 border-4 border-black flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors duration-300 self-end shadow-[4px_4px_0px_black]">
              <ArrowUpRight className="w-8 h-8 group-hover:rotate-45 transition-transform duration-300" />
            </div>
            <div>
              <p className="font-black text-xs uppercase tracking-widest text-black/40 group-hover:text-white/60 mb-4 transition-colors">02 — Contact</p>
              <h2 className="text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.85] group-hover:text-white transition-colors duration-300">
                Get In<br />Touch
              </h2>
            </div>
          </div>
        </Link>

      </div>
    </section>
  );
}
