import { prisma } from "@/lib/prisma";

export async function getSiteSettings() {
  const settings = await prisma.siteSettings.findUnique({
    where: { id: "singleton" },
  });
  return settings;
}

export async function getPublishedBlogs() {
  return prisma.blogPost.findMany({
    where: { status: "PUBLISHED" },
    orderBy: { publishDate: "desc" },
  });
}

export async function getPublishedCaseStudies() {
  return prisma.caseStudy.findMany({
    where: { status: "PUBLISHED" },
    orderBy: { createdAt: "desc" },
  });
}

export async function getPublishedProjects() {
  return prisma.project.findMany({
    where: { status: "PUBLISHED" },
    orderBy: { displayOrder: "asc" },
  });
}

export async function getActiveServices() {
  return prisma.service.findMany({
    where: { isActive: true },
    orderBy: { displayOrder: "asc" },
  });
}

export async function getActivePricingPlans() {
  return prisma.pricingPlan.findMany({
    where: { isActive: true },
    orderBy: { displayOrder: "asc" },
  });
}

export async function getServiceBySlug(slug: string) {
  return prisma.service.findUnique({
    where: { slug }
  });
}

export async function getCaseStudyBySlug(slug: string) {
  return prisma.caseStudy.findUnique({
    where: { slug }
  });
}

export async function getBlogBySlug(slug: string) {
  return prisma.blogPost.findUnique({
    where: { slug }
  });
}
