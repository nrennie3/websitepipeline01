/**
 * Minimal GraphQL client for WPGraphQL.
 * Falls back to static data when NEXT_PUBLIC_WP_API_URL is not set.
 */

const WP_API_URL = process.env.NEXT_PUBLIC_WP_API_URL;

export async function wpQuery<T>(
  query: string,
  variables?: Record<string, unknown>,
  preview = false,
): Promise<T> {
  if (!WP_API_URL) {
    throw new Error("NEXT_PUBLIC_WP_API_URL is not set. Using static data.");
  }

  const headers: HeadersInit = { "Content-Type": "application/json" };

  if (preview && process.env.WP_PREVIEW_SECRET) {
    headers["Authorization"] = `Bearer ${process.env.WP_PREVIEW_SECRET}`;
  }

  const res = await fetch(WP_API_URL, {
    method: "POST",
    headers,
    body: JSON.stringify({ query, variables }),
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error(`WPGraphQL request failed: ${res.status} ${res.statusText}`);
  }

  const json = await res.json();

  if (json.errors) {
    throw new Error(`GraphQL errors: ${JSON.stringify(json.errors)}`);
  }

  return json.data as T;
}
