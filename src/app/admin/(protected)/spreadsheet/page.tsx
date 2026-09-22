import { prisma } from "@/lib/prisma";
import fs from "fs";
import path from "path";
import SpreadsheetView from "./SpreadsheetView";

export const dynamic = "force-dynamic";

export default async function SpreadsheetPage() {
  let leads: any[] = [];

  try {
    leads = await prisma.lead.findMany({
      orderBy: { createdAt: "desc" },
    });
  } catch (e) {
    console.warn("DB unreachable, reading local leads backup");
  }

  // If no DB leads, read local CSV backup
  if (leads.length === 0) {
    const backupPath = path.join(process.cwd(), "leads_backup.csv");
    if (fs.existsSync(backupPath)) {
      const raw = fs.readFileSync(backupPath, "utf8");
      const lines = raw.split(/\r?\n/).filter((l) => l.trim().length > 0);
      if (lines.length > 1) {
        // Parse CSV lines into objects
        for (let i = 1; i < lines.length; i++) {
          const parts = lines[i].split('","').map((p) => p.replace(/^"|"$/g, ""));
          if (parts.length >= 7) {
            leads.push({
              id: `csv-${i}`,
              createdAt: new Date(),
              dateStr: parts[0],
              source: parts[1] || "Website",
              name: parts[2],
              email: parts[3],
              phone: parts[4],
              company: parts[5],
              budget: parts[6],
              message: parts[7] || "",
              status: parts[8] || "NEW",
            });
          }
        }
      }
    }
  }

  const serializedLeads = leads.map((l) => ({
    id: l.id,
    name: l.name,
    email: l.email,
    phone: l.phone || "N/A",
    company: l.company || "N/A",
    budget: l.budget || "N/A",
    status: l.status || "NEW",
    source: l.source || "Website",
    message: l.message || "N/A",
    date: l.dateStr || (l.createdAt ? new Date(l.createdAt).toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }) : "Recent"),
  }));

  return <SpreadsheetView initialLeads={serializedLeads} />;
}
