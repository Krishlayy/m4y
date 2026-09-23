import { Metadata } from "next";
import { getSiteUrl } from "@/lib/site-url";

export const metadata: Metadata = {
  title: "AI Marketing Solutions — Chatbots, Automation & AI Ads | M4Y",
  description:
    "Leverage AI-powered marketing automation, intelligent chatbots, predictive analytics, and AI-optimized ad campaigns. M4Y is India's leading AI marketing agency delivering 3x ROI with machine learning.",
  keywords: [
    "AI marketing agency",
    "marketing automation India",
    "AI chatbot marketing",
    "predictive analytics marketing",
    "AI advertising",
    "machine learning marketing",
    "AI growth agency",
    "automated marketing campaigns",
  ],
  openGraph: {
    title: "AI Marketing Solutions | M4Y Agency",
    description:
      "AI-powered marketing automation, chatbots, predictive analytics & AI ad optimization — India's leading AI marketing agency.",
    url: `${getSiteUrl()}/solutions/ai`,
    images: [{ url: "/logo.png", width: 800, height: 600, alt: "M4Y AI Marketing" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Marketing Solutions | M4Y",
    description:
      "Next-gen AI marketing: automation, chatbots, predictive analytics. 3x ROI with machine learning.",
  },
  alternates: {
    canonical: `${getSiteUrl()}/solutions/ai`,
  },
};

export default function AILayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
