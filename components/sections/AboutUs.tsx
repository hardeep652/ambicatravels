"use client";

import { SectionHeading } from "@/components/ui/section-heading";

export function AboutUs() {
  return (
    <section id="about" className="section-py bg-white">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Our Story"
          title="About Ambica Travels"
          description="15+ years of crafting memorable journeys for families, corporates, and solo travelers across Gujarat and beyond."
        />

        <div className="mt-14 grid gap-10 md:grid-cols-2 items-center">
          <div className="prose prose-navy max-w-none">
            <p className="text-lg leading-relaxed text-navy-600">
              Founded in 2009, Ambica Travels started as a modest car‑rental desk in Ahmedabad.
              Over the years we have grown into a full‑service travel partner offering self‑drive cars,
              chauffeur‑driven fleets, bus rentals for groups, and curated domestic & international holiday packages.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-navy-600">
              Our philosophy is simple: transparent pricing, 24×7 on‑trip support, and a personal touch that turns first‑time
              customers into lifelong travelers. Every itinerary is vetted by our on‑ground network in 120+ destinations,
              ensuring you experience the culture, comfort, and safety you deserve.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-navy-600">
              Today, more than 25,000 happy travelers trust us with their journeys — from weekend getaways to
              multi‑country honeymoons. We are proud members of IATA, TAAI and hold ISO 9001:2015 certification,
              reinforcing our commitment to quality and reliability.
            </p>
          </div>

          <div className="relative rounded-3xl overflow-hidden shadow-xl bg-navy-50">
            <img
              src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=1200&auto=format&fit=crop"
              alt="Ambica Travels team assisting travelers"
              className="w-full h-[420px] object-cover"
            />
          </div>
        </div>


      </div>
    </section>
  );
}