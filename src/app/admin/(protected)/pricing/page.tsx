import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { Plus, Edit2 } from "lucide-react";

export default async function PricingPage() {
  const plans = await prisma.pricingPlan.findMany({
    orderBy: { displayOrder: "asc" }
  });

  return (
    <div className="flex flex-col gap-6 max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <h1 className="text-3xl lg:text-4xl font-black uppercase tracking-tight">Pricing Plans</h1>
        <Link 
          href="/admin/pricing/new"
          className="flex items-center gap-2 px-6 py-3 bg-[#0044FF] text-white border-4 border-black font-black uppercase tracking-widest hover:bg-black transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
        >
          <Plus className="w-5 h-5" />
          Add Plan
        </Link>
      </div>

      <div className="bg-white border-4 border-black hard-shadow overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[800px]">
          <thead>
            <tr className="border-b-4 border-black bg-gray-50">
              <th className="p-4 font-black uppercase tracking-widest text-sm w-16">Order</th>
              <th className="p-4 font-black uppercase tracking-widest text-sm">Plan Name</th>
              <th className="p-4 font-black uppercase tracking-widest text-sm">Price</th>
              <th className="p-4 font-black uppercase tracking-widest text-sm">Status</th>
              <th className="p-4 font-black uppercase tracking-widest text-sm text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {plans.length === 0 ? (
              <tr>
                <td colSpan={5} className="p-8 text-center font-bold text-gray-500">
                  No pricing plans found. Create one to get started.
                </td>
              </tr>
            ) : (
              plans.map((plan) => (
                <tr key={plan.id} className="border-b-2 border-gray-200 hover:bg-gray-50 transition-colors">
                  <td className="p-4 font-black text-lg text-gray-400">{plan.displayOrder}</td>
                  <td className="p-4">
                    <div className="font-black text-lg flex items-center gap-2">
                      {plan.name}
                      {plan.isPopular && <span className="text-[10px] bg-[#FFD700] text-black px-2 py-1 uppercase tracking-widest border border-black">Popular</span>}
                    </div>
                  </td>
                  <td className="p-4 font-bold">{plan.price} <span className="text-sm font-normal text-gray-500">{plan.billingLabel}</span></td>
                  <td className="p-4">
                    {plan.isActive ? (
                      <span className="px-3 py-1 bg-black text-white text-xs font-black uppercase tracking-widest">
                        ACTIVE
                      </span>
                    ) : (
                      <span className="px-3 py-1 bg-gray-200 text-gray-600 text-xs font-black uppercase tracking-widest">
                        HIDDEN
                      </span>
                    )}
                  </td>
                  <td className="p-4 text-right">
                    <Link 
                      href={`/admin/pricing/${plan.id}`}
                      className="inline-flex items-center gap-2 px-4 py-2 border-2 border-black font-bold text-sm hover:bg-[#FF3B00] hover:text-white transition-colors"
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
