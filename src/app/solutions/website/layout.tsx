import { Metadata } from "next";
import { getSiteUrl } from "@/lib/site-url";

export const metadata: Metadata = {
  title: "Website Design & Development Agency — High-Converting Sites | M4Y",
  description:
    "Custom website design and development with conversion optimization. M4Y builds fast, SEO-optimized, mobile-first websites and web applications that drive leads, sales, and business growth.",
  keywords: [
    "website development agency India",
    "web design agency",
    "custom website development",
    "high converting websites",
    "SEO optimized website",
    "mobile first web design",
    "landing page design",
    "ecommerce website development",
    "Next.js development agency",
    "React development agency",
  ],
  openGraph: {
    title: "Website Design & Development Agency | M4Y",
    description:
      "Fast, SEO-optimized, mobile-first websites and web apps that drive leads and sales. Custom built by M4Y.",
    url: `${getSiteUrl()}/solutions/website`,
    images: [{ url: "/logo.png", width: 800, height: 600, alt: "M4Y Web Development" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Website Design & Development | M4Y",
    description:
      "High-converting, SEO-optimized websites and web applications. Custom built by M4Y agency.",
  },
  alternates: {
    canonical: `${getSiteUrl()}/solutions/website`,
  },
};

export default function WebsiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
