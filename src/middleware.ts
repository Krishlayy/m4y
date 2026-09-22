import { auth } from "@/auth";
import { isAdminAuthBypassEnabled } from "@/lib/admin/bypass";

export default auth((req) => {
  const isLoggedIn = !!req.auth;
  const isAuthPage = req.nextUrl.pathname.startsWith("/admin/login");
  const isAdminRoute = req.nextUrl.pathname.startsWith("/admin");
  const isBypassEnabled = isAdminAuthBypassEnabled();

  // Root /admin route always goes to /admin/dashboard
  if (req.nextUrl.pathname === "/admin" || req.nextUrl.pathname === "/admin/") {
    if (isLoggedIn || isBypassEnabled) {
      return Response.redirect(new URL("/admin/dashboard", req.nextUrl));
    }
    return Response.redirect(new URL("/admin/login", req.nextUrl));
  }

  // If already logged in, redirect away from /admin/login to /admin/dashboard
  if (isAuthPage) {
    if (isLoggedIn || isBypassEnabled) {
      return Response.redirect(new URL("/admin/dashboard", req.nextUrl));
    }
    return null;
  }

  // Protect all other /admin routes
  if (isAdminRoute && !isLoggedIn && !isBypassEnabled) {
    const callbackUrl = encodeURIComponent(req.nextUrl.pathname);
    return Response.redirect(new URL(`/admin/login?callbackUrl=${callbackUrl}`, req.nextUrl));
  }

  return null;
});

export const config = {
  matcher: ["/admin", "/admin/:path*"],
};
