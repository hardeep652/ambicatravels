import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Services } from "@/components/sections/Services";
import { CTABanner } from "@/components/sections/CTABanner";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description: "Explore our car rental, bus rental, and holiday package services. Comfortable, reliable, and tailored to your journey.",
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main>
        <Services />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}