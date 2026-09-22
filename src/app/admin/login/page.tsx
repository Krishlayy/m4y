"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { Lock, Mail, Loader2, ArrowRight, ShieldCheck, Eye, EyeOff } from "lucide-react";
import Link from "next/link";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const cleanEmail = email.trim();
      const res = await signIn("credentials", {
        email: cleanEmail,
        password: password,
        redirect: false,
      });

      if (res?.error) {
        setError("Invalid email or password. Please check your credentials.");
      } else {
        // Full browser navigation ensures cookies and middleware sync without cache delay
        window.location.href = "/admin/dashboard";
      }
    } catch (err: any) {
      if (err?.name === "CredentialsSignin" || err?.type === "CredentialsSignin") {
        setError("Invalid email or password.");
      } else {
        // If signIn redirect was triggered
        window.location.href = "/admin/dashboard";
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleQuickFill = () => {
    setEmail("admin@marketing4you.com");
    setPassword("password123");
    setError("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F9F9FB] p-4 relative overflow-hidden font-sans select-none">
      {/* Neo-brutalist decorative background blurs */}
      <div className="absolute top-12 right-12 w-64 h-64 bg-[#FF5500]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-12 left-12 w-64 h-64 bg-[#FFD700]/25 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-md w-full bg-white border-4 border-black p-8 md:p-10 shadow-[10px_10px_0_#000] relative z-10">
        {/* Brand header */}
        <div className="flex flex-col items-center text-center mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FFD700] text-black font-black text-xs uppercase tracking-widest border-2 border-black mb-3 shadow-[2px_2px_0_#000]">
            <ShieldCheck className="w-3.5 h-3.5" />
            Executive Portal
          </div>
          <h1 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-black">
            M4Y Admin
          </h1>
          <p className="text-xs font-bold uppercase tracking-wider text-black/60 mt-1">
            Agency Control & Leads Dashboard
          </p>
        </div>

        {/* Quick autofill helper badge */}
        <div className="mb-6 bg-[#FFF8E7] border-2 border-black p-3 text-xs font-bold text-black flex items-center justify-between gap-2 shadow-[2px_2px_0_#FF5500]">
          <div>
            <span className="font-black uppercase text-[#FF5500]">Default Login:</span>
            <div className="font-mono text-[11px] text-black/80 mt-0.5">admin@marketing4you.com</div>
          </div>
          <button
            type="button"
            onClick={handleQuickFill}
            className="px-2.5 py-1 bg-black text-[#FFD700] font-black text-[11px] uppercase border border-black hover:bg-[#FF5500] hover:text-white transition-colors cursor-pointer"
          >
            Auto-Fill
          </button>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          {error && (
            <div className="bg-red-50 border-2 border-red-600 text-red-700 p-3 text-xs font-bold flex items-center gap-2">
              <span className="font-black">⚠</span> {error}
            </div>
          )}

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-black uppercase tracking-widest text-black">
              Founder / Admin Email
            </label>
            <div className="relative">
              <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-black/40" />
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full pl-10 pr-4 py-3 bg-white border-2 border-black font-bold text-sm text-black focus:outline-none focus:ring-0 focus:shadow-[4px_4px_0_#FF5500] transition-shadow placeholder:text-black/30"
                placeholder="admin@marketing4you.com"
              />
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-black uppercase tracking-widest text-black flex justify-between items-center">
              <span>Password</span>
            </label>
            <div className="relative">
              <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-black/40" />
              <input 
                type={showPassword ? "text" : "password"} 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full pl-10 pr-10 py-3 bg-white border-2 border-black font-bold text-sm text-black focus:outline-none focus:ring-0 focus:shadow-[4px_4px_0_#FF5500] transition-shadow placeholder:text-black/30"
                placeholder="••••••••••••"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-black/50 hover:text-black"
                tabIndex={-1}
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          <button 
            type="submit" 
            disabled={isLoading}
            className="w-full mt-2 inline-flex items-center justify-center gap-2 bg-[#FF5500] text-white py-3.5 px-6 font-black text-sm uppercase tracking-wider border-2 border-black shadow-[4px_4px_0_#000] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none hover:bg-black transition-all cursor-pointer disabled:opacity-50"
          >
            {isLoading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Authenticating...
              </>
            ) : (
              <>
                Enter Control Center
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </form>

        <div className="mt-8 pt-6 border-t-2 border-black/10 text-center">
          <Link 
            href="/"
            className="text-xs font-black uppercase tracking-wider text-black/70 hover:text-[#FF5500] hover:underline transition-colors"
          >
            ← Return to Marketing4You Agency Website
          </Link>
        </div>
      </div>
    </div>
  );
}
