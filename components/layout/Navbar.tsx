"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Compass, Menu, Phone, X } from "lucide-react";
import { NAV_LINKS, CONTACT } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  // Only the homepage has a dark hero behind the navbar, so only there
  // do we start transparent-with-white-text. Every other page gets the
  // solid/opaque navbar from the very first paint so it's always visible.
  const hasHero = pathname === "/";
  const transparent = hasHero && !scrolled;

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
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center">
      <motion.div
        animate={{
          borderRadius: scrolled ? "24px" : "0px",
        }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "w-full overflow-hidden transition-colors duration-500",
          transparent
            ? "bg-transparent"
            : "bg-white/20 backdrop-blur-2xl backdrop-saturate-150 shadow-[0_4px_24px_rgba(15,23,42,0.08)] border border-white/40"
        )}
      >
        <motion.nav
          aria-label="Primary"
          animate={{ height: scrolled ? "64px" : "80px" }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="container-px mx-auto flex max-w-7xl items-center justify-between"
        >
          <Link
            href="/"
            className="group flex items-center gap-2.5 font-heading text-xl font-semibold tracking-tight"
          >
            <span
              className={cn(
                "flex items-center justify-center rounded-xl bg-navy-900 transition-all duration-400 ease-out group-hover:scale-105 group-hover:shadow-[0_4px_16px_rgba(15,23,42,0.25)]",
                scrolled ? "h-8 w-8" : "h-10 w-10"
              )}
            >
              <Compass className={cn("text-emerald-400 transition-all duration-300 group-hover:rotate-45", scrolled ? "h-4 w-4" : "h-5 w-5")} strokeWidth={2.25} />
            </span>
            <span className={cn("transition-colors duration-300", transparent ? "text-white" : "text-navy-900")}>
              Ambica <span className="text-sky-500">Travels</span>
            </span>
          </Link>

          <ul className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "block rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ease-out",
                    transparent
                      ? "text-white/90 hover:bg-white hover:text-navy-900"
                      : "text-navy-500 hover:bg-navy-900 hover:text-white"
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
                "group flex items-center gap-2 text-sm font-semibold transition-all duration-300 hover:opacity-70",
                transparent ? "text-white" : "text-navy-900"
              )}
            >
              <Phone className="h-4 w-4 text-emerald-500 transition-transform duration-300 ease-out group-hover:rotate-12 group-hover:scale-110" />
              {CONTACT.phone}
            </a>
            <Button
              asChild
              size="sm"
              variant="emerald"
              className={cn(
                "transition-all duration-300 ease-out hover:scale-[1.04] hover:shadow-[0_8px_24px_rgba(16,185,129,0.35)] active:scale-[0.98]",
                scrolled ? "h-9 px-4 text-sm" : "h-10 px-5"
              )}
            >
              <Link href="/contact">Get a Free Quote</Link>
            </Button>
          </div>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className={cn(
              "flex h-11 w-11 items-center justify-center rounded-full transition-all duration-300 ease-out hover:scale-105 active:scale-95 lg:hidden",
              transparent ? "text-white bg-white/10" : "text-navy-900 bg-navy-50"
            )}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </motion.nav>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden bg-white shadow-xl lg:hidden rounded-b-2xl"
            >
              <ul className="container-px mx-auto flex flex-col gap-1 py-4">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="block rounded-lg px-3 py-3 text-base font-medium text-navy-900 transition-all duration-200 ease-out hover:bg-navy-50 hover:pl-4"
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
      </motion.div>
    </header>
  );
}