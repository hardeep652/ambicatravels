import Link from "next/link";
import { DeletePackageButton } from "@/components/admin/DeletePackageButton";
import AdminPackagesClient from "./AdminPackagesClient";
import { listAdminPackages } from "@/lib/package-service";

export default async function AdminPackagesPage({
  searchParams,
}: {
  searchParams: Promise<{ search?: string }>;
}) {
  const { search = "" } = await searchParams;
  const packages = await listAdminPackages(search);

  return (
    <>
      <div className="px-6 py-8 sm:px-8 lg:px-12">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
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

        <AdminPackagesClient packages={packages} search={search} />
      </div>
    </>
  );
}