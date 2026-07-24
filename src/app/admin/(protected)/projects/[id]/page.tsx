import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import ProjectForm from "@/components/admin/ProjectForm";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default async function EditProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  
  const project = await prisma.project.findUnique({
    where: { id: resolvedParams.id }
  });

  if (!project) {
    notFound();
  }

  // Convert JSON to string for the form
  let techStackString = "";
  if (Array.isArray(project.techStack)) {
    techStackString = project.techStack.join(", ");
  }

  const initialData = {
    ...project,
    techStack: techStackString,
    client: project.client || "",
    category: project.category || "",
    coverImage: project.coverImage || "",
    results: project.results || "",
    url: project.url || "",
  };

  return (
    <div className="flex flex-col gap-6 max-w-4xl mx-auto">
      <div className="flex items-center gap-4">
        <Link 
          href="/admin/projects"
          className="p-3 border-4 border-black hover:bg-black hover:text-white transition-colors"
        >
          <ArrowLeft className="w-6 h-6" />
        </Link>
        <h1 className="text-3xl lg:text-4xl font-black uppercase tracking-tight">Edit Project</h1>
      </div>

      <ProjectForm initialData={initialData} projectId={project.id} />
    </div>
  );
}
