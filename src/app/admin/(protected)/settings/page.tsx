import { prisma } from "@/lib/prisma";
import SiteSettingsForm from "@/components/admin/SiteSettingsForm";

export default async function SettingsPage() {
  const settings = await prisma.siteSettings.findUnique({
    where: { id: "singleton" }
  });

  const initialData = settings ? {
    ...settings,
    contactEmail: settings.contactEmail || "",
    contactPhone: settings.contactPhone || "",
    address: settings.address || "",
    socialLinks: settings.socialLinks ? JSON.stringify(settings.socialLinks) : "",
    defaultSeoTitle: settings.defaultSeoTitle || "",
    defaultSeoMeta: settings.defaultSeoMeta || "",
    footerText: settings.footerText || "",
    ctaHeading: settings.ctaHeading || "",
    ctaSubheading: settings.ctaSubheading || "",
  } : undefined;

  return (
    <div className="flex flex-col gap-6 max-w-4xl mx-auto">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl lg:text-4xl font-black uppercase tracking-tight">Global Settings</h1>
      </div>

      <SiteSettingsForm initialData={initialData} />
    </div>
  );
}
