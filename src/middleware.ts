import { auth } from "@/auth";
import { isAdminAuthBypassEnabled } from "@/lib/admin/bypass";
import { decode } from "next-auth/jwt";

const AUTH_SECRET = process.env.AUTH_SECRET || "m4y_super_secret_production_key_9258735381_ayushman_kishalay_secure";

export default auth(async (req) => {
  let isLoggedIn = !!req.auth;

  // Resilient cookie check: if req.auth is empty due to secure/insecure cookie naming mismatch,
  // decode the session token directly using both potential salts
  if (!isLoggedIn) {
    const rawToken = 
      req.cookies.get("__Secure-authjs.session-token")?.value ||
      req.cookies.get("authjs.session-token")?.value ||
      req.cookies.get("__Secure-next-auth.session-token")?.value ||
      req.cookies.get("next-auth.session-token")?.value;

    if (rawToken) {
      try {
        let decoded = await decode({ 
          token: rawToken, 
          secret: AUTH_SECRET, 
          salt: "authjs.session-token" 
        }).catch(() => null);

        if (!decoded) {
          decoded = await decode({ 
            token: rawToken, 
            secret: AUTH_SECRET, 
            salt: "__Secure-authjs.session-token" 
          }).catch(() => null);
        }

        if (decoded?.email) {
          isLoggedIn = true;
        }
      } catch (err) {
        console.warn("Middleware token decode error:", err);
      }
    }
  }

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
