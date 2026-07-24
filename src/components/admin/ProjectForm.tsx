"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { projectSchema, ProjectFormValues } from "@/lib/admin/validations";
import { createProject, updateProject, deleteProject } from "@/lib/admin/project-actions";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { Loader2, Trash2 } from "lucide-react";
import { ContentStatus } from "@prisma/client";

export default function ProjectForm({ 
  initialData, 
  projectId 
}: { 
  initialData?: Partial<ProjectFormValues>;
  projectId?: string;
}) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const { register, handleSubmit, formState: { errors } } = useForm<ProjectFormValues>({
    resolver: zodResolver(projectSchema),
    defaultValues: {
      title: initialData?.title || "",
      slug: initialData?.slug || "",
      client: initialData?.client || "",
      category: initialData?.category || "",
      description: initialData?.description || "",
      coverImage: initialData?.coverImage || "",
      techStack: initialData?.techStack || "",
      results: initialData?.results || "",
      url: initialData?.url || "",
      isFeatured: initialData?.isFeatured || false,
      status: initialData?.status || "DRAFT",
      displayOrder: initialData?.displayOrder || 0,
    }
  });

  const onSubmit = (data: ProjectFormValues) => {
    startTransition(async () => {
      try {
        if (projectId) {
          await updateProject(projectId, data);
        } else {
          await createProject(data);
        }
        router.push("/admin/projects");
      } catch (err) {
        console.error(err);
        alert("Failed to save project.");
      }
    });
  };

  const handleDelete = () => {
    if (!projectId) return;
    if (!confirm("Are you sure you want to delete this project? This cannot be undone.")) return;
    
    startTransition(async () => {
      await deleteProject(projectId);
      router.push("/admin/projects");
    });
  };

  const inputClass = "w-full border-4 border-black p-3 font-medium focus:outline-none focus:ring-0 bg-white";
  const labelClass = "block text-sm font-black uppercase tracking-widest mb-2";
  const errorClass = "text-[#FF3B00] text-sm font-bold mt-1";

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-8 max-w-4xl bg-white border-4 border-black hard-shadow p-6 lg:p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className={labelClass}>Title *</label>
          <input {...register("title")} className={inputClass} />
          {errors.title && <p className={errorClass}>{errors.title.message}</p>}
        </div>

        <div>
          <label className={labelClass}>Slug *</label>
          <input {...register("slug")} className={inputClass} placeholder="e.g. m4y-redesign" />
          {errors.slug && <p className={errorClass}>{errors.slug.message}</p>}
        </div>

        <div>
          <label className={labelClass}>Client</label>
          <input {...register("client")} className={inputClass} />
        </div>

        <div>
          <label className={labelClass}>Category</label>
          <input {...register("category")} className={inputClass} placeholder="e.g. Web Development" />
        </div>

        <div className="md:col-span-2">
          <label className={labelClass}>Description *</label>
          <textarea {...register("description")} className={`${inputClass} min-h-[100px]`} />
          {errors.description && <p className={errorClass}>{errors.description.message}</p>}
        </div>

        <div>
          <label className={labelClass}>Cover Image URL</label>
          <input {...register("coverImage")} className={inputClass} />
        </div>

        <div>
          <label className={labelClass}>Live URL</label>
          <input {...register("url")} className={inputClass} placeholder="https://..." />
          {errors.url && <p className={errorClass}>{errors.url.message}</p>}
        </div>

        <div className="md:col-span-2">
          <label className={labelClass}>Tech Stack (Comma Separated)</label>
          <input {...register("techStack")} className={inputClass} placeholder="React, Next.js, Tailwind" />
        </div>

        <div className="md:col-span-2">
          <label className={labelClass}>Results / Impact</label>
          <textarea {...register("results")} className={`${inputClass} min-h-[80px]`} />
        </div>

        <div>
          <label className={labelClass}>Status</label>
          <select {...register("status")} className={inputClass}>
            {Object.values(ContentStatus).map(s => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>

        <div>
          <label className={labelClass}>Display Order</label>
          <input type="number" {...register("displayOrder", { valueAsNumber: true })} className={inputClass} />
        </div>

        <div className="flex items-center gap-3 mt-4">
          <input type="checkbox" id="isFeatured" {...register("isFeatured")} className="w-5 h-5 border-4 border-black accent-black" />
          <label htmlFor="isFeatured" className="font-bold uppercase tracking-widest text-sm cursor-pointer">Feature this project</label>
        </div>
      </div>

      <div className="flex items-center justify-between pt-6 border-t-4 border-black mt-4">
        {projectId ? (
          <button 
            type="button" 
            onClick={handleDelete}
            disabled={isPending}
            className="flex items-center gap-2 px-4 py-3 border-4 border-[#FF3B00] text-[#FF3B00] font-bold uppercase tracking-widest text-sm hover:bg-[#FF3B00] hover:text-white transition-colors disabled:opacity-50"
          >
            <Trash2 className="w-4 h-4" /> Delete
          </button>
        ) : (
          <div></div> // Spacer
        )}

        <button 
          type="submit"
          disabled={isPending}
          className="flex items-center gap-2 px-8 py-3 bg-[#FFD700] border-4 border-black font-black uppercase tracking-widest hover:bg-black hover:text-white transition-colors disabled:opacity-50"
        >
          {isPending && <Loader2 className="w-5 h-5 animate-spin" />}
          {projectId ? "Save Changes" : "Create Project"}
        </button>
      </div>
    </form>
  );
}
