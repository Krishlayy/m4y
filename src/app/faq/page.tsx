'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import FloatingCTA from '@/components/ui/FloatingCTA';
import { faqs } from '@/data/faqs';

export default function FAQPage() {
  const [openFaq, setOpenFaq] = useState<string | null>(null);

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white text-[#0A0A0A] overflow-hidden">
        
        {/* Header Section */}
        <section className="relative pt-40 pb-20 md:pt-48 md:pb-24 border-b border-black/10 bg-gray-50">
          <div className="w-full px-6 md:px-12 lg:px-24 max-w-[1400px] mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-6xl md:text-8xl lg:text-[100px] font-black uppercase tracking-tighter mb-8 leading-[0.9]"
            >
              Frequently <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF3B00] to-[#FFD700]">Asked Questions</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl md:text-2xl font-medium max-w-2xl mx-auto"
            >
              Everything you need to know about partnering with M4Y. 
              Radical transparency, zero fluff.
            </motion.p>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-24 relative z-10">
          <div className="w-full px-6 md:px-12 lg:px-24 max-w-[1000px] mx-auto">
            <div className="space-y-6">
              {faqs.map((faq) => (
                <div 
                  key={faq.id} 
                  className="modern-card overflow-hidden bg-white hover:bg-gray-50 transition-colors"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === faq.id ? null : faq.id)}
                    className="w-full flex items-center justify-between p-6 md:p-8 text-left focus:outline-none"
                  >
                    <span className="text-2xl md:text-3xl font-black uppercase tracking-tighter pr-8">{faq.question}</span>
                    <div className="w-12 h-12 rounded-full border-4 border-black shrink-0 flex items-center justify-center bg-white">
                      {openFaq === faq.id ? (
                        <ChevronUp className="w-6 h-6" strokeWidth={3} />
                      ) : (
                        <ChevronDown className="w-6 h-6" strokeWidth={3} />
                      )}
                    </div>
                  </button>
                  <AnimatePresence>
                    {openFaq === faq.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 md:px-8 pb-8 pt-2 text-lg md:text-xl font-medium leading-relaxed">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}
