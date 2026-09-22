import { prisma } from "@/lib/prisma";
import { services as staticServices } from "@/data/services";
import Link from "next/link";
import { Plus, Edit2 } from "lucide-react";

export const dynamic = "force-dynamic";

export default async function ServicesPage() {
  let services: any[] = [];

  try {
    services = await prisma.service.findMany({
      orderBy: { displayOrder: "asc" }
    });
    if (services.length === 0) {
      services = staticServices.map((s, idx) => ({
        id: s.id,
        title: s.name,
        slug: s.slug,
        status: "PUBLISHED",
        displayOrder: idx + 1,
      }));
    }
  } catch (error) {
    console.warn("Database error loading services, using static fallback:", error);
    services = staticServices.map((s, idx) => ({
      id: s.id,
      title: s.name,
      slug: s.slug,
      status: "PUBLISHED",
      displayOrder: idx + 1,
    }));
  }

  return (
    <div className="flex flex-col gap-6 max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl lg:text-4xl font-black uppercase tracking-tight">Services</h1>
          <p className="text-xs font-bold uppercase tracking-wider text-black/60 mt-1">Agency Offerings & Deliverables</p>
        </div>
        <Link 
          href="/admin/services/new"
          className="flex items-center gap-2 px-6 py-3 bg-[#FFD700] text-black border-4 border-black font-black uppercase tracking-widest hover:bg-black hover:text-white transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
        >
          <Plus className="w-5 h-5" />
          Add Service
        </Link>
      </div>

      <div className="bg-white border-4 border-black hard-shadow overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[800px]">
          <thead>
            <tr className="border-b-4 border-black bg-gray-50">
              <th className="p-4 font-black uppercase tracking-widest text-sm w-16">Order</th>
              <th className="p-4 font-black uppercase tracking-widest text-sm">Service Name</th>
              <th className="p-4 font-black uppercase tracking-widest text-sm">Status</th>
              <th className="p-4 font-black uppercase tracking-widest text-sm text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {services.length === 0 ? (
              <tr>
                <td colSpan={4} className="p-8 text-center font-bold text-gray-500">
                  No services found. Create one to get started.
                </td>
              </tr>
            ) : (
              services.map((service) => (
                <tr key={service.id} className="border-b-2 border-gray-200 hover:bg-gray-50 transition-colors">
                  <td className="p-4 font-bold text-gray-400">#{service.displayOrder || 1}</td>
                  <td className="p-4">
                    <span className="font-bold text-lg">{service.title}</span>
                    <span className="block text-xs font-mono text-gray-400">/{service.slug}</span>
                  </td>
                  <td className="p-4">
                    <span className={`px-3 py-1 font-black text-xs uppercase tracking-wider border-2 border-black ${
                      service.status === "PUBLISHED" ? "bg-[#FFD700] text-black" : "bg-gray-200 text-gray-700"
                    }`}>
                      {service.status}
                    </span>
                  </td>
                  <td className="p-4 text-right">
                    <Link 
                      href={`/admin/services/${service.id}`}
                      className="inline-flex items-center gap-1 font-black text-sm uppercase tracking-wider hover:underline"
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
