"use client";

import Link from "next/form"; // Wait, it's next/link
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, Users, Inbox, FolderKanban, 
  FileText, PenTool, Wrench, Tag, Star, UserCircle, 
  Image as ImageIcon, Settings, X 
} from "lucide-react";
import LogoutButton from "./LogoutButton";

const NAV_ITEMS = [
  { name: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
  { name: "Leads", href: "/admin/leads", icon: Users },
  { name: "Inquiries", href: "/admin/inquiries", icon: Inbox },
  { name: "Projects", href: "/admin/projects", icon: FolderKanban },
  { name: "Case Studies", href: "/admin/case-studies", icon: FileText },
  { name: "Blog", href: "/admin/blog", icon: PenTool },
  { name: "Services", href: "/admin/services", icon: Wrench },
  { name: "Pricing", href: "/admin/pricing", icon: Tag },
  { name: "Media", href: "/admin/media", icon: ImageIcon },
  { name: "Settings", href: "/admin/settings", icon: Settings },
];

import { useSession } from "next-auth/react";

export default function AdminSidebar({ 
  isOpen, 
  setIsOpen 
}: { 
  isOpen: boolean; 
  setIsOpen: (val: boolean) => void 
}) {
  const pathname = usePathname();
  const { data: session } = useSession();

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed lg:sticky top-0 left-0 z-50 h-screen w-72 
        bg-[#FFD700] border-r-4 border-black 
        transform transition-transform duration-300 ease-in-out
        flex flex-col
        ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
      `}>
        {/* Header */}
        <div className="p-6 border-b-4 border-black flex items-center justify-between bg-white">
          <NextLink href="/admin/dashboard" className="text-3xl font-black uppercase tracking-tighter">
            M4Y<span className="text-[#FF3B00]">.</span>
          </NextLink>
          <button 
            aria-label="Close sidebar"
            className="lg:hidden p-2 border-2 border-transparent hover:border-black transition-colors"
            onClick={() => setIsOpen(false)}
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Navigation */}
        <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-2">
          {NAV_ITEMS.map((item) => {
            const isActive = pathname.startsWith(item.href);
            return (
              <NextLink 
                key={item.name} 
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`
                  flex items-center gap-3 p-3 font-bold uppercase tracking-widest text-sm
                  border-2 transition-all
                  ${isActive 
                    ? "bg-black text-white border-black shadow-[4px_4px_0px_0px_rgba(255,59,0,1)]" 
                    : "bg-transparent text-black border-transparent hover:border-black hover:bg-white"
                  }
                `}
              >
                <item.icon className="w-5 h-5" />
                <span>{item.name}</span>
              </NextLink>
            );
          })}
        </div>

        {/* Footer */}
        {session?.user && (
          <div className="p-4 border-t-4 border-black bg-white">
            <LogoutButton />
          </div>
        )}
      </aside>
    </>
  );
}
