"use server";

import { prisma } from "@/lib/prisma";
import { z } from "zod";

async function dispatchLeadAlert(title: string, details: Record<string, string | undefined>) {
  const webhookUrl = process.env.LEAD_ALERT_WEBHOOK_URL;
  if (!webhookUrl) return;

  try {
    const fields = Object.entries(details)
      .filter(([_, val]) => !!val)
      .map(([key, val]) => `**${key}:** ${val}`)
      .join("\n");

    await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        content: `🚨 **${title}**\n${fields}\n*Received at: ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })} IST*`,
      }),
    });
  } catch (err) {
    console.error("Webhook notification error:", err);
  }
}

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(150, "Name too long"),
  email: z.string().trim().email("Invalid email").max(255, "Email too long"),
  phone: z.string().trim().max(50).optional(),
  company: z.string().trim().max(150).optional(),
  website: z.string().trim().max(255).optional(),
  services: z.string().trim().max(255).optional(),
  budget: z.string().trim().max(100).optional(),
  timeline: z.string().trim().max(100).optional(),
  message: z.string().trim().min(1, "Message is required").max(5000, "Message too long"),
});

export async function submitContactInquiry(formData: FormData) {
  try {
    // Honeypot spam protection: if hidden field is filled, silently discard bot
    const honeypot = formData.get("website_hp") as string;
    if (honeypot && honeypot.trim().length > 0) {
      console.warn("Spambot submission blocked via honeypot.");
      return { success: true };
    }

    const rawData = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      company: formData.get("company") as string,
      website: formData.get("website") as string,
      services: formData.get("services") as string,
      budget: formData.get("budget") as string,
      timeline: formData.get("timeline") as string,
      message: formData.get("message") as string,
    };

    const data = contactSchema.parse(rawData);

    const fullMessage = `
Phone: ${data.phone || 'N/A'}
Website: ${data.website || 'N/A'}
Services: ${data.services || 'N/A'}
Timeline: ${data.timeline || 'N/A'}

Project Details:
${data.message}
    `.trim();

    await prisma.contactInquiry.create({
      data: {
        name: data.name,
        email: data.email,
        subject: data.company ? `Inquiry from ${data.company} (${data.budget || 'Unknown Budget'})` : `Inquiry (${data.budget || 'Unknown Budget'})`,
        message: fullMessage,
      },
    });

    // Fire & forget lead alert webhook
    dispatchLeadAlert("New Contact Inquiry Received", {
      Name: data.name,
      Email: data.email,
      Phone: data.phone,
      Company: data.company,
      Budget: data.budget,
      Services: data.services,
      Message: data.message,
    });

    return { success: true };
  } catch (error) {
    console.error("Failed to submit contact inquiry", error);
    return {
      success: false,
      error: "Unable to submit right now. Please reach out to founders on WhatsApp (+91 92587 35381) or email support.m4y@gmail.com.",
    };
  }
}

const leadSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(150),
  email: z.string().trim().email("Invalid email").max(255),
  company: z.string().trim().max(150).optional(),
  revenue: z.string().trim().max(100).optional(),
  goal: z.string().trim().min(1, "Goal is required").max(2000),
});

export async function submitLead(formData: FormData) {
  try {
    // Honeypot spam check
    const honeypot = formData.get("website_hp") as string;
    if (honeypot && honeypot.trim().length > 0) {
      return { success: true };
    }

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
        budget: data.revenue,
        message: `Primary Goal: ${data.goal}`,
        source: "Book Call Form",
        status: "NEW",
      },
    });

    dispatchLeadAlert("New Strategy Call Lead Booked", {
      Name: data.name,
      Email: data.email,
      Company: data.company,
      Revenue: data.revenue,
      Goal: data.goal,
    });

    return { success: true };
  } catch (error) {
    console.error("Failed to submit lead", error);
    return {
      success: false,
      error: "Failed to submit lead. Please WhatsApp us at +91 92587 35381 directly.",
    };
  }
}

export async function submitEmailCapture(formData: FormData) {
  try {
    const email = formData.get("email") as string;
    const honeypot = formData.get("website_hp") as string;
    if (honeypot && honeypot.trim().length > 0) {
      return { success: true };
    }
    
    if (!email || !email.includes("@") || email.length > 255) {
      return { success: false, error: "Invalid email" };
    }

    await prisma.lead.create({
      data: {
        name: "Lead Magnet Download",
        email: email.trim(),
        source: "Lead Magnet (Playbook)",
        status: "NEW",
      },
    });

    dispatchLeadAlert("New Lead Magnet Subscriber", {
      Email: email.trim(),
    });

    return { success: true };
  } catch (error) {
    console.error("Failed to submit email capture", error);
    return { success: false, error: "Failed to submit email capture" };
  }
}
