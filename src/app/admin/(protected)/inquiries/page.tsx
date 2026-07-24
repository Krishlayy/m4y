import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { format } from "date-fns";

export default async function InquiriesPage() {
  const inquiries = await prisma.contactInquiry.findMany({
    orderBy: { createdAt: "desc" }
  });

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl lg:text-4xl font-black uppercase tracking-tight">Contact Inquiries</h1>
      </div>

      <div className="bg-white border-4 border-black hard-shadow overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[800px]">
          <thead>
            <tr className="border-b-4 border-black bg-gray-50">
              <th className="p-4 font-black uppercase tracking-widest text-sm">Status</th>
              <th className="p-4 font-black uppercase tracking-widest text-sm">Name</th>
              <th className="p-4 font-black uppercase tracking-widest text-sm">Subject</th>
              <th className="p-4 font-black uppercase tracking-widest text-sm">Date</th>
              <th className="p-4 font-black uppercase tracking-widest text-sm">Action</th>
            </tr>
          </thead>
          <tbody>
            {inquiries.length === 0 ? (
              <tr>
                <td colSpan={5} className="p-8 text-center font-bold text-gray-500">
                  No inquiries found.
                </td>
              </tr>
            ) : (
              inquiries.map((inq) => (
                <tr 
                  key={inq.id} 
                  className={`border-b-2 border-gray-200 transition-colors ${!inq.isRead ? 'bg-[#FFD700]/10 font-bold' : 'hover:bg-gray-50'}`}
                >
                  <td className="p-4">
                    <div className="flex gap-2">
                      {!inq.isRead && (
                        <span className="px-2 py-1 bg-[#FF3B00] text-white text-[10px] font-black uppercase tracking-widest">
                          NEW
                        </span>
                      )}
                      {inq.isResolved && (
                        <span className="px-2 py-1 bg-green-500 text-white text-[10px] font-black uppercase tracking-widest">
                          RESOLVED
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="font-bold">{inq.name}</div>
                    <div className="text-sm text-gray-500">{inq.email}</div>
                  </td>
                  <td className="p-4 font-medium text-sm max-w-xs truncate">
                    {inq.subject || "No Subject"}
                  </td>
                  <td className="p-4 font-medium text-sm">{format(new Date(inq.createdAt), "MMM d, yyyy")}</td>
                  <td className="p-4">
                    <Link 
                      href={`/admin/inquiries/${inq.id}`}
                      className="px-4 py-2 border-2 border-black font-bold text-sm hover:bg-black hover:text-white transition-colors inline-block"
                    >
                      REVIEW
                    </Link>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
