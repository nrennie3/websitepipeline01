import Image from "next/image";
import Link from "next/link";
import type { MenuItem } from "@/lib/types";

interface Props {
  items: MenuItem[];
}

function MenuCard({ item }: { item: MenuItem }) {
  return (
    <div className="group bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
      {/* Image */}
      <div className="relative h-52 overflow-hidden bg-[#E8E4DF]">
        {item.imageUrl ? (
          <Image
            src={item.imageUrl}
            alt={item.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-[#E8E4DF] to-[#D4CFC9]" />
        )}
        {/* Category badge */}
        <span className="absolute top-3 left-3 bg-[#1C1C1C]/80 text-white text-xs tracking-widest uppercase px-2 py-1">
          {item.category.name}
        </span>
      </div>

      {/* Body */}
      <div className="p-5">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3
            className="text-[#1C1C1C] text-xl font-semibold leading-tight"
            style={{ fontFamily: "var(--font-heading), Georgia, serif" }}
          >
            {item.title}
          </h3>
          <span className="text-[#C74200] font-bold text-lg shrink-0">
            {item.priceDisplay ?? `$${item.price}`}
          </span>
        </div>
        <p className="text-[#6B6B6B] text-sm leading-relaxed line-clamp-2">
          {item.content}
        </p>
      </div>
    </div>
  );
}

export default function FeaturedItems({ items }: Props) {
  return (
    <section className="section-pad bg-[#FAF9F6]">
      <div className="container-site">
        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-[#C74200] text-sm tracking-[0.25em] uppercase font-semibold mb-3">
            Today&apos;s Highlights
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold text-[#1C1C1C]"
            style={{ fontFamily: "var(--font-heading), Georgia, serif" }}
          >
            Featured Dishes
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item) => (
            <MenuCard key={item.slug} item={item} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            href="/menu"
            className="inline-flex items-center gap-2 text-[#C74200] font-semibold hover:text-[#9E3500] transition-colors"
          >
            View Full Menu
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
