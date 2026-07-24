"use client";

import { Menu } from "lucide-react";
import { useSession } from "next-auth/react";

export default function AdminHeader({
  setSidebarOpen
}: {
  setSidebarOpen: (val: boolean) => void
}) {
  const { data: session } = useSession();

  return (
    <header className="bg-white border-b-4 border-black p-4 flex items-center justify-between lg:justify-end sticky top-0 z-30">
      <div className="flex items-center gap-4 lg:hidden">
        <button 
          aria-label="Open sidebar"
          onClick={() => setSidebarOpen(true)}
          className="p-2 border-2 border-transparent hover:border-black transition-colors"
        >
          <Menu className="w-6 h-6" />
        </button>
        <span className="font-black uppercase tracking-tighter text-xl">M4Y Admin</span>
      </div>

      <div className="flex items-center gap-4">
        {session?.user ? (
          <>
            <div className="hidden sm:block text-right">
              <p className="font-bold text-sm leading-none">{session.user.name || "Admin"}</p>
              <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mt-1">{session.user.email}</p>
            </div>
            <div className="w-10 h-10 bg-[#FF3B00] border-2 border-black flex items-center justify-center font-black text-white">
              {(session.user.name || session.user.email || "A")[0].toUpperCase()}
            </div>
          </>
        ) : (
          <div className="hidden sm:block text-right">
            <p className="font-bold text-sm leading-none bg-black text-[#FFD700] px-2 py-1 inline-block uppercase tracking-widest">
              DEMO MODE
            </p>
          </div>
        )}
      </div>
    </header>
  );
}
