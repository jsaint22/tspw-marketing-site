import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const email = formData.get("email");

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.redirect(new URL("/?subscribed=error", request.url));
    }

    // Log subscriber for Vercel Function logs (file writes don't persist on serverless)
    console.log(`[SUBSCRIBE] New email subscriber: ${email} at ${new Date().toISOString()}`);

    // TODO: Wire to GHL contact creation or email marketing platform
    // For now, subscribers are captured in Vercel Function logs

    return NextResponse.redirect(new URL("/?subscribed=true", request.url));
  } catch {
    return NextResponse.redirect(new URL("/?subscribed=error", request.url));
  }
}
