import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import FloatingCTA from '@/components/ui/FloatingCTA';
import CaseStudyList from './CaseStudyList';
import { getPublishedCaseStudies } from '@/lib/public-data';

export const revalidate = 60;

export const metadata = {
  title: 'Case Studies | M4Y Digital Agency',
  description: 'Explore our portfolio of digital growth success stories. See how we help brands scale.',
};

export default async function CaseStudiesPage() {
  const caseStudies = await getPublishedCaseStudies();
  const selectedCaseStudies = caseStudies.slice(0, 8);
  
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white text-[#0A0A0A] overflow-hidden">
        
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-24 border-b-8 border-black bg-white">
          <div className="w-full px-6 md:px-16 lg:px-32 xl:px-40 max-w-[1400px] mx-auto">
            <div className="max-w-5xl">
              <div className="inline-block px-4 py-2 bg-[#FFD700] text-black text-xs font-black uppercase tracking-widest mb-8 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                Our Portfolio
              </div>
              <h1 className="text-5xl md:text-8xl lg:text-[100px] font-black uppercase tracking-tighter mb-8 leading-[0.9]">
                Real Results for <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF3B00] to-[#FFD700]">Real Businesses.</span>
              </h1>
              <p className="text-xl md:text-2xl font-bold text-gray-800 max-w-3xl leading-relaxed">
                See how we've helped ambitous brands achieve extraordinary growth through relentless execution and brutal honesty.
              </p>
            </div>
          </div>
        </section>

        <section className="relative py-24 z-10">
          <div className="w-full px-6 md:px-16 lg:px-32 xl:px-40 max-w-[1400px] mx-auto">
            <CaseStudyList caseStudies={selectedCaseStudies as any} />
          </div>
        </section>
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}
