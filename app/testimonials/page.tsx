import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTABanner } from "@/components/sections/CTABanner";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Testimonials",
  description: "Read what families and first-time travelers say about their trips with Ambica Travels. Real feedback from travelers across Gujarat.",
};

export default function TestimonialsPage() {
  return (
    <>
      <Navbar />
      <main>
        <Testimonials />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}