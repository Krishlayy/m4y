"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useDragControls } from "framer-motion";
import { Grip, X, Home, Briefcase, DollarSign, Info, FileText, Phone } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useHaptic } from "@/hooks/useHaptic";

const navLinks = [
  { name: "Home", href: "/", icon: <Home className="w-5 h-5" /> },
  { name: "Services", href: "/services", icon: <Briefcase className="w-5 h-5" /> },
  { name: "Work", href: "/case-studies", icon: <TargetIcon /> },
  { name: "Pricing", href: "/pricing", icon: <DollarSign className="w-5 h-5" /> },
  { name: "About", href: "/about", icon: <Info className="w-5 h-5" /> },
  { name: "Blog", href: "/blog", icon: <FileText className="w-5 h-5" /> },
];

function TargetIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <circle cx="12" cy="12" r="10"></circle>
      <circle cx="12" cy="12" r="6"></circle>
      <circle cx="12" cy="12" r="2"></circle>
    </svg>
  );
}

export default function MobileJoystickNav() {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const triggerHaptic = useHaptic();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  if (!mounted) return null;

  return (
    <div className="md:hidden">
      {/* Full Screen Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
            transition={{ type: "spring", damping: 20, stiffness: 100 }}
            className="fixed inset-0 z-[90] bg-white border-8 border-black flex flex-col justify-center overflow-hidden"
          >
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(black_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />
            
            <div className="p-8 relative z-10 flex flex-col gap-6 w-full h-full justify-center pb-32">
              <h2 className="text-xl font-black uppercase tracking-widest text-gray-400 mb-4 border-b-4 border-black pb-4">
                Navigation
              </h2>
              {navLinks.map((link, i) => {
                const isActive = pathname === link.href;
                return (
                  <motion.div
                    key={link.name}
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -50, opacity: 0 }}
                    transition={{ delay: i * 0.05, type: "spring", damping: 12 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center gap-6 text-4xl sm:text-5xl font-black uppercase tracking-tight transition-all duration-300 w-full ${
                        isActive ? "text-[#FF3B00]" : "text-black hover:text-[#FF3B00] hover:pl-4"
                      }`}
                    >
                      <div className={`p-3 border-4 border-black ${isActive ? 'bg-[#FFD700]' : 'bg-white shadow-[4px_4px_0_0_#000]'}`}>
                        {link.icon}
                      </div>
                      <span style={isActive ? { textShadow: "3px 3px 0px black" } : {}}>
                        {link.name}
                      </span>
                    </Link>
                  </motion.div>
                );
              })}

              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 50, opacity: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-8"
              >
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-between p-6 bg-black text-white font-black uppercase text-2xl tracking-widest border-4 border-black shadow-[8px_8px_0_0_#FF3B00] active:translate-y-1 active:translate-x-1 active:shadow-[4px_4px_0_0_#FF3B00] transition-all"
                >
                  Book a Call
                  <Phone className="w-6 h-6" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* The Draggable Joystick / Orb */}
      <div 
        ref={containerRef}
        className="fixed inset-0 pointer-events-none z-[100]"
        style={{ padding: "16px", paddingBottom: "32px", paddingRight: "24px" }}
      >
        <motion.div
          drag
          dragConstraints={containerRef}
          dragElastic={0.4}
          dragMomentum={true}
          whileDrag={{ scale: 1.1, cursor: "grabbing" }}
          className="absolute bottom-8 right-6 pointer-events-auto shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-shadow rounded-full"
        >
          <motion.button
            onClick={() => {
              triggerHaptic(isOpen ? "light" : "medium");
              setIsOpen(!isOpen);
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            className={`w-16 h-16 rounded-full flex items-center justify-center border-4 border-black transition-colors duration-300 ${
              isOpen ? "bg-[#FF3B00] text-white" : "bg-[#FFD700] text-black"
            }`}
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-8 h-8" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Grip className="w-8 h-8" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
