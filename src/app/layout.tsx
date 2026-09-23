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
  display: "swap",
});

import { getSiteSettings } from "@/lib/public-data";
import { getSiteUrl } from "@/lib/site-url";

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSiteSettings();

  const title =
    settings?.defaultSeoTitle ||
    "M4Y — Best Digital Marketing Agency India | Performance, SEO & AI";
  const description =
    settings?.defaultSeoMeta ||
    "M4Y is India's growth-first digital marketing agency. We engineer data-driven performance ads, high-ranking SEO, AI automation, viral social media, and high-converting websites for aggressive brand scale.";

  return {
    metadataBase: new URL(getSiteUrl()),
    title: {
      default: title,
      template: `%s | ${settings?.agencyName || "M4Y Marketing Agency"}`,
    },
    description: description,
    keywords: [
      "digital marketing agency India",
      "best digital marketing agency",
      "performance marketing agency",
      "SEO agency India",
      "AI marketing agency",
      "social media marketing agency",
      "website development agency India",
      "lead generation agency",
      "growth marketing agency",
      "D2C marketing agency",
      "influencer marketing agency India",
      "M4Y world",
      "M4Y agency",
      "Kishalay Sharma",
      "Ayushman Singh",
    ],
    alternates: {
      canonical: getSiteUrl(),
    },
    openGraph: {
      title,
      description,
      url: getSiteUrl(),
      siteName: settings?.agencyName || "M4Y — Marketing 4 You",
      images: [
        {
          url: "/logo.png",
          width: 800,
          height: 600,
          alt: "M4Y Digital Marketing Agency Logo",
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
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const siteUrl = getSiteUrl();

  const schemaData = {
    "@context": "https://schema.org",
    "@type": ["ProfessionalService", "MarketingAgency"],
    "name": "M4Y — Marketing 4 You",
    "alternateName": "M4Y Digital Marketing Agency",
    "url": siteUrl,
    "logo": `${siteUrl}/logo.png`,
    "image": `${siteUrl}/logo.png`,
    "description":
      "India's growth-first digital marketing agency blending performance marketing, search engine optimization (SEO), brand strategy, website engineering, and AI automation.",
    "priceRange": "₹₹",
    "areaServed": {
      "@type": "Country",
      "name": "India",
    },
    "founder": [
      {
        "@type": "Person",
        "name": "Kishalay Sharma",
        "sameAs": "https://www.linkedin.com/in/kishalay-sharma-35752b223/",
      },
      {
        "@type": "Person",
        "name": "Ayushman Singh",
        "sameAs": "https://www.linkedin.com/in/ayushmansingh21/",
      },
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-9258735381",
      "contactType": "customer support",
      "availableLanguage": ["English", "Hindi"],
    },
    "sameAs": [
      "https://www.instagram.com/m4y.agency",
      "https://www.linkedin.com/company/m4y-agency",
    ],
    "knowsAbout": [
      "Digital Marketing",
      "Performance Marketing",
      "Search Engine Optimization (SEO)",
      "Social Media Marketing",
      "AI Marketing Automation",
      "Web Development",
      "Influencer Marketing",
      "Lead Generation",
    ],
  };

  return (
    <html
      lang="en"
      className={`${inter.variable} antialiased`}
      data-scroll-behavior="smooth"
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaData),
          }}
        />
      </head>
      <body className="min-h-screen font-sans bg-white text-[#000000] selection:bg-[#FFD700] selection:text-[#000000] overflow-x-hidden pb-16 md:pb-0">
        <SplashScreen />
        <EasterEgg />
        <SmoothScroll>{children}</SmoothScroll>
        <MobileBottomBar />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
