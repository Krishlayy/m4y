import { Metadata } from "next";
import { getSiteUrl } from "@/lib/site-url";

export const metadata: Metadata = {
  title: "Industries We Serve — Digital Marketing for Every Sector | M4Y",
  description:
    "M4Y delivers tailored digital marketing solutions for e-commerce, healthcare, real estate, education, SaaS, hospitality, fashion, and more. Industry-specific strategies that drive ROI across India.",
  keywords: [
    "industry specific marketing",
    "ecommerce marketing agency",
    "healthcare marketing",
    "real estate digital marketing",
    "SaaS marketing agency India",
    "education marketing",
    "hospitality marketing",
    "D2C marketing agency",
  ],
  openGraph: {
    title: "Industries We Serve | M4Y Digital Marketing Agency",
    description:
      "Tailored digital marketing strategies for e-commerce, healthcare, real estate, education, SaaS, and more.",
    url: `${getSiteUrl()}/industries`,
    images: [{ url: "/logo.png", width: 800, height: 600, alt: "M4Y Logo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Industries We Serve | M4Y",
    description:
      "Industry-specific digital marketing strategies that drive measurable growth across every sector.",
  },
  alternates: {
    canonical: `${getSiteUrl()}/industries`,
  },
};

export default function IndustriesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
