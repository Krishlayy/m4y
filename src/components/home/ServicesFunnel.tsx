'use client'

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const funnelSteps = [
  {
    number: '01',
    title: 'Get Found',
    services: ['SEO & Technical SEO', 'Google Ads', 'Content Marketing', 'Local SEO']
  },
  {
    number: '02',
    title: 'Look Premium',
    services: ['Brand Identity & Design', 'Website Development', 'UI/UX Design', 'Reels & Video Production']
  },
  {
    number: '03',
    title: 'Grow Revenue',
    services: ['Meta & Google Ads', 'Influencer Marketing', 'Email Automation', 'WhatsApp Marketing']
  },
  {
    number: '04',
    title: 'Scale Ruthlessly',
    services: ['AI Bots & Automation', 'CRO & Funnel Optimization', 'Analytics & Dashboards', 'Performance Scaling']
  }
];

export default function ServicesFunnel() {
  return (
    <section className="bg-white text-black border-t-4 border-black overflow-hidden relative py-32 md:py-40">
      <div className="w-full px-6 md:px-16 lg:px-32 xl:px-40">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <div>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.9] uppercase">
              Everything you need.<br /><span className="text-[#FF3B00]">Nothing you don&apos;t.</span>
            </h2>
          </div>
          <Link href="/services" className="btn-primary group">
            View all Services
            <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300 ml-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-4 border-black bg-black gap-1">
          {funnelSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ 
                scale: 1.02, 
                rotate: index % 2 === 0 ? -1 : 1,
                y: -5,
                transition: { type: "spring", stiffness: 300, damping: 15 } 
              }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 hover:bg-white transition-colors duration-150 group flex flex-col relative overflow-hidden shadow-[4px_4px_0_#000] border-2 border-black"
            >
              {/* Brutalist corner accent */}
              <div className="absolute -right-0 -top-0 w-16 h-16 bg-[#FF3B00] opacity-0 group-hover:opacity-100 transition-opacity duration-150 border-l-4 border-b-4 border-black"></div>

              <div className="text-6xl font-black text-transparent mb-8 transition-all duration-300 relative z-10" 
                   style={{ WebkitTextStroke: '2px black', color: 'transparent' }}>
                {step.number}
              </div>
              
              <h3 className="text-2xl font-black uppercase tracking-tight mb-8 h-auto lg:h-16 relative z-10 group-hover:text-[#FF3B00] transition-colors duration-300">
                {step.title}
              </h3>
              
              <ul className="space-y-5 flex-grow relative z-10">
                {step.services.map((service, sIndex) => (
                  <motion.li 
                    key={sIndex}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * sIndex }}
                    className="flex items-start gap-3 group/item cursor-pointer"
                  >
                    <span className="text-[#FF3B00] font-black mt-1 group-hover/item:translate-x-1 transition-transform">↳</span>
                    <span className="font-bold text-gray-800 uppercase text-sm tracking-wide group-hover/item:text-black transition-colors">{service}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
