"use server";

import { prisma } from "@/lib/prisma";
import { requireAdmin } from "./auth";
import { revalidatePath } from "next/cache";
import { projectSchema, ProjectFormValues, caseStudySchema, CaseStudyFormValues } from "./validations";
import { Prisma } from "@prisma/client";

// --- PROJECT ACTIONS ---

export async function createProject(data: ProjectFormValues) {
  await requireAdmin();
  const parsed = projectSchema.parse(data);

  let techStackJson: Prisma.InputJsonValue = [];
  if (parsed.techStack) {
    techStackJson = parsed.techStack.split(",").map(t => t.trim()).filter(Boolean);
  }

  await prisma.project.create({
    data: {
      ...parsed,
      url: parsed.url || null,
      techStack: techStackJson
    }
  });

  revalidatePath("/admin/projects");
  return { success: true };
}

export async function updateProject(id: string, data: ProjectFormValues) {
  await requireAdmin();
  const parsed = projectSchema.parse(data);

  let techStackJson: Prisma.InputJsonValue = [];
  if (parsed.techStack) {
    techStackJson = parsed.techStack.split(",").map(t => t.trim()).filter(Boolean);
  }

  await prisma.project.update({
    where: { id },
    data: {
      ...parsed,
      url: parsed.url || null,
      techStack: techStackJson
    }
  });

  revalidatePath("/admin/projects");
  revalidatePath(`/admin/projects/${id}`);
  return { success: true };
}

export async function deleteProject(id: string) {
  await requireAdmin();
  await prisma.project.delete({ where: { id } });
  revalidatePath("/admin/projects");
  return { success: true };
}

// --- CASE STUDY ACTIONS ---

export async function createCaseStudy(data: CaseStudyFormValues) {
  await requireAdmin();
  const parsed = caseStudySchema.parse(data);

  await prisma.caseStudy.create({
    data: parsed
  });

  revalidatePath("/admin/case-studies");
  return { success: true };
}

export async function updateCaseStudy(id: string, data: CaseStudyFormValues) {
  await requireAdmin();
  const parsed = caseStudySchema.parse(data);

  await prisma.caseStudy.update({
    where: { id },
    data: parsed
  });

  revalidatePath("/admin/case-studies");
  revalidatePath(`/admin/case-studies/${id}`);
  return { success: true };
}

export async function deleteCaseStudy(id: string) {
  await requireAdmin();
  await prisma.caseStudy.delete({ where: { id } });
  revalidatePath("/admin/case-studies");
  return { success: true };
}
