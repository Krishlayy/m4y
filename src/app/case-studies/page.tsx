'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import FloatingCTA from '@/components/ui/FloatingCTA';
import BrutalistChart from '@/components/ui/BrutalistChart';
import { caseStudies } from '@/data/case-studies';

export default function CaseStudiesPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white text-[#0A0A0A] overflow-hidden">
        
        <section className="relative pt-40 pb-20 md:pt-48 md:pb-24 border-b border-black/10 bg-gray-50">
          <div className="w-full px-6 md:px-12 lg:px-24 max-w-[1400px] mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-6xl md:text-8xl lg:text-[100px] font-black uppercase tracking-tighter mb-8 leading-[0.9]"
            >
              Real Results for <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF3B00] to-[#FFD700]">Real Businesses</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl md:text-2xl font-medium max-w-2xl mx-auto"
            >
              See how we've helped 150+ brands achieve extraordinary growth through relentless execution and brutal honesty.
            </motion.p>
          </div>
        </section>

        <section className="relative py-24 z-10">
          <div className="w-full px-6 md:px-12 lg:px-24 max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {caseStudies.map((study, index) => (
                <motion.div
                  key={study.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="modern-card h-full flex flex-col bg-white">
                    <div className="flex justify-between items-start mb-8 gap-4">
                      <div>
                        <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter leading-[1.1] mb-4">{study.title}</h2>
                        <div className="flex flex-wrap items-center gap-3 text-sm font-bold uppercase tracking-widest">
                          <span className="bg-gray-100 px-3 py-1 text-black">{study.client}</span>
                          <span className="bg-gray-100 px-3 py-1 text-[#FF3B00]">{study.industry}</span>
                        </div>
                      </div>
                      <div className="bg-[#FFD700] text-black px-4 py-2 font-black uppercase tracking-widest flex items-center gap-2 border-2 border-black shadow-[4px_4px_0_0_#000] shrink-0">
                        <TrendingUp size={18} strokeWidth={3} />
                        {study.roi || 'High ROI'}
                      </div>
                    </div>
                    
                    <p className="text-lg font-medium mb-10 text-gray-700 line-clamp-3">
                      {study.challenge}
                    </p>
                    
                    <div className="grid grid-cols-2 gap-6 mb-10">
                      {study.results?.slice(0, 2).map((result, i) => (
                        <div key={i} className="bg-gray-50 border-2 border-black p-4 flex flex-col justify-center">
                          <div className="text-3xl md:text-4xl font-black text-[#FF3B00] mb-1 tracking-tighter leading-none">{result.after}</div>
                          <div className="text-xs font-bold uppercase tracking-widest text-gray-500">{result.metric}</div>
                        </div>
                      ))}
                    </div>

                    <div className="mb-10 -mx-6 px-6">
                      <BrutalistChart />
                    </div>
                    
                    <div className="mt-auto pt-8 border-t-2 border-black">
                      <Link 
                        href={`/case-studies/${study.id}`}
                        className="inline-flex items-center gap-2 text-xl font-black uppercase tracking-tighter hover:text-[#FF3B00] transition-colors group"
                      >
                        Read Case Study <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" strokeWidth={3} />
                      </Link>
                    </div>
                  </div>
                </motion.div>
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
