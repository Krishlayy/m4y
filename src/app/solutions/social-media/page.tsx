'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  MessageSquare, Globe, Share2, Hash, 
  MessageCircle, Video, Navigation, ArrowRight, Camera, PlayCircle, Users
} from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import FloatingCTA from '@/components/ui/FloatingCTA';
import { SectionHeading, GlassCard } from '@/components/ui/Shared';
import AuroraBackground from '@/components/ui/AuroraBackground';
import Link from 'next/link';

const platforms = [
  {
    icon: Camera,
    name: 'Instagram',
    color: '#E1306C',
    description: 'Visual storytelling that converts followers into brand advocates.',
    services: ['Growth Strategies', 'Reels Production', 'Stories Management', 'Engagement Optimization'],
    metric: '400% avg. engagement lift'
  },
  {
    icon: Users,
    name: 'Facebook',
    color: '#1877F2',
    description: 'Targeted reach and community management for widespread visibility.',
    services: ['Community Building', 'Facebook Groups', 'Marketplace', 'Targeted Advertising'],
    metric: '3.2x ROAS on campaigns'
  },
  {
    icon: Share2,
    name: 'LinkedIn',
    color: '#0A66C2',
    description: 'B2B authority building and lead generation for professionals.',
    services: ['Thought Leadership', 'B2B Networking', 'Employee Advocacy', 'Company Pages'],
    metric: '5x more qualified leads'
  },
  {
    icon: Globe,
    name: 'Twitter / X',
    color: '#1DA1F2',
    description: 'Real-time conversations and cultural relevance for modern brands.',
    services: ['Real-time Engagement', 'Trending Strategies', 'Brand Voice', 'Customer Service'],
    metric: '200% brand mentions'
  },
  {
    icon: Navigation,
    name: 'Pinterest',
    color: '#E60023',
    description: 'Visual discovery and intent-driven traffic for e-commerce.',
    services: ['Visual Discovery', 'Pin Optimization', 'Shopping Integration', 'Trend Forecasting'],
    metric: '60% increase in web traffic'
  },
  {
    icon: Hash,
    name: 'Threads',
    color: '#ffffff',
    description: 'Authentic text-based conversations with your community.',
    services: ['Community Conversations', 'Brand Engagement', 'Trend Riding', 'Text Content'],
    metric: 'Rapid audience building'
  },
  {
    icon: PlayCircle,
    name: 'YouTube',
    color: '#FF0000',
    description: 'Long-form video content that builds deep audience connection.',
    services: ['Channel Growth', 'Video SEO', 'Monetization Strategy', 'Shorts Production'],
    metric: '10M+ views generated'
  },
  {
    icon: Video,
    name: 'TikTok',
    color: '#00F2FE',
    description: 'Viral short-form content that captures Gen Z and Millennial attention.',
    services: ['Viral Content', 'Trend Participation', 'Creator Collabs', 'TikTok SEO'],
    metric: 'Consistent viral hits'
  },
  {
    icon: MessageCircle,
    name: 'Snapchat',
    color: '#FFFC00',
    description: 'Immersive AR experiences and ephemeral content for youth demographics.',
    services: ['AR Experiences', 'Story Ads', 'Gen-Z Engagement', 'Geofilters'],
    metric: 'High completion rates'
  }
];

export default function SocialMediaPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#09090B] text-white">
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
          <AuroraBackground />
          <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-extrabold mb-6"
            >
              Dominate Every Platform.{' '}
              <span className="text-gradient">Own Your Audience.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-zinc-400 max-w-3xl mx-auto mb-10"
            >
              From Instagram Reels to LinkedIn thought leadership — we create platform-native strategies that build engaged audiences and drive real business results.
            </motion.p>
          </div>
        </section>

        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <SectionHeading
              badge="📱 Platforms"
              title="Master Every"
              titleHighlight="Social Channel"
              description="We don't just post content. We engineer platform-specific growth strategies that turn followers into customers."
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {platforms.map((platform, i) => (
                <motion.div
                  key={platform.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                >
                  <GlassCard className="h-full">
                    <div className="flex items-center gap-4 mb-6">
                      <div 
                        className="w-12 h-12 rounded-2xl flex items-center justify-center"
                        style={{ backgroundColor: `${platform.color}20` }}
                      >
                        <platform.icon className="w-6 h-6" style={{ color: platform.color }} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">{platform.name}</h3>
                        <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-white/5 text-accent-green">
                          {platform.metric}
                        </span>
                      </div>
                    </div>
                    
                    <p className="text-white/50 text-sm mb-6 leading-relaxed">
                      {platform.description}
                    </p>
                    
                    <div className="space-y-2 mb-6">
                      {platform.services.map((service) => (
                        <div key={service} className="flex items-center gap-2 text-sm text-white/60">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                          {service}
                        </div>
                      ))}
                    </div>
                    
                    <Link
                      href="/book-call"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-white transition-colors group"
                    >
                      Get Started
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
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
