import { prisma } from "@/lib/prisma";
import { fallbackPackages } from "@/lib/fallback-packages";
import type { RenderablePackage } from "@/lib/package-presenters";
import type { PackageInput } from "@/schemas/package.schema";

function filterFallbackPackages(search?: string) {
  if (!search) {
    return fallbackPackages;
  }

  const normalizedSearch = search.toLowerCase();

  return fallbackPackages.filter((pkg) =>
    pkg.title.toLowerCase().includes(normalizedSearch)
  );
}

function dbPackageWhere(search?: string) {
  return search
    ? {
        title: {
          contains: search,
          mode: "insensitive" as const,
        },
      }
    : undefined;
}

export async function listAdminPackages(search?: string) {
  return prisma.package.findMany({
    where: dbPackageWhere(search),
    orderBy: {
      createdAt: "desc",
    },
  });
}

export async function listPackages(search?: string): Promise<RenderablePackage[]> {
  const dbPackages = await listAdminPackages(search);

  if (dbPackages.length > 0) {
    return dbPackages;
  }

  return filterFallbackPackages(search);
}

export async function getAdminPackageById(id: string) {
  return prisma.package.findUnique({
    where: { id },
  });
}

export async function getPackageById(id: string) {
  const dbPackage = await getAdminPackageById(id);

  if (dbPackage) {
    return dbPackage;
  }

  return fallbackPackages.find((pkg) => pkg.id === id) ?? null;
}

export async function getPackageBySlug(slug: string) {
  const dbPackage = await prisma.package.findUnique({
    where: { slug },
  });

  if (dbPackage) {
    return dbPackage;
  }

  return fallbackPackages.find((pkg) => pkg.slug === slug) ?? null;
}

export async function getFeaturedPackages(limit = 6): Promise<RenderablePackage[]> {
  const featured = await prisma.package.findMany({
    where: { featured: true },
    orderBy: {
      updatedAt: "desc",
    },
    take: limit,
  });

  if (featured.length > 0) {
    return featured;
  }

  const dbPackages = await prisma.package.findMany({
    orderBy: {
      updatedAt: "desc",
    },
    take: limit,
  });

  if (dbPackages.length > 0) {
    return dbPackages;
  }

  return fallbackPackages.filter((pkg) => pkg.featured).slice(0, limit);
}

export async function createPackage(data: PackageInput) {
  const title = data.title?.trim() || "Untitled Package";
  const slug = data.slug?.trim() || `package-${Date.now()}`;

  return prisma.package.create({
    data: {
      title,
      slug,
      location: data.location?.trim() || "Not specified",
      duration: data.duration?.trim() || "—",
      price: data.price?.trim() || "On request",
      description: data.description?.trim() || "",
      images: data.images?.length ? data.images : [],
      featured: data.featured ?? false,
    },
  });
}

export async function updatePackage(id: string, data: PackageInput) {
  const updateData: Record<string, unknown> = {};

  if (data.title !== undefined) {
    updateData.title = data.title.trim() || "Untitled Package";
  }
  if (data.slug !== undefined) {
    updateData.slug = data.slug.trim() || `package-${id}`;
  }
  if (data.location !== undefined) {
    updateData.location = data.location.trim() || "Not specified";
  }
  if (data.duration !== undefined) {
    updateData.duration = data.duration.trim() || "—";
  }
  if (data.price !== undefined) {
    updateData.price = data.price.trim() || "On request";
  }
  if (data.description !== undefined) {
    updateData.description = data.description.trim() || "";
  }
  if (data.images !== undefined) {
    updateData.images = data.images ?? [];
  }
  if (data.featured !== undefined) {
    updateData.featured = data.featured;
  }

  return prisma.package.update({
    where: { id },
    data: updateData,
  });
}

export async function deletePackage(id: string) {
  return prisma.package.delete({
    where: { id },
  });
}
