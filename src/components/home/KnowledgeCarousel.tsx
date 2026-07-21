'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, BookOpen, Video, MailPlus } from 'lucide-react';

const cards = [
  {
    id: 1,
    type: 'Newsletter',
    icon: <MailPlus className="w-8 h-8 md:w-10 md:h-10 py-24 md:py-32" />,
    title: 'Subscribe to our Insights',
    desc: 'Get the latest digital product trends delivered to your inbox weekly.',
    cta: 'Subscribe',
    color: 'bg-black text-white'
  },
  {
    id: 2,
    type: 'Article',
    icon: <BookOpen className="w-8 h-8 md:w-10 md:h-10" />,
    title: 'The Future of AI in UX Design',
    desc: 'An expert deep dive into how large language models are shaping interface design.',
    cta: 'Read Article',
    color: 'bg-[#FF3B00] text-white'
  },
  {
    id: 3,
    type: 'Webinar',
    icon: <Video className="w-8 h-8 md:w-10 md:h-10" />,
    title: 'Building Scalable Next.js Apps',
    desc: 'Watch the recording of our recent technical workshop on advanced React patterns.',
    cta: 'Watch Now',
    color: 'bg-gray-100 text-black border-2 border-black'
  }
];

export default function KnowledgeCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % cards.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isHovered]);

  return (
    <section className="py-24 md:py-32 bg-white text-black border-t border-black/10">
      <div className="w-full px-6 md:px-12 lg:px-24">
        <div className="flex justify-between items-end mb-16">
          <h2 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter">
            Knowledge Hub
          </h2>
          <div className="hidden md:flex gap-3 pb-3">
            {cards.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 transition-all duration-300 ${
                  currentIndex === idx ? 'bg-[#FF3B00] w-12' : 'bg-black/20 hover:bg-black/50 w-6'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
        
        <div 
          className="relative min-h-[500px] overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className={`absolute inset-0 p-10 md:p-16 flex flex-col justify-between ${cards[currentIndex].color}`}
            >
              <div>
                <div className="flex items-center gap-4 mb-10 opacity-80">
                  {cards[currentIndex].icon}
                  <span className="font-bold tracking-widest uppercase text-sm md:text-lg">{cards[currentIndex].type}</span>
                </div>
                <h3 className="text-4xl md:text-6xl font-bold mb-8 leading-tight max-w-4xl tracking-tight">{cards[currentIndex].title}</h3>
                <p className="text-xl md:text-2xl opacity-80 max-w-2xl leading-relaxed">{cards[currentIndex].desc}</p>
              </div>
              
              <button className="flex items-center gap-6 group font-bold w-fit text-xl mt-8">
                <span className="uppercase tracking-widest">{cards[currentIndex].cta}</span>
                <div className="w-14 h-14 rounded-full border-2 border-current flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors duration-300">
                  <ArrowRight className="w-6 h-6" />
                </div>
              </button>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex md:hidden justify-center mt-10 gap-3">
          {cards.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2 transition-all duration-300 ${
                currentIndex === idx ? 'bg-[#FF3B00] w-12' : 'bg-black/20 hover:bg-black/50 w-6'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
