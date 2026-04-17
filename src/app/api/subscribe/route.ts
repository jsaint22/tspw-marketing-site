import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const email = formData.get("email");

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.redirect(new URL("/?subscribed=error", request.url));
    }

    // Append to a local subscribers file (simple file-based storage)
    const subscribersPath = path.join(process.cwd(), "subscribers.json");
    let subscribers: string[] = [];

    if (fs.existsSync(subscribersPath)) {
      const raw = fs.readFileSync(subscribersPath, "utf-8");
      subscribers = JSON.parse(raw);
    }

    if (!subscribers.includes(email)) {
      subscribers.push(email);
      fs.writeFileSync(subscribersPath, JSON.stringify(subscribers, null, 2));
    }

    return NextResponse.redirect(new URL("/?subscribed=true", request.url));
  } catch {
    return NextResponse.redirect(new URL("/?subscribed=error", request.url));
  }
}
