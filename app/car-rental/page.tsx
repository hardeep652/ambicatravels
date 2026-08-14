import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CarRentalEnquiry } from "@/components/sections/CarRentalEnquiry";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Car Rental Enquiry",
  description:
    "Browse available rental cars and send a car rental enquiry to Ambica Travels. Sedans, SUVs, premium cars and hatchbacks, self-drive or with a driver.",
};

export default function CarRentalPage() {
  return (
    <>
      <Navbar />
      <main>
        <CarRentalEnquiry />
      </main>
      <Footer />
    </>
  );
}
