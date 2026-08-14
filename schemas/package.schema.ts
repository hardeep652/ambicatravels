import { z } from "zod";

export const packageSchema = z.object({
  title: z.string().trim().min(3, "Title must be at least 3 characters."),
  slug: z
    .string()
    .trim()
    .min(3, "Slug must be at least 3 characters.")
    .regex(
      /^[a-z0-9]+(?:-[a-z0-9]+)*$/,
      "Slug must use lowercase letters, numbers, and hyphens only."
    ),
  location: z.string().trim().min(2, "Location must be at least 2 characters."),
  duration: z.string().trim().min(2, "Duration is required."),
  price: z.string().trim().min(1, "Price is required."),
  description: z.string().trim().min(20, "Description must be at least 20 characters."),
  thumbnailUrl: z
    .string()
    .trim()
    .url("Thumbnail URL must be a valid URL.")
    .or(z.literal(""))
    .optional()
    .transform((value) => value || null),
  featured: z.boolean().default(false),
});

export type PackageInput = z.infer<typeof packageSchema>;

export const packageSearchSchema = z.object({
  search: z.string().trim().optional().default(""),
});
