import { prisma } from "@/lib/prisma";
import SiteSettingsForm from "@/components/admin/SiteSettingsForm";

export const dynamic = "force-dynamic";

export default async function SettingsPage() {
  let settings = null;
  let dbError = false;

  try {
    settings = await prisma.siteSettings.findUnique({
      where: { id: "singleton" }
    });
  } catch (error) {
    console.error("Database error fetching settings:", error);
    dbError = true;
  }

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

      {dbError && (
        <div className="p-4 bg-[#FF5500] text-white font-bold border-4 border-black">
          ⚠️ Could not connect to database. Settings changes will not be saved.
        </div>
      )}

      <SiteSettingsForm initialData={initialData} />
    </div>
  );
}
