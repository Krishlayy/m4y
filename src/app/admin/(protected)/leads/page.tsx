import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { format } from "date-fns";

export const dynamic = "force-dynamic";

export default async function LeadsPage() {
  let leads: any[] = [];
  let dbError = false;

  try {
    leads = await prisma.lead.findMany({
      orderBy: { createdAt: "desc" }
    });
  } catch (error) {
    console.warn("Database error loading leads:", error);
    dbError = true;
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl lg:text-4xl font-black uppercase tracking-tight">Leads</h1>
          <p className="text-xs font-bold uppercase tracking-wider text-black/60 mt-1">Inbound Client Requests</p>
        </div>
        
        <div className="flex items-center gap-3">
          <Link
            href="/admin/spreadsheet"
            className="inline-flex items-center gap-2 bg-[#FFD700] text-black px-4 py-2 border-2 border-black font-black text-sm uppercase tracking-wider shadow-[3px_3px_0_#000] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all"
          >
            📊 Open Spreadsheet
          </Link>
          <a
            href="/api/admin/export/leads"
            download
            className="inline-flex items-center gap-2 bg-black text-white px-4 py-2 border-2 border-black font-black text-sm uppercase tracking-wider shadow-[3px_3px_0_#FF5500] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all"
          >
            📥 Export CSV
          </a>
        </div>
      </div>

      {dbError && (
        <div className="bg-[#FFF8E7] border-2 border-black p-4 font-bold text-xs text-black shadow-[3px_3px_0_#FF5500]">
          ⚡ Database pooler is syncing. Your submissions are safely logged to <code className="bg-black text-[#FFD700] px-1 py-0.5">leads_backup.csv</code> and accessible via the spreadsheet view.
        </div>
      )}

      <div className="bg-white border-4 border-black hard-shadow overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[800px]">
          <thead>
            <tr className="border-b-4 border-black bg-gray-50">
              <th className="p-4 font-black uppercase tracking-widest text-sm">Name</th>
              <th className="p-4 font-black uppercase tracking-widest text-sm">Contact</th>
              <th className="p-4 font-black uppercase tracking-widest text-sm">Status</th>
              <th className="p-4 font-black uppercase tracking-widest text-sm">Source</th>
              <th className="p-4 font-black uppercase tracking-widest text-sm">Date</th>
              <th className="p-4 font-black uppercase tracking-widest text-sm">Action</th>
            </tr>
          </thead>
          <tbody>
            {leads.length === 0 ? (
              <tr>
                <td colSpan={6} className="p-8 text-center font-bold text-gray-500">
                  No leads found. New submissions will appear here instantly.
                </td>
              </tr>
            ) : (
              leads.map((lead) => (
                <tr key={lead.id} className="border-b-2 border-gray-200 hover:bg-gray-50 transition-colors">
                  <td className="p-4 font-bold">{lead.name}</td>
                  <td className="p-4">
                    <div className="text-sm font-bold">{lead.email}</div>
                    {lead.phone && <div className="text-xs text-gray-500">{lead.phone}</div>}
                  </td>
                  <td className="p-4">
                    <span className="px-3 py-1 bg-black text-[#FFD700] text-xs font-bold uppercase tracking-widest">
                      {lead.status}
                    </span>
                  </td>
                  <td className="p-4 font-medium text-sm">{lead.source || "Website"}</td>
                  <td className="p-4 font-medium text-sm">
                    {lead.createdAt ? format(new Date(lead.createdAt), "MMM d, yyyy") : "Recent"}
                  </td>
                  <td className="p-4">
                    <Link 
                      href={`/admin/leads/${lead.id}`}
                      className="px-4 py-2 border-2 border-black font-bold text-sm hover:bg-[#FFD700] transition-colors inline-block"
                    >
                      View
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
