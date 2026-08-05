"use client";

import { ShieldCheck } from "lucide-react";
import { TRUST_BADGES } from "@/lib/data";

export function TrustBadges() {
  return (
    <section className="border-y border-navy-100 bg-navy-50/60 py-10">
      <div className="container-px mx-auto max-w-7xl">
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-5 sm:justify-between">
          {TRUST_BADGES.map((badge) => (
            <div
              key={badge.id}
              className="flex items-center gap-2 text-sm font-medium text-navy-400 grayscale transition-all duration-300 hover:text-navy-700 hover:grayscale-0"
            >
              <ShieldCheck className="h-4 w-4 text-emerald-500" />
              {badge.label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}