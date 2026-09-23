import { Metadata } from "next";
import { getSiteUrl } from "@/lib/site-url";

export const metadata: Metadata = {
  title: "Social Media Marketing Agency — Instagram, LinkedIn, YouTube | M4Y",
  description:
    "Grow your brand on Instagram, LinkedIn, YouTube & X with data-driven social media strategies. M4Y manages content creation, community building, paid social campaigns & viral Reels that drive real engagement.",
  keywords: [
    "social media marketing agency",
    "social media marketing India",
    "Instagram marketing agency",
    "LinkedIn marketing",
    "YouTube marketing agency",
    "social media management",
    "social media content creation",
    "paid social campaigns",
    "Instagram Reels marketing",
  ],
  openGraph: {
    title: "Social Media Marketing Agency | M4Y",
    description:
      "Data-driven social media strategies for Instagram, LinkedIn, YouTube & X. Content, community & paid social campaigns.",
    url: `${getSiteUrl()}/solutions/social-media`,
    images: [{ url: "/logo.png", width: 800, height: 600, alt: "M4Y Social Media Marketing" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Social Media Marketing Agency | M4Y",
    description:
      "Grow your brand on Instagram, LinkedIn, YouTube & X with M4Y's data-driven social strategies.",
  },
  alternates: {
    canonical: `${getSiteUrl()}/solutions/social-media`,
  },
};

export default function SocialMediaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
