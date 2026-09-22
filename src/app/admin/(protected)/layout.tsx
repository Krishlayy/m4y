import AdminLayoutWrapper from "@/components/admin/AdminLayoutWrapper";

// Force all admin pages to be dynamically rendered (never pre-rendered during build)
// This prevents build failures when the database is unavailable
export const dynamic = "force-dynamic";

export default function ProtectedAdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AdminLayoutWrapper>
      {children}
    </AdminLayoutWrapper>
  );
}
