'use client'

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const advantages = [
  {
    title: 'You Get Founders, Not Interns',
    content: 'Every campaign, every strategy, every ad creative — done by the 2 founders personally. No handoffs to a junior. No account managers playing telephone. You get direct access to the people who built this agency.'
  },
  {
    title: 'Engineered Growth, Not Generic Marketing',
    content: 'We combine software engineering discipline with advanced performance marketing. We build custom automations, analyze user event data with forensic depth, and code conversion tools that traditional creative agencies simply cannot build.'
  },
  {
    title: 'Dedicated Partner Roster & Direct Founder Focus',
    content: 'We intentionally cap our client roster at 10 active partners at a time. This guarantees that Kishalay and Ayushman remain personally embedded in your strategy, delivering rapid technical sprints and unmatched strategic execution.'
  },
  {
    title: 'Obsessed With Your Category',
    content: 'Before we touch your account, we spend 2 weeks studying your industry, your top competitors, and your target audience\'s actual behaviour. We don\'t wing it. We over-prepare, then we execute.'
  },
  {
    title: 'Full Transparency. Always.',
    content: 'You own every account, every asset, every password. We share dashboards weekly. We report even when the numbers aren\'t great — because that\'s when the best decisions get made. No smoke, no mirrors.'
  }
];

export default function Advantages() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section className="bg-white text-black border-t-4 border-black py-32 md:py-40">
      <div className="w-full px-6 md:px-16 lg:px-32 xl:px-40">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black tracking-tighter leading-tight uppercase">
            Why Brands<br/>Choose M4Y.
          </h2>
        </div>
        
        <div className="flex flex-col gap-4">
          {advantages.map((adv, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`border-4 border-black bg-white transition-all duration-150 ${openIndex === i ? 'shadow-[8px_8px_0px_#FF3B00] -translate-y-1 -translate-x-1' : 'shadow-[4px_4px_0px_#000] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[8px_8px_0px_#000]'}`}
            >
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
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                  className="w-8 h-8 border-4 border-black flex items-center justify-center flex-shrink-0"
                >
                  <ChevronDown className="w-5 h-5" />
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
                    <div className="px-6 pb-6 pt-2 text-black/80 leading-relaxed font-bold">
                      {adv.content}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
