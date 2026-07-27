"use client";

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { submitContactInquiry } from '@/lib/public-actions';
import { useState } from 'react';

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.5 }
};

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (formData: FormData) => {
    setStatus("loading");
    const result = await submitContactInquiry(formData);
    if (result.success) {
      setStatus("success");
    } else {
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-[#FFD700] selection:text-black pt-24 flex flex-col overflow-hidden">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero */}
        <section className="px-6 py-24 border-b-4 border-black bg-[#FF3B00] text-white">
          <div className="max-w-5xl mx-auto text-center flex flex-col items-center">
            <motion.h1 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-6 text-black drop-shadow-[4px_4px_0_#fff]"
            >
              Talk To Us.
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="text-2xl md:text-3xl font-bold bg-black text-white inline-block px-6 py-3 border-4 border-white shadow-[8px_8px_0_#fff]"
            >
              No bots. Direct access to the founders.
            </motion.p>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="px-6 py-16 border-b-4 border-black bg-[#FFD700]">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.a 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0 }}
              whileHover={{ y: -8, x: -8, transition: { type: "spring", stiffness: 300, damping: 20 } }}
              href="mailto:support.m4y@gmail.com" 
              className="block bg-white p-8 border-4 border-black shadow-[8px_8px_0_#000] hover:shadow-[16px_16px_0_#000] transition-shadow text-center"
            >
              <h3 className="text-2xl font-black uppercase mb-4">Email</h3>
              <p className="font-bold text-xl break-all">support.m4y@gmail.com</p>
            </motion.a>
            <motion.a 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -8, x: -8, transition: { type: "spring", stiffness: 300, damping: 20 } }}
              href="https://wa.me/919258735381" target="_blank" rel="noopener noreferrer" 
              className="block bg-[#25D366] text-white p-8 border-4 border-black shadow-[8px_8px_0_#000] hover:shadow-[16px_16px_0_#000] transition-shadow text-center"
            >
              <h3 className="text-2xl font-black uppercase mb-4">WhatsApp</h3>
              <p className="font-bold text-xl">+91 92587 35381</p>
            </motion.a>
            <Link href="/book-call" passHref legacyBehavior>
              <motion.a 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{ y: -8, x: -8, transition: { type: "spring", stiffness: 300, damping: 20 } }}
                className="block bg-black text-[#FFD700] p-8 border-4 border-black shadow-[8px_8px_0_#000] hover:shadow-[16px_16px_0_#000] transition-shadow text-center"
              >
                <h3 className="text-2xl font-black uppercase mb-4">Book A Call</h3>
                <p className="font-bold text-xl">Schedule 30 mins</p>
              </motion.a>
            </Link>
          </div>
        </section>

        {/* Form Section */}
        <section className="px-6 py-24 border-b-4 border-black bg-white">
          <motion.div {...fadeUp} className="max-w-3xl mx-auto bg-white p-8 md:p-12 border-4 border-black shadow-[16px_16px_0_#000]">
            <h2 className="text-4xl font-black uppercase tracking-tighter mb-8">Drop A Message</h2>
            
            {status === "success" ? (
              <div className="bg-[#25D366] text-white p-8 border-4 border-black shadow-[8px_8px_0_#000] text-center flex flex-col items-center gap-4">
                <div className="text-5xl">🎉</div>
                <h3 className="text-3xl font-black uppercase">We Got Your Message!</h3>
                <p className="text-xl font-bold">We'll WhatsApp you within 2 hours.</p>
                <a
                  href="https://wa.me/919258735381"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-2 bg-black text-white font-black uppercase tracking-widest px-6 py-3 border-4 border-white shadow-[4px_4px_0_#fff] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all text-sm"
                >
                  💬 Message Us on WhatsApp Now
                </a>
              </div>
            ) : (
              <form action={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-xl font-bold uppercase mb-2">Name</label>
                  <input type="text" name="name" id="name" required disabled={status === "loading"} className="w-full border-4 border-black p-4 text-lg font-medium focus:outline-none focus:ring-4 focus:ring-[#FFD700] transition-all bg-[#f0f0f0] disabled:opacity-50" placeholder="JOHN DOE" />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-xl font-bold uppercase mb-2">Email</label>
                    <input type="email" name="email" id="email" required disabled={status === "loading"} className="w-full border-4 border-black p-4 text-lg font-medium focus:outline-none focus:ring-4 focus:ring-[#FFD700] transition-all bg-[#f0f0f0] disabled:opacity-50" placeholder="john@company.com" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-xl font-bold uppercase mb-2">Phone</label>
                    <input type="tel" name="phone" id="phone" disabled={status === "loading"} className="w-full border-4 border-black p-4 text-lg font-medium focus:outline-none focus:ring-4 focus:ring-[#FFD700] transition-all bg-[#f0f0f0] disabled:opacity-50" placeholder="+91 99999 99999" />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-xl font-bold uppercase mb-2">Message</label>
                  <textarea name="message" id="message" rows={4} required disabled={status === "loading"} className="w-full border-4 border-black p-4 text-lg font-medium focus:outline-none focus:ring-4 focus:ring-[#FFD700] transition-all bg-[#f0f0f0] resize-none disabled:opacity-50" placeholder="How can we help you dominate your market?"></textarea>
                </div>
                
                <motion.button 
                  whileHover={status !== "loading" ? { y: -4, x: -4, transition: { type: "spring", stiffness: 300 } } : {}}
                  whileTap={status !== "loading" ? { y: 0, x: 0 } : {}}
                  type="submit" 
                  disabled={status === "loading"}
                  className="w-full block bg-[#FF3B00] text-white text-2xl font-black uppercase p-6 border-4 border-black shadow-[8px_8px_0_#000] hover:shadow-[12px_12px_0_#000] transition-shadow disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === "loading" ? "Sending..." : "Send Message"}
                </motion.button>

                {status === "error" && (
                  <p className="text-[#FF3B00] font-bold text-center mt-4">Failed to send message. Please try again.</p>
                )}
              </form>
            )}
          </motion.div>
        </section>

        {/* Bottom Strip */}
        <section className="py-8 bg-black text-[#FFD700] text-center border-b-4 border-black">
          <p className="text-3xl font-black uppercase tracking-widest">INDIA — REMOTE & GLOBAL</p>
        </section>
      </main>

      <Footer />
    </div>
  );
}
