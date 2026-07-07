"use client";

import Link from "next/link";
import { PageHeader } from "@/components/common/PageHeader";
import { useFavorites } from "@/lib/store/favorites";
import { useCompare } from "@/lib/store/compare";
import { PROPERTIES } from "@/lib/mock/properties";
import { PropertyCard } from "@/components/property/PropertyCard";
import { EmptyState } from "@/components/common/EmptyState";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Saved() {
  const ids = useFavorites((s) => s.ids);
  const clear = useFavorites((s) => s.clear);
  const cmpIds = useCompare((s) => s.ids);
  const list = PROPERTIES.filter((p) => ids.includes(p.id));

  return (
    <>
      <PageHeader
        title="Saved properties"
        description={`${list.length} saved`}
        action={
          <div className="flex gap-2">
            {cmpIds.length > 0 && (
              <Button asChild variant="outline" className="rounded-full">
                <Link href="/compare">Compare ({cmpIds.length})</Link>
              </Button>
            )}
            {list.length > 0 && (
              <Button variant="ghost" className="rounded-full" onClick={clear}>
                Clear all
              </Button>
            )}
          </div>
        }
      />
      {list.length === 0 ? (
        <EmptyState
          icon={Heart}
          title="No saved properties"
          body="Save homes you love and revisit them any time."
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
