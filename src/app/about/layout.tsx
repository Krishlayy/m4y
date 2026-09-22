import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "Meet Kishalay Sharma & Ayushman Singh — the technical founders engineering high-performance digital growth at M4Y.",
  openGraph: {
    title: "About Us | M4Y",
    description: "Meet Kishalay Sharma & Ayushman Singh — the technical founders engineering high-performance digital growth at M4Y.",
    url: "https://marketing4you.in/about",
    images: [{ url: "/logo.png", width: 800, height: 600, alt: "M4Y Logo" }],
  }
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
