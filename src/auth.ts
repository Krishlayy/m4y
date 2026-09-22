import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";
import { z } from "zod";

export const { handlers, auth, signIn, signOut } = NextAuth({
  trustHost: true,
  secret: process.env.AUTH_SECRET || "m4y_super_secret_production_key_9258735381_ayushman_kishalay_secure",
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        const parsedCredentials = z
          .object({ email: z.string().email(), password: z.string().min(4) })
          .safeParse(credentials);

        if (!parsedCredentials.success) {
          return null;
        }

        const rawEmail = parsedCredentials.data.email;
        const password = parsedCredentials.data.password;
        const normalizedEmail = rawEmail.toLowerCase().trim();

        // 1. Primary check: Query PostgreSQL / Supabase user
        try {
          const user = await prisma.user.findFirst({
            where: {
              email: {
                equals: normalizedEmail,
                mode: "insensitive"
              }
            }
          });

          if (user && user.password) {
            const passwordsMatch = await bcrypt.compare(password, user.password);
            if (passwordsMatch) {
              return {
                id: user.id,
                email: user.email,
                name: user.name || "Admin",
                role: user.role || "ADMIN",
              };
            }
          }
        } catch (dbError) {
          console.error("Database connection error during auth:", dbError);
        }

        // 2. Founder fail-safe fallback: prevents lockout if database connection pauses
        if (
          (normalizedEmail === "admin@marketing4you.com" ||
           normalizedEmail === "admin@m4y.com" ||
           normalizedEmail === "kishalay@m4y.com" ||
           normalizedEmail === "ayushman@m4y.com") &&
          (password === "password123" || password === "m4y@2026")
        ) {
          return {
            id: "founder-admin-fallback",
            email: normalizedEmail,
            name: normalizedEmail.includes("kishalay")
              ? "Kishalay Sharma"
              : normalizedEmail.includes("ayushman")
              ? "Ayushman Singh"
              : "M4Y Technical Founder",
            role: "ADMIN",
          };
        }

        return null;
      }
    })
  ],
  pages: {
    signIn: "/admin/login",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        token.role = (user as any).role || "ADMIN";
      }
      return token;
    },
    async session({ session, token }) {
      if (token && session.user) {
        session.user.id = token.id as string;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (session.user as any).role = token.role as string;
      }
      return session;
    }
  },
  session: {
    strategy: "jwt",
  }
});
