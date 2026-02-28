import Button from "@/components/ui/Button";
import { SITE_INFO } from "@/lib/data";

export default function OrderCTA() {
  return (
    <section className="bg-[#C74200] text-white py-20 md:py-24">
      <div className="container-site text-center">
        <p className="text-white/70 text-sm tracking-[0.25em] uppercase font-semibold mb-4">
          Skip the Wait
        </p>
        <h2
          className="text-4xl md:text-5xl font-bold mb-5"
          style={{ fontFamily: "var(--font-heading), Georgia, serif" }}
        >
          Ready to Order?
        </h2>
        <p className="text-white/80 text-lg max-w-md mx-auto mb-10">
          Order ahead for pickup or delivery. Fresh, made-to-order, and ready when you are.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            href={SITE_INFO.orderUrl}
            variant="ghost"
            size="lg"
            external
            className="border-2 border-white hover:bg-white hover:text-[#C74200] text-white"
          >
            Order Online Now
          </Button>
          <Button
            href={`tel:${SITE_INFO.phone.replace(/\D/g, "")}`}
            variant="ghost"
            size="lg"
            className="border-2 border-white/40 text-white/80 hover:border-white hover:text-white"
          >
            {SITE_INFO.phone}
          </Button>
        </div>
      </div>
    </section>
  );
}
