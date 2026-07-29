"use client";

import { STATS } from "@/lib/data";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { StaggerGroup, staggerItem } from "@/components/ui/reveal";
import { motion } from "framer-motion";

export function Stats() {
  return (
    <section className="relative -mt-20 z-10">
      <div className="container-px mx-auto max-w-7xl">
        <StaggerGroup className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl bg-navy-100/60 shadow-premium md:grid-cols-4">
          {STATS.map((stat) => (
            <motion.div
              key={stat.id}
              variants={staggerItem}
              className="flex flex-col items-center gap-1.5 bg-white px-6 py-9 text-center"
            >
              <span className="font-heading text-3xl font-semibold text-navy-900 sm:text-4xl">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </span>
              <span className="text-sm font-medium text-navy-500">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
