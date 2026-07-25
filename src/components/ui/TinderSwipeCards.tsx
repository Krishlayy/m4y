"use client";

import React, { useState } from "react";
import { motion, useMotionValue, useTransform, AnimatePresence } from "framer-motion";
import { ArrowRight, ThumbsUp, X } from "lucide-react";
import Link from "next/link";

interface SwipeCardData {
  id: string;
  title: string;
  description: string;
  tags: string[];
  link: string;
  bgColor: string;
  textColor: string;
}

const mockCards: SwipeCardData[] = [
  {
    id: "1",
    title: "AI Automation",
    description: "Automate your workflows and save 100+ hours a month with custom AI bots.",
    tags: ["Zapier", "OpenAI", "Efficiency"],
    link: "/services/ai",
    bgColor: "bg-black",
    textColor: "text-white",
  },
  {
    id: "2",
    title: "Performance Marketing",
    description: "Scale your revenue with hyper-targeted Meta and Google Ad campaigns.",
    tags: ["Meta Ads", "Google Ads", "Scaling"],
    link: "/services/performance-marketing",
    bgColor: "bg-[#FF3B00]",
    textColor: "text-white",
  },
  {
    id: "3",
    title: "Web & Mobile Dev",
    description: "High-performance, brutalist websites that convert visitors into buyers.",
    tags: ["Next.js", "React", "Mobile"],
    link: "/services/web-dev",
    bgColor: "bg-white",
    textColor: "text-black",
  },
];

const Card = ({ card, removeCard, active, zIndex }: { card: SwipeCardData; removeCard: (id: string, swipe: "left" | "right") => void; active: boolean; zIndex: number }) => {
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-200, 200], [-15, 15]);
  const opacity = useTransform(x, [-200, -100, 0, 100, 200], [0, 1, 1, 1, 0]);

  const dragEnd = (e: any, info: any) => {
    if (info.offset.x > 100) {
      removeCard(card.id, "right");
    } else if (info.offset.x < -100) {
      removeCard(card.id, "left");
    }
  };

  return (
    <motion.div
      className={`absolute inset-0 w-full h-full rounded-[2rem] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] border-4 border-black p-8 flex flex-col justify-between ${card.bgColor} ${card.textColor} origin-bottom`}
      style={{ x, rotate, opacity, zIndex }}
      drag={active ? "x" : false}
      dragConstraints={{ left: 0, right: 0 }}
      onDragEnd={dragEnd}
      whileTap={{ cursor: "grabbing", scale: 1.02 }}
      animate={{ scale: active ? 1 : 0.95, y: active ? 0 : 20 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      exit={{ x: x.get() > 0 ? 300 : -300, opacity: 0 }}
    >
      <div>
        <h3 className="text-4xl font-black uppercase tracking-tighter mb-4 leading-none">{card.title}</h3>
        <p className={`text-lg font-bold ${card.bgColor === 'bg-white' ? 'text-gray-600' : 'text-gray-300'} mb-6`}>{card.description}</p>
        
        <div className="flex flex-wrap gap-2">
          {card.tags.map(tag => (
            <span key={tag} className={`px-3 py-1 border-2 ${card.bgColor === 'bg-white' ? 'border-black' : 'border-white'} rounded-full text-xs font-bold uppercase`}>
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="flex justify-between items-center mt-8">
        <div className="flex gap-4">
          <div className="w-12 h-12 rounded-full border-2 border-current flex items-center justify-center opacity-50 pointer-events-none">
            <X className="w-6 h-6" />
          </div>
          <div className="w-12 h-12 rounded-full border-2 border-current flex items-center justify-center pointer-events-none">
            <ThumbsUp className="w-6 h-6" />
          </div>
        </div>
        
        <Link href={card.link} className="flex items-center gap-2 font-black uppercase text-sm group pointer-events-none">
          Explore
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
      
      {/* Swipe indicators */}
      <motion.div style={{ opacity: useTransform(x, [50, 150], [0, 1]) }} className="absolute top-10 left-10 border-4 border-green-500 text-green-500 font-black text-4xl uppercase p-2 rotate-[-15deg] rounded-lg z-50 pointer-events-none">LIKE</motion.div>
      <motion.div style={{ opacity: useTransform(x, [-50, -150], [0, 1]) }} className="absolute top-10 right-10 border-4 border-red-500 text-red-500 font-black text-4xl uppercase p-2 rotate-[15deg] rounded-lg z-50 pointer-events-none">NOPE</motion.div>
    </motion.div>
  );
};

export default function TinderSwipeCards({ cards = mockCards }: { cards?: SwipeCardData[] }) {
  const [deck, setDeck] = useState<SwipeCardData[]>(cards);

  const removeCard = (id: string, direction: "left" | "right") => {
    setDeck((prev) => prev.filter((card) => card.id !== id));
  };

  return (
    <div className="w-full h-[450px] relative flex items-center justify-center">
      {deck.length === 0 ? (
        <div className="text-center">
          <h3 className="text-2xl font-black uppercase mb-4 text-black">No more cards</h3>
          <button onClick={() => setDeck(cards)} className="bg-black text-white px-6 py-3 font-bold uppercase border-2 border-black hover:bg-[#FF3B00] transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            Reset Deck
          </button>
        </div>
      ) : (
        <div className="relative w-full max-w-sm h-full">
          <AnimatePresence>
            {deck.map((card, index) => (
              <Card
                key={card.id}
                card={card}
                removeCard={removeCard}
                active={index === deck.length - 1} // Only top card is draggable
                zIndex={index} // Bottom cards have lower z-index
              />
            ))}
          </AnimatePresence>
        </div>
      )}
    </div>
  );
}
