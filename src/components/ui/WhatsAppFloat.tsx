"use client";

import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function WhatsAppFloat() {
  return (
    <motion.a
      href="https://wa.me/919258735381"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, type: "spring", stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="hidden md:flex fixed bottom-8 right-8 z-50 w-16 h-16 rounded-full bg-[#25D366] border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] items-center justify-center transition-shadow"
    >
      {/* Pulse ring */}
      <span className="absolute inline-flex w-full h-full rounded-full bg-[#25D366] opacity-50 animate-ping" />
      <MessageCircle className="w-7 h-7 text-black fill-black relative z-10" />
    </motion.a>
  );
}
