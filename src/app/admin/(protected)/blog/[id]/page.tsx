import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import BlogPostForm from "@/components/admin/BlogPostForm";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default async function EditBlogPostPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  
  const post = await prisma.blogPost.findUnique({
    where: { id: resolvedParams.id }
  });

  if (!post) {
    notFound();
  }

  const initialData = {
    ...post,
    featuredImage: post.featuredImage || "",
    excerpt: post.excerpt || "",
    categories: Array.isArray(post.categories) ? post.categories.join(", ") : "",
    tags: Array.isArray(post.tags) ? post.tags.join(", ") : "",
    authorName: post.authorName || "",
    seoTitle: post.seoTitle || "",
    seoDescription: post.seoDescription || "",
    publishDate: post.publishDate ? post.publishDate.toISOString().slice(0, 16) : "",
  };

  return (
    <div className="flex flex-col gap-6 max-w-4xl mx-auto">
      <div className="flex items-center gap-4">
        <Link 
          href="/admin/blog"
          className="p-3 border-4 border-black hover:bg-black hover:text-white transition-colors"
        >
          <ArrowLeft className="w-6 h-6" />
        </Link>
        <h1 className="text-3xl lg:text-4xl font-black uppercase tracking-tight">Edit Post</h1>
      </div>
      <BlogPostForm initialData={initialData} postId={post.id} />
    </div>
  );
}
