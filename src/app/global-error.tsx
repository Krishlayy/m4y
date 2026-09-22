"use client";

import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Global critical error caught:", error);
  }, [error]);

  return (
    <html lang="en">
      <body className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6 font-sans">
        <div className="max-w-xl w-full bg-white text-black border-4 border-black p-8 text-center shadow-[10px_10px_0_#FF5500]">
          <h1 className="text-3xl font-black uppercase mb-4 text-[#FF5500]">
            Critical System Glitch
          </h1>
          <p className="text-sm font-bold text-black/80 mb-6 leading-relaxed">
            The application encountered a critical runtime exception.
          </p>
          <div className="flex gap-4 justify-center">
            <button
              onClick={() => reset()}
              className="bg-black text-white px-6 py-3 font-black text-sm uppercase border-2 border-black hover:bg-[#FF5500] transition-colors cursor-pointer"
            >
              Restart Application
            </button>
            <a
              href="https://wa.me/919258735381"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] text-white px-6 py-3 font-black text-sm uppercase border-2 border-black hover:opacity-90 transition-opacity"
            >
              Contact Support
            </a>
          </div>
        </div>
      </body>
    </html>
  );
}
