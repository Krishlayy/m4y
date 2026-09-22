import { prisma } from "@/lib/prisma";
import { packages as staticPackages } from "@/data/packages";
import Link from "next/link";
import { Plus, Edit2 } from "lucide-react";

export const dynamic = "force-dynamic";

export default async function PricingPage() {
  let plans: any[] = [];

  try {
    plans = await prisma.pricingPlan.findMany({
      orderBy: { displayOrder: "asc" }
    });
    if (plans.length === 0) {
      plans = staticPackages.map((p, idx) => ({
        id: p.id,
        name: p.name,
        price: p.price,
        period: p.period,
        isPopular: p.isRecommended || false,
        displayOrder: idx + 1,
      }));
    }
  } catch (error) {
    console.warn("Database error loading pricing plans, using fallback:", error);
    plans = staticPackages.map((p, idx) => ({
      id: p.id,
      name: p.name,
      price: p.price,
      period: p.period,
      isPopular: p.isRecommended || false,
      displayOrder: idx + 1,
    }));
  }

  return (
    <div className="flex flex-col gap-6 max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl lg:text-4xl font-black uppercase tracking-tight">Pricing Plans</h1>
          <p className="text-xs font-bold uppercase tracking-wider text-black/60 mt-1">Partnership Tiers & Retainers</p>
        </div>
        <Link 
          href="/admin/pricing/new"
          className="flex items-center gap-2 px-6 py-3 bg-[#FFD700] text-black border-4 border-black font-black uppercase tracking-widest hover:bg-black hover:text-white transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
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
              <th className="p-4 font-black uppercase tracking-widest text-sm">Badge</th>
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
                  <td className="p-4 font-bold text-gray-400">#{plan.displayOrder || 1}</td>
                  <td className="p-4 font-bold text-lg">{plan.name}</td>
                  <td className="p-4 font-black text-xl text-[#FF5500]">
                    {plan.price}
                    {plan.period && <span className="text-xs font-bold text-black/60 block">{plan.period}</span>}
                  </td>
                  <td className="p-4">
                    {plan.isPopular && (
                      <span className="px-3 py-1 bg-[#FFD700] text-black font-black text-xs uppercase tracking-wider border-2 border-black">
                        Popular
                      </span>
                    )}
                  </td>
                  <td className="p-4 text-right">
                    <Link 
                      href={`/admin/pricing/${plan.id}`}
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
