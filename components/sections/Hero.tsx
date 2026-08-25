"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";
import { ArrowRight, MessageCircle, PlaneTakeoff } from "lucide-react";
import { HERO_SLIDES } from "@/lib/data";
import { Button } from "@/components/ui/button";

const SLIDE_DURATION = 6000;
// Ambient Ken Burns zoom on the hero background — kept slow and subtle
// so it reads as "alive" rather than animated. Independent of the
// crossfade below, so slide changes never interrupt it.
const ZOOM_DURATION = 28; // seconds, within the requested 25–30s range

// Signature moment: passport stamps landing in the open airspace to the
// right of the headline — never crossing the text block. Cycles in sync
// every STAMP_CYCLE ms, like a passport page filling up one trip at a time.
const STAMP_CYCLE = 5500; // ms between stamp turns

type Stamp = {
  destination: string;
  code: string; // faux customs reference, e.g. flight/route code
  ink: "emerald" | "amber";
};

const STAMPS: Stamp[] = [
  { destination: "DUBAI", code: "AMD–DXB", ink: "emerald" },
  { destination: "SINGAPORE", code: "AMD–SIN", ink: "amber" },
  { destination: "BALI", code: "AMD–DPS", ink: "emerald" },
  { destination: "SWITZERLAND", code: "AMD–ZRH", ink: "amber" },
  { destination: "KERALA", code: "AMD–COK", ink: "emerald" },
  { destination: "GOA", code: "AMD–GOI", ink: "amber" },
];

const SLOTS = [
  { top: "10%", right: "20%", scale: 1, rotate: -6 },
  { top: "34%", right: "5%", scale: 0.82, rotate: 8 },
  { top: "58%", right: "24%", scale: 0.94, rotate: -10 },
  { top: "76%", right: "8%", scale: 0.74, rotate: 5 },
];

const INK_COLORS: Record<Stamp["ink"], string> = {
  emerald: "#34D399",
  amber: "#F59E0B",
};

function StampMark({
  stamp,
  slot,
  slotIndex,
}: {
  stamp: Stamp;
  slot: (typeof SLOTS)[number];
  slotIndex: number;
}) {
  const arcId = `stamp-arc-${slotIndex}`;
  const color = INK_COLORS[stamp.ink];

  return (
    <motion.div
      className="absolute select-none"
      style={{ top: slot.top, right: slot.right }}
      initial={{ scale: slot.scale * 1.7, opacity: 0, rotate: slot.rotate - 10 }}
      animate={{ scale: slot.scale, opacity: 1, rotate: slot.rotate }}
      exit={{ opacity: 0, scale: slot.scale * 0.9 }}
      transition={{ type: "spring", stiffness: 210, damping: 15 }}
    >
      <svg
        width="150"
        height="150"
        viewBox="0 0 150 150"
        style={{ filter: "url(#stamp-ink-bleed)" }}
      >
        <defs>
          <path id={`${arcId}-top`} d="M 26 82 A 49 49 0 1 1 124 82" fill="none" />
        </defs>

        <circle cx="75" cy="75" r="63" fill="none" stroke={color} strokeWidth="2.5" opacity={0.85} />
        <circle
          cx="75"
          cy="75"
          r="52"
          fill="none"
          stroke={color}
          strokeWidth="1.2"
          strokeDasharray="2 4"
          opacity={0.6}
        />

        <text fontSize="13" fontWeight={700} letterSpacing="2" fill={color} opacity={0.95}>
          <textPath href={`#${arcId}-top`} startOffset="50%" textAnchor="middle">
            {stamp.destination}
          </textPath>
        </text>

        <text
          x="75"
          y="80"
          textAnchor="middle"
          fontSize="9"
          fontWeight={600}
          letterSpacing="1.5"
          fill={color}
          opacity={0.9}
        >
          {stamp.code}
        </text>
        <text
          x="75"
          y="94"
          textAnchor="middle"
          fontSize="7"
          letterSpacing="2"
          fill={color}
          opacity={0.75}
        >
          ARRIVED · EST. 1999
        </text>
      </svg>
    </motion.div>
  );
}

function PassportStamps() {
  const [turn, setTurn] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setTurn((t) => t + 1), STAMP_CYCLE);
    return () => clearInterval(id);
  }, []);

  return (
    <svg
      aria-hidden
      className="pointer-events-none absolute inset-0 hidden h-full w-full lg:block"
      style={{ position: "absolute" }}
    >
      {/* Ink-bleed texture, referenced by every stamp via CSS filter */}
      <defs>
        <filter id="stamp-ink-bleed" x="-30%" y="-30%" width="160%" height="160%">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="2.2" />
        </filter>
      </defs>

      <foreignObject x="0" y="0" width="100%" height="100%">
        <div style={{ position: "relative", width: "100%", height: "100%" }}>
          <AnimatePresence mode="popLayout">
            {SLOTS.map((slot, i) => {
              const stamp = STAMPS[(turn + i) % STAMPS.length];
              return (
                <StampMark
                  key={`${i}-${turn}`}
                  stamp={stamp}
                  slot={slot}
                  slotIndex={i}
                />
              );
            })}
          </AnimatePresence>
        </div>
      </foreignObject>
    </svg>
  );
}

export function Hero() {
  const [index, setIndex] = useState(0);
  const [finePointer, setFinePointer] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const sectionRef = useRef<HTMLElement>(null);

  // Subtle cursor-parallax on the background — a light-touch depth cue,
  // not a gimmick. Springs keep it trailing smoothly behind the pointer.
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const springX = useSpring(mx, { stiffness: 40, damping: 18, mass: 0.6 });
  const springY = useSpring(my, { stiffness: 40, damping: 18, mass: 0.6 });
  const PARALLAX_RANGE = 16; // px

  useEffect(() => {
    const mq = window.matchMedia("(pointer: fine)");
    setFinePointer(mq.matches);
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % HERO_SLIDES.length);
    }, SLIDE_DURATION);
    return () => clearInterval(id);
  }, []);

  const handlePointerMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!finePointer || shouldReduceMotion) return;
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    const nx = (e.clientX - rect.left) / rect.width - 0.5;
    const ny = (e.clientY - rect.top) / rect.height - 0.5;
    mx.set(nx * PARALLAX_RANGE);
    my.set(ny * PARALLAX_RANGE);
  };

  const handlePointerLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <section
      ref={sectionRef}
      id="home"
      onMouseMove={handlePointerMove}
      onMouseLeave={handlePointerLeave}
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-navy-900"
    >
      <div className="absolute inset-0">
        <AnimatePresence initial={false}>
          <motion.div
            key={HERO_SLIDES[index].id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.6, ease: "easeOut" }}
            className="absolute inset-0 overflow-hidden"
          >
            <motion.div
              className="absolute inset-0"
              style={{ x: springX, y: springY }}
              initial={{ scale: 1 }}
              animate={shouldReduceMotion ? { scale: 1 } : { scale: 1.08 }}
              transition={
                shouldReduceMotion
                  ? { duration: 0 }
                  : {
                      duration: ZOOM_DURATION,
                      ease: "linear",
                      repeat: Infinity,
                      repeatType: "mirror",
                    }
              }
            >
              <Image
                src={HERO_SLIDES[index].image}
                alt={HERO_SLIDES[index].alt}
                fill
                priority={index === 0}
                sizes="100vw"
                className="object-cover"
              />
            </motion.div>
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950/70 via-navy-900/55 to-navy-950/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/60 via-transparent to-transparent" />
      </div>

      {!shouldReduceMotion && <PassportStamps />}

      <div className="container-px relative mx-auto max-w-7xl pt-28 pb-24">
        <motion.span
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/90 backdrop-blur-sm"
        >
          <PlaneTakeoff className="h-3.5 w-3.5 text-emerald-400" />
          Ahmedabad&apos;s Trusted Travel Partner Since 1999
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="mt-7 max-w-3xl text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[4.25rem]"
        >
          Journeys crafted with care, from the first call to{" "}
          <span className="bg-gradient-to-r from-emerald-400 to-sky-400 bg-clip-text text-transparent">
            the final mile
          </span>
          .
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="mt-6 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg"
        >
          Car rentals, coach hire, and fully-escorted holiday packages —
          planned by people who&apos;ve actually been there, backed by support
          that doesn&apos;t stop when you land.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          <motion.div
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="inline-block"
          >
            <Button asChild size="lg" variant="emerald">
              <Link href="/packages">
                Explore Packages
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="inline-block"
          >
            <Button asChild size="lg" variant="outline">
              <Link href="/contact">
                <MessageCircle className="h-4 w-4" />
                Contact Us
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute inset-x-0 bottom-8 hidden justify-center sm:flex">
        <div className="flex items-center gap-2">
          {HERO_SLIDES.map((slide, i) => (
            <button
              key={slide.id}
              aria-label={`Show slide ${i + 1}`}
              onClick={() => setIndex(i)}
              className="group py-2"
            >
              <span
                className={`block h-1 rounded-full transition-all duration-500 ${
                  i === index ? "w-8 bg-emerald-400" : "w-4 bg-white/40 group-hover:bg-white/70"
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}