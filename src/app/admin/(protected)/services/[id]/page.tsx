import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import ServiceForm from "@/components/admin/ServiceForm";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default async function EditServicePage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  
  const service = await prisma.service.findUnique({
    where: { id: resolvedParams.id }
  });

  if (!service) {
    notFound();
  }

  const initialData = {
    ...service,
    fullDescription: service.fullDescription || "",
    icon: service.icon || "",
    image: service.image || "",
    features: Array.isArray(service.features) ? service.features.join(", ") : "",
    ctaText: service.ctaText || "",
    ctaLink: service.ctaLink || "",
  };

  return (
    <div className="flex flex-col gap-6 max-w-4xl mx-auto">
      <div className="flex items-center gap-4">
        <Link 
          href="/admin/services"
          className="p-3 border-4 border-black hover:bg-black hover:text-white transition-colors"
        >
          <ArrowLeft className="w-6 h-6" />
        </Link>
        <h1 className="text-3xl lg:text-4xl font-black uppercase tracking-tight">Edit Service</h1>
      </div>
      <ServiceForm initialData={initialData} serviceId={service.id} />
    </div>
  );
}
