import { auth } from "@/auth"
import { isAdminAuthBypassEnabled } from "@/lib/admin/bypass"

export default auth((req) => {
  const isLoggedIn = !!req.auth;
  const isAuthPage = req.nextUrl.pathname.startsWith('/admin/login');
  const isAdminRoute = req.nextUrl.pathname.startsWith('/admin');
  const isBypassEnabled = isAdminAuthBypassEnabled();

  // In bypass mode, redirect from root /admin to /admin/dashboard
  if (isBypassEnabled && req.nextUrl.pathname === '/admin') {
    return Response.redirect(new URL('/admin/dashboard', req.nextUrl));
  }

  if (isAuthPage) {
    if (isLoggedIn || isBypassEnabled) {
      return Response.redirect(new URL('/admin/dashboard', req.nextUrl));
    }
    return null;
  }

  if (isAdminRoute && !isLoggedIn && !isBypassEnabled) {
    return Response.redirect(new URL('/admin/login', req.nextUrl));
  }

  return null;
})

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}
