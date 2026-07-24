import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import FloatingCTA from '@/components/ui/FloatingCTA';
import PricingList from './PricingList';
import { getActivePricingPlans } from '@/lib/public-data';

export const revalidate = 60;

export default async function PricingPage() {
  const plans = await getActivePricingPlans();



  return (
    <>
      <Navbar />
      <main className="min-h-screen selection:bg-pink-500/30">
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
          <div className="container relative z-10 mx-auto px-6 max-w-7xl">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8">
                Transparent Pricing. <br/>
                <span className="text-gradient bg-gradient-to-r from-[#FF3B00] to-[#FFD700] bg-clip-text text-transparent">Real Results.</span>
              </h1>
              <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
                Choose the perfect growth plan for your business. No hidden fees, just predictable ROI and dedicated partnership.
              </p>
            </div>
          </div>
        </section>

        <section className="py-24 relative z-10 border-t border-black/5">
          <div className="w-full px-6 md:px-16 lg:px-32 xl:px-40 max-w-[1400px] mx-auto">
            
            <PricingList plans={plans as any} />
          </div>
        </section>

      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}
