"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { siteSettingsSchema, SiteSettingsFormValues } from "@/lib/admin/validations";
import { updateSiteSettings } from "@/lib/admin/settings-actions";
import { useTransition } from "react";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";

export default function SiteSettingsForm({ 
  initialData 
}: { 
  initialData?: Partial<SiteSettingsFormValues>;
}) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const { register, handleSubmit, formState: { errors } } = useForm<SiteSettingsFormValues>({
    resolver: zodResolver(siteSettingsSchema),
    defaultValues: {
      agencyName: initialData?.agencyName || "Marketing 4 You",
      contactEmail: initialData?.contactEmail || "",
      contactPhone: initialData?.contactPhone || "",
      address: initialData?.address || "",
      socialLinks: initialData?.socialLinks || "",
      defaultSeoTitle: initialData?.defaultSeoTitle || "",
      defaultSeoMeta: initialData?.defaultSeoMeta || "",
      footerText: initialData?.footerText || "",
      ctaHeading: initialData?.ctaHeading || "",
      ctaSubheading: initialData?.ctaSubheading || "",
    }
  });

  const onSubmit = (data: SiteSettingsFormValues) => {
    startTransition(async () => {
      try {
        await updateSiteSettings(data);
        alert("Settings saved successfully!");
        router.refresh();
      } catch (err) {
        console.error(err);
        alert("Failed to save settings.");
      }
    });
  };

  const inputClass = "w-full border-4 border-black p-3 font-medium focus:outline-none focus:ring-0 bg-white";
  const labelClass = "block text-sm font-black uppercase tracking-widest mb-2";
  const errorClass = "text-[#FF3B00] text-sm font-bold mt-1";

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-8 max-w-4xl bg-white border-4 border-black hard-shadow p-6 lg:p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="md:col-span-2">
          <label className={labelClass}>Agency Name *</label>
          <input {...register("agencyName")} className={inputClass} />
          {errors.agencyName && <p className={errorClass}>{errors.agencyName.message}</p>}
        </div>

        <div>
          <label className={labelClass}>Contact Email</label>
          <input type="email" {...register("contactEmail")} className={inputClass} />
          {errors.contactEmail && <p className={errorClass}>{errors.contactEmail.message}</p>}
        </div>

        <div>
          <label className={labelClass}>Contact Phone</label>
          <input {...register("contactPhone")} className={inputClass} />
        </div>

        <div className="md:col-span-2">
          <label className={labelClass}>Office Address</label>
          <textarea {...register("address")} className={`${inputClass} min-h-[80px]`} />
        </div>

        <div className="md:col-span-2">
          <label className={labelClass}>Social Links (JSON or Comma Separated URLs)</label>
          <input {...register("socialLinks")} className={inputClass} placeholder='e.g. ["https://twitter.com/m4y", "https://linkedin.com/m4y"]' />
        </div>

        <div>
          <label className={labelClass}>Default SEO Title</label>
          <input {...register("defaultSeoTitle")} className={inputClass} />
        </div>
        
        <div>
          <label className={labelClass}>Default SEO Meta Description</label>
          <input {...register("defaultSeoMeta")} className={inputClass} />
        </div>

        <div className="md:col-span-2">
          <label className={labelClass}>Global CTA Heading</label>
          <input {...register("ctaHeading")} className={inputClass} placeholder="Ready to grow your business?" />
        </div>

        <div className="md:col-span-2">
          <label className={labelClass}>Global CTA Subheading</label>
          <input {...register("ctaSubheading")} className={inputClass} placeholder="Let's build something great together." />
        </div>

        <div className="md:col-span-2">
          <label className={labelClass}>Footer Text</label>
          <input {...register("footerText")} className={inputClass} placeholder="© 2024 Marketing 4 You. All rights reserved." />
        </div>
      </div>

      <div className="flex items-center justify-end pt-6 border-t-4 border-black mt-4">
        <button 
          type="submit"
          disabled={isPending}
          className="flex items-center gap-2 px-8 py-3 bg-[#0044FF] text-white border-4 border-black font-black uppercase tracking-widest hover:bg-black transition-colors disabled:opacity-50 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
        >
          {isPending && <Loader2 className="w-5 h-5 animate-spin" />}
          Save Settings
        </button>
      </div>
    </form>
  );
}
