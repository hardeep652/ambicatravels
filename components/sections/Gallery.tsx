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
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Travel Gallery"
          light
          title="Moments from trips we've planned"
          description="A glimpse of the destinations our travelers have explored with Ambica Travels."
        />

        <StaggerGroup className="mt-14 grid auto-rows-[220px] grid-cols-2 gap-4 md:grid-cols-4">
          {GALLERY.map((item) => (
            <motion.div
              key={item.id}
              variants={staggerItem}
              className={cn(
                "group relative overflow-hidden rounded-2xl",
                item.span === "wide" && "col-span-2",
                item.span === "tall" && "row-span-2"
              )}
            >
              <Image
                src={item.image}
                alt={`${item.title}, ${item.location}`}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-navy-950/10 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-95" />
              <div className="absolute inset-x-0 bottom-0 translate-y-2 p-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <p className="font-heading text-sm font-semibold text-white">
                  {item.title}
                </p>
                <p className="mt-0.5 flex items-center gap-1 text-xs text-white/70">
                  <MapPin className="h-3 w-3 text-emerald-400" />
                  {item.location}
                </p>
              </div>
            </motion.div>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
