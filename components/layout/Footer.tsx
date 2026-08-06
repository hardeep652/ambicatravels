import Link from "next/link";
import Image from "next/image";
import {
  Compass,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Twitter,
  Youtube,
} from "lucide-react";
import { CONTACT, NAV_LINKS, SOCIAL_LINKS } from "@/lib/data";
import type { SocialLink } from "@/types";

const SOCIAL_ICONS: Record<SocialLink["icon"], typeof Instagram> = {
  instagram: Instagram,
  facebook: Facebook,
  twitter: Twitter,
  youtube: Youtube,
};

export function Footer() {
  return (
    <footer id="contact" className="bg-navy-950 text-white">
      <div className="container-px mx-auto max-w-7xl pb-10 pt-20">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1.2fr]">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5">
              <Image
                src="/AT.svg"
                alt="Ambica Travels logo"
                width={40}
                height={40}
                className="rounded-xl bg-white/10"
              />
              <span className="font-heading text-xl font-semibold">
                Ambica <span className="text-sky-400">Travels</span>
              </span>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/60">
              Car rentals, coach hire and fully-escorted holidays, planned by
              a Gujarat-based team that&apos;s been doing this since 2009.
            </p>
            <ul className="mt-6 flex items-center gap-3">
              {SOCIAL_LINKS.map((social) => {
                const Icon = SOCIAL_ICONS[social.icon];
                return (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-white/70 transition-colors hover:bg-emerald-500 hover:text-white"
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-white/90">
              Quick Links
            </h3>
            <ul className="mt-5 space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 transition-colors hover:text-emerald-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-white/90">
              Services
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-white/60">
              <li>Car Rental</li>
              <li>Bus Rental</li>
              <li>Holiday Packages</li>
              <li>Visa Assistance</li>
              <li>Corporate Travel</li>
            </ul>
          </div>

          {/* Contact + map */}
          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-white/90">
              Get in Touch
            </h3>
            <ul className="mt-5 space-y-3.5 text-sm text-white/60">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                <span>{CONTACT.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-emerald-400" />
                <a
                  href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
                  className="hover:text-white"
                >
                  {CONTACT.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-emerald-400" />
                <a href={`mailto:${CONTACT.email}`} className="hover:text-white">
                  {CONTACT.email}
                </a>
              </li>
            </ul>

            <div className="mt-5 overflow-hidden rounded-2xl ring-1 ring-white/10">
              <iframe
                title="Ambica Travels location on Google Maps"
                src={CONTACT.mapsEmbedSrc}
                width="100%"
                height="160"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/45 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} Ambica Travels. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white/70">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-white/70">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
