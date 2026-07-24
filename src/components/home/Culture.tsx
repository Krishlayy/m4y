'use client';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

export default function Culture() {
  return (
    <section className="bg-white text-black border-t border-black/10 py-24 md:py-32">
      <div className="w-full px-6 md:px-16 lg:px-32 xl:px-40">
        <h2 className="text-5xl md:text-7xl font-bold uppercase tracking-tight mb-16 md:mb-24">
          Our <span className="text-[#FF3B00]">Culture</span>
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative aspect-square bg-gray-100 border-2 border-black overflow-hidden group"
          >
            <div className="absolute inset-0 bg-[#FF3B00]/20 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200" 
              alt="Team collaboration" 
              className="w-full h-full object-cover filter grayscale group-hover:scale-105 transition-transform duration-700"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-3xl md:text-4xl font-bold mb-8 leading-tight tracking-tight">
              We build digital products, but our foundation is people.
            </h3>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
              We are a team of passionate creators, thinkers, and builders. We value transparency, continuous learning, and pushing the boundaries of what&apos;s possible in the digital space. Our remote-friendly environment ensures we work with the best talent, regardless of location.
            </p>
            
            <ul className="space-y-8">
              {[
                { title: 'Radical Transparency', desc: 'Honest communication at all levels. No hidden agendas.' },
                { title: 'Continuous Growth', desc: 'Dedicated time and budget for learning and exploration.' },
                { title: 'Remote-First', desc: 'Work from anywhere, collaborate seamlessly everywhere.' }
              ].map((val, idx) => (
                <li key={idx} className="flex gap-6 items-start group">
                  <div className="w-8 h-8 rounded-full border-2 border-black flex items-center justify-center group-hover:border-[#FF3B00] group-hover:bg-[#FF3B00] group-hover:text-white transition-colors duration-300 flex-shrink-0 mt-1">
                    <Check size={16} strokeWidth={3} className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div>
                    <h4 className="font-bold text-2xl mb-2 uppercase tracking-wide group-hover:text-[#FF3B00] transition-colors duration-300">{val.title}</h4>
                    <p className="text-gray-600 text-lg">{val.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
