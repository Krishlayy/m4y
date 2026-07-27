'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Check } from 'lucide-react';

export default function Culture() {
  return (
    <section className="bg-white text-black border-t-4 border-black py-32 md:py-40">
      <div className="w-full px-6 md:px-16 lg:px-32 xl:px-40">
        <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-16 md:mb-24">
          Our <span className="text-white bg-[#FF3B00] px-3 py-1 border-4 border-black shadow-[4px_4px_0px_#000]">Culture</span>
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative aspect-square bg-gray-100 border-4 border-black shadow-[8px_8px_0px_#000] overflow-hidden group"
          >
            <div className="absolute inset-0 bg-[#FF3B00] opacity-0 group-hover:opacity-20 transition-opacity duration-200 z-10" />
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200"
              alt="Team collaboration"
              fill
              className="object-cover filter grayscale group-hover:scale-105 transition-transform duration-300"
              unoptimized
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-8 leading-[0.9]">
              We build digital products, but our foundation is people.
            </h3>
            <p className="text-xl font-bold text-gray-800 mb-12 leading-relaxed">
              We are a team of passionate creators, thinkers, and builders. We value transparency, continuous learning, and pushing the boundaries of what&apos;s possible in the digital space. Our remote-friendly environment ensures we work with the best talent, regardless of location.
            </p>
            
            <ul className="space-y-8">
              {[
                { title: 'Radical Transparency', desc: 'Honest communication at all levels. No hidden agendas.' },
                { title: 'Continuous Growth', desc: 'Dedicated time and budget for learning and exploration.' },
                { title: 'Remote-First', desc: 'Work from anywhere, collaborate seamlessly everywhere.' }
              ].map((val, idx) => (
                <li key={idx} className="flex gap-6 items-start group">
                  <div className="w-8 h-8 border-4 border-black flex items-center justify-center group-hover:bg-[#FF3B00] group-hover:text-white transition-colors duration-300 flex-shrink-0 mt-1">
                    <Check size={20} strokeWidth={4} className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div>
                    <h4 className="font-black text-2xl mb-2 uppercase tracking-tight group-hover:text-[#FF3B00] transition-colors duration-300">{val.title}</h4>
                    <p className="text-gray-800 font-bold text-lg">{val.desc}</p>
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
