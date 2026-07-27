import Link from "next/link";
import { ArrowRight, Phone, Mail, Clock, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Book a Free Strategy Call — M4Y",
  description: "30 minutes. Brutally honest audit of your marketing. Zero obligation. Book your free strategy call with M4Y's 5 founding team members.",
};

const steps = [
  { step: "01", title: "You book the call", desc: "Pick a time that works. Takes 30 seconds." },
  { step: "02", title: "We prepare for YOU", desc: "We research your brand, your competitors, your market before we even say hello." },
  { step: "03", title: "Honest audit. Clear plan.", desc: "No pitch deck. No pressure. Just a real conversation about what's holding your growth back — and how to fix it." },
];

const inclusions = [
  "Full audit of your current social media presence",
  "Competitor analysis — what they're doing that you're not",
  "1 growth channel recommendation specific to your business",
  "Clear pricing if you want to work together",
  "Zero obligation — even if you don't hire us, you leave with value",
];

export default function BookCallPage() {
  return (
    <main className="min-h-screen bg-white text-black">

      {/* Hero */}
      <section className="border-b-4 border-black py-32 md:py-40 bg-black text-white">
        <div className="w-full px-6 md:px-16 lg:px-32 xl:px-40">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 border-4 border-[#FF3B00] bg-[#FF3B00] text-white font-black uppercase text-xs tracking-widest mb-8">
              <span className="w-2 h-2 bg-white animate-pulse" />
              Free. No Obligation. 30 Minutes.
            </div>
            <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85] mb-8">
              Book Your<br />
              <span className="text-black bg-[#FFD700] px-3 py-2 border-4 border-white inline-block mt-2">
                Free Call.
              </span>
            </h1>
            <p className="text-xl md:text-2xl font-bold text-white/60 max-w-2xl">
              30 minutes with the actual founders. We&apos;ll audit your marketing, identify your biggest leak, and show you exactly how we&apos;d fix it.
            </p>
          </div>
        </div>
      </section>

      {/* What happens section */}
      <section className="border-b-4 border-black py-24 bg-white">
        <div className="w-full px-6 md:px-16 lg:px-32 xl:px-40">
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-16">
            What Happens<br />On The Call?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-1 border-4 border-black bg-black">
            {steps.map((s, i) => (
              <div key={i} className="bg-white p-10 flex flex-col gap-4 hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[4px_4px_0_#000] transition-all duration-150">
                <span className="text-7xl font-black text-black/10 leading-none">{s.step}</span>
                <h3 className="text-2xl font-black uppercase tracking-tight">{s.title}</h3>
                <p className="font-bold text-black/60 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form + inclusions */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="w-full px-6 md:px-16 lg:px-32 xl:px-40">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            {/* What's included */}
            <div>
              <h2 className="text-4xl font-black uppercase tracking-tighter mb-10">
                What&apos;s Included,<br />Free.
              </h2>
              <ul className="space-y-5">
                {inclusions.map((item, i) => (
                  <li key={i} className="flex items-start gap-4 group">
                    <div className="w-8 h-8 border-4 border-black flex items-center justify-center flex-shrink-0 bg-[#FF3B00] mt-0.5">
                      <CheckCircle2 className="w-4 h-4 text-white" />
                    </div>
                    <p className="font-bold text-lg leading-snug">{item}</p>
                  </li>
                ))}
              </ul>

              {/* Contact alternatives */}
              <div className="mt-16 border-t-4 border-black pt-10 space-y-4">
                <p className="font-black text-xs uppercase tracking-widest text-black/40 mb-6">Prefer to reach out directly?</p>
                <a href="mailto:support.m4y@gmail.com" className="flex items-center gap-4 group hover:text-[#FF3B00] transition-colors">
                  <div className="w-12 h-12 border-4 border-black flex items-center justify-center group-hover:bg-[#FF3B00] group-hover:border-[#FF3B00] group-hover:text-white transition-all">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span className="font-black text-xl">support.m4y@gmail.com</span>
                </a>
                <a href="https://wa.me/919258735381" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group hover:text-[#FF3B00] transition-colors">
                  <div className="w-12 h-12 border-4 border-black flex items-center justify-center group-hover:bg-[#FF3B00] group-hover:border-[#FF3B00] group-hover:text-white transition-all">
                    <Phone className="w-5 h-5" />
                  </div>
                  <span className="font-black text-xl">+91 92587 35381</span>
                </a>
              </div>
            </div>

            {/* Form */}
            <div className="border-4 border-black shadow-[8px_8px_0_#000]">
              <div className="bg-black px-8 py-5 flex items-center gap-3">
                <Clock className="w-5 h-5 text-[#FFD700]" />
                <p className="text-white font-black text-sm uppercase tracking-wider">
                  Book Your 30-Min Free Call
                </p>
              </div>
              <form
                action={`https://formsubmit.co/support.m4y@gmail.com`}
                method="POST"
                className="p-8 space-y-6 bg-white"
              >
                <input type="hidden" name="_subject" value="New Strategy Call Request — M4Y" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />

                <div>
                  <label className="block font-black text-xs uppercase tracking-widest mb-2">Your Name *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Rahul Sharma"
                    className="w-full border-4 border-black px-4 py-3 font-bold text-black placeholder:text-black/30 focus:outline-none focus:shadow-[4px_4px_0_#FF3B00] transition-shadow"
                  />
                </div>

                <div>
                  <label className="block font-black text-xs uppercase tracking-widest mb-2">Business / Brand Name *</label>
                  <input
                    type="text"
                    name="business"
                    required
                    placeholder="Your Brand"
                    className="w-full border-4 border-black px-4 py-3 font-bold text-black placeholder:text-black/30 focus:outline-none focus:shadow-[4px_4px_0_#FF3B00] transition-shadow"
                  />
                </div>

                <div>
                  <label className="block font-black text-xs uppercase tracking-widest mb-2">WhatsApp Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="+91 98765 43210"
                    className="w-full border-4 border-black px-4 py-3 font-bold text-black placeholder:text-black/30 focus:outline-none focus:shadow-[4px_4px_0_#FF3B00] transition-shadow"
                  />
                </div>

                <div>
                  <label className="block font-black text-xs uppercase tracking-widest mb-2">Your Industry</label>
                  <select
                    name="industry"
                    className="w-full border-4 border-black px-4 py-3 font-bold text-black focus:outline-none focus:shadow-[4px_4px_0_#FF3B00] transition-shadow bg-white"
                  >
                    <option value="">Select industry...</option>
                    <option>Restaurant / Food & Beverage</option>
                    <option>D2C / E-commerce</option>
                    <option>Fitness / Wellness</option>
                    <option>Real Estate</option>
                    <option>Fashion / Apparel</option>
                    <option>Tech / SaaS</option>
                    <option>Education / Coaching</option>
                    <option>Healthcare / Clinic</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block font-black text-xs uppercase tracking-widest mb-2">Biggest Marketing Challenge</label>
                  <textarea
                    name="challenge"
                    rows={3}
                    placeholder="e.g. We get website visitors but no one converts..."
                    className="w-full border-4 border-black px-4 py-3 font-bold text-black placeholder:text-black/30 focus:outline-none focus:shadow-[4px_4px_0_#FF3B00] transition-shadow resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full justify-center group text-lg"
                >
                  Request My Free Call
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
                <p className="text-center text-xs font-bold text-black/40 uppercase tracking-wider">
                  We&apos;ll WhatsApp you within 24 hours to confirm.
                </p>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* Founding Client note */}
      <section className="py-16 bg-[#FFD700] border-b-4 border-black">
        <div className="w-full px-6 md:px-16 lg:px-32 xl:px-40 text-center">
          <p className="font-black text-2xl md:text-3xl uppercase tracking-tight text-black">
            🔥 Founding Client Rates Active — Only For The Next{" "}
            <span className="bg-black text-[#FFD700] px-2 py-1">10 Businesses</span>{" "}
            We Take On.
          </p>
        </div>
      </section>

    </main>
  );
}
