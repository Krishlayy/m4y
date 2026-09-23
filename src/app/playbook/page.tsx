"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { ArrowRight, BookOpen, Download, CheckCircle2, Sparkles, PhoneCall, Code2, MessageSquare, Zap, Target, ShieldCheck, Flame } from "lucide-react";

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

      {/* Hero Section */}
      <section className="bg-[#FF5500] text-white py-12 md:py-20 px-4 border-b-4 border-black relative overflow-hidden print:bg-white print:text-black print:border-b-2 print:py-6">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-black text-[#FFD700] px-4 py-2 border-2 border-black font-black uppercase text-sm mb-6 shadow-[4px_4px_0_#000] print:border-black print:shadow-none">
            <BookOpen className="w-4 h-4" /> Official Lead Magnet & Blueprint
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-none mb-6 text-white drop-shadow-[4px_4px_0_#000] print:text-black print:drop-shadow-none">
            The 10,000 Lead Engine
          </h1>
          
          <p className="text-lg md:text-2xl font-bold max-w-3xl mx-auto text-black bg-[#FFD700] p-4 border-4 border-black shadow-[8px_8px_0_#000] mb-8 print:shadow-none print:border-2">
            The M4Y Growth Engineering & High-Converting Web Architecture Blueprint (2026 Edition)
          </p>

          <div className="flex flex-wrap justify-center gap-4 print:hidden">
            <button
              onClick={handlePrint}
              className="bg-black text-white hover:bg-gray-900 border-4 border-black font-black uppercase text-lg px-8 py-4 shadow-[6px_6px_0_#fff] hover:translate-y-1 transition-all flex items-center gap-3 cursor-pointer"
            >
              <Download className="w-5 h-5 text-[#FFD700]" /> Print / Save Clean PDF
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
      <main className="max-w-4xl mx-auto px-4 py-10 md:py-16 print:py-4 print:px-0">
        
        {/* Author / Metadata Header for Print */}
        <div className="hidden print:block border-b-2 border-black pb-4 mb-6">
          <p className="font-black text-sm uppercase">Published by M4Y Growth Engineering Team | Website: https://m4y.world | Phone: +91 92587 35381</p>
        </div>

        {/* Intro Box */}
        <div className="bg-[#FFFBEB] border-4 border-black p-6 md:p-8 shadow-[8px_8px_0_#000] mb-12 print:shadow-none print:border-2 print:p-4">
          <h2 className="text-2xl font-black uppercase mb-3 flex items-center gap-2 text-[#FF5500] print:text-black">
            <Sparkles className="w-6 h-6" /> Executive Masterclass Overview
          </h2>
          <p className="text-base md:text-lg font-bold leading-relaxed">
            This playbook provides the exact 5-pillar system M4Y uses to capture leads at ultra-low acquisition cost, automate follow-ups on Instagram and WhatsApp within 3 seconds, and maintain a 24%+ visitor-to-lead conversion rate.
          </p>
        </div>

        {/* SECTION 1 */}
        <section className="mb-16 border-b-4 border-black pb-12 print:mb-8 print:pb-6 print:border-b-2">
          <span className="bg-black text-[#FFD700] font-black px-3 py-1 text-sm border-2 border-black inline-block mb-3 print:bg-white print:text-black">
            SECTION 01
          </span>
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-6">
            1. Paid Ad Economics & Lead Engine Architecture
          </h2>
          
          <p className="text-lg font-bold mb-4">
            Most agencies fail because they optimize for vanity impressions instead of net sales pipeline. At M4Y, we view lead generation as a mathematical equation:
          </p>
          
          <div className="bg-black text-[#FFD700] p-6 border-4 border-black shadow-[6px_6px_0_#FF5500] font-mono text-sm overflow-x-auto mb-6 print:bg-white print:text-black print:shadow-none print:border-2">
            <p className="font-black mb-2 text-white print:text-black">// The Lead Economics Formula:</p>
            <pre>{`Cost Per Lead (CPL) = Ad Spend / Total Conversions
Target CPL (India D2C / B2B) = ₹15 – ₹45 Per Lead
Conversion Rate = (Qualified Form Submissions / Landing Page Visitors) * 100
M4Y Target Conversion Rate = 18.5% – 28.2% (vs Industry Avg 2.3%)`}</pre>
          </div>

          <h3 className="text-xl font-black uppercase mb-3">Why Standard Websites Burn 90% of Paid Budget:</h3>
          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3">
              <span className="bg-[#FF5500] text-white font-black px-2 py-0.5 text-xs border border-black mt-1">SLOW</span>
              <p className="text-base font-medium"><strong>Page Speed Lag:</strong> A 2-second load delay causes 47% of paid ad traffic to bounce before seeing the hero CTA.</p>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-[#FF5500] text-white font-black px-2 py-0.5 text-xs border border-black mt-1">GENERIC</span>
              <p className="text-base font-medium"><strong>Boring Corporate Design:</strong> Overused Canva templates blend into feed noise and fail to capture consumer attention.</p>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-[#FF5500] text-white font-black px-2 py-0.5 text-xs border border-black mt-1">DELAY</span>
              <p className="text-base font-medium"><strong>Slow Manual Response:</strong> Replying to leads hours later reduces buying intent by over 80%.</p>
            </li>
          </ul>
        </section>

        {/* SECTION 2 */}
        <section className="mb-16 border-b-4 border-black pb-12 print:mb-8 print:pb-6 print:border-b-2">
          <span className="bg-black text-[#FFD700] font-black px-3 py-1 text-sm border-2 border-black inline-block mb-3 print:bg-white print:text-black">
            SECTION 02
          </span>
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-6">
            2. The Meta & Instagram Ad Script Blueprint
          </h2>

          <h3 className="text-xl font-black mb-3">High-Converting 4-Slide Carousel Framework:</h3>
          
          <div className="space-y-4 mb-8">
            <div className="border-4 border-black p-5 bg-white shadow-[6px_6px_0_#000] print:shadow-none print:border-2">
              <h4 className="font-black text-lg text-[#FF5500] uppercase mb-1">Slide 1: Scroll-Stopper Hook</h4>
              <p className="text-sm font-bold mb-2">Goal: Interrupt mindless social media scrolling within 0.8 seconds.</p>
              <div className="bg-gray-100 p-3 border-2 border-black font-mono text-xs">
                <strong>Tested Headline Copy:</strong> &quot;Why 90% of Indian Founders Are Wasting 95% of Their Meta Ad Budget (And How We Generated 10,000 Leads at ₹18/Lead)&quot;
              </div>
            </div>

            <div className="border-4 border-black p-5 bg-white shadow-[6px_6px_0_#000] print:shadow-none print:border-2">
              <h4 className="font-black text-lg text-[#FF5500] uppercase mb-1">Slide 2: The Core Framework / Breakdown</h4>
              <p className="text-sm font-bold mb-2">Goal: Deliver undeniable educational value with zero fluff.</p>
              <div className="bg-gray-100 p-3 border-2 border-black font-mono text-xs">
                <strong>Tested Body Copy:</strong> &quot;Step 1: Next.js 100ms Page Load. Step 2: Instant Instagram Keyword Auto-DM. Step 3: 3-Second WhatsApp Lead Magnet Trigger.&quot;
              </div>
            </div>

            <div className="border-4 border-black p-5 bg-white shadow-[6px_6px_0_#000] print:shadow-none print:border-2">
              <h4 className="font-black text-lg text-[#FF5500] uppercase mb-1">Slide 3: Empirical Proof & Technical Metrics</h4>
              <p className="text-sm font-bold mb-2">Goal: Provide verifiable evidence that establishes authority.</p>
              <div className="bg-gray-100 p-3 border-2 border-black font-mono text-xs">
                <strong>Tested Proof Points:</strong> 100/100 Google Lighthouse score screenshot, live app demo preview, verified client ROI stats.
              </div>
            </div>

            <div className="border-4 border-black p-5 bg-white shadow-[6px_6px_0_#000] print:shadow-none print:border-2">
              <h4 className="font-black text-lg text-[#FF5500] uppercase mb-1">Slide 4: Micro Call-To-Action (SWIPE RIGHT ➡️)</h4>
              <p className="text-sm font-bold mb-2">Goal: Single, frictionless action step.</p>
              <div className="bg-gray-100 p-3 border-2 border-black font-mono text-xs">
                <strong>Tested CTA Copy:</strong> &quot;Comment &apos;GROWTH&apos; below and our automated system will DM you our exact 10k lead playbook instantly!&quot;
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3 */}
        <section className="mb-16 border-b-4 border-black pb-12 print:mb-8 print:pb-6 print:border-b-2">
          <span className="bg-black text-[#FFD700] font-black px-3 py-1 text-sm border-2 border-black inline-block mb-3 print:bg-white print:text-black">
            SECTION 03
          </span>
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-6">
            3. Automated ManyChat Instagram DM Sequences
          </h2>

          <p className="text-base font-medium leading-relaxed mb-4">
            Instead of manually replying to comments, ManyChat detects comment keywords (e.g. <code className="bg-gray-200 px-2 py-0.5 border border-black font-bold">GROWTH</code>, <code className="bg-gray-200 px-2 py-0.5 border border-black font-bold">WEBSITE</code>) and initiates an automated DM conversation.
          </p>

          <div className="bg-[#FFD700] border-4 border-black p-6 mb-6 shadow-[6px_6px_0_#000] print:shadow-none print:border-2">
            <h3 className="text-lg font-black uppercase mb-2">Automated DM Copy Template:</h3>
            <p className="font-mono text-xs sm:text-sm leading-relaxed text-black">
              &quot;Hey 👋 Thank you for commenting! Here is the direct link to download your 10,000 Lead Playbook &amp; inspect our live web architecture:
              <br />
              👉 https://m4y.world/playbook
              <br /><br />
              Would you also like to book a free 15-minute Strategy Call with our engineering team? Click below to reserve a slot:
              <br />
              [ Button 1: 📅 Book Free Strategy Call ] [ Button 2: 💬 Chat on WhatsApp ]&quot;
            </p>
          </div>
        </section>

        {/* SECTION 4 */}
        <section className="mb-16 border-b-4 border-black pb-12 print:mb-8 print:pb-6 print:border-b-2">
          <span className="bg-black text-[#FFD700] font-black px-3 py-1 text-sm border-2 border-black inline-block mb-3 print:bg-white print:text-black">
            SECTION 04
          </span>
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-6">
            4. Real-Time WhatsApp Webhook Integration
          </h2>

          <p className="text-base font-medium leading-relaxed mb-4">
            Every lead form submitted on <code className="bg-gray-200 px-2 py-0.5 border border-black font-bold">m4y.world</code> triggers a Next.js Server Action that dispatches a JSON webhook event to your WhatsApp Business API provider (Interakt / Aisensy / Make.com) within 100 milliseconds.
          </p>

          <div className="bg-black text-green-400 p-5 border-4 border-black font-mono text-xs overflow-x-auto mb-6 print:bg-white print:text-black print:border-2">
            <p className="font-black mb-2 text-white print:text-black">// Next.js Server Action Webhook Payload:</p>
            <pre>{`async function dispatchWhatsAppAlert(lead: { name: string; phone?: string; email: string }) {
  const webhookUrl = process.env.WHATSAPP_WEBHOOK_URL;
  if (!webhookUrl) return;

  await fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      event: "new_lead",
      name: lead.name,
      phone: lead.phone,
      email: lead.email,
      timestamp: new Date().toISOString(),
    }),
  });
}`}</pre>
          </div>

          <h3 className="text-lg font-black uppercase mb-3">WhatsApp Auto-Responder Sequence:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border-2 border-black p-4 bg-gray-50">
              <strong className="font-black text-sm uppercase block text-[#FF5500] mb-1">Message 1 (0 Seconds)</strong>
              <p className="text-xs font-medium">&quot;Namaste {`{Name}`}! 🙏 Thank you for requesting the M4Y Growth Playbook. Here is your instant link: https://m4y.world/playbook&quot;</p>
            </div>
            <div className="border-2 border-black p-4 bg-gray-50">
              <strong className="font-black text-sm uppercase block text-[#FF5500] mb-1">Message 2 (4 Hours Later)</strong>
              <p className="text-xs font-medium">&quot;Hey {`{Name}`}! Have you had a chance to inspect Chapter 2 of our Playbook? Let us know if you have any questions about scaling your funnels!&quot;</p>
            </div>
          </div>
        </section>

        {/* SECTION 5 */}
        <section className="mb-16 border-b-4 border-black pb-12 print:mb-8 print:pb-6 print:border-b-2">
          <span className="bg-black text-[#FFD700] font-black px-3 py-1 text-sm border-2 border-black inline-block mb-3 print:bg-white print:text-black">
            SECTION 05
          </span>
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-6">
            5. High-Speed Web Engineering & Anti-Spam Pipeline
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
            <div className="border-4 border-black p-5 bg-white shadow-[4px_4px_0_#000] print:shadow-none print:border-2">
              <h3 className="font-black text-lg mb-2 uppercase text-[#FF5500]">Honeypot Spam Defense</h3>
              <p className="text-sm font-medium">Silent hidden fields catch automated spam bots without burdening human visitors with annoying CAPTCHAs.</p>
            </div>
            <div className="border-4 border-black p-5 bg-white shadow-[4px_4px_0_#000] print:shadow-none print:border-2">
              <h3 className="font-black text-lg mb-2 uppercase text-[#FF5500]">CSV & Database Fallback</h3>
              <p className="text-sm font-medium">Every lead is automatically appended to a local CSV backup, Prisma database, and Google Sheets webhook simultaneously.</p>
            </div>
          </div>
        </section>

        {/* Call to Action Box */}
        <section className="bg-black text-white p-8 md:p-12 border-4 border-black shadow-[12px_12px_0_#FF5500] text-center print:border-2 print:bg-white print:text-black print:shadow-none">
          <h2 className="text-3xl md:text-5xl font-black uppercase text-[#FFD700] mb-4 print:text-black">
            Ready to Scale Your Lead Generation?
          </h2>
          <p className="text-lg md:text-xl font-bold mb-8 text-gray-200 max-w-2xl mx-auto print:text-black">
            Work directly with our founding software &amp; growth engineers to build your custom web architecture, Instagram automation, and paid ad campaigns.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 print:hidden">
            <Link
              href="/book-call"
              className="bg-[#FF5500] text-white hover:bg-orange-600 border-4 border-white font-black uppercase text-xl px-8 py-4 shadow-[4px_4px_0_#fff] hover:translate-y-1 transition-all inline-flex items-center justify-center gap-2"
            >
              Book 15-Min Strategy Call <ArrowRight className="w-6 h-6" />
            </Link>
          </div>
          <div className="hidden print:block font-black text-sm">
            <p>Book online: https://m4y.world/book-call | WhatsApp: +91 92587 35381 | Email: support.m4y@gmail.com</p>
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
