"use client";

import Link from "next/link";
import { useState } from "react";
import Button from "@/components/ui/Button";
import { SITE_INFO } from "@/lib/data";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/about", label: "About" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#1C1C1C]/95 backdrop-blur-sm border-b border-white/10">
      <div className="container-site flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link href="/" className="flex flex-col leading-none group">
          <span
            className="text-white text-xl md:text-2xl font-bold tracking-tight"
            style={{ fontFamily: "var(--font-heading), Georgia, serif" }}
          >
            Thai Nigiri
          </span>
          <span className="text-[#C74200] text-xs tracking-[0.2em] uppercase">
            Sandpoint, Idaho
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-white/80 hover:text-white text-sm tracking-wide transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Button href={SITE_INFO.orderUrl} variant="primary" size="sm" external>
            Order Online
          </Button>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white p-2"
          aria-label="Toggle menu"
        >
          <div className="w-6 flex flex-col gap-1.5">
            <span className={`block h-0.5 bg-white transition-all ${open ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block h-0.5 bg-white transition-all ${open ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 bg-white transition-all ${open ? "-rotate-45 -translate-y-2" : ""}`} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#1C1C1C] border-t border-white/10 px-6 py-6 flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-white/80 hover:text-white text-base tracking-wide transition-colors py-1"
            >
              {link.label}
            </Link>
          ))}
          <Button href={SITE_INFO.orderUrl} variant="primary" size="md" external>
            Order Online
          </Button>
        </div>
      )}
    </header>
  );
}
