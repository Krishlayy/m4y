'use client';

import { motion } from 'framer-motion';

const stats = [
  { number: '5', label: 'CS Founders' },
  { number: '100%', label: 'Client Asset Ownership' },
  { number: '2 Hrs', label: 'Response Time' },
  { number: '₹0', label: 'Hidden Fees' },
  { number: '10', label: 'Founding Spots Left' },
];

export default function StatBar() {
  return (
    <section className="border-b-4 border-black bg-black text-white overflow-hidden">
      <div className="flex flex-wrap justify-center divide-x-4 divide-white/20">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="flex flex-col items-center justify-center px-8 py-8 md:py-10 flex-1 min-w-[140px] hover:bg-[#FF3B00] transition-colors duration-200 group"
          >
            <span className="text-4xl md:text-5xl font-black tracking-tighter text-[#FFD700] group-hover:text-white transition-colors">
              {stat.number}
            </span>
            <span className="text-xs font-black uppercase tracking-widest text-white/50 group-hover:text-white/80 mt-1 transition-colors text-center">
              {stat.label}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
