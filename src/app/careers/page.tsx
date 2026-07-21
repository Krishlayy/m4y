'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import FloatingCTA from '@/components/ui/FloatingCTA';
import { SectionHeading, GlassCard } from '@/components/ui/Shared';
import AuroraBackground from '@/components/ui/AuroraBackground';
import { 
  Globe2, Lightbulb, TrendingUp, Coffee, 
  Clock, BookOpen, Plane, Heart, Cpu, Briefcase, 
  MapPin, ArrowRight 
} from 'lucide-react';
import Link from 'next/link';

const cultureValues = [
  {
    title: 'Remote-first',
    icon: Globe2,
    description: 'Work from anywhere. We care about output and creativity, not where you place your laptop.',
    color: 'text-[#6C4DFF]'
  },
  {
    title: 'Creative Freedom',
    icon: Lightbulb,
    description: 'We encourage out-of-the-box thinking. Bring your wildest ideas; we might just build them.',
    color: 'text-[#FF5DB1]'
  },
  {
    title: 'Growth Mindset',
    icon: TrendingUp,
    description: 'Continuous learning is in our DNA. We invest heavily in your professional development.',
    color: 'text-[#00D9FF]'
  },
  {
    title: 'Work-Life Balance',
    icon: Coffee,
    description: 'Burnout isn\'t a badge of honor here. We respect your time off and encourage healthy boundaries.',
    color: 'text-[#00E676]'
  }
];

const perks = [
  { title: 'Flexible Hours', icon: Clock },
  { title: 'Learning Budget', icon: BookOpen },
  { title: 'Team Retreats', icon: Plane },
  { title: 'Health Benefits', icon: Heart },
  { title: 'Latest Tools', icon: Cpu },
  { title: 'Equity Options', icon: Briefcase }
];

const openPositions = [
  {
    title: 'Performance Marketing Manager',
    department: 'Marketing',
    type: 'Full-time',
    location: 'Remote (US/Canada)',
    description: 'Lead paid acquisition strategies across Meta, Google, and TikTok for high-growth DTC brands. Manage 7-figure ad budgets and optimize for ROAS.'
  },
  {
    title: 'Senior Full Stack Developer',
    department: 'Engineering',
    type: 'Full-time',
    location: 'Remote (Global)',
    description: 'Build cutting-edge web experiences and internal marketing tools using Next.js, React, and Node.js. Mentor junior developers and drive technical architecture.'
  },
  {
    title: 'AI/ML Engineer',
    department: 'Innovation',
    type: 'Full-time',
    location: 'Remote (Global)',
    description: 'Develop custom AI solutions for creative generation, predictive analytics, and automated campaign optimization to keep our agency at the bleeding edge.'
  },
  {
    title: 'Content Strategist',
    department: 'Creative',
    type: 'Full-time',
    location: 'Remote (US/UK)',
    description: 'Shape the narrative for top-tier brands. Develop multi-channel content strategies that engage audiences and drive measurable business outcomes.'
  },
  {
    title: 'Graphic Designer',
    department: 'Creative',
    type: 'Full-time',
    location: 'Remote (Global)',
    description: 'Create thumb-stopping visual assets for ad campaigns, social media, and brand identities. Mastery of Figma and Adobe Creative Suite required.'
  },
  {
    title: 'Social Media Manager',
    department: 'Marketing',
    type: 'Full-time',
    location: 'Remote (US)',
    description: 'Be the voice of major brands online. Manage communities, create engaging daily content, and ride the latest trends on TikTok and Instagram Reels.'
  },
  {
    title: 'Influencer Relations Manager',
    department: 'Partnerships',
    type: 'Full-time',
    location: 'Remote (Global)',
    description: 'Identify, negotiate with, and manage relationships with creators and influencers across various niches to run authentic and scalable campaigns.'
  },
  {
    title: 'Sales Development Representative',
    department: 'Sales',
    type: 'Full-time',
    location: 'Remote (US)',
    description: 'Drive the agency\'s growth by identifying and qualifying prospective clients. Master the art of outreach and lay the groundwork for major partnerships.'
  }
];

export default function CareersPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#09090B] text-white overflow-hidden pb-32">
        <AuroraBackground className="absolute top-0 left-0 right-0 h-[800px] z-0 opacity-30" />
        
        {/* Hero Section */}
        <section className="relative z-10 w-full mx-auto px-4 md:px-6 pt-40 md:pt-24 pb-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-4 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md"
          >
            <span className="text-sm font-semibold tracking-wide text-[#00E676] uppercase">We are hiring</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-8xl font-extrabold tracking-tight mb-8"
          >
            Build the Future of <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5DB1] to-[#6C4DFF]">Marketing With Us</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Join a team of creators, strategists, and engineers who are redefining what a marketing agency can be.
          </motion.p>
        </section>

        {/* Culture Section */}
        <section className="relative z-10 container mx-auto px-4 md:px-6 py-24">
          <SectionHeading title="Our Culture" subtitle="The principles that guide how we work and play together." />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mt-16">
            {cultureValues.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <GlassCard className="p-8 md:p-12 h-full flex flex-col md:flex-row gap-8 items-start group hover:border-white/20 transition-all">
                    <div className={`p-5 rounded-2xl bg-white/5 border border-white/10 shrink-0 ${value.color} group-hover:scale-110 transition-transform duration-500`}>
                      <Icon size={40} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                      <p className="text-gray-400 text-lg leading-relaxed">{value.description}</p>
                    </div>
                  </GlassCard>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Perks Section */}
        <section className="relative z-10 py-24 bg-white/[0.02] border-y border-white/5">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Benefits & Perks</h2>
              <p className="text-xl text-gray-400">Everything you need to do your best work.</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {perks.map((perk, index) => {
                const Icon = perk.icon;
                return (
                  <motion.div
                    key={perk.title}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="flex flex-col items-center justify-center p-6 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-center gap-4"
                  >
                    <Icon size={32} className="text-[#00D9FF]" />
                    <span className="font-medium text-sm md:text-base">{perk.title}</span>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Open Positions Section */}
        <section className="relative z-10 container mx-auto px-4 md:px-6 py-24" id="open-positions">
          <SectionHeading title="Open Positions" subtitle="Find your next big opportunity." />
          
          <div className="mt-16 space-y-6">
            {openPositions.map((position, index) => (
              <motion.div
                key={position.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <GlassCard className="p-6 md:p-8 hover:border-[#6C4DFF]/50 transition-all duration-300 group">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div className="flex-grow">
                      <div className="flex flex-wrap items-center gap-3 mb-4">
                        <span className="px-3 py-1 text-xs font-semibold rounded-full bg-[#6C4DFF]/10 text-[#6C4DFF] border border-[#6C4DFF]/20">
                          {position.department}
                        </span>
                        <span className="px-3 py-1 text-xs font-semibold rounded-full bg-white/5 text-gray-300 border border-white/10">
                          {position.type}
                        </span>
                        <span className="flex items-center gap-1 text-xs text-gray-400">
                          <MapPin size={12} />
                          {position.location}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold mb-3">{position.title}</h3>
                      <p className="text-gray-400 text-sm md:text-base max-w-3xl line-clamp-2 md:line-clamp-none">
                        {position.description}
                      </p>
                    </div>
                    
                    <div className="shrink-0">
                      <Link href="/contact">
                        <button className="w-full md:w-auto px-8 py-4 rounded-xl bg-white text-black font-bold hover:bg-gray-200 transition-colors flex items-center justify-center gap-2 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                          Apply Now
                          <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                      </Link>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}
