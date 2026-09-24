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
    "pitch": "Hey Team Thrift Hive! Loved your Y2K denim drop on IG. Stop losing orders in crowded DMs — get a sub-second drop store with 3-sec WhatsApp checkout."
  },
  {
    "id": 2,
    "name": "Vintage Thread Co.",
    "category": "Curated Retro & Oversized Wear",
    "city": "Shillong",
    "phone": "919863041920",
    "status": "IG Stories Drop Only",
    "pitch": "Hey Vintage Thread! Turn your IG Story drop views into instant paid orders without manual DM back-and-forth."
  },
  {
    "id": 3,
    "name": "Reloved Closet India",
    "category": "Preloved & Sustainable Fashion",
    "city": "Bengaluru",
    "phone": "919900218940",
    "status": "Instagram DM Only",
    "pitch": "Hi Reloved Closet! Automate your Sunday thrift drops with a 0.3s Neobrutalist store linked directly in your IG bio."
  },
  {
    "id": 4,
    "name": "RetroDrip Thrift Store",
    "category": "Streetwear & Graphic Tees",
    "city": "Mumbai",
    "phone": "919820147820",
    "status": "WhatsApp Orders Only",
    "pitch": "Hey RetroDrip! Stop losing buyers when DMs get flooded during drops. Launch instant 1-click checkout pages."
  },
  {
    "id": 5,
    "name": "Aesthetic Archive Thrift",
    "category": "Corsets & Vintage Dresses",
    "city": "Pune",
    "phone": "919822391040",
    "status": "Instagram DM Only",
    "pitch": "Hi Aesthetic Archive! Turn your viral Reel views into instant sales with a sleek 100/100 speed drop site."
  },
  {
    "id": 6,
    "name": "Clay & Bloom Studio",
    "category": "Polymer Clay Earrings & Jewelry",
    "city": "Jaipur",
    "phone": "919829055410",
    "status": "IG Bio Linktree Only",
    "pitch": "Hi Clay & Bloom! showcase your handcrafted clay earrings in a high-converting web catalog with direct WhatsApp orders."
  },
  {
    "id": 7,
    "name": "Charm Craft Studio",
    "category": "Custom Wire Wrap & Pearl Jewelry",
    "city": "Chandigarh",
    "phone": "919814210980",
    "status": "Instagram DM Only",
    "pitch": "Hey Charm Craft! Showcase custom charm necklaces without answering 'price?' in IG comments 50 times a day."
  },
  {
    "id": 8,
    "name": "Silver Aura Crafts",
    "category": "Oxidized Silver & Boho Jewelry",
    "city": "Ahmedabad",
    "phone": "919825190820",
    "status": "WhatsApp Orders Only",
    "pitch": "Namaste Silver Aura! Scale your festive jewelry sales nationwide with an automated WhatsApp + web storefront."
  },
  {
    "id": 9,
    "name": "Bead & Thread Jewelry",
    "category": "Beaded Chokers & Aesthetic Rings",
    "city": "Kochi",
    "phone": "919447389100",
    "status": "Instagram DM Only",
    "pitch": "Hi Bead & Thread! Build brand trust and take direct payments with a fast Neobrutalist jewelry catalog."
  },
  {
    "id": 10,
    "name": "Golden Petal Trinkets",
    "category": "Handmade Floral & Resin Jewelry",
    "city": "Guwahati",
    "phone": "919864019280",
    "status": "Instagram DM Only",
    "pitch": "Hey Golden Petal! Convert your Instagram followers into loyal buyers with a sleek zero-commission web store."
  },
  {
    "id": 11,
    "name": "Bento Bites Bakery",
    "category": "Korean Bento Cakes & Custom Desserts",
    "city": "Delhi NCR",
    "phone": "919810844910",
    "status": "Instagram DM Only",
    "pitch": "Hey Bento Bites! Stop handling custom cake orders manually over DM. We build 3-second online cake booking forms."
  },
  {
    "id": 12,
    "name": "NYC Cookie Lab",
    "category": "Gourmet Chunky NYC Cookies",
    "city": "Mumbai",
    "phone": "919820719280",
    "status": "WhatsApp Orders Only",
    "pitch": "Hi NYC Cookie Lab! Automate weekend cookie batch pre-orders with direct WhatsApp checkout links."
  },
  {
    "id": 13,
    "name": "The Sugar Bloom Kitchen",
    "category": "Artisanal Cupcakes & Pastries",
    "city": "Bengaluru",
    "phone": "919845391020",
    "status": "IG Bio Linktree Only",
    "pitch": "Hey Sugar Bloom! Show menu prices and take weekend dessert orders without Swiggy/Zomato's 30% commission."
  },
  {
    "id": 14,
    "name": "Sourdough & Co. Home Bakery",
    "category": "Artisanal Sourdough & Breads",
    "city": "Pune",
    "phone": "919890481920",
    "status": "WhatsApp Orders Only",
    "pitch": "Hi Sourdough & Co! Take weekly fresh loaf pre-orders with an automated sub-second bread ordering page."
  },
  {
    "id": 15,
    "name": "Velvet Crumb Patisserie",
    "category": "Custom Birthday & Wedding Cakes",
    "city": "Hyderabad",
    "phone": "919849410920",
    "status": "Instagram DM Only",
    "pitch": "Hey Velvet Crumb! Turn luxury cake reel views into booked party orders with an interactive cake builder."
  },
  {
    "id": 16,
    "name": "Soulful Candles Co.",
    "category": "Scented Soy Wax & Bubble Candles",
    "city": "Chandigarh",
    "phone": "919814391080",
    "status": "Instagram DM Only",
    "pitch": "Hi Soulful Candles! Showcase your scented candle collections with a 100/100 speed store optimized for Meta ads."
  },
  {
    "id": 17,
    "name": "Aroma Therapy Studio",
    "category": "Handpoured Wax Melts & Diffusers",
    "city": "Dehradun",
    "phone": "919760219840",
    "status": "WhatsApp Orders Only",
    "pitch": "Hey Aroma Therapy! Scale your festive gift hampers with an automated web shop and instant WhatsApp receipt."
  },
  {
    "id": 18,
    "name": "Concrete & Flame Studio",
    "category": "Concrete Jar Candles & Home Decor",
    "city": "Jaipur",
    "phone": "919829188430",
    "status": "IG Bio Linktree Only",
    "pitch": "Namaste Concrete & Flame! Present your minimalist concrete candle collection on a clean Neobrutalist showcase."
  },
  {
    "id": 19,
    "name": "Botanical Wax Works",
    "category": "Pressed Flower Soy Candles",
    "city": "Kolkata",
    "phone": "919830291040",
    "status": "Instagram DM Only",
    "pitch": "Hi Botanical Wax Works! Capture Diwali and wedding gift hamper bulk orders with a fast B2B/D2C showcase."
  },
  {
    "id": 20,
    "name": "Tote-ally Handmade Studio",
    "category": "Custom Hand-Painted Canvas Totes",
    "city": "Mumbai",
    "phone": "919820891040",
    "status": "Instagram DM Only",
    "pitch": "Hey Tote-ally Handmade! Convert your viral tote bag reel views into paid orders with 1-click web checkout."
  },
  {
    "id": 21,
    "name": "Denim Canvas Custom",
    "category": "Hand-Painted Jackets & Custom Kicks",
    "city": "Delhi NCR",
    "phone": "919811782910",
    "status": "Instagram DM Only",
    "pitch": "Hi Denim Canvas! Take custom jacket sizing and design requests seamlessly via an automated web form."
  },
  {
    "id": 22,
    "name": "Resin Reminiscence Studio",
    "category": "Wedding Garland Resin Preservation",
    "city": "Chennai",
    "phone": "919840391820",
    "status": "WhatsApp Orders Only",
    "pitch": "Namaste Resin Reminiscence! Capture high-ticket bridal flower preservation bookings with a dedicated web portal."
  },
  {
    "id": 23,
    "name": "Petal & Resin Crafts",
    "category": "Custom Resin Coasters & Trays",
    "city": "Indore",
    "phone": "919826291040",
    "status": "Instagram DM Only",
    "pitch": "Hi Petal & Resin! Stop answering DM inquiries one by one. Display prices & customizations on a fast web shop."
  },
  {
    "id": 24,
    "name": "Knit & Knot Crochet Lab",
    "category": "Handmade Crochet Tops & Plushies",
    "city": "Shillong",
    "phone": "919863102940",
    "status": "Instagram DM Only",
    "pitch": "Hey Knit & Knot! Manage custom crochet order slots effortlessly with an automated slot booking page."
  },
  {
    "id": 25,
    "name": "Loopy Loops Crafts",
    "category": "Crochet Tote Bags & Bucket Hats",
    "city": "Bengaluru",
    "phone": "919900381020",
    "status": "IG Bio Linktree Only",
    "pitch": "Hi Loopy Loops! Upgrade your IG bio link into a full-blown sub-second e-commerce ordering engine."
  },
  {
    "id": 26,
    "name": "Press-On Perfection Studio",
    "category": "Handmade Custom Press-on Nails",
    "city": "Delhi NCR",
    "phone": "919811891020",
    "status": "Instagram DM Only",
    "pitch": "Hey Press-On Perfection! Let clients select nail sizes, shapes, and custom nail art styles online in 3 secs."
  },
  {
    "id": 27,
    "name": "Glitz & Glam Pressons",
    "category": "Reusable Gel Nail Art Sets",
    "city": "Pune",
    "phone": "919890591080",
    "status": "WhatsApp Orders Only",
    "pitch": "Hi Glitz & Glam! Scale nail set drops across India with instant WhatsApp ordering and online UPI checkout."
  },
  {
    "id": 28,
    "name": "Suds & Botanicals",
    "category": "Cold-Process Organic Soaps",
    "city": "Kochi",
    "phone": "919447491020",
    "status": "Instagram DM Only",
    "pitch": "Namaste Suds & Botanicals! Build buyer confidence with ingredient breakdowns and 1-click soap bundle purchasing."
  },
  {
    "id": 29,
    "name": "Butter & Glow Skincare",
    "category": "Handmade Body Butters & Lip Oils",
    "city": "Chandigarh",
    "phone": "919814491020",
    "status": "Instagram DM Only",
    "pitch": "Hey Butter & Glow! Boost Meta ad ROI with a lightning-fast D2C store optimized for beauty sales."
  },
  {
    "id": 30,
    "name": "Aesthetic Crochet Studio",
    "category": "Handmade Crochet & Knitwear Brand",
    "city": "Chandigarh",
    "phone": "91989281861",
    "status": "Instagram DM Only",
    "pitch": "Hey Team Aesthetic Crochet Studio! Loved your IG page. Stop losing customer orders in flooded DMs — get a 0.3s web store with 3-sec WhatsApp checkout."
  },
  {
    "id": 31,
    "name": "Aesthetic Press-on Crafts",
    "category": "Custom Press-on Nail Artist",
    "city": "Kochi",
    "phone": "91989520381",
    "status": "WhatsApp Orders Only",
    "pitch": "Hi Aesthetic Press-on Crafts! Convert your Instagram Reel views into instant paid orders without manual DM back-and-forth."
  },
  {
    "id": 32,
    "name": "Aesthetic Cold-Process Closet",
    "category": "Artisanal Cold-Process Soap Maker",
    "city": "Kolkata",
    "phone": "91989759800",
    "status": "IG Bio Linktree Only",
    "pitch": "Hey Aesthetic Cold-Process Closet! Showcase your products with prices on a Neobrutalist 100/100 speed store linked in your IG bio."
  },
  {
    "id": 33,
    "name": "Aesthetic Sticker Lab",
    "category": "Indie Sticker & Stationery Studio",
    "city": "Shillong",
    "phone": "91989998320",
    "status": "Instagram DM Only",
    "pitch": "Hey Team Aesthetic Sticker Lab! Loved your IG page. Stop losing customer orders in flooded DMs — get a 0.3s web store with 3-sec WhatsApp checkout."
  },
  {
    "id": 34,
    "name": "Aesthetic Fitness Co.",
    "category": "Micro Fitness & Pilates IG Coach",
    "city": "Ahmedabad",
    "phone": "91981238739",
    "status": "IG Bio Linktree Only",
    "pitch": "Hi Aesthetic Fitness Co.! Convert your Instagram Reel views into instant paid orders without manual DM back-and-forth."
  },
  {
    "id": 35,
    "name": "Aesthetic Pet Creations",
    "category": "Handmade Pet Accessories & Treats",
    "city": "Dehradun",
    "phone": "91981477259",
    "status": "WhatsApp Orders Only",
    "pitch": "Hey Aesthetic Pet Creations! Showcase your products with prices on a Neobrutalist 100/100 speed store linked in your IG bio."
  },
  {
    "id": 36,
    "name": "Aesthetic Thrift Boutique",
    "category": "Instagram Thrift & Vintage Store",
    "city": "Delhi NCR",
    "phone": "91981716678",
    "status": "Instagram DM Only",
    "pitch": "Hey Team Aesthetic Thrift Boutique! Loved your IG page. Stop losing customer orders in flooded DMs — get a 0.3s web store with 3-sec WhatsApp checkout."
  },
  {
    "id": 37,
    "name": "Aesthetic Polymer Finds",
    "category": "Handcrafted Polymer Clay Jewelry",
    "city": "Mumbai",
    "phone": "91981955198",
    "status": "WhatsApp Orders Only",
    "pitch": "Hi Aesthetic Polymer Finds! Convert your Instagram Reel views into instant paid orders without manual DM back-and-forth."
  },
  {
    "id": 38,
    "name": "Aesthetic Bento Hub",
    "category": "Custom Bento Cake & Dessert Shop",
    "city": "Bengaluru",
    "phone": "91982194617",
    "status": "IG Bio Linktree Only",
    "pitch": "Hey Aesthetic Bento Hub! Showcase your products with prices on a Neobrutalist 100/100 speed store linked in your IG bio."
  },
  {
    "id": 39,
    "name": "Vintage Soy Studio",
    "category": "Scented Soy Candle & Wax Melt Artisan",
    "city": "Pune",
    "phone": "91982433137",
    "status": "Instagram DM Only",
    "pitch": "Hey Team Vintage Soy Studio! Loved your IG page. Stop losing customer orders in flooded DMs — get a 0.3s web store with 3-sec WhatsApp checkout."
  },
  {
    "id": 40,
    "name": "Vintage Canvas Crafts",
    "category": "Hand-Painted Canvas Totes & Denim",
    "city": "Jaipur",
    "phone": "91982672556",
    "status": "IG Bio Linktree Only",
    "pitch": "Hi Vintage Canvas Crafts! Convert your Instagram Reel views into instant paid orders without manual DM back-and-forth."
  },
  {
    "id": 41,
    "name": "Vintage Art Closet",
    "category": "Resin Art & Flower Keepsake Studio",
    "city": "Hyderabad",
    "phone": "91982911975",
    "status": "WhatsApp Orders Only",
    "pitch": "Hey Vintage Art Closet! Showcase your products with prices on a Neobrutalist 100/100 speed store linked in your IG bio."
  },
  {
    "id": 42,
    "name": "Vintage Crochet Lab",
    "category": "Handmade Crochet & Knitwear Brand",
    "city": "Chandigarh",
    "phone": "91983150495",
    "status": "Instagram DM Only",
    "pitch": "Hey Team Vintage Crochet Lab! Loved your IG page. Stop losing customer orders in flooded DMs — get a 0.3s web store with 3-sec WhatsApp checkout."
  },
  {
    "id": 43,
    "name": "Vintage Press-on Co.",
    "category": "Custom Press-on Nail Artist",
    "city": "Kochi",
    "phone": "91983389914",
    "status": "WhatsApp Orders Only",
    "pitch": "Hi Vintage Press-on Co.! Convert your Instagram Reel views into instant paid orders without manual DM back-and-forth."
  },
  {
    "id": 44,
    "name": "Vintage Cold-Process Creations",
    "category": "Artisanal Cold-Process Soap Maker",
    "city": "Kolkata",
    "phone": "91983628434",
    "status": "IG Bio Linktree Only",
    "pitch": "Hey Vintage Cold-Process Creations! Showcase your products with prices on a Neobrutalist 100/100 speed store linked in your IG bio."
  },
  {
    "id": 45,
    "name": "Vintage Sticker Boutique",
    "category": "Indie Sticker & Stationery Studio",
    "city": "Shillong",
    "phone": "91983867853",
    "status": "Instagram DM Only",
    "pitch": "Hey Team Vintage Sticker Boutique! Loved your IG page. Stop losing customer orders in flooded DMs — get a 0.3s web store with 3-sec WhatsApp checkout."
  },
  {
    "id": 46,
    "name": "Vintage Fitness Finds",
    "category": "Micro Fitness & Pilates IG Coach",
    "city": "Ahmedabad",
    "phone": "91984106373",
    "status": "IG Bio Linktree Only",
    "pitch": "Hi Vintage Fitness Finds! Convert your Instagram Reel views into instant paid orders without manual DM back-and-forth."
  },
  {
    "id": 47,
    "name": "Vintage Pet Hub",
    "category": "Handmade Pet Accessories & Treats",
    "city": "Dehradun",
    "phone": "91984345792",
    "status": "WhatsApp Orders Only",
    "pitch": "Hey Vintage Pet Hub! Showcase your products with prices on a Neobrutalist 100/100 speed store linked in your IG bio."
  },
  {
    "id": 48,
    "name": "Velvet Thrift Studio",
    "category": "Instagram Thrift & Vintage Store",
    "city": "Delhi NCR",
    "phone": "91984584312",
    "status": "Instagram DM Only",
    "pitch": "Hey Team Velvet Thrift Studio! Loved your IG page. Stop losing customer orders in flooded DMs — get a 0.3s web store with 3-sec WhatsApp checkout."
  },
  {
    "id": 49,
    "name": "Velvet Polymer Crafts",
    "category": "Handcrafted Polymer Clay Jewelry",
    "city": "Mumbai",
    "phone": "91984823731",
    "status": "WhatsApp Orders Only",
    "pitch": "Hi Velvet Polymer Crafts! Convert your Instagram Reel views into instant paid orders without manual DM back-and-forth."
  },
  {
    "id": 50,
    "name": "Velvet Bento Closet",
    "category": "Custom Bento Cake & Dessert Shop",
    "city": "Bengaluru",
    "phone": "91985062251",
    "status": "IG Bio Linktree Only",
    "pitch": "Hey Velvet Bento Closet! Showcase your products with prices on a Neobrutalist 100/100 speed store linked in your IG bio."
  },
  {
    "id": 51,
    "name": "Velvet Soy Lab",
    "category": "Scented Soy Candle & Wax Melt Artisan",
    "city": "Pune",
    "phone": "91985301670",
    "status": "Instagram DM Only",
    "pitch": "Hey Team Velvet Soy Lab! Loved your IG page. Stop losing customer orders in flooded DMs — get a 0.3s web store with 3-sec WhatsApp checkout."
  },
  {
    "id": 52,
    "name": "Velvet Canvas Co.",
    "category": "Hand-Painted Canvas Totes & Denim",
    "city": "Jaipur",
    "phone": "91985540190",
    "status": "IG Bio Linktree Only",
    "pitch": "Hi Velvet Canvas Co.! Convert your Instagram Reel views into instant paid orders without manual DM back-and-forth."
  },
  {
    "id": 53,
    "name": "Velvet Art Creations",
    "category": "Resin Art & Flower Keepsake Studio",
    "city": "Hyderabad",
    "phone": "91985779609",
    "status": "WhatsApp Orders Only",
    "pitch": "Hey Velvet Art Creations! Showcase your products with prices on a Neobrutalist 100/100 speed store linked in your IG bio."
  },
  {
    "id": 54,
    "name": "Velvet Crochet Boutique",
    "category": "Handmade Crochet & Knitwear Brand",
    "city": "Chandigarh",
    "phone": "91986018129",
    "status": "Instagram DM Only",
    "pitch": "Hey Team Velvet Crochet Boutique! Loved your IG page. Stop losing customer orders in flooded DMs — get a 0.3s web store with 3-sec WhatsApp checkout."
  },
  {
    "id": 55,
    "name": "Velvet Press-on Finds",
    "category": "Custom Press-on Nail Artist",
    "city": "Kochi",
    "phone": "91986257548",
    "status": "WhatsApp Orders Only",
    "pitch": "Hi Velvet Press-on Finds! Convert your Instagram Reel views into instant paid orders without manual DM back-and-forth."
  },
  {
    "id": 56,
    "name": "Velvet Cold-Process Hub",
    "category": "Artisanal Cold-Process Soap Maker",
    "city": "Kolkata",
    "phone": "91986496967",
    "status": "IG Bio Linktree Only",
    "pitch": "Hey Velvet Cold-Process Hub! Showcase your products with prices on a Neobrutalist 100/100 speed store linked in your IG bio."
  },
  {
    "id": 57,
    "name": "Botanical Sticker Studio",
    "category": "Indie Sticker & Stationery Studio",
    "city": "Shillong",
    "phone": "91986735487",
    "status": "Instagram DM Only",
    "pitch": "Hey Team Botanical Sticker Studio! Loved your IG page. Stop losing customer orders in flooded DMs — get a 0.3s web store with 3-sec WhatsApp checkout."
  },
  {
    "id": 58,
    "name": "Botanical Fitness Crafts",
    "category": "Micro Fitness & Pilates IG Coach",
    "city": "Ahmedabad",
    "phone": "91986974906",
    "status": "IG Bio Linktree Only",
    "pitch": "Hi Botanical Fitness Crafts! Convert your Instagram Reel views into instant paid orders without manual DM back-and-forth."
  },
  {
    "id": 59,
    "name": "Botanical Pet Closet",
    "category": "Handmade Pet Accessories & Treats",
    "city": "Dehradun",
    "phone": "91987213426",
    "status": "WhatsApp Orders Only",
    "pitch": "Hey Botanical Pet Closet! Showcase your products with prices on a Neobrutalist 100/100 speed store linked in your IG bio."
  },
  {
    "id": 60,
    "name": "Botanical Thrift Lab",
    "category": "Instagram Thrift & Vintage Store",
    "city": "Delhi NCR",
    "phone": "91987452845",
    "status": "Instagram DM Only",
    "pitch": "Hey Team Botanical Thrift Lab! Loved your IG page. Stop losing customer orders in flooded DMs — get a 0.3s web store with 3-sec WhatsApp checkout."
  },
  {
    "id": 61,
    "name": "Botanical Polymer Co.",
    "category": "Handcrafted Polymer Clay Jewelry",
    "city": "Mumbai",
    "phone": "91987691365",
    "status": "WhatsApp Orders Only",
    "pitch": "Hi Botanical Polymer Co.! Convert your Instagram Reel views into instant paid orders without manual DM back-and-forth."
  },
  {
    "id": 62,
    "name": "Botanical Bento Creations",
    "category": "Custom Bento Cake & Dessert Shop",
    "city": "Bengaluru",
    "phone": "91987930784",
    "status": "IG Bio Linktree Only",
    "pitch": "Hey Botanical Bento Creations! Showcase your products with prices on a Neobrutalist 100/100 speed store linked in your IG bio."
  },
  {
    "id": 63,
    "name": "Botanical Soy Boutique",
    "category": "Scented Soy Candle & Wax Melt Artisan",
    "city": "Pune",
    "phone": "91988169304",
    "status": "Instagram DM Only",
    "pitch": "Hey Team Botanical Soy Boutique! Loved your IG page. Stop losing customer orders in flooded DMs — get a 0.3s web store with 3-sec WhatsApp checkout."
  },
  {
    "id": 64,
    "name": "Botanical Canvas Finds",
    "category": "Hand-Painted Canvas Totes & Denim",
    "city": "Jaipur",
    "phone": "91988408723",
    "status": "IG Bio Linktree Only",
    "pitch": "Hi Botanical Canvas Finds! Convert your Instagram Reel views into instant paid orders without manual DM back-and-forth."
  },
  {
    "id": 65,
    "name": "Botanical Art Hub",
    "category": "Resin Art & Flower Keepsake Studio",
    "city": "Hyderabad",
    "phone": "91988647243",
    "status": "WhatsApp Orders Only",
    "pitch": "Hey Botanical Art Hub! Showcase your products with prices on a Neobrutalist 100/100 speed store linked in your IG bio."
  },
  {
    "id": 66,
    "name": "Soulful Crochet Studio",
    "category": "Handmade Crochet & Knitwear Brand",
    "city": "Chandigarh",
    "phone": "91988886662",
    "status": "Instagram DM Only",
    "pitch": "Hey Team Soulful Crochet Studio! Loved your IG page. Stop losing customer orders in flooded DMs — get a 0.3s web store with 3-sec WhatsApp checkout."
  },
  {
    "id": 67,
    "name": "Soulful Press-on Crafts",
    "category": "Custom Press-on Nail Artist",
    "city": "Kochi",
    "phone": "91989125182",
    "status": "WhatsApp Orders Only",
    "pitch": "Hi Soulful Press-on Crafts! Convert your Instagram Reel views into instant paid orders without manual DM back-and-forth."
  },
  {
    "id": 68,
    "name": "Soulful Cold-Process Closet",
    "category": "Artisanal Cold-Process Soap Maker",
    "city": "Kolkata",
    "phone": "91989364601",
    "status": "IG Bio Linktree Only",
    "pitch": "Hey Soulful Cold-Process Closet! Showcase your products with prices on a Neobrutalist 100/100 speed store linked in your IG bio."
  },
  {
    "id": 69,
    "name": "Soulful Sticker Lab",
    "category": "Indie Sticker & Stationery Studio",
    "city": "Shillong",
    "phone": "91989603121",
    "status": "Instagram DM Only",
    "pitch": "Hey Team Soulful Sticker Lab! Loved your IG page. Stop losing customer orders in flooded DMs — get a 0.3s web store with 3-sec WhatsApp checkout."
  },
  {
    "id": 70,
    "name": "Soulful Fitness Co.",
    "category": "Micro Fitness & Pilates IG Coach",
    "city": "Ahmedabad",
    "phone": "91989842540",
    "status": "IG Bio Linktree Only",
    "pitch": "Hi Soulful Fitness Co.! Convert your Instagram Reel views into instant paid orders without manual DM back-and-forth."
  },
  {
    "id": 71,
    "name": "Soulful Pet Creations",
    "category": "Handmade Pet Accessories & Treats",
    "city": "Dehradun",
    "phone": "91981082959",
    "status": "WhatsApp Orders Only",
    "pitch": "Hey Soulful Pet Creations! Showcase your products with prices on a Neobrutalist 100/100 speed store linked in your IG bio."
  },
  {
    "id": 72,
    "name": "Soulful Thrift Boutique",
    "category": "Instagram Thrift & Vintage Store",
    "city": "Delhi NCR",
    "phone": "91981321479",
    "status": "Instagram DM Only",
    "pitch": "Hey Team Soulful Thrift Boutique! Loved your IG page. Stop losing customer orders in flooded DMs — get a 0.3s web store with 3-sec WhatsApp checkout."
  },
  {
    "id": 73,
    "name": "Soulful Polymer Finds",
    "category": "Handcrafted Polymer Clay Jewelry",
    "city": "Mumbai",
    "phone": "91981560898",
    "status": "WhatsApp Orders Only",
    "pitch": "Hi Soulful Polymer Finds! Convert your Instagram Reel views into instant paid orders without manual DM back-and-forth."
  },
  {
    "id": 74,
    "name": "Soulful Bento Hub",
    "category": "Custom Bento Cake & Dessert Shop",
    "city": "Bengaluru",
    "phone": "91981799418",
    "status": "IG Bio Linktree Only",
    "pitch": "Hey Soulful Bento Hub! Showcase your products with prices on a Neobrutalist 100/100 speed store linked in your IG bio."
  },
  {
    "id": 75,
    "name": "Urban Soy Studio",
    "category": "Scented Soy Candle & Wax Melt Artisan",
    "city": "Pune",
    "phone": "91982038837",
    "status": "Instagram DM Only",
    "pitch": "Hey Team Urban Soy Studio! Loved your IG page. Stop losing customer orders in flooded DMs — get a 0.3s web store with 3-sec WhatsApp checkout."
  },
  {
    "id": 76,
    "name": "Urban Canvas Crafts",
    "category": "Hand-Painted Canvas Totes & Denim",
    "city": "Jaipur",
    "phone": "91982277357",
    "status": "IG Bio Linktree Only",
    "pitch": "Hi Urban Canvas Crafts! Convert your Instagram Reel views into instant paid orders without manual DM back-and-forth."
  },
  {
    "id": 77,
    "name": "Urban Art Closet",
    "category": "Resin Art & Flower Keepsake Studio",
    "city": "Hyderabad",
    "phone": "91982516776",
    "status": "WhatsApp Orders Only",
    "pitch": "Hey Urban Art Closet! Showcase your products with prices on a Neobrutalist 100/100 speed store linked in your IG bio."
  },
  {
    "id": 78,
    "name": "Urban Crochet Lab",
    "category": "Handmade Crochet & Knitwear Brand",
    "city": "Chandigarh",
    "phone": "91982755296",
    "status": "Instagram DM Only",
    "pitch": "Hey Team Urban Crochet Lab! Loved your IG page. Stop losing customer orders in flooded DMs — get a 0.3s web store with 3-sec WhatsApp checkout."
  },
  {
    "id": 79,
    "name": "Urban Press-on Co.",
    "category": "Custom Press-on Nail Artist",
    "city": "Kochi",
    "phone": "91982994715",
    "status": "WhatsApp Orders Only",
    "pitch": "Hi Urban Press-on Co.! Convert your Instagram Reel views into instant paid orders without manual DM back-and-forth."
  },
  {
    "id": 80,
    "name": "Urban Cold-Process Creations",
    "category": "Artisanal Cold-Process Soap Maker",
    "city": "Kolkata",
    "phone": "91983233235",
    "status": "IG Bio Linktree Only",
    "pitch": "Hey Urban Cold-Process Creations! Showcase your products with prices on a Neobrutalist 100/100 speed store linked in your IG bio."
  },
  {
    "id": 81,
    "name": "Urban Sticker Boutique",
    "category": "Indie Sticker & Stationery Studio",
    "city": "Shillong",
    "phone": "91983472654",
    "status": "Instagram DM Only",
    "pitch": "Hey Team Urban Sticker Boutique! Loved your IG page. Stop losing customer orders in flooded DMs — get a 0.3s web store with 3-sec WhatsApp checkout."
  },
  {
    "id": 82,
    "name": "Urban Fitness Finds",
    "category": "Micro Fitness & Pilates IG Coach",
    "city": "Ahmedabad",
    "phone": "91983711174",
    "status": "IG Bio Linktree Only",
    "pitch": "Hi Urban Fitness Finds! Convert your Instagram Reel views into instant paid orders without manual DM back-and-forth."
  },
  {
    "id": 83,
    "name": "Urban Pet Hub",
    "category": "Handmade Pet Accessories & Treats",
    "city": "Dehradun",
    "phone": "91983950593",
    "status": "WhatsApp Orders Only",
    "pitch": "Hey Urban Pet Hub! Showcase your products with prices on a Neobrutalist 100/100 speed store linked in your IG bio."
  },
  {
    "id": 84,
    "name": "Retro Thrift Studio",
    "category": "Instagram Thrift & Vintage Store",
    "city": "Delhi NCR",
    "phone": "91984189113",
    "status": "Instagram DM Only",
    "pitch": "Hey Team Retro Thrift Studio! Loved your IG page. Stop losing customer orders in flooded DMs — get a 0.3s web store with 3-sec WhatsApp checkout."
  },
  {
    "id": 85,
    "name": "Retro Polymer Crafts",
    "category": "Handcrafted Polymer Clay Jewelry",
    "city": "Mumbai",
    "phone": "91984428532",
    "status": "WhatsApp Orders Only",
    "pitch": "Hi Retro Polymer Crafts! Convert your Instagram Reel views into instant paid orders without manual DM back-and-forth."
  },
  {
    "id": 86,
    "name": "Retro Bento Closet",
    "category": "Custom Bento Cake & Dessert Shop",
    "city": "Bengaluru",
    "phone": "91984667951",
    "status": "IG Bio Linktree Only",
    "pitch": "Hey Retro Bento Closet! Showcase your products with prices on a Neobrutalist 100/100 speed store linked in your IG bio."
  },
  {
    "id": 87,
    "name": "Retro Soy Lab",
    "category": "Scented Soy Candle & Wax Melt Artisan",
    "city": "Pune",
    "phone": "91984906471",
    "status": "Instagram DM Only",
    "pitch": "Hey Team Retro Soy Lab! Loved your IG page. Stop losing customer orders in flooded DMs — get a 0.3s web store with 3-sec WhatsApp checkout."
  },
  {
    "id": 88,
    "name": "Retro Canvas Co.",
    "category": "Hand-Painted Canvas Totes & Denim",
    "city": "Jaipur",
    "phone": "91985145890",
    "status": "IG Bio Linktree Only",
    "pitch": "Hi Retro Canvas Co.! Convert your Instagram Reel views into instant paid orders without manual DM back-and-forth."
  },
  {
    "id": 89,
    "name": "Retro Art Creations",
    "category": "Resin Art & Flower Keepsake Studio",
    "city": "Hyderabad",
    "phone": "91985384410",
    "status": "WhatsApp Orders Only",
    "pitch": "Hey Retro Art Creations! Showcase your products with prices on a Neobrutalist 100/100 speed store linked in your IG bio."
  },
  {
    "id": 90,
    "name": "Retro Crochet Boutique",
    "category": "Handmade Crochet & Knitwear Brand",
    "city": "Chandigarh",
    "phone": "91985623829",
    "status": "Instagram DM Only",
    "pitch": "Hey Team Retro Crochet Boutique! Loved your IG page. Stop losing customer orders in flooded DMs — get a 0.3s web store with 3-sec WhatsApp checkout."
  },
  {
    "id": 91,
    "name": "Retro Press-on Finds",
    "category": "Custom Press-on Nail Artist",
    "city": "Kochi",
    "phone": "91985862349",
    "status": "WhatsApp Orders Only",
    "pitch": "Hi Retro Press-on Finds! Convert your Instagram Reel views into instant paid orders without manual DM back-and-forth."
  },
  {
    "id": 92,
    "name": "Retro Cold-Process Hub",
    "category": "Artisanal Cold-Process Soap Maker",
    "city": "Kolkata",
    "phone": "91986101768",
    "status": "IG Bio Linktree Only",
    "pitch": "Hey Retro Cold-Process Hub! Showcase your products with prices on a Neobrutalist 100/100 speed store linked in your IG bio."
  },
  {
    "id": 93,
    "name": "Golden Sticker Studio",
    "category": "Indie Sticker & Stationery Studio",
    "city": "Shillong",
    "phone": "91986340288",
    "status": "Instagram DM Only",
    "pitch": "Hey Team Golden Sticker Studio! Loved your IG page. Stop losing customer orders in flooded DMs — get a 0.3s web store with 3-sec WhatsApp checkout."
  },
  {
    "id": 94,
    "name": "Golden Fitness Crafts",
    "category": "Micro Fitness & Pilates IG Coach",
    "city": "Ahmedabad",
    "phone": "91986579707",
    "status": "IG Bio Linktree Only",
    "pitch": "Hi Golden Fitness Crafts! Convert your Instagram Reel views into instant paid orders without manual DM back-and-forth."
  },
  {
    "id": 95,
    "name": "Golden Pet Closet",
    "category": "Handmade Pet Accessories & Treats",
    "city": "Dehradun",
    "phone": "91986818227",
    "status": "WhatsApp Orders Only",
    "pitch": "Hey Golden Pet Closet! Showcase your products with prices on a Neobrutalist 100/100 speed store linked in your IG bio."
  },
  {
    "id": 96,
    "name": "Golden Thrift Lab",
    "category": "Instagram Thrift & Vintage Store",
    "city": "Delhi NCR",
    "phone": "91987057646",
    "status": "Instagram DM Only",
    "pitch": "Hey Team Golden Thrift Lab! Loved your IG page. Stop losing customer orders in flooded DMs — get a 0.3s web store with 3-sec WhatsApp checkout."
  },
  {
    "id": 97,
    "name": "Golden Polymer Co.",
    "category": "Handcrafted Polymer Clay Jewelry",
    "city": "Mumbai",
    "phone": "91987296166",
    "status": "WhatsApp Orders Only",
    "pitch": "Hi Golden Polymer Co.! Convert your Instagram Reel views into instant paid orders without manual DM back-and-forth."
  },
  {
    "id": 98,
    "name": "Golden Bento Creations",
    "category": "Custom Bento Cake & Dessert Shop",
    "city": "Bengaluru",
    "phone": "91987535585",
    "status": "IG Bio Linktree Only",
    "pitch": "Hey Golden Bento Creations! Showcase your products with prices on a Neobrutalist 100/100 speed store linked in your IG bio."
  },
  {
    "id": 99,
    "name": "Golden Soy Boutique",
    "category": "Scented Soy Candle & Wax Melt Artisan",
    "city": "Pune",
    "phone": "91987774105",
    "status": "Instagram DM Only",
    "pitch": "Hey Team Golden Soy Boutique! Loved your IG page. Stop losing customer orders in flooded DMs — get a 0.3s web store with 3-sec WhatsApp checkout."
  },
  {
    "id": 100,
    "name": "Golden Canvas Finds",
    "category": "Hand-Painted Canvas Totes & Denim",
    "city": "Jaipur",
    "phone": "91988013524",
    "status": "IG Bio Linktree Only",
    "pitch": "Hi Golden Canvas Finds! Convert your Instagram Reel views into instant paid orders without manual DM back-and-forth."
  },
  {
    "id": 101,
    "name": "Golden Art Hub",
    "category": "Resin Art & Flower Keepsake Studio",
    "city": "Hyderabad",
    "phone": "91988252943",
    "status": "WhatsApp Orders Only",
    "pitch": "Hey Golden Art Hub! Showcase your products with prices on a Neobrutalist 100/100 speed store linked in your IG bio."
  },
  {
    "id": 102,
    "name": "Little Crochet Studio",
    "category": "Handmade Crochet & Knitwear Brand",
    "city": "Chandigarh",
    "phone": "91988491463",
    "status": "Instagram DM Only",
    "pitch": "Hey Team Little Crochet Studio! Loved your IG page. Stop losing customer orders in flooded DMs — get a 0.3s web store with 3-sec WhatsApp checkout."
  },
  {
    "id": 103,
    "name": "Little Press-on Crafts",
    "category": "Custom Press-on Nail Artist",
    "city": "Kochi",
    "phone": "91988730882",
    "status": "WhatsApp Orders Only",
    "pitch": "Hi Little Press-on Crafts! Convert your Instagram Reel views into instant paid orders without manual DM back-and-forth."
  },
  {
    "id": 104,
    "name": "Little Cold-Process Closet",
    "category": "Artisanal Cold-Process Soap Maker",
    "city": "Kolkata",
    "phone": "91988969402",
    "status": "IG Bio Linktree Only",
    "pitch": "Hey Little Cold-Process Closet! Showcase your products with prices on a Neobrutalist 100/100 speed store linked in your IG bio."
  },
  {
    "id": 105,
    "name": "Little Sticker Lab",
    "category": "Indie Sticker & Stationery Studio",
    "city": "Shillong",
    "phone": "91989208821",
    "status": "Instagram DM Only",
    "pitch": "Hey Team Little Sticker Lab! Loved your IG page. Stop losing customer orders in flooded DMs — get a 0.3s web store with 3-sec WhatsApp checkout."
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
