"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight, Star } from "lucide-react";
import Link from "next/link";

export default function PricingList({ plans }: { plans: any[] }) {
  if (!plans || plans.length === 0) return null;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
      {plans.map((plan, index) => {
        const deliverables = plan.deliverables || [];
        const addOns = plan.addOns || [];

        return (
          <motion.div
            key={plan.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className={`modern-card flex flex-col h-full bg-white relative ${plan.isPopular ? 'border-4 border-[#FF3B00]' : 'border-4 border-black'}`}
          >
            {plan.isPopular && (
              <div className="absolute top-0 right-0 transform translate-x-4 -translate-y-4 bg-[#FF3B00] text-white px-4 py-1 font-black uppercase tracking-widest text-xs border-2 border-black flex items-center gap-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                <Star className="w-3 h-3 fill-white" /> Most Popular
              </div>
            )}

            <div className="p-8 md:p-10 border-b-4 border-black/10 flex-1">
              <h3 className="text-3xl font-black uppercase tracking-tight mb-2">{plan.name}</h3>
              <div className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-6">
                Ideal For: {plan.idealClient}
              </div>
              
              <div className="mb-6">
                <span className="text-4xl font-black text-black uppercase tracking-tighter">Custom Quote</span>
              </div>

              <p className="font-bold text-gray-700 leading-relaxed mb-8 h-12">
                {plan.description}
              </p>

              <div className="space-y-4 mb-8">
                <h4 className="font-black uppercase tracking-widest text-sm border-b-2 border-black pb-2">What's Included</h4>
                {deliverables.map((item: string, i: number) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#FF3B00] shrink-0 mt-0.5" />
                    <span className="font-bold text-sm text-gray-800">{item}</span>
                  </div>
                ))}
              </div>

              {addOns.length > 0 && (
                <div className="space-y-3 mb-8 bg-[#F4F4F5] p-4 border-2 border-black">
                  <h4 className="font-black uppercase tracking-widest text-xs text-gray-500">Available Add-ons</h4>
                  <div className="flex flex-wrap gap-2">
                    {addOns.map((addon: string, i: number) => (
                      <span key={i} className="text-xs font-bold uppercase px-2 py-1 border border-black/20 bg-white">
                        + {addon}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="p-8 md:p-10 bg-gray-50 mt-auto">
              {plan.timeline && (
                <div className="flex justify-between items-center mb-6 text-sm font-bold uppercase tracking-widest text-gray-500">
                  <span>Est. Timeline</span>
                  <span className="text-black">{plan.timeline}</span>
                </div>
              )}
              
              <Link 
                href={plan.ctaLink || "/contact"} 
                className={`btn-primary w-full flex items-center justify-between text-lg py-4 ${plan.isPopular ? 'bg-[#FF3B00] border-transparent text-white hover:bg-black hover:text-white' : 'bg-black text-white hover:bg-[#FFD700] hover:text-black hover:border-black'}`}
              >
                {plan.ctaText || "Get Started"}
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
