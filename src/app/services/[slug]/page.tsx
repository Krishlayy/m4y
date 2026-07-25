import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getServiceBySlug } from '@/lib/public-data';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import FloatingCTA from '@/components/ui/FloatingCTA';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, CircleDot } from 'lucide-react';
import { Prisma } from '@prisma/client';

export const revalidate = 60;

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const service = await getServiceBySlug(params.slug);
  if (!service) return { title: 'Service Not Found' };
  
  return {
    title: `${service.name} | M4Y Digital Agency`,
    description: service.shortDescription,
    openGraph: {
      title: `${service.name} | M4Y`,
      description: service.shortDescription,
    }
  };
}

export default async function ServicePage({ params }: { params: { slug: string } }) {
  const service = await getServiceBySlug(params.slug);
  if (!service || !service.isActive) notFound();

  const deliverables = (service.deliverables as string[]) || [];
  const benefits = (service.benefits as string[]) || [];
  const process = (service.process as { step: string, desc: string }[]) || [];
  const faqs = (service.faq as { q: string, a: string }[]) || [];

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#F4F4F5] pt-40 pb-24 border-b-8 border-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          {/* Breadcrumbs */}
          <div className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-12">
            <Link href="/" className="hover:text-black">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/services" className="hover:text-black">Services</Link>
            <span className="mx-2">/</span>
            <span className="text-black">{service.name}</span>
          </div>

          {/* Hero */}
          <div className="mb-20">
            {service.category && (
              <div className="inline-block px-3 py-1 bg-black text-white text-xs font-black uppercase tracking-widest mb-6">
                {service.category}
              </div>
            )}
            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8 leading-[0.9]">
              {service.name}
            </h1>
            <p className="text-xl md:text-2xl font-bold text-gray-800 max-w-3xl leading-relaxed">
              {service.fullDescription || service.shortDescription}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Left Content (≈65%) */}
            <div className="lg:col-span-8 space-y-20">
              
              {/* Deliverables */}
              {deliverables.length > 0 && (
                <section>
                  <h2 className="text-3xl font-black uppercase tracking-widest border-b-4 border-black pb-4 mb-8">Deliverables</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {deliverables.map((item, i) => (
                      <div key={i} className="flex items-start gap-4">
                        <CheckCircle2 className="w-6 h-6 text-[#FF3B00] shrink-0 mt-1" />
                        <span className="font-bold text-lg text-gray-800">{item}</span>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Benefits */}
              {benefits.length > 0 && (
                <section>
                  <h2 className="text-3xl font-black uppercase tracking-widest border-b-4 border-black pb-4 mb-8">The Impact</h2>
                  <div className="space-y-6">
                    {benefits.map((benefit, i) => (
                      <div key={i} className="modern-card bg-white p-6">
                        <p className="font-bold text-lg text-black">{benefit}</p>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Process */}
              {process.length > 0 && (
                <section>
                  <h2 className="text-3xl font-black uppercase tracking-widest border-b-4 border-black pb-4 mb-8">Our Process</h2>
                  <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-1 before:bg-gradient-to-b before:from-black before:via-black before:to-transparent">
                    {process.map((p, i) => (
                      <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-black bg-white shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] z-10">
                          <span className="font-black text-sm">{i + 1}</span>
                        </div>
                        <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] modern-card bg-white p-6">
                          <h3 className="font-black uppercase text-xl mb-2">{p.step}</h3>
                          <p className="font-bold text-gray-600 text-sm">{p.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* FAQs */}
              {faqs.length > 0 && (
                <section>
                  <h2 className="text-3xl font-black uppercase tracking-widest border-b-4 border-black pb-4 mb-8">FAQs</h2>
                  <div className="space-y-4">
                    {faqs.map((faq, i) => (
                      <div key={i} className="border-4 border-black bg-white p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                        <h4 className="font-black text-lg mb-2 flex items-start gap-3">
                          <CircleDot className="w-5 h-5 text-[#FFD700] shrink-0 mt-0.5" />
                          {faq.q}
                        </h4>
                        <p className="font-bold text-gray-600 pl-8">{faq.a}</p>
                      </div>
                    ))}
                  </div>
                </section>
              )}

            </div>

            {/* Right Sidebar (≈35%) */}
            <div className="lg:col-span-4">
              <div className="sticky top-32 modern-card bg-black text-white p-8">
                <h3 className="text-2xl font-black uppercase mb-6 border-b-2 border-white/20 pb-4">Start Your Project</h3>
                
                <div className="mb-8">
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">Pricing</p>
                  <p className="text-4xl font-black text-[#FFD700]">Custom Quote</p>
                </div>
                
                <Link href={service.ctaLink || "/contact"} className="block w-full bg-white text-black font-black uppercase tracking-widest text-center py-4 border-4 border-white hover:bg-[#FF3B00] hover:text-white hover:border-[#FF3B00] transition-colors shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)]">
                  {service.ctaText || "Request Consultation"}
                </Link>

                <div className="mt-8 space-y-4 text-sm font-bold text-gray-400">
                  <div className="flex justify-between border-b border-white/10 pb-2">
                    <span>Response Time</span>
                    <span className="text-white">{'< 12 Hours'}</span>
                  </div>
                  <div className="flex justify-between border-b border-white/10 pb-2">
                    <span>Onboarding</span>
                    <span className="text-white">Seamless</span>
                  </div>
                  <div className="flex justify-between pb-2">
                    <span>Contracts</span>
                    <span className="text-white">Flexible</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}
