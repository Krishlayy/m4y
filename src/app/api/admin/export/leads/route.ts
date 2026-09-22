import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { auth } from "@/auth";
import { isAdminAuthBypassEnabled } from "@/lib/admin/bypass";

export async function GET() {
  const session = await auth();
  const isBypass = isAdminAuthBypassEnabled();

  if (!session?.user && !isBypass) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  try {
    const leads = await prisma.lead.findMany({
      orderBy: { createdAt: "desc" },
    });

    const escapeCsv = (str?: string | null) =>
      `"${(str || "").replace(/"/g, '""').replace(/\r?\n/g, " ")}"`;

    const headers = [
      "ID",
      "Created At",
      "Name",
      "Email",
      "Phone",
      "Company",
      "Budget / Revenue",
      "Status",
      "Source",
      "Message / Goal",
    ].join(",");

    const rows = leads.map((lead) =>
      [
        escapeCsv(lead.id),
        escapeCsv(new Date(lead.createdAt).toISOString()),
        escapeCsv(lead.name),
        escapeCsv(lead.email),
        escapeCsv(lead.phone),
        escapeCsv(lead.company),
        escapeCsv(lead.budget),
        escapeCsv(lead.status),
        escapeCsv(lead.source),
        escapeCsv(lead.message),
      ].join(",")
    );

    const csvContent = [headers, ...rows].join("\n");
    const dateStr = new Date().toISOString().split("T")[0];

    return new NextResponse(csvContent, {
      headers: {
        "Content-Type": "text/csv; charset=utf-8",
        "Content-Disposition": `attachment; filename="m4y_leads_${dateStr}.csv"`,
      },
    });
  } catch (err) {
    console.error("Export leads error:", err);
    return new NextResponse("Failed to export leads", { status: 500 });
  }
}
