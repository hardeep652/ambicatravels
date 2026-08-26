import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, ChevronRight, MapPin, Star } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CTABanner } from "@/components/sections/CTABanner";
import { PackagePlanForm } from "@/components/sections/PackagePlanForm";
import { getPackageImage, getPackageTags } from "@/lib/package-presenters";
import { getPackageBySlug, listPackages } from "@/lib/package-service";
import { Button } from "@/components/ui/button";
import { generateWhatsAppMessage } from "@/lib/data";

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const pkg = await getPackageBySlug(slug);

  if (!pkg) {
    return {
      title: "Package Not Found",
    };
  }

  return {
    title: pkg.title,
    description: pkg.description,
  };
}

export default async function PackageDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const pkg = await getPackageBySlug(slug);

  if (!pkg) {
    notFound();
  }

  const similarPackages = (await listPackages()).filter((item) => item.id !== pkg.id).slice(0, 3);
  const tags = getPackageTags(pkg);

  return (
    <>
      <Navbar />
      <main>
        <section className="relative h-[70vh] min-h-[440px] w-full overflow-hidden">
          <Image
            src={getPackageImage(pkg)}
            alt={pkg.title}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-navy-950/25 to-navy-950/10" />

          <div className="container-px absolute inset-x-0 top-6 mx-auto max-w-7xl">
            <nav className="flex items-center gap-1.5 text-xs font-medium text-white/70">
              <Link href="/" className="hover:text-white">
                Home
              </Link>
              <ChevronRight className="h-3.5 w-3.5" />
              <Link href="/packages" className="hover:text-white">
                Packages
              </Link>
              <ChevronRight className="h-3.5 w-3.5" />
              <span className="text-white">{pkg.title}</span>
            </nav>
          </div>

          <div className="container-px absolute inset-x-0 bottom-0 mx-auto max-w-7xl pb-8">
            <div className="flex flex-wrap gap-1.5">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold text-navy-900 backdrop-blur"
                >
                  {tag}
                </span>
              ))}
              {pkg.featured ? (
                <span className="rounded-full bg-emerald-400 px-3 py-1 text-[11px] font-semibold text-emerald-950">
                  Featured
                </span>
              ) : null}
            </div>
            <h1 className="mt-4 max-w-4xl font-heading text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              {pkg.title}
            </h1>
            <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-white/80">
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="h-4 w-4 text-sky-300" />
                {pkg.location}
              </span>
              <span className="h-1 w-1 rounded-full bg-white/40" />
              <span>{pkg.duration}</span>
              <span className="h-1 w-1 rounded-full bg-white/40" />
              <span>{pkg.price}</span>
            </div>
          </div>
        </section>

        <section className="section-py bg-white">
          <div className="container-px mx-auto grid max-w-[90rem] gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(430px,520px)] lg:items-start xl:grid-cols-[minmax(0,0.85fr)_minmax(480px,560px)] xl:gap-14">
            <div className="min-w-0">
              <div>
                <h2 className="font-heading text-2xl font-semibold text-navy-900">Overview</h2>
                <p className="mt-4 max-w-none text-base leading-8 text-navy-500">
                  {pkg.description}
                </p>
              </div>
            </div>

            <aside className="rounded-[2rem] border border-navy-100 bg-cloud p-5 shadow-[0_15px_50px_rgba(15,23,42,0.07)] sm:p-6 lg:sticky lg:top-28">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-600">
                Package Snapshot
              </p>
              <div className="mt-5 grid gap-3 text-sm text-navy-600 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                <div className="rounded-2xl bg-white px-4 py-4">
                  <p className="text-xs uppercase tracking-[0.18em] text-navy-400">Location</p>
                  <p className="mt-2 font-semibold text-navy-900">{pkg.location}</p>
                </div>
                <div className="rounded-2xl bg-white px-4 py-4">
                  <p className="text-xs uppercase tracking-[0.18em] text-navy-400">Duration</p>
                  <p className="mt-2 font-semibold text-navy-900">{pkg.duration}</p>
                </div>
                <div className="rounded-2xl bg-white px-4 py-4">
                  <p className="text-xs uppercase tracking-[0.18em] text-navy-400">Price</p>
                  <p className="mt-2 font-semibold text-navy-900">{pkg.price}</p>
                </div>
              </div>
              <PackagePlanForm
                packageInfo={{
                  location: pkg.location,
                  duration: pkg.duration,
                  price: pkg.price,
                }}
              />
            </aside>
          </div>
        </section>

        {similarPackages.length > 0 ? (
          <section className="bg-navy-50 py-20 sm:py-24">
            <div className="container-px mx-auto max-w-7xl">
              <div className="flex items-end justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-600">
                    More Packages
                  </p>
                  <h2 className="mt-2 text-3xl font-semibold tracking-tight text-navy-900">
                    Explore similar options
                  </h2>
                </div>
                <Link
                  href="/packages"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy-900 hover:text-sky-600"
                >
                  View all
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="mt-10 grid gap-6 md:grid-cols-3">
                {similarPackages.map((item) => (
                  <Link
                    key={item.id}
                    href={`/packages/${item.slug}`}
                    className="group overflow-hidden rounded-[1.75rem] bg-white shadow-[0_2px_16px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_54px_rgba(15,23,42,0.12)]"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={getPackageImage(item)}
                        alt={item.title}
                        fill
                        sizes="(min-width: 768px) 33vw, 100vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-5">
                      <div className="flex items-center justify-between gap-3">
                        <h3 className="text-lg font-semibold text-navy-900">{item.title}</h3>
                        {item.featured ? (
                          <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                        ) : null}
                      </div>
                      <p className="mt-2 text-sm text-navy-500">{item.location}</p>
                      <p className="mt-4 text-sm font-semibold text-sky-600">{item.price}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        ) : null}

        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
