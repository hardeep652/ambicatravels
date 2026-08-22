import type { NextAuthConfig } from "next-auth";

export const authConfig = {
  session: {
    strategy: "jwt",
  },

  pages: {
    signIn: "/admin/login",
  },

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

  providers: [],

  trustHost: true,
} satisfies NextAuthConfig;