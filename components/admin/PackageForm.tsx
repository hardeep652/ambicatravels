"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Loader2, UploadCloud, X, ZoomIn } from "lucide-react";
import { Button } from "@/components/ui/button";

type PackagePayload = {
  title: string;
  slug: string;
  location: string;
  duration: string;
  price: string;
  description: string;
  images: string[]; // <-- was thumbnailUrl: string
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
  images: [],
  featured: false,
};

export function PackageForm({ mode, initialValues, packageId }: PackageFormProps) {
  const router = useRouter();
  const [values, setValues] = useState<PackagePayload>(initialValues ?? defaultValues);

const [error, setError] = useState<string | null>(null);
  const [isSaving, setIsSaving] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [zoomImage, setZoomImage] = useState<string | null>(null);
  const [isZoomed, setIsZoomed] = useState(false);

  const submitLabel = mode === "create" ? "Create package" : "Save changes";

  async function handleUpload(files: FileList) {
    setIsUploading(true);
    setError(null);

    try {
      const uploads = Array.from(files).map(async (file) => {
        const formData = new FormData();
        formData.append("file", file);

        const response = await fetch("/api/admin/upload", {
          method: "POST",
          body: formData,
        });

        const result = await response.json();

        if (!response.ok) {
          throw new Error(result.error ?? "Upload failed.");
        }

        return result.data.url as string;
      });

      const urls = await Promise.all(uploads);

      setValues((current) => ({
        ...current,
        images: [...current.images, ...urls],
      }));
    } catch (err) {
      setError(err instanceof Error ? err.message : "Upload failed.");
    } finally {
      setIsUploading(false);
    }
  }

  function removeImage(url: string) {
    setValues((current) => ({
      ...current,
      images: current.images.filter((img) => img !== url),
    }));
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
    <>
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
              <p className="text-sm font-medium text-slate-900">Upload images</p>
              <p className="text-sm text-slate-500">
                Upload multiple images to Cloudinary. Click any image to zoom.
              </p>
            </div>
            <label className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800">
              {isUploading ? <Loader2 className="h-4 w-4 animate-spin" /> : <UploadCloud className="h-4 w-4" />}
              {isUploading ? "Uploading..." : "Choose images"}
              <input
                type="file"
                accept="image/*"
                multiple
                className="hidden"
                onChange={(event) => {
                  const files = event.target.files;
                  if (files && files.length > 0) {
                    void handleUpload(files);
                  }
                  event.target.value = ""; // allow re-selecting same file later
                }}
              />
            </label>
          </div>

{values.images?.length > 0 ? (
              <div className="flex flex-wrap gap-2">
                {values.images.map((url) => (
                  <div
                    key={url}
                    className="group relative h-16 w-16 shrink-0 overflow-hidden rounded-lg border border-slate-200 bg-white"
                  >
                    <img
                      src={url}
                      alt=""
                      className="h-full w-full cursor-zoom-in object-cover"
                      onClick={() => {
                        setZoomImage(url);
                        setIsZoomed(false);
                      }}
                    />
                    <button
                      type="button"
                      onClick={() => removeImage(url)}
                      className="absolute right-0.5 top-0.5 rounded-full bg-black/60 p-0.5 text-white opacity-0 transition group-hover:opacity-100"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </div>
                ))}
              </div>
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

      {/* Lightbox / zoom modal */}
      {zoomImage ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setZoomImage(null)}
        >
          <button
            type="button"
            onClick={() => setZoomImage(null)}
            className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
          >
            <X className="h-5 w-5" />
          </button>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={zoomImage}
            alt=""
            onClick={(event) => {
              event.stopPropagation();
              setIsZoomed((z) => !z);
            }}
            className={`max-h-[90vh] max-w-[90vw] rounded-lg transition-transform duration-300 ${
              isZoomed ? "scale-150 cursor-zoom-out" : "scale-100 cursor-zoom-in"
            }`}
          />
        </div>
      ) : null}
    </>
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