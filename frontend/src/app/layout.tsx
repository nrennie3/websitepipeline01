import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/sections/SiteFooter";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://thainigiri.com"),
  title: {
    template: "%s | Thai Nigiri — Sandpoint, ID",
    default: "Thai Nigiri | Thai & Japanese Fusion — Sandpoint, ID",
  },
  description:
    "Thai Nigiri brings together bold Thai flavors and the art of Japanese sushi in the heart of Downtown Sandpoint, Idaho. Order online or visit us today.",
  openGraph: {
    siteName: "Thai Nigiri",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
