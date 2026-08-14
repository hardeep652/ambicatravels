import Link from "next/link";
import { prisma } from "@/lib/prisma";

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
    <div className="min-h-screen px-6 py-8 sm:px-8 lg:px-12">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-600">
            Dashboard
          </p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900">
            Admin overview
          </h1>
        </div>
        <Link
          href="/admin/packages/new"
          className="inline-flex items-center justify-center rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
        >
          Add package
        </Link>
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        <MetricCard label="Total packages" value={packageCount} />
        <MetricCard label="Featured packages" value={featuredCount} />
        <MetricCard label="Recently updated" value={latestPackages.length} />
      </div>

      <section className="mt-10 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold text-slate-900">Latest packages</h2>
            <p className="text-sm text-slate-500">Recent updates from the package catalog.</p>
          </div>
          <Link href="/admin/packages" className="text-sm font-semibold text-sky-600">
            View all
          </Link>
        </div>

        <div className="mt-6 overflow-hidden rounded-3xl border border-slate-200">
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
                    {new Intl.DateTimeFormat("en-IN", {
                      dateStyle: "medium",
                    }).format(pkg.updatedAt)}
                  </td>
                </tr>
              ))}
              {latestPackages.length === 0 ? (
                <tr>
                  <td className="px-4 py-8 text-center text-slate-500" colSpan={4}>
                    No packages found yet.
                  </td>
                </tr>
              ) : null}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

function MetricCard({ label, value }: { label: string; value: number }) {
  return (
    <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
      <p className="text-sm font-medium text-slate-500">{label}</p>
      <p className="mt-3 text-4xl font-semibold tracking-tight text-slate-900">{value}</p>
    </div>
  );
}
