import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import FloatingCTA from '@/components/ui/FloatingCTA';
import BlogList from './BlogList';
import { getPublishedBlogs } from '@/lib/public-data';

// Force dynamic if needed, or rely on revalidation. We'll use default caching for now (it'll build statically but update based on config)
export const revalidate = 60;

export const metadata = {
  title: 'Blog & Insights | M4Y Digital Agency',
  description: 'Marketing strategies, growth hacks, and industry insights from the M4Y team.',
}; // revalidate every 60 seconds

export default async function BlogPage() {
  const posts = await getPublishedBlogs();

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white text-[#0A0A0A] overflow-hidden">
        
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-24 border-b-8 border-black bg-[#FFD700]">
          <div className="w-full px-6 md:px-16 lg:px-32 xl:px-40 max-w-[1400px] mx-auto">
            <div className="max-w-5xl">
              <div className="inline-block px-4 py-2 bg-black text-white text-xs font-black uppercase tracking-widest mb-8 border-4 border-black shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]">
                Insights & Strategy
              </div>
              <h1 className="text-5xl md:text-8xl lg:text-[100px] font-black uppercase tracking-tighter mb-8 leading-[0.9]">
                The Growth <br/> Playbook.
              </h1>
              <p className="text-xl md:text-2xl font-bold text-gray-800 max-w-3xl leading-relaxed">
                We don't keep secrets. Read our latest strategies on SEO, Paid Ads, Web Development, and AI Automation to scale your business.
              </p>
            </div>
          </div>
        </section>

        <section className="relative py-24 z-10">
          <div className="w-full px-6 md:px-16 lg:px-32 xl:px-40 max-w-[1400px] mx-auto">
            
            <BlogList posts={posts} />
          </div>
        </section>
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}
