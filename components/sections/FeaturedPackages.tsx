"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { PlaneTakeoff } from "lucide-react";
import { PACKAGES } from "@/lib/data";
import { SectionHeading } from "@/components/ui/section-heading";
import { StarRating } from "@/components/ui/star-rating";
import { Button } from "@/components/ui/button";
import { staggerItem, StaggerGroup } from "@/components/ui/reveal";

export function FeaturedPackages() {
  return (
    <section id="packages" className="section-py bg-cloud">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Featured Packages"
          title="Six itineraries our travelers keep coming back for"
          description="Every package is a starting point — flights, stay categories and pacing are tailored once you inquire."
        />

        <StaggerGroup className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {PACKAGES.map((pkg) => (
            <motion.article
              key={pkg.id}
              variants={staggerItem}
              className="group flex flex-col rounded-[1.75rem] bg-white shadow-[0_1px_2px_rgba(15,23,42,0.06)] ring-1 ring-navy-900/5 transition-all duration-500 hover:-translate-y-2 hover:shadow-premium"
            >
              {/* Photo */}
              <div className="relative h-52 overflow-hidden rounded-t-[1.75rem]">
                <Image
                  src={pkg.image}
                  alt={`${pkg.destination}, ${pkg.country}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 via-transparent to-transparent" />
                <div className="absolute left-4 top-4 flex flex-wrap gap-1.5">
                  {pkg.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold text-navy-900 backdrop-blur"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Boarding-pass stub */}
              <div className="relative flex-1 rounded-b-[1.75rem] px-6 pb-6 pt-5">
                {/* perforation */}
                <div
                  aria-hidden
                  className="absolute -top-3 left-0 right-0 flex items-center px-6"
                >
                  <div className="h-3 w-3 -translate-x-1/2 rounded-full bg-cloud" />
                  <div className="mx-1 flex-1 border-t-2 border-dashed border-navy-100" />
                  <div className="h-3 w-3 translate-x-1/2 rounded-full bg-cloud" />
                </div>

                <div className="flex items-start justify-between">
                  <div>
                    <p className="font-heading text-lg font-semibold text-navy-900">
                      {pkg.destination}
                    </p>
                    <p className="text-sm text-navy-500">{pkg.country}</p>
                  </div>
                  <div className="flex items-center gap-2 text-right">
                    <div className="text-right">
                      <p className="font-heading text-xl font-bold tracking-wider text-navy-900">
                        {pkg.code}
                      </p>
                      <p className="text-[10px] uppercase tracking-widest text-navy-400">
                        Destination
                      </p>
                    </div>
                    <PlaneTakeoff className="h-5 w-5 rotate-45 text-sky-500" />
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between border-t border-navy-100 pt-4">
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-navy-400">
                      Duration
                    </p>
                    <p className="text-sm font-semibold text-navy-900">
                      {pkg.duration}
                    </p>
                  </div>
                  <StarRating rating={pkg.rating} />
                </div>

                <Button asChild variant="outlineDark" className="mt-5 w-full">
                  <Link href="/contact">Inquire Now</Link>
                </Button>
              </div>
            </motion.article>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
