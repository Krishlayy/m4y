"use client";

import { motion } from "framer-motion";
import { SectionHeading, GlassCard } from "@/components/ui/Shared";
import {
  Megaphone,
  Search,
  Bot,
  Users,
  Palette,
  Code,
  BarChart3,
  Sparkles,
} from "lucide-react";
import Link from "next/link";

const capabilities = [
  {
    icon: Megaphone,
    title: "Performance Marketing",
    description:
      "Data-driven campaigns across Meta, Google, YouTube, LinkedIn, TikTok, and more. We don't just run ads — we engineer profitable customer acquisition systems.",
    color: "text-primary",
    gradient: "from-primary/20 to-primary/5",
    href: "/services#performance",
  },
  {
    icon: Search,
    title: "SEO & Content",
    description:
      "Dominate search results with technical SEO, content strategy, and programmatic SEO that drives organic traffic and builds lasting authority.",
    color: "text-accent-cyan",
    gradient: "from-accent-cyan/20 to-accent-cyan/5",
    href: "/services#seo",
  },
  {
    icon: Bot,
    title: "AI Solutions",
    description:
      "Custom AI chatbots, voice agents, appointment booking, lead qualification, and intelligent automation that works 24/7 so your team doesn't have to.",
    color: "text-accent-green",
    gradient: "from-accent-green/20 to-accent-green/5",
    href: "/solutions/ai",
  },
  {
    icon: Users,
    title: "Influencer Marketing",
    description:
      "Access our network of 10,000+ creators — from nano to celebrity. We plan, execute, and measure influencer campaigns that drive real business results.",
    color: "text-secondary",
    gradient: "from-secondary/20 to-secondary/5",
    href: "/solutions/influencer",
  },
  {
    icon: Palette,
    title: "Design & Branding",
    description:
      "World-class brand identity, UI/UX design, motion graphics, and creative production that makes your brand impossible to ignore.",
    color: "text-accent-yellow",
    gradient: "from-accent-yellow/20 to-accent-yellow/5",
    href: "/services#design",
  },
  {
    icon: Code,
    title: "Web & App Development",
    description:
      "High-performance websites, web apps, mobile apps, SaaS platforms, and custom software built with cutting-edge technology.",
    color: "text-primary-light",
    gradient: "from-primary-light/20 to-primary-light/5",
    href: "/solutions/website",
  },
  {
    icon: BarChart3,
    title: "Analytics & BI",
    description:
      "Custom dashboards, marketing analytics, and business intelligence that give you crystal-clear visibility into what's working and what's not.",
    color: "text-accent-cyan",
    gradient: "from-accent-cyan/20 to-accent-cyan/5",
    href: "/services#analytics",
  },
  {
    icon: Sparkles,
    title: "Marketing Automation",
    description:
      "Connect your entire marketing stack with Zapier, Make, n8n, and custom integrations. Automate repetitive tasks and scale without limits.",
    color: "text-accent-green",
    gradient: "from-accent-green/20 to-accent-green/5",
    href: "/services#automation",
  },
];

export default function WhatWeDoSection() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="✦ What We Do"
          title="Ideas. Content. Performance."
          titleHighlight="Results."
          description="We're a full-service growth partner — not a set-it-and-forget-it agency. Every strategy is custom-built around your business goals, market, and customers."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {capabilities.map((cap, i) => (
            <motion.div
              key={cap.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <Link href={cap.href}>
                <GlassCard gradient={`bg-gradient-to-b ${cap.gradient}`}>
                  <div
                    className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${cap.gradient} flex items-center justify-center mb-5`}
                  >
                    <cap.icon className={`w-6 h-6 ${cap.color}`} />
                  </div>
                  <h3 className="text-lg font-bold mb-3 group-hover:text-white transition-colors">
                    {cap.title}
                  </h3>
                  <p className="text-sm text-white/40 leading-relaxed">
                    {cap.description}
                  </p>
                </GlassCard>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
