import { PrismaClient } from '@prisma/client';

export async function seedPricing(prisma: PrismaClient) {
  const plans = [
    {
      name: "Starter",
      price: "₹4,999 – ₹9,999",
      category: "Starter",
      description: "Perfect for local businesses & creators establishing their online presence.",
      deliverables: ["Basic Website Setup", "Google Business Profile Optimization", "2 Social Media Posts/Week", "Monthly Report"],
      idealClient: "Local shops, solo creators, and freelancers.",
      timeline: "1-2 Weeks",
      addOns: ["Logo Design", "Basic SEO Setup"],
      ctaText: "Get Started",
      displayOrder: 1,
    },
    {
      name: "Growth",
      price: "₹10,000 – ₹19,999",
      category: "Growth",
      description: "Ideal for startups & growing brands looking to scale their digital footprint.",
      deliverables: ["Custom Website Design", "Advanced SEO Optimization", "4 Social Media Posts/Week", "Basic Performance Ads Management", "Bi-Weekly Strategy Calls"],
      idealClient: "Early-stage startups, emerging e-commerce brands.",
      timeline: "3-4 Weeks",
      addOns: ["Email Marketing Setup", "CRM Integration"],
      ctaText: "Accelerate Growth",
      displayOrder: 2,
      isPopular: true,
    },
    {
      name: "Scale",
      price: "₹20,000 – ₹35,000",
      category: "Scale",
      description: "Complete digital growth solution for established businesses.",
      deliverables: ["Full E-commerce/Web App Development", "Comprehensive Omni-channel SEO", "Daily Social Media Management", "Advanced Meta/Google Ads Scaling", "Custom AI Chatbot Integration", "Weekly Reporting"],
      idealClient: "Established retail brands, B2B companies, funded startups.",
      timeline: "4-6 Weeks",
      addOns: ["Custom Workflow Automation", "Influencer Marketing Campaign"],
      ctaText: "Scale Now",
      displayOrder: 3,
    },
    {
      name: "Enterprise",
      price: "Custom Quote",
      category: "Enterprise",
      description: "Tailored digital transformation and large-scale marketing campaigns.",
      deliverables: ["Dedicated Account Manager", "Custom Software/SaaS Development", "Enterprise SEO & Content Strategy", "Million-Dollar Ad Spend Management", "Custom AI Agents", "24/7 Support"],
      idealClient: "Large enterprises, multinational brands, high-growth tech companies.",
      timeline: "Custom",
      addOns: ["On-site Consulting", "White-label Services"],
      ctaText: "Contact Us",
      displayOrder: 4,
    }
  ];

  for (const plan of plans) {
    await prisma.pricingPlan.create({ data: plan });
  }
  console.log('Pricing seeded.');
}
