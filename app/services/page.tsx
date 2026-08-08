import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Services } from "@/components/sections/Services";
import { CTABanner } from "@/components/sections/CTABanner";
import { Metadata } from "next";
import { FAQSection } from "@/components/sections/FAQSection";

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
        <FAQSection />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
