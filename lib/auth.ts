import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { z } from "zod";
import { prisma } from "@/lib/prisma";

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1),
});

export const { handlers, signIn, signOut, auth } = NextAuth({
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/admin/login",
  },
  providers: [
    Credentials({
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        const parsed = loginSchema.safeParse(credentials);

        if (!parsed.success) {
          return null;
        }

        const admin = await prisma.admin.findUnique({
          where: { email: parsed.data.email },
        });

        if (!admin) {
          return null;
        }

        const passwordMatches = await bcrypt.compare(parsed.data.password, admin.password);

        if (!passwordMatches) {
          return null;
        }

        return {
          id: admin.id,
          name: admin.name,
          email: admin.email,
        };
      },
    }),
  ],
  callbacks: {
    jwt: async ({ token, user }) => {
      if (user) {
        token.id = user.id;
      }

      return token;
    },
    session: async ({ session, token }) => {
      if (session.user) {
        session.user.id = token.id as string;
      }

      return session;
    },
    authorized: async ({ auth, request }) => {
      const { pathname } = request.nextUrl;
      const isAdminArea = pathname.startsWith("/admin");
      const isLoginPage = pathname === "/admin/login";

      if (!isAdminArea) {
        return true;
      }

      if (isLoginPage) {
        return true;
      }

      return !!auth;
    },
  },
  trustHost: true,
});
