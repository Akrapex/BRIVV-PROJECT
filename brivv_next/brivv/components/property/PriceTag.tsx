import { ngn } from "@/lib/utils/format";
import type { Property } from "@/lib/mock/types";
import { cn } from "@/lib/utils";

export function PriceTag({ property, className, size = "md" }: { property: Property; className?: string; size?: "sm" | "md" | "lg" }) {
  const unit = property.priceUnit === "night" ? "night" : property.priceUnit === "year" ? "yr" : property.priceUnit === "month" ? "mo" : undefined;
  const s = size === "lg" ? "text-2xl" : size === "sm" ? "text-sm" : "text-lg";
  return (
    <div className={cn("font-display font-bold text-foreground", s, className)}>
      {ngn(property.price)}
      {unit && <span className="ml-1 text-xs font-medium text-muted-foreground">/{unit}</span>}
    </div>
  );
}