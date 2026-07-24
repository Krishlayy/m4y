"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Star, ArrowRight, Zap, Clock, Headphones } from 'lucide-react';
import Link from 'next/link';

type PricingPlan = {
  id: string;
  name: string;
  price: string;
  billingLabel: string | null;
  description: string | null;
  features: any;
  isPopular: boolean;
};

export default function PricingList({ plans }: { plans: PricingPlan[] }) {
  const [activeCategory, setActiveCategory] = useState('All');
  
  // Since we don't have categories in PricingPlan yet, just use 'All'
  const categories = ['All'];
  const filteredPackages = plans;

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <>
      <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-6 py-2 text-sm font-bold uppercase tracking-widest border-2 border-black transition-colors ${
              activeCategory === category 
                ? 'bg-black text-[#FFD700]' 
                : 'bg-transparent text-black hover:bg-gray-100'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start"
      >
        <AnimatePresence mode="popLayout">
          {filteredPackages.map((pkg) => (
            <motion.div
              key={pkg.id}
              layout
              variants={itemVariants}
              initial="hidden"
              animate="show"
              exit={{ opacity: 0, scale: 0.95 }}
              className="w-full h-full"
            >
              <div className={`modern-card bg-white relative h-full flex flex-col p-8 md:p-10 ${pkg.isPopular ? 'border-4 border-[#FF3B00] shadow-[8px_8px_0_0_#FF3B00] -translate-y-2' : ''}`}>
                {pkg.isPopular && (
                  <div className="absolute -top-4 -right-4 bg-[#FF3B00] text-white text-xs font-black uppercase tracking-widest px-4 py-2 border-2 border-black rotate-3 z-20">
                    <Star className="w-3 h-3 inline mr-1" /> Most Recommended
                  </div>
                )}
                
                <div className="h-full flex flex-col">
                  <div className="mb-8">
                    <h3 className="text-3xl font-black uppercase tracking-tight mb-2">{pkg.name}</h3>
                    <p className="text-sm font-bold text-gray-500">{pkg.description}</p>
                  </div>
                  
                  <div className="mb-8 pb-8 border-b-2 border-black/10">
                    <div className="flex items-end gap-2 mb-2">
                      {pkg.price && pkg.price.toLowerCase() !== 'custom' ? (
                        <>
                          <span className="text-4xl md:text-5xl font-black text-black">{pkg.price}</span>
                          {pkg.billingLabel && <span className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-2">{pkg.billingLabel}</span>}
                        </>
                      ) : (
                        <span className="text-2xl md:text-3xl font-black text-[#FF3B00] uppercase tracking-tight">Custom Pricing</span>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex-grow space-y-6 mb-10">
                    <div>
                      <h4 className="text-sm font-black uppercase tracking-widest mb-4">Features included</h4>
                      <ul className="space-y-3">
                        {(pkg.features || []).map((feature: string, idx: number) => (
                          <li key={idx} className="flex items-start">
                            <Check className="w-5 h-5 text-[#00E676] mr-3 shrink-0" strokeWidth={3} />
                            <span className="text-sm font-medium">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-8 text-sm border-t-2 border-black/10 pt-6">
                    <div className="flex items-center font-bold uppercase tracking-widest text-xs">
                      <Clock className="w-4 h-4 mr-2 text-black" />
                      <span>Monthly</span>
                    </div>
                    <div className="flex items-center font-bold uppercase tracking-widest text-xs">
                      <Headphones className="w-4 h-4 mr-2 text-black" />
                      <span>Dedicated</span>
                    </div>
                  </div>

                  <Link 
                    href="/book-call" 
                    className="bg-black text-white font-black uppercase tracking-widest text-sm px-4 py-4 border-2 border-black w-full text-center flex items-center justify-center gap-2 group mt-auto hover:bg-[#FF3B00] transition-colors"
                  >
                    Book Strategy Call
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </>
  );
}
