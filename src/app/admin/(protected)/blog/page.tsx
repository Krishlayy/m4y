import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { Plus, Edit2 } from "lucide-react";
import { format } from "date-fns";

export default async function BlogPage() {
  const posts = await prisma.blogPost.findMany({
    orderBy: { createdAt: "desc" }
  });

  return (
    <div className="flex flex-col gap-6 max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <h1 className="text-3xl lg:text-4xl font-black uppercase tracking-tight">Blog Posts</h1>
        <Link 
          href="/admin/blog/new"
          className="flex items-center gap-2 px-6 py-3 bg-[#FF3B00] text-white border-4 border-black font-black uppercase tracking-widest hover:bg-black transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
        >
          <Plus className="w-5 h-5" />
          New Post
        </Link>
      </div>

      <div className="bg-white border-4 border-black hard-shadow overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[800px]">
          <thead>
            <tr className="border-b-4 border-black bg-gray-50">
              <th className="p-4 font-black uppercase tracking-widest text-sm">Title</th>
              <th className="p-4 font-black uppercase tracking-widest text-sm">Status</th>
              <th className="p-4 font-black uppercase tracking-widest text-sm">Publish Date</th>
              <th className="p-4 font-black uppercase tracking-widest text-sm text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {posts.length === 0 ? (
              <tr>
                <td colSpan={4} className="p-8 text-center font-bold text-gray-500">
                  No blog posts found. Create one to get started.
                </td>
              </tr>
            ) : (
              posts.map((post) => (
                <tr key={post.id} className="border-b-2 border-gray-200 hover:bg-gray-50 transition-colors">
                  <td className="p-4">
                    <div className="font-black text-lg">{post.title}</div>
                    <div className="text-sm font-bold text-gray-500">{post.slug}</div>
                  </td>
                  <td className="p-4">
                    <span className={`px-3 py-1 text-xs font-black uppercase tracking-widest border-2 border-black ${
                      post.status === "PUBLISHED" ? "bg-[#0044FF] text-white" : "bg-gray-200 text-gray-600"
                    }`}>
                      {post.status}
                    </span>
                  </td>
                  <td className="p-4 font-bold text-sm">
                    {post.publishDate ? format(new Date(post.publishDate), "MMM d, yyyy") : "-"}
                  </td>
                  <td className="p-4 text-right">
                    <Link 
                      href={`/admin/blog/${post.id}`}
                      className="inline-flex items-center gap-2 px-4 py-2 border-2 border-black font-bold text-sm hover:bg-[#FFD700] transition-colors"
                    >
                      <Edit2 className="w-4 h-4" /> Edit
                    </Link>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
