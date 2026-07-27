import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "Meet the 5 BTech CS founders who chose marketing over MNCs to build M4Y.",
  openGraph: {
    title: "About Us | M4Y",
    description: "Meet the 5 BTech CS founders who chose marketing over MNCs to build M4Y.",
    url: "https://marketing4you.in/about",
    images: [{ url: "/logo.png", width: 800, height: 600, alt: "M4Y Logo" }],
  }
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
