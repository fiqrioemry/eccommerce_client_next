import { NextResponse } from "next/server";
import Cookies from "js-cookie";

export function middleware(req) {
  const token = req.cookies.get("accessToken");

  if (
    !token &&
    (req.nextUrl.pathname.startsWith("/dashboard") ||
      req.nextUrl.pathname.startsWith("/user"))
  ) {
    // Redirect ke halaman login jika belum login
    return NextResponse.redirect(new URL("/", req.url));
  } else if (token && req.nextUrl.pathname.startsWith("/login")) {
    return NextResponse.redirect(new URL("/", req.url));
  }
}

export const config = {
  matcher: ["/dashboard", "/user/:path", "/login"], // Menentukan path yang dilindungi
};
