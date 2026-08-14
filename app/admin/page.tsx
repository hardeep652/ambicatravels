import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { Box, CalendarClock, Package, Star } from "lucide-react";

export default async function AdminDashboardPage() {
  const [packageCount, featuredCount, latestPackages] = await Promise.all([
    prisma.package.count(),
    prisma.package.count({ where: { featured: true } }),
    prisma.package.findMany({
      orderBy: { updatedAt: "desc" },
      take: 5,
    }),
  ]);

  return (
    <div className="min-h-screen px-5 py-8 sm:px-8 lg:px-12">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-600">
            Welcome back
          </p>
          <h1 className="mt-1 text-2xl font-semibold tracking-tight text-[#0F172A] sm:text-3xl">
            Admin overview
          </h1>
          <p className="mt-1 text-sm text-slate-500">
            Manage your travel packages and keep everything up to date.
          </p>
        </div>
        <Link
          href="/admin/packages/new"
          className="inline-flex h-11 items-center justify-center rounded-xl bg-sky-600 px-5 text-sm font-semibold text-white shadow-[0_10px_24px_-12px_rgba(37,99,235,0.6)] transition hover:bg-sky-700 hover:shadow-[0_12px_28px_-12px_rgba(37,99,235,0.7)]"
        >
          + Add package
        </Link>
      </div>

      {/* Stats */}
      <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        <MetricCard
          label="Total packages"
          value={packageCount}
          icon={<Package className="h-5 w-5 text-sky-600" aria-hidden="true" />}
          hint="All packages"
        />
        <MetricCard
          label="Featured packages"
          value={featuredCount}
          icon={<Star className="h-5 w-5 text-indigo-600" aria-hidden="true" />}
          hint="Featured"
        />
        <MetricCard
          label="Recently updated"
          value={latestPackages.length}
          icon={<CalendarClock className="h-5 w-5 text-emerald-600" aria-hidden="true" />}
          hint="Last updates"
        />
      </div>

      {/* Latest packages */}
      <section className="mt-8 rounded-[18px] border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 className="text-lg font-semibold text-[#0F172A]">Latest packages</h2>
            <p className="text-sm text-slate-500">Recent updates from the package catalog.</p>
          </div>
          <Link href="/admin/packages" className="text-sm font-semibold text-sky-600 hover:text-sky-700">
            View all →
          </Link>
        </div>

        {latestPackages.length > 0 ? (
          <div className="mt-6 overflow-x-auto">
            <div className="min-w-full overflow-hidden rounded-xl border border-slate-200">
              <table className="min-w-full divide-y divide-slate-200">
                <thead className="bg-slate-50">
                  <tr className="text-left text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                    <th className="px-4 py-3">Title</th>
                    <th className="px-4 py-3">Slug</th>
                    <th className="px-4 py-3">Location</th>
                    <th className="px-4 py-3">Updated</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 bg-white text-sm text-slate-700">
                  {latestPackages.map((pkg) => (
                    <tr key={pkg.id}>
                      <td className="px-4 py-3 font-medium text-slate-900">{pkg.title}</td>
                      <td className="px-4 py-3">{pkg.slug}</td>
                      <td className="px-4 py-3">{pkg.location}</td>
                      <td className="px-4 py-3">
                        {new Intl.DateTimeFormat("en-IN", { dateStyle: "medium" }).format(
                          pkg.updatedAt
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <div className="mt-8 flex flex-col items-center justify-center gap-3 rounded-xl border border-dashed border-slate-300 bg-slate-50/70 px-6 py-14 text-center">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-sm ring-1 ring-slate-200">
              <Box className="h-6 w-6 text-slate-400" aria-hidden="true" />
            </span>
            <h3 className="mt-1 text-base font-semibold text-[#0F172A]">No packages found yet.</h3>
            <p className="max-w-md text-sm text-slate-500">
              Looks like you haven't added any packages.
            </p>
            <Link
              href="/admin/packages/new"
              className="mt-1 inline-flex h-10 items-center justify-center rounded-xl bg-sky-600 px-4 text-sm font-semibold text-white shadow-sm transition hover:bg-sky-700"
            >
              + Add your first package
            </Link>
          </div>
        )}
      </section>
    </div>
  );
}

function MetricCard({
  label,
  value,
  icon,
  hint,
}: {
  label: string;
  value: number;
  icon: React.ReactNode;
  hint?: string;
}) {
  return (
    <div className="flex items-start gap-4 rounded-[18px] border border-slate-200 bg-white p-5 shadow-sm">
      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-50 ring-1 ring-slate-200">
        {icon}
      </span>
      <div>
        <p className="text-sm font-medium text-slate-500">{label}</p>
        <p className="mt-1 text-3xl font-semibold tracking-tight text-[#0F172A]">{value}</p>
        {hint ? <p className="mt-1 text-xs text-slate-400">{hint}</p> : null}
      </div>
    </div>
  );
}
