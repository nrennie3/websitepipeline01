import type { MenuItem } from "@/lib/types";

/** Shape of a menuItem node returned by WPGraphQL. */
export interface WpMenuItemNode {
  slug: string;
  title: string;
  content: string | null;
  price: number | null;
  priceDisplay: string | null;
  isFeatured: boolean | null;
  featuredImage: { node: { sourceUrl: string } } | null;
  menuCategories: { nodes: Array<{ slug: string; name: string }> } | null;
}

export function mapWpItem(node: WpMenuItemNode): MenuItem {
  return {
    slug: node.slug,
    title: node.title,
    content: node.content ?? "",
    price: node.price ?? 0,
    priceDisplay: node.priceDisplay ?? undefined,
    isFeatured: node.isFeatured ?? false,
    category: node.menuCategories?.nodes?.[0] ?? { slug: "", name: "" },
    imageUrl: node.featuredImage?.node?.sourceUrl ?? undefined,
  };
}
