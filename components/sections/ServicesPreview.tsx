"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Bus, Car, Package, type LucideIcon } from "lucide-react";
import { SERVICES } from "@/lib/data";

// Matches the string values used in your existing SERVICES icon field.
const SERVICE_ICON_MAP: Record<string, LucideIcon> = {
  car: Car,
  bus: Bus,
  package: Package,
};

// Drop a real photo at each of these paths in /public. Suggested crop is a
// wide, low-detail shot (road at dusk, a coach on a highway, packed
// luggage/an airport) since the bottom third gets covered by a gradient +
// the card content — busy detail there will fight the text.
// If a path is missing, <img> just fails silently to the navy fallback below.
// Using Unsplash source for high-quality travel/transport images.
const SERVICE_IMAGE_MAP: Record<string, string> = {
  car: "https://images.unsplash.com/photo-1566073178545-4d257d1eee5f?q=80&w=800&auto=format&fit=crop",
  bus: "https://images.unsplash.com/photo-1581090660312-1c436a4b85e1?q=80&w=800&auto=format&fit=crop",
  package: "https://images.unsplash.com/photo-1594753170506-6b11c38cb189?q=80&w=800&auto=format&fit=crop",
};

export function ServicesPreview() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="container-px mx-auto max-w-7xl">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-xl">
            <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-emerald-500">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              What we do
            </p>
            <h2 className="mt-3 font-heading text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl">
              Everything your trip needs, under one roof
            </h2>
          </div>
          <Link
            href="/services"
            className="group inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-navy-900 transition-colors hover:text-sky-600"
          >
            View all services
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {SERVICES.map((service, i) => {
            const Icon = SERVICE_ICON_MAP[service.icon] ?? Package;
            const image = SERVICE_IMAGE_MAP[service.icon];
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              >
                <Link
                  href={`/services#${service.id}`}
                  className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-navy-100 bg-white transition-all duration-300 ease-out hover:-translate-y-1 hover:border-emerald-500/30 hover:shadow-[0_16px_40px_rgba(15,23,42,0.14)]"
                >
                  {/* Photo header */}
                  <div className="relative h-36 w-full overflow-hidden bg-navy-900">
                    {image && (
                      <Image
                        src={image}
                        alt=""
                        fill
                        sizes="(min-width: 640px) 33vw, 100vw"
                        className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                      />
                    )}
                    {/* Fade the photo into the white card body */}
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-white/10 to-navy-900/40" />
                    <div className="absolute inset-0 bg-navy-900/20" />
                  </div>

                  {/* Pin badge, dropped where photo meets content */}
                  <span className="relative -mt-8 ml-7 flex h-14 w-14 shrink-0 origin-bottom -rotate-45 items-center justify-center rounded-[50%_50%_50%_0] bg-navy-900 shadow-[0_10px_20px_rgba(15,23,42,0.25)] transition-transform duration-300 ease-out group-hover:-translate-y-1">
                    <Icon className="h-5 w-5 rotate-45 text-emerald-400" strokeWidth={2} />
                  </span>

                  <div className="flex flex-1 flex-col px-7 pb-7">
                    <h3 className="mt-4 flex items-center gap-1.5 font-heading text-lg font-semibold text-navy-900">
                      {service.title}
                      <ArrowUpRight className="h-4 w-4 -translate-x-1 text-emerald-500 opacity-0 transition-all duration-300 ease-out group-hover:translate-x-0 group-hover:opacity-100" />
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-navy-500">
                      {service.description}
                    </p>
                    <ul className="mt-4 space-y-1.5 border-t border-navy-100 pt-4">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-xs text-navy-500">
                          <span className="h-1 w-1 rounded-full bg-emerald-500" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}