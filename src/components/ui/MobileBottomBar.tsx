"use client";

import { Phone, MessageCircle } from "lucide-react";

export default function MobileBottomBar() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 flex border-t-4 border-black bg-white">
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/919258735381"
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center gap-2 py-4 px-2 border-r-4 border-black bg-[#25D366] text-black font-black uppercase tracking-widest text-sm sm:text-base active:bg-[#1EBE5D] transition-colors"
      >
        <MessageCircle className="w-5 h-5 fill-black" />
        WhatsApp
      </a>

      {/* Call Button */}
      <a
        href="tel:+919258735381"
        className="flex-1 flex items-center justify-center gap-2 py-4 px-2 bg-[#FFD700] text-black font-black uppercase tracking-widest text-sm sm:text-base active:bg-[#E6C200] transition-colors"
      >
        <Phone className="w-5 h-5 fill-black" />
        Call Now
      </a>
    </div>
  );
}
