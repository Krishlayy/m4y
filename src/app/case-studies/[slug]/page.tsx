import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getCaseStudyBySlug } from '@/lib/public-data';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import FloatingCTA from '@/components/ui/FloatingCTA';
import Link from 'next/link';
import { ArrowRight, Trophy, Target, Zap } from 'lucide-react';
import { Prisma } from '@prisma/client';

export const revalidate = 60;

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const study = await getCaseStudyBySlug(params.slug);
  if (!study) return { title: 'Case Study Not Found' };
  
  return {
    title: `${study.title} | M4Y Case Studies`,
    description: study.seoDescription || study.problem.substring(0, 160),
    openGraph: {
      title: `${study.seoTitle || study.title} | M4Y`,
      description: study.seoDescription || study.problem.substring(0, 160),
    }
  };
}

export default async function CaseStudyPage({ params }: { params: { slug: string } }) {
  const study = await getCaseStudyBySlug(params.slug);
  if (!study || study.status !== 'PUBLISHED') notFound();

  let metrics = (study.metrics as { label: string, value: string }[]) || [];
  let beforeAndAfter = (study.beforeAndAfter as { before: string, after: string, metric: string }[]) || [];
  const servicesUsed = (study.servicesUsed as string[]) || [];

  // Filter out any metrics that mention price, cost, revenue, or users
  const hiddenTerms = ['user', 'price', 'cost', 'revenue', 'spend', 'budget'];
  metrics = metrics.filter(m => !hiddenTerms.some(term => m.label.toLowerCase().includes(term)));
  beforeAndAfter = beforeAndAfter.filter(ba => !hiddenTerms.some(term => ba.metric.toLowerCase().includes(term)));

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white pt-40 pb-24 border-b-8 border-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          {/* Breadcrumbs */}
          <div className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-12">
            <Link href="/" className="hover:text-black">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/case-studies" className="hover:text-black">Case Studies</Link>
            <span className="mx-2">/</span>
            <span className="text-black">{study.client}</span>
          </div>

          {/* Hero Header */}
          <div className="mb-20">
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="px-3 py-1 bg-[#FFD700] text-black text-xs font-black uppercase tracking-widest border-2 border-black">
                {study.industry}
              </div>
              <div className="px-3 py-1 bg-black text-white text-xs font-black uppercase tracking-widest">
                Client: {study.client}
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8 leading-[0.9]">
              {study.title}
            </h1>
          </div>

          {/* KPI Banner */}
          {metrics.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
              {metrics.map((m, i) => (
                <div key={i} className="modern-card bg-black text-white p-8">
                  <p className="text-[#00E676] font-black text-5xl mb-2">{m.value}</p>
                  <p className="font-bold uppercase tracking-widest text-gray-400 text-sm">{m.label}</p>
                </div>
              ))}
            </div>
          )}

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Main Content (≈70%) */}
            <div className="lg:col-span-8 space-y-20">
              
              <section>
                <div className="flex items-center gap-4 mb-6 border-b-4 border-black pb-4">
                  <Target className="w-8 h-8 text-[#FF3B00]" />
                  <h2 className="text-3xl font-black uppercase tracking-widest">The Challenge</h2>
                </div>
                <p className="text-lg font-bold text-gray-700 leading-relaxed whitespace-pre-wrap">
                  {study.problem}
                </p>
              </section>

              {study.research && (
                <section>
                  <div className="flex items-center gap-4 mb-6 border-b-4 border-black pb-4">
                    <h2 className="text-3xl font-black uppercase tracking-widest">Research & Discovery</h2>
                  </div>
                  <p className="text-lg font-bold text-gray-700 leading-relaxed whitespace-pre-wrap">
                    {study.research}
                  </p>
                </section>
              )}

              <section>
                <div className="flex items-center gap-4 mb-6 border-b-4 border-black pb-4">
                  <Zap className="w-8 h-8 text-[#FFD700]" />
                  <h2 className="text-3xl font-black uppercase tracking-widest">Our Strategy</h2>
                </div>
                <p className="text-lg font-bold text-gray-700 leading-relaxed whitespace-pre-wrap">
                  {study.strategy}
                </p>
              </section>

              {study.execution && (
                <section>
                  <div className="flex items-center gap-4 mb-6 border-b-4 border-black pb-4">
                    <h2 className="text-3xl font-black uppercase tracking-widest">Execution</h2>
                  </div>
                  <p className="text-lg font-bold text-gray-700 leading-relaxed whitespace-pre-wrap">
                    {study.execution}
                  </p>
                </section>
              )}

              <section>
                <div className="flex items-center gap-4 mb-6 border-b-4 border-black pb-4">
                  <Trophy className="w-8 h-8 text-[#00E676]" />
                  <h2 className="text-3xl font-black uppercase tracking-widest">The Results</h2>
                </div>
                <p className="text-lg font-bold text-gray-700 leading-relaxed whitespace-pre-wrap mb-12">
                  {study.results}
                </p>

                {/* Before and After Metrics */}
                {beforeAndAfter.length > 0 && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {beforeAndAfter.map((ba, i) => (
                      <div key={i} className="border-4 border-black p-6 bg-[#F4F4F5] relative">
                        <h4 className="font-black uppercase tracking-widest text-sm mb-4">{ba.metric}</h4>
                        <div className="flex justify-between items-end border-b-2 border-black/10 pb-4 mb-4">
                          <span className="font-bold text-gray-500 uppercase text-xs">Before</span>
                          <span className="font-black text-2xl text-gray-400 line-through">{ba.before}</span>
                        </div>
                        <div className="flex justify-between items-end">
                          <span className="font-bold text-black uppercase text-xs">After</span>
                          <span className="font-black text-4xl text-[#00E676] drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">{ba.after}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </section>
              
              {/* Testimonial */}
              {study.testimonial && (
                <section className="modern-card bg-[#FFD700] p-8 md:p-12">
                  <p className="text-2xl md:text-3xl font-black leading-tight italic mb-8">
                    "{study.testimonial}"
                  </p>
                  <div className="font-bold uppercase tracking-widest text-sm">
                    — {study.client} Leadership
                  </div>
                </section>
              )}

            </div>

            {/* Right Sidebar (≈30%) */}
            <div className="lg:col-span-4">
              <div className="sticky top-32 space-y-8">
                
                <div className="border-4 border-black bg-white p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <h3 className="font-black uppercase tracking-widest text-xl mb-6 border-b-4 border-black pb-2">Project Scope</h3>
                  
                  {study.timeline && (
                    <div className="mb-6">
                      <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-1">Timeline</p>
                      <p className="font-black text-lg">{study.timeline}</p>
                    </div>
                  )}

                  {servicesUsed.length > 0 && (
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-3">Services Utilized</p>
                      <div className="flex flex-wrap gap-2">
                        {servicesUsed.map((s, i) => (
                          <span key={i} className="px-3 py-1 bg-gray-100 border-2 border-black text-xs font-bold uppercase tracking-wider">
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div className="border-4 border-black bg-black text-white p-8 shadow-[4px_4px_0px_0px_rgba(255,59,0,1)]">
                  <h3 className="font-black uppercase text-2xl mb-4">Want similar results?</h3>
                  <p className="font-bold text-gray-400 mb-8">
                    Let's discuss how we can engineer a growth strategy for your business.
                  </p>
                  <Link href="/contact" className="btn-primary w-full block text-center bg-white text-black hover:bg-[#FFD700]">
                    Book a Strategy Call
                  </Link>
                </div>

              </div>
            </div>

          </div>
        </div>
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}
