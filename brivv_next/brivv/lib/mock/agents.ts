import type { Agent } from "./types";

const AV = (seed: string) => `https://i.pravatar.cc/200?u=${seed}`;

export const AGENTS: Agent[] = [
  { id: "a1", name: "Adaeze Okafor", agency: "Okafor & Sons Realty", avatar: AV("a1"), rating: 4.9, reviews: 128, phone: "+2348012345678", email: "adaeze@akrapex.ng", bio: "Luxury properties across Lagos Island for 8+ years.", verified: true, listings: 24 },
  { id: "a2", name: "Chinedu Balogun", agency: "Balogun Properties", avatar: AV("a2"), rating: 4.7, reviews: 96, phone: "+2348023456781", email: "chinedu@akrapex.ng", bio: "Abuja specialist. Off-plan and ready-to-move.", verified: true, listings: 31 },
  { id: "a3", name: "Fatima Yusuf", agency: "Yusuf Realty", avatar: AV("a3"), rating: 4.8, reviews: 74, phone: "+2348034567812", email: "fatima@akrapex.ng", bio: "Northern Nigeria residential expert.", verified: true, listings: 18 },
  { id: "a4", name: "Emeka Nwosu", agency: "GreenBrick Homes", avatar: AV("a4"), rating: 4.6, reviews: 52, phone: "+2348045678123", email: "emeka@akrapex.ng", bio: "Port Harcourt residential and commercial.", verified: true, listings: 22 },
  { id: "a5", name: "Kemi Adeleke", agency: "Adeleke Estates", avatar: AV("a5"), rating: 4.9, reviews: 210, phone: "+2348056781234", email: "kemi@akrapex.ng", bio: "Lekki & Ajah premium homes.", verified: true, listings: 40 },
  { id: "a6", name: "Yakubu Bala", agency: "Bala Real Estate", avatar: AV("a6"), rating: 4.5, reviews: 38, phone: "+2348067812345", email: "yakubu@akrapex.ng", bio: "Kaduna and Kano commercial specialist.", verified: false, listings: 12 },
  { id: "a7", name: "Ngozi Eze", agency: "Eze Property Group", avatar: AV("a7"), rating: 4.8, reviews: 145, phone: "+2348078123456", email: "ngozi@akrapex.ng", bio: "Enugu heritage homes and family estates.", verified: true, listings: 27 },
  { id: "a8", name: "Tunde Ojo", agency: "Ojo Realty", avatar: AV("a8"), rating: 4.7, reviews: 88, phone: "+2348089123456", email: "tunde@akrapex.ng", bio: "Ibadan and Southwest specialist.", verified: true, listings: 19 },
  { id: "a9", name: "Sarah Ibrahim", agency: "Ibrahim Homes", avatar: AV("a9"), rating: 4.9, reviews: 176, phone: "+2348090123456", email: "sarah@akrapex.ng", bio: "First-time buyer specialist across Nigeria.", verified: true, listings: 33 },
  { id: "a10", name: "Chukwuma Obi", agency: "Obi Properties", avatar: AV("a10"), rating: 4.4, reviews: 29, phone: "+2348101234567", email: "chukwuma@akrapex.ng", bio: "Investment properties and land.", verified: true, listings: 16 },
  { id: "a11", name: "Halima Sule", agency: "Sule Realty", avatar: AV("a11"), rating: 4.6, reviews: 62, phone: "+2348112345678", email: "halima@akrapex.ng", bio: "Abuja short-let and serviced apartments.", verified: true, listings: 21 },
  { id: "a12", name: "David Ade", agency: "Ade & Co", avatar: AV("a12"), rating: 4.8, reviews: 103, phone: "+2348123456789", email: "david@akrapex.ng", bio: "Warehouses and industrial land.", verified: true, listings: 14 },
  { id: "a13", name: "Ifeanyi Uzo", agency: "Uzo Estates", avatar: AV("a13"), rating: 4.5, reviews: 41, phone: "+2348134567890", email: "ifeanyi@akrapex.ng", bio: "PH residential and shortlets.", verified: false, listings: 11 },
  { id: "a14", name: "Maryam Danjuma", agency: "Danjuma Property", avatar: AV("a14"), rating: 4.9, reviews: 158, phone: "+2348145678901", email: "maryam@akrapex.ng", bio: "Luxury duplexes and detached homes.", verified: true, listings: 26 },
  { id: "a15", name: "Segun Adebayo", agency: "Adebayo Realty", avatar: AV("a15"), rating: 4.7, reviews: 79, phone: "+2348156789012", email: "segun@akrapex.ng", bio: "Lagos mainland and family homes.", verified: true, listings: 23 },
];

export function agentById(id: string) {
  return AGENTS.find((a) => a.id === id);
}