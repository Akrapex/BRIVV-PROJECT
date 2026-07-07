export function ngn(amount: number, unit?: string) {
  const short = amount >= 1_000_000_000
    ? `₦${(amount / 1_000_000_000).toFixed(amount % 1_000_000_000 ? 2 : 0)}B`
    : amount >= 1_000_000
    ? `₦${(amount / 1_000_000).toFixed(amount % 1_000_000 ? 1 : 0)}M`
    : amount >= 1000
    ? `₦${(amount / 1000).toFixed(0)}k`
    : `₦${amount.toLocaleString()}`;
  return unit ? `${short}/${unit}` : short;
}

export function relTime(iso: string) {
  const d = new Date(iso).getTime();
  const diff = Date.now() - d;
  const m = Math.round(diff / 60_000);
  if (m < 1) return "just now";
  if (m < 60) return `${m}m ago`;
  const h = Math.round(m / 60);
  if (h < 24) return `${h}h ago`;
  const dd = Math.round(h / 24);
  if (dd < 30) return `${dd}d ago`;
  const mo = Math.round(dd / 30);
  if (mo < 12) return `${mo}mo ago`;
  return new Date(iso).toLocaleDateString();
}

export function initials(name: string) {
  return name.split(" ").map((s) => s[0]).slice(0, 2).join("").toUpperCase();
}