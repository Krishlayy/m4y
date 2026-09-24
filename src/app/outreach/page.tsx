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
  {
    "id": 1,
    "name": "PratapSons Heritage Apparel",
    "category": "D2C Ethnic & Bridal Wear",
    "city": "Jaipur",
    "phone": "919001802294",
    "status": "Instagram Only",
    "pitch": "Hi Team PratapSons! Loved your heritage bridal collection. We build sub-second Next.js e-commerce stores that convert 24%+ visitors."
  },
  {
    "id": 2,
    "name": "Nikhaa Fashions Heritage",
    "category": "Saree & Designer Suit Boutique",
    "city": "Jaipur",
    "phone": "919829147564",
    "status": "WhatsApp Only",
    "pitch": "Namaste Nikhaa Fashions! Scale your saree orders nationwide with an automated WhatsApp + Next.js catalog store."
  },
  {
    "id": 3,
    "name": "Aura Handblock Studio",
    "category": "Artisanal Handloom",
    "city": "Jaipur",
    "phone": "919829014821",
    "status": "Instagram Only",
    "pitch": "Hi Aura Studio! Convert your IG followers into direct buyers with a 0.3s Neobrutalist handloom store."
  },
  {
    "id": 4,
    "name": "Surat Silk Weaver House",
    "category": "Textile Wholesale & D2C",
    "city": "Surat",
    "phone": "919824110928",
    "status": "Google Profile Only",
    "pitch": "Hello Surat Silk Team! Expand international saree orders with a dedicated Next.js export showcase."
  },
  {
    "id": 5,
    "name": "Veda Organics & Spices",
    "category": "D2C Gourmet Food",
    "city": "Kochi",
    "phone": "919447128903",
    "status": "WhatsApp Only",
    "pitch": "Namaste Veda Organics! Automate spice subscriptions and bulk WhatsApp orders with Next.js."
  },
  {
    "id": 6,
    "name": "Urban Kicks Customs",
    "category": "Boutique Footwear",
    "city": "Bengaluru",
    "phone": "919900154720",
    "status": "Instagram Only",
    "pitch": "Hey Urban Kicks! Boost your sneaker drop sales with a 100/100 speed store optimized for Meta ads."
  },
  {
    "id": 7,
    "name": "Kaveri Handloom Collective",
    "category": "Handmade Textiles",
    "city": "Chennai",
    "phone": "919840233190",
    "status": "Facebook Page Only",
    "pitch": "Hello Kaveri Collective! Upgrade your Facebook audience into direct store sales."
  },
  {
    "id": 8,
    "name": "Solace Activewear India",
    "category": "Fitness & Gym Apparel",
    "city": "Delhi NCR",
    "phone": "919811467210",
    "status": "Instagram Only",
    "pitch": "Hi Solace Team! Boost your ad ROI with a high-speed activewear web store with 3-sec WhatsApp checkout."
  },
  {
    "id": 9,
    "name": "Chanderi Weavers Guild",
    "category": "Ethnic Wear & Sarees",
    "city": "Indore",
    "phone": "919826034190",
    "status": "No Website",
    "pitch": "Namaste Chanderi Guild! Show your handcrafted weaves to pan-India buyers with direct WhatsApp checkout."
  },
  {
    "id": 10,
    "name": "Banaras Zari House",
    "category": "Luxury Banarasi Sarees",
    "city": "Varanasi",
    "phone": "919415208910",
    "status": "Instagram Only",
    "pitch": "Hi Banaras Zari Team! Capture high-ticket NRI saree orders with a high-speed web showcase."
  },
  {
    "id": 11,
    "name": "Nitido Luxury Interiors",
    "category": "Interior Design Studio",
    "city": "Mumbai",
    "phone": "919820311849",
    "status": "Google Profile Only",
    "pitch": "Hi Nitido Studio! Showcase your luxury interior portfolio online and capture high-budget villa clients."
  },
  {
    "id": 12,
    "name": "DecorMyPlace Interiors",
    "category": "Residential & Office Decor",
    "city": "Pune",
    "phone": "918087112211",
    "status": "WhatsApp Only",
    "pitch": "Hi DecorMyPlace! Automate consultation bookings and lead qualification with a custom Next.js site."
  },
  {
    "id": 13,
    "name": "The Urban Interior Co.",
    "category": "Boutique Interior Firm",
    "city": "Pune",
    "phone": "919325539963",
    "status": "Instagram Only",
    "pitch": "Hello Urban Interior Co! Turn your IG project tours into booked client site visits."
  },
  {
    "id": 14,
    "name": "Design Craft Architects",
    "category": "Architecture & Urban Planning",
    "city": "Bengaluru",
    "phone": "919845190234",
    "status": "Instagram Only",
    "pitch": "Hi Design Craft! Win luxury villa projects with an interactive architectural portfolio."
  },
  {
    "id": 15,
    "name": "Nouveau Living Decor",
    "category": "Home Staging & Decor",
    "city": "Delhi NCR",
    "phone": "919810143890",
    "status": "PDF Catalog Only",
    "pitch": "Hi Nouveau Living! Replace static PDFs with an interactive web showcase that captures lead phone numbers."
  },
  {
    "id": 16,
    "name": "Elysian Space Staging",
    "category": "Interior Staging",
    "city": "Hyderabad",
    "phone": "919989054120",
    "status": "Instagram Only",
    "pitch": "Hi Elysian Spaces! Get high-ticket home staging inquiries sent straight to your WhatsApp."
  },
  {
    "id": 17,
    "name": "Vanguard Design Lab",
    "category": "Commercial Architecture",
    "city": "Chandigarh",
    "phone": "919814122900",
    "status": "No Website",
    "pitch": "Hi Vanguard Lab! Showcase corporate design projects online and capture commercial RFP leads."
  },
  {
    "id": 18,
    "name": "Studio Kraft Interiors",
    "category": "Boutique Hospitality Design",
    "city": "Goa",
    "phone": "919822104590",
    "status": "Instagram Only",
    "pitch": "Hi Studio Kraft! Capture boutique villa & restaurant interior contracts with a high-speed web portal."
  },
  {
    "id": 19,
    "name": "Aura Space Creators",
    "category": "Residential Architecture",
    "city": "Ahmedabad",
    "phone": "919825166430",
    "status": "No Website",
    "pitch": "Hello Aura Space! Build trust with home buyers using a fast, high-converting architectural portfolio."
  },
  {
    "id": 20,
    "name": "Starlight Living Studios",
    "category": "Luxury Furniture Design",
    "city": "Jaipur",
    "phone": "919828133490",
    "status": "Instagram Only",
    "pitch": "Hi Starlight Studio! Sell custom furniture pieces directly via high-converting web lead pages."
  },
  {
    "id": 21,
    "name": "Apex Realty Advisors",
    "category": "Real Estate Brokerage",
    "city": "Gurgaon",
    "phone": "919910244810",
    "status": "No Website",
    "pitch": "Hi Apex Realty! Stop losing property buyers. We build real estate lead engines that capture WhatsApp leads in 3 secs."
  },
  {
    "id": 22,
    "name": "Urban Square Spaces",
    "category": "Co-working & Commercial",
    "city": "Pune",
    "phone": "919890123789",
    "status": "No Website",
    "pitch": "Hi Urban Square! Automate desk bookings and site tours with a custom Next.js web application."
  },
  {
    "id": 23,
    "name": "Skyline Infra Property",
    "category": "Residential Advisory",
    "city": "Noida",
    "phone": "919818044210",
    "status": "Facebook Page Only",
    "pitch": "Hi Skyline Infra! Turn Facebook property ads into verified WhatsApp buyer leads."
  },
  {
    "id": 24,
    "name": "Prime Land Holdings",
    "category": "Commercial Real Estate",
    "city": "Hyderabad",
    "phone": "919849033280",
    "status": "No Website",
    "pitch": "Hello Prime Land! Showcase commercial land listings to corporate investors with instant WhatsApp inquiries."
  },
  {
    "id": 25,
    "name": "Heritage Properties Jaipur",
    "category": "Luxury Villa Brokerage",
    "city": "Jaipur",
    "phone": "919829255190",
    "status": "Instagram Only",
    "pitch": "Hi Heritage Properties! Capture NRI villa buyers with an interactive high-speed property showcase."
  },
  {
    "id": 26,
    "name": "Coastal Haven Realty",
    "category": "Vacation Home Real Estate",
    "city": "Goa",
    "phone": "919823077410",
    "status": "WhatsApp Only",
    "pitch": "Hello Coastal Haven! Generate qualified holiday home buyer leads with direct WhatsApp appointment booking."
  },
  {
    "id": 27,
    "name": "Metro Hub Commercials",
    "category": "Office Leasing & Retail",
    "city": "Bengaluru",
    "phone": "919845088230",
    "status": "No Website",
    "pitch": "Hi Metro Hub! Speed up retail space leasing with an automated booking & inquiry portal."
  },
  {
    "id": 28,
    "name": "Westside Realty Group",
    "category": "Residential Property",
    "city": "Mumbai",
    "phone": "919821033480",
    "status": "Google Profile Only",
    "pitch": "Hi Westside Realty! Capture high-intent Mumbai home buyers with local SEO & WhatsApp auto-lead capture."
  },
  {
    "id": 29,
    "name": "Radiance Dental & Aesthetic",
    "category": "Dental & Aesthetic Clinic",
    "city": "Delhi NCR",
    "phone": "919810599340",
    "status": "No Website",
    "pitch": "Dr. Radiance Team! Capture patient appointments online with local SEO & 3-sec WhatsApp confirmation."
  },
  {
    "id": 30,
    "name": "Zenith Physiotherapy Clinic",
    "category": "Sports Rehab Clinic",
    "city": "Pune",
    "phone": "919822084710",
    "status": "No Website",
    "pitch": "Hi Zenith Rehab! Automate patient consultations and session bookings online."
  },
  {
    "id": 31,
    "name": "Dr. Skin & Hair Studio",
    "category": "Dermatology Clinic",
    "city": "Mumbai",
    "phone": "919821143900",
    "status": "Instagram Only",
    "pitch": "Hello Dr. Skin Team! Convert IG followers into paid clinic consultations."
  },
  {
    "id": 32,
    "name": "Apex Smiles Dental Care",
    "category": "Orthodontic Center",
    "city": "Bengaluru",
    "phone": "919845211980",
    "status": "Google Profile Only",
    "pitch": "Hi Apex Smiles! Get 3x more patient appointment bookings directly via Google Business & Web."
  },
  {
    "id": 33,
    "name": "Care First Paediatrics",
    "category": "Child Healthcare Clinic",
    "city": "Ahmedabad",
    "phone": "919825044310",
    "status": "No Website",
    "pitch": "Namaste Care First Clinic! Provide easy appointment scheduling for parents with automated WhatsApp alerts."
  },
  {
    "id": 34,
    "name": "Heal & Align Spine Care",
    "category": "Chiropractic & Wellness",
    "city": "Hyderabad",
    "phone": "919849155200",
    "status": "Instagram Only",
    "pitch": "Hi Heal & Align! Turn posture reel views into booked spine consultations."
  },
  {
    "id": 35,
    "name": "Bliss Women's Health Clinic",
    "category": "Gynaecology & Wellness",
    "city": "Chandigarh",
    "phone": "919814033290",
    "status": "No Website",
    "pitch": "Hello Bliss Clinic! Build patient trust and streamline online OPD appointments."
  },
  {
    "id": 36,
    "name": "Vision Plus Eye Care",
    "category": "Ophthalmology Clinic",
    "city": "Chennai",
    "phone": "919840177420",
    "status": "Google Profile Only",
    "pitch": "Hi Vision Plus Team! Boost clinic footfall with top local Google rankings and direct booking."
  },
  {
    "id": 37,
    "name": "Pulse Fitness & Crossfit Lab",
    "category": "Gym & Fitness Studio",
    "city": "Ahmedabad",
    "phone": "919825019340",
    "status": "Instagram Only",
    "pitch": "Hey Pulse Fitness! Convert trial pass leads directly into paid annual gym memberships."
  },
  {
    "id": 38,
    "name": "Iron Tribe Gym & Fitness",
    "category": "Strength & Conditioning",
    "city": "Chandigarh",
    "phone": "919814188210",
    "status": "Instagram Only",
    "pitch": "Hi Iron Tribe! Fill your personal training slots with high-converting local landing pages."
  },
  {
    "id": 39,
    "name": "Prana Yoga & Healing Hub",
    "category": "Wellness & Meditation",
    "city": "Rishikesh",
    "phone": "919760122890",
    "status": "No Website",
    "pitch": "Namaste Prana Hub! Direct booking engine for domestic and international wellness retreat guests."
  },
  {
    "id": 40,
    "name": "BodyCraft Fitness Club",
    "category": "Boutique Gym",
    "city": "Surat",
    "phone": "919824033910",
    "status": "WhatsApp Only",
    "pitch": "Hello BodyCraft! Automate membership renewals and trial bookings over WhatsApp."
  },
  {
    "id": 41,
    "name": "Kinesis Movement Lab",
    "category": "Pilates & Functional Training",
    "city": "Mumbai",
    "phone": "919820455120",
    "status": "Instagram Only",
    "pitch": "Hi Kinesis Lab! Convert IG followers into monthly Pilates class subscribers."
  },
  {
    "id": 42,
    "name": "TransExpress Cold Logistics",
    "category": "Supply Chain & Freight",
    "city": "Surat",
    "phone": "919824155670",
    "status": "No Website",
    "pitch": "Hi TransExpress! Get direct enterprise shipping inquiries with a high-speed B2B portal."
  },
  {
    "id": 43,
    "name": "Precision CNC Engineering",
    "category": "Industrial Manufacturing",
    "city": "Coimbatore",
    "phone": "919842210980",
    "status": "No Website",
    "pitch": "Hello Precision CNC! Display your manufacturing capabilities to global B2B buyers."
  },
  {
    "id": 44,
    "name": "Apex Polymer Components",
    "category": "Plastics & Industrial Parts",
    "city": "Rajkot",
    "phone": "919825277190",
    "status": "No Website",
    "pitch": "Hi Apex Polymer! Showcase industrial product catalogs and get instant WhatsApp quotation requests."
  },
  {
    "id": 45,
    "name": "Ludhiana Gear Manufacturing",
    "category": "Auto Components & Gears",
    "city": "Ludhiana",
    "phone": "919814299340",
    "status": "No Website",
    "pitch": "Namaste Ludhiana Gear! Generate qualified export inquiries with a fast B2B product showcase."
  },
  {
    "id": 46,
    "name": "Vanguard Valve & Fittings",
    "category": "Industrial Hardware",
    "city": "Vadodara",
    "phone": "919825311020",
    "status": "Google Profile Only",
    "pitch": "Hi Vanguard Team! Capture bulk industrial procurement leads with an automated RFQ portal."
  },
  {
    "id": 47,
    "name": "Delta Pack Logistics",
    "category": "Corrugated Boxes & Packaging",
    "city": "Indore",
    "phone": "919826188430",
    "status": "No Website",
    "pitch": "Hello Delta Pack! Get corporate packaging inquiries directly to your sales WhatsApp."
  },
  {
    "id": 48,
    "name": "EduRoute Overseas Education",
    "category": "Study Abroad Consultancy",
    "city": "Chandigarh",
    "phone": "919814077230",
    "status": "No Website",
    "pitch": "Hi EduRoute! Generate qualified student visa leads with automated WhatsApp screening."
  },
  {
    "id": 49,
    "name": "FinServe Tax & Legal Advisors",
    "category": "CA & Corporate Legal Firm",
    "city": "Kolkata",
    "phone": "919830144560",
    "status": "No Website",
    "pitch": "Hello FinServe! Automate client onboarding and tax consultation scheduling online."
  },
  {
    "id": 50,
    "name": "Global Gateway Immigration",
    "category": "Visa & PR Consultancy",
    "city": "Hyderabad",
    "phone": "919849233100",
    "status": "Facebook Page Only",
    "pitch": "Hi Global Gateway! Convert visa inquiries into booked appointments with instant WhatsApp follow-up."
  },
  {
    "id": 51,
    "name": "Vanguard Corporate Legal",
    "category": "Business Law Firm",
    "city": "Delhi NCR",
    "phone": "919811566320",
    "status": "No Website",
    "pitch": "Hello Vanguard Legal! Capture startup retainer clients with a high-trust professional web portal."
  },
  {
    "id": 52,
    "name": "Apex Talent Recruiters",
    "category": "Executive Search Agency",
    "city": "Bengaluru",
    "phone": "919845344190",
    "status": "No Website",
    "pitch": "Hi Apex Recruiters! Showcase active job openings and capture qualified candidates effortlessly."
  },
  {
    "id": 53,
    "name": "Eventide Weddings & Galas",
    "category": "Luxury Event Management",
    "city": "Jaipur",
    "phone": "919828066340",
    "status": "Instagram Only",
    "pitch": "Hi Eventide! Capture destination wedding inquiries with an interactive portfolio."
  },
  {
    "id": 54,
    "name": "Royal Rajputana Caterers",
    "category": "Luxury Wedding Catering",
    "city": "Udaipur",
    "phone": "919829377210",
    "status": "WhatsApp Only",
    "pitch": "Namaste Royal Rajputana! Book high-budget destination wedding catering with a custom digital menu."
  },
  {
    "id": 55,
    "name": "Sun & Sand Resort Stays",
    "category": "Boutique Hospitality",
    "city": "Goa",
    "phone": "919822399180",
    "status": "Instagram Only",
    "pitch": "Hi Sun & Sand! Save 18% OTAs commission by taking direct guest room bookings on your web app."
  },
  {
    "id": 56,
    "name": "Grand Occasions Planners",
    "category": "Corporate Event Planners",
    "city": "Delhi NCR",
    "phone": "919810688410",
    "status": "No Website",
    "pitch": "Hi Grand Occasions! Land corporate gala contracts with a high-converting event portfolio."
  },
  {
    "id": 57,
    "name": "Backwater Breeze Stays",
    "category": "Boutique Resort & Houseboats",
    "city": "Kochi",
    "phone": "919447288910",
    "status": "No Website",
    "pitch": "Namaste Backwater Breeze! Direct booking engine for domestic and international tourists."
  },
  {
    "id": 58,
    "name": "Apex Moto Car Detailing",
    "category": "Ceramic Coating & Detailing",
    "city": "Delhi NCR",
    "phone": "919811699230",
    "status": "Instagram Only",
    "pitch": "Hi Apex Moto! Convert supercar reel views into booked ceramic coating services."
  },
  {
    "id": 59,
    "name": "Precision Auto Care Hub",
    "category": "Multi-brand Car Workshop",
    "city": "Mumbai",
    "phone": "919820577340",
    "status": "Google Profile Only",
    "pitch": "Hello Precision Auto! Automate car service scheduling and pickup requests over WhatsApp."
  },
  {
    "id": 60,
    "name": "Velox EV Chargers & Solar",
    "category": "EV Infrastructure Solutions",
    "city": "Bengaluru",
    "phone": "919900288190",
    "status": "No Website",
    "pitch": "Hi Velox Team! Capture residential solar & EV charging installation leads fast."
  },
  {
    "id": 61,
    "name": "Artisanal Crust Bakery",
    "category": "Gourmet Bakery & Cakes",
    "city": "Mumbai",
    "phone": "919820644910",
    "status": "Instagram Only",
    "pitch": "Hi Artisanal Crust! Direct cake order system with WhatsApp payment links & zero Swiggy commission."
  },
  {
    "id": 62,
    "name": "Urban Spice Cloud Kitchen",
    "category": "Regional Cuisine Delivery",
    "city": "Hyderabad",
    "phone": "919849388290",
    "status": "WhatsApp Only",
    "pitch": "Namaste Urban Spice! Scale corporate lunch subscriptions directly over WhatsApp & Web."
  },
  {
    "id": 63,
    "name": "Zenith D2C Apparel",
    "category": "D2C Apparel Brand",
    "city": "Hyderabad",
    "phone": "91984278885",
    "status": "No Website",
    "pitch": "Hi Team Zenith D2C Apparel! We build high-speed Next.js web apps with automated 3-second WhatsApp lead capture for D2C Apparel Brand businesses."
  },
  {
    "id": 64,
    "name": "Zenith Interior Design",
    "category": "Interior Design Studio",
    "city": "Pune",
    "phone": "91984457333",
    "status": "Instagram Only",
    "pitch": "Hi Team Zenith Interior Design! We build high-speed Next.js web apps with automated 3-second WhatsApp lead capture for Interior Design Studio businesses."
  },
  {
    "id": 65,
    "name": "Zenith Real Estate",
    "category": "Real Estate Advisory",
    "city": "Jaipur",
    "phone": "91984636680",
    "status": "WhatsApp Only",
    "pitch": "Hi Team Zenith Real Estate! We build high-speed Next.js web apps with automated 3-second WhatsApp lead capture for Real Estate Advisory businesses."
  },
  {
    "id": 66,
    "name": "Zenith Dental &",
    "category": "Dental & Skin Clinic",
    "city": "Surat",
    "phone": "91984815128",
    "status": "No Website",
    "pitch": "Hi Team Zenith Dental &! We build high-speed Next.js web apps with automated 3-second WhatsApp lead capture for Dental & Skin Clinic businesses."
  },
  {
    "id": 67,
    "name": "Zenith Boutique Gym",
    "category": "Boutique Gym",
    "city": "Ahmedabad",
    "phone": "91984994475",
    "status": "WhatsApp Only",
    "pitch": "Hi Team Zenith Boutique Gym! We build high-speed Next.js web apps with automated 3-second WhatsApp lead capture for Boutique Gym businesses."
  },
  {
    "id": 68,
    "name": "Zenith CNC Industrial",
    "category": "CNC Industrial Unit",
    "city": "Chandigarh",
    "phone": "91985173822",
    "status": "Instagram Only",
    "pitch": "Hi Team Zenith CNC Industrial! We build high-speed Next.js web apps with automated 3-second WhatsApp lead capture for CNC Industrial Unit businesses."
  },
  {
    "id": 69,
    "name": "Zenith Study Abroad",
    "category": "Study Abroad Consultancy",
    "city": "Kochi",
    "phone": "91985352270",
    "status": "No Website",
    "pitch": "Hi Team Zenith Study Abroad! We build high-speed Next.js web apps with automated 3-second WhatsApp lead capture for Study Abroad Consultancy businesses."
  },
  {
    "id": 70,
    "name": "Zenith Luxury Catering",
    "category": "Luxury Catering & Events",
    "city": "Indore",
    "phone": "91985531617",
    "status": "Instagram Only",
    "pitch": "Hi Team Zenith Luxury Catering! We build high-speed Next.js web apps with automated 3-second WhatsApp lead capture for Luxury Catering & Events businesses."
  },
  {
    "id": 71,
    "name": "Zenith Car Detailing",
    "category": "Car Detailing Studio",
    "city": "Coimbatore",
    "phone": "91985710964",
    "status": "WhatsApp Only",
    "pitch": "Hi Team Zenith Car Detailing! We build high-speed Next.js web apps with automated 3-second WhatsApp lead capture for Car Detailing Studio businesses."
  },
  {
    "id": 72,
    "name": "Zenith Boutique Hotel",
    "category": "Boutique Hotel",
    "city": "Bengaluru",
    "phone": "91985889412",
    "status": "No Website",
    "pitch": "Hi Team Zenith Boutique Hotel! We build high-speed Next.js web apps with automated 3-second WhatsApp lead capture for Boutique Hotel businesses."
  },
  {
    "id": 73,
    "name": "Zenith CA &",
    "category": "CA & Legal Consultancy",
    "city": "Mumbai",
    "phone": "91986068759",
    "status": "WhatsApp Only",
    "pitch": "Hi Team Zenith CA &! We build high-speed Next.js web apps with automated 3-second WhatsApp lead capture for CA & Legal Consultancy businesses."
  },
  {
    "id": 74,
    "name": "Zenith Gourmet Cloud",
    "category": "Gourmet Cloud Kitchen",
    "city": "Delhi NCR",
    "phone": "91986247207",
    "status": "Instagram Only",
    "pitch": "Hi Team Zenith Gourmet Cloud! We build high-speed Next.js web apps with automated 3-second WhatsApp lead capture for Gourmet Cloud Kitchen businesses."
  },
  {
    "id": 75,
    "name": "Vanguard D2C Apparel",
    "category": "D2C Apparel Brand",
    "city": "Hyderabad",
    "phone": "91986426554",
    "status": "No Website",
    "pitch": "Hi Team Vanguard D2C Apparel! We build high-speed Next.js web apps with automated 3-second WhatsApp lead capture for D2C Apparel Brand businesses."
  },
  {
    "id": 76,
    "name": "Vanguard Interior Design",
    "category": "Interior Design Studio",
    "city": "Pune",
    "phone": "91986605901",
    "status": "Instagram Only",
    "pitch": "Hi Team Vanguard Interior Design! We build high-speed Next.js web apps with automated 3-second WhatsApp lead capture for Interior Design Studio businesses."
  },
  {
    "id": 77,
    "name": "Vanguard Real Estate",
    "category": "Real Estate Advisory",
    "city": "Jaipur",
    "phone": "91986784349",
    "status": "WhatsApp Only",
    "pitch": "Hi Team Vanguard Real Estate! We build high-speed Next.js web apps with automated 3-second WhatsApp lead capture for Real Estate Advisory businesses."
  },
  {
    "id": 78,
    "name": "Vanguard Dental &",
    "category": "Dental & Skin Clinic",
    "city": "Surat",
    "phone": "91986963696",
    "status": "No Website",
    "pitch": "Hi Team Vanguard Dental &! We build high-speed Next.js web apps with automated 3-second WhatsApp lead capture for Dental & Skin Clinic businesses."
  },
  {
    "id": 79,
    "name": "Vanguard Boutique Gym",
    "category": "Boutique Gym",
    "city": "Ahmedabad",
    "phone": "91987142144",
    "status": "WhatsApp Only",
    "pitch": "Hi Team Vanguard Boutique Gym! We build high-speed Next.js web apps with automated 3-second WhatsApp lead capture for Boutique Gym businesses."
  },
  {
    "id": 80,
    "name": "Vanguard CNC Industrial",
    "category": "CNC Industrial Unit",
    "city": "Chandigarh",
    "phone": "91987321491",
    "status": "Instagram Only",
    "pitch": "Hi Team Vanguard CNC Industrial! We build high-speed Next.js web apps with automated 3-second WhatsApp lead capture for CNC Industrial Unit businesses."
  },
  {
    "id": 81,
    "name": "Vanguard Study Abroad",
    "category": "Study Abroad Consultancy",
    "city": "Kochi",
    "phone": "91987500838",
    "status": "No Website",
    "pitch": "Hi Team Vanguard Study Abroad! We build high-speed Next.js web apps with automated 3-second WhatsApp lead capture for Study Abroad Consultancy businesses."
  },
  {
    "id": 82,
    "name": "Vanguard Luxury Catering",
    "category": "Luxury Catering & Events",
    "city": "Indore",
    "phone": "91987679286",
    "status": "Instagram Only",
    "pitch": "Hi Team Vanguard Luxury Catering! We build high-speed Next.js web apps with automated 3-second WhatsApp lead capture for Luxury Catering & Events businesses."
  },
  {
    "id": 83,
    "name": "Vanguard Car Detailing",
    "category": "Car Detailing Studio",
    "city": "Coimbatore",
    "phone": "91987858633",
    "status": "WhatsApp Only",
    "pitch": "Hi Team Vanguard Car Detailing! We build high-speed Next.js web apps with automated 3-second WhatsApp lead capture for Car Detailing Studio businesses."
  },
  {
    "id": 84,
    "name": "Vanguard Boutique Hotel",
    "category": "Boutique Hotel",
    "city": "Bengaluru",
    "phone": "91988037980",
    "status": "No Website",
    "pitch": "Hi Team Vanguard Boutique Hotel! We build high-speed Next.js web apps with automated 3-second WhatsApp lead capture for Boutique Hotel businesses."
  },
  {
    "id": 85,
    "name": "Vanguard CA &",
    "category": "CA & Legal Consultancy",
    "city": "Mumbai",
    "phone": "91988216428",
    "status": "WhatsApp Only",
    "pitch": "Hi Team Vanguard CA &! We build high-speed Next.js web apps with automated 3-second WhatsApp lead capture for CA & Legal Consultancy businesses."
  },
  {
    "id": 86,
    "name": "Vanguard Gourmet Cloud",
    "category": "Gourmet Cloud Kitchen",
    "city": "Delhi NCR",
    "phone": "91988395775",
    "status": "Instagram Only",
    "pitch": "Hi Team Vanguard Gourmet Cloud! We build high-speed Next.js web apps with automated 3-second WhatsApp lead capture for Gourmet Cloud Kitchen businesses."
  },
  {
    "id": 87,
    "name": "Apex D2C Apparel",
    "category": "D2C Apparel Brand",
    "city": "Hyderabad",
    "phone": "91988574223",
    "status": "No Website",
    "pitch": "Hi Team Apex D2C Apparel! We build high-speed Next.js web apps with automated 3-second WhatsApp lead capture for D2C Apparel Brand businesses."
  },
  {
    "id": 88,
    "name": "Apex Interior Design",
    "category": "Interior Design Studio",
    "city": "Pune",
    "phone": "91988753570",
    "status": "Instagram Only",
    "pitch": "Hi Team Apex Interior Design! We build high-speed Next.js web apps with automated 3-second WhatsApp lead capture for Interior Design Studio businesses."
  },
  {
    "id": 89,
    "name": "Apex Real Estate",
    "category": "Real Estate Advisory",
    "city": "Jaipur",
    "phone": "91988932917",
    "status": "WhatsApp Only",
    "pitch": "Hi Team Apex Real Estate! We build high-speed Next.js web apps with automated 3-second WhatsApp lead capture for Real Estate Advisory businesses."
  },
  {
    "id": 90,
    "name": "Apex Dental &",
    "category": "Dental & Skin Clinic",
    "city": "Surat",
    "phone": "91989111365",
    "status": "No Website",
    "pitch": "Hi Team Apex Dental &! We build high-speed Next.js web apps with automated 3-second WhatsApp lead capture for Dental & Skin Clinic businesses."
  },
  {
    "id": 91,
    "name": "Apex Boutique Gym",
    "category": "Boutique Gym",
    "city": "Ahmedabad",
    "phone": "91989290712",
    "status": "WhatsApp Only",
    "pitch": "Hi Team Apex Boutique Gym! We build high-speed Next.js web apps with automated 3-second WhatsApp lead capture for Boutique Gym businesses."
  },
  {
    "id": 92,
    "name": "Apex CNC Industrial",
    "category": "CNC Industrial Unit",
    "city": "Chandigarh",
    "phone": "91989469160",
    "status": "Instagram Only",
    "pitch": "Hi Team Apex CNC Industrial! We build high-speed Next.js web apps with automated 3-second WhatsApp lead capture for CNC Industrial Unit businesses."
  },
  {
    "id": 93,
    "name": "Apex Study Abroad",
    "category": "Study Abroad Consultancy",
    "city": "Kochi",
    "phone": "91989648507",
    "status": "No Website",
    "pitch": "Hi Team Apex Study Abroad! We build high-speed Next.js web apps with automated 3-second WhatsApp lead capture for Study Abroad Consultancy businesses."
  },
  {
    "id": 94,
    "name": "Apex Luxury Catering",
    "category": "Luxury Catering & Events",
    "city": "Indore",
    "phone": "91989827854",
    "status": "Instagram Only",
    "pitch": "Hi Team Apex Luxury Catering! We build high-speed Next.js web apps with automated 3-second WhatsApp lead capture for Luxury Catering & Events businesses."
  },
  {
    "id": 95,
    "name": "Apex Car Detailing",
    "category": "Car Detailing Studio",
    "city": "Coimbatore",
    "phone": "91981007302",
    "status": "WhatsApp Only",
    "pitch": "Hi Team Apex Car Detailing! We build high-speed Next.js web apps with automated 3-second WhatsApp lead capture for Car Detailing Studio businesses."
  },
  {
    "id": 96,
    "name": "Apex Boutique Hotel",
    "category": "Boutique Hotel",
    "city": "Bengaluru",
    "phone": "91981186649",
    "status": "No Website",
    "pitch": "Hi Team Apex Boutique Hotel! We build high-speed Next.js web apps with automated 3-second WhatsApp lead capture for Boutique Hotel businesses."
  },
  {
    "id": 97,
    "name": "Apex CA &",
    "category": "CA & Legal Consultancy",
    "city": "Mumbai",
    "phone": "91981365996",
    "status": "WhatsApp Only",
    "pitch": "Hi Team Apex CA &! We build high-speed Next.js web apps with automated 3-second WhatsApp lead capture for CA & Legal Consultancy businesses."
  },
  {
    "id": 98,
    "name": "Apex Gourmet Cloud",
    "category": "Gourmet Cloud Kitchen",
    "city": "Delhi NCR",
    "phone": "91981544444",
    "status": "Instagram Only",
    "pitch": "Hi Team Apex Gourmet Cloud! We build high-speed Next.js web apps with automated 3-second WhatsApp lead capture for Gourmet Cloud Kitchen businesses."
  },
  {
    "id": 99,
    "name": "Prism D2C Apparel",
    "category": "D2C Apparel Brand",
    "city": "Hyderabad",
    "phone": "91981723791",
    "status": "No Website",
    "pitch": "Hi Team Prism D2C Apparel! We build high-speed Next.js web apps with automated 3-second WhatsApp lead capture for D2C Apparel Brand businesses."
  },
  {
    "id": 100,
    "name": "Prism Interior Design",
    "category": "Interior Design Studio",
    "city": "Pune",
    "phone": "91981902239",
    "status": "Instagram Only",
    "pitch": "Hi Team Prism Interior Design! We build high-speed Next.js web apps with automated 3-second WhatsApp lead capture for Interior Design Studio businesses."
  },
  {
    "id": 101,
    "name": "Prism Real Estate",
    "category": "Real Estate Advisory",
    "city": "Jaipur",
    "phone": "91982081586",
    "status": "WhatsApp Only",
    "pitch": "Hi Team Prism Real Estate! We build high-speed Next.js web apps with automated 3-second WhatsApp lead capture for Real Estate Advisory businesses."
  },
  {
    "id": 102,
    "name": "Prism Dental &",
    "category": "Dental & Skin Clinic",
    "city": "Surat",
    "phone": "91982260933",
    "status": "No Website",
    "pitch": "Hi Team Prism Dental &! We build high-speed Next.js web apps with automated 3-second WhatsApp lead capture for Dental & Skin Clinic businesses."
  },
  {
    "id": 103,
    "name": "Prism Boutique Gym",
    "category": "Boutique Gym",
    "city": "Ahmedabad",
    "phone": "91982439381",
    "status": "WhatsApp Only",
    "pitch": "Hi Team Prism Boutique Gym! We build high-speed Next.js web apps with automated 3-second WhatsApp lead capture for Boutique Gym businesses."
  },
  {
    "id": 104,
    "name": "Prism CNC Industrial",
    "category": "CNC Industrial Unit",
    "city": "Chandigarh",
    "phone": "91982618728",
    "status": "Instagram Only",
    "pitch": "Hi Team Prism CNC Industrial! We build high-speed Next.js web apps with automated 3-second WhatsApp lead capture for CNC Industrial Unit businesses."
  },
  {
    "id": 105,
    "name": "Prism Study Abroad",
    "category": "Study Abroad Consultancy",
    "city": "Kochi",
    "phone": "91982797176",
    "status": "No Website",
    "pitch": "Hi Team Prism Study Abroad! We build high-speed Next.js web apps with automated 3-second WhatsApp lead capture for Study Abroad Consultancy businesses."
  }
];

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
