"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { blogPostSchema, BlogPostFormValues } from "@/lib/admin/validations";
import { createBlogPost, updateBlogPost, deleteBlogPost } from "@/lib/admin/content-actions";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { Loader2, Trash2 } from "lucide-react";
import { ContentStatus } from "@prisma/client";

export default function BlogPostForm({ 
  initialData, 
  postId 
}: { 
  initialData?: Partial<BlogPostFormValues>;
  postId?: string;
}) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const { register, handleSubmit, formState: { errors } } = useForm<BlogPostFormValues>({
    resolver: zodResolver(blogPostSchema),
    defaultValues: {
      title: initialData?.title || "",
      slug: initialData?.slug || "",
      featuredImage: initialData?.featuredImage || "",
      content: initialData?.content || "",
      excerpt: initialData?.excerpt || "",
      categories: initialData?.categories || "",
      tags: initialData?.tags || "",
      authorName: initialData?.authorName || "",
      status: initialData?.status || "DRAFT",
      publishDate: initialData?.publishDate || "",
      seoTitle: initialData?.seoTitle || "",
      seoDescription: initialData?.seoDescription || "",
    }
  });

  const onSubmit = (data: BlogPostFormValues) => {
    startTransition(async () => {
      try {
        if (postId) {
          await updateBlogPost(postId, data);
        } else {
          await createBlogPost(data);
        }
        router.push("/admin/blog");
      } catch (err) {
        console.error(err);
        alert("Failed to save blog post.");
      }
    });
  };

  const handleDelete = () => {
    if (!postId) return;
    if (!confirm("Are you sure you want to delete this post?")) return;
    
    startTransition(async () => {
      await deleteBlogPost(postId);
      router.push("/admin/blog");
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
          <input {...register("slug")} className={inputClass} />
          {errors.slug && <p className={errorClass}>{errors.slug.message}</p>}
        </div>

        <div>
          <label className={labelClass}>Author Name</label>
          <input {...register("authorName")} className={inputClass} />
        </div>

        <div>
          <label className={labelClass}>Status</label>
          <select {...register("status")} className={inputClass}>
            {Object.values(ContentStatus).map(s => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>

        <div>
          <label className={labelClass}>Publish Date (Optional)</label>
          <input type="datetime-local" {...register("publishDate")} className={inputClass} />
        </div>

        <div className="md:col-span-2">
          <label className={labelClass}>Excerpt</label>
          <textarea {...register("excerpt")} className={`${inputClass} min-h-[80px]`} />
        </div>

        <div className="md:col-span-2">
          <label className={labelClass}>Content (Markdown / HTML) *</label>
          <textarea {...register("content")} className={`${inputClass} min-h-[250px]`} />
          {errors.content && <p className={errorClass}>{errors.content.message}</p>}
        </div>

        <div className="md:col-span-2">
          <label className={labelClass}>Featured Image URL</label>
          <input {...register("featuredImage")} className={inputClass} />
        </div>

        <div>
          <label className={labelClass}>Categories (Comma separated)</label>
          <input {...register("categories")} className={inputClass} placeholder="Marketing, SEO" />
        </div>

        <div>
          <label className={labelClass}>Tags (Comma separated)</label>
          <input {...register("tags")} className={inputClass} placeholder="tips, strategy, 2024" />
        </div>

        <div>
          <label className={labelClass}>SEO Title</label>
          <input {...register("seoTitle")} className={inputClass} />
        </div>
        
        <div>
          <label className={labelClass}>SEO Description</label>
          <input {...register("seoDescription")} className={inputClass} />
        </div>
      </div>

      <div className="flex items-center justify-between pt-6 border-t-4 border-black mt-4">
        {postId ? (
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
          {postId ? "Save Changes" : "Publish Post"}
        </button>
      </div>
    </form>
  );
}
