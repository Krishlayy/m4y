"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { ArrowRight, BookOpen, Download, CheckCircle2, Sparkles, PhoneCall, Code2, MessageSquare, Zap, Target, ShieldCheck, Flame, Phone, Award, BarChart3, Clock, Lock, ArrowUpRight } from "lucide-react";

export default function PlaybookPage() {
  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  return (
    <div className="min-h-screen bg-white text-black font-mono selection:bg-[#FF5500] selection:text-white">
      {/* Hide Navbar during print */}
      <div className="print:hidden">
        <Navbar />
      </div>

      {/* Top Banner for Immediate Action */}
      <div className="bg-[#FFD700] text-black border-b-4 border-black py-3 px-4 text-center font-black text-xs md:text-sm uppercase tracking-widest flex items-center justify-center gap-3 print:hidden">
        <Flame className="w-4 h-4 fill-black text-black animate-bounce" />
        <span>Limited Founder Seats Available — Want Us to Build Your Lead Engine?</span>
        <a href="tel:+919258735381" className="underline hover:text-[#FF5500] ml-2">Call +91 92587 35381</a>
      </div>

      {/* Hero Section */}
      <section className="bg-[#FF5500] text-white py-16 md:py-24 px-4 border-b-4 border-black relative overflow-hidden print:bg-white print:text-black print:border-b-2 print:py-6">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-black text-[#FFD700] px-4 py-2 border-2 border-black font-black uppercase text-sm mb-6 shadow-[4px_4px_0_#000] print:border-black print:shadow-none">
            <BookOpen className="w-4 h-4" /> Official Growth & Acquisition Blueprint (2026 Edition)
          </div>
          
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-none mb-6 text-white drop-shadow-[4px_4px_0_#000] print:text-black print:drop-shadow-none">
            The 10,000 Lead Engine
          </h1>
          
          <p className="text-lg md:text-2xl font-bold max-w-3xl mx-auto text-black bg-[#FFD700] p-4 border-4 border-black shadow-[8px_8px_0_#000] mb-8 print:shadow-none print:border-2">
            The Complete M4Y Growth Engineering, Meta Ad Formula & Automated Web Architecture Playbook
          </p>

          <div className="flex flex-wrap justify-center gap-4 print:hidden">
            <a
              href="tel:+919258735381"
              className="bg-black text-[#FFD700] hover:bg-gray-900 border-4 border-black font-black uppercase text-lg px-8 py-4 shadow-[6px_6px_0_#fff] hover:translate-y-1 transition-all flex items-center gap-3 cursor-pointer"
            >
              <Phone className="w-5 h-5 text-[#FFD700]" /> Call Core Team (+91 92587 35381)
            </a>
            <button
              onClick={handlePrint}
              className="bg-white text-black hover:bg-gray-100 border-4 border-black font-black uppercase text-lg px-8 py-4 shadow-[6px_6px_0_#000] hover:translate-y-1 transition-all flex items-center gap-3 cursor-pointer"
            >
              <Download className="w-5 h-5 text-[#FF5500]" /> Print / Download PDF
            </button>
          </div>
        </div>
      </section>

      {/* Main Content Article */}
      <main className="max-w-5xl mx-auto px-4 py-12 md:py-20 print:py-4 print:px-0">
        
        {/* Author / Metadata Header for Print */}
        <div className="hidden print:block border-b-2 border-black pb-4 mb-6">
          <p className="font-black text-sm uppercase">Published by M4Y Growth Engineering Team | Website: https://m4y.world | Direct Phone: +91 92587 35381 | Email: support.m4y@gmail.com</p>
        </div>

        {/* Executive Overview Box */}
        <div className="bg-[#FFFBEB] border-4 border-black p-6 md:p-10 shadow-[8px_8px_0_#000] mb-16 print:shadow-none print:border-2 print:p-4">
          <div className="flex items-center justify-between flex-wrap gap-4 mb-4">
            <h2 className="text-2xl md:text-3xl font-black uppercase flex items-center gap-2 text-[#FF5500] print:text-black">
              <Sparkles className="w-7 h-7" /> Executive Summary & Purpose
            </h2>
            <span className="bg-black text-[#FFD700] px-3 py-1 text-xs font-black uppercase border-2 border-black">Master Edition</span>
          </div>
          <p className="text-base md:text-lg font-bold leading-relaxed mb-6">
            This playbook provides the exact 8-chapter master blueprint used by <strong>M4Y Growth Engineering</strong> to generate over 10,000 qualified leads at ultra-low acquisition costs (₹15–₹45 per lead) while converting 24%+ of website visitors into high-intent buyers.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t-2 border-black/20 text-center">
            <div>
              <p className="text-2xl font-black text-[#FF5500] print:text-black">₹18–45</p>
              <p className="text-xs font-bold uppercase">Avg Cost Per Lead</p>
            </div>
            <div>
              <p className="text-2xl font-black text-[#FF5500] print:text-black">24.7%</p>
              <p className="text-xs font-bold uppercase">Conv Rate (DM + WA)</p>
            </div>
            <div>
              <p className="text-2xl font-black text-[#FF5500] print:text-black">&lt;0.3s</p>
              <p className="text-xs font-bold uppercase">Global Web Speed</p>
            </div>
            <div>
              <p className="text-2xl font-black text-[#FF5500] print:text-black">3 Secs</p>
              <p className="text-xs font-bold uppercase">WhatsApp Auto Response</p>
            </div>
          </div>
        </div>

        {/* SECTION 1 */}
        <section className="mb-20 border-b-4 border-black pb-16 print:mb-8 print:pb-6 print:border-b-2">
          <span className="bg-black text-[#FFD700] font-black px-3 py-1 text-sm border-2 border-black inline-block mb-3 print:bg-white print:text-black">
            CHAPTER 01
          </span>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-6">
            1. Paid Ad Economics & Revenue Engineering
          </h2>
          
          <p className="text-lg font-bold mb-6 leading-relaxed">
            Most digital agencies fail because they optimize for vanity metrics (*impressions, reach, likes*) instead of bank balance and sales pipeline. At M4Y, we view lead generation as a deterministic software problem:
          </p>

          <div className="bg-black text-[#FFD700] p-6 border-4 border-black shadow-[8px_8px_0_#FF5500] font-mono text-sm overflow-x-auto mb-8 print:bg-white print:text-black print:shadow-none print:border-2">
            <p className="font-black mb-3 text-white text-base print:text-black">// The M4Y Growth Equations:</p>
            <pre className="leading-relaxed">{`Cost Per Lead (CPL) = Total Meta Ad Spend / Total Form Conversions
Target CPL (D2C / B2B / Services) = ₹15 – ₹45 Per Qualified Lead
Conversion Rate = (Form Submissions / Landing Page Visitors) * 100
M4Y Target Web Conversion Rate = 18.5% – 28.2% (vs Industry Avg 2.3%)`}</pre>
          </div>

          <h3 className="text-2xl font-black uppercase mb-4">Agency vs M4Y Engineering Comparison:</h3>
          <div className="overflow-x-auto mb-8">
            <table className="w-full border-4 border-black text-left font-mono text-sm">
              <thead className="bg-black text-[#FFD700] border-b-4 border-black">
                <tr>
                  <th className="p-4 border-r-2 border-white">Metric / Feature</th>
                  <th className="p-4 border-r-2 border-white text-[#FF5500]">Traditional Agency</th>
                  <th className="p-4 text-[#FFD700]">M4Y Growth Engineering</th>
                </tr>
              </thead>
              <tbody className="divide-y-2 divide-black bg-white">
                <tr>
                  <td className="p-4 border-r-2 border-black font-bold">Page Load Speed</td>
                  <td className="p-4 border-r-2 border-black text-red-600 font-bold">3.8s (Slow WordPress/Shopify)</td>
                  <td className="p-4 text-green-700 font-bold">&lt;0.3s (Next.js 16 Edge)</td>
                </tr>
                <tr>
                  <td className="p-4 border-r-2 border-black font-bold">Lead Response Time</td>
                  <td className="p-4 border-r-2 border-black text-red-600 font-bold">4 to 24 Hours (Manual)</td>
                  <td className="p-4 text-green-700 font-bold">3 Seconds (WhatsApp Webhook)</td>
                </tr>
                <tr>
                  <td className="p-4 border-r-2 border-black font-bold">Landing Page Conv Rate</td>
                  <td className="p-4 border-r-2 border-black text-red-600 font-bold">1.8% – 2.5%</td>
                  <td className="p-4 text-green-700 font-bold">18.5% – 28.2%</td>
                </tr>
                <tr>
                  <td className="p-4 border-r-2 border-black font-bold">Cost Per Lead (CPL)</td>
                  <td className="p-4 border-r-2 border-black text-red-600 font-bold">₹120 – ₹350</td>
                  <td className="p-4 text-green-700 font-bold">₹15 – ₹45</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* SECTION 2 */}
        <section className="mb-20 border-b-4 border-black pb-16 print:mb-8 print:pb-6 print:border-b-2">
          <span className="bg-black text-[#FFD700] font-black px-3 py-1 text-sm border-2 border-black inline-block mb-3 print:bg-white print:text-black">
            CHAPTER 02
          </span>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-6">
            2. High-Converting Meta & Instagram Ad Scripts
          </h2>

          <p className="text-lg font-bold mb-6">
            To generate leads at pennies per click, your ad creative must cut through social media feed noise. Below is our exact 4-slide carousel ad framework used across Meta campaigns:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="border-4 border-black p-6 bg-white shadow-[6px_6px_0_#000] print:shadow-none print:border-2">
              <span className="bg-[#FF5500] text-white font-black px-3 py-1 text-xs uppercase mb-3 inline-block">SLIDE 1</span>
              <h3 className="font-black text-xl mb-2 uppercase">The Scroll-Stopper Hook</h3>
              <p className="text-sm font-bold text-gray-700 mb-3">Interrupt mindless scrolling within 0.8 seconds.</p>
              <div className="bg-gray-100 p-4 border-2 border-black font-mono text-xs">
                <strong>Copy Script:</strong> &quot;Why 90% of Indian Brands Are Wasting 95% of Their Meta Ad Budget (And How We Got 10,000 Leads at ₹18/Lead)&quot;
              </div>
            </div>

            <div className="border-4 border-black p-6 bg-white shadow-[6px_6px_0_#000] print:shadow-none print:border-2">
              <span className="bg-[#FF5500] text-white font-black px-3 py-1 text-xs uppercase mb-3 inline-block">SLIDE 2</span>
              <h3 className="font-black text-xl mb-2 uppercase">The Core Framework Breakdown</h3>
              <p className="text-sm font-bold text-gray-700 mb-3">Deliver high-density actionable value without fluff.</p>
              <div className="bg-gray-100 p-4 border-2 border-black font-mono text-xs">
                <strong>Copy Script:</strong> &quot;3 Pillars: 1. Next.js 100ms Page Load. 2. Instagram ManyChat Auto-DM. 3. Instant 3-Sec WhatsApp Webhook Lead Dispatch.&quot;
              </div>
            </div>

            <div className="border-4 border-black p-6 bg-white shadow-[6px_6px_0_#000] print:shadow-none print:border-2">
              <span className="bg-[#FF5500] text-white font-black px-3 py-1 text-xs uppercase mb-3 inline-block">SLIDE 3</span>
              <h3 className="font-black text-xl mb-2 uppercase">Empirical Benchmark Proof</h3>
              <p className="text-sm font-bold text-gray-700 mb-3">Provide unassailable proof establishing domain authority.</p>
              <div className="bg-gray-100 p-4 border-2 border-black font-mono text-xs">
                <strong>Copy Script:</strong> 100/100 Google Lighthouse score screenshot, live app demo preview, verified client ROI metrics.
              </div>
            </div>

            <div className="border-4 border-black p-6 bg-white shadow-[6px_6px_0_#000] print:shadow-none print:border-2">
              <span className="bg-[#FF5500] text-white font-black px-3 py-1 text-xs uppercase mb-3 inline-block">SLIDE 4</span>
              <h3 className="font-black text-xl mb-2 uppercase">Frictionless Call-To-Action</h3>
              <p className="text-sm font-bold text-gray-700 mb-3">Clear, single micro-step with maximum urgency.</p>
              <div className="bg-gray-100 p-4 border-2 border-black font-mono text-xs">
                <strong>Copy Script:</strong> &quot;Comment &apos;GROWTH&apos; below and our automated system will DM you our exact 10k lead playbook instantly! (SWIPE RIGHT ➡️)&quot;
              </div>
            </div>
          </div>
        </section>

        {/* MID-PAGE CALLOUT BOX FOR DIRECT CALLS */}
        <div className="bg-[#FFD700] border-4 border-black p-8 md:p-12 mb-20 shadow-[10px_10px_0_#000] text-center print:hidden">
          <span className="bg-black text-white font-black px-4 py-1 text-xs uppercase tracking-widest inline-block mb-4">Direct Founder Line</span>
          <h2 className="text-3xl md:text-5xl font-black uppercase text-black mb-4 leading-none">
            Need This Built For Your Business?
          </h2>
          <p className="text-lg md:text-[#FFD700] font-bold mb-8 text-black max-w-2xl mx-auto">
            Speak directly with founders <strong>Kishalay Sharma</strong> &amp; <strong>Ayushman Singh</strong>. We build your Next.js web application, setup ManyChat &amp; WhatsApp webhooks, and launch your paid ad engine.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="tel:+919258735381"
              className="bg-black text-white hover:bg-gray-900 border-4 border-black font-black uppercase text-xl px-8 py-4 shadow-[4px_4px_0_#fff] hover:translate-y-1 transition-all inline-flex items-center justify-center gap-3"
            >
              <Phone className="w-6 h-6 text-[#FFD700]" /> Call +91 92587 35381
            </a>
            <a
              href="https://wa.me/919258735381"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] text-black hover:bg-green-500 border-4 border-black font-black uppercase text-xl px-8 py-4 shadow-[4px_4px_0_#000] hover:translate-y-1 transition-all inline-flex items-center justify-center gap-3"
            >
              <MessageSquare className="w-6 h-6 fill-black" /> WhatsApp Founders
            </a>
          </div>
        </div>

        {/* SECTION 3 */}
        <section className="mb-20 border-b-4 border-black pb-16 print:mb-8 print:pb-6 print:border-b-2">
          <span className="bg-black text-[#FFD700] font-black px-3 py-1 text-sm border-2 border-black inline-block mb-3 print:bg-white print:text-black">
            CHAPTER 03
          </span>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-6">
            3. Automated ManyChat Instagram DM Sequences
          </h2>

          <p className="text-base font-medium leading-relaxed mb-6">
            When users comment on your Instagram posts or Reels with keywords like <code className="bg-gray-200 px-2 py-0.5 border border-black font-bold">GROWTH</code>, <code className="bg-gray-200 px-2 py-0.5 border border-black font-bold">WEBSITE</code>, or <code className="bg-gray-200 px-2 py-0.5 border border-black font-bold">LEAD</code>, ManyChat triggers an instant auto-DM payload:
          </p>

          <div className="bg-black text-white p-6 border-4 border-black font-mono text-sm shadow-[6px_6px_0_#FF5500] mb-8 print:bg-white print:text-black print:shadow-none print:border-2">
            <p className="text-[#FFD700] font-black mb-2 print:text-black">// ManyChat DM Trigger Payload:</p>
            <p className="text-gray-200 font-medium leading-relaxed print:text-black">
              &quot;Hey 👋 Thank you for reaching out to M4Y Growth Engineering! Here is your instant download link for the 10,000 Lead Playbook &amp; Live Web Showcase:
              <br /><br />
              👉 https://m4y.world/playbook
              <br /><br />
              Would you like to book a free 15-minute Strategy Call with our founding engineers to audit your funnels?
              <br /><br />
              [ Button 1: 📅 Book Free Strategy Audit ]
              <br />
              [ Button 2: 💬 Chat with Founders on WhatsApp ]&quot;
            </p>
          </div>
        </section>

        {/* SECTION 4 */}
        <section className="mb-20 border-b-4 border-black pb-16 print:mb-8 print:pb-6 print:border-b-2">
          <span className="bg-black text-[#FFD700] font-black px-3 py-1 text-sm border-2 border-black inline-block mb-3 print:bg-white print:text-black">
            CHAPTER 04
          </span>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-6">
            4. Real-Time WhatsApp Webhook Lead Dispatcher
          </h2>

          <p className="text-base font-medium leading-relaxed mb-6">
            Every lead submitted on <code className="bg-gray-200 px-2 py-0.5 border border-black font-bold">m4y.world</code> triggers a Next.js 16 Server Action that dispatches a JSON webhook event to WhatsApp Business API (Interakt / Aisensy) within 100ms.
          </p>

          <div className="bg-black text-green-400 p-6 border-4 border-black font-mono text-xs overflow-x-auto mb-8 print:bg-white print:text-black print:border-2">
            <p className="font-black mb-2 text-white print:text-black">// Next.js Server Action Code (src/lib/public-actions.ts):</p>
            <pre>{`async function dispatchWhatsAppAlert(details: { name: string; phone?: string; email: string; company?: string }) {
  const whatsappWebhook = process.env.WHATSAPP_WEBHOOK_URL;
  if (!whatsappWebhook) return;

  try {
    await fetch(whatsappWebhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        event: "new_lead",
        lead: details,
        timestamp: new Date().toISOString(),
      }),
    });
  } catch (err) {
    console.error("WhatsApp webhook error (ignored):", err);
  }
}`}</pre>
          </div>
        </section>

        {/* SECTION 5 */}
        <section className="mb-20 border-b-4 border-black pb-16 print:mb-8 print:pb-6 print:border-b-2">
          <span className="bg-black text-[#FFD700] font-black px-3 py-1 text-sm border-2 border-black inline-block mb-3 print:bg-white print:text-black">
            CHAPTER 05
          </span>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-6">
            5. Next.js 16 High-Speed Web Engineering
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="border-4 border-black p-5 bg-white shadow-[4px_4px_0_#000] print:shadow-none print:border-2">
              <h3 className="font-black text-lg mb-2 uppercase text-[#FF5500]">01. 100/100 Lighthouse</h3>
              <p className="text-sm font-medium">Server components ensure sub-300ms global render times with zero layout shift.</p>
            </div>
            <div className="border-4 border-black p-5 bg-white shadow-[4px_4px_0_#000] print:shadow-none print:border-2">
              <h3 className="font-black text-lg mb-2 uppercase text-[#FF5500]">02. Honeypot Anti-Spam</h3>
              <p className="text-sm font-medium">Invisible form traps discard spambots silently without forcing users into CAPTCHAs.</p>
            </div>
            <div className="border-4 border-black p-5 bg-white shadow-[4px_4px_0_#000] print:shadow-none print:border-2">
              <h3 className="font-black text-lg mb-2 uppercase text-[#FF5500]">03. Multi-Storage Fallback</h3>
              <p className="text-sm font-medium">Leads are saved simultaneously to CSV files, PostgreSQL database, and webhooks.</p>
            </div>
          </div>
        </section>

        {/* SECTION 6 */}
        <section className="mb-20 border-b-4 border-black pb-16 print:mb-8 print:pb-6 print:border-b-2">
          <span className="bg-black text-[#FFD700] font-black px-3 py-1 text-sm border-2 border-black inline-block mb-3 print:bg-white print:text-black">
            CHAPTER 06
          </span>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-6">
            6. Verified Client Case Benchmarks
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="border-4 border-black p-6 bg-white shadow-[6px_6px_0_#000] print:shadow-none print:border-2">
              <h3 className="font-black text-xl mb-2 uppercase text-[#FF5500]">B2B Tech &amp; SaaS Client</h3>
              <ul className="text-sm font-bold space-y-2">
                <li>• Cost Per Lead Reduced: From ₹240 down to ₹32</li>
                <li>• Conversion Rate Increase: +410%</li>
                <li>• Key Mechanism: Next.js Web Engine + WhatsApp Webhook Auto-Responder</li>
              </ul>
            </div>
            <div className="border-4 border-black p-6 bg-white shadow-[6px_6px_0_#000] print:shadow-none print:border-2">
              <h3 className="font-black text-xl mb-2 uppercase text-[#FF5500]">D2C Brand &amp; E-Commerce</h3>
              <ul className="text-sm font-bold space-y-2">
                <li>• Leads Generated: 12,400+ in 30 Days</li>
                <li>• Avg Acquisition Cost: ₹21 per lead</li>
                <li>• Key Mechanism: Meta Carousel Ads + ManyChat IG Keyword DM Trigger</li>
              </ul>
            </div>
          </div>
        </section>

        {/* SECTION 7 */}
        <section className="mb-20 border-b-4 border-black pb-16 print:mb-8 print:pb-6 print:border-b-2">
          <span className="bg-black text-[#FFD700] font-black px-3 py-1 text-sm border-2 border-black inline-block mb-3 print:bg-white print:text-black">
            CHAPTER 07
          </span>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-6">
            7. The 30-Day Execution Blueprint
          </h2>

          <div className="space-y-4 mb-8">
            <div className="border-2 border-black p-4 bg-gray-50 flex items-center justify-between">
              <span className="font-black uppercase">Week 1: Next.js Infrastructure &amp; Domain Setup</span>
              <span className="bg-black text-white px-2 py-1 text-xs font-bold">Phase 1</span>
            </div>
            <div className="border-2 border-black p-4 bg-gray-50 flex items-center justify-between">
              <span className="font-black uppercase">Week 2: 4K Content Studio &amp; Meta Ad Creatives</span>
              <span className="bg-black text-white px-2 py-1 text-xs font-bold">Phase 2</span>
            </div>
            <div className="border-2 border-black p-4 bg-gray-50 flex items-center justify-between">
              <span className="font-black uppercase">Week 3: ManyChat DM &amp; WhatsApp Webhook Launch</span>
              <span className="bg-black text-white px-2 py-1 text-xs font-bold">Phase 3</span>
            </div>
            <div className="border-2 border-black p-4 bg-gray-50 flex items-center justify-between">
              <span className="font-black uppercase">Week 4: Meta CBO Ad Scaling &amp; High-Ticket Retargeting</span>
              <span className="bg-black text-white px-2 py-1 text-xs font-bold">Phase 4</span>
            </div>
          </div>
        </section>

        {/* SECTION 8 - FINAL HIGH URGENCY CALL CTA */}
        <section className="bg-black text-white p-8 md:p-14 border-4 border-black shadow-[14px_14px_0_#FF5500] text-center print:border-2 print:bg-white print:text-black print:shadow-none">
          <span className="bg-[#FF5500] text-white font-black px-4 py-1 text-xs uppercase tracking-widest inline-block mb-6 print:border print:border-black">
            Exclusive Partner Slots — Q3 Roster
          </span>
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase text-[#FFD700] mb-6 leading-none print:text-black">
            Ready to Scale Your Lead Engine?
          </h2>
          <p className="text-lg md:text-2xl font-bold mb-10 text-gray-200 max-w-3xl mx-auto leading-relaxed print:text-black">
            Work directly with founders <strong>Kishalay Sharma</strong> &amp; <strong>Ayushman Singh</strong>. We engineer your web platform, automate your Instagram/WhatsApp funnels, and run your paid acquisition.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 print:hidden">
            <a
              href="tel:+919258735381"
              className="bg-[#FF5500] text-white hover:bg-orange-600 border-4 border-white font-black uppercase text-xl px-10 py-5 shadow-[6px_6px_0_#FFD700] hover:translate-y-1 transition-all inline-flex items-center justify-center gap-3"
            >
              <Phone className="w-6 h-6 text-white" /> Call Founders Now (+91 92587 35381)
            </a>
            <Link
              href="/book-call"
              className="bg-[#FFD700] text-black hover:bg-yellow-400 border-4 border-white font-black uppercase text-xl px-10 py-5 shadow-[6px_6px_0_#fff] hover:translate-y-1 transition-all inline-flex items-center justify-center gap-3"
            >
              Book 15-Min Strategy Audit <ArrowRight className="w-6 h-6" />
            </Link>
          </div>

          <div className="hidden print:block font-black text-sm mt-6">
            <p>Direct Phone: +91 92587 35381 | Website: https://m4y.world | Book Call: https://m4y.world/book-call</p>
          </div>
        </section>
      </main>

      {/* Hide Footer during print */}
      <div className="print:hidden">
        <Footer />
      </div>
    </div>
  );
}
