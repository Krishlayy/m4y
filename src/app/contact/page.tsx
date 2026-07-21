"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    budget: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    // Simulate API call to Resend/CRM
    setTimeout(() => {
      setStatus("success");
    }, 1500);
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#F4F4F5] pt-40 pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16"
          >
            {/* Left Col: Info */}
            <div>
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8">
                Let's build <br />
                <span className="text-[#FF3B00]">something great.</span>
              </h1>
              <p className="text-xl text-gray-600 mb-12 max-w-md">
                Whether you need a full digital transformation or a high-performance marketing campaign, our team is ready to deliver.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm border border-gray-200">
                    <Mail className="w-5 h-5 text-[#0A0A0A]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Email us</h3>
                    <p className="text-gray-500 mb-1">For general inquiries and project requests.</p>
                    <a href="mailto:hello@m4y.com" className="font-medium hover:text-[#FF3B00] transition-colors">hello@m4y.com</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm border border-gray-200">
                    <Phone className="w-5 h-5 text-[#0A0A0A]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Call us</h3>
                    <p className="text-gray-500 mb-1">Mon-Fri from 9am to 6pm EST.</p>
                    <a href="tel:+15551234567" className="font-medium hover:text-[#FF3B00] transition-colors">+1 (555) 123-4567</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm border border-gray-200">
                    <MapPin className="w-5 h-5 text-[#0A0A0A]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Visit us</h3>
                    <p className="text-gray-500 mb-1">Drop by our HQ for a coffee.</p>
                    <p className="font-medium">123 Digital Ave, NY 10001</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Col: Form */}
            <div className="modern-card relative overflow-hidden">
              {status === "success" ? (
                <div className="absolute inset-0 bg-white z-10 flex flex-col items-center justify-center text-center p-8">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                    <svg className="w-10 h-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-3xl font-extrabold mb-4">Request Sent!</h3>
                  <p className="text-gray-600 text-lg">
                    Thanks for reaching out. A strategy consultant will review your details and contact you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Name *</label>
                      <input
                        required
                        type="text"
                        className="w-full border border-gray-300 rounded-none px-4 py-3 focus:outline-none focus:border-[#FF3B00] focus:ring-1 focus:ring-[#FF3B00] transition-all bg-gray-50/50"
                        placeholder="Jane Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Work Email *</label>
                      <input
                        required
                        type="email"
                        className="w-full border border-gray-300 rounded-none px-4 py-3 focus:outline-none focus:border-[#FF3B00] focus:ring-1 focus:ring-[#FF3B00] transition-all bg-gray-50/50"
                        placeholder="jane@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Company</label>
                      <input
                        type="text"
                        className="w-full border border-gray-300 rounded-none px-4 py-3 focus:outline-none focus:border-[#FF3B00] focus:ring-1 focus:ring-[#FF3B00] transition-all bg-gray-50/50"
                        placeholder="Acme Corp"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Est. Budget</label>
                      <select
                        className="w-full border border-gray-300 rounded-none px-4 py-3 focus:outline-none focus:border-[#FF3B00] focus:ring-1 focus:ring-[#FF3B00] transition-all bg-gray-50/50"
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      >
                        <option value="">Select a range</option>
                        <option value="5k-10k">$5,000 - $10,000</option>
                        <option value="10k-25k">$10,000 - $25,000</option>
                        <option value="25k-50k">$25,000 - $50,000</option>
                        <option value="50k+">$50,000+</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Project Details *</label>
                    <textarea
                      required
                      rows={5}
                      className="w-full border border-gray-300 rounded-none px-4 py-3 focus:outline-none focus:border-[#FF3B00] focus:ring-1 focus:ring-[#FF3B00] transition-all bg-gray-50/50 resize-none"
                      placeholder="Tell us about your goals, current challenges, and timeline..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="btn-accent w-full justify-between group disabled:opacity-50"
                  >
                    {status === "submitting" ? "Sending..." : "Submit Request"}
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  </button>
                  <p className="text-xs text-gray-500 mt-4 text-center">
                    By submitting this form, you agree to our Privacy Policy.
                  </p>
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
