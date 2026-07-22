import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#FF3B00] text-black border-x-[16px] border-b-[16px] border-black p-8 relative overflow-hidden">
      {/* Background glitch elements */}
      <div className="absolute top-10 left-10 w-64 h-32 bg-black opacity-10 -rotate-12 mix-blend-overlay pointer-events-none" />
      <div className="absolute bottom-20 right-20 w-96 h-12 bg-white opacity-20 rotate-6 mix-blend-overlay pointer-events-none" />
      
      <div className="z-10 flex flex-col items-center text-center">
        <h1 
          className="text-[120px] md:text-[250px] font-black leading-none tracking-tighter"
          style={{ textShadow: "12px 12px 0px #000" }}
        >
          <span className="text-[#FFD700]">4</span>
          <span className="text-white">0</span>
          <span className="text-[#FFD700]">4</span>
        </h1>
        
        <div className="bg-black text-white px-6 py-4 mt-8 mb-12 border-4 border-white shadow-[8px_8px_0_0_#FFD700] rotate-2">
          <h2 className="text-2xl md:text-4xl font-bold uppercase tracking-wider">
            You broke the system.
          </h2>
          <p className="text-lg md:text-xl font-medium text-[#00E676] mt-2">
            But we can fix your marketing.
          </p>
        </div>
        
        <Link 
          href="/" 
          className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-xl uppercase tracking-wider text-black bg-white border-4 border-black hover:-translate-y-2 hover:translate-x-2 hover:shadow-[-8px_8px_0_0_#000] transition-all duration-300"
        >
          Return to Safety
        </Link>
      </div>

      {/* Ticker tape at the bottom */}
      <div className="absolute bottom-0 w-full overflow-hidden border-t-8 border-black bg-[#FFD700] py-2">
        <div className="animate-marquee whitespace-nowrap flex space-x-8">
          {[...Array(10)].map((_, i) => (
            <span key={i} className="text-black font-black uppercase text-xl">
              ERROR 404 // NOT FOUND // 
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
