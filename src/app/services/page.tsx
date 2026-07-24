import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import FloatingCTA from '@/components/ui/FloatingCTA';
import ServiceList from './ServiceList';
import { getActiveServices } from '@/lib/public-data';

export const revalidate = 60;

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
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-black/10 mb-8 bg-white/50">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                <span className="text-sm font-medium">Our Capabilities</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8">
                Every Service Your <span className="text-gradient bg-gradient-to-r from-[#FF3B00] to-[#FFD700] bg-clip-text text-transparent">Business Needs</span>
              </h1>
              <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
                As a full-service digital marketing agency, we provide end-to-end solutions designed to elevate your brand, drive targeted traffic, and maximize your ROI.
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
