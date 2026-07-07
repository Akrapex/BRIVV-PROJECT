"use client";

import Link from "next/link";
import { PageHeader } from "@/components/common/PageHeader";
import { useRecentlyViewed } from "@/lib/store/recentlyViewed";
import { PROPERTIES } from "@/lib/mock/properties";
import { PropertyCard } from "@/components/property/PropertyCard";
import { EmptyState } from "@/components/common/EmptyState";
import { Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Viewed() {
  const ids = useRecentlyViewed((s) => s.ids);
  const clear = useRecentlyViewed((s) => s.clear);
  const list = ids
    .map((id) => PROPERTIES.find((p) => p.id === id))
    .filter(Boolean) as any[];

  return (
    <>
      <PageHeader
        title="Recently viewed"
        description={`${list.length} properties`}
        action={
          list.length > 0 ? (
            <Button variant="ghost" className="rounded-full" onClick={clear}>
              Clear history
            </Button>
          ) : undefined
        }
      />
      {list.length === 0 ? (
        <EmptyState
          icon={Clock}
          title="Nothing viewed yet"
          action={
            <Button asChild className="rounded-md py-6 px-4 font-semibold">
              <Link href="/browse">Browse properties</Link>
            </Button>
          }
        />
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {list.map((p) => (
            <PropertyCard key={p.id} property={p} />
          ))}
        </div>
      )}
    </>
  );
}
