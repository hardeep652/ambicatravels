import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import { FloatingCallback } from "@/components/sections/FloatingCallback";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const siteUrl = "https://www.ambicatravels.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Ambica Travels | Car Rental, Bus Rental & Holiday Packages",
    template: "%s | Ambica Travels",
  },
  description:
    "Ambica Travels plans car rentals, bus rentals and fully-escorted domestic & international holiday packages from Ahmedabad, Gujarat. 15+ years, 25,000+ happy travelers.",
  keywords: [
    "Ambica Travels",
    "travel agency Ahmedabad",
    "car rental Gujarat",
    "bus rental Gujarat",
    "holiday packages India",
    "international tour packages",
  ],
  openGraph: {
    title: "Ambica Travels | Car Rental, Bus Rental & Holiday Packages",
    description:
      "Curated car rentals, bus rentals and holiday packages, planned end-to-end by Ahmedabad's trusted travel partner since 2009.",
    url: siteUrl,
    siteName: "Ambica Travels",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ambica Travels | Car Rental, Bus Rental & Holiday Packages",
    description:
      "Curated car rentals, bus rentals and holiday packages, planned end-to-end by Ahmedabad's trusted travel partner since 2009.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable}`}>
      <body className="font-body">{children}<FloatingCallback /></body>
    </html>
  );
}
