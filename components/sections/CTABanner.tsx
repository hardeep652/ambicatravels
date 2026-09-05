"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Phone } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { CONTACT } from "@/lib/data";

export function CTABanner() {
  return (
    <section className="relative overflow-hidden bg-navy-900 py-20 md:py-24">
      <div className="absolute inset-0 opacity-25">
        <Image
          src="https://images.unsplash.com/photo-1502920514313-52581002a659?q=80&w=2000&auto=format&fit=crop"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-900/95 to-navy-950/80" />

      <div className="container-px relative mx-auto flex max-w-7xl flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
        <Reveal className="max-w-xl">
          <h2 className="font-heading text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
            Ready to plan your next trip?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/70 md:text-lg">
            Tell us where you want to go — we&apos;ll reply within one working
            day with a tailored itinerary and clear pricing.
          </p>
          <p className="mt-4 text-base font-semibold text-white/90">
            Or call us directly:{" "}
            <a
              href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
              className="text-emerald-300 underline underline-offset-4 hover:text-emerald-200"
            >
              {CONTACT.phone}
            </a>
          </p>
        </Reveal>

        <Reveal delay={0.1} className="flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
          <Button asChild size="lg" variant="emerald">
            <Link href="/contact">
              Get a Free Quote
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <a href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}>
              <Phone className="h-4 w-4" />
              {CONTACT.phone}
            </a>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
