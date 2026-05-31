import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Coming-soon mode: redirect every public path to the homepage.
 *
 * Allowed through:
 *   - / (homepage), /_next/*, /favicon.ico, /brand/* (logo), /api/*
 *   - /intake + /intake/* — TSPW deep prospect intake (33-field, 5-step). Per
 *     funnel-reversal canon (`references/tspw-funnel-rework-spec-2026-05-30.md`
 *     + `project_tspw_funnel_call_first_canon` memory), this surface is
 *     **post-call only** — gated by `?t=<token>` validated server-side at the
 *     page render layer (NOT at middleware to keep Edge runtime cheap +
 *     keep Supabase token lookup off the request hot path). Cold walk-ins
 *     hitting /intake without a token see a "post-call intake — please book
 *     the Opening Faceoff first" landing state with Cal.com CTA.
 *   - /quick-reply + /quick-reply/* — light 3-5 field cold-walk-in capture
 *     form (per funnel-reversal hybrid carve-out — Josh confirmed 2026-05-30
 *     PM). Public-accessible; rate-limited at API route.
 */
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Allow these paths through without redirect
  if (
    pathname === "/" ||
    pathname.startsWith("/_next") ||
    pathname.startsWith("/favicon") ||
    pathname.startsWith("/brand") ||
    pathname.startsWith("/api") ||
    pathname === "/intake" ||
    pathname.startsWith("/intake/") ||
    pathname === "/quick-reply" ||
    pathname.startsWith("/quick-reply/")
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
