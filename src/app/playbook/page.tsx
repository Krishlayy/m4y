"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { ArrowRight, BookOpen, Download, CheckCircle2, Sparkles, PhoneCall } from "lucide-react";

export default function PlaybookPage() {
  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  return (
    <div className="min-h-screen bg-white text-black font-mono selection:bg-[#FF5500] selection:text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-[#FF5500] text-white py-16 md:py-24 px-4 border-b-4 border-black relative overflow-hidden">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-black text-[#FFD700] px-4 py-2 border-2 border-black font-black uppercase text-sm mb-6 shadow-[4px_4px_0_#000]">
            <BookOpen className="w-4 h-4" /> Official Lead Magnet & Blueprint
          </div>
          
          <h1 className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-6 text-white drop-shadow-[4px_4px_0_#000]">
            The 10,000 Lead Engine
          </h1>
          
          <p className="text-xl md:text-2xl font-bold max-w-3xl mx-auto text-black bg-[#FFD700] p-4 border-4 border-black shadow-[8px_8px_0_#000] mb-8">
            The M4Y Growth Engineering & High-Converting Web Architecture Blueprint (2026 Edition)
          </p>

          <div className="flex flex-wrap justify-center gap-4 print:hidden">
            <button
              onClick={handlePrint}
              className="bg-black text-white hover:bg-gray-900 border-4 border-black font-black uppercase text-lg px-8 py-4 shadow-[6px_6px_0_#fff] hover:translate-y-1 transition-all flex items-center gap-3"
            >
              <Download className="w-5 h-5 text-[#FFD700]" /> Print / Save as PDF
            </button>
            <Link
              href="/book-call"
              className="bg-[#FFD700] text-black hover:bg-yellow-400 border-4 border-black font-black uppercase text-lg px-8 py-4 shadow-[6px_6px_0_#000] hover:translate-y-1 transition-all flex items-center gap-3"
            >
              <PhoneCall className="w-5 h-5" /> Book Free Strategy Audit
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content Article */}
      <main className="max-w-4xl mx-auto px-4 py-12 md:py-20">
        
        {/* Intro Box */}
        <div className="bg-[#FFFBEB] border-4 border-black p-6 md:p-8 shadow-[8px_8px_0_#000] mb-12">
          <h2 className="text-2xl font-black uppercase mb-3 flex items-center gap-2 text-[#FF5500]">
            <Sparkles className="w-6 h-6" /> Confidential Growth Manual
          </h2>
          <p className="text-base md:text-lg font-bold leading-relaxed">
            This playbook is engineered for founders, agency owners, and growth marketers. It reveals the exact 3-part framework M4Y uses to capture leads at ultra-low cost and convert 24%+ of visitors into high-intent buyers.
          </p>
        </div>

        {/* Section 1 */}
        <section className="mb-16 border-b-4 border-black pb-12">
          <span className="bg-black text-[#FFD700] font-black px-3 py-1 text-sm border-2 border-black inline-block mb-3">
            SECTION 01
          </span>
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-6">
            1. The Growth Engineering Mindset
          </h2>
          
          <p className="text-lg font-bold mb-4">
            Traditional digital agencies sell &quot;pretty layouts&quot; and &quot;vanity impressions&quot;. But impressions don&apos;t pay payroll—<strong className="bg-[#FFD700] px-1 text-black">qualified leads and bank transactions do.</strong>
          </p>
          
          <p className="text-base font-medium mb-6 leading-relaxed">
            At M4Y, we treat acquisition as a deterministic software problem:
          </p>

          <div className="bg-black text-green-400 p-6 border-4 border-black shadow-[6px_6px_0_#FF5500] font-mono text-sm overflow-x-auto mb-6">
            <pre>{`[ High-Intent Ad / Content ] 
        │
        ▼ (Auto DM Trigger)
[ Instagram / ManyChat Automation ] 
        │
        ▼ (Instant Webhook)
[ High-Speed Neobrutalist Web App (100ms Load) ] 
        │
        ▼ (WhatsApp Auto-Responder)
[ 24/7 Qualified Calendar Booking ]`}</pre>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border-4 border-black p-4 bg-gray-50 shadow-[4px_4px_0_#000]">
              <h3 className="font-black text-lg mb-2 uppercase text-[#FF5500]">01. Zero Friction</h3>
              <p className="text-sm font-medium">Every 100ms delay drops conversion by 7%. Our sites load in &lt;0.3s globally.</p>
            </div>
            <div className="border-4 border-black p-4 bg-gray-50 shadow-[4px_4px_0_#000]">
              <h3 className="font-black text-lg mb-2 uppercase text-[#FF5500]">02. Bold Aesthetics</h3>
              <p className="text-sm font-medium">Neobrutalist high-contrast design cuts through boring corporate template noise.</p>
            </div>
            <div className="border-4 border-black p-4 bg-gray-50 shadow-[4px_4px_0_#000]">
              <h3 className="font-black text-lg mb-2 uppercase text-[#FF5500]">03. 3-Sec Nurture</h3>
              <p className="text-sm font-medium">Automated webhooks deliver lead magnets & calendar links on WhatsApp in 3 seconds.</p>
            </div>
          </div>
        </section>

        {/* Section 2 */}
        <section className="mb-16 border-b-4 border-black pb-12">
          <span className="bg-black text-[#FFD700] font-black px-3 py-1 text-sm border-2 border-black inline-block mb-3">
            SECTION 02
          </span>
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-6">
            2. The Meta & Instagram Ad Formula
          </h2>
          
          <h3 className="text-xl font-black mb-3">The Hook-Story-Offer Carousel Framework:</h3>
          <ul className="space-y-4 mb-8">
            <li className="flex items-start gap-3 border-2 border-black p-4 bg-white shadow-[4px_4px_0_#000]">
              <CheckCircle2 className="w-6 h-6 text-[#FF5500] shrink-0 mt-1" />
              <div>
                <strong className="font-black uppercase block">Slide 1: Scroll-Stopper Hook</strong>
                <span className="text-sm">Bold single question or metric. Example: &quot;Why 90% of Websites Waste 95% of Paid Ad Traffic&quot;.</span>
              </div>
            </li>
            <li className="flex items-start gap-3 border-2 border-black p-4 bg-white shadow-[4px_4px_0_#000]">
              <CheckCircle2 className="w-6 h-6 text-[#FF5500] shrink-0 mt-1" />
              <div>
                <strong className="font-black uppercase block">Slide 2: Actionable Value Breakdown</strong>
                <span className="text-sm">3 clear takeaways with bullet points. Zero fluff, high educational intent.</span>
              </div>
            </li>
            <li className="flex items-start gap-3 border-2 border-black p-4 bg-white shadow-[4px_4px_0_#000]">
              <CheckCircle2 className="w-6 h-6 text-[#FF5500] shrink-0 mt-1" />
              <div>
                <strong className="font-black uppercase block">Slide 3: Empirical Proof & Lighthouse Benchmarks</strong>
                <span className="text-sm">100/100 performance scores, real client metrics, or live app previews.</span>
              </div>
            </li>
            <li className="flex items-start gap-3 border-2 border-black p-4 bg-white shadow-[4px_4px_0_#000]">
              <CheckCircle2 className="w-6 h-6 text-[#FF5500] shrink-0 mt-1" />
              <div>
                <strong className="font-black uppercase block">Slide 4: Micro Call-To-Action (SWIPE RIGHT ➡️)</strong>
                <span className="text-sm">&quot;Comment GROWTH below and our system will DM you this free blueprint instantly!&quot;</span>
              </div>
            </li>
          </ul>
        </section>

        {/* Section 3 */}
        <section className="mb-16 border-b-4 border-black pb-12">
          <span className="bg-black text-[#FFD700] font-black px-3 py-1 text-sm border-2 border-black inline-block mb-3">
            SECTION 03
          </span>
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-6">
            3. Automated Instagram & WhatsApp Funnels
          </h2>

          <div className="bg-[#FFD700] border-4 border-black p-6 mb-6 shadow-[6px_6px_0_#000]">
            <h3 className="text-xl font-black uppercase mb-2">The Conversion Delta:</h3>
            <p className="font-bold text-lg">
              Standard Website Contact Forms: <span className="bg-black text-white px-2 py-1">2.3% Conversion</span>
              <br />
              Instagram DM + WhatsApp Automated Loop: <span className="bg-[#FF5500] text-white px-2 py-1">24.7% Conversion</span>
            </p>
          </div>

          <p className="text-base font-medium leading-relaxed mb-6">
            When a prospect comments on Instagram or submits a lead form on <code className="bg-gray-100 border border-black px-2 py-1">m4y.world</code>, our server actions trigger a webhook to WhatsApp within 3 seconds. The prospect receives the playbook on their primary chat screen while buying intent is peak.
          </p>
        </section>

        {/* Call to Action Box */}
        <section className="bg-black text-white p-8 md:p-12 border-4 border-black shadow-[12px_12px_0_#FF5500] text-center print:hidden">
          <h2 className="text-3xl md:text-5xl font-black uppercase text-[#FFD700] mb-4">
            Want Us To Build This For Your Business?
          </h2>
          <p className="text-lg md:text-xl font-bold mb-8 text-gray-200 max-w-2xl mx-auto">
            Our engineering team will build your custom website, set up ManyChat & WhatsApp webhooks, and run high-converting lead campaigns.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/book-call"
              className="bg-[#FF5500] text-white hover:bg-orange-600 border-4 border-white font-black uppercase text-xl px-8 py-4 shadow-[4px_4px_0_#fff] hover:translate-y-1 transition-all inline-flex items-center justify-center gap-2"
            >
              Book 15-Min Strategy Call <ArrowRight className="w-6 h-6" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
