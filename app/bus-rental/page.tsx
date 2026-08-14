import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BusEnquiry } from "@/components/sections/BusEnquiry";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bus Enquiry",
  description:
    "Browse available rental buses and send a bus enquiry to Ambica Travels. Mini buses, travellers, luxury and sleeper coaches, AC or Non-AC for groups of any size.",
};

export default function BusRentalPage() {
  return (
    <>
      <Navbar />
      <main>
        <BusEnquiry />
      </main>
      <Footer />
    </>
  );
}
