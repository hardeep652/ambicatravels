"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Bus, Car, Package, type LucideIcon } from "lucide-react";
import { SERVICES } from "@/lib/data";

// Matches the string values used in your existing SERVICES icon field.
// Extend this if you add services with new icon keys later.
const SERVICE_ICON_MAP: Record<string, LucideIcon> = {
  car: Car,
  bus: Bus,
  package: Package,
};

export function ServicesPreview() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="container-px mx-auto max-w-7xl">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-emerald-500">
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
                  className="group flex h-full flex-col rounded-2xl border border-navy-100 bg-white p-7 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-navy-900/10 hover:shadow-[0_16px_40px_rgba(15,23,42,0.10)]"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-900 transition-transform duration-300 group-hover:scale-105">
                    <Icon className="h-5 w-5 text-emerald-400" strokeWidth={2} />
                  </span>
                  <h3 className="mt-5 font-heading text-lg font-semibold text-navy-900">
                    {service.title}
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
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}