import type { AppNotification } from "./types";

export const NOTIFICATIONS: AppNotification[] = [
  { id: "n1", kind: "message", title: "New message from Kemi Adeleke", body: "Sure — I can arrange an inspection this weekend.", at: new Date(Date.now() - 15 * 60_000).toISOString(), read: false },
  { id: "n2", kind: "inspection", title: "Inspection tomorrow", body: "Reminder: 4-Bed Duplex in Lekki at 10:00.", at: new Date(Date.now() - 3 * 3600_000).toISOString(), read: false },
  { id: "n3", kind: "approval", title: "Your listing was approved", body: "'Modern 4-Bed Duplex, Magodo' is now live.", at: new Date(Date.now() - 26 * 3600_000).toISOString(), read: true },
  { id: "n4", kind: "update", title: "Price drop on saved property", body: "3-Bed Apartment in Ikoyi is now ₦16.5M/yr.", at: new Date(Date.now() - 2 * 86400_000).toISOString(), read: true },
  { id: "n5", kind: "account", title: "Two-factor recommended", body: "Add SMS 2FA to your account for extra security.", at: new Date(Date.now() - 5 * 86400_000).toISOString(), read: true },
];