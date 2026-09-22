import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import { format } from "date-fns";
import { ArrowLeft, User, Phone, Mail, Calendar } from "lucide-react";
import Link from "next/link";
import { InquiryActions } from "@/components/admin/InquiryActions";

export const dynamic = "force-dynamic";

export default async function InquiryDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  
  let inquiry = null;
  try {
    inquiry = await prisma.contactInquiry.findUnique({
      where: { id: resolvedParams.id },
      include: {
        lead: true
      }
    });
  } catch (error) {
    console.error("Database error fetching inquiry:", error);
  }

  if (!inquiry) {
    notFound();
  }

  // Auto-mark as read when viewed safely
  if (!inquiry.isRead) {
    prisma.contactInquiry.update({
      where: { id: inquiry.id },
      data: { isRead: true }
    }).catch(() => {});
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
                <h2 className="text-2xl lg:text-3xl font-black uppercase tracking-tight mb-2">
                  {inquiry.subject || "General Inquiry"}
                </h2>
                <div className="flex items-center gap-2 text-sm font-bold opacity-70">
                  <Calendar className="w-4 h-4" />
                  <span>
                    {inquiry.createdAt ? format(new Date(inquiry.createdAt), "MMMM d, yyyy 'at' h:mm a") : "Recent"}
                  </span>
                </div>
              </div>
              <span className={`px-4 py-1 text-sm font-black uppercase tracking-widest border-2 border-black ${inquiry.isRead ? 'bg-gray-200 text-gray-700' : 'bg-[#FF5500] text-white'}`}>
                {inquiry.isRead ? "Read" : "Unread"}
              </span>
            </div>

            <div className="border-t-4 border-black pt-6">
              <h3 className="text-sm font-black uppercase tracking-widest text-gray-500 mb-4">Message Content</h3>
              <div className="bg-gray-50 border-2 border-black p-6 font-medium text-lg leading-relaxed whitespace-pre-wrap">
                {inquiry.message}
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar Info & Actions */}
        <div className="flex flex-col gap-6">
          <div className="bg-white border-4 border-black hard-shadow p-6">
            <h3 className="text-lg font-black uppercase tracking-tight border-b-4 border-black pb-3 mb-6">Sender Details</h3>
            
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <User className="w-5 h-5 text-gray-400 shrink-0" />
                <span className="font-bold text-lg">{inquiry.name}</span>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gray-400 shrink-0" />
                <a href={`mailto:${inquiry.email}`} className="font-medium text-blue-600 hover:underline break-all">
                  {inquiry.email}
                </a>
              </div>

              {inquiry.lead?.phone && (
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-gray-400 shrink-0" />
                  <a href={`tel:${inquiry.lead.phone}`} className="font-medium hover:underline">
                    {inquiry.lead.phone}
                  </a>
                </div>
              )}
            </div>
          </div>

          <InquiryActions 
            inquiryId={inquiry.id} 
            isRead={inquiry.isRead} 
            isResolved={inquiry.isResolved}
            hasLead={!!inquiry.leadId}
          />
        </div>
      </div>
    </div>
  );
}
