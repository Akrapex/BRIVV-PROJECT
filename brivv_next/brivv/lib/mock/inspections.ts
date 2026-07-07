import type { Inspection } from "./types";
import { PROPERTIES } from "./properties";

export const INSPECTIONS: Inspection[] = PROPERTIES.slice(0, 6).map((p, i) => ({
  id: `i${i + 1}`,
  propertyId: p.id,
  userId: "u_demo",
  agentId: p.agentId,
  date: new Date(Date.now() + (i - 1) * 86400000 * 2).toISOString().slice(0, 10),
  time: ["10:00","12:30","15:00","09:00","16:30","11:00"][i],
  status: (["confirmed","pending","confirmed","completed","pending","confirmed"] as const)[i],
  note: i === 0 ? "Bring ID card." : undefined,
}));