"use client";

import { SectionHeading } from "@/components/ui/section-heading";
import { GoogleReviews } from "@/components/ui/GoogleReviews";

export function Testimonials() {
  return (
    <section id="testimonials" className="section-py bg-white">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Traveler Stories"
          title="What families and first-timers tell us"
          description="Real trips, real feedback — shared by travelers across Gujarat on Google."
        />

        {/* Elfsight Google Reviews Widget */}
        <div className="mt-12 w-full overflow-hidden">
          <GoogleReviews />
        </div>
      </div>
    </section>
  );
}