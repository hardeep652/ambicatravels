import { z } from "zod";

export const packageSchema = z.object({
  title: z.string().trim().optional(),
  slug: z.string().trim().optional(),
  location: z.string().trim().optional(),
  duration: z.string().trim().optional(),
  price: z.string().trim().optional(),
  description: z.string().trim().optional(),
  images: z.array(z.string()).optional().default([]),
  featured: z.boolean().default(false),
});

export type PackageInput = z.infer<typeof packageSchema>;

export const packageSearchSchema = z.object({
  search: z.string().trim().optional().default(""),
});
