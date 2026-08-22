import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MapPin, Star } from "lucide-react";
import { getPackageImage, getPackageTags } from "@/lib/package-presenters";
import { getFeaturedPackages } from "@/lib/package-service";
import PackageImageCarousel from "@/components/sections/PackageImageCarousel";

export async function PackagesPreview() {
  const featured = await getFeaturedPackages(4);

  return (
    <section className="bg-navy-50 py-20 sm:py-28">
      <div className="container-px mx-auto max-w-7xl">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-emerald-500">
              Popular this season
            </p>
            <h2 className="mt-3 font-heading text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl">
              Handpicked holiday packages
            </h2>
          </div>
          <Link
            href="/packages"
            className="group inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-navy-900 transition-colors hover:text-sky-600"
          >
            View all packages
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((pkg) => (
            <div key={pkg.id}>
              <Link
                href={`/packages/${pkg.slug}`}
                className="group block overflow-hidden rounded-2xl bg-white shadow-[0_2px_12px_rgba(15,23,42,0.06)] transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-[0_20px_44px_rgba(15,23,42,0.14)]"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-navy-100">
                  <PackageImageCarousel
  images={
    "images" in pkg && Array.isArray(pkg.images)
      ? pkg.images
      : []
  }
  fallback={getPackageImage(pkg)}
  alt={pkg.title}
/>
                  <span className="absolute left-3 top-3 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-navy-900 backdrop-blur">
                    {pkg.duration}
                  </span>
                </div>

                <div className="p-5">
                  <div className="flex items-center gap-1.5 text-xs font-medium text-navy-500">
                    <MapPin className="h-3.5 w-3.5 text-emerald-500" />
                    {pkg.location}
                  </div>
                  <h3 className="mt-1.5 font-heading text-lg font-semibold text-navy-900">
                    {pkg.title}
                  </h3>

                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {getPackageTags(pkg).map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-navy-50 px-2.5 py-1 text-[11px] font-medium text-navy-500"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-4 flex items-center justify-between border-t border-navy-100 pt-4">
                    <span className="text-xs font-medium text-navy-400">{pkg.duration}</span>
                    <div className="flex items-center gap-1 text-sm font-semibold text-navy-900">
                      <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                      {pkg.featured ? "Featured" : pkg.price}
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
