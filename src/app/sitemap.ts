import { MetadataRoute } from 'next';
import { blogPosts } from '@/data/blog';
import { caseStudies } from '@/data/case-studies';
import { getSiteUrl } from '@/lib/site-url';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getSiteUrl();

  // Core public routes
  const staticRoutes = [
    { path: '', priority: 1.0, changeFrequency: 'daily' as const },
    { path: '/about', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/services', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/case-studies', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/blog', priority: 0.9, changeFrequency: 'daily' as const },
    { path: '/pricing', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/book-call', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/contact', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/founders', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/work', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/faq', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/industries', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/solutions/ai', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/solutions/influencer', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/solutions/social-media', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/solutions/website', priority: 0.8, changeFrequency: 'weekly' as const },
  ].map((r) => ({
    url: `${baseUrl}${r.path}`,
    lastModified: new Date().toISOString(),
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));

  const blogRoutes = blogPosts.map((b) => ({
    url: `${baseUrl}/blog/${b.slug}`,
    lastModified: new Date(b.date).toISOString(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const caseStudyRoutes = caseStudies.map((cs) => ({
    url: `${baseUrl}/case-studies/${cs.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [...staticRoutes, ...blogRoutes, ...caseStudyRoutes];
}
