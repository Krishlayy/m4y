"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: globalThis.Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error for production observability
    if (typeof window !== "undefined") {
      console.error("Application error boundary triggered:", error);
    }
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
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            Try Again
          </button>

          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#FFD700] text-black px-6 py-3.5 font-black text-sm uppercase tracking-wider border-2 border-black shadow-[4px_4px_0_#000] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Return Home
          </Link>

          <a
            href="https://wa.me/919258735381?text=Hi%20Kishalay%20%26%20Ayushman,%20I%20hit%20an%20unexpected%20error%20on%20the%20M4Y%20website."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-black text-white px-6 py-3.5 font-black text-sm uppercase tracking-wider border-2 border-black shadow-[4px_4px_0_#000] hover:bg-[#25D366] hover:text-white transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            WhatsApp Founders
          </a>
        </div>
      </div>
    </div>
  );
}
