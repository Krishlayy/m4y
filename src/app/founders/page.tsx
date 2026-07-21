'use client';
import { motion } from 'framer-motion';
import { Globe, Share2, Mail, ExternalLink, Briefcase, Award, TrendingUp, Cpu, PenTool } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import FloatingCTA from '@/components/ui/FloatingCTA';
import { SectionHeading } from '@/components/ui/Shared';
import { founders } from '@/data/founders';
import Link from 'next/link';

export default function FoundersPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7 } }
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen selection:bg-yellow-500/30">
        
        <section className="relative pt-32 pb-20 md:pt-44 md:pb-28 overflow-hidden">
          <div className="container relative z-10 mx-auto px-6 max-w-7xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-5xl md:text-8xl font-bold uppercase text-retro-shadow tracking-tight mb-8">
                Meet the <span className="text-gradient bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">Founders</span>
              </h1>
              <p className="text-xl md:text-2xl font-medium max-w-3xl mx-auto leading-relaxed">
                Five visionaries building the future of marketing. Our diverse expertise combines to create a powerhouse of digital innovation.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-24 relative z-10 border-y-4 border-black">
          <div className="container mx-auto px-6 max-w-7xl">
            {/* Tech & Engineering */}
            <div className="mb-24">
              <h2 className="text-4xl md:text-5xl font-bold uppercase text-retro-shadow mb-12 text-center">Tech & Engineering</h2>
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
                className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto"
              >
                {founders.filter(f => f.name.includes('Krishlay') || f.name.includes('Ayushman')).map((founder, index) => (
                  <motion.div key={founder.id || founder.name} variants={itemVariants} className="flex">
                    <div className="game-card game-card-blue p-8 w-full h-full flex flex-col group relative overflow-hidden">
                      <div className="flex items-start justify-between mb-8 relative z-10">
                        <div className="flex items-center gap-6">
                          <div className="w-20 h-20 rounded-full border-4 border-black bg-white flex items-center justify-center shadow-[4px_4px_0px_rgba(0,0,0,1)] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                            <span className="text-2xl font-bold text-black tracking-widest">
                              {founder.name.split(' ').map((n: string) => n[0]).join('')}
                            </span>
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold mb-1">{founder.name}</h3>
                            <p className="font-bold text-sm mb-1">{founder.role}</p>
                            <span className="inline-block px-2 py-0.5 border-2 border-black bg-white rounded-full text-xs font-bold shadow-[2px_2px_0px_rgba(0,0,0,1)]">
                              {founder.department}
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      <p className="font-medium leading-relaxed mb-8 flex-grow relative z-10">
                        {founder.bio}
                      </p>
                      
                      <div className="mb-8 relative z-10">
                        <h4 className="text-xs font-bold uppercase tracking-wider mb-3">Superpowers</h4>
                        <div className="flex flex-wrap gap-2">
                          {founder.skills?.map((skill: string) => (
                            <span key={skill} className="px-3 py-1 border-2 border-black bg-white rounded-full text-xs font-bold shadow-[2px_2px_0px_rgba(0,0,0,1)]">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-4 mt-auto pt-6 border-t-4 border-black relative z-10">
                        {founder.socials?.linkedin && (
                          <a href={founder.socials.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 border-2 border-black bg-white rounded-full shadow-[2px_2px_0px_rgba(0,0,0,1)] hover:bg-yellow-200 transition-colors">
                            <Share2 className="w-5 h-5 text-black" />
                          </a>
                        )}
                        {founder.socials?.twitter && (
                          <a href={founder.socials.twitter} target="_blank" rel="noopener noreferrer" className="p-2 border-2 border-black bg-white rounded-full shadow-[2px_2px_0px_rgba(0,0,0,1)] hover:bg-yellow-200 transition-colors">
                            <Globe className="w-5 h-5 text-black" />
                          </a>
                        )}
                        {founder.socials?.instagram && (
                          <a href={founder.socials.instagram} target="_blank" rel="noopener noreferrer" className="p-2 border-2 border-black bg-white rounded-full shadow-[2px_2px_0px_rgba(0,0,0,1)] hover:bg-yellow-200 transition-colors">
                            <ExternalLink className="w-5 h-5 text-black" />
                          </a>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Brand & Marketing */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold uppercase text-retro-shadow mb-12 text-center">Brand & Marketing</h2>
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
              >
                {founders.filter(f => !f.name.includes('Krishlay') && !f.name.includes('Ayushman')).map((founder, index) => (
                  <motion.div key={founder.id || founder.name} variants={itemVariants} className="flex">
                    <div className="game-card game-card-pink p-8 w-full h-full flex flex-col group relative overflow-hidden">
                      <div className="flex items-start justify-between mb-8 relative z-10">
                        <div className="flex items-center gap-6">
                          <div className="w-20 h-20 rounded-full border-4 border-black bg-white flex items-center justify-center shadow-[4px_4px_0px_rgba(0,0,0,1)] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                            <span className="text-2xl font-bold text-black tracking-widest">
                              {founder.name.split(' ').map((n: string) => n[0]).join('')}
                            </span>
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold mb-1">{founder.name}</h3>
                            <p className="font-bold text-sm mb-1">{founder.role}</p>
                            <span className="inline-block px-2 py-0.5 border-2 border-black bg-white rounded-full text-xs font-bold shadow-[2px_2px_0px_rgba(0,0,0,1)]">
                              {founder.department}
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      <p className="font-medium leading-relaxed mb-8 flex-grow relative z-10">
                        {founder.bio}
                      </p>
                      
                      <div className="mb-8 relative z-10">
                        <h4 className="text-xs font-bold uppercase tracking-wider mb-3">Superpowers</h4>
                        <div className="flex flex-wrap gap-2">
                          {founder.skills?.map((skill: string) => (
                            <span key={skill} className="px-3 py-1 border-2 border-black bg-white rounded-full text-xs font-bold shadow-[2px_2px_0px_rgba(0,0,0,1)]">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-4 mt-auto pt-6 border-t-4 border-black relative z-10">
                        {founder.socials?.linkedin && (
                          <a href={founder.socials.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 border-2 border-black bg-white rounded-full shadow-[2px_2px_0px_rgba(0,0,0,1)] hover:bg-yellow-200 transition-colors">
                            <Share2 className="w-5 h-5 text-black" />
                          </a>
                        )}
                        {founder.socials?.twitter && (
                          <a href={founder.socials.twitter} target="_blank" rel="noopener noreferrer" className="p-2 border-2 border-black bg-white rounded-full shadow-[2px_2px_0px_rgba(0,0,0,1)] hover:bg-yellow-200 transition-colors">
                            <Globe className="w-5 h-5 text-black" />
                          </a>
                        )}
                        {founder.socials?.instagram && (
                          <a href={founder.socials.instagram} target="_blank" rel="noopener noreferrer" className="p-2 border-2 border-black bg-white rounded-full shadow-[2px_2px_0px_rgba(0,0,0,1)] hover:bg-yellow-200 transition-colors">
                            <ExternalLink className="w-5 h-5 text-black" />
                          </a>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>
        
        <section className="py-24 relative z-10">
          <div className="container mx-auto px-6 max-w-4xl text-center">
            <h2 className="text-4xl md:text-5xl font-bold uppercase text-retro-shadow mb-8">Ready to work with our team?</h2>
            <p className="text-xl font-medium mb-10">
              Get direct access to our founding team's expertise. We're ready to architect your next phase of growth.
            </p>
            <Link href="/book-call" className="game-btn text-xl mt-8">
              Book a Strategy Call
            </Link>
          </div>
        </section>

      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}
