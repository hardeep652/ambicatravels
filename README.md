# Ambica Travels — Home Page

A premium, production-ready travel agency home page built with Next.js App Router, TypeScript, Tailwind CSS, and Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Stack

- **Next.js 15** (App Router, Server Components by default)
- **TypeScript**
- **Tailwind CSS** — custom navy / sky / emerald palette defined in `tailwind.config.ts`
- **Framer Motion** — scroll reveals, staggered grids, hero crossfade, animated counters
- **Lucide React** — icon set
- **next/image** — every image, including the hero carousel, is served through `next/image`

## Structure

```
app/
  layout.tsx       Fonts (Poppins + Inter), SEO metadata
  page.tsx          Assembles all home page sections
  globals.css       Base styles, focus states, reduced-motion support
components/
  layout/           Navbar, Footer
  sections/         Hero, Stats, Services, WhyChooseUs, FeaturedPackages,
                     Testimonials, Gallery, CTABanner
  ui/               Button, Reveal/StaggerGroup, AnimatedCounter,
                     SectionHeading, StarRating
lib/
  data.ts           All copy, images and content — edit here to rebrand or re-content
  utils.ts          cn() class merge helper
types/
  index.ts          Shared TypeScript interfaces
```

## Notes for production

- **Images**: the hero, gallery and package photos currently point to Unsplash URLs for placeholder purposes. Swap these for licensed/brand photography in `lib/data.ts` before launch, and add your final image domain to `images.remotePatterns` in `next.config.ts`.
- **Google Maps**: the footer embed uses a placeholder `src`. Replace `CONTACT.mapsEmbedSrc` in `lib/data.ts` with your actual "Embed a map" iframe URL from Google Maps.
- **Forms/backend**: this build is frontend-only, as requested. "Inquire Now" and "Contact Us" currently link to the footer's contact block; wire them to a real form or CRM endpoint when ready.
- **Fonts**: Poppins (headings) and Inter (body) are loaded via `next/font/google`, which self-hosts and preloads them — no extra configuration needed.
