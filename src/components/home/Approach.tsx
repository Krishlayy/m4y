'use client'

import { motion } from 'framer-motion';
import { Target, Zap, Activity, Repeat, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const approaches = [
  {
    icon: <Zap className="w-10 h-10" />,
    title: 'Strategy First',
    description: 'Before we spend a single rupee of your budget, we audit your market, your competitors, and your funnel. Then we build a growth strategy that\'s unique to your business — not a copy-paste template.'
  },
  {
    icon: <Activity className="w-10 h-10" />,
    title: 'Data, Then Gut',
    description: 'Every campaign decision is rooted in real numbers. CTR, ROAS, CPL, CAC — we obsess over the metrics that actually move your business, and we optimize weekly, not quarterly.'
  },
  {
    icon: <Target className="w-10 h-10" />,
    title: 'Precision Targeting',
    description: 'We find the exact people who will buy your product — by interest, behavior, income, location, and intent. Your ad budget stops funding irrelevance and starts funding revenue.'
  },
  {
    icon: <Repeat className="w-10 h-10" />,
    title: 'Iterate. Scale. Repeat.',
    description: 'What works gets doubled. What doesn\'t gets killed. We test relentlessly and allocate budget with surgical precision. No guesswork. Just compounding growth.'
  }
];

export default function Approach() {
  return (
    <section className="bg-white text-black py-32 md:py-40 border-t-4 border-black overflow-hidden relative">
      
      <div className="w-full px-6 md:px-16 lg:px-32 xl:px-40">
        <div className="mb-20 max-w-3xl">
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 uppercase leading-[0.9]">
            Our <span className="text-white bg-[#FF3B00] px-3 py-1 border-4 border-black shadow-[4px_4px_0px_#000]">Methodology.</span>
          </h2>
          <p className="text-xl md:text-2xl text-black font-bold leading-relaxed border-l-4 border-[#FF3B00] pl-6">
            No fluff. No vague promises. Just a proven system that turns marketing spend into measurable business growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {approaches.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border-4 border-black bg-white p-10 md:p-14 flex flex-col group shadow-[4px_4px_0px_#000] hover:shadow-[8px_8px_0px_#000] hover:-translate-y-1 hover:-translate-x-1 transition-all duration-150 relative"
            >
              <div className="text-[#FF3B00] mb-8 bg-black group-hover:bg-[#FF3B00] group-hover:text-black transition-colors duration-300 inline-block p-5 border-4 border-black w-fit">
                {item.icon}
              </div>
              <h3 className="text-3xl font-black uppercase tracking-tight mb-5 group-hover:text-[#FF3B00] transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-800 mb-10 flex-grow leading-relaxed font-bold text-lg">
                {item.description}
              </p>
              <Link href="/about" className="flex items-center gap-3 font-black uppercase tracking-widest text-sm hover:text-[#FF3B00] transition-colors w-fit border-b-4 border-black hover:border-[#FF3B00] pb-1">
                Read more
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
