"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "/services" },
    { name: "Work", href: "/case-studies" },
    { name: "Pricing", href: "/pricing" },
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
        <div className="w-full px-6 md:px-16 lg:px-32 xl:px-40">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <span className="text-3xl font-black tracking-tight text-black uppercase">M4Y</span>
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
                <span>Let&apos;s talk</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </nav>

          </div>
        </div>
      </header>
    </>
  );
}
