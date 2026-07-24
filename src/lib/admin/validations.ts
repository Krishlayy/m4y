import { z } from "zod";
import { ContentStatus } from "@prisma/client";

// Reusable slug regex: lowercase alphanumeric and hyphens
const slugRegex = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

export const projectSchema = z.object({
  title: z.string().min(1, "Title is required"),
  slug: z.string()
    .min(1, "Slug is required")
    .regex(slugRegex, "Slug must contain only lowercase letters, numbers, and hyphens"),
  client: z.string().optional(),
  category: z.string().optional(),
  description: z.string().min(1, "Description is required"),
  coverImage: z.string().optional(), // URL
  techStack: z.string().optional(), // Will store as comma-separated in form, JSON in DB
  results: z.string().optional(),
  url: z.string().url("Must be a valid URL").optional().or(z.literal("")),
  isFeatured: z.boolean(),
  status: z.nativeEnum(ContentStatus),
  displayOrder: z.number().int(),
});

export type ProjectFormValues = z.infer<typeof projectSchema>;

export const caseStudySchema = z.object({
  title: z.string().min(1, "Title is required"),
  slug: z.string()
    .min(1, "Slug is required")
    .regex(slugRegex, "Slug must contain only lowercase letters, numbers, and hyphens"),
  client: z.string().min(1, "Client is required"),
  industry: z.string().optional(),
  problem: z.string().min(1, "Problem description is required"),
  strategy: z.string().min(1, "Strategy is required"),
  solution: z.string().min(1, "Solution is required"),
  results: z.string().min(1, "Results are required"),
  testimonial: z.string().optional(),
  seoTitle: z.string().optional(),
  seoDescription: z.string().optional(),
  isFeatured: z.boolean(),
  status: z.nativeEnum(ContentStatus),
});

export type CaseStudyFormValues = z.infer<typeof caseStudySchema>;

export const blogPostSchema = z.object({
  title: z.string().min(1, "Title is required"),
  slug: z.string().min(1, "Slug is required").regex(slugRegex, "Slug must contain only lowercase letters, numbers, and hyphens"),
  featuredImage: z.string().optional(),
  content: z.string().min(1, "Content is required"),
  excerpt: z.string().optional(),
  categories: z.string().optional(), // Comma-separated string -> JSON Array
  tags: z.string().optional(), // Comma-separated string -> JSON Array
  authorName: z.string().optional(),
  status: z.nativeEnum(ContentStatus),
  publishDate: z.string().optional(), // Keep as string for form, convert to Date on server
  seoTitle: z.string().optional(),
  seoDescription: z.string().optional(),
});

export type BlogPostFormValues = z.infer<typeof blogPostSchema>;

export const serviceSchema = z.object({
  name: z.string().min(1, "Name is required"),
  slug: z.string().min(1, "Slug is required").regex(slugRegex, "Slug must contain only lowercase letters, numbers, and hyphens"),
  shortDescription: z.string().min(1, "Short description is required"),
  fullDescription: z.string().optional(),
  icon: z.string().optional(),
  image: z.string().optional(),
  features: z.string().optional(), // Comma-separated string -> JSON Array
  ctaText: z.string().optional(),
  ctaLink: z.string().optional(),
  isActive: z.boolean(),
  displayOrder: z.number().int(),
});

export type ServiceFormValues = z.infer<typeof serviceSchema>;

export const pricingPlanSchema = z.object({
  name: z.string().min(1, "Name is required"),
  price: z.string().min(1, "Price is required"),
  billingLabel: z.string().optional(),
  description: z.string().optional(),
  features: z.string().optional(), // Comma-separated string -> JSON Array
  ctaText: z.string().optional(),
  ctaLink: z.string().optional(),
  isPopular: z.boolean(),
  isActive: z.boolean(),
  displayOrder: z.number().int(),
});

export type PricingPlanFormValues = z.infer<typeof pricingPlanSchema>;

export const siteSettingsSchema = z.object({
  agencyName: z.string().min(1, "Agency name is required"),
  contactEmail: z.string().email("Invalid email").optional().or(z.literal("")),
  contactPhone: z.string().optional(),
  address: z.string().optional(),
  socialLinks: z.string().optional(), // Comma separated JSON or simple string parsing for now
  defaultSeoTitle: z.string().optional(),
  defaultSeoMeta: z.string().optional(),
  footerText: z.string().optional(),
  ctaHeading: z.string().optional(),
  ctaSubheading: z.string().optional(),
});

export type SiteSettingsFormValues = z.infer<typeof siteSettingsSchema>;
