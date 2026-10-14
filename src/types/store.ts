export interface GeoLocation {
  latitude: number;
  longitude: number;
  mapUrl?: string;
}

export interface PostalAddress {
  streetAddress: string;
  addressLocality: string;
  addressRegion: string;
  postalCode: string;
  addressCountry: string;
}

export interface DayHours {
  dayOfWeek: string; // e.g. "Monday", "Tuesday", etc.
  opens: string;     // "09:00"
  closes: string;    // "21:00"
  isSpecial?: boolean;
  notes?: string;
}

export interface DepartmentEntity {
  id: string;
  name: string;
  slug: string;
  description: string;
  iconName: string;
  manager?: string;
  phoneExtension?: string;
  featuredServices: string[];
  trendingKeywords: string[];
}

export interface InStoreProduct {
  sku: string;
  gtin?: string;
  name: string;
  brand: string;
  category: string;
  price: number;
  salePrice?: number;
  availability: "InStock" | "LimitedAvailability" | "OutOfStock";
  quantityOnHand: number;
  aisle: string;
  bay?: string;
  pickupTimeMinutes: number;
  trendingNearMe: boolean;
  nearMeQueryIntent: string; // e.g. "Where can I buy a Yeti cooler near me right now?"
  imageUrl: string;
  highlights: string[];
}

export interface LocalFaq {
  question: string;
  answer: string;
}

export interface StoreEntity {
  id: string;
  slug: string; // e.g. "austin"
  name: string; // "Apex Sports + Outdoors - Austin, Texas"
  storeNumber: string; // "Store #0142"
  tagline: string;
  brand: string;
  description: string;
  establishedYear: number;
  squareFootage: number;
  telephone: string;
  email: string;
  priceRange: string;
  address: PostalAddress;
  geo: GeoLocation;
  regularHours: DayHours[];
  departments: DepartmentEntity[];
  inventory: InStoreProduct[];
  amenities: string[];
  faqs: LocalFaq[];
  aggregateRating: {
    ratingValue: number;
    reviewCount: number;
    bestRating: number;
  };
  localAnnouncements?: string[];
  heroImage: string;
}
