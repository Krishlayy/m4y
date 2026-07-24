"use client";

import { useState } from "react";
import AdminSidebar from "./AdminSidebar";
import AdminHeader from "./AdminHeader";
import { SessionProvider } from "next-auth/react";

export default function AdminLayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <SessionProvider>
      <div className="min-h-screen bg-[#F5F5F5] text-black font-sans selection:bg-[#FFD700] selection:text-black">
        <AdminSidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
        
        <div className="lg:pl-72 flex flex-col min-h-screen transition-all duration-300">
          <AdminHeader setSidebarOpen={setSidebarOpen} />
          
          <main className="flex-1 p-4 md:p-8 overflow-x-hidden">
            {children}
          </main>
        </div>
      </div>
    </SessionProvider>
  );
}
