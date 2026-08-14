"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Bus,
  Car,
  Check,
  ChevronRight,
  Headphones,
  Package,
  type LucideIcon,
} from "lucide-react";
import { SERVICES } from "@/lib/data";
import { Reveal, staggerItem, StaggerGroup } from "@/components/ui/reveal";
import type { ServiceItem } from "@/types";

const ICONS: Record<ServiceItem["icon"], LucideIcon> = {
  car: Car,
  bus: Bus,
  package: Package,
};

const SERVICE_META: Record<
  ServiceItem["id"],
  {
    scope: string;
    bestFor: string;
    included: string;
    timeline: string;
  }
> = {
  "car-rental": {
    scope: "Point-to-point",
    bestFor: "Airport runs, client visits, weekend drives out of the city",
    included: "Sedan to SUV, self-drive or with a driver",
    timeline: "Confirmed same day for most routes",
  },
  "bus-rental": {
    scope: "Group movement",
    bestFor: "Weddings, pilgrimages, school trips, company outings",
    included: "Mini-coach to full-size bus, one reporting point",
    timeline: "Confirmed within 48 hours for most group sizes",
  },
  "holiday-packages": {
    scope: "Fully planned",
    bestFor: "Family holidays, honeymoons, first trips abroad",
    included: "Flights, stay, transfers, and a day-by-day plan",
    timeline: "First itinerary draft within a few days",
  },
};

const BOOKING_STEPS = [
  {
    title: "Tell us the trip shape",
    description: "Dates, headcount, route, comfort level, and any non-negotiables.",
  },
  {
    title: "We shortlist the right fit",
    description: "Vehicles or itinerary options built around pace, budget, and logistics.",
  },
  {
    title: "Travel with live support",
    description: "One team stays reachable if pickup timing or the plan changes mid-trip.",
  },
];

export function Services() {
  return (
    <section id="services" className="section-py bg-white">
      <div className="container-px mx-auto max-w-7xl">
        {/* Header */}
        <div className="max-w-2xl">
          <Reveal>
            <span className="eyebrow text-sky-600">
              <span className="h-1.5 w-1.5 rounded-full bg-sky-600" />
              Services
            </span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-4 font-heading text-4xl font-semibold leading-[1.08] tracking-tight text-navy-900 sm:text-5xl">
              Three ways to move, matched to how far you&apos;re actually going.
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-5 text-base leading-7 text-navy-500 sm:text-lg">
              A single ride needs almost no planning. A holiday needs a lot. We treat
              them differently instead of selling every trip the same way.
            </p>
          </Reveal>
        </div>

        {/* Route line — signature element */}
        <div className="mt-16 hidden sm:block">
          <div className="relative h-3">
            <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-navy-200" />
            <motion.div
              className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-sky-600"
              style={{ transformOrigin: "left" }}
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1.1, ease: [0.65, 0, 0.35, 1] }}
            />
            <div className="relative grid grid-cols-3">
              {SERVICES.map((service, index) => (
                <motion.div
                  key={service.id}
                  className="flex justify-start"
                  style={{
                    justifyContent:
                      index === 0 ? "flex-start" : index === SERVICES.length - 1 ? "flex-end" : "center",
                  }}
                  initial={{ opacity: 0, scale: 0.4 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.25 + index * 0.3, duration: 0.4 }}
                >
                  <span className="h-2.5 w-2.5 rounded-full bg-sky-600 ring-[5px] ring-white" />
                </motion.div>
              ))}
            </div>
          </div>
          <div className="mt-3 grid grid-cols-3">
            {SERVICES.map((service, index) => (
              <p
                key={service.id}
                className={`text-xs font-semibold uppercase tracking-[0.16em] text-navy-400 ${
                  index === 0 ? "text-left" : index === SERVICES.length - 1 ? "text-right" : "text-center"
                }`}
              >
                {SERVICE_META[service.id].scope}
              </p>
            ))}
          </div>
        </div>

        {/* Service rows */}
        <StaggerGroup className="mt-16 border-t border-navy-100 sm:mt-10">
          {SERVICES.map((service) => {
            const Icon = ICONS[service.icon];
            const meta = SERVICE_META[service.id];

            return (
              <motion.div
                key={service.id}
                variants={staggerItem}
                className="grid gap-8 border-b border-navy-100 py-10 lg:grid-cols-[1fr_260px_140px] lg:items-start lg:gap-10"
              >
                <div className="order-2 lg:order-1">
                  <div className="flex items-center gap-2.5">
                    <Icon className="h-5 w-5 text-sky-600" strokeWidth={2} />
                    <h3 className="font-heading text-2xl font-semibold tracking-tight text-navy-900">
                      {service.title}
                    </h3>
                  </div>
                  <p className="mt-3 max-w-xl text-base leading-7 text-navy-500">
                    {service.description}
                  </p>
                  <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-1.5 text-sm text-navy-500">
                        <Check className="h-3.5 w-3.5 shrink-0 text-emerald-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={
                      service.id === "car-rental"
                        ? "/car-rental"
                        : service.id === "bus-rental"
                          ? "/bus-rental"
                          : "/contact"
                    }
                    className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-sky-600 transition-colors hover:text-sky-700"
                  >
                    Enquire about {service.title}
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>

                <dl className="order-3 grid grid-cols-2 gap-x-6 gap-y-5 lg:order-2 lg:grid-cols-1 lg:border-l lg:border-navy-100 lg:pl-8">
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-navy-400">
                      Best for
                    </dt>
                    <dd className="mt-1.5 text-sm leading-6 text-navy-600">{meta.bestFor}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-navy-400">
                      What&apos;s handled
                    </dt>
                    <dd className="mt-1.5 text-sm leading-6 text-navy-600">{meta.included}</dd>
                  </div>
                  <div className="col-span-2 lg:col-span-1">
                    <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-navy-400">
                      Timeline
                    </dt>
                    <dd className="mt-1.5 text-sm leading-6 text-navy-600">{meta.timeline}</dd>
                  </div>
                </dl>

                <div className="relative order-1 h-44 overflow-hidden rounded-2xl ring-1 ring-navy-100 lg:order-3 lg:h-full lg:min-h-[180px]">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 140px"
                    className="object-cover"
                  />
                </div>
              </motion.div>
            );
          })}
        </StaggerGroup>

        {/* How booking works */}
        <Reveal className="mt-14 rounded-2xl border border-navy-100 bg-navy-50 p-6 sm:p-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-4">
            {BOOKING_STEPS.map((step, index) => (
              <div key={step.title} className="flex flex-1 items-start gap-3">
                <span className="mt-0.5 font-heading text-lg font-semibold text-sky-600">
                  {index + 1}
                </span>
                <div>
                  <p className="text-sm font-semibold text-navy-900">{step.title}</p>
                  <p className="mt-1 text-sm leading-6 text-navy-500">{step.description}</p>
                </div>
                {index < BOOKING_STEPS.length - 1 && (
                  <ChevronRight className="mt-1 hidden h-4 w-4 shrink-0 text-navy-300 sm:block" />
                )}
              </div>
            ))}
          </div>
        </Reveal>

        {/* Bottom line */}
        <div className="mt-8 flex flex-col gap-4 border-t border-navy-100 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="flex items-center gap-2 text-sm text-navy-500">
            <Headphones className="h-4 w-4 text-sky-600" />
            One travel desk handles quotes, changes, and support once you&apos;re on the road.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy-900 transition-colors hover:text-sky-600"
          >
            Not sure which fits? Talk to us
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}