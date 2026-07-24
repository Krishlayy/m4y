"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Clock, DollarSign } from 'lucide-react';
import Link from 'next/link';

type Service = {
  id: string;
  name: string;
  slug: string;
  shortDescription: string | null;
};

// Mock categories for now, in a real implementation we'd fetch these from the DB
const serviceCategories = [
  { id: 'Marketing', name: 'Marketing' },
  { id: 'Design', name: 'Design' },
  { id: 'Development', name: 'Development' }
];

export default function ServiceList({ services }: { services: Service[] }) {
  const [activeCategory, setActiveCategory] = useState('All');

  // In a real implementation with relations we'd filter by category name
  const filteredServices = services;

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
              key={service.id}
              layout
              variants={itemVariants}
              initial="hidden"
              animate="show"
              exit="exit"
              className="h-full"
            >
              <div className="modern-card h-full flex flex-col p-8 group transition-colors duration-500 bg-white">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#FF3B00]/20 to-[#FFD700]/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 border-2 border-black">
                  <div className="w-6 h-6 bg-gradient-to-br from-[#FF3B00] to-[#FFD700] rounded-md border border-black" />
                </div>
                
                <h3 className="text-2xl font-bold mb-4 transition-colors duration-300 uppercase tracking-tight">
                  {service.name}
                </h3>
                
                <p className="mb-8 flex-grow font-medium text-gray-700">
                  {service.shortDescription}
                </p>
                
                <div className="space-y-3 mb-8">
                  <div className="flex items-center text-sm font-bold uppercase tracking-widest text-gray-500">
                    <Clock className="w-4 h-4 mr-3 text-black" />
                    <span>Timeline: 2-4 weeks</span>
                  </div>
                  <div className="flex items-center text-sm font-bold uppercase tracking-widest text-gray-500">
                    <DollarSign className="w-4 h-4 mr-3 text-[#FF3B00]" />
                    <span>Book a Call for Pricing</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 mt-auto">
                  <Link href="/book-call" className="bg-[#FFD700] text-black font-black uppercase tracking-widest text-sm px-4 py-3 border-2 border-black flex-1 text-center hover:bg-black hover:text-[#FFD700] transition-colors">
                    Book Call
                  </Link>
                  <Link href={`/services/${service.slug}`} className="bg-black text-white font-black uppercase tracking-widest text-sm px-4 py-3 border-2 border-black flex-1 text-center flex items-center justify-center gap-2 group/btn hover:bg-[#FF3B00] transition-colors">
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
        <div className="text-center py-20 font-bold">
          No services found.
        </div>
      )}
    </>
  );
}
