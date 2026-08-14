import { PackageForm } from "@/components/admin/PackageForm";

export default function NewPackagePage() {
  return (
    <div className="min-h-screen px-6 py-8 sm:px-8 lg:px-12">
      <div className="max-w-4xl">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-600">
          Package Management
        </p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900">
          Create package
        </h1>
        <p className="mt-2 text-sm text-slate-500">
          Add a new travel package to the public catalog.
        </p>
      </div>

      <div className="mt-8 max-w-4xl rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <PackageForm mode="create" />
      </div>
    </div>
  );
}
