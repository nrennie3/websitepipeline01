import Link from "next/link";
import { SITE_INFO } from "@/lib/data";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/about", label: "About" },
];

export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#1C1C1C] text-white/70 pt-16 pb-8">
      <div className="container-site">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-12 border-b border-white/10">
          {/* Brand */}
          <div>
            <p
              className="text-white text-2xl font-bold mb-2"
              style={{ fontFamily: "var(--font-heading), Georgia, serif" }}
            >
              Thai Nigiri
            </p>
            <p className="text-[#C74200] text-xs tracking-[0.2em] uppercase mb-4">
              Where Thailand Meets Japan
            </p>
            <p className="text-sm leading-relaxed">
              A fusion restaurant in the heart of Downtown Sandpoint, Idaho.
            </p>
            <a
              href={SITE_INFO.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 text-sm hover:text-white transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              @thainigirisandpoint
            </a>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-white font-semibold text-sm tracking-widest uppercase mb-4">
              Navigate
            </p>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href={SITE_INFO.orderUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:text-white transition-colors"
                >
                  Order Online ↗
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-white font-semibold text-sm tracking-widest uppercase mb-4">
              Visit Us
            </p>
            <address className="not-italic text-sm leading-relaxed space-y-1 mb-4">
              <p>{SITE_INFO.address}</p>
              <a href={`tel:${SITE_INFO.phone.replace(/\D/g, "")}`} className="hover:text-white transition-colors">
                {SITE_INFO.phone}
              </a>
            </address>
            <div className="text-sm space-y-1">
              <p className="text-white/40 text-xs tracking-widest uppercase mb-1">Hours</p>
              {SITE_INFO.hours.filter(h => h.lunch !== "Closed").map((h) => (
                <p key={h.days} className="text-xs">
                  <span className="text-white/50">{h.days}:</span> {h.lunch} &amp; {h.dinner}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-white/30">
          <p>© {year} Thai Nigiri. All rights reserved.</p>
          <p>209 N 1st Ave, Sandpoint, ID 83864</p>
        </div>
      </div>
    </footer>
  );
}
