import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import FloatingCTA from '@/components/ui/FloatingCTA';
import ServiceList from './ServiceList';
import { getActiveServices } from '@/lib/public-data';

export const revalidate = 60;

export const metadata = {
  title: 'Our Services | M4Y Digital Agency',
  description: 'Explore our full suite of premium digital marketing, development, and AI automation services.',
};

export default async function ServicesPage() {
  const services = await getActiveServices();

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, scale: 0.95, transition: { duration: 0.2 } }
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen selection:bg-purple-500/30">
        <section className="relative pt-40 pb-20 md:pt-24 md:pb-28 overflow-hidden">
          <div className="container relative z-10 mx-auto px-6 max-w-7xl">
            <div className="max-w-5xl">
              <div className="inline-block px-4 py-2 bg-black text-white text-xs font-black uppercase tracking-widest mb-8 border-4 border-black">
                Our Capabilities
              </div>
              <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-8 leading-[0.9]">
                Everything Your <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF3B00] to-[#FFD700]">Business Needs.</span>
              </h1>
              <p className="text-xl md:text-2xl font-bold text-gray-800 max-w-3xl leading-relaxed">
                As a premium digital agency, we provide end-to-end solutions designed to elevate your brand, drive targeted traffic, and maximize your ROI. No fluff. Just results.
              </p>
            </div>
          </div>
        </section>

        <section className="py-24 relative z-10 border-t border-black/5">
          <div className="w-full px-6 md:px-16 lg:px-32 xl:px-40 max-w-[1400px] mx-auto">
            
            <ServiceList services={services as any} />
          </div>
        </section>

      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}
