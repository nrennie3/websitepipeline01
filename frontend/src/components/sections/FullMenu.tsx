"use client";

import Image from "next/image";
import { useState } from "react";
import type { MenuItem } from "@/lib/types";
import { SITE_INFO } from "@/lib/data";

interface Props {
  items: MenuItem[];
  categories: { slug: string; name: string }[];
}

function MenuRow({ item }: { item: MenuItem }) {
  return (
    <div className="flex gap-4 py-5 border-b border-[#E8E4DF] last:border-0 group">
      {item.imageUrl && (
        <div className="relative w-20 h-20 rounded-sm overflow-hidden shrink-0 bg-[#E8E4DF]">
          <Image
            src={item.imageUrl}
            alt={item.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="80px"
          />
        </div>
      )}
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2">
          <h3
            className="text-[#1C1C1C] text-lg font-semibold leading-tight"
            style={{ fontFamily: "var(--font-heading), Georgia, serif" }}
          >
            {item.title}
          </h3>
          <span className="text-[#C74200] font-bold text-base shrink-0">
            {item.priceDisplay ?? `$${item.price}`}
          </span>
        </div>
        <p className="text-[#6B6B6B] text-sm mt-1 leading-relaxed">{item.content}</p>
      </div>
    </div>
  );
}

export default function FullMenu({ items, categories }: Props) {
  const [active, setActive] = useState(categories[0]?.slug ?? "");
  const filtered = items.filter((item) => item.category.slug === active);

  return (
    <section className="section-pad bg-[#FAF9F6]">
      <div className="container-site max-w-3xl">
        <div className="text-center mb-12">
          <p className="text-[#C74200] text-sm tracking-[0.25em] uppercase font-semibold mb-3">
            Thai &amp; Japanese Fusion
          </p>
          <h1
            className="text-4xl md:text-5xl font-bold text-[#1C1C1C]"
            style={{ fontFamily: "var(--font-heading), Georgia, serif" }}
          >
            Our Menu
          </h1>
        </div>

        <div className="flex flex-wrap gap-2 mb-10 border-b border-[#E8E4DF] pb-6">
          {categories.map((cat) => (
            <button
              key={cat.slug}
              onClick={() => setActive(cat.slug)}
              className={[
                "px-4 py-2 text-sm font-semibold rounded-sm tracking-wide transition-all",
                active === cat.slug
                  ? "bg-[#1C1C1C] text-white"
                  : "bg-white text-[#6B6B6B] border border-[#E8E4DF] hover:border-[#1C1C1C] hover:text-[#1C1C1C]",
              ].join(" ")}
            >
              {cat.name}
            </button>
          ))}
        </div>

        <div>
          {filtered.length > 0 ? (
            filtered.map((item) => <MenuRow key={item.slug} item={item} />)
          ) : (
            <p className="text-[#6B6B6B] text-center py-12">No items in this category yet.</p>
          )}
        </div>

        <div className="mt-14 p-8 bg-[#1C1C1C] text-white text-center rounded-sm">
          <p className="text-white/60 text-xs tracking-widest uppercase mb-2">Ready to eat?</p>
          <h3
            className="text-2xl font-bold mb-4"
            style={{ fontFamily: "var(--font-heading), Georgia, serif" }}
          >
            Order for Pickup or Delivery
          </h3>
          <a
            href={SITE_INFO.orderUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#C74200] hover:bg-[#9E3500] text-white font-semibold px-6 py-3 rounded-sm transition-colors"
          >
            Order Online
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
