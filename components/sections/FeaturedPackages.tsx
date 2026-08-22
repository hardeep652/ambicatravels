import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { RotatingPackageImage } from "@/components/RotatingPackageImage";
import { getPackageImage, getPackageTags } from "@/lib/package-presenters";
import { listPackages } from "@/lib/package-service";

export async function FeaturedPackages() {
  const packages = await listPackages();

  return (
    <section id="packages" className="section-py bg-cloud">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Featured Packages"
          title="Six itineraries our travelers keep coming back for"
          description="Every package is a starting point — flights, stay categories and pacing are tailored once you inquire."
        />

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {packages.map((pkg) => {
            const images =
              "images" in pkg &&
              Array.isArray(pkg.images) &&
              pkg.images.length > 0
                ? pkg.images
                : [getPackageImage(pkg)];

            return (
            <div key={pkg.id} className="h-full">
              <Link
                href={`/packages/${pkg.slug}`}
                className="group flex h-full flex-col rounded-[1.75rem] bg-white shadow-[0_1px_2px_rgba(15,23,42,0.06)] ring-1 ring-navy-900/5 transition-all duration-500 hover:-translate-y-2 hover:shadow-premium"
              >
                <div className="relative h-52 overflow-hidden rounded-t-[1.75rem]">
                  <RotatingPackageImage
                    images={images}
                    alt={pkg.title}
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 via-transparent to-transparent" />
                  <div className="absolute left-4 top-4 flex flex-wrap gap-1.5">
                    {getPackageTags(pkg).map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold text-navy-900 backdrop-blur"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="relative flex-1 rounded-b-[1.75rem] px-6 pb-6 pt-5">
                  <div
                    aria-hidden
                    className="absolute -top-3 left-0 right-0 flex items-center px-6"
                  >
                    <div className="h-3 w-3 -translate-x-1/2 rounded-full bg-cloud" />
                    <div className="mx-1 flex-1 border-t-2 border-dashed border-navy-100" />
                    <div className="h-3 w-3 translate-x-1/2 rounded-full bg-cloud" />
                  </div>

                  <div className="flex items-start justify-between">
                    <div>
                      <p className="font-heading text-lg font-semibold text-navy-900">
                        {pkg.title}
                      </p>
                      <p className="text-sm text-navy-500">{pkg.location}</p>
                    </div>
                    {pkg.featured ? (
                      <span className="rounded-full bg-emerald-100 px-3 py-1 text-[11px] font-semibold text-emerald-700">
                        Featured
                      </span>
                    ) : null}
                  </div>

                  <div className="mt-4 flex items-center justify-between border-t border-navy-100 pt-4">
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-navy-400">
                        Duration
                      </p>
                      <p className="text-sm font-semibold text-navy-900">
                        {pkg.duration}
                      </p>
                    </div>
                    <span className="text-sm font-semibold text-sky-600">{pkg.price}</span>
                  </div>

                  <span className="mt-5 flex w-full items-center justify-center gap-1.5 rounded-full border border-navy-200 py-2.5 text-sm font-semibold text-navy-900 transition-colors group-hover:border-sky-600 group-hover:text-sky-600">
                    View itinerary
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </Link>
            </div>
          );
          })}
        </div>
      </div>
    </section>
  );
}
