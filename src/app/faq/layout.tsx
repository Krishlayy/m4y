import { Metadata } from "next";
import { getSiteUrl } from "@/lib/site-url";
import { faqs } from "@/data/faqs";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "FAQ — Digital Marketing Agency Questions Answered | M4Y",
    description:
      "Get answers about digital marketing services, pricing, timelines, SEO, social media management, AI automation, and more from M4Y — India's growth-first marketing agency.",
    keywords: [
      "digital marketing FAQ",
      "marketing agency questions",
      "SEO FAQ",
      "social media marketing questions",
      "digital marketing pricing FAQ",
      "M4Y FAQ",
    ],
    openGraph: {
      title: "Frequently Asked Questions | M4Y Digital Marketing Agency",
      description:
        "Everything you need to know about partnering with M4Y. Digital marketing services, pricing, process, and results — answered transparently.",
      url: `${getSiteUrl()}/faq`,
      images: [{ url: "/logo.png", width: 800, height: 600, alt: "M4Y Logo" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "FAQ | M4Y Digital Marketing Agency",
      description:
        "Digital marketing questions answered. Services, pricing, process, results — M4Y is radically transparent.",
    },
    alternates: {
      canonical: `${getSiteUrl()}/faq`,
    },
  };
}

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.slice(0, 15).map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {children}
    </>
  );
}
