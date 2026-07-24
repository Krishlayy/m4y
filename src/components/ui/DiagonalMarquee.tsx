"use client";

import { Marquee } from "./Shared";

export default function DiagonalMarquee() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden opacity-5 flex items-center justify-center">
      <div className="w-[150vw] -rotate-12 bg-black py-4 border-y-[10px] border-[#FF3B00]">
        <Marquee direction="left">
          <div className="flex gap-8 text-6xl md:text-8xl font-black uppercase tracking-widest text-[#FFD700]">
            <span>M4Y.AGENCY</span>
            <span>CREATORS</span>
            <span>CONSULTANTS</span>
            <span>M4Y.AGENCY</span>
            <span>CREATORS</span>
            <span>CONSULTANTS</span>
          </div>
        </Marquee>
      </div>
    </div>
  );
}
