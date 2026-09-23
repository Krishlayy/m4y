import { Metadata } from "next";
import { getSiteUrl } from "@/lib/site-url";

export const metadata: Metadata = {
  title: "Influencer Marketing Agency India — Creator Campaigns & PR | M4Y",
  description:
    "Connect with top influencers and creators. M4Y runs end-to-end influencer campaigns across Instagram, YouTube, and LinkedIn — from micro-influencer outreach to celebrity brand partnerships.",
  keywords: [
    "influencer marketing agency India",
    "influencer marketing",
    "creator campaigns",
    "Instagram influencer marketing",
    "YouTube influencer marketing",
    "micro influencer agency",
    "brand ambassador campaigns",
    "influencer PR agency",
    "creator economy",
  ],
  openGraph: {
    title: "Influencer Marketing Agency India | M4Y",
    description:
      "End-to-end influencer campaigns on Instagram, YouTube & LinkedIn. From micro-influencer outreach to celebrity partnerships.",
    url: `${getSiteUrl()}/solutions/influencer`,
    images: [{ url: "/logo.png", width: 800, height: 600, alt: "M4Y Influencer Marketing" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Influencer Marketing Agency | M4Y",
    description:
      "Connect with top influencers & creators. End-to-end campaigns across Instagram, YouTube & LinkedIn.",
  },
  alternates: {
    canonical: `${getSiteUrl()}/solutions/influencer`,
  },
};

export default function InfluencerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
