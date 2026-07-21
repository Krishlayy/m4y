'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Target, Eye, Lightbulb, Shield, Zap, Palette, Users, Trophy, Heart, Briefcase, ChevronDown, ChevronUp } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import FloatingCTA from '@/components/ui/FloatingCTA';
import { SectionHeading } from '@/components/ui/Shared';
import Link from 'next/link';

export default function AboutPage() {
  const [openFaq, setOpenFaq] = useState<string | null>(null);

  const values = [
    { icon: Lightbulb, title: 'Innovation', desc: 'We constantly push boundaries, adopting new technologies and creative approaches.' },
    { icon: Shield, title: 'Transparency', desc: 'Complete honesty in our processes, pricing, and performance reporting.' },
    { icon: Target, title: 'Results-First', desc: 'Vanity metrics don\'t pay the bills. We focus on measurable business growth.' },
    { icon: Palette, title: 'Creativity', desc: 'Standing out requires bold ideas and flawless execution.' },
    { icon: Heart, title: 'Partnership', desc: 'We act as an extension of your team, deeply invested in your success.' },
    { icon: Trophy, title: 'Excellence', desc: 'We deliver nothing short of our absolute best work, every single time.' }
  ];

  const philosophy = [
    { title: 'Strategy First', desc: 'We never execute without a solid foundation. Research and data drive our decisions.' },
    { title: 'Data-Driven', desc: 'Gut feelings are good, but analytics are better. We track, measure, and optimize.' },
    { title: 'Agile Execution', desc: 'The digital landscape changes fast. We pivot quickly to capitalize on new opportunities.' },
    { title: 'Collaborative', desc: 'Your industry expertise combined with our marketing prowess creates winning campaigns.' }
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen selection:bg-cyan-500/30">
        
        {/* Hero Section */}
        <section className="relative pt-40 pb-24 md:pt-48 md:pb-32 overflow-hidden">
          <div className="container relative z-10 mx-auto px-6 max-w-7xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter tracking-tight mb-8 leading-tight">
                We're Not <br/>
                <span className="text-gradient bg-gradient-to-r from-[#FF3B00] to-[#FFD700] bg-clip-text text-transparent">Another Agency</span>
              </h1>
              <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto leading-relaxed">
                We are your dedicated growth partners. Built on transparency, fueled by data, and driven by an obsession with your success.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-24 relative z-10">
          <div className="w-full px-6 md:px-12 lg:px-24 max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="modern-card p-10 md:p-14 group"
              >
                <Target className="w-12 h-12 mb-8" />
                <h2 className="text-3xl font-black uppercase tracking-tighter mb-6">Our Mission</h2>
                <p className="text-xl font-medium leading-relaxed">
                  "To empower businesses with innovative marketing solutions that drive measurable growth and lasting brand impact."
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="modern-card p-10 md:p-14 group"
              >
                <Eye className="w-12 h-12 mb-8" />
                <h2 className="text-3xl font-black uppercase tracking-tighter mb-6">Our Vision</h2>
                <p className="text-xl font-medium leading-relaxed">
                  "To become the most trusted growth partner for businesses worldwide, where creativity meets technology to deliver extraordinary results."
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-24 relative z-10 border-y border-black/10">
          <div className="w-full px-6 md:px-12 lg:px-24 max-w-[1400px] mx-auto">
            <SectionHeading 
              title="Core Values" 
              subtitle="The principles that guide every strategy we build and every line of code we write." 
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
              {values.map((val, idx) => (
                <motion.div
                  key={val.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <div className="modern-card p-8 h-full">
                    <val.icon className="w-10 h-10 mb-6" />
                    <h3 className="text-2xl font-black uppercase tracking-tighter mb-3">{val.title}</h3>
                    <p className="font-medium">{val.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Culture & Working Philosophy */}
        <section className="py-32 relative z-10">
          <div className="w-full px-6 md:px-12 lg:px-24 max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter mb-8">Our Culture</h2>
                <div className="space-y-6 text-lg leading-relaxed font-medium">
                  <p>
                    At M4Y, we believe that great work comes from happy, inspired people. We operate as a modern, remote-first agency that values creative freedom over micromanagement.
                  </p>
                  <p>
                    We foster an environment of continuous learning where taking calculated risks is encouraged, and failures are viewed as stepping stones to innovation.
                  </p>
                  <div className="pt-6 grid grid-cols-2 gap-6">
                    <div className="modern-card p-6">
                      <Users className="w-8 h-8 mb-4" />
                      <h4 className="font-black uppercase tracking-tighter mb-2">Remote-First</h4>
                      <p className="text-sm font-medium">Talent has no borders.</p>
                    </div>
                    <div className="modern-card p-6">
                      <Zap className="w-8 h-8 mb-4" />
                      <h4 className="font-black uppercase tracking-tighter mb-2">Creative Freedom</h4>
                      <p className="text-sm font-medium">Space to think big.</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter mb-8">Working Philosophy</h2>
                <div className="space-y-6">
                  {philosophy.map((item, idx) => (
                    <div key={item.title} className="flex gap-4">
                      <div className="w-12 h-12 rounded-full border-4 border-black bg-white flex items-center justify-center shrink-0 shadow-[4px_4px_0px_rgba(0,0,0,1)]">
                        <span className="font-bold text-black">{idx + 1}</span>
                      </div>
                      <div>
                        <h4 className="text-xl font-black uppercase tracking-tighter mb-2">{item.title}</h4>
                        <p className="font-medium leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Why M4Y */}
        <section className="py-24 relative z-10 border-t border-black/10 bg-gray-50">
          <div className="w-full px-6 md:px-12 lg:px-24 max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter mb-8">Why Choose <span className="text-gradient bg-gradient-to-r from-[#FF3B00] to-[#FFD700] bg-clip-text text-transparent">M4Y?</span></h2>
            <p className="text-xl font-medium mb-12">
              Because we treat your business as if it were our own. No cookie-cutter strategies, no empty promises. Just relentless dedication to achieving your growth targets through world-class marketing execution.
            </p>
            <Link href="/book-call" className="btn-primary text-xl mt-8">
              Let's Grow Together
            </Link>
          </div>
        </section>



      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}
