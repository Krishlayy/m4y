import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import FloatingCTA from '@/components/ui/FloatingCTA';
import Link from 'next/link';
import { ArrowRight, Target, Eye, Zap, Shield, Heart, Rocket } from 'lucide-react';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const revalidate = 60;

export const metadata = {
  title: 'About Us | M4Y Digital Agency',
  description: 'Learn about M4Y, our mission, vision, founders, and the culture that drives digital growth.',
};

export default async function AboutPage() {
  const team = await prisma.teamMember.findMany({
    where: { isActive: true },
    orderBy: { displayOrder: 'asc' }
  });

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#F4F4F5] pt-32 pb-24 border-b-8 border-black">
        
        {/* Hero Section */}
        <section className="bg-black text-white pt-20 pb-32 px-6 lg:px-12 border-b-8 border-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-[#FF3B00]/20 to-[#FFD700]/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3"></div>
          <div className="max-w-7xl mx-auto relative z-10">
            <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-8 leading-[0.9]">
              We Engineer <br/> <span className="text-[#FFD700]">Digital Growth.</span>
            </h1>
            <p className="text-xl md:text-2xl font-bold text-gray-400 max-w-2xl leading-relaxed">
              M4Y is a premium digital agency built for startups, creators, and bold brands. We don't just market; we build ecosystems that scale.
            </p>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 -mt-16 relative z-20 space-y-32">
          
          {/* Mission & Vision */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="modern-card bg-white p-10 md:p-16 border-4 border-black">
              <Target className="w-12 h-12 text-[#FF3B00] mb-8" />
              <h2 className="text-3xl font-black uppercase tracking-widest mb-6">Our Mission</h2>
              <p className="text-lg font-bold text-gray-700 leading-relaxed">
                To democratize enterprise-level digital growth strategies, making them accessible to ambitious startups, local businesses, and independent creators worldwide.
              </p>
            </div>
            <div className="modern-card bg-white p-10 md:p-16 border-4 border-black">
              <Eye className="w-12 h-12 text-[#FFD700] mb-8" />
              <h2 className="text-3xl font-black uppercase tracking-widest mb-6">Our Vision</h2>
              <p className="text-lg font-bold text-gray-700 leading-relaxed">
                To be the foundational growth partner for the next generation of industry leaders, setting the global standard for transparent, ROI-driven marketing.
              </p>
            </div>
          </section>

          {/* Working Philosophy & Values */}
          <section>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-16 text-center">Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-black text-white p-8 border-4 border-black shadow-[4px_4px_0px_0px_rgba(255,59,0,1)] hover:-translate-y-2 transition-transform">
                <Shield className="w-10 h-10 text-[#FFD700] mb-6" />
                <h3 className="text-xl font-black uppercase mb-4">Radical Transparency</h3>
                <p className="font-bold text-gray-400 text-sm">No hidden fees, no vanity metrics. Just honest strategy and clear reporting.</p>
              </div>
              <div className="bg-white text-black p-8 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 transition-transform">
                <Zap className="w-10 h-10 text-[#FF3B00] mb-6" />
                <h3 className="text-xl font-black uppercase mb-4">Bias to Action</h3>
                <p className="font-bold text-gray-600 text-sm">We move fast. We test, iterate, and scale quicker than traditional agencies.</p>
              </div>
              <div className="bg-[#FFD700] text-black p-8 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 transition-transform">
                <Heart className="w-10 h-10 text-black mb-6" />
                <h3 className="text-xl font-black uppercase mb-4">Client Obsession</h3>
                <p className="font-bold text-gray-800 text-sm">Your business is our business. We only win when your revenue grows.</p>
              </div>
              <div className="bg-white text-black p-8 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 transition-transform">
                <Rocket className="w-10 h-10 text-[#00E676] mb-6" />
                <h3 className="text-xl font-black uppercase mb-4">Innovation First</h3>
                <p className="font-bold text-gray-600 text-sm">We constantly integrate the latest AI and automation tools to give you an edge.</p>
              </div>
            </div>
          </section>

          {/* Company Journey / Timeline */}
          <section className="bg-white border-4 border-black p-10 md:p-20 relative">
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-16 border-b-8 border-black pb-8">The M4Y Journey</h2>
            <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-2 before:bg-black">
              
              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-black bg-[#FFD700] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10"></div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-4rem)] bg-black text-white p-8">
                  <h3 className="font-black uppercase text-2xl mb-2 text-[#FFD700]">The Genesis</h3>
                  <p className="font-bold uppercase tracking-widest text-xs text-gray-400 mb-4">Year 1</p>
                  <p className="font-bold text-gray-300">Founded with a vision to disrupt the traditional, slow-moving agency model by introducing agile, performance-based marketing.</p>
                </div>
              </div>

              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-black bg-[#FF3B00] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10"></div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-4rem)] bg-white border-4 border-black p-8">
                  <h3 className="font-black uppercase text-2xl mb-2">Rapid Scale</h3>
                  <p className="font-bold uppercase tracking-widest text-xs text-gray-500 mb-4">Year 2</p>
                  <p className="font-bold text-gray-700">Hit our first major milestone, scaling operations and delivering 10x ROI for our initial cohort of startup clients.</p>
                </div>
              </div>

              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-black bg-[#00E676] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10"></div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-4rem)] bg-black text-white p-8">
                  <h3 className="font-black uppercase text-2xl mb-2 text-[#00E676]">Enterprise 2.0</h3>
                  <p className="font-bold uppercase tracking-widest text-xs text-gray-400 mb-4">Today</p>
                  <p className="font-bold text-gray-300">Evolved into a full-stack digital growth ecosystem, integrating AI automation, premium web development, and omni-channel campaigns.</p>
                </div>
              </div>

            </div>
          </section>

          {/* Meet The Team (Founders) */}
          {team.length > 0 && (
            <section>
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-16 text-center">Meet Leadership</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                {team.map((member) => {
                  const expertise = (member.expertise as string[]) || [];
                  const achievements = (member.achievements as string[]) || [];
                  
                  return (
                    <div key={member.id} className="modern-card bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
                      <div className="h-64 bg-gray-200 border-b-4 border-black relative">
                        {/* Placeholder for Photo */}
                        <div className="absolute inset-0 flex items-center justify-center bg-black/5 text-gray-400 font-bold uppercase tracking-widest">
                          [Photo: {member.name}]
                        </div>
                      </div>
                      <div className="p-8">
                        <h3 className="text-3xl font-black uppercase tracking-tight mb-2">{member.name}</h3>
                        <p className="font-bold uppercase tracking-widest text-[#FF3B00] text-sm mb-6">{member.role}</p>
                        
                        <p className="font-bold text-gray-700 text-sm mb-8 leading-relaxed">
                          {member.bio}
                        </p>

                        {expertise.length > 0 && (
                          <div className="mb-6">
                            <h4 className="font-black uppercase tracking-widest text-xs mb-3 border-b-2 border-black pb-1">Expertise</h4>
                            <div className="flex flex-wrap gap-2">
                              {expertise.map((exp, i) => (
                                <span key={i} className="px-2 py-1 bg-[#F4F4F5] border border-black text-xs font-bold uppercase">{exp}</span>
                              ))}
                            </div>
                          </div>
                        )}
                        
                        {achievements.length > 0 && (
                          <div>
                            <h4 className="font-black uppercase tracking-widest text-xs mb-3 border-b-2 border-black pb-1">Milestones</h4>
                            <ul className="text-sm font-bold text-gray-600 space-y-1 list-disc pl-4">
                              {achievements.map((ach, i) => (
                                <li key={i}>{ach}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          )}

          {/* CTA */}
          <section className="bg-black text-white p-12 md:p-20 text-center border-4 border-black shadow-[12px_12px_0px_0px_rgba(255,215,0,1)]">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8">Ready to Build <br/> Together?</h2>
            <Link href="/contact" className="inline-flex items-center gap-3 bg-white text-black px-10 py-5 font-black uppercase tracking-widest text-xl hover:bg-[#FF3B00] hover:text-white transition-colors border-4 border-transparent hover:border-white">
              Let's Talk <ArrowRight className="w-6 h-6" />
            </Link>
          </section>

        </div>
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}
