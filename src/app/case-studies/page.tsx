import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import FloatingCTA from '@/components/ui/FloatingCTA';
import CaseStudyList from './CaseStudyList';
import { getPublishedCaseStudies } from '@/lib/public-data';

export const revalidate = 60;

export default async function CaseStudiesPage() {
  const caseStudies = await getPublishedCaseStudies();
  
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white text-[#0A0A0A] overflow-hidden">
        
        <section className="relative pt-40 pb-20 md:pt-48 md:pb-24 border-b border-black/10 bg-gray-50">
          <div className="w-full px-6 md:px-16 lg:px-32 xl:px-40 max-w-[1400px] mx-auto text-center">
            <h1 className="text-6xl md:text-8xl lg:text-[100px] font-black uppercase tracking-tight mb-8 leading-[0.9]">
              Real Results for <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF3B00] to-[#FFD700]">Real Businesses</span>
            </h1>
            <p className="text-xl md:text-2xl font-medium max-w-2xl mx-auto">
              See how we've helped 150+ brands achieve extraordinary growth through relentless execution and brutal honesty.
            </p>
          </div>
        </section>

        <section className="relative py-24 z-10">
          <div className="w-full px-6 md:px-16 lg:px-32 xl:px-40 max-w-[1400px] mx-auto">
            <CaseStudyList caseStudies={caseStudies as any} />
          </div>
        </section>
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}
