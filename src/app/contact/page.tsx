import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';

export const metadata = {
  title: 'Contact Us | M4Y - Marketing 4 You',
  description: 'Get in touch with the founders of M4Y for your digital marketing needs.',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-[#FFD700] selection:text-black pt-24 flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero */}
        <section className="px-6 py-24 border-b-4 border-black bg-[#FF3B00] text-white">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-6 text-black drop-shadow-[4px_4px_0_#fff]">
              Talk To Us.
            </h1>
            <p className="text-2xl md:text-3xl font-bold bg-black text-white inline-block px-6 py-3 border-4 border-white shadow-[8px_8px_0_#fff]">
              No bots. Direct access to the founders.
            </p>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="px-6 py-16 border-b-4 border-black bg-[#FFD700]">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <a href="mailto:support.m4y@gmail.com" className="block bg-white p-8 border-4 border-black shadow-[8px_8px_0_#000] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[12px_12px_0_#000] transition-all text-center">
              <h3 className="text-2xl font-black uppercase mb-4">Email</h3>
              <p className="font-bold text-xl break-all">support.m4y@gmail.com</p>
            </a>
            <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer" className="block bg-[#25D366] text-white p-8 border-4 border-black shadow-[8px_8px_0_#000] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[12px_12px_0_#000] transition-all text-center">
              <h3 className="text-2xl font-black uppercase mb-4">WhatsApp</h3>
              <p className="font-bold text-xl">+91 99999 99999</p>
            </a>
            <Link href="/book-call" className="block bg-black text-[#FFD700] p-8 border-4 border-black shadow-[8px_8px_0_#000] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[12px_12px_0_#000] transition-all text-center">
              <h3 className="text-2xl font-black uppercase mb-4">Book A Call</h3>
              <p className="font-bold text-xl">Schedule 30 mins</p>
            </Link>
          </div>
        </section>

        {/* Form Section */}
        <section className="px-6 py-24 border-b-4 border-black bg-white">
          <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 border-4 border-black shadow-[16px_16px_0_#000]">
            <h2 className="text-4xl font-black uppercase tracking-tighter mb-8">Drop A Message</h2>
            <form action="https://formsubmit.co/support.m4y@gmail.com" method="POST" className="space-y-6">
              <input type="hidden" name="_subject" value="New lead from M4Y website!" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_next" value="https://marketing4you.in/thanks" />
              
              <div>
                <label htmlFor="name" className="block text-xl font-bold uppercase mb-2">Name</label>
                <input type="text" name="name" id="name" required className="w-full border-4 border-black p-4 text-lg font-medium focus:outline-none focus:ring-4 focus:ring-[#FFD700] transition-all bg-[#f0f0f0]" placeholder="JOHN DOE" />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-xl font-bold uppercase mb-2">Email</label>
                  <input type="email" name="email" id="email" required className="w-full border-4 border-black p-4 text-lg font-medium focus:outline-none focus:ring-4 focus:ring-[#FFD700] transition-all bg-[#f0f0f0]" placeholder="john@company.com" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-xl font-bold uppercase mb-2">Phone</label>
                  <input type="tel" name="phone" id="phone" className="w-full border-4 border-black p-4 text-lg font-medium focus:outline-none focus:ring-4 focus:ring-[#FFD700] transition-all bg-[#f0f0f0]" placeholder="+91 99999 99999" />
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-xl font-bold uppercase mb-2">Message</label>
                <textarea name="message" id="message" rows={4} required className="w-full border-4 border-black p-4 text-lg font-medium focus:outline-none focus:ring-4 focus:ring-[#FFD700] transition-all bg-[#f0f0f0] resize-none" placeholder="How can we help you dominate your market?"></textarea>
              </div>
              
              <button type="submit" className="w-full bg-[#FF3B00] text-white text-2xl font-black uppercase p-6 border-4 border-black shadow-[8px_8px_0_#000] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[12px_12px_0_#000] transition-all">
                Send Message
              </button>
            </form>
          </div>
        </section>

        {/* Bottom Strip */}
        <section className="py-8 bg-black text-[#FFD700] text-center border-b-4 border-black">
          <p className="text-3xl font-black uppercase tracking-widest">INDIA — REMOTE & GLOBAL</p>
        </section>
      </main>

      <Footer />
    </div>
  );
}
