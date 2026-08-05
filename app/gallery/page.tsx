import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Gallery } from "@/components/sections/Gallery";
import { CTABanner } from "@/components/sections/CTABanner";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery",
  description: "View moments from trips we've planned. A glimpse of destinations our travelers have explored with Ambica Travels.",
};

export default function GalleryPage() {
  return (
    <>
      <Navbar />
      <main>
        <Gallery />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}