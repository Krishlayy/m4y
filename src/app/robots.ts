import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: ['/', '/about', '/services', '/contact'],
      disallow: [
        '/admin/',
        '/api/',
        '/faq',
        '/founders',
        '/work',
        '/book-call',
        '/industries',
        '/pricing',
        '/blog',
        '/case-studies',
        '/solutions/',
      ],
    },
    sitemap: 'https://marketing4you.in/sitemap.xml',
  };
}
