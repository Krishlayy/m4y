import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with the founders of M4Y for your digital marketing needs.",
  openGraph: {
    title: "Contact Us | M4Y",
    description: "Get in touch with the founders of M4Y for your digital marketing needs.",
    url: "https://marketing4you.in/contact",
    images: [{ url: "/logo.png", width: 800, height: 600, alt: "M4Y Logo" }],
  }
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
