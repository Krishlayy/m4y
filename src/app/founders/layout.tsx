import { Metadata } from "next";
import { getSiteUrl } from "@/lib/site-url";

export const metadata: Metadata = {
  title: "Meet the Founders — Kishalay Sharma & Ayushman Singh | M4Y",
  description:
    "Kishalay Sharma & Ayushman Singh — young founders building India's fastest-growing digital marketing agency. Performance marketing, AI automation & brand strategy experts.",
  keywords: [
    "M4Y founders",
    "Kishalay Sharma",
    "Ayushman Singh",
    "digital marketing founders India",
    "young marketing entrepreneurs",
    "marketing agency founders",
  ],
  openGraph: {
    title: "Meet the Founders | M4Y Digital Marketing Agency",
    description:
      "Kishalay Sharma & Ayushman Singh — young founders building India's fastest-growing digital marketing agency.",
    url: `${getSiteUrl()}/founders`,
    images: [{ url: "/logo.png", width: 800, height: 600, alt: "M4Y Logo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Meet the Founders | M4Y",
    description:
      "Kishalay Sharma & Ayushman Singh — the technical founders engineering digital growth at M4Y.",
  },
  alternates: {
    canonical: `${getSiteUrl()}/founders`,
  },
};

export default function FoundersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
