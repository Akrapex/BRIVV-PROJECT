import type { AppUser } from "./types";
const AV = (s: string) => `https://i.pravatar.cc/200?u=${s}`;
const NAMES = [
  "Aisha Bello","Chidi Okoye","Blessing Nnamdi","Ibrahim Musa","Grace Adeyemi",
  "Tobi Lawal","Amaka Uzo","Yemi Balogun","Rita Onah","Femi Ade",
  "Zainab Suleiman","Kunle Ojo","Uche Ike","Peace Ekong","Sadiq Umar",
  "Nkechi Obi","Bola Ige","Hauwa Kabir","Deji Ola","Ndidi Nkem",
];
export const USERS: AppUser[] = NAMES.map((name, i) => ({
  id: `u${i + 1}`,
  name,
  email: name.toLowerCase().replace(/\s+/g, ".") + "@example.com",
  avatar: AV(`u${i + 1}`),
  role: i < 12 ? "seeker" : i < 16 ? "owner" : i < 19 ? "agent" : "admin",
  phone: `+23480${(10000000 + i * 1234567).toString().slice(0, 8)}`,
  location: ["Lagos","Abuja","Port Harcourt","Enugu","Ibadan","Kano"][i % 6],
  joined: new Date(Date.now() - i * 86400000 * 20).toISOString(),
}));

export const DEMO_USER: AppUser = {
  id: "u_demo",
  name: "Ada Nwosu",
  email: "ada@akrapex.ng",
  avatar: AV("demo"),
  role: "seeker",
  phone: "+2348012345000",
  location: "Lagos",
  joined: new Date().toISOString(),
};