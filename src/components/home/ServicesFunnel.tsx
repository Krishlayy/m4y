'use client'

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const funnelSteps = [
  {
    number: '01',
    title: 'Test your idea',
    services: ['Market Research', 'Competitor Analysis', 'MVP Launch Strategy', 'Audience Profiling']
  },
  {
    number: '02',
    title: 'Build your presence',
    services: ['Brand Identity', 'Website Development', 'SEO Setup', 'Social Media Strategy']
  },
  {
    number: '03',
    title: 'Grow your reach',
    services: ['Paid Advertising (PPC)', 'Content Marketing', 'Email Campaigns', 'Influencer Outreach']
  },
  {
    number: '04',
    title: 'Support & scale',
    services: ['Conversion Rate Optimization', 'Marketing Automation', 'Data Analytics', 'Loyalty Programs']
  }
];

export default function ServicesFunnel() {
  return (
    <section className="bg-white text-black border-t-2 border-black overflow-hidden relative py-24 md:py-32">
      <div className="w-full px-6 md:px-12 lg:px-24">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <div>
            <h2 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight uppercase">
              Full-funnel <br /> <span className="text-[#FF3B00] relative inline-block">marketing.<span className="absolute -bottom-2 left-0 w-full h-2 bg-black transform -skew-x-12"></span></span>
            </h2>
          </div>
          <button className="group flex items-center gap-4 border-2 border-black bg-black text-white px-8 py-5 font-black uppercase tracking-widest hover:bg-[#FF3B00] hover:border-[#FF3B00] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 -translate-y-1">
            View all Services
            <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-2 border-black bg-black gap-px">
          {funnelSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 hover:bg-gray-50 transition-colors duration-300 group flex flex-col relative overflow-hidden"
            >
              {/* Abstract decorative shape for that sharp modern feel */}
              <div className="absolute -right-12 -top-12 w-32 h-32 bg-gray-100 rotate-45 group-hover:bg-[#FF3B00]/10 transition-colors duration-500"></div>

              <div className="text-6xl font-black text-transparent mb-8 transition-all duration-300 relative z-10" 
                   style={{ WebkitTextStroke: '2px black', color: 'transparent' }}>
                {step.number}
              </div>
              
              <h3 className="text-2xl font-black uppercase tracking-tight mb-8 h-auto lg:h-16 relative z-10 group-hover:text-[#FF3B00] transition-colors duration-300">
                {step.title}
              </h3>
              
              <ul className="space-y-5 flex-grow relative z-10">
                {step.services.map((service, sIndex) => (
                  <li key={sIndex} className="flex items-start gap-3 group/item cursor-pointer">
                    <span className="text-[#FF3B00] font-black mt-1 group-hover/item:translate-x-1 transition-transform">↳</span>
                    <span className="font-bold text-gray-800 uppercase text-sm tracking-wide group-hover/item:text-black transition-colors">{service}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
