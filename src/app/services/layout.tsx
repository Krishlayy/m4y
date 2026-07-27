import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description: "Performance marketing, SEO, brand design, AI automation, influencer PR, and custom software by M4Y.",
  openGraph: {
    title: "Services | M4Y",
    description: "Performance marketing, SEO, brand design, AI automation, influencer PR, and custom software by M4Y.",
    url: "https://marketing4you.in/services",
    images: [{ url: "/logo.png", width: 800, height: 600, alt: "M4Y Logo" }],
  }
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
