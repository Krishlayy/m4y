"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "/services" },
    { name: "Work", href: "/case-studies" },
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
  ];

  return (
    <>
      <header
        className={`relative z-50 transition-all duration-300 bg-white border-b-4 border-black shadow-[0_8px_0_0_#FF3B00] ${
          scrolled ? "py-4" : "py-6"
        }`}
      >
        <div className="w-full px-6 md:px-12 lg:px-24">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <span className="text-3xl font-black tracking-tighter text-black uppercase">M4Y</span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-base font-bold text-black uppercase tracking-widest hover:text-[#FF3B00] transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              
              <Link href="/contact" className="btn-accent group ml-4 !py-3 !px-6 !text-base">
                <span>Let's talk</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </nav>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden p-2 text-black hover:text-[#FF3B00] transition-colors"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu className="w-8 h-8" />
            </button>
          </div>
        </div>
      </header>

      {/* Full-Screen Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ y: "-100vh" }}
            animate={{ y: 0 }}
            exit={{ y: "-100vh" }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[100] bg-[#FFD700] flex flex-col md:hidden border-b-8 border-black"
          >
            <div className="flex items-center justify-between p-6 px-6 border-b-4 border-black bg-white">
              <span className="text-3xl font-black tracking-tighter text-black uppercase">M4Y</span>
              <button 
                onClick={() => setMobileMenuOpen(false)} 
                className="p-2 border-4 border-black bg-white hover:bg-black hover:text-white transition-colors"
              >
                <X className="w-8 h-8" />
              </button>
            </div>
            
            <div className="flex flex-col gap-6 p-10 flex-grow justify-center">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 20, opacity: 0 }}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-5xl sm:text-7xl font-black text-black uppercase tracking-tighter hover:text-white hover:pl-4 transition-all duration-300 block"
                    style={{ textShadow: "4px 4px 0px #FF3B00" }}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>

            <motion.div 
              className="p-10"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="btn-primary w-full text-2xl py-6 justify-between group bg-black text-white hover:bg-white hover:text-black border-none shadow-[8px_8px_0_0_#FF3B00]"
              >
                Let's talk
                <ArrowRight className="w-8 h-8 group-hover:translate-x-4 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
