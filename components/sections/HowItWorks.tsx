"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll, useSpring, useTransform } from "framer-motion";
import {
  CreditCard,
  PhoneCall,
  ClipboardList,
  PlaneTakeoff,
  type LucideIcon,
} from "lucide-react";
import { HOW_IT_WORKS } from "@/lib/data";
import { cn } from "@/lib/utils";

const STEP_ICON_MAP: Record<string, LucideIcon> = {
  phone: PhoneCall,
  clipboard: ClipboardList,
  card: CreditCard,
  plane: PlaneTakeoff,
};

export function HowItWorks() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Tracks scroll progress specifically across the steps row — starts filling
  // once the row nears the center of the viewport, finishes as it clears it.
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start 0.75", "end 0.4"],
  });

  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    restDelta: 0.001,
  });

  const planeLeft = useTransform(progress, [0, 1], ["0%", "100%"]);
  const planeOpacity = useTransform(progress, [0, 0.02, 0.98, 1], [0, 1, 1, 0]);

  // As the traveler passes each checkpoint's position along the beam, swap
  // the flying icon to match that checkpoint — snaps to the nearest step.
  useMotionValueEvent(progress, "change", (value) => {
    const lastIndex = HOW_IT_WORKS.length - 1;
    const nextIndex = Math.min(lastIndex, Math.max(0, Math.round(value * lastIndex)));
    setActiveIndex((current) => (current === nextIndex ? current : nextIndex));
  });

  const ActiveIcon = STEP_ICON_MAP[HOW_IT_WORKS[activeIndex]?.icon] ?? PhoneCall;

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

        <div ref={trackRef} className="relative mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* base track */}
          <div className="pointer-events-none absolute left-0 right-0 top-7 hidden h-px bg-navy-100 lg:block" />

          {/* animated beam that fills in as you scroll */}
          <motion.div
            className="pointer-events-none absolute left-0 right-0 top-7 hidden h-[3px] origin-left rounded-full bg-gradient-to-r from-emerald-400 via-emerald-500 to-sky-500 lg:block"
            style={{ scaleX: progress }}
          />

          {/* traveling badge — its icon morphs to match whichever checkpoint it's passing */}
          <motion.div
            className="pointer-events-none absolute top-7 z-20 hidden -translate-x-1/2 -translate-y-1/2 lg:block"
            style={{ left: planeLeft, opacity: planeOpacity }}
          >
            <span className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-white shadow-[0_4px_14px_rgba(15,23,42,0.25)]">
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={activeIndex}
                  initial={{ opacity: 0, scale: 0.5, rotate: -90 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  exit={{ opacity: 0, scale: 0.5, rotate: 90 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="flex items-center justify-center"
                >
                  <ActiveIcon className="h-4.5 w-4.5 text-emerald-500" strokeWidth={2.25} />
                </motion.span>
              </AnimatePresence>
            </span>
          </motion.div>

          {HOW_IT_WORKS.map((step, i) => {
            const Icon = STEP_ICON_MAP[step.icon] ?? PhoneCall;
            const isActive = i === activeIndex;
            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="relative z-10 flex flex-col items-start"
              >
                <div
                  className={cn(
                    "relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl transition-colors duration-300",
                    isActive ? "bg-emerald-500" : "bg-navy-900"
                  )}
                  style={{
                    boxShadow: isActive
                      ? "0 8px 24px rgba(16,185,129,0.35)"
                      : "0 8px 20px rgba(15,23,42,0.18)",
                  }}
                >
                  <Icon
                    className={cn("h-6 w-6 transition-colors duration-300", isActive ? "text-white" : "text-emerald-400")}
                    strokeWidth={1.75}
                  />
                  <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500 text-xs font-bold text-white">
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