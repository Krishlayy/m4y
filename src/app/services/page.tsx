'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Clock, DollarSign, CheckCircle2 } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import FloatingCTA from '@/components/ui/FloatingCTA';
import { services, serviceCategories } from '@/data/services';
import Link from 'next/link';

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredServices = activeCategory === 'All' 
    ? services 
    : services.filter(service => service.category === activeCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, scale: 0.95, transition: { duration: 0.2 } }
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen selection:bg-purple-500/30">
        <section className="relative pt-40 pb-20 md:pt-24 md:pb-28 overflow-hidden">
          <div className="container relative z-10 mx-auto px-6 max-w-7xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-center max-w-4xl mx-auto"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-black/10 mb-8 bg-white/50">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                <span className="text-sm font-medium">Our Capabilities</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8">
                Every Service Your <span className="text-gradient bg-gradient-to-r from-[#FF3B00] to-[#FFD700] bg-clip-text text-transparent">Business Needs</span>
              </h1>
              <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
                As a full-service digital marketing agency, we provide end-to-end solutions designed to elevate your brand, drive targeted traffic, and maximize your ROI.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-24 relative z-10 border-t border-black/5">
          <div className="w-full px-6 md:px-12 lg:px-24 max-w-[1400px] mx-auto">
            
            <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
              <button
                onClick={() => setActiveCategory('All')}
                className={`btn-primary ${
                  activeCategory === 'All' ? 'bg-purple-100' : ''
                }`}
              >
                All Services
              </button>
              {serviceCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`btn-primary ${
                    activeCategory === category.id ? 'bg-purple-100' : ''
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>

            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate="show"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              <AnimatePresence mode="popLayout">
                {filteredServices.map((service) => (
                  <motion.div
                    key={service.id || service.name}
                    layout
                    variants={itemVariants}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                    className="h-full"
                  >
                    <div className="modern-card h-full flex flex-col p-8 group transition-colors duration-500">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                        {/* Assuming service has an icon, else placeholder */}
                        <div className="w-6 h-6 bg-gradient-to-br from-purple-400 to-pink-400 rounded-md shadow-[0_0_15px_rgba(168,85,247,0.5)]" />
                      </div>
                      
                      <div className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-4 w-fit border border-black/10">
                        {service.category}
                      </div>
                      
                      <h3 className="text-2xl font-bold mb-4 transition-colors duration-300">
                        {service.name}
                      </h3>
                      
                      <p className="mb-8 flex-grow">
                        {service.shortDescription}
                      </p>
                      
                      <div className="space-y-3 mb-8">
                        <div className="flex items-center text-sm">
                          <Clock className="w-4 h-4 mr-3 text-purple-600" />
                          <span>Timeline: {service.timeline || '2-4 weeks'}</span>
                        </div>
                        <div className="flex items-center text-sm">
                          <DollarSign className="w-4 h-4 mr-3 text-green-600" />
                          <span>Book a Call for Pricing</span>
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-4 mt-auto">
                        <Link href="/book-call" className="btn-primary flex-1 text-center text-sm">
                          Book Consultation
                        </Link>
                        <Link href={`/services/${service.slug || '#'}`} className="btn-primary flex-1 text-center text-sm flex items-center justify-center gap-2 group/btn">
                          Learn More
                          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

            {filteredServices.length === 0 && (
              <div className="text-center py-20">
                No services found for this category.
              </div>
            )}
          </div>
        </section>

      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}
