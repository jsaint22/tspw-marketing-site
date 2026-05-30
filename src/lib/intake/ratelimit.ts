// =============================================================================
// TSPW intake — Upstash rate limiter (5 submissions per IP per 1 hour)
// =============================================================================
//
// Per references/tspw-intake-build-spec-2026-05-30.md D7 #3 resolution:
// "Upstash explicit — more granular control + survives Vercel platform
//  changes. Limit: 5 submissions per IP per hour initially."
//
// If Upstash env vars are not configured the limiter degrades to allow-all
// (no rate limit) and the API route logs the gap to console. This makes
// preview deployments work without env wiring while flagging the gap in
// production.
//
// Required env vars in Vercel (tspw-marketing-site project):
//   UPSTASH_REDIS_REST_URL
//   UPSTASH_REDIS_REST_TOKEN
// =============================================================================

import "server-only";

import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

let cachedLimiter: Ratelimit | null | undefined;

function getLimiter(): Ratelimit | null {
  if (cachedLimiter !== undefined) return cachedLimiter;
  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;
  if (!url || !token) {
    cachedLimiter = null;
    return null;
  }
  const redis = new Redis({ url, token });
  cachedLimiter = new Ratelimit({
    redis,
    limiter: Ratelimit.slidingWindow(5, "1 h"),
    prefix: "tspw_intake",
    analytics: true,
  });
  return cachedLimiter;
}

export interface RateLimitResult {
  allowed: boolean;
  limiter_configured: boolean;
  remaining: number;
  reset: number;
}

export async function checkIntakeRateLimit(ip: string): Promise<RateLimitResult> {
  const limiter = getLimiter();
  if (!limiter) {
    return { allowed: true, limiter_configured: false, remaining: -1, reset: 0 };
  }
  const { success, remaining, reset } = await limiter.limit(ip);
  return {
    allowed: success,
    limiter_configured: true,
    remaining,
    reset,
  };
}
