import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import PricingPlanForm from "@/components/admin/PricingPlanForm";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default async function EditPricingPlanPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  
  const plan = await prisma.pricingPlan.findUnique({
    where: { id: resolvedParams.id }
  });

  if (!plan) {
    notFound();
  }

  const initialData = {
    ...plan,
    billingLabel: plan.billingLabel || "",
    description: plan.description || "",
    features: Array.isArray(plan.features) ? plan.features.join(", ") : "",
    ctaText: plan.ctaText || "",
    ctaLink: plan.ctaLink || "",
  };

  return (
    <div className="flex flex-col gap-6 max-w-4xl mx-auto">
      <div className="flex items-center gap-4">
        <Link 
          href="/admin/pricing"
          className="p-3 border-4 border-black hover:bg-black hover:text-white transition-colors"
        >
          <ArrowLeft className="w-6 h-6" />
        </Link>
        <h1 className="text-3xl lg:text-4xl font-black uppercase tracking-tight">Edit Pricing Plan</h1>
      </div>
      <PricingPlanForm initialData={initialData} planId={plan.id} />
    </div>
  );
}
