'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Star, ArrowRight, Zap, Clock, Headphones } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import FloatingCTA from '@/components/ui/FloatingCTA';
import { packages } from '@/data/packages';
import Link from 'next/link';

export default function PricingPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  
  // Extract unique categories from packages
  const categories = ['All', ...Array.from(new Set(packages.map(p => p.category || 'General')))];

  const filteredPackages = activeCategory === 'All' 
    ? packages 
    : packages.filter(p => (p.category || 'General') === activeCategory);

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
      <Navbar />
      <main className="min-h-screen selection:bg-pink-500/30">
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
          <div className="container relative z-10 mx-auto px-6 max-w-7xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8">
                Transparent Pricing. <br/>
                <span className="text-gradient bg-gradient-to-r from-[#FF3B00] to-[#FFD700] bg-clip-text text-transparent">Real Results.</span>
              </h1>
              <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
                Choose the perfect growth plan for your business. No hidden fees, just predictable ROI and dedicated partnership.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-24 relative z-10 border-t border-black/5">
          <div className="w-full px-6 md:px-12 lg:px-24 max-w-[1400px] mx-auto">
            
            <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`btn-primary ${
                    activeCategory === category ? 'bg-pink-100' : ''
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
                    key={pkg.id || pkg.name}
                    layout
                    variants={itemVariants}
                    initial="hidden"
                    animate="show"
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="w-full h-full"
                  >
                    <div className={`modern-card relative h-full flex flex-col p-8 md:p-10 ${pkg.isRecommended ? 'border-2 border-pink-500' : ''}`}>
                      {pkg.isRecommended && (
                        <div className="absolute top-0 right-0 bg-pink-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg z-20">
                          <Star className="w-3 h-3 inline mr-1" /> Most Recommended
                        </div>
                      )}
                      
                      <div className="h-full flex flex-col">
                        <div className="mb-8">
                          <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                          <p className="text-sm">{pkg.tagline || pkg.description}</p>
                        </div>
                        
                        <div className="mb-8 pb-8 border-b border-black/10">
                          <div className="flex items-end gap-2 mb-2">
                            <span className="text-2xl md:text-3xl font-extrabold text-pink-600">Book a Call for Pricing</span>
                          </div>
                        </div>
                        
                        <div className="flex-grow space-y-6 mb-10">
                          <div>
                            <h4 className="text-sm font-semibold mb-4 uppercase tracking-wider">Features included</h4>
                            <ul className="space-y-3">
                              {(pkg.features || []).map((feature: string, idx: number) => (
                                <li key={idx} className="flex items-start">
                                  <Check className="w-5 h-5 text-green-500 mr-3 shrink-0" />
                                  <span className="text-sm leading-relaxed">{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {pkg.deliverables && (
                            <div>
                              <h4 className="text-sm font-semibold mb-4 uppercase tracking-wider">Deliverables</h4>
                              <ul className="space-y-3">
                                {pkg.deliverables.map((del: string, idx: number) => (
                                  <li key={idx} className="flex items-start text-sm">
                                    <Zap className="w-4 h-4 text-yellow-500 mr-3 shrink-0 mt-0.5" />
                                    {del}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4 mb-8 text-sm border-t border-black/5 pt-6">
                          {pkg.timeline && (
                            <div className="flex items-center">
                              <Clock className="w-4 h-4 mr-2 text-pink-600" />
                              <span>{pkg.timeline}</span>
                            </div>
                          )}
                          {pkg.support && (
                            <div className="flex items-center">
                              <Headphones className="w-4 h-4 mr-2 text-cyan-600" />
                              <span>{pkg.support}</span>
                            </div>
                          )}
                        </div>

                        <Link 
                          href="/book-call" 
                          className="btn-primary w-full text-center text-sm flex items-center justify-center gap-2 group mt-auto"
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
          </div>
        </section>

      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}
