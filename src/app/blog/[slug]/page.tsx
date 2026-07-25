import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getBlogBySlug } from '@/lib/public-data';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import FloatingCTA from '@/components/ui/FloatingCTA';
import Link from 'next/link';
import { ArrowLeft, Clock, User, Calendar, Share2 } from 'lucide-react';

export const revalidate = 60;

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const blog = await getBlogBySlug(params.slug);
  if (!blog) return { title: 'Blog Not Found' };
  
  return {
    title: `${blog.seoTitle || blog.title} | M4Y Blog`,
    description: blog.seoDescription || blog.excerpt || '',
    openGraph: {
      title: `${blog.seoTitle || blog.title} | M4Y`,
      description: blog.seoDescription || blog.excerpt || '',
      type: 'article',
      publishedTime: blog.publishDate?.toISOString(),
      authors: [blog.authorName || 'M4Y Team'],
    }
  };
}

export default async function BlogPage({ params }: { params: { slug: string } }) {
  const blog = await getBlogBySlug(params.slug);
  if (!blog || blog.status !== 'PUBLISHED') notFound();

  const categories = (blog.categories as string[]) || [];
  const tags = (blog.tags as string[]) || [];
  const formattedDate = blog.publishDate 
    ? new Date(blog.publishDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
    : 'Recently';

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white pt-32 pb-24 border-b-8 border-black">
        
        {/* Header Section */}
        <div className="bg-[#F4F4F5] border-b-8 border-black pt-16 pb-20 px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <Link href="/blog" className="inline-flex items-center gap-2 font-bold uppercase tracking-widest text-sm hover:text-[#FF3B00] transition-colors mb-8">
              <ArrowLeft className="w-4 h-4" /> Back to Blog
            </Link>
            
            <div className="flex flex-wrap gap-3 mb-8">
              {categories.map((c, i) => (
                <span key={i} className="px-3 py-1 bg-black text-white text-xs font-black uppercase tracking-widest">
                  {c}
                </span>
              ))}
            </div>

            <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8 leading-[0.9]">
              {blog.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 font-bold text-sm uppercase tracking-widest text-gray-500">
              {blog.authorName && (
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" /> {blog.authorName}
                </div>
              )}
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" /> {formattedDate}
              </div>
              {blog.readingTime && (
                <div className="flex items-center gap-2 text-[#FF3B00]">
                  <Clock className="w-4 h-4" /> {blog.readingTime}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="max-w-4xl mx-auto px-6 lg:px-12 pt-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 relative">
            
            {/* Share Sidebar (≈10%) */}
            <div className="hidden lg:block lg:col-span-1">
              <div className="sticky top-32 flex flex-col items-center gap-6">
                <div className="w-px h-12 bg-black/20"></div>
                <button className="p-3 border-2 border-black rounded-full hover:bg-[#FFD700] hover:scale-110 transition-transform">
                  <Share2 className="w-5 h-5" />
                </button>
                <div className="w-px h-12 bg-black/20"></div>
              </div>
            </div>

            {/* Main Content (≈90%) */}
            <div className="lg:col-span-11">
              <article 
                className="prose prose-lg md:prose-xl prose-headings:font-black prose-headings:uppercase prose-headings:tracking-tight prose-p:font-medium prose-p:text-gray-800 prose-a:text-[#FF3B00] prose-a:font-bold prose-strong:font-black prose-blockquote:border-l-8 prose-blockquote:border-[#FFD700] prose-blockquote:bg-[#F4F4F5] prose-blockquote:p-6 prose-blockquote:font-bold prose-blockquote:not-italic max-w-none mb-16"
                dangerouslySetInnerHTML={{ __html: blog.content }}
              />

              {/* Tags */}
              {tags.length > 0 && (
                <div className="border-t-4 border-black pt-8 mb-16">
                  <h4 className="font-black uppercase tracking-widest mb-4">Tags</h4>
                  <div className="flex flex-wrap gap-2">
                    {tags.map((tag, i) => (
                      <span key={i} className="px-3 py-1 bg-gray-100 border-2 border-black text-xs font-bold uppercase tracking-wider hover:bg-black hover:text-white transition-colors cursor-pointer">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Newsletter CTA inside Blog */}
              <div className="modern-card bg-black text-white p-8 md:p-12 text-center">
                <h3 className="text-3xl font-black uppercase mb-4">Enjoyed this article?</h3>
                <p className="font-bold text-gray-400 mb-8 max-w-lg mx-auto">
                  Subscribe to our newsletter for weekly growth strategies, marketing psychology, and AI automation tips.
                </p>
                <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="flex-1 px-4 py-3 text-black font-bold focus:outline-none border-4 border-white focus:border-[#FFD700]"
                    required
                  />
                  <button type="submit" className="px-8 py-3 bg-[#FF3B00] text-white font-black uppercase tracking-widest border-4 border-transparent hover:border-white transition-all">
                    Subscribe
                  </button>
                </form>
              </div>

            </div>
          </div>
        </div>
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}
