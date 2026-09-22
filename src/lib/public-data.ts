import { prisma } from "@/lib/prisma";

export async function getSiteSettings() {
  try {
    const settings = await prisma.siteSettings.findUnique({
      where: { id: "singleton" },
    });
    return settings;
  } catch (error) {
    console.warn("⚠ Could not fetch site settings from database. Using defaults.");
    return null;
  }
}

export async function getPublishedBlogs() {
  try {
    return await prisma.blogPost.findMany({
      where: { status: "PUBLISHED" },
      orderBy: { publishDate: "desc" },
    });
  } catch {
    console.warn("⚠ Could not fetch blogs.");
    return [];
  }
}

export async function getPublishedCaseStudies() {
  try {
    return await prisma.caseStudy.findMany({
      where: { status: "PUBLISHED" },
      orderBy: { createdAt: "desc" },
    });
  } catch {
    console.warn("⚠ Could not fetch case studies.");
    return [];
  }
}

export async function getPublishedProjects() {
  try {
    return await prisma.project.findMany({
      where: { status: "PUBLISHED" },
      orderBy: { displayOrder: "asc" },
    });
  } catch {
    console.warn("⚠ Could not fetch projects.");
    return [];
  }
}

export async function getActiveServices() {
  try {
    return await prisma.service.findMany({
      where: { isActive: true },
      orderBy: { displayOrder: "asc" },
    });
  } catch {
    console.warn("⚠ Could not fetch services.");
    return [];
  }
}

export async function getActivePricingPlans() {
  try {
    return await prisma.pricingPlan.findMany({
      where: { isActive: true },
      orderBy: { displayOrder: "asc" },
    });
  } catch {
    console.warn("⚠ Could not fetch pricing plans.");
    return [];
  }
}

export async function getServiceBySlug(slug: string) {
  try {
    return await prisma.service.findUnique({
      where: { slug }
    });
  } catch {
    console.warn("⚠ Could not fetch service.");
    return null;
  }
}

export async function getCaseStudyBySlug(slug: string) {
  try {
    return await prisma.caseStudy.findUnique({
      where: { slug }
    });
  } catch {
    console.warn("⚠ Could not fetch case study.");
    return null;
  }
}

export async function getBlogBySlug(slug: string) {
  try {
    return await prisma.blogPost.findUnique({
      where: { slug }
    });
  } catch {
    console.warn("⚠ Could not fetch blog post.");
    return null;
  }
}
