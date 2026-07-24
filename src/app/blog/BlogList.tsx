"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, ArrowRight, Tag, User } from 'lucide-react';
import Link from 'next/link';

type BlogPost = {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string | null;
  featuredImage: string | null;
  categories: any;
  authorName: string | null;
  status: string;
  publishDate: Date | null;
};

export default function BlogList({ posts }: { posts: BlogPost[] }) {
  // Using a simplified category array since we don't fetch full Category objects yet.
  // In a real scenario with relations, we'd map category.name
  const [activeCategory, setActiveCategory] = useState('All');
  
  // Since we don't have categories relations fetched yet, let's just use 'All'
  const categories = ['All'];
  
  const filteredPosts = posts;

  const featuredPost = filteredPosts[0];
  const regularPosts = filteredPosts.filter(post => post.id !== featuredPost?.id);

  if (!posts || posts.length === 0) {
    return (
      <div className="text-center py-20 text-gray-500">
        <h3 className="text-2xl font-bold mb-4">No posts found</h3>
        <p>Check back later for new content.</p>
      </div>
    );
  }

  return (
    <>
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
            <div className="lg:w-1/2 min-h-[300px] lg:min-h-auto bg-black relative border-b-4 lg:border-b-0 lg:border-r-4 border-black overflow-hidden">
               {featuredPost.featuredImage ? (
                 <img src={featuredPost.featuredImage} alt={featuredPost.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
               ) : (
                 <>
                   <div className="absolute inset-0 bg-gradient-to-br from-[#FF3B00] to-[#FFD700] opacity-90 group-hover:opacity-100 transition-opacity"></div>
                   <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-30 mix-blend-overlay"></div>
                 </>
               )}
            </div>
            <div className="lg:w-1/2 p-8 lg:p-16 flex flex-col justify-center">
              <div className="flex items-center gap-4 mb-8">
                <span className="bg-[#FFD700] text-black px-4 py-1 text-sm font-black uppercase tracking-widest border-2 border-black flex items-center gap-2">
                  <Tag size={16} strokeWidth={3} /> Marketing
                </span>
                <span className="text-gray-500 font-bold uppercase tracking-widest text-sm">
                  {featuredPost.publishDate ? new Date(featuredPost.publishDate).toLocaleDateString() : 'Draft'}
                </span>
              </div>
              <h2 className="text-4xl lg:text-6xl font-black uppercase tracking-tight mb-6 leading-[1.1] hover:text-[#FF3B00] transition-colors">
                <Link href={`/blog/${featuredPost.slug}`}>{featuredPost.title}</Link>
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
                    <div className="font-bold uppercase tracking-widest text-sm text-black">M4Y Team</div>
                    <div className="text-xs font-bold text-gray-500 uppercase tracking-widest flex items-center gap-1 mt-1">
                      <Clock size={12} strokeWidth={3} /> 5 min read
                    </div>
                  </div>
                </div>
                <Link 
                  href={`/blog/${featuredPost.slug}`}
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
              {post.featuredImage && (
                <div className="w-full aspect-video bg-gray-100 mb-6 border-2 border-black overflow-hidden relative">
                  <img src={post.featuredImage} alt={post.title} className="absolute inset-0 w-full h-full object-cover" />
                </div>
              )}
              <div className="flex items-center gap-3 mb-6">
                <span className="text-[#FF3B00] text-xs font-black uppercase tracking-widest">Marketing</span>
                <span className="text-gray-400 text-xs font-bold uppercase tracking-widest">• {post.publishDate ? new Date(post.publishDate).toLocaleDateString() : 'Draft'}</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-4 leading-tight hover:text-[#FF3B00] transition-colors">
                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
              </h3>
              <p className="text-gray-600 mb-8 font-medium line-clamp-3 flex-grow">
                {post.excerpt}
              </p>
              <div className="flex items-center justify-between pt-6 border-t-2 border-black/10">
                 <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-black">
                   <User size={14} className="text-gray-500" strokeWidth={3}/> M4Y Team
                 </div>
                 <div className="flex items-center gap-1 text-xs font-bold uppercase tracking-widest text-gray-500">
                   <Clock size={14} strokeWidth={3} /> 5 min
                 </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
}
