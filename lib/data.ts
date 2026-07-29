import type {
  GalleryItem,
  NavLink,
  PackageItem,
  ServiceItem,
  SocialLink,
  StatItem,
  Testimonial,
  WhyChooseItem,
} from "@/types";

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Packages", href: "#packages" },
  { label: "Gallery", href: "#gallery" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export const HERO_SLIDES = [
  {
    id: "santorini",
    image:
      "https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=2400&auto=format&fit=crop",
    alt: "Whitewashed cliffside village overlooking the sea in Santorini, Greece",
  },
  {
    id: "maldives",
    image:
      "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?q=80&w=2400&auto=format&fit=crop",
    alt: "The Taj Mahal at sunrise reflected in still water",
  },
  {
    id: "swiss-alps",
    image:
      "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?q=80&w=2400&auto=format&fit=crop",
    alt: "Snow-capped Swiss Alps under a clear blue sky",
  },
  {
    id: "bali",
    image:
      "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?q=80&w=2400&auto=format&fit=crop",
    alt: "Terraced rice fields in Bali, Indonesia at golden hour",
  },
];

export const STATS: StatItem[] = [
  { id: "travelers", value: 25000, suffix: "+", label: "Happy Travelers" },
  { id: "destinations", value: 120, suffix: "+", label: "Destinations Covered" },
  { id: "years", value: 15, suffix: "+", label: "Years of Trust" },
  { id: "rating", value: 4.9, suffix: "/5", label: "Average Rating" },
];

export const SERVICES: ServiceItem[] = [
  {
    id: "car-rental",
    title: "Car Rental",
    description:
      "Self-drive or chauffeur-driven cars, sanitised and serviced, ready whenever your journey begins.",
    icon: "car",
    image:
      "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=1600&auto=format&fit=crop",
    features: ["Airport transfers", "Outstation trips", "Hourly & daily rentals"],
  },
  {
    id: "bus-rental",
    title: "Bus Rental",
    description:
      "Comfortable mini-buses and coaches for group tours, weddings, corporate offsites and pilgrimages.",
    icon: "bus",
    image:
      "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=1600&auto=format&fit=crop",
    features: ["12 to 45 seater fleet", "Experienced drivers", "Pan-India routes"],
  },
  {
    id: "holiday-packages",
    title: "Holiday Packages",
    description:
      "Curated domestic and international itineraries, handled end-to-end so you only need to pack your bags.",
    icon: "package",
    image:
      "https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=1600&auto=format&fit=crop",
    features: ["Custom itineraries", "Visa assistance", "24x7 trip support"],
  },
];

export const WHY_CHOOSE_US: WhyChooseItem[] = [
  {
    id: "trusted",
    title: "15+ Years of Trust",
    description:
      "A name Gujarat has relied on since 2009, built purely on referrals and repeat travelers.",
    icon: "shield",
  },
  {
    id: "support",
    title: "24x7 Trip Support",
    description:
      "A real person answers when you call — before you book, mid-trip, or after you're home.",
    icon: "headset",
  },
  {
    id: "value",
    title: "Transparent Pricing",
    description:
      "No hidden add-ons. Every quote lists exactly what's included before you decide.",
    icon: "wallet",
  },
  {
    id: "network",
    title: "On-Ground Network",
    description:
      "Verified local partners in 120+ destinations for the details that matter after landing.",
    icon: "map",
  },
];

export const PACKAGES: PackageItem[] = [
  {
    id: "bali-indonesia",
    destination: "Bali",
    code: "DPS",
    country: "Indonesia",
    duration: "6 Days / 5 Nights",
    image:
      "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?q=80&w=1600&auto=format&fit=crop",
    tags: ["Honeymoon", "Beaches"],
    rating: 4.9,
  },
  {
    id: "santorini-greece",
    destination: "Santorini",
    code: "JTR",
    country: "Greece",
    duration: "7 Days / 6 Nights",
    image:
      "https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=1600&auto=format&fit=crop",
    tags: ["Honeymoon", "Luxury"],
    rating: 5.0,
  },
  {
    id: "swiss-alps",
    destination: "Interlaken",
    code: "ZRH",
    country: "Switzerland",
    duration: "8 Days / 7 Nights",
    image:
      "https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=1600&auto=format&fit=crop",
    tags: ["Adventure", "Scenic"],
    rating: 4.8,
  },
  {
    id: "dubai-uae",
    destination: "Dubai",
    code: "DXB",
    country: "UAE",
    duration: "5 Days / 4 Nights",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1600&auto=format&fit=crop",
    tags: ["Family", "Shopping"],
    rating: 4.7,
  },
  {
    id: "kerala-india",
    destination: "Kerala",
    code: "COK",
    country: "India",
    duration: "5 Days / 4 Nights",
    image:
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=1600&auto=format&fit=crop",
    tags: ["Backwaters", "Nature"],
    rating: 4.8,
  },
  {
    id: "maldives",
    destination: "Maldives",
    code: "MLE",
    country: "Maldives",
    duration: "4 Days / 3 Nights",
    image:
      "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=1600&auto=format&fit=crop",
    tags: ["Honeymoon", "Overwater Villas"],
    rating: 5.0,
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "priya-mehta",
    name: "Priya Mehta",
    location: "Ahmedabad",
    rating: 5,
    quote:
      "Ambica Travels planned our Bali honeymoon down to the last detail. Every transfer was on time and their local contact was available whenever we needed help.",
    trip: "Bali Honeymoon",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: "rakesh-shah",
    name: "Rakesh Shah",
    location: "Surat",
    rating: 5,
    quote:
      "We booked a 40-seater for our family function and the coach, driver and punctuality were all excellent. Straightforward pricing with nothing sprung on us later.",
    trip: "Bus Rental — Family Function",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: "neha-joshi",
    name: "Neha Joshi",
    location: "Vadodara",
    rating: 5,
    quote:
      "Our Switzerland itinerary was paced perfectly — enough time at each stop without feeling rushed. Visa paperwork was handled entirely by their team.",
    trip: "Switzerland Holiday Package",
    avatar:
      "https://images.unsplash.com/photo-1546961329-78bef0414d7c?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: "arjun-patel",
    name: "Arjun Patel",
    location: "Ahmedabad",
    rating: 4,
    quote:
      "Used their self-drive car rental for a weekend trip to Mount Abu. Car was in great condition and the pickup process took less than ten minutes.",
    trip: "Car Rental — Mount Abu",
    avatar:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=200&auto=format&fit=crop",
  },
];

export const GALLERY: GalleryItem[] = [
  {
    id: "gallery-1",
    title: "Cliffside sunsets",
    location: "Santorini, Greece",
    image:
      "https://images.unsplash.com/photo-1469796466635-455ede028aca?q=80&w=1400&auto=format&fit=crop",
    span: "tall",
  },
  {
    id: "gallery-2",
    title: "Overwater villas",
    location: "Maldives",
    image:
      "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?q=80&w=1400&auto=format&fit=crop",
    span: "wide",
  },
  {
    id: "gallery-3",
    title: "Rice terraces",
    location: "Ubud, Bali",
    image:
      "https://images.unsplash.com/photo-1531592937781-344ad608fabf?q=80&w=1400&auto=format&fit=crop",
  },
  {
    id: "gallery-4",
    title: "Alpine trails",
    location: "Interlaken, Switzerland",
    image:
      "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?q=80&w=1400&auto=format&fit=crop",
  },
  {
    id: "gallery-5",
    title: "Desert skyline",
    location: "Dubai, UAE",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1400&auto=format&fit=crop",
    span: "wide",
  },
  {
    id: "gallery-6",
    title: "Backwater houseboats",
    location: "Alleppey, Kerala",
    image:
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=1400&auto=format&fit=crop",
    span: "tall",
  },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { label: "Instagram", href: "https://instagram.com", icon: "instagram" },
  { label: "Facebook", href: "https://facebook.com", icon: "facebook" },
  { label: "Twitter", href: "https://twitter.com", icon: "twitter" },
  { label: "YouTube", href: "https://youtube.com", icon: "youtube" },
];

export const CONTACT = {
  phone: "+91 98765 43210",
  whatsapp: "+91 98765 43210",
  email: "hello@ambicatravels.com",
  address: "204, Shanti Arcade, C.G. Road, Navrangpura, Ahmedabad, Gujarat 380009",
  mapsEmbedSrc:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.918!2d72.5566!3d23.0339!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDAyJzAyLjAiTiA3MsKwMzMnMjMuOCJF!5e0!3m2!1sen!2sin!4v1700000000000",
};
