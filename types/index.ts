export interface NavLink {
  label: string;
  href: string;
}

export interface StatItem {
  id: string;
  value: number;
  suffix?: string;
  label: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: "car" | "bus" | "package";
  image: string;
  features: string[];
}

export interface WhyChooseItem {
  id: string;
  title: string;
  description: string;
  icon: "shield" | "headset" | "wallet" | "map";
}

export interface PackageItem {
  id: string;
  destination: string;
  code: string;
  country: string;
  duration: string;
  image: string;
  tags: string[];
  rating: number;
}

export interface FallbackPackage {
  id: string;
  title: string;
  slug: string;
  location: string;
  duration: string;
  price: string;
  description: string;
  thumbnailUrl: string;
  featured: boolean;
  destination: string;
  code: string;
  country: string;
  image: string;
  tags: string[];
  rating: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  quote: string;
  trip: string;
  avatar: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  location: string;
  image: string;
  span?: "wide" | "tall" | "normal";
}

export interface SocialLink {
  label: string;
  href: string;
  icon: "instagram" | "facebook" | "twitter" | "youtube";
}
