"use client";

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';
import { motion } from 'framer-motion';

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.5 }
};

export default function ServicesPage() {
  const services = [
    {
      id: 1,
      title: 'Performance Marketing',
      desc: 'Data-driven ad campaigns that turn clicks into paying customers and scale your revenue predictably.',
      deliverables: ['Meta (FB/IG) Ads', 'Google Ads Search & Display', 'YouTube Ads', 'Conversion Tracking Setup'],
      color: 'bg-[#FF3B00]',
      textColor: 'text-white'
    },
    {
      id: 2,
      title: 'SEO & Content',
      desc: 'Dominate search results with high-intent keywords and content that ranks and converts.',
      deliverables: ['On-Page & Technical SEO', 'Keyword Strategy', 'Blog Content Creation', 'Backlink Building'],
      color: 'bg-black',
      textColor: 'text-white'
    },
    {
      id: 3,
      title: 'Brand & Design',
      desc: 'Stand out in a crowded market with bold visual identities, stunning websites, and engaging social content.',
      deliverables: ['Brand Identity (Logo, Colors)', 'Website Design (UI/UX)', 'Social Media Graphics', 'Short-form Video / Reels'],
      color: 'bg-[#FFD700]',
      textColor: 'text-black'
    },
    {
      id: 4,
      title: 'AI & Automation',
      desc: 'Save hundreds of hours. We build smart workflows and bots so your business runs on autopilot.',
      deliverables: ['Custom Chatbots', 'WhatsApp Automation', 'n8n / Zapier Workflows', 'Lead Nurturing Systems'],
      color: 'bg-white',
      textColor: 'text-black'
    },
    {
      id: 5,
      title: 'Influencer & PR',
      desc: 'Leverage trust. We connect you with the right voices from nano-creators to celebrities.',
      deliverables: ['Creator Outreach', 'Campaign Management', 'PR Strategy & Press Releases', 'Affiliate Programs'],
      color: 'bg-[#FF3B00]',
      textColor: 'text-white'
    },
    {
      id: 6,
      title: 'Software & SaaS',
      desc: 'Custom-built tech solutions to solve your operational bottlenecks, built by our engineering team.',
      deliverables: ['Custom Web Apps', 'Internal Dashboards', 'Mobile App Development', 'API Integrations'],
      color: 'bg-black',
      textColor: 'text-white'
    }
  ];

  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-[#FFD700] selection:text-black pt-24 flex flex-col overflow-hidden">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero */}
        <section className="px-6 py-24 md:py-32 border-b-4 border-black bg-[#FFD700]">
          <div className="max-w-5xl mx-auto text-center flex flex-col items-center">
            <motion.h1 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-6 shadow-text"
            >
              Every Service.<br />One Team.
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="text-2xl font-bold bg-white p-4 border-4 border-black shadow-[8px_8px_0_#000] inline-block"
            >
              Engineered for growth. Designed to dominate.
            </motion.p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="px-6 py-24 border-b-4 border-black bg-[#f4f4f4]">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((svc, i) => (
              <motion.div 
                key={svc.id} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
                whileHover={{ y: -8, x: -8, transition: { type: "spring", stiffness: 300, damping: 20 } }}
                className={`p-8 border-4 border-black shadow-[8px_8px_0_#000] hover:shadow-[16px_16px_0_#000] transition-shadow flex flex-col ${svc.color} ${svc.textColor}`}
              >
                <div className="text-4xl mb-4 font-black">0{svc.id}</div>
                <h2 className="text-3xl font-black uppercase mb-4 leading-tight">{svc.title}</h2>
                <p className="font-bold text-lg mb-8 opacity-90">{svc.desc}</p>
                <div className="flex-grow">
                  <h4 className="font-black uppercase mb-3 text-sm tracking-widest opacity-80">Deliverables</h4>
                  <ul className="space-y-2 mb-8">
                    {svc.deliverables.map((item, j) => (
                      <li key={j} className="font-bold flex items-start">
                        <span className="mr-2">■</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <Link href="/book-call" passHref legacyBehavior>
                  <motion.a 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`inline-block border-4 border-current py-3 px-6 text-center font-black uppercase tracking-wider hover:bg-white hover:text-black transition-colors ${svc.textColor === 'text-white' ? 'hover:border-white' : 'hover:border-black'}`}
                  >
                    Learn More →
                  </motion.a>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="px-6 py-24 text-center bg-white">
          <motion.div {...fadeUp} className="max-w-4xl mx-auto border-4 border-black p-12 shadow-[16px_16px_0_#000] bg-black text-white flex flex-col items-center">
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-6 text-[#FFD700]">
              Don't see what you need?
            </h2>
            <p className="text-2xl font-bold mb-10">We probably do it anyway.</p>
            <Link href="/book-call" passHref legacyBehavior>
              <motion.a 
                whileHover={{ y: -4, x: -4, transition: { type: "spring", stiffness: 300 } }}
                whileTap={{ y: 0, x: 0 }}
                className="inline-block bg-[#FF3B00] text-white text-2xl font-black uppercase px-12 py-6 border-4 border-white shadow-[8px_8px_0_#fff] hover:shadow-[12px_12px_0_#fff] transition-shadow"
              >
                Let's Talk
              </motion.a>
            </Link>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
