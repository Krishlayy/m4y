import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export default function DualCTA() {
  return (
    <section className="bg-white border-t-4 border-black">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Our Story */}
        <Link href="/about" className="group relative block aspect-square md:aspect-auto md:h-[700px] overflow-hidden bg-black text-white cursor-pointer">
          <div className="absolute inset-0 bg-[#FF3B00] opacity-0 group-hover:opacity-90 transition-opacity duration-700 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200" 
            alt="Join our Team" 
            className="w-full h-full object-cover filter grayscale group-hover:scale-110 transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-700" />
          
          <div className="absolute inset-0 p-12 md:p-20 flex flex-col justify-between z-20">
            <div className="w-20 h-20 rounded-full border-2 border-white flex items-center justify-center group-hover:bg-white group-hover:text-[#FF3B00] transition-colors duration-500 self-end">
              <ArrowUpRight className="w-10 h-10 group-hover:rotate-45 transition-transform duration-500" />
            </div>
            <h2 className="text-5xl md:text-8xl lg:text-[100px] font-black uppercase tracking-tighter max-w-[400px] leading-[0.9]">
              Our <br /> Story
            </h2>
          </div>
        </Link>

        {/* Get in touch */}
        <Link href="/contact" className="group relative block aspect-square md:aspect-auto md:h-[700px] overflow-hidden bg-gray-100 text-black cursor-pointer">
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-90 transition-opacity duration-700 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1200" 
            alt="Get in touch" 
            className="w-full h-full object-cover filter grayscale group-hover:scale-110 transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-white/40 group-hover:bg-transparent transition-colors duration-700" />
          
          <div className="absolute inset-0 p-12 md:p-20 flex flex-col justify-between z-20">
            <div className="w-20 h-20 rounded-full border-2 border-black group-hover:border-white flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors duration-500 self-end text-black group-hover:text-black">
              <ArrowUpRight className="w-10 h-10 group-hover:rotate-45 transition-transform duration-500" />
            </div>
            <h2 className="text-5xl md:text-8xl font-bold uppercase tracking-tighter max-w-[300px] leading-[0.9] text-black group-hover:text-white transition-colors duration-500">
              Get In <br /> Touch
            </h2>
          </div>
        </Link>
      </div>
    </section>
  );
}
