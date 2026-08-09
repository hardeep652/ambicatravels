"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Headset, Map, Shield, Wallet } from "lucide-react";
import { WHY_CHOOSE_US } from "@/lib/data";
import { Reveal, staggerItem, StaggerGroup } from "@/components/ui/reveal";
import type { WhyChooseItem } from "@/types";

const ICONS: Record<WhyChooseItem["icon"], typeof Shield> = {
  shield: Shield,
  headset: Headset,
  wallet: Wallet,
  map: Map,
};

export function WhyChooseUs() {
  return (
    <section className="section-py overflow-hidden bg-white">
      <div className="container-px mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <div>
          <span className="eyebrow">
            <span className="h-1.5 w-1.5 rounded-full bg-sky-500" />
            Why Choose Ambica Travels
          </span>
          <Reveal delay={0.08}>
            <h2 className="mt-4 max-w-lg text-3xl font-semibold leading-[1.15] tracking-tight text-navy-900 sm:text-4xl md:text-[2.75rem]">
              Planning a trip shouldn&apos;t feel like a second job
            </h2>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-navy-500 md:text-lg">
              We&apos;ve spent fifteen years learning exactly where trips go
              wrong — and building the checks that keep yours on track.
            </p>
          </Reveal>

          <StaggerGroup className="mt-10 grid gap-6 sm:grid-cols-2">
            {WHY_CHOOSE_US.map((item) => {
              const Icon = ICONS[item.icon];
              return (
                <motion.div key={item.id} variants={staggerItem} className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-sky-50">
                    <Icon className="h-5 w-5 text-sky-600" strokeWidth={2} />
                  </div>
                  <div>
                    <h3 className="font-heading text-base font-semibold text-navy-900">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-navy-500">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </StaggerGroup>
        </div>

        <Reveal direction="left" className="relative">
          <div className="relative aspect-[4/5] w-full max-w-md overflow-hidden rounded-[2rem] shadow-premium lg:mx-auto">
            <Image
              src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=1400&auto=format&fit=crop"
              alt="Traveler admiring a mountain lake at sunrise"
              fill
              sizes="(max-width: 1024px) 100vw, 480px"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-4 hidden w-56 rounded-2xl bg-white p-5 shadow-premium sm:block lg:-left-10">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-emerald-50">
                <Shield className="h-5 w-5 text-emerald-500" />
              </div>
              <div>
                <p className="font-heading text-lg font-semibold text-navy-900">4.9/5</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
