import type { Metadata } from "next";
import { Inter } from "next/font/google";
import SplashScreen from "@/components/ui/SplashScreen";
import SmoothScroll from "@/components/ui/SmoothScroll";
import EasterEgg from "@/components/ui/EasterEgg";
import MobileBottomBar from "@/components/ui/MobileBottomBar";
import WhatsAppFloat from "@/components/ui/WhatsAppFloat";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

import { getSiteSettings } from "@/lib/public-data";

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSiteSettings();
  
  const title = settings?.defaultSeoTitle || settings?.agencyName || "M4Y — Creators & Consultants | Digital Marketing Agency";
  const description = settings?.defaultSeoMeta || "M4Y is a premier digital marketing agency blending performance marketing, brand strategy, and AI solutions.";
  
  return {
    metadataBase: new URL("https://marketing4you.in"),
    title: {
      default: title,
      template: `%s | ${settings?.agencyName || "M4Y"}`,
    },
    description: description,
    keywords: ["digital marketing agency india", "performance marketing", "brand strategy", "AI automation agency", "growth agency", "social media marketing", "web development agency"],
    openGraph: {
      title,
      description,
      url: "https://marketing4you.in",
      siteName: settings?.agencyName || "M4Y",
      images: [
        {
          url: "/logo.png",
          width: 800,
          height: 600,
          alt: "M4Y Logo",
        },
      ],
      locale: "en_IN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/logo.png"],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "M4Y Digital Agency",
              "url": "https://marketing4you.in",
              "logo": "https://marketing4you.in/logo.png",
              "description": "Premier digital marketing agency blending performance marketing, brand strategy, and AI solutions.",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "IN"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-92587-35381",
                "contactType": "customer service"
              },
              "sameAs": [
                "https://www.instagram.com/m4y.agency",
                "https://www.youtube.com/@marketing4you"
              ]
            })
          }}
        />
      </head>
      <body className="min-h-screen font-sans bg-white text-[#000000] selection:bg-[#FFD700] selection:text-[#000000] overflow-x-hidden pb-16 md:pb-0">
        <SplashScreen />
        <EasterEgg />
        <SmoothScroll>
          {children}
        </SmoothScroll>
        <MobileBottomBar />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
