'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import FloatingCTA from '@/components/ui/FloatingCTA';
import { SectionHeading, GlassCard } from '@/components/ui/Shared';
import AuroraBackground from '@/components/ui/AuroraBackground';
import { ShoppingBag, Laptop, HeartPulse, Home, GraduationCap, DollarSign, Utensils, Diamond, Dumbbell, Plane, Car, Scale, Factory, HeartHandshake, Gamepad2, Bitcoin, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const industries = [
  {
    name: 'E-commerce',
    icon: ShoppingBag,
    description: 'We scale e-commerce brands through data-driven performance marketing, high-converting storefronts, and optimized customer journeys. Our strategies turn browsers into loyal buyers.',
    services: ['Conversion Rate Optimization', 'Paid Social', 'Email Marketing'],
    metric: 'Average 3x ROAS increase in 90 days',
    color: 'text-[#6C4DFF]',
  },
  {
    name: 'SaaS/Tech',
    icon: Laptop,
    description: 'Accelerate user acquisition and reduce churn with targeted B2B campaigns and product-led growth strategies. We help tech companies dominate their niche.',
    services: ['Lead Generation', 'SEO & Content', 'Product Marketing'],
    metric: '40% lower Cost Per Acquisition (CPA)',
    color: 'text-[#00D9FF]',
  },
  {
    name: 'Healthcare',
    icon: HeartPulse,
    description: 'Build trust and patient volume with HIPAA-compliant marketing. We elevate medical practices and health-tech brands through authoritative content and local SEO.',
    services: ['Local SEO', 'Reputation Management', 'PPC Campaigns'],
    metric: '150% increase in patient bookings',
    color: 'text-[#00E676]',
  },
  {
    name: 'Real Estate',
    icon: Home,
    description: 'Connect with high-intent buyers and sellers through immersive digital experiences and hyper-local targeted advertising. We make your properties stand out.',
    services: ['Lead Gen Funnels', 'Virtual Tours', 'Social Media'],
    metric: '5x increase in qualified buyer leads',
    color: 'text-[#FFD93D]',
  },
  {
    name: 'Education',
    icon: GraduationCap,
    description: 'Drive enrollments and course sales with strategic digital marketing. We help educational institutions and ed-tech platforms reach eager learners worldwide.',
    services: ['Enrollment Campaigns', 'Content Strategy', 'Video Marketing'],
    metric: '200% growth in course registrations',
    color: 'text-[#FF5DB1]',
  },
  {
    name: 'Finance',
    icon: DollarSign,
    description: 'Navigate complex regulations while building a pipeline of high-net-worth clients. We deliver sophisticated marketing for wealth managers, fintechs, and banks.',
    services: ['Thought Leadership', 'Compliance-first Ads', 'CRM Integration'],
    metric: 'Over $50M in new assets under management driven',
    color: 'text-[#6C4DFF]',
  },
  {
    name: 'Food & Restaurant',
    icon: Utensils,
    description: 'Pack your tables and boost takeout orders with mouth-watering social media and localized search strategies. We turn local foodies into regulars.',
    services: ['Social Media Management', 'Local SEO', 'Influencer Marketing'],
    metric: '30% increase in online reservations',
    color: 'text-[#00D9FF]',
  },
  {
    name: 'Fashion & Luxury',
    icon: Diamond,
    description: 'Cultivate an exclusive brand aura while driving global sales. We create visually stunning campaigns that resonate with high-end consumers.',
    services: ['Brand Strategy', 'High-end Production', 'Influencer Partnerships'],
    metric: 'Record-breaking seasonal collection launches',
    color: 'text-[#FF5DB1]',
  },
  {
    name: 'Fitness & Wellness',
    icon: Dumbbell,
    description: 'Build a passionate community around your fitness brand. We help gyms, apps, and wellness coaches scale their member base exponentially.',
    services: ['Community Building', 'App Install Campaigns', 'Retargeting'],
    metric: 'Doubled monthly recurring revenue (MRR)',
    color: 'text-[#00E676]',
  },
  {
    name: 'Travel & Hospitality',
    icon: Plane,
    description: 'Inspire wanderlust and drive direct bookings. We showcase your destinations and properties through immersive storytelling and targeted ads.',
    services: ['Direct Booking Strategies', 'Visual Storytelling', 'Search Ads'],
    metric: '45% reduction in OTA dependency',
    color: 'text-[#FFD93D]',
  },
  {
    name: 'Automotive',
    icon: Car,
    description: 'Accelerate dealership foot traffic and online inquiries. We deploy dynamic inventory ads and localized marketing to drive sales.',
    services: ['Dynamic Inventory Ads', 'Local SEO', 'Lead Nurturing'],
    metric: '25% increase in test drive appointments',
    color: 'text-[#6C4DFF]',
  },
  {
    name: 'Legal',
    icon: Scale,
    description: 'Generate high-value case leads with authoritative digital presence. We position your firm as the top choice for clients in need of counsel.',
    services: ['High-intent Search Ads', 'Content Marketing', 'SEO'],
    metric: 'Consistent flow of high-value retainers',
    color: 'text-[#00D9FF]',
  },
  {
    name: 'Manufacturing',
    icon: Factory,
    description: 'Modernize your B2B sales pipeline. We help manufacturers reach global distributors and buyers through targeted digital outreach and trade marketing.',
    services: ['B2B Lead Generation', 'LinkedIn Ads', 'Trade Show Marketing'],
    metric: '3x increase in qualified distributor leads',
    color: 'text-[#00E676]',
  },
  {
    name: 'Non-Profit',
    icon: HeartHandshake,
    description: 'Amplify your cause and maximize donations. We craft compelling campaigns that mobilize supporters and secure funding for your mission.',
    services: ['Donation Campaigns', 'Grant Utilization', 'Awareness Ads'],
    metric: 'Record-breaking annual fundraising goals met',
    color: 'text-[#FF5DB1]',
  },
  {
    name: 'Gaming',
    icon: Gamepad2,
    description: 'Acquire dedicated players and build vibrant communities. We navigate the fast-paced gaming industry with innovative influencer and performance strategies.',
    services: ['Twitch/YouTube Influencers', 'App Install Ads', 'Community Management'],
    metric: 'Top 10 app store rankings achieved',
    color: 'text-[#FFD93D]',
  },
  {
    name: 'Crypto & Web3',
    icon: Bitcoin,
    description: 'Cut through the noise in the decentralized space. We build trust, educate audiences, and drive adoption for blockchain projects and protocols.',
    services: ['Community Growth', 'PR & Communications', 'Web3 Influencers'],
    metric: 'Successfully launched and scaled multiple global protocols',
    color: 'text-[#6C4DFF]',
  }
];

export default function IndustriesPage() {
  return (
    <>
      <Navbar />
      <main className="relative min-h-screen bg-[#09090B] text-white overflow-hidden pt-24 pb-32">
        <AuroraBackground />
        
        <div className="relative z-10 container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center mb-24 pt-12">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6"
            >
              Industry Expertise That <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6C4DFF] to-[#00D9FF]">Drives Results</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-400 mb-8 max-w-3xl mx-auto"
            >
              We don't believe in one-size-fits-all. Our tailored strategies leverage deep industry knowledge to dominate your specific market.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {industries.map((industry, index) => {
              const Icon = industry.icon;
              return (
                <motion.div
                  key={industry.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                >
                  <GlassCard className="h-full flex flex-col p-8 group hover:-translate-y-2 transition-all duration-300 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    <div className="relative z-10 flex-grow flex flex-col">
                      <div className={`p-4 rounded-2xl bg-white/5 w-16 h-16 flex items-center justify-center mb-6 border border-white/10 ${industry.color}`}>
                        <Icon size={32} />
                      </div>
                      
                      <h3 className="text-2xl font-bold mb-4">{industry.name}</h3>
                      <p className="text-gray-400 text-sm mb-6 flex-grow leading-relaxed">
                        {industry.description}
                      </p>
                      
                      <div className="mb-6">
                        <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-3">Key Services</h4>
                        <ul className="flex flex-wrap gap-2">
                          {industry.services.map(service => (
                            <li key={service} className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300">
                              {service}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mb-8 p-4 rounded-xl bg-gradient-to-r from-[#6C4DFF]/10 to-transparent border border-[#6C4DFF]/20">
                        <p className="text-sm font-medium text-[#6C4DFF]">
                          <span className="font-bold">Result:</span> {industry.metric}
                        </p>
                      </div>
                      
                      <Link href="/book-call" className="mt-auto">
                        <button className="w-full py-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/10 font-medium transition-colors flex items-center justify-center gap-2 group-hover:border-white/30">
                          Get Industry Strategy
                          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                      </Link>
                    </div>
                  </GlassCard>
                </motion.div>
              );
            })}
          </div>
        </div>
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}
