'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, ArrowRight, Tag, User } from 'lucide-react';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import FloatingCTA from '@/components/ui/FloatingCTA';
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
      <main className="min-h-screen bg-white text-[#0A0A0A] overflow-hidden">
        
        <section className="relative pt-40 pb-20 md:pt-48 md:pb-24 border-b border-black/10 bg-gray-50">
          <div className="w-full px-6 md:px-12 lg:px-24 max-w-[1400px] mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-6xl md:text-8xl lg:text-[100px] font-black uppercase tracking-tighter mb-8 leading-[0.9]"
            >
              Marketing <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF3B00] to-[#FFD700]">Insights</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl md:text-2xl font-medium max-w-2xl mx-auto"
            >
              Expert advice, industry trends, and actionable strategies to grow your business.
            </motion.p>
          </div>
        </section>

        <section className="relative py-24 z-10">
          <div className="w-full px-6 md:px-12 lg:px-24 max-w-[1400px] mx-auto">
            
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4 mb-20">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-8 py-3 font-bold uppercase tracking-widest text-sm border-2 border-black transition-all ${
                    activeCategory === category 
                      ? 'bg-black text-white shadow-[4px_4px_0_0_#FF3B00] translate-y-[-2px]' 
                      : 'bg-white text-black hover:bg-gray-100 hover:shadow-[4px_4px_0_0_#000] hover:translate-y-[-2px]'
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
                className="mb-20"
              >
                <div className="modern-card p-0 overflow-hidden group bg-white flex flex-col lg:flex-row">
                  <div className="lg:w-1/2 min-h-[300px] lg:min-h-auto bg-black relative border-b-4 lg:border-b-0 lg:border-r-4 border-black">
                     {/* Placeholder for image - using abstract gradient pattern instead */}
                     <div className="absolute inset-0 bg-gradient-to-br from-[#FF3B00] to-[#FFD700] opacity-90 group-hover:opacity-100 transition-opacity"></div>
                     <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-30 mix-blend-overlay"></div>
                  </div>
                  <div className="lg:w-1/2 p-8 lg:p-16 flex flex-col justify-center">
                    <div className="flex items-center gap-4 mb-8">
                      <span className="bg-[#FFD700] text-black px-4 py-1 text-sm font-black uppercase tracking-widest border-2 border-black flex items-center gap-2">
                        <Tag size={16} strokeWidth={3} /> {featuredPost.category}
                      </span>
                      <span className="text-gray-500 font-bold uppercase tracking-widest text-sm">{featuredPost.date}</span>
                    </div>
                    <h2 className="text-4xl lg:text-6xl font-black uppercase tracking-tighter mb-6 leading-[1.1] hover:text-[#FF3B00] transition-colors">
                      <Link href={`/blog/${featuredPost.id}`}>{featuredPost.title}</Link>
                    </h2>
                    <p className="text-gray-700 text-lg md:text-xl font-medium mb-12 line-clamp-3">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center justify-between mt-auto">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full border-2 border-black flex items-center justify-center bg-gray-100">
                          <User size={20} />
                        </div>
                        <div>
                          <div className="font-bold uppercase tracking-widest text-sm text-black">{featuredPost.author}</div>
                          <div className="text-xs font-bold text-gray-500 uppercase tracking-widest flex items-center gap-1 mt-1">
                            <Clock size={12} strokeWidth={3} /> {featuredPost.readTime} read
                          </div>
                        </div>
                      </div>
                      <Link 
                        href={`/blog/${featuredPost.id}`}
                        className="bg-black text-white p-4 hover:bg-[#FF3B00] transition-colors"
                      >
                        <ArrowRight size={24} strokeWidth={3} />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Grid Posts */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {regularPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="modern-card h-full flex flex-col bg-white p-6 md:p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <span className="text-[#FF3B00] text-xs font-black uppercase tracking-widest">{post.category}</span>
                      <span className="text-gray-400 text-xs font-bold uppercase tracking-widest">• {post.date}</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter mb-4 leading-tight hover:text-[#FF3B00] transition-colors">
                      <Link href={`/blog/${post.id}`}>{post.title}</Link>
                    </h3>
                    <p className="text-gray-600 mb-8 font-medium line-clamp-3 flex-grow">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between pt-6 border-t-2 border-black/10">
                       <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-black">
                         <User size={14} className="text-gray-500" strokeWidth={3}/> {post.author}
                       </div>
                       <div className="flex items-center gap-1 text-xs font-bold uppercase tracking-widest text-gray-500">
                         <Clock size={14} strokeWidth={3} /> {post.readTime}
                       </div>
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
