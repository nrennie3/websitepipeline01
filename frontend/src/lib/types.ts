export interface MenuCategory {
  slug: string;
  name: string;
}

export interface MenuItem {
  slug: string;
  title: string;
  content: string;
  price: number;
  priceDisplay?: string; // overrides "$price" when set, e.g. "From $18"
  isFeatured: boolean;
  category: MenuCategory;
  imageUrl?: string;
}

export interface HoursEntry {
  days: string;
  lunch: string;
  dinner: string;
}

export interface SiteInfo {
  name: string;
  tagline: string;
  address: string;
  phone: string;
  orderUrl: string;
  facebookUrl: string;
  hours: HoursEntry[];
}
