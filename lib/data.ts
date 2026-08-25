import type {
  GalleryItem,
  NavLink,
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
    id: "gallery-7",
    title: "Golden hour at the beach",
    location: "Goa, India",
    image:
      "https://res.cloudinary.com/ozr2ckrb/image/upload/v1787678230/WhatsApp_Image_2026-08-25_at_9.39.15_PM_2.jpg",
    span: "tall",
    description: "A couple watching the sunset on Goa's shores — the warm hues and relaxed vibe reflect the perfect end to a seamless Ambica-planned beach getaway."
  },
  {
    id: "gallery-8",
    title: "Family at a landmark",
    location: "Dubai, UAE",
    image:
      "https://res.cloudinary.com/ozr2ckrb/image/upload/v1787678230/WhatsApp_Image_2026-08-25_at_9.39.15_PM_1.jpg",
    span: "wide",
    description: "A multigenerational family posing at the Burj Khalifa, celebrating a hassle-free Dubai trip organized entirely by Ambica Travels."
  },
  {
    id: "gallery-9",
    title: "Trip group smiling",
    location: "Bangkok, Thailand",
    image:
      "https://res.cloudinary.com/ozr2ckrb/image/upload/v1787678230/WhatsApp_Image_2026-08-25_at_9.39.16_PM.jpg",
    span: "normal",
    description: "Friends enjoying a street-food tour in Bangkok, curated by Ambica Travels with seamless transfers and insider recommendations."
  },
  {
    id: "gallery-10",
    title: "City skyline at dusk",
    location: "Dubai, UAE",
    image:
      "https://res.cloudinary.com/ozr2ckrb/image/upload/v1787678229/WhatsApp_Image_2026-08-25_at_9.39.17_PM_1.jpg",
    span: "wide",
    description: "The Dubai skyline glowing at twilight — a Ambica-curated evening desert safari that guests still talk about."
  },
  {
    id: "gallery-11",
    title: "Mountain vistas",
    location: "Manali, India",
    image:
      "https://res.cloudinary.com/ozr2ckrb/image/upload/v1787678229/WhatsApp_Image_2026-08-25_at_9.39.17_PM.jpg",
    span: "tall",
    description: "Snow-capped peaks and lush valleys — a trekking itinerary planned by Ambica Travels, where every altitude change was accounted for."
  },
  {
    id: "gallery-12",
    title: "Road trip joy",
    location: "Rajasthan, India",
    image:
      "https://res.cloudinary.com/ozr2ckrb/image/upload/v1787678229/WhatsApp_Image_2026-08-25_at_9.39.18_PM.jpg",
    span: "normal",
    description: "A road trip through Rajasthan's golden desert routes, with Ambica Travels handling the vehicle and route planning so the travelers could just enjoy the ride."
  },
  {
    id: "gallery-13",
    title: "Heritage exploration",
    location: "Jaipur, India",
    image:
      "https://res.cloudinary.com/ozr2ckrb/image/upload/v1787678229/WhatsApp_Image_2026-08-25_at_9.39.14_PM.jpg",
    span: "tall",
    description: "Exploring Jaipur's magnificent forts and palaces with Ambica Travel's expert guides, bringing history to life for every visitor."
  },
  {
    id: "gallery-14",
    title: "Sunset reflections",
    location: "Kerala, India",
    image:
      "https://res.cloudinary.com/ozr2ckrb/image/upload/v1787678229/WhatsApp_Image_2026-08-25_at_9.39.19_PM.jpg",
    span: "wide",
    description: "Backwaters at sunset in Kerala — a tranquil end to a Kerala houseboat package flawlessly coordinated by Ambica Travels."
  },
  {
    id: "gallery-15",
    title: "Travel memories",
    location: "Gujarat, India",
    image:
      "https://res.cloudinary.com/ozr2ckrb/image/upload/v1787678228/WhatsApp_Image_2026-08-25_at_9.39.14_PM_1.jpg",
    span: "normal",
    description: "A candid moment from a Gujarat cultural tour with Ambica Travels, capturing the joy of discovering new places with loved ones."
  },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { label: "Instagram", href: "https://www.instagram.com/ambicatravels.official/", icon: "instagram" },
  { label: "Facebook", href: "https://www.facebook.com/profile.php?id=100057531126292&mibextid=rS40aB7S9Ucbxw6v", icon: "facebook" },
  { label: "YouTube", href: "https://www.youtube.com/channel/UCTu2g4gPwT8CTlode689uGQ", icon: "youtube" },
];

export const CONTACT = {
  phone: "+91-7203035985",
  whatsapp: "+91 7203035985",
  email: "info@ambikatravels.com",
  address: "204, Shanti Arcade, C.G. Road, Navrangpura, Ahmedabad, Gujarat 403 4th floor, Dream Square, complex, under bridge, opp. Ramdevpir mandir, Akhbar Nagar, Nirnay Nagar, Ahmedabad, Gujarat 380013",
  mapsEmbedSrc:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.918!2d72.5566!3d23.0339!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDAyJzAyLjAiTiA3MsKwMzMnMjMuOCJF!5e0!3m2!1sen!2sin!4v1700000000000",
};

// ---------------------------------------------------------------------------
// WhatsApp "Plan This Trip" helper
// ---------------------------------------------------------------------------

function encodeMessage(text: string): string {
  return encodeURIComponent(text).replace(/%20/g, "+");
}

export function generateWhatsAppMessage(pkg: { title: string; location?: string; duration: string; price: string; description?: string }): string {
  const {
    title,
    location,
    duration,
    price,
    description,
  } = pkg;

  const destination = location || "Not specified";
  const travelDates = "Not specified"; // not stored in package data
  const travelers = "Not specified"; // not stored in package data

  const itinerary = description || "Itinerary details not available";

  const inclusions = "Not specified"; // not explicitly stored
  const exclusions = "Not specified"; // not explicitly stored

  const message = `*Trip/Package Name*: ${title}
*Destination*: ${destination}
*Duration*: ${duration}
*Travel Dates*: ${travelDates}
*Number of Travelers*: ${travelers}
*Package Price*: ${price}
*Itinerary / Trip Highlights*: ${itinerary}
*Inclusions*: ${inclusions}
*Exclusions*: ${exclusions}`;

  return encodeMessage(message);
}

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
    id: "toyota-innova-crysta",
    name: "Toyota Innova Crysta",
    category: "Premium",
    seating: 7,
    transmission: "Manual",
    fuelType: "Diesel",
    image: "https://res.cloudinary.com/ozr2ckrb/image/upload/v1786617733/ChatGPT_Image_Aug_12_2026_11_14_43_PM.png",
    description:
      "Spacious and comfortable Toyota Innova Crysta, ideal for family trips, tours, and long-distance travel. Offers a comfortable interior, AC facility, and a smooth and reliable travel experience.",
  },
];

export const BUSES: BusItem[] = [
  {
    id: "force-traveller",
    name: "Force Traveller",
    category: "Traveller",
    seating: 17,
    ac: true,
    image: "https://res.cloudinary.com/ozr2ckrb/image/upload/v1786618162/ChatGPT_Image_Aug_12_2026_11_17_33_PM.png",
    description:
      "Comfortable and spacious Force Traveller with premium reclining seats, air-conditioning, ample interior space, and a smooth travel experience. Ideal for family trips, group tours, outstation travel, and long-distance journeys.",
  },
  {
    id: "force-urbania",
    name: "Force Urbania",
    category: "Traveller",
    seating: 17,
    ac: true,
    image: "https://res.cloudinary.com/ozr2ckrb/image/upload/v1786618170/ChatGPT_Image_Aug_12_2026_11_17_21_PM.png",
    description:
      "Premium Force Urbania with comfortable reclining seats, air conditioning, spacious interiors, large windows with curtains, and a smooth travel experience. Ideal for family trips, group tours, corporate travel, and long-distance journeys.",
  },
  {
    id: "ambica-luxury-tourist-bus",
    name: "Ambica Luxury Tourist Bus",
    category: "Luxury Bus",
    seating: 35,
    ac: true,
    image: "https://res.cloudinary.com/ozr2ckrb/image/upload/v1786618741/ChatGPT_Image_Aug_13_2026_04_28_10_PM.png",
    description:
      "Premium luxury tourist bus featuring comfortable pushback seats, air conditioning, spacious legroom, premium interiors, and a refined travel experience. Ideal for family trips, group tours, pilgrimage journeys, and outstation travel.",
  },
  {
    id: "ambica-mercedes-luxury-coach",
    name: "Ambica Mercedes Luxury Coach",
    category: "Luxury Bus",
    seating: 45,
    ac: true,
    image: "https://res.cloudinary.com/ozr2ckrb/image/upload/v1786618842/ChatGPT_Image_Aug_13_2026_04_30_24_PM.png",
    description:
      "Premium Mercedes-Benz luxury tourist coach featuring luxury seating, spacious interiors, powerful air conditioning, comfortable pushback seats, and a smooth and safe travel experience. Ideal for family trips, group tours, pilgrimage journeys, corporate travel, and long-distance travel.",
  },
  {
    id: "ambica-mercedes-tourist-coach",
    name: "Ambica Mercedes Tourist Coach",
    category: "Luxury Bus",
    seating: 45,
    ac: true,
    image: "https://res.cloudinary.com/ozr2ckrb/image/upload/v1786619032/ambica_bus_collage_no_text.png",
    description:
      "Premium Mercedes-Benz tourist coach designed for comfortable and memorable journeys, featuring spacious seating, air conditioning, premium interiors, and a smooth travel experience. Ideal for group tours, family trips, pilgrimage journeys, and long-distance travel.",
  },
  {
    id: "ambica-luxury-tourist-coach-2",
    name: "Ambica Luxury Tourist Coach",
    category: "Luxury Bus",
    seating: 45,
    ac: true,
    image: "https://res.cloudinary.com/ozr2ckrb/image/upload/v1786619131/ambica_bus_second_collage_no_text.png",
    description:
      "Premium Ambica luxury tourist coach featuring comfortable luxury seating, air conditioning, spacious interiors, curtains, and a smooth and reliable travel experience. Ideal for family trips, group tours, pilgrimage journeys, and long-distance outstation travel.",
  },
];

