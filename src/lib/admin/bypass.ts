export function isAdminAuthBypassEnabled(): boolean {
  const isBypassConfigured = process.env.ADMIN_AUTH_DISABLED === "true";
  const isProduction = process.env.NODE_ENV === "production";

  if (isProduction && isBypassConfigured) {
    // Fail-secure: refuse bypass in production to prevent accidental public exposure
    console.warn("WARNING: ADMIN_AUTH_DISABLED=true is ignored in production for security.");
    return false;
  }

  return isBypassConfigured;
}
