import type { Metadata } from "next";
import { Inter } from "next/font/google";
import SplashScreen from "@/components/ui/SplashScreen";
import SmoothScroll from "@/components/ui/SmoothScroll";
import EasterEgg from "@/components/ui/EasterEgg";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

import { getSiteSettings } from "@/lib/public-data";

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSiteSettings();
  
  return {
    title: {
      default: settings?.defaultSeoTitle || settings?.agencyName || "M4Y — Creators & Consultants | Digital Marketing Agency",
      template: `%s | ${settings?.agencyName || "M4Y"}`,
    },
    description: settings?.defaultSeoMeta || "M4Y is a premier digital marketing agency blending performance marketing, brand strategy, and AI solutions.",
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
      </head>
      <body className="min-h-screen font-sans bg-white text-[#000000] selection:bg-[#FFD700] selection:text-[#000000] overflow-x-hidden">
        <SplashScreen />
        <EasterEgg />
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
