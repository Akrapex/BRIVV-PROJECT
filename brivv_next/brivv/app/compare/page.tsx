"use client"
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/common/PageHeader";
import { useCompare } from "@/lib/store/compare";
import { PROPERTIES } from "@/lib/mock/properties";
import { EmptyState } from "@/components/common/EmptyState";
import { GitCompareArrows, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ngn } from "@/lib/utils/format";
import Link from "next/link"



export default function Compare() {
  const ids = useCompare((s) => s.ids);
  const toggle = useCompare((s) => s.toggle);
  const clear = useCompare((s) => s.clear);
  const items = PROPERTIES.filter((p) => ids.includes(p.id));

  const rows: { label: string; get: (p: any) => any }[] = [
    { label: "Price", get: (p) => ngn(p.price, p.priceUnit) },
    { label: "Type", get: (p) => p.type },
    { label: "Transaction", get: (p) => p.transaction },
    { label: "Bedrooms", get: (p) => p.bedrooms || "—" },
    { label: "Bathrooms", get: (p) => p.bathrooms || "—" },
    { label: "Size", get: (p) => `${p.sqm.toLocaleString()} sqm` },
    { label: "Location", get: (p) => `${p.area}, ${p.city}` },
    { label: "Furnished", get: (p) => (p.furnished ? "Yes" : "No") },
    { label: "Parking", get: (p) => (p.parking ? "Yes" : "No") },
    { label: "Pool", get: (p) => (p.pool ? "Yes" : "No") },
    { label: "Newly built", get: (p) => (p.newlyBuilt ? "Yes" : "No") },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <div className="mx-auto w-full max-w-7xl flex-1 px-4 py-10 sm:px-6">
        <PageHeader
          title="Compare properties"
          description={`Compare up to 4 side by side. (${items.length}/4)`}
          action={
            items.length > 0 ? (
              <Button variant="ghost" className="rounded-full" onClick={clear}>
                Clear all
              </Button>
            ) : undefined
          }
        />

        {items.length === 0 ? (
          <EmptyState
            icon={GitCompareArrows}
            title="Nothing to compare"
            body="Add properties to your comparison from any listing."
            action={
              <Button asChild className="rounded-full">
                <Link href="/browse">Browse properties</Link>
              </Button>
            }
          />
        ) : (
          <div className="overflow-x-auto rounded-3xl border border-border bg-card shadow-soft">
            <div
              className="grid"
              style={{
                gridTemplateColumns: `160px repeat(${items.length}, minmax(220px, 1fr))`,
              }}
            >
              <div className="border-b border-r border-border p-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Property
              </div>
              {items.map((p) => (
                <div key={p.id} className="relative border-b border-border p-4">
                  <button
                    onClick={() => toggle(p.id)}
                    className="absolute right-2 top-2 grid h-7 w-7 place-items-center rounded-full bg-muted hover:bg-destructive hover:text-destructive-foreground"
                    aria-label="Remove"
                  >
                    <X className="h-3.5 w-3.5" />
                  </button>
                  <Link href={`/browse/${p.id}`}>
                    <img
                      src={p.images[0]}
                      alt=""
                      className="aspect-4/3 w-full rounded-xl object-cover"
                    />
                    <div className="mt-2 line-clamp-2 text-sm font-semibold hover:text-primary">
                      {p.title}
                    </div>
                  </Link>
                </div>
              ))}
              {rows.map((r, idx) => (
                <>
                  <div
                    key={`l-${idx}`}
                    className={
                      "border-r border-border p-3 text-xs font-medium text-muted-foreground " +
                      (idx < rows.length - 1 ? "border-b" : "")
                    }
                  >
                    {r.label}
                  </div>
                  {items.map((p) => (
                    <div
                      key={`${idx}-${p.id}`}
                      className={
                        "p-3 text-sm " +
                        (idx < rows.length - 1 ? "border-b border-border" : "")
                      }
                    >
                      {r.get(p)}
                    </div>
                  ))}
                </>
              ))}
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
