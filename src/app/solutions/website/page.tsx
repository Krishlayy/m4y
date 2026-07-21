'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Palette, Code2, Search, Zap, ShieldCheck, BarChart, Server, Wrench, ArrowRight
} from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import FloatingCTA from '@/components/ui/FloatingCTA';
import { SectionHeading, GlassCard } from '@/components/ui/Shared';
import AuroraBackground from '@/components/ui/AuroraBackground';

const services = [
  {
    icon: Palette,
    title: 'Design',
    description: 'Pixel-perfect UI/UX design that captivates users and builds trust in your brand.',
    techs: ['Figma', 'Framer', 'Tailwind CSS']
  },
  {
    icon: Code2,
    title: 'Development',
    description: 'Robust, scalable architecture built on modern frameworks for maximum reliability.',
    techs: ['React', 'Next.js', 'TypeScript']
  },
  {
    icon: Search,
    title: 'SEO',
    description: 'Built-in optimization to ensure your site ranks high on search engines.',
    techs: ['Next SEO', 'Lighthouse', 'Semrush']
  },
  {
    icon: Zap,
    title: 'Speed',
    description: 'Performance-first approach for lightning-fast load times and smooth interactions.',
    techs: ['Edge CDN', 'Web Vitals', 'Image Optimization']
  },
  {
    icon: ShieldCheck,
    title: 'Security',
    description: 'Enterprise-grade security protocols to protect your data and user privacy.',
    techs: ['OAuth', 'JWT', 'WAF']
  },
  {
    icon: BarChart,
    title: 'Analytics',
    description: 'Built-in tracking and custom dashboards to measure conversions and user behavior.',
    techs: ['Google Analytics', 'PostHog', 'Mixpanel']
  },
  {
    icon: Server,
    title: 'Hosting',
    description: 'Managed cloud hosting solutions that scale automatically with your traffic.',
    techs: ['Vercel', 'AWS', 'Cloudflare']
  },
  {
    icon: Wrench,
    title: 'Maintenance',
    description: 'Ongoing support, updates, and monitoring to keep your app running smoothly.',
    techs: ['Sentry', 'Datadog', 'GitHub Actions']
  }
];

export default function WebsiteSolutionsPage() {
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
              Websites That Convert. <br /> <span className="text-gradient">Apps That Scale.</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-10"
            >
              We craft high-performance digital experiences that merge stunning design with cutting-edge engineering.
            </motion.p>
            <motion.button 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="bg-[#FF5DB1] hover:bg-[#e04596] text-white px-8 py-4 rounded-full font-bold text-lg transition-colors"
            >
              Start Your Project
            </motion.button>
          </div>
        </section>

        <section className="py-24">
          <div className="container mx-auto px-6">
            <SectionHeading title="End-to-End Excellence" subtitle="Everything you need for a dominant digital presence." />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
              {services.map((service, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                >
                  <GlassCard className="h-full p-8 group hover:border-[#FF5DB1]/50 transition-colors flex flex-col">
                    <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-6 border border-white/10 group-hover:bg-[#FF5DB1]/10 transition-colors">
                      <service.icon className="w-7 h-7 text-[#00D9FF]" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                    <p className="text-gray-400 text-sm mb-6 flex-grow">{service.description}</p>
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {service.techs.map((tech, tIdx) => (
                        <span key={tIdx} className="text-xs font-semibold bg-white/10 px-3 py-1 rounded-full text-gray-300">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-gradient-to-b from-transparent to-[#6C4DFF]/10">
          <div className="container mx-auto px-6 text-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto glass-card rounded-3xl p-12 border border-[#6C4DFF]/30 shadow-[0_0_50px_rgba(108,77,255,0.1)]"
            >
              <h2 className="text-4xl font-extrabold mb-6">Ready to upgrade your tech stack?</h2>
              <p className="text-xl text-gray-300 mb-10">Let's build a platform that outperforms your competition.</p>
              <button className="bg-white text-black hover:bg-gray-200 px-10 py-4 rounded-full font-bold text-lg flex items-center mx-auto transition-colors">
                Book a Strategy Call <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}
