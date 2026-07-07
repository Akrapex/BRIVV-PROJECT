import Link from "next/link";
import { Bath, BedDouble, MapPin, Ruler, ShieldCheck } from "lucide-react";
import type { Property } from "@/lib/mock/types";
import { Badge } from "@/components/ui/badge";
import { SaveButton } from "./SaveButton";
import { PriceTag } from "./PriceTag";
import { cn } from "@/lib/utils";

export function PropertyCard({
  property,
  className,
  span,
}: {
  property: Property;
  className?: string;
  span?: "sm" | "md" | "lg" | "xl";
}) {
  const height =
    span === "xl"
      ? "aspect-[16/11]"
      : span === "lg"
        ? "aspect-[4/3]"
        : span === "sm"
          ? "aspect-[5/4]"
          : "aspect-[4/3]";
  return (
    <Link
      href={`/browse/${property.slug}`}
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition-all hover:-translate-y-1 hover:shadow-lift focus:outline-none focus:ring-2 focus:ring-ring",
        className,
      )}
    >
      <div className={cn("relative overflow-hidden bg-muted", height)}>
        <img
          src={property.images[0]}
          alt={property.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        <div className="absolute left-3 top-3 flex flex-wrap items-center gap-1.5">
          <Badge className="bg-background/90 text-foreground backdrop-blur border-transparent capitalize">
            {property.transaction === "short-let"
              ? "Short-let"
              : property.transaction}
          </Badge>
          {property.newlyBuilt && (
            <Badge className="bg-primary/95 text-primary-foreground border-transparent">
              New
            </Badge>
          )}
          {property.verified && (
            <Badge className="bg-brand-deep/95 text-primary-foreground border-transparent">
              <ShieldCheck className="mr-1 h-3 w-3" /> Verified
            </Badge>
          )}
        </div>
        <div className="absolute right-3 top-3">
          <SaveButton id={property.id} />
        </div>
      </div>
      <div className="flex flex-1 flex-col p-4">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display line-clamp-1 font-semibold">
            {property.title}
          </h3>
        </div>
        <div className="mt-1 flex items-center gap-1 text-xs text-muted-foreground">
          <MapPin className="h-3 w-3 shrink-0" />
          <span className="truncate">
            {property.area}, {property.city}, {property.state}
          </span>
        </div>
        <div className="mt-3 flex items-center justify-between">
          <PriceTag property={property} />
        </div>
        <div className="mt-3 flex items-center gap-3 border-t border-border/60 pt-3 text-xs text-muted-foreground">
          {property.bedrooms > 0 && (
            <span className="inline-flex items-center gap-1">
              <BedDouble className="h-3.5 w-3.5" /> {property.bedrooms}
            </span>
          )}
          {property.bathrooms > 0 && (
            <span className="inline-flex items-center gap-1">
              <Bath className="h-3.5 w-3.5" /> {property.bathrooms}
            </span>
          )}
          <span className="inline-flex items-center gap-1">
            <Ruler className="h-3.5 w-3.5" /> {property.sqm.toLocaleString()}{" "}
            sqm
          </span>
        </div>
      </div>
    </Link>
  );
}
