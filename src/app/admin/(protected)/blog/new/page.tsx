import BlogPostForm from "@/components/admin/BlogPostForm";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NewBlogPostPage() {
  return (
    <div className="flex flex-col gap-6 max-w-4xl mx-auto">
      <div className="flex items-center gap-4">
        <Link 
          href="/admin/blog"
          className="p-3 border-4 border-black hover:bg-black hover:text-white transition-colors"
        >
          <ArrowLeft className="w-6 h-6" />
        </Link>
        <h1 className="text-3xl lg:text-4xl font-black uppercase tracking-tight">Create Post</h1>
      </div>
      <BlogPostForm />
    </div>
  );
}
