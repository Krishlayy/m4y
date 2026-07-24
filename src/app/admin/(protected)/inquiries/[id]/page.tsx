import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import { format } from "date-fns";
import { ArrowLeft, User, Phone, Mail, Building2, Calendar, Link as LinkIcon } from "lucide-react";
import Link from "next/link";
import { InquiryActions } from "@/components/admin/InquiryActions";

export default async function InquiryDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  
  const inquiry = await prisma.contactInquiry.findUnique({
    where: { id: resolvedParams.id },
    include: {
      lead: true
    }
  });

  if (!inquiry) {
    notFound();
  }

  // Auto-mark as read when viewed
  if (!inquiry.isRead) {
    await prisma.contactInquiry.update({
      where: { id: inquiry.id },
      data: { isRead: true }
    });
  }

  return (
    <div className="flex flex-col gap-6 max-w-5xl mx-auto">
      <div className="flex items-center gap-4">
        <Link 
          href="/admin/inquiries"
          className="p-3 border-4 border-black hover:bg-black hover:text-white transition-colors"
        >
          <ArrowLeft className="w-6 h-6" />
        </Link>
        <h1 className="text-3xl lg:text-4xl font-black uppercase tracking-tight">Review Inquiry</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Info */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          <div className="bg-white border-4 border-black hard-shadow p-6 lg:p-8">
            <div className="flex justify-between items-start mb-8">
              <div>
                <h2 className="text-3xl font-black uppercase tracking-tighter mb-2">{inquiry.subject || "No Subject"}</h2>
                <div className="flex items-center gap-2 text-sm font-bold opacity-70">
                  <Calendar className="w-4 h-4" />
                  <span>Submitted {format(new Date(inquiry.createdAt), "MMMM d, yyyy 'at' h:mm a")}</span>
                </div>
              </div>
              {inquiry.isResolved && (
                <span className="px-4 py-2 bg-green-500 text-white text-sm font-bold uppercase tracking-widest border-2 border-black">
                  RESOLVED
                </span>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 p-6 bg-gray-50 border-4 border-black">
              <div className="flex items-start gap-3">
                <User className="w-5 h-5 mt-1 text-[#FF3B00]" />
                <div>
                  <p className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-1">Name</p>
                  <p className="font-black text-lg">{inquiry.name}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 mt-1 text-[#FF3B00]" />
                <div>
                  <p className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-1">Email</p>
                  <p className="font-bold">{inquiry.email}</p>
                </div>
              </div>
            </div>

            <div className="border-t-4 border-black pt-6">
              <p className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-3">Message Content</p>
              <div className="font-medium leading-relaxed whitespace-pre-wrap text-lg">
                {inquiry.message}
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar Actions */}
        <div className="flex flex-col gap-6">
          <div className="bg-[#FFD700] border-4 border-black hard-shadow p-6">
            <h3 className="text-xl font-black uppercase tracking-tight mb-6">Manage Inquiry</h3>
            
            <InquiryActions 
              inquiryId={inquiry.id} 
              isRead={true} // It's auto-read on view
              isResolved={inquiry.isResolved}
              hasLead={!!inquiry.leadId}
            />
            
            {inquiry.leadId && inquiry.lead && (
              <div className="mt-6 pt-6 border-t-4 border-black">
                <p className="text-sm font-bold uppercase tracking-widest text-black/60 mb-2">Linked Lead</p>
                <Link 
                  href={`/admin/leads/${inquiry.leadId}`}
                  className="flex items-center gap-2 font-black text-lg hover:underline decoration-2 underline-offset-4"
                >
                  <LinkIcon className="w-5 h-5" />
                  {inquiry.lead.name}
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
