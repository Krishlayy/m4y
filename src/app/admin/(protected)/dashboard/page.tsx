import { prisma } from "@/lib/prisma";
import StatCard from "@/components/admin/StatCard";
import DashboardChart from "@/components/admin/DashboardChart";
import { Users, Inbox, FolderKanban, FileText } from "lucide-react";

export default async function AdminDashboard() {
  // Fetch real counts from the database
  const [
    totalLeads,
    newLeads,
    totalInquiries,
    unreadInquiries,
    activeProjects,
    publishedPosts
  ] = await Promise.all([
    prisma.lead.count(),
    prisma.lead.count({ where: { status: "NEW" } }),
    prisma.contactInquiry.count(),
    prisma.contactInquiry.count({ where: { isRead: false } }),
    prisma.project.count({ where: { status: "PUBLISHED" } }), // Wait, projects use isPublished or status? 
    // Wait, the schema has `status: ContentStatus @default(DRAFT)` for projects! Let's check.
    prisma.blogPost.count({ where: { status: "PUBLISHED" } }),
  ]);

  // For the chart, we'll mock the last 7 days of activity until we build an analytics query
  const chartData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    values: [0, 0, 0, 0, 0, 0, 0], // Empty states for now
  };

  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl lg:text-4xl font-black uppercase tracking-tight">Overview</h1>
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
          <h2 className="text-xl font-black uppercase tracking-widest mb-6 border-b-4 border-black pb-4">Activity Overview</h2>
          <DashboardChart data={chartData} />
        </div>

        <div className="bg-[#FF3B00] text-white border-4 border-black hard-shadow p-6 flex flex-col">
          <h2 className="text-xl font-black uppercase tracking-widest mb-6 border-b-4 border-black pb-4">Recent Activity</h2>
          
          {totalInquiries === 0 && totalLeads === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center text-center opacity-80">
              <Inbox className="w-12 h-12 mb-2" />
              <p className="font-bold">No recent activity</p>
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              <p className="font-bold">Recent items will appear here.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
