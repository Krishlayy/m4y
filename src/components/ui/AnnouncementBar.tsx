"use client";

import Link from "next/link";
import { X } from "lucide-react";
import { useState } from "react";

export default function AnnouncementBar() {
  const [visible, setVisible] = useState(true);
  if (!visible) return null;

  return (
    <div className="relative z-50 bg-[#FF3B00] border-b-4 border-black text-white">
      <div className="flex items-center justify-center gap-3 px-6 py-3 text-center">
        <span className="w-2 h-2 bg-white rounded-full animate-pulse flex-shrink-0" />
        <p className="font-black text-sm uppercase tracking-wider">
          🔥 Founding Client Offer — Only 10 Spots at Launch Pricing.{" "}
          <Link
            href="/book-call"
            className="underline underline-offset-4 hover:no-underline transition-all"
          >
            Claim Yours →
          </Link>
        </p>
        <button
          onClick={() => setVisible(false)}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-7 h-7 border-2 border-white/40 flex items-center justify-center hover:border-white hover:bg-white hover:text-[#FF3B00] transition-all"
          aria-label="Close announcement"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
