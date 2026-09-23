"use server";

import { prisma } from "@/lib/prisma";
import { z } from "zod";
import fs from "fs";
import path from "path";

// 1. Append lead to local leads_backup.csv for immediate zero-config Excel checking
function appendToLocalCsv(row: {
  date: string;
  formType: string;
  name: string;
  email: string;
  phone?: string;
  company?: string;
  budget?: string;
  message?: string;
}) {
  try {
    const filePath = path.join(process.cwd(), "leads_backup.csv");
    const header = "Date,Form Type,Name,Email,Phone,Company,Budget / Revenue,Message / Goal\n";
    if (!fs.existsSync(filePath)) {
      fs.writeFileSync(filePath, header, "utf8");
    }

    const escapeCsv = (val?: string) =>
      `"${(val || "").replace(/"/g, '""').replace(/\r?\n/g, " ")}"`;

    const line =
      [
        escapeCsv(row.date),
        escapeCsv(row.formType),
        escapeCsv(row.name),
        escapeCsv(row.email),
        escapeCsv(row.phone),
        escapeCsv(row.company),
        escapeCsv(row.budget),
        escapeCsv(row.message),
      ].join(",") + "\n";

    fs.appendFileSync(filePath, line, "utf8");
  } catch (err) {
    console.error("Local CSV append error (ignored):", err);
  }
}

// 2. Google Sheets / Zapier / Make webhook sync
async function dispatchGoogleSheet(row: {
  date: string;
  formType: string;
  name: string;
  email: string;
  phone?: string;
  company?: string;
  budget?: string;
  message?: string;
}) {
  const sheetWebhook = process.env.GOOGLE_SHEET_WEBHOOK_URL;
  if (!sheetWebhook) return;

  try {
    await fetch(sheetWebhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(row),
    });
  } catch (err) {
    console.error("Google Sheet webhook error (ignored):", err);
  }
}

// 3. Discord / Slack / Telegram Lead Alert
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
    console.error("Lead alert webhook error (ignored):", err);
  }
}

// 4. WhatsApp Auto-Responder / Webhook Dispatcher
async function dispatchWhatsAppAlert(details: {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  budget?: string;
  message?: string;
  source?: string;
}) {
  const whatsappWebhook = process.env.WHATSAPP_WEBHOOK_URL;
  if (!whatsappWebhook) return;

  try {
    await fetch(whatsappWebhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        event: "new_lead",
        lead: details,
        timestamp: new Date().toISOString(),
      }),
    });
  } catch (err) {
    console.error("WhatsApp webhook error (ignored):", err);
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
    const dateStr = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

    const fullMessage = `
Phone: ${data.phone || 'N/A'}
Website: ${data.website || 'N/A'}
Services: ${data.services || 'N/A'}
Timeline: ${data.timeline || 'N/A'}

Project Details:
${data.message}
    `.trim();

    // 1. Local Excel/CSV File
    appendToLocalCsv({
      date: dateStr,
      formType: "Contact Inquiry",
      name: data.name,
      email: data.email,
      phone: data.phone,
      company: data.company,
      budget: data.budget,
      message: data.message,
    });

    // 2. Google Sheets Webhook
    dispatchGoogleSheet({
      date: dateStr,
      formType: "Contact Inquiry",
      name: data.name,
      email: data.email,
      phone: data.phone,
      company: data.company,
      budget: data.budget,
      message: data.message,
    });

    // 3. Database
    await prisma.contactInquiry.create({
      data: {
        name: data.name,
        email: data.email,
        subject: data.company ? `Inquiry from ${data.company} (${data.budget || 'Unknown Budget'})` : `Inquiry (${data.budget || 'Unknown Budget'})`,
        message: fullMessage,
      },
    });

    // 4. Real-time phone alert
    dispatchLeadAlert("New Contact Inquiry Received", {
      Name: data.name,
      Email: data.email,
      Phone: data.phone,
      Company: data.company,
      Budget: data.budget,
      Services: data.services,
      Message: data.message,
    });

    dispatchWhatsAppAlert({
      name: data.name,
      email: data.email,
      phone: data.phone,
      company: data.company,
      budget: data.budget,
      message: data.message,
      source: "Contact Form",
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
    const dateStr = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

    appendToLocalCsv({
      date: dateStr,
      formType: "Lead Form",
      name: data.name,
      email: data.email,
      company: data.company,
      budget: data.revenue,
      message: data.goal,
    });

    dispatchGoogleSheet({
      date: dateStr,
      formType: "Lead Form",
      name: data.name,
      email: data.email,
      company: data.company,
      budget: data.revenue,
      message: data.goal,
    });

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

    dispatchWhatsAppAlert({
      name: data.name,
      email: data.email,
      company: data.company,
      budget: data.revenue,
      message: data.goal,
      source: "Book Call Form",
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

const strategyCallSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(150),
  business: z.string().trim().min(1, "Business name is required").max(150),
  phone: z.string().trim().min(5, "WhatsApp number is required").max(50),
  industry: z.string().trim().max(100).optional(),
  challenge: z.string().trim().max(2000).optional(),
});

export async function submitStrategyCall(formData: FormData) {
  try {
    const honeypot = formData.get("website_hp") as string;
    if (honeypot && honeypot.trim().length > 0) {
      return { success: true };
    }

    const rawData = {
      name: formData.get("name") as string,
      business: formData.get("business") as string,
      phone: formData.get("phone") as string,
      industry: formData.get("industry") as string,
      challenge: formData.get("challenge") as string,
    };

    const data = strategyCallSchema.parse(rawData);
    const dateStr = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

    // 1. Local Excel/CSV File
    appendToLocalCsv({
      date: dateStr,
      formType: "Strategy Call",
      name: data.name,
      email: "N/A",
      phone: data.phone,
      company: data.business,
      budget: data.industry || "N/A",
      message: data.challenge || "N/A",
    });

    // 2. Google Sheets Webhook
    dispatchGoogleSheet({
      date: dateStr,
      formType: "Strategy Call",
      name: data.name,
      email: "N/A",
      phone: data.phone,
      company: data.business,
      budget: data.industry || "N/A",
      message: data.challenge || "N/A",
    });

    // 3. Database
    await prisma.lead.create({
      data: {
        name: data.name,
        email: `${data.phone.replace(/[^0-9]/g, "") || "client"}@call-request.m4y`,
        phone: data.phone,
        company: data.business,
        budget: data.industry,
        message: `Industry: ${data.industry || "N/A"} | Challenge: ${data.challenge || "N/A"}`,
        source: "Strategy Call Booking",
        status: "NEW",
      },
    });

    // 4. Real-time phone alert
    dispatchLeadAlert("New Strategy Call Booking", {
      Name: data.name,
      Phone: data.phone,
      Business: data.business,
      Industry: data.industry,
      Challenge: data.challenge,
    });

    dispatchWhatsAppAlert({
      name: data.name,
      email: "N/A",
      phone: data.phone,
      company: data.business,
      budget: data.industry,
      message: data.challenge,
      source: "Strategy Call Booking",
    });

    return { success: true };
  } catch (error) {
    console.error("Failed to submit strategy call", error);
    return {
      success: false,
      error: "Failed to submit request. Please WhatsApp founders at +91 92587 35381 directly.",
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

    const dateStr = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

    appendToLocalCsv({
      date: dateStr,
      formType: "Lead Magnet Download",
      name: "Lead Magnet Download",
      email: email.trim(),
    });

    dispatchGoogleSheet({
      date: dateStr,
      formType: "Lead Magnet Download",
      name: "Lead Magnet Download",
      email: email.trim(),
    });

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

    dispatchWhatsAppAlert({
      name: "Lead Magnet Subscriber",
      email: email.trim(),
      source: "Lead Magnet Download",
    });

    return { success: true };
  } catch (error) {
    console.error("Failed to submit email capture", error);
    return { success: false, error: "Failed to submit email capture" };
  }
}
