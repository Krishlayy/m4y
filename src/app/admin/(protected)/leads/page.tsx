import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { format } from "date-fns";

export default async function LeadsPage() {
  const leads = await prisma.lead.findMany({
    orderBy: { createdAt: "desc" }
  });

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl lg:text-4xl font-black uppercase tracking-tight">Leads</h1>
      </div>

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
                  No leads found.
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
                    <span className="px-3 py-1 bg-black text-white text-xs font-bold uppercase tracking-widest">
                      {lead.status}
                    </span>
                  </td>
                  <td className="p-4 font-medium text-sm">{lead.source || "Website"}</td>
                  <td className="p-4 font-medium text-sm">{format(new Date(lead.createdAt), "MMM d, yyyy")}</td>
                  <td className="p-4">
                    <Link 
                      href={`/admin/leads/${lead.id}`}
                      className="px-4 py-2 border-2 border-black font-bold text-sm hover:bg-[#FFD700] transition-colors inline-block"
                    >
                      VIEW
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
