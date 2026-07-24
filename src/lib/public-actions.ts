"use server";

import { prisma } from "@/lib/prisma";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email"),
  company: z.string().optional(),
  budget: z.string().optional(),
  message: z.string().min(1, "Message is required"),
});

export async function submitContactInquiry(formData: FormData) {
  try {
    const rawData = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      company: formData.get("company") as string,
      budget: formData.get("budget") as string,
      message: formData.get("message") as string,
    };

    const data = contactSchema.parse(rawData);

    await prisma.contactInquiry.create({
      data: {
        name: data.name,
        email: data.email,
        subject: data.company ? `Inquiry from ${data.company} (${data.budget})` : `Inquiry (${data.budget})`,
        message: data.message,
      },
    });

    return { success: true };
  } catch (error) {
    console.error("Failed to submit contact inquiry", error);
    return { success: false, error: "Failed to submit inquiry" };
  }
}

const leadSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email"),
  company: z.string().optional(),
  revenue: z.string().optional(),
  goal: z.string().min(1, "Goal is required"),
});

export async function submitLead(formData: FormData) {
  try {
    const rawData = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      company: formData.get("company") as string,
      revenue: formData.get("revenue") as string,
      goal: formData.get("goal") as string,
    };

    const data = leadSchema.parse(rawData);

    await prisma.lead.create({
      data: {
        name: data.name,
        email: data.email,
        company: data.company,
        budget: data.revenue, // Store revenue range in budget field
        message: `Primary Goal: ${data.goal}`,
        source: "Book Call Form",
        status: "NEW",
      },
    });

    return { success: true };
  } catch (error) {
    console.error("Failed to submit lead", error);
    return { success: false, error: "Failed to submit lead" };
  }
}
