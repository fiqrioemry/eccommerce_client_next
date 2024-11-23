import Cookies from "js-cookie";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
const NonAuthPath = ["/login", "/register"];
const AuthPath = [
  "/users",
  "/users/settings",
  "/users/address",
  "/cart/shipment",
  "/cart",
  "/myshop",
];
const RestrictedPath = ["/dashboard", "/dashboard/:path"];

export function middleware(req) {
  const token = req.cookies.get("accessToken");
  const user = req.cookies.get("user") || null;
  const userRole = user?.userRole || null;
  if (token && userRole === "Customer") {
    return NextResponse.redirect(new URL("/users/settings"));
  }

  // if (
  //   !token &&
  //   (req.nextUrl.pathname.startsWith("/dashboard") ||
  //     AuthPath.includes(req.nextUrl.pathname))
  // ) {
  //   return NextResponse.redirect(new URL("/", req.url));

  //   // redirect to home if logged user access login | register page
  // } else if (token && NonAuthPath.includes(req.nextUrl.pathname)) {
  //   return NextResponse.redirect(new URL("/", req.url));
  // }
}

export const config = {
  matcher: ["/dashboard", "/users/:path", "/login", "/register"],
};
