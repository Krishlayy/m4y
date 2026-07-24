"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { caseStudySchema, CaseStudyFormValues } from "@/lib/admin/validations";
import { createCaseStudy, updateCaseStudy, deleteCaseStudy } from "@/lib/admin/project-actions";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { Loader2, Trash2 } from "lucide-react";
import { ContentStatus } from "@prisma/client";

export default function CaseStudyForm({ 
  initialData, 
  caseStudyId 
}: { 
  initialData?: Partial<CaseStudyFormValues>;
  caseStudyId?: string;
}) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const { register, handleSubmit, formState: { errors } } = useForm<CaseStudyFormValues>({
    resolver: zodResolver(caseStudySchema),
    defaultValues: {
      title: initialData?.title || "",
      slug: initialData?.slug || "",
      client: initialData?.client || "",
      industry: initialData?.industry || "",
      problem: initialData?.problem || "",
      strategy: initialData?.strategy || "",
      solution: initialData?.solution || "",
      results: initialData?.results || "",
      testimonial: initialData?.testimonial || "",
      seoTitle: initialData?.seoTitle || "",
      seoDescription: initialData?.seoDescription || "",
      isFeatured: initialData?.isFeatured || false,
      status: initialData?.status || "DRAFT",
    }
  });

  const onSubmit = (data: CaseStudyFormValues) => {
    startTransition(async () => {
      try {
        if (caseStudyId) {
          await updateCaseStudy(caseStudyId, data);
        } else {
          await createCaseStudy(data);
        }
        router.push("/admin/case-studies");
      } catch (err) {
        console.error(err);
        alert("Failed to save case study.");
      }
    });
  };

  const handleDelete = () => {
    if (!caseStudyId) return;
    if (!confirm("Are you sure you want to delete this case study?")) return;
    
    startTransition(async () => {
      await deleteCaseStudy(caseStudyId);
      router.push("/admin/case-studies");
    });
  };

  const inputClass = "w-full border-4 border-black p-3 font-medium focus:outline-none focus:ring-0 bg-white";
  const labelClass = "block text-sm font-black uppercase tracking-widest mb-2";
  const errorClass = "text-[#FF3B00] text-sm font-bold mt-1";

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-8 max-w-4xl bg-white border-4 border-black hard-shadow p-6 lg:p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="md:col-span-2">
          <label className={labelClass}>Title *</label>
          <input {...register("title")} className={inputClass} />
          {errors.title && <p className={errorClass}>{errors.title.message}</p>}
        </div>

        <div>
          <label className={labelClass}>Slug *</label>
          <input {...register("slug")} className={inputClass} placeholder="e.g. m4y-growth" />
          {errors.slug && <p className={errorClass}>{errors.slug.message}</p>}
        </div>

        <div>
          <label className={labelClass}>Client *</label>
          <input {...register("client")} className={inputClass} />
          {errors.client && <p className={errorClass}>{errors.client.message}</p>}
        </div>

        <div>
          <label className={labelClass}>Industry</label>
          <input {...register("industry")} className={inputClass} />
        </div>

        <div>
          <label className={labelClass}>Status</label>
          <select {...register("status")} className={inputClass}>
            {Object.values(ContentStatus).map(s => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>

        <div className="md:col-span-2">
          <label className={labelClass}>Problem *</label>
          <textarea {...register("problem")} className={`${inputClass} min-h-[100px]`} />
          {errors.problem && <p className={errorClass}>{errors.problem.message}</p>}
        </div>

        <div className="md:col-span-2">
          <label className={labelClass}>Strategy *</label>
          <textarea {...register("strategy")} className={`${inputClass} min-h-[100px]`} />
          {errors.strategy && <p className={errorClass}>{errors.strategy.message}</p>}
        </div>

        <div className="md:col-span-2">
          <label className={labelClass}>Solution *</label>
          <textarea {...register("solution")} className={`${inputClass} min-h-[100px]`} />
          {errors.solution && <p className={errorClass}>{errors.solution.message}</p>}
        </div>

        <div className="md:col-span-2">
          <label className={labelClass}>Results / Impact *</label>
          <textarea {...register("results")} className={`${inputClass} min-h-[100px]`} />
          {errors.results && <p className={errorClass}>{errors.results.message}</p>}
        </div>

        <div className="md:col-span-2">
          <label className={labelClass}>Client Testimonial</label>
          <textarea {...register("testimonial")} className={`${inputClass} min-h-[80px]`} />
        </div>
        
        <div>
          <label className={labelClass}>SEO Title</label>
          <input {...register("seoTitle")} className={inputClass} />
        </div>
        
        <div>
          <label className={labelClass}>SEO Description</label>
          <input {...register("seoDescription")} className={inputClass} />
        </div>

        <div className="flex items-center gap-3 mt-4">
          <input type="checkbox" id="isFeatured" {...register("isFeatured")} className="w-5 h-5 border-4 border-black accent-black" />
          <label htmlFor="isFeatured" className="font-bold uppercase tracking-widest text-sm cursor-pointer">Feature this case study</label>
        </div>
      </div>

      <div className="flex items-center justify-between pt-6 border-t-4 border-black mt-4">
        {caseStudyId ? (
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
          className="flex items-center gap-2 px-8 py-3 bg-[#FF3B00] text-white border-4 border-black font-black uppercase tracking-widest hover:bg-black transition-colors disabled:opacity-50 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
        >
          {isPending && <Loader2 className="w-5 h-5 animate-spin" />}
          {caseStudyId ? "Save Changes" : "Create Case Study"}
        </button>
      </div>
    </form>
  );
}
