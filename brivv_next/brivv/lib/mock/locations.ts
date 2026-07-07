export const NIGERIA_LOCATIONS: Record<string, string[]> = {
  "FCT Abuja": ["Maitama", "Asokoro", "Wuse 2", "Gwarinpa", "Jabi", "Katampe", "Lokogoma", "Lugbe"],
  Lagos: ["Ikoyi", "Victoria Island", "Lekki", "Ajah", "Ikeja GRA", "Yaba", "Surulere", "Magodo"],
  "Rivers": ["Old GRA", "New GRA", "Trans Amadi", "Woji", "Rumuola", "Elelenwo"],
  Kano: ["Nassarawa GRA", "Bompai", "Fagge", "Hotoro"],
  Enugu: ["Independence Layout", "GRA", "New Haven", "Trans-Ekulu"],
  Oyo: ["Bodija", "Jericho", "Iyaganku", "Agodi", "Oluyole"],
  Kaduna: ["Malali", "Barnawa", "Ungwan Rimi", "Kawo"],
  Edo: ["GRA", "Ugbowo", "Sapele Road"],
};

export const STATES = Object.keys(NIGERIA_LOCATIONS);

export function citiesFor(state?: string): string[] {
  if (!state || !NIGERIA_LOCATIONS[state]) return [];
  return NIGERIA_LOCATIONS[state];
}

export const POPULAR_LOCATIONS = [
  { state: "Lagos", city: "Lekki", count: 128, image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80" },
  { state: "FCT Abuja", city: "Maitama", count: 87, image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80" },
  { state: "Lagos", city: "Ikoyi", count: 92, image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80" },
  { state: "Rivers", city: "Old GRA", count: 54, image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80" },
  { state: "Oyo", city: "Bodija", count: 41, image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&q=80" },
  { state: "Enugu", city: "Independence Layout", count: 33, image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&q=80" },
];