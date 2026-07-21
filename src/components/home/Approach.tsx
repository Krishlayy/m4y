'use client'

import { motion } from 'framer-motion';
import { Target, Zap, Activity, Repeat, ArrowRight } from 'lucide-react';

const approaches = [
  {
    icon: <Zap className="w-10 h-10 py-24 md:py-32" />,
    title: 'Sprint-based campaigns',
    description: 'We deploy marketing initiatives in 2-week sprints, ensuring rapid execution and continuous alignment with your business goals.'
  },
  {
    icon: <Activity className="w-10 h-10" />,
    title: 'Data-driven iteration',
    description: 'Every decision is backed by analytics. We measure, analyze, and optimize relentlessly to improve ROI at every step.'
  },
  {
    icon: <Target className="w-10 h-10" />,
    title: 'Laser-focused targeting',
    description: 'We don\'t believe in spray-and-pray. Our audience segmentation ensures your message reaches only those most likely to convert.'
  },
  {
    icon: <Repeat className="w-10 h-10" />,
    title: 'Continuous feedback loop',
    description: 'Transparent communication is our baseline. Regular retrospectives keep you informed and involved in the optimization process.'
  }
];

export default function Approach() {
  return (
    <section className="bg-white text-black py-24 border-t-2 border-black overflow-hidden relative">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gray-50 border-l-2 border-black transform skew-x-12 translate-x-32 -z-10"></div>
      
      <div className="w-full px-6 md:px-12 lg:px-24">
        <div className="mb-20 max-w-3xl">
          <h2 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 uppercase leading-tight">
            Our <span className="text-[#FF3B00]">Methodology.</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-800 font-bold leading-relaxed border-l-4 border-[#FF3B00] pl-6">
            We operate like a tech company, applying agile principles to marketing to deliver measurable results faster.
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
              className="border-2 border-black bg-white p-10 md:p-14 flex flex-col group hover:shadow-[12px_12px_0px_0px_rgba(255,59,0,1)] hover:-translate-y-2 hover:-translate-x-2 transition-all duration-300 relative"
            >
              <div className="text-[#FF3B00] mb-8 bg-black group-hover:bg-[#FF3B00] group-hover:text-black transition-colors duration-300 inline-block p-5 border-2 border-black w-fit">
                {item.icon}
              </div>
              <h3 className="text-3xl font-black uppercase tracking-tight mb-5 group-hover:text-[#FF3B00] transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-700 mb-10 flex-grow leading-relaxed font-bold text-lg">
                {item.description}
              </p>
              <a href="#" className="flex items-center gap-3 font-black uppercase tracking-widest text-sm hover:text-[#FF3B00] transition-colors w-fit border-b-2 border-black hover:border-[#FF3B00] pb-1">
                Read more
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
