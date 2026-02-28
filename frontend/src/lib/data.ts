/**
 * Static seed data matching the WPGraphQL response shape.
 * This file powers the site when NEXT_PUBLIC_WP_API_URL is not set.
 * When WordPress is connected, replace with live GraphQL queries.
 *
 * Unsplash images: food photography, free to use.
 */
import type { MenuItem, SiteInfo } from "./types";

export const SITE_INFO: SiteInfo = {
  name: "Thai Nigiri",
  tagline: "Where Thailand Meets Japan",
  address: "209 N 1st Avenue, Sandpoint, ID 83864",
  phone: "(208) 265-2587",
  orderUrl: "https://www.spoton.com/order/thai-nigiri",
  facebookUrl: "https://www.facebook.com/thainigirisandpoint",
  hours: [
    { days: "Monday – Wednesday", lunch: "11:30 am – 2:30 pm", dinner: "4:00 pm – 8:00 pm" },
    { days: "Thursday – Saturday", lunch: "11:30 am – 2:30 pm", dinner: "4:00 pm – 8:30 pm" },
    { days: "Sunday",             lunch: "Closed",              dinner: "Closed"              },
  ],
};

export const MENU_ITEMS: MenuItem[] = [
  // ── Sushi Rolls ──────────────────────────────────────────────────────────
  {
    slug: "dancing-salmon",
    title: "Dancing Salmon",
    content: "Fresh Atlantic salmon, cucumber, avocado, topped with seared salmon, jalapeño, and our house spicy mayo.",
    price: 18,
    isFeatured: true,
    category: { slug: "sushi-rolls", name: "Sushi Rolls" },
    imageUrl: "https://images.unsplash.com/photo-1617196034183-421b4040ed20?w=600&q=80",
  },
  {
    slug: "hamachi-karma",
    title: "Hamachi Karma",
    content: "Yellowtail, jalapeño, and ponzu sauce. Clean, bright, and beautifully simple.",
    price: 13,
    isFeatured: true,
    category: { slug: "sushi-rolls", name: "Sushi Rolls" },
    imageUrl: "https://images.unsplash.com/photo-1562802378-063ec186a863?w=600&q=80",
  },
  {
    slug: "harvest-roll",
    title: "Harvest Roll",
    content: "Tempura sweet potato, cream cheese, and cucumber topped with avocado and a drizzle of teriyaki glaze.",
    price: 10,
    isFeatured: false,
    category: { slug: "sushi-rolls", name: "Sushi Rolls" },
    imageUrl: "https://images.unsplash.com/photo-1611143669185-af224c5e3252?w=600&q=80",
  },
  // ── Thai Entrees ──────────────────────────────────────────────────────────
  {
    slug: "duck-curry",
    title: "Duck Curry",
    content: "Roasted duck breast in red coconut curry with lychee, pineapple, tomatoes, and Thai basil. Served with jasmine rice.",
    price: 25,
    isFeatured: true,
    category: { slug: "thai-entrees", name: "Thai Entrees" },
    imageUrl: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=600&q=80",
  },
  {
    slug: "mango-tango",
    title: "Mango Tango",
    content: "Crispy tofu or shrimp tossed in a house mango sauce with bell peppers, snap peas, and Thai basil. Served with jasmine rice.",
    price: 15,
    isFeatured: true,
    category: { slug: "thai-entrees", name: "Thai Entrees" },
    imageUrl: "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=600&q=80",
  },
  // ── Don Bowls ─────────────────────────────────────────────────────────────
  {
    slug: "chashu-don",
    title: "Chashu Don",
    content: "Slow-braised pork belly over steamed rice with soft-boiled egg, pickled ginger, nori, and house tare.",
    price: 15,
    isFeatured: true,
    category: { slug: "don-bowls", name: "Don Bowls" },
    imageUrl: "https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?w=600&q=80",
  },
  {
    slug: "unagi-don",
    title: "Unagi Don",
    content: "Grilled freshwater eel over steamed rice with house unagi sauce, sesame, and cucumber.",
    price: 25,
    isFeatured: false,
    category: { slug: "don-bowls", name: "Don Bowls" },
    imageUrl: "https://images.unsplash.com/photo-1547592180-85f173990554?w=600&q=80",
  },
  {
    slug: "bento-box",
    title: "Bento Box",
    content: "Your choice of protein with miso soup, house salad, steamed rice, gyoza, and seasonal vegetable.",
    price: 25,
    isFeatured: false,
    category: { slug: "don-bowls", name: "Don Bowls" },
    imageUrl: "https://images.unsplash.com/photo-1512003867696-6d5ce6835040?w=600&q=80",
  },
  // ── Ramen ─────────────────────────────────────────────────────────────────
  {
    slug: "tom-yum-ramen",
    title: "Tom Yum Ramen",
    content: "House-made broth blending Thai tom yum with Japanese tonkotsu. Topped with shrimp, mushrooms, lemongrass, and soft-boiled egg.",
    price: 15,
    isFeatured: false,
    category: { slug: "ramen", name: "Ramen" },
    imageUrl: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=600&q=80",
  },
];

export const FEATURED_ITEMS = MENU_ITEMS.filter((item) => item.isFeatured);

export const MENU_CATEGORIES = [
  { slug: "sushi-rolls",  name: "Sushi Rolls"  },
  { slug: "thai-entrees", name: "Thai Entrees" },
  { slug: "don-bowls",    name: "Don Bowls"    },
  { slug: "ramen",        name: "Ramen"        },
];
