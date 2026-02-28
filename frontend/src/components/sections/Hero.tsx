import Image from "next/image";
import Button from "@/components/ui/Button";
import { SITE_INFO } from "@/lib/data";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#1C1C1C]">
      {/* Background image */}
      <Image
        src="https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=1800&q=85"
        alt="Sushi and Thai dishes at Thai Nigiri"
        fill
        className="object-cover opacity-40"
        priority
        sizes="100vw"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1C1C1C]/60 via-transparent to-[#1C1C1C]/80" />

      {/* Content */}
      <div className="relative z-10 container-site text-center text-white px-4 pt-20">
        <p className="text-[#C74200] text-sm md:text-base tracking-[0.3em] uppercase mb-4 font-semibold">
          Downtown Sandpoint, Idaho
        </p>

        <h1
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-[1.05]"
          style={{ fontFamily: "var(--font-heading), Georgia, serif" }}
        >
          {SITE_INFO.tagline}
        </h1>

        <p className="text-white/70 text-lg md:text-xl max-w-xl mx-auto mb-10 leading-relaxed">
          Bold Thai curries. Delicate Japanese sushi. One unforgettable table in the heart of Sandpoint.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href={SITE_INFO.orderUrl} variant="primary" size="lg" external>
            Order Online
          </Button>
          <Button href="/menu" variant="ghost" size="lg">
            Discover Our Menu
          </Button>
        </div>

        {/* Scroll indicator */}
        <div className="mt-20 flex justify-center animate-bounce">
          <svg className="w-6 h-6 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </section>
  );
}
