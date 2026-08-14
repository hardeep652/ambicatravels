import type { Package } from "@prisma/client";
import type { FallbackPackage } from "@/types";

export type RenderablePackage = Package | FallbackPackage;

export function getPackageImage(pkg: RenderablePackage) {
  if ("image" in pkg && pkg.image) {
    return pkg.image;
  }

  return (
    pkg.thumbnailUrl ||
    "https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=1600&auto=format&fit=crop"
  );
}

export function getPackageTags(pkg: RenderablePackage) {
  if ("tags" in pkg && pkg.tags.length > 0) {
    return pkg.tags;
  }

  return [pkg.location, pkg.duration].filter(Boolean).slice(0, 2);
}
