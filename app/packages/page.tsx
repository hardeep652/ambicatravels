import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FeaturedPackages } from "@/components/sections/FeaturedPackages";
import { CTABanner } from "@/components/sections/CTABanner";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Packages",
  description: "Browse our curated domestic and international holiday packages. From Bali to Switzerland, find your perfect getaway.",
};

export default function PackagesPage() {
  return (
    <>
      <Navbar />
      <main>
        <FeaturedPackages />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
