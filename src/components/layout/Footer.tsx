import Link from "next/link";
import { ArrowRight, Phone, MessageCircle } from "lucide-react";

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
    <footer className="bg-[#0A0A0A] text-white pt-32 pb-8 overflow-hidden relative">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 w-full h-4 bg-gradient-to-r from-[#FF3B00] via-[#FFD700] to-[#0044FF]"></div>

      <div className="w-full px-6 md:px-12 lg:px-24 relative z-10">
        
        {/* Massive Call to Action */}
        <div className="mb-24 flex flex-col xl:flex-row xl:items-end justify-between gap-12 border-b border-white/10 pb-20">
          <div className="max-w-5xl">
            <h2 className="text-5xl md:text-8xl lg:text-[100px] font-black tracking-tighter leading-[0.85] uppercase mb-8">
              Got an idea? <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF3B00] to-[#FFD700]">Let's build it.</span>
            </h2>
            <a href="mailto:hello@m4y.com" className="text-3xl md:text-5xl font-bold tracking-tight hover:text-[#FF3B00] transition-colors">
              hello@m4y.com
            </a>
          </div>
          <Link href="/contact" className="group inline-flex items-center justify-center bg-white text-black font-black text-2xl uppercase tracking-widest py-6 px-12 border-4 border-white hover:bg-transparent hover:text-white transition-all duration-300 shadow-[8px_8px_0_0_#FF3B00] hover:shadow-none hover:translate-x-2 hover:translate-y-2">
            Start a project
            <ArrowRight className="w-8 h-8 ml-4 group-hover:rotate-45 transition-transform" />
          </Link>
        </div>

        {/* Clean Link Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-32">

          {/* Company */}
          <div>
            <h4 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-8">Company</h4>
            <ul className="flex flex-col gap-4">
              <li><Link href="/about" className="text-xl font-medium hover:text-[#FF3B00] transition-colors">About Us</Link></li>
              <li><Link href="/founders" className="text-xl font-medium hover:text-[#FF3B00] transition-colors">Meet the Founders</Link></li>
              <li><Link href="/faq" className="text-xl font-medium hover:text-[#FF3B00] transition-colors">FAQs</Link></li>
              <li><Link href="/blog" className="text-xl font-medium hover:text-[#FF3B00] transition-colors">Blog & Insights</Link></li>
            </ul>
          </div>

          {/* Socials */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-8">Connect</h4>
            <div className="flex flex-wrap gap-4">
              {[Phone, MessageCircle, InstagramIcon, LinkedinIcon].map((Icon, i) => (
                <a key={i} href="#" className="w-14 h-14 bg-white/5 border border-white/10 hover:bg-[#FFD700] hover:text-black hover:border-[#FFD700] flex items-center justify-center transition-all duration-300">
                  <Icon className="w-6 h-6" />
                </a>
              ))}
            </div>
            <div className="mt-12">
              <h4 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-4">Location</h4>
              <p className="text-xl font-medium text-gray-300 max-w-sm">
                123 Digital Ave, Suite 500<br />
                New York, NY 10001
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar with Huge Logo */}
        <div className="pt-8 border-t border-white/10 flex flex-col gap-8 relative overflow-hidden">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
            <p className="text-gray-500 text-sm font-bold tracking-widest uppercase">
              &copy; {currentYear} M4Y Digital Agency. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-gray-500 font-bold uppercase tracking-widest">
              <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
              <Link href="/cookies" className="hover:text-white transition-colors">Cookie Policy</Link>
            </div>
          </div>
          
          <h1 className="text-[12vw] md:text-[18vw] leading-none font-black tracking-tighter text-white/5 select-none text-center -mb-8 md:-mb-16">
            M4Y AGENCY
          </h1>
        </div>

      </div>
    </footer>
  );
}
