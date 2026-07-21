'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, Video, CheckCircle2, TrendingUp, Target, Users } from 'lucide-react';
import { useForm } from 'react-hook-form';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import FloatingCTA from '@/components/ui/FloatingCTA';
import { SectionHeading, GlassCard } from '@/components/ui/Shared';
import AuroraBackground from '@/components/ui/AuroraBackground';

export default function BookCallPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
    setIsSubmitted(true);
  };

  const services = [
    'Digital Marketing', 'SEO', 'AI Solutions', 'Influencer Marketing',
    'Web Development', 'Social Media', 'Branding', 'Content Marketing'
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#09090B] text-white overflow-hidden relative">
        <AuroraBackground />
        
        <section className="relative pt-32 pb-12 md:pt-48 md:pb-16 z-10">
          <div className="container mx-auto px-4 text-center max-w-4xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-extrabold mb-6"
            >
              Schedule Your Free <span className="text-gradient">Growth Consultation</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-white/70"
            >
              Take the first step toward transforming your business. This 30-minute call is 100% free, zero obligation.
            </motion.p>
          </div>
        </section>

        <section className="relative pb-24 z-10">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
              <motion.div 
                className="lg:col-span-4 order-2 lg:order-1 space-y-6"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <GlassCard>
                  <h3 className="text-2xl font-bold mb-6">Meeting Details</h3>
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="bg-white/10 p-3 rounded-xl">
                        <Clock className="text-[#00D9FF]" size={24} />
                      </div>
                      <div>
                        <div className="font-semibold">Duration</div>
                        <div className="text-white/60">30 Minutes</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="bg-white/10 p-3 rounded-xl">
                        <Video className="text-[#FF5DB1]" size={24} />
                      </div>
                      <div>
                        <div className="font-semibold">Format</div>
                        <div className="text-white/60">Google Meet or Zoom</div>
                      </div>
                    </div>
                  </div>

                  <hr className="border-white/10 my-8" />
                  
                  <h4 className="font-bold text-lg mb-4">What to expect:</h4>
                  <ul className="space-y-3">
                    {[
                      { icon: Target, text: 'Business audit' },
                      { icon: TrendingUp, text: 'Growth opportunities' },
                      { icon: Users, text: 'Custom strategy preview' },
                      { icon: CheckCircle2, text: 'Pricing discussion' },
                      { icon: CheckCircle2, text: 'Q&A' }
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <item.icon className="text-[#6C4DFF] shrink-0 mt-0.5" size={20} />
                        <span className="text-white/80">{item.text}</span>
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              </motion.div>

              <motion.div 
                className="lg:col-span-8 order-1 lg:order-2"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <GlassCard className="p-6 md:p-10">
                  {isSubmitted ? (
                    <div className="text-center py-20 flex flex-col items-center">
                      <div className="bg-[#00E676]/20 p-6 rounded-full text-[#00E676] mb-6">
                        <CheckCircle2 size={80} />
                      </div>
                      <h3 className="text-4xl font-bold mb-4">Call Requested!</h3>
                      <p className="text-white/70 text-lg max-w-md mx-auto">
                        Your strategy call has been requested. Check your email for calendar invitation and details.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-white/80">First & Last Name *</label>
                          <input type="text" {...register('name', { required: true })} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-[#00D9FF] transition-colors" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-white/80">Email Address *</label>
                          <input type="email" {...register('email', { required: true })} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-[#00D9FF] transition-colors" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-white/80">Phone Number *</label>
                          <input type="tel" {...register('phone', { required: true })} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-[#00D9FF] transition-colors" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-white/80">Company Name</label>
                          <input type="text" {...register('company')} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-[#00D9FF] transition-colors" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-white/80">Website URL</label>
                          <input type="url" {...register('website')} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-[#00D9FF] transition-colors" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-white/80">Monthly Revenue</label>
                          <select {...register('revenue')} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-[#00D9FF] transition-colors appearance-none">
                            <option value="">Select revenue...</option>
                            <option value="Pre-revenue">Pre-revenue</option>
                            <option value="Under $10K">Under $10K</option>
                            <option value="$10K-50K">$10K-50K</option>
                            <option value="$50K-200K">$50K-200K</option>
                            <option value="$200K-1M">$200K-1M</option>
                            <option value="$1M+">$1M+</option>
                          </select>
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-white/80">Marketing Budget</label>
                          <select {...register('budget')} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-[#00D9FF] transition-colors appearance-none">
                            <option value="">Select budget...</option>
                            <option value="Under $1K">Under $1K</option>
                            <option value="$1K-5K">$1K-5K</option>
                            <option value="$5K-15K">$5K-15K</option>
                            <option value="$15K-50K">$15K-50K</option>
                            <option value="$50K+">$50K+</option>
                          </select>
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-white/80">Business Size</label>
                          <select {...register('size')} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-[#00D9FF] transition-colors appearance-none">
                            <option value="">Select size...</option>
                            <option value="1-10">1-10 employees</option>
                            <option value="11-50">11-50 employees</option>
                            <option value="51-200">51-200 employees</option>
                            <option value="201-500">201-500 employees</option>
                            <option value="500+">500+ employees</option>
                          </select>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-white/80">Preferred Date</label>
                          <input type="date" {...register('date')} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-[#00D9FF] transition-colors [color-scheme:dark]" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-white/80">Preferred Time</label>
                          <input type="time" {...register('time')} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-[#00D9FF] transition-colors [color-scheme:dark]" />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-medium text-white/80 mb-2 block">What services are you interested in?</label>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                          {services.map(service => (
                            <label key={service} className="flex items-center space-x-2 cursor-pointer bg-white/5 p-3 rounded-lg border border-white/5 hover:border-[#00D9FF]/50 transition-colors">
                              <input type="checkbox" value={service} {...register('services')} className="rounded bg-white/10 border-white/20 text-[#00D9FF] focus:ring-[#00D9FF]" />
                              <span className="text-sm">{service}</span>
                            </label>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-medium text-white/80">Project Goals</label>
                        <textarea {...register('goals')} rows={3} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-[#00D9FF] transition-colors"></textarea>
                      </div>

                      <button type="submit" className="w-full bg-gradient-to-r from-[#6C4DFF] via-[#FF5DB1] to-[#00D9FF] text-white font-bold py-5 text-xl rounded-xl hover:shadow-[0_0_30px_rgba(108,77,255,0.4)] transition-all transform hover:scale-[1.01]">
                        Book My Free Strategy Call
                      </button>
                    </form>
                  )}
                </GlassCard>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}
