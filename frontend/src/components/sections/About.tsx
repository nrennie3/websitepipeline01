import Image from "next/image";
import Button from "@/components/ui/Button";
import { SITE_INFO } from "@/lib/data";

export default function About() {
  return (
    <section className="section-pad bg-[#1C1C1C] text-white">
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <p className="text-[#C74200] text-sm tracking-[0.25em] uppercase font-semibold mb-4">
              Our Story
            </p>
            <h2
              className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
              style={{ fontFamily: "var(--font-heading), Georgia, serif" }}
            >
              Family, Flavor,<br />One Table.
            </h2>
            <div className="space-y-4 text-white/70 text-base leading-relaxed">
              <p>
                Thai Nigiri is a family-owned restaurant where the flavors of Thailand and Japan come
                together in perfect harmony. Founded in 2015 by Uma Mahamat and Tim Tientong, our
                kitchen is built on Tim&apos;s 20+ years of sushi chef experience and Uma&apos;s deep
                roots in authentic Thai cuisine.
              </p>
              <p>
                Family is at the heart of everything we do. From our humble beginnings to today,
                we&apos;ve poured our love and dedication into Thai Nigiri — and our daughters, Rosie
                and Ellie, inspire us to make it better every day.
              </p>
              <p>
                We&apos;re proud to be a staple in the Sandpoint community and a welcoming space where
                flavors and traditions come together to create something truly special. We can&apos;t
                wait to welcome you to our table.
              </p>
            </div>

            {/* Hours summary */}
            <div className="mt-8 pt-8 border-t border-white/10">
              <p className="text-white/50 text-xs tracking-[0.2em] uppercase mb-3">Hours</p>
              <div className="space-y-1">
                {SITE_INFO.hours.filter(h => h.lunch !== "Closed").map((h) => (
                  <div key={h.days} className="flex justify-between text-sm text-white/70">
                    <span>{h.days}</span>
                    <span>{h.lunch} &nbsp;|&nbsp; {h.dinner}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <Button href="/about" variant="outline" size="md">
                Learn More About Us
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative h-[500px] lg:h-[600px] rounded-sm overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=900&q=85"
                alt="Thai Nigiri restaurant interior — warm, intimate dining room"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Accent block */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#C74200] -z-10 hidden lg:block" />
          </div>
        </div>
      </div>
    </section>
  );
}
