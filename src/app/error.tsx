"use client";

import { useEffect } from "react";
import Link from "next/link";
import { RefreshCw, ArrowLeft, MessageSquare } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error for production observability
    console.error("Application error boundary triggered:", error);
  }, [error]);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6 relative overflow-hidden select-none">
      {/* Decorative brutalist background accents */}
      <div className="absolute top-10 right-10 w-48 h-48 bg-[#FF5500] opacity-20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-48 h-48 bg-[#FFD700] opacity-20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-2xl w-full bg-white text-black border-4 border-black p-8 md:p-12 shadow-[12px_12px_0_#FF5500] relative z-10 text-center">
        <div className="inline-block px-4 py-1.5 bg-black text-[#FFD700] font-black text-xs uppercase tracking-widest border-2 border-black mb-6 shadow-[3px_3px_0_#FF5500]">
          System Alert // 500
        </div>

        <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-4 text-black">
          Unexpected Glitch.
        </h1>

        <p className="text-base md:text-lg font-bold text-black/80 max-w-lg mx-auto mb-8 leading-relaxed">
          Our systems encountered an unexpected exception. Our technical founders have been alerted, and your session is protected.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => reset()}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#FF5500] text-white px-6 py-3.5 font-black text-sm uppercase tracking-wider border-2 border-black shadow-[4px_4px_0_#000] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all cursor-pointer"
          >
            <RefreshCw className="w-4 h-4" />
            Try Again
          </button>

          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#FFD700] text-black px-6 py-3.5 font-black text-sm uppercase tracking-wider border-2 border-black shadow-[4px_4px_0_#000] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            Return Home
          </Link>

          <a
            href="https://wa.me/919258735381?text=Hi%20Kishalay%20%26%20Ayushman,%20I%20hit%20an%20unexpected%20error%20on%20the%20M4Y%20website."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-black text-white px-6 py-3.5 font-black text-sm uppercase tracking-wider border-2 border-black shadow-[4px_4px_0_#000] hover:bg-[#25D366] hover:text-white transition-colors"
          >
            <MessageSquare className="w-4 h-4" />
            WhatsApp Founders
          </a>
        </div>
      </div>
    </div>
  );
}
