import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

/**
 * On-demand ISR revalidation endpoint.
 * Called by a WordPress webhook when content is published.
 *
 * WordPress setup: add an action hook to wp_publish_post that POSTs to:
 *   https://your-frontend.com/api/revalidate?secret=REVALIDATE_SECRET&path=/
 *
 * Env vars required:
 *   REVALIDATE_SECRET — shared secret between WP and Next.js
 */
export async function POST(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get("secret");
  const path   = request.nextUrl.searchParams.get("path") ?? "/";

  if (!process.env.REVALIDATE_SECRET) {
    return NextResponse.json({ error: "Revalidation not configured" }, { status: 500 });
  }

  if (secret !== process.env.REVALIDATE_SECRET) {
    return NextResponse.json({ error: "Invalid secret" }, { status: 401 });
  }

  const allowedPaths = ["/", "/menu", "/about"];
  if (!allowedPaths.includes(path)) {
    return NextResponse.json({ error: "Path not allowed" }, { status: 400 });
  }

  revalidatePath(path);
  return NextResponse.json({ revalidated: true, path, timestamp: Date.now() });
}
