"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Loader2, UploadCloud } from "lucide-react";
import { Button } from "@/components/ui/button";

type PackagePayload = {
  title: string;
  slug: string;
  location: string;
  duration: string;
  price: string;
  description: string;
  thumbnailUrl: string;
  featured: boolean;
};

type PackageFormProps = {
  mode: "create" | "edit";
  initialValues?: PackagePayload;
  packageId?: string;
};

const defaultValues: PackagePayload = {
  title: "",
  slug: "",
  location: "",
  duration: "",
  price: "",
  description: "",
  thumbnailUrl: "",
  featured: false,
};

export function PackageForm({ mode, initialValues, packageId }: PackageFormProps) {
  const router = useRouter();
  const [values, setValues] = useState<PackagePayload>(initialValues ?? defaultValues);
  const [error, setError] = useState<string | null>(null);
  const [isSaving, setIsSaving] = useState(false);
  const [isUploading, setIsUploading] = useState(false);

  const submitLabel = mode === "create" ? "Create package" : "Save changes";

  async function handleUpload(file: File) {
    setIsUploading(true);
    setError(null);

    const formData = new FormData();
    formData.append("file", file);

    const response = await fetch("/api/admin/upload", {
      method: "POST",
      body: formData,
    });

    const result = await response.json();

    if (!response.ok) {
      setIsUploading(false);
      setError(result.error ?? "Upload failed.");
      return;
    }

    setValues((current) => ({
      ...current,
      thumbnailUrl: result.data.url,
    }));
    setIsUploading(false);
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSaving(true);
    setError(null);

    const endpoint =
      mode === "create" ? "/api/admin/packages" : `/api/admin/packages/${packageId}`;
    const method = mode === "create" ? "POST" : "PUT";

    const response = await fetch(endpoint, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });

    const result = await response.json();

    if (!response.ok) {
      setError(result.error ?? "Unable to save package.");
      setIsSaving(false);
      return;
    }

    router.push("/admin/packages");
    router.refresh();
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        <Field
          label="Title"
          name="title"
          value={values.title}
          onChange={(value) => setValues((current) => ({ ...current, title: value }))}
        />
        <Field
          label="Slug"
          name="slug"
          value={values.slug}
          onChange={(value) => setValues((current) => ({ ...current, slug: value }))}
        />
        <Field
          label="Location"
          name="location"
          value={values.location}
          onChange={(value) => setValues((current) => ({ ...current, location: value }))}
        />
        <Field
          label="Duration"
          name="duration"
          value={values.duration}
          onChange={(value) => setValues((current) => ({ ...current, duration: value }))}
        />
        <Field
          label="Price"
          name="price"
          value={values.price}
          onChange={(value) => setValues((current) => ({ ...current, price: value }))}
        />
        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-700" htmlFor="thumbnailUrl">
            Thumbnail URL
          </label>
          <input
            id="thumbnailUrl"
            name="thumbnailUrl"
            type="url"
            value={values.thumbnailUrl}
            onChange={(event) =>
              setValues((current) => ({ ...current, thumbnailUrl: event.target.value }))
            }
            className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm outline-none transition focus:border-sky-500"
            placeholder="https://..."
          />
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-slate-700" htmlFor="description">
          Description
        </label>
        <textarea
          id="description"
          name="description"
          rows={6}
          value={values.description}
          onChange={(event) =>
            setValues((current) => ({ ...current, description: event.target.value }))
          }
          className="w-full rounded-3xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm outline-none transition focus:border-sky-500"
        />
      </div>

      <div className="flex flex-col gap-4 rounded-3xl border border-dashed border-slate-300 bg-slate-50 p-5">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-sm font-medium text-slate-900">Upload thumbnail</p>
            <p className="text-sm text-slate-500">
              Upload to Cloudinary and store the returned URL.
            </p>
          </div>
          <label className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800">
            {isUploading ? <Loader2 className="h-4 w-4 animate-spin" /> : <UploadCloud className="h-4 w-4" />}
            {isUploading ? "Uploading..." : "Choose image"}
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(event) => {
                const file = event.target.files?.[0];
                if (file) {
                  void handleUpload(file);
                }
              }}
            />
          </label>
        </div>
        {values.thumbnailUrl ? (
          <p className="break-all text-sm text-slate-600">{values.thumbnailUrl}</p>
        ) : null}
      </div>

      <label className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700">
        <input
          type="checkbox"
          checked={values.featured}
          onChange={(event) =>
            setValues((current) => ({ ...current, featured: event.target.checked }))
          }
          className="h-4 w-4 rounded border-slate-300 text-sky-500 focus:ring-sky-500"
        />
        Mark as featured
      </label>

      {error ? (
        <div className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {error}
        </div>
      ) : null}

      <div className="flex items-center gap-3">
        <Button type="submit" variant="primary" size="default" disabled={isSaving || isUploading}>
          {isSaving ? "Saving..." : submitLabel}
        </Button>
        <Button
          type="button"
          variant="outlineDark"
          onClick={() => router.push("/admin/packages")}
        >
          Cancel
        </Button>
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  value,
  onChange,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium text-slate-700" htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type="text"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm outline-none transition focus:border-sky-500"
      />
    </div>
  );
}
