import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";

export default auth((req) => {
  const isLoggedIn = !!req.auth;
  const { pathname } = req.nextUrl;

  if (pathname === "/admin/login" && isLoggedIn) {
    return NextResponse.redirect(new URL("/admin", req.nextUrl));
  }

  if (pathname.startsWith("/admin") && pathname !== "/admin/login" && !isLoggedIn) {
    return NextResponse.redirect(new URL("/admin/login", req.nextUrl));
  }

  return NextResponse.next();
});

export const config = {
  matcher: ["/admin/:path*"],
};
