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
              multi‑country honeymoons. We are proud members of IATA, TAAI and hold ISO 9001:2015 certification,
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

        {/* Founders */}
        <div className="mt-20">
          <SectionHeading
            eyebrow="Leadership"
            title="Meet the Founders"
            description="The people behind Ambica Travels' journey from a single desk to a full-service travel partner."
          />

          <div className="mt-12 grid gap-8 sm:grid-cols-2 max-w-4xl mx-auto">
            {/* Founder */}
            <div className="rounded-3xl overflow-hidden shadow-xl bg-navy-50 text-center">
              <div className="relative w-full h-[320px] bg-navy-100 flex items-center justify-center">
                {/* Replace src with the founder's photo */}
                <img
                  src="https://res.cloudinary.com/ozr2ckrb/image/upload/v1786861296/ChatGPT_Image_Aug_16_2026_11_51_20_AM.png"
                  alt="Founder of Ambica Travels"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-navy-900">
                  {/* Founder name */}
                  Founder Name
                </h3>
                <p className="mt-1 text-sm font-medium text-navy-500">
                  Founder & CEO
                </p>
                <p className="mt-3 text-navy-600 leading-relaxed">
                  {/* Founder bio placeholder */}
                  A short bio about the founder — their background, what led them
                  to start Ambica Travels, and their vision for the company.
                </p>
              </div>
            </div>

            {/* Co-founder */}
            <div className="rounded-3xl overflow-hidden shadow-xl bg-navy-50 text-center">
              <div className="relative w-full h-[320px] bg-navy-100 flex items-center justify-center">
                {/* Replace src with the co-founder's photo */}
                <img
                  src="https://res.cloudinary.com/ozr2ckrb/image/upload/v1786705303/ChatGPT_Image_Aug_14_2026_04_29_21_PM.png"
                  alt="Co-founder of Ambica Travels"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-navy-900">
                  {/* Co-founder name */}
                  Co-Founder Name
                </h3>
                <p className="mt-1 text-sm font-medium text-navy-500">
                  Co-Founder & Director
                </p>
                <p className="mt-3 text-navy-600 leading-relaxed">
                  {/* Co-founder bio placeholder */}
                  A short bio about the co-founder — their role in the business,
                  areas of expertise, and what they bring to the team.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}