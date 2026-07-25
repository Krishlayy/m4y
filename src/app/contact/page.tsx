"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { submitContactInquiry } from "@/lib/public-actions";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (formData: FormData) => {
    setStatus("submitting");
    const result = await submitContactInquiry(formData);
    if (result.success) {
      setStatus("success");
    } else {
      setStatus("error");
    }
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#F4F4F5] pt-40 pb-24 border-b-8 border-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24"
          >
            {/* Left Col: Info (≈45%) */}
            <div className="lg:col-span-5 flex flex-col gap-16">
              
              {/* Hero Statement */}
              <section>
                <h1 className="text-5xl md:text-6xl font-black uppercase tracking-tighter mb-6 leading-[0.9]">
                  Let's Build <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF3B00] to-[#FFD700]">
                    Something Great.
                  </span>
                </h1>
                <p className="text-lg font-bold text-gray-800 leading-relaxed max-w-md">
                  M4Y helps startups, creators, brands, and businesses scale through digital marketing, branding, AI automation, web development, and performance campaigns.
                </p>
              </section>

              {/* What We Do */}
              <section>
                <h2 className="text-2xl font-black uppercase tracking-widest border-b-4 border-black pb-4 mb-6">What We Do</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 text-sm font-bold uppercase tracking-wider text-gray-700">
                  <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-black rounded-full" /> Digital Marketing</div>
                  <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-black rounded-full" /> Performance Marketing</div>
                  <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-black rounded-full" /> Branding</div>
                  <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-black rounded-full" /> Website Development</div>
                  <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-black rounded-full" /> UI/UX Design</div>
                  <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-black rounded-full" /> SEO</div>
                  <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-black rounded-full" /> Social Media Management</div>
                  <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-black rounded-full" /> AI Chatbots</div>
                  <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-black rounded-full" /> WhatsApp Automation</div>
                  <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-black rounded-full" /> Influencer Marketing</div>
                  <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-black rounded-full" /> Content Creation</div>
                  <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-black rounded-full" /> E-commerce Growth</div>
                </div>
              </section>

              {/* Typical Investment */}
              <section>
                <h2 className="text-2xl font-black uppercase tracking-widest border-b-4 border-black pb-4 mb-6">Typical Investment</h2>
                <p className="text-sm font-bold text-gray-600 mb-6">
                  Transparent pricing. No hidden costs. Custom plans available for every budget.
                </p>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-2 border-black p-4 bg-white hover:bg-[#F4F4F5] transition-colors">
                    <div>
                      <h4 className="font-black uppercase text-lg">Starter</h4>
                      <p className="text-xs font-bold text-gray-500">Perfect for local businesses & creators</p>
                    </div>
                    <div className="font-black">₹4,999 – ₹9,999</div>
                  </div>
                  
                  <div className="flex justify-between items-center border-2 border-black p-4 bg-white hover:bg-[#F4F4F5] transition-colors relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-tr from-[#FF3B00] to-[#FFD700] transform translate-x-6 -translate-y-6 rotate-45" />
                    <div>
                      <h4 className="font-black uppercase text-lg relative z-10">Growth</h4>
                      <p className="text-xs font-bold text-gray-500 relative z-10">Ideal for startups & growing brands</p>
                    </div>
                    <div className="font-black relative z-10">₹10,000 – ₹19,999</div>
                  </div>
                  
                  <div className="flex justify-between items-center border-2 border-black p-4 bg-white hover:bg-[#F4F4F5] transition-colors">
                    <div>
                      <h4 className="font-black uppercase text-lg">Scale</h4>
                      <p className="text-xs font-bold text-gray-500">Complete digital growth solution</p>
                    </div>
                    <div className="font-black">₹20,000 – ₹35,000</div>
                  </div>
                  
                  <div className="pt-2 text-sm font-bold text-gray-700">
                    <span className="font-black text-black">Custom Projects:</span> Websites, AI automation, branding, apps, and large campaigns are quoted after a discovery call.
                  </div>
                </div>
              </section>

              {/* Working Process */}
              <section>
                <h2 className="text-2xl font-black uppercase tracking-widest border-b-4 border-black pb-4 mb-6">Working Process</h2>
                <div className="flex flex-col gap-3 font-black text-lg uppercase tracking-wider text-gray-400">
                  <div className="hover:text-black transition-colors duration-300">01 Discovery Call</div>
                  <div className="hover:text-black transition-colors duration-300">02 Strategy</div>
                  <div className="hover:text-black transition-colors duration-300">03 Proposal</div>
                  <div className="hover:text-black transition-colors duration-300">04 Execution</div>
                  <div className="hover:text-[#FF3B00] transition-colors duration-300">05 Growth</div>
                </div>
              </section>

              {/* Why Clients Choose M4Y */}
              <section>
                <h2 className="text-2xl font-black uppercase tracking-widest border-b-4 border-black pb-4 mb-6">Why Choose Us</h2>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-2 font-bold"><Check className="w-5 h-5 text-[#FF3B00]" /> Transparent Pricing</div>
                  <div className="flex items-center gap-2 font-bold"><Check className="w-5 h-5 text-[#FF3B00]" /> Dedicated Team</div>
                  <div className="flex items-center gap-2 font-bold"><Check className="w-5 h-5 text-[#FF3B00]" /> Weekly Reports</div>
                  <div className="flex items-center gap-2 font-bold"><Check className="w-5 h-5 text-[#FF3B00]" /> ROI Focused</div>
                  <div className="flex items-center gap-2 font-bold"><Check className="w-5 h-5 text-[#FF3B00]" /> Fast Turnaround</div>
                  <div className="flex items-center gap-2 font-bold"><Check className="w-5 h-5 text-[#FF3B00]" /> Long-Term Growth</div>
                </div>
              </section>

            </div>

            {/* Right Col: Form (≈55%) */}
            <div className="lg:col-span-7">
              <div className="modern-card bg-white p-8 md:p-12 relative overflow-hidden">
                {status === "success" ? (
                  <div className="absolute inset-0 bg-black z-10 flex flex-col items-center justify-center text-center p-8 border-4 border-black m-2">
                    <div className="w-24 h-24 bg-[#00E676] flex items-center justify-center mb-8 border-4 border-white">
                      <Check className="w-12 h-12 text-black stroke-[3]" />
                    </div>
                    <h3 className="text-4xl font-black uppercase mb-4 text-white">Consultation Requested</h3>
                    <p className="font-bold text-xl text-gray-300 max-w-sm">
                      Our strategy team is reviewing your details. We will be in touch shortly to schedule your discovery call.
                    </p>
                  </div>
                ) : (
                  <form action={handleSubmit} className="space-y-6">
                    {status === "error" && (
                      <div className="bg-[#FF3B00] text-white p-4 font-bold border-4 border-black mb-8 uppercase tracking-wide">
                        Error submitting request. Please try again.
                      </div>
                    )}
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="block text-xs font-black uppercase tracking-widest text-black">Name *</label>
                        <input
                          required
                          type="text"
                          name="name"
                          id="name"
                          className="w-full px-4 py-3 bg-[#F4F4F5] border-2 border-transparent focus:border-black focus:bg-white transition-colors outline-none font-bold"
                          placeholder="Jane Doe"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="block text-xs font-black uppercase tracking-widest text-black">Work Email *</label>
                        <input
                          required
                          type="email"
                          name="email"
                          id="email"
                          className="w-full px-4 py-3 bg-[#F4F4F5] border-2 border-transparent focus:border-black focus:bg-white transition-colors outline-none font-bold"
                          placeholder="jane@company.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="phone" className="block text-xs font-black uppercase tracking-widest text-black">Phone Number</label>
                        <input
                          type="tel"
                          name="phone"
                          id="phone"
                          className="w-full px-4 py-3 bg-[#F4F4F5] border-2 border-transparent focus:border-black focus:bg-white transition-colors outline-none font-bold"
                          placeholder="+91 98765 43210"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="company" className="block text-xs font-black uppercase tracking-widest text-black">Company</label>
                        <input
                          type="text"
                          name="company"
                          id="company"
                          className="w-full px-4 py-3 bg-[#F4F4F5] border-2 border-transparent focus:border-black focus:bg-white transition-colors outline-none font-bold"
                          placeholder="Acme Corp"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="website" className="block text-xs font-black uppercase tracking-widest text-black">Website (Optional)</label>
                      <input
                        type="url"
                        name="website"
                        id="website"
                        className="w-full px-4 py-3 bg-[#F4F4F5] border-2 border-transparent focus:border-black focus:bg-white transition-colors outline-none font-bold"
                        placeholder="https://acme.com"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="budget" className="block text-xs font-black uppercase tracking-widest text-black">Est. Budget</label>
                        <select
                          name="budget"
                          id="budget"
                          className="w-full px-4 py-3 bg-[#F4F4F5] border-2 border-transparent focus:border-black focus:bg-white transition-colors outline-none font-bold appearance-none cursor-pointer"
                        >
                          <option value="">Select range...</option>
                          <option value="Under ₹5,000">Under ₹5,000</option>
                          <option value="₹5,000 - ₹10,000">₹5,000 – ₹10,000</option>
                          <option value="₹10,000 - ₹20,000">₹10,000 – ₹20,000</option>
                          <option value="₹20,000 - ₹35,000">₹20,000 – ₹35,000</option>
                          <option value="₹35,000+">₹35,000+</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="timeline" className="block text-xs font-black uppercase tracking-widest text-black">Project Timeline</label>
                        <select
                          name="timeline"
                          id="timeline"
                          className="w-full px-4 py-3 bg-[#F4F4F5] border-2 border-transparent focus:border-black focus:bg-white transition-colors outline-none font-bold appearance-none cursor-pointer"
                        >
                          <option value="">Select timeline...</option>
                          <option value="ASAP">ASAP</option>
                          <option value="1-2 Months">1-2 Months</option>
                          <option value="3-6 Months">3-6 Months</option>
                          <option value="Just exploring">Just exploring</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="services" className="block text-xs font-black uppercase tracking-widest text-black">Required Services</label>
                      <input
                        type="text"
                        name="services"
                        id="services"
                        className="w-full px-4 py-3 bg-[#F4F4F5] border-2 border-transparent focus:border-black focus:bg-white transition-colors outline-none font-bold"
                        placeholder="e.g., SEO, Web Design, Performance Ads"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="block text-xs font-black uppercase tracking-widest text-black">Project Details *</label>
                      <textarea
                        required
                        name="message"
                        id="message"
                        rows={4}
                        className="w-full px-4 py-3 bg-[#F4F4F5] border-2 border-transparent focus:border-black focus:bg-white transition-colors outline-none font-bold resize-none"
                        placeholder="Tell us about your goals and current bottlenecks..."
                      ></textarea>
                    </div>

                    <div className="pt-4">
                      <button
                        type="submit"
                        disabled={status === "submitting"}
                        className="btn-primary w-full justify-between group disabled:opacity-50 text-xl py-5 bg-black text-white hover:bg-[#FF3B00]"
                      >
                        {status === "submitting" ? "Processing..." : "Request Consultation"}
                        <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                      </button>
                    </div>
                    
                    <div className="pt-6 border-t-2 border-gray-100 flex flex-col gap-2">
                      <div className="flex items-center gap-2 text-xs font-bold text-gray-500 uppercase tracking-widest">
                        <div className="w-2 h-2 rounded-full bg-[#00E676]" />
                        Average response time: Under 12 business hours.
                      </div>
                      <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">
                        Free strategy consultation included. No spam. No sales pressure.
                      </p>
                    </div>
                  </form>
                )}
              </div>
            </div>
            
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}
