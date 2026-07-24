"use client";

import { motion } from "framer-motion";
import { SectionHeading, GlassCard } from "@/components/ui/Shared";
import {
  Zap,
  Palette,
  Bot,
  DollarSign,
  UserCheck,
  FileText,
  TrendingUp,
  Blocks,
  Cpu,
  Shield,
} from "lucide-react";

const reasons = [
  {
    icon: Zap,
    title: "Fast Execution",
    description: "We move at startup speed. Most campaigns go live within 48 hours of onboarding.",
    color: "text-accent-yellow",
  },
  {
    icon: Palette,
    title: "Creative Team",
    description: "Award-winning designers, copywriters, and videographers who make your brand unforgettable.",
    color: "text-secondary",
  },
  {
    icon: Bot,
    title: "AI Powered",
    description: "We leverage AI across every workflow — from content generation to campaign optimization to chatbots.",
    color: "text-accent-cyan",
  },
  {
    icon: DollarSign,
    title: "Transparent Pricing",
    description: "No hidden fees, no long-term lock-ins. You know exactly what you're paying for, always.",
    color: "text-accent-green",
  },
  {
    icon: UserCheck,
    title: "Dedicated Manager",
    description: "Every client gets a dedicated account manager who knows your business inside and out.",
    color: "text-primary",
  },
  {
    icon: FileText,
    title: "Weekly Reports",
    description: "Crystal-clear reporting with actionable insights. No vanity metrics — only numbers that matter.",
    color: "text-primary-light",
  },
  {
    icon: TrendingUp,
    title: "Real ROI",
    description: "We're obsessed with revenue, not impressions. Every strategy is built to deliver measurable returns.",
    color: "text-accent-green",
  },
  {
    icon: Blocks,
    title: "Scalable Solutions",
    description: "From startup to enterprise — our systems grow with you. No rebuilding, no migration headaches.",
    color: "text-secondary",
  },
  {
    icon: Cpu,
    title: "Latest Technology",
    description: "React, Next.js, AI/ML, automation — we use cutting-edge tech that keeps you ahead of competition.",
    color: "text-accent-cyan",
  },
  {
    icon: Shield,
    title: "Enterprise Quality",
    description: "Security, performance, and reliability standards that match Fortune 500 companies.",
    color: "text-accent-yellow",
  },
];

export default function WhyChooseUsSection() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="⚡ Why M4Y"
          title="Marketing Engineered"
          titleHighlight="for Growth"
          description="We're not another agency that overpromises and underdelivers. Here's why 150+ brands trust M4Y with their growth."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
            >
              <GlassCard className="h-full">
                <reason.icon className={`w-8 h-8 ${reason.color} mb-4`} />
                <h3 className="font-bold text-white mb-2">{reason.title}</h3>
                <p className="text-sm text-white/40 leading-relaxed">
                  {reason.description}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
