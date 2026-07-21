'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, BarChart, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import FloatingCTA from '@/components/ui/FloatingCTA';
import { SectionHeading, GlassCard } from '@/components/ui/Shared';
import AuroraBackground from '@/components/ui/AuroraBackground';
import { caseStudies } from '@/data/case-studies';

export default function CaseStudiesPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#09090B] text-white overflow-hidden relative">
        <AuroraBackground />
        
        <section className="relative pt-40 pb-16 md:pt-24 md:pb-24 z-10">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
                Real Results for <span className="text-gradient">Real Businesses</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/70 mb-10">
                See how we've helped 150+ brands achieve extraordinary growth.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="relative py-16 md:py-24 z-10">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {caseStudies.map((study, index) => (
                <motion.div
                  key={study.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <GlassCard className="h-full flex flex-col hover:-translate-y-2 transition-transform duration-300">
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <h2 className="text-3xl font-bold mb-2">{study.title}</h2>
                        <div className="flex items-center gap-3 text-sm text-white/60">
                          <span className="bg-white/10 px-3 py-1 rounded-full">{study.client}</span>
                          <span className="bg-[#6C4DFF]/20 text-[#6C4DFF] px-3 py-1 rounded-full">{study.industry}</span>
                        </div>
                      </div>
                      <div className="bg-[#00E676]/20 text-[#00E676] px-4 py-2 rounded-full font-bold flex items-center gap-2">
                        <TrendingUp size={18} />
                        {study.roi || 'High ROI'}
                      </div>
                    </div>
                    
                    <p className="text-white/70 mb-8 line-clamp-3">
                      {study.challenge}
                    </p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-8">
                      {study.results?.slice(0, 2).map((result, i) => (
                        <div key={i} className="bg-white/5 rounded-xl p-4 border border-white/10">
                          <div className="text-2xl font-bold text-[#FF5DB1] mb-1">{result.after}</div>
                          <div className="text-sm text-white/60">{result.metric}</div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-auto">
                      <Link 
                        href={`/case-studies/${study.id}`}
                        className="inline-flex items-center gap-2 text-[#00D9FF] hover:text-white transition-colors font-semibold"
                      >
                        View Case Study <ArrowRight size={18} />
                      </Link>
                    </div>
                  </GlassCard>
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
