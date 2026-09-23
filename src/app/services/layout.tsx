import { Metadata } from "next";
import { getSiteUrl } from "@/lib/site-url";

export const metadata: Metadata = {
  title: "Digital Marketing Services — Performance, SEO, AI & Web Dev | M4Y",
  description:
    "Comprehensive digital marketing services by M4Y: Performance Marketing, SEO, Social Media, AI Automation, Influencer PR, Brand Design & Web Development built for high ROI.",
  keywords: [
    "digital marketing services",
    "performance marketing agency",
    "SEO services India",
    "social media marketing services",
    "AI marketing automation",
    "influencer marketing services",
    "web development services",
    "brand design agency",
  ],
  openGraph: {
    title: "Digital Marketing Services | M4Y",
    description:
      "Performance marketing, SEO, brand design, AI automation, influencer PR, and custom software by M4Y.",
    url: `${getSiteUrl()}/services`,
    images: [{ url: "/logo.png", width: 800, height: 600, alt: "M4Y Logo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing Services | M4Y",
    description:
      "Full-stack digital growth services: Performance Ads, SEO, AI, Social & Web Dev.",
  },
  alternates: {
    canonical: `${getSiteUrl()}/services`,
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
