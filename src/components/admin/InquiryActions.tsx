"use client";

import { useTransition } from "react";
import { markInquiryRead, resolveInquiry, convertInquiryToLead } from "@/lib/admin/actions";
import { Loader2, CheckCircle, UserPlus, Eye } from "lucide-react";
import { useRouter } from "next/navigation";

export function InquiryActions({ 
  inquiryId, 
  isRead, 
  isResolved,
  hasLead
}: { 
  inquiryId: string, 
  isRead: boolean,
  isResolved: boolean,
  hasLead: boolean
}) {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const handleMarkRead = () => {
    startTransition(async () => {
      await markInquiryRead(inquiryId, !isRead);
    });
  };

  const handleResolve = () => {
    startTransition(async () => {
      await resolveInquiry(inquiryId, !isResolved);
    });
  };

  const handleConvert = () => {
    if (!confirm("Are you sure you want to convert this inquiry into a Lead?")) return;
    
    startTransition(async () => {
      try {
        const res = await convertInquiryToLead(inquiryId);
        if (res.success) {
          router.push(`/admin/leads/${res.leadId}`);
        }
      } catch (e) {
        alert("Failed to convert to lead");
      }
    });
  };

  return (
    <div className="flex flex-col gap-4">
      {!isResolved && (
        <button 
          onClick={handleResolve}
          disabled={isPending}
          className="flex items-center justify-center gap-2 p-3 border-4 border-black font-bold uppercase tracking-widest text-sm hover:bg-black hover:text-white transition-colors disabled:opacity-50"
        >
          {isPending ? <Loader2 className="w-5 h-5 animate-spin" /> : <CheckCircle className="w-5 h-5" />}
          Mark as Resolved
        </button>
      )}

      <button 
        onClick={handleMarkRead}
        disabled={isPending}
        className="flex items-center justify-center gap-2 p-3 border-4 border-black font-bold uppercase tracking-widest text-sm hover:bg-black hover:text-white transition-colors disabled:opacity-50"
      >
        {isPending ? <Loader2 className="w-5 h-5 animate-spin" /> : <Eye className="w-5 h-5" />}
        Mark as {isRead ? "Unread" : "Read"}
      </button>

      {!hasLead && !isResolved && (
        <button 
          onClick={handleConvert}
          disabled={isPending}
          className="mt-4 flex items-center justify-center gap-2 p-3 bg-[#FF3B00] text-white border-4 border-black font-bold uppercase tracking-widest text-sm hover:bg-black hover:text-white transition-colors disabled:opacity-50 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
        >
          {isPending ? <Loader2 className="w-5 h-5 animate-spin" /> : <UserPlus className="w-5 h-5" />}
          Convert to Lead
        </button>
      )}
    </div>
  );
}
