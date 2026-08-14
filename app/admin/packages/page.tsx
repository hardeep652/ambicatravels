import Link from "next/link";
import { DeletePackageButton } from "@/components/admin/DeletePackageButton";
import { listPackages } from "@/lib/package-service";

export default async function AdminPackagesPage({
  searchParams,
}: {
  searchParams: Promise<{ search?: string }>;
}) {
  const { search = "" } = await searchParams;
  const packages = await listPackages(search);

  return (
    <div className="min-h-screen px-6 py-8 sm:px-8 lg:px-12">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-600">
            Package Management
          </p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900">
            Packages
          </h1>
        </div>
        <Link
          href="/admin/packages/new"
          className="inline-flex items-center justify-center rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
        >
          Create package
        </Link>
      </div>

      <form className="mt-8">
        <input
          type="search"
          name="search"
          defaultValue={search}
          placeholder="Search by title"
          className="w-full max-w-md rounded-full border border-slate-200 bg-white px-5 py-3 text-sm text-slate-900 shadow-sm outline-none transition focus:border-sky-500"
        />
      </form>

      <div className="mt-8 overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
        <table className="min-w-full divide-y divide-slate-200">
          <thead className="bg-slate-50">
            <tr className="text-left text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              <th className="px-4 py-4">Title</th>
              <th className="px-4 py-4">Location</th>
              <th className="px-4 py-4">Price</th>
              <th className="px-4 py-4">Featured</th>
              <th className="px-4 py-4">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 text-sm text-slate-700">
            {packages.map((pkg) => (
              <tr key={pkg.id}>
                <td className="px-4 py-4">
                  <div className="font-semibold text-slate-900">{pkg.title}</div>
                  <div className="text-xs text-slate-500">{pkg.slug}</div>
                </td>
                <td className="px-4 py-4">{pkg.location}</td>
                <td className="px-4 py-4">{pkg.price}</td>
                <td className="px-4 py-4">
                  {pkg.featured ? (
                    <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
                      Featured
                    </span>
                  ) : (
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-500">
                      Standard
                    </span>
                  )}
                </td>
                <td className="px-4 py-4">
                  <div className="flex items-center gap-2">
                    <Link
                      href={`/admin/packages/${pkg.id}/edit`}
                      className="rounded-full border border-slate-200 px-3 py-2 text-xs font-semibold text-slate-700 transition hover:bg-slate-50"
                    >
                      Edit
                    </Link>
                    <DeletePackageButton id={pkg.id} title={pkg.title} />
                  </div>
                </td>
              </tr>
            ))}
            {packages.length === 0 ? (
              <tr>
                <td className="px-4 py-10 text-center text-slate-500" colSpan={5}>
                  No packages match the current search.
                </td>
              </tr>
            ) : null}
          </tbody>
        </table>
      </div>
    </div>
  );
}
