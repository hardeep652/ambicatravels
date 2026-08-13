import type {
  GalleryItem,
  NavLink,
  PackageItem,
  ServiceItem,
  SocialLink,
  StatItem,
  Testimonial,
  WhyChooseItem,
  CarItem,
  BusItem,
} from "@/types";

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Packages", href: "/packages" },
  { label: "Gallery", href: "/gallery" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
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
  address: "204, Shanti Arcade, C.G. Road, Navrangpura, Ahmedabad, Gujarat 403 4th floor, Dream Square, complex, under bridge, opp. Ramdevpir mandir, Akhbar Nagar, Nirnay Nagar, Ahmedabad, Gujarat 380013",
  mapsEmbedSrc:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.918!2d72.5566!3d23.0339!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDAyJzAyLjAiTiA3MsKwMzMnMjMuOCJF!5e0!3m2!1sen!2sin!4v1700000000000",
};

// ---------------------------------------------------------------------------
// Everything below is NEW — append it to the end of your existing data.ts.
// These three sections (How It Works, FAQs, Trust Badges) don't have a home
// in your current @/types file, so their types are declared locally here.
// Your existing PACKAGES, SERVICES, TESTIMONIALS, and GALLERY arrays are
// reused as-is for the new homepage preview sections — no duplicates needed.
// ---------------------------------------------------------------------------

export type ProcessStep = {
  id: string;
  title: string;
  description: string;
  icon: "phone" | "clipboard" | "card" | "plane";
};

export const HOW_IT_WORKS: ProcessStep[] = [
  {
    id: "enquire",
    title: "Tell us your plan",
    description:
      "Share where you want to go, your dates, and your budget — call, WhatsApp, or the form.",
    icon: "phone",
  },
  {
    id: "itinerary",
    title: "Get a tailored itinerary",
    description:
      "We reply within one working day with a clear, itemized plan — no vague packages.",
    icon: "clipboard",
  },
  {
    id: "confirm",
    title: "Confirm & pay securely",
    description:
      "Simple payment terms, transparent pricing, and a confirmed booking in writing.",
    icon: "card",
  },
  {
    id: "travel",
    title: "Travel with support",
    description:
      "24x7 support during your trip — someone always picks up if something needs sorting.",
    icon: "plane",
  },
];

export type FAQItem = {
  id: string;
  question: string;
  answer: string;
};

export const FAQS: FAQItem[] = [
  {
    id: "booking-window",
    question: "How far in advance should I book a holiday package?",
    answer:
      "For domestic trips, 3-4 weeks ahead gives us the best hotel and transport rates. For international holidays or peak season, we'd recommend 6-8 weeks to also allow time for visa processing.",
  },
  {
    id: "customization",
    question: "Do you customize packages, or are they fixed?",
    answer:
      "Every package on our site is a starting template. We adjust hotels, duration, add-ons, and pace to fit your group and budget — most bookings end up customized in some way.",
  },
  {
    id: "cancellation",
    question: "What's your cancellation and refund policy?",
    answer:
      "Cancellation terms depend on the hotels, airlines, and transport booked for your specific trip, since each has its own policy. We always share the exact terms in writing before you confirm payment.",
  },
  {
    id: "visa",
    question: "Do you help with visas for international trips?",
    answer:
      "Yes — we assist with documentation, application forms, and appointment scheduling. Visa approval itself is at the consulate's discretion, but we make sure your file is complete and submitted correctly.",
  },
  {
    id: "transport-only",
    question: "Can you arrange transport only, without a full package?",
    answer:
      "Absolutely. Car rental and bus rental bookings are available on their own, separate from our holiday packages.",
  },
];

export type TrustBadge = {
  id: string;
  label: string;
};

// IMPORTANT: only keep the badges that reflect real, current certifications —
// remove or edit any that don't apply before this goes live.
export const TRUST_BADGES: TrustBadge[] = [
  { id: "iata", label: "IATA Accredited" },
  { id: "taai", label: "TAAI Member" },
  { id: "iso", label: "ISO 9001:2015" },
  { id: "secure-payments", label: "Razorpay Secured Payments" },
];

export const CARS: CarItem[] = [
  {
    id: "swift-dzire",
    name: "Swift Dzire",
    category: "Sedan",
    seating: 4,
    transmission: "Manual",
    fuelType: "Petrol",
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=800&auto=format&fit=crop",
    description: "Perfect for city rides and short outstation trips. Fuel-efficient and comfortable for small families.",
    pricePerDay: 2200,
    pricePerKm: 12,
  },
  {
    id: "honda-city",
    name: "Honda City",
    category: "Sedan",
    seating: 4,
    transmission: "Automatic",
    fuelType: "Petrol",
    image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?q=80&w=800&auto=format&fit=crop",
    description: "Premium sedan with smooth automatic transmission. Ideal for business travel and long-distance comfort.",
    pricePerDay: 3500,
    pricePerKm: 16,
  },
  {
    id: "toyota-innova",
    name: "Toyota Innova Crysta",
    category: "SUV",
    seating: 6,
    transmission: "Manual",
    fuelType: "Diesel",
    image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=800&auto=format&fit=crop",
    description: "Spacious and reliable MPV. The go-to choice for family outstation trips and airport transfers with luggage.",
    pricePerDay: 3800,
    pricePerKm: 14,
  },
  {
    id: "mahindra-xuv700",
    name: "Mahindra XUV700",
    category: "SUV",
    seating: 6,
    transmission: "Automatic",
    fuelType: "Diesel",
    image: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?q=80&w=800&auto=format&fit=crop",
    description: "Modern SUV with advanced features and automatic gearbox. Great for highway drives and weekend getaways.",
    pricePerDay: 4800,
    pricePerKm: 18,
  },
  {
    id: "toyota-fortuner",
    name: "Toyota Fortuner",
    category: "Premium",
    seating: 7,
    transmission: "Automatic",
    fuelType: "Diesel",
    image: "https://images.unsplash.com/photo-1520031397389-2c90f2a6b65c?q=80&w=800&auto=format&fit=crop",
    description: "Flagship premium SUV with commanding road presence. Perfect for luxury travel and corporate VIP transport.",
    pricePerDay: 6500,
    pricePerKm: 22,
  },
  {
    id: "mercedes-e-class",
    name: "Mercedes E-Class",
    category: "Premium",
    seating: 4,
    transmission: "Automatic",
    fuelType: "Diesel",
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=800&auto=format&fit=crop",
    description: "Executive luxury sedan with plush interiors. Ideal for chauffeur-driven business and special occasions.",
    pricePerDay: 8500,
    pricePerKm: 28,
  },
  {
    id: "maruti-brezza",
    name: "Maruti Brezza",
    category: "SUV",
    seating: 5,
    transmission: "Manual",
    fuelType: "Petrol",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=800&auto=format&fit=crop",
    description: "Compact SUV with great ground clearance. Excellent for city commutes and short highway runs.",
    pricePerDay: 2800,
    pricePerKm: 13,
  },
  {
    id: "tata-altroz",
    name: "Tata Altroz",
    category: "Hatchback",
    seating: 4,
    transmission: "Manual",
    fuelType: "Petrol",
    image: "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?q=80&w=800&auto=format&fit=crop",
    description: "Premium hatchback with 5-star safety rating. Nimble for city traffic, comfortable for 2-3 passengers.",
    pricePerDay: 1800,
    pricePerKm: 11,
  },
];

export const BUSES: BusItem[] = [
  {
    id: "force-traveller",
    name: "Force Traveller",
    category: "Traveller",
    seating: 13,
    ac: true,
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=800&auto=format&fit=crop",
    description: "Compact AC traveller ideal for small groups, corporate outings and airport transfers with luggage.",
    pricePerDay: 5500,
    pricePerKm: 26,
  },
  {
    id: "mini-bus-21",
    name: "21-Seater Mini Bus",
    category: "Mini Bus",
    seating: 21,
    ac: true,
    image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?q=80&w=800&auto=format&fit=crop",
    description: "Comfortable mini bus for family functions, pilgrimages and short outstation group trips.",
    pricePerDay: 8000,
    pricePerKm: 32,
  },
  {
    id: "luxury-bus-35",
    name: "35-Seater Luxury Coach",
    category: "Luxury Bus",
    seating: 35,
    ac: true,
    image: "https://images.unsplash.com/photo-1556122071-e404eaedb77f?q=80&w=800&auto=format&fit=crop",
    description: "Push-back seats, ample legroom and boot space. Great for weddings, corporate events and long tours.",
    pricePerDay: 13000,
    pricePerKm: 42,
  },
  {
    id: "sleeper-bus-30",
    name: "30-Berth Sleeper Bus",
    category: "Sleeper Bus",
    seating: 30,
    ac: true,
    image: "https://images.unsplash.com/photo-1610646917147-3c1e4b4e0e5a?q=80&w=800&auto=format&fit=crop",
    description: "AC sleeper coach with berths for overnight journeys and multi-day pilgrimage tours.",
    pricePerDay: 15000,
    pricePerKm: 46,
  },
  {
    id: "large-bus-49",
    name: "49-Seater Large Bus",
    category: "Large Bus",
    seating: 49,
    ac: false,
    image: "https://images.unsplash.com/photo-1494515843206-f3117d3f51b7?q=80&w=800&auto=format&fit=crop",
    description: "High-capacity Non-AC bus for large groups, school trips and budget-friendly long-distance travel.",
    pricePerDay: 11000,
    pricePerKm: 38,
  },
  {
    id: "traveller-17-nonac",
    name: "17-Seater Traveller (Non-AC)",
    category: "Traveller",
    seating: 17,
    ac: false,
    image: "https://images.unsplash.com/photo-1464219789935-c2d9d9aba644?q=80&w=800&auto=format&fit=crop",
    description: "Economical Non-AC traveller for local sightseeing and short group commutes at a great value.",
    pricePerDay: 6000,
    pricePerKm: 24,
  },
];

