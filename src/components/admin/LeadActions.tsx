"use client";

import { useState, useTransition } from "react";
import { updateLeadStatus, addLeadNote } from "@/lib/admin/actions";
import { LeadStatus } from "@prisma/client";
import { Loader2 } from "lucide-react";

export function LeadStatusSelector({ leadId, currentStatus }: { leadId: string, currentStatus: LeadStatus }) {
  const [isPending, startTransition] = useTransition();

  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newStatus = e.target.value as LeadStatus;
    startTransition(async () => {
      await updateLeadStatus(leadId, newStatus);
    });
  };

  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-bold uppercase tracking-widest text-gray-500">Update Status</label>
      <div className="relative inline-block w-full max-w-xs">
        <select 
          value={currentStatus}
          onChange={handleStatusChange}
          disabled={isPending}
          className="w-full appearance-none bg-white border-4 border-black p-3 font-bold uppercase tracking-widest text-sm focus:outline-none focus:ring-0 cursor-pointer disabled:opacity-50"
        >
          {Object.values(LeadStatus).map(status => (
            <option key={status} value={status}>{status}</option>
          ))}
        </select>
        {isPending && (
          <div className="absolute right-4 top-1/2 -translate-y-1/2">
            <Loader2 className="w-4 h-4 animate-spin text-black" />
          </div>
        )}
      </div>
    </div>
  );
}

export function LeadNoteForm({ leadId }: { leadId: string }) {
  const [note, setNote] = useState("");
  const [isPending, startTransition] = useTransition();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!note.trim()) return;

    startTransition(async () => {
      await addLeadNote(leadId, note);
      setNote("");
    });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <textarea
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder="Add an internal note..."
        className="w-full border-4 border-black p-4 font-medium focus:outline-none focus:ring-0 min-h-[100px] resize-y"
        disabled={isPending}
        required
      />
      <button 
        type="submit" 
        disabled={isPending}
        className="btn-primary w-fit self-end flex items-center gap-2"
      >
        {isPending ? <Loader2 className="w-5 h-5 animate-spin" /> : "ADD NOTE"}
      </button>
    </form>
  );
}
