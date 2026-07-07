"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { PROPERTIES } from "@/lib/mock/properties";
import { PropertyCard } from "@/components/property/PropertyCard";
import {
  FilterPanel,
  filterProperties,
  type Filters,
} from "@/components/search/FilterPanel";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { EmptyState } from "@/components/common/EmptyState";
import { PropertyGridSkeleton } from "@/components/common/PropertySkeleton";
import { SearchIcon, SlidersHorizontal, MapPin, X, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";

type SortOption = "newest" | "price-asc" | "price-desc";
type BrowseSearch = Filters & { sort?: SortOption };

function parseSearchParams(searchParams: URLSearchParams): BrowseSearch {
  const parsed: BrowseSearch = {};

  const tx = searchParams.get("tx");
  if (tx && ["buy", "rent", "short-let", "commercial", "land"].includes(tx)) {
    parsed.tx = tx as BrowseSearch["tx"];
  }

  const state = searchParams.get("state");
  if (state) parsed.state = state;

  const city = searchParams.get("city");
  if (city) parsed.city = city;

  const type = searchParams.get("type");
  if (type) parsed.type = type as Filters["type"];

  const q = searchParams.get("q");
  if (q) parsed.q = q;

  const minPrice = searchParams.get("minPrice");
  if (minPrice) parsed.minPrice = Number(minPrice);

  const maxPrice = searchParams.get("maxPrice");
  if (maxPrice) parsed.maxPrice = Number(maxPrice);

  const beds = searchParams.get("beds");
  if (beds) parsed.beds = Number(beds);

  const baths = searchParams.get("baths");
  if (baths) parsed.baths = Number(baths);

  const furnished = searchParams.get("furnished");
  if (furnished === "true") parsed.furnished = true;

  const parking = searchParams.get("parking");
  if (parking === "true") parsed.parking = true;

  const pool = searchParams.get("pool");
  if (pool === "true") parsed.pool = true;

  const newlyBuilt = searchParams.get("newlyBuilt");
  if (newlyBuilt === "true") parsed.newlyBuilt = true;

  const sort = searchParams.get("sort");
  if (sort === "newest" || sort === "price-asc" || sort === "price-desc") {
    parsed.sort = sort;
  }

  return parsed;
}

function buildQueryString(filters: BrowseSearch) {
  const params = new URLSearchParams();

  if (filters.tx) params.set("tx", filters.tx);
  if (filters.state) params.set("state", filters.state);
  if (filters.city) params.set("city", filters.city);
  if (filters.type) params.set("type", filters.type);
  if (filters.q) params.set("q", filters.q);

  if (filters.minPrice !== undefined)
    params.set("minPrice", String(filters.minPrice));

  if (filters.maxPrice !== undefined)
    params.set("maxPrice", String(filters.maxPrice));

  if (filters.beds !== undefined) params.set("beds", String(filters.beds));

  if (filters.baths !== undefined) params.set("baths", String(filters.baths));

  if (filters.furnished) params.set("furnished", "true");

  if (filters.parking) params.set("parking", "true");

  if (filters.pool) params.set("pool", "true");

  if (filters.newlyBuilt) params.set("newlyBuilt", "true");

  if (filters.sort && filters.sort !== "newest")
    params.set("sort", filters.sort);

  return params.toString();
}

export default function Browse() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const search = useMemo(() => parseSearchParams(searchParams), [searchParams]);

  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState<BrowseSearch>(search);

  // Keep local state synced with the URL
  useEffect(() => {
    setFilters(search);
  }, [search]);

  // Simulate loading while filters change
  useEffect(() => {
    setLoading(true);

    const timer = window.setTimeout(() => {
      setLoading(false);
    }, 350);

    return () => window.clearTimeout(timer);
  }, [filters]);

  const results = useMemo(() => {
    let list = filterProperties(PROPERTIES, filters);

    switch (filters.sort) {
      case "price-asc":
        list = [...list].sort((a, b) => a.price - b.price);
        break;

      case "price-desc":
        list = [...list].sort((a, b) => b.price - a.price);
        break;

      default:
        list = [...list].sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1));
    }

    return list;
  }, [filters]);

  const updateUrl = (next: BrowseSearch) => {
    const params = buildQueryString(next);

    router.replace(params ? `${pathname}?${params}` : pathname, {
      scroll: false,
    });
  };

  const apply = (f: Filters) => {
    const next: BrowseSearch = {
      ...filters,
      ...f,
      sort: filters.sort,
    };

    setFilters(next);
    updateUrl(next);
  };

  const clear = () => {
    const next: BrowseSearch = {};

    setFilters(next);
    router.replace(pathname, {
      scroll: false,
    });
  };

  const activeChips = Object.entries(filters).filter(
    ([k, v]) => v !== undefined && v !== "" && k !== "q",
  );

  return (
    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:py-10">
      <div className="flex flex-wrap items-center gap-2 rounded-3xl border border-border bg-card p-2 shadow-soft">
        <div className="relative min-w-[220px] flex-1">
          <SearchIcon className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

          <Input
            defaultValue={filters.q ?? ""}
            placeholder="Search area, city, or property"
            className="h-11 rounded-2xl border-0 bg-muted pl-9"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                apply({
                  ...filters,
                  q: (e.target as HTMLInputElement).value,
                });
              }
            }}
            onBlur={(e) =>
              apply({
                ...filters,
                q: e.target.value || undefined,
              })
            }
          />
        </div>

        <Select
          value={filters.sort ?? "newest"}
          onValueChange={(v) => {
            const next: BrowseSearch = {
              ...filters,
              sort: v as SortOption,
            };

            setFilters(next);
            updateUrl(next);
          }}
        >
          <SelectTrigger className="h-11 w-[160px] rounded-2xl border-0 bg-muted">
            <SelectValue />
          </SelectTrigger>

          <SelectContent>
            <SelectItem value="newest">Newest first</SelectItem>

            <SelectItem value="price-asc">Price: low to high</SelectItem>

            <SelectItem value="price-desc">Price: high to low</SelectItem>
          </SelectContent>
        </Select>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" className="h-11 rounded-2xl lg:hidden">
              <SlidersHorizontal className="mr-1.5 h-4 w-4" />
              Filters
            </Button>
          </SheetTrigger>

          <SheetContent
            side="right"
            className="w-[92vw] max-w-sm overflow-y-auto"
          >
            <SheetHeader>
              <SheetTitle>Filters</SheetTitle>
            </SheetHeader>

            <div className="mt-4">
              <FilterPanel value={filters} onChange={apply} onClear={clear} />
            </div>
          </SheetContent>
        </Sheet>
      </div>

      {activeChips.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-2">
          {activeChips.map(([k, v]) => (
            <Badge
              key={k}
              variant="secondary"
              className="rounded-full px-3 py-1 text-xs"
            >
              {k}: {String(v)}
              <button
                className="ml-2"
                aria-label={`Clear ${k}`}
                onClick={() =>
                  apply({
                    ...filters,
                    [k]: undefined,
                  } as Filters)
                }
              >
                <X className="h-3 w-3" />
              </button>
            </Badge>
          ))}

          <button
            className="text-xs font-medium text-primary hover:underline"
            onClick={clear}
          >
            Clear all
          </button>
        </div>
      )}

      <div className="mt-6 grid gap-6 lg:grid-cols-[280px_1fr]">
        <aside className="hidden lg:block">
          <div className="sticky top-24 rounded border border-border bg-card p-5 shadow-soft">
            <FilterPanel value={filters} onChange={apply} onClear={clear} />
          </div>
        </aside>

        <div>
          <div className="mb-4 flex items-center justify-between">
            <div className="text-sm text-muted-foreground">
              {loading ? (
                "Searching..."
              ) : (
                <>
                  <span className="font-semibold text-foreground">
                    {results.length}
                  </span>{" "}
                  properties
                </>
              )}
            </div>

            <div className="inline-flex items-center gap-1 text-xs text-muted-foreground">
              <MapPin className="h-3 w-3" />
              Across Nigeria
            </div>
          </div>

          {loading ? (
            <PropertyGridSkeleton count={6} />
          ) : results.length === 0 ? (
            <EmptyState
              icon={Search}
              title="No properties match your filters"
              body="Try widening your price range or clearing a filter or two."
              action={
                <Button
                  variant="outline"
                  className="rounded-full"
                  onClick={clear}
                >
                  Reset filters
                </Button>
              }
            />
          ) : (
            <div className="grid animate-fade-in grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {results.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
