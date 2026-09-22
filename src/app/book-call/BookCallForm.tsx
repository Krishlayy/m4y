"use client";

import { useState } from "react";
import { ArrowRight, Clock, MessageSquare, CheckCircle } from "lucide-react";
import { submitStrategyCall } from "@/lib/public-actions";

export default function BookCallForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    const formData = new FormData(e.currentTarget);
    const result = await submitStrategyCall(formData);

    if (result.success) {
      setStatus("success");
    } else {
      setStatus("error");
      setErrorMsg(result.error || "Failed to submit request.");
    }
  };

  if (status === "success") {
    return (
      <div className="border-4 border-black shadow-[8px_8px_0_#000] bg-white p-8 md:p-12 text-center">
        <div className="w-16 h-16 bg-[#25D366] text-white mx-auto flex items-center justify-center border-4 border-black mb-6 shadow-[4px_4px_0_#000]">
          <CheckCircle className="w-10 h-10" />
        </div>
        <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-4">
          Request Received!
        </h3>
        <p className="text-base md:text-lg font-bold text-black/80 max-w-md mx-auto mb-8 leading-relaxed">
          Kishalay and Ayushman have received your booking details. We will review your brand and WhatsApp you within 2 hours to confirm your 30-min strategy call.
        </p>
        <a
          href="https://wa.me/919258735381?text=Hi%20Kishalay%20%26%20Ayushman,%20I%20just%20requested%20a%20free%20strategy%20call%20on%20the%20M4Y%20website."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[#25D366] text-white px-8 py-4 font-black text-sm uppercase tracking-wider border-2 border-black shadow-[4px_4px_0_#000] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
        >
          <MessageSquare className="w-5 h-5" />
          Chat on WhatsApp Now
        </a>
      </div>
    );
  }

  return (
    <div className="border-4 border-black shadow-[8px_8px_0_#000]">
      <div className="bg-black px-8 py-5 flex items-center gap-3">
        <Clock className="w-5 h-5 text-[#FFD700]" />
        <p className="text-white font-black text-sm uppercase tracking-wider">
          Book Your 30-Min Free Call
        </p>
      </div>

      <form onSubmit={handleSubmit} className="p-8 space-y-6 bg-white">
        {/* Invisible bot trap honeypot */}
        <input
          type="text"
          name="website_hp"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          className="hidden pointer-events-none opacity-0 absolute -z-10"
        />

        {status === "error" && (
          <div className="p-4 bg-[#FF5500] text-white font-bold text-sm border-2 border-black">
            {errorMsg}
          </div>
        )}

        <div>
          <label className="block font-black text-xs uppercase tracking-widest mb-2">
            Your Name *
          </label>
          <input
            type="text"
            name="name"
            required
            placeholder="Rahul Sharma"
            disabled={status === "submitting"}
            className="w-full border-4 border-black px-4 py-3 font-bold text-black placeholder:text-black/30 focus:outline-none focus:shadow-[4px_4px_0_#FF5500] transition-shadow disabled:opacity-50"
          />
        </div>

        <div>
          <label className="block font-black text-xs uppercase tracking-widest mb-2">
            Business / Brand Name *
          </label>
          <input
            type="text"
            name="business"
            required
            placeholder="Your Brand"
            disabled={status === "submitting"}
            className="w-full border-4 border-black px-4 py-3 font-bold text-black placeholder:text-black/30 focus:outline-none focus:shadow-[4px_4px_0_#FF5500] transition-shadow disabled:opacity-50"
          />
        </div>

        <div>
          <label className="block font-black text-xs uppercase tracking-widest mb-2">
            WhatsApp Number *
          </label>
          <input
            type="tel"
            name="phone"
            required
            placeholder="+91 98765 43210"
            disabled={status === "submitting"}
            className="w-full border-4 border-black px-4 py-3 font-bold text-black placeholder:text-black/30 focus:outline-none focus:shadow-[4px_4px_0_#FF5500] transition-shadow disabled:opacity-50"
          />
        </div>

        <div>
          <label className="block font-black text-xs uppercase tracking-widest mb-2">
            Your Industry
          </label>
          <select
            name="industry"
            disabled={status === "submitting"}
            className="w-full border-4 border-black px-4 py-3 font-bold text-black focus:outline-none focus:shadow-[4px_4px_0_#FF5500] transition-shadow bg-white disabled:opacity-50"
          >
            <option value="">Select industry...</option>
            <option>Restaurant / Food & Beverage</option>
            <option>D2C / E-commerce</option>
            <option>Fitness / Wellness</option>
            <option>Real Estate</option>
            <option>Fashion / Apparel</option>
            <option>Tech / SaaS</option>
            <option>Education / Coaching</option>
            <option>Healthcare / Clinic</option>
            <option>Other</option>
          </select>
        </div>

        <div>
          <label className="block font-black text-xs uppercase tracking-widest mb-2">
            Biggest Marketing Challenge
          </label>
          <textarea
            name="challenge"
            rows={3}
            disabled={status === "submitting"}
            placeholder="e.g. We get website traffic but conversion rate is too low..."
            className="w-full border-4 border-black px-4 py-3 font-bold text-black placeholder:text-black/30 focus:outline-none focus:shadow-[4px_4px_0_#FF5500] transition-shadow resize-none disabled:opacity-50"
          />
        </div>

        <button
          type="submit"
          disabled={status === "submitting"}
          className="btn-primary w-full justify-center group text-lg disabled:opacity-50 cursor-pointer"
        >
          {status === "submitting" ? "Securing Slot..." : "Request My Free Call"}
          <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
        </button>

        <p className="text-center text-xs font-bold text-black/40 uppercase tracking-wider">
          Direct founder review. We will WhatsApp you within 2 hours.
        </p>
      </form>
    </div>
  );
}
