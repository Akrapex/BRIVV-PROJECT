export type TransactionType = "buy" | "rent" | "short-let" | "commercial" | "land";
export type PropertyType =
  | "Apartment"
  | "Duplex"
  | "Bungalow"
  | "Terrace"
  | "Detached House"
  | "Semi-Detached"
  | "Penthouse"
  | "Studio"
  | "Office Space"
  | "Shop"
  | "Warehouse"
  | "Land";

export interface Agent {
  id: string;
  name: string;
  agency: string;
  avatar: string;
  rating: number;
  reviews: number;
  phone: string;
  email: string;
  bio: string;
  verified: boolean;
  listings: number;
}

export interface Property {
  id: string;
  slug: string;
  title: string;
  description: string;
  transaction: TransactionType;
  type: PropertyType;
  price: number; // in NGN
  priceUnit?: "night" | "month" | "year" | "total";
  state: string;
  city: string;
  area: string;
  address: string;
  bedrooms: number;
  bathrooms: number;
  toilets: number;
  sqm: number;
  images: string[];
  amenities: string[];
  features: string[];
  furnished: boolean;
  parking: boolean;
  pool: boolean;
  newlyBuilt: boolean;
  featured: boolean;
  verified: boolean;
  status: "active" | "pending" | "sold" | "draft";
  agentId: string;
  views: number;
  createdAt: string;
  coords: { lat: number; lng: number };
}

export interface AppUser {
  id: string;
  name: string;
  email: string;
  avatar: string;
  role: "seeker" | "owner" | "agent" | "admin";
  phone?: string;
  location?: string;
  joined: string;
}

export interface Message {
  id: string;
  conversationId: string;
  senderId: string;
  text: string;
  at: string;
}

export interface Conversation {
  id: string;
  agentId: string;
  propertyId: string;
  lastMessage: string;
  lastAt: string;
  unread: number;
}

export interface Inspection {
  id: string;
  propertyId: string;
  userId: string;
  agentId: string;
  date: string;
  time: string;
  status: "pending" | "confirmed" | "completed" | "cancelled";
  note?: string;
}

export interface AppNotification {
  id: string;
  kind: "message" | "inspection" | "approval" | "update" | "account";
  title: string;
  body: string;
  at: string;
  read: boolean;
}