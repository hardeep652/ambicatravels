"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { GALLERY } from "@/lib/data";
import { cn } from "@/lib/utils";

export function GalleryPreview() {
  const featured = GALLERY.slice(0, 6);

  return (
    <section className="bg-navy-50 py-20 sm:py-28">
      <div className="container-px mx-auto max-w-7xl">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-emerald-500">
              From our travelers
            </p>
            <h2 className="mt-3 font-heading text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl">
              Moments from real trips we've planned
            </h2>
          </div>
          <Link
            href="/gallery"
            className="group inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-navy-900 transition-colors hover:text-sky-600"
          >
            View full gallery
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
          {featured.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
              className={cn(
                item.span === "tall" && "row-span-2",
                item.span === "wide" && "col-span-2"
              )}
            >
              <Link
                href="/gallery"
                className="group relative block h-full min-h-[140px] w-full overflow-hidden rounded-xl bg-navy-100"
              >
                <Image
                  src={item.image}
                  alt={`${item.title}, ${item.location}`}
                  fill
                  sizes="(min-width: 768px) 25vw, 50vw"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-navy-900/60 via-navy-900/0 to-navy-900/0 transition-opacity duration-300 group-hover:from-navy-900/70" />
                <span className="absolute bottom-3 left-3 right-3 text-xs font-medium text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  {item.title}
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}