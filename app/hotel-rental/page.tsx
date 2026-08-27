import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HotelEnquiry } from "@/components/sections/HotelEnquiry";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hotel Booking Enquiry",
  description:
    "Enquire about hotel bookings in India and international destinations. Verified properties, flexible cancellation, and 24x7 support.",
};

export default function HotelRentalPage() {
  return (
    <>
      <Navbar />
      <main>
        <HotelEnquiry />
      </main>
      <Footer />
    </>
  );
}