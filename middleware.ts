import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Coming-soon mode: redirect every public path to the homepage.
 * Allows through: /, /_next/*, /favicon.ico, /brand/* (logo), /api/*
 */
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Allow these paths through without redirect
  if (
    pathname === "/" ||
    pathname.startsWith("/_next") ||
    pathname.startsWith("/favicon") ||
    pathname.startsWith("/brand") ||
    pathname.startsWith("/api")
  ) {
    return NextResponse.next();
  }

  // Redirect everything else to homepage
  const url = request.nextUrl.clone();
  url.pathname = "/";
  return NextResponse.redirect(url, 308);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
