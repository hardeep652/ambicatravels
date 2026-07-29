"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/data";
import { SectionHeading } from "@/components/ui/section-heading";
import { StarRating } from "@/components/ui/star-rating";
import { staggerItem, StaggerGroup } from "@/components/ui/reveal";

export function Testimonials() {
  return (
    <section id="testimonials" className="section-py bg-white">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Traveler Stories"
          title="What families and first-timers tell us"
          description="Real trips, real feedback — shared with permission from travelers across Gujarat."
        />

        <StaggerGroup className="mt-14 grid gap-6 md:grid-cols-2">
          {TESTIMONIALS.map((t) => (
            <motion.figure
              key={t.id}
              variants={staggerItem}
              className="relative flex flex-col rounded-3xl bg-cloud p-8 ring-1 ring-navy-900/5"
            >
              <Quote className="h-8 w-8 text-sky-200" strokeWidth={1.5} />
              <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-navy-500">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              <figcaption className="mt-6 flex items-center gap-4 border-t border-navy-100 pt-5">
                <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full ring-2 ring-white">
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    fill
                    sizes="48px"
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <p className="font-heading text-sm font-semibold text-navy-900">
                    {t.name}
                  </p>
                  <p className="text-xs text-navy-400">
                    {t.location} · {t.trip}
                  </p>
                </div>
                <StarRating rating={t.rating} />
              </figcaption>
            </motion.figure>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
