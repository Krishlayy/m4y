import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import CaseStudyForm from "@/components/admin/CaseStudyForm";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default async function EditCaseStudyPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  
  const caseStudy = await prisma.caseStudy.findUnique({
    where: { id: resolvedParams.id }
  });

  if (!caseStudy) {
    notFound();
  }

  const initialData = {
    ...caseStudy,
    client: caseStudy.client || "",
    industry: caseStudy.industry || "",
    problem: caseStudy.problem || "",
    strategy: caseStudy.strategy || "",
    solution: caseStudy.solution || "",
    results: caseStudy.results || "",
    testimonial: caseStudy.testimonial || "",
    seoTitle: caseStudy.seoTitle || "",
    seoDescription: caseStudy.seoDescription || "",
  };

  return (
    <div className="flex flex-col gap-6 max-w-4xl mx-auto">
      <div className="flex items-center gap-4">
        <Link 
          href="/admin/case-studies"
          className="p-3 border-4 border-black hover:bg-black hover:text-white transition-colors"
        >
          <ArrowLeft className="w-6 h-6" />
        </Link>
        <h1 className="text-3xl lg:text-4xl font-black uppercase tracking-tight">Edit Case Study</h1>
      </div>

      <CaseStudyForm initialData={initialData} caseStudyId={caseStudy.id} />
    </div>
  );
}
