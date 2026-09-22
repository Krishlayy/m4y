import { prisma } from "@/lib/prisma";
import { blogPosts as staticBlogs } from "@/data/blog";
import { caseStudies as staticCaseStudies } from "@/data/case-studies";
import { services as staticServices } from "@/data/services";
import { packages as staticPackages } from "@/data/packages";

export async function getSiteSettings() {
  try {
    const settings = await prisma.siteSettings.findUnique({
      where: { id: "singleton" },
    });
    return settings;
  } catch {
    return null;
  }
}

export async function getPublishedBlogs() {
  try {
    const blogs = await prisma.blogPost.findMany({
      where: { status: "PUBLISHED" },
      orderBy: { publishDate: "desc" },
    });
    if (blogs && blogs.length > 0) return blogs;
  } catch {
    // Database unreachable, fall through to static data
  }

  return staticBlogs.map((b) => ({
    id: b.id,
    title: b.title,
    slug: b.slug,
    content: b.excerpt,
    excerpt: b.excerpt,
    featuredImage: null,
    categories: [b.category],
    tags: [b.category],
    authorName: b.author,
    readingTime: b.readTime,
    status: "PUBLISHED" as const,
    publishDate: new Date(b.date),
    seoTitle: b.title,
    seoDescription: b.excerpt,
    createdAt: new Date(b.date),
    updatedAt: new Date(b.date),
  }));
}

export async function getBlogBySlug(slug: string) {
  try {
    const blog = await prisma.blogPost.findUnique({
      where: { slug },
    });
    if (blog) return blog;
  } catch {
    // Database unreachable, fall through to static data
  }

  const staticPost = staticBlogs.find((b) => b.slug === slug);
  if (!staticPost) return null;

  return {
    id: staticPost.id,
    title: staticPost.title,
    slug: staticPost.slug,
    content: `${staticPost.excerpt}\n\nAt M4Y, our engineering and performance marketing teams build automated pipelines and conversion systems that deliver measurable, compounding results. We replace guesswork with empirical data, rapid experimentation, and technical execution.`,
    excerpt: staticPost.excerpt,
    featuredImage: null,
    categories: [staticPost.category],
    tags: [staticPost.category],
    authorName: staticPost.author,
    readingTime: staticPost.readTime,
    status: "PUBLISHED" as const,
    publishDate: new Date(staticPost.date),
    seoTitle: staticPost.title,
    seoDescription: staticPost.excerpt,
    createdAt: new Date(staticPost.date),
    updatedAt: new Date(staticPost.date),
  };
}

export async function getPublishedCaseStudies() {
  try {
    const caseStudies = await prisma.caseStudy.findMany({
      where: { status: "PUBLISHED" },
      orderBy: { createdAt: "desc" },
    });
    if (caseStudies && caseStudies.length > 0) return caseStudies;
  } catch {
    // Database unreachable, fall through to static data
  }

  return staticCaseStudies.map((cs) => ({
    id: cs.id,
    title: cs.title,
    slug: cs.slug,
    client: cs.client,
    industry: cs.industry,
    problem: cs.challenge,
    research: null,
    strategy: cs.solution,
    execution: cs.approach ? cs.approach.join(". ") : null,
    solution: cs.solution,
    results: cs.roi,
    timeline: cs.timeline,
    servicesUsed: cs.services,
    metrics: cs.results ? cs.results.map((r) => ({ label: r.metric, value: r.improvement })) : [],
    beforeAndAfter: cs.results ? cs.results.map((r) => ({ metric: r.metric, before: r.before, after: r.after })) : [],
    images: null,
    testimonial: cs.testimonialQuote,
    seoTitle: cs.title,
    seoDescription: cs.challenge,
    isFeatured: true,
    status: "PUBLISHED" as const,
    createdAt: new Date(),
    updatedAt: new Date(),
  }));
}

export async function getCaseStudyBySlug(slug: string) {
  try {
    const caseStudy = await prisma.caseStudy.findUnique({
      where: { slug },
    });
    if (caseStudy) return caseStudy;
  } catch {
    // Database unreachable, fall through to static data
  }

  const cs = staticCaseStudies.find((c) => c.slug === slug);
  if (!cs) return null;

  return {
    id: cs.id,
    title: cs.title,
    slug: cs.slug,
    client: cs.client,
    industry: cs.industry,
    problem: cs.challenge,
    research: null,
    strategy: cs.solution,
    execution: cs.approach ? cs.approach.join(". ") : null,
    solution: cs.solution,
    results: cs.roi,
    timeline: cs.timeline,
    servicesUsed: cs.services,
    metrics: cs.results ? cs.results.map((r) => ({ label: r.metric, value: r.improvement })) : [],
    beforeAndAfter: cs.results ? cs.results.map((r) => ({ metric: r.metric, before: r.before, after: r.after })) : [],
    images: null,
    testimonial: cs.testimonialQuote,
    seoTitle: cs.title,
    seoDescription: cs.challenge,
    isFeatured: true,
    status: "PUBLISHED" as const,
    createdAt: new Date(),
    updatedAt: new Date(),
  };
}

export async function getActiveServices() {
  try {
    const services = await prisma.service.findMany({
      where: { isActive: true },
      orderBy: { displayOrder: "asc" },
    });
    if (services && services.length > 0) return services;
  } catch {
    // Database unreachable, fall through to static data
  }

  return staticServices.map((s, index) => ({
    id: s.id,
    name: s.name,
    slug: s.slug,
    category: s.category,
    shortDescription: s.shortDescription,
    fullDescription: s.fullDescription,
    icon: s.icon,
    image: null,
    features: s.features,
    deliverables: s.deliverables,
    process: [],
    benefits: [],
    faq: [],
    relatedServices: [],
    startingPrice: s.priceStartsFrom,
    ctaText: "Book Strategy Call",
    ctaLink: "/book-call",
    isActive: true,
    displayOrder: index,
    createdAt: new Date(),
    updatedAt: new Date(),
  }));
}

export async function getServiceBySlug(slug: string) {
  try {
    const service = await prisma.service.findUnique({
      where: { slug },
    });
    if (service) return service;
  } catch {
    // Database unreachable, fall through to static data
  }

  const s = staticServices.find((serv) => serv.slug === slug);
  if (!s) return null;

  return {
    id: s.id,
    name: s.name,
    slug: s.slug,
    category: s.category,
    shortDescription: s.shortDescription,
    fullDescription: s.fullDescription,
    icon: s.icon,
    image: null,
    features: s.features,
    deliverables: s.deliverables,
    process: [
      { step: "Phase 1: Deep Diagnostic", desc: "We analyze current conversion funnels, data bottlenecks, and market competitors." },
      { step: "Phase 2: Custom Architecture", desc: "Engineered execution roadmap built by Kishalay and Ayushman." },
      { step: "Phase 3: Launch & Iterate", desc: "Rapid testing, weekly reporting, and algorithmic performance optimization." },
    ],
    benefits: [
      "Direct technical founder execution",
      "No agency account managers or junior interns",
      "Predictable, measurable ROI pipelines",
    ],
    faq: [
      { q: "How soon do we see results?", a: "Most partner campaigns demonstrate measurable conversion lift within the first 14 to 30 days of deployment." },
      { q: "Who manages our account?", a: "Kishalay Sharma and Ayushman Singh directly manage your technical infrastructure and growth loops." },
    ],
    relatedServices: [],
    startingPrice: s.priceStartsFrom,
    ctaText: "Book Strategy Call",
    ctaLink: "/book-call",
    isActive: true,
    displayOrder: 0,
    createdAt: new Date(),
    updatedAt: new Date(),
  };
}

export async function getPublishedProjects() {
  try {
    return await prisma.project.findMany({
      where: { status: "PUBLISHED" },
      orderBy: { displayOrder: "asc" },
    });
  } catch {
    return [];
  }
}

export async function getActivePricingPlans() {
  try {
    const plans = await prisma.pricingPlan.findMany({
      where: { isActive: true },
      orderBy: { displayOrder: "asc" },
    });
    if (plans && plans.length > 0) return plans;
  } catch {
    // Database unreachable, fall through to static data
  }

  return staticPackages.map((p, index) => ({
    id: p.id,
    name: p.name,
    price: p.price,
    billingLabel: p.period,
    category: p.category,
    description: p.description,
    features: p.features,
    deliverables: p.deliverables,
    idealClient: p.tagline,
    timeline: p.timeline,
    addOns: [],
    ctaText: "Select Plan",
    ctaLink: "/book-call",
    isPopular: p.isRecommended,
    isActive: true,
    displayOrder: index,
    createdAt: new Date(),
    updatedAt: new Date(),
  }));
}
