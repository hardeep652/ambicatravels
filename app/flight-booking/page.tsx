import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FlightEnquiry } from "@/components/sections/FlightEnquiry";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Flight Booking Enquiry",
  description:
    "Enquire about flight tickets for domestic and international destinations. Best fares, itinerary support, and 24x7 assistance.",
};

export default function FlightBookingPage() {
  return (
    <>
      <Navbar />
      <main>
        <FlightEnquiry />
      </main>
      <Footer />
    </>
  );
}