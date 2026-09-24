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
    "name": "The Thrift Hive India",
    "category": "Instagram Thrift & Y2K Fashion",
    "city": "Delhi NCR",
    "phone": "919811092831",
    "status": "Instagram DM Only",
    "pitch": "Hey The Thrift Hive India! 🔥 Your vintage fashion drops are insane! Turn your IG Story views into instant paid orders without answering 'is this available?' 50 times in DMs. Want to see a 30-sec live demo? 🚀"
  },
  {
    "id": 2,
    "name": "Vintage Thread Co.",
    "category": "Curated Retro & Oversized Wear",
    "city": "Shillong",
    "phone": "919863041920",
    "status": "IG Stories Drop Only",
    "pitch": "Hi Vintage Thread Co.! 🌿 Automate your Sunday thrift drops! We build 0.3s lightning-fast checkout stores linked right in your IG bio so your followers can buy in 1 click. Zero monthly fees! ⚡"
  },
  {
    "id": 3,
    "name": "Reloved Closet India",
    "category": "Preloved & Sustainable Fashion",
    "city": "Bengaluru",
    "phone": "919900218940",
    "status": "Instagram DM Only",
    "pitch": "Hey Reloved Closet India team! ✨ Loved your latest thrift drop on IG. Tired of losing buyers in crowded DMs when drops go viral? We build sub-second Neobrutalist drop stores that let buyers lock items in 3 secs via WhatsApp! 🛍️"
  },
  {
    "id": 4,
    "name": "RetroDrip Thrift Store",
    "category": "Streetwear & Graphic Tees",
    "city": "Mumbai",
    "phone": "919820147820",
    "status": "WhatsApp Orders Only",
    "pitch": "Hey RetroDrip Thrift Store! 🔥 Your vintage fashion drops are insane! Turn your IG Story views into instant paid orders without answering 'is this available?' 50 times in DMs. Want to see a 30-sec live demo? 🚀"
  },
  {
    "id": 5,
    "name": "Aesthetic Archive Thrift",
    "category": "Corsets & Vintage Dresses",
    "city": "Pune",
    "phone": "919822391040",
    "status": "Instagram DM Only",
    "pitch": "Hi Aesthetic Archive Thrift! 🌿 Automate your Sunday thrift drops! We build 0.3s lightning-fast checkout stores linked right in your IG bio so your followers can buy in 1 click. Zero monthly fees! ⚡"
  },
  {
    "id": 6,
    "name": "Clay & Bloom Studio",
    "category": "Polymer Clay Earrings & Jewelry",
    "city": "Jaipur",
    "phone": "919829055410",
    "status": "IG Bio Linktree Only",
    "pitch": "Hey Clay & Bloom Studio! 🌸 Your handcrafted jewelry collection is stunning! Stop spending hours replying 'price please' in comments. Get a 0.3s aesthetic web catalog with instant WhatsApp orders! 💎"
  },
  {
    "id": 7,
    "name": "Charm Craft Studio",
    "category": "Custom Wire Wrap & Pearl Jewelry",
    "city": "Chandigarh",
    "phone": "919814210980",
    "status": "Instagram DM Only",
    "pitch": "Hi Charm Craft Studio Team! ✨ Convert your aesthetic jewelry reel views into direct website sales. We build 100/100 speed stores that showcase your pieces beautifully with 1-click UPI checkout! 💍"
  },
  {
    "id": 8,
    "name": "Silver Aura Crafts",
    "category": "Oxidized Silver & Boho Jewelry",
    "city": "Ahmedabad",
    "phone": "919825190820",
    "status": "WhatsApp Orders Only",
    "pitch": "Namaste Silver Aura Crafts! 💖 Build brand trust and take direct jewelry orders nationwide with a custom Neobrutalist catalog linked in your bio. Zero marketplace commission! 🚀"
  },
  {
    "id": 9,
    "name": "Bead & Thread Jewelry",
    "category": "Beaded Chokers & Aesthetic Rings",
    "city": "Kochi",
    "phone": "919447389100",
    "status": "Instagram DM Only",
    "pitch": "Hey Bead & Thread Jewelry! 🌸 Your handcrafted jewelry collection is stunning! Stop spending hours replying 'price please' in comments. Get a 0.3s aesthetic web catalog with instant WhatsApp orders! 💎"
  },
  {
    "id": 10,
    "name": "Golden Petal Trinkets",
    "category": "Handmade Floral & Resin Jewelry",
    "city": "Guwahati",
    "phone": "919864019280",
    "status": "Instagram DM Only",
    "pitch": "Hi Golden Petal Trinkets Team! ✨ Convert your aesthetic jewelry reel views into direct website sales. We build 100/100 speed stores that showcase your pieces beautifully with 1-click UPI checkout! 💍"
  },
  {
    "id": 11,
    "name": "Bento Bites Bakery",
    "category": "Korean Bento Cakes & Custom Desserts",
    "city": "Delhi NCR",
    "phone": "919810844910",
    "status": "Instagram DM Only",
    "pitch": "Hi Bento Bites Bakery Team! 🧁 Turn your delicious reel views into instant party cake bookings with an interactive order builder that sends receipts straight to your WhatsApp! 🎉"
  },
  {
    "id": 12,
    "name": "NYC Cookie Lab",
    "category": "Gourmet Chunky NYC Cookies",
    "city": "Mumbai",
    "phone": "919820719280",
    "status": "WhatsApp Orders Only",
    "pitch": "Namaste NYC Cookie Lab! 🎂 Your custom cake & dessert creations look incredible! Stop handling complex cake orders over messy DM threads. We build instant cake booking pages with automated WhatsApp receipts! 🍰"
  },
  {
    "id": 13,
    "name": "The Sugar Bloom Kitchen",
    "category": "Artisanal Cupcakes & Pastries",
    "city": "Bengaluru",
    "phone": "919845391020",
    "status": "IG Bio Linktree Only",
    "pitch": "Hi The Sugar Bloom Kitchen! 🌿 Convert your Instagram Reel views into instant paid orders without manual DM back-and-forth. Want to check out our free live preview? ⚡"
  },
  {
    "id": 14,
    "name": "Sourdough & Co. Home Bakery",
    "category": "Artisanal Sourdough & Breads",
    "city": "Pune",
    "phone": "919890481920",
    "status": "WhatsApp Orders Only",
    "pitch": "Hi Sourdough & Co. Home Bakery Team! 🧁 Turn your delicious reel views into instant party cake bookings with an interactive order builder that sends receipts straight to your WhatsApp! 🎉"
  },
  {
    "id": 15,
    "name": "Velvet Crumb Patisserie",
    "category": "Custom Birthday & Wedding Cakes",
    "city": "Hyderabad",
    "phone": "919849410920",
    "status": "Instagram DM Only",
    "pitch": "Namaste Velvet Crumb Patisserie! 🎂 Your custom cake & dessert creations look incredible! Stop handling complex cake orders over messy DM threads. We build instant cake booking pages with automated WhatsApp receipts! 🍰"
  },
  {
    "id": 16,
    "name": "Soulful Candles Co.",
    "category": "Scented Soy Wax & Bubble Candles",
    "city": "Chandigarh",
    "phone": "919814391080",
    "status": "Instagram DM Only",
    "pitch": "Namaste Soulful Candles Co.! 🌿 Scale your candle gift hamper sales nationwide! We build sub-second Neobrutalist catalog pages with instant 1-click WhatsApp order confirmation. 📦"
  },
  {
    "id": 17,
    "name": "Aroma Therapy Studio",
    "category": "Handpoured Wax Melts & Diffusers",
    "city": "Dehradun",
    "phone": "919760219840",
    "status": "WhatsApp Orders Only",
    "pitch": "Hi Aroma Therapy Studio Team! 🕯️ Showcase your jar candles & wax melts on a clean, high-converting shop page that captures customer contacts & payments automatically! 🚀"
  },
  {
    "id": 18,
    "name": "Concrete & Flame Studio",
    "category": "Concrete Jar Candles & Home Decor",
    "city": "Jaipur",
    "phone": "919829188430",
    "status": "IG Bio Linktree Only",
    "pitch": "Hey Concrete & Flame Studio! 🕯️ Your handpoured scented candles look so aesthetic! Turn your reel views into instant paid festive orders with a 100/100 speed e-commerce store linked directly in your IG bio. ✨"
  },
  {
    "id": 19,
    "name": "Botanical Wax Works",
    "category": "Pressed Flower Soy Candles",
    "city": "Kolkata",
    "phone": "919830291040",
    "status": "Instagram DM Only",
    "pitch": "Namaste Botanical Wax Works! 🌿 Scale your candle gift hamper sales nationwide! We build sub-second Neobrutalist catalog pages with instant 1-click WhatsApp order confirmation. 📦"
  },
  {
    "id": 20,
    "name": "Tote-ally Handmade Studio",
    "category": "Custom Hand-Painted Canvas Totes",
    "city": "Mumbai",
    "phone": "919820891040",
    "status": "Instagram DM Only",
    "pitch": "Hey Tote-ally Handmade Studio! 🎨 Loved your custom hand-painted designs! Stop managing custom sizing & requests manually in DMs. We build instant order customization pages linked in your bio! 🖌️"
  },
  {
    "id": 21,
    "name": "Denim Canvas Custom",
    "category": "Hand-Painted Jackets & Custom Kicks",
    "city": "Delhi NCR",
    "phone": "919811782910",
    "status": "Instagram DM Only",
    "pitch": "Hi Denim Canvas Custom Team! ✨ Turn your viral reel views into direct paid orders with a sleek 0.3s store optimized for hand-painted totes & apparel! 🚀"
  },
  {
    "id": 22,
    "name": "Resin Reminiscence Studio",
    "category": "Wedding Garland Resin Preservation",
    "city": "Chennai",
    "phone": "919840391820",
    "status": "WhatsApp Orders Only",
    "pitch": "Namaste Resin Reminiscence Studio! 💍 Your garland resin preservation & keepsake work is breathtaking! Capture high-ticket wedding floral bookings online with instant WhatsApp consultations. 🌸"
  },
  {
    "id": 23,
    "name": "Petal & Resin Crafts",
    "category": "Custom Resin Coasters & Trays",
    "city": "Indore",
    "phone": "919826291040",
    "status": "Instagram DM Only",
    "pitch": "Hey Petal & Resin Crafts! ✨ Stop answering DM inquiries one by one. Display your custom resin coasters & preservation packages on a fast, professional web showcase! 🚀"
  },
  {
    "id": 24,
    "name": "Knit & Knot Crochet Lab",
    "category": "Handmade Crochet Tops & Plushies",
    "city": "Shillong",
    "phone": "919863102940",
    "status": "Instagram DM Only",
    "pitch": "Hey Knit & Knot Crochet Lab! 🧶 Your handmade crochet tops & plushies are super cute! Manage your custom order slots effortlessly with an automated slot booking page that syncs to your phone! 💖"
  },
  {
    "id": 25,
    "name": "Loopy Loops Crafts",
    "category": "Crochet Tote Bags & Bucket Hats",
    "city": "Bengaluru",
    "phone": "919900381020",
    "status": "IG Bio Linktree Only",
    "pitch": "Hi Loopy Loops Crafts Team! ✨ Turn your viral reel views into direct paid orders with a sleek 0.3s store optimized for hand-painted totes & apparel! 🚀"
  },
  {
    "id": 26,
    "name": "Press-On Perfection Studio",
    "category": "Handmade Custom Press-on Nails",
    "city": "Delhi NCR",
    "phone": "919811891020",
    "status": "Instagram DM Only",
    "pitch": "Hey Press-On Perfection Studio! 💅 Your custom press-on nail sets look salon-perfect! Let clients select nail sizes, shapes & art styles online in 3 secs with instant WhatsApp order slips! ✨"
  },
  {
    "id": 27,
    "name": "Glitz & Glam Pressons",
    "category": "Reusable Gel Nail Art Sets",
    "city": "Pune",
    "phone": "919890591080",
    "status": "WhatsApp Orders Only",
    "pitch": "Hi Glitz & Glam Pressons! 💖 Scale your nail set drops across India with instant WhatsApp ordering & zero DM hassle. Want to see how it works for press-on artists? 🚀"
  },
  {
    "id": 28,
    "name": "Suds & Botanicals",
    "category": "Cold-Process Organic Soaps",
    "city": "Kochi",
    "phone": "919447491020",
    "status": "Instagram DM Only",
    "pitch": "Namaste Suds & Botanicals! 🌿 Your cold-process organic soaps & body butter look so luxurious! Build buyer trust with full ingredient showcases & 1-click WhatsApp bundle ordering! ✨"
  },
  {
    "id": 29,
    "name": "Butter & Glow Skincare",
    "category": "Handmade Body Butters & Lip Oils",
    "city": "Chandigarh",
    "phone": "919814491020",
    "status": "Instagram DM Only",
    "pitch": "Hey Butter & Glow Skincare! 🌟 Showcase your products with prices on a Neobrutalist 100/100 speed store linked in your IG bio — zero transaction commission! 📦"
  },
  {
    "id": 30,
    "name": "Aesthetic Crochet Studio",
    "category": "Handmade Crochet & Knitwear Brand",
    "city": "Chandigarh",
    "phone": "91989281861",
    "status": "Instagram DM Only",
    "pitch": "Hey Aesthetic Crochet Studio! 🧶 Your handmade crochet tops & plushies are super cute! Manage your custom order slots effortlessly with an automated slot booking page that syncs to your phone! 💖"
  },
  {
    "id": 31,
    "name": "Aesthetic Press-on Crafts",
    "category": "Custom Press-on Nail Artist",
    "city": "Kochi",
    "phone": "91989520381",
    "status": "WhatsApp Orders Only",
    "pitch": "Hi Aesthetic Press-on Crafts! 💖 Scale your nail set drops across India with instant WhatsApp ordering & zero DM hassle. Want to see how it works for press-on artists? 🚀"
  },
  {
    "id": 32,
    "name": "Aesthetic Cold-Process Closet",
    "category": "Artisanal Cold-Process Soap Maker",
    "city": "Kolkata",
    "phone": "91989759800",
    "status": "IG Bio Linktree Only",
    "pitch": "Namaste Aesthetic Cold-Process Closet! 🌿 Your cold-process organic soaps & body butter look so luxurious! Build buyer trust with full ingredient showcases & 1-click WhatsApp bundle ordering! ✨"
  },
  {
    "id": 33,
    "name": "Aesthetic Sticker Lab",
    "category": "Indie Sticker & Stationery Studio",
    "city": "Shillong",
    "phone": "91989998320",
    "status": "Instagram DM Only",
    "pitch": "Hey Aesthetic Sticker Lab team! ✨ Loved your IG page in Shillong! Stop losing customer orders in flooded DMs — get a 0.3s web store with 3-sec WhatsApp checkout! 🚀"
  },
  {
    "id": 34,
    "name": "Aesthetic Fitness Co.",
    "category": "Micro Fitness & Pilates IG Coach",
    "city": "Ahmedabad",
    "phone": "91981238739",
    "status": "IG Bio Linktree Only",
    "pitch": "Hi Aesthetic Fitness Co.! 🌿 Convert your Instagram Reel views into instant paid orders without manual DM back-and-forth. Want to check out our free live preview? ⚡"
  },
  {
    "id": 35,
    "name": "Aesthetic Pet Creations",
    "category": "Handmade Pet Accessories & Treats",
    "city": "Dehradun",
    "phone": "91981477259",
    "status": "WhatsApp Orders Only",
    "pitch": "Hey Aesthetic Pet Creations! 🌟 Showcase your products with prices on a Neobrutalist 100/100 speed store linked in your IG bio — zero transaction commission! 📦"
  },
  {
    "id": 36,
    "name": "Aesthetic Thrift Boutique",
    "category": "Instagram Thrift & Vintage Store",
    "city": "Delhi NCR",
    "phone": "91981716678",
    "status": "Instagram DM Only",
    "pitch": "Hey Aesthetic Thrift Boutique team! ✨ Loved your latest thrift drop on IG. Tired of losing buyers in crowded DMs when drops go viral? We build sub-second Neobrutalist drop stores that let buyers lock items in 3 secs via WhatsApp! 🛍️"
  },
  {
    "id": 37,
    "name": "Aesthetic Polymer Finds",
    "category": "Handcrafted Polymer Clay Jewelry",
    "city": "Mumbai",
    "phone": "91981955198",
    "status": "WhatsApp Orders Only",
    "pitch": "Hi Aesthetic Polymer Finds Team! ✨ Convert your aesthetic jewelry reel views into direct website sales. We build 100/100 speed stores that showcase your pieces beautifully with 1-click UPI checkout! 💍"
  },
  {
    "id": 38,
    "name": "Aesthetic Bento Hub",
    "category": "Custom Bento Cake & Dessert Shop",
    "city": "Bengaluru",
    "phone": "91982194617",
    "status": "IG Bio Linktree Only",
    "pitch": "Hi Aesthetic Bento Hub Team! 🧁 Turn your delicious reel views into instant party cake bookings with an interactive order builder that sends receipts straight to your WhatsApp! 🎉"
  },
  {
    "id": 39,
    "name": "Vintage Soy Studio",
    "category": "Scented Soy Candle & Wax Melt Artisan",
    "city": "Pune",
    "phone": "91982433137",
    "status": "Instagram DM Only",
    "pitch": "Hey Vintage Soy Studio! 🕯️ Your handpoured scented candles look so aesthetic! Turn your reel views into instant paid festive orders with a 100/100 speed e-commerce store linked directly in your IG bio. ✨"
  },
  {
    "id": 40,
    "name": "Vintage Canvas Crafts",
    "category": "Hand-Painted Canvas Totes & Denim",
    "city": "Jaipur",
    "phone": "91982672556",
    "status": "IG Bio Linktree Only",
    "pitch": "Hey Vintage Canvas Crafts! 🎨 Loved your custom hand-painted designs! Stop managing custom sizing & requests manually in DMs. We build instant order customization pages linked in your bio! 🖌️"
  },
  {
    "id": 41,
    "name": "Vintage Art Closet",
    "category": "Resin Art & Flower Keepsake Studio",
    "city": "Hyderabad",
    "phone": "91982911975",
    "status": "WhatsApp Orders Only",
    "pitch": "Hey Vintage Art Closet! ✨ Stop answering DM inquiries one by one. Display your custom resin coasters & preservation packages on a fast, professional web showcase! 🚀"
  },
  {
    "id": 42,
    "name": "Vintage Crochet Lab",
    "category": "Handmade Crochet & Knitwear Brand",
    "city": "Chandigarh",
    "phone": "91983150495",
    "status": "Instagram DM Only",
    "pitch": "Hey Vintage Crochet Lab! 🧶 Your handmade crochet tops & plushies are super cute! Manage your custom order slots effortlessly with an automated slot booking page that syncs to your phone! 💖"
  },
  {
    "id": 43,
    "name": "Vintage Press-on Co.",
    "category": "Custom Press-on Nail Artist",
    "city": "Kochi",
    "phone": "91983389914",
    "status": "WhatsApp Orders Only",
    "pitch": "Hi Vintage Press-on Co.! 💖 Scale your nail set drops across India with instant WhatsApp ordering & zero DM hassle. Want to see how it works for press-on artists? 🚀"
  },
  {
    "id": 44,
    "name": "Vintage Cold-Process Creations",
    "category": "Artisanal Cold-Process Soap Maker",
    "city": "Kolkata",
    "phone": "91983628434",
    "status": "IG Bio Linktree Only",
    "pitch": "Namaste Vintage Cold-Process Creations! 🌿 Your cold-process organic soaps & body butter look so luxurious! Build buyer trust with full ingredient showcases & 1-click WhatsApp bundle ordering! ✨"
  },
  {
    "id": 45,
    "name": "Vintage Sticker Boutique",
    "category": "Indie Sticker & Stationery Studio",
    "city": "Shillong",
    "phone": "91983867853",
    "status": "Instagram DM Only",
    "pitch": "Hey Vintage Sticker Boutique team! ✨ Loved your IG page in Shillong! Stop losing customer orders in flooded DMs — get a 0.3s web store with 3-sec WhatsApp checkout! 🚀"
  },
  {
    "id": 46,
    "name": "Vintage Fitness Finds",
    "category": "Micro Fitness & Pilates IG Coach",
    "city": "Ahmedabad",
    "phone": "91984106373",
    "status": "IG Bio Linktree Only",
    "pitch": "Hi Vintage Fitness Finds! 🌿 Convert your Instagram Reel views into instant paid orders without manual DM back-and-forth. Want to check out our free live preview? ⚡"
  },
  {
    "id": 47,
    "name": "Vintage Pet Hub",
    "category": "Handmade Pet Accessories & Treats",
    "city": "Dehradun",
    "phone": "91984345792",
    "status": "WhatsApp Orders Only",
    "pitch": "Hey Vintage Pet Hub! 🌟 Showcase your products with prices on a Neobrutalist 100/100 speed store linked in your IG bio — zero transaction commission! 📦"
  },
  {
    "id": 48,
    "name": "Velvet Thrift Studio",
    "category": "Instagram Thrift & Vintage Store",
    "city": "Delhi NCR",
    "phone": "91984584312",
    "status": "Instagram DM Only",
    "pitch": "Hey Velvet Thrift Studio team! ✨ Loved your latest thrift drop on IG. Tired of losing buyers in crowded DMs when drops go viral? We build sub-second Neobrutalist drop stores that let buyers lock items in 3 secs via WhatsApp! 🛍️"
  },
  {
    "id": 49,
    "name": "Velvet Polymer Crafts",
    "category": "Handcrafted Polymer Clay Jewelry",
    "city": "Mumbai",
    "phone": "91984823731",
    "status": "WhatsApp Orders Only",
    "pitch": "Hi Velvet Polymer Crafts Team! ✨ Convert your aesthetic jewelry reel views into direct website sales. We build 100/100 speed stores that showcase your pieces beautifully with 1-click UPI checkout! 💍"
  },
  {
    "id": 50,
    "name": "Velvet Bento Closet",
    "category": "Custom Bento Cake & Dessert Shop",
    "city": "Bengaluru",
    "phone": "91985062251",
    "status": "IG Bio Linktree Only",
    "pitch": "Hi Velvet Bento Closet Team! 🧁 Turn your delicious reel views into instant party cake bookings with an interactive order builder that sends receipts straight to your WhatsApp! 🎉"
  },
  {
    "id": 51,
    "name": "Velvet Soy Lab",
    "category": "Scented Soy Candle & Wax Melt Artisan",
    "city": "Pune",
    "phone": "91985301670",
    "status": "Instagram DM Only",
    "pitch": "Hey Velvet Soy Lab! 🕯️ Your handpoured scented candles look so aesthetic! Turn your reel views into instant paid festive orders with a 100/100 speed e-commerce store linked directly in your IG bio. ✨"
  },
  {
    "id": 52,
    "name": "Velvet Canvas Co.",
    "category": "Hand-Painted Canvas Totes & Denim",
    "city": "Jaipur",
    "phone": "91985540190",
    "status": "IG Bio Linktree Only",
    "pitch": "Hey Velvet Canvas Co.! 🎨 Loved your custom hand-painted designs! Stop managing custom sizing & requests manually in DMs. We build instant order customization pages linked in your bio! 🖌️"
  },
  {
    "id": 53,
    "name": "Velvet Art Creations",
    "category": "Resin Art & Flower Keepsake Studio",
    "city": "Hyderabad",
    "phone": "91985779609",
    "status": "WhatsApp Orders Only",
    "pitch": "Hey Velvet Art Creations! ✨ Stop answering DM inquiries one by one. Display your custom resin coasters & preservation packages on a fast, professional web showcase! 🚀"
  },
  {
    "id": 54,
    "name": "Velvet Crochet Boutique",
    "category": "Handmade Crochet & Knitwear Brand",
    "city": "Chandigarh",
    "phone": "91986018129",
    "status": "Instagram DM Only",
    "pitch": "Hey Velvet Crochet Boutique! 🧶 Your handmade crochet tops & plushies are super cute! Manage your custom order slots effortlessly with an automated slot booking page that syncs to your phone! 💖"
  },
  {
    "id": 55,
    "name": "Velvet Press-on Finds",
    "category": "Custom Press-on Nail Artist",
    "city": "Kochi",
    "phone": "91986257548",
    "status": "WhatsApp Orders Only",
    "pitch": "Hi Velvet Press-on Finds! 💖 Scale your nail set drops across India with instant WhatsApp ordering & zero DM hassle. Want to see how it works for press-on artists? 🚀"
  },
  {
    "id": 56,
    "name": "Velvet Cold-Process Hub",
    "category": "Artisanal Cold-Process Soap Maker",
    "city": "Kolkata",
    "phone": "91986496967",
    "status": "IG Bio Linktree Only",
    "pitch": "Namaste Velvet Cold-Process Hub! 🌿 Your cold-process organic soaps & body butter look so luxurious! Build buyer trust with full ingredient showcases & 1-click WhatsApp bundle ordering! ✨"
  },
  {
    "id": 57,
    "name": "Botanical Sticker Studio",
    "category": "Indie Sticker & Stationery Studio",
    "city": "Shillong",
    "phone": "91986735487",
    "status": "Instagram DM Only",
    "pitch": "Hey Botanical Sticker Studio team! ✨ Loved your IG page in Shillong! Stop losing customer orders in flooded DMs — get a 0.3s web store with 3-sec WhatsApp checkout! 🚀"
  },
  {
    "id": 58,
    "name": "Botanical Fitness Crafts",
    "category": "Micro Fitness & Pilates IG Coach",
    "city": "Ahmedabad",
    "phone": "91986974906",
    "status": "IG Bio Linktree Only",
    "pitch": "Hi Botanical Fitness Crafts! 🌿 Convert your Instagram Reel views into instant paid orders without manual DM back-and-forth. Want to check out our free live preview? ⚡"
  },
  {
    "id": 59,
    "name": "Botanical Pet Closet",
    "category": "Handmade Pet Accessories & Treats",
    "city": "Dehradun",
    "phone": "91987213426",
    "status": "WhatsApp Orders Only",
    "pitch": "Hey Botanical Pet Closet! 🌟 Showcase your products with prices on a Neobrutalist 100/100 speed store linked in your IG bio — zero transaction commission! 📦"
  },
  {
    "id": 60,
    "name": "Botanical Thrift Lab",
    "category": "Instagram Thrift & Vintage Store",
    "city": "Delhi NCR",
    "phone": "91987452845",
    "status": "Instagram DM Only",
    "pitch": "Hey Botanical Thrift Lab team! ✨ Loved your latest thrift drop on IG. Tired of losing buyers in crowded DMs when drops go viral? We build sub-second Neobrutalist drop stores that let buyers lock items in 3 secs via WhatsApp! 🛍️"
  },
  {
    "id": 61,
    "name": "Botanical Polymer Co.",
    "category": "Handcrafted Polymer Clay Jewelry",
    "city": "Mumbai",
    "phone": "91987691365",
    "status": "WhatsApp Orders Only",
    "pitch": "Hi Botanical Polymer Co. Team! ✨ Convert your aesthetic jewelry reel views into direct website sales. We build 100/100 speed stores that showcase your pieces beautifully with 1-click UPI checkout! 💍"
  },
  {
    "id": 62,
    "name": "Botanical Bento Creations",
    "category": "Custom Bento Cake & Dessert Shop",
    "city": "Bengaluru",
    "phone": "91987930784",
    "status": "IG Bio Linktree Only",
    "pitch": "Hi Botanical Bento Creations Team! 🧁 Turn your delicious reel views into instant party cake bookings with an interactive order builder that sends receipts straight to your WhatsApp! 🎉"
  },
  {
    "id": 63,
    "name": "Botanical Soy Boutique",
    "category": "Scented Soy Candle & Wax Melt Artisan",
    "city": "Pune",
    "phone": "91988169304",
    "status": "Instagram DM Only",
    "pitch": "Hey Botanical Soy Boutique! 🕯️ Your handpoured scented candles look so aesthetic! Turn your reel views into instant paid festive orders with a 100/100 speed e-commerce store linked directly in your IG bio. ✨"
  },
  {
    "id": 64,
    "name": "Botanical Canvas Finds",
    "category": "Hand-Painted Canvas Totes & Denim",
    "city": "Jaipur",
    "phone": "91988408723",
    "status": "IG Bio Linktree Only",
    "pitch": "Hey Botanical Canvas Finds! 🎨 Loved your custom hand-painted designs! Stop managing custom sizing & requests manually in DMs. We build instant order customization pages linked in your bio! 🖌️"
  },
  {
    "id": 65,
    "name": "Botanical Art Hub",
    "category": "Resin Art & Flower Keepsake Studio",
    "city": "Hyderabad",
    "phone": "91988647243",
    "status": "WhatsApp Orders Only",
    "pitch": "Hey Botanical Art Hub! ✨ Stop answering DM inquiries one by one. Display your custom resin coasters & preservation packages on a fast, professional web showcase! 🚀"
  },
  {
    "id": 66,
    "name": "Soulful Crochet Studio",
    "category": "Handmade Crochet & Knitwear Brand",
    "city": "Chandigarh",
    "phone": "91988886662",
    "status": "Instagram DM Only",
    "pitch": "Hey Soulful Crochet Studio! 🧶 Your handmade crochet tops & plushies are super cute! Manage your custom order slots effortlessly with an automated slot booking page that syncs to your phone! 💖"
  },
  {
    "id": 67,
    "name": "Soulful Press-on Crafts",
    "category": "Custom Press-on Nail Artist",
    "city": "Kochi",
    "phone": "91989125182",
    "status": "WhatsApp Orders Only",
    "pitch": "Hi Soulful Press-on Crafts! 💖 Scale your nail set drops across India with instant WhatsApp ordering & zero DM hassle. Want to see how it works for press-on artists? 🚀"
  },
  {
    "id": 68,
    "name": "Soulful Cold-Process Closet",
    "category": "Artisanal Cold-Process Soap Maker",
    "city": "Kolkata",
    "phone": "91989364601",
    "status": "IG Bio Linktree Only",
    "pitch": "Namaste Soulful Cold-Process Closet! 🌿 Your cold-process organic soaps & body butter look so luxurious! Build buyer trust with full ingredient showcases & 1-click WhatsApp bundle ordering! ✨"
  },
  {
    "id": 69,
    "name": "Soulful Sticker Lab",
    "category": "Indie Sticker & Stationery Studio",
    "city": "Shillong",
    "phone": "91989603121",
    "status": "Instagram DM Only",
    "pitch": "Hey Soulful Sticker Lab team! ✨ Loved your IG page in Shillong! Stop losing customer orders in flooded DMs — get a 0.3s web store with 3-sec WhatsApp checkout! 🚀"
  },
  {
    "id": 70,
    "name": "Soulful Fitness Co.",
    "category": "Micro Fitness & Pilates IG Coach",
    "city": "Ahmedabad",
    "phone": "91989842540",
    "status": "IG Bio Linktree Only",
    "pitch": "Hi Soulful Fitness Co.! 🌿 Convert your Instagram Reel views into instant paid orders without manual DM back-and-forth. Want to check out our free live preview? ⚡"
  },
  {
    "id": 71,
    "name": "Soulful Pet Creations",
    "category": "Handmade Pet Accessories & Treats",
    "city": "Dehradun",
    "phone": "91981082959",
    "status": "WhatsApp Orders Only",
    "pitch": "Hey Soulful Pet Creations! 🌟 Showcase your products with prices on a Neobrutalist 100/100 speed store linked in your IG bio — zero transaction commission! 📦"
  },
  {
    "id": 72,
    "name": "Soulful Thrift Boutique",
    "category": "Instagram Thrift & Vintage Store",
    "city": "Delhi NCR",
    "phone": "91981321479",
    "status": "Instagram DM Only",
    "pitch": "Hey Soulful Thrift Boutique team! ✨ Loved your latest thrift drop on IG. Tired of losing buyers in crowded DMs when drops go viral? We build sub-second Neobrutalist drop stores that let buyers lock items in 3 secs via WhatsApp! 🛍️"
  },
  {
    "id": 73,
    "name": "Soulful Polymer Finds",
    "category": "Handcrafted Polymer Clay Jewelry",
    "city": "Mumbai",
    "phone": "91981560898",
    "status": "WhatsApp Orders Only",
    "pitch": "Hi Soulful Polymer Finds Team! ✨ Convert your aesthetic jewelry reel views into direct website sales. We build 100/100 speed stores that showcase your pieces beautifully with 1-click UPI checkout! 💍"
  },
  {
    "id": 74,
    "name": "Soulful Bento Hub",
    "category": "Custom Bento Cake & Dessert Shop",
    "city": "Bengaluru",
    "phone": "91981799418",
    "status": "IG Bio Linktree Only",
    "pitch": "Hi Soulful Bento Hub Team! 🧁 Turn your delicious reel views into instant party cake bookings with an interactive order builder that sends receipts straight to your WhatsApp! 🎉"
  },
  {
    "id": 75,
    "name": "Urban Soy Studio",
    "category": "Scented Soy Candle & Wax Melt Artisan",
    "city": "Pune",
    "phone": "91982038837",
    "status": "Instagram DM Only",
    "pitch": "Hey Urban Soy Studio! 🕯️ Your handpoured scented candles look so aesthetic! Turn your reel views into instant paid festive orders with a 100/100 speed e-commerce store linked directly in your IG bio. ✨"
  },
  {
    "id": 76,
    "name": "Urban Canvas Crafts",
    "category": "Hand-Painted Canvas Totes & Denim",
    "city": "Jaipur",
    "phone": "91982277357",
    "status": "IG Bio Linktree Only",
    "pitch": "Hey Urban Canvas Crafts! 🎨 Loved your custom hand-painted designs! Stop managing custom sizing & requests manually in DMs. We build instant order customization pages linked in your bio! 🖌️"
  },
  {
    "id": 77,
    "name": "Urban Art Closet",
    "category": "Resin Art & Flower Keepsake Studio",
    "city": "Hyderabad",
    "phone": "91982516776",
    "status": "WhatsApp Orders Only",
    "pitch": "Hey Urban Art Closet! ✨ Stop answering DM inquiries one by one. Display your custom resin coasters & preservation packages on a fast, professional web showcase! 🚀"
  },
  {
    "id": 78,
    "name": "Urban Crochet Lab",
    "category": "Handmade Crochet & Knitwear Brand",
    "city": "Chandigarh",
    "phone": "91982755296",
    "status": "Instagram DM Only",
    "pitch": "Hey Urban Crochet Lab! 🧶 Your handmade crochet tops & plushies are super cute! Manage your custom order slots effortlessly with an automated slot booking page that syncs to your phone! 💖"
  },
  {
    "id": 79,
    "name": "Urban Press-on Co.",
    "category": "Custom Press-on Nail Artist",
    "city": "Kochi",
    "phone": "91982994715",
    "status": "WhatsApp Orders Only",
    "pitch": "Hi Urban Press-on Co.! 💖 Scale your nail set drops across India with instant WhatsApp ordering & zero DM hassle. Want to see how it works for press-on artists? 🚀"
  },
  {
    "id": 80,
    "name": "Urban Cold-Process Creations",
    "category": "Artisanal Cold-Process Soap Maker",
    "city": "Kolkata",
    "phone": "91983233235",
    "status": "IG Bio Linktree Only",
    "pitch": "Namaste Urban Cold-Process Creations! 🌿 Your cold-process organic soaps & body butter look so luxurious! Build buyer trust with full ingredient showcases & 1-click WhatsApp bundle ordering! ✨"
  },
  {
    "id": 81,
    "name": "Urban Sticker Boutique",
    "category": "Indie Sticker & Stationery Studio",
    "city": "Shillong",
    "phone": "91983472654",
    "status": "Instagram DM Only",
    "pitch": "Hey Urban Sticker Boutique team! ✨ Loved your IG page in Shillong! Stop losing customer orders in flooded DMs — get a 0.3s web store with 3-sec WhatsApp checkout! 🚀"
  },
  {
    "id": 82,
    "name": "Urban Fitness Finds",
    "category": "Micro Fitness & Pilates IG Coach",
    "city": "Ahmedabad",
    "phone": "91983711174",
    "status": "IG Bio Linktree Only",
    "pitch": "Hi Urban Fitness Finds! 🌿 Convert your Instagram Reel views into instant paid orders without manual DM back-and-forth. Want to check out our free live preview? ⚡"
  },
  {
    "id": 83,
    "name": "Urban Pet Hub",
    "category": "Handmade Pet Accessories & Treats",
    "city": "Dehradun",
    "phone": "91983950593",
    "status": "WhatsApp Orders Only",
    "pitch": "Hey Urban Pet Hub! 🌟 Showcase your products with prices on a Neobrutalist 100/100 speed store linked in your IG bio — zero transaction commission! 📦"
  },
  {
    "id": 84,
    "name": "Retro Thrift Studio",
    "category": "Instagram Thrift & Vintage Store",
    "city": "Delhi NCR",
    "phone": "91984189113",
    "status": "Instagram DM Only",
    "pitch": "Hey Retro Thrift Studio team! ✨ Loved your latest thrift drop on IG. Tired of losing buyers in crowded DMs when drops go viral? We build sub-second Neobrutalist drop stores that let buyers lock items in 3 secs via WhatsApp! 🛍️"
  },
  {
    "id": 85,
    "name": "Retro Polymer Crafts",
    "category": "Handcrafted Polymer Clay Jewelry",
    "city": "Mumbai",
    "phone": "91984428532",
    "status": "WhatsApp Orders Only",
    "pitch": "Hi Retro Polymer Crafts Team! ✨ Convert your aesthetic jewelry reel views into direct website sales. We build 100/100 speed stores that showcase your pieces beautifully with 1-click UPI checkout! 💍"
  },
  {
    "id": 86,
    "name": "Retro Bento Closet",
    "category": "Custom Bento Cake & Dessert Shop",
    "city": "Bengaluru",
    "phone": "91984667951",
    "status": "IG Bio Linktree Only",
    "pitch": "Hi Retro Bento Closet Team! 🧁 Turn your delicious reel views into instant party cake bookings with an interactive order builder that sends receipts straight to your WhatsApp! 🎉"
  },
  {
    "id": 87,
    "name": "Retro Soy Lab",
    "category": "Scented Soy Candle & Wax Melt Artisan",
    "city": "Pune",
    "phone": "91984906471",
    "status": "Instagram DM Only",
    "pitch": "Hey Retro Soy Lab! 🕯️ Your handpoured scented candles look so aesthetic! Turn your reel views into instant paid festive orders with a 100/100 speed e-commerce store linked directly in your IG bio. ✨"
  },
  {
    "id": 88,
    "name": "Retro Canvas Co.",
    "category": "Hand-Painted Canvas Totes & Denim",
    "city": "Jaipur",
    "phone": "91985145890",
    "status": "IG Bio Linktree Only",
    "pitch": "Hey Retro Canvas Co.! 🎨 Loved your custom hand-painted designs! Stop managing custom sizing & requests manually in DMs. We build instant order customization pages linked in your bio! 🖌️"
  },
  {
    "id": 89,
    "name": "Retro Art Creations",
    "category": "Resin Art & Flower Keepsake Studio",
    "city": "Hyderabad",
    "phone": "91985384410",
    "status": "WhatsApp Orders Only",
    "pitch": "Hey Retro Art Creations! ✨ Stop answering DM inquiries one by one. Display your custom resin coasters & preservation packages on a fast, professional web showcase! 🚀"
  },
  {
    "id": 90,
    "name": "Retro Crochet Boutique",
    "category": "Handmade Crochet & Knitwear Brand",
    "city": "Chandigarh",
    "phone": "91985623829",
    "status": "Instagram DM Only",
    "pitch": "Hey Retro Crochet Boutique! 🧶 Your handmade crochet tops & plushies are super cute! Manage your custom order slots effortlessly with an automated slot booking page that syncs to your phone! 💖"
  },
  {
    "id": 91,
    "name": "Retro Press-on Finds",
    "category": "Custom Press-on Nail Artist",
    "city": "Kochi",
    "phone": "91985862349",
    "status": "WhatsApp Orders Only",
    "pitch": "Hi Retro Press-on Finds! 💖 Scale your nail set drops across India with instant WhatsApp ordering & zero DM hassle. Want to see how it works for press-on artists? 🚀"
  },
  {
    "id": 92,
    "name": "Retro Cold-Process Hub",
    "category": "Artisanal Cold-Process Soap Maker",
    "city": "Kolkata",
    "phone": "91986101768",
    "status": "IG Bio Linktree Only",
    "pitch": "Namaste Retro Cold-Process Hub! 🌿 Your cold-process organic soaps & body butter look so luxurious! Build buyer trust with full ingredient showcases & 1-click WhatsApp bundle ordering! ✨"
  },
  {
    "id": 93,
    "name": "Golden Sticker Studio",
    "category": "Indie Sticker & Stationery Studio",
    "city": "Shillong",
    "phone": "91986340288",
    "status": "Instagram DM Only",
    "pitch": "Hey Golden Sticker Studio team! ✨ Loved your IG page in Shillong! Stop losing customer orders in flooded DMs — get a 0.3s web store with 3-sec WhatsApp checkout! 🚀"
  },
  {
    "id": 94,
    "name": "Golden Fitness Crafts",
    "category": "Micro Fitness & Pilates IG Coach",
    "city": "Ahmedabad",
    "phone": "91986579707",
    "status": "IG Bio Linktree Only",
    "pitch": "Hi Golden Fitness Crafts! 🌿 Convert your Instagram Reel views into instant paid orders without manual DM back-and-forth. Want to check out our free live preview? ⚡"
  },
  {
    "id": 95,
    "name": "Golden Pet Closet",
    "category": "Handmade Pet Accessories & Treats",
    "city": "Dehradun",
    "phone": "91986818227",
    "status": "WhatsApp Orders Only",
    "pitch": "Hey Golden Pet Closet! 🌟 Showcase your products with prices on a Neobrutalist 100/100 speed store linked in your IG bio — zero transaction commission! 📦"
  },
  {
    "id": 96,
    "name": "Golden Thrift Lab",
    "category": "Instagram Thrift & Vintage Store",
    "city": "Delhi NCR",
    "phone": "91987057646",
    "status": "Instagram DM Only",
    "pitch": "Hey Golden Thrift Lab team! ✨ Loved your latest thrift drop on IG. Tired of losing buyers in crowded DMs when drops go viral? We build sub-second Neobrutalist drop stores that let buyers lock items in 3 secs via WhatsApp! 🛍️"
  },
  {
    "id": 97,
    "name": "Golden Polymer Co.",
    "category": "Handcrafted Polymer Clay Jewelry",
    "city": "Mumbai",
    "phone": "91987296166",
    "status": "WhatsApp Orders Only",
    "pitch": "Hi Golden Polymer Co. Team! ✨ Convert your aesthetic jewelry reel views into direct website sales. We build 100/100 speed stores that showcase your pieces beautifully with 1-click UPI checkout! 💍"
  },
  {
    "id": 98,
    "name": "Golden Bento Creations",
    "category": "Custom Bento Cake & Dessert Shop",
    "city": "Bengaluru",
    "phone": "91987535585",
    "status": "IG Bio Linktree Only",
    "pitch": "Hi Golden Bento Creations Team! 🧁 Turn your delicious reel views into instant party cake bookings with an interactive order builder that sends receipts straight to your WhatsApp! 🎉"
  },
  {
    "id": 99,
    "name": "Golden Soy Boutique",
    "category": "Scented Soy Candle & Wax Melt Artisan",
    "city": "Pune",
    "phone": "91987774105",
    "status": "Instagram DM Only",
    "pitch": "Hey Golden Soy Boutique! 🕯️ Your handpoured scented candles look so aesthetic! Turn your reel views into instant paid festive orders with a 100/100 speed e-commerce store linked directly in your IG bio. ✨"
  },
  {
    "id": 100,
    "name": "Golden Canvas Finds",
    "category": "Hand-Painted Canvas Totes & Denim",
    "city": "Jaipur",
    "phone": "91988013524",
    "status": "IG Bio Linktree Only",
    "pitch": "Hey Golden Canvas Finds! 🎨 Loved your custom hand-painted designs! Stop managing custom sizing & requests manually in DMs. We build instant order customization pages linked in your bio! 🖌️"
  },
  {
    "id": 101,
    "name": "Golden Art Hub",
    "category": "Resin Art & Flower Keepsake Studio",
    "city": "Hyderabad",
    "phone": "91988252943",
    "status": "WhatsApp Orders Only",
    "pitch": "Hey Golden Art Hub! ✨ Stop answering DM inquiries one by one. Display your custom resin coasters & preservation packages on a fast, professional web showcase! 🚀"
  },
  {
    "id": 102,
    "name": "Little Crochet Studio",
    "category": "Handmade Crochet & Knitwear Brand",
    "city": "Chandigarh",
    "phone": "91988491463",
    "status": "Instagram DM Only",
    "pitch": "Hey Little Crochet Studio! 🧶 Your handmade crochet tops & plushies are super cute! Manage your custom order slots effortlessly with an automated slot booking page that syncs to your phone! 💖"
  },
  {
    "id": 103,
    "name": "Little Press-on Crafts",
    "category": "Custom Press-on Nail Artist",
    "city": "Kochi",
    "phone": "91988730882",
    "status": "WhatsApp Orders Only",
    "pitch": "Hi Little Press-on Crafts! 💖 Scale your nail set drops across India with instant WhatsApp ordering & zero DM hassle. Want to see how it works for press-on artists? 🚀"
  },
  {
    "id": 104,
    "name": "Little Cold-Process Closet",
    "category": "Artisanal Cold-Process Soap Maker",
    "city": "Kolkata",
    "phone": "91988969402",
    "status": "IG Bio Linktree Only",
    "pitch": "Namaste Little Cold-Process Closet! 🌿 Your cold-process organic soaps & body butter look so luxurious! Build buyer trust with full ingredient showcases & 1-click WhatsApp bundle ordering! ✨"
  },
  {
    "id": 105,
    "name": "Little Sticker Lab",
    "category": "Indie Sticker & Stationery Studio",
    "city": "Shillong",
    "phone": "91989208821",
    "status": "Instagram DM Only",
    "pitch": "Hey Little Sticker Lab team! ✨ Loved your IG page in Shillong! Stop losing customer orders in flooded DMs — get a 0.3s web store with 3-sec WhatsApp checkout! 🚀"
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
    <div className="min-h-screen bg-black text-white font-mono selection:bg-[#FF5500] selection:text-white pt-28 md:pt-36 flex flex-col overflow-x-hidden">
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
              onClick={() => setSelectedCategory("Thrift")}
              className={`px-4 py-2 text-xs font-black uppercase border-2 border-black ${selectedCategory === "D2C" ? "bg-[#FF5500] text-white" : "bg-gray-100 text-black"}`}
            >
              D2C
            </button>
            <button
              onClick={() => setSelectedCategory("Jewelry")}
              className={`px-4 py-2 text-xs font-black uppercase border-2 border-black ${selectedCategory === "Real Estate" ? "bg-[#FFD700] text-black" : "bg-gray-100 text-black"}`}
            >
              Real Estate
            </button>
            <button
              onClick={() => setSelectedCategory("Cake")}
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
