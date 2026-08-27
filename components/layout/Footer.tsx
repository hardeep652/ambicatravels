import Link from "next/link";
import Image from "next/image";
import {
  Compass,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Youtube,
} from "lucide-react";
import { CONTACT, NAV_LINKS, SOCIAL_LINKS } from "@/lib/data";
import type { SocialLink } from "@/types";

const SOCIAL_ICONS: Record<SocialLink["icon"], typeof Instagram> = {
  instagram: Instagram,
  facebook: Facebook,
  youtube: Youtube,
};

export function Footer() {
  return (
    <footer id="contact" className="bg-navy-950 text-white">
      <div className="container-px mx-auto max-w-7xl pb-10 pt-20">
        <div className="grid gap-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr_1.2fr]">
          {/* Brand */}
          <div>
            <div className="flex items-center">
              <Image
                src="/AT.png"
                alt="Ambica Travels logo"
                width={170}
                height={50}
                className="h-10 w-auto object-contain [filter:drop-shadow(0_2px_8px_rgba(255,255,255,0.15))]"
              />
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/60">
              Car rentals, coach hire and fully-escorted holidays, planned by
              a Gujarat-based team that&apos;s been doing this since 1999.
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
              <li>Corporate Travel</li>
            </ul>
          </div>

          {/* Our Offices */}
          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-white/90">
              Our Offices
            </h3>
            <ul className="mt-5 space-y-5 text-sm text-white/60">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                <div>
                  <p className="mb-1 font-semibold text-white/80">Ahmedabad</p>
                  <address className="not-italic leading-relaxed">
                    403, 4th Floor, Dream Square Complex,<br />
                    Opp. Ramdevpir Mandir,<br />
                    Nr. Nirnaynagar Underbridge,<br />
                    Nirnaynagar, Ahmedabad&nbsp;&ndash;&nbsp;382481.
                  </address>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                <div>
                  <p className="mb-1 font-semibold text-white/80">Daman</p>
                  <address className="not-italic leading-relaxed">
                    H.No. 14/45/A-1, G-18,<br />
                    Ground Floor, Dilip Empire,<br />
                    Tin Batti, Daman&nbsp;&ndash;&nbsp;396210.
                  </address>
                </div>
              </li>
            </ul>
          </div>

          {/* Contact + map */}
          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-white/90">
              Get in Touch
            </h3>
            <ul className="mt-5 space-y-3.5 text-sm text-white/60">
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

            <a
                href={CONTACT.mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 block overflow-hidden rounded-2xl ring-1 ring-white/10 transition-opacity hover:opacity-90"
                aria-label="Open Ambica Travels location in Google Maps"
              >
                <iframe
                  title="Ambica Travels location on Google Maps"
                  src={CONTACT.mapsEmbedSrc}
                  width="100%"
                  height="160"
                  style={{ border: 0, pointerEvents: "none" }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </a>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/45 sm:flex-row">
           <p>&copy; {new Date().getFullYear()} Ambica Travels. All rights reserved.</p>
            <span className="flex items-center gap-1 text-white/45">
              Developed by
              <a
                href="https://www.revonis.in/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="https://res.cloudinary.com/dkzmths4e/image/upload/v1786703327/kwx94daaumk7k8bhxtaw.png"
                  alt="Revonis"
                  width={90}
                  height={22}
                  className="object-contain"
                />
              </a>
            </span>
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
