import type { FallbackPackage } from "@/types";

const fallbackCreatedAt = new Date("2024-01-01T00:00:00.000Z");

export const fallbackPackages: FallbackPackage[] = [
  {
    id: "bali-indonesia",
    title: "Bali Escape Package",
    slug: "bali-indonesia",
    location: "Indonesia",
    duration: "6 Days / 5 Nights",
    price: "Custom quote",
    description:
      "A curated Bali getaway covering resort stays, island experiences, and flexible sightseeing for couples and families.",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?q=80&w=1600&auto=format&fit=crop",
    featured: true,
    destination: "Bali",
    code: "DPS",
    country: "Indonesia",
    image:
      "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?q=80&w=1600&auto=format&fit=crop",
    tags: ["Honeymoon", "Beaches"],
    rating: 4.9,
    createdAt: fallbackCreatedAt,
    updatedAt: fallbackCreatedAt,
  },
  {
    id: "santorini-greece",
    title: "Santorini Luxury Package",
    slug: "santorini-greece",
    location: "Greece",
    duration: "7 Days / 6 Nights",
    price: "Custom quote",
    description:
      "A premium Santorini itinerary with cliffside stays, sunset cruises, and a pace designed for a relaxed honeymoon trip.",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=1600&auto=format&fit=crop",
    featured: true,
    destination: "Santorini",
    code: "JTR",
    country: "Greece",
    image:
      "https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=1600&auto=format&fit=crop",
    tags: ["Honeymoon", "Luxury"],
    rating: 5,
    createdAt: fallbackCreatedAt,
    updatedAt: fallbackCreatedAt,
  },
  {
    id: "swiss-alps",
    title: "Swiss Alps Adventure Package",
    slug: "swiss-alps",
    location: "Switzerland",
    duration: "8 Days / 7 Nights",
    price: "Custom quote",
    description:
      "A scenic Switzerland holiday built around alpine views, comfortable intercity travel, and adventure-friendly stopovers.",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=1600&auto=format&fit=crop",
    featured: true,
    destination: "Interlaken",
    code: "ZRH",
    country: "Switzerland",
    image:
      "https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=1600&auto=format&fit=crop",
    tags: ["Adventure", "Scenic"],
    rating: 4.8,
    createdAt: fallbackCreatedAt,
    updatedAt: fallbackCreatedAt,
  },
  {
    id: "dubai-uae",
    title: "Dubai Family Package",
    slug: "dubai-uae",
    location: "UAE",
    duration: "5 Days / 4 Nights",
    price: "Custom quote",
    description:
      "A Dubai package combining city highlights, shopping time, and family-friendly attractions with smooth transfers.",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1600&auto=format&fit=crop",
    featured: false,
    destination: "Dubai",
    code: "DXB",
    country: "UAE",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1600&auto=format&fit=crop",
    tags: ["Family", "Shopping"],
    rating: 4.7,
    createdAt: fallbackCreatedAt,
    updatedAt: fallbackCreatedAt,
  },
  {
    id: "kerala-india",
    title: "Kerala Nature Package",
    slug: "kerala-india",
    location: "India",
    duration: "5 Days / 4 Nights",
    price: "Custom quote",
    description:
      "A Kerala trip focused on backwaters, greenery, and relaxed sightseeing, suitable for couples and families alike.",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=1600&auto=format&fit=crop",
    featured: false,
    destination: "Kerala",
    code: "COK",
    country: "India",
    image:
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=1600&auto=format&fit=crop",
    tags: ["Backwaters", "Nature"],
    rating: 4.8,
    createdAt: fallbackCreatedAt,
    updatedAt: fallbackCreatedAt,
  },
  {
    id: "maldives",
    title: "Maldives Honeymoon Package",
    slug: "maldives",
    location: "Maldives",
    duration: "4 Days / 3 Nights",
    price: "Custom quote",
    description:
      "A honeymoon-first Maldives escape featuring island stays, leisure time, and a short luxury tropical break.",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=1600&auto=format&fit=crop",
    featured: true,
    destination: "Maldives",
    code: "MLE",
    country: "Maldives",
    image:
      "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=1600&auto=format&fit=crop",
    tags: ["Honeymoon", "Overwater Villas"],
    rating: 5,
    createdAt: fallbackCreatedAt,
    updatedAt: fallbackCreatedAt,
  },
];
