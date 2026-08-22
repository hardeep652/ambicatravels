"use client";

import Link from "next/link";
import { DeletePackageButton } from "@/components/admin/DeletePackageButton";

type Props = {
  packages: any[];
  search: string;
};

export default function AdminPackagesClient({ packages, search }: Props) {
  return (
    <>
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
                  {search
                    ? "No database packages match the current search."
                    : "No packages found in the database yet. Public demo packages are shown only on the website, not in admin."}
                </td>
              </tr>
            ) : null}
          </tbody>
        </table>
      </div>
    </>
  );
}
