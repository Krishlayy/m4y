'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, ArrowRight, Tag, User } from 'lucide-react';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import FloatingCTA from '@/components/ui/FloatingCTA';
import { SectionHeading, GlassCard } from '@/components/ui/Shared';
import AuroraBackground from '@/components/ui/AuroraBackground';
import { blogPosts } from '@/data/blog';

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  
  const categories = ['All', ...Array.from(new Set(blogPosts.map(post => post.category)))];
  
  const filteredPosts = activeCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  const featuredPost = blogPosts[0];
  const regularPosts = filteredPosts.filter(post => post.id !== featuredPost.id || activeCategory !== 'All');

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#09090B] text-white overflow-hidden relative">
        <AuroraBackground />
        
        <section className="relative pt-40 pb-12 md:pt-24 md:pb-16 z-10">
          <div className="container mx-auto px-4 text-center max-w-4xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-extrabold mb-6"
            >
              Marketing <span className="text-gradient">Insights</span> & Strategies
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-white/70"
            >
              Expert advice, industry trends, and actionable strategies to grow your business.
            </motion.p>
          </div>
        </section>

        <section className="relative pb-24 z-10">
          <div className="container mx-auto px-4">
            
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3 mb-16">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-2 rounded-full font-medium transition-all ${
                    activeCategory === category 
                      ? 'bg-[#6C4DFF] text-white shadow-[0_0_20px_rgba(108,77,255,0.4)]' 
                      : 'bg-white/5 border border-white/10 hover:bg-white/10 text-white/70 hover:text-white'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Featured Post */}
            {activeCategory === 'All' && featuredPost && (
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-16"
              >
                <GlassCard className="p-0 overflow-hidden group">
                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="h-64 lg:h-auto bg-gradient-to-br from-[#6C4DFF]/40 to-[#FF5DB1]/40 relative">
                       {/* Placeholder for image */}
                       <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
                    </div>
                    <div className="p-8 lg:p-12 flex flex-col justify-center">
                      <div className="flex items-center gap-4 mb-6">
                        <span className="bg-[#FF5DB1]/20 text-[#FF5DB1] px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-2">
                          <Tag size={14} /> {featuredPost.category}
                        </span>
                        <span className="text-white/50 text-sm">{featuredPost.date}</span>
                      </div>
                      <h2 className="text-3xl lg:text-4xl font-bold mb-4 hover:text-[#00D9FF] transition-colors">
                        <Link href={`/blog/${featuredPost.id}`}>{featuredPost.title}</Link>
                      </h2>
                      <p className="text-white/70 text-lg mb-8 line-clamp-3">
                        {featuredPost.excerpt}
                      </p>
                      <div className="flex items-center justify-between mt-auto">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                            <User size={18} />
                          </div>
                          <div>
                            <div className="font-medium text-sm">{featuredPost.author}</div>
                            <div className="text-xs text-white/50 flex items-center gap-1">
                              <Clock size={12} /> {featuredPost.readTime} read
                            </div>
                          </div>
                        </div>
                        <Link 
                          href={`/blog/${featuredPost.id}`}
                          className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors"
                        >
                          <ArrowRight size={20} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            )}

            {/* Grid Posts */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <GlassCard className="h-full flex flex-col hover:-translate-y-2 transition-transform duration-300 p-6 md:p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-[#00D9FF] text-xs font-black uppercase tracking-tighter tracking-wider">{post.category}</span>
                      <span className="text-white/40 text-xs">• {post.date}</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-3 hover:text-[#6C4DFF] transition-colors">
                      <Link href={`/blog/${post.id}`}>{post.title}</Link>
                    </h3>
                    <p className="text-white/60 mb-6 line-clamp-3 text-sm flex-grow">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between pt-4 border-t border-white/10">
                       <div className="flex items-center gap-2 text-sm text-white/80">
                         <User size={14} className="text-white/50"/> {post.author}
                       </div>
                       <div className="flex items-center gap-1 text-xs text-white/50">
                         <Clock size={12} /> {post.readTime}
                       </div>
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
