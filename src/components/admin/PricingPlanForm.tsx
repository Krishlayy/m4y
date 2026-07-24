"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { pricingPlanSchema, PricingPlanFormValues } from "@/lib/admin/validations";
import { createPricingPlan, updatePricingPlan, deletePricingPlan } from "@/lib/admin/content-actions";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { Loader2, Trash2 } from "lucide-react";

export default function PricingPlanForm({ 
  initialData, 
  planId 
}: { 
  initialData?: Partial<PricingPlanFormValues>;
  planId?: string;
}) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const { register, handleSubmit, formState: { errors } } = useForm<PricingPlanFormValues>({
    resolver: zodResolver(pricingPlanSchema),
    defaultValues: {
      name: initialData?.name || "",
      price: initialData?.price || "",
      billingLabel: initialData?.billingLabel || "",
      description: initialData?.description || "",
      features: initialData?.features || "",
      ctaText: initialData?.ctaText || "",
      ctaLink: initialData?.ctaLink || "",
      isPopular: initialData?.isPopular || false,
      isActive: initialData?.isActive ?? true,
      displayOrder: initialData?.displayOrder || 0,
    }
  });

  const onSubmit = (data: PricingPlanFormValues) => {
    startTransition(async () => {
      try {
        if (planId) {
          await updatePricingPlan(planId, data);
        } else {
          await createPricingPlan(data);
        }
        router.push("/admin/pricing");
      } catch (err) {
        console.error(err);
        alert("Failed to save pricing plan.");
      }
    });
  };

  const handleDelete = () => {
    if (!planId) return;
    if (!confirm("Are you sure you want to delete this pricing plan?")) return;
    
    startTransition(async () => {
      await deletePricingPlan(planId);
      router.push("/admin/pricing");
    });
  };

  const inputClass = "w-full border-4 border-black p-3 font-medium focus:outline-none focus:ring-0 bg-white";
  const labelClass = "block text-sm font-black uppercase tracking-widest mb-2";
  const errorClass = "text-[#FF3B00] text-sm font-bold mt-1";

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-8 max-w-4xl bg-white border-4 border-black hard-shadow p-6 lg:p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className={labelClass}>Plan Name *</label>
          <input {...register("name")} className={inputClass} placeholder="e.g. Basic, Pro" />
          {errors.name && <p className={errorClass}>{errors.name.message}</p>}
        </div>

        <div>
          <label className={labelClass}>Price *</label>
          <input {...register("price")} className={inputClass} placeholder="e.g. $499 or Custom" />
          {errors.price && <p className={errorClass}>{errors.price.message}</p>}
        </div>

        <div>
          <label className={labelClass}>Billing Label</label>
          <input {...register("billingLabel")} className={inputClass} placeholder="e.g. /month, one-time" />
        </div>
        
        <div>
          <label className={labelClass}>Display Order</label>
          <input type="number" {...register("displayOrder", { valueAsNumber: true })} className={inputClass} />
        </div>

        <div className="md:col-span-2">
          <label className={labelClass}>Description</label>
          <textarea {...register("description")} className={`${inputClass} min-h-[80px]`} />
        </div>

        <div className="md:col-span-2">
          <label className={labelClass}>Features (Comma separated) *</label>
          <textarea {...register("features")} className={`${inputClass} min-h-[100px]`} placeholder="Feature 1, Feature 2, Feature 3" />
        </div>

        <div>
          <label className={labelClass}>CTA Text</label>
          <input {...register("ctaText")} className={inputClass} placeholder="Get Started" />
        </div>

        <div>
          <label className={labelClass}>CTA Link</label>
          <input {...register("ctaLink")} className={inputClass} placeholder="/contact" />
        </div>

        <div className="md:col-span-2 flex items-center gap-6 mt-2">
          <div className="flex items-center gap-3">
            <input type="checkbox" id="isActive" {...register("isActive")} className="w-5 h-5 border-4 border-black accent-black" />
            <label htmlFor="isActive" className="font-bold uppercase tracking-widest text-sm cursor-pointer">Active</label>
          </div>
          <div className="flex items-center gap-3">
            <input type="checkbox" id="isPopular" {...register("isPopular")} className="w-5 h-5 border-4 border-black accent-black" />
            <label htmlFor="isPopular" className="font-bold uppercase tracking-widest text-sm cursor-pointer">Mark as Popular</label>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between pt-6 border-t-4 border-black mt-4">
        {planId ? (
          <button 
            type="button" 
            onClick={handleDelete}
            disabled={isPending}
            className="flex items-center gap-2 px-4 py-3 border-4 border-[#FF3B00] text-[#FF3B00] font-bold uppercase tracking-widest text-sm hover:bg-[#FF3B00] hover:text-white transition-colors disabled:opacity-50"
          >
            <Trash2 className="w-4 h-4" /> Delete
          </button>
        ) : (
          <div></div>
        )}

        <button 
          type="submit"
          disabled={isPending}
          className="flex items-center gap-2 px-8 py-3 bg-[#0044FF] text-white border-4 border-black font-black uppercase tracking-widest hover:bg-black transition-colors disabled:opacity-50 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
        >
          {isPending && <Loader2 className="w-5 h-5 animate-spin" />}
          {planId ? "Save Changes" : "Create Plan"}
        </button>
      </div>
    </form>
  );
}
