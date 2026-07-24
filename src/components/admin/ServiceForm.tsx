"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { serviceSchema, ServiceFormValues } from "@/lib/admin/validations";
import { createService, updateService, deleteService } from "@/lib/admin/content-actions";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { Loader2, Trash2 } from "lucide-react";

export default function ServiceForm({ 
  initialData, 
  serviceId 
}: { 
  initialData?: Partial<ServiceFormValues>;
  serviceId?: string;
}) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const { register, handleSubmit, formState: { errors } } = useForm<ServiceFormValues>({
    resolver: zodResolver(serviceSchema),
    defaultValues: {
      name: initialData?.name || "",
      slug: initialData?.slug || "",
      shortDescription: initialData?.shortDescription || "",
      fullDescription: initialData?.fullDescription || "",
      icon: initialData?.icon || "",
      image: initialData?.image || "",
      features: initialData?.features || "",
      ctaText: initialData?.ctaText || "",
      ctaLink: initialData?.ctaLink || "",
      isActive: initialData?.isActive ?? true,
      displayOrder: initialData?.displayOrder || 0,
    }
  });

  const onSubmit = (data: ServiceFormValues) => {
    startTransition(async () => {
      try {
        if (serviceId) {
          await updateService(serviceId, data);
        } else {
          await createService(data);
        }
        router.push("/admin/services");
      } catch (err) {
        console.error(err);
        alert("Failed to save service.");
      }
    });
  };

  const handleDelete = () => {
    if (!serviceId) return;
    if (!confirm("Are you sure you want to delete this service?")) return;
    
    startTransition(async () => {
      await deleteService(serviceId);
      router.push("/admin/services");
    });
  };

  const inputClass = "w-full border-4 border-black p-3 font-medium focus:outline-none focus:ring-0 bg-white";
  const labelClass = "block text-sm font-black uppercase tracking-widest mb-2";
  const errorClass = "text-[#FF3B00] text-sm font-bold mt-1";

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-8 max-w-4xl bg-white border-4 border-black hard-shadow p-6 lg:p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className={labelClass}>Service Name *</label>
          <input {...register("name")} className={inputClass} />
          {errors.name && <p className={errorClass}>{errors.name.message}</p>}
        </div>

        <div>
          <label className={labelClass}>Slug *</label>
          <input {...register("slug")} className={inputClass} />
          {errors.slug && <p className={errorClass}>{errors.slug.message}</p>}
        </div>

        <div className="md:col-span-2">
          <label className={labelClass}>Short Description *</label>
          <textarea {...register("shortDescription")} className={`${inputClass} min-h-[80px]`} />
          {errors.shortDescription && <p className={errorClass}>{errors.shortDescription.message}</p>}
        </div>

        <div className="md:col-span-2">
          <label className={labelClass}>Full Description</label>
          <textarea {...register("fullDescription")} className={`${inputClass} min-h-[150px]`} />
        </div>

        <div>
          <label className={labelClass}>Icon Identifier (Lucide name)</label>
          <input {...register("icon")} className={inputClass} />
        </div>

        <div>
          <label className={labelClass}>Cover Image URL</label>
          <input {...register("image")} className={inputClass} />
        </div>

        <div className="md:col-span-2">
          <label className={labelClass}>Features (Comma separated)</label>
          <input {...register("features")} className={inputClass} placeholder="SEO, Paid Ads, Social Media" />
        </div>

        <div>
          <label className={labelClass}>CTA Text</label>
          <input {...register("ctaText")} className={inputClass} placeholder="Get Started" />
        </div>

        <div>
          <label className={labelClass}>CTA Link</label>
          <input {...register("ctaLink")} className={inputClass} placeholder="/contact" />
        </div>

        <div>
          <label className={labelClass}>Display Order</label>
          <input type="number" {...register("displayOrder", { valueAsNumber: true })} className={inputClass} />
        </div>

        <div className="flex items-center gap-3 mt-4">
          <input type="checkbox" id="isActive" {...register("isActive")} className="w-5 h-5 border-4 border-black accent-black" />
          <label htmlFor="isActive" className="font-bold uppercase tracking-widest text-sm cursor-pointer">Active (Visible on site)</label>
        </div>
      </div>

      <div className="flex items-center justify-between pt-6 border-t-4 border-black mt-4">
        {serviceId ? (
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
          className="flex items-center gap-2 px-8 py-3 bg-[#FFD700] text-black border-4 border-black font-black uppercase tracking-widest hover:bg-black hover:text-white transition-colors disabled:opacity-50 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
        >
          {isPending && <Loader2 className="w-5 h-5 animate-spin" />}
          {serviceId ? "Save Changes" : "Create Service"}
        </button>
      </div>
    </form>
  );
}
