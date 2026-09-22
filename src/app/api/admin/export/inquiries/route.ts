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
    const inquiries = await prisma.contactInquiry.findMany({
      orderBy: { createdAt: "desc" },
    });

    const escapeCsv = (str?: string | null) =>
      `"${(str || "").replace(/"/g, '""').replace(/\r?\n/g, " ")}"`;

    const headers = [
      "ID",
      "Created At",
      "Name",
      "Email",
      "Subject",
      "Is Read",
      "Is Resolved",
      "Message",
    ].join(",");

    const rows = inquiries.map((inq) =>
      [
        escapeCsv(inq.id),
        escapeCsv(new Date(inq.createdAt).toISOString()),
        escapeCsv(inq.name),
        escapeCsv(inq.email),
        escapeCsv(inq.subject),
        escapeCsv(inq.isRead ? "Yes" : "No"),
        escapeCsv(inq.isResolved ? "Yes" : "No"),
        escapeCsv(inq.message),
      ].join(",")
    );

    const csvContent = [headers, ...rows].join("\n");
    const dateStr = new Date().toISOString().split("T")[0];

    return new NextResponse(csvContent, {
      headers: {
        "Content-Type": "text/csv; charset=utf-8",
        "Content-Disposition": `attachment; filename="m4y_inquiries_${dateStr}.csv"`,
      },
    });
  } catch (err) {
    console.error("Export inquiries error:", err);
    return new NextResponse("Failed to export inquiries", { status: 500 });
  }
}
