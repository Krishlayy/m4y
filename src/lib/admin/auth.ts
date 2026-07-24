import { auth } from "@/auth";
import { isAdminAuthBypassEnabled } from "./bypass";

export async function requireAdmin() {
  if (isAdminAuthBypassEnabled()) {
    return {
      id: null,
      name: "DEMO MODE",
      email: null,
      isBypass: true
    } as any; // Type assertion since it mocks the user
  }

  const session = await auth();
  
  if (!session || !session.user) {
    throw new Error("Unauthorized: No active session");
  }

  // If you later add roles, you can check them here:
  // if ((session.user as any).role !== "ADMIN") {
  //   throw new Error("Unauthorized: Admin role required");
  // }

  return session.user;
}
