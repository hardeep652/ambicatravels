import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AboutUs } from "@/components/sections/AboutUs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Ambica Travels",
  description:
    "Learn about Ambica Travels — 15+ years of trusted car rentals, bus rentals, and curated holiday packages from Ahmedabad, Gujarat.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <AboutUs />
      </main>
      <Footer />
    </>
  );
}