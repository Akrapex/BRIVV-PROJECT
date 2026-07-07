import type { Property } from "./types";

// Curated Unsplash real-estate photos (all free / royalty-free).
const IMG = {
  modernA: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&q=80",
  modernB: "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=1600&q=80",
  modernC: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600&q=80",
  modernD: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1600&q=80",
  duplexA: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600&q=80",
  duplexB: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1600&q=80",
  duplexC: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1600&q=80",
  aptA: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1600&q=80",
  aptB: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1600&q=80",
  aptC: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1600&q=80",
  villaA: "https://images.unsplash.com/photo-1613977257592-4871e5fcd7c4?w=1600&q=80",
  villaB: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1600&q=80",
  villaC: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1600&q=80",
  landA: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1600&q=80",
  landB: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1600&q=80",
  officeA: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80",
  officeB: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1600&q=80",
  shopA: "https://images.unsplash.com/photo-1567521464027-f127ff144326?w=1600&q=80",
  warehouseA: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=1600&q=80",
  penthouseA: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=1600&q=80",
  bungalowA: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=1600&q=80",
  studioA: "https://images.unsplash.com/photo-1502672023488-70e25813eb80?w=1600&q=80",
  terraceA: "https://images.unsplash.com/photo-1600566753086-00f18fe6ba68?w=1600&q=80",
};

const AMENITIES_ALL = [
  "Air conditioning", "Backup generator", "Borehole water", "24/7 security",
  "CCTV", "Fitted kitchen", "Wardrobes", "Balcony", "Gym", "Elevator",
  "Study room", "Boys quarter", "Solar power", "Smart home", "Garden"
];

function pickAmen(seed: number, n: number) {
  const arr = [...AMENITIES_ALL];
  const out: string[] = [];
  let s = seed;
  while (out.length < n && arr.length) {
    s = (s * 9301 + 49297) % 233280;
    const i = Math.floor((s / 233280) * arr.length);
    out.push(arr.splice(i, 1)[0]);
  }
  return out;
}

const slug = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

type Seed = Omit<Property, "id" | "slug" | "createdAt" | "views" | "amenities" | "features" | "status" | "verified" | "coords"> & {
  amenN?: number;
};

const RAW: Seed[] = [
  { title: "Serene 4-Bedroom Duplex with Pool", description: "Freshly built duplex in a serene, gated community with 24/7 security, private pool, and beautifully landscaped garden.", transaction: "buy", type: "Duplex", price: 285_000_000, state: "Lagos", city: "Lekki", area: "Lekki Phase 1", address: "12 Palm Court Drive, Lekki Phase 1", bedrooms: 4, bathrooms: 5, toilets: 6, sqm: 420, images: [IMG.duplexA, IMG.duplexB, IMG.modernC, IMG.villaA, IMG.modernD], furnished: false, parking: true, pool: true, newlyBuilt: true, featured: true, agentId: "a5" },
  { title: "Modern 3-Bed Apartment in Ikoyi", description: "Chic serviced apartment on the 12th floor with panoramic Lagos skyline views, gym, and pool access.", transaction: "rent", type: "Apartment", price: 18_000_000, priceUnit: "year", state: "Lagos", city: "Ikoyi", area: "Bourdillon", address: "5 Bourdillon Road, Ikoyi", bedrooms: 3, bathrooms: 3, toilets: 4, sqm: 220, images: [IMG.aptA, IMG.aptB, IMG.modernB, IMG.penthouseA], furnished: true, parking: true, pool: true, newlyBuilt: false, featured: true, agentId: "a1" },
  { title: "Executive 5-Bed Villa in Maitama", description: "Palatial detached villa featuring a private cinema, gym, sauna, and staff quarters. Ambassadorial neighborhood.", transaction: "buy", type: "Detached House", price: 950_000_000, state: "FCT Abuja", city: "Maitama", area: "Maitama District", address: "22 Ibrahim Tahir Ln, Maitama", bedrooms: 5, bathrooms: 6, toilets: 7, sqm: 780, images: [IMG.villaB, IMG.villaC, IMG.duplexC, IMG.modernA], furnished: true, parking: true, pool: true, newlyBuilt: true, featured: true, agentId: "a2" },
  { title: "Cozy 1-Bed Studio Short-let", description: "Perfect for business travelers. Includes daily housekeeping, fast Wi-Fi, and 24/7 concierge.", transaction: "short-let", type: "Studio", price: 65_000, priceUnit: "night", state: "FCT Abuja", city: "Wuse 2", area: "Aminu Kano Cres", address: "10 Aminu Kano Cres, Wuse 2", bedrooms: 1, bathrooms: 1, toilets: 1, sqm: 55, images: [IMG.studioA, IMG.aptA, IMG.modernB], furnished: true, parking: true, pool: false, newlyBuilt: false, featured: false, agentId: "a11" },
  { title: "Corner-piece Land in Gwarinpa", description: "1,200 sqm dry land with C of O. Fenced, gated, ready for immediate development.", transaction: "land", type: "Land", price: 145_000_000, state: "FCT Abuja", city: "Gwarinpa", area: "3rd Avenue", address: "Plot 45, 3rd Avenue, Gwarinpa", bedrooms: 0, bathrooms: 0, toilets: 0, sqm: 1200, images: [IMG.landA, IMG.landB], furnished: false, parking: false, pool: false, newlyBuilt: false, featured: false, agentId: "a10" },
  { title: "Grade-A Office Space, Victoria Island", description: "Open-plan Grade-A office on the 8th floor with skyline views, dedicated parking, and backup power.", transaction: "commercial", type: "Office Space", price: 45_000_000, priceUnit: "year", state: "Lagos", city: "Victoria Island", area: "Adeola Odeku", address: "Adeola Odeku St, Victoria Island", bedrooms: 0, bathrooms: 4, toilets: 4, sqm: 380, images: [IMG.officeA, IMG.officeB], furnished: false, parking: true, pool: false, newlyBuilt: true, featured: true, agentId: "a12" },
  { title: "Charming 3-Bed Terrace in Yaba", description: "Bright, airy terrace close to universities and tech hubs. Family-friendly street.", transaction: "rent", type: "Terrace", price: 4_500_000, priceUnit: "year", state: "Lagos", city: "Yaba", area: "Onike", address: "14 Onike Rd, Yaba", bedrooms: 3, bathrooms: 3, toilets: 4, sqm: 165, images: [IMG.terraceA, IMG.duplexA, IMG.modernD], furnished: false, parking: true, pool: false, newlyBuilt: false, featured: false, agentId: "a15" },
  { title: "Elegant 4-Bed Semi-Detached, Jabi", description: "Two-storey semi-detached with rooftop lounge overlooking Jabi Lake.", transaction: "buy", type: "Semi-Detached", price: 210_000_000, state: "FCT Abuja", city: "Jabi", area: "Jabi Lake", address: "9 Lakeside Cres, Jabi", bedrooms: 4, bathrooms: 5, toilets: 5, sqm: 340, images: [IMG.duplexC, IMG.duplexB, IMG.modernA], furnished: false, parking: true, pool: false, newlyBuilt: true, featured: true, agentId: "a2" },
  { title: "Luxury Penthouse, Trans Amadi", description: "Two-floor penthouse with private terrace, jacuzzi, and full skyline of PH.", transaction: "buy", type: "Penthouse", price: 380_000_000, state: "Rivers", city: "Old GRA", area: "Trans Amadi", address: "3 Amadi Cres, PH", bedrooms: 4, bathrooms: 5, toilets: 5, sqm: 460, images: [IMG.penthouseA, IMG.modernC, IMG.villaA], furnished: true, parking: true, pool: true, newlyBuilt: true, featured: true, agentId: "a4" },
  { title: "Family Bungalow in Independence Layout", description: "Spacious 3-bed bungalow with fruit trees and standby generator.", transaction: "buy", type: "Bungalow", price: 95_000_000, state: "Enugu", city: "Independence Layout", area: "Phase 1", address: "8 Palm Ave, Enugu", bedrooms: 3, bathrooms: 3, toilets: 4, sqm: 260, images: [IMG.bungalowA, IMG.villaC, IMG.duplexA], furnished: false, parking: true, pool: false, newlyBuilt: false, featured: false, agentId: "a7" },
  { title: "Furnished 2-Bed Apartment, Bodija", description: "Bright, fully furnished 2-bedroom flat close to schools and markets.", transaction: "rent", type: "Apartment", price: 2_800_000, priceUnit: "year", state: "Oyo", city: "Bodija", area: "New Bodija", address: "6 Awolowo Ave, Bodija", bedrooms: 2, bathrooms: 2, toilets: 2, sqm: 110, images: [IMG.aptB, IMG.modernB, IMG.terraceA], furnished: true, parking: true, pool: false, newlyBuilt: false, featured: false, agentId: "a8" },
  { title: "Corner Shop, Nassarawa GRA", description: "Prime commercial shop on busy street with heavy foot traffic.", transaction: "commercial", type: "Shop", price: 6_500_000, priceUnit: "year", state: "Kano", city: "Nassarawa GRA", area: "Zoo Rd", address: "Zoo Rd, Nassarawa GRA", bedrooms: 0, bathrooms: 1, toilets: 1, sqm: 80, images: [IMG.shopA, IMG.officeA], furnished: false, parking: false, pool: false, newlyBuilt: false, featured: false, agentId: "a6" },
  { title: "Sky-view 2-Bed Apartment, Ajah", description: "New-build 2-bed with sea breeze, pool, and gym on-site.", transaction: "buy", type: "Apartment", price: 78_000_000, state: "Lagos", city: "Ajah", area: "Sangotedo", address: "Sangotedo, Ajah", bedrooms: 2, bathrooms: 3, toilets: 3, sqm: 140, images: [IMG.aptC, IMG.modernD, IMG.aptA], furnished: false, parking: true, pool: true, newlyBuilt: true, featured: true, agentId: "a5" },
  { title: "Warehouse, Amuwo Odofin", description: "5,000 sqm industrial warehouse with loading dock and container yard.", transaction: "commercial", type: "Warehouse", price: 120_000_000, priceUnit: "year", state: "Lagos", city: "Ikeja GRA", area: "Amuwo Odofin", address: "Amuwo Odofin Industrial Ln", bedrooms: 0, bathrooms: 2, toilets: 2, sqm: 5000, images: [IMG.warehouseA, IMG.officeB], furnished: false, parking: true, pool: false, newlyBuilt: false, featured: false, agentId: "a12" },
  { title: "Furnished Short-let, Lekki Phase 1", description: "Modern 2-bed short-let apartment steps from the beach and top restaurants.", transaction: "short-let", type: "Apartment", price: 85_000, priceUnit: "night", state: "Lagos", city: "Lekki", area: "Lekki Phase 1", address: "22 Admiralty Way, Lekki", bedrooms: 2, bathrooms: 2, toilets: 2, sqm: 130, images: [IMG.modernA, IMG.aptA, IMG.aptC], furnished: true, parking: true, pool: true, newlyBuilt: true, featured: true, agentId: "a5" },
  { title: "6-Bed Mansion, Asokoro", description: "Ambassadorial-grade mansion on 2,000 sqm land with pool, cinema and helipad-ready roof.", transaction: "buy", type: "Detached House", price: 1_400_000_000, state: "FCT Abuja", city: "Asokoro", area: "Asokoro District", address: "1 Ambassadorial Cres, Asokoro", bedrooms: 6, bathrooms: 7, toilets: 8, sqm: 950, images: [IMG.villaA, IMG.villaB, IMG.penthouseA], furnished: true, parking: true, pool: true, newlyBuilt: false, featured: true, agentId: "a2" },
  { title: "Farmland, Ibadan Outskirts", description: "20 acres of loamy farmland, 40 min drive from Ibadan. Ideal for agri-investment.", transaction: "land", type: "Land", price: 60_000_000, state: "Oyo", city: "Bodija", area: "Oluyole Ext", address: "Oluyole Extension, Ibadan", bedrooms: 0, bathrooms: 0, toilets: 0, sqm: 80000, images: [IMG.landB, IMG.landA], furnished: false, parking: false, pool: false, newlyBuilt: false, featured: false, agentId: "a8" },
  { title: "Boutique 1-Bed Studio, Wuse 2", description: "Chic studio apartment in a boutique block, popular with young professionals.", transaction: "rent", type: "Studio", price: 1_800_000, priceUnit: "year", state: "FCT Abuja", city: "Wuse 2", area: "Aguiyi Ironsi", address: "Aguiyi Ironsi, Wuse 2", bedrooms: 1, bathrooms: 1, toilets: 1, sqm: 60, images: [IMG.studioA, IMG.aptB], furnished: true, parking: true, pool: false, newlyBuilt: true, featured: false, agentId: "a11" },
  { title: "5-Bed Duplex, Malali GRA", description: "Family duplex on quiet street with mature garden, boys quarter and generator house.", transaction: "buy", type: "Duplex", price: 175_000_000, state: "Kaduna", city: "Malali", area: "Malali GRA", address: "12 Malali Rd, Kaduna", bedrooms: 5, bathrooms: 5, toilets: 6, sqm: 480, images: [IMG.duplexB, IMG.duplexC, IMG.modernA], furnished: false, parking: true, pool: false, newlyBuilt: false, featured: false, agentId: "a6" },
  { title: "Modern 4-Bed Terrace, New GRA", description: "Terrace with rooftop lounge and open-plan kitchen. Family-friendly community.", transaction: "buy", type: "Terrace", price: 155_000_000, state: "Rivers", city: "New GRA", area: "Governors Cres", address: "9 Governors Cres, PH", bedrooms: 4, bathrooms: 4, toilets: 5, sqm: 300, images: [IMG.terraceA, IMG.duplexA, IMG.modernC], furnished: false, parking: true, pool: false, newlyBuilt: true, featured: false, agentId: "a4" },
  { title: "Executive Office Suite, Bodija", description: "Fully furnished executive office with meeting room and reception area.", transaction: "commercial", type: "Office Space", price: 8_500_000, priceUnit: "year", state: "Oyo", city: "Bodija", area: "Awolowo Ave", address: "Awolowo Ave, Bodija", bedrooms: 0, bathrooms: 2, toilets: 2, sqm: 150, images: [IMG.officeB, IMG.officeA], furnished: true, parking: true, pool: false, newlyBuilt: false, featured: false, agentId: "a8" },
  { title: "3-Bed Family Home, Trans-Ekulu", description: "Move-in-ready family home with garden and staff room.", transaction: "buy", type: "Bungalow", price: 68_000_000, state: "Enugu", city: "Trans-Ekulu", area: "Zone 3", address: "Zone 3, Trans-Ekulu", bedrooms: 3, bathrooms: 3, toilets: 3, sqm: 220, images: [IMG.bungalowA, IMG.villaC], furnished: false, parking: true, pool: false, newlyBuilt: false, featured: false, agentId: "a7" },
  { title: "Furnished Penthouse Short-let, VI", description: "Ultra-luxury 3-bed penthouse for short stays — cinema, pool, chef on request.", transaction: "short-let", type: "Penthouse", price: 250_000, priceUnit: "night", state: "Lagos", city: "Victoria Island", area: "Ozumba Mbadiwe", address: "Ozumba Mbadiwe, VI", bedrooms: 3, bathrooms: 4, toilets: 4, sqm: 380, images: [IMG.penthouseA, IMG.modernA, IMG.villaA], furnished: true, parking: true, pool: true, newlyBuilt: true, featured: true, agentId: "a1" },
  { title: "Plot of Land, Katampe Ext", description: "600 sqm residential plot on tarred road. C of O available.", transaction: "land", type: "Land", price: 55_000_000, state: "FCT Abuja", city: "Katampe", area: "Katampe Extension", address: "Katampe Ext, Abuja", bedrooms: 0, bathrooms: 0, toilets: 0, sqm: 600, images: [IMG.landA], furnished: false, parking: false, pool: false, newlyBuilt: false, featured: false, agentId: "a10" },
  { title: "Contemporary 4-Bed Duplex, Magodo", description: "Contemporary duplex with smart-home wiring, solar backup, and family lounge.", transaction: "buy", type: "Duplex", price: 195_000_000, state: "Lagos", city: "Magodo", area: "Phase 2", address: "Phase 2, Magodo GRA", bedrooms: 4, bathrooms: 5, toilets: 5, sqm: 360, images: [IMG.duplexA, IMG.modernB, IMG.duplexC], furnished: false, parking: true, pool: false, newlyBuilt: true, featured: true, agentId: "a15" },
  { title: "Serviced 3-Bed Flat, Surulere", description: "Serviced apartment with 24/7 power, water, and secure parking.", transaction: "rent", type: "Apartment", price: 3_800_000, priceUnit: "year", state: "Lagos", city: "Surulere", area: "Bode Thomas", address: "Bode Thomas, Surulere", bedrooms: 3, bathrooms: 3, toilets: 3, sqm: 145, images: [IMG.aptA, IMG.aptC, IMG.modernD], furnished: false, parking: true, pool: false, newlyBuilt: false, featured: false, agentId: "a15" },
  { title: "Compact Studio, Ikeja GRA", description: "Well-lit studio close to airport road. Perfect for singles or expats.", transaction: "rent", type: "Studio", price: 1_500_000, priceUnit: "year", state: "Lagos", city: "Ikeja GRA", area: "Ikeja GRA", address: "GRA, Ikeja", bedrooms: 1, bathrooms: 1, toilets: 1, sqm: 45, images: [IMG.studioA, IMG.aptB], furnished: true, parking: true, pool: false, newlyBuilt: false, featured: false, agentId: "a15" },
  { title: "5-Bed Detached, Iyaganku", description: "Historic Iyaganku detached home renovated with modern finishes.", transaction: "buy", type: "Detached House", price: 220_000_000, state: "Oyo", city: "Bodija", area: "Iyaganku GRA", address: "Iyaganku GRA, Ibadan", bedrooms: 5, bathrooms: 5, toilets: 6, sqm: 520, images: [IMG.villaC, IMG.villaB, IMG.duplexA], furnished: false, parking: true, pool: true, newlyBuilt: false, featured: false, agentId: "a8" },
  { title: "Newly-built 2-Bed Apartment, Woji", description: "Modern 2-bed apartment with rooftop terrace and shared pool.", transaction: "buy", type: "Apartment", price: 62_000_000, state: "Rivers", city: "Woji", area: "Woji Rd", address: "Woji Rd, PH", bedrooms: 2, bathrooms: 3, toilets: 3, sqm: 120, images: [IMG.aptC, IMG.modernC, IMG.aptA], furnished: false, parking: true, pool: true, newlyBuilt: true, featured: false, agentId: "a4" },
  { title: "Charming 2-Bed Bungalow, Barnawa", description: "Well-priced 2-bed bungalow with garden, ideal starter home.", transaction: "buy", type: "Bungalow", price: 42_000_000, state: "Kaduna", city: "Barnawa", area: "Barnawa Low-cost", address: "Barnawa Low-cost, Kaduna", bedrooms: 2, bathrooms: 2, toilets: 2, sqm: 160, images: [IMG.bungalowA, IMG.terraceA], furnished: false, parking: true, pool: false, newlyBuilt: false, featured: false, agentId: "a6" },
];

function coordsFor(state: string) {
  const base: Record<string, { lat: number; lng: number }> = {
    Lagos: { lat: 6.5244, lng: 3.3792 },
    "FCT Abuja": { lat: 9.0765, lng: 7.3986 },
    Rivers: { lat: 4.8156, lng: 7.0498 },
    Kano: { lat: 12.0022, lng: 8.5919 },
    Enugu: { lat: 6.5244, lng: 7.5086 },
    Oyo: { lat: 7.3775, lng: 3.947 },
    Kaduna: { lat: 10.5222, lng: 7.4383 },
    Edo: { lat: 6.335, lng: 5.6037 },
  };
  const b = base[state] ?? { lat: 9.0, lng: 8.0 };
  return { lat: b.lat + (Math.random() - 0.5) * 0.05, lng: b.lng + (Math.random() - 0.5) * 0.05 };
}

export const PROPERTIES: Property[] = RAW.map((r, i) => ({
  ...r,
  id: `p${i + 1}`,
  slug: `${slug(r.title)}-${i + 1}`,
  amenities: pickAmen(i + 3, 6 + (i % 3)),
  features: [`${r.bedrooms || 0} bed`, `${r.bathrooms || 0} bath`, `${r.sqm.toLocaleString()} sqm`, r.newlyBuilt ? "Newly built" : "Well maintained"],
  status: "active",
  verified: i % 4 !== 3,
  views: 200 + ((i * 137) % 1500),
  createdAt: new Date(Date.now() - i * 86400000 * 3).toISOString(),
  coords: coordsFor(r.state),
}));

export const featuredProperties = () => PROPERTIES.filter((p) => p.featured);

export function propertyById(id: string) {
  return PROPERTIES.find((p) => p.id === id || p.slug === id);
}

export function similarProperties(p: Property, n = 4) {
  return PROPERTIES.filter((x) => x.id !== p.id && (x.city === p.city || x.transaction === p.transaction)).slice(0, n);
}

export const CATEGORIES = [
  { key: "buy" as const, label: "For Sale", icon: "🏡", desc: "Own your next home" },
  { key: "rent" as const, label: "For Rent", icon: "🔑", desc: "Yearly rentals" },
  { key: "short-let" as const, label: "Short-let", icon: "🛎️", desc: "Daily & weekly stays" },
  { key: "commercial" as const, label: "Commercial", icon: "🏢", desc: "Offices, shops, warehouses" },
  { key: "land" as const, label: "Land", icon: "🌾", desc: "Plots & farmland" },
];