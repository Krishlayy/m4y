import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

export default function DualCTA() {
  return (
    <section className="bg-white border-t-4 border-black">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Our Story */}
        <Link href="/about" className="group relative block aspect-square md:aspect-auto md:h-[700px] overflow-hidden bg-black text-white cursor-pointer">
          <div className="absolute inset-0 bg-[#FF3B00] opacity-0 group-hover:opacity-90 transition-opacity duration-700 z-10" />
          <Image 
            src="/agency-office.png" 
            alt="Join our Team" 
            fill
            className="object-cover filter grayscale group-hover:scale-110 transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-700" />
          
          <div className="absolute inset-0 p-10 md:p-16 lg:p-24 xl:p-32 flex flex-col justify-between z-20">
            <div className="w-20 h-20 rounded-full border-2 border-white flex items-center justify-center group-hover:bg-white group-hover:text-[#FF3B00] transition-colors duration-500 self-end">
              <ArrowUpRight className="w-10 h-10 group-hover:rotate-45 transition-transform duration-500" />
            </div>
            <h2 className="text-5xl md:text-7xl lg:text-8xl xl:text-[90px] font-black uppercase tracking-tight max-w-[400px] leading-[0.9] break-words">
              Our <br /> Story
            </h2>
          </div>
        </Link>

        {/* Get in touch */}
        <Link href="/contact" className="group relative block aspect-square md:aspect-auto md:h-[700px] overflow-hidden bg-gray-100 text-black cursor-pointer">
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-90 transition-opacity duration-700 z-10" />
          <Image 
            src="/contact-device.png" 
            alt="Get in touch"
            fill 
            className="object-cover filter grayscale group-hover:scale-110 transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-white/40 group-hover:bg-transparent transition-colors duration-700" />
          
          <div className="absolute inset-0 p-10 md:p-16 lg:p-24 xl:p-32 flex flex-col justify-between z-20">
            <div className="w-20 h-20 rounded-full border-2 border-black group-hover:border-white flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors duration-500 self-end text-black group-hover:text-black">
              <ArrowUpRight className="w-10 h-10 group-hover:rotate-45 transition-transform duration-500" />
            </div>
            <h2 className="text-5xl md:text-7xl lg:text-8xl xl:text-[90px] font-bold uppercase tracking-tight max-w-[300px] leading-[0.9] text-black group-hover:text-white transition-colors duration-500 break-words">
              Get In <br /> Touch
            </h2>
          </div>
        </Link>
      </div>
    </section>
  );
}
