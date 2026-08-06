"use client";

import { motion } from "framer-motion";
import {
  CreditCard,
  PhoneCall,
  ClipboardList,
  PlaneTakeoff,
  type LucideIcon,
} from "lucide-react";
import { HOW_IT_WORKS } from "@/lib/data";

const STEP_ICON_MAP: Record<string, LucideIcon> = {
  phone: PhoneCall,
  clipboard: ClipboardList,
  card: CreditCard,
  plane: PlaneTakeoff,
};

export function HowItWorks() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="container-px mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-500">
            How it works
          </p>
          <h2 className="mt-3 font-heading text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl">
            Booking with us is straightforward
          </h2>
          <p className="mt-4 text-navy-500">
            No back-and-forth, no confusing packages — just a clear path from enquiry to takeoff.
          </p>
        </div>

        <div className="relative mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* static connecting line, purely decorative */}
          <div className="pointer-events-none absolute left-0 right-0 top-7 hidden h-[2px] bg-navy-900/25 lg:block" />

          {HOW_IT_WORKS.map((step, i) => {
            const Icon = STEP_ICON_MAP[step.icon] ?? PhoneCall;
            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="group relative z-10 flex flex-col items-start"
              >
                <div
                  className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-navy-900 shadow-[0_8px_20px_rgba(15,23,42,0.18)] transition-all duration-300 ease-out group-hover:-translate-y-1 group-hover:scale-105 group-hover:bg-emerald-500 group-hover:shadow-[0_12px_28px_rgba(16,185,129,0.35)]"
                >
                  <Icon
                    className="h-6 w-6 text-emerald-400 transition-colors duration-300 group-hover:text-white"
                    strokeWidth={1.75}
                  />
                  <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500 text-xs font-bold text-white transition-transform duration-300 group-hover:scale-110">
                    {i + 1}
                  </span>
                </div>
                <h3 className="mt-5 font-heading text-lg font-semibold text-navy-900">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-500">{step.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}