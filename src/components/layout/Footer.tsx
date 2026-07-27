import Link from "next/link";
import { ArrowRight, Phone, MessageCircle } from "lucide-react";
import ScratchCard from "@/components/ui/ScratchCard";

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white pt-32 pb-8 overflow-hidden relative border-t-4 border-[#FF3B00]">
      {/* Removed gradient top border, replaced with solid border on footer tag */}

      <div className="w-full px-6 md:px-16 lg:px-32 xl:px-40 relative z-10">
        
        {/* Massive Call to Action */}
        <div className="mb-24 flex flex-col xl:flex-row xl:items-end justify-between flex-wrap gap-12 border-b border-white/10 pb-20">
          <div className="max-w-5xl">
            <h2 className="text-5xl md:text-8xl lg:text-[100px] font-black tracking-tighter leading-[0.85] uppercase mb-8 break-words w-full">
              Got an idea? <br />
              <span className="text-black bg-[#FFD700] px-4 py-2 border-4 border-white inline-block mt-4">Let&apos;s build it.</span>
            </h2>
            <a href="mailto:hello@m4y.com" className="text-3xl md:text-5xl font-bold tracking-tight hover:text-[#FF3B00] transition-colors">
              hello@m4y.com
            </a>
          </div>
          <Link href="/contact" className="group inline-flex items-center justify-center gap-6 bg-white text-black font-black text-2xl uppercase tracking-widest py-6 px-14 border-4 border-white hover:bg-transparent hover:text-white transition-all duration-300 shadow-[8px_8px_0_0_#FF3B00] hover:shadow-none hover:translate-x-2 hover:translate-y-2">
            Start a project
            <ArrowRight className="w-8 h-8 group-hover:rotate-45 transition-transform" />
          </Link>
        </div>

        {/* Clean Link Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-32">

          {/* Company & Services */}
          <div>
            <h4 className="text-sm font-black text-white/50 uppercase tracking-widest mb-8">Navigation</h4>
            <ul className="flex flex-col gap-4">
              <li><Link href="/services" className="text-xl font-medium hover:text-[#FF3B00] transition-colors">Services</Link></li>
              <li><Link href="/case-studies" className="text-xl font-medium hover:text-[#FF3B00] transition-colors">Case Studies</Link></li>
              <li><Link href="/pricing" className="text-xl font-medium hover:text-[#FF3B00] transition-colors">Pricing & Packages</Link></li>
              <li><Link href="/about" className="text-xl font-medium hover:text-[#FF3B00] transition-colors">About Us</Link></li>
              <li><Link href="/faq" className="text-xl font-medium hover:text-[#FF3B00] transition-colors">FAQs</Link></li>
              <li><Link href="/blog" className="text-xl font-medium hover:text-[#FF3B00] transition-colors">Blog & Insights</Link></li>
            </ul>
          </div>

          {/* Socials */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-black text-white/50 uppercase tracking-widest mb-8">Connect</h4>
            <div className="flex flex-wrap gap-4">
              {[Phone, MessageCircle, InstagramIcon, LinkedinIcon].map((Icon, i) => (
                <a key={i} href="#" className="w-14 h-14 bg-black border-4 border-white hover:bg-[#FFD700] hover:text-black hover:border-[#FFD700] flex items-center justify-center transition-all duration-300 shadow-[4px_4px_0px_white] hover:shadow-none hover:translate-y-1 hover:translate-x-1">
                  <Icon className="w-6 h-6" />
                </a>
              ))}
            </div>
            <div className="mt-12">
              <h4 className="text-sm font-black text-white/50 uppercase tracking-widest mb-4">Location</h4>
              <p className="text-xl font-black text-white/70 max-w-sm">
                123 Digital Ave, Suite 500<br />
                New York, NY 10001
              </p>
            </div>
          </div>

        </div>

        {/* Mobile Easter Egg */}
        <div className="md:hidden flex flex-col items-center py-12 border-t-4 border-white mb-12">
          <p className="font-bold mb-4 uppercase tracking-wider text-sm text-gray-500">Find the secret discount</p>
          <ScratchCard width={280} height={120}>
            <div className="text-center">
              <h4 className="font-black text-[#FF3B00] text-2xl uppercase">M4Y-SECRET-25</h4>
              <p className="text-xs font-bold mt-1 text-black">25% OFF FIRST MONTH</p>
            </div>
          </ScratchCard>
        </div>

        {/* Bottom Bar with Huge Logo */}
        <div className="pt-8 border-t-4 border-white flex flex-col relative">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative z-10 mb-8 md:mb-0">
            <p className="text-gray-500 text-sm font-bold tracking-widest uppercase text-center md:text-left">
              &copy; {currentYear} M4Y Digital Agency. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-gray-500 font-bold uppercase tracking-widest">
              <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            </div>
          </div>
          
          <h1 className="text-[15vw] leading-[0.75] font-black tracking-tighter text-white/5 select-none text-center w-full overflow-hidden whitespace-nowrap mt-4">
            M4Y AGENCY
          </h1>
        </div>

      </div>
    </footer>
  );
}
