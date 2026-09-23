import { Metadata } from "next";
import { getSiteUrl } from "@/lib/site-url";

export const metadata: Metadata = {
  title: "About M4Y — India's Growth-First Digital Marketing Agency",
  description:
    "Meet Kishalay Sharma & Ayushman Singh — the young technical founders engineering high-performance digital growth at M4Y. Data-driven performance marketing, SEO, AI automation & brand strategy.",
  keywords: [
    "about M4Y",
    "digital marketing agency India",
    "Kishalay Sharma",
    "Ayushman Singh",
    "marketing agency founders",
    "growth marketing agency",
    "young entrepreneurs India",
  ],
  openGraph: {
    title: "About Us | M4Y Digital Marketing Agency",
    description:
      "Meet Kishalay Sharma & Ayushman Singh — the technical founders engineering high-performance digital growth at M4Y.",
    url: `${getSiteUrl()}/about`,
    images: [{ url: "/logo.png", width: 800, height: 600, alt: "M4Y Logo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "About M4Y | Digital Marketing Agency",
    description:
      "India's growth-first digital marketing agency founded by Kishalay Sharma & Ayushman Singh.",
  },
  alternates: {
    canonical: `${getSiteUrl()}/about`,
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
