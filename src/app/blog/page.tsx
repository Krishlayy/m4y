import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import FloatingCTA from '@/components/ui/FloatingCTA';
import BlogList from './BlogList';
import { getPublishedBlogs } from '@/lib/public-data';

// Force dynamic if needed, or rely on revalidation. We'll use default caching for now (it'll build statically but update based on config)
export const revalidate = 60; // revalidate every 60 seconds

export default async function BlogPage() {
  const posts = await getPublishedBlogs();

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white text-[#0A0A0A] overflow-hidden">
        
        <section className="relative pt-40 pb-20 md:pt-48 md:pb-24 border-b border-black/10 bg-gray-50">
          <div className="w-full px-6 md:px-16 lg:px-32 xl:px-40 max-w-[1400px] mx-auto text-center">
            <h1 className="text-6xl md:text-8xl lg:text-[100px] font-black uppercase tracking-tight mb-8 leading-[0.9]">
              Marketing <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF3B00] to-[#FFD700]">Insights</span>
            </h1>
            <p className="text-xl md:text-2xl font-medium max-w-2xl mx-auto">
              Expert advice, industry trends, and actionable strategies to grow your business.
            </p>
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
