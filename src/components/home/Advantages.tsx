'use client'

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const advantages = [
  {
    title: 'Agile Marketing Execution',
    content: 'We work in fast-paced sprints, adapting strategies based on real-time data to maximize your ROI without wasting budget on long-term assumptions.'
  },
  {
    title: 'Transparent Reporting',
    content: 'Full access to our analytics dashboards. No black-box operations, just clear, actionable insights into where every dollar goes.'
  },
  {
    title: 'Cross-functional Teams',
    content: 'Your project gets a dedicated pod consisting of a strategist, copywriter, and performance expert working in sync.'
  },
  {
    title: 'Performance-Driven Creative',
    content: 'Our creative decisions are backed by A/B testing and conversion rate optimization principles, ensuring ads don\'t just look good, they perform.'
  },
  {
    title: 'Scalable Infrastructure',
    content: 'We build your marketing foundation to handle 10x growth, from technical SEO architecture to scalable paid media account structures.'
  }
];

export default function Advantages() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section className="bg-white text-black border-t-2 border-black py-24 md:py-32">
      <div className="w-full px-6 md:px-12 lg:px-24">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight leading-tight uppercase">
            Why choose M4Y?
          </h2>
        </div>
        
        <div className="flex flex-col gap-4">
          {advantages.map((adv, i) => (
            <div key={i} className={`border-4 border-black bg-white transition-all duration-300 ${openIndex === i ? 'shadow-[8px_8px_0px_0px_rgba(255,59,0,1)] -translate-y-1' : 'shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none'}`}>
              <button
                onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                className="w-full text-left px-6 py-5 flex justify-between items-center focus:outline-none"
              >
                <span className={`font-extrabold text-lg tracking-wide uppercase transition-colors ${openIndex === i ? 'text-[#FF3B00]' : 'text-black'}`}>
                  <span className="mr-3 opacity-50">{String(i + 1).padStart(2, '0')}.</span>
                  {adv.title}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === i ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <ChevronDown className="w-6 h-6 border-2 border-transparent group-hover:border-black rounded-full" />
                </motion.div>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pt-2 text-gray-700 leading-relaxed font-bold">
                      {adv.content}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
