"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Compass, Menu, Phone, X } from "lucide-react";
import { NAV_LINKS, CONTACT } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-white/95 backdrop-blur-xl shadow-[0_1px_0_0_rgba(15,23,42,0.06)]"
          : "bg-white/80 backdrop-blur-xl"
      )}
    >
      <nav
        aria-label="Primary"
        className="container-px mx-auto flex h-20 max-w-7xl items-center justify-between"
      >
        <Link
          href="/"
          className="flex items-center gap-2.5 font-heading text-xl font-semibold tracking-tight"
        >
          <span
            className={cn(
              "flex h-10 w-10 items-center justify-center rounded-xl transition-colors",
              scrolled ? "bg-navy-900" : "bg-navy-900"
            )}
          >
            <Compass
              className={cn(
                "h-5 w-5",
                scrolled ? "text-emerald-400" : "text-emerald-400"
              )}
              strokeWidth={2.25}
            />
          </span>
          <span className="text-navy-900">
            Ambica <span className="text-sky-500">Travels</span>
          </span>
        </Link>

        <ul className="hidden items-center gap-9 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors",
                  "text-navy-500 hover:text-sky-600"
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
            className={cn(
              "flex items-center gap-2 text-sm font-semibold transition-colors",
              "text-navy-900"
            )}
          >
            <Phone className="h-4 w-4 text-emerald-500" />
            {CONTACT.phone}
          </a>
          <Button asChild size="sm" variant="emerald">
            <Link href="/contact">Get a Free Quote</Link>
          </Button>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className={cn(
            "flex h-11 w-11 items-center justify-center rounded-full lg:hidden",
            "text-navy-900 bg-navy-50"
          )}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden bg-white shadow-xl lg:hidden"
          >
            <ul className="container-px mx-auto flex flex-col gap-1 py-4">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-3 text-base font-medium text-navy-900 hover:bg-navy-50"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="mt-2 flex flex-col gap-3 px-3">
                <a
                  href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-2 text-base font-semibold text-navy-900"
                >
                  <Phone className="h-4 w-4 text-emerald-500" />
                  {CONTACT.phone}
                </a>
                <Button asChild variant="emerald" className="w-full">
                  <Link href="/contact" onClick={() => setOpen(false)}>
                    Get a Free Quote
                  </Link>
                </Button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
