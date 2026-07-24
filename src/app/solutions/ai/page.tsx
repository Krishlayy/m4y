'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Bot, Phone, Briefcase, UserCheck, Target, Calendar, 
  BookOpen, Mic, Mail, Activity, FileText, Zap, ArrowRight,
  Search, PenTool, Rocket, TrendingUp
} from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import FloatingCTA from '@/components/ui/FloatingCTA';
import { SectionHeading, GlassCard } from '@/components/ui/Shared';
import AuroraBackground from '@/components/ui/AuroraBackground';

const aiSolutions = [
  {
    icon: Bot,
    title: 'AI Chatbot',
    description: 'Custom trained on your business data, handles customer queries, guides purchases, and provides instant support.',
    features: ['24/7 Availability', 'Natural Language Processing', 'Data-driven Responses', 'Seamless Handoff to Humans']
  },
  {
    icon: Phone,
    title: 'AI Call Agent',
    description: 'Handles inbound and outbound calls intelligently, books appointments, and qualifies leads conversationally.',
    features: ['Human-like Voice', 'Smart Call Routing', 'CRM Integration', 'Sentiment Analysis']
  },
  {
    icon: Briefcase,
    title: 'AI Sales Agent',
    description: 'Nurtures leads through your sales pipeline and follows up automatically via multiple channels.',
    features: ['Automated Follow-ups', 'Pipeline Management', 'Personalized Outreach', 'High Conversion Rates']
  },
  {
    icon: UserCheck,
    title: 'AI Receptionist',
    description: 'Greets visitors, routes inquiries to the correct department, and manages schedules efficiently.',
    features: ['Multi-lingual Support', 'Smart Routing', 'Appointment Scheduling', 'Visitor Logs']
  },
  {
    icon: Target,
    title: 'Lead Qualification',
    description: 'AI scores and qualifies leads based on your ICP, ensuring your sales team focuses on high-value prospects.',
    features: ['Behavioral Scoring', 'Data Enrichment', 'Real-time Alerts', 'ICP Matching']
  },
  {
    icon: Calendar,
    title: 'Appointment Booking',
    description: 'Smart scheduling that integrates with your calendar and prevents double booking automatically.',
    features: ['Calendar Sync', 'Time Zone Detection', 'Automated Reminders', 'Rescheduling Support']
  },
  {
    icon: BookOpen,
    title: 'Knowledge Base',
    description: 'AI-powered FAQ and documentation system that finds answers instantly from your company resources.',
    features: ['Semantic Search', 'Document Parsing', 'Auto-updating', 'Contextual Answers']
  },
  {
    icon: Mic,
    title: 'AI Voice Assistant',
    description: 'Natural voice interactions for customer service, allowing users to speak directly to your application.',
    features: ['Speech-to-Text', 'Text-to-Speech', 'Voice Biometrics', 'Multi-language']
  },
  {
    icon: Mail,
    title: 'AI Email Agent',
    description: 'Automated email responses, follow-ups, and nurturing sequences tailored to individual recipients.',
    features: ['Contextual Replies', 'Inbox Sorting', 'Spam Filtering', 'Draft Generation']
  },
  {
    icon: Activity,
    title: 'CRM AI',
    description: 'Intelligent CRM that predicts and prioritizes opportunities based on historical data and trends.',
    features: ['Predictive Analytics', 'Churn Prevention', 'Deal Scoring', 'Automated Data Entry']
  },
  {
    icon: FileText,
    title: 'Document AI',
    description: 'Automated document processing and data extraction from invoices, contracts, and forms.',
    features: ['OCR Technology', 'Data Extraction', 'Format Conversion', 'Compliance Checks']
  },
  {
    icon: Zap,
    title: 'Workflow Automation',
    description: 'End-to-end business process automation with AI agents connecting your diverse tools.',
    features: ['Custom Triggers', 'Multi-app Integration', 'Error Handling', 'Task Orchestration']
  }
];

const workflowSteps = [
  { icon: Search, title: 'Discovery', description: 'We analyze your workflows and identify AI opportunities.' },
  { icon: PenTool, title: 'Design', description: 'Architecting custom AI models and conversational flows.' },
  { icon: Rocket, title: 'Deploy', description: 'Seamless integration into your existing tech stack.' },
  { icon: TrendingUp, title: 'Optimize', description: 'Continuous learning and performance tuning.' }
];

export default function AISolutionsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#09090B] text-white">
        <section className="relative pt-32 pb-20 overflow-hidden">
          <AuroraBackground />
          <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-extrabold mb-6"
            >
              AI-Powered Solutions <br /> <span className="text-gradient">That Work While You Sleep</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-10"
            >
              From intelligent chatbots to voice agents — we build AI systems that automate customer interactions, qualify leads, and drive revenue 24/7.
            </motion.p>
            <motion.button 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="bg-[#6C4DFF] hover:bg-[#5838ff] text-white px-8 py-4 rounded-full font-bold text-lg transition-colors"
            >
              Explore Our AI Solutions
            </motion.button>
          </div>
        </section>

        <section className="py-24">
          <div className="w-full px-6 md:px-16 lg:px-32 xl:px-40 mx-auto">
            <SectionHeading title="Our AI Services" subtitle="Next-generation automation for modern enterprises." />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
              {aiSolutions.map((solution, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                >
                  <GlassCard className="h-full flex flex-col p-8 group hover:border-[#6C4DFF]/50 transition-colors">
                    <solution.icon className="w-12 h-12 text-[#00D9FF] mb-6" />
                    <h3 className="text-2xl font-bold mb-4">{solution.title}</h3>
                    <p className="text-gray-400 mb-6 flex-grow">{solution.description}</p>
                    <ul className="space-y-2 mb-8">
                      {solution.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-center text-sm text-gray-300">
                          <Zap className="w-4 h-4 text-[#FFD93D] mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <button className="flex items-center text-[#00E676] font-bold group-hover:text-white transition-colors mt-auto">
                      Book Consultation <ArrowRight className="w-5 h-5 ml-2" />
                    </button>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-white/5 border-t border-b border-white/10">
          <div className="w-full px-6 md:px-16 lg:px-32 xl:px-40 mx-auto">
            <SectionHeading title="How It Works" subtitle="Our proven process to implement AI seamlessly." />
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-16 relative">
              <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#6C4DFF] to-transparent -translate-y-1/2 opacity-20"></div>
              {workflowSteps.map((step, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="relative z-10 text-center"
                >
                  <div className="w-20 h-20 mx-auto bg-[#09090B] border border-[#6C4DFF]/30 rounded-full flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(108,77,255,0.2)]">
                    <step.icon className="w-10 h-10 text-[#FF5DB1]" />
                  </div>
                  <h4 className="text-xl font-bold mb-3">{step.title}</h4>
                  <p className="text-gray-400">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24">
          <div className="w-full px-6 md:px-16 lg:px-32 xl:px-40 mx-auto text-center">
            <h3 className="text-2xl font-bold mb-10 text-gray-300">Integrates Seamlessly With Your Tools</h3>
            <div className="flex flex-wrap justify-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
              {['Salesforce', 'HubSpot', 'Zendesk', 'Slack', 'Shopify', 'Stripe'].map((logo, idx) => (
                <div key={idx} className="text-2xl font-extrabold text-white">{logo}</div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}
