"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Bus, Car, Check, Package } from "lucide-react";
import { SERVICES } from "@/lib/data";
import { SectionHeading } from "@/components/ui/section-heading";
import { staggerItem, StaggerGroup } from "@/components/ui/reveal";
import type { ServiceItem } from "@/types";

const ICONS: Record<ServiceItem["icon"], typeof Car> = {
  car: Car,
  bus: Bus,
  package: Package,
};

export function Services() {
  return (
    <section id="services" className="section-py bg-cloud">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="What We Offer"
          title="Everything you need to move, comfortably"
          description="From a single airport transfer to a two-week itinerary across three countries — one team handles it all."
        />

        <StaggerGroup className="mt-14 grid gap-6 md:grid-cols-3">
          {SERVICES.map((service) => {
            const Icon = ICONS[service.icon];
            return (
              <motion.article
                key={service.id}
                variants={staggerItem}
                className="group relative flex flex-col overflow-hidden rounded-3xl bg-white shadow-[0_1px_2px_rgba(15,23,42,0.06)] ring-1 ring-navy-900/5 transition-all duration-500 hover:-translate-y-2 hover:shadow-premium"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-navy-950/10 to-transparent" />
                  <div className="absolute left-5 top-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/95 shadow-md backdrop-blur">
                    <Icon className="h-6 w-6 text-sky-600" strokeWidth={2} />
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-7">
                  <h3 className="font-heading text-xl font-semibold text-navy-900">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-navy-500">
                    {service.description}
                  </p>

                  <ul className="mt-5 space-y-2.5">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2.5 text-sm text-navy-500"
                      >
                        <Check className="h-4 w-4 shrink-0 text-emerald-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="#contact"
                    className="mt-7 inline-flex items-center gap-1.5 text-sm font-semibold text-sky-600 transition-colors hover:text-sky-700"
                  >
                    Enquire about {service.title}
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              </motion.article>
            );
          })}
        </StaggerGroup>
      </div>
    </section>
  );
}
