"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  Check,
  ChevronDown,
  ChevronRight,
  PlaneTakeoff,
  X,
} from "lucide-react";
import { PACKAGES } from "@/lib/data";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CTABanner } from "@/components/sections/CTABanner";
import { StarRating } from "@/components/ui/star-rating";
import { Button } from "@/components/ui/button";

/**
 * These fields aren't on PACKAGES yet. If/when real content is added to
 * lib/data (gallery, description, highlights, itinerary, inclusions,
 * exclusions), this page uses it automatically — see the `has*` checks
 * below. Until then, sensible fallbacks are generated from the fields
 * that already exist (duration, tags, destination).
 */
type PackageExtras = {
  gallery?: string[];
  description?: string;
  highlights?: string[];
  itinerary?: { title: string; description: string }[];
  inclusions?: string[];
  exclusions?: string[];
};

const FALLBACK_INCLUSIONS = [
  "Return flights or transport as per the itinerary",
  "Stay in the agreed hotel category",
  "Daily breakfast",
  "Airport and intercity transfers",
  "Sightseeing listed in the day plan",
  "Applicable taxes",
];

const FALLBACK_EXCLUSIONS = [
  "Visa fees, where applicable",
  "Travel insurance",
  "Meals not mentioned in the plan",
  "Personal expenses and tips",
  "Optional activities and upgrades",
];

function parseDayCount(duration: string): number {
  const dayMatch = duration.match(/(\d+)\s*D/i);
  if (dayMatch) return Number(dayMatch[1]);
  const nightMatch = duration.match(/(\d+)\s*N/i);
  if (nightMatch) return Number(nightMatch[1]) + 1;
  const numeric = duration.match(/\d+/);
  return numeric ? Number(numeric[0]) : 5;
}

function buildItinerary(destination: string, tags: string[], duration: string) {
  const days = parseDayCount(duration);
  const flavor = tags.find((tag) =>
    ["beach", "adventure", "culture", "wildlife", "honeymoon"].some((k) =>
      tag.toLowerCase().includes(k)
    )
  );

  const middleDescription = flavor
    ? `A day built around the ${flavor.toLowerCase()} side of ${destination}, with free time to explore at your own pace.`
    : `Guided sightseeing around ${destination}, with free time built into the afternoon.`;

  return Array.from({ length: Math.max(days, 2) }, (_, index) => {
    const day = index + 1;
    if (day === 1) {
      return {
        title: `Arrive in ${destination}`,
        description:
          "Airport pickup and transfer to your stay. Rest of the day is kept free to settle in.",
      };
    }
    if (day === days) {
      return {
        title: "Departure",
        description: "Check out and transfer to the airport for your return journey.",
      };
    }
    return { title: `Explore ${destination}`, description: middleDescription };
  });
}

export default function PackageDetailPage() {
  const params = useParams<{ id: string }>();
  const pkg = PACKAGES.find((item) => item.id === params.id);

  if (!pkg) {
    notFound();
  }

  const extras = pkg as typeof pkg & PackageExtras;
  const gallery = extras.gallery?.length ? extras.gallery : [pkg.image];
  const description =
    extras.description ??
    `A ${pkg.duration} trip to ${pkg.destination}, ${pkg.country} — paced and put together once you tell us what the trip is for.`;
  const highlights = extras.highlights?.length ? extras.highlights : pkg.tags;
  const itinerary = extras.itinerary?.length
    ? extras.itinerary
    : buildItinerary(pkg.destination, pkg.tags, pkg.duration);
  const inclusions = extras.inclusions?.length ? extras.inclusions : FALLBACK_INCLUSIONS;
  const exclusions = extras.exclusions?.length ? extras.exclusions : FALLBACK_EXCLUSIONS;

  const similarPackages = PACKAGES.filter((item) => item.id !== pkg.id).slice(0, 3);

  const enquiryHref = `/contact?package=${pkg.id}&destination=${encodeURIComponent(
    pkg.destination
  )}`;

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative h-[70vh] min-h-[440px] w-full overflow-hidden">
          <Image
            src={gallery[0]}
            alt={`${pkg.destination}, ${pkg.country}`}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-navy-950/20 to-navy-950/10" />

          <div className="container-px absolute inset-x-0 top-6 mx-auto max-w-7xl">
            <nav className="flex items-center gap-1.5 text-xs font-medium text-white/70">
              <Link href="/" className="hover:text-white">
                Home
              </Link>
              <ChevronRight className="h-3.5 w-3.5" />
              <Link href="/packages" className="hover:text-white">
                Packages
              </Link>
              <ChevronRight className="h-3.5 w-3.5" />
              <span className="text-white">{pkg.destination}</span>
            </nav>
          </div>

          <div className="container-px absolute inset-x-0 bottom-0 mx-auto max-w-7xl pb-8">
            <div className="flex flex-wrap gap-1.5">
              {pkg.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold text-navy-900 backdrop-blur"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="mt-4 font-heading text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              {pkg.destination}
            </h1>
            <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-white/80">
              <span>{pkg.country}</span>
              <span className="h-1 w-1 rounded-full bg-white/40" />
              <span>{pkg.duration}</span>
              <span className="h-1 w-1 rounded-full bg-white/40" />
              <StarRating rating={pkg.rating} />
              <span className="h-1 w-1 rounded-full bg-white/40" />
              <span className="inline-flex items-center gap-1.5 font-heading font-bold tracking-wider">
                <PlaneTakeoff className="h-4 w-4 rotate-45 text-sky-300" />
                {pkg.code}
              </span>
            </div>
          </div>
        </section>

        {/* Body */}
        <section className="section-py bg-white">
          <div className="container-px mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_320px] lg:items-start">
            <div className="min-w-0">
              {/* Overview */}
              <div>
                <h2 className="font-heading text-2xl font-semibold text-navy-900">
                  Overview
                </h2>
                <p className="mt-3 max-w-2xl text-base leading-7 text-navy-500">
                  {description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {highlights.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-navy-50 px-3 py-1.5 text-sm text-navy-600"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Itinerary */}
              <div className="mt-12 border-t border-navy-100 pt-10">
                <h2 className="font-heading text-2xl font-semibold text-navy-900">
                  Day by day
                </h2>
                <p className="mt-2 text-sm text-navy-500">
                  A starting shape for the trip — every day can move once you tell us
                  what matters most.
                </p>
                <div className="mt-6 divide-y divide-navy-100 rounded-2xl border border-navy-100">
                  {itinerary.map((day, index) => (
                    <ItineraryRow key={day.title + index} index={index} day={day} />
                  ))}
                </div>
              </div>

              {/* Inclusions / Exclusions */}
              <div className="mt-12 grid gap-8 border-t border-navy-100 pt-10 sm:grid-cols-2">
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-navy-400">
                    Typically included
                  </h3>
                  <ul className="mt-4 space-y-2.5">
                    {inclusions.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-navy-600">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-navy-400">
                    Typically not included
                  </h3>
                  <ul className="mt-4 space-y-2.5">
                    {exclusions.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-navy-600">
                        <X className="mt-0.5 h-4 w-4 shrink-0 text-navy-300" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="text-xs leading-5 text-navy-400 sm:col-span-2">
                  Exact inclusions are confirmed once you enquire — they vary with season,
                  group size, and stay category.
                </p>
              </div>
            </div>

            {/* Sticky enquiry card */}
            <aside className="lg:sticky lg:top-24">
              <div className="rounded-2xl border border-navy-100 bg-navy-50 p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-navy-400">
                  This package
                </p>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-sm text-navy-500">Duration</span>
                  <span className="text-sm font-semibold text-navy-900">{pkg.duration}</span>
                </div>
                <div className="mt-2 flex items-center justify-between">
                  <span className="text-sm text-navy-500">Reference</span>
                  <span className="font-heading text-sm font-bold tracking-wider text-navy-900">
                    {pkg.code}
                  </span>
                </div>
                <div className="mt-2 flex items-center justify-between">
                  <span className="text-sm text-navy-500">Rating</span>
                  <StarRating rating={pkg.rating} />
                </div>

                <Button asChild className="mt-6 w-full">
                  <Link href={enquiryHref}>
                    Enquire about this trip
                    <ArrowUpRight className="ml-1.5 h-4 w-4" />
                  </Link>
                </Button>
                <p className="mt-3 text-center text-xs text-navy-400">
                  Priced once we know your dates and group size.
                </p>
              </div>
            </aside>
          </div>

          {/* Similar packages */}
          {similarPackages.length > 0 && (
            <div className="container-px mx-auto mt-16 max-w-7xl border-t border-navy-100 pt-12">
              <h2 className="font-heading text-2xl font-semibold text-navy-900">
                Other trips to look at
              </h2>
              <div className="mt-6 grid gap-6 sm:grid-cols-3">
                {similarPackages.map((item) => (
                  <Link
                    key={item.id}
                    href={`/packages/${item.id}`}
                    className="group overflow-hidden rounded-2xl border border-navy-100 transition-shadow hover:shadow-premium"
                  >
                    <div className="relative h-36 overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.destination}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    <div className="p-4">
                      <p className="font-heading text-base font-semibold text-navy-900">
                        {item.destination}
                      </p>
                      <p className="text-sm text-navy-500">{item.duration}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </section>

        <CTABanner />
      </main>
      <Footer />

      {/* Mobile sticky enquiry bar */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-navy-100 bg-white p-4 shadow-[0_-4px_20px_rgba(15,23,42,0.08)] lg:hidden">
        <Button asChild className="w-full">
          <Link href={enquiryHref}>
            Enquire about {pkg.destination}
            <ArrowUpRight className="ml-1.5 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </>
  );
}

function ItineraryRow({
  index,
  day,
}: {
  index: number;
  day: { title: string; description: string };
}) {
  const [open, setOpen] = useState(index === 0);

  return (
    <div>
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
      >
        <span className="flex items-center gap-4">
          <span className="font-heading text-sm font-semibold text-sky-600">
            Day {index + 1}
          </span>
          <span className="text-sm font-semibold text-navy-900">{day.title}</span>
        </span>
        <ChevronDown
          className={`h-4 w-4 shrink-0 text-navy-400 transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="px-5 pb-4 text-sm leading-6 text-navy-500">
              {day.description}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}