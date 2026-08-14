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

export async function listPackages(search?: string): Promise<RenderablePackage[]> {
  const dbPackages = await prisma.package.findMany({
    where: search
      ? {
          title: {
            contains: search,
            mode: "insensitive",
          },
        }
      : undefined,
    orderBy: {
      createdAt: "desc",
    },
  });

  if (dbPackages.length > 0) {
    return dbPackages;
  }

  return filterFallbackPackages(search);
}

export async function getPackageById(id: string) {
  const dbPackage = await prisma.package.findUnique({
    where: { id },
  });

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
  return prisma.package.create({
    data,
  });
}

export async function updatePackage(id: string, data: PackageInput) {
  return prisma.package.update({
    where: { id },
    data,
  });
}

export async function deletePackage(id: string) {
  return prisma.package.delete({
    where: { id },
  });
}
