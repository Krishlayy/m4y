export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  author: string;
  readTime: string;
  date: string;
  featured: boolean;
  gradient: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 'blog-1',
    title: 'The Future of AI in Performance Marketing',
    slug: 'future-of-ai-performance-marketing',
    excerpt: 'Discover how artificial intelligence is reshaping ad bidding, creative generation, and predictive audience targeting. Stay ahead of the curve in 2024.',
    category: 'AI',
    author: 'Krishlay Sharma',
    readTime: '6 min read',
    date: '2024-03-15',
    featured: true,
    gradient: 'from-[#6C4DFF] to-[#FF5DB1]'
  },
  {
    id: 'blog-2',
    title: '10 Advanced SEO Strategies for SaaS Companies',
    slug: 'advanced-seo-strategies-saas',
    excerpt: 'Move beyond basic keyword research. Learn how programmatic SEO and topic clusters can skyrocket your MRR through organic search.',
    category: 'SEO',
    author: 'Arpit',
    readTime: '8 min read',
    date: '2024-03-10',
    featured: false,
    gradient: 'from-[#00D9FF] to-[#6C4DFF]'
  },
  {
    id: 'blog-3',
    title: 'Mastering TikTok Ads: A Blueprint for D2C Brands',
    slug: 'mastering-tiktok-ads-d2c',
    excerpt: 'TikTok is no longer just for Gen Z. Here is the exact framework we use to generate a 4x ROAS for e-commerce brands on the platform.',
    category: 'Marketing',
    author: 'Priyanshu',
    readTime: '7 min read',
    date: '2024-02-28',
    featured: true,
    gradient: 'from-[#FF5DB1] to-[#FFD93D]'
  },
  {
    id: 'blog-4',
    title: 'Why Headless Commerce is the Future of Retail',
    slug: 'headless-commerce-future-retail',
    excerpt: 'Speed, flexibility, and omnichannel experiences. Why top brands are decoupling their frontend architecture from their backend databases.',
    category: 'Automation',
    author: 'Ayushman',
    readTime: '9 min read',
    date: '2024-02-20',
    featured: false,
    gradient: 'from-[#00E676] to-[#00D9FF]'
  },
  {
    id: 'blog-5',
    title: 'Building Authentic Connections through Influencer Marketing',
    slug: 'authentic-influencer-marketing',
    excerpt: 'Consumers can spot a fake endorsement from a mile away. Learn how to foster genuine partnerships that drive long-term brand loyalty.',
    category: 'Social Media',
    author: 'Bhavya',
    readTime: '5 min read',
    date: '2024-02-14',
    featured: false,
    gradient: 'from-[#FFD93D] to-[#FF5DB1]'
  },
  {
    id: 'blog-6',
    title: 'The Psychology of High-Converting Landing Pages',
    slug: 'psychology-high-converting-landing-pages',
    excerpt: 'Design is subjective, but data is absolute. Unpacking the psychological triggers and UI/UX principles that force users to convert.',
    category: 'Branding',
    author: 'Arpit',
    readTime: '6 min read',
    date: '2024-02-05',
    featured: true,
    gradient: 'from-[#000000] to-[#6C4DFF]'
  },
  {
    id: 'blog-7',
    title: 'Automating Your Sales Pipeline with HubSpot & AI',
    slug: 'automating-sales-pipeline-hubspot-ai',
    excerpt: 'Stop manually following up with cold leads. We breakdown how to construct a self-driving CRM that nurtures and scores prospects autonomously.',
    category: 'Automation',
    author: 'Ayushman',
    readTime: '10 min read',
    date: '2024-01-29',
    featured: false,
    gradient: 'from-[#00D9FF] to-[#00E676]'
  },
  {
    id: 'blog-8',
    title: 'Navigating Privacy Changes in Digital Advertising',
    slug: 'navigating-privacy-changes-advertising',
    excerpt: 'From iOS updates to the death of third-party cookies. How your brand can survive and thrive in the new era of data privacy.',
    category: 'Growth',
    author: 'Priyanshu',
    readTime: '7 min read',
    date: '2024-01-18',
    featured: false,
    gradient: 'from-[#6C4DFF] to-[#FF5DB1]'
  },
  {
    id: 'blog-9',
    title: 'Crafting a Brand Identity that Scales',
    slug: 'crafting-scalable-brand-identity',
    excerpt: 'A logo isn\'t a brand. Discover the essential elements of creating a cohesive, memorable identity that resonates across all digital touchpoints.',
    category: 'Branding',
    author: 'Bhavya',
    readTime: '6 min read',
    date: '2024-01-12',
    featured: false,
    gradient: 'from-[#FF5DB1] to-[#FFD93D]'
  },
  {
    id: 'blog-10',
    title: 'Maximizing ROI with Account-Based Marketing (ABM)',
    slug: 'maximizing-roi-account-based-marketing',
    excerpt: 'Why B2B companies are ditching wide-net strategies for hyper-targeted, account-specific campaigns to close enterprise deals.',
    category: 'Growth',
    author: 'Arpit',
    readTime: '8 min read',
    date: '2024-01-05',
    featured: false,
    gradient: 'from-[#00E676] to-[#00D9FF]'
  },
  {
    id: 'blog-11',
    title: 'Leveraging Generative AI for Content Production',
    slug: 'leveraging-generative-ai-content',
    excerpt: 'How to scale your blog output by 10x without sacrificing quality or risking Google SEO penalties by properly integrating human oversight.',
    category: 'AI',
    author: 'Krishlay Sharma',
    readTime: '5 min read',
    date: '2023-12-20',
    featured: false,
    gradient: 'from-[#6C4DFF] to-[#00D9FF]'
  },
  {
    id: 'blog-12',
    title: 'Local SEO Tactics for Multi-Location Businesses',
    slug: 'local-seo-tactics-multi-location',
    excerpt: 'Dominate the map pack in every city you operate. A technical guide to managing citations, reviews, and localized content at scale.',
    category: 'SEO',
    author: 'Priyanshu',
    readTime: '7 min read',
    date: '2023-12-14',
    featured: false,
    gradient: 'from-[#FFD93D] to-[#FF5DB1]'
  }
];
