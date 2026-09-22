import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import fs from "fs";
import path from "path";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  try {
    const isDownload = req.nextUrl.searchParams.get("download") === "true";

    // 1. Fetch leads from database if available
    let dbLeads: any[] = [];
    try {
      dbLeads = await prisma.lead.findMany({
        orderBy: { createdAt: "desc" },
      });
    } catch (e) {
      console.warn("DB offline during sheet export, falling back to local CSV backup.");
    }

    const escapeCsv = (str?: string | null) =>
      `"${(str || "").replace(/"/g, '""').replace(/\r?\n/g, " ")}"`;

    const headers = [
      "Date",
      "Form Type",
      "Name",
      "Email",
      "Phone",
      "Company",
      "Budget / Revenue",
      "Status",
      "Source",
      "Message / Goal",
    ].join(",");

    const rows: string[] = [];

    // Add DB leads
    for (const lead of dbLeads) {
      rows.push(
        [
          escapeCsv(new Date(lead.createdAt).toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })),
          escapeCsv("Website Lead"),
          escapeCsv(lead.name),
          escapeCsv(lead.email),
          escapeCsv(lead.phone || "N/A"),
          escapeCsv(lead.company || "N/A"),
          escapeCsv(lead.budget || "N/A"),
          escapeCsv(lead.status),
          escapeCsv(lead.source || "Website"),
          escapeCsv(lead.message || "N/A"),
        ].join(",")
      );
    }

    // Also merge from leads_backup.csv if it has entries not in DB
    const csvBackupPath = path.join(process.cwd(), "leads_backup.csv");
    if (fs.existsSync(csvBackupPath)) {
      const fileContent = fs.readFileSync(csvBackupPath, "utf8");
      const lines = fileContent.split(/\r?\n/).filter((l) => l.trim().length > 0);
      // Skip header line
      for (let i = 1; i < lines.length; i++) {
        if (dbLeads.length === 0) {
          rows.push(lines[i]);
        }
      }
    }

    const csvContent = [headers, ...rows].join("\n");
    const dateStr = new Date().toISOString().split("T")[0];

    return new NextResponse(csvContent, {
      headers: {
        "Content-Type": "text/csv; charset=utf-8",
        "Content-Disposition": isDownload
          ? `attachment; filename="m4y_leads_${dateStr}.csv"`
          : `inline; filename="m4y_leads_${dateStr}.csv"`,
        "Cache-Control": "no-store, max-age=0",
      },
    });
  } catch (err) {
    console.error("Sheet API error:", err);
    return new NextResponse("Error generating spreadsheet", { status: 500 });
  }
}
