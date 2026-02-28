import type { Metadata } from "next";
import About from "@/components/sections/About";
import OrderCTA from "@/components/sections/OrderCTA";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn the story behind Thai Nigiri — a unique fusion of Thai and Japanese cuisine in the heart of Sandpoint, Idaho.",
  openGraph: {
    title: "About | Thai Nigiri",
    description:
      "Two cuisines, one kitchen. The story of Thai Nigiri in Downtown Sandpoint, Idaho.",
    url: "https://thainigiri.com/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <div className="pt-20">
        <About />
      </div>
      <OrderCTA />
    </>
  );
}
