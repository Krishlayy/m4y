"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
  ];

  return (
    <>
      <header
        className={`relative z-50 transition-all duration-300 bg-white border-b-4 border-black ${
          scrolled ? "py-4" : "py-5"
        }`}
      >
        <div className="w-full px-6 md:px-16 lg:px-32 xl:px-40">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 -ml-4">
              <img src="/logo.png" alt="M4Y Marketing You" className="h-28 md:h-36 w-auto object-contain transform scale-[1.5]" />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-base font-black text-black uppercase tracking-widest hover:text-[#FF3B00] transition-colors duration-150"
                >
                  {link.name}
                </Link>
              ))}
              <Link href="/contact" className="btn-accent group ml-4">
                <span>Let&apos;s talk</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </nav>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden w-12 h-12 border-4 border-black flex items-center justify-center bg-white shadow-[4px_4px_0_#000] hover:bg-[#FFD700] transition-colors duration-150"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/60"
              onClick={() => setMobileOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: [0.76, 0, 0.24, 1] }}
              className="fixed top-0 right-0 z-50 h-full w-[85vw] max-w-sm bg-white border-l-4 border-black shadow-[-8px_0_0_#000] flex flex-col"
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between px-8 py-6 border-b-4 border-black bg-[#FF3B00]">
                <span className="text-2xl font-black text-white uppercase tracking-tighter">M4Y</span>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="w-10 h-10 border-4 border-white flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Drawer Links */}
              <nav className="flex flex-col flex-1 px-8 py-8 gap-2 overflow-y-auto">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center justify-between w-full py-4 border-b-2 border-black font-black uppercase text-lg tracking-wide text-black hover:text-[#FF3B00] transition-colors group"
                    >
                      <span>{link.name}</span>
                      <ArrowRight className="w-5 h-5 opacity-30 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* Drawer CTA */}
              <div className="px-8 py-8 border-t-4 border-black">
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="btn-primary w-full justify-center"
                >
                  Let&apos;s talk
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
