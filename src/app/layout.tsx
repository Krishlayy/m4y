import type { Metadata } from "next";
import { Inter } from "next/font/google";
import SplashScreen from "@/components/ui/SplashScreen";
import SmoothScroll from "@/components/ui/SmoothScroll";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: {
    default: "M4Y — Creators & Consultants | Digital Marketing Agency",
    template: "%s | M4Y",
  },
  description:
    "M4Y is a premier digital marketing agency blending performance marketing, brand strategy, and AI solutions.",
};

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
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
