"use server";

import { prisma } from "@/lib/prisma";
import { requireAdmin } from "./auth";
import { revalidatePath } from "next/cache";
import { LeadStatus } from "@prisma/client";

// --- LEAD ACTIONS ---

export async function updateLeadStatus(leadId: string, status: LeadStatus) {
  const user = await requireAdmin();
  
  await prisma.lead.update({
    where: { id: leadId },
    data: { status }
  });
  
  revalidatePath("/admin/leads");
  revalidatePath(`/admin/leads/${leadId}`);
  
  return { success: true };
}

export async function addLeadNote(leadId: string, content: string) {
  const user = await requireAdmin();
  
  if (!content.trim()) throw new Error("Note content cannot be empty");

  await prisma.leadNote.create({
    data: {
      content,
      leadId,
      authorId: user.id
    }
  });

  revalidatePath(`/admin/leads/${leadId}`);
  
  return { success: true };
}

export async function deleteLead(leadId: string) {
  await requireAdmin();
  
  await prisma.lead.delete({
    where: { id: leadId }
  });

  revalidatePath("/admin/leads");
  
  return { success: true };
}

// --- CONTACT INQUIRY ACTIONS ---

export async function markInquiryRead(inquiryId: string, isRead: boolean) {
  await requireAdmin();
  
  await prisma.contactInquiry.update({
    where: { id: inquiryId },
    data: { isRead }
  });

  revalidatePath("/admin/inquiries");
  return { success: true };
}

export async function resolveInquiry(inquiryId: string, isResolved: boolean) {
  await requireAdmin();
  
  await prisma.contactInquiry.update({
    where: { id: inquiryId },
    data: { isResolved, isRead: true } // Auto-read when resolving
  });

  revalidatePath("/admin/inquiries");
  return { success: true };
}

export async function convertInquiryToLead(inquiryId: string) {
  const user = await requireAdmin();
  
  const inquiry = await prisma.contactInquiry.findUnique({
    where: { id: inquiryId }
  });

  if (!inquiry) throw new Error("Inquiry not found");
  if (inquiry.leadId) throw new Error("Inquiry is already linked to a lead");

  // Create lead
  const lead = await prisma.lead.create({
    data: {
      name: inquiry.name,
      email: inquiry.email,
      message: inquiry.message,
      source: "Contact Form Convert",
      status: "NEW",
    }
  });

  // Link inquiry
  await prisma.contactInquiry.update({
    where: { id: inquiryId },
    data: { leadId: lead.id, isResolved: true, isRead: true }
  });

  revalidatePath("/admin/inquiries");
  revalidatePath("/admin/leads");

  return { success: true, leadId: lead.id };
}
