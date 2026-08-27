"use client";

import { SectionHeading } from "@/components/ui/section-heading";

export function AboutUs() {
  return (
    <section id="about" className="section-py bg-white">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Our Story"
          title="About Ambica Travels"
          description="27+ years of crafting memorable journeys for families, corporates, and solo travelers across Gujarat and beyond."
        />

        <div className="mt-14 grid gap-10 md:grid-cols-2 items-center">
          <div className="prose prose-navy max-w-none">
            <p className="text-lg leading-relaxed text-navy-600">
              Founded in 1999, Ambica Travels started as a modest car-rental
              desk in Ahmedabad. Over the past 27 years, we have evolved into a
              full-service travel partner, offering chauffeur-driven cars,
              luxury chauffeur-driven fleets, bus rentals for groups, and
              curated domestic & international holiday packages.
            </p>

            <p className="mt-4 text-lg leading-relaxed text-navy-600">
              Our philosophy is simple: transparent pricing, 24×7 on-trip
              support, and a personal touch that turns first-time customers
              into lifelong travelers. Every itinerary is vetted by our
              on-ground network in 120+ destinations, ensuring you experience
              the culture, comfort, and safety you deserve.
            </p>

            <p className="mt-4 text-lg leading-relaxed text-navy-600">
              Today, more than 25,000 happy travelers trust us with their
              journeys — from weekend getaways to multi-country honeymoons. We
              are proud members of IATA, TAAI and hold ISO 9001:2015
              certification, reinforcing our commitment to quality and
              reliability.
            </p>
          </div>

          {/* Main About Image - fixed height + proper cover */}
          <div className="relative rounded-3xl overflow-hidden shadow-xl bg-navy-50 aspect-[4/3] md:aspect-auto md:h-[420px]">
            <img
              src="https://res.cloudinary.com/ozr2ckrb/image/upload/v1787823692/WhatsApp_Image_2026-08-27_at_3.10.58_PM.jpg"
              alt="Ambica Travels team assisting travelers"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Founder */}
        <div className="mt-20">
          <SectionHeading
            eyebrow="Leadership"
            title="Meet the Founder"
            description="The person behind Ambica Travels' journey from a single desk to a full-service travel partner."
          />

          <div className="mt-12 max-w-sm mx-auto">
            <div className="rounded-3xl overflow-hidden shadow-xl bg-navy-50 text-center">
              {/* Founder Image - square + fixed size */}
              <div className="relative w-full aspect-square bg-navy-100">
                <img
                  src="https://res.cloudinary.com/ozr2ckrb/image/upload/v1787823459/WhatsApp_Image_2026-08-27_at_2.55.22_PM.jpg"
                  alt="Founder of Ambica Travels"
                  className="absolute inset-0 w-full h-full object-cover object-top"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-navy-900">
                  Vijay D Amin
                </h3>

                <p className="mt-1 text-sm font-medium text-navy-500">
                  Founder & CEO
                </p>

                <p className="mt-3 text-navy-600 leading-relaxed">
                  Vijay D Amin founded Ambica Travels in 1999, growing it from
                  an Ahmedabad car-rental desk into a full-service travel
                  partner trusted by 25,000+ travelers. His leadership
                  emphasizes transparent pricing, 24×7 support, and
                  quality-certified journeys.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}