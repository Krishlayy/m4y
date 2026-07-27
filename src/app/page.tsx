import dynamic from 'next/dynamic';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/home/HeroSection';
import AnnouncementBar from '@/components/ui/AnnouncementBar';

// Lazy-load everything below the fold for fast first paint
const FoundersSection    = dynamic(() => import('@/components/home/FoundersSection'));
const LeadMagnet         = dynamic(() => import('@/components/home/LeadMagnet'));
const ServicesFunnel     = dynamic(() => import('@/components/home/ServicesFunnel'));
const MobileServiceCarousel = dynamic(() => import('@/components/ui/MobileServiceCarousel'));
const WhatWeBuild        = dynamic(() => import('@/components/home/WhatWeBuild'));
const Advantages         = dynamic(() => import('@/components/home/Advantages'));
const Approach           = dynamic(() => import('@/components/home/Approach'));
const TechStack          = dynamic(() => import('@/components/home/TechStack'));
const Culture            = dynamic(() => import('@/components/home/Culture'));
const DualCTA            = dynamic(() => import('@/components/home/DualCTA'));
const ExperienceWarning  = dynamic(() => import('@/components/ui/ExperienceWarning'));
const FloatingCTA        = dynamic(() => import('@/components/ui/FloatingCTA'));

export default function Home() {
  return (
    <>
      <ExperienceWarning />
      <AnnouncementBar />
      <Navbar />
      <main className="min-h-screen bg-white text-black overflow-hidden">
        {/* 01 — Hero: critical path, NOT lazy-loaded */}
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

        {/* 10 — Culture */}
        <Culture />

        {/* 11 — Dual CTA */}
        <DualCTA />
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}
