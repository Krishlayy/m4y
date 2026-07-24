"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import BrutalistChart from '@/components/ui/BrutalistChart';

type CaseStudy = {
  id: string;
  title: string;
  slug: string;
  client: string;
  industry: string | null;
  results: string;
  problem: string;
  metrics: any;
};

export default function CaseStudyList({ caseStudies }: { caseStudies: CaseStudy[] }) {
  if (!caseStudies || caseStudies.length === 0) {
    return (
      <div className="text-center py-20 text-gray-500">
        <h3 className="text-2xl font-bold mb-4">No case studies found</h3>
        <p>Check back later for new content.</p>
      </div>
    );
  }

  return (
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
                <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight leading-[1.1] mb-4">{study.title}</h2>
                <div className="flex flex-wrap items-center gap-3 text-sm font-bold uppercase tracking-widest">
                  <span className="bg-gray-100 px-3 py-1 text-black">{study.client}</span>
                  {study.industry && (
                    <span className="bg-gray-100 px-3 py-1 text-[#FF3B00]">{study.industry}</span>
                  )}
                </div>
              </div>
              <div className="bg-[#FFD700] text-black px-4 py-2 font-black uppercase tracking-widest flex items-center gap-2 border-2 border-black shadow-[4px_4px_0_0_#000] shrink-0">
                <TrendingUp size={18} strokeWidth={3} />
                {study.results || 'High ROI'}
              </div>
            </div>
            
            <p className="text-lg font-medium mb-10 text-gray-700 line-clamp-3">
              {study.problem}
            </p>
            
            <div className="mb-10 -mx-6 px-6">
              <BrutalistChart />
            </div>
            
            <div className="mt-auto pt-8 border-t-2 border-black">
              <Link 
                href={`/case-studies/${study.slug}`}
                className="inline-flex items-center gap-2 text-xl font-black uppercase tracking-tight hover:text-[#FF3B00] transition-colors group"
              >
                Read Case Study <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" strokeWidth={3} />
              </Link>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
