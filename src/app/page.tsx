import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/home/HeroSection';
import LeadMagnet from '@/components/home/LeadMagnet';
import Advantages from '@/components/home/Advantages';
import ServicesFunnel from '@/components/home/ServicesFunnel';
import Approach from '@/components/home/Approach';
import Culture from '@/components/home/Culture';
import DualCTA from '@/components/home/DualCTA';
import ExperienceWarning from '@/components/ui/ExperienceWarning';
import MobileServiceCarousel from '@/components/ui/MobileServiceCarousel';

export default function Home() {
  return (
    <>
      <ExperienceWarning />
      <Navbar />
      <main className="min-h-screen bg-white text-[#0A0A0A] overflow-hidden">
        <HeroSection />
        <LeadMagnet />
        <Advantages />
        <ServicesFunnel />
        <MobileServiceCarousel />
        <Approach />
        <Culture />
        <DualCTA />
      </main>
      <Footer />
    </>
  );
}
