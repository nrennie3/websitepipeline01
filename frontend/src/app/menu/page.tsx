import type { Metadata } from "next";
import FullMenu from "@/components/sections/FullMenu";
import { MENU_ITEMS, MENU_CATEGORIES } from "@/lib/data";

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

export default function MenuPage() {
  return <FullMenu items={MENU_ITEMS} categories={MENU_CATEGORIES} />;
}
