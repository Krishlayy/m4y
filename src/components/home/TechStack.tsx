'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Layout, Database, PenTool, PenTool as Figma, Monitor, Bot, BrainCircuit, Sparkles } from 'lucide-react';

const tabs = [
  { id: 'marketing', label: 'Marketing Tech' },
  { id: 'content', label: 'Content & Design' },
  { id: 'ai', label: 'AI Tools' },
];

const techData = {
  marketing: [
    { name: 'HubSpot', icon: <Database size={48} strokeWidth={1.5} /> },
    { name: 'Mailchimp', icon: <Mail size={48} strokeWidth={1.5} /> },
    { name: 'Analytics', icon: <Layout size={48} strokeWidth={1.5} /> },
  ],
  content: [
    { name: 'Figma', icon: <PenTool size={48} strokeWidth={1.5} /> },
    { name: 'Adobe CC', icon: <PenTool size={48} strokeWidth={1.5} /> },
    { name: 'Webflow', icon: <Monitor size={48} strokeWidth={1.5} /> },
  ],
  ai: [
    { name: 'OpenAI', icon: <BrainCircuit size={48} strokeWidth={1.5} /> },
    { name: 'Midjourney', icon: <Sparkles size={48} strokeWidth={1.5} /> },
    { name: 'Copilot', icon: <Bot size={48} strokeWidth={1.5} /> },
  ]
};

export default function TechStack() {
  const [activeTab, setActiveTab] = useState('marketing');

  return (
    <section className="bg-white text-black border-t border-black/10 py-24 md:py-32">
      <div className="w-full px-6 md:px-12 lg:px-24">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16">
          <h2 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter">Tech<br/><span className="text-[#FF3B00]">Stack</span></h2>
          <div className="flex gap-4 mt-12 md:mt-0 overflow-x-auto pb-4 md:pb-0 w-full md:w-auto scrollbar-hide">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-8 py-4 border-2 transition-all duration-300 whitespace-nowrap font-bold text-sm md:text-base uppercase tracking-wider ${
                  activeTab === tab.id ? 'border-[#FF3B00] bg-[#FF3B00] text-white' : 'border-black hover:border-[#FF3B00] hover:text-[#FF3B00]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="min-h-[300px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8"
            >
              {techData[activeTab as keyof typeof techData].map((tech, idx) => (
                <div key={idx} className="group flex flex-col items-center justify-center p-16 border-2 border-black/5 hover:border-[#FF3B00] transition-colors duration-300 bg-gray-50 cursor-default">
                  <div className="text-black group-hover:text-[#FF3B00] transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-2 mb-6">
                    {tech.icon}
                  </div>
                  <span className="font-bold text-xl uppercase tracking-widest">{tech.name}</span>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
