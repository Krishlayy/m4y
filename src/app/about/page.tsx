import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';

export const metadata = {
  title: 'About Us | M4Y - Marketing 4 You',
  description: 'Meet the 5 BTech CS founders who chose marketing over MNCs to build M4Y.',
};

export default function AboutPage() {
  const founders = [
    { name: 'Krishlay', role: 'Tech & AI', color: 'bg-[#FF3B00]' },
    { name: 'Ayushman', role: 'Engineering', color: 'bg-[#FFD700]' },
    { name: 'Arpit', role: 'Brand & Strategy', color: 'bg-white' },
    { name: 'Priyanshu', role: 'Performance Marketing', color: 'bg-[#FF3B00]' },
    { name: 'Bhavya', role: 'Influencer & Content', color: 'bg-[#FFD700]' },
  ];

  const values = [
    { title: 'Engineers First', desc: 'We build systems that scale, not just pretty pictures.' },
    { title: 'Founders Do The Work', desc: 'You talk to us. We do the work. No junior account managers.' },
    { title: 'Radical Transparency', desc: 'If something isn\'t working, we tell you first and fix it fast.' },
  ];

  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-[#FFD700] selection:text-black pt-24 flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="px-6 py-24 md:py-32 border-b-4 border-black bg-[#FFD700]">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8 shadow-text">
              We Chose Marketing Over MNCs.
            </h1>
            <p className="text-xl md:text-2xl font-bold max-w-3xl mx-auto bg-white p-6 border-4 border-black shadow-[8px_8px_0_#000]">
              We are 5 BTech CS graduates who realized traditional agencies don't get tech, data, or fast execution. So we built M4Y.
            </p>
          </div>
        </section>

        {/* Founders Grid */}
        <section className="px-6 py-24 border-b-4 border-black bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-12 text-center">The Founders</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {founders.map((founder, i) => (
                <div key={i} className={`p-8 border-4 border-black shadow-[8px_8px_0_#000] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[12px_12px_0_#000] transition-all ${founder.color}`}>
                  <h3 className="text-3xl font-black uppercase mb-2">{founder.name}</h3>
                  <p className="text-xl font-bold bg-black text-white inline-block px-3 py-1">{founder.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission & Values */}
        <section className="px-6 py-24 border-b-4 border-black bg-[#FF3B00]">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="bg-white p-10 border-4 border-black shadow-[8px_8px_0_#000]">
              <h2 className="text-4xl font-black uppercase tracking-tighter mb-6">Our Mission</h2>
              <p className="text-2xl font-bold leading-tight">
                Make world-class marketing accessible to every Indian business.
              </p>
              <p className="text-lg font-medium mt-4">
                No jargon, no fluff, just measurable results driven by engineering principles and creative strategy.
              </p>
            </div>
            <div className="grid gap-6">
              {values.map((val, i) => (
                <div key={i} className="bg-black text-white p-6 border-4 border-black shadow-[8px_8px_0_#fff] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[12px_12px_0_#fff] transition-all">
                  <h3 className="text-2xl font-black uppercase mb-2 text-[#FFD700]">{val.title}</h3>
                  <p className="font-bold">{val.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 py-24 text-center bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tighter mb-8">Ready to grow?</h2>
            <Link 
              href="/book-call" 
              className="inline-block bg-[#FFD700] text-black text-2xl font-black uppercase px-12 py-6 border-4 border-black shadow-[8px_8px_0_#000] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[12px_12px_0_#000] transition-all"
            >
              Work With The Founders
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
