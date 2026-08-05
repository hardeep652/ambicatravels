import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { ServicesPreview } from "@/components/sections/ServicesPreview";
import { PackagesPreview } from "@/components/sections/PackagesPreview";
import { TrustBadges } from "@/components/sections/TrustBadges";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { GalleryPreview } from "@/components/sections/GalleryPreview";
import { TestimonialsPreview } from "@/components/sections/TestimonialsPreview";
import { CTABanner } from "@/components/sections/CTABanner";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ambica Travels | Car Rental, Bus Rental & Holiday Packages",
  description:
    "Ambica Travels plans car rentals, bus rentals and fully-escorted domestic & international holiday packages from Ahmedabad, Gujarat. 15+ years, 25,000+ happy travelers.",
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <WhyChooseUs />
        <ServicesPreview />
        <PackagesPreview />
        <TrustBadges />
        <HowItWorks />
        <GalleryPreview />
        <TestimonialsPreview />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}