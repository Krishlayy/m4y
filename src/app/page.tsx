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
import AnnouncementBar from '@/components/ui/AnnouncementBar';
import FoundersSection from '@/components/home/FoundersSection';
import WhatWeBuild from '@/components/home/WhatWeBuild';
import TechStack from '@/components/home/TechStack';
import FloatingCTA from '@/components/ui/FloatingCTA';

export default function Home() {
  return (
    <>
      <ExperienceWarning />
      <AnnouncementBar />
      <Navbar />
      <main className="min-h-screen bg-white text-black overflow-hidden">
        {/* 01 — Hero: Who we are */}
        <HeroSection />

        {/* 02 — Founders: Who you're working with */}
        <FoundersSection />

        {/* 03 — Lead Magnet: Founding client offer */}
        <LeadMagnet />

        {/* 04 — Services: What we do */}
        <ServicesFunnel />

        {/* 05 — Mobile Carousel (mobile only) */}
        <MobileServiceCarousel />

        {/* 06 — What We'd Build: Show thinking */}
        <WhatWeBuild />

        {/* 07 — Advantages: Why us */}
        <Advantages />

        {/* 08 — Methodology */}
        <Approach />

        {/* 09 — Tech Stack: CS credibility */}
        <TechStack />

        {/* 10 — Culture: Who we really are */}
        <Culture />

        {/* 11 — Dual CTA: About + Contact panels */}
        <DualCTA />
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}
