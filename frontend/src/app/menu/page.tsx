import type { Metadata } from "next";
import FullMenu from "@/components/sections/FullMenu";
import { MENU_ITEMS, MENU_CATEGORIES } from "@/lib/data";
import { wpQuery } from "@/lib/graphql/client";
import { ALL_MENU_ITEMS_QUERY } from "@/lib/graphql/queries";
import { mapWpItem, type WpMenuItemNode } from "@/lib/graphql/mappers";

export const metadata: Metadata = {
  title: "Menu",
  description:
    "Explore our full menu of Thai curries, sushi rolls, ramen, don bowls, and more. Lunch and dinner served daily in Downtown Sandpoint.",
  openGraph: {
    title: "Menu | Thai Nigiri",
    description:
      "Sushi Rolls, Thai Entrees, Don Bowls, Ramen — explore the full Thai Nigiri menu.",
    url: "https://thainigiri.com/menu",
  },
};

export default async function MenuPage() {
  let items = MENU_ITEMS;

  if (process.env.NEXT_PUBLIC_WP_API_URL) {
    try {
      const data = await wpQuery<{ menuItems: { nodes: WpMenuItemNode[] } }>(
        ALL_MENU_ITEMS_QUERY,
      );
      items = data.menuItems.nodes.map(mapWpItem);
    } catch {
      // Fall back to static data
    }
  }

  return <FullMenu items={items} categories={MENU_CATEGORIES} />;
}
