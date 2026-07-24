"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Video, CheckCircle2 } from "lucide-react";
import { submitLead } from "@/lib/public-actions";

export default function BookCallPage() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (formData: FormData) => {
    setStatus("submitting");
    const result = await submitLead(formData);
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
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16"
          >
            {/* Left Col: Info */}
            <div>
              <div className="inline-block bg-[#FFD700] text-black font-black uppercase tracking-widest px-4 py-2 border-4 border-black mb-6 transform -rotate-2">
                Free Consultation
              </div>
              <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tight mb-8 leading-[0.9]">
                Book Your <br />
                <span className="text-[#FF3B00] sticker-shadow">Strategy Call</span>
              </h1>
              <p className="text-xl font-bold text-gray-800 mb-12 max-w-md">
                30 minutes. Zero fluff. We'll audit your current marketing and show you exactly how to scale.
              </p>

              <div className="modern-card bg-white mb-8">
                <h3 className="text-2xl font-black uppercase mb-6 border-b-4 border-black pb-4">Meeting Details</h3>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-[#00E676] border-4 border-black flex items-center justify-center shrink-0">
                      <Clock className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <div className="font-black text-xl uppercase">Duration</div>
                      <div className="font-bold text-gray-600">30 Minutes</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-[#FFD700] border-4 border-black flex items-center justify-center shrink-0">
                      <Video className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <div className="font-black text-xl uppercase">Format</div>
                      <div className="font-bold text-gray-600">Google Meet / Zoom</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Col: Form */}
            <div className="modern-card bg-white relative overflow-hidden">
              {status === "success" ? (
                <div className="absolute inset-0 bg-[#00E676] z-10 flex flex-col items-center justify-center text-center p-8 border-4 border-black m-2">
                  <CheckCircle2 size={80} className="text-black mb-6" />
                  <h3 className="text-4xl font-black uppercase mb-4 text-black">Call Requested!</h3>
                  <p className="font-bold text-xl text-black">
                    Check your email for the calendar invitation. Prepare to grow.
                  </p>
                </div>
              ) : (
                <form action={handleSubmit} className="space-y-6">
                  {status === "error" && (
                    <div className="bg-red-50 text-red-600 p-4 font-bold border-l-4 border-red-600">
                      There was an error submitting your request. Please try again.
                    </div>
                  )}
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-sm font-black uppercase tracking-widest text-black">Name *</label>
                    <input
                      required
                      type="text"
                      name="name"
                      id="name"
                      className="w-full px-4 py-3 transition-transform duration-200 focus:-translate-y-1 focus:-translate-x-1"
                      placeholder="Jane Doe"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-black uppercase tracking-widest text-black">Work Email *</label>
                    <input
                      required
                      type="email"
                      name="email"
                      id="email"
                      className="w-full px-4 py-3 transition-transform duration-200 focus:-translate-y-1 focus:-translate-x-1"
                      placeholder="jane@company.com"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="company" className="block text-sm font-black uppercase tracking-widest text-black">Company</label>
                      <input
                        type="text"
                        name="company"
                        id="company"
                        className="w-full px-4 py-3 transition-transform duration-200 focus:-translate-y-1 focus:-translate-x-1"
                        placeholder="Acme Corp"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="revenue" className="block text-sm font-black uppercase tracking-widest text-black">Revenue</label>
                      <select 
                        name="revenue"
                        id="revenue"
                        className="w-full px-4 py-3 transition-transform duration-200 focus:-translate-y-1 focus:-translate-x-1"
                      >
                        <option value="">Select revenue...</option>
                        <option value="Under $10K">Under $10K / mo</option>
                        <option value="$10K-50K">$10K - $50K / mo</option>
                        <option value="$50K-200K">$50K - $200K / mo</option>
                        <option value="$200K+">$200K+ / mo</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="goal" className="block text-sm font-black uppercase tracking-widest text-black">Primary Goal *</label>
                    <textarea
                      required
                      name="goal"
                      id="goal"
                      rows={4}
                      className="w-full px-4 py-3 transition-transform duration-200 focus:-translate-y-1 focus:-translate-x-1 resize-none"
                      placeholder="What is your biggest bottleneck right now?"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="btn-accent w-full justify-between group disabled:opacity-50 text-xl py-4 mt-4"
                  >
                    {status === "submitting" ? "Processing..." : "Book Strategy Call"}
                    <ArrowRight className="w-8 h-8 group-hover:translate-x-2 transition-transform" />
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}
