"use client";

import { signOut } from "next-auth/react";
import { LogOut } from "lucide-react";

export default function LogoutButton() {
  return (
    <button
      onClick={() => signOut({ callbackUrl: "/admin/login" })}
      className="flex items-center gap-3 w-full p-3 font-bold uppercase tracking-widest text-sm hover:bg-black hover:text-white transition-colors border-2 border-transparent hover:border-black"
    >
      <LogOut className="w-5 h-5" />
      <span>Sign Out</span>
    </button>
  );
}
