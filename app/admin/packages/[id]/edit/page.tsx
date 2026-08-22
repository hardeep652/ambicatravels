import { notFound } from "next/navigation";
import { PackageForm } from "@/components/admin/PackageForm";
import { getAdminPackageById } from "@/lib/package-service";

export default async function EditPackagePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const pkg = await getAdminPackageById(id);

  if (!pkg) {
    notFound();
  }

  return (
    <div className="min-h-screen px-6 py-8 sm:px-8 lg:px-12">
      <div className="max-w-4xl">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-600">
          Package Management
        </p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900">
          Edit package
        </h1>
        <p className="mt-2 text-sm text-slate-500">
          Update package content, pricing, and public-facing details.
        </p>
      </div>

      <div className="mt-8 max-w-4xl rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <PackageForm
          mode="edit"
          packageId={pkg.id}
          initialValues={{
            title: pkg.title,
            slug: pkg.slug,
            location: pkg.location,
            duration: pkg.duration,
            price: pkg.price,
            description: pkg.description,
            thumbnailUrl: pkg.thumbnailUrl ?? "",
            featured: pkg.featured,
          }}
        />
      </div>
    </div>
  );
}
