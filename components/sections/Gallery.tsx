"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { GALLERY } from "@/lib/data";
import { SectionHeading } from "@/components/ui/section-heading";
import { staggerItem, StaggerGroup } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

export function Gallery() {
  return (
    <section id="gallery" className="section-py bg-navy-900">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Travel Gallery"
          light
          title="Moments from trips we've planned"
          description="A glimpse of the destinations our travelers have explored with Ambica Travels."
        />

        <StaggerGroup className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4">
          {GALLERY.map((item) => (
            <motion.div
              key={item.id}
              variants={staggerItem}
              className={cn(
                "group relative overflow-hidden rounded-xl ring-1 ring-white/10 aspect-square",
                item.span === "wide" && "col-span-2 aspect-[2/1]"
              )}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                quality={90}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 66vw, (max-width: 1280px) 50vw, 40vw"
                className="object-cover w-full h-full transition-transform duration-500 ease-out group-hover:scale-110"
              />

              {/* base scrim — always a bit visible for text contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-navy-950/10 to-transparent transition-opacity duration-300 group-hover:from-navy-950/95" />

              {/* caption */}
              <div className="absolute inset-x-0 bottom-0 p-3 translate-y-1 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                {item.location && (
                  <div className="mb-0.5 flex items-center gap-1 text-[10px] font-medium text-gold-400">
                    <MapPin className="h-2.5 w-2.5" />
                    <span>{item.location}</span>
                  </div>
                )}
                <p className="font-heading text-xs sm:text-sm font-semibold text-white leading-snug line-clamp-1">
                  {item.title}
                </p>
              </div>
            </motion.div>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}