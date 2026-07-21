import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import LeadMagnet from '@/components/home/LeadMagnet';
import Advantages from '@/components/home/Advantages';
import ServicesFunnel from '@/components/home/ServicesFunnel';
import Approach from '@/components/home/Approach';
import Culture from '@/components/home/Culture';
import DualCTA from '@/components/home/DualCTA';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white text-[#0A0A0A] overflow-hidden">
        <Hero />
        <LeadMagnet />
        <Advantages />
        <ServicesFunnel />
        <Approach />
        <Culture />
        <DualCTA />
      </main>
      <Footer />
    </>
  );
}
