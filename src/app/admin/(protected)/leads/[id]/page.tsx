import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import { format } from "date-fns";
import { ArrowLeft, User, Phone, Mail, Building2, Briefcase, Calendar } from "lucide-react";
import Link from "next/link";
import { LeadStatusSelector, LeadNoteForm } from "@/components/admin/LeadActions";

export default async function LeadDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  
  const lead = await prisma.lead.findUnique({
    where: { id: resolvedParams.id },
    include: {
      Notes: {
        include: { author: true },
        orderBy: { createdAt: 'desc' }
      }
    }
  });

  if (!lead) {
    notFound();
  }

  return (
    <div className="flex flex-col gap-6 max-w-5xl mx-auto">
      <div className="flex items-center gap-4">
        <Link 
          href="/admin/leads"
          className="p-3 border-4 border-black hover:bg-black hover:text-white transition-colors"
        >
          <ArrowLeft className="w-6 h-6" />
        </Link>
        <h1 className="text-3xl lg:text-4xl font-black uppercase tracking-tight">Lead Details</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Info */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          <div className="bg-white border-4 border-black hard-shadow p-6 lg:p-8">
            <div className="flex justify-between items-start mb-8">
              <div>
                <h2 className="text-3xl font-black uppercase tracking-tighter mb-2">{lead.name}</h2>
                <div className="flex items-center gap-2 text-sm font-bold opacity-70">
                  <Calendar className="w-4 h-4" />
                  <span>Created {format(new Date(lead.createdAt), "MMMM d, yyyy 'at' h:mm a")}</span>
                </div>
              </div>
              <span className="px-4 py-2 bg-black text-white text-sm font-bold uppercase tracking-widest">
                {lead.status}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 mt-1 text-[#FF3B00]" />
                <div>
                  <p className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-1">Email</p>
                  <p className="font-medium">{lead.email}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 mt-1 text-[#FF3B00]" />
                <div>
                  <p className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-1">Phone</p>
                  <p className="font-medium">{lead.phone || "Not provided"}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Building2 className="w-5 h-5 mt-1 text-[#FF3B00]" />
                <div>
                  <p className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-1">Company</p>
                  <p className="font-medium">{lead.company || "Not provided"}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Briefcase className="w-5 h-5 mt-1 text-[#FF3B00]" />
                <div>
                  <p className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-1">Service Interest</p>
                  <p className="font-medium">{lead.serviceInterest || "Not specified"}</p>
                </div>
              </div>
            </div>

            {lead.message && (
              <div className="border-t-4 border-black pt-6">
                <p className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-3">Original Message</p>
                <div className="bg-gray-50 p-6 border-2 border-black font-medium leading-relaxed whitespace-pre-wrap">
                  {lead.message}
                </div>
              </div>
            )}
          </div>
          
          {/* Internal Notes */}
          <div className="bg-white border-4 border-black hard-shadow p-6 lg:p-8">
            <h3 className="text-2xl font-black uppercase tracking-tight mb-6">Internal Notes</h3>
            
            <LeadNoteForm leadId={lead.id} />

            <div className="mt-8 flex flex-col gap-4">
              {lead.Notes.length === 0 ? (
                <p className="text-gray-500 font-medium italic">No internal notes yet.</p>
              ) : (
                lead.Notes.map(note => (
                  <div key={note.id} className="p-4 border-2 border-gray-200 bg-gray-50">
                    <p className="font-medium whitespace-pre-wrap mb-3">{note.content}</p>
                    <div className="flex justify-between items-center text-xs font-bold uppercase tracking-widest text-gray-500">
                      <span>{note.author?.name || note.author?.email || "System"}</span>
                      <span>{format(new Date(note.createdAt), "MMM d, h:mm a")}</span>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>

        {/* Sidebar Actions */}
        <div className="flex flex-col gap-6">
          <div className="bg-[#FFD700] border-4 border-black hard-shadow p-6">
            <h3 className="text-xl font-black uppercase tracking-tight mb-6">Manage Lead</h3>
            
            <LeadStatusSelector leadId={lead.id} currentStatus={lead.status} />
            
            <div className="mt-6 pt-6 border-t-4 border-black">
              <p className="text-sm font-bold uppercase tracking-widest text-black/60 mb-2">Source</p>
              <p className="font-black text-lg">{lead.source || "Direct"}</p>
            </div>
            
            {lead.budget && (
              <div className="mt-6 pt-6 border-t-4 border-black">
                <p className="text-sm font-bold uppercase tracking-widest text-black/60 mb-2">Budget</p>
                <p className="font-black text-lg">{lead.budget}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
