import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CTABanner } from "@/components/sections/CTABanner";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Ambica Travels for a free quote. Car rentals, bus hire, and holiday packages planned by Gujarat's trusted travel partner since 2009.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}