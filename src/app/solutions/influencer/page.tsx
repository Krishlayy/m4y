'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, Star, Globe, GraduationCap, MapPin, Award, 
  FileSearch, Lightbulb, PlayCircle, BarChart2, CheckCircle2
} from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import FloatingCTA from '@/components/ui/FloatingCTA';
import { SectionHeading, GlassCard } from '@/components/ui/Shared';
import AuroraBackground from '@/components/ui/AuroraBackground';

const tiers = [
  { icon: Users, title: 'Nano Influencers', range: '1K-10K followers', desc: 'Highly authentic voices with hyper-engaged, tight-knit communities.' },
  { icon: Award, title: 'Micro Influencers', range: '10K-100K followers', desc: 'Niche authorities providing high conversion rates and dedicated audiences.' },
  { icon: Star, title: 'Macro Influencers', range: '100K-1M followers', desc: 'Professional creators offering wide reach and established trust.' },
  { icon: Globe, title: 'Celebrity Influencers', range: '1M+ followers', desc: 'Household names delivering maximum visibility and instant credibility.' },
  { icon: MapPin, title: 'Regional Influencers', range: 'Location-based', desc: 'Local heroes perfect for hyper-local market penetration and retail footfall.' },
  { icon: GraduationCap, title: 'Campus Influencers', range: 'University Demographics', desc: 'Student leaders driving trends and reaching Gen-Z at scale.' }
];

const niches = [
  'Tech', 'Lifestyle', 'Fashion', 'Fitness', 'Travel', 'Food', 'Finance', 'Education', 
  'Gaming', 'Luxury', 'Beauty', 'Health', 'Automobile', 'Real Estate', 'Crypto', 'Startup'
];

const workflow = [
  { icon: FileSearch, title: 'Brief & Strategy', desc: 'We understand your brand goals and define clear KPIs.' },
  { icon: Users, title: 'Creator Discovery', desc: 'AI-matched creator selection from our vetted network.' },
  { icon: Lightbulb, title: 'Content Strategy', desc: 'Scripting, creative direction, and brand guideline alignment.' },
  { icon: PlayCircle, title: 'Campaign Execution', desc: 'Content creation, publishing, and amplification.' },
  { icon: BarChart2, title: 'Analytics & Reporting', desc: 'Performance tracking and ROI measurement.' }
];

export default function InfluencerPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#09090B] text-white">
        <section className="relative pt-32 pb-20 overflow-hidden">
          <AuroraBackground />
          <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-extrabold mb-6"
            >
              The Creator Network <br /> <span className="text-gradient">That Moves Markets</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-10"
            >
              Access 10,000+ verified creators across every niche. From nano to celebrity — we match the right voices to your brand.
            </motion.p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-10 mt-12">
              {[
                { label: 'Verified Creators', value: '10,000+' },
                { label: 'Combined Reach', value: '2B+' },
                { label: 'Campaigns Delivered', value: '500+' },
                { label: 'Client Satisfaction', value: '98%' }
              ].map((stat, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + (idx * 0.1) }}
                  className="bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-sm"
                >
                  <div className="text-3xl font-extrabold text-[#00E676] mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            <motion.button 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
              className="bg-[#6C4DFF] hover:bg-[#5838ff] text-white px-8 py-4 rounded-full font-bold text-lg transition-colors"
            >
              Launch a Campaign
            </motion.button>
          </div>
        </section>

        <section className="py-24">
          <div className="w-full px-6 md:px-12 lg:px-24 mx-auto">
            <SectionHeading title="Creator Tiers" subtitle="The perfect influencer size for every objective." />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
              {tiers.map((tier, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                >
                  <GlassCard className="p-8 h-full">
                    <div className="w-12 h-12 bg-[#FFD93D]/10 rounded-xl flex items-center justify-center mb-6">
                      <tier.icon className="w-6 h-6 text-[#FFD93D]" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{tier.title}</h3>
                    <div className="inline-block bg-white/10 px-3 py-1 rounded-full text-xs font-semibold text-gray-300 mb-4">
                      {tier.range}
                    </div>
                    <p className="text-gray-400">{tier.desc}</p>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-white/5 border-t border-b border-white/10">
          <div className="w-full px-6 md:px-12 lg:px-24 mx-auto text-center">
            <SectionHeading title="Niche Expertise" subtitle="We have creators in every industry." />
            <div className="flex flex-wrap justify-center gap-4 mt-12 max-w-4xl mx-auto">
              {niches.map((niche, idx) => (
                <motion.span 
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.05 }}
                  viewport={{ once: true }}
                  className="px-6 py-3 bg-[#09090B] border border-white/20 rounded-full text-white font-medium hover:border-[#FF5DB1] hover:text-[#FF5DB1] cursor-pointer transition-colors"
                >
                  {niche}
                </motion.span>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24">
          <div className="w-full px-6 md:px-12 lg:px-24 mx-auto">
            <SectionHeading title="Campaign Workflow" subtitle="From concept to viral success in 5 steps." />
            <div className="max-w-5xl mx-auto mt-16">
              {workflow.map((step, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start mb-12 last:mb-0 relative"
                >
                  {idx !== workflow.length - 1 && (
                    <div className="absolute left-6 top-14 bottom-0 w-0.5 bg-gradient-to-b from-[#6C4DFF] to-transparent opacity-30 h-16"></div>
                  )}
                  <div className="w-12 h-12 rounded-full bg-[#6C4DFF] flex items-center justify-center shrink-0 z-10 shadow-[0_0_20px_rgba(108,77,255,0.4)]">
                    <span className="font-bold">{idx + 1}</span>
                  </div>
                  <div className="ml-8 glass-card p-6 w-full flex items-center">
                    <step.icon className="w-8 h-8 text-[#00D9FF] mr-6 shrink-0" />
                    <div>
                      <h4 className="text-xl font-bold mb-2">{step.title}</h4>
                      <p className="text-gray-400">{step.desc}</p>
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
