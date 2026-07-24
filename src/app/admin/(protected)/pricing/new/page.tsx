import PricingPlanForm from "@/components/admin/PricingPlanForm";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NewPricingPlanPage() {
  return (
    <div className="flex flex-col gap-6 max-w-4xl mx-auto">
      <div className="flex items-center gap-4">
        <Link 
          href="/admin/pricing"
          className="p-3 border-4 border-black hover:bg-black hover:text-white transition-colors"
        >
          <ArrowLeft className="w-6 h-6" />
        </Link>
        <h1 className="text-3xl lg:text-4xl font-black uppercase tracking-tight">Create Pricing Plan</h1>
      </div>
      <PricingPlanForm />
    </div>
  );
}
