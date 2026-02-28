import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import FeaturedItems from "@/components/sections/FeaturedItems";
import About from "@/components/sections/About";
import OrderCTA from "@/components/sections/OrderCTA";
import HoursLocation from "@/components/sections/HoursLocation";
import { FEATURED_ITEMS, SITE_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "Thai Nigiri | Thai & Japanese Fusion — Sandpoint, ID",
  description:
    "Thai Nigiri brings together bold Thai flavors and the art of Japanese sushi in the heart of Downtown Sandpoint, Idaho. Order online or visit us today.",
  openGraph: {
    title: "Thai Nigiri | Thai & Japanese Fusion — Sandpoint, ID",
    description:
      "Bold Thai curries. Delicate Japanese sushi. One unforgettable table in Downtown Sandpoint, Idaho.",
    url: "https://thainigiri.com",
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedItems items={FEATURED_ITEMS} />
      <About />
      <OrderCTA />
      <HoursLocation />

      {/* schema.org Restaurant markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Restaurant",
            name: SITE_INFO.name,
            description:
              "A fusion restaurant combining bold Thai flavors with the delicate artistry of Japanese sushi.",
            url: "https://thainigiri.com",
            telephone: SITE_INFO.phone,
            address: {
              "@type": "PostalAddress",
              streetAddress: "209 N 1st Avenue",
              addressLocality: "Sandpoint",
              addressRegion: "ID",
              postalCode: "83864",
              addressCountry: "US",
            },
            servesCuisine: ["Thai", "Japanese", "Fusion"],
            openingHoursSpecification: [
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday"],
                opens: "11:30",
                closes: "20:00",
              },
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Thursday", "Friday", "Saturday"],
                opens: "11:30",
                closes: "20:30",
              },
            ],
            sameAs: [SITE_INFO.facebookUrl],
          }),
        }}
      />
    </>
  );
}
