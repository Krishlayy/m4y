"use server";

import { prisma } from "@/lib/prisma";
import { requireAdmin } from "./auth";
import { revalidatePath } from "next/cache";
import { 
  blogPostSchema, BlogPostFormValues, 
  serviceSchema, ServiceFormValues,
  pricingPlanSchema, PricingPlanFormValues
} from "./validations";
import { Prisma } from "@prisma/client";

// --- BLOG ACTIONS ---

export async function createBlogPost(data: BlogPostFormValues) {
  await requireAdmin();
  const parsed = blogPostSchema.parse(data);

  let categoriesJson: Prisma.InputJsonValue = [];
  if (parsed.categories) categoriesJson = parsed.categories.split(",").map(c => c.trim()).filter(Boolean);

  let tagsJson: Prisma.InputJsonValue = [];
  if (parsed.tags) tagsJson = parsed.tags.split(",").map(t => t.trim()).filter(Boolean);

  let publishDate = parsed.publishDate ? new Date(parsed.publishDate) : null;

  await prisma.blogPost.create({
    data: {
      ...parsed,
      categories: categoriesJson,
      tags: tagsJson,
      publishDate
    }
  });

  revalidatePath("/admin/blog");
  return { success: true };
}

export async function updateBlogPost(id: string, data: BlogPostFormValues) {
  await requireAdmin();
  const parsed = blogPostSchema.parse(data);

  let categoriesJson: Prisma.InputJsonValue = [];
  if (parsed.categories) categoriesJson = parsed.categories.split(",").map(c => c.trim()).filter(Boolean);

  let tagsJson: Prisma.InputJsonValue = [];
  if (parsed.tags) tagsJson = parsed.tags.split(",").map(t => t.trim()).filter(Boolean);

  let publishDate = parsed.publishDate ? new Date(parsed.publishDate) : null;

  await prisma.blogPost.update({
    where: { id },
    data: {
      ...parsed,
      categories: categoriesJson,
      tags: tagsJson,
      publishDate
    }
  });

  revalidatePath("/admin/blog");
  revalidatePath(`/admin/blog/${id}`);
  return { success: true };
}

export async function deleteBlogPost(id: string) {
  await requireAdmin();
  await prisma.blogPost.delete({ where: { id } });
  revalidatePath("/admin/blog");
  return { success: true };
}

// --- SERVICE ACTIONS ---

export async function createService(data: ServiceFormValues) {
  await requireAdmin();
  const parsed = serviceSchema.parse(data);

  let featuresJson: Prisma.InputJsonValue = [];
  if (parsed.features) featuresJson = parsed.features.split(",").map(f => f.trim()).filter(Boolean);

  await prisma.service.create({
    data: {
      ...parsed,
      features: featuresJson
    }
  });

  revalidatePath("/admin/services");
  return { success: true };
}

export async function updateService(id: string, data: ServiceFormValues) {
  await requireAdmin();
  const parsed = serviceSchema.parse(data);

  let featuresJson: Prisma.InputJsonValue = [];
  if (parsed.features) featuresJson = parsed.features.split(",").map(f => f.trim()).filter(Boolean);

  await prisma.service.update({
    where: { id },
    data: {
      ...parsed,
      features: featuresJson
    }
  });

  revalidatePath("/admin/services");
  revalidatePath(`/admin/services/${id}`);
  return { success: true };
}

export async function deleteService(id: string) {
  await requireAdmin();
  await prisma.service.delete({ where: { id } });
  revalidatePath("/admin/services");
  return { success: true };
}

// --- PRICING ACTIONS ---

export async function createPricingPlan(data: PricingPlanFormValues) {
  await requireAdmin();
  const parsed = pricingPlanSchema.parse(data);

  let featuresJson: Prisma.InputJsonValue = [];
  if (parsed.features) featuresJson = parsed.features.split(",").map(f => f.trim()).filter(Boolean);

  await prisma.pricingPlan.create({
    data: {
      ...parsed,
      features: featuresJson
    }
  });

  revalidatePath("/admin/pricing");
  return { success: true };
}

export async function updatePricingPlan(id: string, data: PricingPlanFormValues) {
  await requireAdmin();
  const parsed = pricingPlanSchema.parse(data);

  let featuresJson: Prisma.InputJsonValue = [];
  if (parsed.features) featuresJson = parsed.features.split(",").map(f => f.trim()).filter(Boolean);

  await prisma.pricingPlan.update({
    where: { id },
    data: {
      ...parsed,
      features: featuresJson
    }
  });

  revalidatePath("/admin/pricing");
  revalidatePath(`/admin/pricing/${id}`);
  return { success: true };
}

export async function deletePricingPlan(id: string) {
  await requireAdmin();
  await prisma.pricingPlan.delete({ where: { id } });
  revalidatePath("/admin/pricing");
  return { success: true };
}
