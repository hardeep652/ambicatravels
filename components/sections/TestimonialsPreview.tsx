"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Quote, Star } from "lucide-react";
import { TESTIMONIALS } from "@/lib/data";

export function TestimonialsPreview() {
  const featured = TESTIMONIALS.slice(0, 3);

  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="container-px mx-auto max-w-7xl">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-emerald-500">
              What travelers say
            </p>
            <h2 className="mt-3 font-heading text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl">
              Trusted by 25,000+ happy travelers
            </h2>
          </div>
          <Link
            href="/testimonials"
            className="group inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-navy-900 transition-colors hover:text-sky-600"
          >
            Read all reviews
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {featured.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="flex h-full flex-col rounded-2xl border border-navy-100 bg-white p-7 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(15,23,42,0.10)]"
            >
              <Quote className="h-7 w-7 text-emerald-400/70" strokeWidth={1.5} />
              <p className="mt-4 flex-1 text-[15px] leading-relaxed text-navy-600">
                "{t.quote}"
              </p>

              <div className="mt-6 flex items-center justify-between border-t border-navy-100 pt-5">
                <div className="flex items-center gap-3">
                  <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full bg-navy-100">
                    <Image src={t.avatar} alt={t.name} fill className="object-cover" />
                  </div>
                  <div>
                    <p className="font-heading text-sm font-semibold text-navy-900">{t.name}</p>
                    <p className="text-xs text-navy-400">
                      {t.location} · {t.trip}
                    </p>
                  </div>
                </div>
                <div className="flex shrink-0 items-center gap-1 text-sm font-semibold text-navy-900">
                  <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                  {t.rating}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}