import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';

export const metadata = {
  title: 'Pricing | M4Y - Marketing 4 You',
  description: 'Transparent pricing with no surprises. Honest rates from the founders of M4Y.',
};

export default function PricingPage() {
  const packages = [
    {
      name: 'Starter',
      price: '₹15,000',
      period: '/mo',
      color: 'bg-white',
      desc: 'Social media management + basic content',
      deliverables: [
        '12 Social Media Posts',
        'Basic Community Management',
        'Monthly Content Calendar',
        'Platform Optimization',
        'Monthly Performance Report'
      ]
    },
    {
      name: 'Growth',
      price: '₹35,000',
      period: '/mo',
      color: 'bg-[#FFD700]',
      desc: 'Full digital marketing',
      deliverables: [
        'Everything in Starter',
        'Performance Ads Management',
        'Ad Copywriting & Creatives',
        'Basic SEO Setup',
        'Email Marketing (2/mo)',
        'Bi-weekly Strategy Calls',
        'Conversion Rate Optimization',
        'Custom Dashboard'
      ]
    },
    {
      name: "Founder's Bundle",
      price: '₹60,000',
      period: '/mo',
      color: 'bg-[#FF3B00]',
      textColor: 'text-white',
      desc: 'Everything — unlimited scope, direct founder access',
      deliverables: [
        'Everything in Growth',
        'Unlimited Ad Campaigns',
        'Full SEO Strategy & Execution',
        'Advanced Analytics & Tracking',
        'Influencer Outreach',
        'Custom Automations (n8n)',
        'Weekly Strategy Calls',
        'Direct WhatsApp Group with Founders',
        'Priority Execution',
        'Landing Page Creation',
        'Competitor Analysis',
        'Brand Identity Consultation'
      ]
    }
  ];

  const faqs = [
    { q: 'Why no fixed price?', a: 'Every business is unique. These packages are starting points. We custom-quote based on your exact needs and scale.' },
    { q: 'Do you require long contracts?', a: 'No. We prefer 3-month initial commitments to show real results, but we operate on month-to-month agreements because we believe our work should keep you, not a contract.' },
    { q: 'What makes you different from other agencies?', a: 'We are engineers who understand tech deeply, combined with marketing expertise. We build automations, track data religiously, and the founders do the actual work.' },
    { q: 'Do you work with new businesses?', a: 'Yes! We love launching new brands and setting up their digital infrastructure from day one.' },
    { q: 'How soon can we start?', a: 'Usually within 7 days of signing the agreement and receiving the first payment. We move fast.' }
  ];

  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-[#FFD700] selection:text-black pt-24 flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero */}
        <section className="px-6 py-24 text-center border-b-4 border-black bg-white">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6">
              Transparent Pricing.<br />No Surprises.
            </h1>
            <p className="text-2xl font-bold max-w-2xl mx-auto">
              We are a new agency. We're honest about it. These are our founding rates, designed to deliver extreme value.
            </p>
          </div>
        </section>

        {/* Announcement */}
        <section className="py-6 bg-[#FFD700] border-b-4 border-black overflow-hidden">
          <div className="whitespace-nowrap flex animate-marquee">
            <span className="text-2xl font-black uppercase mx-4">⚠️ FOUNDING CLIENT RATES ACTIVE — PRICES GO UP AFTER OUR FIRST 10 CLIENTS ⚠️</span>
            <span className="text-2xl font-black uppercase mx-4">⚠️ FOUNDING CLIENT RATES ACTIVE — PRICES GO UP AFTER OUR FIRST 10 CLIENTS ⚠️</span>
            <span className="text-2xl font-black uppercase mx-4">⚠️ FOUNDING CLIENT RATES ACTIVE — PRICES GO UP AFTER OUR FIRST 10 CLIENTS ⚠️</span>
          </div>
        </section>

        {/* Packages */}
        <section className="px-6 py-24 border-b-4 border-black bg-[#f0f0f0]">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
            {packages.map((pkg, i) => (
              <div key={i} className={`p-8 border-4 border-black shadow-[8px_8px_0_#000] flex flex-col ${pkg.color} ${pkg.textColor || 'text-black'}`}>
                <h3 className="text-3xl font-black uppercase mb-2">{pkg.name}</h3>
                <p className="font-bold text-lg mb-6 h-12">{pkg.desc}</p>
                <div className="mb-8 pb-8 border-b-4 border-current">
                  <span className="text-5xl font-black">{pkg.price}</span>
                  <span className="text-xl font-bold">{pkg.period}</span>
                </div>
                <ul className="space-y-4 mb-8 flex-grow">
                  {pkg.deliverables.map((item, j) => (
                    <li key={j} className="flex items-start font-bold text-lg">
                      <span className="mr-2">■</span> {item}
                    </li>
                  ))}
                </ul>
                <Link href="/book-call" className={`block w-full text-center py-4 border-4 border-current font-black uppercase text-xl hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[4px_4px_0_currentColor] transition-all bg-black ${pkg.textColor ? 'text-white shadow-[4px_4px_0_#fff]' : 'text-white shadow-[4px_4px_0_#000]'} `}>
                  Select Plan
                </Link>
              </div>
            ))}
          </div>
          <div className="max-w-7xl mx-auto mt-12 bg-black text-white p-6 text-center border-4 border-black shadow-[8px_8px_0_#000]">
            <p className="text-xl font-bold uppercase tracking-wider">
              NOTE: ALL PACKAGES INCLUDE DIRECT FOUNDER ACCESS, WEEKLY REPORTS, AND FULL ACCOUNT OWNERSHIP.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="px-6 py-24 border-b-4 border-black bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-black uppercase tracking-tighter mb-12 text-center">FAQ</h2>
            <div className="space-y-6">
              {faqs.map((faq, i) => (
                <div key={i} className="border-4 border-black p-6 shadow-[4px_4px_0_#000] bg-[#f9f9f9]">
                  <h3 className="text-2xl font-black uppercase mb-3 text-[#FF3B00]">{faq.q}</h3>
                  <p className="text-lg font-bold">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 py-24 text-center bg-[#FF3B00] text-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-5xl font-black uppercase tracking-tighter mb-8 text-black drop-shadow-[2px_2px_0_#fff]">Need a Custom Quote?</h2>
            <Link 
              href="/book-call" 
              className="inline-block bg-black text-white text-2xl font-black uppercase px-12 py-6 border-4 border-white shadow-[8px_8px_0_#fff] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[12px_12px_0_#fff] transition-all"
            >
              Book A Call
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
