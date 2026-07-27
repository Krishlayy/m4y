import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';

export const metadata = {
  title: 'Our Work | M4Y - Marketing 4 You',
  description: 'See the results M4Y drives for our founding clients.',
};

export default function WorkPage() {
  const placeholders = [
    {
      title: 'D2C Skincare Brand',
      goal: 'Scale from ₹5L to ₹20L MRR',
      action: 'Meta Ads + CRO + Influencer Seeding',
      color: 'bg-[#FFD700]'
    },
    {
      title: 'Local Restaurant Chain',
      goal: 'Increase Footfall & Online Orders',
      action: 'Local SEO + WhatsApp Automation + Hyper-local Ads',
      color: 'bg-white'
    },
    {
      title: 'Online Fitness Coach',
      goal: 'Automate Lead Gen & Close High-ticket',
      action: 'Funnel Building + YouTube Ads + AI Chatbot',
      color: 'bg-[#FF3B00]',
      textColor: 'text-white'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-[#FFD700] selection:text-black pt-24 flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero */}
        <section className="px-6 py-32 text-center border-b-4 border-white">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-8 text-[#FFD700] drop-shadow-[4px_4px_0_#FF3B00]">
              Our Work.<br />Coming Soon.
            </h1>
            <p className="text-2xl font-bold bg-white text-black p-6 border-4 border-white shadow-[8px_8px_0_#FF3B00] inline-block">
              We just launched. Here's what we're building towards.
            </p>
          </div>
        </section>

        {/* Mock Case Studies */}
        <section className="px-6 py-24 border-b-4 border-white bg-black">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {placeholders.map((item, i) => (
                <div key={i} className={`p-10 border-4 border-white shadow-[12px_12px_0_#fff] hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[16px_16px_0_#fff] transition-all flex flex-col justify-between min-h-[400px] ${item.color} ${item.textColor || 'text-black'}`}>
                  <div>
                    <h2 className="text-3xl font-black uppercase mb-6 leading-tight">{item.title}</h2>
                    <div className="mb-6">
                      <span className="block text-sm font-black uppercase tracking-widest opacity-70 mb-1">The Goal</span>
                      <p className="text-xl font-bold">{item.goal}</p>
                    </div>
                  </div>
                  <div>
                    <span className="block text-sm font-black uppercase tracking-widest opacity-70 mb-1">Our Strategy</span>
                    <p className="text-xl font-bold border-t-4 border-current pt-4">{item.action}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 py-24 text-center bg-[#FFD700] text-black">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tighter mb-10">
              Want to be our first case study?
            </h2>
            <Link 
              href="/book-call" 
              className="inline-block bg-black text-white text-3xl font-black uppercase px-16 py-8 border-4 border-black shadow-[12px_12px_0_#000] hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[16px_16px_0_#000] transition-all"
            >
              Start Now
            </Link>
            <p className="mt-12 text-xl font-bold uppercase bg-white border-4 border-black inline-block px-6 py-3 shadow-[4px_4px_0_#000]">
              Be our founding client. In 90 days, this page will show your results.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
