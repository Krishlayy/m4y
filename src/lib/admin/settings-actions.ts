"use server";

import { prisma } from "@/lib/prisma";
import { requireAdmin } from "./auth";
import { siteSettingsSchema, SiteSettingsFormValues } from "./validations";
import { revalidatePath } from "next/cache";

export async function updateSiteSettings(data: SiteSettingsFormValues) {
  await requireAdmin();
  
  const parsed = siteSettingsSchema.parse(data);

  let socialLinksJson: any = null;
  if (parsed.socialLinks) {
    try {
      socialLinksJson = JSON.parse(parsed.socialLinks);
    } catch {
      // fallback if it's just comma separated
      socialLinksJson = parsed.socialLinks.split(",").map(s => s.trim()).filter(Boolean);
    }
  }

  const settings = await prisma.siteSettings.upsert({
    where: { id: "singleton" },
    create: {
      id: "singleton",
      agencyName: parsed.agencyName,
      contactEmail: parsed.contactEmail,
      contactPhone: parsed.contactPhone,
      address: parsed.address,
      socialLinks: socialLinksJson,
      defaultSeoTitle: parsed.defaultSeoTitle,
      defaultSeoMeta: parsed.defaultSeoMeta,
      footerText: parsed.footerText,
      ctaHeading: parsed.ctaHeading,
      ctaSubheading: parsed.ctaSubheading,
    },
    update: {
      agencyName: parsed.agencyName,
      contactEmail: parsed.contactEmail,
      contactPhone: parsed.contactPhone,
      address: parsed.address,
      socialLinks: socialLinksJson,
      defaultSeoTitle: parsed.defaultSeoTitle,
      defaultSeoMeta: parsed.defaultSeoMeta,
      footerText: parsed.footerText,
      ctaHeading: parsed.ctaHeading,
      ctaSubheading: parsed.ctaSubheading,
    }
  });

  revalidatePath("/admin/settings");
  revalidatePath("/", "layout"); // Since settings affect the whole public site potentially
  return settings;
}
