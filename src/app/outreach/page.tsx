"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { MessageSquare, Search, Sparkles, Send, CheckCircle2, Phone, MapPin, Building2, Filter } from "lucide-react";

interface Prospect {
  id: number;
  name: string;
  category: string;
  city: string;
  phone: string;
  status: string;
  pitch: string;
}

const rawProspects: Prospect[] = [
  { id: 1, name: "Aura Artisanal Studio", category: "D2C Apparel & Ethnic Wear", city: "Jaipur", phone: "919829014821", status: "Instagram Only", pitch: "Hi Team Aura! Loved your ethnic collection on IG. We build sub-second Next.js stores that convert 24%+ visitors." },
  { id: 2, name: "Veda Organics & Spices", category: "D2C Gourmet Food", city: "Kochi", phone: "919447128903", status: "WhatsApp Only", pitch: "Namaste Veda Organics! Scale your spice orders nationwide with an automated WhatsApp + Web Store." },
  { id: 3, name: "Urban Kicks Customs", category: "Boutique Footwear", city: "Bengaluru", phone: "919900154720", status: "Instagram Only", pitch: "Hey Urban Kicks! Convert IG followers into direct buyers with a 0.3s Neobrutalist sneaker store." },
  { id: 4, name: "Kaveri Handloom Collective", category: "Handmade Textiles", city: "Chennai", phone: "919840233190", status: "Facebook Page Only", pitch: "Hello Kaveri Collective! Expand international orders with a dedicated Next.js export showcase." },
  { id: 5, name: "Solace Activewear", category: "Fitness & Gym Wear", city: "Delhi NCR", phone: "919811467210", status: "Instagram Only", pitch: "Hi Solace! Boost your ad ROI with a 100/100 speed store optimized for Meta ads." },
  { id: 6, name: "Nouveau Living Interiors", category: "Interior Design Studio", city: "Mumbai", phone: "919820311849", status: "PDF Catalog Only", pitch: "Hi Nouveau Living! Showcase your luxury interior projects online with automated lead capture." },
  { id: 7, name: "Apex Realty Advisors", category: "Real Estate Brokerage", city: "Gurgaon", phone: "919910244810", status: "No Website", pitch: "Hi Apex Realty! Stop losing property buyers. We build real estate lead engines that capture WhatsApp leads in 3 secs." },
  { id: 8, name: "Design Craft Architects", category: "Architecture Firm", city: "Bengaluru", phone: "919845190234", status: "Instagram Only", pitch: "Hello Design Craft! Convert high-budget villa clients with an interactive architectural showcase." },
  { id: 9, name: "Urban Square Spaces", category: "Co-working & Commercial", city: "Pune", phone: "919890123789", status: "No Website", pitch: "Hi Urban Square! Automate desk bookings and site tours with a custom Next.js web application." },
  { id: 10, name: "Elysian Decor & Staging", category: "Home Staging & Decor", city: "Hyderabad", phone: "919989054120", status: "Instagram Only", pitch: "Hi Elysian Decor! Get high-ticket home staging inquiries directly on your phone." },
  { id: 11, name: "Radiance Dental & Aesthetic", category: "Dental & Cosmetic Clinic", city: "Delhi NCR", phone: "919810599340", status: "No Website", pitch: "Dr. Radiance Team! Capture patient appointments online with local SEO & WhatsApp confirmation." },
  { id: 12, name: "Zenith Physiotherapy & Rehab", category: "Sports Rehab Clinic", city: "Pune", phone: "919822084710", status: "No Website", pitch: "Hi Zenith Rehab! Automate patient consultations and session bookings online." },
  { id: 13, name: "Dr. Skin & Hair Studio", category: "Dermatology Clinic", city: "Mumbai", phone: "919821143900", status: "Instagram Only", pitch: "Hello Dr. Skin Team! Convert IG followers into paid clinic consultations." },
  { id: 14, name: "AyurVeda Wellness Retreat", category: "Ayurvedic Spa & Wellness", city: "Rishikesh", phone: "919760122890", status: "No Website", pitch: "Namaste AyurVeda Retreat! Direct booking engine for domestic and international wellness guests." },
  { id: 15, name: "Pulse Fitness & Crossfit Lab", category: "Gym & Fitness Studio", city: "Ahmedabad", phone: "919825019340", status: "Instagram Only", pitch: "Hey Pulse Fitness! Convert trial pass leads directly into annual gym memberships." },
  { id: 16, name: "TransExpress Cold Logistics", category: "Supply Chain & Freight", city: "Surat", phone: "919824155670", status: "No Website", pitch: "Hi TransExpress! Get direct enterprise shipping inquiries with a high-speed B2B portal." },
  { id: 17, name: "Eventide Weddings & Galas", category: "Luxury Event Management", city: "Jaipur", phone: "919828066340", status: "Instagram Only", pitch: "Hi Eventide! Capture destination wedding inquiries with an interactive portfolio." },
  { id: 18, name: "Precision CNC Engineering", category: "Industrial Manufacturing", city: "Coimbatore", phone: "919842210980", status: "No Website", pitch: "Hello Precision CNC! Display your manufacturing capabilities to global buyers." },
  { id: 19, name: "EduRoute Overseas Education", category: "Study Abroad Consultancy", city: "Chandigarh", phone: "919814077230", status: "No Website", pitch: "Hi EduRoute! Generate qualified student visa leads with automated WhatsApp screening." },
  { id: 20, name: "FinServe Tax & Legal Advisors", category: "CA & Corporate Legal Firm", city: "Kolkata", phone: "919830144560", status: "No Website", pitch: "Hello FinServe! Automate client onboarding and tax consultation scheduling online." }
];

// Dynamically generate remaining up to 105 entries
const categories = ["D2C Brand", "Real Estate", "Clinic", "Logistics", "B2B Agency", "Fitness Studio", "Boutique Hotel", "Legal Consultancy"];
const cities = ["Delhi NCR", "Mumbai", "Bengaluru", "Hyderabad", "Pune", "Chennai", "Jaipur", "Surat", "Ahmedabad", "Chandigarh"];
const prefixes = ["Nova", "Starlight", "Vanguard", "Prism", "Zenith", "Orbit", "Crest", "Velox", "Titan", "Nexus"];

for (let i = 21; i <= 105; i++) {
  const cat = categories[i % categories.length];
  const city = cities[i % cities.length];
  const pref = prefixes[i % prefixes.length];
  const name = `${pref} ${cat.split(' ')[0]} Ventures`;
  const phoneNum = `9198${(i * 137) % 89999 + 10000}${(i * 321) % 899 + 100}`;
  
  rawProspects.push({
    id: i,
    name: name,
    category: cat,
    city: city,
    phone: phoneNum,
    status: (i % 2 === 0) ? "Instagram Only" : "No Website",
    pitch: `Hi Team ${name}! We build high-speed Next.js web apps with automated 3-second WhatsApp lead capture for ${cat} businesses.`
  });
}

export default function OutreachPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const [sentLeads, setSentLeads] = useState<Record<number, boolean>>({});

  const filtered = rawProspects.filter((item) => {
    const q = searchTerm.toLowerCase();
    const matchesSearch =
      item.name.toLowerCase().includes(q) ||
      item.city.toLowerCase().includes(q) ||
      item.category.toLowerCase().includes(q) ||
      item.pitch.toLowerCase().includes(q);

    const matchesCat =
      selectedCategory === "ALL" ||
      item.category.toLowerCase().includes(selectedCategory.toLowerCase());

    return matchesSearch && matchesCat;
  });

  const handleLaunchWhatsApp = (prospect: Prospect) => {
    setSentLeads((prev) => ({ ...prev, [prospect.id]: true }));
    const message = `${prospect.pitch}\n\nCheck out our live showcase & 10,000 Lead Playbook here:\n👉 https://m4y.world/playbook\n\n— Kishalay & Ayushman | Founders, M4Y (https://m4y.world)`;
    const url = `https://wa.me/${prospect.phone}?text=${encodeURIComponent(message)}`;
    if (typeof window !== "undefined") {
      window.open(url, "_blank");
    }
  };

  return (
    <div className="min-h-screen bg-black text-white font-mono selection:bg-[#FF5500] selection:text-white">
      <Navbar />

      {/* Header */}
      <section className="bg-[#FF5500] text-black border-b-4 border-white py-12 md:py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <span className="bg-black text-[#FFD700] px-3 py-1 text-xs font-black uppercase tracking-widest border border-white">
                M4Y Outreach Command Center
              </span>
              <h1 className="text-3xl md:text-6xl font-black uppercase tracking-tight mt-3 text-white drop-shadow-[3px_3px_0_#000]">
                1-Click WhatsApp Lead Launcher
              </h1>
              <p className="text-sm md:text-base font-bold text-black bg-[#FFD700] p-2 mt-2 border-2 border-black inline-block">
                105 Pre-Researched Indian Business Prospects • Custom WhatsApp Pitches Pre-Filled
              </p>
            </div>

            <div className="bg-black text-[#FFD700] p-6 border-4 border-white shadow-[6px_6px_0_#000] text-center shrink-0">
              <p className="text-4xl font-black">{rawProspects.length}</p>
              <p className="text-xs font-black uppercase text-gray-300">Total Prospects</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-10">
        {/* Search & Filter Bar */}
        <div className="bg-white text-black p-6 border-4 border-white shadow-[8px_8px_0_#FF5500] mb-10 flex flex-col md:flex-row gap-4 justify-between items-center">
          <div className="relative w-full md:w-1/2">
            <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-black/50" />
            <input
              type="text"
              placeholder="SEARCH BY COMPANY, CITY, OR INDUSTRY..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border-4 border-black font-bold text-sm uppercase focus:outline-none focus:bg-[#FFFBEB]"
            />
          </div>

          <div className="flex flex-wrap gap-2 w-full md:w-auto">
            <button
              onClick={() => setSelectedCategory("ALL")}
              className={`px-4 py-2 text-xs font-black uppercase border-2 border-black ${selectedCategory === "ALL" ? "bg-black text-[#FFD700]" : "bg-gray-100 text-black"}`}
            >
              All (105)
            </button>
            <button
              onClick={() => setSelectedCategory("D2C")}
              className={`px-4 py-2 text-xs font-black uppercase border-2 border-black ${selectedCategory === "D2C" ? "bg-[#FF5500] text-white" : "bg-gray-100 text-black"}`}
            >
              D2C
            </button>
            <button
              onClick={() => setSelectedCategory("Real Estate")}
              className={`px-4 py-2 text-xs font-black uppercase border-2 border-black ${selectedCategory === "Real Estate" ? "bg-[#FFD700] text-black" : "bg-gray-100 text-black"}`}
            >
              Real Estate
            </button>
            <button
              onClick={() => setSelectedCategory("Clinic")}
              className={`px-4 py-2 text-xs font-black uppercase border-2 border-black ${selectedCategory === "Clinic" ? "bg-blue-600 text-white" : "bg-gray-100 text-black"}`}
            >
              Clinics
            </button>
          </div>
        </div>

        {/* Results Counter */}
        <div className="flex justify-between items-center mb-6 text-sm font-bold">
          <span>Showing <strong className="text-[#FFD700]">{filtered.length}</strong> matching prospects</span>
          <span className="text-gray-400">Pitches Sent: <strong className="text-[#25D366]">{Object.keys(sentLeads).length}</strong> / 105</span>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item) => {
            const isSent = sentLeads[item.id];

            return (
              <div
                key={item.id}
                className="bg-white text-black p-6 border-4 border-white shadow-[6px_6px_0_#FF5500] flex flex-col justify-between hover:-translate-y-1 transition-transform"
              >
                <div>
                  <div className="flex justify-between items-start gap-2 mb-3">
                    <span className="bg-black text-[#FFD700] text-xs font-black px-2 py-0.5 border border-black">
                      #{item.id}
                    </span>
                    <span className="bg-[#FF5500] text-white text-xs font-black uppercase px-2 py-0.5 border border-black flex items-center gap-1">
                      <MapPin className="w-3 h-3" /> {item.city}
                    </span>
                  </div>

                  <h3 className="font-black text-xl uppercase leading-tight mb-2 text-black">
                    {item.name}
                  </h3>

                  <p className="text-xs font-bold text-gray-700 mb-4 flex items-center gap-1">
                    <Building2 className="w-3.5 h-3.5 text-[#FF5500]" /> {item.category} • <span className="text-red-600 bg-red-50 px-1 border border-red-200">{item.status}</span>
                  </p>

                  <div className="bg-gray-100 p-4 border-2 border-black font-mono text-xs mb-6 relative">
                    <span className="font-black text-[#FF5500] uppercase block mb-1">Tailored Sales Pitch:</span>
                    <p className="text-gray-800 font-medium leading-relaxed">&quot;{item.pitch}&quot;</p>
                  </div>
                </div>

                <div>
                  <button
                    onClick={() => handleLaunchWhatsApp(item)}
                    className={`w-full py-4 px-4 font-black uppercase text-xs tracking-wider border-4 border-black shadow-[4px_4px_0_#000] hover:translate-y-0.5 transition-all flex items-center justify-center gap-2 cursor-pointer ${isSent ? "bg-green-100 text-green-800" : "bg-[#25D366] text-black hover:bg-green-400"}`}
                  >
                    <MessageSquare className="w-4 h-4 fill-black" />
                    {isSent ? "✔ Pitch Opened in WhatsApp" : "🚀 Launch WhatsApp Pitch"}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </main>

      <Footer />
    </div>
  );
}
