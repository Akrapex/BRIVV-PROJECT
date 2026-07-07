import { CheckCircle2 } from "lucide-react";

export function AmenitiesGrid({ items }: { items: string[] }) {
  return (
    <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((a) => (
        <li key={a} className="flex items-center gap-2  bg-card px-3 py-2 text-sm">
          <CheckCircle2 className="h-4 w-4 text-primary" /> {a}
        </li>
      ))}
    </ul>
  );
}