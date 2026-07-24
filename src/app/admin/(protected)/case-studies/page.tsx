import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { Plus, Edit2 } from "lucide-react";
import { format } from "date-fns";

export default async function CaseStudiesPage() {
  const caseStudies = await prisma.caseStudy.findMany({
    orderBy: { createdAt: "desc" }
  });

  return (
    <div className="flex flex-col gap-6 max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <h1 className="text-3xl lg:text-4xl font-black uppercase tracking-tight">Case Studies</h1>
        <Link 
          href="/admin/case-studies/new"
          className="flex items-center gap-2 px-6 py-3 bg-[#FFD700] text-black border-4 border-black font-black uppercase tracking-widest hover:bg-black hover:text-white transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
        >
          <Plus className="w-5 h-5" />
          Add Case Study
        </Link>
      </div>

      <div className="bg-white border-4 border-black hard-shadow overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[800px]">
          <thead>
            <tr className="border-b-4 border-black bg-gray-50">
              <th className="p-4 font-black uppercase tracking-widest text-sm">Title</th>
              <th className="p-4 font-black uppercase tracking-widest text-sm">Client</th>
              <th className="p-4 font-black uppercase tracking-widest text-sm">Status</th>
              <th className="p-4 font-black uppercase tracking-widest text-sm">Featured</th>
              <th className="p-4 font-black uppercase tracking-widest text-sm text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {caseStudies.length === 0 ? (
              <tr>
                <td colSpan={5} className="p-8 text-center font-bold text-gray-500">
                  No case studies found. Create one to get started.
                </td>
              </tr>
            ) : (
              caseStudies.map((study) => (
                <tr key={study.id} className="border-b-2 border-gray-200 hover:bg-gray-50 transition-colors">
                  <td className="p-4">
                    <div className="font-black text-lg">{study.title}</div>
                    <div className="text-sm font-bold text-gray-500">{study.slug}</div>
                  </td>
                  <td className="p-4 font-bold">{study.client}</td>
                  <td className="p-4">
                    <span className={`px-3 py-1 text-xs font-black uppercase tracking-widest border-2 border-black ${
                      study.status === "PUBLISHED" ? "bg-[#FFD700] text-black" : "bg-gray-200 text-gray-600"
                    }`}>
                      {study.status}
                    </span>
                  </td>
                  <td className="p-4">
                    {study.isFeatured ? (
                      <span className="px-3 py-1 bg-black text-white text-xs font-black uppercase tracking-widest">
                        ★ FEATURED
                      </span>
                    ) : (
                      <span className="text-gray-400 text-sm font-bold">-</span>
                    )}
                  </td>
                  <td className="p-4 text-right">
                    <Link 
                      href={`/admin/case-studies/${study.id}`}
                      className="inline-flex items-center gap-2 px-4 py-2 border-2 border-black font-bold text-sm hover:bg-[#0044FF] hover:text-white transition-colors"
                    >
                      <Edit2 className="w-4 h-4" /> Edit
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
