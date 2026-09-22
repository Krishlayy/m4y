import { prisma } from "@/lib/prisma";
import StatCard from "@/components/admin/StatCard";
import DashboardChart from "@/components/admin/DashboardChart";
import { Users, Inbox, FolderKanban, FileText, Download, FileSpreadsheet } from "lucide-react";
import Link from "next/link";

export default async function AdminDashboard() {
  let totalLeads = 0;
  let newLeads = 0;
  let totalInquiries = 0;
  let unreadInquiries = 0;
  let activeProjects = 0;
  let publishedPosts = 0;

  try {
    const counts = await Promise.all([
      prisma.lead.count().catch(() => 0),
      prisma.lead.count({ where: { status: "NEW" } }).catch(() => 0),
      prisma.contactInquiry.count().catch(() => 0),
      prisma.contactInquiry.count({ where: { isRead: false } }).catch(() => 0),
      prisma.project.count({ where: { status: "PUBLISHED" } }).catch(() => 0),
      prisma.blogPost.count({ where: { status: "PUBLISHED" } }).catch(() => 0),
    ]);
    [
      totalLeads,
      newLeads,
      totalInquiries,
      unreadInquiries,
      activeProjects,
      publishedPosts,
    ] = counts;
  } catch (error) {
    console.warn("Database connection issue during dashboard load, showing zero counts:", error);
  }

  const chartData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    values: [0, 0, 0, 0, 0, 0, 0],
  };

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl lg:text-4xl font-black uppercase tracking-tight text-black">Overview</h1>
          <p className="text-xs font-bold uppercase tracking-wider text-black/60 mt-1">Marketing4You Operational Command</p>
        </div>
        
        <div className="flex items-center gap-3">
          <Link
            href="/admin/spreadsheet"
            className="inline-flex items-center gap-2 bg-[#FFD700] text-black px-4 py-2.5 border-2 border-black font-black text-xs uppercase tracking-wider shadow-[3px_3px_0_#000] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all"
          >
            <FileSpreadsheet className="w-4 h-4" />
            Live Spreadsheet
          </Link>
          <a
            href="/api/admin/export/leads"
            download
            className="inline-flex items-center gap-2 bg-black text-white px-4 py-2.5 border-2 border-black font-black text-xs uppercase tracking-wider shadow-[3px_3px_0_#FF5500] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all"
          >
            <Download className="w-4 h-4" />
            Export CSV
          </a>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        <StatCard 
          title="Total Leads" 
          value={totalLeads} 
          icon={Users} 
          description={`${newLeads} new leads`}
          colorClass="bg-[#FFD700] text-black"
        />
        <StatCard 
          title="Inquiries" 
          value={totalInquiries} 
          icon={Inbox} 
          description={`${unreadInquiries} unread messages`}
          colorClass="bg-white text-black"
        />
        <StatCard 
          title="Active Projects" 
          value={activeProjects} 
          icon={FolderKanban} 
          colorClass="bg-white text-black"
        />
        <StatCard 
          title="Published Posts" 
          value={publishedPosts} 
          icon={FileText} 
          colorClass="bg-white text-black"
        />
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="xl:col-span-2 bg-white border-4 border-black hard-shadow p-6">
          <h2 className="text-xl font-black uppercase tracking-widest mb-6 border-b-4 border-black pb-4 text-black">
            Lead Growth & Inflow
          </h2>
          <DashboardChart data={chartData} />
        </div>

        <div className="bg-[#FF5500] text-white border-4 border-black hard-shadow p-6 flex flex-col">
          <h2 className="text-xl font-black uppercase tracking-widest mb-6 border-b-4 border-black pb-4 text-white">
            Lead Pipeline
          </h2>
          
          {totalInquiries === 0 && totalLeads === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center text-center opacity-90 p-4">
              <Inbox className="w-12 h-12 mb-2" />
              <p className="font-bold">No recent leads yet.</p>
              <p className="text-xs mt-2 opacity-80">Submissions from contact, book-call, and newsletter will automatically appear here and sync to your spreadsheet.</p>
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              <p className="font-bold">Active leads tracked in system.</p>
              <Link
                href="/admin/leads"
                className="inline-block text-center bg-black text-white px-4 py-2 font-black text-xs uppercase tracking-wider border-2 border-white hover:bg-white hover:text-black transition-colors"
              >
                View Leads
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
