import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import LeadMagnet from '@/components/home/LeadMagnet';
import Advantages from '@/components/home/Advantages';
import ServicesFunnel from '@/components/home/ServicesFunnel';
import Approach from '@/components/home/Approach';
import Culture from '@/components/home/Culture';
import DualCTA from '@/components/home/DualCTA';
import TinderSwipeCards from '@/components/ui/TinderSwipeCards';
import ExperienceWarning from '@/components/ui/ExperienceWarning';

export default function Home() {
  return (
    <>
      <ExperienceWarning />
      <Navbar />
      <main className="min-h-screen bg-white text-[#0A0A0A] overflow-hidden">
        <Hero />
        <LeadMagnet />
        <Advantages />
        <ServicesFunnel />
        <div className="md:hidden py-12 bg-white border-t-2 border-black">
          <h2 className="text-4xl font-black uppercase text-center mb-8 tracking-tighter">Swipe Services</h2>
          <TinderSwipeCards />
        </div>
        <Approach />
        <Culture />
        <DualCTA />
      </main>
      <Footer />
    </>
  );
}
