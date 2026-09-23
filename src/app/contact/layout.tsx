import { Metadata } from "next";
import { getSiteUrl } from "@/lib/site-url";

export const metadata: Metadata = {
  title: "Contact Us — Book a Strategy Call | M4Y Digital Marketing Agency",
  description:
    "Get in touch with M4Y. Book a free 30-minute growth strategy session directly with founders Kishalay Sharma & Ayushman Singh. Scale your brand today.",
  keywords: [
    "contact M4Y",
    "hire digital marketing agency",
    "book marketing consultation",
    "digital marketing agency contact",
    "M4Y phone number",
    "M4Y WhatsApp",
  ],
  openGraph: {
    title: "Contact Us | M4Y Digital Marketing Agency",
    description:
      "Book a free strategy session directly with founders Kishalay Sharma & Ayushman Singh.",
    url: `${getSiteUrl()}/contact`,
    images: [{ url: "/logo.png", width: 800, height: 600, alt: "M4Y Logo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact M4Y | Digital Marketing Agency",
    description:
      "Get in touch with M4Y. Book a free 30-minute growth strategy session with our founders.",
  },
  alternates: {
    canonical: `${getSiteUrl()}/contact`,
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
